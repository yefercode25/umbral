import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createHash } from 'node:crypto'

const dir = resolve('public/media/procuraduria/module-diagrams')
const hashes = new Set()
let total = 0
for (let module = 0; module < 85; module++) {
  for (let lesson = 1; lesson <= 3; lesson++) {
    const path = resolve(dir, `pgn-m${module}-l${lesson}.svg`)
    if (!existsSync(path)) throw new Error(`Falta SVG: ${path}`)
    const svg = readFileSync(path, 'utf8')
    if (!svg.includes('<svg ') || !svg.includes('</svg>') || !svg.includes('<title ') || !svg.includes('<desc ')) throw new Error(`Estructura inválida en ${path}`)
    if (/<script\b|<foreignObject\b|<image\b|<iframe\b|\son\w+\s*=|href\s*=|url\(/i.test(svg)) throw new Error(`Elemento no permitido en ${path}`)
    if (!svg.includes(`M${module} / LECCIÓN ${lesson}`)) throw new Error(`Contenido sin identidad de módulo/lección ${path}`)
    const hash = createHash('sha256').update(svg).digest('hex')
    if (hashes.has(hash)) throw new Error(`SVG duplicado: ${path}`)
    hashes.add(hash)
    total++
  }
}
if (total !== 255) throw new Error(`Se esperaban 255 SVG y hay ${total}`)
console.log(`Validación: ${total} SVG estáticos, únicos y asociados a Procuraduría.`)
