import type { Course, Question } from '../types/course'

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

export function examProfilesForCourse(course: Course): ExamProfile[] {
  const config = course.practiceConfig
  const core = config?.coreLabel ?? 'Núcleo principal'
  const transversal = config?.transversalLabel ?? 'Complementario'
  const coreCount = config?.examModuleIds?.length ?? config?.coreModuleIds.length ?? course.modules.length
  const transversalCount = config?.transversalModuleIds.length ?? 0
  const hasIntegratedCases = course.questions.some((question) => question.integrated && (question.relatedModuleIds?.length ?? 0) > 0)

  return [
    {
      id: 'functional-quick',
      title: 'Núcleo rápido',
      shortTitle: 'Rápido',
      description: `Sesión breve con énfasis en ${core.toLowerCase()} y aplicación situacional.`,
      size: 10,
      scopeLabel: `${coreCount} módulos · énfasis prioritario`,
      questionTypeLabel: 'PJS + aplicación',
      kind: 'functional',
      integratedTarget: hasIntegratedCases ? 2 : 0,
    },
    {
      id: 'functional-training',
      title: 'Núcleo de entrenamiento',
      shortTitle: 'Entrenamiento',
      description: `Cobertura amplia del recorrido evaluable con mayor presencia de ${core.toLowerCase()}.`,
      size: 20,
      scopeLabel: `${coreCount} módulos · cobertura amplia`,
      questionTypeLabel: 'PJS + conocimiento',
      kind: 'functional',
      integratedTarget: hasIntegratedCases ? 4 : 0,
    },
    {
      id: 'functional-extended',
      title: 'Núcleo extendido',
      shortTitle: 'Extendido',
      description: 'Sesión larga para medir transferencia entre temas, resistencia de atención y precisión sostenida.',
      size: 40,
      scopeLabel: `${coreCount} módulos · cobertura + profundidad`,
      questionTypeLabel: 'PJS + conocimiento',
      kind: 'functional',
      integratedTarget: hasIntegratedCases ? 10 : 0,
    },
    {
      id: 'transversal-check',
      title: transversal,
      shortTitle: 'Complementario',
      description: transversalCount
        ? `Comprueba contenidos del bloque ${transversal.toLowerCase()} sin desplazar el núcleo principal.`
        : 'Comprueba contenidos complementarios del curso.',
      size: 20,
      scopeLabel: `${transversalCount} módulos · preparación complementaria`,
      questionTypeLabel: 'Aplicación + conocimiento',
      kind: 'transversal',
    },
    {
      id: 'study-mix',
      title: 'Repaso mixto',
      shortTitle: 'Mixto',
      description: 'Combina juicio situacional y conocimiento aplicado de los contenidos estudiados.',
      size: 20,
      scopeLabel: 'Recorrido general del curso',
      questionTypeLabel: 'PJS + conocimiento',
      kind: 'study',
    },
  ]
}

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

function takeWeightedByModule(pool: Question[], size: number, priorityModuleIds: Set<string>, ensureBreadth: boolean, integratedTarget = 0) {
  const selected: Question[] = []
  const selectedIds = new Set<string>()

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
    const tickets = available.flatMap(([moduleId]) => Array.from({ length: priorityModuleIds.has(moduleId) ? 4 : 1 }, () => moduleId))
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

export function selectExamQuestions(course: Course, profileId: ExamProfileId): Question[] {
  const profiles = examProfilesForCourse(course)
  const profile = profiles.find((item) => item.id === profileId) ?? profiles[0]!
  const config = course.practiceConfig
  const examModuleIds = new Set(config?.examModuleIds ?? config?.coreModuleIds ?? course.modules.map((module) => module.id))
  const studyModuleIds = new Set(config?.studyModuleIds ?? course.modules.map((module) => module.id))
  const transversalModuleIds = new Set(config?.transversalModuleIds ?? [])
  const priorityModuleIds = new Set(config?.priorityModuleIds ?? config?.coreModuleIds ?? [])

  if (profile.kind === 'study') {
    return selectBalancedQuestions(course.questions.filter((question) => studyModuleIds.has(question.moduleId)), profile.size)
  }

  if (profile.kind === 'transversal') {
    const pool = course.questions.filter((question) => transversalModuleIds.has(question.moduleId))
    return selectBalancedQuestions(pool.length ? pool : course.questions, profile.size)
  }

  const pool = course.questions.filter((question) => examModuleIds.has(question.moduleId))
  return takeWeightedByModule(pool, profile.size, priorityModuleIds, profile.size >= Math.min(examModuleIds.size, profile.size), profile.integratedTarget ?? 0)
}
