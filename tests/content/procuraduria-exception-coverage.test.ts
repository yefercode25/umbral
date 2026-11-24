import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { procuraduriaExceptionQuestions } from '../../content/courses/procuraduria-104-2026-3pu15/exceptionQuestions'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { auditPgnBank } from '../../src/lib/procuraduriaBankAudit'
import { isPgnException } from '../../src/lib/procuraduriaScopes'

const lessonSourceIds = (moduleId: string) => procuraduriaCourse.lessons.find(l => l.moduleId === moduleId && l.order === 3)?.blocks.flatMap(b => b.type === 'sources' ? b.sourceIds : []) ?? []

describe('Casos límite: reglas especiales y cambios de presupuesto', () => {
  it('evita convertir la longitud en una pista sistemática en el bloque RC.5', () => {
    const ids = new Set(["pgn-exception-suspension-provisional-1","pgn-exception-suspension-provisional-2","pgn-exception-conflicto-disciplinario-1","pgn-exception-conflicto-disciplinario-2","pgn-exception-terminos-especiales-1","pgn-exception-terminos-especiales-2","pgn-exception-testigo-no-disponible-1","pgn-exception-testigo-no-disponible-2","pgn-exception-prevencion-emergencia-1","pgn-exception-prevencion-emergencia-2","pgn-exception-bienes-fiscal-1","pgn-exception-bienes-fiscal-2","pgn-exception-control-interno-1","pgn-exception-control-interno-2","pgn-exception-evidencia-inaccesible-1","pgn-exception-evidencia-inaccesible-2","pgn-exception-firma-terceros-1","pgn-exception-firma-terceros-2","pgn-exception-excel-cruces-1","pgn-exception-excel-cruces-2","pgn-exception-datos-denominadores-1","pgn-exception-datos-denominadores-2","pgn-exception-dilemas-competencias-1","pgn-exception-dilemas-competencias-2"])
    const latest = procuraduriaExceptionQuestions.filter(q=>ids.has(q.id))
    expect(latest).toHaveLength(24)
    const rank = { longest: 0, shortest: 0, other: 0 }
    const count = (text: string) => text.trim().split(/\s+/).length
    for (const q of latest) {
      const correct = count(q.options.find(o=>o.id===q.correctOptionId)!.text)
      const wrong = q.options.filter(o=>o.id!==q.correctOptionId).map(o=>count(o.text))
      if (correct > Math.max(...wrong)) rank.longest++
      else if (correct < Math.min(...wrong)) rank.shortest++
      else rank.other++
    }
    for (const value of Object.values(rank)) {
      expect(value).toBeGreaterThan(0)
      expect(value).toBeLessThanOrEqual(14)
    }
  })
  it('incluye 60 supuestos independientes en treinta temas, con fuentes y claves válidas', () => {
    const qs = procuraduriaExceptionQuestions
    const pool = practiceQuestionPool(procuraduriaCourse)
    const sourceIds = new Set(procuraduriaCourse.sources.map(s => s.id))
    expect(qs).toHaveLength(60)
    expect(new Set(qs.map(q=>q.scenarioId)).size).toBe(30)
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
