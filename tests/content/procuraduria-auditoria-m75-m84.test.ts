import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M75–M84', () => {
 const expected = [
  {
    "id": "pgn-m75",
    "titles": [
      "Especialidad condicional y núcleo común",
      "Hacienda pública y política económica",
      "Lectura del riesgo financiero"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "constitucion",
      "decreto-111-1996",
      "cgn-marco-gobierno"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m76",
    "titles": [
      "Obligación tributaria y deberes formales",
      "Ingresos y regulación económica",
      "Control sin atribución automática"
    ],
    "refs": [
      "constitucion",
      "estatuto-tributario-decreto-624",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m77",
    "titles": [
      "Momentos de la ejecución presupuestal",
      "Contabilidad pública y devengo",
      "Cierre y lectura de soportes"
    ],
    "refs": [
      "decreto-111-1996",
      "cgn-marco-gobierno",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m78",
    "titles": [
      "Régimen especial y poder preferente",
      "Derechos humanos y DIH",
      "Control institucional y registros sensibles"
    ],
    "refs": [
      "constitucion",
      "ley-1862-2017",
      "ley-2196-2022",
      "cicr-ddhh-dih",
      "pgn-buenas-practicas-ddhh",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m79",
    "titles": [
      "Jerarquía y vigencia de fuentes",
      "Matriz de cobertura y actualización",
      "Versionado y progreso"
    ],
    "refs": [
      "pgn-convocatoria-104-v4",
      "pgn-res-076-2026",
      "pgn-res-108-2026",
      "pgn-res-133-2026",
      "pgn-res-212-2026",
      "pgn-res-243-2026",
      "pgn-concurso-2026"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m80",
    "titles": [
      "Arquitectura y valor público",
      "Integración e interoperabilidad",
      "Disponibilidad y diagnóstico"
    ],
    "refs": [
      "mintic-mrae-v3",
      "pgn-convocatoria-104-v4",
      "mintic-mspi-2025"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m81",
    "titles": [
      "Capas, protocolos y direccionamiento",
      "Segmentación, NAT y VPN",
      "Diagnóstico y evidencia de comunicaciones"
    ],
    "refs": [
      "mintic-mspi-2025",
      "nist-sp-800-92",
      "rfc-9293",
      "rfc-1034",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m82",
    "titles": [
      "Riesgo, controles y CSF 2.0",
      "Respuesta a incidentes: SP 800-61r3",
      "Continuidad, privacidad y recuperación"
    ],
    "refs": [
      "mintic-mspi-2025",
      "nist-csf-2",
      "nist-sp-800-61-r3",
      "ley-1581-2012",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "b",
      "c",
      "a"
    ]
  },
  {
    "id": "pgn-m83",
    "titles": [
      "Ciclo de vida y trazabilidad de requisitos",
      "Pruebas y desarrollo seguro",
      "Cambios, despliegue y reversión"
    ],
    "refs": [
      "mintic-mrae-v3",
      "mintic-mspi-2025",
      "nist-sp-800-218",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m84",
    "titles": [
      "Modelo relacional e integridad",
      "Transacciones y concurrencia",
      "Auditoría, respaldo y gobierno"
    ],
    "refs": [
      "mintic-mrae-v3",
      "mintic-mspi-2025",
      "ley-1581-2012",
      "nist-sp-800-86",
      "pgn-convocatoria-104-v4"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  }
]
 it('conserva inventario y claves históricas de los 30 cierres', () => {
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
    for(const sourceId of m.refs) expect(q.sourceIds).toContain(sourceId)
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
