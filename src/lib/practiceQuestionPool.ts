import type { Course, Question } from '../types/course'

/**
 * La Procuraduría usa las preguntas heredadas en controles dentro de las
 * lecciones. Para impedir respuestas ya vistas en simulacros y prácticas,
 * el banco evaluable se compone solo de situaciones nuevas e integradoras.
 *
 * No borra el banco anterior: preserva los IDs, respuestas y marcadores
 * históricos. No afecta al curso DIAN.
 */
export function practiceQuestionPool(course: Course): Question[] {
  if (course.id !== 'procuraduria-104-2026-3pu15') return course.questions
  return course.questions.filter((question) => question.integrated || question.id.includes('-situational-'))
}
