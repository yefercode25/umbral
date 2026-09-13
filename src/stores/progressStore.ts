import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Course } from '../types/course'
import type { CourseProgress, ErrorReason, ProgressState } from '../types/progress'
import { nextSkillProgress } from '../lib/mastery'
import { todayKey } from '../lib/date'

const emptyCourseProgress = (course: Course): CourseProgress => ({
  courseId: course.id,
  contentVersion: course.version,
  startedAt: new Date().toISOString(),
  lastActivityAt: new Date().toISOString(),
  lessons: {},
  skills: {},
  questionStats: {},
  errorJournal: {},
  questionBookmarks: [],
  bookmarks: [],
  dailyGoalMinutes: 25,
  todayMinutes: 0,
  todayDate: todayKey(),
})

type ProgressActions = {
  ensureCourse: (course: Course) => void
  markLessonStarted: (course: Course, lessonId: string, route: string) => void
  markLessonCompleted: (course: Course, lessonId: string, minutes?: number) => void
  recordAnswer: (course: Course, questionId: string, skillIds: string[], correct: boolean) => void
  toggleBookmark: (course: Course, lessonId: string) => void
  toggleQuestionBookmark: (course: Course, questionId: string) => void
  setDailyGoal: (course: Course, minutes: number) => void
  setErrorReflection: (course: Course, questionId: string, reason: ErrorReason | undefined, note: string) => void
  markErrorReviewed: (course: Course, questionId: string) => void
  resetCourse: (courseId: string) => void
}


export const useProgressStore = create<ProgressState & ProgressActions>()(
  persist(
    (set) => ({
      schemaVersion: 1,
      courses: {},
      ensureCourse: (course) =>
        set((state) => {
          const existing = state.courses[course.id]
          if (!existing) return { courses: { ...state.courses, [course.id]: emptyCourseProgress(course) } }
          if (existing.contentVersion === course.version) return state
          return { courses: { ...state.courses, [course.id]: { ...existing, contentVersion: course.version } } }
        }),
      markLessonStarted: (course, lessonId, route) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          return {
            courses: {
              ...state.courses,
              [course.id]: {
                ...current,
                lastActivityAt: new Date().toISOString(),
                lastRoute: route,
                lessons: {
                  ...current.lessons,
                  [lessonId]: {
                    status: current.lessons[lessonId]?.status === 'completed' ? 'completed' : 'in-progress',
                    readPercent: Math.max(current.lessons[lessonId]?.readPercent ?? 0, 5),
                    ...(current.lessons[lessonId]?.completedAt ? { completedAt: current.lessons[lessonId]?.completedAt } : {}),
                  },
                },
              },
            },
          }
        }),
      markLessonCompleted: (course, lessonId, minutes = 5) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const today = todayKey()
          const baseMinutes = current.todayDate === today ? current.todayMinutes : 0
          const alreadyCompleted = current.lessons[lessonId]?.status === 'completed'
          return {
            courses: {
              ...state.courses,
              [course.id]: {
                ...current,
                lastActivityAt: new Date().toISOString(),
                todayDate: today,
                todayMinutes: baseMinutes + (alreadyCompleted ? 0 : minutes),
                lessons: {
                  ...current.lessons,
                  [lessonId]: { status: 'completed', readPercent: 100, completedAt: new Date().toISOString() },
                },
              },
            },
          }
        }),
      recordAnswer: (course, questionId, skillIds, correct) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const now = new Date().toISOString()
          const skills = { ...current.skills }
          for (const skillId of skillIds) {
            const previous = skills[skillId]
            const previousCorrect = previous?.correct ?? 0
            const attempts = (previous?.attempts ?? 0) + 1
            const right = previousCorrect + (correct ? 1 : 0)
            const accuracy = right / attempts
            skills[skillId] = nextSkillProgress(previous, attempts, right, accuracy, correct, now)
          }

          const questionStats = { ...(current.questionStats ?? {}) }
          const previousQuestion = questionStats[questionId]
          questionStats[questionId] = {
            attempts: (previousQuestion?.attempts ?? 0) + 1,
            correct: (previousQuestion?.correct ?? 0) + (correct ? 1 : 0),
            lastAnsweredAt: now,
            lastCorrect: correct,
          }

          const errorJournal = { ...(current.errorJournal ?? {}) }
          const previousError = errorJournal[questionId]
          if (!correct) {
            errorJournal[questionId] = {
              questionId,
              wrongCount: (previousError?.wrongCount ?? 0) + 1,
              firstWrongAt: previousError?.firstWrongAt ?? now,
              lastWrongAt: now,
              ...(previousError?.reason ? { reason: previousError.reason } : {}),
              ...(previousError?.note ? { note: previousError.note } : {}),
              ...(previousError?.reviewedAt ? { reviewedAt: previousError.reviewedAt } : {}),
            }
          } else if (previousError) {
            errorJournal[questionId] = { ...previousError, resolvedAt: now }
          }

          return {
            courses: {
              ...state.courses,
              [course.id]: { ...current, lastActivityAt: now, skills, questionStats, errorJournal },
            },
          }
        }),
      toggleBookmark: (course, lessonId) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const exists = current.bookmarks.includes(lessonId)
          return {
            courses: {
              ...state.courses,
              [course.id]: {
                ...current,
                bookmarks: exists ? current.bookmarks.filter((id) => id !== lessonId) : [...current.bookmarks, lessonId],
              },
            },
          }
        }),
      toggleQuestionBookmark: (course, questionId) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const bookmarks = current.questionBookmarks ?? []
          const exists = bookmarks.includes(questionId)
          return {
            courses: {
              ...state.courses,
              [course.id]: {
                ...current,
                questionBookmarks: exists ? bookmarks.filter((id) => id !== questionId) : [...bookmarks, questionId],
              },
            },
          }
        }),
      setDailyGoal: (course, minutes) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          return { courses: { ...state.courses, [course.id]: { ...current, dailyGoalMinutes: minutes } } }
        }),
      setErrorReflection: (course, questionId, reason, note) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const now = new Date().toISOString()
          const errorJournal = { ...(current.errorJournal ?? {}) }
          const previous = errorJournal[questionId]
          if (!previous) return state
          const updatedEntry = {
            ...previous,
            ...(reason ? { reason } : {}),
            note: note.trim(),
            reviewedAt: now,
          }
          if (!reason) delete updatedEntry.reason
          errorJournal[questionId] = updatedEntry
          return { courses: { ...state.courses, [course.id]: { ...current, lastActivityAt: now, errorJournal } } }
        }),
      markErrorReviewed: (course, questionId) =>
        set((state) => {
          const current = state.courses[course.id] ?? emptyCourseProgress(course)
          const previous = current.errorJournal?.[questionId]
          if (!previous) return state
          const now = new Date().toISOString()
          return {
            courses: {
              ...state.courses,
              [course.id]: {
                ...current,
                lastActivityAt: now,
                errorJournal: { ...(current.errorJournal ?? {}), [questionId]: { ...previous, reviewedAt: now } },
              },
            },
          }
        }),
      resetCourse: (courseId) => set((state) => {
        const courses = { ...state.courses }
        delete courses[courseId]
        return { courses }
      }),
    }),
    {
      name: 'umbral:progress:v1',
      partialize: (state) => ({ schemaVersion: state.schemaVersion, courses: state.courses }),
    },
  ),
)
