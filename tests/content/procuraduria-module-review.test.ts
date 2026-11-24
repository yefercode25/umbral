import { describe, expect, it } from 'vitest'
import { procuraduriaCourse as course } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { lessonAssessmentQuestions, LESSON_PASS_SCORE, LESSON_REVIEW_COUNT } from '../../src/lib/lessonAssessment'
import { isPgnAuthored } from '../../src/lib/procuraduriaScopes'
import { priorModuleLessonsCompleted } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { useProgressStore } from '../../src/stores/progressStore'

describe('Procuraduría · evaluación posterior a cada lección', () => {
  it('entrega cinco reactivos por lección en 255 lecciones, 15 distintos por módulo, sin ampliar el banco', () => {
    expect(course.questions).toHaveLength(2062)
    expect(course.lessons).toHaveLength(255)
    const seen = new Set<string>()
    let situations = 0
    for (const lesson of course.lessons) {
      const qs = lessonAssessmentQuestions(course, lesson)
      expect(qs, lesson.id).toHaveLength(5)
      const checkpoints = lesson.blocks.flatMap(b => b.type === 'checkpoint' ? [b.questionId] : [])
      expect(qs.slice(0,2).map(q => q.id)).toEqual(checkpoints)
      for (const q of qs) {
        expect(q.moduleId).toBe(lesson.moduleId)
        expect(seen.has(q.id), q.id).toBe(false)
        expect(isPgnAuthored(q), q.id).toBe(false)
        seen.add(q.id)
        if (q.id.includes('-situational-')) situations++
      }
    }
    expect(seen.size).toBe(1275)
    expect(situations).toBe(765)
    expect(LESSON_PASS_SCORE).toBe(4)
    expect(LESSON_REVIEW_COUNT).toBe(5)
  })

  it('alinea prescripción y sanciones con sus lecciones, y rota los mismos IDs en el reintento', () => {
    const l1 = course.lessons.find(l => l.id === 'pgn-m24-l1')!
    const l2 = course.lessons.find(l => l.id === 'pgn-m24-l2')!
    expect(lessonAssessmentQuestions(course,l1).slice(2).map(q=>q.id)).toEqual([7,8,9].map(n=>'pgn-m24-situational-'+n))
    expect(lessonAssessmentQuestions(course,l2).slice(2).map(q=>q.id)).toEqual([2,3,4].map(n=>'pgn-m24-situational-'+n))
    for (const lesson of course.lessons) {
      const ids = lessonAssessmentQuestions(course,lesson).map(q=>q.id)
      const retry = lessonAssessmentQuestions(course,lesson,1).map(q=>q.id)
      expect(retry).not.toEqual(ids)
      expect([...retry].sort()).toEqual([...ids].sort())
    }
  })

  it('conserva el avance, aprobación y mejor resultado sin modificar DIAN', () => {
    const store = useProgressStore.getState()
    store.resetCourse(course.id)
    store.ensureCourse(course)
    store.markLessonCompleted(course,'pgn-m24-l1')
    store.recordLessonAssessment(course,'pgn-m24-l2',4)
    store.recordLessonAssessment(course,'pgn-m24-l2',2)
    store.recordLessonAssessment(dianGestorCourse,dianGestorCourse.lessons[0]!.id,5)
    const p = useProgressStore.getState().courses[course.id]!
    expect(p.lessons['pgn-m24-l1']?.status).toBe('completed')
    expect(p.lessonAssessments?.['pgn-m24-l2']).toMatchObject({attempts:2,lastScore:2,bestScore:4})
    expect(useProgressStore.getState().courses[dianGestorCourse.id]?.lessonAssessments).toBeUndefined()
    store.resetCourse(course.id)
  })

  it('mantiene el control de las dos lecciones previas y el banco DIAN', () => {
    for (const module of course.modules) {
      const l1 = course.lessons.find(l=>l.moduleId===module.id && l.order===1)!
      const l2 = course.lessons.find(l=>l.moduleId===module.id && l.order===2)!
      expect(priorModuleLessonsCompleted(course,module.id)).toBe(false)
      expect(priorModuleLessonsCompleted(course,module.id,{lessons:{
        [l1.id]:{status:'completed',readPercent:100},
        [l2.id]:{status:'completed',readPercent:100}
      }})).toBe(true)
    }
    expect(lessonAssessmentQuestions(dianGestorCourse,dianGestorCourse.lessons[0]!)).toEqual([])
    expect(practiceQuestionPool(dianGestorCourse)).toBe(dianGestorCourse.questions)
    expect(practiceQuestionPool(course)).toHaveLength(1212)
  })
})
