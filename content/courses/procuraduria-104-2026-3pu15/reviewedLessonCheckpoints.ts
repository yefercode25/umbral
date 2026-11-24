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
