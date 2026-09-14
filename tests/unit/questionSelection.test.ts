import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { examProfilesForCourse, selectExamQuestions } from '../../src/lib/questionSelection'

const courses = [dianGestorCourse, procuraduriaCourse]

describe('exam question selection', () => {
  it('returns each requested size without duplicate questions for every course', () => {
    for (const course of courses) {
      for (const profile of examProfilesForCourse(course)) {
        const selected = selectExamQuestions(course, profile.id)
        expect(selected, `${course.id}:${profile.id}`).toHaveLength(profile.size)
        expect(new Set(selected.map((question) => question.id)).size, `${course.id}:${profile.id}`).toBe(profile.size)
      }
    }
  })

  it('keeps functional profiles inside each course exam scope', () => {
    for (const course of courses) {
      const examScope = new Set(course.practiceConfig?.examModuleIds ?? course.practiceConfig?.coreModuleIds ?? course.modules.map((module) => module.id))
      for (const profile of examProfilesForCourse(course).filter((item) => item.kind === 'functional')) {
        const selected = selectExamQuestions(course, profile.id)
        for (const question of selected) expect(examScope.has(question.moduleId), `${course.id}:${profile.id} → ${question.moduleId}`).toBe(true)
      }
    }
  })

  it('keeps transversal profiles inside configured complementary modules', () => {
    for (const course of courses) {
      const transversal = new Set(course.practiceConfig?.transversalModuleIds ?? [])
      const selected = selectExamQuestions(course, 'transversal-check')
      if (transversal.size === 0) continue
      for (const question of selected) expect(transversal.has(question.moduleId), `${course.id} → ${question.moduleId}`).toBe(true)
    }
  })

  it('reserves the configured minimum of integrative cases when the bank provides them', () => {
    for (const course of courses) {
      for (const profile of examProfilesForCourse(course).filter((item) => item.kind === 'functional')) {
        const selected = selectExamQuestions(course, profile.id)
        const target = profile.integratedTarget ?? 0
        const available = course.questions.filter((question) => question.integrated).length
        if (available >= target) expect(selected.filter((question) => question.integrated).length, `${course.id}:${profile.id}`).toBeGreaterThanOrEqual(target)
      }
    }
  })

  it('keeps the PGN conditional specialties M75-M79 out of default exam sessions', () => {
    const selected = selectExamQuestions(procuraduriaCourse, 'functional-extended')
    for (const question of selected) {
      const moduleNumber = Number(question.moduleId.replace('pgn-m', ''))
      expect(moduleNumber === 75 || moduleNumber === 76 || moduleNumber === 77 || moduleNumber === 78 || moduleNumber === 79, question.id).toBe(false)
    }
  })
})
