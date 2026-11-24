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
      "Añadir más diligencias sin modificar el planteamiento inicial, para que el número de fuentes respalde la conclusión.",
      "Reemplazar toda la cronología por el dato de la copia y dar por resuelta la atribución personal.",
      "Relacionar cada hecho con hipótesis, fuente, prueba de contraste, resultado y vacío; revisar fechas y prioridades a partir de la copia y documentar las razones del cambio."
    ],
    "rationales": [
      "El volumen no reemplaza pertinencia ni actualización.",
      "Un dato temporal no acredita identidad o responsabilidad.",
      "Un plan verificable relaciona hechos y fuentes y registra evidencia contradictoria."
    ],
    "correctOptionId": "c",
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
      "Acreditar el hecho indicador como unidad, explicar la inferencia hacia la autoría y contrastar automatismos y fuentes independientes antes de asignar mérito al conjunto.",
      "Descartar todo uso de indicios en disciplina porque no integran la enumeración de medios de prueba del art. 149."
    ],
    "rationales": [
      "Dividir el mismo indicador no crea tres hechos autónomos.",
      "Arts. 196–199 regulan hecho indicador, unidad y valoración; art. 149 permite considerar indicios al apreciar pruebas.",
      "El CGD sí contempla los indicios en la valoración."
    ],
    "correctOptionId": "b",
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
      "Negar incluso la consulta al defensor porque ningún sujeto procesal puede conocer documentos reservados.",
      "Garantizar la consulta del sujeto procesal conforme al régimen, conservar los documentos separados y reservados y aplicar la prohibición de expedir copias prevista para ese supuesto."
    ],
    "rationales": [
      "La reserva subsiste aun cuando se permita consultar.",
      "La norma reconoce expresamente la consulta.",
      "El parágrafo del art. 192 diferencia consulta por sujetos procesales y prohibición de copias."
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, 187–195; Ley 527 arts. 8–12. El parágrafo del art. 192 diferencia consulta por sujetos procesales y prohibición de copias. Primera alternativa incorrecta: La reserva subsiste aun cuando se permita consultar. Segunda alternativa incorrecta: La norma reconoce expresamente la consulta."
  }
],
  'pgn-m41': [
  {
    "number": 1,
    "caseText": "En una versión libre un disciplinable acepta que estuvo presente en la oficina, pero no admite ejecutar la conducta investigada y decide guardar silencio sobre una pregunta. El acta no contiene confesión formal ni acreditación de que se cumplieran sus requisitos. El funcionario propone calificar la afirmación parcial como confesión completa y recomendar automáticamente una rebaja de sanción.",
    "stem": "¿Qué distinción debe hacerse entre versión libre y confesión con efectos procesales?",
    "options": [
      "Tratar cualquier admisión de presencia como aceptación integral de responsabilidad y otorgar rebaja automática.",
      "Valorar la afirmación dentro del conjunto, respetar el silencio y verificar los requisitos y oportunidad de los arts. 161–163 antes de reconocer confesión o beneficio.",
      "Descartar toda la versión porque el disciplinable no respondió todas las preguntas formuladas."
    ],
    "rationales": [
      "Presencia no equivale a confesión de la falta.",
      "La confesión exige condiciones legales y su mérito se valora racionalmente.",
      "El silencio no invalida el ejercicio de defensa."
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, 161–176; Constitución art. 33. La confesión exige condiciones legales y su mérito se valora racionalmente. Primera alternativa incorrecta: Presencia no equivale a confesión de la falta. Segunda alternativa incorrecta: El silencio no invalida el ejercicio de defensa."
  }
],
  'pgn-m42': [
  {
    "number": 1,
    "caseText": "En una investigación existen dos dictámenes sobre la integridad de un archivo. El segundo utiliza una herramienta diferente y contradice parcialmente al primero. No prosperó ninguna objeción por error grave. El instructor propone reemplazar automáticamente el primer dictamen por el más reciente, sin explicar las diferencias de método ni contrastar las conclusiones con los demás documentos del expediente.",
    "stem": "¿Cómo corresponde valorar ambos dictámenes bajo el art. 182?",
    "options": [
      "Apreciarlos conjuntamente, explicar solidez, precisión, método, idoneidad y contradicciones, relacionándolos con el resto de la prueba; no sustituir automáticamente el primero.",
      "Asignar valor exclusivo al segundo dictamen por su fecha posterior, aunque no haya prosperado objeción.",
      "Promediar las conclusiones de ambos sin examinar premisas ni calidad técnica para obtener una conclusión neutral."
    ],
    "rationales": [
      "Art. 182 establece apreciación conjunta de dictámenes, con excepción legal por objeción que prospere.",
      "La fecha no determina superioridad probatoria.",
      "Una media de conclusiones no reemplaza valoración metodológica."
    ],
    "correctOptionId": "a",
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
      "Finalizar sin recaudar ningún soporte porque toda inspección se limita a observar y no permite recibir testimonios.",
      "Registrar observaciones y manifestaciones en el acta, recibir el testimonio útil conforme al art. 185 en formulario distinto y recoger y conservar soportes con procedimientos de cadena de custodia."
    ],
    "rationales": [
      "El resumen no sustituye la diligencia testimonial prevista.",
      "La inspección sí puede incorporar elementos útiles bajo reglas legales.",
      "Los arts. 185–186 regulan acta, testimonio separado y preservación de elementos."
    ],
    "correctOptionId": "c",
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
