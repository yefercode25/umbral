import type { FoundationTransferOverride } from './foundationTransferOverrides'

/**
 * Seis reescrituras de las preguntas de transferencia YA EXISTENTES:
 * IDs y claves históricas calculados en transferQuestions.ts permanecen.
 */
export const auditedTransferOverridesM12M14: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m12': [
    {
      caseText: 'Una veeduría envía a la Procuraduría observaciones sobre un pliego de suministro antes de adjudicación: el documento exige equipos de una marca concreta sin dejar visible su justificación funcional. El expediente incluye el estudio previo, comentarios de otros oferentes y una respuesta preliminar de la alcaldía. Un integrante del equipo cree que el riesgo basta para abrir directamente una etapa sancionatoria; otro afirma que ninguna función se activa antes de recibir bienes.',
      stem: '¿Qué actuación inicial responde al carácter preventivo de la alerta y conserva la separación frente a disciplina e intervención?',
      correct: {
        text: 'Delimitar el riesgo y sus fuentes, verificar proporcionalidad y motivación de los requisitos y realizar la vigilancia o requerimientos preventivos competentes, dejando para vías diferenciadas las noticias disciplinarias o intervenciones que procedan.',
        reason: 'La función preventiva puede valorar riesgos y seguimiento sin decidir la contratación ni presumir falta disciplinaria.',
      },
      other: [
        {
          text: 'Iniciar cargos contra el evaluador del contrato para obligar a eliminar la marca, pues la alerta de un oferente constituye prueba definitiva de la conducta.',
          reason: 'Una observación es un insumo que exige corroboración; el trámite preventivo no equivale a formulación de cargos.',
        },
        {
          text: 'Archivar toda actuación hasta la entrega final, porque sin perjuicio consumado no existe posibilidad de acompañamiento preventivo.',
          reason: 'La gestión preventiva se orienta precisamente a riesgos que pueden no haber producido aún un daño.',
        },
      ],
      explanation: 'La naturaleza de la situación y de la evidencia determina el objetivo: advertencia y seguimiento de un riesgo no equivalen a una sanción. La competencia preventiva se ejerce respetando atribuciones de la entidad contratante; cualquier otro procedimiento requiere su habilitación y soporte.',
      difficulty: 4,
    },
    {
      caseText: 'Después de las observaciones preventivas, la alcaldía modifica el pliego: admite especificaciones funcionales equivalentes y publica un informe técnico que fundamenta la corrección. Aun así, llega un correo cuyo remitente afirma que la primera exigencia favorecía a un proveedor por acuerdo con un servidor; no se ha comprobado origen ni autenticidad de la comunicación. El despacho ya tenía un borrador que afirmaba que el riesgo continuaba sin cambios y que el servidor era responsable.',
      stem: '¿Cómo debe actualizarse la valoración cuando se acredita una corrección, pero aparece una alegación nueva no verificada?',
      correct: {
        text: 'Comprobar la publicación y eficacia de la corrección, actualizar el nivel de riesgo y preservar y contrastar la nueva comunicación antes de decidir si hay hechos que deban examinarse por ruta disciplinaria distinta.',
        reason: 'El hecho probado cambia el seguimiento preventivo; una alegación adicional necesita verificación y no impone culpabilidad.',
      },
      other: [
        {
          text: 'Mantener íntegramente la conclusión de riesgo vigente y de responsabilidad individual, porque modificar un informe contradice la alerta preventiva inicial.',
          reason: 'El seguimiento debe incorporar hechos nuevos, incluso cuando disminuyen un riesgo o contradicen la hipótesis de inicio.',
        },
        {
          text: 'Declarar que cualquier actuación anterior fue inútil y destruir el correo recibido, ya que una corrección del pliego elimina todo supuesto de evaluación posterior.',
          reason: 'Una medida correctiva no resuelve automáticamente posibles conductas anteriores; las fuentes relevantes requieren manejo adecuado.',
        },
      ],
      explanation: 'La información nueva puede reducir el riesgo preventivo y simultáneamente dar origen a una hipótesis separada que todavía necesita prueba. No se convierten observaciones sobre un proceso contractual en sanciones inmediatas ni se omite registrar una actuación que sigue siendo verificable.',
      difficulty: 5,
    },
  ],
  'pgn-m13': [
    {
      caseText: 'El titular de una actuación disciplinaria comisiona formalmente una diligencia de declaración de un testigo. El encargo identifica objeto, expediente, persona y plazo. El comisionado recibe una solicitud de una nueva diligencia ajena al objeto y no derivada directamente de la declaración, y la sugerencia de que decida una eventual formulación de cargos porque conoce ya los hechos. La autoridad de origen no ha autorizado extender el encargo.',
      stem: '¿Qué debe ejecutar y qué decisión debe reservar para el despacho que conserva la competencia?',
      correct: {
        text: 'Cumplir la declaración según objeto, formalidades y garantías, registrar las solicitudes y remitir acta y soportes; consultar al comitente la ampliación ajena al objeto y no decidir cargos por el solo hecho de estar comisionado.',
        reason: 'Una comisión probatoria habilita actuaciones definidas y no convierte al comisionado en instructor o juzgador de todo el expediente.',
      },
      other: [
        {
          text: 'Ampliar de inmediato el asunto a todas las diligencias sugeridas y resolver cargos, porque al recibir la comisión se transfiere automáticamente la totalidad de funciones.',
          reason: 'La competencia general y la comisión para actos concretos no son idénticas ni se transfieren por presunción.',
        },
        {
          text: 'Desestimar de plano la declaración original y cerrar el expediente del comitente porque la solicitud adicional demuestra que el objeto inicial era incompleto.',
          reason: 'La novedad no extingue por sí sola el encargo válido ni las obligaciones de registrar la diligencia.',
        },
      ],
      explanation: 'La competencia debe verificarse por órgano y etapa. El comisionado actúa dentro de la autorización aplicable, incluida la facultad del art. 152 sobre pruebas directamente derivadas salvo prohibición expresa, y preserva el testimonio con las garantías legales; el acto de comisión no le otorga potestades para reformular la investigación por sí mismo.',
      difficulty: 4,
    },
    {
      caseText: 'Durante una declaración practicada por comisión, un testigo menciona un documento nuevo de otro contrato y pregunta si se puede agregar al expediente. Además, se presenta una solicitud para proteger una garantía procesal relacionada con la diligencia. El comisionado reconoce que el objeto inicial no contempla iniciar otra investigación; la oficina de origen todavía no ha valorado la novedad.',
      stem: '¿Qué tratamiento de los hechos nuevos conserva la trazabilidad del testimonio y los límites del mandato recibido?',
      correct: {
        text: 'Aplicar las garantías exigibles, registrar fielmente el testimonio y el documento ofrecido con constancias pertinentes, preservar el soporte e informar al comitente para que determine el trámite o ampliación competente.',
        reason: 'La novedad puede ser relevante, pero su incorporación y efectos deben atender objeto, garantías y competencia.',
      },
      other: [
        {
          text: 'Ordenar la apertura de otra investigación y valorar en el acto la responsabilidad de las personas mencionadas, porque la diligencia se efectúa en sede de Procuraduría.',
          reason: 'La sede y la oportunidad de recibir un dato no conceden competencia para abrir y decidir asuntos ajenos al encargo.',
        },
        {
          text: 'Omitir toda mención de la novedad, eliminar la copia entregada y finalizar el acta como si no hubiera surgido información adicional.',
          reason: 'Excluir o destruir soportes pertinentes sin trazabilidad compromete integridad, control y valoración ulterior.',
        },
      ],
      explanation: 'El proceso disciplinario exige prueba registrada, garantías, límites de comisión y valoración por la autoridad competente. Un hecho nuevo no autoriza omitir la diligencia ni asumir funciones decisorias, pero sí debe comunicarse y tratarse conforme al marco legal.',
      difficulty: 5,
    },
  ],
  'pgn-m14': [
    {
      caseText: 'El Profesional Universitario 3PU-15 revisa una hoja Excel y registros exportados desde un sistema documental. La hoja identifica cambios nocturnos a un radicado; el log asocia las operaciones a una cuenta de servicio compartida y un oficio pide precisar qué se alteró. La coordinación desea que el informe certifique dolo de un funcionario, pero todavía faltan el método de extracción, la zona horaria y los posibles trabajos automatizados.',
      stem: '¿Qué entrega profesional puede justificar sus hallazgos sin exceder la conclusión que permiten las fuentes?',
      correct: {
        text: 'Delimitar pregunta y periodo, documentar origen y adquisición de datos, contrastar horarios y tareas automáticas, precisar cambios observables y presentar hipótesis y límites sin declarar intención o autoría no acreditadas.',
        reason: 'La calidad del informe depende de método reproducible y distinción entre hechos técnicos, atribución personal y juicio jurídico.',
      },
      other: [
        {
          text: 'Identificar como autor a quien administra la cuenta de servicio y afirmar intención, porque el privilegio técnico acredita ejecución material y dolo.',
          reason: 'Administrar credenciales no prueba por sí mismo quién actuó ni su estado subjetivo.',
        },
        {
          text: 'Rehusar el informe íntegro por ser un asunto disciplinario, ya que una persona formada en Sistemas no puede procesar registros ni aportar evidencia.',
          reason: 'El empleo prevé apoyo profesional y análisis dentro de funciones, sin que ello implique decidir el mérito jurídico.',
        },
      ],
      explanation: 'El manual específico del empleo admite aportes en evidencia e información. Una exportación y un log son fuentes cuya procedencia, integridad y límites deben documentarse. La determinación de responsabilidad compete al órgano habilitado y exige valorar todas las pruebas pertinentes.',
      difficulty: 4,
    },
    {
      caseText: 'Tras recibir el primer informe, el equipo encuentra una bitácora de una tarea automática que coincide con la hora del cambio de estado y una discrepancia de cinco horas entre el servidor y la hoja exportada. La comparación de hashes del archivo inicial y la nueva exportación arroja valores distintos, pero no se ha comprobado si las diferencias corresponden a formato, filtros o contenido. El proyecto de informe acusaba a una persona por su nombre.',
      stem: '¿Cómo debe corregirse el informe técnico con el hecho nuevo sin convertir la hipótesis automatizada en certeza de licitud?',
      correct: {
        text: 'Normalizar tiempos y describir sus fuentes, comprobar el procedimiento de cada exportación, contrastar automatización y sesiones y revisar la atribución personal, explicando qué incertidumbres subsisten para la autoridad instructora.',
        reason: 'Correlacionar nuevos hechos puede cambiar inferencias; ni el hash diferente demuestra alteración indebida ni la automatización demuestra autorización.',
      },
      other: [
        {
          text: 'Mantener la acusación personal porque el nombre de la cuenta aparece primero en el log y todo dato posterior debe considerarse irrelevante.',
          reason: 'La posición temporal de una fuente no le da primacía absoluta y las contradicciones materiales deben examinarse.',
        },
        {
          text: 'Declarar el incidente legalmente autorizado y cerrar el expediente solo porque una tarea automática coincide en horario con la operación.',
          reason: 'Que un proceso automático ejecutó algo no prueba automáticamente quién lo configuró ni su conformidad con las reglas.',
        },
      ],
      explanation: 'La evidencia técnica debe permitir revisión independiente. Nuevos registros pueden limitar o corregir la hipótesis de intervención manual, pero exigen evaluar autorización, origen, integridad y tiempo de adquisición; el informe no reemplaza la decisión jurídica.',
      difficulty: 5,
    },
  ],
}
