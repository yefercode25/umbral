import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M55–M64', () => {
 const expected = [
  {
    "id": "pgn-m55",
    "titles": [
      "Instrumentos y competencias",
      "Determinantes y uso del suelo",
      "Cartografía y control preventivo"
    ],
    "refs": [
      "constitucion",
      "ley-1454-2011",
      "ley-388-1997",
      "ley-2294-2023"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m56",
    "titles": [
      "MIPG y MIPGN",
      "Ficha técnica e indicadores",
      "Brechas y mejora"
    ],
    "refs": [
      "decreto-1499-2017",
      "pgn-sgc",
      "pgn-manual-calidad",
      "ley-87-1993"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m57",
    "titles": [
      "PHVA y gestión de procesos",
      "Corrección y acción correctiva",
      "Documentos y auditoría"
    ],
    "refs": [
      "pgn-sgc",
      "pgn-manual-calidad",
      "decreto-1499-2017",
      "pgn-res-329-2021"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m58",
    "titles": [
      "Clasificación y retención",
      "Expediente electrónico",
      "Versiones y acceso"
    ],
    "refs": [
      "ley-594-2000",
      "agn-acuerdo-001-2024",
      "pgn-manual-calidad",
      "ley-527-1999"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m59",
    "titles": [
      "Clasificación de solicitudes",
      "Respuesta clara y verificable",
      "Informe y revisión"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "ley-1755-2015",
      "ley-1712-2014",
      "pgn-manual-calidad",
      "ley-1952-2019"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m60",
    "titles": [
      "Calidad y gobierno de datos",
      "Ciclo de vida de accesos",
      "Seguridad y privacidad"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-manual-calidad",
      "ley-1581-2012",
      "mintic-mspi-2025",
      "mintic-mrae-v3"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m61",
    "titles": [
      "Semántica de los logs",
      "Identidad y correlación",
      "Cronología y preservación"
    ],
    "refs": [
      "ley-527-1999",
      "pgn-guia-pruebas",
      "ley-1581-2012",
      "nist-sp-800-92"
    ],
    "keys": [
      "b",
      "c",
      "a"
    ]
  },
  {
    "id": "pgn-m62",
    "titles": [
      "Estado frente a historial",
      "SQL y unidad de análisis",
      "Atribución y reconstrucción"
    ],
    "refs": [
      "pgn-guia-pruebas",
      "ley-527-1999",
      "ley-1952-2019",
      "nist-sp-800-86"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m63",
    "titles": [
      "Correo y encabezados",
      "Autenticación de dominio",
      "Archivos, firmas y hash"
    ],
    "refs": [
      "ley-527-1999",
      "pgn-guia-pruebas",
      "rfc-5322",
      "rfc-6376",
      "rfc-8601",
      "rfc-7208",
      "rfc-9989",
      "nist-sp-800-86"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m64",
    "titles": [
      "Informe técnico reproducible",
      "Alcance de la conclusión",
      "Entrega y contradicción"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-guia-pruebas",
      "ley-527-1999",
      "ley-1952-2019",
      "nist-sp-800-86"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  }
]
 it('conserva inventario y claves históricas de 30 cierres', () => {
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
