import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { buildLessonNarration, splitNarrationText } from '../../src/lib/lessonNarration'
import { optionLabel, questionOptionsForDisplay } from '../../src/lib/questionPresentation'

const courses = [dianGestorCourse, procuraduriaCourse]

describe('lesson narration', () => {
  it('splits long narration into speech-friendly chunks', () => {
    const chunks = splitNarrationText('Esta es una primera frase. '.repeat(40), 120)
    expect(chunks.length).toBeGreaterThan(1)
    expect(chunks.every((chunk) => chunk.length <= 120)).toBe(true)
  })

  it('can build a non-empty narration for every published lesson in every course', () => {
    for (const course of courses) {
      for (const lesson of course.lessons.filter((item) => item.status === 'published')) {
        const chunks = buildLessonNarration(course, lesson)
        expect(chunks.length, `${course.id}:${lesson.id}`).toBeGreaterThan(0)
        expect(chunks.every((chunk) => chunk.length <= 280), `${course.id}:${lesson.id}`).toBe(true)
      }
    }
  })

  it('reads checkpoint options in the same deterministic order shown on screen without revealing rationales', () => {
    for (const course of courses) {
      const lesson = course.lessons.find((item) => item.blocks.some((block) => block.type === 'checkpoint'))
      expect(lesson, course.id).toBeTruthy()
      if (!lesson) continue

      const narration = buildLessonNarration(course, lesson).join(' ')
      const checkpoint = lesson.blocks.find((block) => block.type === 'checkpoint')
      if (!checkpoint || checkpoint.type !== 'checkpoint') continue

      const question = course.questions.find((item) => item.id === checkpoint.questionId)
      expect(question, `${course.id}:${checkpoint.questionId}`).toBeTruthy()
      if (!question) continue

      expect(narration).toContain(question.stem)
      expect(narration).not.toContain(question.explanation)
      for (const option of question.options) expect(narration).not.toContain(option.rationale)

      const displayOptions = questionOptionsForDisplay(question)
      for (const [index, option] of displayOptions.entries()) expect(narration).toContain(`Opción ${optionLabel(index)}. ${option.text}`)
    }
  })

  it('does not narrate the answer rationale of PGN decision simulators before the learner answers', () => {
    const lesson = procuraduriaCourse.lessons.find((item) => item.blocks.some((block) => block.type === 'decision-simulator'))
    expect(lesson).toBeTruthy()
    if (!lesson) return

    const simulator = lesson.blocks.find((block) => block.type === 'decision-simulator')
    expect(simulator?.type).toBe('decision-simulator')
    if (!simulator || simulator.type !== 'decision-simulator') return

    const narration = buildLessonNarration(procuraduriaCourse, lesson).join(' ')
    expect(narration).toContain(simulator.scenario)
    expect(narration).toContain(simulator.prompt)
    for (const option of simulator.options) expect(narration).not.toContain(option.rationale)
  })
})
