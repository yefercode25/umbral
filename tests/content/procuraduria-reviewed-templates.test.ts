import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { reviewedTemplateModuleIds } from '../../content/courses/procuraduria-104-2026-3pu15/reviewedTemplateQuestions'
import { hasPgnLengthCue } from '../../src/lib/procuraduriaBankAudit'

describe('RC.8 · revisión individual de plantillas', () => {
  it('mantiene claves e IDs históricos, con nueve casos distintos por módulo y fuentes legales', () => {
    expect(reviewedTemplateModuleIds).toEqual(["pgn-m25","pgn-m26","pgn-m27","pgn-m28","pgn-m29","pgn-m30","pgn-m31","pgn-m32","pgn-m33","pgn-m34","pgn-m20","pgn-m21","pgn-m22","pgn-m23","pgn-m24","pgn-m35","pgn-m36","pgn-m37","pgn-m38","pgn-m39","pgn-m40","pgn-m41","pgn-m42","pgn-m43","pgn-m44","pgn-m45","pgn-m46"])
    const questions = procuraduriaCourse.questions.filter(q => reviewedTemplateModuleIds.includes(q.moduleId) && /-situational-(10|[2-9])$/.test(q.id))
    expect(questions).toHaveLength(243)
    expect(new Set(questions.map(q => q.stem)).size).toBe(243)
    expect(new Set(questions.map(q => q.case)).size).toBe(243)
    for (const q of questions) {
      const module = procuraduriaCourse.modules.find(m => m.id === q.moduleId)!
      const number = Number(q.id.split('-').at(-1))
      expect(q.correctOptionId, q.id).toBe(['a','c','b'][(module.order + number) % 3])
      expect(q.case!.length, q.id).toBeGreaterThan(180)
      expect(q.stem.length, q.id).toBeGreaterThan(35)
      expect(q.verifiedAt).toBe('2026-11-24')
      if (Number(q.moduleId.slice(5)) < 45) {
        expect(q.sourceIds).toContain('ley-1952-2019')
        expect(q.sourceIds).toContain('ley-2094-2021')
        expect(q.explanation).toMatch(/Código General Disciplinario, art/)
      } else {
        expect(q.explanation).toMatch(/^Fundamento:/)
        expect(q.sourceIds).toContain('pgn-res-132-2014')
      }
      expect(hasPgnLengthCue(q), q.id).toBe(false)
      expect(new Set(q.options.map(o=>o.rationale)).size).toBe(3)
    }
  })
})
