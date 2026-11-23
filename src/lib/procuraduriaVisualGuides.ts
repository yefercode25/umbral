export type ProcuraduriaTopicVisual = {
  filename: string
  title: string
  image: string
}

const diagrams = {
  route: { filename: 'procuraduria-course-route.svg', title: 'Ruta de preparación' },
  state: { filename: 'colombian-state-public-function.svg', title: 'Estado y función pública' },
  structure: { filename: 'procuraduria-structure-competence.svg', title: 'Funciones y competencia de la Procuraduría' },
  cpaca: { filename: 'cpaca-petition-route.svg', title: 'CPACA y derecho de petición' },
  disciplinary: { filename: 'disciplinary-process-route.svg', title: 'Proceso disciplinario' },
  evidence: { filename: 'disciplinary-evidence-guide.svg', title: 'Derecho probatorio y evidencia' },
  preventive: { filename: 'preventive-control-intervention.svg', title: 'Prevención e intervención' },
  contracting: { filename: 'contracting-integrity-territory.svg', title: 'Contratación e integridad' },
  systems: { filename: 'systems-disciplinary-evidence.svg', title: 'Evidencia técnica y sistemas' },
} as const

const moduleTheme = [
  [4, 'route'], [9, 'state'], [14, 'structure'], [19, 'cpaca'],
  [34, 'disciplinary'], [44, 'evidence'], [49, 'preventive'],
  [59, 'contracting'], [69, 'systems'], [74, 'route'],
  [79, 'structure'], [84, 'systems'],
] as const

/** Recursos exclusivos de la convocatoria PGN; no modifica las guías DIAN. */
export function getProcuraduriaTopicVisual(moduleId: string): ProcuraduriaTopicVisual | null {
  const match = /^pgn-m(\d+)$/.exec(moduleId)
  if (!match) return null
  const index = Number(match[1])
  const entry = moduleTheme.find(([end]) => index <= end)
  if (!entry) return null
  const diagram = diagrams[entry[1]]
  return { ...diagram, image: '/media/lesson-support/' + diagram.filename }
}
