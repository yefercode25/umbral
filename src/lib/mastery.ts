import type { SkillProgress } from '../types/progress'

export const MASTERY_CONFIRMATION_MS = 86_400_000

export function nextSkillProgress(
  previous: SkillProgress | undefined,
  attempts: number,
  correctCount: number,
  accuracy: number,
  answeredCorrectly: boolean,
  now: string,
): SkillProgress {
  const base: SkillProgress = {
    attempts,
    correct: correctCount,
    accuracy,
    mastery: 'practiced',
    lastPracticedAt: now,
    ...(previous?.competentAt ? { competentAt: previous.competentAt } : {}),
    ...(previous?.masteredAt ? { masteredAt: previous.masteredAt } : {}),
  }

  if (attempts < 3 || accuracy < 0.8) return base

  const firstCompetentAt = previous?.competentAt ?? now
  const elapsed = new Date(now).getTime() - new Date(firstCompetentAt).getTime()
  const isLaterConfirmation = Boolean(
    previous
    && (previous.mastery === 'competent' || previous.mastery === 'mastered')
    && answeredCorrectly
    && elapsed >= MASTERY_CONFIRMATION_MS,
  )

  if (attempts >= 6 && isLaterConfirmation) {
    return {
      ...base,
      mastery: 'mastered',
      competentAt: firstCompetentAt,
      masteredAt: previous?.masteredAt ?? now,
    }
  }

  if (attempts >= 6) return { ...base, mastery: 'competent', competentAt: firstCompetentAt }
  return base
}
