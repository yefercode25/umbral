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
  'pgn-m15': [{
    number: 1,
    caseText: 'Una entidad firma una resolución individual y la guarda en la carpeta del proceso. El mismo día remite al grupo de trabajo un correo que dice «resolución expedida» y actualiza una tabla con el estado «notificado». La carpeta carece de constancia de notificación personal o por aviso al destinatario. El área jurídica quiere computar los recursos desde la firma, porque estima que el interesado pudo conocer informalmente el documento.',
    stem: '¿Qué comprobación distingue correctamente expedición, notificación y firmeza antes de calcular la oportunidad de los recursos?',
    options: [
      'Dar por notificada y en firme la resolución desde la fecha de firma porque la carpeta contiene un PDF y el estado de la matriz dice «notificado».',
      'Empezar a contar recursos desde el correo interno de trabajo, pues cualquier comunicación electrónica sustituye la notificación legalmente exigida.',
      'Identificar la naturaleza del acto, el mecanismo de publicidad o notificación que corresponde, su constancia válida y los recursos procedentes; solo entonces verificar el término y la causal de firmeza.',
    ],
    rationales: [
      'La expedición no prueba por sí sola notificación a la persona interesada ni firmeza del acto.',
      'Un mensaje interno no es necesariamente una notificación personal o electrónica válida; su eficacia depende de los requisitos aplicables.',
      'El CPACA distingue clases de actos, notificación, recursos y causales de firmeza; el análisis parte del efecto real de cada actuación.',
    ],
    correctOptionId: 'c',
    explanation: 'CPACA, arts. 43, 65, 67–69, 74 y 87: naturaleza del acto, publicación/notificación, recursos y firmeza se verifican por separado. La firma y el registro en una tabla no reemplazan automáticamente la diligencia o modalidad válida de notificación.',
  }],
  'pgn-m16': [{
    number: 1,
    caseText: 'Durante una actuación disciplinaria, una profesional encuentra un término de la etapa establecido en el Código General Disciplinario, mientras una plantilla de oficina aplica el plazo de un trámite administrativo ordinario del CPACA. Para ahorrar tiempo, el equipo plantea utilizar el menor de los dos y declarar nulo todo lo actuado si detecta cualquier diferencia formal. Hay además una petición de copias radicada por un ciudadano, que debe distinguirse de la investigación disciplinaria.',
    stem: '¿Cuál método aplica correctamente el régimen general frente al especial sin mezclar términos ni consecuencias procesales?',
    options: [
      'Seleccionar el término más corto entre CPACA y CGD, porque la celeridad permite prescindir de la regulación especial de la etapa.',
      'Identificar cada procedimiento y su norma propia, aplicar el término expresamente previsto en el CGD para esa fase y examinar separadamente la petición de copias y cualquier defecto según sus reglas aplicables.',
      'Promediar ambos términos y declarar automáticamente la nulidad de todas las actuaciones por cualquier irregularidad, aun sin estudiar su naturaleza ni garantías.',
    ],
    rationales: [
      'El régimen general no deroga por simple conveniencia una regla especial vigente para la actuación.',
      'Distingue objeto, etapa, fuente, términos y consecuencias de cada procedimiento y permite tratar aparte la petición ciudadana.',
      'No existe una regla general que autorice promediar plazos; los efectos de defectos deben examinarse por vías y presupuestos jurídicos específicos.',
    ],
    correctOptionId: 'b',
    explanation: 'CPACA, art. 34, reconoce los procedimientos regulados en leyes especiales. El Código General Disciplinario, reformado por Ley 2094 de 2021, gobierna las etapas que regula expresamente. La solicitud autónoma de copias y los defectos procesales exigen clasificación y análisis propios.',
  }],
  'pgn-m17': [{
    number: 1,
    caseText: 'Una ciudadana envía una solicitud con tres puntos: obtener copia de un expediente con datos de terceros, consultar el significado de una norma y pedir información sobre un asunto que conoce otra autoridad. En la alcaldía el correo se marca «petición general, 15 días» y luego «respondido», aunque únicamente existe un borrador de respuesta de la consulta. La oficina reconoce que no es competente sobre el tercer punto y considera negar todo por la presencia de una dirección personal en un anexo.',
    stem: '¿Qué gestión conserva los términos y derechos de la peticionaria frente a esta solicitud mixta?',
    options: [
      'Fijar 15 días para todo por estar en un único correo y cerrar el radicado al redactar la consulta, aunque no se envíe ni se tramiten las copias.',
      'Clasificar los tres componentes, comprobar los términos aplicables a copias e información, consulta y traslado por falta de competencia, analizar entrega parcial de datos públicos y asegurar respuesta de fondo con constancias reales.',
      'Negar íntegramente el acceso porque cualquier dato personal vuelve reservado todo el expediente; omitir el traslado por tratarse de una petición mixta.',
    ],
    rationales: [
      'Un único radicado puede contener pretensiones diferentes; una etiqueta administrativa o un borrador no sustituye cumplimiento de cada punto.',
      'La Ley 1755 distingue plazos de 10, 15 y 30 días según modalidad, y el art. 21 regula autoridades incompetentes; la respuesta debe acreditarse y la restricción de acceso motivarse.',
      'La reserva exige fundamento específico y valoración de acceso parcial; la falta de competencia sobre un componente activa el trámite legal correspondiente.',
    ],
    correctOptionId: 'b',
    explanation: 'Ley 1755 de 2015, arts. 14 y 21: regla general 15 días; información y documentos 10; consultas 30, con excepciones previstas legalmente; cuando falta competencia, informar y remitir en el plazo aplicable. Leyes 1712 y 1581: distinguir información accesible y datos protegidos. Responder de fondo no implica conceder automáticamente la petición.',
  }],
  'pgn-m12': [{
    number: 1,
    caseText: 'Durante una selección para adquirir equipos municipales, una veeduría advierte que el pliego exige una marca particular sin justificar su necesidad. Aún no hay adjudicación ni evidencia suficiente de una falta disciplinaria. Una oficina propone formular cargos para impedir que continúe el proceso; otra recomienda ignorar la alerta hasta que exista un daño. La entidad prepara una posible corrección técnica, pero no hay constancia de que haya sido publicada.',
    stem: '¿Qué ruta misional corresponde en este momento y cómo deben preservarse los límites de las otras funciones de Procuraduría?',
    options: [
      'Formular cargos como medida preventiva directa, porque el riesgo de favorecimiento reemplaza la prueba de una conducta y el procedimiento disciplinario.',
      'Abstenerse de intervenir hasta la adjudicación y posible daño patrimonial; solo entonces pueden ejercerse atribuciones preventivas.',
      'Examinar el riesgo y requerir soportes o verificar correcciones dentro de la función preventiva, separando cualquier hecho disciplinario verificable y cualquier intervención procesal para sus trámites propios.',
    ],
    rationales: [
      'Una alerta preventiva no equivale a imputación probada ni autoriza a saltar garantías disciplinarias.',
      'La vigilancia preventiva puede operar ante riesgos sin esperar una falta consumada o un daño definitivo.',
      'Distingue el objetivo preventivo, la noticia disciplinaria y el eventual escenario de intervención sin desplazar a la autoridad contractual.',
    ],
    correctOptionId: 'c',
    explanation: 'Constitución arts. 118 y 277, Decreto Ley 262/2000 y lineamientos de función preventiva PGN: se identifican riesgos y se da seguimiento dentro de competencia. Para instrucción y juzgamiento disciplinario se exige su procedimiento y prueba; intervenir ante otra autoridad requiere su habilitación propia.',
  }],
  'pgn-m13': [{
    number: 1,
    caseText: 'Un despacho competente comisiona la recepción de una declaración en un expediente disciplinario. El acto identifica objeto, testigo y plazo. Durante la diligencia, el testigo menciona un contrato diferente y entrega una copia documental. El comisionado considera que puede extender la actuación al nuevo asunto, decretar otras pruebas y formular cargos de inmediato, porque conoce detalles que el despacho de origen aún no tiene.',
    stem: '¿Qué actuación diferencia correctamente el encargo probatorio de la competencia para decidir el expediente?',
    options: [
      'Ampliar unilateralmente la investigación y formular cargos, pues la comisión transforma al comisionado en autoridad competente para todas las etapas.',
      'Practicar la diligencia dentro del objeto y garantías aplicables, registrar y preservar la novedad, comunicarla al comitente y tramitar cualquier ampliación o decisión mediante la autoridad habilitada.',
      'Suprimir del acta toda referencia a información diferente del objeto inicial y destruir el documento nuevo para evitar cuestiones sobre competencia.',
    ],
    rationales: [
      'Una comisión para una diligencia delimitada no transfiere todas las atribuciones decisorias del proceso.',
      'Preserva el objeto de comisión, prueba y garantías, y permite que la novedad sea evaluada sin asumir competencia impropia.',
      'Omitir o destruir información recibida impide valoración y contradicción adecuada; se documenta su alcance y tratamiento.',
    ],
    correctOptionId: 'b',
    explanation: 'Código General Disciplinario, reformado por Ley 2094 de 2021, y régimen orgánico PGN: la comisión, el reparto y la competencia son conceptos distintos. Las diligencias deben seguir las condiciones y garantías del medio probatorio; la autoridad competente conserva la definición del alcance y las decisiones de cada fase.',
  }],
  'pgn-m14': [{
    number: 1,
    caseText: 'Un Profesional Universitario 3PU-15 de formación en Sistemas analiza una exportación de registros: un expediente cambió de estado después de las 22:00 y la acción aparece asociada a una cuenta de servicio compartida. El informe preliminar dice que el titular de la cuenta actuó dolosamente. Sin embargo, hay diferencias de zona horaria entre archivos y se encontró una tarea automática programada para la misma franja, sin confirmarse todavía su autorización.',
    stem: '¿Qué producto de apoyo debe entregar el profesional para que la instrucción pueda valorar los hechos sin que el informe suplante la decisión jurídica?',
    options: [
      'Documentar origen, extracción y tiempo de los registros; contrastar la tarea automatizada y las sesiones, diferenciar observaciones de hipótesis y explicitar qué autoría o intencionalidad no está demostrada.',
      'Certificar dolo del titular de la cuenta porque los privilegios de acceso y la hora del evento equivalen a prueba suficiente de la intención.',
      'Negarse a examinar los logs porque la investigación tiene naturaleza jurídica y solo los abogados pueden analizar cualquier dato digital.',
    ],
    rationales: [
      'Conserva trazabilidad y límites técnicos para una valoración jurídica autónoma, haciendo útil el conocimiento profesional de Sistemas.',
      'Una cuenta técnica y la existencia de un evento no demuestran identidad física ni estado subjetivo disciplinario.',
      'La formación de Sistemas puede contribuir al análisis y recaudo dentro de atribuciones; no implica capacidad de decidir jurídicamente ni prohibición de aportar.',
    ],
    correctOptionId: 'a',
    explanation: 'Convocatoria 104-2026 versión 4 y Manual de Funciones V9, junto al Código General Disciplinario: el profesional apoya la instrucción con pruebas, análisis e informes en sus funciones. Debe aportar método verificable y explicar incertidumbre; la valoración subjetiva y las decisiones corresponden a la autoridad competente.',
  }],
  'pgn-m9': [{
    number: 1,
    caseText: 'Una secretaría departamental y dos municipios participan en un convenio para dotar puestos de salud. La queja sobre pagos y entrega se radica en la sede provincial de la Procuraduría situada cerca de una de las obras. La carpeta muestra órdenes impartidas por el departamento y actas firmadas en los municipios. El receptor sostiene que el lugar de radicación determina toda la competencia y que la autonomía municipal impide examinar posibles deberes de servidores departamentales.',
    stem: '¿Cuál verificación permite determinar correctamente competencia territorial y funcional sin desconocer autonomía y coordinación?',
    options: [
      'Asignar definitivamente todos los hechos a la oficina que recibió la queja porque la cercanía territorial prevalece sobre sujeto, materia y nivel del servidor.',
      'Trasladar íntegramente el asunto a los municipios porque la autonomía del artículo 287 excluye cualquier competencia departamental en un proyecto ejecutado en sus territorios.',
      'Identificar sujetos y deberes por entidad, materia y nivel; revisar circunscripción, reglas internas de PGN y posibles supuestos de conexidad, dejando constancia de reparto y soportes.',
    ],
    rationales: [
      'El lugar de recepción del escrito no sustituye las reglas legales de competencia orgánica y territorial.',
      'La autonomía no equivale a soberanía ni extingue atribuciones del departamento derivadas de la ley o de un convenio.',
      'La Constitución y la Ley 1454 de 2011 exigen distinguir las competencias y articulación de los niveles; en PGN se aplican además criterios de sujeto, materia, fase y territorio.',
    ],
    correctOptionId: 'c',
    explanation: 'Constitución arts. 1, 286 a 288: república unitaria descentralizada con entidades territoriales autónomas dentro de Constitución y ley. La Ley 1454 de 2011 desarrolla coordinación, concurrencia y subsidiariedad. Decreto 262 de 2000 modificado por Decreto 1851 de 2021 establece distribuciones internas que no se reducen a la oficina más próxima.',
  }],
  'pgn-m10': [{
    number: 1,
    caseText: 'Una población informa fallas repetidas del acueducto y un hospital alerta riesgo operativo. La alcaldía presenta un plan de contingencia, aunque no demuestra todavía su ejecución. Una persona pide a la Procuraduría sancionar preventivamente al gerente de la entidad prestadora; otro funcionario considera que debe abstenerse de toda vigilancia hasta comprobar una falta disciplinaria. También llega una petición de intervención dentro de un proceso judicial cuya procedencia es distinta.',
    stem: '¿Cómo debería diferenciar la Procuraduría las actuaciones preventiva, disciplinaria y de intervención ante estos hechos?',
    options: [
      'Sancionar de inmediato al gerente mediante el seguimiento preventivo porque toda alerta de continuidad demuestra falta disciplinaria.',
      'Requerir y verificar medidas de gestión dentro del alcance preventivo, separar la posible noticia disciplinaria para su análisis con competencia y garantías, y examinar la intervención judicial por sus requisitos específicos.',
      'Aplazar cualquier actuación sobre el servicio hasta existir prueba suficiente para formular cargos, usando mientras tanto la intervención judicial como sustituto de prevención.',
    ],
    rationales: [
      'Prevenir un riesgo no es sancionar ni atribuir automáticamente responsabilidad individual.',
      'Cada ruta tiene una finalidad y presupuestos propios; vigilancia preventiva puede valorar riesgo antes de una decisión sancionatoria.',
      'La función preventiva no exige esperar la consumación de una falta, y la intervención judicial no reemplaza el control de gestión.',
    ],
    correctOptionId: 'b',
    explanation: 'Artículos 118 y 277 constitucionales y Decreto Ley 262 de 2000: la Procuraduría ejerce tareas de vigilancia, defensa de derechos, intervención y disciplina en ámbitos diferenciados. Los riesgos sustentan seguimiento preventivo; la sanción exige su procedimiento y prueba, y una intervención requiere competencia y trámite propios.',
  }],
  'pgn-m11': [{
    number: 1,
    caseText: 'Una procuraduría provincial recibe un escrito que menciona un servidor departamental y dos funcionarios municipales. Existe una actuación de instrucción iniciada en otra oficina y documentos que sugieren hechos conexos. Un funcionario afirma que, por ser la sede receptora la más cercana, debe investigar y fallar la totalidad; otro quiere remitirlo sin identificar siquiera a los sujetos. La coordinación solicita una ruta de reparto sustentada.',
    stem: '¿Qué secuencia permite ubicar el asunto dentro de la estructura de PGN respetando funciones, fase y criterios de conexidad?',
    options: [
      'Identificar materia y sujetos, verificar circunscripción, etapa, actuaciones previas y reglas vigentes de competencia y conexidad; remitir o repartir con motivación y trazabilidad a la dependencia habilitada.',
      'Conservar todos los hechos por proximidad, adelantar instrucción y dictar el fallo desde la misma oficina, pues el reparto es solo un asunto interno de archivo.',
      'Trasladar el asunto sin registrar hechos o antecedentes a cualquier delegada central, dado que esa denominación siempre desplaza automáticamente la competencia territorial.',
    ],
    rationales: [
      'Las atribuciones de cada dependencia se determinan por norma y actos aplicables, factores de competencia y las condiciones de conexidad, no por cercanía.',
      'La recepción no otorga competencia y la normativa distingue instrucción de juzgamiento.',
      'Las competencias preferentes o especiales de delegadas tienen presupuestos y procedimientos, no se activan por el solo nombre de una dependencia.',
    ],
    correctOptionId: 'a',
    explanation: 'Decretos Ley 262 de 2000 y 1851 de 2021: distinción entre oficinas centrales, regionales, distritales y provinciales, y entre instrucción y juzgamiento. Cuando existe conexidad pueden regir reglas específicas de conocimiento; la eventual competencia preferente exige sus condiciones legales. El cargo 3PU-15 presta apoyo sin habilitar por sí mismo potestad de reparto o fallo.',
  }],
  'pgn-m6': [{
    number: 1,
    caseText: 'Una alcaldía recibe tres requerimientos sobre la contratación de mobiliario: la Contraloría examina el uso de recursos públicos, la Procuraduría verifica actuaciones de servidores y la Fiscalía solicita datos relativos a un posible delito. Existe un acta con bienes no entregados, una inconsistencia en los pagos y una denuncia que acusa a todos los funcionarios. La dirección municipal afirma que solo debe responder a Fiscalía porque ella «investiga todo»; otro servidor propone pedir a Procuraduría que decida directamente la responsabilidad fiscal.',
    stem: '¿Cuál respuesta distingue la estructura estatal y las competencias que surgen de una misma situación contractual?',
    options: [
      'Suspender cualquier verificación disciplinaria o fiscal porque la apertura penal desplaza automáticamente a todas las demás autoridades.',
      'Solicitar que Procuraduría determine el daño fiscal y la culpabilidad penal, pues todos los órganos de control y la Fiscalía tienen idéntica competencia.',
      'Separar el objeto de cada requerimiento, preservar y remitir soportes pertinentes por los canales competentes y evitar afirmar responsabilidades antes de la valoración propia de cada régimen.',
    ],
    rationales: [
      'La existencia de una actuación penal no elimina por sí sola los objetos y competencias de los demás regímenes.',
      'Procuraduría, Contraloría y Fiscalía no son autoridades intercambiables; la Fiscalía integra la Rama Judicial y la Contraloría ejerce control fiscal.',
      'Aplica los artículos 113, 117 a 119 y 250 según competencia, sin importar automáticamente decisiones ni presumir responsabilidades.',
    ],
    correctOptionId: 'c',
    explanation: 'Constitución: las ramas del poder se distinguen de los órganos de control; el Ministerio Público incluye la Procuraduría y el control fiscal corresponde a la Contraloría. La Fiscalía pertenece a la Rama Judicial y desempeña funciones penales. Hechos compartidos pueden justificar actuaciones diferentes, cada una con su procedimiento.',
  }],
  'pgn-m7': [{
    number: 1,
    caseText: 'Una oficina mantiene una matriz de correspondencia con número de radicado y fecha. El jefe pide tramitar primero la solicitud de un conocido, sin soporte para alterar el orden. Otro expediente contiene un documento que podría justificar legalmente una atención prioritaria; hay datos personales en las dos carpetas. La oficina afirma que la celeridad y publicidad del artículo 209 justifican tanto el cambio informal de orden como publicar todas las solicitudes sin revisión.',
    stem: '¿Qué decisión permite aplicar simultáneamente igualdad, imparcialidad, celeridad y publicidad sin convertirlos en excusas para arbitrariedades?',
    options: [
      'Tramitar primero al conocido y luego compensar atendiendo a otra persona, porque un reparto informal termina produciendo igualdad estadística.',
      'Validar registros y criterios oficiales de atención, examinar la prioridad legal acreditada, documentar cualquier cambio y divulgar solo la información que proceda conforme a protección de datos y reservas aplicables.',
      'Publicar íntegramente todas las solicitudes para demostrar transparencia, dejando que cada interesado gestione después la protección de su información.',
    ],
    rationales: [
      'El favoritismo no se corrige favoreciendo arbitrariamente después a otra persona y puede violar la imparcialidad.',
      'Los principios del artículo 209 se aplican conjuntamente con competencia, reglas de atención, tratamiento de datos y motivación de las excepciones.',
      'La publicidad no es una autorización automática para divulgar datos personales protegidos o material sujeto a restricciones legales.',
    ],
    correctOptionId: 'b',
    explanation: 'Art. 209 constitucional y CPACA: eficacia y celeridad no eliminan igualdad e imparcialidad. Publicidad no equivale a entrega indiscriminada de datos personales; las prioridades requieren supuesto legal y constancia. El uso de Excel es de apoyo, no crea criterios de prioridad.',
  }],
  'pgn-m8': [{
    number: 1,
    caseText: 'Una alcaldía registra retrasos en una obra de mantenimiento y se presenta una queja contra el supervisor. El expediente muestra actas parciales, órdenes al contratista y un correo que atribuye la demora a un tercero. La oficina proyecta declarar al supervisor responsable disciplinario, penal y fiscal porque «es servidor público y firmó el contrato», sin verificar cuáles eran sus funciones efectivas, quién aprobó los pagos o qué medidas adoptó.',
    stem: '¿Qué investigación inicial distingue calidad del sujeto, deber funcional y responsabilidades de naturaleza diferente?',
    options: [
      'Verificar designación, deber concreto, actuaciones exigibles y realizadas, evidencia de posibles omisiones y autoridad de cada régimen antes de deducir responsabilidades.',
      'Imponer en un solo concepto administrativo tres responsabilidades por el retraso, pues la condición de servidor público permite presumir autoría en todas.',
      'Excluir cualquier revisión porque un tercero pudo provocar parte del atraso, de modo que ningún servidor podría haber incumplido su deber funcional.',
    ],
    rationales: [
      'La relación entre calidad del sujeto, función, hechos acreditados y competencia permite investigar con garantías y sin trasladar resultados entre regímenes.',
      'Ser servidor y estar en el expediente no acredita por sí mismo una conducta culpable ni concede competencia para decidir todos los regímenes.',
      'Un hecho alternativo puede modificar la hipótesis, pero no elimina automáticamente otros deberes o actuaciones que todavía requieren revisión.',
    ],
    correctOptionId: 'a',
    explanation: 'Artículos 6, 121, 123 y 124 constitucionales y Código General Disciplinario: deben delimitarse calidad del sujeto, obligación funcional, conducta u omisión, soporte y autoridad competente. Fiscal, penal y disciplinario persiguen objetos distintos y no se acumulan mediante una calificación automática.',
  }],
  'pgn-m3': [{
    number: 1,
    caseText: 'En la preparación para la Convocatoria 104-2026, un aspirante al nivel profesional realiza 40 preguntas de diagnóstico. Obtiene 17/20 respuestas correctas en Constitución y 9/20 en pruebas disciplinarias. Recuerda que el puntaje mínimo aprobatorio de conocimientos es 65/100 y que su peso en el concurso es 70 %. Un compañero le propone suspender la revisión porque su resultado promedio está cerca de esa cifra y afirma que ese 70 % equivale a una nota mínima adicional.',
    stem: '¿Qué decisión de estudio interpreta correctamente el resultado diagnóstico y las reglas de evaluación?',
    options: [
      'Conservar exactamente el mismo tiempo para todos los temas, pues los porcentajes por módulo no orientan el repaso y el promedio indica suficiente preparación.',
      'Concentrarse solo en Constitución porque el área con más aciertos permite maximizar la sensación de dominio y compensará cualquier debilidad restante.',
      'Distinguir 65/100 como umbral eliminatorio y 70 % como ponderación, estudiar por causas los errores del área probatoria y mantener recuperación periódica de Constitución, sin atribuir al simulacro un resultado oficial.',
    ],
    rationales: [
      'La distribución idéntica de tiempo no responde a debilidades comprobadas; tampoco asegura transferencia del aprendizaje.',
      'Mejorar solo la fortaleza descuida una función misional relevante y no resuelve los errores de prueba detectados.',
      'Aplica correctamente los dos datos normativos y prioriza aprendizaje a partir de evidencias sin presuponer distribución oficial por temas.',
    ],
    correctOptionId: 'c',
    explanation: 'Resolución 076 de 2026 y sus modificaciones: para el nivel profesional conocimientos es eliminatoria con mínimo 65/100 y pondera el 70 % del concurso; no son umbrales idénticos. Un diagnóstico de práctica no garantiza la elegibilidad ni demuestra el número de preguntas oficiales que se dedicarán a cada tema.',
  }],
  'pgn-m4': [{
    number: 1,
    caseText: 'En una actuación de apoyo a la instrucción, se revisa un registro de acceso a un sistema de documentos. El evento aparece a las 08:15 y se asocia a una cuenta de servicio utilizada por tareas automatizadas. El archivo exportado carece de constancia de su origen; otros registros muestran actividad desde una sesión VPN y un procedimiento programado. El jefe solicita que el informe identifique por nombre al autor de una falta disciplinaria porque el profesional que lo redacta conoce el funcionamiento del servidor.',
    stem: '¿Cuál producto demuestra competencia técnica sin atribuir conclusiones que el dato disponible no acredita?',
    options: [
      'Identificar al administrador del servidor como autor personal por ser responsable del sistema, dejando la comprobación de sesiones para la etapa de juzgamiento.',
      'Preservar y contextualizar los registros, documentar origen, integridad y zona horaria, correlacionar hipótesis alternativas y expresar en el informe lo observado, lo inferido y lo que debe decidir la autoridad competente.',
      'Destruir la exportación por carecer de certificación inicial, absteniéndose de registrar cualquier hallazgo técnico hasta que se conozca al responsable.',
    ],
    rationales: [
      'La administración de un sistema o una cuenta no demuestra ejecución personal ni atribución disciplinaria.',
      'El método separa evidencia de hipótesis, reconoce limitaciones de adquisición y respeta competencias jurídicas.',
      'Una fuente con debilidades de trazabilidad debe evaluarse y preservarse según corresponda, no descartarse o destruirse de manera automática.',
    ],
    correctOptionId: 'b',
    explanation: 'En el empleo 3PU-15, el profesional puede apoyar con análisis técnico y documentación, pero la identificación personal y la responsabilidad disciplinaria no se deducen de un solo registro. La autoridad debe valorar las pruebas según el proceso y las garantías aplicables.',
  }],
  'pgn-m5': [{
    number: 1,
    caseText: 'Una dependencia estatal examina una actuación con afectación posible de derechos individuales. El expediente contiene pruebas de una irregularidad aparente, pero falta realizar una comunicación exigida por el procedimiento para que la persona interesada pueda ejercer defensa. La jefatura ordena avanzar porque hay presión ciudadana y el interés general exige resolver rápidamente. La persona encargada advierte que la Constitución reconoce el debido proceso en actuaciones administrativas y limita a cada autoridad a sus competencias.',
    stem: '¿Cuál actuación armoniza los fines del Estado con las garantías constitucionales que rigen la decisión?',
    options: [
      'Comprobar la competencia, cumplir la comunicación y demás garantías procesales exigibles en esa etapa, valorar las pruebas y elegir una actuación oportuna motivada que no sacrifica defensa por celeridad.',
      'Omitir la comunicación porque la gravedad de la irregularidad y el interés general prevalecen siempre sobre las garantías individuales.',
      'Omitir la comunicación solo si la entidad considera las pruebas suficientes; la oportunidad de contradicción depende exclusivamente de la confianza de la jefatura.',
    ],
    rationales: [
      'Respeta los artículos 6, 29, 121 y 209 y vincula celeridad con debido proceso y competencia.',
      'El interés general no es una habilitación absoluta para desconocer procedimientos y derechos fundamentales.',
      'La suficiencia aparente de una prueba no dispensa automáticamente de las oportunidades legales de contradicción y defensa.',
    ],
    correctOptionId: 'a',
    explanation: 'Constitución: artículos 1 y 2 sobre fines y organización, 6 y 121 sobre responsabilidad y atribuciones, 29 sobre debido proceso judicial y administrativo, y 209 sobre función administrativa. Celeridad y eficacia operan junto a las garantías, no en su lugar.',
  }],
  'pgn-m0': [{
    number: 1,
    caseText: 'Una profesional se vincula al cargo 3PU-15 en una procuraduría territorial. Recibe una queja sobre omisiones en la gestión documental, una matriz de seguimiento y la orden de preparar un informe. Su formación es técnica, pero el despacho solicita que además declare, en el propio informe, la responsabilidad disciplinaria de un servidor. La profesional conoce los sistemas y los registros, aunque no le han conferido atribución para adoptar una decisión disciplinaria.',
    stem: '¿Qué actuación distingue mejor las funciones de apoyo del empleo y las decisiones reservadas a la autoridad competente?',
    options: [
      'Preparar y firmar una conclusión disciplinaria definitiva, porque la orden de la coordinación y el conocimiento técnico son suficientes para decidir el expediente.',
      'Abstenerse de procesar documentos y de elaborar cualquier informe porque los estudios de ingeniería no habilitan para participar en procesos preventivo-disciplinarios.',
      'Organizar las actuaciones, verificar registros y fuentes, documentar hallazgos y límites en un informe trazable y remitir la valoración jurídica decisoria a quien tenga competencia.',
    ],
    rationales: [
      'Una instrucción de trabajo no amplía automáticamente las potestades decisorias ni convierte un informe de apoyo en un fallo.',
      'Las funciones del 3PU-15 son multidisciplinarias y sí incluyen apoyo profesional, análisis y documentación en los términos del empleo.',
      'La respuesta identifica el producto profesional útil y preserva la diferencia entre prueba, inferencia y potestad jurídica.',
    ],
    correctOptionId: 'c',
    explanation: 'Convocatoria 104-2026 versión 4 y manual de funciones: el empleo apoya instrucción, prevención, prueba, atención y gestión. La formación profesional aporta métodos, pero el ejercicio de competencia disciplinaria requiere habilitación legal, función y etapa. La priorización temática de Umbral no constituye distribución oficial de preguntas.',
  }],
  'pgn-m1': [{
    number: 1,
    caseText: 'Una oficina recibe un radicado con solicitud de copias de documentos que conserva y una petición sobre una decisión que corresponde a otra autoridad. El servidor conoce la norma general sobre el asunto y proyecta una resolución para todo el escrito. Una compañera advierte que todavía no se ha verificado la competencia y que la plataforma identifica el correo de salida como simple comunicación, no como notificación.',
    stem: '¿Qué análisis diferencia correctamente actuación, competencia y efectos jurídicos antes de responder?',
    options: [
      'Emitir la decisión sobre todos los puntos porque la norma citada es aplicable a la materia, y tomar el correo interno como constancia suficiente de notificación.',
      'Separar los componentes, identificar qué puede resolver la dependencia y qué debe tramitar por la vía competente, y verificar el acto y el mecanismo de comunicación o notificación exigibles.',
      'Devolver todo el escrito al solicitante para que determine por sí mismo la autoridad, aunque la oficina ya tenga competencia y soportes sobre una parte.',
    ],
    rationales: [
      'Que una norma sea verdadera no habilita a cualquier dependencia ni convierte una comunicación interna en notificación válida.',
      'Examina hechos, competencia, actuación, efecto jurídico y constancias sin confundir conceptos.',
      'La falta de competencia sobre un punto no elimina necesariamente los deberes respecto de lo que sí corresponde atender.',
    ],
    correctOptionId: 'b',
    explanation: 'Derecho básico aplicado: la competencia delimita quién actúa; una actuación de trámite no equivale a un acto definitivo; las comunicaciones y notificaciones se rigen por sus presupuestos particulares. Deben revisarse el CPACA y el procedimiento aplicable, sin asumir una única respuesta para todos los componentes.',
  }],
  'pgn-m2': [{
    number: 1,
    caseText: 'Una estudiante prepara el simulacro de Procuraduría. Recuerda que el artículo 208 del Código General Disciplinario contempla una indagación previa de seis meses. En una pregunta se desconoce quién sería el presunto autor; en otra, el posible autor ya está individualizado. Un compañero afirma que cualquier queja exige los mismos seis meses, y otro sostiene que el plazo siempre puede ampliarse porque existen derechos fundamentales involucrados.',
    stem: '¿Cómo debe utilizarse la regla del artículo 208 para resolver ambos casos sin depender de una cifra memorizada?',
    options: [
      'Comprobar primero si existe duda sobre identificación o individualización del posible autor, distinguir el término general de seis meses y examinar únicamente la extensión especial legalmente prevista para violaciones de derechos humanos o derecho internacional humanitario.',
      'Aplicar siempre una indagación previa de seis meses a toda queja y dejar para el cierre la comprobación del supuesto que justificaba abrirla.',
      'Asumir que cualquier posible afectación de derechos fundamentales extiende automáticamente la indagación por otros seis meses, sin examinar el supuesto legal específico.',
    ],
    rationales: [
      'Identifica el presupuesto de procedencia, el plazo, la excepción y la etapa antes de escoger la alternativa.',
      'El artículo 208 no establece la indagación previa como fase obligatoria para cualquier noticia disciplinaria.',
      'La extensión especial requiere el supuesto señalado por la ley; no se desprende automáticamente de la invocación genérica de un derecho.',
    ],
    correctOptionId: 'a',
    explanation: 'El artículo 208 de la Ley 1952 de 2019, modificado por el artículo 34 de la Ley 2094 de 2021, vincula la indagación previa a dudas sobre identificación del posible autor, fija seis meses y prevé una posible extensión especial por violaciones a derechos humanos o derecho internacional humanitario. La clave es analizar supuesto, norma, término y decisión, no reconocer solo el número.',
  }],
  'pgn-m18': [
  {
    "number": 1,
    "caseText": "El equipo de prevención debe responder a una veeduría que pide actas y cifras de supervisión. Hay anexos con identificadores privados; la dependencia ha verificado que las cifras son públicas y separables y propone negar todo por contener datos personales. El borrador de respuesta no señala la disposición legal que limita el acceso.",
    "stem": "¿Cuál alternativa respeta la máxima publicidad y permite controlar la restricción de acceso?",
    "options": [
      "Entregar una versión pública de lo divulgable, motivar las exclusiones con la base legal y conservar el original y la constancia de respuesta.",
      "Clasificar todo el expediente como reservado por decisión de la jefatura sin valorar la información separable.",
      "Entregar el original completo y pedir al receptor que no difunda los identificadores privados."
    ],
    "rationales": [
      "Ley 1712, arts. 18, 19, 21 y 28; Ley 1755, arts. 25 y 26: la restricción debe ser fundada, delimitada y comunicada.",
      "Omite un presupuesto legal o anticipa un efecto que no corresponde.",
      "No resuelve el problema de la etapa ni protege los derechos involucrados."
    ],
    "correctOptionId": "a",
    "explanation": "Ley 1712, arts. 18, 19, 21 y 28; Ley 1755, arts. 25 y 26: la restricción debe ser fundada, delimitada y comunicada."
  }
],
  'pgn-m19': [
  {
    "number": 1,
    "caseText": "En una actuación disciplinaria hay suficientes documentos para considerar una hipótesis de falta, pero aún se discuten elementos relativos a la responsabilidad personal. El profesional de apoyo recibe la instrucción de proyectar una sanción inmediata, aunque el asunto está en instrucción y no ha llegado al juzgamiento.",
    "stem": "¿Qué criterio permite escoger el acto propio de la etapa sin anticipar la decisión definitiva?",
    "options": [
      "Proyectar sanción definitiva porque el principio de economía permite concentrar instrucción y juzgamiento.",
      "Determinar si procede completar diligencias o evaluar la investigación conforme a los requisitos de cargos o archivo; reservar el fallo a la autoridad de juzgamiento y su estándar probatorio.",
      "Remitir un fallo absolutorio sin evaluar los elementos recaudados, porque cualquier controversia impide continuar la investigación."
    ],
    "rationales": [
      "Omite un presupuesto legal o anticipa un efecto que no corresponde.",
      "CGD, arts. 12, 160 y 222: la fase y el estándar requerido delimitan la actuación; ni los cargos ni la hipótesis son un fallo.",
      "No resuelve el problema de la etapa ni protege los derechos involucrados."
    ],
    "correctOptionId": "b",
    "explanation": "CGD, arts. 12, 160 y 222: la fase y el estándar requerido delimitan la actuación; ni los cargos ni la hipótesis son un fallo."
  }
],
  'pgn-m20': [
  {
    "number": 1,
    "caseText": "Un profesional de apoyo de la Procuraduría revisa un informe que atribuye al jefe de una dependencia toda irregularidad detectada en un sistema. El documento no identifica una acción u omisión concreta del jefe ni el deber funcional que habría incumplido; hay evidencia de posibles acciones de terceros no examinadas.",
    "stem": "¿Cuál recomendación permite orientar la instrucción sin prejuzgar ni renunciar al examen de los hechos?",
    "options": [
      "Delimitar conducta y deber funcional, verificar atribución personal, afectación y culpabilidad, e incorporar tanto evidencia de cargo como de descargo.",
      "Mantener la atribución al jefe por su posición jerárquica y exigirle que demuestre que no causó la irregularidad.",
      "Excluir a todos los servidores de la dependencia por existir indicios de participación de terceros."
    ],
    "rationales": [
      "CGD, arts. 9, 10, 13, 14 y 160: la responsabilidad objetiva está proscrita; el deber de investigación integral no se traslada al disciplinable.",
      "Omite un presupuesto legal o anticipa un efecto que no corresponde.",
      "No resuelve el problema de la etapa ni protege los derechos involucrados."
    ],
    "correctOptionId": "a",
    "explanation": "CGD, arts. 9, 10, 13, 14 y 160: la responsabilidad objetiva está proscrita; el deber de investigación integral no se traslada al disciplinable."
  }
],
  'pgn-m21': [
  {
    "number": 1,
    "caseText": "La PGN recibe una queja que señala a todos los integrantes de una oficina sin describir conductas, fechas ni hechos concretos. Después se incorpora un informe institucional independiente que identifica un registro alterado, la fecha y una cuenta compartida. No permite identificar aún al operador. La jefatura solicita elegir una ruta basada en el nuevo soporte.",
    "stem": "¿Qué recomendación distingue la noticia inicial del informe verificable posterior?",
    "options": [
      "Mantener sin revisión la conclusión sobre la queja genérica, porque la información posterior no puede generar una actuación distinta.",
      "Abrir investigación contra todos los titulares de acceso, pues la cuenta compartida prueba autoría conjunta.",
      "Evaluar la relevancia y credibilidad del informe, comprobar competencia y considerar indagación previa si persiste duda sobre el posible autor, sin abrir investigación colectiva automática."
    ],
    "rationales": [
      "La fuente independiente debe examinarse según su mérito.",
      "Acceso potencial no equivale a identificación del autor.",
      "El nuevo soporte cambia la evaluación de procedencia, no demuestra quién actuó."
    ],
    "correctOptionId": "c",
    "explanation": "CGD, arts. 86, 208–211: evaluar hechos concretos y grado de identificación antes de escoger actuación."
  }
],
  'pgn-m22': [
  {
    "number": 1,
    "caseText": "Una dependencia presenta un informe tardío durante una interrupción técnica. El expediente contiene el deber de reporte, la bitácora de indisponibilidad y un correo sobre el procedimiento alterno, pero no prueba si el servidor tenía acceso a dicho canal. La dirección plantea sancionar por el retraso para mejorar el indicador de cumplimiento. El reporte no cuantifica ninguna afectación del servicio.",
    "stem": "¿Qué decisión de apoyo evita confundir un indicador de gestión con responsabilidad disciplinaria?",
    "options": [
      "Recomendar sanción porque el retraso demuestra por sí solo culpa gravísima.",
      "Delimitar la conducta y deber, analizar afectación sustancial y justificación, y verificar el cuidado funcional y la posibilidad real de usar el canal alterno.",
      "Descartar toda relevancia disciplinaria por haberse registrado una interrupción técnica."
    ],
    "rationales": [
      "La graduación de culpa exige condiciones normativas y prueba.",
      "El indicador es un hecho de gestión, no prueba suficiente de los elementos de responsabilidad.",
      "Una interrupción no acredita automáticamente una causal de exclusión."
    ],
    "correctOptionId": "b",
    "explanation": "CGD, arts. 9, 10 y 26–31: separar deber, ilicitud, culpabilidad y exclusión."
  }
],
  'pgn-m23': [
  {
    "number": 1,
    "caseText": "Un profesional de la PGN debe elaborar un concepto sobre una actuación en la que participa una empresa de la cual su socio obtiene un beneficio económico directo. La dependencia sugiere que basta mencionar la relación al final del informe porque otro funcionario firma la decisión. El profesional aún no ha iniciado el análisis de fondo. El expediente contiene constancia de la participación económica del socio.",
    "stem": "¿Qué actuación corresponde para proteger imparcialidad y competencia en el asunto concreto?",
    "options": [
      "Identificar el interés directo y la causal legal, declarar oportunamente el impedimento y seguir el trámite correspondiente antes de intervenir cuando deba apartarse.",
      "Preparar el concepto y revelar la relación al final, pues la firma de otra autoridad elimina el conflicto.",
      "Declararse incompatible con todos los asuntos institucionales y reasignarlos sin decisión de autoridad competente."
    ],
    "rationales": [
      "El conflicto debe tratarse oportunamente y según alcance legal.",
      "La gestión y el control también pueden quedar comprendidos en la causal.",
      "Un impedimento no equivale a una incompatibilidad general."
    ],
    "correctOptionId": "a",
    "explanation": "CGD art. 44: el interés particular y directo del servidor o personas previstas por la norma debe examinarse y tramitarse oportunamente."
  }
],
  'pgn-m24': [
  {
    "number": 1,
    "caseText": "Un profesional de apoyo revisa una actuación relativa a una conducta instantánea de febrero de 2024 y una posible falta continuada cuyo último acto se ubica en agosto de 2024. El cuadro mezcla fecha del contrato, queja, firma de providencias y notificaciones. No se ha determinado si alguna conducta corresponde al art. 52. La jefatura solicita un cálculo único y una sanción basada solamente en la aparente gravedad de los hechos.",
    "stem": "¿Qué producto de apoyo permite analizar prescripción y consecuencias sin confundir los presupuestos legales?",
    "options": [
      "Aplicar cinco años desde la fecha contractual a todos los hechos y graduar la sanción por el valor del contrato.",
      "Contar desde la queja y usar el mismo rango de sanción para toda falta gravísima, sin considerar culpabilidad.",
      "Elaborar una cronología separada por conducta, verificar el régimen y las notificaciones relevantes, y distinguir clasificación de la falta, culpabilidad y rango sancionatorio."
    ],
    "rationales": [
      "El contrato no determina por sí solo el inicio ni la sanción.",
      "La queja no es el hito universal y las sanciones cambian según modalidad subjetiva.",
      "La solución distingue clasificación, modalidad subjetiva, régimen y cómputos autónomos."
    ],
    "correctOptionId": "c",
    "explanation": "CGD arts. 33 y 46–50: identificar términos aplicables, clasificación y culpabilidad antes de recomendar una conclusión."
  }
],
  'pgn-m25': [
  {
    "number": 1,
    "caseText": "La PGN recibe una queja sobre registros de contratación eliminados. Una captura señala a un administrador, pero el informe de seguridad indica que varios operadores usaban la misma cuenta. Se cuenta con fechas, documentos y un posible deber funcional comprometido, aunque no se individualiza a quien actuó. El peticionario pide una sanción inmediata y la oficina debe definir el trámite inicial según su competencia.",
    "stem": "¿Qué actuación distingue correctamente una noticia disciplinaria verificable de una responsabilidad acreditada?",
    "options": [
      "Inhibirse por la sola ausencia de identificación personal pese a la existencia de hechos verificables.",
      "Preservar y contrastar soportes, delimitar hechos y competencia y adelantar indagación previa si persiste duda sobre identificación, sin tratar el reporte como prueba definitiva.",
      "Abrir investigación contra el administrador y formular cargos en la misma decisión porque tenía acceso privilegiado."
    ],
    "rationales": [
      "La falta de identificación no convierte por sí sola la noticia en manifiestamente irrelevante.",
      "La noticia permite evaluar relevancia; la duda de identificación conduce a examinar el presupuesto del art. 208.",
      "Acceso técnico no equivale a autoría y cargos requieren un estándar distinto."
    ],
    "correctOptionId": "b",
    "explanation": "CGD arts. 86, 208–211: seleccionar la actuación inicial según la información y la competencia, sin prejuzgar."
  }
],
  'pgn-m26': [
  {
    "number": 1,
    "caseText": "Una actuación disciplinaria parte de un reporte sobre una modificación de datos. La cuenta usada era compartida y, al inicio, no se individualiza a la persona. Durante la indagación se consigue una asignación de credenciales y se contrasta con turnos y una declaración, que permiten identificar al posible autor. Aún se discute si la conducta estaba justificada y la jefatura pide conservar la indagación hasta demostrar culpabilidad.",
    "stem": "¿Cómo debe modificarse la ruta cuando se supera la duda sobre identidad pero no se ha demostrado responsabilidad?",
    "options": [
      "Esperar el vencimiento de seis meses y exigir certeza de culpabilidad para abrir investigación.",
      "Abrir investigación inmediatamente cuando proceda, identificando el soporte de individualización, sin exigir que en indagación se demuestre culpabilidad ni anticipar el fallo.",
      "Formular cargos y trasladar a juzgamiento por el solo hecho de haber identificado al operador."
    ],
    "rationales": [
      "Confunde el objetivo de la etapa con la certeza exigida para sancionar.",
      "La indagación tiene por presupuesto la duda de identidad y la investigación evalúa los demás elementos.",
      "La autoría posible no prueba todos los elementos requeridos para cargos."
    ],
    "correctOptionId": "b",
    "explanation": "CGD arts. 208 y 211: la identificación habilita la apertura cuando corresponde; no sustituye las etapas y estándares posteriores."
  }
],
  'pgn-m27': [
  {
    "number": 1,
    "caseText": "El equipo de instrucción recibe una noticia que identifica al posible autor de una alteración documental y el acto concreto afectado. El proyecto de apertura solo dice que se investigará su conducta laboral durante todo el año; no distingue el episodio ni las pruebas ordenadas. También hay un informe de control disciplinario interno sobre los mismos hechos y constancia de vinculación del servidor.",
    "stem": "¿Qué ajuste necesita el proyecto antes de su expedición por la autoridad competente?",
    "options": [
      "Mantener una apertura genérica para poder agregar cualquier conducta sin examinar conexidad y comunicar a control interno únicamente al final.",
      "Sustituir el auto de apertura por un pliego de cargos dado que ya se conoce un posible autor y existe un informe institucional.",
      "Delimitar hechos e identidad, ordenar las pruebas y soportes requeridos por el art. 215 y comprobar los avisos y coordinación del art. 216, sin convertir la apertura en un cargo anticipado."
    ],
    "rationales": [
      "La amplitud indeterminada desconoce el objeto de investigación y las comunicaciones oportunas.",
      "El estándar de apertura es distinto del de formulación de cargos.",
      "La decisión de apertura tiene contenido y comunicaciones propios; identificar al autor no demuestra los requisitos para cargos."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, arts. 13, 211–217. La decisión de apertura tiene contenido y comunicaciones propios; identificar al autor no demuestra los requisitos para cargos. La primera alternativa incorrecta falla porque la amplitud indeterminada desconoce el objeto de investigación y las comunicaciones oportunas. La segunda falla porque el estándar de apertura es distinto del de formulación de cargos."
  }
],
  'pgn-m28': [
  {
    "number": 1,
    "caseText": "El defensor solicita controvertir un informe de análisis digital que sustenta una hipótesis de alteración. El despacho le permite leer la conclusión, pero omite los registros y el método relevantes, que están incorporados en el expediente y pueden consultarse bajo las garantías aplicables. El funcionario considera que ofrecer la versión libre reemplaza cualquier oportunidad de examen de esos soportes.",
    "stem": "¿Qué medida preserva el derecho de defensa sin confundir versión libre con contradicción probatoria?",
    "options": [
      "Ofrecer otra versión libre y negar el acceso a los registros porque la explicación del investigado constituye su única forma de defensa.",
      "Facilitar acceso a los soportes en los términos legales y tramitar la solicitud de contradicción o prueba, dejando constancia de las decisiones y garantías correspondientes.",
      "Exigir una aceptación de los hechos antes de permitir acceso a los anexos técnicos para evitar dilaciones."
    ],
    "rationales": [
      "La versión no sustituye el acceso ni las facultades probatorias.",
      "Los arts. 109–112 reconocen facultades de defensa y contradicción independientes de la versión.",
      "Condicionar la defensa a una admisión desconoce las garantías procesales."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 15, 109–112, 115, 161–162; Constitución 33. Los arts. 109–112 reconocen facultades de defensa y contradicción independientes de la versión. La primera alternativa incorrecta falla porque la versión no sustituye el acceso ni las facultades probatorias. La segunda falla porque condicionar la defensa a una admisión desconoce las garantías procesales."
  }
],
  'pgn-m29': [
  {
    "number": 1,
    "caseText": "Un profesional recibe una carpeta con todas las pruebas practicadas y un borrador de cierre aún sin adoptar. El sistema tiene marcado el estado de evaluación porque la oficina redactó un pliego preliminar. No existe traslado de alegatos y uno de los sujetos procesales solicita oportunidad para explicar la procedencia de un registro técnico. El jefe solicita consolidar un calendario de las actuaciones faltantes.",
    "stem": "¿Qué orden debe tener el calendario para respetar las fases legalmente diferenciadas?",
    "options": [
      "Formalizar el cierre, surtir y controlar los diez días de traslado de alegatos, estudiar el expediente y adoptar luego la decisión motivada de evaluación.",
      "Dar por cerrado el traslado desde la creación del borrador y expedir cargos para que la defensa discuta el registro en juicio.",
      "Reabrir siempre por seis meses porque un sujeto procesal anunció que desea alegar sobre una prueba ya recaudada."
    ],
    "rationales": [
      "Cierre, traslado y evaluación son actuaciones diferenciadas por arts. 220 y 221.",
      "Un borrador y un estado interno no acreditan el traslado legal.",
      "La presentación de alegatos no implica una prórroga automática."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, arts. 213, 220–222. Cierre, traslado y evaluación son actuaciones diferenciadas por arts. 220 y 221. La primera alternativa incorrecta falla porque un borrador y un estado interno no acreditan el traslado legal. La segunda falla porque la presentación de alegatos no implica una prórroga automática."
  }
],
  'pgn-m30': [
  {
    "number": 1,
    "caseText": "En la evaluación de una investigación, un certificado auténtico y verificado demuestra que el servidor atribuido no desempeñaba la función ni realizó la actuación investigada. El resto de los soportes no lo relaciona con la conducta. La dirección sugiere formular cargos para que el funcionario de juzgamiento confirme la ausencia de responsabilidad y evitar que la oficina registre un archivo.",
    "stem": "¿Qué salida protege el estándar legal y la competencia del instructor?",
    "options": [
      "Formular cargos de manera preventiva porque el juzgamiento puede absolver al servidor si el certificado resulta convincente.",
      "Declarar una sanción leve por el riesgo de que la conducta haya ocurrido, aunque no exista prueba sobre ese servidor.",
      "Valorar la terminación y el archivo motivado conforme al supuesto plenamente acreditado, sin formular cargos carentes de prueba que comprometa personalmente al investigado."
    ],
    "rationales": [
      "El juicio no debe suplir una condición de procedencia ausente.",
      "La eventual ocurrencia del hecho no establece responsabilidad del investigado.",
      "El art. 90 prevé terminación por supuestos demostrados; art. 222 impide cargos sin soporte personal."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, arts. 90, 160, 221–225. El art. 90 prevé terminación por supuestos demostrados; art. 222 impide cargos sin soporte personal. La primera alternativa incorrecta falla porque el juicio no debe suplir una condición de procedencia ausente. La segunda falla porque la eventual ocurrencia del hecho no establece responsabilidad del investigado."
  }
],
  'pgn-m31': [
  {
    "number": 1,
    "caseText": "El instructor expide pliego de cargos. Antes de terminar sus notificaciones, el apoderado presenta un escrito titulado apelación y la oficina propone concederlo para garantizar defensa. En el expediente no hay todavía constancia de notificación a uno de los destinatarios. La jefatura pide al profesional de apoyo revisar la procedencia del recurso y la oportunidad de remitir el expediente al juzgador.",
    "stem": "¿Cuál recomendación distingue el recurso improcedente y el requisito previo a la remisión?",
    "options": [
      "Conceder apelación del pliego porque toda decisión que comprometa derechos admite segunda instancia inmediata.",
      "Tramitar el escrito según la regla de improcedencia del recurso contra cargos, dejar constancia y completar las notificaciones antes de remitir dentro del término del art. 225.",
      "Remitir de inmediato desde la firma del pliego y dejar al juzgador la notificación pendiente sin examinar el art. 225."
    ],
    "rationales": [
      "El derecho de defensa no crea un recurso no previsto por la ley.",
      "El art. 222 excluye recurso contra cargos; art. 225 condiciona remisión al cumplimiento de notificaciones.",
      "La remisión tiene un hito legal previo distinto de la expedición."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 120–136, 222, 225. El art. 222 excluye recurso contra cargos; art. 225 condiciona remisión al cumplimiento de notificaciones. La primera alternativa incorrecta falla porque el derecho de defensa no crea un recurso no previsto por la ley. La segunda falla porque la remisión tiene un hito legal previo distinto de la expedición."
  }
],
  'pgn-m32': [
  {
    "number": 1,
    "caseText": "En una actuación se presenta una solicitud de nulidad por vulneración de defensa. El despacho la decide conforme a la causal alegada. En otro proceso, el funcionario advierte de oficio una causal legal y declara nulidad motivada. La secretaría usa una plantilla idéntica que ofrece reposición en los dos expedientes. Se requiere revisar el recurso procedente antes de expedir las comunicaciones.",
    "stem": "¿Qué distinción establece el Código entre estas dos decisiones?",
    "options": [
      "Conceder reposición en ambos casos porque cualquier providencia que se refiera a nulidad es recurrible.",
      "Identificar reposición contra la decisión que resuelve solicitud de nulidad y ausencia de recurso contra la declaratoria oficiosa de nulidad del art. 204.",
      "Negar todo recurso en ambos casos porque las nulidades nunca admiten impugnación dentro del CGD."
    ],
    "rationales": [
      "No se puede extender el recurso de la solicitud a la declaratoria oficiosa.",
      "Arts. 133 y 204 regulan hipótesis distintas: solicitud y declaratoria oficiosa.",
      "El art. 133 incluye la decisión sobre solicitud de nulidad."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 202–207. Arts. 133 y 204 regulan hipótesis distintas: solicitud y declaratoria oficiosa. La primera alternativa incorrecta falla porque no se puede extender el recurso de la solicitud a la declaratoria oficiosa. La segunda falla porque el art. 133 incluye la decisión sobre solicitud de nulidad."
  }
],
  'pgn-m33': [
  {
    "number": 1,
    "caseText": "En una diligencia comisionada de recepción de testimonio, una persona aporta un soporte directamente relacionado con el objeto y solicita además que el comisionado archive la investigación por supuesta falta de competencia. No existe prohibición expresa sobre pruebas derivadas y la comisión permanece vigente. La carpeta tiene instrucciones sobre devolución y constancias de contradicción.",
    "stem": "¿Cómo se separan la actuación probatoria permitida y la petición de decisión de fondo?",
    "options": [
      "Abstenerse de tramitar cualquier documento nuevo y resolver el archivo porque el comisionado dispone temporalmente de la carpeta.",
      "Practicar el soporte y decidir de inmediato archivo o cargos porque la comisión habilita todas las decisiones de instrucción.",
      "Tramitar la prueba directamente derivada conforme al art. 152, preservar soportes y garantías y remitir al comitente la solicitud de archivo para decisión de la autoridad competente."
    ],
    "rationales": [
      "No hay prohibición automática para la prueba derivada y la custodia no otorga competencia de archivo.",
      "El encargo probatorio tiene objeto delimitado; cargos y archivo corresponden al funcionario habilitado.",
      "La comisión permite pruebas directamente derivadas bajo condiciones, no la transferencia de competencia decisoria."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, arts. 149–153, 156. La comisión permite pruebas directamente derivadas bajo condiciones, no la transferencia de competencia decisoria. La primera alternativa incorrecta falla porque no hay prohibición automática para la prueba derivada y la custodia no otorga competencia de archivo. La segunda falla porque el encargo probatorio tiene objeto delimitado; cargos y archivo corresponden al funcionario habilitado."
  }
],
  'pgn-m34': [
  {
    "number": 1,
    "caseText": "Un profesional redacta una nota sobre un proceso disciplinario administrativo de la PGN. Afirma que la separación entre instrucción y juzgamiento convierte al funcionario de juicio en juez de la República y que toda sanción a un servidor de elección popular se ejecuta exactamente igual que la de un servidor de carrera. La revisión jurídica advierte que la Sentencia C-030 de 2023 modificó el entendimiento de la función.",
    "stem": "¿Qué precisión debe introducirse antes de usar la nota como referencia de estudio o actuación?",
    "options": [
      "Mantener que la PGN ejerce jurisdicción por el solo nombre juzgamiento y aplicar idéntica regla de ejecución a todos los servidores.",
      "Distinguir naturaleza administrativa de la potestad de la PGN, separación funcional interna y control judicial especial para las sanciones que afectan derechos políticos de elegidos popularmente, verificando el régimen vigente.",
      "Concluir que la PGN perdió toda competencia para investigar disciplinariamente a servidores de elección popular después de C-030."
    ],
    "rationales": [
      "El nombre de la etapa no determina naturaleza jurisdiccional.",
      "C-030 de 2023 distingue potestad administrativa y garantía judicial especial; el art. 12 mantiene separación funcional.",
      "La decisión constitucional no elimina toda actuación disciplinaria administrativa de la PGN."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 12, 160, 225, 225A, 225D; C-030/2023. C-030 de 2023 distingue potestad administrativa y garantía judicial especial; el art. 12 mantiene separación funcional. La primera alternativa incorrecta falla porque el nombre de la etapa no determina naturaleza jurisdiccional. La segunda falla porque la decisión constitucional no elimina toda actuación disciplinaria administrativa de la PGN."
  }
],
  'pgn-m35': [
  {
    "number": 1,
    "caseText": "Un expediente contiene evidencia suficiente de una irregularidad administrativa y un registro que identifica una cuenta de servicio compartida, pero no al operador. Ya se practicaron las diligencias disponibles y se discute la decisión de evaluación. La jefatura sostiene que el daño institucional acredita todos los elementos y que el eventual juzgador puede llenar cualquier vacío sobre responsabilidad.",
    "stem": "¿Qué criterio diferencia el estándar de evaluación de una sanción basada solo en el resultado?",
    "options": [
      "Examinar si existe demostración objetiva de la falta y prueba que comprometa personalmente al disciplinado, sin trasladar al juzgador ni a la defensa un vacío de atribución.",
      "Formular cargos siempre que exista daño, aunque no haya prueba que comprometa al posible autor.",
      "Proferir sanción desde la instrucción porque la irregularidad objetiva equivale a certeza de responsabilidad."
    ],
    "rationales": [
      "Los arts. 147, 160 y 222 distinguen carga, cargos y certeza sancionatoria.",
      "El resultado no satisface todos los requisitos de cargos.",
      "La sanción exige certeza y competencia de juzgamiento."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, 147–150, 160 y 222. Los arts. 147, 160 y 222 distinguen carga, cargos y certeza sancionatoria. Primera alternativa incorrecta: El resultado no satisface todos los requisitos de cargos. Segunda alternativa incorrecta: La sanción exige certeza y competencia de juzgamiento."
  }
],
  'pgn-m36': [
  {
    "number": 1,
    "caseText": "Durante una investigación se niega una prueba solicitada porque el despacho la considera impertinente. En el proyecto no se describe qué hecho pretendía demostrar ni por qué carecía de relación con el expediente. El defensor identifica una conexión con el posible deber funcional y la providencia aún no ha sido notificada. La secretaría prepara una plantilla sin recurso.",
    "stem": "¿Qué ajuste exige una negativa que pueda ser revisada conforme al régimen disciplinario?",
    "options": [
      "Negar por fórmula general de economía procesal y omitir recursos por tratarse de una decisión probatoria.",
      "Conceder apelación en investigación porque toda negativa de prueba se tramita igual que en juicio.",
      "Motivar la relación o falta de relación con el hecho, diferenciar los criterios del art. 151 y reconocer la reposición procedente frente a negativa en investigación."
    ],
    "rationales": [
      "La economía no sustituye la motivación ni elimina el recurso previsto.",
      "Arts. 133 y 134 distinguen las fases.",
      "La negativa motivada y su recurso dependen del supuesto y fase."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, 149–151, 133–134; Ley 1581 de 2012. La negativa motivada y su recurso dependen del supuesto y fase. Primera alternativa incorrecta: La economía no sustituye la motivación ni elimina el recurso previsto. Segunda alternativa incorrecta: Arts. 133 y 134 distinguen las fases."
  }
],
  'pgn-m37': [
  {
    "number": 1,
    "caseText": "Una prueba documental fue obtenida con desconocimiento acreditado de derechos fundamentales del investigado. El expediente contiene además documentos independientes obtenidos legalmente, y el funcionario propone conservar la primera como fundamento porque coincide con las otras fuentes. Existe acta de obtención y se discute el alcance de la consecuencia procesal antes de evaluar la investigación.",
    "stem": "¿Qué criterio corresponde aplicar a la prueba cuestionada y al resto de la evidencia?",
    "options": [
      "Utilizarla como prueba complementaria porque coincide con evidencia válida y no será el único fundamento.",
      "Invalidar necesariamente todos los documentos independientes sin examinar su origen ni relación con el defecto.",
      "Tener por inexistente la prueba que satisface el supuesto del art. 158 y evaluar de manera autónoma los demás elementos legales, examinando los efectos concretos del defecto."
    ],
    "rationales": [
      "La corroboración no sanea la vulneración.",
      "El efecto sobre las demás pruebas exige análisis concreto.",
      "El CGD impide fundamentar decisiones en prueba inexistente, sin convertir toda irregularidad en nulidad indiscriminada."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, 147, 151, 157–158, Constitución art. 29. El CGD impide fundamentar decisiones en prueba inexistente, sin convertir toda irregularidad en nulidad indiscriminada. Primera alternativa incorrecta: La corroboración no sanea la vulneración. Segunda alternativa incorrecta: El efecto sobre las demás pruebas exige análisis concreto."
  }
],
  'pgn-m38': [
  {
    "number": 1,
    "caseText": "Una matriz probatoria enumera veinte diligencias para investigar una alteración, pero no identifica qué hecho demuestra cada una. Una nueva copia de seguridad descarta la hora originalmente atribuida y el equipo propone conservar todas las tareas, sin ajustar hipótesis ni fechas. La jefatura pide un producto que permita a otro profesional revisar el razonamiento y continuar el trabajo.",
    "stem": "¿Cómo debe actualizarse la matriz para orientar diligencias y evitar acumulación sin propósito?",
    "options": [
      "Relacionar cada hecho con hipótesis, fuente, prueba de contraste, resultado y vacío; revisar fechas y prioridades a partir de la copia y documentar las razones del cambio.",
      "Añadir más diligencias sin modificar el planteamiento inicial, para que el número de fuentes respalde la conclusión.",
      "Reemplazar toda la cronología por el dato de la copia y dar por resuelta la atribución personal."
    ],
    "rationales": [
      "Un plan verificable relaciona hechos y fuentes y registra evidencia contradictoria.",
      "El volumen no reemplaza pertinencia ni actualización.",
      "Un dato temporal no acredita identidad o responsabilidad."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, 148, 150–151, 155–156; Ley 527 arts. 9–12. Un plan verificable relaciona hechos y fuentes y registra evidencia contradictoria. Primera alternativa incorrecta: El volumen no reemplaza pertinencia ni actualización. Segunda alternativa incorrecta: Un dato temporal no acredita identidad o responsabilidad."
  }
],
  'pgn-m39': [
  {
    "number": 1,
    "caseText": "Una bitácora demuestra que una cuenta de servicio ejecutó una consulta. El instructor divide ese registro en hora, dirección de red e identificador y los cuenta como tres indicios independientes de autoría. El equipo conoce que varios procesos automatizados usaban la cuenta y aún no verificó la asignación de sesiones. El proyecto de decisión no explica la relación entre los datos y el operador humano.",
    "stem": "¿Qué corrección exige la apreciación racional de indicios en este expediente?",
    "options": [
      "Contar los campos del mismo evento como tres indicios autónomos porque aparecen en columnas diferentes.",
      "Descartar todo uso de indicios en disciplina porque no integran la enumeración de medios de prueba del art. 149.",
      "Acreditar el hecho indicador como unidad, explicar la inferencia hacia la autoría y contrastar automatismos y fuentes independientes antes de asignar mérito al conjunto."
    ],
    "rationales": [
      "Dividir el mismo indicador no crea tres hechos autónomos.",
      "El CGD sí contempla los indicios en la valoración.",
      "Arts. 196–199 regulan hecho indicador, unidad y valoración; art. 149 permite considerar indicios al apreciar pruebas."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, 149, 159–160, 160A, 196–199. Arts. 196–199 regulan hecho indicador, unidad y valoración; art. 149 permite considerar indicios al apreciar pruebas. Primera alternativa incorrecta: Dividir el mismo indicador no crea tres hechos autónomos. Segunda alternativa incorrecta: El CGD sí contempla los indicios en la valoración."
  }
],
  'pgn-m40': [
  {
    "number": 1,
    "caseText": "Durante una investigación se incorporan documentos sometidos a reserva legal en cuaderno separado. El defensor reconocido solicita consultarlos y obtener copia íntegra para su archivo personal. La secretaría considera que, por ser sujeto procesal, puede llevarse una copia sin controles. No existe excepción específica acreditada para expedir copias de estos documentos reservados.",
    "stem": "¿Qué tratamiento debe aplicarse a la consulta y a la expedición de copias en el supuesto del art. 192?",
    "options": [
      "Entregar copia íntegra sin registro porque toda calidad procesal elimina la reserva documental.",
      "Garantizar la consulta del sujeto procesal conforme al régimen, conservar los documentos separados y reservados y aplicar la prohibición de expedir copias prevista para ese supuesto.",
      "Negar incluso la consulta al defensor porque ningún sujeto procesal puede conocer documentos reservados."
    ],
    "rationales": [
      "La reserva subsiste aun cuando se permita consultar.",
      "El parágrafo del art. 192 diferencia consulta por sujetos procesales y prohibición de copias.",
      "La norma reconoce expresamente la consulta."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, 187–195; Ley 527 arts. 8–12. El parágrafo del art. 192 diferencia consulta por sujetos procesales y prohibición de copias. Primera alternativa incorrecta: La reserva subsiste aun cuando se permita consultar. Segunda alternativa incorrecta: La norma reconoce expresamente la consulta."
  }
],
  'pgn-m41': [
  {
    "number": 1,
    "caseText": "En una versión libre un disciplinable acepta que estuvo presente en la oficina, pero no admite ejecutar la conducta investigada y decide guardar silencio sobre una pregunta. El acta no contiene confesión formal ni acreditación de que se cumplieran sus requisitos. El funcionario propone calificar la afirmación parcial como confesión completa y recomendar automáticamente una rebaja de sanción.",
    "stem": "¿Qué distinción debe hacerse entre versión libre y confesión con efectos procesales?",
    "options": [
      "Valorar la afirmación dentro del conjunto, respetar el silencio y verificar los requisitos y oportunidad de los arts. 161–163 antes de reconocer confesión o beneficio.",
      "Tratar cualquier admisión de presencia como aceptación integral de responsabilidad y otorgar rebaja automática.",
      "Descartar toda la versión porque el disciplinable no respondió todas las preguntas formuladas."
    ],
    "rationales": [
      "La confesión exige condiciones legales y su mérito se valora racionalmente.",
      "Presencia no equivale a confesión de la falta.",
      "El silencio no invalida el ejercicio de defensa."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, 161–176; Constitución art. 33. La confesión exige condiciones legales y su mérito se valora racionalmente. Primera alternativa incorrecta: Presencia no equivale a confesión de la falta. Segunda alternativa incorrecta: El silencio no invalida el ejercicio de defensa."
  }
],
  'pgn-m42': [
  {
    "number": 1,
    "caseText": "En una investigación existen dos dictámenes sobre la integridad de un archivo. El segundo utiliza una herramienta diferente y contradice parcialmente al primero. No prosperó ninguna objeción por error grave. El instructor propone reemplazar automáticamente el primer dictamen por el más reciente, sin explicar las diferencias de método ni contrastar las conclusiones con los demás documentos del expediente.",
    "stem": "¿Cómo corresponde valorar ambos dictámenes bajo el art. 182?",
    "options": [
      "Asignar valor exclusivo al segundo dictamen por su fecha posterior, aunque no haya prosperado objeción.",
      "Promediar las conclusiones de ambos sin examinar premisas ni calidad técnica para obtener una conclusión neutral.",
      "Apreciarlos conjuntamente, explicar solidez, precisión, método, idoneidad y contradicciones, relacionándolos con el resto de la prueba; no sustituir automáticamente el primero."
    ],
    "rationales": [
      "La fecha no determina superioridad probatoria.",
      "Una media de conclusiones no reemplaza valoración metodológica.",
      "Art. 182 establece apreciación conjunta de dictámenes, con excepción legal por objeción que prospere."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, 177–184, 193–195. Art. 182 establece apreciación conjunta de dictámenes, con excepción legal por objeción que prospere. Primera alternativa incorrecta: La fecha no determina superioridad probatoria. Segunda alternativa incorrecta: Una media de conclusiones no reemplaza valoración metodológica."
  }
],
  'pgn-m43': [
  {
    "number": 1,
    "caseText": "En una inspección ordenada para verificar el estado de un archivo institucional, una persona presente ofrece un testimonio útil y se encuentran elementos documentales relevantes. El comisionado propone resumir sus declaraciones dentro del acta, sin formulario testimonial separado, y llevarse los soportes sin inventario. La autoridad había informado fecha y hora al disciplinable.",
    "stem": "¿Cómo documentar los hallazgos y el testimonio conforme a las reglas de inspección?",
    "options": [
      "Sustituir el testimonio por un resumen informal en el acta y conservar solo los documentos que favorezcan la hipótesis.",
      "Registrar observaciones y manifestaciones en el acta, recibir el testimonio útil conforme al art. 185 en formulario distinto y recoger y conservar soportes con procedimientos de cadena de custodia.",
      "Finalizar sin recaudar ningún soporte porque toda inspección se limita a observar y no permite recibir testimonios."
    ],
    "rationales": [
      "El resumen no sustituye la diligencia testimonial prevista.",
      "Los arts. 185–186 regulan acta, testimonio separado y preservación de elementos.",
      "La inspección sí puede incorporar elementos útiles bajo reglas legales."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, 154, 157, 185–186. Los arts. 185–186 regulan acta, testimonio separado y preservación de elementos. Primera alternativa incorrecta: El resumen no sustituye la diligencia testimonial prevista. Segunda alternativa incorrecta: La inspección sí puede incorporar elementos útiles bajo reglas legales."
  }
],
  'pgn-m44': [
  {
    "number": 1,
    "caseText": "En una inspección se recoge un dispositivo con información relevante y se documenta su entrega inicial. Al revisar el inventario aparece un intervalo sin constancia de quién tuvo acceso; existen controles físicos y registros que podrían reconstruir parte del período. El equipo propone completar retroactivamente las firmas faltantes y certificar que no ocurrió ninguna alteración, antes de practicar el análisis.",
    "stem": "¿Qué actuación conserva integridad institucional y permite evaluar el vacío de custodia?",
    "options": [
      "Completar las firmas con fechas retrospectivas y ocultar el intervalo para evitar cuestionamientos.",
      "Registrar la incidencia, preservar el soporte, reconstruir el intervalo solo con fuentes verificables, comprobar integridad cuando sea posible y comunicar sus límites para valoración jurídica.",
      "Destruir el dispositivo y declarar inválido todo el proceso sin examinar el alcance del vacío ni los demás soportes."
    ],
    "rationales": [
      "Fabricar constancias no subsana la pérdida de trazabilidad.",
      "La cadena de custodia exige trazabilidad real y la valoración debe distinguir incertidumbre técnica de consecuencias jurídicas.",
      "El incidente requiere evaluación concreta, no destrucción automática."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, 155, 179, 185, 200–201; Ley 527 arts. 8–12. La cadena de custodia exige trazabilidad real y la valoración debe distinguir incertidumbre técnica de consecuencias jurídicas. Primera alternativa incorrecta: Fabricar constancias no subsana la pérdida de trazabilidad. Segunda alternativa incorrecta: El incidente requiere evaluación concreta, no destrucción automática."
  }
],
  'pgn-m45': [
  {
    "number": 1,
    "caseText": "En un seguimiento contractual se verifica que la entidad corrigió una especificación restrictiva mediante una adenda publicada antes del cierre. Aún se desconoce si la modificación eliminó todas las barreras de participación y hay una denuncia distinta sobre una actuación pasada de un servidor. El coordinador desea cerrar automáticamente ambos asuntos porque la entidad respondió el requerimiento preventivo.",
    "stem": "¿Qué decisión distingue el seguimiento preventivo de una posible actuación disciplinaria?",
    "options": [
      "Cerrar ambos asuntos por la existencia de una respuesta favorable de la entidad, sin examinar su alcance.",
      "Convertir el riesgo inicial en cargos disciplinarios aunque se desconozcan los hechos y presupuestos correspondientes.",
      "Comprobar el efecto de la corrección y el riesgo residual, documentar el cierre preventivo si procede y evaluar separadamente los hechos de eventual relevancia disciplinaria."
    ],
    "rationales": [
      "La respuesta no acredita mitigación ni extingue una posible noticia disciplinaria.",
      "Una alerta no satisface el estándar para cargos.",
      "La autonomía de las funciones exige verificar resultados y tratar cada objeto por su régimen."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Constitución art. 277; Decreto Ley 262 art. 24; Resolución PGN 132/2014 arts. 3–11. La autonomía de las funciones exige verificar resultados y tratar cada objeto por su régimen. Primera alternativa incorrecta: La respuesta no acredita mitigación ni extingue una posible noticia disciplinaria. Segunda alternativa incorrecta: Una alerta no satisface el estándar para cargos."
  }
],
  'pgn-m46': [
  {
    "number": 1,
    "caseText": "Una procuraduría prepara su plan operativo anual de prevención. El análisis inicial identifica amenazas a derechos de poblaciones distintas, con recursos limitados para atenderlas simultáneamente. Una dependencia propone seleccionar únicamente asuntos fáciles de cerrar para mejorar estadísticas; otra desea ignorar lineamientos institucionales y actuar según las preferencias individuales del equipo.",
    "stem": "¿Qué criterio de priorización permite organizar el plan conforme al modelo preventivo?",
    "options": [
      "Priorizar exclusivamente expedientes con respuesta rápida para aumentar el porcentaje de cierres.",
      "Relacionar lineamientos y planes institucionales con magnitud, urgencia, derechos comprometidos y capacidad de actuación, documentando las razones y el seguimiento.",
      "Delegar la priorización a la preferencia personal de cada operador sin registrar criterios comunes."
    ],
    "rationales": [
      "Facilidad de cierre no equivale a importancia preventiva.",
      "La priorización debe atender los planes y la magnitud de los riesgos conforme al art. 9.",
      "Flexibilidad no equivale a discrecionalidad sin criterios ni procedimientos."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Resolución PGN 132/2014 arts. 4, 9, 12–24. La priorización debe atender los planes y la magnitud de los riesgos conforme al art. 9. Primera alternativa incorrecta: Facilidad de cierre no equivale a importancia preventiva. Segunda alternativa incorrecta: Flexibilidad no equivale a discrecionalidad sin criterios ni procedimientos."
  }
],
  'pgn-m47': [
  {
    "number": 1,
    "caseText": "Una entidad reporta un control de revisión mensual de pagos que figura en su matriz de riesgos. En una muestra de seis meses solo hay constancia de revisión en dos, y los registros de excepción no tienen responsable asignado. El jefe sostiene que el riesgo residual es bajo porque el control está aprobado en un procedimiento institucional y se encuentra publicado en la intranet.",
    "stem": "¿Qué debe revisar el profesional para valorar la capacidad real del control?",
    "options": [
      "Distinguir diseño y operación efectiva, verificar frecuencia, responsables, evidencia y excepciones, y reevaluar el riesgo residual con los resultados observados.",
      "Calificar el control como plenamente eficaz por existir un procedimiento publicado, sin revisar su ejecución.",
      "Declarar que todos los pagos son irregulares por ausencia de cuatro constancias, sin revisar las operaciones ni otras evidencias."
    ],
    "rationales": [
      "La existencia formal de un control no prueba su funcionamiento ni reducción del riesgo.",
      "Un documento aprobado no sustituye la evidencia de ejecución.",
      "La ausencia de constancia es una alerta, no prueba automática de irregularidad de cada pago."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Resolución PGN 132/2014 arts. 10 y 24; Decreto 1499/2017; Constitución art. 209. La existencia formal de un control no prueba su funcionamiento ni reducción del riesgo. Primera alternativa incorrecta: Un documento aprobado no sustituye la evidencia de ejecución. Segunda alternativa incorrecta: La ausencia de constancia es una alerta, no prueba automática de irregularidad de cada pago."
  }
],
  'pgn-m48': [
  {
    "number": 1,
    "caseText": "Un agente del Ministerio Público recibe una providencia que podría afectar derechos fundamentales. El equipo prepara un escrito de impugnación copiando el término y la denominación de un recurso disciplinario, sin verificar la jurisdicción ni el trámite judicial específico. El expediente contiene constancia de notificación y el profesional dispone de la norma procesal aplicable.",
    "stem": "¿Qué control debe hacerse antes de recomendar o preparar el recurso?",
    "options": [
      "Aplicar el término del Código General Disciplinario porque todo recurso presentado por la PGN se rige por él.",
      "Presentar cualquier recurso sin revisar procedencia porque defender derechos fundamentales permite desconocer las reglas del proceso.",
      "Verificar competencia y legitimación del agente, naturaleza del acto, recurso previsto en ese régimen, oportunidad y fundamento, y entregar al agente el proyecto sustentado."
    ],
    "rationales": [
      "El régimen disciplinario no se aplica universalmente a la intervención judicial.",
      "La finalidad constitucional no crea recursos inexistentes.",
      "La habilitación procesal depende de la actuación y la jurisdicción, no de la identidad institucional."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Constitución arts. 118, 277.7 y 278; Decreto Ley 262/2000; CPACA art. 303. La habilitación procesal depende de la actuación y la jurisdicción, no de la identidad institucional. Primera alternativa incorrecta: El régimen disciplinario no se aplica universalmente a la intervención judicial. Segunda alternativa incorrecta: La finalidad constitucional no crea recursos inexistentes."
  }
],
  'pgn-m49': [
  {
    "number": 1,
    "caseText": "Una petición solicita actuación urgente ante una amenaza documentada a la integridad de una persona. La oficina tiene información suficiente para identificar el riesgo y la autoridad que debe intervenir, pero el trámite general tiene un plazo ordinario de respuesta. El responsable propone limitarse a asignar la petición a la cola normal sin valorar las circunstancias ni documentar medidas inmediatas.",
    "stem": "¿Qué ruta debe examinarse para responder de manera adecuada al riesgo?",
    "options": [
      "Aplicar exclusivamente el plazo general sin examinar el riesgo, porque toda petición recibe idéntico tratamiento.",
      "Verificar el supuesto de atención prioritaria y peligro inminente del art. 20 de Ley 1755, activar medidas y remisión dentro de competencia y documentar la atención.",
      "Resolver directamente cualquier medida reservada a otra autoridad por el solo hecho de existir urgencia."
    ],
    "rationales": [
      "El término general no elimina el deber de atención prioritaria cuando procede.",
      "La atención prioritaria exige valorar las condiciones del caso y actuar dentro de competencia.",
      "La urgencia no crea atribuciones ajenas."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Constitución arts. 13 y 23; Leyes 1618/2013, 1755/2015, 1581/2012 y 2365/2024. La atención prioritaria exige valorar las condiciones del caso y actuar dentro de competencia. Primera alternativa incorrecta: El término general no elimina el deber de atención prioritaria cuando procede. Segunda alternativa incorrecta: La urgencia no crea atribuciones ajenas."
  }
],
  'pgn-m50': [
  {
    "number": 1,
    "caseText": "La PGN revisa un contrato cuyo objeto está definido y firmado por las partes. El expediente contiene un certificado de disponibilidad presupuestal, pero no acredita todos los requisitos de ejecución aplicables, y la garantía exigida aún no fue aprobada. El supervisor propone aceptar la prestación porque considera que perfeccionamiento y autorización de ejecución son una sola etapa jurídica.",
    "stem": "¿Qué distinción debe señalar el informe preventivo antes de recomendar el inicio?",
    "options": [
      "Diferenciar perfeccionamiento de requisitos de ejecución y verificar los soportes presupuestales y aprobación de garantía exigibles antes de la prestación.",
      "Tratar la firma como autorización suficiente de ejecución sin verificar otros presupuestos.",
      "Considerar inexistente todo contrato firmado que todavía no tenga acta de inicio, sin examinar el art. 41."
    ],
    "rationales": [
      "La celebración y la ejecución tienen presupuestos diferenciados.",
      "La firma no sustituye requisitos adicionales de ejecución.",
      "La falta de inicio no implica automáticamente falta de perfeccionamiento."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 80/1993 arts. 23–26, 40–43; Ley 1150/2007 art. 2; Decreto 1082/2015. La celebración y la ejecución tienen presupuestos diferenciados. Primera alternativa incorrecta: La firma no sustituye requisitos adicionales de ejecución. Segunda alternativa incorrecta: La falta de inicio no implica automáticamente falta de perfeccionamiento."
  }
],
  'pgn-m51': [
  {
    "number": 1,
    "caseText": "Una veeduría advierte que un pliego exige una certificación que solo posee un proveedor conocido. Los estudios no explican su necesidad, pero la entidad aporta después un informe técnico que describe riesgos de interoperabilidad y menciona alternativas equivalentes aún no evaluadas. Se acerca el cierre y la PGN debe valorar la alerta sin asumir la evaluación de las ofertas.",
    "stem": "¿Qué actuación preventiva corresponde frente al requisito cuestionado y la nueva información?",
    "options": [
      "Concluir corrupción y ordenar la exclusión del proveedor que posee la certificación sin investigar hechos ni competencia.",
      "Aceptar el requisito sin análisis adicional porque existe un informe técnico, aunque no haya evaluado alternativas.",
      "Contrastar necesidad, proporcionalidad y alternativas, pedir justificación y corrección publicada cuando proceda, y verificar el efecto competitivo sin declarar direccionamiento probado."
    ],
    "rationales": [
      "La señal de riesgo no demuestra responsabilidad ni habilita excluir oferentes desde PGN.",
      "La mera existencia de un informe no acredita proporcionalidad.",
      "La selección objetiva requiere justificación verificable de requisitos; el informe nuevo debe contrastarse."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 80/1993 arts. 24–25; Ley 1150/2007 art. 5; Decreto 1082/2015. La selección objetiva requiere justificación verificable de requisitos; el informe nuevo debe contrastarse. Primera alternativa incorrecta: La señal de riesgo no demuestra responsabilidad ni habilita excluir oferentes desde PGN. Segunda alternativa incorrecta: La mera existencia de un informe no acredita proporcionalidad."
  }
],
  'pgn-m52': [
  {
    "number": 1,
    "caseText": "Un supervisor encuentra que el contratista no entregó dos productos dentro del plazo pactado y presenta informe con documentos y comunicaciones. El ordenador solicita descontar inmediatamente una multa de la factura, sin citar a audiencia al contratista ni al garante cuando corresponda. El expediente incluye cláusula de multas y la entidad está sometida al procedimiento del artículo 86 de la Ley 1474.",
    "stem": "¿Qué ruta distingue informe de supervisión y decisión sancionatoria contractual?",
    "options": [
      "Descontar la multa con la sola firma del supervisor porque el informe prueba automáticamente el incumplimiento sancionable.",
      "Remitir el informe sustentado a la autoridad competente y tramitar la audiencia con garantías, prueba y decisión motivada, reconociendo el recurso previsto.",
      "Omitir toda actuación contractual porque únicamente un juez puede conocer incumplimientos de contratos estatales."
    ],
    "rationales": [
      "La certificación o informe no sustituye el debido proceso.",
      "El art. 86 regula el procedimiento con audiencia y decisión competente; el informe es soporte.",
      "La entidad habilitada puede ejercer facultades contractuales conforme a ley."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 1474/2011 arts. 83–86; Ley 80/1993 art. 40; Ley 1150/2007 art. 17. El art. 86 regula el procedimiento con audiencia y decisión competente; el informe es soporte. Primera alternativa incorrecta: La certificación o informe no sustituye el debido proceso. Segunda alternativa incorrecta: La entidad habilitada puede ejercer facultades contractuales conforme a ley."
  }
],
  'pgn-m53': [
  {
    "number": 1,
    "caseText": "Un integrante de una unión temporal incurre en una inhabilidad sobreviniente bajo la regla general del artículo 9. Los demás miembros ofrecen recibir directamente su participación y solicitan aprobación para redistribuirla entre ellos. El expediente no acredita excepción especial y la entidad debe revisar el mecanismo antes de adoptar una decisión sobre la continuidad del contrato.",
    "stem": "¿Cuál alternativa corresponde al supuesto específico de integrante de unión temporal?",
    "options": [
      "Examinar cesión de la participación a un tercero habilitado con autorización escrita de la entidad, sin permitir cesión entre integrantes de la unión temporal.",
      "Redistribuir libremente la participación entre miembros porque la unión temporal ya fue seleccionada.",
      "Ordenar automáticamente liquidar todo el contrato sin evaluar la solución prevista por el art. 9."
    ],
    "rationales": [
      "El art. 9 contempla cesión a tercero y prohíbe cesión entre miembros.",
      "La selección anterior no elimina la restricción sobre la cesión.",
      "El supuesto legal prevé una alternativa a la terminación automática."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 80/1993 arts. 8–9; CPACA arts. 11–12; CGD art. 44. El art. 9 contempla cesión a tercero y prohíbe cesión entre miembros. Primera alternativa incorrecta: La selección anterior no elimina la restricción sobre la cesión. Segunda alternativa incorrecta: El supuesto legal prevé una alternativa a la terminación automática."
  }
],
  'pgn-m54': [
  {
    "number": 1,
    "caseText": "Una entidad recibe denuncias por un patrón de pagos atípicos y las registra en un archivo accesible a todo el personal, con nombres y teléfonos de informantes. El equipo de riesgos identifica operaciones que requieren contraste documental, pero su director quiere publicar los datos completos y clasificar como responsables a quienes figuran en el tablero antes de revisar los soportes.",
    "stem": "¿Qué actuación concilia transparencia, protección de información y análisis de señales?",
    "options": [
      "Difundir todos los identificadores y etiquetas de responsabilidad porque la transparencia prevalece sin excepción.",
      "Eliminar las denuncias y no revisar pagos porque la información contiene datos personales.",
      "Restringir datos protegidos, preservar fuentes y verificar operaciones y controles; comunicar resultados agregados cuando proceda y canalizar hechos relevantes por competencia."
    ],
    "rationales": [
      "La publicidad no elimina restricciones ni permite prejuzgar.",
      "La protección de datos no exige destruir información útil legalmente custodiada.",
      "Transparencia y protección de datos coexisten; la señal requiere análisis y ruta competente."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 1474/2011 art. 73 modificado por Ley 2195/2022 art. 31; Decreto 1122/2024; Ley 1712/2014. Transparencia y protección de datos coexisten; la señal requiere análisis y ruta competente. Primera alternativa incorrecta: La publicidad no elimina restricciones ni permite prejuzgar. Segunda alternativa incorrecta: La protección de datos no exige destruir información útil legalmente custodiada."
  }
],
  'pgn-m55': [
  {
    "number": 1,
    "caseText": "En un expediente aparecen una captura de visor público, el plano anexo a un acuerdo y una capa descargada sin metadatos. La captura sitúa aparentemente una obra fuera de un perímetro; el plano tiene otra escala. La jefatura pide declarar incumplimiento antes de verificar qué cartografía fue adoptada y si la precisión permite ubicar la construcción. Existe acceso autorizado al archivo oficial.",
    "stem": "¿Qué producto técnico permite sustentar el riesgo territorial sin confundir una visualización con el instrumento normativo adoptado?",
    "options": [
      "Elegir la captura por ser la más reciente.",
      "Identificar acto y plano oficial, validar escala y referencia, documentar incertidumbre y contrastar con la autoridad.",
      "Descartar toda fuente geográfica por no ser texto normativo."
    ],
    "rationales": [
      "El visor no sustituye el acto adoptado.",
      "La validez normativa y la precisión espacial son controles distintos.",
      "La cartografía puede ser útil si se verifica su alcance."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Constitución arts. 287–288, 311 y 313; Ley 388 arts. 9–10, 24 y 30–35; Ley 2294 art. 32. La validez normativa y la precisión espacial son controles distintos. Primera alternativa incorrecta: El visor no sustituye el acto adoptado. Segunda alternativa incorrecta: La cartografía puede ser útil si se verifica su alcance."
  }
],
  'pgn-m56': [
  {
    "number": 1,
    "caseText": "La oportunidad sube de 60 % a 75 % con igual ficha y población comparable. La meta es 90 %. Un informe dice que la mejora relativa es 15 % y propone cerrar el plan por considerar alcanzado el objetivo. Los datos permiten revisar los casos tardíos por dependencia; todavía no se evaluó la causa ni se documentó una acción que explique el cambio entre períodos.",
    "stem": "¿Cómo interpretar el cambio en puntos porcentuales, la variación relativa y la brecha frente a la meta institucional?",
    "options": [
      "Aumento de 15 puntos porcentuales, 25 % relativo y brecha de 15 puntos frente a meta; analizar causas.",
      "Mejora relativa de 15 % y cumplimiento total de la meta.",
      "Reducción de 25 puntos porcentuales en el incumplimiento."
    ],
    "rationales": [
      "La diferencia es 15 y 15/60 es 25 %; aún falta la meta.",
      "Confunde unidades y logro de objetivo.",
      "El incumplimiento cae de 40 a 25: 15 puntos."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Decreto 1499/2017 art. 2.2.22.3.4; Ley 87/1993; SGC PGN. La diferencia es 15 y 15/60 es 25 %; aún falta la meta. Primera alternativa incorrecta: Confunde unidades y logro de objetivo. Segunda alternativa incorrecta: El incumplimiento cae de 40 a 25: 15 puntos."
  }
],
  'pgn-m57': [
  {
    "number": 1,
    "caseText": "La acción de mejora frente a errores de informes consistió en una capacitación. Todos asistieron, pero se detectaron errores semejantes después; no se midió tasa ni se revisó si la plantilla inducía inconsistencias. El líder propone cerrar por asistencia completa. Se dispone de muestras comparables anteriores y posteriores y del registro de cambios del formato institucional utilizado.",
    "stem": "¿Qué revisión de eficacia corresponde realizar antes de cerrar la acción de mejora en el ciclo PHVA?",
    "options": [
      "Cerrar porque se ejecutó la capacitación.",
      "Repetir la capacitación indefinidamente sin estudiar la causa.",
      "Medir recurrencia, revisar causa y ajustar la acción si no fue eficaz."
    ],
    "rationales": [
      "La asistencia no mide reducción del error.",
      "Una acción repetida no sustituye análisis causal.",
      "Actividad y eficacia son controles diferentes."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: SGC PGN; Resolución 329/2021; PHVA. Actividad y eficacia son controles diferentes. Primera alternativa incorrecta: La asistencia no mide reducción del error. Segunda alternativa incorrecta: Una acción repetida no sustituye análisis causal."
  }
],
  'pgn-m58': [
  {
    "number": 1,
    "caseText": "Un archivo de gestión se queda sin espacio y propone eliminar expedientes electrónicos con más de cinco años. La TRD establece tiempos diferentes según serie y existen trámites todavía abiertos. El inventario permite individualizar los expedientes, pero no se comprobó el cierre ni la autorización de disposición final. La oficina quiere liberar almacenamiento antes de hacer la revisión archivística.",
    "stem": "¿Qué controles archivísticos deben verificarse antes de autorizar transferencia o disposición final de los expedientes?",
    "options": [
      "Borrar todo lo anterior a cinco años.",
      "Identificar serie y TRD aplicable, revisar cierre y restricciones, y seguir transferencia o disposición autorizada con inventario.",
      "Mover archivos a papelera compartida y dar por cumplida disposición."
    ],
    "rationales": [
      "Un plazo arbitrario no sustituye TRD.",
      "La retención y disposición se determinan por instrumentos y procedimiento.",
      "La disposición exige constancias y controles."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 594/2000 arts. 21–26; Acuerdo AGN 001/2024; Ley 527 arts. 8–12. La retención y disposición se determinan por instrumentos y procedimiento. Primera alternativa incorrecta: Un plazo arbitrario no sustituye TRD. Segunda alternativa incorrecta: La disposición exige constancias y controles."
  }
],
  'pgn-m59': [
  {
    "number": 1,
    "caseText": "Un informe de cuarenta páginas presenta diferencias de una base institucional, pero omite consultas, filtros, versión y filas de soporte. La copia Word incluye comentarios con datos personales de terceros. La dirección pide enviarla fuera de la institución sin revisar la autorización ni el expediente. Se conservan las fuentes y el analista puede describir los parámetros de procesamiento utilizados.",
    "stem": "¿Qué ajustes hacen reproducible el informe y protegen los datos que no deben llegar al destinatario externo?",
    "options": [
      "Documentar encargo, fuentes, método, resultados y límites, anexos trazables y revisar reserva y metadatos de copia de entrega.",
      "Enviar íntegro porque extensión y comentarios demuestran rigor.",
      "Eliminar fuentes, anexos y método para evitar exposición."
    ],
    "rationales": [
      "La calidad requiere reproducibilidad y divulgación controlada.",
      "Extensión no acredita rigor ni autoriza exposición.",
      "Proteger datos no exige destruir soportes."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 1755 arts. 14, 20–21, 25–26; Ley 1712; CGD arts. 193–195; perfil 104. La calidad requiere reproducibilidad y divulgación controlada. Primera alternativa incorrecta: Extensión no acredita rigor ni autoriza exposición. Segunda alternativa incorrecta: Proteger datos no exige destruir soportes."
  }
],
  'pgn-m60': [
  {
    "number": 1,
    "caseText": "Un servidor cambia de funciones y conserva permisos de aprobación de su cargo anterior, además de adquirir permisos de creación de solicitudes. Puede crear y aprobar la misma operación. El administrador sostiene que MFA elimina el riesgo de uso indebido y no necesita modificar permisos. Los responsables funcionales pueden validar una matriz de roles sin suspender todo el servicio.",
    "stem": "¿Qué ajuste de permisos controla el conflicto de funciones sin confundir autenticación multifactor con autorización?",
    "options": [
      "Mantener privilegios acumulados porque MFA garantiza uso correcto.",
      "Desactivar todas las cuentas del área sin evaluar roles.",
      "Revisar permisos con responsables, retirar innecesarios, separar creación y aprobación, documentar y mantener MFA."
    ],
    "rationales": [
      "MFA no restringe acciones autorizadas.",
      "El control debe ser proporcional y preservar continuidad.",
      "Autenticación y autorización son controles distintos."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 1581 arts. 4, 17–18; MSPI Resolución 02277/2025; MRAE v3. Autenticación y autorización son controles distintos. Primera alternativa incorrecta: MFA no restringe acciones autorizadas. Segunda alternativa incorrecta: El control debe ser proporcional y preservar continuidad."
  }
],
  'pgn-m61': [
  {
    "number": 1,
    "caseText": "El sistema registra autenticación exitosa con MFA y quince minutos después una modificación asociada a la misma cuenta. La sesión puede permanecer activa y otras personas tenían acceso físico al equipo. Todavía no hay registros de aplicación que vinculen la solicitud con sesión individual. El instructor pide que el informe afirme que el titular ejecutó personalmente cada acción registrada.",
    "stem": "¿Qué conclusión técnica permite distinguir el evento autenticado y la modificación registrada de la autoría física del titular?",
    "options": [
      "Afirmar que MFA demuestra presencia física en toda acción posterior.",
      "Invalidar todos los registros porque existía acceso de terceros.",
      "Informar eventos asociados a cuenta, verificar continuidad de sesión y fuentes adicionales antes de atribución personal."
    ],
    "rationales": [
      "MFA no prueba quién ejecutó cada acción de una sesión.",
      "Una alternativa no elimina el valor de los registros.",
      "Los logs prueban eventos técnicos bajo condiciones, no identidad absoluta."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147 y 159; NIST SP 800-92. Los logs prueban eventos técnicos bajo condiciones, no identidad absoluta. Primera alternativa incorrecta: MFA no prueba quién ejecutó cada acción de una sesión. Segunda alternativa incorrecta: Una alternativa no elimina el valor de los registros."
  }
],
  'pgn-m62': [
  {
    "number": 1,
    "caseText": "Se requiere recuperar el valor anterior de una fila. La base actual conserva solo el último valor y hay backups diarios, sin comprobar su consistencia ni retención de logs transaccionales. El equipo quiere restaurar un respaldo sobre producción para inspeccionarlo y atribuir el cambio a una persona. Existe un entorno aislado donde puede realizarse una restauración autorizada y documentada.",
    "stem": "¿Qué método permite reconstruir un estado anterior sin sobrescribir producción ni exceder los límites de atribución?",
    "options": [
      "Verificar backups y logs, restaurar copia aislada, comparar estados y registrar límites temporales y de atribución.",
      "Restaurar sobre producción porque el respaldo es histórico.",
      "Inferir autor y hora exacta únicamente por diferencia entre snapshots."
    ],
    "rationales": [
      "Reconstrucción requiere preservar producción y verificar resolución temporal.",
      "Sobrescribir puede alterar evidencia y disponibilidad.",
      "Dos estados no prueban identidad ni instante exacto."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147–159; NIST SP 800-86. Reconstrucción requiere preservar producción y verificar resolución temporal. Primera alternativa incorrecta: Sobrescribir puede alterar evidencia y disponibilidad. Segunda alternativa incorrecta: Dos estados no prueban identidad ni instante exacto."
  }
],
  'pgn-m63': [
  {
    "number": 1,
    "caseText": "Dos PDF tienen idéntico nombre y apariencia, pero huellas SHA-256 diferentes. Uno fue descargado del sistema de gestión y otro convertido por una herramienta que cambia compresión y metadatos. El despacho pide declarar falso el segundo sin comparar firmas ni versiones. Se conservan las dos copias y existe registro de la transformación utilizada para preparar la versión de consulta.",
    "stem": "¿Cómo interpretar huellas distintas sin confundir diferencia binaria, transformación legítima y falsedad documental?",
    "options": [
      "Declarar falso todo archivo con hash diferente.",
      "Considerarlos binariamente idénticos porque se ven iguales.",
      "Registrar procedencia y huellas, comparar contenido, estructura, metadatos y firmas, y verificar transformación."
    ],
    "rationales": [
      "Una transformación legítima puede cambiar huella.",
      "Apariencia no demuestra identidad binaria.",
      "Hashes distintos prueban diferencia de bytes, no falsedad."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 527 arts. 7–12 y 28; RFC 5322, 6376, 8601, 7208 y 9989. Hashes distintos prueban diferencia de bytes, no falsedad. Primera alternativa incorrecta: Una transformación legítima puede cambiar huella. Segunda alternativa incorrecta: Apariencia no demuestra identidad binaria."
  }
],
  'pgn-m64': [
  {
    "number": 1,
    "caseText": "La autoridad solicita extraer estadísticas de registros existentes en archivo institucional. No designó perito ni decretó examen especializado. El producto se incorpora como informe de datos de archivo y se solicita aclarar una columna. La secretaría quiere tramitar toda controversia como objeción por error grave por titularse informe informático. El expediente conserva el acto de solicitud y el informe recibido.",
    "stem": "¿Qué trámite de contradicción corresponde al informe de datos de archivo, atendiendo su naturaleza y no el título informático?",
    "options": [
      "Aplicar régimen pericial a cualquier documento informático.",
      "Aplicar naturaleza y forma de incorporación; para informe de archivo, traslado y aclaraciones del art. 195, sin objeción por error grave.",
      "Negar toda aclaración porque no es dictamen."
    ],
    "rationales": [
      "Informe de archivo y dictamen son distintos.",
      "La naturaleza del medio determina trámite, no el título.",
      "Art. 195 contempla aclaración y complementación."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Perfil 104; CGD arts. 159, 177–184, 193–195; Ley 527; NIST SP 800-86. La naturaleza del medio determina trámite, no el título. Primera alternativa incorrecta: Informe de archivo y dictamen son distintos. Segunda alternativa incorrecta: Art. 195 contempla aclaración y complementación."
  }
],
  'pgn-m65': [
  {
    "number": 1,
    "caseText": "Una matriz de hallazgos está incluida en un Word con encabezados visuales de colores, celdas fusionadas y un gráfico sin descripción. El PDF anterior se generó como imágenes y no permite seleccionar texto ni navegar por títulos. Se requiere entregar un informe accesible a usuarios internos y externos, manteniendo las cifras y el contenido validado por la oficina competente.",
    "stem": "¿Qué ajuste mejora accesibilidad y conserva el contenido verificable en los formatos de entrega?",
    "options": [
      "Usar títulos semánticos, tablas con encabezados identificables y descripciones de gráficos, revisar accesibilidad y exportar PDF comprobando texto y navegación.",
      "Mantener tablas complejas y depender solo del contraste de colores para distinguir resultados.",
      "Escanear nuevamente el documento para que todos vean exactamente la misma diagramación."
    ],
    "rationales": [
      "La accesibilidad depende de estructura, texto y representación no exclusivamente visual.",
      "Color sin otra señal no transmite toda la información.",
      "Escanear no garantiza acceso al texto ni estructura de lectura."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Microsoft Word: estilos, revisión y accesibilidad; Ley 594/2000; perfil 104. La accesibilidad depende de estructura, texto y representación no exclusivamente visual. Primera alternativa incorrecta: Color sin otra señal no transmite toda la información. Segunda alternativa incorrecta: Escanear no garantiza acceso al texto ni estructura de lectura."
  }
],
  'pgn-m66': [
  {
    "number": 1,
    "caseText": "Una hoja de cálculo consolida 420 registros de actuaciones institucionales. Después de filtrar por regional, la suma no coincide con las filas visibles; además una referencia relativa a la tasa se desplaza al copiar y varios expedientes aparecen en más de una actuación. El directivo solicita ajustar manualmente el total para igualarlo a un informe firmado. Se dispone de la tabla fuente y de la ficha del indicador.",
    "stem": "¿Qué comprobación debe realizarse antes de utilizar la cifra en una conclusión de control de gestión?",
    "options": [
      "Conservar el total firmado y ajustar manualmente la diferencia actual para asegurar consistencia.",
      "Auditar rangos, referencias y tipo de subtotal, definir unidad de análisis, reconciliar con fuente y documentar correcciones.",
      "Eliminar filas ocultas y duplicados de expediente de la fuente antes de sumar todas las restantes."
    ],
    "rationales": [
      "Una firma no valida el cálculo actual.",
      "Combina control de fórmula, visibilidad, unidad y trazabilidad.",
      "La eliminación puede destruir observaciones legítimas y evidencia."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Microsoft Excel: referencias, SUBTOTALES, SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO; perfil 104. Combina control de fórmula, visibilidad, unidad y trazabilidad. Primera alternativa incorrecta: Una firma no valida el cálculo actual. Segunda alternativa incorrecta: La eliminación puede destruir observaciones legítimas y evidencia."
  }
],
  'pgn-m67': [
  {
    "number": 1,
    "caseText": "Dos regionales tienen 20 quejas cada una; la primera atendió 2.000 casos y la segunda 100, con la misma definición y ventana temporal. En la segunda, ocho de las veinte quejas corresponden a retrasos. Se pide comparar proporciones y estimar, dentro de las quejas de la segunda, qué fracción trata de retrasos. No se cuenta con información sobre gravedad ni causas de las diferencias.",
    "stem": "¿Cuál interpretación calcula correctamente las tasas y la proporción condicional sin afirmar causalidad?",
    "options": [
      "Ambas tasas son iguales por tener veinte quejas y los retrasos representan 8 % de las quejas.",
      "Tasas 1 % y 20 %; 8/20=40 % de las quejas de la segunda son retrasos; revisar contexto antes de inferir causas.",
      "La segunda tiene tasa 20 % y todos los retrasos explican causalmente la diferencia regional."
    ],
    "rationales": [
      "Ignora denominadores regionales y usa 100 en lugar de 20 para la condición.",
      "Cada denominador responde una pregunta distinta; la causalidad requiere soporte adicional.",
      "El cálculo correcto de una tasa no establece una explicación causal."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Estadística descriptiva y metodología de indicadores; perfil 104; SGC PGN. Cada denominador responde una pregunta distinta; la causalidad requiere soporte adicional. Primera alternativa incorrecta: Ignora denominadores regionales y usa 100 en lugar de 20 para la condición. Segunda alternativa incorrecta: El cálculo correcto de una tasa no establece una explicación causal."
  }
],
  'pgn-m68': [
  {
    "number": 1,
    "caseText": "Un equipo encuentra aumento de retrasos después de implementar un formulario digital. En el mismo mes cambió el volumen de solicitudes y se asignaron expedientes más complejos a una oficina. Existe historial previo y posterior, datos de carga y registros de cambios del proceso. La coordinación solicita un informe que identifique qué debe contrastarse antes de atribuir el incremento a una única causa.",
    "stem": "¿Qué plan de investigación permite valorar la hipótesis tecnológica y explicaciones alternativas?",
    "options": [
      "Definir variables y comparación temporal, controlar carga y complejidad cuando sea posible, contrastar fuentes y declarar límites de inferencia causal.",
      "Atribuir el aumento al formulario por haber ocurrido después de implementarlo.",
      "Comparar solamente los casos complejos posteriores con todos los casos anteriores sin ajustar composición."
    ],
    "rationales": [
      "La secuencia temporal no basta y los factores concurrentes pueden confundir.",
      "No examina explicaciones alternativas.",
      "Compara poblaciones no equivalentes."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD arts. 13, 147–151 y 159; guía PGN de investigación; metodología aplicada. La secuencia temporal no basta y los factores concurrentes pueden confundir. Primera alternativa incorrecta: No examina explicaciones alternativas. Segunda alternativa incorrecta: Compara poblaciones no equivalentes."
  }
],
  'pgn-m69': [
  {
    "number": 1,
    "caseText": "Una síntesis relaciona tres fuentes de un mismo pago: una fecha contable, una fecha bancaria y un acta de recibo. El reporte las trata como fechas de un único evento y presenta una contradicción de diez días. El expediente contiene definiciones de cada registro y sus constancias, pero no se compararon. La oficina debe informar tanto lo comprobado como lo todavía pendiente de explicación.",
    "stem": "¿Cómo organizar la síntesis para conservar significado y trazabilidad de cada fuente?",
    "options": [
      "Seleccionar la fecha más reciente y reemplazar las otras para unificar el informe.",
      "Presentar todas las fechas como prueba de fraude sin comprobar qué evento representa cada una.",
      "Separar hechos y fechas según evento, identificar fuente y definición, contrastar secuencia y dejar expresas discrepancias no resueltas."
    ],
    "rationales": [
      "Unificar por fecha destruye significado.",
      "Una discrepancia aparente no demuestra conducta irregular.",
      "La conciliación exige semántica y temporalidad, además de fuente."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD arts. 148, 159; perfil 104; SGC PGN. La conciliación exige semántica y temporalidad, además de fuente. Primera alternativa incorrecta: Unificar por fecha destruye significado. Segunda alternativa incorrecta: Una discrepancia aparente no demuestra conducta irregular."
  }
],
  'pgn-m70': [
  {
    "number": 1,
    "caseText": "La coordinación pide entregar un informe hoy y otro de mayor alcance en dos semanas. El primero tiene un término inmodificable; el segundo depende de verificaciones que aún no llegan. El profesional detecta que ambos compiten por el mismo recurso de análisis y dispone de un calendario de entregas. Un compañero sugiere registrar como terminado el segundo para evitar una alerta de seguimiento.",
    "stem": "¿Qué conducta combina responsabilidad institucional y organización del trabajo sin comprometer la calidad?",
    "options": [
      "Registrar ambos como completos y terminar las revisiones después del reporte de seguimiento.",
      "Priorizar el término fijo, comunicar restricciones, acordar plan y dependencias del segundo y conservar su estado real hasta cumplir controles.",
      "Aceptar todas las tareas sin reorganizar ni comunicar la capacidad insuficiente."
    ],
    "rationales": [
      "Un estado ficticio contradice objetivos y controles.",
      "Alinea metas, programación, transparencia y seguimiento.",
      "No anticipar capacidad aumenta riesgo de incumplimiento."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Diccionario de competencias PGN, páginas 7 y 28 del PDF; perfil 104. Alinea metas, programación, transparencia y seguimiento. Primera alternativa incorrecta: Un estado ficticio contradice objetivos y controles. Segunda alternativa incorrecta: No anticipar capacidad aumenta riesgo de incumplimiento."
  }
],
  'pgn-m71': [
  {
    "number": 1,
    "caseText": "Cuatro expedientes presentan un error similar después de una actualización de software. Dos expedientes que usan la misma versión no presentan el error y tienen un flujo distinto de aprobación. El profesional debe orientar un estudio institucional y explicar qué relaciones conviene evaluar antes de proponer un procedimiento uniforme. Los registros y manuales de ambas rutas están disponibles para contraste.",
    "stem": "¿Qué combinación de conductas integra Investigación B y Pensamiento Conceptual A?",
    "options": [
      "Estudiar conjuntamente casos con y sin error, contrastar versión y flujo, explicar el mecanismo posible y proponer directrices verificables según los resultados.",
      "Afirmar que la versión es la causa común por aparecer en los cuatro expedientes afectados.",
      "Estudiar cada expediente sin comparación y evitar formular orientaciones institucionales."
    ],
    "rationales": [
      "Combina método contrastable y explicación de relaciones con directrices.",
      "Los casos sin error son evidencia relevante contra una explicación simple.",
      "Renuncia al aprendizaje transversal que exige el problema."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Diccionario PGN, páginas 25 y 35 del PDF; perfil 104. Combina método contrastable y explicación de relaciones con directrices. Primera alternativa incorrecta: Los casos sin error son evidencia relevante contra una explicación simple. Segunda alternativa incorrecta: Renuncia al aprendizaje transversal que exige el problema."
  }
],
  'pgn-m72': [
  {
    "number": 1,
    "caseText": "Una validación obligatoria tarda tres días y genera un cuello de botella. El equipo propone eliminarla de la lista de chequeo para acelerar el indicador. Hay datos sobre volumen, errores detectados por esa validación y alternativas técnicas que podrían reducir tiempos manteniendo el requisito. La jefatura solicita una recomendación que permita mejorar resultados sin afectar los derechos de los usuarios.",
    "stem": "¿Qué actuación combina Orientación a Resultados A y Cumplimiento de Parámetros B?",
    "options": [
      "Eliminar la validación inmediatamente por considerarla contraria a la meta de oportunidad.",
      "Conservar el proceso sin evaluar ninguna alternativa porque cumplir un procedimiento impide innovar.",
      "Diseñar una mejora con meta, recursos y seguimiento, preservar el control exigido y tramitar cualquier cambio por autoridad competente."
    ],
    "rationales": [
      "Rapidez no habilita eliminar requisitos obligatorios.",
      "La mejora legítima puede optimizar el cumplimiento.",
      "Mejorar resultados y mantener parámetros son objetivos compatibles."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Diccionario PGN, páginas 12 y 29 del PDF; perfil 104. Mejorar resultados y mantener parámetros son objetivos compatibles. Primera alternativa incorrecta: Rapidez no habilita eliminar requisitos obligatorios. Segunda alternativa incorrecta: La mejora legítima puede optimizar el cumplimiento."
  }
],
  'pgn-m73': [
  {
    "number": 1,
    "caseText": "Un aspirante obtiene retroalimentación en los casos comportamentales de Umbral y la plataforma le muestra qué comportamientos se relacionan con los niveles del perfil. El usuario desea transformar el resultado en un supuesto percentil oficial y comparar su personalidad con otros aspirantes. No existe una calibración psicométrica de estos ejercicios ni un baremo de la prueba específica incorporado al curso.",
    "stem": "¿Qué conclusión permite utilizar la práctica sin atribuirle validez psicométrica inexistente?",
    "options": [
      "Convertir el porcentaje de aciertos en percentil porque ambos se expresan entre cero y cien.",
      "Interpretar los resultados como retroalimentación didáctica y reflexión sobre conductas; no inferir percentiles, diagnóstico ni probabilidad oficial de aprobar.",
      "Concluir que los casos carecen de toda utilidad si no predicen la puntuación oficial."
    ],
    "rationales": [
      "Porcentaje y percentil son medidas diferentes.",
      "El instrumento didáctico no está calibrado para inferencias psicométricas.",
      "La reflexión y comprensión del perfil tienen utilidad independiente."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Perfil 104 y diccionario PGN; ejercicios didácticos, no modelo psicométrico oficial. El instrumento didáctico no está calibrado para inferencias psicométricas. Primera alternativa incorrecta: Porcentaje y percentil son medidas diferentes. Segunda alternativa incorrecta: La reflexión y comprensión del perfil tienen utilidad independiente."
  }
],
  'pgn-m74': [
  {
    "number": 1,
    "caseText": "Una dependencia recibe una solicitud de copias de actuaciones. Parte de los documentos está sujeta a reserva legal y el solicitante no acredita calidad procesal especial; otra parte es pública y separable. La oficina conoce la norma de reserva y puede generar una versión de entrega sin datos protegidos. Un compañero propone negar toda información; otro sugiere entregar el expediente completo por transparencia.",
    "stem": "¿Cómo aplicar C-E-P-P-A para escoger una respuesta que respete competencia, acceso y restricciones legales?",
    "options": [
      "Identificar calidad del solicitante y régimen aplicable, separar información pública y protegida, motivar restricciones y entregar lo procedente dentro del término.",
      "Negar todo por pertenecer a un expediente que contiene alguna información reservada.",
      "Entregar todo porque el derecho de acceso elimina cualquier reserva legal."
    ],
    "rationales": [
      "La decisión requiere analizar régimen, hechos y medida proporcionada.",
      "La reserva parcial no obliga a negar información separable.",
      "La transparencia no elimina restricciones legalmente previstas."
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD arts. 208–211, 220–225; perfil 104; método didáctico propio de Umbral. La decisión requiere analizar régimen, hechos y medida proporcionada. Primera alternativa incorrecta: La reserva parcial no obliga a negar información separable. Segunda alternativa incorrecta: La transparencia no elimina restricciones legalmente previstas."
  }
],
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
