import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

describe('Auditoría editorial Procuraduría M12–M14', () => {
  const audited = ['pgn-m12', 'pgn-m13', 'pgn-m14']

  it('mantiene intacta la cantidad de preguntas, lecciones y módulos', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    for (const id of audited) {
      expect(moduleReviewQuestions(procuraduriaCourse, id).map(q => q.id)).toEqual([
        `${id}-transfer-1`, `${id}-situational-1`, `${id}-transfer-2`,
      ])
    }
  })

  it('incorpora un apoyo específico en cada una de las nueve lecciones', () => {
    const expectations: Record<string, string> = {
      'pgn-m12-l1': 'Una situación no determina',
      'pgn-m12-l2': 'Aplicación: contratación',
      'pgn-m12-l3': 'Cuando la información cambia',
      'pgn-m13-l1': 'Competencia, reparto',
      'pgn-m13-l2': 'Lista mínima antes',
      'pgn-m13-l3': 'Tres situaciones',
      'pgn-m14-l1': 'El aporte de un profesional',
      'pgn-m14-l2': 'Estructura de un informe',
      'pgn-m14-l3': 'Cuando surge evidencia',
    }
    for (const [id, title] of Object.entries(expectations)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === id)
      expect(lesson, id).toBeDefined()
      expect(lesson!.blocks.some(b => 'title' in b && b.title?.includes(title)), id).toBe(true)
      expect(lesson!.blocks.filter(b => b.type === 'checkpoint'), id).toHaveLength(2)
    }
  })

  it('ancla misiones, competencia y empleo en las fuentes ya registradas', () => {
    const registered = new Set(procuraduriaCourse.sources.map(s => s.id))
    const references = [
      ['pgn-m12', ['constitucion', 'pgn-guia-preventiva', 'pgn-guia-disciplinaria', 'decreto-262-2000']],
      ['pgn-m13', ['decreto-1851-2021', 'ley-1952-2019', 'ley-2094-2021', 'pgn-guia-pruebas']],
      ['pgn-m14', ['pgn-convocatoria-104-v4', 'pgn-manual-v9', 'pgn-guia-pruebas', 'ley-1952-2019']],
    ] as const
    for (const [id, expected] of references) {
      for (const lesson of procuraduriaCourse.lessons.filter(l => l.moduleId === id)) {
        const source = lesson.blocks.find(b => b.type === 'sources')
        expect(source?.type, lesson.id).toBe('sources')
        if (source?.type !== 'sources') continue
        for (const ref of expected) expect(source.sourceIds, lesson.id).toContain(ref)
        for (const ref of source.sourceIds) expect(registered.has(ref), ref).toBe(true)
      }
    }
  })

  it('evalúa con expedientes distintos los tres cierres del lote', () => {
    const blueprints = procuraduriaModuleBlueprints.filter(bp => audited.includes(bp.id))
    expect(blueprints).toHaveLength(3)
    for (const bp of blueprints) {
      const profile = caseProfileFor(bp)
      for (const value of [profile.setting, profile.document, profile.conflict, profile.change]) {
        expect(value.length, bp.id).toBeGreaterThan(100)
      }
      const questions = moduleReviewQuestions(procuraduriaCourse, bp.id)
      for (const q of questions) {
        expect(q.case?.length ?? 0, q.id).toBeGreaterThan(320)
        expect(q.stem.length, q.id).toBeGreaterThan(65)
        expect(q.options, q.id).toHaveLength(3)
        expect(new Set(q.options.map(o => o.text)).size, q.id).toBe(3)
        expect(q.options.some(o => o.id === q.correctOptionId), q.id).toBe(true)
        expect(q.explanation.length, q.id).toBeGreaterThan(160)
        expect(q.sourceIds.length, q.id).toBeGreaterThan(0)
      }
    }
  })

  it('preserva las letras correctas de los nueve reactivos reescritos', () => {
    for (const [moduleId, situational, transfer1, transfer2] of [
      ['pgn-m12', 'c', 'c', 'b'],
      ['pgn-m13', 'b', 'b', 'a'],
      ['pgn-m14', 'a', 'a', 'c'],
    ] as const) {
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-situational-1`)?.correctOptionId).toBe(situational)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-1`)?.correctOptionId).toBe(transfer1)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-2`)?.correctOptionId).toBe(transfer2)
    }
  })

  it('mantiene disponibles los cierres auditados de M0–M11', () => {
    for (let i = 0; i <= 11; i++) {
      expect(moduleReviewQuestions(procuraduriaCourse, `pgn-m${i}`)).toHaveLength(3)
    }
  })
})
