import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { procuraduriaExceptionQuestions } from '../../content/courses/procuraduria-104-2026-3pu15/exceptionQuestions'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { auditPgnBank } from '../../src/lib/procuraduriaBankAudit'
import { isPgnException } from '../../src/lib/procuraduriaScopes'

const lessonSourceIds = (moduleId: string) => procuraduriaCourse.lessons.find(l => l.moduleId === moduleId && l.order === 3)?.blocks.flatMap(b => b.type === 'sources' ? b.sourceIds : []) ?? []

describe('Casos límite: reglas especiales y cambios de presupuesto', () => {
  it('incluye 36 supuestos independientes en dieciocho temas, con fuentes y claves válidas', () => {
    const qs = procuraduriaExceptionQuestions
    const pool = practiceQuestionPool(procuraduriaCourse)
    const sourceIds = new Set(procuraduriaCourse.sources.map(s => s.id))
    expect(qs).toHaveLength(36)
    expect(new Set(qs.map(q=>q.scenarioId)).size).toBe(18)
    expect(pool.filter(isPgnException)).toEqual(qs)
    const audit = auditPgnBank(qs, sourceIds)
    expect(audit.missingSource).toEqual([])
    expect(audit.invalidOptions).toEqual([])
    expect(audit.weakRationale).toEqual([])
    expect(audit.lengthOutlier).toEqual([])
    expect(audit.exactDuplicates).toEqual([])
    expect(audit.repeatedStems).toEqual([])
    expect(audit.repeatedCases).toEqual([])
    for (const q of qs) {
      expect(q.case?.length, q.id).toBeGreaterThan(240)
      expect(q.difficulty).toBe(5)
      expect(q.explanation.length).toBeGreaterThan(150)
      expect(q.relatedModuleIds).toContain(q.moduleId)
      expect(q.options.every(o => o.rationale && o.rationale.length > 40)).toBe(true)
      const refs = lessonSourceIds(q.moduleId)
      expect(q.sourceIds.every(id => refs.includes(id)), q.id).toBe(true)
      const lesson = procuraduriaCourse.lessons.find(l => l.moduleId === q.moduleId && l.order === 3)!
      expect(lesson.blocks.some(b => b.type === 'article' && q.explanation.includes(b.article)), q.id).toBe(true)
      expect(lesson.blocks.some(b => b.type === 'checkpoint' && b.questionId === q.id)).toBe(false)
    }
    for (const scenario of new Set(qs.map(q => q.scenarioId))) {
      const pair = qs.filter(q => q.scenarioId === scenario)
      expect(pair).toHaveLength(2)
      expect(new Set(pair.map(q=>q.correctOptionId)).size).toBe(2)
    }
  })
})
