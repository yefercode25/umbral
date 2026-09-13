import { describe, expect, it } from 'vitest'
import { nextSkillProgress } from '../../src/lib/mastery'
import type { SkillProgress } from '../../src/types/progress'

const competent: SkillProgress = {
  attempts: 6,
  correct: 5,
  accuracy: 5 / 6,
  mastery: 'competent',
  competentAt: '2026-09-10T12:00:00.000Z',
  lastPracticedAt: '2026-09-10T12:00:00.000Z',
}

describe('mastery progression', () => {
  it('does not mark a skill mastered from repeated answers in the same session', () => {
    const result = nextSkillProgress(competent, 7, 6, 6 / 7, true, '2026-09-10T12:20:00.000Z')
    expect(result.mastery).toBe('competent')
    expect(result.masteredAt).toBeUndefined()
  })

  it('requires a correct later confirmation at least 24 hours after competence', () => {
    const result = nextSkillProgress(competent, 7, 6, 6 / 7, true, '2026-09-11T12:00:01.000Z')
    expect(result.mastery).toBe('mastered')
    expect(result.masteredAt).toBe('2026-09-11T12:00:01.000Z')
  })

  it('does not confirm mastery with an incorrect later answer', () => {
    const result = nextSkillProgress(competent, 7, 5, 5 / 7, false, '2026-09-12T12:00:00.000Z')
    expect(result.mastery).toBe('practiced')
  })
})
