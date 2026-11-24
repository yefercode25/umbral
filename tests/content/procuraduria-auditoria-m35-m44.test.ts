import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M35–M44: derecho probatorio y evidencia', () => {
 const expected = [
  {
    "id": "pgn-m35",
    "titles": [
      "Carga de la prueba y verdad real",
      "Estándar por etapa y pregunta probatoria",
      "Matriz de suficiencia y descargo"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m36",
    "titles": [
      "Tres filtros que no deben confundirse",
      "Decisión motivada de decreto o negativa",
      "Prueba redundante frente a corroboración"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas",
      "ley-1581-2012"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m37",
    "titles": [
      "Autenticidad, licitud y existencia procesal",
      "Contradicción desde el hito legal",
      "Tratamiento de una fuente cuestionada"
    ],
    "refs": [
      "ley-1952-2019",
      "constitucion",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "b",
      "c",
      "a"
    ]
  },
  {
    "id": "pgn-m38",
    "titles": [
      "Del hecho a la diligencia",
      "Priorizar preservación y apoyo técnico",
      "Cronología reproducible: UTC y hora local"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-investigacion",
      "pgn-guia-pruebas",
      "ley-527-1999"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m39",
    "titles": [
      "Sana crítica y motivación",
      "Indicios: hecho indicador e inferencia",
      "Enfoque diferencial y estándar sancionatorio"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas",
      "ley-2365-2024"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m40",
    "titles": [
      "Documento, copia y noticia disciplinaria",
      "Mensajes de datos y valor demostrativo",
      "Documento reservado e informe técnico"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas",
      "ley-527-1999"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m41",
    "titles": [
      "Deber de testimoniar y excepciones",
      "Práctica y valoración del testimonio",
      "Confesión, silencio y renuencia"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "constitucion",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m42",
    "titles": [
      "Qué debe contener un dictamen",
      "Contradicción pericial: términos y decisiones",
      "Valoración y comparación de dictámenes"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m43",
    "titles": [
      "Inspección disciplinaria: objeto y constancias",
      "Tres vías de prueba trasladada (154)",
      "Matriz de ingreso desde otro expediente"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-pruebas"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m44",
    "titles": [
      "Preservar identidad, integridad y trazabilidad",
      "Separar soporte original y copia analítica",
      "Competencia y explicación de límites"
    ],
    "refs": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-pruebas",
      "ley-527-1999",
      "agn-acuerdo-001-2024"
    ],
    "keys": [
      "a",
      "b",
      "c"
    ]
  }
]
 it('preserva inventario y las claves históricas de 30 preguntas', () => {
  expect(procuraduriaCourse.modules).toHaveLength(85)
  expect(procuraduriaCourse.lessons).toHaveLength(255)
  expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
  expect(new Set(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-')).map(q => q.id)).size).toBe(1948)
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
  expect(new Set(reviewed.map(q=>q.case)).size).toBe(30)
  expect(new Set(reviewed.map(q=>q.stem)).size).toBe(30)
 })
 it('integra 30 tablas, 30 ejemplos y fuentes registradas', () => {
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
