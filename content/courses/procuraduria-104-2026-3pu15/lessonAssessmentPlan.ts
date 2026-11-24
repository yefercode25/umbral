/** Las situaciones 2–10 son práctica de aprendizaje, no reactivos inéditos de simulacro.
 * Permutaciones revisadas contra los contenidos de fundamentos, aplicación y cierre.
 * El cierre es acumulativo. Los módulos aún pendientes conservan orden provisional.
 */
const lessonSituationOrder: Record<number, readonly number[]> = {
  "20": [
    2,
    3,
    6,
    5,
    7,
    8,
    4,
    9,
    10
  ],
  "21": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "22": [
    2,
    3,
    10,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "23": [
    2,
    8,
    9,
    3,
    4,
    5,
    6,
    7,
    10
  ],
  "24": [
    7,
    8,
    9,
    2,
    3,
    4,
    5,
    6,
    10
  ],
  "25": [
    4,
    2,
    8,
    3,
    5,
    10,
    6,
    7,
    9
  ],
  "26": [
    4,
    9,
    7,
    2,
    6,
    10,
    3,
    5,
    8
  ],
  "27": [
    5,
    10,
    9,
    2,
    3,
    4,
    6,
    7,
    8
  ],
  "28": [
    2,
    3,
    4,
    8,
    10,
    9,
    5,
    6,
    7
  ],
  "29": [
    2,
    4,
    9,
    3,
    5,
    6,
    7,
    8,
    10
  ],
  "30": [
    2,
    3,
    7,
    4,
    5,
    6,
    8,
    9,
    10
  ],
  "31": [
    2,
    3,
    4,
    5,
    6,
    8,
    7,
    9,
    10
  ],
  "32": [
    2,
    3,
    4,
    6,
    7,
    5,
    8,
    9,
    10
  ],
  "33": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "34": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "35": [
    3,
    4,
    6,
    2,
    5,
    10,
    7,
    8,
    9
  ],
  "36": [
    2,
    5,
    8,
    4,
    6,
    7,
    3,
    9,
    10
  ],
  "37": [
    2,
    7,
    10,
    3,
    8,
    9,
    4,
    5,
    6
  ],
  "38": [
    3,
    4,
    5,
    2,
    7,
    10,
    6,
    8,
    9
  ],
  "39": [
    2,
    4,
    5,
    3,
    6,
    10,
    7,
    8,
    9
  ],
  "40": [
    2,
    3,
    4,
    9,
    10,
    6,
    5,
    7,
    8
  ],
  "41": [
    2,
    4,
    7,
    5,
    6,
    3,
    8,
    9,
    10
  ],
  "42": [
    2,
    8,
    9,
    3,
    4,
    5,
    6,
    7,
    10
  ],
  "43": [
    2,
    3,
    4,
    8,
    9,
    6,
    5,
    7,
    10
  ],
  "44": [
    3,
    4,
    6,
    2,
    5,
    9,
    7,
    8,
    10
  ],
  "45": [
    3,
    5,
    10,
    2,
    4,
    9,
    6,
    7,
    8
  ],
  "46": [
    2,
    3,
    7,
    4,
    6,
    10,
    5,
    8,
    9
  ],
  "47": [
    3,
    9,
    2,
    4,
    6,
    8,
    5,
    7,
    10
  ],
  "48": [
    2,
    4,
    5,
    3,
    6,
    7,
    8,
    9,
    10
  ],
  "49": [
    2,
    6,
    9,
    5,
    7,
    10,
    3,
    4,
    8
  ],
  "50": [
    2,
    9,
    10,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "51": [
    2,
    9,
    6,
    3,
    4,
    10,
    5,
    7,
    8
  ],
  "52": [
    2,
    3,
    4,
    5,
    9,
    10,
    6,
    7,
    8
  ],
  "53": [
    2,
    6,
    10,
    3,
    4,
    5,
    7,
    8,
    9
  ],
  "54": [
    5,
    9,
    6,
    2,
    7,
    10,
    3,
    4,
    8
  ]
}

export function pgnLessonAssessmentIds(moduleId: string, order: 1 | 2 | 3): string[] {
  const number = Number(moduleId.slice(5))
  const cases = lessonSituationOrder[number] ?? [2,3,4,5,6,7,8,9,10]
  return [
    `${moduleId}-q${order * 2 - 1}`,
    `${moduleId}-q${order * 2}`,
    ...cases.slice((order - 1) * 3, order * 3).map(n => `${moduleId}-situational-${n}`),
  ]
}
