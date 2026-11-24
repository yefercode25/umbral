import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'

describe('Auditoría M18–M20', () => {
  it('preserva inventario, nueve lecciones y claves históricas', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
    expect(new Set(procuraduriaCourse.questions.map(q => q.id)).size).toBe(1948)
    const expected = [
  {
    "id": "pgn-m18",
    "titles": [
      "Clasificada no es lo mismo que reservada",
      "Decidir acceso sin perder trazabilidad",
      "La calidad del solicitante cambia la evaluación"
    ],
    "refs": [
      "ley-1712-2014",
      "ley-1581-2012",
      "ley-1755-2015",
      "ley-1952-2019"
    ],
    "keys": [
      "c",
      "a",
      "b"
    ]
  },
  {
    "id": "pgn-m19",
    "titles": [
      "Mapa procesal: identifica primero la actuación",
      "Cronología que permite controlar garantías",
      "Diferenciar un pliego de cargos de un fallo"
    ],
    "refs": [
      "cpaca",
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
    "id": "pgn-m20",
    "titles": [
      "Principios disciplinarios como límites de la decisión",
      "Garantías que obligan a revisar la hipótesis",
      "Del hallazgo técnico a una inferencia jurídica limitada"
    ],
    "refs": [
      "constitucion",
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  }
]
    for (const m of expected) {
      const questions = moduleReviewQuestions(procuraduriaCourse, m.id)
      expect(questions.map(q=>q.id)).toEqual([m.id+'-transfer-1',m.id+'-situational-1',m.id+'-transfer-2'])
      expect(questions.map(q=>q.correctOptionId)).toEqual(m.keys)
      for (const [i,title] of m.titles.entries()) {
        const lesson = procuraduriaCourse.lessons.find(l=>l.id===m.id+'-l'+(i+1))!
        expect(lesson.blocks.some(b=>'title' in b && b.title===title)).toBe(true)
        const source = lesson.blocks.find(b=>b.type==='sources')
        expect(source?.type).toBe('sources')
        if (source?.type==='sources') for(const ref of m.refs) expect(source.sourceIds).toContain(ref)
      }
    }
  })
})
