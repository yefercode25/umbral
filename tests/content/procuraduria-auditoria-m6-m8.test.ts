import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

const three = ['pgn-m6', 'pgn-m7', 'pgn-m8']

describe('Auditoría editorial de Procuraduría M6–M8', () => {
  it('mantiene inventario y preguntas históricas, sin generar ítems nuevos', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    for (const moduleId of three) {
      const closing = moduleReviewQuestions(procuraduriaCourse, moduleId)
      expect(closing.map(q => q.id)).toEqual([
        `${moduleId}-transfer-1`,
        `${moduleId}-situational-1`,
        `${moduleId}-transfer-2`,
      ])
    }
  })

  it('apoya cada una de las nueve lecciones con una explicación específica', () => {
    const titles: Record<string, string> = {
      'pgn-m6-l1': 'Mapa de competencias',
      'pgn-m6-l2': 'Una contratación, tres',
      'pgn-m6-l3': 'Una decisión ajena',
      'pgn-m7-l1': 'Principios constitucionales',
      'pgn-m7-l2': 'Caso de correspondencia',
      'pgn-m7-l3': 'Cambiar un hecho',
      'pgn-m8-l1': 'Calidad del sujeto',
      'pgn-m8-l2': 'De la omisión',
      'pgn-m8-l3': 'Responsabilidades que',
    }
    for (const [lessonId, title] of Object.entries(titles)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === lessonId)
      expect(lesson, lessonId).toBeDefined()
      expect(lesson!.blocks.some(b => 'title' in b && b.title?.includes(title)), lessonId).toBe(true)
      expect(lesson!.blocks.filter(b => b.type === 'checkpoint'), lessonId).toHaveLength(2)
    }
  })

  it('incorpora las fuentes pertinentes sin introducir fuentes no registradas', () => {
    const sourceIds = new Set(procuraduriaCourse.sources.map(s => s.id))
    const expected = [
      ['pgn-m6', ['constitucion', 'decreto-262-2000', 'ley-1952-2019']],
      ['pgn-m7', ['constitucion', 'cpaca', 'ley-1581-2012']],
      ['pgn-m8', ['constitucion', 'ley-1952-2019', 'ley-2094-2021']],
    ] as const
    for (const [moduleId, ids] of expected) {
      for (const lesson of procuraduriaCourse.lessons.filter(l => l.moduleId === moduleId)) {
        const source = lesson.blocks.find(b => b.type === 'sources')
        expect(source?.type, lesson.id).toBe('sources')
        if (source?.type !== 'sources') continue
        for (const id of ids) expect(source.sourceIds, lesson.id).toContain(id)
        for (const id of source.sourceIds) expect(sourceIds.has(id), id).toBe(true)
      }
    }
  })

  it('hace que cada cierre exija decidir sobre evidencia y límites del módulo', () => {
    for (const bp of procuraduriaModuleBlueprints.filter(b => three.includes(b.id))) {
      const profile = caseProfileFor(bp)
      for (const value of [profile.setting, profile.document, profile.conflict, profile.change]) {
        expect(value.length, bp.id).toBeGreaterThan(100)
      }
      const closing = moduleReviewQuestions(procuraduriaCourse, bp.id)
      for (const q of closing) {
        expect(q.case?.length ?? 0, q.id).toBeGreaterThan(350)
        expect(q.stem.length, q.id).toBeGreaterThan(70)
        expect(q.options, q.id).toHaveLength(3)
        expect(new Set(q.options.map(o => o.text)).size, q.id).toBe(3)
        expect(q.options.some(o => o.id === q.correctOptionId), q.id).toBe(true)
        expect(q.explanation.length, q.id).toBeGreaterThan(160)
        expect(q.sourceIds.length, q.id).toBeGreaterThan(0)
      }
    }
  })

  it('preserva las letras correctas de los nueve reactivos reescritos', () => {
    for (const [moduleId, situation, first, second] of [
      ['pgn-m6', 'c', 'c', 'b'],
      ['pgn-m7', 'b', 'b', 'a'],
      ['pgn-m8', 'a', 'a', 'c'],
    ] as const) {
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-situational-1`)?.correctOptionId).toBe(situation)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-1`)?.correctOptionId).toBe(first)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-2`)?.correctOptionId).toBe(second)
    }
  })

  it('mantiene disponibles los cierres auditados previamente M0–M5', () => {
    for (let n = 0; n <= 5; n++) {
      const closing = moduleReviewQuestions(procuraduriaCourse, `pgn-m${n}`)
      expect(closing).toHaveLength(3)
    }
  })
})
