/**
 * Preguntas redactadas individualmente para puntos sensibles del 3PU-15.
 * Se integran como reemplazos de redacción en el banco de transferencia;
 * conservan la identidad de cada módulo y las fuentes de su blueprint.
 */
export type PrioritySituationalOverride = {
  number: number
  caseText: string
  stem: string
  options: [string, string, string]
  rationales: [string, string, string]
  correctOptionId: 'a' | 'b' | 'c'
  explanation: string
}

export const prioritySituationalOverrides: Record<string, PrioritySituationalOverride[]> = {
  'pgn-m17': [{
    number: 1,
    caseText: 'Una ciudadana radica un escrito único ante una procuraduría regional. Solicita copia de las actas de una visita preventiva, pregunta por el estado de la actuación y pide un concepto sobre la legalidad de una decisión de otra entidad. El archivo de la visita contiene datos personales de terceros; además, parte de los documentos se encuentra en una dependencia distinta. El equipo propone contestar todo junto al finalizar el plazo de una consulta para evitar respuestas separadas.',
    stem: '¿Qué orientación responde mejor al escrito sin confundir clases de petición, competencia y reserva?',
    options: [
      'Esperar un pronunciamiento integral que incluya el concepto, porque una sola radicación siempre impone un solo término para toda la respuesta.',
      'Identificar los componentes del escrito y sus términos aplicables, gestionar el traslado de lo que no corresponda, resolver cada solicitud de fondo y examinar si procede una entrega parcial de documentos con protección de los datos.',
      'Entregar íntegramente las actas por el principio de publicidad, y responder después las demás solicitudes únicamente si la ciudadana insiste.',
    ],
    rationales: [
      'La unidad de radicación no convierte solicitudes de naturaleza distinta en una única consulta ni suspende por sí sola los plazos.',
      'Distingue solicitudes y competencias, permite responder oportunamente y exige motivar el tratamiento de datos y eventuales reservas.',
      'La publicidad no elimina los límites legales sobre datos personales ni exonera de resolver las otras solicitudes.',
    ],
    correctOptionId: 'b',
    explanation: 'La Ley 1755 de 2015 diferencia términos y trámites según el objeto de la solicitud; el acceso a documentos y la protección de datos deben armonizarse. No debe suponerse que un escrito mixto tiene un único tratamiento indiscriminado.',
  }],
  'pgn-m18': [{
    number: 1,
    caseText: 'Una veeduría pide una matriz de seguimiento de un contrato y sus actas de supervisión. En algunas columnas aparecen teléfonos personales y datos identificables de personas denunciantes, junto con información administrativa que no está sometida a reserva. La oficina jurídica recomienda negar toda la matriz. La dependencia técnica puede generar una versión que conserve la trazabilidad de los datos públicos y suprima los campos protegidos.',
    stem: '¿Cómo debe evaluarse la solicitud para no convertir una restricción puntual en una denegación total?',
    options: [
      'Examinar la información separable y el fundamento legal de cualquier reserva; permitir acceso a lo público mediante entrega parcial o versión protegida cuando proceda, con respuesta motivada sobre las exclusiones.',
      'Negar el archivo completo porque la presencia de un dato personal basta para clasificar como reservadas todas las actuaciones del expediente.',
      'Publicar el archivo íntegro para evitar alegaciones de censura, ya que todo documento relacionado con contratos estatales es de difusión irrestricta.',
    ],
    rationales: [
      'Conserva el principio de acceso y exige protección específica, motivada y proporcionada de información legalmente restringida.',
      'La restricción debe examinarse en su alcance; no puede extenderse sin fundamento a porciones divulgables.',
      'El interés público contractual no elimina los límites legales que protegen datos personales.',
    ],
    correctOptionId: 'a',
    explanation: 'La transparencia y el habeas data no son absolutos. Es necesario identificar qué información es pública, cuál está protegida y si una entrega parcial conserva el derecho de acceso.',
  }],
  'pgn-m24': [{
    number: 1,
    caseText: 'Un equipo revisa actuaciones relativas a hechos desarrollados durante varios meses, con una conducta que podría ser continuada y actuaciones procesales producidas años después. En un informe se consigna una única fecha de inicio del contrato y se deduce, sin más comprobación, que la potestad disciplinaria prescribió. El expediente no contiene todavía un cuadro de fechas, calificación de la conducta ni examen del efecto de las decisiones posteriores.',
    stem: '¿Qué debe verificarse antes de sostener una conclusión sobre prescripción?',
    options: [
      'Comparar simplemente la fecha inicial del contrato con la fecha de hoy: ese cálculo es suficiente para todos los comportamientos asociados.',
      'Tomar como punto inicial la fecha de recepción de la queja, porque en materia disciplinaria ninguna otra fecha puede resultar relevante.',
      'Determinar la clase de conducta y el hecho relevante, identificar el punto inicial y las reglas normativas aplicables, reconstruir cronológicamente las actuaciones con efecto jurídico y motivar el cómputo.',
    ],
    rationales: [
      'El inicio contractual no necesariamente coincide con el supuesto normativo de cada conducta.',
      'La radicación de la queja no puede sustituir automáticamente todas las reglas del cómputo legal.',
      'Requiere relacionar fechas, calificación jurídica y efectos procesales, no proyectar un único plazo abstracto.',
    ],
    correctOptionId: 'c',
    explanation: 'Un término solo puede computarse después de identificar la norma aplicable, la modalidad fáctica y los hitos jurídicos pertinentes. La respuesta evita declarar prescripción sin soporte cronológico.',
  }],
  'pgn-m26': [{
    number: 1,
    caseText: 'Una queja describe una modificación de un registro público fuera del horario habitual. El sistema informa una cuenta de servicio compartida, utilizada por varios procesos automáticos y operadores, pero no identifica a una persona concreta. El responsable del área tecnológica tenía privilegios de administrador y la jefatura sostiene que ello es suficiente para investigar disciplinariamente solo a ese servidor. La preservación técnica no ha terminado y aún existen registros adicionales por contrastar.',
    stem: '¿Cuál ruta inicial es jurídicamente más consistente con el nivel de identificación disponible?',
    options: [
      'Abrir investigación contra el administrador porque la posibilidad técnica de ejecutar el cambio demuestra la atribución personal.',
      'Examinar competencia y relevancia de los hechos, preservar evidencia y valorar la indagación previa si subsiste duda sobre la identificación o individualización del posible autor; iniciar investigación cuando se cuente con el presupuesto correspondiente.',
      'Inhibirse de toda actuación porque el reporte técnico no identifica a una persona, sin examinar las diligencias legalmente posibles.',
    ],
    rationales: [
      'Privilegios o acceso técnico no acreditan autoría material por sí mismos.',
      'Aplica la finalidad de la indagación previa bajo el artículo 208 modificado y diferencia hecho, autor y etapa.',
      'La falta de individualización no convierte automáticamente la noticia en manifiestamente irrelevante.',
    ],
    correctOptionId: 'b',
    explanation: 'El artículo 208 del Código General Disciplinario, modificado por la Ley 2094 de 2021, vincula la indagación previa con la duda sobre identificación o individualización del posible autor. La atribución técnica requiere contrastación.',
  }],
  'pgn-m29': [{
    number: 1,
    caseText: 'Terminadas las diligencias ordenadas durante una investigación disciplinaria, un profesional prepara un proyecto que envía directamente el pliego de cargos a la oficina de juzgamiento. El expediente registra la recepción de las pruebas y un informe de cierre, pero no contiene el acto de cierre de investigación ni constancia del traslado para alegatos precalificatorios. Un compañero afirma que estas actuaciones son prescindibles porque las pruebas ya fueron practicadas.',
    stem: '¿Cuál corrección debe recomendarse antes de evaluar el mérito del expediente?',
    options: [
      'Declarar el cierre de investigación y otorgar el traslado legal de diez días para alegatos precalificatorios; después evaluar el mérito de las pruebas y decidir lo procedente.',
      'Enviar directamente a juzgamiento, ya que la suficiencia de las pruebas vuelve innecesario el cierre y los alegatos.',
      'Archivar por economía procesal, pues cualquier omisión formal en la preparación del pliego demuestra que no procede continuar.',
    ],
    rationales: [
      'Respeta la secuencia de cierre, traslado y evaluación exigida por el procedimiento.',
      'La eficacia administrativa no suprime las oportunidades previstas para la actuación.',
      'Una irregularidad procedimental requiere análisis de su alcance; no equivale por sí sola a ausencia de mérito.',
    ],
    correctOptionId: 'a',
    explanation: 'Conforme al artículo 220 del Código General Disciplinario, tras el cierre corresponde el traslado para alegatos precalificatorios por diez días. La evaluación del mérito se ubica después de esa oportunidad.',
  }],
  'pgn-m30': [{
    number: 1,
    caseText: 'La investigación contiene una declaración que compromete a un funcionario, un documento que parece atribuirle la actuación y un registro de reparto que indica que ese día otra persona tenía la tarea. El proyecto de pliego cita únicamente la declaración inicial, incorpora una afirmación de culpabilidad definitiva y solicita notificar al investigado como si el juicio de responsabilidad ya hubiera concluido.',
    stem: '¿Qué revisión resulta indispensable al evaluar archivo o formulación de cargos?',
    options: [
      'Formular cargos en los términos del proyecto porque en esta fase basta con una evidencia que sustente la sospecha, aunque existan descargos relevantes.',
      'Archivar de inmediato porque la presencia de un dato exculpatorio vuelve imposible cualquier formulación de cargos.',
      'Valorar integralmente los elementos de cargo y descargo, precisar hechos, normas, ilicitud y culpabilidad en el estándar de la etapa y distinguir formulación de cargos de declaración de responsabilidad.',
    ],
    rationales: [
      'La evaluación no puede omitir evidencia relevante ni anticipar la conclusión propia de juzgamiento.',
      'La evidencia favorable exige valoración, pero su sola existencia no obliga automáticamente a archivar.',
      'Conserva el alcance de la evaluación del mérito y la separación entre imputación y fallo.',
    ],
    correctOptionId: 'c',
    explanation: 'La formulación de cargos delimita la acusación y debe estar motivada; no es sanción ni equivale a declarar culpabilidad. Deben examinarse todos los soportes pertinentes.',
  }],
  'pgn-m32': [{
    number: 1,
    caseText: 'Un expediente presenta una notificación inicialmente irregular. Con posterioridad, la persona vinculada participó en varias diligencias y aportó pruebas, pero ahora alega que perdió la oportunidad de controvertir una prueba practicada antes de tener conocimiento del trámite. Un informe sostiene que todo defecto formal exige eliminar íntegramente el expediente, incluso las pruebas recaudadas legalmente por fuera de la actuación afectada.',
    stem: '¿Qué análisis debe preceder a una decisión de nulidad o saneamiento?',
    options: [
      'Declarar la nulidad total de la actuación sin identificar qué garantía fue afectada ni qué diligencias podrían conservarse.',
      'Identificar la causal aplicable y la trascendencia del defecto, examinar si hubo afectación concreta de defensa o debido proceso, y delimitar las actuaciones que deben reponerse y las pruebas que conservan validez.',
      'Negar automáticamente cualquier nulidad porque la intervención posterior del disciplinado siempre sana todas las afectaciones previas.',
    ],
    rationales: [
      'La nulidad exige alcance motivado y no borra indistintamente todo lo actuado.',
      'Aplica los controles de causal, trascendencia y efecto sobre garantías procesales.',
      'La intervención posterior no elimina sin más una afectación material anterior.',
    ],
    correctOptionId: 'b',
    explanation: 'El régimen de nulidades del CGD exige examinar la causal, los principios de trascendencia y saneamiento y la conservación de pruebas legalmente incorporadas.',
  }],
  'pgn-m35': [{
    number: 1,
    caseText: 'Un informe disciplinario considera acreditado un incumplimiento por la declaración de un ciudadano. El disciplinable entrega documentos que sugieren que el hecho ocurrió durante una falla institucional y no como resultado de su decisión. El investigador considera que no es necesario revisar el nuevo material porque corresponde al servidor demostrar su inocencia. El jefe solicita un proyecto de decisión motivada.',
    stem: '¿Qué debe hacer el equipo respecto de la prueba favorable y de la carga probatoria?',
    options: [
      'Incorporar y valorar el material tanto de cargo como de descargo con igual rigor y obtener la prueba necesaria; la carga de demostrar los hechos corresponde al Estado.',
      'Omitir el nuevo material hasta que el servidor demuestre de manera definitiva una causa de exoneración.',
      'Dar automáticamente plena credibilidad a los documentos del disciplinado y archivar, pues toda contradicción destruye el fundamento de la queja.',
    ],
    rationales: [
      'Combina carga probatoria estatal, imparcialidad de la investigación y valoración de evidencia que favorece al disciplinable.',
      'Invierte la carga y desconoce el deber de investigación imparcial.',
      'La contradicción obliga a valorar; no atribuye certeza inmediata a la fuente alternativa.',
    ],
    correctOptionId: 'a',
    explanation: 'Los artículos 147 a 149 del CGD exigen decisiones fundadas en prueba, atribuyen al Estado la carga y ordenan buscar con igual rigor hechos favorables y desfavorables.',
  }],
  'pgn-m37': [{
    number: 1,
    caseText: 'En una actuación disciplinaria se aportó una grabación obtenida por un tercero cuya forma de adquisición no está explicada. El contenido parece relevante, y existe otra copia que coincide en duración. La defensa señala que no ha tenido oportunidad de conocer el soporte original ni discutir su incorporación. El investigador argumenta que la coincidencia visual y la utilidad de la grabación permiten ignorar cualquier debate sobre legalidad.',
    stem: '¿Qué comprobación es prioritaria antes de atribuir a ese material un valor decisivo?',
    options: [
      'Admitirlo como prueba plena y diferir las objeciones para el fallo, pues su utilidad compensa la falta de verificación de origen.',
      'Excluirlo de forma automática sin revisar origen, garantías de obtención ni oportunidad de contradicción.',
      'Examinar su obtención e incorporación legal, permitir la contradicción que corresponda y valorar el alcance del material conforme a sus garantías y soporte.',
    ],
    rationales: [
      'La utilidad no elimina los controles de legalidad y contradicción.',
      'La existencia de dudas requiere examen jurídico; no siempre produce un efecto automático idéntico.',
      'Distingue pertinencia del soporte, legalidad de incorporación y garantía de contradicción.',
    ],
    correctOptionId: 'c',
    explanation: 'El CGD regula la legalidad, contradicción y valoración de pruebas. La regla exacta debe aplicarse a la forma de obtención e incorporación del soporte concreto.',
  }],
  'pgn-m44': [{
    number: 1,
    caseText: 'El equipo de TI recibe un computador asociado con la alteración de un registro disciplinario. Para mantener el servicio disponible se propone formatear el dispositivo y conservar solamente un Excel exportado desde una cuenta administrativa. El Excel contiene filas coincidentes con los hechos, pero no se documentaron el origen, los filtros activos, el reloj del equipo, el procedimiento de extracción ni los custodios de la copia.',
    stem: '¿Qué procedimiento protege mejor la utilidad probatoria sin presumir que una copia aislada demuestra autoría?',
    options: [
      'Conservar únicamente el Excel y calcular su hash actual: el hash de la copia prueba la autenticidad completa de los registros originales.',
      'Preservar de manera documentada el material fuente o una adquisición verificable, registrar cadena de manejo, tiempos y método, y trabajar sobre copias antes de cualquier recuperación operativa que pueda alterar evidencia.',
      'Restaurar el computador y luego solicitar declaraciones, ya que solo la continuidad del servicio puede justificar la investigación.',
    ],
    rationales: [
      'El hash de una copia no reconstruye por sí solo la procedencia ni la fidelidad de su adquisición.',
      'Conecta aseguramiento, trazabilidad, integridad técnica y límites de la inferencia sobre autoría.',
      'La restauración previa puede destruir evidencia; continuidad y preservación deben coordinarse.',
    ],
    correctOptionId: 'b',
    explanation: 'La guía disciplinaria conecta los artículos 155 y 156 del CGD con el aseguramiento de material y apoyo técnico. La evidencia digital exige registrar origen, integridad, manejo y alcance de cada inferencia.',
  }],
  'pgn-m51': [{
    number: 1,
    caseText: 'Una entidad necesita adquirir dispositivos para fortalecer su infraestructura. Los estudios previos incluyen una especificación que solo cumple el equipo del proveedor que hizo la visita preliminar. El área usuaria afirma que esa marca está probada y que la diferencia de precio es pequeña. Otro proponente entrega fichas técnicas de una solución funcionalmente equivalente, pero la respuesta a su observación se limita a decir que la entidad conoce mejor sus necesidades.',
    stem: '¿Cuál examen corresponde antes de cerrar las condiciones del procedimiento de selección?',
    options: [
      'Mantener la condición sin ajustes porque la experiencia anterior del área solicitante constituye por sí sola justificación de selección objetiva.',
      'Admitir cualquier equipo propuesto para no restringir competencia, aunque no satisfaga requerimientos técnicos esenciales.',
      'Verificar que los requisitos respondan a necesidades objetivas y proporcionales, motivar diferencias funcionales y valorar observaciones sin favorecer injustificadamente a un proponente.',
    ],
    rationales: [
      'La experiencia previa no elimina la obligación de justificar requisitos y principios de selección objetiva.',
      'La apertura de competencia no exige renunciar a requisitos necesarios y verificables.',
      'Equilibra planeación técnica, necesidad, proporcionalidad y trato objetivo a los oferentes.',
    ],
    correctOptionId: 'c',
    explanation: 'Las reglas de contratación estatal exigen motivación y selección objetiva; las especificaciones deben corresponder a la necesidad y evitar exclusiones injustificadas.',
  }],
  'pgn-m52': [{
    number: 1,
    caseText: 'Una alcaldía utiliza una excavadora contratada por un periodo determinado para intervenir una vía. El equipo fue ingresado temporalmente al país por un proveedor extranjero y sufre un incendio durante la permanencia. El expediente tiene actas de entrega, mantenimiento, póliza e informe inicial de bomberos; la causa continúa indeterminada. El supervisor propone certificar cumplimiento total, mientras otro servidor exige atribuirle inmediatamente una infracción aduanera y una falta disciplinaria por el siniestro.',
    stem: '¿Qué actuación distingue correctamente la supervisión contractual, la investigación de hechos y las competencias de otras autoridades?',
    options: [
      'Certificar el cumplimiento porque el daño fue accidental según el proveedor, y dejar cualquier otra responsabilidad a su aseguradora.',
      'Preservar y conciliar soportes contractuales y técnicos, verificar obligaciones del supervisor y del contratista y el alcance de pólizas, y remitir a las autoridades competentes las cuestiones ajenas al régimen contractual sin presumir responsabilidad por el solo incendio.',
      'Declarar una infracción aduanera y responsabilidad disciplinaria del supervisor en la misma acta, pues ambas se derivan automáticamente de la destrucción del equipo.',
    ],
    rationales: [
      'La declaración del proveedor no resuelve por sí sola cumplimiento, riesgo ni soporte para pago.',
      'Separa contratos, hechos, prueba y competencias; permite evaluar responsabilidades a partir de sus presupuestos propios.',
      'Ni el siniestro ni su eventual relación con una operación temporal convierten al supervisor en responsable automático de otro régimen.',
    ],
    correctOptionId: 'b',
    explanation: 'En el 3PU-15 interesa identificar deberes de supervisión, control de soportes, posibles omisiones y límites de competencia. No se pretende examinar aquí el cálculo de tributos o sanciones aduaneras.',
  }],
  'pgn-m61': [{
    number: 1,
    caseText: 'Un sistema institucional registra una modificación irregular desde una dirección IP que corresponde a la red de una sede. La salida a internet utiliza NAT, hay usuarios conectados por VPN y una cuenta de servicio es compartida por varias tareas automáticas. La jefatura solicita identificar al responsable y propone asociar la IP con el último usuario registrado en la portería del edificio. Existe información de autenticación multifactor y sesiones que aún no se ha correlacionado.',
    stem: '¿Qué conclusión técnica es admisible con el soporte disponible?',
    options: [
      'La IP de salida identifica por sí sola al usuario material; la portería puede utilizarse para firmar el informe conclusivo.',
      'No es posible realizar ninguna inferencia mientras no exista una grabación de vídeo de la persona usando el equipo.',
      'Preservar y correlacionar registros de sesiones, identidades, NAT, VPN, horarios y sistemas; delimitar lo que esos datos permiten inferir y no convertir correlación de red en atribución personal automática.',
    ],
    rationales: [
      'Una IP compartida, NAT o VPN no equivale a identificación individual de quien realizó un acto.',
      'La ausencia de vídeo no hace inútiles los registros técnicos ni impide su análisis documentado.',
      'Distingue identificación técnica, contexto de sesión e inferencia de autoría humana.',
    ],
    correctOptionId: 'c',
    explanation: 'La correlación de registros exige método, control de tiempos, contexto de identidad y cautela ante infraestructura compartida.',
  }],
  'pgn-m66': [{
    number: 1,
    caseText: 'Una hoja de cálculo consolida 420 registros de actuaciones institucionales. Tras aplicar un filtro por regional, la suma presentada en el informe no coincide con las filas visibles. La fórmula empleada incluye algunas filas ocultas, y otra tabla contiene un rango relativo que se desplazó al copiar la fórmula. Un directivo pide ajustar manualmente el total para que coincida con un reporte firmado la semana anterior.',
    stem: '¿Cuál comprobación debe realizarse antes de utilizar la cifra para una conclusión de control de gestión?',
    options: [
      'Mantener el total del informe anterior porque ya fue firmado y es el dato administrativo más confiable.',
      'Auditar rangos y referencias, distinguir filas filtradas de excluidas, reconciliar la fuente, corregir fórmulas de manera trazable y registrar la metodología aplicada.',
      'Eliminar todos los registros ocultos y recalcular el resultado sin documentarlo, porque la vista filtrada representa automáticamente el universo correcto.',
    ],
    rationales: [
      'La firma del reporte no confirma por sí sola la integridad del cálculo actual.',
      'Combina control de datos, verificación de fórmulas y reproducibilidad.',
      'Ocultar filas no significa excluirlas legítimamente del análisis, y borrar datos compromete la trazabilidad.',
    ],
    correctOptionId: 'b',
    explanation: 'El objetivo es obtener resultados verificables, documentar reglas de cálculo y separar errores de presentación, filtros y datos.',
  }],
  'pgn-m82': [{
    number: 1,
    caseText: 'Un sistema de expedientes registra accesos inusuales desde una cuenta válida a documentos con datos sensibles. La oficina plantea apagar todas las aplicaciones y borrar sesiones para bloquear el riesgo. Otro equipo advierte que la entidad presta un servicio crítico y que los logs se sobrescriben en pocos días. No se ha determinado si existe acceso indebido o si se trata de actividad legítima desde un nuevo dispositivo.',
    stem: '¿Qué respuesta inicial equilibra seguridad, continuidad y conservación de evidencia?',
    options: [
      'Eliminar registros y credenciales sin inventario; la reducción inmediata de actividad demuestra que el incidente quedó resuelto.',
      'Esperar a contar con certeza absoluta sobre autoría antes de tomar cualquier medida de contención.',
      'Preservar eventos y alcance, verificar identidades y permisos, aplicar contención proporcionada según el riesgo y documentar las acciones para mantener o recuperar la continuidad del servicio.',
    ],
    rationales: [
      'Borrar registros impide reconstruir el incidente y la ausencia de planificación puede afectar la continuidad.',
      'La incertidumbre no impide adoptar medidas proporcionadas de gestión del riesgo.',
      'Distingue contención, confirmación del incidente, preservación de evidencia y servicio institucional.',
    ],
    correctOptionId: 'c',
    explanation: 'El análisis de seguridad debe valorar confidencialidad, integridad, disponibilidad, trazabilidad de decisiones y protección de datos sin concluir autoría automáticamente.',
  }],
}
