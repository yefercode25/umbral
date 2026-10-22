import type { Course } from '../types/course'
import type { CourseProgress, QuestionProgress } from '../types/progress'

/** Wilson score 95% interval. Formative range only; not an IRT/official psychometric score. */
export function wilsonInterval(successes: number, attempts: number) {
  if (attempts <= 0) return null
  const z = 1.96, p = successes / attempts, z2 = z * z
  const center = (p + z2 / (2 * attempts)) / (1 + z2 / attempts)
  const margin = z * Math.sqrt(p * (1 - p) / attempts + z2 / (4 * attempts * attempts)) / (1 + z2 / attempts)
  return { low: Math.max(0, center - margin), high: Math.min(1, center + margin) }
}
export function getPracticeAnalytics(course: Course, progress: CourseProgress | undefined) {
  const stats = progress?.questionStats ?? {}
  type AttemptedRow = { question: Course['questions'][number]; stat: QuestionProgress }
  const rows = course.questions
    .map((question) => ({ question, stat: stats[question.id] }))
    .filter((row): row is AttemptedRow => (row.stat?.attempts ?? 0) > 0)
  const attempts = rows.reduce((sum,row) => sum + row.stat.attempts, 0)
  const correct = rows.reduce((sum,row) => sum + row.stat.correct, 0)
  const unique = rows.length
  const repeats = rows.filter((row) => row.stat.attempts > 1).length
  const sessions = (progress?.practiceSessions ?? []).filter((s) => s.questions > 0)
  const byDifficulty = ([1,2,3,4,5] as const).map((level) => {
    const selected = rows.filter((row) => row.question.difficulty === level)
    const total = selected.reduce((sum,row) => sum + row.stat.attempts,0)
    const hits = selected.reduce((sum,row) => sum + row.stat.correct,0)
    return { level, unique: selected.length, attempts: total, correct: hits, percent: total ? Math.round(100 * hits / total) : null }
  })
  const byModule = course.modules.filter((m) => m.status === 'published').map((module) => {
    const all = course.questions.filter((q) => q.moduleId === module.id)
    const attempted = all.filter((q) => (stats[q.id]?.attempts ?? 0) > 0)
    const total = attempted.reduce((sum,q) => sum + (stats[q.id]?.attempts ?? 0),0)
    const hits = attempted.reduce((sum,q) => sum + (stats[q.id]?.correct ?? 0),0)
    return { module, available: all.length, unique: attempted.length, attempts: total, correct: hits, percent: total ? Math.round(100 * hits / total) : null }
  })
  return { attempts, correct, unique, repeats, available: course.questions.length, sessions, byDifficulty, byModule, interval: wilsonInterval(correct,attempts) }
}
