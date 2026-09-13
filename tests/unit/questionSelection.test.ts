import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { examProfiles, selectExamQuestions } from '../../src/lib/questionSelection'

describe('exam question selection', () => {
  it('returns the requested number without duplicate questions', () => {
    for (const profile of examProfiles) {
      const selected = selectExamQuestions(dianGestorCourse.questions, profile.id)
      expect(selected, profile.id).toHaveLength(profile.size)
      expect(new Set(selected.map((question) => question.id)).size, profile.id).toBe(profile.size)
    }
  })

  it('keeps functional profiles inside M1-M17 and uses only PJS', () => {
    for (const profile of examProfiles.filter((item) => item.kind === 'functional')) {
      const selected = selectExamQuestions(dianGestorCourse.questions, profile.id)
      for (const question of selected) {
        const moduleNumber = Number(question.moduleId.slice(1))
        expect(question.type, `${profile.id} → ${question.id}`).toBe('pjs')
        expect(moduleNumber, `${profile.id} → ${question.moduleId}`).toBeGreaterThanOrEqual(1)
        expect(moduleNumber, `${profile.id} → ${question.moduleId}`).toBeLessThanOrEqual(17)
      }
    }
  })

  it('gives broad functional profiles at least one question from every functional module', () => {
    for (const profileId of ['functional-training', 'functional-extended'] as const) {
      const selected = selectExamQuestions(dianGestorCourse.questions, profileId)
      const modules = new Set(selected.map((question) => question.moduleId))
      for (let moduleNumber = 1; moduleNumber <= 17; moduleNumber += 1) {
        expect(modules.has(`m${moduleNumber}`), `${profileId} missing m${moduleNumber}`).toBe(true)
      }
    }
  })


  it('keeps the transversal profile inside M24-M28', () => {
    const selected = selectExamQuestions(dianGestorCourse.questions, 'transversal-check')
    for (const question of selected) {
      const moduleNumber = Number(question.moduleId.slice(1))
      expect(moduleNumber, question.id).toBeGreaterThanOrEqual(24)
      expect(moduleNumber, question.id).toBeLessThanOrEqual(28)
    }
  })

  it('includes the configured minimum of integrative PJS cases in functional profiles', () => {
    for (const profile of examProfiles.filter((item) => item.kind === 'functional')) {
      const selected = selectExamQuestions(dianGestorCourse.questions, profile.id)
      const integrated = selected.filter((question) => question.integrated).length
      expect(integrated, profile.id).toBeGreaterThanOrEqual(profile.integratedTarget ?? 0)
    }
  })

})
