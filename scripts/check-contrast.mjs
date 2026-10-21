/**
 * Contraste visual (WCAG 2.2 AA) de la paleta de Umbral.
 * Se ejecuta sin dependencias: pnpm run check:contrast.
 * No reemplaza una auditoría de navegador: verifica tokens, estados clave
 * y previene regresiones en selectores de los botones.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const read = (p) => readFileSync(resolve(import.meta.dirname, '..', p), 'utf8')
const tokens = read('src/styles/tokens.css')
const light = tokens.match(/:root\s*\{([^}]*)\}/)?.[1]
const dark = tokens.match(/\[data-theme='dark'\]\s*\{([^}]*)\}/)?.[1]
if (!light || !dark) throw new Error('No se encontraron las paletas clara y oscura.')

function getToken(block, name) {
  const found = block.match(new RegExp(`(?:^|;)\\s*${name}:\\s*(#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)\\s*(?:;|$)`))
  if (!found) throw new Error(`Token ausente o no hexadecimal: ${name}`)
  return found[1].length === 4 ? "#" + [...found[1].slice(1)].map(c => c + c).join("") : found[1]
}
function channels(hex) {
  return [1, 3, 5].map(i => {
    const s = parseInt(hex.slice(i, i + 2), 16) / 255
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
}
function luminance(hex) {
  const [r, g, b] = channels(hex)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
function contrast(fg, bg) {
  const a = luminance(fg), b = luminance(bg)
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
}
function blend(a, b, alpha) {
  const rgb = [1, 3, 5].map(i => Math.round(parseInt(a.slice(i, i + 2), 16) * alpha + parseInt(b.slice(i, i + 2), 16) * (1 - alpha)))
  return '#' + rgb.map(c => c.toString(16).padStart(2, '0')).join('')
}
const checks = []
for (const [theme, block] of [['claro', light], ['oscuro', dark]]) {
  const test = (name, fg, bg, threshold = 4.5) => {
    const value = contrast(fg.startsWith('--') ? getToken(block, fg) : fg, bg.startsWith('--') ? getToken(block, bg) : bg)
    checks.push({ theme, name, value, threshold })
  }
  test('texto principal', '--color-text', '--color-canvas')
  test('texto secundario', '--color-text-muted', '--color-surface')
  test('texto terciario', '--color-text-faint', '--color-surface')
  test('texto terciario sobre superficie tenue', '--color-text-faint', '--color-surface-subtle')
  test('botón principal', '--color-on-brand', '--color-brand')
  test('botón secundario', '--color-text', '--color-surface')
  test('texto en énfasis verde', '--color-brand-strong', '--color-brand-soft')
  test('estado correcto', '--color-success', '--color-success-soft')
  test('estado atención', '--color-warning', '--color-warning-soft')
  test('estado error', '--color-danger', '--color-danger-soft')
  test('control deshabilitado', '--color-disabled-text', '--color-disabled-surface')
  test('icono dentro de azul', '--color-on-course-accent', '--course-accent')
  for (const [name, accent] of [['DIAN', '#167c80'], ['Procuraduría', '#5f9e80'], ['azul', '#1cb0f6'], ['dorado', '#ffc800'], ['morado', '#ce82ff']]) {
    const ink = blend(accent, getToken(block, '--color-text'), 0.35)
    test(`lectura de acento ${name}`, ink, '--color-surface')
    test(`lectura de acento ${name} en tarjeta`, ink, '--color-brand-soft')
  }
}
checks.push({ theme: 'nodos', name: 'activo verde (icono)', value: contrast('#173c00', '#58cc02'), threshold: 3 })
checks.push({ theme: 'nodos', name: 'completado dorado (icono)', value: contrast('#624400', '#ffc800'), threshold: 3 })

const lessonCss = read('src/features/lessons/LessonPage.module.css')
const buttonCss = read('src/components/ui/Button.module.css')
const structural = [
  ['texto de resumen acotado', lessonCss.includes('.finish > div > span') && !/\.finish\s+span\s*\{/.test(lessonCss)],
  ['botón no hereda color del resumen', buttonCss.includes('.button > span{font-size:inherit;opacity:1;color:inherit;')],
  ['curso usa tinta adaptable', tokens.includes('--course-accent-ink:color-mix(')],
]
const failures = checks.filter(({ value, threshold }) => value < threshold)
console.log(`Se comprobaron ${checks.length} pares de color y ${structural.length} regresiones estructurales.`)
console.log(`Contraste mínimo para texto normal: 4.5:1; iconografía relevante: 3:1.`)
for (const row of checks) console.log(`${row.value >= row.threshold ? 'OK' : 'FALLO'}  ${row.value.toFixed(2)}:1  ${row.theme} · ${row.name}`)
for (const [name, ok] of structural) console.log(`${ok ? 'OK' : 'FALLO'}  ${name}`)
if (failures.length || structural.some(([, ok]) => !ok)) {
  console.error(`${failures.length} pares de color no alcanzan el mínimo o falló una comprobación de selectores.`)
  process.exitCode = 1
} else console.log('Verificación estática de contraste superada.')
