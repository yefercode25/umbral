import { describe, expect, it } from 'vitest'
import { procuraduriaCourse as course } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'
import { auditPgnBank, hasPgnLengthOutlier } from '../../src/lib/procuraduriaBankAudit'
import { isPgnAuthored, isPgnException, isPgnConditional, isPgnBehavior, isPgnKnowledge, pgnSystemsModuleIds } from '../../src/lib/procuraduriaScopes'
import { examProfilesForCourse, selectExamQuestions } from '../../src/lib/questionSelection'
import { buildAdaptiveSession } from '../../src/lib/adaptivePractice'

describe('Consolidación PGN · inventario, señales y selección', () => {
  it('audita todo el banco sin confundir señales editoriales con validez psicométrica', () => {
    const pool = practiceQuestionPool(course)
    const audit = auditPgnBank(pool, new Set(course.sources.map(s => s.id)))
    expect(audit.total).toBe(1212)
    expect(audit.authored).toBe(447)
    expect(audit.generated).toBe(765)
    expect(audit.missingSource).toEqual([])
    expect(audit.invalidOptions).toEqual([])
    expect(audit.displayedCorrectPositions.reduce((a,b)=>a+b,0)).toBe(1212)
    console.info('PGN_BANK_AUDIT', JSON.stringify({
      total: audit.total, authored: audit.authored, generated: audit.generated,
      weakRationale: audit.weakRationale.length, shortStem: audit.shortStem.length,
      longestCorrect: audit.longestCorrect.length, lengthOutlier: audit.lengthOutlier.length,
      authoredLongest: audit.authoredLongest.length, authoredOutlier: audit.authoredOutlier.length,
      displayedCorrectPositions: audit.displayedCorrectPositions,
      repeatedStemGroups: audit.repeatedStems.length, repeatedCaseGroups: audit.repeatedCases.length,
      exactDuplicateGroups: audit.exactDuplicates.length,
      authoredLengthOutlierIds: audit.authoredOutlier,
    }))
  })
  it('evita diferencias pronunciadas y patrones inversos en los 20 casos priorizados sin cambiar claves', () => {
    const expected = {
  "pgn-m2-situational-1": "a",
  "pgn-m7-situational-1": "b",
  "pgn-m19-situational-1": "b",
  "pgn-m22-situational-1": "b",
  "pgn-m25-situational-1": "b",
  "pgn-m32-situational-1": "b",
  "pgn-m35-situational-1": "a",
  "pgn-m36-situational-1": "c",
  "pgn-m37-situational-1": "c",
  "pgn-m38-situational-1": "a",
  "pgn-m40-situational-1": "b",
  "pgn-m41-situational-1": "a",
  "pgn-m43-situational-1": "b",
  "pgn-m49-situational-1": "b",
  "pgn-m53-situational-1": "a",
  "pgn-m54-situational-1": "c",
  "pgn-m55-situational-1": "b",
  "pgn-m56-situational-1": "a",
  "pgn-m58-situational-1": "b",
  "pgn-m59-situational-1": "a"
}
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s => s.id)))
    const ranks = { longest: 0, shortest: 0, other: 0 }
    for (const [id, key] of Object.entries(expected)) {
      const q = course.questions.find(q => q.id === id)!
      expect(q.correctOptionId, id).toBe(key)
      expect(audit.lengthOutlier, id).not.toContain(id)
      const count = (text: string) => text.trim().split(/\s+/).length
      const correct = count(q.options.find(o => o.id === key)!.text)
      const wrong = q.options.filter(o => o.id !== key).map(o => count(o.text))
      if (correct > Math.max(...wrong)) ranks.longest++
      else if (correct < Math.min(...wrong)) ranks.shortest++
      else ranks.other++
    }
    expect(ranks.longest).toBeGreaterThan(0)
    expect(ranks.shortest).toBeGreaterThan(0)
    expect(ranks.other).toBeGreaterThan(0)
    expect(Math.max(...Object.values(ranks))).toBeLessThan(15)
  })
  it('reduce las pistas de longitud de otros ocho casos técnicos y transversales, preservando sus claves', () => {
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s => s.id)))
    const expected = {"pgn-m60-situational-1":"c","pgn-m61-situational-1":"c","pgn-m62-situational-1":"a","pgn-m63-situational-1":"c","pgn-m64-situational-1":"b","pgn-m65-situational-1":"a","pgn-m70-situational-1":"b","pgn-m74-situational-1":"a"}
    for (const [id, key] of Object.entries(expected)) {
      expect(course.questions.find(q=>q.id===id)?.correctOptionId, id).toBe(key)
      expect(audit.lengthOutlier, id).not.toContain(id)
    }
  })
  it('equilibra nueve transferencias disciplinarias señaladas sin cambiar sus claves', () => {
    const expected = {"pgn-m19-transfer-1":"b","pgn-m21-transfer-1":"c","pgn-m23-transfer-1":"a","pgn-m24-transfer-2":"b","pgn-m25-transfer-2":"a","pgn-m26-transfer-1":"a","pgn-m26-transfer-2":"c","pgn-m27-transfer-1":"c","pgn-m28-transfer-1":"b"}
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s=>s.id)))
    for (const [id,key] of Object.entries(expected)) {
      expect(course.questions.find(q=>q.id===id)?.correctOptionId,id).toBe(key)
      expect(audit.lengthOutlier,id).not.toContain(id)
    }
  })
  it('corrige veinte distractores históricos señalados en RC.6 sin cambiar sus claves', () => {
    const expected = {"pgn-m1-transfer-2":"a","pgn-m4-transfer-2":"a","pgn-m5-transfer-1":"a","pgn-m6-transfer-2":"b","pgn-m8-transfer-2":"c","pgn-m10-transfer-1":"b","pgn-m16-transfer-2":"a","pgn-m28-transfer-2":"a","pgn-m31-transfer-1":"b","pgn-m34-transfer-1":"b","pgn-m34-transfer-2":"a","pgn-m37-transfer-1":"b","pgn-m37-transfer-2":"a","pgn-m39-transfer-2":"b","pgn-m40-transfer-2":"a","pgn-m41-transfer-2":"c","pgn-m75-situational-1":"c","pgn-m76-situational-1":"b","pgn-m79-situational-1":"b","pgn-m83-situational-1":"a"}
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s=>s.id)))
    for (const [id,key] of Object.entries(expected)) {
      expect(course.questions.find(q=>q.id===id)?.correctOptionId,id).toBe(key)
      expect(audit.lengthOutlier,id).not.toContain(id)
    }
  })
  it('corrige otras cuarenta transferencias señaladas en RC.6, conservando claves', () => {
    const expected = {"pgn-m42-transfer-2":"b","pgn-m43-transfer-1":"b","pgn-m44-transfer-2":"c","pgn-m45-transfer-2":"b","pgn-m47-transfer-1":"a","pgn-m48-transfer-1":"c","pgn-m48-transfer-2":"b","pgn-m50-transfer-1":"a","pgn-m50-transfer-2":"c","pgn-m52-transfer-1":"b","pgn-m53-transfer-2":"c","pgn-m54-transfer-2":"b","pgn-m55-transfer-2":"a","pgn-m56-transfer-1":"a","pgn-m56-transfer-2":"c","pgn-m58-transfer-1":"b","pgn-m59-transfer-1":"a","pgn-m59-transfer-2":"c","pgn-m60-transfer-1":"c","pgn-m61-transfer-2":"a","pgn-m62-transfer-2":"c","pgn-m63-transfer-1":"c","pgn-m63-transfer-2":"b","pgn-m64-transfer-2":"a","pgn-m65-transfer-1":"a","pgn-m65-transfer-2":"c","pgn-m67-transfer-2":"a","pgn-m69-transfer-1":"c","pgn-m72-transfer-1":"c","pgn-m73-transfer-2":"a","pgn-m74-transfer-2":"c","pgn-m76-transfer-1":"b","pgn-m77-transfer-2":"c","pgn-m78-transfer-1":"c","pgn-m78-transfer-2":"b","pgn-m80-transfer-1":"a","pgn-m80-transfer-2":"c","pgn-m82-transfer-1":"b","pgn-m82-transfer-2":"a","pgn-m84-transfer-2":"b"}
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s=>s.id)))
    for (const [id,key] of Object.entries(expected)) {
      expect(course.questions.find(q=>q.id===id)?.correctOptionId,id).toBe(key)
      expect(audit.lengthOutlier,id).not.toContain(id)
    }
  })
  it('corrige las 21 preguntas integradoras y de expedientes restantes sin cambiar sus claves', () => {
    const expected = {"pgn-int-data-03":"a","pgn-int-data-04":"a","pgn-int-data-05":"a","pgn-int-proc-02":"a","pgn-int-pet-02":"a","pgn-int-pet-03":"a","pgn-int-pet-04":"a","pgn-int-pet-05":"a","pgn-int-prev-01":"a","pgn-int-prev-02":"a","pgn-int-prev-03":"a","pgn-int-prev-04":"a","pgn-int-prev-05":"a","pgn-int-comp-02":"a","pgn-int-comp-03":"a","pgn-int-comp-05":"a","pgn-int-sw-03":"a","pgn-int-sw-04":"a","pgn-int-sw-05":"a","pgn-dossier-peticion-mixta-3":"a","pgn-dossier-alteracion-log-2":"a"}
    const audit = auditPgnBank(practiceQuestionPool(course), new Set(course.sources.map(s=>s.id)))
    for (const [id,key] of Object.entries(expected)) {
      expect(course.questions.find(q=>q.id===id)?.correctOptionId,id).toBe(key)
      expect(audit.lengthOutlier,id).not.toContain(id)
    }
    expect(audit.authoredOutlier).toEqual([])
  })
  it('evita invertir sistemáticamente la señal de longitud en las cuarenta transferencias revisadas', () => {
    const ids = new Set(["pgn-m42-transfer-2","pgn-m43-transfer-1","pgn-m44-transfer-2","pgn-m45-transfer-2","pgn-m47-transfer-1","pgn-m48-transfer-1","pgn-m48-transfer-2","pgn-m50-transfer-1","pgn-m50-transfer-2","pgn-m52-transfer-1","pgn-m53-transfer-2","pgn-m54-transfer-2","pgn-m55-transfer-2","pgn-m56-transfer-1","pgn-m56-transfer-2","pgn-m58-transfer-1","pgn-m59-transfer-1","pgn-m59-transfer-2","pgn-m60-transfer-1","pgn-m61-transfer-2","pgn-m62-transfer-2","pgn-m63-transfer-1","pgn-m63-transfer-2","pgn-m64-transfer-2","pgn-m65-transfer-1","pgn-m65-transfer-2","pgn-m67-transfer-2","pgn-m69-transfer-1","pgn-m72-transfer-1","pgn-m73-transfer-2","pgn-m74-transfer-2","pgn-m76-transfer-1","pgn-m77-transfer-2","pgn-m78-transfer-1","pgn-m78-transfer-2","pgn-m80-transfer-1","pgn-m80-transfer-2","pgn-m82-transfer-1","pgn-m82-transfer-2","pgn-m84-transfer-2"])
    const items = course.questions.filter(q=>ids.has(q.id))
    expect(items).toHaveLength(40)
    const count = (text:string) => text.trim().split(/\s+/).length
    const ranks = {longest:0,shortest:0,other:0}
    for (const q of items) {
      const correct = count(q.options.find(o=>o.id===q.correctOptionId)!.text)
      const wrong = q.options.filter(o=>o.id!==q.correctOptionId).map(o=>count(o.text))
      if (correct>Math.max(...wrong)) ranks.longest++
      else if (correct<Math.min(...wrong)) ranks.shortest++
      else ranks.other++
    }
    expect(ranks.longest).toBeGreaterThan(0)
    expect(ranks.shortest).toBeGreaterThan(0)
    expect(ranks.other).toBeGreaterThan(0)
    expect(Math.max(...Object.values(ranks))).toBeLessThanOrEqual(26)
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
        expect(qs.filter(isPgnException).length).toBeGreaterThanOrEqual(Math.ceil(profile.size/5))
        const integrated = qs.filter(q=>q.integrated)
        expect(integrated.length).toBeGreaterThanOrEqual(profile.integratedTarget ?? 0)
        expect(qs.filter(q=>!q.integrated && priority.has(q.moduleId)).length).toBeGreaterThanOrEqual(Math.ceil((profile.size-(profile.integratedTarget ?? 0))/2))
        if (profile.id==='functional-blind') expect(qs.some(hasPgnLengthOutlier)).toBe(false)
        if (profile.id==='functional-deep') expect(qs.every(q=>q.difficulty>=4)).toBe(true)
        expect(new Set(integrated.map(q=>q.scenarioId)).size).toBeGreaterThanOrEqual(Math.min(4,profile.integratedTarget ?? 0))
      }
      if (profile.kind === 'behavior') {
        expect(qs.every(q=>isPgnBehavior(q.moduleId))).toBe(true)
        expect(qs.filter(isPgnException).length).toBeGreaterThanOrEqual(6)
        for (const id of ['pgn-m70','pgn-m71','pgn-m72']) expect(qs.filter(q=>q.moduleId===id && isPgnException(q)).length).toBeGreaterThanOrEqual(2)
      }
      if (profile.kind === 'systems') {
        expect(qs.every(q=>pgnSystemsModuleIds.includes(q.moduleId))).toBe(true)
        expect(qs.filter(isPgnException).length).toBeGreaterThanOrEqual(3)
      }
      if (profile.kind === 'transversal') {
        expect(qs.every(q=>!isPgnBehavior(q.moduleId) && !pgnSystemsModuleIds.includes(q.moduleId))).toBe(true)
        expect(qs.filter(isPgnException).length).toBeGreaterThanOrEqual(Math.ceil(profile.size/5))
      }
    }
  })
  it('excluye especialidades condicionales de adaptativa, conserva el banco y deja DIAN intacto', () => {
    const qs = buildAdaptiveSession(course, undefined, 1212, 17)
    expect(qs.every(q=>!isPgnConditional(q.moduleId))).toBe(true)
    expect(practiceQuestionPool(course).some(q=>isPgnConditional(q.moduleId))).toBe(true)
    expect(practiceQuestionPool(dianGestorCourse)).toBe(dianGestorCourse.questions)
    expect(examProfilesForCourse(dianGestorCourse).some(p=>p.kind==='behavior'||p.kind==='systems')).toBe(false)
  })
})
