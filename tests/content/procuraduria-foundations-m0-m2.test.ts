import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { caseProfileFor } from '../../content/courses/procuraduria-104-2026-3pu15/caseProfiles'
import { procuraduriaModuleBlueprints } from '../../content/courses/procuraduria-104-2026-3pu15/blueprints'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

const firstThree = ['pgn-m0', 'pgn-m1', 'pgn-m2']

describe('Auditoría editorial por lotes: Procuraduría M0–M2', () => {
  it('conserva estructura, preguntas e historial identificable sin ítems adicionales', () => {
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    for (const moduleId of firstThree) {
      expect(procuraduriaCourse.questions.filter(q => q.moduleId === moduleId && q.id.includes('-transfer-'))).toHaveLength(2)
      const selected = moduleReviewQuestions(procuraduriaCourse, moduleId)
      expect(selected).toHaveLength(3)
      expect(selected.every(q => q.moduleId === moduleId)).toBe(true)
    }
  })

  it('añade ejemplos concretos a las tres lecciones de los tres módulos', () => {
    const expectedPerLesson: Record<string, string> = {
      'pgn-m0-l1': 'Fuente oficial y estrategia',
      'pgn-m0-l2': 'Qué puedes apoyar',
      'pgn-m0-l3': 'Experiencia técnica',
      'pgn-m1-l1': 'Conceptos parecidos',
      'pgn-m1-l2': 'El error de citar',
      'pgn-m1-l3': 'Antes de responder',
      'pgn-m2-l1': 'De una cifra memorizada',
      'pgn-m2-l2': 'Cuaderno de errores',
      'pgn-m2-l3': 'Dos casos con la misma cifra',
    }
    for (const [lessonId, title] of Object.entries(expectedPerLesson)) {
      const lesson = procuraduriaCourse.lessons.find(l => l.id === lessonId)
      expect(lesson, lessonId).toBeDefined()
      expect(lesson?.blocks.some(b => 'title' in b && b.title?.includes(title)), lessonId).toBe(true)
    }
    const m0 = procuraduriaCourse.lessons.find(l => l.id === 'pgn-m0-l1')!
    const m1 = procuraduriaCourse.lessons.find(l => l.id === 'pgn-m1-l1')!
    const m2 = procuraduriaCourse.lessons.find(l => l.id === 'pgn-m2-l1')!
    expect(m0.blocks.some(b => b.type === 'comparison' && b.title.includes('Fuente oficial'))).toBe(true)
    expect(m1.blocks.some(b => b.type === 'comparison' && b.title.includes('Conceptos parecidos'))).toBe(true)
    expect(m2.blocks.some(b => b.type === 'comparison' && b.title.includes('cifra memorizada'))).toBe(true)
  })

  it('distingue la norma vigente, el oficio profesional y la excepción del art. 208', () => {
    const m0 = procuraduriaCourse.lessons.find(l => l.id === 'pgn-m0-l1')!
    const m2 = procuraduriaCourse.lessons.find(l => l.id === 'pgn-m2-l1')!
    const sources0 = m0.blocks.find(b => b.type === 'sources')
    const sources2 = m2.blocks.find(b => b.type === 'sources')
    expect(sources0?.type).toBe('sources')
    expect(sources2?.type).toBe('sources')
    if (sources0?.type === 'sources') {
      expect(sources0.sourceIds).toContain('pgn-res-212-2026')
      expect(sources0.sourceIds).toContain('pgn-res-243-2026')
    }
    if (sources2?.type === 'sources') {
      expect(sources2.sourceIds).toContain('ley-1952-2019')
      expect(sources2.sourceIds).toContain('ley-2094-2021')
    }
    const m2text = m2.blocks.filter(b => b.type === 'comparison').flatMap(b => b.type === 'comparison' ? b.rows.flat() : []).join(' ')
    expect(m2text).toContain('seis meses')
    expect(m2text).toContain('derechos humanos')
    expect(m2text).toContain('identificación')
  })

  it('sustituye casos genéricos por situaciones propias del objetivo formativo', () => {
    const blueprints = procuraduriaModuleBlueprints.filter(bp => firstThree.includes(bp.id))
    expect(blueprints).toHaveLength(3)
    for (const blueprint of blueprints) {
      const profile = caseProfileFor(blueprint)
      expect(profile.setting.length).toBeGreaterThan(80)
      expect(profile.document.length).toBeGreaterThan(80)
      expect(profile.change.length).toBeGreaterThan(80)
      const questions = moduleReviewQuestions(procuraduriaCourse, blueprint.id)
      for (const question of questions) {
        expect(question.case?.length ?? 0).toBeGreaterThan(260)
        expect(question.options).toHaveLength(3)
        expect(new Set(question.options.map(o => o.text.trim())).size).toBe(3)
        expect(question.options.some(o => o.id === question.correctOptionId)).toBe(true)
        expect(question.explanation.length).toBeGreaterThan(120)
      }
    }
  })

  it('mantiene las posiciones de respuesta correcta ya asociadas a sus IDs', () => {
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m0-situational-1')?.correctOptionId).toBe('c')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m1-situational-1')?.correctOptionId).toBe('b')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m2-situational-1')?.correctOptionId).toBe('a')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m0-transfer-1')?.correctOptionId).toBe('c')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m1-transfer-1')?.correctOptionId).toBe('b')
    expect(procuraduriaCourse.questions.find(q => q.id === 'pgn-m2-transfer-1')?.correctOptionId).toBe('a')
  })
})
