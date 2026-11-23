export type ProcuraduriaLessonVisual = {
  image: string
  lessonOrder: 1 | 2 | 3
  title: string
  caption: string
}
const labels = [
  { title: 'Mapa de conceptos', caption: 'Tres reglas esenciales del módulo' },
  { title: 'Ruta de aplicación', caption: 'Cuatro pasos del procedimiento de estudio' },
  { title: 'Análisis de un caso', caption: 'Situación y dos atajos que conviene cuestionar' },
] as const

/** Los 255 SVG se generan desde los blueprints oficiales del curso PGN. */
export function getProcuraduriaLessonVisual(moduleId: string, lessonOrder: number): ProcuraduriaLessonVisual | null {
  const match = /^pgn-m(0|[1-9]\d?)$/.exec(moduleId)
  if (!match || !Number.isInteger(lessonOrder) || lessonOrder < 1 || lessonOrder > 3) return null
  const index = Number(match[1])
  if (index > 84) return null
  const order = lessonOrder as 1 | 2 | 3
  const label = labels[order - 1]
  return {
    image: `/media/procuraduria/module-diagrams/pgn-m${index}-l${order}.svg`,
    lessonOrder: order,
    title: label.title,
    caption: label.caption,
  }
}
