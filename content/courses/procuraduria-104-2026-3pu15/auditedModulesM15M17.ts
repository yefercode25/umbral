import type { LessonBlock } from '../../../src/types/course'

/**
 * Auditoría editorial M15–M17 · 2026-11-23.
 * Apoyos de enseñanza en las nueve lecciones, sin crear ítems ni alterar
 * las respuestas vinculadas al progreso del estudiante.
 */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m15': {
    1: [
      {
        type: 'comparison',
        title: 'Una decisión escrita no siempre produce el mismo efecto',
        columns: ['Concepto', 'Cómo reconocerlo en el expediente'],
        rows: [
          ['Comunicación o constancia', 'Un acuse de recibo informa que llegó un escrito; por su contenido no necesariamente decide la pretensión.'],
          ['Acto de trámite', 'Impulsa o prepara la actuación. No debe confundirse con la decisión definitiva; sus recursos dependen de previsión legal.'],
          ['Acto definitivo', 'Decide directa o indirectamente el fondo o hace imposible continuar una actuación (CPACA, art. 43).'],
          ['Acto general / particular', 'La modalidad de publicidad o notificación depende de su naturaleza y del régimen; no todo acto exige idéntico mecanismo.'],
          ['Validez y eficacia', 'Competencia, forma, procedimiento y motivación se analizan separadamente de los requisitos para que el acto produzca efectos frente a destinatarios.'],
        ],
      },
      {
        type: 'trap',
        title: 'Expedición, publicidad y firmeza no son sinónimos',
        text: 'La firma de un acto no permite afirmar automáticamente que quedó notificado ni en firme. Para actos particulares examina la notificación aplicable; para los generales, las reglas de publicación. Después comprueba recursos y firmeza según el CPACA o régimen especial.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Ruta para revisar un acto administrativo particular',
        columns: ['Control', 'Documento o pregunta'],
        rows: [
          ['Naturaleza y autoridad', '¿La comunicación contiene una decisión con efectos jurídicos? ¿Quién la expidió y con qué atribuciones?'],
          ['Motivación y procedimiento', '¿Constan antecedentes, razones y pasos exigibles? Una motivación insuficiente no se corrige solo con un correo posterior.'],
          ['Notificación', '¿Existe constancia válida de notificación personal, electrónica aceptada cuando proceda, por aviso u otra modalidad legal?'],
          ['Recursos', '¿Qué recursos legalmente procedían y desde cuándo se computa su oportunidad? No todo acto es recurrible.'],
          ['Firmeza y ejecución', '¿Se configuró una causal de firmeza del artículo 87 y procede su ejecución conforme a la ley?'],
        ],
      },
      {
        type: 'example',
        title: 'El PDF firmado que todavía no fue notificado',
        text: 'Una oficina firma una resolución particular el lunes y deja un PDF en carpeta compartida. El martes remite un mensaje interno anunciando su existencia, pero el expediente carece de constancia de notificación al interesado. No concluyas que los recursos vencen desde el lunes: identifica la modalidad legal aplicable, su cumplimiento y el hito correspondiente antes de contar términos.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Qué cambia si aparece una constancia nueva',
        columns: ['Hecho posterior', 'Efecto que debe verificarse'],
        rows: [
          ['Se acredita notificación personal válida', 'Reevaluar fecha y oportunidad de los recursos que efectivamente procedan.'],
          ['Solo existe una citación sin notificación', 'No tratar la citación como prueba automática de notificación surtida.'],
          ['Vence el término legal para recursos procedentes', 'Comprobar el supuesto de firmeza del artículo 87; no confundirlo con ejecución material.'],
          ['Se acredita una irregularidad de motivación', 'Separar el análisis de legalidad de las reglas de publicidad y firmeza; no declarar nulidad de manera automática sin autoridad competente.'],
        ],
      },
    ],
  },
  'pgn-m16': {
    1: [
      {
        type: 'comparison',
        title: 'El CPACA es régimen general, no una sustitución de toda regla especial',
        columns: ['Pregunta', 'Regla que debes identificar'],
        rows: [
          ['¿Qué actuación es?', 'Determina si hay petición general, actuación administrativa ordinaria o procedimiento regulado especialmente.'],
          ['¿Hay norma especial aplicable?', 'El artículo 34 del CPACA dispone que los procedimientos administrativos se sujetan a su Parte Primera sin perjuicio de los procedimientos regulados en leyes especiales.'],
          ['¿Qué sucede ante un vacío?', 'Examinar si existe remisión o aplicación supletoria jurídicamente procedente; no mezclar mecánicamente términos ni recursos.'],
          ['¿Qué fase y autoridad intervienen?', 'En disciplina, identificar etapa y reglas del Código General Disciplinario antes de trasladar categorías del CPACA.'],
          ['¿Cómo se interpreta un defecto?', 'Distinguir irregularidad, posibilidad de corrección, afectación de garantías y vías de control, sin dar por producida automáticamente una nulidad.'],
        ],
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Mismo expediente, reglas diferentes para preguntas diferentes',
        columns: ['Situación', 'Cómo resolver el conflicto normativo'],
        rows: [
          ['La actuación es disciplinaria y el CGD fija el término de la fase', 'Identificar artículo especial y aplicar la regla propia en lugar de sustituirla por el término general de CPACA.'],
          ['Una persona pide copias a una oficina', 'Analizar la Ley 1755 y reglas de acceso/reserva que correspondan, distinguiendo la petición del trámite disciplinario de fondo.'],
          ['Se notifica una decisión de un proceso especial', 'Revisar primero el régimen de notificaciones y recursos de ese procedimiento, no imponer de entrada la regla general.'],
          ['Un funcionario observa una omisión formal', 'Precisar si el defecto afecta una garantía, qué actuación debe subsanarse y quién puede declararlo, antes de escoger un efecto jurídico.'],
        ],
      },
      {
        type: 'example',
        title: 'Dos relojes que no deben promediarse',
        text: 'Una práctica presenta una etapa de investigación disciplinaria con término previsto en el CGD; una opción aplica un plazo de trámite ordinario CPACA y otra propone promediar ambos. El problema se resuelve identificando la norma que gobierna esa etapa, las circunstancias que habilitan la actuación y las condiciones de cómputo, no usando el término que parezca más breve.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Cuando cambia la premisa, vuelve a identificar el régimen',
        columns: ['Cambio de hechos', 'Nueva pregunta de control'],
        rows: [
          ['Se descubre que no es trámite disciplinario sino petición de información', '¿Qué regla del derecho de petición y qué términos propios se activan?'],
          ['La ley especial regula expresamente los recursos', '¿Qué recursos y plazos especiales desplazan los del régimen general para ese acto?'],
          ['La ley especial no regula un aspecto del trámite', '¿Es admisible aplicar la regla general en forma supletoria y bajo qué condiciones?'],
          ['La persona exige nulidad por cualquier error menor', '¿Qué acto, garantía y causal corresponde valorar por la autoridad competente?'],
        ],
      },
    ],
  },
  'pgn-m17': {
    1: [
      {
        type: 'comparison',
        title: 'Términos del derecho de petición: identifica primero el tipo',
        columns: ['Modalidad (Ley 1755/2015, art. 14)', 'Término general de respuesta'],
        rows: [
          ['Petición general de interés particular o general', '15 días siguientes a recepción, salvo término especial aplicable.'],
          ['Información y documentos', '10 días siguientes a recepción; revisar el efecto especial de no contestar oportunamente que prevé el artículo 14.'],
          ['Consulta sobre materias a cargo de la autoridad', '30 días siguientes a recepción; su respuesta conceptual no equivale automáticamente a acto decisorio vinculante.'],
          ['Petición mixta', 'Separar sus pretensiones, competencia, eventual reserva y término aplicable a cada componente; no clasificarla solo por el asunto del correo.'],
          ['Imposibilidad excepcional de responder oportunamente', 'Antes del vencimiento, explicar motivos y señalar plazo razonable que no exceda el doble del inicialmente previsto, cuando concurran los requisitos legales.'],
        ],
      },
      {
        type: 'trap',
        title: 'Una cifra no reemplaza la clasificación de lo solicitado',
        text: 'Un correo que pide copias y también consulta la interpretación de una norma contiene componentes distintos. No respondas que todo debe tramitarse en 15 días sin separar solicitudes; verifica además excepciones y plazos especiales del asunto concreto.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Radicado mixto con dos dependencias: controles previos',
        columns: ['Elemento', 'Acción verificable'],
        rows: [
          ['Objeto de cada pretensión', 'Distinguir copias, acceso a información, consulta y reclamación de fondo.'],
          ['Competencia', 'Si la autoridad no es competente, informar y remitir conforme al artículo 21; en petición escrita se informa en los cinco días siguientes y los términos de respuesta cuentan desde recepción por la competente.'],
          ['Reserva y datos personales', 'Identificar fundamento legal de restricción y estudiar entrega parcial o versión pública; no negar automáticamente todo por un campo protegido.'],
          ['Respuesta', 'Resolver de manera clara, congruente y de fondo cada punto que corresponda; respuesta desfavorable no significa ausencia de respuesta.'],
          ['Trazabilidad', 'Conservar radicado, traslado, constancias de comunicación, soporte de envío y fechas reales, no solo etiqueta «respondido» en una matriz.'],
        ],
      },
      {
        type: 'example',
        title: 'El Excel señala «respondido» y el correo está en borradores',
        text: 'La matriz de correspondencia muestra 30 peticiones cerradas, pero cuatro respuestas siguen en borradores. Antes de reportar cumplimiento, contrasta radicados, tipo de pretensión, término, oficio y constancia de comunicación. Una fila marcada no acredita que el peticionario haya recibido la respuesta ni que esta trate de fondo todo lo solicitado.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Cuatro cambios de premisa que transforman el trámite',
        columns: ['Nuevo dato', 'Consecuencia de análisis'],
        rows: [
          ['La oficina receptora no tiene competencia sobre la consulta', 'Aplicar artículo 21 al componente ajeno; documentar traslado y aviso al interesado y el nuevo punto de inicio cuando proceda.'],
          ['Se descubre información de tercero protegida', 'Revisar base legal de acceso, reserva y posibilidad de entrega parcial.'],
          ['Se acredita que no se resolvió una copia solicitada', 'No tratar la contestación de la consulta como respuesta íntegra de la petición mixta.'],
          ['La autoridad no puede responder a tiempo', 'Examinar si se informó oportunamente con motivación y plazo razonable en los límites legales; no inventar una prórroga posterior al vencimiento.'],
        ],
      },
      {
        type: 'trap',
        title: 'La entrega de una respuesta no significa conceder lo pedido',
        text: 'Responder de fondo puede implicar negar un documento legítimamente reservado, explicar por qué no procede una solicitud o contestar una consulta. El control es oportunidad, congruencia, claridad, competencia y comunicación eficaz, no aprobación automática de toda pretensión.',
      },
    ],
  },
}

export function auditedModuleBlocksM15M17(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return blocks[moduleId]?.[lessonOrder] ?? []
}

export function auditedModuleSourcesM15M17(moduleId: string): string[] {
  if (moduleId === 'pgn-m15') return ['cpaca']
  if (moduleId === 'pgn-m16') return ['cpaca', 'ley-1952-2019', 'ley-2094-2021']
  if (moduleId === 'pgn-m17') return ['ley-1755-2015', 'cpaca', 'ley-1712-2014', 'ley-1581-2012']
  return []
}
