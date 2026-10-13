export type MasteryLevel = 'not-started' | 'seen' | 'practiced' | 'competent' | 'mastered'

export type SourceRef = {
  id: string
  title: string
  publisher: string
  url: string
  type: 'official' | 'reference'
  verifiedAt: string
  note?: string
}

export type BehaviorStatement = { id: string; text: string; direction: 'direct' | 'inverse'; competency: string; note: string }

export type LessonBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'lead'; text: string }
  | { type: 'objective'; items: string[] }
  | { type: 'definition'; title: string; text: string }
  | { type: 'rule'; title: string; text: string }
  | { type: 'tip'; title?: string; text: string }
  | { type: 'trap'; title?: string; text: string }
  | { type: 'example'; title: string; text: string }
  | { type: 'article'; article: string; title: string; text: string; sourceId: string }
  | { type: 'steps'; title: string; items: string[] }
  | { type: 'process'; title: string; nodes: { id: string; label: string; hint?: string }[] }
  | { type: 'comparison'; title: string; columns: string[]; rows: string[][] }
  | { type: 'sequence-exercise'; title: string; text: string; items: { id: string; label: string }[]; correctOrder: string[]; explanation?: string }
  | { type: 'prescription-simulator'; title: string; text: string }
  | { type: 'coactive-simulator'; title: string; text: string }
  | { type: 'account-simulator'; title: string; text: string }
  | { type: 'enforcement-simulator'; title: string; text: string }
  | { type: 'refund-simulator'; title: string; text: string }
  | { type: 'behavior-simulator'; title: string; text: string; statements?: BehaviorStatement[] }
  | { type: 'concursal-simulator'; title: string; text: string }
  | {
      type: 'decision-simulator'
      title: string
      text: string
      scenario: string
      prompt: string
      options: { id: string; text: string; correct: boolean; rationale: string }[]
    }
  | { type: 'checkpoint'; questionId: string }
  | { type: 'sources'; sourceIds: string[] }

export type Lesson = {
  id: string
  moduleId: string
  order: number
  title: string
  subtitle: string
  durationMinutes: number
  skillIds: string[]
  status: 'published' | 'draft'
  blocks: LessonBlock[]
}

export type CourseModule = {
  id: string
  unitId: string
  order: number
  code: string
  title: string
  description: string
  accent: string
  lessonIds: string[]
  status: 'published' | 'planned'
}

export type CourseUnit = {
  id: string
  order: number
  title: string
  description: string
  moduleIds: string[]
  artwork?: string
  artworkAlt?: string
}

export type QuestionOption = {
  id: string
  text: string
  rationale: string
}

export type Question = {
  id: string
  moduleId: string
  skillIds: string[]
  type: 'pjs' | 'single'
  difficulty: 1 | 2 | 3 | 4 | 5
  stem: string
  case?: string
  options: QuestionOption[]
  correctOptionId: string
  explanation: string
  sourceIds: string[]
  verifiedAt: string
  integrated?: boolean
  relatedModuleIds?: string[]
  scenarioId?: string
}

export type Course = {
  id: string
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  disclaimer: string
  accent: string
  version: string
  updatedAt: string
  officialGuideStatus: 'pending' | 'published'
  opec?: string
  jobCode?: string
  salaryLabel?: string
  cardArtwork?: string
  heroArtwork?: string
  guideNotice?: string
  studyPlanLabel?: string
  sourceIntro?: string
  practiceConfig?: {
    coreLabel: string
    coreModuleIds: string[]
    transversalLabel: string
    transversalModuleIds: string[]
    diagnosticModuleIds?: string[]
    examModuleIds?: string[]
    studyModuleIds?: string[]
    priorityModuleIds?: string[]
    hasCaseLabs?: boolean
  }
  units: CourseUnit[]
  modules: CourseModule[]
  lessons: Lesson[]
  questions: Question[]
  sources: SourceRef[]
}
