import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { deterministicOrder, questionOptionsForDisplay } from '../../src/lib/questionPresentation'

describe('question presentation ordering', () => {
  it('is deterministic for the same seed and preserves every item exactly once', () => {
    const items = ['a', 'b', 'c', 'd', 'e']
    const first = deterministicOrder(items, 'session:42', (item) => item)
    const second = deterministicOrder(items, 'session:42', (item) => item)

    expect(first).toEqual(second)
    expect([...first].sort()).toEqual([...items].sort())
  })

  it('lets a different practice seed produce a different order', () => {
    const items = Array.from({ length: 20 }, (_, index) => `q-${index}`)
    const first = deterministicOrder(items, 'practice:1', (item) => item)
    const second = deterministicOrder(items, 'practice:2', (item) => item)

    expect(second).not.toEqual(first)
  })

  it('neutralizes the editorial correct-option position pattern when questions are displayed', () => {
    const positionCounts = [0, 0, 0]

    for (const question of dianGestorCourse.questions) {
      const displayed = questionOptionsForDisplay(question)
      expect(new Set(displayed.map((option) => option.id)).size, question.id).toBe(3)
      const correctPosition = displayed.findIndex((option) => option.id === question.correctOptionId)
      expect(correctPosition, question.id).toBeGreaterThanOrEqual(0)
      if (correctPosition >= 0) positionCounts[correctPosition] = (positionCounts[correctPosition] ?? 0) + 1
    }

    const minimumExpected = dianGestorCourse.questions.length * 0.25
    for (const count of positionCounts) expect(count).toBeGreaterThan(minimumExpected)
  })
})
