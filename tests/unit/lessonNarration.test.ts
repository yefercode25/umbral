import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { buildLessonNarration, splitNarrationText } from '../../src/lib/lessonNarration'
import { optionLabel, questionOptionsForDisplay } from '../../src/lib/questionPresentation'

describe('lesson narration', () => {
  it('splits long narration into speech-friendly chunks', () => {
    const chunks = splitNarrationText('Esta es una primera frase. '.repeat(40), 120)
    expect(chunks.length).toBeGreaterThan(1)
    expect(chunks.every((chunk) => chunk.length <= 120)).toBe(true)
  })

  it('can build a non-empty narration for every published lesson', () => {
    for (const lesson of dianGestorCourse.lessons.filter((item) => item.status === 'published')) {
      const chunks = buildLessonNarration(dianGestorCourse, lesson)
      expect(chunks.length, lesson.id).toBeGreaterThan(0)
      expect(chunks.every((chunk) => chunk.length <= 280), lesson.id).toBe(true)
    }
  })

  it('reads checkpoint options in the same deterministic order shown on screen without revealing rationales', () => {
    const lesson = dianGestorCourse.lessons.find((item) => item.id === 'm21-l1')
    expect(lesson).toBeTruthy()
    if (!lesson) return

    const narration = buildLessonNarration(dianGestorCourse, lesson).join(' ')
    const checkpoint = lesson.blocks.find((block) => block.type === 'checkpoint')
    expect(checkpoint?.type).toBe('checkpoint')
    if (!checkpoint || checkpoint.type !== 'checkpoint') return

    const question = dianGestorCourse.questions.find((item) => item.id === checkpoint.questionId)
    expect(question).toBeTruthy()
    if (!question) return

    expect(narration).toContain(question.stem)
    expect(narration).not.toContain(question.explanation)
    for (const option of question.options) expect(narration).not.toContain(option.rationale)

    const displayOptions = questionOptionsForDisplay(question)
    for (const [index, option] of displayOptions.entries()) {
      expect(narration).toContain(`Opción ${optionLabel(index)}. ${option.text}`)
    }
  })
})
