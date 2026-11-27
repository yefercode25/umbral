import type { Question } from '../../../src/types/course'

/** Reactivos de recuperación y aplicación, escritos a partir de las lecciones auditadas. */
type Item = readonly [caseText: string, stem: string, right: string, wrong1: string, wrong2: string, why: string, why1: string, why2: string, article: string, sources: readonly string[]]
const items: Record<string, Item> = {
  "pgn-m15-q1": [
    "",
    "¿Qué característica diferencia un acto definitivo de un acto de trámite?",
    "Resuelve el fondo o impide continuar la actuación.",
    "Toda decisión definitiva debe contener una sanción.",
    "Se identifica únicamente por la firma de la autoridad.",
    "El artículo 43 del CPACA atiende al efecto sobre el fondo o la continuación.",
    "La sanción es solo una posible decisión de fondo.",
    "La firma no determina por sí misma la naturaleza.",
    "CPACA, art. 43",
    [
      "cpaca"
    ]
  ],
  "pgn-m15-q2": [
    "Una dependencia firma una orden interna de incorporación de un documento al expediente, sin resolver la petición del interesado.",
    "¿Cómo se clasifica la orden por su función dentro de la actuación?",
    "Acto de trámite que prepara una decisión posterior.",
    "Acto definitivo que reconoce el derecho solicitado.",
    "Acto general que regula a todos los ciudadanos.",
    "Incorporar un documento impulsa la actuación sin resolverla.",
    "No existe reconocimiento del derecho en el supuesto.",
    "Su alcance es el expediente concreto, no una regulación general.",
    "CPACA, art. 43",
    [
      "cpaca"
    ]
  ],
  "pgn-m15-q3": [
    "Se revisa una resolución particular motivada, firmada por quien aparece como responsable. El expediente no demuestra que tenga atribución legal para decidir.",
    "¿Cuál es el aspecto de validez que debe verificarse en particular?",
    "La competencia de la autoridad que expidió el acto.",
    "La fecha de publicación de los actos generales.",
    "La duración del término para formular recursos.",
    "La competencia constituye un requisito distinto de publicidad y firmeza.",
    "El acto descrito es particular.",
    "El plazo de recursos no subsana falta de competencia.",
    "CPACA, art. 137",
    [
      "cpaca"
    ]
  ],
  "pgn-m15-q4": [
    "Un interesado recibe una resolución particular. Su texto no explica cuáles hechos y razones jurídicas sustentan la decisión desfavorable.",
    "¿Qué elemento de la decisión debe examinar el profesional?",
    "La motivación de la decisión y su fundamento probatorio.",
    "La fecha en que el documento quedó guardado.",
    "La cantidad de copias generadas por la dependencia.",
    "La motivación permite conocer las razones de la decisión.",
    "El almacenamiento no reemplaza las razones exigibles.",
    "La reproducción documental no explica el fundamento.",
    "CPACA, art. 42",
    [
      "cpaca"
    ]
  ],
  "pgn-m15-q5": [
    "Una resolución particular se notificó correctamente. Se comprueba después que la decisión fue adoptada por un funcionario carente de competencia.",
    "¿Qué diferencia debe mantener el análisis jurídico?",
    "La notificación válida no subsana la falta de competencia.",
    "La notificación convierte el defecto en un error formal inocuo.",
    "La falta de competencia impide que exista constancia de notificación.",
    "La eficacia y la legalidad del acto son cuestiones distintas.",
    "La notificación no atribuye potestades al funcionario.",
    "La constancia puede existir aunque el acto sea cuestionable.",
    "CPACA, arts. 67 y 137",
    [
      "cpaca"
    ]
  ],
  "pgn-m15-q6": [
    "Una resolución fue expedida, notificada y quedó en firme; todavía no se ha realizado el pago que ordena.",
    "¿Qué puede afirmarse con la información disponible?",
    "La firmeza no demuestra que se haya ejecutado materialmente el pago.",
    "El pago se presume efectuado desde la expedición de la resolución.",
    "La resolución solo adquirirá firmeza cuando el pago sea efectivo.",
    "Firmeza y ejecución material son momentos distintos.",
    "La expedición no prueba un desembolso.",
    "El artículo 87 no condiciona la firmeza al pago material.",
    "CPACA, arts. 87 y 89",
    [
      "cpaca"
    ]
  ],
  "pgn-m16-q1": [
    "",
    "¿Qué relación establece el artículo 34 del CPACA entre el procedimiento común y uno regulado por ley especial?",
    "Se respeta el procedimiento especial y el común opera en lo no previsto.",
    "El procedimiento común reemplaza siempre la legislación especial posterior.",
    "Ambos procedimientos se aplican simultáneamente a todos los actos.",
    "El artículo 34 reconoce los procedimientos especiales y la aplicación complementaria.",
    "No dispone la sustitución automática de normas especiales.",
    "La integración exige identificar el aspecto no regulado.",
    "CPACA, art. 34",
    [
      "cpaca"
    ]
  ],
  "pgn-m16-q2": [
    "En un expediente disciplinario se presenta una cuestión sobre recursos que ya está regulada de forma expresa por el Código General Disciplinario.",
    "¿Qué régimen debe examinarse primero para esa cuestión?",
    "La disposición especial del Código General Disciplinario.",
    "Las reglas de recursos de cualquier procedimiento administrativo ordinario.",
    "El régimen de recursos de los procesos judiciales civiles.",
    "La disposición especial gobierna el asunto que regula expresamente.",
    "No corresponde desplazarla por la regla general.",
    "El régimen civil no es la primera fuente de una cuestión expresamente disciplinaria.",
    "CPACA, art. 34; CGD, art. 22",
    [
      "cpaca",
      "ley-1952-2019"
    ]
  ],
  "pgn-m16-q3": [
    "Una persona formula una petición independiente de información ante una oficina que también adelanta investigaciones disciplinarias.",
    "¿Qué dato permite elegir inicialmente el régimen de respuesta?",
    "La naturaleza de lo solicitado y la calidad del peticionario.",
    "El nombre de la dependencia que recibió la comunicación.",
    "La duración de las investigaciones que adelanta la oficina.",
    "Debe clasificarse la actuación y revisar las restricciones especiales aplicables.",
    "La dependencia no determina por sí sola el régimen de cada solicitud.",
    "La duración de otra actuación no define el término de petición.",
    "CPACA, art. 34; Ley 1755/2015, arts. 13–14",
    [
      "cpaca",
      "ley-1755-2015"
    ]
  ],
  "pgn-m16-q4": [
    "Una autoridad observa una irregularidad en un trámite administrativo común antes de dictar la decisión final.",
    "¿Qué actuación permite el artículo 41 del CPACA?",
    "Corregir la irregularidad y ajustar la actuación a derecho antes de decidir.",
    "Declarar de inmediato la nulidad judicial de todo el expediente.",
    "Mantener la irregularidad hasta que un juez ordene corregirla.",
    "La autoridad puede corregir irregularidades antes de expedir el acto.",
    "La corrección administrativa no equivale a una sentencia judicial.",
    "No exige esperar una orden judicial para corregir.",
    "CPACA, art. 41",
    [
      "cpaca"
    ]
  ],
  "pgn-m16-q5": [
    "Se descubre que una regla del procedimiento especial que regula un asunto no contempla una situación accesoria. El operador propone importar un mecanismo del procedimiento común sin estudiar su compatibilidad.",
    "¿Qué examen falta realizar?",
    "Verificar el vacío, la remisión o integración aplicable y la compatibilidad de la regla.",
    "Elegir la regla común que establezca el término más breve.",
    "Excluir toda integración porque existe un procedimiento especial.",
    "La aplicación complementaria exige justificar el vacío y la compatibilidad.",
    "La brevedad no decide la aplicabilidad.",
    "Un régimen especial no excluye necesariamente toda integración.",
    "CPACA, art. 34; CGD, art. 22",
    [
      "cpaca",
      "ley-1952-2019"
    ]
  ],
  "pgn-m16-q6": [
    "Una actuación ordinaria cuenta con un procedimiento interno que impone una formalidad adicional, pero la ley regula de manera completa el requisito.",
    "¿Qué debe orientar la revisión de la exigencia interna?",
    "Su compatibilidad con la norma aplicable y la prohibición de imponer requisitos no autorizados.",
    "Su aplicación automática por haber sido adoptada por la jefatura.",
    "Su prevalencia sobre la ley por tratarse de una práctica institucional.",
    "La autoridad está sometida a la ley y no puede añadir requisitos prohibidos.",
    "La decisión interna no autoriza contrariar el ordenamiento.",
    "La práctica administrativa no prevalece sobre la ley.",
    "CPACA, arts. 3 y 9",
    [
      "cpaca"
    ]
  ],
  "pgn-m17-q1": [
    "",
    "¿Cómo deben clasificarse las pretensiones de una petición que reúne varias solicitudes?",
    "Por el objeto de cada pretensión, para determinar su régimen y término.",
    "Por el primer punto escrito, aplicando su término a todos.",
    "Por la extensión del documento y el número de anexos.",
    "Las modalidades tienen términos y requisitos propios.",
    "El orden de las pretensiones no cambia su naturaleza.",
    "La extensión y anexos no definen la modalidad.",
    "Ley 1755/2015, arts. 13–14",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m17-q2": [
    "Una petición escrita solicita una copia de una resolución y una opinión jurídica sobre la interpretación de una disposición, sin pedir una decisión individual.",
    "¿Qué términos generales corresponden, respectivamente, a las dos pretensiones?",
    "Diez días para la copia y treinta días para la consulta.",
    "Quince días para la copia y quince días para la consulta.",
    "Treinta días para la copia y diez días para la consulta.",
    "La solicitud de documentos y la consulta tienen términos especiales diferentes.",
    "El plazo general no sustituye los específicos.",
    "Los plazos están invertidos.",
    "Ley 1755/2015, art. 14",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m17-q3": [
    "Una oficina sin competencia recibe una petición y la remite conforme al artículo 21. El ciudadano solicita información sobre el inicio del término de respuesta.",
    "¿Desde cuándo se cuenta el término para resolver en la autoridad competente?",
    "Desde el día siguiente a la recepción por la autoridad competente.",
    "Desde el día en que la oficina original redactó su comunicación.",
    "Desde el vencimiento de cinco días de la remisión, siempre.",
    "El artículo 21 fija el inicio desde el día siguiente a la recepción por la competente.",
    "La redacción de la comunicación no acredita recepción.",
    "Los cinco días de traslado no sustituyen el hito de recepción.",
    "Ley 1755/2015, art. 21",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m17-q4": [
    "Un reporte presenta como contestada una petición porque existe un oficio firmado, pero no muestra constancia de haber comunicado la respuesta al solicitante.",
    "¿Qué soporte falta verificar antes de afirmar atención efectiva?",
    "La constancia del envío o comunicación y su oportunidad.",
    "La numeración consecutiva del oficio únicamente.",
    "La coincidencia entre el nombre del peticionario y el archivo.",
    "La atención efectiva exige comprobar comunicación oportuna.",
    "El consecutivo no prueba la comunicación.",
    "El nombre del archivo tampoco prueba la respuesta efectiva.",
    "Ley 1755/2015, arts. 13–14",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m17-q5": [
    "Una autoridad excepcionalmente no puede resolver a tiempo una petición general de quince días. Antes del vencimiento informa de forma motivada el nuevo plazo.",
    "¿Cuál es el límite máximo general del plazo razonable que puede señalar?",
    "Treinta días, equivalentes al doble del inicialmente previsto.",
    "Cuarenta y cinco días, adicionales al término inicial.",
    "Quince días hábiles más un plazo ilimitado por la complejidad.",
    "La ley impide exceder el doble del término inicialmente previsto.",
    "No autoriza triplicar el término ordinario.",
    "La complejidad no admite un plazo indefinido.",
    "Ley 1755/2015, art. 14, parágrafo",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m17-q6": [
    "La entidad niega motivadamente una solicitud particular porque no se cumplen sus requisitos legales, comunica su respuesta oportunamente y resuelve todos los puntos.",
    "¿Qué distingue una respuesta desfavorable de una vulneración del derecho de petición?",
    "El derecho exige respuesta de fondo y comunicación, no una decisión favorable.",
    "El derecho obliga a conceder toda pretensión formulada respetuosamente.",
    "La respuesta desfavorable solo es válida cuando el ciudadano la acepta.",
    "El derecho de petición garantiza respuesta, no el reconocimiento de lo solicitado.",
    "La petición no elimina los requisitos sustantivos.",
    "No depende de la aceptación de su destinatario.",
    "Ley 1755/2015, art. 13",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m18-q1": [
    "",
    "¿Qué interés protege la información pública reservada del artículo 19 de la Ley 1712?",
    "Intereses públicos expresamente protegidos por una excepción legal.",
    "Únicamente la intimidad y los secretos comerciales de personas.",
    "Cualquier interés institucional declarado por un memorando interno.",
    "El artículo 19 regula excepciones por afectación de intereses públicos.",
    "Los derechos de personas corresponden al artículo 18.",
    "Una etiqueta interna no crea una excepción legal.",
    "Ley 1712/2014, arts. 18–19",
    [
      "ley-1712-2014"
    ]
  ],
  "pgn-m18-q2": [
    "Un informe público contiene una sección con una excepción legal acreditada. Las restantes secciones son divulgables.",
    "¿Qué alcance tiene la versión pública del documento?",
    "Excluir únicamente la parte protegida y permitir acceso al resto.",
    "Sustituir todo el informe por una constancia de existencia.",
    "Eliminar de forma permanente también el original bajo custodia.",
    "La divulgación parcial conserva el acceso a lo no protegido.",
    "No se justifica ocultar las partes divulgables.",
    "La versión pública no exige destruir el original.",
    "Ley 1712/2014, art. 21",
    [
      "ley-1712-2014"
    ]
  ],
  "pgn-m18-q3": [
    "Un servidor pretende negar información pública y cita una excepción legal, pero no explica cómo divulgar los datos afectaría el interés protegido.",
    "¿Qué carga adicional corresponde al sujeto obligado?",
    "Justificar concretamente el daño que produciría la divulgación.",
    "Exigir al solicitante que demuestre que la información no es reservada.",
    "Presumir que la excepción opera sin motivación en el caso concreto.",
    "La carga de sustentar la excepción recae en el sujeto obligado.",
    "El solicitante no soporta esa carga.",
    "La cita normativa no reemplaza la justificación del daño.",
    "Ley 1712/2014, art. 28",
    [
      "ley-1712-2014"
    ]
  ],
  "pgn-m18-q4": [
    "Una dependencia crea una copia pública de un expediente que contiene datos protegidos.",
    "¿Qué control documental debe conservar durante la preparación de esa copia?",
    "Mantener el original controlado y comprobar la supresión efectiva en la copia.",
    "Modificar el original para que coincida con la versión divulgada.",
    "Enviar el original con una advertencia de no consultar los datos protegidos.",
    "La copia permite divulgar sin modificar el expediente bajo custodia.",
    "Cambiar el original afecta su integridad.",
    "Una advertencia no impide el acceso al contenido protegido.",
    "Ley 1712/2014, art. 21; Ley 1581/2012, art. 4",
    [
      "ley-1712-2014",
      "ley-1581-2012"
    ]
  ],
  "pgn-m18-q5": [
    "Un superior solicita la base completa de expedientes disciplinarios, incluidos datos de terceros que no guardan relación aparente con la tarea asignada.",
    "¿Qué debe comprobarse antes de entregar el archivo completo?",
    "La competencia, finalidad y necesidad de acceder a los datos solicitados.",
    "La jerarquía del solicitante como autorización suficiente de acceso.",
    "La posibilidad técnica de enviar el archivo sin contraseña.",
    "El tratamiento debe atender a finalidad y acceso restringido.",
    "La jerarquía no reemplaza las condiciones de acceso.",
    "La facilidad técnica no habilita una entrega jurídica.",
    "Ley 1581/2012, art. 4; CGD, art. 115",
    [
      "ley-1581-2012",
      "ley-1952-2019"
    ]
  ],
  "pgn-m18-q6": [
    "Un ciudadano pide acceso a una actuación disciplinaria y otro solicitante acredita ser sujeto procesal dentro del mismo expediente.",
    "¿Por qué no deben resolverse necesariamente ambas solicitudes de la misma forma?",
    "La calidad procesal puede conferir derechos de acceso que no tiene el tercero externo.",
    "Toda información disciplinaria se divulga igual sin importar la etapa del proceso.",
    "La persona externa siempre tiene mayor acceso que quien ejerce su defensa.",
    "La reserva especial debe analizarse sin desconocer los derechos de sujetos procesales.",
    "La etapa y calidad del solicitante importan.",
    "No existe esa prioridad general del tercero externo.",
    "CGD, art. 115",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m19-q1": [
    "",
    "¿Qué distingue a un acto de impulso procesal de una decisión de fondo?",
    "El primero prepara la actuación; la segunda resuelve lo correspondiente a la etapa.",
    "El primero decide responsabilidad; la segunda únicamente organiza el expediente.",
    "El primero carece de efectos; la segunda siempre impone una sanción.",
    "Los actos de impulso permiten avanzar hacia una decisión de fondo.",
    "La distinción invierte la función de ambos actos.",
    "Una decisión de fondo también puede ser absolutoria.",
    "CGD, arts. 220–222 y 160",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m19-q2": [
    "Durante una investigación, el disciplinado guarda silencio y no aporta documentos. El funcionario aún carece de evidencia suficiente sobre los hechos.",
    "¿Qué efecto tiene el silencio sobre la carga de la prueba?",
    "No libera al Estado de demostrar los presupuestos de la responsabilidad.",
    "Traslada al disciplinado la obligación de probar su inocencia.",
    "Equivale por sí solo a una aceptación de los cargos.",
    "La carga probatoria del Estado subsiste pese al silencio.",
    "El silencio no invierte la presunción de inocencia.",
    "No constituye por sí solo aceptación válida.",
    "CGD, arts. 14 y 147",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m19-q3": [
    "Una constancia informa la fecha de expedición de una providencia, pero la fecha de notificación consta en un documento distinto.",
    "¿Qué debe contener la cronología para evaluar un recurso?",
    "El hito legal pertinente, la fecha acreditada y el término específico aplicable.",
    "Únicamente la fecha de expedición para cualquier clase de recurso.",
    "La fecha de elaboración del informe interno del funcionario.",
    "El cómputo depende del acto y del hito previsto por la norma.",
    "No todos los recursos se computan desde la expedición.",
    "Un informe interno no sustituye el hito legal.",
    "CGD, régimen de notificaciones y recursos",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m19-q4": [
    "Se recibe una impugnación frente a una providencia y el expediente no permite saber si ese tipo de acto admite el recurso interpuesto.",
    "¿Qué debe establecerse antes de valorar los argumentos de la impugnación?",
    "La procedencia legal del recurso, su oportunidad y la autoridad competente.",
    "La coincidencia de los argumentos con la hipótesis de investigación.",
    "La conveniencia de aceptar todas las impugnaciones por igual.",
    "Los presupuestos de procedencia preceden al estudio del fondo.",
    "La hipótesis no determina la procedencia del recurso.",
    "No todos los actos admiten los mismos recursos.",
    "CGD, régimen de recursos",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m19-q5": [
    "La instrucción obtiene prueba que compromete al investigado y demuestra objetivamente una falta. El funcionario propone tratar el pliego de cargos como fallo definitivo.",
    "¿Qué diferencia jurídica debe explicar el profesional?",
    "Los cargos formulan una imputación; sancionar exige certeza y juzgamiento.",
    "Los cargos producen de inmediato los efectos de una sanción firme.",
    "El pliego solo puede formularse después de quedar ejecutoriado el fallo.",
    "Los estándares de cargos y fallo son distintos y corresponden a etapas diferentes.",
    "La imputación no es sanción ejecutoriada.",
    "El pliego precede al juzgamiento, no al revés.",
    "CGD, arts. 12, 160 y 222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m19-q6": [
    "Al revisar el expediente para decidir se incorpora información de descargo que debilita la hipótesis inicial. El funcionario considera omitirla por haberse formulado cargos.",
    "¿Qué garantía debe aplicarse al valorar esa información?",
    "La investigación integral y la valoración de cargo y descargo sin prejuzgar.",
    "La prevalencia de la hipótesis inicial desde la formulación de cargos.",
    "La exclusión de todo elemento favorable después de la imputación.",
    "Deben examinarse los elementos favorables y desfavorables, sin presumir responsabilidad.",
    "Los cargos no hacen inmutable la hipótesis.",
    "El descargo no pierde relevancia por existir cargos.",
    "CGD, arts. 13, 14 y 159",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m20-q1": [
    "",
    "¿Qué diferencia existe entre legalidad e ilicitud sustancial?",
    "La primera exige norma aplicable; la segunda, afectación sustancial injustificada del deber.",
    "La primera exige perjuicio económico; la segunda, una sanción previamente ejecutoriada.",
    "Ambas se satisfacen con identificar cualquier incumplimiento de una instrucción interna.",
    "Legalidad y afectación del deber son filtros diferentes.",
    "El perjuicio económico no es requisito general.",
    "Una infracción formal no agota los filtros.",
    "CGD, arts. 4,9",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m20-q2": [
    "Un servidor incumple una regla durante una evacuación obligatoria por emergencia. Se acredita que no podía actuar de otra forma.",
    "¿Qué dimensión debe analizarse además de identificar el incumplimiento formal?",
    "La posible justificación de la afectación del deber funcional.",
    "La gravedad de la sanción según la extensión del documento.",
    "La fecha de apertura como sustituto de la norma aplicable.",
    "La ilicitud exige afectación sustancial sin justificación.",
    "La graduación presupone responsabilidad.",
    "La apertura no sustituye el examen sustancial.",
    "CGD, arts. 9,31",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m20-q3": [
    "El instructor recaba testimonios que respaldan su hipótesis, pero existe un registro de acceso que puede excluir la participación del servidor.",
    "¿Qué principio exige incorporar al análisis ese registro favorable?",
    "Investigación integral, que exige examinar cargo y descargo con igual rigor.",
    "Favorabilidad, que obliga a preferir cualquier prueba aportada por la defensa.",
    "Proporcionalidad, que solo exige reducir la sanción si aparecen dudas.",
    "La investigación integral exige examinar ambas hipótesis.",
    "La favorabilidad se refiere a la aplicación normativa.",
    "Reducir sanción no corrige una insuficiencia probatoria.",
    "CGD, arts. 8,13",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m20-q4": [
    "Un investigado solicita que su abogado examine una prueba que sustentará una decisión.",
    "¿Qué garantía protege la posibilidad de intervenir mediante defensor?",
    "Defensa material y técnica en las oportunidades previstas por la ley.",
    "Doble conformidad de cualquier auto de trámite dictado durante la actuación.",
    "Cosa juzgada respecto de toda prueba incorporada antes de la solicitud.",
    "El artículo 15 reconoce defensa material y designación de abogado.",
    "La doble conformidad no es recurso universal.",
    "La incorporación no torna inatacable una prueba.",
    "CGD, arts. 15",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m20-q5": [
    "El registro técnico identifica una cuenta compartida y una orden de contingencia justifica algunas operaciones. Todavía no se individualiza al operador.",
    "¿Qué conclusión debe evitarse al elaborar el informe de apoyo?",
    "Atribuir la conducta al titular de la cuenta sin comprobar autoría ni justificación.",
    "Indicar que la cuenta registró una operación en un intervalo determinado.",
    "Registrar que existe una orden de contingencia pendiente de contrastar.",
    "La atribución personal y la ilicitud requieren pruebas distintas.",
    "La actividad de cuenta es un hallazgo limitado admisible.",
    "Es correcto registrar una fuente todavía pendiente de verificación.",
    "CGD, arts. 9,10,147",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m20-q6": [
    "La investigación acredita una conducta y la identifica jurídicamente, pero al finalizar el juicio no logra probar la culpabilidad.",
    "¿Qué regla impide usar el resultado como sustituto de ese elemento?",
    "La responsabilidad objetiva está prohibida y la duda razonable favorece al disciplinado.",
    "El principio de economía permite sancionar si la infracción objetiva es grave.",
    "La proporcionalidad permite sustituir la prueba subjetiva por una sanción leve.",
    "La culpabilidad y certeza no son opcionales.",
    "La economía no elimina las exigencias sustanciales.",
    "La sanción menor no corrige la falta de prueba.",
    "CGD, arts. 10,14,160",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q1": [
    "",
    "¿Qué calidad puede someter a un particular al régimen disciplinario especial?",
    "Ejercer funciones públicas, administrar recursos públicos o realizar interventoría contractual.",
    "Prestar cualquier servicio profesional pagado mediante recursos de una entidad estatal.",
    "Ser proveedor inscrito y presentar ofertas en procedimientos de contratación pública.",
    "El artículo 70 define supuestos específicos.",
    "El pago no convierte al contratista en disciplinable.",
    "Presentar ofertas no implica por sí solo esas funciones.",
    "CGD, arts. 70",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q2": [
    "Un ciudadano denuncia una conducta y aporta correos. No tiene calidad especial de víctima reconocida por el Código.",
    "¿Qué facultad conserva por ser quejoso ordinario?",
    "Aportar pruebas y recurrir el archivo o fallo absolutorio según el régimen.",
    "Dirigir la investigación y decidir qué medios de prueba serán practicados.",
    "Intervenir con todas las facultades de la defensa del disciplinado vinculado.",
    "El artículo 110 delimita su participación.",
    "No dirige la instrucción.",
    "No adquiere todas las facultades de sujeto procesal.",
    "CGD, arts. 109,110",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q3": [
    "Un servidor presenta un informe sobre hechos de posible relevancia disciplinaria; no existe una queja ciudadana previa.",
    "¿Puede ese informe ser una fuente de iniciación disciplinaria?",
    "Sí, la información de servidor público puede dar origen a la actuación.",
    "No, solo una queja suscrita por el directamente afectado permite iniciarla.",
    "Sí, pero únicamente si existe un fallo penal sobre los hechos.",
    "La acción admite noticias de diversas fuentes.",
    "No exige queja de la víctima.",
    "No exige condena penal.",
    "CGD, arts. 86",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q4": [
    "Un escrito anónimo contiene un número de contrato, fechas y soportes que pueden verificarse.",
    "¿Qué examen corresponde antes de decidir su tratamiento inicial?",
    "Verificar los requisitos mínimos legales y la credibilidad de sus soportes.",
    "Abrir investigación contra todo funcionario citado sin revisar la información aportada.",
    "Archivar necesariamente por faltar el nombre y la firma del informante.",
    "La ley admite excepcionalmente anónimos con requisitos mínimos.",
    "No hay apertura automática.",
    "La ausencia de firma no basta para descartar.",
    "CGD, arts. 86",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q5": [
    "La noticia permite verificar que hubo una posible falta, pero no individualizar a quien intervino. El operador cuenta con registros de turnos y acceso.",
    "¿Qué etapa permite esclarecer esa incertidumbre concreta?",
    "Indagación previa orientada a identificar o individualizar al posible autor.",
    "Investigación contra el jefe de la oficina por su condición jerárquica.",
    "Juzgamiento de los servidores que tuvieron acceso a los registros institucionales.",
    "La duda de identidad habilita indagación.",
    "La jefatura no prueba intervención.",
    "No se llega a juicio sin los presupuestos previos.",
    "CGD, arts. 208,211",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m21-q6": [
    "El posible autor queda identificado durante la indagación y se cumplen las condiciones para investigar.",
    "¿Qué diferencia debe respetarse al avanzar de etapa?",
    "La identidad habilita investigar, pero no constituye prueba definitiva de responsabilidad.",
    "La identidad permite sancionar si se conoce además la dependencia del autor.",
    "La identidad obliga a esperar el término máximo de indagación antes de abrir.",
    "Identificar no equivale a demostrar responsabilidad.",
    "El fallo exige certeza de falta y responsabilidad.",
    "El artículo 208 ordena apertura inmediata al identificar.",
    "CGD, arts. 208,211,160",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q1": [
    "",
    "¿Qué relación existe entre tipicidad, ilicitud sustancial y culpabilidad?",
    "Son elementos diferenciados que deben examinarse para atribuir responsabilidad disciplinaria.",
    "Son nombres equivalentes para identificar la gravedad de un resultado administrativo.",
    "Son criterios alternativos, de modo que basta probar uno para sancionar.",
    "Cada elemento responde a una cuestión jurídica distinta.",
    "La gravedad no resume los presupuestos.",
    "Probar solo uno no basta.",
    "CGD, arts. 4,9,10,26",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q2": [
    "Un error de registro se corrige de inmediato. El caso demuestra que no se afectó sustancialmente el deber funcional.",
    "¿Qué elemento falta para tratarlo como falta sancionable?",
    "La ilicitud sustancial, distinta del mero incumplimiento formal.",
    "La tipicidad por haberse corregido posteriormente la fecha.",
    "La competencia del superior por haberse corregido sin orden judicial.",
    "La afectación sustancial injustificada es necesaria.",
    "Corregir no determina por sí solo tipicidad.",
    "No se trata de competencia judicial.",
    "CGD, arts. 9,68",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q3": [
    "Una persona incumple manifiestamente una regla de obligatorio cumplimiento. No se acredita voluntad de realizar la falta.",
    "¿Qué modalidad de culpa define el Código para ese supuesto, si se prueban sus demás elementos?",
    "Culpa gravísima por violación manifiesta de una regla obligatoria.",
    "Culpa grave por el solo carácter formal de la regla incumplida.",
    "Dolo porque toda infracción manifiesta demuestra voluntad de cometerla.",
    "La infracción manifiesta es un supuesto legal de culpa gravísima.",
    "La gravedad de culpa no se decide por formalidad.",
    "La voluntad exige análisis propio.",
    "CGD, arts. 28,29",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q4": [
    "Un servidor omite el cuidado que una persona común imprime a sus actuaciones, sin concurrir supuestos de culpa gravísima.",
    "¿Qué modalidad corresponde a esa definición legal de culpa?",
    "Culpa grave, si se acreditan los demás elementos exigidos.",
    "Culpa leve, por tratarse del estándar ordinario de cuidado.",
    "Culpa gravísima, por cualquier ausencia de cuidado funcional exigible.",
    "El artículo 29 define así la culpa grave.",
    "El estándar no define culpa leve.",
    "La gravísima tiene supuestos diferenciados.",
    "CGD, arts. 29",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q5": [
    "El sistema estuvo indisponible durante cuatro horas. Existía un canal alternativo, pero el expediente no indica si el servidor podía utilizarlo.",
    "¿Qué comprobación ayuda a valorar una eventual exclusión de responsabilidad?",
    "La disponibilidad efectiva del canal y la posibilidad de cumplir el deber.",
    "La mera existencia documental del canal como prueba suficiente de dolo.",
    "La duración de la falla como causa automática de exoneración.",
    "Debe determinarse posibilidad real de actuar.",
    "Existencia formal no prueba voluntad ilícita.",
    "La falla no exonera automáticamente.",
    "CGD, arts. 27,31",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m22-q6": [
    "Una infracción provocó una pérdida y la prueba identifica al servidor que actuó. Se debate si actuó con conocimiento de la ilicitud y voluntad.",
    "¿Qué diferencia debe motivar el funcionario antes de calificar el dolo?",
    "La autoría y el resultado no acreditan por sí solos conocimiento y voluntad.",
    "La gravedad del daño transforma toda conducta culposa en dolosa.",
    "La existencia de una pérdida permite prescindir del análisis de culpabilidad.",
    "El dolo exige elementos subjetivos específicos.",
    "El daño no transforma automáticamente la modalidad.",
    "La culpabilidad debe demostrarse.",
    "CGD, arts. 10,28",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m23-q1": [
    "",
    "¿Qué diferencia identifica un deber frente a una prohibición disciplinaria?",
    "El deber impone una obligación; la prohibición veda una conducta.",
    "El deber regula exclusivamente el ingreso; la prohibición, el retiro.",
    "Ambas son restricciones exclusivamente aplicables a contratistas del Estado.",
    "Los artículos 38 y 39 regulan categorías diferenciadas.",
    "No se limitan al ingreso o retiro.",
    "Rigen para los destinatarios según el régimen.",
    "CGD, arts. 38,39",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m23-q2": [
    "Una persona pretende ocupar un empleo pese a una restricción legal vigente de acceso. Otra pretende ejercer simultáneamente dos actividades cuya coexistencia está prohibida.",
    "¿Cómo se distinguen las dos restricciones descritas?",
    "Inhabilidad de acceso e incompatibilidad de ejercicio simultáneo, respectivamente.",
    "Incompatibilidad de acceso e inhabilidad de ejercicio simultáneo, respectivamente.",
    "Dos impedimentos procesales que afectan al funcionario que conoce una investigación.",
    "El primer supuesto afecta elegibilidad y el segundo coexistencia de actividades.",
    "La segunda opción invierte los conceptos.",
    "No se describe un operador recusado.",
    "CGD, arts. 40–45",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m23-q3": [
    "En una actuación administrativa ordinaria, un evaluador reconoce interés directo en la decisión. Otro operador conoce una causal en un expediente disciplinario.",
    "¿Qué debe establecerse antes de calcular los plazos de cada incidente?",
    "El régimen aplicable: CPACA para la actuación común y CGD para la disciplinaria.",
    "Un plazo único de dos días para cualquier impedimento administrativo o disciplinario.",
    "Un plazo único de diez días para cualquier decisión de impedimento o recusación.",
    "Los procedimientos tienen reglas y términos diferenciados.",
    "Dos días no gobiernan todos los incidentes.",
    "Diez días no es término universal.",
    "CGD, arts. 104–107; CPACA arts. 11–12",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "cpaca"
    ]
  ],
  "pgn-m23-q4": [
    "Un instructor advierte una causal que afecta su imparcialidad mientras tramita un expediente. Aún no se ha formulado recusación.",
    "¿Qué actuación debe realizar sin esperar una solicitud de parte?",
    "Declarar de inmediato el impedimento motivado y remitir según el procedimiento.",
    "Esperar al vencimiento de la investigación para explicar la situación al superior.",
    "Continuar hasta que un sujeto procesal aporte una recusación formal contra él.",
    "El impedimento debe manifestarse al advertir la causal.",
    "No puede diferirse por conveniencia.",
    "No depende de recusación previa.",
    "CGD, arts. 104,105,107",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m23-q5": [
    "Una servidora debe decidir sobre una operación de la que su compañero permanente obtendrá un beneficio económico directo.",
    "¿Qué actuación corresponde frente a ese interés particular acreditado?",
    "Declarar impedimento por la causal concreta antes de intervenir en el asunto.",
    "Registrar únicamente una declaración general de intereses y continuar la decisión.",
    "Abstenerse de firmar la decisión, manteniendo su participación en la gestión.",
    "El artículo 44 incluye al compañero permanente y la gestión.",
    "La declaración general no sustituye el trámite.",
    "El impedimento no se limita a firmar.",
    "CGD, arts. 44",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m23-q6": [
    "El superior acepta el impedimento del funcionario y debe garantizar continuidad del trámite.",
    "¿Qué debe determinar al decidir ese incidente disciplinario?",
    "La autoridad que conocerá las diligencias conforme a las reglas de competencia.",
    "El sentido definitivo del fallo que deberá adoptar la nueva autoridad.",
    "La eliminación de todas las actuaciones realizadas antes de advertirse la causal.",
    "La aceptación incluye determinar quién conoce.",
    "No anticipa el fallo disciplinario.",
    "No impone anulación indiscriminada de actos.",
    "CGD, arts. 107",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q1": [
    "",
    "¿Qué combina la autoridad antes de escoger la sanción disciplinaria ordinaria?",
    "La categoría de la falta y la modalidad de culpabilidad acreditada.",
    "La categoría del empleo y el valor económico del daño exclusivamente.",
    "La etapa procesal y el tiempo empleado en practicar las pruebas.",
    "El artículo 48 combina clasificación y modalidad subjetiva.",
    "Cargo y daño no sustituyen esos elementos.",
    "El tiempo de trámite no determina la sanción.",
    "CGD, arts. 46–48",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q2": [
    "Un servidor público ordinario, no elegido popularmente, es responsable de una falta gravísima dolosa. No aplica reducción ni regla especial.",
    "¿Cuál es la sanción ordinaria prevista para ese supuesto?",
    "Destitución e inhabilidad general de diez a veinte años.",
    "Destitución e inhabilidad general de ocho a diez años.",
    "Suspensión e inhabilidad especial de tres a dieciocho meses.",
    "Es el rango de la falta gravísima dolosa.",
    "Ocho a diez corresponde a culpa gravísima.",
    "El tercer rango corresponde a falta grave dolosa.",
    "CGD, arts. 48",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q3": [
    "Una falta del artículo 52 se cometió el 10 de abril de 2024. Se aplica el artículo 33 vigente sin especialidad de tratados.",
    "¿Cuál es el término inicial de prescripción aplicable a esa falta?",
    "Doce años, con el punto inicial correspondiente al tipo de conducta.",
    "Cinco años, con el mismo punto inicial de toda falta ordinaria.",
    "Tres años, contados desde el inicio de la investigación disciplinaria.",
    "El artículo 52 activa el término especial de doce años.",
    "Cinco años es la regla general.",
    "Tres años corresponde a la regla posterior a la interrupción especial.",
    "CGD, arts. 33,52",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q4": [
    "La falta ordinaria instantánea se consumó el 20 de febrero de 2024. No hay eventos interruptivos ni otra regla especial.",
    "¿En qué año se cumple el término inicial de cinco años?",
    "2029, contado a partir de la consumación de la falta.",
    "2028, por contar 2024 como primer año calendario completo.",
    "2030, por sumar un año adicional al término de investigación.",
    "Cinco años desde febrero de 2024 llevan a febrero de 2029.",
    "No se cuentan años calendario completos de esa manera.",
    "El término de investigación no se añade a la prescripción.",
    "CGD, arts. 33",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q5": [
    "En un caso ordinario se notificó el fallo inicial el 15 de diciembre de 2028 antes de prescribir. No se notifica segunda instancia durante los dos años siguientes.",
    "¿Qué consecuencia establece el artículo 33 para esa situación?",
    "Opera prescripción si transcurren los dos años sin notificación de segunda instancia.",
    "Comienza automáticamente un nuevo término de cinco años desde el fallo inicial.",
    "Se mantiene indefinidamente interrumpida hasta que el superior firme la segunda decisión.",
    "La interrupción abre el control de dos años desde la notificación inicial.",
    "No se reinicia el plazo de cinco años.",
    "La firma de segunda instancia no sustituye su notificación.",
    "CGD, arts. 33",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m24-q6": [
    "La decisión sancionatoria quedó ejecutoriada en mayo de 2025 y la oficina controla su ejecución, no la investigación.",
    "¿Qué reloj debe distinguirse del término de prescripción de la acción?",
    "Prescripción de la sanción, de cinco años desde la ejecutoria del fallo.",
    "Prescripción de la acción, de dos años desde la firma del fallo inicial.",
    "Término de investigación, de seis meses desde la ejecutoria de la sanción.",
    "El artículo 36 inicia el cómputo de la sanción en la ejecutoria.",
    "El plazo de acción tiene otros hitos.",
    "La investigación no comienza al ejecutar sanción.",
    "CGD, arts. 33,36,213",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q1": [
    "",
    "¿Cuál es la diferencia entre una noticia disciplinaria y una imputación de cargos?",
    "La noticia informa hechos posibles; los cargos requieren un estándar probatorio específico.",
    "La noticia acredita responsabilidad; los cargos únicamente comunican el resultado al interesado.",
    "Ambas constituyen decisiones de fondo que determinan responsabilidad del servidor.",
    "La noticia activa evaluación inicial; cargos requieren mérito probatorio.",
    "El relato no acredita responsabilidad.",
    "Ninguna noticia es fallo definitivo.",
    "CGD, arts. 86,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q2": [
    "Un profesional recibe un escrito que combina insultos, fechas y un contrato identificable. Debe preparar una síntesis para el despacho.",
    "¿Qué tratamiento permite conservar el valor informativo y documental del escrito?",
    "Separar hechos verificables de valoraciones, preservando el escrito original y sus anexos.",
    "Eliminar del original los pasajes ofensivos para facilitar su incorporación al expediente.",
    "Reproducir las acusaciones como hechos establecidos dentro del informe profesional.",
    "La síntesis no sustituye ni altera el original.",
    "Modificarlo afecta integridad de la fuente.",
    "Una acusación no es hecho probado.",
    "CGD, arts. 86,147",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q3": [
    "La autoridad constata que los hechos descritos son manifiestamente irrelevantes disciplinariamente y no se ha abierto actuación.",
    "¿Qué decisión y recurso corresponden a ese supuesto inicial?",
    "Decisión inhibitoria, contra la cual no procede recurso alguno.",
    "Archivo de investigación, susceptible del recurso de apelación del quejoso.",
    "Auto de apertura de indagación, susceptible de recurso de reposición.",
    "El artículo 209 regula inhibición sin recurso.",
    "El archivo presupone una actuación abierta.",
    "La irrelevancia manifiesta no justifica indagar.",
    "CGD, arts. 209",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q4": [
    "Un informe concreto identifica al posible autor de una falta. El funcionario competente no tiene incertidumbre sobre su individualización.",
    "¿Es necesario agotar previamente una indagación de seis meses?",
    "No; procede evaluar e iniciar investigación conforme al artículo 211.",
    "Sí; toda noticia debe pasar por indagación durante seis meses completos.",
    "No; la identificación permite formular inmediatamente el pliego de cargos.",
    "La indagación responde a duda de identidad.",
    "No es requisito universal.",
    "Los cargos requieren prueba adicional.",
    "CGD, arts. 208,211,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q5": [
    "Una queja atribuye un cambio de datos a una servidora. El reporte de origen indica que pudo ser una operación automática.",
    "¿Qué debe consignar el análisis inicial de las fuentes contradictorias?",
    "La discrepancia, los soportes disponibles y las diligencias para verificar cada explicación.",
    "La autoría de la servidora porque la queja fue la primera fuente recibida.",
    "El archivo inmediato por el solo hecho de que el reporte sugiera automatización.",
    "El análisis distingue hipótesis y evidencia.",
    "El orden de recepción no fija mérito.",
    "Una explicación alternativa requiere contraste.",
    "CGD, arts. 13,148",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m25-q6": [
    "Una queja temeraria motiva estudiar la imposición de una multa. La persona denunciante aún no ha sido escuchada.",
    "¿Qué trámite exige la ley antes de resolver esa multa?",
    "Citar al quejoso para explicaciones, pruebas y contradicción, con defensa si no concurre.",
    "Imponer la multa y conceder la posibilidad de presentar pruebas después de ejecutarla.",
    "Remitir exclusivamente a control fiscal para que determine e imponga la multa disciplinaria.",
    "El artículo 210 prevé audiencia y garantías.",
    "El recurso posterior no reemplaza ese trámite.",
    "La multa corresponde a la autoridad disciplinaria competente.",
    "CGD, arts. 210",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q1": [
    "",
    "¿Cuál es el presupuesto central para adelantar una indagación previa?",
    "Duda sobre la identificación o individualización del posible autor de una falta.",
    "Necesidad de comprobar toda la culpabilidad de un disciplinado plenamente identificado.",
    "Existencia de una queja contra un servidor con responsabilidad ya demostrada.",
    "El artículo 208 define una finalidad de identificación.",
    "La investigación tiene otros fines.",
    "La indagación no es juicio de responsabilidad.",
    "CGD, arts. 208",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q2": [
    "Una indagación ordinaria está abierta por duda de identidad. No se trata de violaciones de derechos humanos o DIH.",
    "¿Cuál es su duración legal general, sin acudir a excepciones?",
    "Seis meses, con terminación anticipada si se cumple el presupuesto legal.",
    "Doce meses, por la prórroga ordinaria automática de toda indagación.",
    "Tres meses, con extensión general hasta completar seis meses de actuación.",
    "El término ordinario de indagación es seis meses.",
    "No existe esa ampliación general.",
    "Tres meses no es el término inicial.",
    "CGD, arts. 208",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q3": [
    "Un registro permite identificar una cuenta institucional que varias personas utilizan durante sus turnos.",
    "¿Qué medio de verificación resulta más útil para individualizar al operador?",
    "Contrastar turnos, sesiones, permisos y otras fuentes independientes del registro de cuenta.",
    "Obtener otra copia del mismo registro con idéntica información sobre el usuario.",
    "Considerar suficiente la certificación de titularidad nominal de la cuenta institucional.",
    "La comparación permite discriminar quién operaba.",
    "Una copia idéntica no agrega información independiente.",
    "La titularidad no individualiza necesariamente al usuario.",
    "CGD, arts. 148,208",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q4": [
    "Al segundo mes de indagación se individualiza al posible autor de la falta mediante prueba válida.",
    "¿Qué actuación ordena el artículo 208 en ese momento?",
    "Emitir inmediatamente la decisión de apertura de investigación disciplinaria.",
    "Esperar el vencimiento de los seis meses para decidir sobre la apertura.",
    "Declarar cerrada la investigación y conceder traslado de alegatos precalificatorios.",
    "La identificación activa la apertura inmediata.",
    "No es obligatorio agotar el plazo.",
    "El cierre corresponde a una investigación posterior.",
    "CGD, arts. 208,220",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q5": [
    "Agotada la indagación, no fue posible identificar al posible autor pese a practicar las diligencias pertinentes.",
    "¿Qué efecto tiene el archivo previsto en el parágrafo del artículo 208?",
    "No hace tránsito a cosa juzgada material en los términos de esa disposición.",
    "Impide definitivamente considerar cualquier información posterior sobre los mismos hechos.",
    "Equivale a un fallo absolutorio ejecutoriado sobre un disciplinado identificado.",
    "El parágrafo excluye cosa juzgada material.",
    "Una noticia nueva puede examinarse dentro de límites legales.",
    "No hubo juzgamiento de una persona individualizada.",
    "CGD, arts. 208",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m26-q6": [
    "Meses después del archivo de una indagación aparece un soporte nuevo y relevante de identidad.",
    "¿Qué revisión debe realizarse antes de decidir una nueva actuación?",
    "Examinar el mérito del soporte, el efecto del archivo y la vigencia de la acción.",
    "Reabrir automáticamente porque el archivo de indagación elimina toda limitación temporal.",
    "Descartar automáticamente porque todo archivo tiene efectos materiales de cosa juzgada.",
    "La nueva fuente exige examen de presupuestos y prescripción.",
    "No hay reapertura indefinida.",
    "El archivo de indagación tiene efecto especial.",
    "CGD, arts. 33,208",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q1": [
    "",
    "¿Qué fin corresponde a la investigación disciplinaria una vez identificado el posible autor?",
    "Verificar conducta, relevancia disciplinaria y eventuales causales de exclusión de responsabilidad.",
    "Determinar exclusivamente el monto de la sanción que impondrá el funcionario instructor.",
    "Establecer únicamente la identidad del quejoso antes de admitir cualquier prueba.",
    "El artículo 212 define el objeto de investigación.",
    "La instrucción no impone el fallo sancionatorio.",
    "La identidad del quejoso no es su único objeto.",
    "CGD, arts. 211,212",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q2": [
    "Una oficina de control disciplinario interno inicia una investigación contra un servidor público.",
    "¿Qué aviso exige el artículo 216 al iniciarse esa actuación?",
    "Avisar inmediatamente a Viceprocuraduría y al funcionario competente de PGN o personería.",
    "Avisar únicamente a la Contraloría cuando se obtenga certeza sobre la falta.",
    "Avisar al juez administrativo después de expedir el fallo de primera instancia.",
    "El aviso permite evaluar el poder preferente.",
    "No corresponde limitarlo a control fiscal.",
    "No se posterga hasta el fallo.",
    "CGD, arts. 216",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q3": [
    "En una investigación ordinaria ya se agotó el término y se requieren pruebas que pueden modificar la situación jurídica. Se cumplen los presupuestos de extensión adicional.",
    "¿Qué margen máximo adicional prevé el último inciso del artículo 213?",
    "Hasta tres meses adicionales para las pruebas decisivas que faltan.",
    "Hasta seis meses adicionales por la sola existencia de pruebas pendientes.",
    "Hasta doce meses adicionales en toda investigación por falta grave.",
    "El último inciso fija hasta tres meses.",
    "La ampliación de seis meses corresponde a otro supuesto.",
    "No existe esa extensión automática por gravedad.",
    "CGD, arts. 213",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q4": [
    "En una investigación por falta grave existen serios elementos de riesgo de interferencia del servidor en el recaudo probatorio.",
    "¿Qué medida motivada puede ordenar el funcionario que adelanta la actuación?",
    "Suspensión provisional del servidor bajo los presupuestos y términos legales.",
    "Suspensión sancionatoria definitiva antes de formular cargos y escuchar la defensa.",
    "Destitución preventiva mientras se comprueba la interferencia del servidor investigado.",
    "El artículo 217 regula suspensión provisional por esos riesgos.",
    "La sanción exige fallo.",
    "No hay destitución preventiva en ese supuesto.",
    "CGD, arts. 217",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q5": [
    "El registro de accesos atribuye una modificación a una cuenta, pero existe una tarea automática programada durante ese mismo periodo.",
    "¿Qué diligencia permite distinguir las hipótesis durante la investigación?",
    "Contrastar registros de automatización, autenticación y configuración con las fuentes de cargo.",
    "Repetir solo las consultas que respaldan la atribución personal de la modificación.",
    "Descartar todos los registros por la existencia de una explicación técnica alternativa.",
    "El contraste permite evaluar cargo y descargo.",
    "Seleccionar confirmaciones introduce sesgo.",
    "Una hipótesis alternativa no invalida todas las fuentes.",
    "CGD, arts. 13,148,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m27-q6": [
    "El informe de investigación demuestra que el hecho ocurrió, pero una prueba válida acredita plenamente que el disciplinado no lo cometió.",
    "¿Qué decisión procede respecto de esa persona si se satisface el artículo 90?",
    "Declarar terminada la actuación y ordenar su archivo mediante decisión motivada.",
    "Formular cargos porque la ocurrencia objetiva del hecho ya está demostrada.",
    "Mantener indefinidamente abierta la investigación hasta identificar a todos los intervinientes.",
    "La no autoría plenamente demostrada es causal de terminación.",
    "El hecho objetivo no satisface autoría.",
    "No se justifica mantenerla abierta respecto de quien cumple la causal.",
    "CGD, arts. 90,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q1": [
    "",
    "¿Qué facultad diferencia al quejoso ordinario de un sujeto procesal pleno?",
    "Puede recurrir archivo y fallo absolutorio sin adquirir todas las facultades procesales.",
    "Puede formular cargos y ordenar la práctica de pruebas como autoridad de instrucción.",
    "Puede recurrir cualquier providencia del expediente en las mismas condiciones del investigado.",
    "El artículo 110 delimita su participación.",
    "Formular cargos es atribución de autoridad.",
    "No tiene todos los recursos del sujeto procesal.",
    "CGD, arts. 109,110",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q2": [
    "El disciplinado y su defensor sostienen criterios contradictorios respecto de una actuación de defensa dentro del proceso.",
    "¿Qué criterio prevalece según la regla específica del artículo 113?",
    "El del defensor, quien tiene las mismas facultades procesales del investigado.",
    "El del quejoso, si aportó las pruebas que dieron origen al proceso.",
    "El del disciplinado, porque la defensa técnica solo cumple funciones consultivas.",
    "El artículo 113 dispone prevalencia del defensor.",
    "El quejoso no dirige la estrategia defensiva.",
    "El defensor tiene facultades propias.",
    "CGD, arts. 113",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q3": [
    "El investigado desea exponer voluntariamente su explicación sin admitir responsabilidad ni declarar bajo juramento.",
    "¿Qué figura corresponde a esa manifestación de defensa?",
    "Versión libre en la oportunidad procesal prevista para el disciplinado.",
    "Testimonio jurado obligatorio sobre los hechos que se le atribuyen.",
    "Confesión automática por el solo hecho de referirse a la conducta.",
    "La versión libre es una facultad de defensa.",
    "No equivale a testimonio de tercero.",
    "Narrar no equivale a confesar.",
    "CGD, arts. 112,161",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q4": [
    "Una persona pretende aceptar cargos mediante un escrito presentado sin defensor ni información previa sobre sus garantías.",
    "¿Qué requisitos debe verificar la autoridad antes de reconocer esa aceptación?",
    "Asistencia de defensor e información de derechos, con manifestación libre, consciente e informada.",
    "La firma del escrito, que sustituye los demás requisitos de aceptación legal.",
    "El reconocimiento de los hechos ante cualquier empleado, independientemente de su competencia.",
    "El artículo 161 exige garantías concurrentes y autoridad habilitada.",
    "Una firma no sustituye asistencia e información.",
    "No basta declarar ante cualquier empleado.",
    "CGD, arts. 161",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q5": [
    "Se practicó una prueba mientras se surtía la notificación de apertura. El disciplinado vinculado pide ampliar puntos específicos de esa prueba.",
    "¿Qué garantía establece el artículo 111 en ese supuesto?",
    "Ampliar o reiterar las pruebas practicadas en los puntos solicitados por el disciplinado.",
    "Excluir todas las pruebas anteriores a la notificación sin examinar su trámite.",
    "Negar la solicitud porque ninguna prueba anterior admite ampliación una vez incorporada.",
    "El artículo 111 prevé ampliación o reiteración a solicitud.",
    "La práctica durante notificación no es ilícita por sí sola.",
    "La incorporación no elimina esa garantía.",
    "CGD, arts. 111",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m28-q6": [
    "Una historia clínica reservada está incorporada en cuaderno separado y el defensor solicita conocerla y obtener una copia.",
    "¿Qué regla específica debe aplicar la oficina respecto de ese documento reservado?",
    "Permitir consulta al sujeto procesal, sin expedir copias del contenido reservado.",
    "Prohibir toda consulta incluso a los sujetos procesales por su carácter reservado.",
    "Expedir copias sin restricciones porque el defensor participa en la actuación.",
    "El artículo 192 establece consulta sin copias.",
    "La reserva no impide esa consulta.",
    "El acceso no elimina la restricción de copias.",
    "CGD, arts. 115,192",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q1": [
    "",
    "¿Cuáles son los dos eventos que habilitan el cierre de la investigación?",
    "Recaudo de las pruebas ordenadas o vencimiento del término de investigación.",
    "Presentación de cualquier alegato o recepción de una nueva queja ciudadana.",
    "Formulación de cargos y notificación del fallo de primera instancia.",
    "El artículo 220 prevé dos eventos alternativos.",
    "Los alegatos siguen al cierre.",
    "Cargos y fallo son posteriores.",
    "CGD, arts. 220",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q2": [
    "La autoridad declara cerrada la investigación porque terminó el recaudo. El proyecto describe la decisión como archivo definitivo.",
    "¿Qué distinción debe corregirse en ese proyecto?",
    "El cierre es sustanciación que abre el traslado; el archivo es una salida de mérito.",
    "El cierre y el archivo son decisiones equivalentes cuando se recaudaron las pruebas.",
    "El archivo es una medida provisional que debe acompañar todos los cierres de investigación.",
    "El cierre precede a la evaluación de mérito.",
    "No resuelve definitivamente la actuación.",
    "El archivo no acompaña automáticamente el cierre.",
    "CGD, arts. 220,221",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q3": [
    "El auto de cierre y traslado de alegatos fue expedido, pero todavía no se ha tramitado la comunicación de notificación.",
    "¿Qué regla debe verificar la secretaría para controlar esa notificación?",
    "El trámite del artículo 123, aplicable expresamente al cierre y al traslado.",
    "La publicación inmediata por edicto como modalidad única de todo auto de cierre.",
    "La comunicación verbal sin constancia, por tratarse de una decisión de sustanciación.",
    "El artículo 123 incluye el cierre y traslado.",
    "No establece edicto como modalidad única.",
    "Se requieren formalidades y constancias.",
    "CGD, arts. 123,220",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q4": [
    "Tras notificarse el cierre, un sujeto procesal presenta alegatos antes de la evaluación de mérito.",
    "¿Qué finalidad tiene esa intervención dentro de la instrucción?",
    "Discutir las pruebas y argumentos antes de que el instructor adopte su decisión.",
    "Interponer apelación contra el fallo sancionatorio que ya resolvió la actuación.",
    "Sustituir los descargos posteriores y renunciar a las facultades de defensa en juicio.",
    "Es una oportunidad previa a la evaluación.",
    "No existe fallo en esa etapa.",
    "Los alegatos no sustituyen los descargos.",
    "CGD, arts. 112,220,221",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q5": [
    "Un alegato señala que el deber funcional estaba asignado a otra persona y cita la resolución correspondiente.",
    "¿Qué debe reflejar la matriz de evaluación al analizar ese argumento?",
    "El argumento, el soporte, su relación con el deber y la respuesta motivada.",
    "Solo la fecha de recepción del alegato para acreditar que se respetó el plazo.",
    "La conclusión acusatoria original sin revisar el documento invocado por la defensa.",
    "La evaluación exige considerar argumentos y material probatorio.",
    "Registrar recepción no equivale a valorar.",
    "No se puede omitir el soporte de descargo.",
    "CGD, arts. 13,221,223",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m29-q6": [
    "Vencido el traslado, el instructor comprueba que las pruebas no comprometen la responsabilidad del investigado y no quedan extensiones aplicables.",
    "¿Qué salida corresponde al evaluar motivadamente ese mérito insuficiente?",
    "Terminación y archivo conforme a los presupuestos legales, sin trasladar la duda al juicio.",
    "Formulación de cargos porque el cierre de investigación demuestra automáticamente la falta.",
    "Remisión al juzgador para que formule cargos sin decisión de evaluación del instructor.",
    "No se cumple el estándar de cargos.",
    "El cierre no prueba responsabilidad.",
    "La evaluación corresponde al instructor.",
    "CGD, arts. 213,221,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q1": [
    "",
    "¿Qué estándar distingue la formulación de cargos de la apertura de investigación?",
    "La falta objetivamente demostrada y prueba que comprometa la responsabilidad del disciplinado.",
    "La identificación del posible autor mediante una noticia que merece credibilidad.",
    "La certeza de falta y responsabilidad exigida para proferir fallo sancionatorio.",
    "El artículo 222 exige prueba de falta y compromiso personal.",
    "La identificación es presupuesto de apertura.",
    "La certeza es el estándar del fallo.",
    "CGD, arts. 160,211,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q2": [
    "Una investigación acredita objetivamente un hecho, pero una prueba demuestra plenamente que el disciplinado no lo cometió.",
    "¿Qué salida establece el Código respecto de ese disciplinado?",
    "Terminación de la actuación y archivo definitivo mediante decisión motivada.",
    "Formulación de cargos por haberse acreditado objetivamente el hecho investigado.",
    "Suspensión provisional hasta establecer cuál persona cometió la conducta.",
    "La no autoría demostrada es causal de terminación.",
    "No basta la ocurrencia del hecho para acusar.",
    "La suspensión exige presupuestos propios.",
    "CGD, arts. 90,222,224",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q3": [
    "Un proyecto de pliego individualiza al servidor por su cargo actual, pero los hechos corresponden a un cargo distinto que ocupaba dos años antes.",
    "¿Qué dato exige el artículo 223 para delimitar la imputación?",
    "El cargo o función desempeñada en la época de comisión de la conducta.",
    "El cargo ocupado por el servidor al momento de notificar el pliego de cargos.",
    "La dependencia que actualmente tiene competencia para efectuar el juzgamiento.",
    "La función relevante es la de la época del hecho.",
    "El cargo actual puede ser diferente.",
    "El juzgador no determina el deber funcional histórico.",
    "CGD, arts. 223",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q4": [
    "El pliego contiene el relato de los hechos y cita las normas presuntamente violadas, pero no desarrolla la modalidad subjetiva ni los argumentos presentados por la defensa.",
    "¿Qué dos componentes exige completar el artículo 223?",
    "El análisis de culpabilidad y de los argumentos de los sujetos procesales.",
    "La determinación definitiva de la sanción y su ejecución presupuestal.",
    "La identificación de la segunda instancia y la liquidación de una eventual multa.",
    "Son componentes expresos del pliego.",
    "La sanción no se impone mediante cargos.",
    "Estos datos no sustituyen el análisis exigido.",
    "CGD, arts. 223",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q5": [
    "La investigación se archiva definitivamente en el supuesto del artículo 224 en que no fue posible identificar ni individualizar al presunto autor.",
    "¿Qué efecto específico atribuye la norma a ese archivo?",
    "Cosa juzgada formal, de acuerdo con la excepción prevista en el artículo.",
    "Cosa juzgada material en idénticos términos de un fallo de responsabilidad ejecutoriado.",
    "Ausencia de cualquier efecto procesal que permita ignorar la decisión de archivo.",
    "El artículo 224 distingue el supuesto de autor no identificado.",
    "No tiene el efecto material ordinario.",
    "La decisión conserva efecto formal.",
    "CGD, arts. 224",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m30-q6": [
    "Un quejoso identificado recibe comunicación del archivo definitivo de una investigación y desea impugnarlo dentro de la oportunidad prevista.",
    "¿Qué recurso puede ejercer frente al archivo en ese supuesto?",
    "Apelación contra la decisión de archivo conforme al régimen especial.",
    "Queja directamente contra el archivo sin rechazo previo de una apelación.",
    "Reposición como única impugnación prevista para toda decisión de archivo.",
    "El archivo admite apelación y el quejoso tiene esa facultad.",
    "La queja exige rechazo de apelación.",
    "La reposición no es el recurso previsto aquí.",
    "CGD, arts. 110,134",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q1": [
    "",
    "¿Cuál conjunto contiene decisiones sometidas inicialmente a notificación personal por el CGD?",
    "Apertura de investigación, vinculación, pliego de cargos y fallos de instancia.",
    "Auto de simple trámite, informe de secretaría y comunicación general al quejoso.",
    "Traslado del dictamen en investigación, informe técnico y toda decisión de sustanciación.",
    "El artículo 121 enumera decisiones de notificación personal.",
    "El trámite simple y las comunicaciones son distintos.",
    "El traslado pericial en investigación tiene regla especial.",
    "CGD, arts. 121,123,129",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q2": [
    "Una providencia se dicta durante una audiencia y queda notificada en la propia sesión a los sujetos procesales.",
    "¿Qué modalidad de notificación corresponde a ese acto?",
    "Notificación en estrados, de acuerdo con la regla de las decisiones en audiencia.",
    "Notificación por estado electrónico, que debe insertarse al finalizar toda la audiencia.",
    "Notificación por edicto, que debe permanecer fijado durante el plazo legal.",
    "Las decisiones adoptadas en audiencia se notifican en estrados.",
    "No se exige estado adicional en ese supuesto.",
    "El edicto tiene otros presupuestos.",
    "CGD, arts. 126",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q3": [
    "El juzgador niega totalmente la práctica de las pruebas solicitadas por un sujeto procesal durante juicio.",
    "¿Qué recurso y efecto prevé el artículo 134 para esa negativa total?",
    "Apelación en efecto suspensivo por tratarse de una negativa total en juicio.",
    "Apelación en efecto devolutivo como para la negativa parcial en juicio.",
    "Reposición en efecto suspensivo como para la negativa probatoria en investigación.",
    "La negativa total en juicio admite apelación suspensiva.",
    "La parcial tiene efecto devolutivo.",
    "En investigación corresponde reposición.",
    "CGD, arts. 133,134",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q4": [
    "El funcionario rechaza la apelación que había interpuesto oportunamente la defensa contra una providencia.",
    "¿Qué finalidad tiene el recurso de queja en ese supuesto?",
    "Permitir al superior decidir si debe concederse la apelación rechazada.",
    "Permitir al mismo funcionario decidir otra vez el fondo de la providencia apelada.",
    "Permitir al ciudadano formular una nueva noticia disciplinaria contra el servidor investigado.",
    "La queja controla el rechazo de apelación.",
    "No es una repetición del estudio de fondo.",
    "No equivale a denuncia disciplinaria.",
    "CGD, arts. 136,137",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q5": [
    "Una apelación sometida al régimen general fue interpuesta oportunamente, pero no se sustentó dentro del término exigible.",
    "¿Qué consecuencia prevé el Código por la falta de sustentación oportuna?",
    "Declarar desierto el recurso conforme a los requisitos del artículo 132.",
    "Concederlo al superior para que supla de oficio los argumentos del recurrente.",
    "Tramitarlo como queja por haber vencido el término de sustentación ordinario.",
    "La sustentación es presupuesto de trámite.",
    "El superior no sustituye al recurrente.",
    "No hay rechazo de apelación que habilite automáticamente queja.",
    "CGD, arts. 131,132",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m31-q6": [
    "El auto de apertura se expidió el lunes, pero el trámite de notificación personal aún no se ha completado. Se planea practicar pruebas durante esos días.",
    "¿Qué regla distingue la notificación de la actividad probatoria de investigación?",
    "El trámite no suspende la prueba; procede ampliarla o reiterarla en los puntos solicitados.",
    "La expedición habilita presumir la notificación y elimina toda posibilidad de reiteración de pruebas.",
    "La investigación debe suspenderse por completo hasta que exista notificación personal efectiva.",
    "El artículo 111 permite continuar prueba y prevé ampliación o reiteración.",
    "La expedición no equivale a notificación.",
    "No hay suspensión probatoria automática.",
    "CGD, arts. 111,121",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q1": [
    "",
    "¿Cuál de estos defectos corresponde a una causal expresa de nulidad del artículo 202?",
    "La falta de competencia del funcionario que profirió el fallo disciplinario.",
    "La existencia de una corrección tipográfica que no afecta garantías procesales.",
    "La presentación de alegatos que discrepan de las conclusiones del instructor.",
    "La competencia para fallar es causal expresa.",
    "Un error inocuo no es causal automática.",
    "Discrepar es parte del derecho de defensa.",
    "CGD, arts. 202,203",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q2": [
    "Se impidió a un investigado ejercer defensa frente a una actuación sustancial y no existe otro remedio procesal que permita subsanar el defecto.",
    "¿Qué causal de nulidad debe examinarse frente a ese supuesto?",
    "Violación del derecho de defensa del investigado conforme al artículo 202.",
    "Falta de competencia para proferir el fallo por la sola restricción de defensa.",
    "Falta de oportunidad de la queja presentada inicialmente por un ciudadano.",
    "La privación de defensa es una causal propia.",
    "No se demuestra defecto de competencia para fallar.",
    "La noticia no es el defecto descrito.",
    "CGD, arts. 202",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q3": [
    "Un acto presenta una irregularidad sustancial y existe un mecanismo procesal idóneo que permite subsanarla sin sacrificar garantías constitucionales.",
    "¿Qué principio condiciona la decisión de declarar nulidad en ese caso?",
    "Subsidiariedad: la nulidad procede cuando no existe otro medio procesal de subsanación.",
    "Trascendencia: toda irregularidad sustancial debe anularse aunque exista un remedio adecuado.",
    "Convalidación: basta la voluntad del funcionario para mantener válido cualquier acto irregular.",
    "La nulidad es último remedio procesal.",
    "Debe examinarse la vía de subsanación.",
    "La voluntad del funcionario no reemplaza garantías.",
    "CGD, arts. 203",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q4": [
    "Una persona consiente una actuación irregular que no compromete garantías constitucionales. El despacho estudia si ese consentimiento tiene efectos de saneamiento.",
    "¿Qué condición limita la convalidación prevista por el Código?",
    "El consentimiento del perjudicado debe respetar las garantías constitucionales de la actuación.",
    "El consentimiento de la autoridad sustituye el del sujeto procesal perjudicado.",
    "El consentimiento permite subsanar cualquier vulneración de garantías constitucionales sin límites.",
    "El artículo 203 condiciona la convalidación al respeto constitucional.",
    "Debe consentir el perjudicado.",
    "El consentimiento no habilita desconocer garantías.",
    "CGD, arts. 203",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q5": [
    "Antes de los alegatos de conclusión se radica una solicitud de nulidad con una causal concreta y fundamentos de hecho y de derecho.",
    "¿Qué diferencia existe entre esta petición y la declaratoria oficiosa de nulidad?",
    "La decisión sobre la solicitud admite reposición; la declaratoria oficiosa no admite recurso.",
    "Ambas decisiones admiten apelación por tratarse de irregularidades sustanciales del procedimiento.",
    "Ninguna admite recurso por estar sometidas exclusivamente a control del fallo definitivo.",
    "Los artículos 204 y 207 establecen reglas distintas.",
    "No se prevé apelación en esos supuestos.",
    "La decisión sobre solicitud sí admite reposición.",
    "CGD, arts. 204,206,207",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m32-q6": [
    "Se anula una providencia posterior a la incorporación legal de un testimonio. El testimonio no depende de la providencia afectada.",
    "¿Qué debe hacerse respecto de esa prueba ya practicada legalmente?",
    "Conservar su validez y reponer las actuaciones que dependan del acto nulo.",
    "Repetir necesariamente todos los testimonios obtenidos antes de la providencia declarada nula.",
    "Excluir el testimonio porque la nulidad de una actuación elimina todo su soporte probatorio.",
    "El artículo 205 preserva pruebas legalmente practicadas.",
    "No exige repetirlas por regla general.",
    "La nulidad no invalida automáticamente las pruebas válidas.",
    "CGD, arts. 205",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q1": [
    "",
    "¿Qué elementos delimitan el alcance de una comisión para practicar pruebas?",
    "Las diligencias objeto del encargo y el término para su práctica.",
    "El sentido probable del fallo y el rango de sanción previsto.",
    "La totalidad de facultades del instructor y las del futuro juzgador.",
    "El artículo 152 exige objeto y término.",
    "La comisión no anticipa la sanción.",
    "No transfiere todas las facultades de fondo.",
    "CGD, arts. 152",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q2": [
    "El Procurador General de la Nación requiere que un funcionario de otra entidad practique una diligencia probatoria específica.",
    "¿Qué facultad especial reconoce el artículo 152 al Procurador General?",
    "Puede comisionar a cualquier funcionario para la práctica de pruebas.",
    "Solo puede comisionar a servidores adscritos a su propia dependencia.",
    "Puede transferir el juzgamiento completo mediante cualquier encargo de prueba.",
    "La regla especial le permite comisionar a cualquier funcionario.",
    "La restricción corresponde a otros servidores en ciertos supuestos.",
    "La facultad se refiere a pruebas, no al traslado de juzgamiento.",
    "CGD, arts. 152",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q3": [
    "En una comisión para recibir un testimonio se conoce una noticia sobre un hecho sin relación directa con las diligencias encargadas.",
    "¿Qué debe hacer el comisionado respecto de esa nueva línea de investigación ajena al encargo?",
    "Informar al comitente y solicitar la decisión competente sin ampliar unilateralmente el objeto.",
    "Recaudar cualquier prueba sobre la nueva noticia porque toda comisión abarca hechos posteriores.",
    "Formular cargos por el hecho nuevo mientras se encuentra vigente el término de la comisión.",
    "La prueba adicional debe surgir directamente del objeto.",
    "El plazo no amplía materialmente el encargo.",
    "La comisión no confiere competencia para cargos.",
    "CGD, arts. 152",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q4": [
    "Durante una declaración comisionada la defensa ejerce una facultad de contradicción prevista para la práctica del testimonio.",
    "¿Qué regla debe aplicar el comisionado al gestionar esa intervención?",
    "Respetar las reglas del medio probatorio y registrar la intervención en la diligencia.",
    "Negar toda intervención porque el derecho de contradicción se ejerce únicamente ante el comitente.",
    "Trasladar la decisión sobre responsabilidad al defensor para resolver el incidente probatorio.",
    "La comisión no suprime las garantías de la prueba.",
    "La contradicción no se pospone necesariamente.",
    "El defensor no adopta la decisión de fondo.",
    "CGD, arts. 112,152,157",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q5": [
    "El comisionado finaliza la prueba y dispone de acta, anexos y una novedad sobre una diligencia adicional autorizada.",
    "¿Qué debe quedar documentado en la entrega al comitente?",
    "La actuación practicada, sus anexos, incidencias y constancias de remisión y recibo.",
    "Solo el resultado favorable a la hipótesis que justificó originalmente el encargo.",
    "El proyecto de fallo sancionatorio sin identificar los soportes obtenidos en la diligencia.",
    "La entrega documentada permite controlar alcance e integridad.",
    "No se seleccionan soportes por su sentido incriminatorio.",
    "La comisión no habilita fallo.",
    "CGD, arts. 148,152,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m33-q6": [
    "El comisionado recibe una solicitud que requiere decidir si la investigación debe terminar definitivamente. El encargo se limita a una inspección.",
    "¿Qué límite debe observar frente a esa solicitud de terminación?",
    "Registrar y remitir la petición a la autoridad competente sin decidir el fondo.",
    "Declarar terminado el proceso por tener temporalmente los elementos probatorios del expediente.",
    "Negar definitivamente la solicitud porque no está incluida en el objeto de la inspección.",
    "El encargo se limita a la prueba.",
    "Tener soportes no otorga competencia decisoria.",
    "La solicitud debe llegar a la autoridad competente.",
    "CGD, arts. 90,152",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m34-q1": [
    "",
    "¿Qué funcionario fija motivadamente el procedimiento de juicio después de recibir el expediente con cargos?",
    "El funcionario de juzgamiento, competente y distinto del instructor.",
    "El funcionario instructor que realizó la calificación inicial de la conducta.",
    "El secretario que organizó la remisión de las actuaciones disciplinarias.",
    "El artículo 225A atribuye esa decisión al juzgador.",
    "El instructor no define la modalidad de juicio.",
    "La secretaría no decide ese asunto.",
    "CGD, arts. 12,225A",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m34-q2": [
    "El pliego se ha notificado conforme a la ley y el instructor debe transferir el expediente al funcionario de juzgamiento.",
    "¿Qué término prevé el artículo 225 para remitir las actuaciones?",
    "Tres días improrrogables una vez se cumplen las notificaciones.",
    "Cinco días hábiles desde la fecha de expedición del pliego.",
    "Quince días contados desde el traslado de alegatos precalificatorios.",
    "El artículo 225 fija tres días tras notificar.",
    "La expedición no es el hito de remisión.",
    "Los alegatos corresponden a un momento anterior.",
    "CGD, arts. 225",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m34-q3": [
    "Vencidos los descargos en juicio ordinario, el juzgador advierte un error de calificación y devuelve motivadamente el expediente al instructor.",
    "¿Qué plazo máximo establece la ley para que el instructor efectúe la nueva calificación?",
    "Quince días contados conforme a la decisión de devolución.",
    "Diez días, como para descargos posteriores a la variación de cargos.",
    "Treinta días hábiles, como para proferir el fallo del juicio ordinario.",
    "El numeral 1 del artículo 225D fija quince días.",
    "Diez días corresponden a otra oportunidad.",
    "El plazo de fallo no aplica a esta devolución.",
    "CGD, arts. 225D,225F",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m34-q4": [
    "Agotado el período probatorio del juicio ordinario, aparece una prueba sobreviniente que obliga a variar el pliego. El juzgador realiza la variación.",
    "¿Qué término de defensa debe otorgarse después de notificarla como pliego?",
    "Diez días para presentar descargos, solicitar y aportar pruebas.",
    "Quince días para presentar descargos según el término ordinario inicial.",
    "Cinco días para presentar exclusivamente recurso de reposición contra la variación.",
    "El numeral 5 del artículo 225D fija diez días.",
    "La variación tiene regla especial.",
    "El trámite no se sustituye por reposición.",
    "CGD, arts. 225D",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m34-q5": [
    "Una presentación institucional afirma que el juzgador disciplinario de la Procuraduría ejerce jurisdicción judicial por el solo hecho de estar separado del instructor.",
    "¿Qué corrección corresponde según la Sentencia C-030 de 2023?",
    "La función disciplinaria de la PGN es administrativa, pese a la separación interna.",
    "La separación interna convierte a cada juzgador en juez de la República.",
    "La sentencia suprimió toda función disciplinaria de la Procuraduría General de la Nación.",
    "La Corte excluyó el carácter jurisdiccional atribuido por la reforma.",
    "La separación es garantía administrativa.",
    "No desapareció toda potestad disciplinaria.",
    "CGD, arts. 2,12; C-030/2023",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "cc-c030-2023"
    ]
  ],
  "pgn-m34-q6": [
    "Al remitir un expediente de instrucción, el profesional encuentra documentos de descargo y constancias de notificación que el instructor considera poco relevantes para su hipótesis.",
    "¿Qué criterio preserva la independencia y las garantías del juzgamiento?",
    "Entregar el expediente íntegro con cargo, descargo, índice y estado de notificaciones.",
    "Remitir solo la prueba de cargo y reservar el descargo para una petición futura.",
    "Incluir una instrucción vinculante sobre la sanción que debe adoptar el juzgador.",
    "El juzgador requiere acceso integral para valorar independientemente.",
    "Omitir descargo desconoce investigación integral.",
    "La instrucción no predetermina el fallo.",
    "CGD, arts. 12,13,148,225",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q1": [
    "",
    "¿A quién corresponde la carga de probar la responsabilidad disciplinaria?",
    "Al Estado, incluso cuando el investigado no aporta pruebas.",
    "Al investigado, desde que se le notifica la apertura.",
    "Al quejoso, una vez ratifica el contenido de su escrito.",
    "La carga estatal no cambia por el silencio.",
    "La apertura no invierte la carga.",
    "El quejoso no asume la carga estatal.",
    "CGD, arts. 147",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q2": [
    "El instructor conoce una fuente favorable que ninguna parte ha solicitado.",
    "¿Qué facultad permite incorporar esa fuente pertinente al expediente?",
    "Decretar prueba de oficio, con el mismo rigor aplicado al cargo.",
    "Reservarla hasta que la defensa solicite expresamente su incorporación.",
    "Incorporarla únicamente si coincide con la hipótesis inicial del despacho.",
    "La investigación imparcial permite decreto oficioso.",
    "No depende exclusivamente de solicitud.",
    "Debe examinarse el descargo.",
    "CGD, arts. 148",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q3": [
    "Un expediente permite identificar al posible autor de una falta, pero aún no demuestra objetivamente su comisión.",
    "¿Qué etapa puede iniciarse sin exigir certeza sancionatoria?",
    "Investigación disciplinaria, si se cumplen los presupuestos de apertura.",
    "Formulación de cargos, por haberse identificado al presunto autor.",
    "Juzgamiento, porque la identidad ya permite resolver el fondo.",
    "El estándar de apertura es distinto.",
    "Los cargos requieren prueba adicional.",
    "El juicio presupone la acusación correspondiente.",
    "CGD, arts. 211,222",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q4": [
    "El pliego se sustentó en prueba que comprometía al disciplinado. Al finalizar el juicio subsiste duda razonable.",
    "¿Qué estándar debe prevalecer al decidir el fallo?",
    "Certeza de falta y responsabilidad, no el estándar previo de cargos.",
    "Probabilidad de responsabilidad, suficiente desde la formulación de cargos.",
    "Demostración del hecho objetivo, independientemente de su atribución personal.",
    "El fallo exige certeza de ambos elementos.",
    "El estándar de cargos no basta.",
    "La autoría y culpabilidad importan.",
    "CGD, arts. 14,160",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q5": [
    "Un informe acredita el cambio de un registro, pero otra fuente acredita acceso compartido a la cuenta utilizada.",
    "¿Qué debe consignarse como vacío probatorio en la matriz?",
    "La identidad del operador y las diligencias necesarias para individualizarlo.",
    "La gravedad definitiva de la falta, deducida de la titularidad nominal.",
    "La sanción correspondiente, calculada con base en el cambio registrado.",
    "El cambio no acredita identidad personal.",
    "Titularidad no determina gravedad.",
    "La sanción presupone responsabilidad.",
    "CGD, arts. 147,148",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m35-q6": [
    "Se prueba que el servidor ejecutó una operación. Una orden de contingencia pudo justificarla.",
    "¿Qué examen falta para valorar integralmente ese hecho?",
    "Contrastar la orden, su alcance y la afectación injustificada del deber.",
    "Determinar la sanción a partir de la ejecución material ya demostrada.",
    "Descartar la orden porque fue aportada después de la primera hipótesis.",
    "La justificación puede afectar ilicitud o exclusión.",
    "La autoría no agota responsabilidad.",
    "El descargo exige examen.",
    "CGD, arts. 9,13,31",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q1": [
    "",
    "¿Qué diferencia la pertinencia de la conducencia de una prueba?",
    "La relación con el hecho frente a la idoneidad jurídica del medio.",
    "La confiabilidad de la fuente frente a la fecha de incorporación.",
    "La cantidad de documentos frente al costo de practicar la diligencia.",
    "Son filtros de relación e idoneidad jurídica.",
    "Origen y fecha son otros controles.",
    "Costo y volumen no los definen.",
    "CGD, arts. 151",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q2": [
    "Dos certificados idénticos proceden de la misma base y no agregan información nueva.",
    "¿Qué filtro permite examinar la necesidad de solicitar un tercero idéntico?",
    "Utilidad, porque debe aportar algo al esclarecimiento del hecho.",
    "Pertinencia, porque toda fuente repetida pierde conexión con el hecho.",
    "Conducencia, porque una copia repetida es jurídicamente inadmisible.",
    "La redundancia afecta el aporte adicional.",
    "Puede seguir siendo pertinente.",
    "La copia no es necesariamente inconducente.",
    "CGD, arts. 151",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q3": [
    "En investigación se niega motivadamente una prueba pedida por la defensa por ser superflua.",
    "¿Qué recurso corresponde según la etapa descrita?",
    "Reposición ante el funcionario que adoptó la decisión.",
    "Apelación ante el superior en efecto suspensivo.",
    "Queja directa ante el superior sin apelación rechazada.",
    "El art. 133 prevé reposición en investigación.",
    "La apelación probatoria corresponde al juicio.",
    "La queja tiene otro presupuesto.",
    "CGD, arts. 133,134,151",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q4": [
    "Se necesita verificar accesos de una cuenta durante dos días. Se propone obtener la totalidad de correos personales de todos los empleados.",
    "¿Qué alcance probatorio resulta proporcionado al hecho investigado?",
    "Delimitar período, cuenta y campos necesarios mediante autorización legal.",
    "Recaudar todas las comunicaciones por si alguna resulta pertinente posteriormente.",
    "Descartar la prueba de accesos por contener posibles datos personales.",
    "Delimitar reduce afectación innecesaria.",
    "La utilidad eventual no justifica recaudo indiscriminado.",
    "Puede obtenerse información lícitamente delimitada.",
    "CGD, arts. 151,155",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q5": [
    "Un reporte y una captura de ese reporte muestran la misma operación registrada.",
    "¿Qué diferencia existe frente a una declaración presencial independiente?",
    "La captura reproduce la fuente; la declaración puede aportar corroboración autónoma.",
    "La captura genera otro indicio independiente por tener formato diferente.",
    "La declaración no puede corroborar un registro de naturaleza digital.",
    "La independencia depende del origen informativo.",
    "Cambiar formato no crea otra fuente.",
    "Medios diferentes pueden corroborarse.",
    "CGD, arts. 159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m36-q6": [
    "Una diligencia inicialmente pertinente se refería al 3 de mayo. Se demuestra que el hecho ocurrió el 10 de junio.",
    "¿Qué ajuste corresponde al evaluar su decreto o práctica?",
    "Revisar el período y la conexión de la diligencia con el hecho corregido.",
    "Mantener el período original para conservar la coherencia de la hipótesis.",
    "Negar toda prueba nueva porque cambió una premisa temporal de la investigación.",
    "La pertinencia depende de los hechos actualizados.",
    "La hipótesis debe ajustarse a evidencia.",
    "El cambio no impide nuevas diligencias.",
    "CGD, arts. 148,151",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q1": [
    "",
    "¿Qué distingue la autenticidad de la integridad de un archivo?",
    "La primera concierne a su origen; la segunda, a la conservación de su contenido.",
    "La primera prueba su licitud; la segunda acredita responsabilidad del autor.",
    "Ambas acreditan que todo lo declarado en el documento es verdadero.",
    "Son propiedades distintas de la evidencia.",
    "Ninguna sustituye la legalidad ni autoría personal.",
    "No garantizan veracidad de afirmaciones.",
    "CGD, arts. 158,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q2": [
    "Un archivo conserva una huella íntegra, pero se obtuvo vulnerando derechos fundamentales del investigado.",
    "¿Qué efecto exige examinar el artículo 158 del CGD?",
    "Tener la prueba como inexistente cuando se configura el supuesto legal.",
    "Admitirla por ser técnicamente íntegra y pertinente para la investigación.",
    "Reducir su mérito sin aplicar la consecuencia jurídica de la obtención ilícita.",
    "La integridad no sanea vulneraciones de derechos.",
    "La pertinencia no elimina ilicitud.",
    "La norma establece inexistencia en ese supuesto.",
    "CGD, arts. 158",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q3": [
    "Una defensa acaba de ser notificada de la vinculación a la investigación.",
    "¿Desde qué momento puede ejercer la contradicción probatoria prevista en el Código?",
    "Desde la notificación de vinculación en los términos del artículo 157.",
    "Desde la ejecutoria del fallo de primera instancia, por ser decisión definitiva.",
    "Desde la formulación de cargos, aunque ya se encuentre vinculada legalmente.",
    "La vinculación notificada habilita contradicción.",
    "No se difiere al fallo.",
    "No exige esperar cargos.",
    "CGD, arts. 157",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q4": [
    "Un dictamen contiene resultados técnicos, pero omite el método y los datos examinados.",
    "¿Qué información necesita la defensa para controvertir su conclusión?",
    "Los fundamentos, operaciones y fuentes que permiten examinar el resultado.",
    "Únicamente la identificación del perito y su título profesional.",
    "La conclusión jurídica del funcionario antes de conocer el método empleado.",
    "La contradicción requiere examinar fundamentos.",
    "La identidad no sustituye metodología.",
    "La conclusión jurídica no revela el método.",
    "CGD, arts. 157,179,180",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q5": [
    "Se identifica una posible irregularidad en la obtención de una fuente digital.",
    "¿Qué comprobación distingue una falla documental de una causal de inexistencia?",
    "Determinar la formalidad omitida, su carácter sustancial y el derecho comprometido.",
    "Clasificar cualquier ausencia de firma como vulneración de derechos fundamentales.",
    "Considerar suficiente que el dato obtenido resulte útil para aclarar el hecho.",
    "La consecuencia depende de los presupuestos del artículo 158.",
    "No toda falta de firma tiene igual efecto.",
    "La utilidad no resuelve legalidad.",
    "CGD, arts. 158",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m37-q6": [
    "Una prueba se tiene como inexistente. El expediente contiene otros documentos obtenidos independientemente y de manera legal.",
    "¿Qué análisis corresponde antes de adoptar la decisión de fondo?",
    "Valorar las pruebas legales restantes y establecer si satisfacen el estándar aplicable.",
    "Anular automáticamente toda actuación sin examinar dependencia de otras fuentes.",
    "Conservar la prueba inexistente como indicio auxiliar para reforzar la conclusión.",
    "El mérito restante exige examen independiente.",
    "No se deriva nulidad universal automáticamente.",
    "No debe fundarse la decisión en prueba inexistente.",
    "CGD, arts. 147,158,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q1": [
    "",
    "¿Qué diferencia una hipótesis probatoria de una conclusión de responsabilidad?",
    "La hipótesis es contrastable y admite evidencia que pueda refutarla.",
    "La hipótesis fija definitivamente la responsabilidad desde el inicio del análisis.",
    "La conclusión es una lista de fuentes sin interpretación de sus resultados.",
    "Una hipótesis debe someterse a comprobación.",
    "No prejuzga el caso.",
    "La conclusión requiere razonamiento sustentado.",
    "CGD, arts. 148,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q2": [
    "Se examina una modificación de permisos de acceso. No se conoce quién la ejecutó ni si estaba autorizada.",
    "¿Qué pregunta probatoria debe orientar el recaudo inicial?",
    "Qué cuenta, persona y autorización se relacionan con la modificación concreta.",
    "Cuál sanción corresponde al administrador según el valor del activo afectado.",
    "Qué testigo está dispuesto a confirmar la hipótesis de alteración deliberada.",
    "La pregunta conecta hechos, autoría y deber.",
    "La sanción no precede a la prueba.",
    "Buscar confirmación no basta.",
    "CGD, arts. 148",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q3": [
    "Un registro se sobrescribirá próximamente y la autoridad aún no definió las hipótesis finales.",
    "¿Qué acción debe priorizar el plan de prueba?",
    "Preservar oportunamente la fuente mediante autoridad habilitada y documentar su obtención.",
    "Esperar la conclusión del análisis para evitar recoger información que resulte redundante.",
    "Modificar el registro original para extraer únicamente los eventos inicialmente sospechosos.",
    "La preservación evita pérdida irreversible.",
    "Esperar puede impedir recaudo.",
    "No se debe alterar la fuente para analizarla.",
    "CGD, arts. 155",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q4": [
    "El despacho requiere análisis especializado de una exportación de datos y no cuenta con personal idóneo.",
    "¿Qué mecanismo contempla el CGD para obtener apoyo técnico estatal?",
    "Solicitar colaboración técnica mediante el funcionario competente que conoce de la actuación.",
    "Transferir la decisión del proceso al organismo que tenga el equipo técnico.",
    "Designar al analista como autoridad de policía judicial por su especialidad informática.",
    "El artículo 156 prevé apoyo técnico.",
    "La colaboración no transfiere decisión.",
    "La especialidad no confiere policía judicial.",
    "CGD, arts. 156,200",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q5": [
    "Un evento figura a las 18:20 UTC. El servidor utiliza la hora de Colombia UTC−5.",
    "¿Qué hora nominal local corresponde al evento, sin corregir desfases del reloj?",
    "13:20 del mismo día, al restar cinco horas.",
    "23:20 del mismo día, al sumar cinco horas.",
    "18:20 del mismo día, conservando el valor sin conversión.",
    "18:20 menos cinco horas es 13:20.",
    "La conversión tiene signo contrario.",
    "No son la misma referencia horaria.",
    "CGD, arts. 159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m38-q6": [
    "Un reloj estaba adelantado aproximadamente dos minutos y su desfase no se conoce con precisión.",
    "¿Cómo debe reflejarse esa limitación en la cronología analítica?",
    "Conservar la marca original y registrar la corrección estimada con su incertidumbre.",
    "Cambiar el registro original para que todos los eventos queden exactamente sincronizados.",
    "Eliminar las fuentes del reloj adelantado aunque puedan aportar información contextual.",
    "La normalización no debe inventar exactitud.",
    "El original debe preservarse.",
    "La incertidumbre no implica inutilidad.",
    "CGD, arts. 159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m39-q1": [
    "",
    "¿Qué exige la sana crítica al motivar el mérito de una prueba?",
    "Explicar inferencias, premisas acreditadas y valoración conjunta del material.",
    "Contabilizar documentos y asignar mayor mérito a la fuente más repetida.",
    "Adoptar la conclusión técnica sin examinar sus fundamentos ni limitaciones.",
    "El artículo 159 exige apreciación conjunta y razonada.",
    "El conteo no determina mérito.",
    "El informe técnico también requiere valoración.",
    "CGD, arts. 159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m39-q2": [
    "Dos declaraciones coinciden en un dato, pero ambas personas lo conocieron por el mismo mensaje.",
    "¿Qué cautela corresponde al valorar esa coincidencia?",
    "Examinar su origen común antes de tratarla como corroboración independiente.",
    "Asignar mérito doble por existir dos declaraciones formalmente diferentes.",
    "Descartar ambas por no provenir de una observación directamente presencial.",
    "La independencia informativa debe comprobarse.",
    "Dos declaraciones pueden compartir fuente.",
    "Pueden tener utilidad limitada.",
    "CGD, arts. 159,176",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m39-q3": [
    "Un indicio se construye a partir de una supuesta llamada que ninguna fuente del expediente acredita.",
    "¿Qué requisito falta para utilizar esa inferencia indiciaria?",
    "Demostrar el hecho indicador del que parte el razonamiento lógico.",
    "Obtener una confesión que ratifique cualquier inferencia formulada por el instructor.",
    "Repetir la hipótesis en varios informes para obtener convergencia de indicios.",
    "El artículo 198 exige hecho indicador probado.",
    "No exige confesión como requisito universal.",
    "Repetición no demuestra el hecho.",
    "CGD, arts. 196,198",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m39-q4": [
    "Un hecho indicador probado se divide artificialmente en tres fragmentos para presentarlos como indicios independientes.",
    "¿Qué regla impide multiplicar de ese modo su fuerza demostrativa?",
    "La indivisibilidad del hecho indicador establecida en el artículo 197.",
    "La prohibición absoluta de valorar varios indicios en el mismo expediente.",
    "La obligación de valorar exclusivamente pruebas directas para cualquier decisión.",
    "El hecho indicador no se fragmenta artificialmente.",
    "La pluralidad de indicios sí es posible.",
    "Los indicios son medio reconocido.",
    "CGD, arts. 149,197,199",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m39-q5": [
    "Se analiza un caso del artículo 53.5 del CGD sobre acoso sexual laboral.",
    "¿Qué enfoque exige la regla especial de valoración incorporada por Ley 2365?",
    "Diferencial e interseccional, atendiendo las circunstancias y relaciones de poder pertinentes.",
    "Exclusivamente cuantitativo, basado en el número de declaraciones de cada parte.",
    "Presunción automática de responsabilidad por la condición jerárquica de la persona señalada.",
    "El artículo 160A establece ese enfoque.",
    "El conteo no satisface la valoración.",
    "El enfoque no elimina la presunción de inocencia.",
    "CGD, arts. 160A",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "ley-2365-2024"
    ]
  ],
  "pgn-m39-q6": [
    "En el caso anterior, una diligencia propuesta puede exponer innecesariamente a la víctima y no agrega información pertinente.",
    "¿Qué control debe ejercer la autoridad antes de decretarla?",
    "Examinar su aporte, las garantías de defensa y el riesgo para los derechos de la víctima.",
    "Practicar toda diligencia solicitada porque el enfoque diferencial no admite restricciones probatorias.",
    "Denegar cualquier contradicción del investigado porque existe un contexto de vulnerabilidad acreditado.",
    "El artículo 160A exige protección compatible con garantías.",
    "No toda prueba resulta necesaria.",
    "El enfoque no suprime defensa.",
    "CGD, arts. 151,160A",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "ley-2365-2024"
    ]
  ],
  "pgn-m40-q1": [
    "",
    "¿Qué valor tiene el relato de una queja frente a sus anexos documentales?",
    "La queja orienta el recaudo; los anexos pueden valorarse según sana crítica.",
    "La queja acredita los hechos cuando está firmada; los anexos solo ilustran.",
    "Los anexos carecen de valor porque forman parte de una noticia disciplinaria.",
    "El artículo 187 distingue relato y anexos.",
    "La firma no prueba hechos ni responsabilidad.",
    "Los anexos pueden ser medios valorables.",
    "CGD, arts. 187",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m40-q2": [
    "Una copia documental legible se aporta al expediente. No existe duda concreta sobre su autenticidad.",
    "¿Qué regla permite su incorporación sin exigir siempre el original?",
    "El artículo 188 admite documentos originales y copias según sus condiciones.",
    "El artículo 188 exige que toda copia sea ratificada mediante testimonio.",
    "La copia solo puede orientar la investigación, nunca servir como documento probatorio.",
    "El Código permite original o copia.",
    "No exige ratificación universal.",
    "La copia puede tener mérito probatorio.",
    "CGD, arts. 188",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m40-q3": [
    "Una exportación electrónica permite acreditar su contenido completo e inalterado y puede presentarse cuando se requiera.",
    "¿Qué exigencia funcional satisface respecto de la originalidad del mensaje de datos?",
    "Garantía confiable de integridad y posibilidad de presentar la información.",
    "Existencia de una impresión física firmada por el usuario del sistema.",
    "Identificación definitiva de la persona que realizó cada operación registrada.",
    "El artículo 8 de Ley 527 establece esos requisitos.",
    "No exige soporte papel universal.",
    "Originalidad no equivale a autoría de cada operación.",
    "Ley 527/1999 arts. 8–9",
    [
      "ley-527-1999"
    ]
  ],
  "pgn-m40-q4": [
    "Una entidad conserva correos en un archivo que elimina las fechas de envío y los datos de destino disponibles originalmente.",
    "¿Qué requisito de conservación de mensajes debe revisar?",
    "La conservación de los datos disponibles de origen, destino, fecha y hora.",
    "La impresión periódica de cada mensaje, aunque se pierdan sus metadatos.",
    "La eliminación de encabezados para garantizar que el archivo siga siendo legible.",
    "La Ley 527 incluye esos datos en la conservación.",
    "Imprimir no reemplaza información disponible.",
    "Legibilidad no justifica su eliminación.",
    "Ley 527/1999 art. 12",
    [
      "ley-527-1999"
    ]
  ],
  "pgn-m40-q5": [
    "Un informe de datos registrados en archivos institucionales responde un requerimiento del despacho.",
    "¿Qué característica exige el CGD al elaborar ese informe?",
    "Motivación, juramento y explicación del origen de los datos reportados.",
    "Conclusión de responsabilidad y calificación de la conducta del investigado.",
    "Dictamen de dos expertos, incluso cuando solo reproduce datos registrados.",
    "Los artículos 193–194 regulan informes técnicos de archivos.",
    "No declara responsabilidad.",
    "No se confunde con dictamen pericial.",
    "CGD, arts. 193–194",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m40-q6": [
    "Un sujeto procesal desea controvertir un informe técnico de datos registrados por considerarlo incompleto.",
    "¿Qué oportunidad específica prevé el artículo 195 para esa actuación?",
    "Tres días para solicitar aclaración o complementación del informe.",
    "Cinco días para presentar objeción por error grave del informe.",
    "Diez días para formular apelación contra el informe técnico recibido.",
    "El artículo 195 fija traslado de tres días.",
    "Excluye objeción por error grave.",
    "El informe no es fallo apelable.",
    "CGD, arts. 195",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m41-q1": [
    "",
    "¿Qué personas están exceptuadas de declarar contra familiares protegidos constitucionalmente?",
    "Quienes se encuentren en los vínculos de parentesco o relación del artículo 33 constitucional.",
    "Únicamente servidores vinculados al expediente como testigos de una entidad pública.",
    "Solo abogados que tengan un contrato vigente con la persona disciplinada.",
    "La Constitución protege a quienes tienen esos vínculos.",
    "El carácter público no define la excepción.",
    "El secreto profesional es otra excepción.",
    "CGD, arts. 164,166; Constitución art. 33",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "constitucion"
    ]
  ],
  "pgn-m41-q2": [
    "Una persona llamada como testigo conoce hechos exclusivamente por su ejercicio profesional protegido por secreto.",
    "¿Qué garantía debe examinar el funcionario al recibir la declaración?",
    "La excepción legal de declarar sobre aquello confiado por razón de la profesión.",
    "La obligación de revelar cualquier dato bajo juramento si el despacho lo solicita.",
    "La obligación de declarar mientras no figure formalmente como sujeto procesal.",
    "El artículo 167 protege información confiada profesionalmente.",
    "El juramento no elimina el secreto.",
    "La excepción no depende de ser parte.",
    "CGD, arts. 167",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m41-q3": [
    "Un testigo observó un incidente desde lejos y afirma conocer además la intención de quien actuó.",
    "¿Qué debe examinarse al valorar ese relato conforme a sana crítica?",
    "Las condiciones de percepción y la diferencia entre observación e inferencia.",
    "La seguridad con que relata los hechos como demostración suficiente de exactitud.",
    "La duración de la declaración como indicador principal de su mérito probatorio.",
    "El artículo 176 atiende condiciones de percepción.",
    "Confianza no garantiza precisión.",
    "Duración no determina mérito.",
    "CGD, arts. 176",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m41-q4": [
    "Un testigo relata lo que otra persona le contó después del incidente.",
    "¿Qué tratamiento permite precisar el alcance de su conocimiento?",
    "Identificar qué conoció directamente y qué información recibió de otra fuente.",
    "Atribuirle percepción presencial por reproducir con detalle el relato del incidente.",
    "Excluir toda declaración que contenga información recibida de otras personas.",
    "La fuente de conocimiento determina alcance.",
    "Detalle no prueba percepción directa.",
    "La valoración exige distinguir, no excluir automáticamente.",
    "CGD, arts. 175,176",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m41-q5": [
    "Una persona investigada guarda silencio en versión libre y no presenta una explicación alternativa.",
    "¿Qué efecto tiene ese comportamiento respecto de una confesión?",
    "No constituye confesión ni sustituye la carga probatoria que corresponde al Estado.",
    "Equivale a aceptar tácitamente la falta si la citación fue válida.",
    "Permite aplicar los beneficios de confesión sin verificar los requisitos legales.",
    "El silencio es ejercicio de defensa.",
    "No equivale a aceptación.",
    "Los beneficios exigen confesión válida.",
    "CGD, arts. 14,147,161",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m41-q6": [
    "Un testigo no exceptuado falta a la citación y no justifica satisfactoriamente su inasistencia en los tres días siguientes.",
    "¿Qué sanción y recurso contempla el régimen de renuencia?",
    "Multa hasta cincuenta salarios mínimos diarios de la época del hecho, con reposición.",
    "Multa fija de cincuenta salarios mínimos mensuales, con apelación obligatoria.",
    "Privación de libertad hasta que acepte rendir testimonio, sin recurso ordinario.",
    "El artículo 165 prevé multa con ese límite y reposición.",
    "No es multa mensual fija.",
    "La conducción excepcional no autoriza privación de libertad.",
    "CGD, arts. 165",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q1": [
    "",
    "¿Qué diferencia un dictamen pericial de una conclusión jurídica del instructor?",
    "El dictamen explica conocimiento especializado; la responsabilidad la decide la autoridad competente.",
    "El dictamen establece la sanción; el instructor verifica únicamente la idoneidad del experto.",
    "El dictamen sustituye la valoración de cualquier otra prueba por su carácter técnico.",
    "El perito no emite juicio de responsabilidad.",
    "La sanción no corresponde al experto.",
    "El mérito se valora en conjunto.",
    "CGD, arts. 179,182",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q2": [
    "Un perito acepta un encargo informático. Su borrador no explica los materiales ni las operaciones efectuadas.",
    "¿Qué aspecto debe completar para satisfacer los requisitos del dictamen?",
    "El fundamento técnico, los materiales examinados y el método aplicado.",
    "La sanción recomendada según su apreciación de los hechos del expediente.",
    "La identidad de todos los sujetos procesales aunque no intervengan en el análisis.",
    "El dictamen debe ser motivado y verificable.",
    "No puede declarar responsabilidad.",
    "La identificación no sustituye metodología.",
    "CGD, arts. 179",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q3": [
    "El despacho dispone la aclaración de un dictamen pericial ya trasladado a los sujetos procesales.",
    "¿Qué término máximo inicial puede conceder al perito para esa aclaración?",
    "Cinco días, con la prórroga por una vez prevista en la norma.",
    "Tres días, igual al término común de traslado inicial del dictamen.",
    "Diez días, sin posibilidad de ampliación conforme al régimen pericial.",
    "El artículo 180 fija máximo de cinco días prorrogable una vez.",
    "Tres días corresponden al traslado.",
    "No es el plazo indicado.",
    "CGD, arts. 180",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q4": [
    "Una solicitud de aclaración del dictamen se niega motivadamente por el funcionario competente.",
    "¿Qué recurso prevé el trámite pericial frente a esa negativa?",
    "Reposición contra la decisión que niega la aclaración solicitada.",
    "Apelación en efecto suspensivo contra el dictamen pericial inicial.",
    "Queja directa contra el perito por no completar el informe.",
    "El artículo 180 prevé reposición.",
    "No se apela el dictamen como providencia.",
    "Queja no es el mecanismo descrito.",
    "CGD, arts. 180",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q5": [
    "El dictamen de un experto experimentado utiliza muestras insuficientes. Otro explica una metodología sólida y verificable.",
    "¿Qué criterio permite comparar su mérito probatorio?",
    "Solidez, precisión, fundamentos e idoneidad, junto con las demás pruebas.",
    "Antigüedad del experto como factor exclusivo de mérito probatorio.",
    "Fecha de presentación, privilegiando siempre el dictamen más reciente.",
    "El artículo 182 exige valoración cualitativa.",
    "La antigüedad es solo un elemento contextual.",
    "La fecha no decide mérito automáticamente.",
    "CGD, arts. 182",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m42-q6": [
    "Una cuestión técnica requiere que el perito explique personalmente aspectos de su dictamen ante el despacho.",
    "¿Qué posibilidad contempla el artículo 181 del CGD?",
    "Ordenar la comparecencia del perito a audiencia para explicar su dictamen.",
    "Sustituir el dictamen por una declaración del instructor sobre el método utilizado.",
    "Excluir el dictamen porque toda explicación posterior a su presentación está prohibida.",
    "La comparecencia está prevista legalmente.",
    "El instructor no reemplaza conocimiento experto.",
    "Puede explicarse el dictamen.",
    "CGD, arts. 181",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q1": [
    "",
    "¿Qué objeto permite diferenciar la inspección disciplinaria de una simple solicitud de documentos?",
    "La verificación directa de cosas, lugares, bienes u otros efectos materiales relevantes.",
    "La obtención de cualquier copia de documentos conservados en otro expediente judicial.",
    "La formulación de una conclusión de responsabilidad sin examinar físicamente los hechos.",
    "El artículo 185 permite constatación directa.",
    "Obtener copias es otra actuación probatoria.",
    "La inspección no es fallo.",
    "CGD, arts. 185",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q2": [
    "Durante una inspección se recogen elementos materiales útiles para verificar los hechos.",
    "¿Qué procedimiento exige el CGD para su identificación y conservación?",
    "Aplicar los procedimientos de cadena de custodia y registrar los elementos.",
    "Conservar únicamente fotografías sin identificar los elementos materiales efectivamente recogidos.",
    "Entregarlos al experto sin registro, dejando que este reconstruya su origen.",
    "El artículo 185 exige cadena de custodia.",
    "La fotografía no sustituye registro de recaudo.",
    "La trazabilidad comienza al recogerlos.",
    "CGD, arts. 185",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q3": [
    "Fiscalía descubrió elementos materiales probatorios con el escrito de acusación, aún no introducidos en juicio penal.",
    "¿Qué condición permite incorporarlos conforme al artículo 154 del CGD?",
    "Trasladarlos y someterlos a contradicción dentro de la actuación disciplinaria.",
    "Esperar siempre la sentencia penal ejecutoriada para solicitar cualquier elemento descubierto.",
    "Darles automáticamente el mérito definitivo asignado por la autoridad penal de origen.",
    "La norma permite trasladar esos elementos con contradicción.",
    "No exige sentencia penal.",
    "El mérito se aprecia en disciplina.",
    "CGD, arts. 154",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q4": [
    "Una prueba fue practicada válidamente en una actuación administrativa nacional y el despacho desea incorporarla.",
    "¿Qué mecanismo de traslado contempla la regla general?",
    "Obtener copia autorizada por el funcionario que conserva la actuación de origen.",
    "Obtener únicamente un resumen informal elaborado por un tercero conocedor del caso.",
    "Solicitar al investigado que declare auténtica la conclusión de la autoridad anterior.",
    "El artículo 154 regula copia autorizada.",
    "Un resumen no sustituye la prueba trasladada.",
    "La defensa no valida la conclusión externa.",
    "CGD, arts. 154",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q5": [
    "Se incorpora copia autorizada de una diligencia en otro proceso. La documentación no indica cuándo se permitió examinarla a los sujetos procesales.",
    "¿Qué elemento debe completarse en la matriz de ingreso?",
    "La oportunidad y constancia de contradicción de la prueba trasladada.",
    "El nombre de quien redactó el proyecto de sanción del proceso anterior.",
    "La fecha estimada en que se impondrá la sanción disciplinaria actual.",
    "La contradicción debe ser verificable.",
    "No sustituye constancia de acceso.",
    "La sanción es una decisión posterior.",
    "CGD, arts. 154,157",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m43-q6": [
    "La inspección trasladada demuestra una condición física, pero el proceso anterior perseguía una finalidad jurídica diferente.",
    "¿Cómo debe delimitarse el valor de la diligencia incorporada?",
    "Precisar el hecho demostrado y valorar su relación con el objeto disciplinario.",
    "Adoptar integralmente la decisión de origen por haber sido emitida por otra autoridad.",
    "Descartar todo el medio porque las finalidades procesales no son idénticas.",
    "El traslado no impone la valoración jurídica ajena.",
    "El mérito debe examinarse autónomamente.",
    "La diferencia no vuelve inútil la prueba.",
    "CGD, arts. 154,159",
    [
      "ley-1952-2019",
      "ley-2094-2021"
    ]
  ],
  "pgn-m44-q1": [
    "",
    "¿Qué acredita principalmente una coincidencia de huellas SHA-256 entre dos archivos?",
    "Coincidencia binaria con alta confianza, sin demostrar por sí sola autoría.",
    "Identidad del operador, autorización y legalidad de obtención de ambos archivos.",
    "Fecha exacta de creación y ausencia de cualquier manipulación antes de adquirirlos.",
    "El hash verifica contenido comparado.",
    "No acredita identidad ni legalidad.",
    "No prueba la historia anterior.",
    "NIST SP 800-86",
    [
      "nist-sp-800-86"
    ]
  ],
  "pgn-m44-q2": [
    "Se recibe una exportación de registros sin datos del responsable ni intervalo de extracción.",
    "¿Qué información debe documentarse para identificar la fuente de evidencia?",
    "Origen, responsable, alcance temporal, procedimiento y autorización de adquisición.",
    "Únicamente el tamaño del archivo y el nombre asignado por el analista.",
    "La conclusión jurídica que se espera obtener antes de registrar la fuente.",
    "La trazabilidad comienza por origen y adquisición.",
    "Nombre y tamaño son insuficientes.",
    "La expectativa no identifica la fuente.",
    "NIST SP 800-86",
    [
      "nist-sp-800-86"
    ]
  ],
  "pgn-m44-q3": [
    "Una hoja de cálculo convierte automáticamente identificadores numéricos con ceros iniciales.",
    "¿Qué control permite analizar los datos sin alterar la referencia original?",
    "Importar desde la copia con tipos controlados y documentar las transformaciones.",
    "Guardar el archivo convertido como original para unificar los formatos disponibles.",
    "Restaurar manualmente los ceros sin conservar la exportación ni registrar cambios.",
    "Separar original y análisis conserva reproducibilidad.",
    "Sobrescribir elimina referencia.",
    "La corrección debe ser verificable.",
    "NIST SP 800-86",
    [
      "nist-sp-800-86"
    ]
  ],
  "pgn-m44-q4": [
    "Un analista filtra un conjunto de 1.000 eventos y conserva 120 para su informe.",
    "¿Qué registro metodológico permite reproducir esa selección?",
    "Filtros, criterio temporal, recuentos antes y después, herramienta y versión.",
    "Únicamente el total final de 120 eventos y la conclusión del informe.",
    "La eliminación del conjunto original para que solo existan registros relevantes.",
    "Los parámetros permiten replicar selección.",
    "El total no describe el procedimiento.",
    "El original debe conservarse.",
    "NIST SP 800-86",
    [
      "nist-sp-800-86"
    ]
  ],
  "pgn-m44-q5": [
    "Un informe técnico acredita integridad de un archivo, pero la autorización de su obtención todavía no está comprobada.",
    "¿Qué distinción debe expresar el profesional en su informe?",
    "La integridad técnica y la legalidad de adquisición son comprobaciones separadas.",
    "La huella íntegra demuestra por sí misma la autorización jurídica de obtención.",
    "La falta de autorización documentada prueba necesariamente falsedad del contenido digital.",
    "Son dimensiones distintas de la evidencia.",
    "El hash no prueba legalidad.",
    "La incertidumbre jurídica no prueba falsedad.",
    "CGD, arts. 158,159; NIST SP 800-86",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "nist-sp-800-86"
    ]
  ],
  "pgn-m44-q6": [
    "Una transferencia de evidencia carece de constancia de recepción, aunque se conservan las huellas de integridad previas y actuales.",
    "¿Qué actuación permite valorar ese vacío sin ocultarlo ni prejuzgar?",
    "Documentar la incidencia, reconstruir la trazabilidad posible y evaluar su impacto.",
    "Declarar automáticamente nulo todo el proceso por faltar una constancia de transferencia.",
    "Crear retroactivamente una constancia sin verificar quién recibió realmente el elemento.",
    "La incidencia requiere evaluación documentada.",
    "No determina nulidad universal por sí sola.",
    "No se inventan registros de custodia.",
    "CGD, arts. 185; NIST SP 800-86",
    [
      "ley-1952-2019",
      "ley-2094-2021",
      "nist-sp-800-86"
    ]
  ],
  "pgn-m45-q1": [
    "",
    "¿Qué diferencia la prevención integral de la función preventiva específica?",
    "La primera atraviesa la gestión institucional; la segunda tiene objeto y competencias propios.",
    "La primera es exclusivamente disciplinaria; la segunda reemplaza la gestión administrativa.",
    "Ambas permiten al operador asumir las decisiones de cualquier entidad vigilada.",
    "La prevención integral tiene alcance transversal.",
    "La vigilancia conserva autonomía y límites.",
    "Prevenir no significa coadministrar.",
    "Resolución PGN 132/2014 arts. 3–5",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m45-q2": [
    "Una alerta verificable permite solicitar dos documentos para aclarar el riesgo, sin exigir paralizar el servicio.",
    "¿Qué principio orienta la elección de ese requerimiento delimitado?",
    "Racionalidad, porque ajusta la actuación a competencia, necesidad y proporcionalidad.",
    "Priorización, porque convierte cualquier alerta en una orden de suspensión.",
    "Autonomía, porque permite prescindir de la competencia de la entidad.",
    "La racionalidad evita extralimitación.",
    "Priorizar no atribuye potestad de suspensión.",
    "Autonomía no significa competencia ilimitada.",
    "Resolución PGN 132/2014 art. 9",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m45-q3": [
    "El servicio de agua aún funciona, pero existe riesgo concreto de interrupción por falta de insumos.",
    "¿En qué escenario preventivo debe clasificarse inicialmente ese riesgo?",
    "Anticipación, porque la afectación todavía puede evitarse.",
    "Mitigación, porque ya se produjo la interrupción del servicio.",
    "Orientación, porque la situación solo requiere indicar un canal al usuario.",
    "Anticipar precede a la materialización.",
    "No se ha interrumpido el servicio.",
    "Existe un riesgo concreto de gestión.",
    "Resolución PGN 132/2014 art. 11",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m45-q4": [
    "Una comunidad ya perdió acceso al servicio y la entidad evalúa alternativas para restablecerlo.",
    "¿Qué escenario describe la actuación dirigida a reducir y superar esa afectación?",
    "Mitigación y/o restitución, frente a una vulneración materializada.",
    "Anticipación, porque todavía no se ha impuesto sanción disciplinaria.",
    "Orientación exclusivamente, por existir una solicitud de los usuarios.",
    "El escenario depende de la afectación, no de una sanción.",
    "La anticipación se refiere a riesgos no materializados.",
    "La actuación busca restablecer derechos.",
    "Resolución PGN 132/2014 art. 11",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m45-q5": [
    "La entidad vigilada anuncia que instalará un control y fija fecha y responsable. No presenta aún evidencia de ejecución.",
    "¿Qué debe verificar el operador en el seguimiento?",
    "La implementación efectiva del control y su efecto sobre el riesgo identificado.",
    "La mera existencia del anuncio como demostración de que desapareció el riesgo.",
    "La imposición de una sanción al responsable antes de evaluar cualquier mejora.",
    "Un compromiso no acredita resultado.",
    "La eficacia requiere soportes.",
    "El seguimiento es distinto del juicio disciplinario.",
    "Resolución PGN 132/2014 arts. 5,9",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m45-q6": [
    "Durante el seguimiento se confirma la reducción del riesgo, pero aparece una noticia sobre un posible incumplimiento anterior.",
    "¿Qué tratamiento conserva la autonomía de las funciones misionales?",
    "Documentar el resultado preventivo y evaluar separadamente la remisión disciplinaria competente.",
    "Archivar automáticamente toda noticia anterior porque se redujo el riesgo actual.",
    "Declarar culpabilidad en el cierre preventivo para resolver ambas funciones a la vez.",
    "La mejora no decide responsabilidad disciplinaria.",
    "No extingue automáticamente una posible falta.",
    "Cada función tiene procedimiento propio.",
    "Resolución PGN 132/2014 art. 9",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q1": [
    "",
    "¿Qué componentes integra el Sistema Integral de Prevención de la PGN?",
    "Responsables, reglas, herramientas y mecanismos de coordinación de la gestión preventiva.",
    "Únicamente un registro de sanciones y un inventario de investigaciones disciplinarias.",
    "Exclusivamente funcionarios de nivel central con competencia para administrar entidades vigiladas.",
    "El SIP articula la gestión preventiva.",
    "No es un registro sancionatorio.",
    "La prevención no sustituye administraciones.",
    "Resolución PGN 132/2014 arts. 3–4",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q2": [
    "Dos alertas llegan simultáneamente. Una presenta riesgo inmediato de vulneración de derechos y la otra tiene impacto menor.",
    "¿Qué principios orientan la programación del trabajo preventivo?",
    "Oportunidad y priorización según riesgo, derechos afectados y directrices institucionales.",
    "Economía y antigüedad, dando prioridad al expediente con menos documentos.",
    "Autonomía y reserva, evitando coordinar la respuesta con otras dependencias.",
    "Oportunidad y priorización responden al riesgo.",
    "El volumen de documentos no fija prioridad.",
    "La coordinación es parte del sistema.",
    "Resolución PGN 132/2014 art. 9",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q3": [
    "Dos dependencias son competentes y no existe asignación simultánea ni regla especial diferente. Una asumió primero el asunto.",
    "¿Qué criterio de distribución contempla el artículo 15?",
    "Primacía de la dependencia competente que asumió primero el conocimiento.",
    "Preferencia automática de la dependencia con mayor número de funcionarios.",
    "Traslado obligatorio del asunto a la última dependencia que recibió información.",
    "La primacía opera en el supuesto descrito.",
    "El tamaño de la oficina no atribuye competencia.",
    "La recepción posterior no desplaza por sí sola la primacía.",
    "Resolución PGN 132/2014 art. 15",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q4": [
    "Una dependencia competente necesita apoyo técnico preventivo de otra para analizar el mismo riesgo.",
    "¿Qué mecanismo contempla la resolución para articular el trabajo?",
    "Actuación conjunta promovida por la dependencia competente, con responsabilidades coordinadas.",
    "Apertura de expedientes idénticos sin intercambio de información entre dependencias.",
    "Transferencia automática de todas las competencias a la oficina que presta apoyo.",
    "El artículo 17 prevé colaboración conjunta.",
    "Duplicar no es coordinar.",
    "El apoyo no transfiere toda competencia.",
    "Resolución PGN 132/2014 art. 17",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q5": [
    "La oficina registra veinte requerimientos enviados pero no sabe cuántos riesgos se redujeron.",
    "¿Qué debe añadir al sistema de evaluación de la actuación?",
    "Indicadores estandarizados que relacionen actividades y resultados con objetivos verificables.",
    "Un conteo acumulado de comunicaciones sin verificar su efecto sobre los riesgos.",
    "Una estimación del éxito basada exclusivamente en horas de trabajo del equipo.",
    "El artículo 24 prevé indicadores y evaluación.",
    "El conteo mide actividad, no necesariamente resultado.",
    "Las horas no prueban reducción del riesgo.",
    "Resolución PGN 132/2014 art. 24",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m46-q6": [
    "Una actuación conjunta tiene soportes en varias oficinas y no se identifica quién debe continuar el seguimiento.",
    "¿Qué registro permite mantener trazabilidad institucional de esa actuación?",
    "Registrar en el sistema institucional actuaciones, responsables, soportes y seguimiento autorizado.",
    "Conservar los archivos únicamente en equipos personales para evitar duplicar información institucional.",
    "Asignar todos los registros a una dependencia sin aclarar responsables ni actuaciones.",
    "La trazabilidad vincula soporte y responsabilidad.",
    "Los archivos personales dificultan control.",
    "La centralización sin identificación no resuelve el seguimiento.",
    "Resolución PGN 132/2014 arts. 22–24",
    [
      "pgn-res-132-2014"
    ]
  ],
  "pgn-m47-q1": [
    "",
    "¿Qué diferencia un producto de un resultado en la cadena de valor?",
    "El producto es un bien o servicio entregado; el resultado, un cambio observado.",
    "El producto es el presupuesto disponible; el resultado, la cantidad de reuniones realizadas.",
    "El producto es el efecto causal demostrado; el resultado, el recurso utilizado.",
    "Son niveles diferentes de la cadena de valor.",
    "Presupuesto es insumo y reunión actividad.",
    "La atribución causal exige evidencia adicional.",
    "Análisis de cadena de valor; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m47-q2": [
    "Un programa dispone de personal, realiza capacitaciones y entrega certificados. Busca reducir errores en trámites.",
    "¿Cuál elemento corresponde a la actividad y cuál al resultado buscado?",
    "Capacitaciones realizadas y reducción de errores, respectivamente.",
    "Personal disponible y certificados entregados, respectivamente.",
    "Certificados entregados y presupuesto comprometido, respectivamente.",
    "La actividad es lo que se realiza; el resultado es el cambio.",
    "Personal es insumo y certificado producto.",
    "El presupuesto es insumo, no efecto.",
    "Análisis de cadena de valor; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m47-q3": [
    "Un programa registra 120 atenciones a 80 personas únicas de una población objetivo de 200.",
    "¿Qué cobertura de beneficiarios únicos corresponde al indicador definido?",
    "40 %, al dividir 80 beneficiarios únicos entre 200 elegibles.",
    "60 %, al dividir las 120 atenciones entre 200 elegibles.",
    "150 %, al dividir las 120 atenciones entre 80 beneficiarios.",
    "80/200 equivale al 40 %.",
    "El numerador no son atenciones.",
    "Ese cociente mide atenciones por persona, no cobertura.",
    "Cálculo de indicadores; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m47-q4": [
    "La línea base mide hogares rurales, pero el reporte posterior usa hogares de todo el municipio.",
    "¿Qué ajuste debe realizarse antes de comparar ambas tasas?",
    "Homologar población, definición, período y unidad de medición o advertir la incompatibilidad.",
    "Comparar directamente las tasas porque ambas están expresadas como porcentajes.",
    "Promediar las tasas para obtener una línea base común de toda la población.",
    "La comparabilidad requiere definiciones comunes.",
    "El porcentaje no garantiza equivalencia.",
    "Promediar no corrige poblaciones diferentes.",
    "Calidad de indicadores; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m47-q5": [
    "Una entidad tiene un protocolo de control con responsable definido, pero nunca se ejecuta.",
    "¿Qué distinción es necesaria para estimar el riesgo residual?",
    "Evaluar separadamente diseño del control y evidencia de su funcionamiento.",
    "Considerar reducido el riesgo por la sola aprobación formal del protocolo.",
    "Eliminar el riesgo de la matriz porque ya existe una medida documentada.",
    "El control debe operar para reducir riesgo.",
    "La aprobación no acredita ejecución.",
    "El riesgo residual puede seguir elevado.",
    "Gestión de riesgos; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m47-q6": [
    "La tasa de quejas sube tras abrir un nuevo canal de reporte. No hay medición independiente de la incidencia real.",
    "¿Qué conclusión debe evitar el informe preventivo?",
    "Afirmar que aumentó la incidencia real únicamente porque aumentaron los reportes.",
    "Señalar que el cambio de canal pudo modificar la propensión a reportar.",
    "Registrar que hace falta contrastar otras fuentes de información sobre el fenómeno.",
    "El aumento puede obedecer a mayor acceso al reporte.",
    "Es una hipótesis alternativa razonable.",
    "La comprobación adicional es necesaria.",
    "Interpretación de indicadores; Decreto 1499/2017",
    [
      "decreto-1499-2017"
    ]
  ],
  "pgn-m48-q1": [
    "",
    "¿Qué intereses constitucionales orientan la intervención del Ministerio Público?",
    "Orden jurídico, patrimonio público y derechos y garantías fundamentales.",
    "Exclusivamente los intereses procesales de la entidad pública demandada.",
    "Únicamente los intereses patrimoniales del ciudadano que presenta la demanda.",
    "El artículo 277.7 define las finalidades.",
    "No es defensa automática de la entidad.",
    "La intervención no se limita a un litigante.",
    "Constitución art. 277.7",
    [
      "constitucion"
    ]
  ],
  "pgn-m48-q2": [
    "El agente del Ministerio Público presenta un concepto ante un juez administrativo sobre un acto demandado.",
    "¿Qué autoridad conserva la competencia para resolver la pretensión judicial?",
    "El juez, que valora el concepto junto con los demás elementos del proceso.",
    "El agente, porque su concepto sustituye la decisión judicial sobre el acto.",
    "La entidad demandada, porque puede decidir unilateralmente el sentido del fallo.",
    "La intervención no reemplaza al juez.",
    "El concepto no decide la pretensión.",
    "La entidad no resuelve el litigio.",
    "Constitución art. 277.7; CPACA art. 303",
    [
      "constitucion",
      "cpaca"
    ]
  ],
  "pgn-m48-q3": [
    "En un proceso contencioso se identifica una prueba pertinente para proteger el patrimonio público.",
    "¿Qué actuación puede promover el agente habilitado dentro de la oportunidad legal?",
    "Solicitar su decreto y práctica a la autoridad judicial competente.",
    "Decretarla directamente y exigir al juez que ejecute la providencia del agente.",
    "Iniciar necesariamente una investigación disciplinaria antes de solicitar la prueba judicial.",
    "El art. 303 contempla facultades de intervención.",
    "El decreto compete al juez.",
    "No depende de una investigación disciplinaria.",
    "CPACA art. 303",
    [
      "cpaca"
    ]
  ],
  "pgn-m48-q4": [
    "El Ministerio Público estima que un acuerdo conciliatorio aprobado afecta injustificadamente recursos públicos.",
    "¿Qué facultad puede ejercer si se cumplen legitimación y oportunidad?",
    "Recurrir el auto que aprueba la conciliación judicial conforme al régimen.",
    "Revocar por resolución administrativa el auto expedido por el juzgado.",
    "Modificar directamente el acuerdo aprobado sin intervención del juez ni de las partes.",
    "El artículo 303 permite recurrir esa providencia.",
    "No tiene potestad de revocarla.",
    "No modifica unilateralmente el acuerdo.",
    "CPACA art. 303",
    [
      "cpaca"
    ]
  ],
  "pgn-m48-q5": [
    "Un profesional prepara una cronología para el agente y detecta que falta una providencia relevante del expediente judicial.",
    "¿Cómo debe presentar el insumo de apoyo antes de formular la posición institucional?",
    "Distinguir hechos verificados, documentos faltantes y argumentos pendientes de contraste.",
    "Completar la fecha faltante por aproximación para que la cronología no tenga vacíos.",
    "Sustituir la providencia faltante por una conclusión propia sobre el mérito del litigio.",
    "El insumo debe reflejar límites de la información.",
    "No se inventan fechas.",
    "Una inferencia no sustituye el documento.",
    "Constitución art. 277.7; CPACA art. 303",
    [
      "constitucion",
      "cpaca"
    ]
  ],
  "pgn-m48-q6": [
    "El profesional recibe una instrucción para firmar por sí mismo un concepto judicial reservado al agente competente.",
    "¿Qué límite corresponde al rol de apoyo institucional?",
    "Entregar el proyecto fundamentado al agente habilitado para adoptar la posición procesal.",
    "Suscribir el concepto porque elaboró los análisis que sustentan sus argumentos.",
    "Remitir al juez una orden sobre el resultado que debe adoptar en el proceso.",
    "Preparar insumos no atribuye representación procesal.",
    "La autoría técnica no sustituye competencia.",
    "El apoyo no decide el litigio.",
    "Constitución art. 277.7; CPACA art. 303",
    [
      "constitucion",
      "cpaca"
    ]
  ],
  "pgn-m49-q1": [
    "",
    "¿Qué distingue un ajuste razonable de un trato preferencial arbitrario?",
    "El ajuste elimina barreras concretas para garantizar acceso en condiciones de igualdad.",
    "El ajuste exime automáticamente de todos los requisitos legales a una persona vulnerable.",
    "El ajuste exige sustituir la voluntad de la persona por la de un familiar.",
    "La igualdad material requiere remover barreras.",
    "No elimina requisitos por regla general.",
    "Debe respetar autonomía.",
    "Constitución art. 13; Ley 1618/2013",
    [
      "constitucion",
      "ley-1618-2013"
    ]
  ],
  "pgn-m49-q2": [
    "Una persona con discapacidad auditiva necesita recibir una comunicación y puede utilizar varios canales accesibles.",
    "¿Qué criterio debe orientar la elección del canal de atención?",
    "Consultar su preferencia y ofrecer una alternativa accesible que respete su autonomía.",
    "Exigir un representante para que interprete toda comunicación que reciba la persona.",
    "Elegir el canal habitual de la entidad sin considerar la barrera identificada.",
    "La adaptación debe responder a necesidades concretas.",
    "La discapacidad no presume incapacidad.",
    "El canal habitual puede excluir.",
    "Ley 1618/2013 arts. 14,16",
    [
      "ley-1618-2013"
    ]
  ],
  "pgn-m49-q3": [
    "Una oficina necesita divulgar un informe estadístico sobre personas atendidas por violencia y dispone de datos de salud e identidad.",
    "¿Qué tratamiento minimiza la exposición sin afectar la finalidad estadística?",
    "Utilizar cifras agregadas y restringir los datos sensibles a accesos autorizados.",
    "Publicar los registros individuales completos porque los datos se recolectaron con fines públicos.",
    "Eliminar toda estadística porque los datos originales contienen información sensible de personas.",
    "La finalidad estadística puede satisfacerse sin identificar.",
    "La finalidad pública no elimina protección.",
    "La agregación permite informar.",
    "Ley 1581/2012 arts. 4–6",
    [
      "ley-1581-2012"
    ]
  ],
  "pgn-m49-q4": [
    "Una víctima ya aportó un relato completo a una dependencia y otra autoridad competente requiere información para continuar su atención.",
    "¿Qué práctica reduce la revictimización al coordinar ambas actuaciones?",
    "Compartir la información necesaria por canales autorizados sin exigir repeticiones innecesarias.",
    "Solicitar que repita íntegramente el relato en cada dependencia, aunque no sea necesario.",
    "Difundir el relato a todo el personal para evitar futuras solicitudes de información.",
    "Coordinar puede reducir exposición y repetición.",
    "La repetición innecesaria afecta la atención.",
    "El acceso debe limitarse a personas autorizadas.",
    "Ley 2365/2024; Ley 1581/2012 art. 4",
    [
      "ley-1581-2012",
      "ley-2365-2024"
    ]
  ],
  "pgn-m49-q5": [
    "Un periodista formula una petición relacionada con el ejercicio de su actividad profesional.",
    "¿Qué tratamiento específico dispone el artículo 20 de la Ley 1755?",
    "Tramitarla preferencialmente cuando se formula para el ejercicio de esa actividad.",
    "Aplicar exclusivamente el orden cronológico sin considerar la regla especial.",
    "Exigir prueba sumaria de perjuicio irremediable como condición para toda preferencia periodística.",
    "La norma prevé preferencia para esa actividad.",
    "El turno ordinario admite prioridades legales.",
    "Es un supuesto distinto al perjuicio irremediable.",
    "Ley 1755/2015 art. 20",
    [
      "ley-1755-2015"
    ]
  ],
  "pgn-m49-q6": [
    "En una investigación del artículo 53.5 CGD concurren barreras relacionadas con género, discapacidad y relaciones de poder.",
    "¿Qué tratamiento probatorio conserva las garantías de ambas partes?",
    "Aplicar valoración diferencial e interseccional sin eliminar contradicción ni estándar sancionatorio.",
    "Presumir responsabilidad del superior por la sola concurrencia de condiciones de vulnerabilidad.",
    "Excluir automáticamente todo elemento de descargo para evitar una nueva afectación a la víctima.",
    "El enfoque especial no elimina garantías probatorias.",
    "La condición jerárquica no prueba responsabilidad.",
    "El descargo debe valorarse con protección de derechos.",
    "CGD art. 160A; Ley 2365/2024",
    [
      "ley-2365-2024",
      "ley-1952-2019"
    ]
  ],
  "pgn-m50-q1": [
    "",
    "¿Qué diferencia la planeación contractual de la selección del contratista?",
    "La planeación define necesidad, objeto, recursos y riesgos; la selección aplica reglas de escogencia.",
    "La planeación adjudica el contrato; la selección documenta posteriormente la necesidad pública.",
    "Ambas se limitan a verificar disponibilidad presupuestal antes de suscribir el contrato.",
    "La planeación sustenta el procedimiento.",
    "La adjudicación pertenece a selección.",
    "La disponibilidad no agota ninguna etapa.",
    "Ley 80/1993 arts. 24–26",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m50-q2": [
    "Una entidad recibe todos los bienes al finalizar un contrato, pero quedan obligaciones pendientes y garantías vigentes.",
    "¿Qué debe revisar en la etapa de cierre contractual?",
    "Recepción, obligaciones pendientes, garantías y liquidación cuando resulte legalmente procedente.",
    "Únicamente el vencimiento del plazo para declarar cumplidas todas las obligaciones.",
    "Solo la disponibilidad presupuestal original, sin examinar la recepción efectiva de bienes.",
    "El cierre requiere comprobar cumplimiento y obligaciones.",
    "Vencimiento no equivale a cumplimiento.",
    "El presupuesto no demuestra recepción.",
    "Ley 80/1993 art. 60; Ley 1150/2007 art. 11",
    [
      "ley-80-1993",
      "ley-1150-2007"
    ]
  ],
  "pgn-m50-q3": [
    "Una entidad adquiere bienes de características técnicas uniformes y común utilización. No existe instrumento obligatorio ni otra regla especial aplicable.",
    "¿Qué causal permite examinar la selección abreviada en ese supuesto?",
    "La adquisición de bienes y servicios uniformes y de común utilización.",
    "La contratación directa por el solo hecho de que existan especificaciones técnicas comunes.",
    "El concurso de méritos porque se requiere comparar características de los bienes.",
    "La Ley 1150 contempla esa causal de selección abreviada.",
    "La uniformidad no habilita contratación directa.",
    "El concurso corresponde a otros objetos.",
    "Ley 1150/2007 art. 2",
    [
      "ley-1150-2007"
    ]
  ],
  "pgn-m50-q4": [
    "La menor cuantía de una entidad es 300 millones de pesos y la adquisición ordinaria cuesta 27 millones.",
    "¿Qué modalidad corresponde por el umbral, sin excepción aplicable?",
    "Mínima cuantía, porque el valor no supera 30 millones de pesos.",
    "Selección abreviada, porque el valor no alcanza los 300 millones de pesos.",
    "Contratación directa, porque el valor es inferior a 30 millones de pesos.",
    "El 10 % de 300 millones es 30 millones.",
    "El límite específico de mínima cuantía prevalece.",
    "La baja cuantía no habilita directa.",
    "Ley 1150/2007 art. 2.5",
    [
      "ley-1150-2007"
    ]
  ],
  "pgn-m50-q5": [
    "Las partes suscriben un contrato ordinario con acuerdo sobre objeto y contraprestación. La garantía exigible aún no ha sido aprobada.",
    "¿Qué distinción debe efectuar la entidad antes de autorizar el inicio?",
    "El perfeccionamiento no sustituye los requisitos legales de ejecución pendientes.",
    "El contrato solo se perfeccionará cuando se complete toda la ejecución material.",
    "La firma permite iniciar porque elimina la necesidad de aprobar garantías exigibles.",
    "La ejecución exige requisitos adicionales.",
    "El perfeccionamiento es anterior.",
    "La firma no elimina garantías.",
    "Ley 80/1993 art. 41",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m50-q6": [
    "Una entidad dejó vencer su cronograma de compras y alega que se acerca el cierre fiscal.",
    "¿Qué debe verificar antes de acudir a urgencia manifiesta?",
    "La concurrencia real de los presupuestos legales y su motivación específica.",
    "La proximidad del cierre fiscal como causal suficiente de contratación directa.",
    "La aprobación presupuestal como sustituto de cualquier hecho constitutivo de urgencia.",
    "La urgencia exige presupuestos legales acreditados.",
    "El retraso no basta por sí solo.",
    "Tener recursos no acredita urgencia.",
    "Ley 80/1993 arts. 42–43",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m51-q1": [
    "",
    "¿Qué relación deben guardar los requisitos habilitantes con el objeto contractual?",
    "Ser adecuados y proporcionales a la naturaleza y valor del contrato.",
    "Coincidir con la experiencia específica del proveedor que formuló la primera cotización.",
    "Ser idénticos para todos los procesos sin considerar objeto, valor ni riesgo.",
    "La proporcionalidad limita requisitos habilitantes.",
    "El requisito no debe diseñarse para favorecer un proveedor.",
    "Cada proceso exige justificación.",
    "Ley 1150/2007 art. 5",
    [
      "ley-1150-2007"
    ]
  ],
  "pgn-m51-q2": [
    "Un estudio de mercado utiliza una sola cotización y no explica por qué descartó otras alternativas disponibles.",
    "¿Qué verificación debe solicitar el operador preventivo?",
    "La justificación del análisis económico y las condiciones del mercado que respaldan el valor.",
    "La exclusión automática del proveedor que presentó la cotización utilizada para el presupuesto.",
    "La adjudicación directa porque ese proveedor ya conoce las necesidades de la entidad.",
    "El análisis debe sustentar el valor estimado.",
    "La cotización no prueba una irregularidad del proveedor.",
    "Cotizar no habilita directa.",
    "Decreto 1082/2015 art. 2.2.1.1.2.1.1",
    [
      "decreto-1082-2015"
    ]
  ],
  "pgn-m51-q3": [
    "Un oferente no aporta el soporte de una experiencia habilitante adquirida antes del cierre de una licitación.",
    "¿Qué diferencia debe aplicar la entidad al requerir subsanación?",
    "Permitir acreditar el requisito preexistente sin adquirir experiencia nueva después del cierre.",
    "Permitir que adquiera nueva experiencia durante la oportunidad de subsanar documentos.",
    "Rechazar automáticamente cualquier requisito habilitante no acreditado en la propuesta inicial.",
    "La subsanación no habilita hechos posteriores al cierre.",
    "La experiencia nueva no es preexistente.",
    "No toda omisión documental es insubsanable.",
    "Ley 1150/2007 art. 5",
    [
      "ley-1150-2007"
    ]
  ],
  "pgn-m51-q4": [
    "Un requisito habilitante no otorga puntaje en el procedimiento descrito. El evaluador desea sumar puntos por superar su mínimo.",
    "¿Qué límite debe observar al elaborar la calificación?",
    "Aplicar exclusivamente los factores de comparación establecidos conforme a la modalidad y las reglas publicadas.",
    "Agregar puntos por cualquier requisito habilitante sin modificar los documentos del procedimiento.",
    "Convertir todos los requisitos habilitantes en factores puntuables después de recibir las ofertas.",
    "Los habilitantes y factores de comparación son distintos.",
    "No se crean puntos de forma unilateral.",
    "Cambiar factores afecta selección objetiva.",
    "Ley 1150/2007 art. 5",
    [
      "ley-1150-2007"
    ]
  ],
  "pgn-m51-q5": [
    "En mínima cuantía se publica el informe de evaluación y se debe abrir oportunidad para observaciones.",
    "¿Qué plazo mínimo debe respetar la entidad en ese traslado?",
    "Un día hábil de publicación del informe de evaluación.",
    "Tres días hábiles de publicación en todos los procedimientos competitivos.",
    "Cinco días hábiles porque se trata de un informe técnico.",
    "El procedimiento especial fija mínimo un día hábil.",
    "No se traslada otra modalidad automáticamente.",
    "El carácter técnico no cambia el término.",
    "Decreto 1082/2015 art. 2.2.1.2.1.5.2",
    [
      "decreto-1082-2015"
    ]
  ],
  "pgn-m51-q6": [
    "Una entidad acepta válidamente una oferta en mínima cuantía y el profesional revisa cómo queda formalizado el negocio.",
    "¿Qué documentos constituyen el contrato en esa modalidad?",
    "La oferta presentada por el seleccionado y su comunicación de aceptación.",
    "El informe de evaluación y la invitación pública, sin requerir aceptación.",
    "La invitación y el certificado presupuestal, independientemente de la oferta seleccionada.",
    "La oferta y aceptación constituyen contrato.",
    "Evaluación no sustituye aceptación.",
    "La invitación no es el acuerdo contractual.",
    "Decreto 1082/2015 art. 2.2.1.2.1.5.2",
    [
      "decreto-1082-2015"
    ]
  ],
  "pgn-m52-q1": [
    "",
    "¿Quién ejerce la supervisión del contrato de interventoría celebrado por una entidad estatal?",
    "La propia entidad estatal, mediante el seguimiento que le corresponde.",
    "El contratista principal, por ser quien recibe los servicios de interventoría.",
    "El mismo interventor, mediante certificaciones sobre el cumplimiento de su propio contrato.",
    "El artículo 83 dispone supervisión directa de la entidad.",
    "El contratista principal no supervisa al interventor.",
    "El interventor no sustituye el control de su contrato.",
    "Ley 1474/2011 art. 83",
    [
      "ley-1474-2011"
    ]
  ],
  "pgn-m52-q2": [
    "Una interventoría técnica y una supervisión administrativa participan en el seguimiento de la misma obra.",
    "¿Qué condición permite esa distribución de funciones?",
    "Delimitar expresamente las actividades a cargo del interventor y las restantes del supervisor.",
    "Asignar todas las obligaciones de manera indistinta para que ambos respondan por lo mismo.",
    "Excluir todo seguimiento administrativo porque ya existe un contrato de interventoría técnica.",
    "La división debe ser expresa.",
    "La duplicidad sin delimitación genera incertidumbre.",
    "La entidad conserva las funciones no asignadas.",
    "Ley 1474/2011 art. 83",
    [
      "ley-1474-2011"
    ]
  ],
  "pgn-m52-q3": [
    "Se propone adicionar un contrato ordinario por 60 % de su valor inicial expresado en SMMLV. No concurre excepción.",
    "¿Qué restricción debe advertir el supervisor al analizar esa propuesta?",
    "La adición supera el límite general del cincuenta por ciento del valor inicial.",
    "La adición procede si el contratista acepta, sin importar la proporción del incremento.",
    "La adición puede formalizarse sin límite porque existe disponibilidad presupuestal suficiente.",
    "El artículo 40 impone ese límite general.",
    "El acuerdo no elimina la restricción.",
    "La disponibilidad es un requisito diferente.",
    "Ley 80/1993 art. 40",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m52-q4": [
    "El contratista pide tres meses adicionales sin incremento de precio ni cambio de obligaciones.",
    "¿Qué figura describe inicialmente la modificación solicitada?",
    "Prórroga del plazo, sujeta a justificación y decisión de la autoridad competente.",
    "Adición de valor, porque toda ampliación temporal incrementa jurídicamente el precio.",
    "Cesión del contrato, porque se modifica la fecha prevista de terminación.",
    "La prórroga altera el tiempo, no necesariamente el valor.",
    "El incremento económico debe verificarse separadamente.",
    "No hay cambio de contratista.",
    "Ley 80/1993 arts. 40–41",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m52-q5": [
    "Un informe de supervisión identifica retraso, cláusula incumplida y comunicaciones al contratista. La entidad estudia una multa.",
    "¿Qué garantía debe asegurar antes de adoptar la sanción contractual?",
    "Citar a audiencia con hechos, soportes, cláusulas y consecuencias, incluyendo al garante cuando proceda.",
    "Imponer la multa mediante el informe de supervisión y luego convocar al contratista.",
    "Solicitar al supervisor que decida la responsabilidad y comunique después el resultado.",
    "El artículo 86 regula audiencia y defensa.",
    "El informe no sustituye audiencia.",
    "El supervisor no tiene potestad automática de sancionar.",
    "Ley 1474/2011 art. 86",
    [
      "ley-1474-2011"
    ]
  ],
  "pgn-m52-q6": [
    "Durante la audiencia contractual el contratista solicita aportar una prueba relevante sobre el incumplimiento atribuido.",
    "¿Qué tratamiento exige el procedimiento especial de sanción contractual?",
    "Permitir intervención y contradicción probatoria, resolviendo motivadamente en el trámite legal.",
    "Negar toda prueba porque el informe de supervisión constituye demostración definitiva del incumplimiento.",
    "Trasladar la decisión a Procuraduría por existir desacuerdo con el informe de supervisión.",
    "La audiencia protege defensa y contradicción.",
    "El informe admite controversia.",
    "La entidad conserva competencia contractual.",
    "Ley 1474/2011 art. 86",
    [
      "ley-1474-2011"
    ]
  ],
  "pgn-m53-q1": [
    "",
    "¿Qué diferencia un conflicto de interés de una inhabilidad contractual?",
    "El primero compromete imparcialidad en la actuación; la segunda restringe legalmente participar o contratar.",
    "Ambos excluyen automáticamente a cualquier proponente relacionado socialmente con un servidor.",
    "El primero solo existe después de adjudicar; la segunda depende de la opinión del evaluador.",
    "Son figuras con presupuestos y efectos distintos.",
    "La cercanía social no acredita causal.",
    "Las restricciones tienen fundamento legal.",
    "Ley 80/1993 art. 8; CPACA art. 11",
    [
      "cpaca",
      "ley-80-1993"
    ]
  ],
  "pgn-m53-q2": [
    "Una empresa tiene relaciones comerciales anteriores con un proveedor de la entidad, sin causal legal acreditada.",
    "¿Qué condición debe verificarse para atribuirle una inhabilidad contractual?",
    "La causal legal concreta, los hechos que la configuran y su vigencia aplicable.",
    "La existencia de cualquier relación comercial como restricción automática de participación.",
    "La sospecha del evaluador, aunque no exista una disposición legal aplicable.",
    "Las inhabilidades requieren fundamento normativo.",
    "El vínculo no equivale necesariamente a causal.",
    "La sospecha no crea restricciones.",
    "Ley 80/1993 arts. 8–10",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m53-q3": [
    "Durante la ejecución contractual sobreviene una inhabilidad ordinaria no comprendida en el régimen especial por corrupción.",
    "¿Qué alternativa contempla el artículo 9 del Estatuto de Contratación?",
    "Cesión previa autorización escrita o renuncia a la ejecución si no es posible ceder.",
    "Cesión libre sin autorización porque el contrato inicialmente fue válido.",
    "Continuación obligatoria hasta el vencimiento por haberse perfeccionado antes de la causal.",
    "La ley regula la cesión autorizada o renuncia.",
    "No es cesión libre.",
    "La causal sobreviniente produce efectos.",
    "Ley 80/1993 art. 9",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m53-q4": [
    "En el contrato sobreviene la inhabilidad del artículo 8.1.j de la Ley 80.",
    "¿Qué excepción debe reconocer el operador al revisar la renuncia a la ejecución?",
    "No procede la renuncia ordinaria prevista en el artículo 9 para esa causal.",
    "La renuncia ordinaria procede automáticamente sin examinar el régimen de cesión.",
    "La inhabilidad desaparece porque el contratista ya está ejecutando las obligaciones pactadas.",
    "El artículo 9 modificado excluye esa renuncia.",
    "Se debe examinar la regla especial.",
    "La ejecución no elimina la causal.",
    "Ley 80/1993 art. 9",
    [
      "ley-80-1993"
    ]
  ],
  "pgn-m53-q5": [
    "Un evaluador presenta impedimento motivado en una actuación administrativa contractual regida por el CPACA.",
    "¿Qué sucede con la actuación mientras se decide el impedimento?",
    "Se suspende desde la manifestación hasta que se decida el incidente.",
    "Continúa normalmente hasta que el superior acepte formalmente la causal.",
    "Termina automáticamente y debe declararse desierto el procedimiento de selección.",
    "El artículo 12 dispone suspensión mientras se decide.",
    "No se espera la aceptación para suspender.",
    "El impedimento no termina automáticamente el proceso.",
    "CPACA art. 12",
    [
      "cpaca"
    ]
  ],
  "pgn-m53-q6": [
    "La autoridad acepta el impedimento de un evaluador que tenía interés particular directo en el resultado.",
    "¿Qué debe documentar al resolver y reanudar la actuación?",
    "La decisión, la persona competente que asume y la trazabilidad de la reasignación.",
    "La eliminación de los registros anteriores para reiniciar sin constancias del incidente.",
    "La continuación del evaluador impedido si se abstiene de firmar el informe final.",
    "La aceptación exige definir quién conoce.",
    "La documentación debe conservarse.",
    "No basta abstenerse de firmar.",
    "CPACA art. 12; CGD art. 44",
    [
      "cpaca",
      "ley-1952-2019"
    ]
  ],
  "pgn-m54-q1": [
    "",
    "¿Qué instrumento actual regula el artículo 73 de la Ley 1474 modificado por Ley 2195?",
    "El Programa de Transparencia y Ética Pública con enfoque de gestión de riesgos.",
    "Un informe exclusivamente sancionatorio que se formula después de ocurrir hechos de corrupción.",
    "Un inventario de contratos que sustituye los mecanismos de prevención y transparencia.",
    "El artículo 73 regula PTEP.",
    "Su objeto es preventivo y de integridad.",
    "El inventario no sustituye el programa.",
    "Ley 1474/2011 art. 73; Ley 2195/2022 art. 31",
    [
      "ley-1474-2011",
      "ley-2195-2022"
    ]
  ],
  "pgn-m54-q2": [
    "La entidad publica su PTEP e incluye estadísticas de denuncias con datos privados de quienes las presentaron.",
    "¿Qué límite debe respetarse en la divulgación del programa y sus resultados?",
    "Garantizar publicidad del programa sin divulgar datos personales legalmente protegidos.",
    "Difundir las identidades porque todos los anexos del PTEP son necesariamente públicos.",
    "Reservar por completo el programa porque contiene información de gestión de denuncias.",
    "La publicidad se armoniza con protección de datos.",
    "Los anexos pueden contener datos restringidos.",
    "Es posible divulgar contenido separable.",
    "Ley 1712/2014 art. 21; Ley 1581/2012",
    [
      "ley-1581-2012",
      "ley-1712-2014"
    ]
  ],
  "pgn-m54-q3": [
    "Un sistema marca un proveedor por alta concentración de contratos, pero todavía no se ha verificado el contexto de mercado.",
    "¿Qué categoría describe el resultado inicial de esa detección?",
    "Señal de riesgo que orienta una revisión y requiere contraste adicional.",
    "Hallazgo definitivo que demuestra por sí solo una irregularidad contractual comprobada.",
    "Declaración de responsabilidad del proveedor basada en el porcentaje de concentración.",
    "Una señal prioriza análisis.",
    "El hallazgo requiere soporte y criterio.",
    "Una alerta no decide responsabilidad.",
    "Gestión de riesgos; Ley 2195/2022 art. 31",
    [
      "ley-2195-2022"
    ]
  ],
  "pgn-m54-q4": [
    "Un equipo confirma una desviación entre un registro y una regla de referencia, pero desconoce su causa.",
    "¿Qué diferencia debe preservar antes de atribuir responsabilidad?",
    "La anomalía comprobada no demuestra por sí sola conducta imputable ni culpabilidad.",
    "La anomalía acredita automáticamente dolo si la desviación supera un umbral definido.",
    "Toda anomalía debe clasificarse como corrupción mientras el funcionario demuestra inocencia.",
    "La responsabilidad exige presupuestos y prueba.",
    "Un umbral no acredita dolo.",
    "No se invierte la carga probatoria.",
    "CGD arts. 10,14,147",
    [
      "ley-1952-2019"
    ]
  ],
  "pgn-m54-q5": [
    "Una exportación de SECOP tiene cinco filas correspondientes a un mismo contrato y sus modificaciones.",
    "¿Qué control permite calcular correctamente el número de contratos únicos?",
    "Identificar la clave contractual y distinguir el contrato de sus modificaciones registradas.",
    "Contar cada fila como contrato independiente porque tiene una fecha de registro diferente.",
    "Eliminar todas las filas con igual proveedor aunque correspondan a contratos distintos.",
    "La unidad de análisis debe definirse antes de contar.",
    "Una modificación no equivale a nuevo contrato.",
    "El proveedor no es identificador único.",
    "Análisis de datos contractuales; Ley 1712/2014",
    [
      "ley-1712-2014"
    ]
  ],
  "pgn-m54-q6": [
    "Un reporte de riesgo contractual incluye datos incompletos y señala a una persona como responsable de corrupción.",
    "¿Qué corrección debe efectuar el analista antes de remitir el reporte?",
    "Separar hallazgos de inferencias, verificar soportes y remitir según la competencia.",
    "Publicar la etiqueta de responsabilidad hasta que la persona demuestre lo contrario.",
    "Suprimir todas las alertas porque no constituyen por sí solas prueba definitiva.",
    "El informe debe explicar límites y fuentes.",
    "La presunción de inocencia impide esa atribución.",
    "La alerta conserva utilidad para priorizar revisión.",
    "CGD arts. 14,147,159",
    [
      "ley-1952-2019"
    ]
  ]
}

export const reviewedCheckpointIds = Object.keys(items)
export function reviewedLessonCheckpoint(q: Question): Question {
  const item = items[q.id]
  if (!item) return q
  const [caseText, stem, right, wrong1, wrong2, why, why1, why2, article, sources] = item
  const choices = [{text:right,rationale:why},{text:wrong1,rationale:why1},{text:wrong2,rationale:why2}]
  let wrongIndex = 1
  return { ...q, ...(caseText ? {case:caseText} : {}), stem, options:q.options.map(o=>({id:o.id,...choices[o.id===q.correctOptionId?0:wrongIndex++]!})), explanation:article+'. '+why, sourceIds:[...sources], verifiedAt:'2026-11-24' }
}
