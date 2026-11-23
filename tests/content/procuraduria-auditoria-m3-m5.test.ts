import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

const three = ['pgn-m3', 'pgn-m4', 'pgn-m5']

describe('Auditoría editorial de Procuraduría M3–M5', () => {
  it('no añade preguntas ni módulos y conserva los ID del historial', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    for (const moduleId of three) {
      const closing = moduleReviewQuestions(procuraduriaCourse, moduleId)
      expect(closing, moduleId).toHaveLength(3)
      expect(closing.map(q => q.id)).toEqual([
        `${moduleId}-transfer-1`,
        `${moduleId}-situational-1`,
        `${moduleId}-transfer-2`,
      ])
      expect(closing.every(q => q.moduleId === moduleId)).toBe(true)
    }
  })

  it('sitúa un apoyo de enseñanza distinto en cada una de las nueve lecciones', () => {
    const expectations: Record<string, string> = {
      'pgn-m3-l1': 'Aprobar la prueba',
      'pgn-m3-l2': 'Diagnóstico',
      'pgn-m3-l3': 'No todos los errores',
      'pgn-m4-l1': 'Del registro técnico',
      'pgn-m4-l2': 'Informe técnico',
      'pgn-m4-l3': 'Dos hipótesis',
      'pgn-m5-l1': 'Seis artículos',
      'pgn-m5-l2': 'Análisis de garantías',
      'pgn-m5-l3': 'Cuándo la opción',
    }
    for (const [lessonId, title] of Object.entries(expectations)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === lessonId)
      expect(lesson, lessonId).toBeDefined()
      expect(lesson!.blocks.some(b => 'title' in b && b.title?.includes(title)), lessonId).toBe(true)
      expect(lesson!.blocks.filter(b => b.type === 'checkpoint')).toHaveLength(2)
    }
  })

  it('ancla concurso, límites de informe y Constitución en fuentes ya existentes', () => {
    for (const [moduleId, expected] of [
      ['pgn-m3', ['pgn-res-212-2026', 'pgn-res-243-2026']],
      ['pgn-m4', ['ley-1952-2019', 'ley-2094-2021']],
      ['pgn-m5', ['constitucion']],
    ] as const) {
      for (const lesson of procuraduriaCourse.lessons.filter(l => l.moduleId === moduleId)) {
        const source = lesson.blocks.find(b => b.type === 'sources')
        expect(source?.type, lesson.id).toBe('sources')
        if (source?.type === 'sources') {
          for (const id of expected) expect(source.sourceIds, lesson.id).toContain(id)
        }
      }
    }
  })

  it('valida que los tres cierres evalúen hechos específicos y alternativas diferenciadas', () => {
    for (const blueprint of procuraduriaModuleBlueprints.filter(bp => three.includes(bp.id))) {
      const profile = caseProfileFor(blueprint)
      expect(profile.setting.length, blueprint.id).toBeGreaterThan(100)
      expect(profile.document.length, blueprint.id).toBeGreaterThan(100)
      expect(profile.change.length, blueprint.id).toBeGreaterThan(100)
      for (const question of moduleReviewQuestions(procuraduriaCourse, blueprint.id)) {
        expect(question.case?.length ?? 0, question.id).toBeGreaterThan(300)
        expect(question.stem.length, question.id).toBeGreaterThan(70)
        expect(question.options, question.id).toHaveLength(3)
        expect(new Set(question.options.map(o => o.text.trim())).size, question.id).toBe(3)
        expect(question.explanation.length, question.id).toBeGreaterThan(160)
        expect(question.options.some(o => o.id === question.correctOptionId), question.id).toBe(true)
        expect(question.sourceIds.length, question.id).toBeGreaterThan(0)
      }
    }
  })

  it('preserva la posición de la alternativa correcta en los nueve reactivos reescritos', () => {
    for (const [moduleId, situational, transfer1, transfer2] of [
      ['pgn-m3','c','c','b'],
      ['pgn-m4','b','b','a'],
      ['pgn-m5','a','a','c'],
    ] as const) {
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-situational-1`)?.correctOptionId).toBe(situational)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-1`)?.correctOptionId).toBe(transfer1)
      expect(procuraduriaCourse.questions.find(q => q.id === `${moduleId}-transfer-2`)?.correctOptionId).toBe(transfer2)
    }
  })

  it('mantiene el alcance en este lote sin alterar los cierres ya auditados de M0–M2', () => {
    for (const moduleId of ['pgn-m0','pgn-m1','pgn-m2']) {
      expect(moduleReviewQuestions(procuraduriaCourse,moduleId)).toHaveLength(3)
    }
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m0-situational-1')?.correctOptionId).toBe('c')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m1-situational-1')?.correctOptionId).toBe('b')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m2-situational-1')?.correctOptionId).toBe('a')
  })
})
