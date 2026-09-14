import type { Course, Question } from '../types/course'
import type { CourseProgress } from '../types/progress'

function daysSince(iso?: string) {
  if (!iso) return Number.POSITIVE_INFINITY
  const timestamp = new Date(iso).getTime()
  if (Number.isNaN(timestamp)) return Number.POSITIVE_INFINITY
  return Math.max(0, (Date.now() - timestamp) / 86_400_000)
}

export function adaptiveQuestionScore(question: Question, progress?: CourseProgress, course?: Course) {
  const stat = progress?.questionStats?.[question.id]
  let score = 0

  if (!stat) score += 4
  else {
    if (!stat.lastCorrect) score += 9
    const accuracy = stat.correct / Math.max(1, stat.attempts)
    score += (1 - accuracy) * 5
    const age = daysSince(stat.lastAnsweredAt)
    if (age >= 7) score += 3
    else if (age >= 2) score += 1.5
    else if (stat.lastCorrect) score -= 1.5
  }

  for (const skillId of question.skillIds) {
    const skill = progress?.skills?.[skillId]
    if (!skill) score += 1
    else {
      if (skill.attempts >= 2) score += (1 - skill.accuracy) * 4
      if (skill.mastery === 'competent') score -= 0.75
      if (skill.mastery === 'mastered') score -= 1.5
    }
  }

  const priority = new Set(course?.practiceConfig?.priorityModuleIds ?? course?.practiceConfig?.coreModuleIds ?? [])
  const supplemental = new Set(course?.practiceConfig?.transversalModuleIds ?? [])
  if (priority.has(question.moduleId)) score += 1.25
  if (supplemental.has(question.moduleId)) score -= 1.25
  score += question.difficulty * 0.08
  return score
}

function stableTiebreaker(id: string, seed: number) {
  let hash = seed || 17
  for (let index = 0; index < id.length; index += 1) hash = (hash * 31 + id.charCodeAt(index)) >>> 0
  return hash / 4_294_967_295
}

export function buildAdaptiveSession(course: Course, progress?: CourseProgress, size = 12, seed = Date.now()) {
  return [...course.questions]
    .map((question) => ({ question, score: adaptiveQuestionScore(question, progress, course), tie: stableTiebreaker(question.id, seed) }))
    .sort((a, b) => b.score - a.score || a.tie - b.tie)
    .slice(0, Math.min(size, course.questions.length))
    .map((item) => item.question)
}
