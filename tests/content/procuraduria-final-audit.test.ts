import { describe, expect, it } from 'vitest'
import { procuraduriaCourse as course } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { auditPgnBank } from '../../src/lib/procuraduriaBankAudit'
import { isPgnAuthored, isPgnConditional, isPgnBehavior, isPgnKnowledge, pgnSystemsModuleIds } from '../../src/lib/procuraduriaScopes'
import { examProfilesForCourse, selectExamQuestions } from '../../src/lib/questionSelection'
import { buildAdaptiveSession } from '../../src/lib/adaptivePractice'

describe('Consolidación PGN · inventario, señales y selección', () => {
  it('audita todo el banco sin confundir señales editoriales con validez psicométrica', () => {
    const pool = practiceQuestionPool(course)
    const audit = auditPgnBank(pool, new Set(course.sources.map(s => s.id)))
    expect(audit.total).toBe(1098)
    expect(audit.authored).toBe(333)
    expect(audit.generated).toBe(765)
    expect(audit.missingSource).toEqual([])
    expect(audit.invalidOptions).toEqual([])
    expect(audit.displayedCorrectPositions.reduce((a,b)=>a+b,0)).toBe(1098)
    console.info('PGN_BANK_AUDIT', JSON.stringify({
      total: audit.total, authored: audit.authored, generated: audit.generated,
      weakRationale: audit.weakRationale.length, shortStem: audit.shortStem.length,
      longestCorrect: audit.longestCorrect.length, lengthOutlier: audit.lengthOutlier.length,
      authoredLongest: audit.authoredLongest.length, authoredOutlier: audit.authoredOutlier.length,
      displayedCorrectPositions: audit.displayedCorrectPositions,
      repeatedStemGroups: audit.repeatedStems.length, repeatedCaseGroups: audit.repeatedCases.length,
      exactDuplicateGroups: audit.exactDuplicates.length,
      firstAuthoredLengthOutliers: audit.authoredOutlier.slice(0, 20),
    }))
  })
  it('mantiene cobertura de casos redactados en los 85 módulos', () => {
    const pool = practiceQuestionPool(course).filter(isPgnAuthored)
    for (const m of course.modules) for (const suffix of ['situational-1','transfer-1','transfer-2']) {
      expect(pool.some(q => q.id === m.id + '-' + suffix), m.id + suffix).toBe(true)
    }
  })
  it('separa los perfiles y aplica una cuota real de prioridad en 30 ejecuciones por perfil', () => {
    const priority = new Set(course.practiceConfig?.priorityModuleIds)
    for (const profile of examProfilesForCourse(course)) for (let run=0; run<30; run++) {
      const qs = selectExamQuestions(course, profile.id)
      expect(qs).toHaveLength(profile.size)
      expect(new Set(qs.map(q=>q.id)).size).toBe(qs.length)
      expect(qs.every(isPgnAuthored)).toBe(true)
      expect(qs.every(q=>!isPgnConditional(q.moduleId))).toBe(true)
      if (profile.kind === 'functional') {
        expect(qs.every(q=>isPgnKnowledge(q.moduleId) && !pgnSystemsModuleIds.includes(q.moduleId))).toBe(true)
        const integrated = qs.filter(q=>q.integrated)
        expect(integrated.length).toBeGreaterThanOrEqual(profile.integratedTarget ?? 0)
        expect(qs.filter(q=>!q.integrated && priority.has(q.moduleId)).length).toBeGreaterThanOrEqual(Math.ceil((profile.size-(profile.integratedTarget ?? 0))/2))
        if (profile.id==='functional-deep') expect(qs.every(q=>q.difficulty>=4)).toBe(true)
        expect(new Set(integrated.map(q=>q.scenarioId)).size).toBeGreaterThanOrEqual(Math.min(4,profile.integratedTarget ?? 0))
      }
      if (profile.kind === 'behavior') expect(qs.every(q=>isPgnBehavior(q.moduleId))).toBe(true)
      if (profile.kind === 'systems') expect(qs.every(q=>pgnSystemsModuleIds.includes(q.moduleId))).toBe(true)
      if (profile.kind === 'transversal') expect(qs.every(q=>!isPgnBehavior(q.moduleId) && !pgnSystemsModuleIds.includes(q.moduleId))).toBe(true)
    }
  })
  it('excluye especialidades condicionales de adaptativa, conserva el banco y deja DIAN intacto', () => {
    const qs = buildAdaptiveSession(course, undefined, 1098, 17)
    expect(qs.every(q=>!isPgnConditional(q.moduleId))).toBe(true)
    expect(practiceQuestionPool(course).some(q=>isPgnConditional(q.moduleId))).toBe(true)
    expect(practiceQuestionPool(dianGestorCourse)).toBe(dianGestorCourse.questions)
    expect(examProfilesForCourse(dianGestorCourse).some(p=>p.kind==='behavior'||p.kind==='systems')).toBe(false)
  })
})
