import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'

const activeBlockTypes = new Set([
  'checkpoint',
  'sequence-exercise',
  'prescription-simulator',
  'coactive-simulator',
  'account-simulator',
  'enforcement-simulator',
  'refund-simulator',
  'behavior-simulator',
  'concursal-simulator',
])

describe('DIAN Gestor II course integrity', () => {
  it('matches the audited alpha.6 content snapshot', () => {
    expect(dianGestorCourse.version).toBe('2026.09.13-alpha.6')
    expect(dianGestorCourse.units).toHaveLength(9)
    expect(dianGestorCourse.modules).toHaveLength(29)
    expect(dianGestorCourse.lessons).toHaveLength(211)
    expect(dianGestorCourse.questions).toHaveLength(615)
    expect(dianGestorCourse.sources).toHaveLength(93)
  })

  it('uses unique ids across core collections', () => {
    for (const collection of [dianGestorCourse.units, dianGestorCourse.modules, dianGestorCourse.lessons, dianGestorCourse.questions, dianGestorCourse.sources]) {
      const ids = collection.map((item) => item.id)
      expect(new Set(ids).size).toBe(ids.length)
    }
  })

  it('keeps units, modules and lessons connected in both directions', () => {
    const unitIds = new Set(dianGestorCourse.units.map((item) => item.id))
    const moduleIds = new Set(dianGestorCourse.modules.map((item) => item.id))
    const lessonIds = new Set(dianGestorCourse.lessons.map((item) => item.id))

    for (const unit of dianGestorCourse.units) {
      for (const moduleId of unit.moduleIds) {
        expect(moduleIds.has(moduleId), `${unit.id} → ${moduleId}`).toBe(true)
        expect(dianGestorCourse.modules.find((module) => module.id === moduleId)?.unitId, `${moduleId} → ${unit.id}`).toBe(unit.id)
      }
    }

    for (const module of dianGestorCourse.modules) {
      expect(unitIds.has(module.unitId), `${module.id} → ${module.unitId}`).toBe(true)
      expect(dianGestorCourse.units.find((unit) => unit.id === module.unitId)?.moduleIds.includes(module.id), `${module.unitId} must list ${module.id}`).toBe(true)

      const orders = module.lessonIds
        .map((lessonId) => dianGestorCourse.lessons.find((lesson) => lesson.id === lessonId))
        .filter((lesson): lesson is NonNullable<typeof lesson> => Boolean(lesson))
        .map((lesson) => lesson.order)

      expect(new Set(orders).size, `${module.id} lesson order`).toBe(orders.length)
      for (const lessonId of module.lessonIds) {
        expect(lessonIds.has(lessonId), `${module.id} → ${lessonId}`).toBe(true)
        expect(dianGestorCourse.lessons.find((lesson) => lesson.id === lessonId)?.moduleId, `${lessonId} → ${module.id}`).toBe(module.id)
      }
    }

    for (const lesson of dianGestorCourse.lessons) {
      expect(moduleIds.has(lesson.moduleId), `${lesson.id} → ${lesson.moduleId}`).toBe(true)
      expect(dianGestorCourse.modules.find((module) => module.id === lesson.moduleId)?.lessonIds.includes(lesson.id), `${lesson.moduleId} must list ${lesson.id}`).toBe(true)
      expect(lesson.durationMinutes).toBeGreaterThan(0)
      expect(lesson.skillIds.length).toBeGreaterThan(0)
    }
  })

  it('keeps every published lesson active and every checkpoint unique to one lesson', () => {
    const checkpointOwners = new Map<string, string>()

    for (const lesson of dianGestorCourse.lessons.filter((item) => item.status === 'published')) {
      expect(lesson.blocks.some((block) => activeBlockTypes.has(block.type)), `${lesson.id} must include active learning`).toBe(true)

      for (const block of lesson.blocks) {
        if (block.type !== 'checkpoint') continue
        expect(checkpointOwners.has(block.questionId), `${block.questionId} reused by ${checkpointOwners.get(block.questionId)} and ${lesson.id}`).toBe(false)
        checkpointOwners.set(block.questionId, lesson.id)
      }
    }
  })

  it('only references existing questions and sources and validates sequence exercises', () => {
    const moduleIds = new Set(dianGestorCourse.modules.map((item) => item.id))
    const questionIds = new Set(dianGestorCourse.questions.map((item) => item.id))
    const sourceIds = new Set(dianGestorCourse.sources.map((item) => item.id))

    for (const lesson of dianGestorCourse.lessons) {
      for (const block of lesson.blocks) {
        if (block.type === 'checkpoint') expect(questionIds.has(block.questionId), `${lesson.id} → ${block.questionId}`).toBe(true)
        if (block.type === 'sources') for (const sourceId of block.sourceIds) expect(sourceIds.has(sourceId), `${lesson.id} → ${sourceId}`).toBe(true)
        if (block.type === 'article') expect(sourceIds.has(block.sourceId), `${lesson.id} → ${block.sourceId}`).toBe(true)
        if (block.type === 'sequence-exercise') {
          const itemIds = block.items.map((item) => item.id)
          expect(itemIds.length, `${lesson.id} sequence size`).toBeGreaterThan(1)
          expect(new Set(itemIds).size, `${lesson.id} sequence item ids`).toBe(itemIds.length)
          expect(new Set(block.correctOrder).size, `${lesson.id} sequence correct ids`).toBe(block.correctOrder.length)
          expect(block.correctOrder, `${lesson.id} sequence order length`).toHaveLength(itemIds.length)
          expect([...block.correctOrder].sort(), `${lesson.id} sequence set`).toEqual([...itemIds].sort())
        }
      }
    }

    for (const question of dianGestorCourse.questions) {
      expect(moduleIds.has(question.moduleId), `${question.id} → ${question.moduleId}`).toBe(true)
      for (const relatedModuleId of question.relatedModuleIds ?? []) expect(moduleIds.has(relatedModuleId), `${question.id} → ${relatedModuleId}`).toBe(true)
      if (question.integrated) {
        expect(question.scenarioId, `${question.id} integrated scenario`).toBeTruthy()
        expect(question.type, `${question.id} integrated type`).toBe('pjs')
      }
      expect(question.options, question.id).toHaveLength(3)
      expect(new Set(question.options.map((option) => option.id)).size, `${question.id} option ids`).toBe(3)
      expect(question.options.some((option) => option.id === question.correctOptionId), question.id).toBe(true)
      expect(question.sourceIds.length, `${question.id} must cite a source`).toBeGreaterThan(0)
      expect(question.verifiedAt, `${question.id} verifiedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      for (const sourceId of question.sourceIds) expect(sourceIds.has(sourceId), `${question.id} → ${sourceId}`).toBe(true)
    }

    for (const source of dianGestorCourse.sources) {
      expect(source.url, source.id).toMatch(/^https:\/\//)
      expect(source.verifiedAt, `${source.id} verifiedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    }
  })

  it('keeps published modules connected to published lessons', () => {
    for (const module of dianGestorCourse.modules.filter((item) => item.status === 'published')) {
      const lessons = dianGestorCourse.lessons.filter((lesson) => module.lessonIds.includes(lesson.id) && lesson.status === 'published')
      expect(lessons.length, module.id).toBeGreaterThan(0)
    }
  })

  it('keeps the course metadata explicit about its provisional guide status', () => {
    expect(dianGestorCourse.disclaimer.length).toBeGreaterThan(40)
    expect(dianGestorCourse.officialGuideStatus).toBe('pending')
    expect(dianGestorCourse.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})
