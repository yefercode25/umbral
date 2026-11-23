import type { Question, QuestionOption } from '../../../src/types/course'
import type { ProcuraduriaModuleBlueprint } from './blueprints'
import { caseProfileFor } from './caseProfiles'

/**
 * Preguntas de transferencia distintas de las comprobaciones de lección.
 * Escenarios ficticios, sin atribuciones automáticas de responsabilidad.
 * Los IDs nuevos conservan la trazabilidad histórica de las respuestas.
 */
type Choice = { text: string; rationale: string }
type Challenge = {
  caseText: string
  stem: string
  right: Choice
  wrong: [Choice, Choice]
  difficulty: 2 | 3 | 4 | 5
  kind: 'single' | 'pjs'
}

const IDS = ['a', 'b', 'c'] as const

function fullText(...parts: string[]): string {
  return parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim()
}

function buildQuestion(bp: ProcuraduriaModuleBlueprint, challenge: Challenge, number: number): Question {
  const initial = [challenge.right, ...challenge.wrong]
  const offset = (bp.order + number) % 3
  const rotated = [...initial.slice(offset), ...initial.slice(0, offset)]
  const options: QuestionOption[] = rotated.map((choice, index) => ({
    id: IDS[index]!,
    text: choice.text,
    rationale: choice.rationale,
  }))
  return {
    id: bp.id + '-situational-' + number,
    moduleId: bp.id,
    skillIds: bp.skillIds,
    type: challenge.kind,
    difficulty: challenge.difficulty,
    case: challenge.caseText,
    stem: challenge.stem,
    options,
    correctOptionId: IDS[rotated.indexOf(challenge.right)]!,
    explanation: fullText(
      challenge.right.rationale,
      'Fundamento de la unidad: ' + bp.core,
      'La respuesta debe relacionarse con la etapa, el presupuesto de la regla y los límites de la actuación.',
    ),
    sourceIds: bp.sourceIds,
    verifiedAt: '2026-09-14',
  }
}

