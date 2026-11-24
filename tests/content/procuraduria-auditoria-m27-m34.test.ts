import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría integral M27–M34', () => {
 const expected = [
  {
    "id": "pgn-m27",
    "titles": [
      "Apertura y delimitación de la investigación",
      "Términos y medidas durante la investigación",
      "Plan de prueba con hipótesis rivales"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-investigacion",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m28",
    "titles": [
      "Participantes: facultades según su calidad",
      "Versión libre, testimonio y confesión",
      "Contradicción que sea realmente posible"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "constitucion",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m29",
    "titles": [
      "Dos eventos habilitan el cierre",
      "Diez días para alegatos precalificatorios",
      "Matriz de evaluación después del traslado"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-investigacion"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m30",
    "titles": [
      "Tres estándares que no se intercambian",
      "Cómo construir un pliego verificable",
      "Archivo definitivo y alcance"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-investigacion",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m31",
    "titles": [
      "Modalidad de notificación según la decisión",
      "Recursos: misma prueba, distinta etapa",
      "Oportunidad, sustentación y constancias"
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
    "id": "pgn-m32",
    "titles": [
      "Causales legales de nulidad",
      "Principios antes de declarar nulidad",
      "Efectos y ruta de decisión"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-disciplinaria"
    ],
    "keys": [
      "a",
      "b",
      "c"
    ]
  },
  {
    "id": "pgn-m33",
    "titles": [
      "Comisión probatoria: quién, qué y cuándo",
      "Prueba que surge durante una comisión",
      "Retorno íntegro de la diligencia"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-disciplinaria",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m34",
    "titles": [
      "Separación funcional y entrega",
      "Qué puede cambiar en el juicio",
      "Naturaleza de la PGN y control judicial"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-disciplinaria",
      "cc-c030-2023"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  }
]
 it('conserva el inventario y claves históricas de 24 cierres', () => {
  expect(procuraduriaCourse.modules).toHaveLength(85)
  expect(procuraduriaCourse.lessons).toHaveLength(255)
  expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
  expect(new Set(procuraduriaCourse.questions.map(q=>q.id)).size).toBe(1948)
  expect(practiceQuestionPool(procuraduriaCourse)).toHaveLength(1098)
  for(const m of expected) {
   const qs=moduleReviewQuestions(procuraduriaCourse,m.id)
   expect(qs.map(q=>q.id)).toEqual([m.id+'-transfer-1',m.id+'-situational-1',m.id+'-transfer-2'])
   expect(qs.map(q=>q.correctOptionId)).toEqual(m.keys)
   for(const q of qs) {
    expect(q.case?.length ?? 0).toBeGreaterThan(350)
    expect(new Set(q.options.map(o=>o.text)).size).toBe(3)
    expect(new Set(q.options.map(o=>o.rationale)).size).toBe(3)
    expect(q.explanation.length).toBeGreaterThan(150)
   }
  }
  const reviewed=expected.flatMap(m=>moduleReviewQuestions(procuraduriaCourse,m.id))
  expect(new Set(reviewed.map(q=>q.case)).size).toBe(24)
  expect(new Set(reviewed.map(q=>q.stem)).size).toBe(24)
 })
 it('integra 24 tablas y 24 ejemplos contextualizados, con fuentes registradas', () => {
  for(const m of expected) for(const [i,title] of m.titles.entries()) {
   const lesson=procuraduriaCourse.lessons.find(l=>l.id===m.id+'-l'+(i+1))!
   expect(lesson.blocks.some(b=>'title' in b && b.title===title)).toBe(true)
   expect(lesson.blocks.some(b=>'title' in b && b.title==='Aplicación: '+title)).toBe(true)
   const source=lesson.blocks.find(b=>b.type==='sources')
   expect(source?.type).toBe('sources')
   if(source?.type==='sources') for(const ref of m.refs) expect(source.sourceIds).toContain(ref)
  }
 })
})
