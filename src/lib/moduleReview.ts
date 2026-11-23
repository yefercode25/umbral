import type { Course, Question } from '../types/course'

/**
 * Evaluación integrada al final de cada módulo de Procuraduría.
 * Selecciona exclusivamente preguntas preexistentes de ese mismo módulo;
 * no agrega ítems al banco, ni usa expedientes de otros módulos.
 */
export function moduleReviewQuestions(course: Course, moduleId: string, round = 0): Question[] {
  if (course.id !== 'procuraduria-104-2026-3pu15') return []
  if (!course.modules.some(module => module.id === moduleId)) return []
  const normalizedRound = Math.max(0, Math.floor(round))
  const ids = [
    `${moduleId}-transfer-${normalizedRound % 2 + 1}`,
    `${moduleId}-situational-${normalizedRound % 10 + 1}`,
    `${moduleId}-transfer-${(normalizedRound + 1) % 2 + 1}`,
  ]
  const map = new Map(course.questions.filter(q => q.moduleId === moduleId).map(q => [q.id, q]))
  const selected = ids.map(id => map.get(id))
  return selected.every((q): q is Question => Boolean(q)) ? selected as Question[] : []
}

export const MODULE_PASS_SCORE = 2
export const MODULE_REVIEW_COUNT = 3