export function buildProcuraduriaSituationalQuestions(bp: ProcuraduriaModuleBlueprint): Question[] {
  const p = caseProfileFor(bp)
  const [s1 = 'Delimitar el problema', s2 = 'Verificar las fuentes', s3 = 'Contrastar la norma', s4 = 'Documentar la decisión'] = bp.steps
  const [r1 = bp.core, r2 = bp.core, r3 = bp.core] = bp.keyPoints
  const wrong1 = bp.distractors[0] ?? 'Dar el asunto por concluido sin contrastar los soportes.'
  const wrong2 = bp.distractors[1] ?? 'Trasladar la decisión sin verificar los límites de competencia.'
  const right = bp.correct

  const c: Challenge[] = [
    {
      caseText: fullText(p.setting, p.document, p.pressure,
        'La persona responsable debe orientar una actuación concreta y explicar su alcance en el expediente. Una decisión apresurada podría afectar a terceros o a la validez del trámite.'),
      stem: '¿Cuál actuación inicial permite tomar una decisión defendible con las condiciones descritas?',
      right: { text: right, rationale: 'Integra los hechos disponibles con el ámbito real de la actuación y sus límites.' },
      wrong: [
        { text: fullText(wrong1, 'El soporte se documentará después de ejecutar la medida.'), rationale: 'Una justificación posterior no reemplaza la verificación previa exigible.' },
        { text: fullText(wrong2, 'Es suficiente el aval verbal de la jefatura.'), rationale: 'El respaldo informal no subsana una omisión de competencia o de soporte.' },
      ],
      difficulty: 3, kind: 'pjs',
    },
    {
      caseText: fullText(p.setting, p.conflict, p.document,
        'El equipo propone varias actividades, pero no ha determinado cuál corresponde a la fase actual ni qué condiciones deben estar acreditadas primero.'),
      stem: 'Si debes elegir el primer paso verificable, ¿qué movimiento corresponde antes de adelantar decisiones posteriores?',
      right: { text: s1, rationale: 'El punto de partida delimita el análisis antes de adoptar una medida que depende de esa verificación.' },
      wrong: [
        { text: fullText(s3, 'Ejecutarlo sin verificar los presupuestos de apertura.'), rationale: 'Es un paso posterior que no sustituye la delimitación inicial.' },
        { text: fullText(s4, 'Tratarlo como cierre pese a las comprobaciones iniciales pendientes.'), rationale: 'Una actividad final no reemplaza los controles de inicio.' },
      ],
      difficulty: 3, kind: 'pjs',
    },
    {
      caseText: fullText(p.document, p.conflict, p.change,
        'La nueva información debe contrastarse con los documentos anteriores y con sus fuentes. Todavía no existe una reconstrucción completa de las inferencias.'),
      stem: '¿Qué criterio material debe guiar la evaluación de la nueva información en lugar de aceptar automáticamente una sola versión?',
      right: { text: r1, rationale: 'La regla se interpreta a la luz de su supuesto y de los hechos efectivamente acreditados.' },
      wrong: [
        { text: fullText(wrong2, 'Las diferencias se consignan solo en una nota sin efecto en el análisis.'), rationale: 'Una contradicción material puede alterar el fundamento de la conclusión.' },
        { text: fullText(wrong1, 'Prevalece siempre la primera versión recibida.'), rationale: 'La cronología de recepción no determina por sí misma la fuerza de la prueba.' },
      ],
      difficulty: 4, kind: 'pjs',
    },
    {
      caseText: fullText(p.setting, p.change, p.pressure,
        'La fase inicial ya delimitó el asunto; ahora debe determinarse cómo verificar un dato que condiciona la actuación siguiente.'),
      stem: '¿Qué acción continúa lógicamente una vez delimitado el problema, sin anticipar el cierre?',
      right: { text: s2, rationale: 'La segunda comprobación evita convertir un supuesto no probado en una conclusión.' },
      wrong: [
        { text: fullText(s4, 'Asumiendo que el hecho incierto ya fue demostrado.'), rationale: 'No debe anticiparse el cierre sin completar las verificaciones.' },
        { text: fullText(wrong1, 'Se considera innecesario examinar el dato faltante.'), rationale: 'Omitir una condición material no resuelve el problema.' },
      ],
      difficulty: 3, kind: 'pjs',
    },
    {
      caseText: fullText(p.setting, p.document, p.conflict,
        'Se preparan dos interpretaciones del mismo expediente: una resuelve el objetivo operativo de inmediato, pero deja sin acreditar un presupuesto relevante.'),
      stem: '¿Qué afirmación separa una respuesta materialmente adecuada de una solución solo aparente?',
      right: { text: r2, rationale: 'El criterio permite descartar el atajo cuando no satisface los límites de la figura examinada.' },
      wrong: [
        { text: fullText(wrong1, 'La urgencia administrativa justifica no revisar condiciones adicionales.'), rationale: 'Las metas de gestión no dispensan del marco de actuación.' },
        { text: fullText(wrong2, 'Se cierra el desacuerdo solo por jerarquía informal.'), rationale: 'El cargo de quien propone una solución no sustituye su fundamento.' },
      ],
      difficulty: 4, kind: 'single',
    },
    {
      caseText: fullText(p.setting, p.change, p.document,
        'El equipo ya identificó los hechos y sus soportes principales, y ahora corresponde confrontar la explicación con evidencia de otra fuente.'),
      stem: 'En este momento, ¿qué acción de comprobación evita consolidar prematuramente una hipótesis?',
      right: { text: s3, rationale: 'El contraste intermedio comprueba que la interpretación se ajusta a los datos disponibles.' },
      wrong: [
        { text: fullText(s1, 'Repetir indefinidamente la identificación inicial y omitir la contrastación.'), rationale: 'Repetir el inicio no reemplaza el análisis que corresponde ahora.' },
        { text: fullText(s4, 'Cerrar antes de revisar la información incorporada.'), rationale: 'La nueva evidencia aún requiere examen.' },
      ],
      difficulty: 4, kind: 'pjs',
    },
    {
      caseText: fullText(p.conflict, p.pressure, p.change,
        'Dos dependencias sostienen conclusiones diferentes y ambas aportan elementos atendibles. Se requiere justificar el alcance de cada fuente.'),
      stem: '¿Cuál es el límite material que debe examinarse antes de sostener una inferencia definitiva?',
      right: { text: r3, rationale: 'La tercera regla del módulo ayuda a reconocer inferencias que aún no están sustentadas.' },
      wrong: [
        { text: fullText(wrong2, 'La autoridad receptora tendrá por ciertos todos los hechos del reporte.'), rationale: 'El acto de remisión no convierte alegaciones en hechos probados.' },
        { text: fullText(wrong1, 'Se omiten fuentes discordantes para presentar una conclusión coherente.'), rationale: 'La coherencia aparente no justifica excluir información relevante.' },
      ],
      difficulty: 5, kind: 'pjs',
    },
    {
      caseText: fullText(p.document, p.setting, p.pressure,
        'Las verificaciones previas se encuentran ejecutadas y el expediente debe pasar a otro equipo con soportes, límites y responsables identificados.'),
      stem: '¿Qué paso final preserva la continuidad y permite revisar la actuación sin reconstruirla desde cero?',
      right: { text: s4, rationale: 'La salida del procedimiento debe documentar lo comprobado y permitir revisión posterior.' },
      wrong: [
        { text: fullText(wrong1, 'La motivación se completará solo si existe reclamación.'), rationale: 'La motivación no depende de que alguien impugne después.' },
        { text: fullText(s2, 'Sin integrar la evidencia acumulada en una salida documentada.'), rationale: 'Una actividad parcial no sustituye el resultado verificable del proceso.' },
      ],
      difficulty: 4, kind: 'pjs',
    },
    {
      caseText: fullText(p.setting, p.conflict, p.change,
        'Varias normas, instrucciones y criterios técnicos parecen aplicables, pero no todos regulan el mismo supuesto ni la misma etapa.'),
      stem: 'Antes de escoger la opción, ¿qué fundamento describe con mayor precisión el problema de este ámbito de trabajo?',
      right: { text: bp.core, rationale: 'Ubica el núcleo sustantivo en su contexto y evita elegir una referencia solo por su nombre.' },
      wrong: [
        { text: fullText(wrong2, 'Toda regla general producirá el mismo efecto en cualquier etapa.'), rationale: 'Debe comprobarse el supuesto de aplicación de la regla.' },
        { text: fullText(wrong1, 'La urgencia invocada permite omitir requisitos aplicables.'), rationale: 'Las necesidades prácticas no modifican automáticamente el marco técnico o jurídico.' },
      ],
      difficulty: 4, kind: 'single',
    },
    {
      caseText: fullText(p.document, p.conflict, p.change, p.pressure,
        'Debe explicarse qué resultados están directamente soportados, cuáles son inferencias y cuáles corresponden a otra autoridad. El asunto será revisado por un nuevo equipo.'),
      stem: '¿Qué criterio debe quedar documentado para permitir una revisión independiente y una decisión proporcionada?',
      right: { text: fullText('Relacionar el hallazgo con la actuación procedente:', right, 'y señalar este límite:', r3), rationale: 'Distingue la actuación viable de la inferencia que necesita soporte adicional.' },
      wrong: [
        { text: fullText(wrong1, 'Solo se registran las conclusiones favorables a la hipótesis inicial.'), rationale: 'No es válido omitir resultados contradictorios relevantes.' },
        { text: fullText(wrong2, 'Se omite la metodología y el equipo receptor tendrá que reconstruirla.'), rationale: 'Una remisión incompleta deteriora la trazabilidad de la evidencia.' },
      ],
      difficulty: 5, kind: 'pjs',
    },
  ]

  return c.map((challenge, index) => buildQuestion(bp, challenge, index + 1))
}
