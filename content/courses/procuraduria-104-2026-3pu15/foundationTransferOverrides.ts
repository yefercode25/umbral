type Choice = { text: string; reason: string }

export type FoundationTransferOverride = {
  caseText: string
  stem: string
  correct: Choice
  other: [Choice, Choice]
  explanation: string
  difficulty: 4 | 5
}

/**
 * Seis reemplazos editoriales para ítems de transferencia EXISTENTES.
 * No cambian los IDs pgn-m0..2-transfer-1/2, el número de alternativas ni
 * la posición de la correcta calculada por transferQuestions.ts.
 */
export const foundationTransferOverrides: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m0': [
    {
      caseText: 'En una procuraduría territorial, el Profesional Universitario 3PU-15 recibe una instrucción de apoyar el examen de una queja relacionada con irregularidades en registros. Dispone de actas y una matriz de seguimiento, y un superior le pide firmar una conclusión sobre responsabilidad disciplinaria antes de revisar las facultades asignadas. La convocatoria describe funciones de apoyo en instrucción, prueba, análisis de información y atención; la autoridad competente conserva las decisiones que la ley le atribuye.',
      stem: '¿Cuál producto responde al cargo sin convertir la colaboración profesional en una potestad jurídica que no se ha acreditado?',
      correct: {
        text: 'Preparar un análisis con hechos, fuentes, tareas verificadas y límites de inferencia, y tramitar la propuesta de actuación por la vía de la autoridad competente.',
        reason: 'Las funciones del empleo habilitan tareas profesionales de apoyo, pero la competencia para adoptar una decisión debe verificarse por separado.',
      },
      other: [
        {
          text: 'Firmar la conclusión como decisión disciplinaria, dejando anotado que fue solicitada verbalmente por un superior jerárquico.',
          reason: 'La instrucción jerárquica no demuestra por sí sola atribución legal para decidir.',
        },
        {
          text: 'Rehusar toda participación porque el empleo exige exclusivamente profesionales jurídicos y no contempla análisis de información de otras disciplinas.',
          reason: 'El perfil es multidisciplinario y su función no se limita a adoptar decisiones jurídicas.',
        },
      ],
      explanation: 'El caso evalúa el objeto del empleo: apoyo en instrucción, prevención y análisis con trazabilidad, sin confundir capacidad técnica, función asignada y competencia decisoria. Contrasta la convocatoria 104-2026 versión 4 y el manual específico.',
      difficulty: 4,
    },
    {
      caseText: 'Una matriz interna conserva datos de la convocatoria 104-2026 publicados en abril, mientras la oficina de selección divulga una versión posterior que recoge las modificaciones de agosto y septiembre. La matriz tiene cifras, requisitos y ubicaciones iniciales sin indicar la versión de referencia. Una persona del equipo sugiere estudiar con ese archivo por ser el primero que se distribuyó y asumir que las prioridades de Umbral son el temario oficial definitivo.',
      stem: '¿Cómo distinguirías los datos jurídicamente aplicables de las decisiones de preparación del curso?',
      correct: {
        text: 'Identificar la versión y vigencia del formato específico, contrastarla con las resoluciones modificatorias publicadas, documentar lo que realmente cambió y tratar la priorización de Umbral como una propuesta educativa, no como distribución oficial de preguntas.',
        reason: 'Las modificaciones del concurso afectan información concreta y el método de estudio no sustituye el documento vigente.',
      },
      other: [
        {
          text: 'Aplicar la cifra y los requisitos de la primera matriz, porque una convocatoria queda congelada desde la primera publicación y las resoluciones posteriores solo orientan aspectos administrativos.',
          reason: 'La versión inicial no prevalece automáticamente sobre actos modificatorios válidos del proceso.',
        },
        {
          text: 'Tomar la estrategia de estudio del portal como prueba de que las funciones de mayor prioridad tendrán un porcentaje fijo de preguntas en la evaluación oficial.',
          reason: 'La estimación pedagógica de temas importantes no acredita una distribución oficial.',
        },
      ],
      explanation: 'Las resoluciones 076, 108, 133, 212 y 243 de 2026 y el formato 104-2026 actualizado forman la trazabilidad normativa de la convocatoria. El curso no puede presentar sus ponderaciones temáticas internas como pruebas oficiales.',
      difficulty: 5,
    },
  ],
  'pgn-m1': [
    {
      caseText: 'Un ciudadano solicita copia de una actuación y manifiesta inconformidad con una decisión que recibió por correo. El expediente contiene un informe de un profesional, un oficio de comunicación y un acto firmado por otra autoridad. La oficina receptora custodia algunos documentos, pero no tiene atribución para resolver todos los puntos. Se propone contestar que la simple remisión del correo confirma que cualquier recurso está fuera de término.',
      stem: '¿Qué debe distinguirse antes de afirmar que existe una decisión eficaz y que venció una oportunidad de impugnar?',
      correct: {
        text: 'Identificar qué escrito es actuación de trámite y cuál es acto decisorio, verificar competencia y forma válida de notificación y solo después analizar la procedencia y el cómputo del término del recurso.',
        reason: 'No basta la existencia de un oficio o su fecha para demostrar naturaleza del acto, notificación válida y vencimiento.',
      },
      other: [
        {
          text: 'Usar la fecha de creación del correo interno como punto de partida de todo plazo, porque el sistema registró el documento antes de ser entregado.',
          reason: 'El registro interno de una comunicación no fija por sí solo el inicio de un término legal de impugnación.',
        },
        {
          text: 'Tratar el informe técnico como acto definitivo y atribuir al profesional redactor la competencia de resolver el recurso, pues fue quien estudió los hechos.',
          reason: 'Conocimiento técnico y autoría de un informe no equivalen a competencia decisoria.',
        },
      ],
      explanation: 'La pregunta diferencia actuación, acto, competencia, notificación, término y recurso. El CPACA exige analizar la naturaleza de cada actuación y el régimen de comunicación o notificación aplicable.',
      difficulty: 4,
    },
    {
      caseText: 'Una autoridad sin competencia material recibe un escrito que mezcla una solicitud de copias bajo su custodia y una pretensión sobre una resolución de otra entidad. El servidor ha localizado una norma correcta sobre la resolución, pero no revisó quién puede aplicar esa norma. Aparece un oficio que muestra que otro órgano está a cargo de decidir el punto controvertido.',
      stem: 'Ante el soporte adicional, ¿qué conclusión debe corregirse para no aplicar una norma válida por una autoridad equivocada?',
      correct: {
        text: 'Separar las pretensiones, tramitar conforme a la competencia lo que la oficina sí puede atender y canalizar por la vía legal lo demás, dejando constancia de los hechos y las actuaciones realizadas.',
        reason: 'La validez abstracta de la norma no sustituye la identificación de autoridad, actuación y ámbito de decisión.',
      },
      other: [
        {
          text: 'Resolver íntegramente el fondo de la resolución ajena, porque citar la norma aplicable elimina cualquier vicio relacionado con la competencia.',
          reason: 'La corrección de la norma no concede potestad al órgano que carece de ella.',
        },
        {
          text: 'Devolver todo el escrito sin responder ninguna solicitud y cerrar el radicado, puesto que una parte corresponde a otra autoridad.',
          reason: 'Una falta parcial de competencia no significa automáticamente que ningún componente sea atendible por la dependencia.',
        },
      ],
      explanation: 'La regla inicial de Derecho es identificar hecho, competencia, etapa, soporte y efecto. Las peticiones mixtas requieren distinguir pretensiones y aplicar el trámite legal pertinente, no escoger una respuesta uniforme.',
      difficulty: 5,
    },
  ],
  'pgn-m2': [
    {
      caseText: 'Durante una práctica del artículo 208 del Código General Disciplinario, una estudiante respondió correctamente que la indagación previa tiene como término general seis meses. Sin embargo, falló otra pregunta porque no verificó si había duda sobre la identificación del posible autor. En su cuaderno solo anotó «artículo 208 = seis meses» y considera que releerlo tres veces será suficiente para el siguiente intento.',
      stem: '¿Qué corrección en el método de estudio aborda realmente la causa del fallo?',
      correct: {
        text: 'Registrar que omitió el supuesto de procedencia, reconstruir el artículo con pregunta sobre autoría, término y salida, verificar en la fuente la excepción legal y probar la regla en un microcaso diferente.',
        reason: 'Corrige el modelo mental equivocado y exige transferencia, no reconocimiento de una cifra.',
      },
      other: [
        {
          text: 'Añadir el número 208 a una lista de artículos conocidos y repetir de memoria la cifra seis meses sin analizar circunstancias de aplicación.',
          reason: 'Repetir el dato que ya recordaba no corrige el error de supuesto jurídico.',
        },
        {
          text: 'Eliminar la pregunta fallada del repaso porque el dato principal fue acertado anteriormente y la discrepancia probablemente fue un distractor defectuoso.',
          reason: 'Debe diagnosticarse el fallo antes de atribuirlo a una pregunta; la diferencia de hechos puede ser relevante.',
        },
      ],
      explanation: 'El aprendizaje de Derecho exige identificar supuesto de la norma, autoridad, etapa, regla, excepción y consecuencias. El artículo 208 sirve para practicar el paso de memoria literal a transferencia jurídica.',
      difficulty: 4,
    },
    {
      caseText: 'Una estudiante comparó dos expedientes de entrenamiento. En el primero hay dudas sobre la identificación del presunto autor; en el segundo, esa persona ya está individualizada. En ambos aplicó la misma respuesta porque recordaba que la indagación previa dura seis meses. Al consultar el artículo 208, detecta que el dato que cambia es precisamente el presupuesto de procedencia; también descubre que la posible extensión se refiere a supuestos especiales de derechos humanos o derecho internacional humanitario.',
      stem: '¿Cómo debe rehacer su regla de estudio para escoger entre alternativas muy parecidas en un simulacro nuevo?',
      correct: {
        text: 'Formular una regla condicional que comience por la duda sobre identificación, diferencie la etapa, el término general y su extensión especial, y verificar si los hechos de cada expediente cumplen tales condiciones.',
        reason: 'La estrategia reduce errores de aplicar una norma verdadera a un supuesto o etapa equivocados.',
      },
      other: [
        {
          text: 'Mantener el mismo resumen para ambos expedientes y añadir la prórroga especial como regla general, pues así cubrirá más posibles opciones de examen.',
          reason: 'Ampliar una excepción por analogía memorística produce una respuesta jurídicamente errónea.',
        },
        {
          text: 'Cambiar solo la tarjeta de memoria de seis a doce meses y considerar que la corrección ya incorpora todas las diferencias de los dos casos.',
          reason: 'Modificar una cifra no resuelve qué determina la procedencia de la indagación o cuándo corresponde la extensión.',
        },
      ],
      explanation: 'Una buena ficha se revisa a partir del error: «si existe duda de identificación, evaluar indagación previa; término general seis meses; extensión especial solo bajo los supuestos del artículo 208». No debe suponerse que todo expediente requiere indagación.',
      difficulty: 5,
    },
  ],
}
