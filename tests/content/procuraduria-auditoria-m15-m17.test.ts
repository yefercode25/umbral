import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

describe('Auditoría editorial Procuraduría M15–M17', () => {
  const modules = ['pgn-m15', 'pgn-m16', 'pgn-m17']
  it('conserva el banco y los cierres sin nuevas preguntas', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    for (const id of modules) {
      expect(moduleReviewQuestions(procuraduriaCourse, id).map(q => q.id)).toEqual([
        `${id}-transfer-1`, `${id}-situational-1`, `${id}-transfer-2`,
      ])
    }
  })

  it('contiene apoyos propios en las nueve lecciones del lote', () => {
    const expected: Record<string, string> = {
      'pgn-m15-l1': 'Una decisión escrita',
      'pgn-m15-l2': 'Ruta para revisar',
      'pgn-m15-l3': 'Qué cambia si aparece',
      'pgn-m16-l1': 'El CPACA es régimen general',
      'pgn-m16-l2': 'Mismo expediente, reglas',
      'pgn-m16-l3': 'Cuando cambia la premisa',
      'pgn-m17-l1': 'Términos del derecho de petición',
      'pgn-m17-l2': 'Radicado mixto',
      'pgn-m17-l3': 'Cuatro cambios de premisa',
    }
    for (const [id, title] of Object.entries(expected)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === id)
      expect(lesson, id).toBeDefined()
      expect(lesson!.blocks.some(b => 'title' in b && b.title?.includes(title)), id).toBe(true)
      expect(lesson!.blocks.filter(b => b.type === 'checkpoint'), id).toHaveLength(2)
    }
  })

  it('incluye fuentes normativas registradas en cada lección auditada', () => {
    const registered = new Set(procuraduriaCourse.sources.map(s => s.id))
    const list = [
      ['pgn-m15', ['cpaca']],
      ['pgn-m16', ['cpaca', 'ley-1952-2019', 'ley-2094-2021']],
      ['pgn-m17', ['ley-1755-2015', 'cpaca', 'ley-1712-2014', 'ley-1581-2012']],
    ] as const
    for (const [id, refs] of list) {
      for (const lesson of procuraduriaCourse.lessons.filter(l => l.moduleId === id)) {
        const block = lesson.blocks.find(b => b.type === 'sources')
        expect(block?.type, lesson.id).toBe('sources')
        if (block?.type !== 'sources') continue
        for (const ref of refs) expect(block.sourceIds, lesson.id).toContain(ref)
        for (const ref of block.sourceIds) expect(registered.has(ref), ref).toBe(true)
      }
    }
  })

  it('pregunta por hechos y circunstancias propias del módulo, sin distractores idénticos', () => {
    for (const bp of procuraduriaModuleBlueprints.filter(b => modules.includes(b.id))) {
      const scene = caseProfileFor(bp)
      for (const part of [scene.setting, scene.document, scene.conflict, scene.change]) {
        expect(part.length, bp.id).toBeGreaterThan(100)
      }
      for (const q of moduleReviewQuestions(procuraduriaCourse, bp.id)) {
        expect(q.case?.length ?? 0, q.id).toBeGreaterThan(330)
        expect(q.stem.length, q.id).toBeGreaterThan(70)
        expect(q.options, q.id).toHaveLength(3)
        expect(new Set(q.options.map(o => o.text)).size, q.id).toBe(3)
        expect(q.options.some(o => o.id === q.correctOptionId), q.id).toBe(true)
        expect(q.explanation.length, q.id).toBeGreaterThan(150)
        expect(q.sourceIds.length, q.id).toBeGreaterThan(0)
      }
    }
  })

  it('preserva los aciertos por ID aunque se reescriban las nueve preguntas', () => {
    for (const [moduleId, situation, first, second] of [
      ['pgn-m15', 'c', 'c', 'b'],
      ['pgn-m16', 'b', 'b', 'a'],
      ['pgn-m17', 'b', 'a', 'c'],
    ] as const) {
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-situational-1`)?.correctOptionId).toBe(situation)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-1`)?.correctOptionId).toBe(first)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-2`)?.correctOptionId).toBe(second)
    }
  })

  it('no rompe el cierre de los quince módulos auditados anteriormente', () => {
    for (let i = 0; i <= 14; i++) {
      expect(moduleReviewQuestions(procuraduriaCourse, `pgn-m${i}`)).toHaveLength(3)
    }
  })
})
