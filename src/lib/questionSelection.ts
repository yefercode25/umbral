import type { Question } from '../types/course'

export type ExamProfileId = 'functional-quick' | 'functional-training' | 'functional-extended' | 'study-mix' | 'transversal-check'

export type ExamProfile = {
  id: ExamProfileId
  title: string
  shortTitle: string
  description: string
  size: number
  scopeLabel: string
  questionTypeLabel: string
  kind: 'functional' | 'study' | 'transversal'
  integratedTarget?: number
}

export const examProfiles: ExamProfile[] = [
  {
    id: 'functional-quick',
    title: 'Funcional rápido',
    shortTitle: 'Rápido',
    description: 'Una sesión breve de juicio situacional con mayor presencia del núcleo CT-CR-3007.',
    size: 10,
    scopeLabel: 'M1–M17 · énfasis M6–M16',
    questionTypeLabel: 'Solo PJS',
    kind: 'functional',
    integratedTarget: 2,
  },
  {
    id: 'functional-training',
    title: 'Funcional de entrenamiento',
    shortTitle: 'Entrenamiento',
    description: 'Cubre el mapa funcional completo y refuerza cartera, recaudo, cobro y devoluciones.',
    size: 20,
    scopeLabel: 'M1–M17 · cobertura amplia',
    questionTypeLabel: 'Solo PJS',
    kind: 'functional',
    integratedTarget: 4,
  },
  {
    id: 'functional-extended',
    title: 'Funcional extendido',
    shortTitle: 'Extendido',
    description: 'Sesión larga para medir transferencia entre procedimientos y resistencia de atención.',
    size: 40,
    scopeLabel: 'M1–M17 · cobertura + profundidad',
    questionTypeLabel: 'Solo PJS',
    kind: 'functional',
    integratedTarget: 10,
  },
  {
    id: 'transversal-check',
    title: 'Transversal complementario',
    shortTitle: 'Transversal',
    description: 'Ofimática, Excel, análisis de datos, lógica, conjuntos, porcentajes y probabilidad básica. Bloque provisional hasta conocer la GOA definitiva.',
    size: 20,
    scopeLabel: 'M24–M28 · preparación complementaria',
    questionTypeLabel: 'Aplicación + conocimiento',
    kind: 'transversal',
  },
  {
    id: 'study-mix',
    title: 'Repaso mixto',
    shortTitle: 'Mixto',
    description: 'Combina juicio situacional y conocimiento aplicado de los contenidos estudiados.',
    size: 20,
    scopeLabel: 'M0–M20 · repaso formativo',
    questionTypeLabel: 'PJS + conocimiento',
    kind: 'study',
  },
]

const FUNCTIONAL_MODULE_IDS = new Set(Array.from({ length: 17 }, (_, index) => `m${index + 1}`))
const STUDY_MODULE_IDS = new Set(Array.from({ length: 21 }, (_, index) => `m${index}`))
const TRANSVERSAL_MODULE_IDS = new Set(Array.from({ length: 5 }, (_, index) => `m${index + 24}`))
const DEEP_CORE_MODULE_IDS = new Set(Array.from({ length: 8 }, (_, index) => `m${index + 9}`))
const CORE_MODULE_IDS = new Set(Array.from({ length: 11 }, (_, index) => `m${index + 6}`))

export function shuffle<T>(items: T[]): T[] {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1))
    const currentItem = result[index]
    const targetItem = result[target]
    if (currentItem === undefined || targetItem === undefined) continue
    result[index] = targetItem
    result[target] = currentItem
  }
  return result
}

export function selectBalancedQuestions(questions: Question[], size: number): Question[] {
  const byModule = new Map<string, Question[]>()
  for (const question of shuffle(questions)) {
    const list = byModule.get(question.moduleId) ?? []
    list.push(question)
    byModule.set(question.moduleId, list)
  }

  const selected: Question[] = []
  let moduleIds = shuffle([...byModule.keys()])
  while (selected.length < size && moduleIds.length > 0) {
    const nextRound: string[] = []
    for (const moduleId of moduleIds) {
      const candidate = byModule.get(moduleId)?.shift()
      if (candidate) selected.push(candidate)
      if ((byModule.get(moduleId)?.length ?? 0) > 0) nextRound.push(moduleId)
      if (selected.length === size) break
    }
    moduleIds = shuffle(nextRound)
  }
  return selected
}

function moduleWeight(moduleId: string) {
  if (DEEP_CORE_MODULE_IDS.has(moduleId)) return 4
  if (CORE_MODULE_IDS.has(moduleId)) return 3
  return 1
}

function takeWeightedByModule(pool: Question[], size: number, ensureBreadth: boolean, integratedTarget = 0) {
  const selected: Question[] = []
  const selectedIds = new Set<string>()

  // Los casos integradores entrenan transferencia entre procedimientos. Se reservan
  // algunos cupos, pero su módulo principal también cuenta para la cobertura M1–M17.
  if (integratedTarget > 0) {
    const integrated = selectBalancedQuestions(pool.filter((question) => question.integrated), integratedTarget)
    for (const question of integrated) {
      selected.push(question)
      selectedIds.add(question.id)
    }
  }

  const remaining = pool.filter((question) => !selectedIds.has(question.id))
  const byModule = new Map<string, Question[]>()
  for (const question of shuffle(remaining)) {
    const list = byModule.get(question.moduleId) ?? []
    list.push(question)
    byModule.set(question.moduleId, list)
  }

  // En sesiones de 20/40 ítems, completa primero los módulos que todavía no están
  // representados. Después aplica el énfasis pedagógico interno de Umbral.
  if (ensureBreadth) {
    const represented = new Set(selected.map((question) => question.moduleId))
    for (const moduleId of shuffle([...byModule.keys()].filter((moduleId) => !represented.has(moduleId)))) {
      const candidate = byModule.get(moduleId)?.shift()
      if (candidate) {
        selected.push(candidate)
        selectedIds.add(candidate.id)
      }
      if (selected.length >= size) return shuffle(selected)
    }
  }

  while (selected.length < size) {
    const available = [...byModule.entries()].filter(([, items]) => items.length > 0)
    if (available.length === 0) break

    const tickets = available.flatMap(([moduleId]) => Array.from({ length: moduleWeight(moduleId) }, () => moduleId))
    const moduleId = tickets[Math.floor(Math.random() * tickets.length)]
    if (!moduleId) break
    const candidate = byModule.get(moduleId)?.shift()
    if (candidate && !selectedIds.has(candidate.id)) {
      selected.push(candidate)
      selectedIds.add(candidate.id)
    }
  }

  return shuffle(selected)
}

export function selectExamQuestions(questions: Question[], profileId: ExamProfileId): Question[] {
  const profile = examProfiles.find((item) => item.id === profileId) ?? examProfiles[0]!

  if (profile.kind === 'study') {
    const pool = questions.filter((question) => STUDY_MODULE_IDS.has(question.moduleId))
    return selectBalancedQuestions(pool, profile.size)
  }

  if (profile.kind === 'transversal') {
    const pool = questions.filter((question) => TRANSVERSAL_MODULE_IDS.has(question.moduleId))
    return selectBalancedQuestions(pool, profile.size)
  }

  const pool = questions.filter(
    (question) => question.type === 'pjs' && FUNCTIONAL_MODULE_IDS.has(question.moduleId),
  )
  return takeWeightedByModule(pool, profile.size, profile.size >= FUNCTIONAL_MODULE_IDS.size, profile.integratedTarget ?? 0)
}
