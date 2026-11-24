import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M65–M74', () => {
 const expected = [
  {
    "id": "pgn-m65",
    "titles": [
      "Estructura semántica frente a formato visual",
      "Revisión, comparación y versión de entrega",
      "Accesibilidad y formatos institucionales"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "ley-594-2000",
      "office-word-track-changes",
      "office-word-headings",
      "office-word-accessibility"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m66",
    "titles": [
      "Modelo tabular, claves y tipos",
      "Fórmulas y referencias reproducibles",
      "Filtros, subtotales y tablas dinámicas"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "office-excel-subtotals",
      "office-excel-sumifs",
      "office-excel-countifs"
    ],
    "keys": [
      "c",
      "b",
      "b"
    ]
  },
  {
    "id": "pgn-m67",
    "titles": [
      "Población, conjuntos y denominadores",
      "Medidas descriptivas y valores extremos",
      "Tasas, probabilidad y sesgos"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-sgc"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m68",
    "titles": [
      "Pregunta, hipótesis y diseño",
      "Fuentes y triangulación",
      "Sesgos y actualización de hipótesis"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-guia-investigacion",
      "ley-1952-2019"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m69",
    "titles": [
      "Dato, hecho, inferencia y conclusión",
      "Conciliación entre sistemas",
      "Síntesis y lógica de decisiones"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-manual-calidad",
      "ley-1952-2019"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m70",
    "titles": [
      "Responsabilidad con la Organización · B",
      "Organización del Trabajo · B",
      "Conductas observables y autoevaluación"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-diccionario-competencias"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m71",
    "titles": [
      "Investigación · B",
      "Pensamiento Conceptual · A",
      "De la investigación a la explicación"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-diccionario-competencias"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m72",
    "titles": [
      "Orientación a Resultados · A",
      "Cumplimiento de Parámetros · B",
      "Integrar desempeño y parámetros"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-diccionario-competencias"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m73",
    "titles": [
      "Distinguir conocimiento y autodescripción",
      "Lectura literal y afirmaciones inversas",
      "Reflexión sobre conductas reales"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-diccionario-competencias",
      "pgn-res-076-2026",
      "pgn-res-212-2026"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m74",
    "titles": [
      "C-E-P-P-A: competencia, etapa, problema",
      "Prueba y actuación: estándar y secuencia",
      "Casos integrales y estrategia de revisión"
    ],
    "refs": [
      "ley-1952-2019",
      "pgn-guia-disciplinaria",
      "pgn-convocatoria-104-v4",
      "ley-1755-2015"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  }
]
 it('conserva inventario y claves históricas de los 30 cierres', () => {
  expect(procuraduriaCourse.modules).toHaveLength(85)
  expect(procuraduriaCourse.lessons).toHaveLength(255)
  expect(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1948)
  expect(new Set(procuraduriaCourse.questions.filter(q => !q.id.startsWith('pgn-exception-')).map(q => q.id)).size).toBe(1948)
  expect(practiceQuestionPool(procuraduriaCourse).filter(q => !q.id.startsWith('pgn-exception-'))).toHaveLength(1098)
  for(const m of expected) {
   const qs=moduleReviewQuestions(procuraduriaCourse,m.id)
   expect(qs.map(q=>q.id)).toEqual([m.id+'-transfer-1',m.id+'-situational-1',m.id+'-transfer-2'])
   expect(qs.map(q=>q.correctOptionId)).toEqual(m.keys)
   for(const q of qs) {
    expect(q.case?.length ?? 0).toBeGreaterThan(350)
    expect(q.stem.length).toBeGreaterThan(50)
    expect(new Set(q.options.map(o=>o.text)).size).toBe(3)
    expect(new Set(q.options.map(o=>o.rationale)).size).toBe(3)
    expect(q.explanation.length).toBeGreaterThan(150)
   }
  }
  const qs=expected.flatMap(m=>moduleReviewQuestions(procuraduriaCourse,m.id))
  expect(new Set(qs.map(q=>q.case)).size).toBe(30)
  expect(new Set(qs.map(q=>q.stem)).size).toBe(30)
 })
 it('integra 30 tablas, 30 ejemplos y fuentes', () => {
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
