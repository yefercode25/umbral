import type { Course, Question } from '../types/course'
import { practiceQuestionPool } from './practiceQuestionPool'
import { PGN_COURSE_ID, isPgnAuthored, isPgnBehavior, isPgnException, pgnBehaviorModuleIds, pgnSystemsModuleIds } from './procuraduriaScopes'

export type ExamProfileId = 'functional-quick' | 'functional-training' | 'functional-extended' | 'functional-deep' | 'study-mix' | 'transversal-check' | 'behavior-check' | 'systems-check'

export type ExamProfile = {
  id: ExamProfileId
  title: string
  shortTitle: string
  description: string
  size: number
  scopeLabel: string
  questionTypeLabel: string
  kind: 'functional' | 'study' | 'transversal' | 'behavior' | 'systems'
  integratedTarget?: number
}

export function examProfilesForCourse(course: Course): ExamProfile[] {
  const config = course.practiceConfig
  const core = config?.coreLabel ?? 'Núcleo principal'
  const transversal = config?.transversalLabel ?? 'Complementario'
  const coreCount = config?.examModuleIds?.length ?? config?.coreModuleIds.length ?? course.modules.length
  const transversalCount = course.id === PGN_COURSE_ID ? (config?.transversalModuleIds.filter(id => !isPgnBehavior(id) && !pgnSystemsModuleIds.includes(id)).length ?? 0) : config?.transversalModuleIds.length ?? 0
  const hasIntegratedCases = course.questions.some((question) => question.integrated && (question.relatedModuleIds?.length ?? 0) > 0)

  return [
    ...(course.id === 'procuraduria-104-2026-3pu15' ? [{
      id: 'functional-deep' as const,
      title: 'Expedientes complejos · Procuraduría',
      shortTitle: 'Expedientes',
      description: '20 decisiones con contexto amplio, datos contradictorios y efectos de cambiar hechos. Incluye ofimática y gestión institucional dentro de situaciones de trabajo.',
      size: 20,
      scopeLabel: 'Casos de transferencia de conocimientos comunes y específicos del empleo',
      questionTypeLabel: 'Situaciones profesionales · 3 alternativas de entrenamiento',
      kind: 'functional' as const,
      integratedTarget: 4,
    }] : []),
    ...(course.id === 'dian-2676-gestor-ii' ? [{
      id: 'functional-deep' as const,
      title: 'Expedientes profesionales · PJS',
      shortTitle: 'Expedientes',
      description: '20 casos originales de decisión: expedientes tributarios y aplicación transversal de legalidad, evidencias, términos y reserva.',
      size: 20,
      scopeLabel: 'Casos de profundización M1–M17',
      questionTypeLabel: 'Solo PJS · 3 alternativas',
      kind: 'functional' as const,
    }] : []),
    {
      id: 'functional-quick',
      title: 'Núcleo rápido',
      shortTitle: 'Rápido',
      description: `Sesión breve con énfasis en ${core.toLowerCase()} y aplicación situacional.`,
      size: 10,
      scopeLabel: `${coreCount} módulos · énfasis prioritario`,
      questionTypeLabel: course.id === 'dian-2676-gestor-ii' ? 'Solo PJS · 3 alternativas' : 'PJS + aplicación',
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
      questionTypeLabel: course.id === 'dian-2676-gestor-ii' ? 'Solo PJS · 3 alternativas' : 'PJS + conocimiento',
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
      questionTypeLabel: course.id === 'dian-2676-gestor-ii' ? 'Solo PJS · 3 alternativas' : 'PJS + conocimiento',
      kind: 'functional',
      integratedTarget: hasIntegratedCases ? 10 : 0,
    },
    ...(course.id === PGN_COURSE_ID ? [
      {
        id: 'behavior-check' as const, title: 'Competencias comportamentales · práctica formativa',
        shortTitle: 'Competencias', description: '12 casos de reflexión de M70–M73. No simula una escala psicométrica oficial ni calcula personalidad o percentiles.',
        size: 12, scopeLabel: '4 módulos · 6 competencias del perfil y preparación',
        questionTypeLabel: 'Conductas y decisiones didácticas', kind: 'behavior' as const,
      },
      {
        id: 'systems-check' as const, title: 'Fundamentos de Ingeniería de Sistemas',
        shortTitle: 'Sistemas', description: '15 preguntas aplicadas de arquitectura, redes, ciberseguridad, software y datos. Complemento profesional, sin ponderación oficial supuesta.',
        size: 15, scopeLabel: 'M80–M84 · complemento profesional',
        questionTypeLabel: 'Casos técnicos aplicados', kind: 'systems' as const,
      },
    ] : []),
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

/** Select authored PGN cases without changing option IDs or scoring.
 * Priority is a pedagogical quota, not a published official blueprint.
 * Diversity of dossiers and modules is preferred within each quota.
 */
function selectPgnDiverse(pool: Question[], size: number, selected: Question[] = []): Question[] {
  const remaining = shuffle(pool.filter(q => !selected.some(s => s.id === q.id)))
  const result = [...selected]
  const moduleCounts = new Map<string, number>()
  const scenarioCounts = new Map<string, number>()
  const count = (q: Question) => {
    moduleCounts.set(q.moduleId, (moduleCounts.get(q.moduleId) ?? 0) + 1)
    if (q.scenarioId) scenarioCounts.set(q.scenarioId, (scenarioCounts.get(q.scenarioId) ?? 0) + 1)
  }
  result.forEach(count)
  while (result.length < size && remaining.length) {
    // Stable sort retains the shuffled order for ties. Prefer unseen scenarios
    // and modules; repeat only as needed to fill the requested session.
    remaining.sort((a, b) =>
      (scenarioCounts.get(a.scenarioId ?? '') ?? 0) - (scenarioCounts.get(b.scenarioId ?? '') ?? 0) ||
      (moduleCounts.get(a.moduleId) ?? 0) - (moduleCounts.get(b.moduleId) ?? 0))
    const q = remaining.shift()
    if (!q) break
    result.push(q)
    count(q)
  }
  return result
}

function selectPgnFunctional(pool: Question[], size: number, priority: Set<string>, target: number) {
  const integrated = selectPgnDiverse(pool.filter(q => q.integrated), Math.min(size, target))
  const regular = pool.filter(q => !q.integrated)
  // At least half of the remaining questions are from priority modules,
  // provided the authored bank can supply them. Other slots cover the wider scope.
  const priorityGoal = integrated.length + Math.ceil((size - integrated.length) / 2)
  // Reserve a pedagogical minimum of exceptional, fact-dependent cases within the priority quota.
  const exceptionTarget = Math.min(priorityGoal - integrated.length, Math.ceil(size / 5))
  const exceptional = selectPgnDiverse(regular.filter(q => isPgnException(q) && priority.has(q.moduleId)), integrated.length + exceptionTarget, integrated)
  const focus = selectPgnDiverse(regular.filter(q => priority.has(q.moduleId)), priorityGoal, exceptional)
  const broad = selectPgnDiverse(regular.filter(q => !priority.has(q.moduleId)), size, focus)
  return shuffle(selectPgnDiverse(pool, size, broad))
}

export function selectExamQuestions(course: Course, profileId: ExamProfileId): Question[] {
  const profiles = examProfilesForCourse(course)
  const profile = profiles.find((item) => item.id === profileId) ?? profiles[0]!
  const config = course.practiceConfig
  const examModuleIds = new Set(config?.examModuleIds ?? config?.coreModuleIds ?? course.modules.map((module) => module.id))
  const studyModuleIds = new Set(config?.studyModuleIds ?? course.modules.map((module) => module.id))
  const transversalModuleIds = new Set(config?.transversalModuleIds ?? [])
  const priorityModuleIds = new Set(config?.priorityModuleIds ?? config?.coreModuleIds ?? [])
  const available = practiceQuestionPool(course)

  if (course.id === PGN_COURSE_ID) {
    const authored = available.filter(isPgnAuthored)
    if (profile.kind === 'behavior') {
      return shuffle(selectPgnDiverse(authored.filter(q => pgnBehaviorModuleIds.includes(q.moduleId)), profile.size))
    }
    if (profile.kind === 'systems') {
      return shuffle(selectPgnDiverse(authored.filter(q => pgnSystemsModuleIds.includes(q.moduleId)), profile.size))
    }
    if (profile.kind === 'study') {
      return shuffle(selectPgnDiverse(authored.filter(q => studyModuleIds.has(q.moduleId)), profile.size))
    }
    if (profile.kind === 'transversal') {
      return shuffle(selectPgnDiverse(authored.filter(q => transversalModuleIds.has(q.moduleId) && !isPgnBehavior(q.moduleId) && !pgnSystemsModuleIds.includes(q.moduleId)), profile.size))
    }
    const pool = authored.filter(q => examModuleIds.has(q.moduleId) &&
      (profile.id !== 'functional-deep' || (q.difficulty >= 4 && (q.integrated || isPgnException(q) || q.id.startsWith('pgn-dossier-') || q.id.includes('-transfer-')))))
    return selectPgnFunctional(pool, profile.size, priorityModuleIds, profile.integratedTarget ?? 0)
  }

  if (profile.kind === 'study') {
    return selectBalancedQuestions(available.filter((question) => studyModuleIds.has(question.moduleId)), profile.size)
  }

  if (profile.kind === 'transversal') {
    const pool = available.filter((question) => transversalModuleIds.has(question.moduleId))
    return selectBalancedQuestions(pool.length ? pool : available, profile.size)
  }

  // La GOA de DIAN 2676 establece tres opciones de juicio situacional en funcionales.
  // Los ítems conceptuales se conservan en estudio y repaso mixto, no en el simulacro funcional.
  const pool = available.filter((question) => examModuleIds.has(question.moduleId) && (course.id !== 'dian-2676-gestor-ii' || question.type === 'pjs') && (profile.id !== 'functional-deep' || (course.id === 'dian-2676-gestor-ii'
    ? (question.id.startsWith('q-goa26-') || question.id.startsWith('q-master-2026-') || question.id.startsWith('q-transversal-2026-'))
    : (question.integrated || question.id.startsWith('pgn-dossier-') || question.id.includes('-transfer-')))))
  return takeWeightedByModule(pool, profile.size, priorityModuleIds, profile.size >= Math.min(examModuleIds.size, profile.size), profile.integratedTarget ?? 0)
}
