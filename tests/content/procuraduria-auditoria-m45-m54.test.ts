import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { moduleReviewQuestions } from '../../src/lib/moduleReview'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Auditoría M45–M54: prevención y contratación', () => {
 const expected = [
  {
    "id": "pgn-m45",
    "titles": [
      "Finalidad, alcance y límites",
      "Tres escenarios preventivos",
      "De la alerta al seguimiento"
    ],
    "refs": [
      "constitucion",
      "decreto-262-2000",
      "pgn-guia-preventiva",
      "pgn-res-132-2014"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m46",
    "titles": [
      "SIP: estructura y principios",
      "Competencia y coordinación preventiva",
      "Planeación y evaluación verificable"
    ],
    "refs": [
      "pgn-guia-preventiva",
      "pgn-sgc",
      "pgn-res-132-2014"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m47",
    "titles": [
      "Cadena de valor de la política pública",
      "Indicadores comparables y verificables",
      "Riesgos, controles y causalidad"
    ],
    "refs": [
      "pgn-guia-preventiva",
      "pgn-sgc",
      "decreto-1499-2017",
      "pgn-res-132-2014"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m48",
    "titles": [
      "Intervención: finalidad y autoridad",
      "Intervención contencioso-administrativa",
      "Producto de apoyo al agente"
    ],
    "refs": [
      "constitucion",
      "decreto-262-2000",
      "cpaca"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m49",
    "titles": [
      "Igualdad material y ajustes razonables",
      "Atención y protección de datos",
      "Enfoque diferencial aplicado"
    ],
    "refs": [
      "constitucion",
      "ley-1618-2013",
      "ley-1755-2015",
      "ley-1581-2012",
      "ley-2365-2024"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m50",
    "titles": [
      "Ciclo contractual y principios",
      "Modalidades: no elegir por conveniencia",
      "Perfeccionamiento, ejecución y urgencia"
    ],
    "refs": [
      "ley-80-1993",
      "ley-1150-2007",
      "decreto-1082-2015"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m51",
    "titles": [
      "Estudios previos y competencia efectiva",
      "Habilitación, puntaje y subsanación",
      "Mínima cuantía y cambios de reglas"
    ],
    "refs": [
      "ley-80-1993",
      "ley-1150-2007",
      "decreto-1082-2015",
      "ley-1474-2011"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  },
  {
    "id": "pgn-m52",
    "titles": [
      "Supervisión e interventoría: alcance",
      "Certificación y modificaciones",
      "Incumplimiento y debido proceso"
    ],
    "refs": [
      "ley-80-1993",
      "ley-1474-2011",
      "ley-1150-2007",
      "decreto-1082-2015"
    ],
    "keys": [
      "b",
      "b",
      "a"
    ]
  },
  {
    "id": "pgn-m53",
    "titles": [
      "Restricciones del proponente y del evaluador",
      "Inhabilidad sobreviniente (art. 9)",
      "Conflicto de interés y trámite"
    ],
    "refs": [
      "ley-80-1993",
      "ley-1474-2011",
      "constitucion",
      "cpaca",
      "ley-1952-2019"
    ],
    "keys": [
      "a",
      "a",
      "c"
    ]
  },
  {
    "id": "pgn-m54",
    "titles": [
      "Del PAAC al Programa de Transparencia y Ética Pública",
      "Señal, anomalía y hallazgo",
      "SECOP, controles y análisis reproducible"
    ],
    "refs": [
      "ley-1474-2011",
      "ley-2195-2022",
      "ley-1712-2014",
      "decreto-1122-2024"
    ],
    "keys": [
      "c",
      "c",
      "b"
    ]
  }
]
 it('preserva inventario y claves históricas de los 30 cierres', () => {
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
