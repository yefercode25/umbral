import type { MasteryLevel } from './course'

export type LessonProgress = {
  status: 'not-started' | 'in-progress' | 'completed'
  readPercent: number
  completedAt?: string
}

export type SkillProgress = {
  attempts: number
  correct: number
  accuracy: number
  mastery: MasteryLevel
  lastPracticedAt?: string
  competentAt?: string
  masteredAt?: string
}

export type ErrorReason = 'concept' | 'term' | 'competence' | 'stage' | 'reading' | 'distractor' | 'other'

export type ErrorJournalEntry = {
  questionId: string
  wrongCount: number
  firstWrongAt: string
  lastWrongAt: string
  resolvedAt?: string
  reason?: ErrorReason
  note?: string
  reviewedAt?: string
}


export type QuestionProgress = {
  attempts: number
  correct: number
  lastAnsweredAt: string
  lastCorrect: boolean
}

export type PracticeSession = {
  id: string
  recordedAt: string
  profileId: string
  questions: number
  correct: number
  durationSeconds: number
  byModule: { moduleId: string; questions: number; correct: number }[]
}

export type CourseProgress = {
  courseId: string
  contentVersion: string
  startedAt: string
  lastActivityAt: string
  lastRoute?: string
  lessons: Record<string, LessonProgress>
  skills: Record<string, SkillProgress>
  practiceSessions?: PracticeSession[]
  questionStats?: Record<string, QuestionProgress>
  errorJournal?: Record<string, ErrorJournalEntry>
  questionBookmarks?: string[]
  bookmarks: string[]
  dailyGoalMinutes: number
  todayMinutes: number
  todayDate: string
}

export type ProgressState = {
  schemaVersion: 1
  courses: Record<string, CourseProgress>
}
