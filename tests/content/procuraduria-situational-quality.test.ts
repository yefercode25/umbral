import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { selectExamQuestions } from '../../src/lib/questionSelection'
import { buildAdaptiveSession } from '../../src/lib/adaptivePractice'

function lessonCheckpointIds() {
  return new Set(
    procuraduriaCourse.lessons.flatMap((lesson) =>
      lesson.blocks
        .filter((block) => block.type === 'checkpoint')
        .map((block) => block.type === 'checkpoint' ? block.questionId : ''),
    ),
  )
}

describe('Procuraduría · práctica independiente de las lecciones', () => {
  const practice = practiceQuestionPool(procuraduriaCourse)
  const checkpoints = lessonCheckpointIds()

  it('preserva los 510 controles históricos y ofrece 1098 preguntas evaluables distintas', () => {
    expect(checkpoints.size).toBe(510)
    expect(practice).toHaveLength(1098)
    expect(practice.filter((question) => !question.integrated)).toHaveLength(1068)
    expect(practice.filter((question) => question.integrated)).toHaveLength(30)
    expect(practice.filter((question) => checkpoints.has(question.id))).toHaveLength(0)
    expect(practice.filter(q => q.id.includes('-transfer-'))).toHaveLength(170)
    expect(practice.filter(q => q.id.startsWith('pgn-dossier-'))).toHaveLength(48)
    expect(procuraduriaCourse.questions).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map((question) => question.id)).size).toBe(1948)
  })

  it('genera diez casos nuevos por cada uno de los 85 módulos', () => {
    const sourceIds = new Set(procuraduriaCourse.sources.map((source) => source.id))
    for (const module of procuraduriaCourse.modules) {
      const cases = practice.filter((question) => question.moduleId === module.id && question.id.includes('-situational-'))
      expect(cases, module.id).toHaveLength(10)
      const normalized = cases.map((question) => (question.case ?? '').trim().toLocaleLowerCase('es'))
      expect(new Set(normalized).size, module.id + ' repeated context').toBe(10)

      const correctLocations = new Set<string>()
      for (const question of cases) {
        expect(question.id, module.id).toMatch(/^pgn-m\d+-situational-(10|[1-9])$/)
        expect(question.case?.length ?? 0, question.id + ' context').toBeGreaterThan(180)
        expect(question.stem.length, question.id + ' stem').toBeGreaterThan(35)
        expect(question.difficulty, question.id + ' difficulty').toBeGreaterThanOrEqual(3)
        expect(question.options).toHaveLength(3)
        expect(new Set(question.options.map((o) => o.text.toLowerCase().trim())).size, question.id).toBe(3)
        expect(question.options.some((item) => item.id === question.correctOptionId), question.id).toBe(true)
        expect(question.sourceIds.length, question.id).toBeGreaterThan(0)
        for (const sourceId of question.sourceIds) expect(sourceIds.has(sourceId), question.id + ' source').toBe(true)
        correctLocations.add(question.correctOptionId)
      }
      expect(correctLocations.size, module.id + ' correct answer positions').toBe(3)
    }
  })

  it('impide que diagnóstico, simulacros y adaptativa recuperen checkpoints', () => {
    for (const profile of ['functional-quick', 'functional-training', 'functional-extended', 'study-mix', 'transversal-check'] as const) {
      const questions = selectExamQuestions(procuraduriaCourse, profile)
      expect(questions.length, profile).toBeGreaterThan(0)
      expect(questions.some((question) => checkpoints.has(question.id)), profile).toBe(false)
    }
    const adaptive = buildAdaptiveSession(procuraduriaCourse, undefined, 12, 42)
    expect(adaptive).toHaveLength(12)
    expect(adaptive.some((question) => checkpoints.has(question.id))).toBe(false)
  })

  it('no modifica la selección DIAN', async () => {
    const { dianGestorCourse } = await import('../../content/courses/dian-2676-gestor-ii/course')
    expect(practiceQuestionPool(dianGestorCourse)).toBe(dianGestorCourse.questions)
  })
})
