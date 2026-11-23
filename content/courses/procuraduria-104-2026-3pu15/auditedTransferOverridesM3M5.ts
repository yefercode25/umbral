import type { FoundationTransferOverride } from './foundationTransferOverrides'

/**
 * Revisión editorial del cierre integrado M3–M5.
 * Son reescrituras de preguntas existentes; los IDs, sus letras de respuesta,
 * la cantidad y el progreso del estudiante permanecen intactos.
 */
export const auditedTransferOverridesM3M5: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m3': [
    {
      caseText: 'Una aspirante prepara el empleo 3PU-15. La prueba simulada contiene 20 situaciones constitucionales y 20 de derecho probatorio. Acertó 17 en la primera y 9 en la segunda. En su historial aparecen seis errores por no distinguir afirmación del testigo, prueba incorporada e inferencia; otros dos se deben a lectura apresurada. Tiene cinco sesiones disponibles antes de una nueva práctica y conoce que la prueba de conocimientos es eliminatoria con mínimo 65/100 y ponderación de 70 %.',
      stem: '¿Qué planificación responde mejor a los errores identificados sin confundir las reglas del concurso con el diagnóstico de Umbral?',
      correct: {
        text: 'Asignar varias sesiones al análisis de pruebas y errores por categoría, mantener repasos cortos de Constitución y evaluar la mejora con casos distintos; tratar 65/100 y 70 % como datos normativos diferentes.',
        reason: 'La redistribución se fundamenta en errores observados y reconoce la diferencia entre umbral mínimo y ponderación.',
      },
      other: [
        {
          text: 'Repetir solo las 17 preguntas constitucionales acertadas para conservar confianza, porque la ponderación del 70 % convierte ese porcentaje en la única referencia de aprobación.',
          reason: 'Practicar exclusivamente aciertos no corrige debilidades y la ponderación no equivale a la nota eliminatoria.',
        },
        {
          text: 'Descartar el cuaderno de errores y distribuir igual tiempo entre todos los temas, pues el promedio aritmético basta para estimar la posición final de cualquier aspirante.',
          reason: 'Una prueba de entrenamiento no reproduce la ponderación, el número de ítems ni el resultado del concurso oficial.',
        },
      ],
      explanation: 'La estrategia de aprendizaje debe depender de los errores por causa y de la capacidad de transferir la regla a nuevos supuestos. El mínimo aprobatorio de conocimientos y su valor porcentual dentro del concurso son datos distintos. No existe una distribución temática oficial por módulo de Umbral.',
      difficulty: 4,
    },
    {
      caseText: 'Dos semanas después, la aspirante obtuvo 18/20 en Constitución y 15/20 en una práctica probatoria, pero cuatro de los quince aciertos se debieron a que reconoció preguntas idénticas vistas el día anterior. Un simulacro nuevo presenta casos con cambio de premisa, y el desempeño probatorio vuelve a caer. El equipo propone conservar solo la cifra de 75 % e informar que la debilidad está superada.',
      stem: '¿Qué interpretación del nuevo dato conduce a una mejora comprobable y evita sobreestimar el avance?',
      correct: {
        text: 'Separar los aciertos por reconocimiento de los obtenidos en situaciones nuevas, revisar las premisas que cambiaron, corregir las reglas mal aplicadas y repetir práctica independiente antes de dar por resuelta la debilidad.',
        reason: 'Una mejora aparente por familiaridad no necesariamente representa capacidad de transferencia en casos inéditos.',
      },
      other: [
        {
          text: 'Usar el 75 % como garantía de superar la evaluación oficial y suspender el área probatoria hasta que se publique el resultado del concurso.',
          reason: 'El desempeño en un conjunto de preguntas repetidas no acredita aprobación futura ni dominio completo.',
        },
        {
          text: 'Eliminar del historial los resultados de los simulacros nuevos para conservar el mejor porcentaje y demostrar progreso estable.',
          reason: 'Ocultar datos discordantes impide detectar la persistencia del error y puede falsear el seguimiento de estudio.',
        },
      ],
      explanation: 'El objetivo es medir recuperación y aplicación, no inflar el porcentaje memorizando claves. Evalúa conceptos, condiciones de la norma, razonamiento de distractores y transferencia a documentos o hechos distintos.',
      difficulty: 5,
    },
  ],
  'pgn-m4': [
    {
      caseText: 'Un profesional apoya una diligencia de revisión de un aplicativo institucional. El registro exportado contiene un evento de modificación a las 08:15, pero no consigna la zona horaria utilizada ni la forma en que se filtraron las filas. La cuenta que aparece en la tabla es compartida; existe además un reporte de una tarea automática y una sesión remota. El supervisor del trabajo solicita concluir que la persona que administra la red realizó la modificación.',
      stem: '¿Cuál debe ser el producto profesional entregable antes de formular una hipótesis personal?',
      correct: {
        text: 'Registrar fuente, procedimiento de obtención, zona horaria e integridad; contrastar eventos automáticos y sesiones, y exponer hechos, inferencias alternativas y límites sin atribuir autoría disciplinaria.',
        reason: 'Un evento informático permite analizar una operación, pero la identificación de una persona y su responsabilidad requiere otras pruebas y valoración competente.',
      },
      other: [
        {
          text: 'Identificar al administrador de red como autor, pues toda cuenta compartida presupone que quien configura los permisos es quien ejecuta las operaciones.',
          reason: 'Capacidad técnica, administración de credenciales y ejecución material son hechos distintos.',
        },
        {
          text: 'Suprimir del informe el registro incompleto y la tarea automática para presentar una línea temporal consistente que facilite la decisión.',
          reason: 'La omisión de fuentes potencialmente contradictorias debilita el método y la trazabilidad de la conclusión.',
        },
      ],
      explanation: 'La función de apoyo técnico del 3PU-15 exige una investigación documentada. La cuenta y el horario registrados son indicios limitados; la atribución requiere corroboración. La conclusión disciplinaria no es función del analista por el solo hecho de conocer el sistema.',
      difficulty: 4,
    },
    {
      caseText: 'Una revisión posterior confirma que el archivo exportado sí coincide con una copia preservada mediante un control de integridad. El nuevo informe también muestra que la modificación fue ejecutada mediante un proceso programado, aunque todavía no está documentado quién autorizó esa tarea ni si la configuración era conforme a las reglas institucionales. La jefatura solicita que el profesional declare cerrado el asunto y que elimine los registros previos por considerarlos repetidos.',
      stem: '¿Qué aspecto cambia con la nueva fuente y qué afirmaciones siguen sin estar probadas?',
      correct: {
        text: 'Actualizar la hipótesis técnica a la luz de la ejecución automatizada, conservar las fuentes y documentar qué integridad se comprobó; la autorización, la regularidad y cualquier responsabilidad individual requieren verificación adicional.',
        reason: 'La nueva fuente explica parte del evento, no todos los supuestos jurídicos ni la identidad de la persona que pudo autorizarlo.',
      },
      other: [
        {
          text: 'Considerar demostrado que la tarea era legítima y que ninguna persona intervino porque el programa automatizado aparece en los registros.',
          reason: 'El origen automático de la ejecución no prueba por sí mismo la autorización ni la conformidad de su configuración.',
        },
        {
          text: 'Borrar los registros iniciales porque un hash coincidente vuelve innecesario preservar versiones, métodos y fuentes de análisis.',
          reason: 'Un control de integridad no sustituye trazabilidad, procedencia, cadena de manejo ni contexto interpretativo.',
        },
      ],
      explanation: 'El nuevo soporte puede descartar una hipótesis de modificación manual directa y fortalecer otra de ejecución automatizada, pero no resuelve autoría, autorización o responsabilidad. Conservar las fuentes y delimitar inferencias permite revisión independiente.',
      difficulty: 5,
    },
  ],
  'pgn-m5': [
    {
      caseText: 'Una autoridad administrativa investiga una posible omisión que compromete la prestación de un servicio. Hay actas y denuncias suficientes para iniciar verificaciones, pero antes de una decisión que afecta a un servidor debe practicarse una comunicación prevista en el procedimiento y permitir las actuaciones de defensa de esa fase. La dirección afirma que la presión ciudadana y la urgencia del servicio habilitan a omitir ese paso.',
      stem: '¿Cuál solución distingue el fin público de la competencia y las garantías constitucionales?',
      correct: {
        text: 'Verificar qué autoridad puede actuar y qué garantías son exigibles en la etapa, realizar las comunicaciones y pruebas correspondientes y elegir una medida oportuna y motivada dentro de las atribuciones legales.',
        reason: 'La eficacia y el interés general se realizan dentro de competencias y debido proceso, no mediante su supresión automática.',
      },
      other: [
        {
          text: 'Eliminar la comunicación porque el artículo 209 exige celeridad y una actuación rápida siempre desplaza la defensa.',
          reason: 'El artículo 209 no elimina el debido proceso del artículo 29 ni las atribuciones del artículo 121.',
        },
        {
          text: 'Declarar probada la responsabilidad sin contradicción porque las actas parecen coincidentes y la persona ya conoce informalmente la denuncia.',
          reason: 'La suficiencia aparente de los soportes no sustituye las garantías procesales que correspondan.',
        },
      ],
      explanation: 'Los artículos 6 y 121 exigen actuar en el marco de las funciones; el 29 consagra debido proceso en actuaciones administrativas, y el 209 integra principios de servicio público. La urgencia puede exigir actuar, pero no convierte en prescindibles los procedimientos aplicables.',
      difficulty: 4,
    },
    {
      caseText: 'Una autoridad decidió mantener el trámite de defensa y adelantó las comunicaciones exigibles. Después se presenta un informe que agrega un riesgo inminente para usuarios del servicio público; el despacho ahora debe evaluar una actuación urgente que sí esté prevista en sus funciones y no prejuzgue culpabilidad individual. Un servidor sostiene que, como antes no se podía sancionar de inmediato, tampoco se puede adoptar ninguna medida legal provisional.',
      stem: '¿Qué interpretación equilibra la protección efectiva del interés general y el respeto por las garantías?',
      correct: {
        text: 'Examinar la competencia y los presupuestos de las medidas legalmente disponibles, actuar de manera proporcional y motivada frente al riesgo y mantener separadas prevención y eventual atribución de responsabilidad.',
        reason: 'La vigencia del debido proceso no prohíbe respuestas públicas legales y oportunas; exige que cada una respete su objeto y límites.',
      },
      other: [
        {
          text: 'Concluir que cualquier urgencia permite declarar una responsabilidad definitiva para demostrar que el Estado protege con rapidez el interés general.',
          reason: 'La necesidad de protección no sustituye la prueba ni la garantía para atribución definitiva.',
        },
        {
          text: 'Rehusar toda actuación hasta obtener certeza absoluta sobre la persona responsable, aunque existan medidas preventivas legales dentro de la competencia.',
          reason: 'No es necesario confundir medidas de prevención o protección con una sanción que requiere otro estándar.',
        },
      ],
      explanation: 'El Estado social de derecho combina efectividad de derechos con garantías. La autoridad puede usar instrumentos previstos legalmente para contener un riesgo, pero no presumir responsabilidad, alterar la competencia ni ignorar las formas procesales exigibles.',
      difficulty: 5,
    },
  ],
}
