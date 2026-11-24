import type { Course, Lesson, Question } from '../types/course'

export const LESSON_REVIEW_COUNT = 5
export const LESSON_PASS_SCORE = 4

/** Todos los reactivos pertenecen a la lección y su módulo; nunca seleccionar del
 * banco de simulacro. Las revisiones conservan ID y clave. Reintentos rotan el orden.
 */
export function lessonAssessmentQuestions(course: Course, lesson: Lesson, round = 0): Question[] {
  if (course.id !== 'procuraduria-104-2026-3pu15' || !course.lessons.some(l => l.id === lesson.id && l.moduleId === lesson.moduleId)) return []
  const ids = lesson.assessmentQuestionIds ?? []
  if (ids.length !== LESSON_REVIEW_COUNT || new Set(ids).size !== ids.length) return []
  const byId = new Map(course.questions.filter(q => q.moduleId === lesson.moduleId).map(q => [q.id, q]))
  const questions = ids.map(id => byId.get(id))
  if (!questions.every((q): q is Question => Boolean(q))) return []
  const shift = Math.max(0, Math.floor(Number.isFinite(round) ? round : 0)) % questions.length
  return [...questions.slice(shift), ...questions.slice(0, shift)]
}
