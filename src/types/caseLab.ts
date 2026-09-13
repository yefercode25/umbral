export type CaseLab = {
  id: string
  title: string
  subtitle: string
  description: string
  durationMinutes: number
  difficulty: 1 | 2 | 3 | 4 | 5
  moduleIds: string[]
  facts: string[]
  questionIds: string[]
  sourceIds: string[]
}
