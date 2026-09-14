import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'

const activeBlockTypes = new Set([
  'checkpoint',
  'sequence-exercise',
  'decision-simulator',
])

describe('Procuraduría 104-2026 · 3PU-15 course integrity', () => {
  it('matches the alpha.2 audited curriculum snapshot', () => {
    expect(procuraduriaCourse.version).toBe('2026.09.14-alpha.2')
    expect(procuraduriaCourse.units).toHaveLength(17)
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions).toHaveLength(880)
    expect(procuraduriaCourse.sources).toHaveLength(37)
    expect(procuraduriaCourse.practiceConfig?.hasCaseLabs).toBe(true)
  })

  it('uses unique ids and keeps every unit, module and lesson connected in both directions', () => {
    for (const collection of [procuraduriaCourse.units, procuraduriaCourse.modules, procuraduriaCourse.lessons, procuraduriaCourse.questions, procuraduriaCourse.sources]) {
      const ids = collection.map((item) => item.id)
      expect(new Set(ids).size).toBe(ids.length)
    }

    const unitIds = new Set(procuraduriaCourse.units.map((item) => item.id))
    const moduleIds = new Set(procuraduriaCourse.modules.map((item) => item.id))
    const lessonIds = new Set(procuraduriaCourse.lessons.map((item) => item.id))

    for (const unit of procuraduriaCourse.units) {
      expect(unit.moduleIds).toHaveLength(5)
      for (const moduleId of unit.moduleIds) {
        expect(moduleIds.has(moduleId), `${unit.id} → ${moduleId}`).toBe(true)
        expect(procuraduriaCourse.modules.find((module) => module.id === moduleId)?.unitId).toBe(unit.id)
      }
    }

    for (const module of procuraduriaCourse.modules) {
      expect(unitIds.has(module.unitId), `${module.id} → ${module.unitId}`).toBe(true)
      expect(module.lessonIds).toHaveLength(3)
      for (const lessonId of module.lessonIds) {
        expect(lessonIds.has(lessonId), `${module.id} → ${lessonId}`).toBe(true)
        expect(procuraduriaCourse.lessons.find((lesson) => lesson.id === lessonId)?.moduleId).toBe(module.id)
      }
    }
  })

  it('keeps the zero-to-advanced progression and active learning in every module', () => {
    for (const module of procuraduriaCourse.modules) {
      const lessons = procuraduriaCourse.lessons
        .filter((lesson) => lesson.moduleId === module.id)
        .sort((a, b) => a.order - b.order)

      expect(lessons).toHaveLength(3)
      expect(lessons[0]?.title).toContain('fundamentos desde cero')
      expect(lessons[1]?.title).toContain('aplicación paso a paso')
      expect(lessons[2]?.title).toContain('nivel avanzado y trampas')

      for (const lesson of lessons) {
        expect(lesson.status).toBe('published')
        expect(lesson.durationMinutes).toBeGreaterThan(0)
        expect(lesson.skillIds.length).toBeGreaterThan(0)
        expect(lesson.blocks.some((block) => activeBlockTypes.has(block.type)), `${lesson.id} active learning`).toBe(true)
      }
    }
  })

  it('gives every module ten base questions and every lesson two unique checkpoints', () => {
    const sourceIds = new Set(procuraduriaCourse.sources.map((source) => source.id))
    const questionIds = new Set(procuraduriaCourse.questions.map((question) => question.id))
    const checkpointOwners = new Map<string, string>()

    for (const module of procuraduriaCourse.modules) {
      const baseQuestions = procuraduriaCourse.questions.filter((question) => question.moduleId === module.id && !question.integrated)
      expect(baseQuestions, module.id).toHaveLength(10)
      expect(baseQuestions.some((question) => question.type === 'pjs'), `${module.id} PJS`).toBe(true)
      expect(baseQuestions.some((question) => question.difficulty === 5), `${module.id} advanced question`).toBe(true)

      for (const question of baseQuestions) {
        expect(question.options).toHaveLength(3)
        expect(new Set(question.options.map((option) => option.id)).size, question.id).toBe(3)
        expect(question.options.some((option) => option.id === question.correctOptionId), question.id).toBe(true)
        expect(question.sourceIds.length, `${question.id} source count`).toBeGreaterThan(0)
        for (const sourceId of question.sourceIds) expect(sourceIds.has(sourceId), `${question.id} → ${sourceId}`).toBe(true)
      }
    }

    for (const lesson of procuraduriaCourse.lessons) {
      const checkpoints = lesson.blocks.filter((block) => block.type === 'checkpoint')
      expect(checkpoints, lesson.id).toHaveLength(2)
      for (const checkpoint of checkpoints) {
        if (checkpoint.type !== 'checkpoint') continue
        expect(questionIds.has(checkpoint.questionId), `${lesson.id} → ${checkpoint.questionId}`).toBe(true)
        expect(checkpointOwners.has(checkpoint.questionId), `${checkpoint.questionId} reused`).toBe(false)
        checkpointOwners.set(checkpoint.questionId, lesson.id)
      }
    }

    expect(checkpointOwners.size).toBe(510)
  })

  it('keeps all source references valid and sequences internally consistent', () => {
    const sourceIds = new Set(procuraduriaCourse.sources.map((source) => source.id))

    for (const lesson of procuraduriaCourse.lessons) {
      for (const block of lesson.blocks) {
        if (block.type === 'sources') {
          expect(block.sourceIds.length, `${lesson.id} sources`).toBeGreaterThan(0)
          for (const sourceId of block.sourceIds) expect(sourceIds.has(sourceId), `${lesson.id} → ${sourceId}`).toBe(true)
        }
        if (block.type === 'article') expect(sourceIds.has(block.sourceId), `${lesson.id} → ${block.sourceId}`).toBe(true)
        if (block.type === 'sequence-exercise') {
          const ids = block.items.map((item) => item.id)
          expect(ids.length).toBeGreaterThan(1)
          expect(new Set(ids).size).toBe(ids.length)
          expect(block.correctOrder).toHaveLength(ids.length)
          expect([...block.correctOrder].sort()).toEqual([...ids].sort())
        }
        if (block.type === 'decision-simulator') {
          expect(block.options).toHaveLength(3)
          expect(block.options.filter((option) => option.correct)).toHaveLength(1)
        }
      }
    }

    for (const question of procuraduriaCourse.questions) {
      for (const sourceId of question.sourceIds) expect(sourceIds.has(sourceId), `${question.id} → ${sourceId}`).toBe(true)
      for (const relatedModuleId of question.relatedModuleIds ?? []) {
        expect(procuraduriaCourse.modules.some((module) => module.id === relatedModuleId), `${question.id} → ${relatedModuleId}`).toBe(true)
      }
    }

    for (const source of procuraduriaCourse.sources) {
      expect(source.url, source.id).toMatch(/^https:\/\//)
      expect(source.verifiedAt, source.id).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('adds topic-specific enrichment to every default-study module and anchors critical CGD rules', () => {
    const defaultStudy = new Set([
      ...Array.from({ length: 75 }, (_, index) => `pgn-m${index}`),
      ...Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`),
    ])

    for (const moduleId of defaultStudy) {
      const foundation = procuraduriaCourse.lessons.find((lesson) => lesson.id === `${moduleId}-l1`)
      expect(foundation, moduleId).toBeTruthy()
      // Nine blocks is the generic foundation skeleton; every default module must add at least one topic-specific block.
      expect(foundation?.blocks.length ?? 0, `${moduleId} enrichment`).toBeGreaterThan(9)
    }

    const legalArticles = procuraduriaCourse.lessons.flatMap((lesson) =>
      lesson.blocks.filter((block) => block.type === 'article').map((block) => ({ lessonId: lesson.id, article: block.type === 'article' ? block.article : '' })),
    )
    expect(legalArticles.length).toBeGreaterThanOrEqual(12)
    expect(legalArticles.some((item) => item.lessonId === 'pgn-m20-l1' && item.article.includes('Arts. 9, 10 y 12'))).toBe(true)
    expect(legalArticles.some((item) => item.lessonId === 'pgn-m35-l1' && item.article.includes('Arts. 147–149'))).toBe(true)
    expect(legalArticles.some((item) => item.lessonId === 'pgn-m44-l1' && item.article.includes('Arts. 155–156'))).toBe(true)
  })

  it('publishes thirty genuine cross-module integrated decisions', () => {
    const integrated = procuraduriaCourse.questions.filter((question) => question.integrated)
    expect(integrated).toHaveLength(30)
    expect(new Set(integrated.map((question) => question.scenarioId))).toHaveLength(6)
    for (const question of integrated) {
      expect(question.type).toBe('pjs')
      expect(question.difficulty).toBeGreaterThanOrEqual(4)
      expect(question.relatedModuleIds?.length ?? 0).toBeGreaterThan(1)
      expect(question.scenarioId).toBeTruthy()
    }
  })

  it('keeps conditional specialties out while including the systems-profession reinforcement', () => {
    const conditional = new Set(Array.from({ length: 5 }, (_, index) => `pgn-m${75 + index}`))
    const systems = new Set(Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`))
    const exam = new Set(procuraduriaCourse.practiceConfig?.examModuleIds ?? [])
    const study = new Set(procuraduriaCourse.practiceConfig?.studyModuleIds ?? [])
    const transversal = new Set(procuraduriaCourse.practiceConfig?.transversalModuleIds ?? [])

    for (const moduleId of conditional) {
      expect(exam.has(moduleId), `${moduleId} exam`).toBe(false)
      expect(study.has(moduleId), `${moduleId} study`).toBe(false)
      expect(transversal.has(moduleId), `${moduleId} transversal`).toBe(false)
    }
    for (const moduleId of systems) {
      expect(exam.has(moduleId), `${moduleId} exam`).toBe(true)
      expect(study.has(moduleId), `${moduleId} study`).toBe(true)
      expect(transversal.has(moduleId), `${moduleId} transversal`).toBe(true)
    }
  })

  it('documents the exact behavioral profile and the engineering-systems specialization', () => {
    const moduleTitles = procuraduriaCourse.modules.map((module) => module.title).join(' | ')
    expect(moduleTitles).toContain('Responsabilidad con la Organización')
    expect(moduleTitles).toContain('Organización del Trabajo')
    expect(moduleTitles).toContain('Investigación · Nivel B')
    expect(moduleTitles).toContain('Pensamiento Conceptual · Nivel A')
    expect(moduleTitles).toContain('Orientación a Resultados · Nivel A')
    expect(moduleTitles).toContain('Cumplimiento de Parámetros · Nivel B')
    expect(moduleTitles).toContain('Logs, autenticación e identidad digital')
    expect(moduleTitles).toContain('Bases de datos como fuente probatoria')
    expect(moduleTitles).toContain('Informe técnico informático')
    expect(moduleTitles).toContain('Arquitectura de sistemas e información')
    expect(moduleTitles).toContain('Seguridad de la información y ciberseguridad')
    expect(moduleTitles).toContain('Ingeniería de software y ciclo de cambio')
  })
})
