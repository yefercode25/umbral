import { test, expect } from '@playwright/test'

const PGN = 'procuraduria-104-2026-3pu15'
const DIAN = 'dian-2676-gestor-ii'
const mock = course => '/practice/mock?course=' + course
const progress = course => '/progress?course=' + course

async function readCourses(page) {
  return page.evaluate(() => JSON.parse(localStorage.getItem('umbral:progress:v1') || '{}').state?.courses || {})
}

test('Procuraduría: simulacro, persistencia, aislamiento y recarga offline', async ({ page, context }) => {
  const pageErrors = []
  page.on('pageerror', error => pageErrors.push(error.message))
  await page.goto(mock(DIAN))
  await expect(page.getByRole('heading', { name: 'Configura tu simulacro' })).toBeVisible()
  await expect.poll(async () => Boolean((await readCourses(page))[DIAN])).toBe(true)
  const beforeDian = (await readCourses(page))[DIAN]

  await page.goto(mock(PGN))
  const profiles = page.getByRole('radiogroup', { name: 'Tipo de simulacro' })
  await expect(profiles.getByRole('radio')).toHaveCount(9)
  await expect(profiles.getByRole('radio', { name: /Competencias comportamentales/ })).toBeVisible()
  await expect(profiles.getByRole('radio', { name: /Fundamentos de Ingeniería de Sistemas/ })).toBeVisible()
  const quick = profiles.getByRole('radio', { name: /Núcleo rápido/ })
  await quick.focus()
  await quick.press('Enter')
  await expect(quick).toHaveAttribute('aria-checked', 'true')
  await page.getByRole('button', { name: 'Iniciar rápido' }).click()
  const options = page.getByRole('radiogroup', { name: 'Opciones de respuesta' })
  await expect(options.getByRole('radio')).toHaveCount(3)
  await page.getByRole('button', { name: 'Revisar', exact: true }).click()
  await options.getByRole('radio').first().click()
  await page.getByRole('button', { name: 'Siguiente', exact: true }).click()
  await page.getByRole('button', { name: 'Anterior', exact: true }).click()
  await expect(options.getByRole('radio').first()).toHaveAttribute('aria-checked', 'true')
  await expect(page.getByRole('button', { name: 'Marcada', exact: true })).toHaveAttribute('aria-pressed', 'true')
  await expect(page.getByText('Por qué cada alternativa', { exact: true })).toHaveCount(0)
  for (let i = 0; i < 10; i++) {
    await expect(page.getByText('Pregunta ' + (i + 1) + ' de 10', { exact: true })).toBeVisible()
    await options.getByRole('radio').first().click()
    await page.getByRole('button', { name: i === 9 ? 'Entregar' : 'Siguiente', exact: true }).click()
  }
  await expect(page.getByRole('heading', { name: /\d+ de 10 respuestas correctas/ })).toBeVisible()
  await expect(page.getByText('Por qué cada alternativa', { exact: true })).toHaveCount(10)
  await expect.poll(async () => (await readCourses(page))[PGN]?.practiceSessions?.length).toBe(1)
  const saved = (await readCourses(page))[PGN]
  expect(saved.practiceSessions[0]).toMatchObject({ profileId: 'functional-quick', questions: 10 })
  expect(Object.values(saved.questionStats).reduce((n, q) => n + q.attempts, 0)).toBe(10)
  expect((await readCourses(page))[DIAN]).toEqual(beforeDian)

  await page.goto(progress(PGN))
  await expect(page.getByRole('heading', { name: 'Qué dicen tus respuestas y qué no dicen' })).toBeVisible()
  await expect.poll(async () => (await readCourses(page))[PGN]?.practiceSessions?.length).toBe(1)
  // El service worker real de producción debe estar activo antes de cortar la red.
  await expect.poll(() => page.evaluate(async () => (await navigator.serviceWorker.getRegistration())?.active?.state)).toBe('activated')
  await page.reload()
  await expect.poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller))).toBe(true)
  await context.setOffline(true)
  try {
    await page.reload()
    await expect(page.getByRole('heading', { name: 'Qué dicen tus respuestas y qué no dicen' })).toBeVisible()
    expect((await readCourses(page))[PGN].questionStats).toEqual(saved.questionStats)
    expect((await readCourses(page))[PGN].practiceSessions).toEqual(saved.practiceSessions)
    await page.goto(mock(PGN))
    await expect(page.getByRole('radiogroup', { name: 'Tipo de simulacro' }).getByRole('radio')).toHaveCount(9)
    expect((await readCourses(page))[DIAN]).toEqual(beforeDian)
  } finally {
    await context.setOffline(false)
  }
  expect(pageErrors).toEqual([])
})

test('Simulacro integral PGN no muestra pistas antes de entregar', async ({page}) => {
  await page.goto(mock(PGN))
  await page.getByRole('radio', {name: /Simulacro integral/}).click()
  await page.getByRole('button', {name: 'Iniciar integral'}).click()
  await expect(page.getByText('Pregunta 1 de 30', {exact:true})).toBeVisible()
  await expect(page.getByText('Decisión profesional',{exact:true})).toBeVisible()
  await expect(page.getByText(/Dificultad [1-5]\/5/)).toHaveCount(0)
  await expect(page.getByText('Por qué cada alternativa',{exact:true})).toHaveCount(0)
  const options=page.getByRole('radiogroup',{name:'Opciones de respuesta'})
  for(let i=0;i<30;i++){
    await options.getByRole('radio').first().click()
    await page.getByRole('button',{name:i===29?'Entregar':'Siguiente',exact:true}).click()
  }
  await expect(page.getByRole('heading',{name:/\d+ de 30 respuestas correctas/})).toBeVisible()
  await expect(page.getByText('Por qué cada alternativa',{exact:true})).toHaveCount(30)
  await expect.poll(async()=> (await readCourses(page))[PGN]?.practiceSessions?.[0]?.profileId).toBe('functional-blind')
})
