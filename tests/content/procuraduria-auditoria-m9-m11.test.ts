import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

describe('Auditoría editorial Procuraduría M9–M11', () => {
  const modules = ['pgn-m9', 'pgn-m10', 'pgn-m11']
  it('no añade ni elimina preguntas, módulos o lecciones y conserva cierres internos', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-')).map(q => q.id)).size).toBe(1948)
    for (const id of modules) {
      expect(moduleReviewQuestions(procuraduriaCourse, id).map(q => q.id)).toEqual([
        `${id}-transfer-1`, `${id}-situational-1`, `${id}-transfer-2`,
      ])
    }
  })

  it('incluye apoyos diferenciados en cada una de las nueve lecciones', () => {
    const titles: Record<string, string> = {
      'pgn-m9-l1': 'Territorio, autonomía',
      'pgn-m9-l2': 'Coordinar, concurrir',
      'pgn-m9-l3': 'La misma ubicación',
      'pgn-m10-l1': 'Tres ámbitos',
      'pgn-m10-l2': 'Elegir la ruta',
      'pgn-m10-l3': 'Qué cambia',
      'pgn-m11-l1': 'Estructura institucional',
      'pgn-m11-l2': 'Ruta de reparto',
      'pgn-m11-l3': 'Las reglas de conexidad',
    }
    for (const [id, title] of Object.entries(titles)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === id)
      expect(lesson, id).toBeDefined()
      expect(lesson!.blocks.some(b => 'title' in b && b.title?.includes(title)), id).toBe(true)
      expect(lesson!.blocks.filter(b => b.type === 'checkpoint'), id).toHaveLength(2)
    }
  })

  it('cita las fuentes oficiales existentes sin crear referencias inválidas', () => {
    const registered = new Set(procuraduriaCourse.sources.map(s => s.id))
    const references = [
      ['pgn-m9', ['constitucion', 'ley-1454-2011', 'decreto-262-2000', 'decreto-1851-2021']],
      ['pgn-m10', ['constitucion', 'pgn-guia-preventiva', 'decreto-262-2000', 'ley-1952-2019']],
      ['pgn-m11', ['decreto-262-2000', 'decreto-1851-2021', 'pgn-convocatoria-104-v4', 'pgn-manual-v9']],
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

  it('evalúa territorio, función y reparto mediante escenarios específicos', () => {
    for (const bp of procuraduriaModuleBlueprints.filter(bp => modules.includes(bp.id))) {
      const profile = caseProfileFor(bp)
      for (const value of [profile.setting, profile.document, profile.conflict, profile.change]) {
        expect(value.length, bp.id).toBeGreaterThan(100)
      }
      for (const q of moduleReviewQuestions(procuraduriaCourse, bp.id)) {
        expect(q.case?.length ?? 0, q.id).toBeGreaterThan(350)
        expect(q.stem.length, q.id).toBeGreaterThan(65)
        expect(q.options, q.id).toHaveLength(3)
        expect(new Set(q.options.map(o => o.text)).size, q.id).toBe(3)
        expect(q.options.some(o => o.id === q.correctOptionId), q.id).toBe(true)
        expect(q.explanation.length, q.id).toBeGreaterThan(150)
        expect(q.sourceIds.length, q.id).toBeGreaterThan(0)
      }
    }
  })

  it('conserva exactamente la ubicación de las nueve respuestas correctas', () => {
    for (const [moduleId, situational, transfer1, transfer2] of [
      ['pgn-m9', 'c', 'c', 'b'],
      ['pgn-m10', 'b', 'b', 'a'],
      ['pgn-m11', 'a', 'a', 'c'],
    ] as const) {
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-situational-1`)?.correctOptionId).toBe(situational)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-1`)?.correctOptionId).toBe(transfer1)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-2`)?.correctOptionId).toBe(transfer2)
    }
  })

  it('conserva el cierre de los nueve módulos ya auditados', () => {
    for (let i = 0; i <= 8; i++) expect(moduleReviewQuestions(procuraduriaCourse, `pgn-m${i}`)).toHaveLength(3)
  })
})
