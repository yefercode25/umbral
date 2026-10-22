import { describe, expect, it } from 'vitest'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { dianLibraryEntries, dianStructure } from '../../src/lib/dianLibrary'
import { provisionalDianAreas, indicatorCoverage } from '../../src/lib/indicatorCoverage'

describe('biblioteca DIAN de referencia', () => {
  it('usa identificadores únicos, contenido didáctico y fuente para cada entrada', () => {
    expect(new Set(dianLibraryEntries.map((entry) => entry.id)).size).toBe(dianLibraryEntries.length)
    for (const entry of dianLibraryEntries) {
      expect(entry.description.length).toBeGreaterThan(60)
      expect(entry.concepts.length).toBeGreaterThan(1)
      expect(entry.example.length).toBeGreaterThan(40)
      expect(entry.pitfalls.length).toBeGreaterThan(0)
      expect(Boolean(entry.url || dianGestorCourse.sources.some((source) => source.id === entry.sourceId))).toBe(true)
    }
  })
  it('separa lo aduanero complementario del núcleo tributario', () => {
    expect(dianLibraryEntries.find((e) => e.id === 'ley2586')?.category).toBe('Complementario')
    expect(dianLibraryEntries.find((e) => e.id === 'estatuto')?.category).toBe('Núcleo del empleo')
    expect(dianStructure.length).toBeGreaterThan(5)
  })
  it('no promete cobertura antes de relacionar módulos', () => {
    expect(indicatorCoverage(dianGestorCourse,undefined,[]).questions).toBe(0)
    for (const area of provisionalDianAreas) {
      expect(area.moduleIds.every((id) => dianGestorCourse.modules.some((module) => module.id === id))).toBe(true)
    }
  })
})

describe('profundización editorial de biblioteca DIAN', () => {
  it('tiene guía desarrollada, caso razonado y conexiones para cada norma', async () => {
    const {dianLawGuides} = await import('../../src/lib/dianLibraryExpanded')
    expect(Object.keys(dianLawGuides).sort()).toEqual(dianLibraryEntries.map((entry) => entry.id).sort())
    for (const entry of dianLibraryEntries) {
      const guide = dianLawGuides[entry.id]
      if (!guide) throw new Error(`Falta la guía editorial para ${entry.id}`)
      expect(guide.essentials.length).toBeGreaterThanOrEqual(3)
      expect(guide.workflow.length).toBeGreaterThanOrEqual(4)
      expect(guide.cases.context.length).toBeGreaterThan(40)
      expect(guide.cases.reasoning.length).toBeGreaterThan(60)
      expect(guide.connections.every((id) => dianLibraryEntries.some((item) => item.id === id))).toBe(true)
    }
  })
  it('documenta jerarquía, recorridos prácticos, fuentes y preguntas originales', async () => {
    const {dianOrgNodes,dianOrgScenarios,dianDetailedProcesses,dianLibraryQuiz} = await import('../../src/lib/dianLibraryExpanded')
    const ids = new Set(dianOrgNodes.map((node) => node.id))
    expect(dianOrgNodes.length).toBeGreaterThanOrEqual(17)
    expect(dianOrgNodes.every((node) => !node.parent || ids.has(node.parent))).toBe(true)
    expect(dianOrgScenarios.length).toBeGreaterThanOrEqual(4)
    expect(dianDetailedProcesses.length).toBeGreaterThanOrEqual(10)
    for (const proc of dianDetailedProcesses) {
      expect(proc.steps.length).toBeGreaterThanOrEqual(5)
      expect(proc.steps.every((step) => step.why.length > 40 && step.example.length > 25)).toBe(true)
      expect(proc.sources.every((source) => source.url.startsWith('https://'))).toBe(true)
    }
    expect(new Set(dianLibraryQuiz.map((q) => q.id)).size).toBe(dianLibraryQuiz.length)
    expect(dianLibraryQuiz.every((q) => q.options.length === 3 && q.correct >= 0 && q.correct <= 2)).toBe(true)
  })
})
