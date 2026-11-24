import { describe, expect, it } from 'vitest'
import { procuraduriaCourse as course } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { reviewedCheckpointIds } from '../../content/courses/procuraduria-104-2026-3pu15/reviewedLessonCheckpoints'
import { lessonAssessmentQuestions } from '../../src/lib/lessonAssessment'
import { reviewedTemplateModuleIds } from '../../content/courses/procuraduria-104-2026-3pu15/reviewedTemplateQuestions'
import { hasPgnLengthCue } from '../../src/lib/procuraduriaBankAudit'

describe('PGN · comprobaciones de lección revisadas M15–M54',()=>{
  it('revisa las 240 preguntas originales y mantiene claves y referencias',()=>{
    expect(reviewedCheckpointIds).toHaveLength(240)
    const seen=new Set<string>()
    const sources=new Set(course.sources.map(s=>s.id))
    for(let n=15;n<=54;n++) for(let l=1;l<=3;l++){
      const lesson=course.lessons.find(x=>x.id===`pgn-m${n}-l${l}`)!
      const qs=lessonAssessmentQuestions(course,lesson)
      expect(qs).toHaveLength(5)
      for(const q of qs.slice(0,2)){
        expect(reviewedCheckpointIds).toContain(q.id)
        expect(q.correctOptionId,q.id).toBe('a')
        expect(q.verifiedAt,q.id).toBe('2026-11-24')
        expect(q.options.every(o=>!!o.rationale),q.id).toBe(true)
        expect(q.sourceIds.every(s=>sources.has(s)),q.id).toBe(true)
        expect(hasPgnLengthCue(q),q.id).toBe(false)
        expect(seen.has(q.stem),q.id).toBe(false)
        seen.add(q.stem)
      }
    }
    expect(seen.size).toBe(240)
  })
})


describe('PGN · módulos con evaluación individualizada', () => {
  it('comprueba 600 reactivos únicos en las 120 lecciones M15–M54', () => {
    const all = new Set<string>()
    for (let n = 15; n <= 54; n++) {
      const moduleId = `pgn-m${n}`
      expect(reviewedTemplateModuleIds).toContain(moduleId)
      for (let l = 1; l <= 3; l++) {
        const lesson = course.lessons.find(x => x.id === `${moduleId}-l${l}`)!
        const qs = lessonAssessmentQuestions(course, lesson)
        expect(qs).toHaveLength(5)
        expect(qs.slice(0,2).every(q => reviewedCheckpointIds.includes(q.id))).toBe(true)
        expect(qs.slice(2).every(q => /-situational-(10|[2-9])$/.test(q.id))).toBe(true)
        for (const q of qs) {
          expect(q.moduleId).toBe(moduleId)
          expect(all.has(q.id), q.id).toBe(false)
          expect(q.options.every(o => !!o.rationale), q.id).toBe(true)
          expect(hasPgnLengthCue(q), q.id).toBe(false)
          all.add(q.id)
        }
      }
    }
    expect(all.size).toBe(600)
  })
})
