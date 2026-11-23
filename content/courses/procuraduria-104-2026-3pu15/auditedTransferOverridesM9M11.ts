import type { FoundationTransferOverride } from './foundationTransferOverrides'

/** Seis reescrituras de ítems de cierre existentes, con identidad y claves estables. */
export const auditedTransferOverridesM9M11: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  'pgn-m9': [
    {
      caseText: 'Dos municipios participan con el departamento en un convenio de dotación de equipos para puestos de salud. La queja se presenta ante una procuraduría provincial próxima a uno de los puestos. El expediente trae actas municipales, obligaciones departamentales y una certificación de que un contratista realizó entregas parciales. El servidor receptor considera que, por encontrarse el proyecto físicamente allí, le corresponde investigar toda eventual omisión de los empleados departamentales y municipales sin más revisión.',
      stem: 'Antes de adelantar actuaciones de fondo, ¿qué revisión distingue de forma correcta los niveles territoriales y las atribuciones de PGN?',
      correct: {
        text: 'Identificar la entidad y nivel de cada sujeto, las obligaciones verificables, la materia y las reglas vigentes de competencia y circunscripción; documentar cualquier remisión o asignación a la autoridad habilitada.',
        reason: 'Los factores orgánicos, subjetivos y territoriales de competencia deben comprobarse junto con los hechos, sin equiparar radicación y conocimiento definitivo.',
      },
      other: [
        {
          text: 'Adelantar el expediente entero en la sede provincial receptora, ya que el lugar de ejecución del convenio atribuye competencia plena sobre todos los servidores del proyecto.',
          reason: 'La ejecución física y recepción del escrito no sustituyen las normas de reparto por sujeto y materia.',
        },
        {
          text: 'Devolver todas las actas al municipio sin analizar los deberes departamentales porque la autonomía de cada municipio impide la intervención de cualquier otro nivel estatal.',
          reason: 'La autonomía territorial se ejerce dentro de Constitución y ley, con mecanismos de coordinación y competencias propias de otros niveles.',
        },
      ],
      explanation: 'Constitución arts. 286–288, Ley 1454 de 2011 y estructura de PGN. El territorio no suprime las competencias del departamento ni resuelve la competencia disciplinaria por proximidad. Se requieren sujeto, materia, fase y reglas de distribución vigentes.',
      difficulty: 4,
    },
    {
      caseText: 'La procuraduría recibe un nuevo anexo que demuestra que una actividad del convenio correspondía a un contratista del municipio A y que la firma del acta general se realizó en el departamento. Otra actuación está vinculada al municipio B y se alegan hechos conexos. La oficina ya tenía un proyecto de reparto que asignaba todas las conductas a un servidor departamental por la ubicación del expediente en la capital.',
      stem: '¿Cómo debe afectar el nuevo soporte al análisis de distribución territorial y posible conexidad?',
      correct: {
        text: 'Separar las obligaciones que el anexo atribuye a cada sujeto, corregir las inferencias derivadas de la ubicación del archivo y verificar las condiciones normativas de conexidad y competencia antes de determinar la dependencia.',
        reason: 'La competencia se fundamenta en reglas jurídicas y hechos sobre sujetos y funciones; un dato adicional modifica las premisas pertinentes, no justifica asignación automática.',
      },
      other: [
        {
          text: 'Mantener todos los hechos en el mismo despacho departamental porque la capital del departamento es sede de documentos del proyecto y toda conexidad se presume.',
          reason: 'Una sede documental no demuestra que todos los sujetos y asuntos sean competencia de la misma dependencia.',
        },
        {
          text: 'Cerrar el expediente al comprobar que hay obligaciones municipales, porque las diferencias entre niveles territoriales impiden por definición cualquier coordinación o investigación de hechos relacionados.',
          reason: 'La coexistencia territorial puede requerir coordinación o reglas especiales; no impide de forma absoluta cualquier actuación.',
        },
      ],
      explanation: 'Constitución arts. 1 y 288 y Ley 1454/2011: coordinación, concurrencia y subsidiariedad no son sinónimos de absorción de competencias. En PGN, la conexidad y el reparto exigen sus presupuestos específicos y dejan constancia.',
      difficulty: 5,
    },
  ],
  'pgn-m10': [
    {
      caseText: 'Las interrupciones del suministro de agua amenazan el funcionamiento de un hospital municipal. La administración entregó un cronograma de reparaciones, pero las actas prueban que ninguna reparación se ha iniciado. Una queja identifica posibles omisiones de servidores, sin establecer aún sus deberes individuales. El equipo de la Procuraduría se divide: unos quieren esperar una sanción para vigilar el riesgo y otros solicitan imponer una sanción en la propia actuación preventiva.',
      stem: '¿Qué respuesta respeta el objetivo de la función preventiva y la independencia de las garantías disciplinarias?',
      correct: {
        text: 'Registrar y verificar el riesgo, requerir soportes y compromisos de gestión dentro de la función preventiva, y separar cualquier hecho de posible incumplimiento para su valoración por autoridad disciplinaria competente.',
        reason: 'El seguimiento del riesgo puede ser oportuno antes de una falta demostrada; una imputación disciplinaria requiere otra finalidad y garantías.',
      },
      other: [
        {
          text: 'Declarar una sanción preventiva al funcionario reportado, porque el anuncio de un riesgo para pacientes demuestra responsabilidad subjetiva del servidor.',
          reason: 'Una alerta no permite establecer de forma inmediata culpabilidad ni convierte prevención en sanción.',
        },
        {
          text: 'No realizar seguimiento al servicio hasta obtener un fallo disciplinario definitivo contra una persona determinada.',
          reason: 'La vigilancia preventiva puede orientarse a riesgos de interés público sin depender de un fallo sancionatorio.',
        },
      ],
      explanation: 'La PGN tiene funciones preventivas y disciplinarias diferenciadas. La prevención procura advertir y seguir medidas frente al riesgo, sin reemplazar gestión del prestador; el trámite disciplinario exige evaluar sujeto, deber, pruebas y garantías.',
      difficulty: 4,
    },
    {
      caseText: 'Tras la actuación de vigilancia preventiva al servicio de agua, el municipio presenta registros de reparación en dos barrios y evidencia de ejecución parcial del plan. Sin embargo, el centro de salud sigue reportando interrupciones y aparece una denuncia específica de que un servidor omitió revisar el mantenimiento programado. El informe inicial había anunciado que el plan estaba completamente incumplido y que todo retraso implicaba una falta.',
      stem: '¿Qué conclusión exige la nueva información y cómo deben tratarse las misiones preventivas y disciplinarias?',
      correct: {
        text: 'Actualizar la situación preventiva distinguiendo avances reales y riesgos pendientes, solicitar evidencias de resultados y remitir o valorar la noticia funcional por la ruta disciplinaria que corresponda, sin declarar culpabilidad por el mero atraso.',
        reason: 'La ejecución parcial cambia las premisas de seguimiento, mientras la noticia disciplinaria tiene objeto y pruebas separados.',
      },
      other: [
        {
          text: 'Declarar la intervención preventiva totalmente cumplida y cerrar cualquier reporte disciplinario porque algunas reparaciones fueron ejecutadas.',
          reason: 'Una mejora parcial no acredita continuidad total del servicio ni resuelve eventuales deberes funcionales del pasado.',
        },
        {
          text: 'Conservar la calificación de incumplimiento absoluto y emitir sanción disciplinaria dentro del acta preventiva, sin valorar las reparaciones ni la conducta concreta del servidor.',
          reason: 'Ignorar información nueva y confundir fines misionales impide una conclusión motivada.',
        },
      ],
      explanation: 'Prevención, intervención y disciplina se sujetan a condiciones específicas. La evidencia de obras cambia el grado de avance del plan, no las garantías del proceso disciplinario ni las competencias del servicio público.',
      difficulty: 5,
    },
  ],
  'pgn-m11': [
    {
      caseText: 'Una queja sobre funcionarios de dos municipios y una entidad departamental llega a una procuraduría provincial. La oficina advierte que en otro despacho ya se tramita la instrucción de hechos relacionados. Un profesional recién asignado al 3PU-15 propone resolver personalmente la competencia y emitir fallo, argumentando que la planta global permite ejercer la misma función en cualquier dependencia.',
      stem: '¿Qué actividad de apoyo corresponde antes de escoger la dependencia que debe conocer de las actuaciones?',
      correct: {
        text: 'Identificar sujeto y nivel, materia, territorio, fase y actuaciones previas; contrastar conexidad y distribución interna con la norma vigente, y elaborar el soporte para reparto o remisión por quien tenga atribuciones.',
        reason: 'La denominación profesional común no concede facultades de instrucción, juzgamiento y reparto sin atribución orgánica y funcional.',
      },
      other: [
        {
          text: 'Asumir todas las etapas y emitir decisión desde el profesional receptor porque la planta global significa que cualquier empleado puede ejercer toda competencia disciplinaria.',
          reason: 'La planta global organiza empleos, pero no elimina la distribución normativa de atribuciones ni la separación de fases.',
        },
        {
          text: 'Reenviar sin lectura ni inventario al primer despacho central disponible, pues un nivel central siempre puede desplazar sin requisitos el conocimiento territorial.',
          reason: 'La remisión sin identificación del asunto ni examen de reglas puede producir nuevos errores de reparto.',
        },
      ],
      explanation: 'Decreto Ley 262/2000, modificado por Decreto 1851/2021, y convocatoria del empleo: el profesional apoya con análisis y documentación, mientras la competencia corresponde al órgano legalmente habilitado según sujeto, materia, circunscripción, fase y condiciones especiales.',
      difficulty: 4,
    },
    {
      caseText: 'Una oficina provincial preparó un traslado de oficio por hechos que consideraba exclusivamente municipales. Antes de remitirlo recibe certificación de que existe un expediente conexo de servidores departamentales y que el asunto ya pasó a una etapa diferente. Una delegada solicita información, pero no existe todavía constancia de la decisión ni de los presupuestos para asumir competencia preferente.',
      stem: '¿Cómo debe actualizarse el reparto sin atribuir automáticamente competencia a la oficina receptora o a la delegada?',
      correct: {
        text: 'Revisar los factores subjetivo, territorial, de conexidad y etapa a la luz de la nueva certificación; verificar las reglas de órgano regional o de la fase correspondiente y los requisitos de cualquier preferencia antes de proceder.',
        reason: 'Los cambios documentados alteran los factores que pueden determinar la autoridad, pero no dispensan los supuestos especiales de competencia.',
      },
      other: [
        {
          text: 'Mantener el traslado provincial inicial porque las reglas de competencia quedan fijadas por la primera etiqueta del radicado aunque cambien los datos sobre sujetos y fase.',
          reason: 'La competencia exige examinar el asunto jurídicamente relevante; un registro administrativo erróneo no prevalece sobre la norma.',
        },
        {
          text: 'Entregar automáticamente el expediente a la delegada por su sola solicitud y pedirle que instruya y juzgue ambas fases sin evaluar sus requisitos de competencia.',
          reason: 'Las facultades preferentes y la separación de instrucción y juzgamiento se sujetan a presupuestos y reglas aplicables.',
        },
      ],
      explanation: 'El Decreto 1851/2021 modifica la estructura de PGN e incluye reglas específicas de competencia territorial, conexidad y preferencia; el avance de fase cambia la dependencia relevante. La solicitud de un despacho no basta por sí sola para demostrar que concurren todos los requisitos.',
      difficulty: 5,
    },
  ],
}
