import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M24–M26', () => {
  const expected = [
  {
    "id": "pgn-m24",
    "titles": [
      "Gravedad y sanción: dos decisiones relacionadas",
      "El reloj de la prescripción (art. 33 CGD)",
      "Cronología aplicada: fechas que sí cambian el resultado"
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
    "id": "pgn-m25",
    "titles": [
      "Descomponer una noticia disciplinaria",
      "Tres rutas iniciales, tres presupuestos",
      "Una noticia no es una imputación"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-investigacion",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m26",
    "titles": [
      "Indagación previa: finalidad y límite",
      "Qué hacer cuando aparece evidencia de identidad",
      "Cómo terminar la indagación"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-investigacion"
    ],
    "keys": [
      "a",
      "b",
      "c"
    ]
  }
]
  it('preserva inventario, IDs y claves históricas', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-')).map(q => q.id)).size).toBe(1948)
    expect(practiceQuestionPool(procuraduriaCourse)).toHaveLength(1098)
    for (const m of expected) {
      const qs=moduleReviewQuestions(procuraduriaCourse,m.id)
      expect(qs.map(q=>q.id)).toEqual([m.id+'-transfer-1',m.id+'-situational-1',m.id+'-transfer-2'])
      expect(qs.map(q=>q.correctOptionId)).toEqual(m.keys)
      for(const q of qs) {
        expect(q.case?.length ?? 0).toBeGreaterThan(350)
        expect(new Set(q.options.map(o=>o.text)).size).toBe(3)
        expect(new Set(q.options.map(o=>o.rationale)).size).toBe(3)
      }
    }
  })
  it('integra nueve ampliaciones y fuentes válidas', () => {
    for(const m of expected) for(const [i,title] of m.titles.entries()) {
      const lesson=procuraduriaCourse.lessons.find(l=>l.id===m.id+'-l'+(i+1))!
      expect(lesson.blocks.some(b=>'title' in b && b.title===title)).toBe(true)
      const source=lesson.blocks.find(b=>b.type==='sources')
      expect(source?.type).toBe('sources')
      if(source?.type==='sources') for(const ref of m.refs) expect(source.sourceIds).toContain(ref)
    }
  })
})
