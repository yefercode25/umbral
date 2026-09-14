import { describe, expect, it } from 'vitest'
import { procuraduriaCaseLabs } from '../../content/courses/procuraduria-104-2026-3pu15/caseLabs'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'

describe('Procuraduría integrated case labs', () => {
  it('publishes six multi-stage dossiers with five decisions each', () => {
    expect(procuraduriaCaseLabs).toHaveLength(6)
    expect(new Set(procuraduriaCaseLabs.map((item) => item.id)).size).toBe(6)
    for (const lab of procuraduriaCaseLabs) {
      expect(lab.questionIds).toHaveLength(5)
      expect(lab.moduleIds.length).toBeGreaterThanOrEqual(4)
      expect(lab.facts.length).toBeGreaterThanOrEqual(4)
      expect(lab.sourceIds.length).toBeGreaterThan(0)
    }
  })

  it('connects every lab to published modules, sources and integrated questions', () => {
    const moduleIds = new Set(procuraduriaCourse.modules.map((module) => module.id))
    const sourceIds = new Set(procuraduriaCourse.sources.map((source) => source.id))
    const questionMap = new Map(procuraduriaCourse.questions.map((question) => [question.id, question]))

    for (const lab of procuraduriaCaseLabs) {
      for (const moduleId of lab.moduleIds) expect(moduleIds.has(moduleId), `${lab.id} → ${moduleId}`).toBe(true)
      for (const sourceId of lab.sourceIds) expect(sourceIds.has(sourceId), `${lab.id} → ${sourceId}`).toBe(true)
      for (const questionId of lab.questionIds) {
        const question = questionMap.get(questionId)
        expect(question, `${lab.id} → ${questionId}`).toBeTruthy()
        expect(question?.integrated).toBe(true)
        expect(question?.scenarioId).toBe(lab.id)
      }
    }
  })

  it('covers the legal, preventive and systems-engineering pathways', () => {
    const joined = procuraduriaCaseLabs.flatMap((lab) => lab.moduleIds)
    expect(joined).toContain('pgn-m25')
    expect(joined).toContain('pgn-m35')
    expect(joined).toContain('pgn-m45')
    expect(joined).toContain('pgn-m50')
    expect(joined).toContain('pgn-m13')
    expect(joined).toContain('pgn-m80')
    expect(joined).toContain('pgn-m83')
  })
})
