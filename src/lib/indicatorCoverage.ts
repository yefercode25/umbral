import type { Course } from '../types/course'
import type { CourseProgress } from '../types/progress'

export type OfficialIndicator = { id: string; title: string; moduleIds: string[] }
const storageKey = 'umbral-dian-official-indicators-v1'
export function readIndicators(): OfficialIndicator[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    if (!Array.isArray(data)) return []
    return data.filter((item): item is OfficialIndicator => typeof item === 'object' && item !== null && typeof item.id === 'string' && typeof item.title === 'string' && Array.isArray(item.moduleIds))
      .slice(0, 150).map((item) => ({ id: item.id, title: item.title.slice(0, 250), moduleIds: item.moduleIds.filter((id): id is string => typeof id === 'string') }))
  } catch { return [] }
}
export function saveIndicators(indicators: OfficialIndicator[]) {
  localStorage.setItem(storageKey, JSON.stringify(indicators))
}
export function indicatorCoverage(course: Course, progress: CourseProgress | undefined, moduleIds: string[]) {
  const moduleSet = new Set(moduleIds)
  const lessons = course.lessons.filter((lesson) => lesson.status === 'published' && moduleSet.has(lesson.moduleId))
  const questions = course.questions.filter((question) => moduleSet.has(question.moduleId))
  const pjsQuestions = questions.filter((question) => question.type === 'pjs')
  const attempted = questions.filter((question) => (progress?.questionStats?.[question.id]?.attempts ?? 0) > 0)
  const attempts = attempted.reduce((sum,q) => sum + (progress?.questionStats?.[q.id]?.attempts ?? 0), 0)
  const correct = attempted.reduce((sum,q) => sum + (progress?.questionStats?.[q.id]?.correct ?? 0), 0)
  const completed = lessons.filter((lesson) => progress?.lessons?.[lesson.id]?.status === 'completed').length
  return { modules: moduleIds.length, lessons: lessons.length, completed, questions: questions.length, pjsQuestions: pjsQuestions.length, attempted: attempted.length, attempts, accuracy: attempts ? correct / attempts : null }
}
/** Tentative study areas from MERF and course modules, NEVER the operator's indicator list. */
export const provisionalDianAreas = [
  { label:'Cartera y estado de cuenta', moduleIds:['m9','m10'] },
  { label:'Recaudo y entidades autorizadas', moduleIds:['m11'] },
  { label:'Cobro persuasivo y coactivo', moduleIds:['m12','m13'] },
  { label:'Concursal y facilidades', moduleIds:['m14','m15'] },
  { label:'Devoluciones y compensaciones', moduleIds:['m16'] },
  { label:'CPACA, servicio y gestión pública', moduleIds:['m24','m25','m26','m27','m28'] },
]
