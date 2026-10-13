import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { selectExamQuestions } from '../../src/lib/questionSelection'

const lessons = dianGestorCourse.lessons.filter((lesson) => lesson.id.includes('-practico-2026-'))
const questions = dianGestorCourse.questions.filter((question) => question.id.startsWith('q-transversal-2026-'))

// Ejercicios independientes: no se presentan como reactivos oficiales del proceso CNSC.
describe('DIAN 2676 · ampliación práctica transversal de octubre de 2026', () => {
  it('integra 18 capítulos, 36 PJS originales y conserva los cursos y módulos anteriores', () => {
    expect(lessons).toHaveLength(18)
    expect(questions).toHaveLength(36)
    expect(dianGestorCourse.modules).toHaveLength(29)
    for (const [moduleId, count] of [['m1',2],['m2',9],['m4',4],['m20',3]] as const) {
      expect(lessons.filter((lesson) => lesson.moduleId === moduleId), moduleId).toHaveLength(count)
    }
  })

  it('enseña con matriz, expediente, procedimiento, cambio de hechos y ejercicios aplicados', () => {
    const ids = new Set(dianGestorCourse.questions.map((question) => question.id))
    for (const lesson of lessons) {
      for (const blockType of ['definition','paragraph','comparison','steps','example','rule','trap','sequence-exercise','decision-simulator','sources'] as const) {
        expect(lesson.blocks.some((block) => block.type === blockType), `${lesson.id}: ${blockType}`).toBe(true)
      }
      expect(lesson.blocks.filter((block) => block.type === 'checkpoint'), lesson.id).toHaveLength(2)
      for (const block of lesson.blocks) {
        if (block.type === 'checkpoint') expect(ids.has(block.questionId), lesson.id).toBe(true)
        if (block.type === 'sequence-exercise') {
          expect(block.items.map((item) => item.id)).not.toEqual(block.correctOrder)
          expect(new Set(block.items.map((item) => item.id))).toEqual(new Set(block.correctOrder))
        }
        if (block.type === 'decision-simulator') {
          expect(block.options).toHaveLength(3)
          expect(block.options.filter((option) => option.correct)).toHaveLength(1)
          expect(block.options.every((option) => option.rationale.length >= 25)).toBe(true)
        }
      }
    }
  })

  it('cada PJS plantea expediente concreto, tres alternativas y explicaciones de descartes', () => {
    for (const question of questions) {
      expect(question.type, question.id).toBe('pjs')
      expect(question.case?.length ?? 0, question.id).toBeGreaterThan(75)
      expect(question.stem.length, question.id).toBeGreaterThan(25)
      expect(question.options, question.id).toHaveLength(3)
      expect(question.options.every((option) => option.rationale.length > 22), question.id).toBe(true)
      expect(question.explanation.length, question.id).toBeGreaterThan(110)
    }
  })

  it('diferencia versión 6.1 MIPG en corte GOA y versión 7 posterior', () => {
    const chapter = lessons.find((lesson) => lesson.id === 'm2-practico-2026-mipg-corte')
    const body = chapter?.blocks.map((block) => 'text' in block ? block.text : '').join(' ') ?? ''
    expect(body).toMatch(/SIETE|siete/)
    expect(body).toMatch(/agosto de 2026/)
    const historic = dianGestorCourse.questions.find((question) => question.id === 'q-mipg-v6-02')
    expect(historic?.options.find((option) => option.id === historic.correctOptionId)?.text).toBe('Control Interno.')
  })

  it('conserva exclusivamente PJS en el simulacro funcional profundo', () => {
    for (let n = 0; n < 20; n++) {
      const selection = selectExamQuestions(dianGestorCourse,'functional-deep')
      expect(selection).toHaveLength(20)
      expect(selection.every((question) => question.type === 'pjs')).toBe(true)
      expect(selection.some((question) => question.moduleId === 'm20')).toBe(false)
    }
  })
})
