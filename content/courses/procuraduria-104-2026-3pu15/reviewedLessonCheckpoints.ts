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
