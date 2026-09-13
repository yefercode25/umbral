import { describe, expect, it } from 'vitest'
import { dianCaseLabs } from '../../content/courses/dian-2676-gestor-ii/caseLabs'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'

describe('DIAN integrative case labs', () => {
  it('uses unique case ids and complete question sequences', () => {
    expect(new Set(dianCaseLabs.map((item) => item.id)).size).toBe(dianCaseLabs.length)
    const questionIds = new Set(dianGestorCourse.questions.map((question) => question.id))
    const sourceIds = new Set(dianGestorCourse.sources.map((source) => source.id))
    const moduleIds = new Set(dianGestorCourse.modules.map((module) => module.id))

    for (const item of dianCaseLabs) {
      expect(item.questionIds).toHaveLength(5)
      expect(new Set(item.questionIds).size, item.id).toBe(item.questionIds.length)
      expect(item.facts.length, item.id).toBeGreaterThanOrEqual(3)
      expect(item.durationMinutes, item.id).toBeGreaterThan(0)
      for (const moduleId of item.moduleIds) expect(moduleIds.has(moduleId), `${item.id} → ${moduleId}`).toBe(true)
      for (const sourceId of item.sourceIds) expect(sourceIds.has(sourceId), `${item.id} → ${sourceId}`).toBe(true)
      for (const questionId of item.questionIds) {
        expect(questionIds.has(questionId), `${item.id} → ${questionId}`).toBe(true)
        const question = dianGestorCourse.questions.find((candidate) => candidate.id === questionId)
        expect(question?.integrated, questionId).toBe(true)
        expect(question?.scenarioId, questionId).toBe(item.id)
      }
    }
  })

  it('covers forty distinct integrated questions', () => {
    const questionIds = dianCaseLabs.flatMap((item) => item.questionIds)
    expect(questionIds).toHaveLength(40)
    expect(new Set(questionIds).size).toBe(40)
  })
})
