import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { moduleReviewQuestions, priorModuleLessonsCompleted, MODULE_PASS_SCORE, MODULE_REVIEW_COUNT } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Procuraduría: aprendizaje y evaluación dentro de cada módulo', () => {
  it('elige tres preguntas ya existentes de cada uno de los 85 módulos sin aumentar el banco', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.questions).toHaveLength(2008)
    const pool = new Set(practiceQuestionPool(procuraduriaCourse).map(q => q.id))
    for (const module of procuraduriaCourse.modules) {
      const selected = moduleReviewQuestions(procuraduriaCourse, module.id)
      expect(selected, module.id).toHaveLength(MODULE_REVIEW_COUNT)
      expect(new Set(selected.map(q => q.id)).size).toBe(MODULE_REVIEW_COUNT)
      for (const question of selected) {
        expect(question.moduleId, question.id).toBe(module.id)
        expect(pool.has(question.id), question.id).toBe(true)
        expect(question.type, question.id).toBe('pjs')
        expect(question.case?.length ?? 0, question.id).toBeGreaterThan(180)
        expect(question.difficulty).toBeGreaterThanOrEqual(3)
      }
    }
  })

  it('usa combinaciones alternativas de las mismas preguntas para practicar errores', () => {
    for (const module of procuraduriaCourse.modules) {
      const first = moduleReviewQuestions(procuraduriaCourse, module.id, 0)
      const retry = moduleReviewQuestions(procuraduriaCourse, module.id, 1)
      expect(first.map(q => q.id).join(','), module.id).not.toBe(retry.map(q => q.id).join(','))
      expect(retry).toHaveLength(3)
    }
    expect(MODULE_PASS_SCORE).toBe(2)
    expect(MODULE_REVIEW_COUNT).toBe(3)
  })

  it('mantiene dos checkpoints por lección y preserva las lecciones y claves históricas', () => {
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    for (const lesson of procuraduriaCourse.lessons) {
      const checkpoints = lesson.blocks.filter(b => b.type === 'checkpoint')
      expect(checkpoints, lesson.id).toHaveLength(2)
      for (const block of checkpoints) {
        if (block.type !== 'checkpoint') continue
        expect(procuraduriaCourse.questions.some(q => q.id === block.questionId && q.moduleId === lesson.moduleId), block.questionId).toBe(true)
      }
    }
  })

  it('refuerza con el contexto específico del módulo las preguntas de las dos primeras lecciones', () => {
    for (const module of procuraduriaCourse.modules) {
      const questions = procuraduriaCourse.questions.filter(q => q.moduleId === module.id && /^pgn-m\d+-q[1-4]$/.test(q.id))
      expect(questions, module.id).toHaveLength(4)
      expect(questions[0]!.stem, module.id).toContain(module.title)
      for (const question of questions.slice(1)) {
        expect(question.case?.length ?? 0, question.id).toBeGreaterThan(90)
      }
    }
  })

  it('solo habilita el salto automático al siguiente módulo tras las dos lecciones anteriores', () => {
    for (const module of procuraduriaCourse.modules) {
      const l1 = procuraduriaCourse.lessons.find(l => l.moduleId === module.id && l.order === 1)!
      const l2 = procuraduriaCourse.lessons.find(l => l.moduleId === module.id && l.order === 2)!
      expect(priorModuleLessonsCompleted(procuraduriaCourse, module.id), module.id).toBe(false)
      expect(priorModuleLessonsCompleted(procuraduriaCourse, module.id, {
        lessons: { [l1.id]: { status: 'completed', readPercent: 100 } },
      }), module.id).toBe(false)
      expect(priorModuleLessonsCompleted(procuraduriaCourse, module.id, {
        lessons: {
          [l1.id]: { status: 'completed', readPercent: 100 },
          [l2.id]: { status: 'completed', readPercent: 100 },
        },
      }), module.id).toBe(true)
    }
  })

  it('se aplica solo a Procuraduría, no altera los perfiles o el banco DIAN', () => {
    expect(moduleReviewQuestions(dianGestorCourse, 'm9')).toEqual([])
    expect(moduleReviewQuestions(procuraduriaCourse, 'pgn-m100')).toEqual([])
    expect(moduleReviewQuestions(procuraduriaCourse, 'pgn-m0')).toHaveLength(3)
    expect(practiceQuestionPool(dianGestorCourse)).toBe(dianGestorCourse.questions)
  })
})
