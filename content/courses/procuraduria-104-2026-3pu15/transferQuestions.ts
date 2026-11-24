import type { Question, QuestionOption } from '../../../src/types/course'
import type { ProcuraduriaModuleBlueprint } from './blueprints'
import { caseProfileFor } from './caseProfiles'
import { foundationTransferOverrides } from './foundationTransferOverrides'
import { auditedTransferOverridesM3M5 } from './auditedTransferOverridesM3M5'
import { auditedTransferOverridesM6M8 } from './auditedTransferOverridesM6M8'
import { auditedTransferOverridesM9M11 } from './auditedTransferOverridesM9M11'
import { auditedTransferOverridesM12M14 } from './auditedTransferOverridesM12M14'
import { auditedTransferOverridesM15M17 } from './auditedTransferOverridesM15M17'
import { auditedTransferOverridesM18M20 } from './auditedTransferOverridesM18M20'
import { auditedTransferOverridesM21M23 } from './auditedTransferOverridesM21M23'
import { auditedTransferOverridesM24M26 } from './auditedTransferOverridesM24M26'
import { auditedTransferOverridesM27M34 } from './auditedTransferOverridesM27M34'
import { auditedTransferOverridesM35M44 } from './auditedTransferOverridesM35M44'
import { auditedTransferOverridesM45M54 } from './auditedTransferOverridesM45M54'

type Choice = { text: string; reason: string }

/**
 * Casos de transferencia en todas las unidades, además de los 850 ítems
 * históricos de práctica. Cada uno integra el escenario propio del módulo,
 * un cambio documental y dos alternativas que suenan procedentes pero
 * se adelantan o sobreinterpretan un elemento de prueba.
 *
 * Se agregan con IDs NUEVOS para no asociar respuestas históricas a textos
 * diferentes. No son reactivos oficiales de la convocatoria.
 */
export function buildProcuraduriaTransferQuestions(bp: ProcuraduriaModuleBlueprint): Question[] {
  const scene = caseProfileFor(bp)
  const [first, second, contrast, close] = bp.steps
  const [rule, limit, inference] = bp.keyPoints
  const wrong1 = bp.distractors[0] ?? 'Adelantar la actuación sin verificar el presupuesto que la habilita.'
  const wrong2 = bp.distractors[1] ?? 'Cerrar la actuación sin examinar la información contradictoria.'
  const context = [
    scene.setting, scene.document, scene.pressure, scene.conflict,
    'Existe una solicitud de actuación inmediata, pero el expediente exige distinguir hechos comprobados, competencia de la oficina y posibilidades de apoyo de otras áreas.',
  ].join(' ')

  const newFact = [
    bp.scenario, scene.document, scene.change, scene.conflict,
    'La información adicional llega antes del proyecto definitivo y obliga a revisar qué conclusión depende de la premisa modificada. La jefatura solicita un concepto breve con soporte y límites claros.',
  ].join(' ')

  const cases: {
    caseText: string
    stem: string
    correct: Choice
    other: [Choice, Choice]
    explanation: string
    difficulty: 4 | 5
  }[] = [
    {
      caseText: context,
      stem: `En el expediente de «${bp.title}», ¿qué actuación inicial puede sostenerse ante una revisión posterior sin adelantar una decisión que todavía exige verificaciones?`,
      correct: {
        text: `Delimitar el objeto mediante esta actuación: ${first}. Luego ${second}, contrastando los soportes con la regla de este módulo antes de escoger la medida.`,
        reason: `La secuencia utiliza hechos y fuentes del expediente antes de efectuar una inferencia. Regla relevante: ${rule}.`,
      },
      other: [
        {
          text: `Iniciar con ${contrast}; documentar después el objeto y los elementos de apertura, pues la actuación posterior permitirá detectar las inconsistencias.`,
          reason: 'Contrastar puede ser necesario, pero no reemplaza identificar el asunto y los presupuestos de la fase actual.',
        },
        {
          text: `Registrar ${close} como resultado preliminar y abrir una nueva verificación solo si el interesado aporta una objeción formal.`,
          reason: 'Un resultado de cierre no puede reemplazar la comprobación de antecedentes y fuentes ya disponibles.',
        },
      ],
      explanation: `La etapa y la competencia son condicionantes de la actuación: ${bp.core}. La decisión necesita documentar la fuente y el límite: ${limit}.`,
      difficulty: 4,
    },
    {
      caseText: newFact,
      stem: `Tras la aparición de un soporte que modifica la hipótesis de «${bp.title}», ¿cómo debe actualizarse la conclusión técnica o jurídica sin borrar indiscriminadamente lo que sigue siendo válido?`,
      correct: {
        text: `Contrastar el hecho nuevo con las fuentes previas, delimitar qué inferencias realmente cambia y documentar la actuación procedente: ${bp.correct}`,
        reason: `La evidencia nueva modifica solo las premisas que dependen de ella; el resultado debe respetar este límite: ${inference}.`,
      },
      other: [
        {
          text: `Mantener el criterio operativo de ${wrong1} y describir la evidencia discordante como una advertencia que podrá resolverse en otra etapa.`,
          reason: 'Una advertencia sin efecto en el análisis no subsana la contradicción que condiciona la decisión actual.',
        },
        {
          text: `Adoptar la ruta de ${wrong2} y reservar para el informe de cierre el examen de la fuente incorporada recientemente.`,
          reason: 'Posponer la valoración de un dato relevante puede convertir una hipótesis provisional en una conclusión carente de soporte.',
        },
      ],
      explanation: `La respuesta requiere una reconstrucción controlada, no una afirmación automática de responsabilidad. ${bp.core} La regla de inferencia del módulo es: ${inference}.`,
      difficulty: 5,
    },
  ]

  const adaptedCases = auditedTransferOverridesM45M54[bp.id] ?? auditedTransferOverridesM35M44[bp.id] ?? auditedTransferOverridesM27M34[bp.id] ?? auditedTransferOverridesM24M26[bp.id] ?? auditedTransferOverridesM21M23[bp.id] ?? auditedTransferOverridesM18M20[bp.id] ?? auditedTransferOverridesM15M17[bp.id] ?? auditedTransferOverridesM12M14[bp.id] ?? auditedTransferOverridesM9M11[bp.id] ?? auditedTransferOverridesM6M8[bp.id] ?? auditedTransferOverridesM3M5[bp.id] ?? foundationTransferOverrides[bp.id] ?? cases

  return adaptedCases.map((item, index) => {
    const choices = [item.correct, ...item.other]
    const offset = (bp.order + index + 1) % 3
    const rotated = choices.slice(offset).concat(choices.slice(0, offset))
    const ids = ['a', 'b', 'c'] as const
    const options: QuestionOption[] = rotated.map((choice, i) => ({
      id: ids[i]!, text: choice.text, rationale: choice.reason,
    }))
    return {
      id: `${bp.id}-transfer-${index + 1}`,
      moduleId: bp.id,
      skillIds: bp.skillIds,
      type: 'pjs',
      difficulty: item.difficulty,
      case: item.caseText,
      stem: item.stem,
      options,
      correctOptionId: ids[rotated.indexOf(item.correct)]!,
      explanation: item.explanation,
      sourceIds: bp.sourceIds,
      verifiedAt: '2026-11-22',
    }
  })
}
