import type { Course, Question } from '../types/course'

export const PGN_COURSE_ID = 'procuraduria-104-2026-3pu15'

export const pgnBehaviorModuleIds = ['pgn-m70', 'pgn-m71', 'pgn-m72', 'pgn-m73']
export const pgnSystemsModuleIds = ['pgn-m80', 'pgn-m81', 'pgn-m82', 'pgn-m83', 'pgn-m84']
const conditionalIds = new Set(['pgn-m75','pgn-m76','pgn-m77','pgn-m78','pgn-m79'])
const behaviorIds = new Set(pgnBehaviorModuleIds)
const orientationIds = new Set(['pgn-m0','pgn-m2','pgn-m3'])

export function isPgnConditional(moduleId: string) { return conditionalIds.has(moduleId) }
export function isPgnBehavior(moduleId: string) { return behaviorIds.has(moduleId) }
export function isPgnKnowledge(moduleId: string) { return !isPgnConditional(moduleId) && !isPgnBehavior(moduleId) && !orientationIds.has(moduleId) }

/** Explicit editorial provenance, not a psychometric difficulty label.
 * All 85 situational-1 items and 170 transfer items have individual overrides.
 * The other nine situational items per module use the legacy generator.
 * Dossiers and integrated cases are explicitly written, not automatically certified.
 */
export function isPgnAuthored(question: Question) {
  return /^pgn-m\d+-situational-1$/.test(question.id) ||
    /^pgn-m\d+-transfer-[12]$/.test(question.id) ||
    question.id.startsWith('pgn-dossier-') || Boolean(question.integrated)
}

export function pgnDefaultPracticePool(course: Course, pool: Question[]) {
  if (course.id !== PGN_COURSE_ID) return pool
  return pool.filter(q => !isPgnConditional(q.moduleId))
}
