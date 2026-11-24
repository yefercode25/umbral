import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M21–M23', () => {
  const expected = [
  {
    "id": "pgn-m21",
    "titles": [
      "Quién está sometido al régimen disciplinario",
      "De la noticia a la actuación procedente",
      "Una noticia cambia con nuevos soportes"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m22",
    "titles": [
      "Tres filtros antes de atribuir responsabilidad",
      "Dolo, culpa y exclusión no son equivalentes",
      "Una falla de sistema no resuelve el caso"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m23",
    "titles": [
      "Cinco figuras que no deben confundirse",
      "Impedimento y recusación según la actuación",
      "Distinguir relación personal de interés directo"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-1474-2011",
      "constitucion",
      "cpaca"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  }
]
  it('preserva los inventarios y los IDs y claves de cierre', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q=>q.id)).size).toBe(1948)
    expect(practiceQuestionPool(procuraduriaCourse)).toHaveLength(1098)
    for (const m of expected) {
      const qs = moduleReviewQuestions(procuraduriaCourse,m.id)
      expect(qs.map(q=>q.id)).toEqual([m.id+'-transfer-1',m.id+'-situational-1',m.id+'-transfer-2'])
      expect(qs.map(q=>q.correctOptionId)).toEqual(m.keys)
      for (const q of qs) {
        expect(q.case?.length ?? 0).toBeGreaterThan(350)
        expect(new Set(q.options.map(o=>o.text)).size).toBe(3)
        expect(new Set(q.options.map(o=>o.rationale)).size).toBe(3)
      }
    }
  })
  it('integra las nueve ampliaciones con referencias registradas', () => {
    for (const m of expected) for (const [i,title] of m.titles.entries()) {
      const lesson=procuraduriaCourse.lessons.find(l=>l.id===m.id+'-l'+(i+1))!
      expect(lesson.blocks.some(b=>'title' in b && b.title===title)).toBe(true)
      const source=lesson.blocks.find(b=>b.type==='sources')
      expect(source?.type).toBe('sources')
      if(source?.type==='sources') for(const ref of m.refs) expect(source.sourceIds).toContain(ref)
    }
  })
})
