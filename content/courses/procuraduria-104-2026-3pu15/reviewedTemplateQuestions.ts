import type { Question } from '../../../src/types/course'

type ReviewedItem = readonly [caseText: string, stem: string, choices: readonly [string, string, string], rationales: readonly [string, string, string], articles: string]
const reviewed: Record<string, readonly ReviewedItem[]> = {
  "pgn-m25": [
    [
      "Un ciudadano atribuye corrupción a todos los empleados de una sede, pero no menciona actuaciones, fechas, expedientes ni circunstancias susceptibles de comprobación. Los anexos contienen únicamente la misma afirmación genérica.",
      "¿Qué decisión inicial procede ante esta noticia absolutamente inconcreta?",
      [
        "Inhibirse mediante decisión de plano motivada por la ausencia absoluta de concreción.",
        "Abrir indagación para individualizar a todos los empleados de la sede.",
        "Abrir investigación contra el jefe de la dependencia por su posición."
      ],
      [
        "La falta absoluta de concreción activa la inhibitoria.",
        "La indagación presupone una posible falta, no una pesquisa indiscriminada.",
        "La jefatura no individualiza al autor de un hecho."
      ],
      "209"
    ],
    [
      "Una persona identificada informa del extravío de un expediente y adjunta el registro de préstamo, firmado por una empleada determinada. La oficina competente constata una posible falta, aunque desconoce las circunstancias de la pérdida.",
      "¿Qué ruta corresponde si la posible autora está individualizada?",
      [
        "Abrir investigación y verificar las circunstancias del extravío.",
        "Agotar indagación previa hasta determinar la intención de la empleada.",
        "Archivar definitivamente mientras no se acredite la culpabilidad."
      ],
      [
        "Identidad y relevancia permiten iniciar investigación.",
        "La intención no es presupuesto de indagación.",
        "La falta inicial de prueba de culpa no basta para archivar."
      ],
      "211–212"
    ],
    [
      "Un profesional técnico detecta que un servidor pudo alterar un documento público. Tiene copia de los soportes y sabe qué autoridad conoce disciplinariamente del asunto; su cargo no le asigna competencia para iniciar la acción.",
      "¿Cómo debe gestionar la noticia este profesional sin competencia disciplinaria?",
      [
        "Informar a la autoridad competente y adjuntar los soportes disponibles.",
        "Abrir indagación en nombre propio y remitirla al identificar la falta.",
        "Esperar a que la persona afectada presente una queja formal."
      ],
      [
        "El servidor sin competencia informa y aporta pruebas.",
        "El apoyo técnico no habilita una apertura disciplinaria.",
        "La acción pública no depende de queja de la víctima."
      ],
      "85–87"
    ],
    [
      "Una noticia anónima sobre modificación irregular de actas adjunta números de documentos, fechas y copias que permiten comprobación objetiva. El equipo debate si el anonimato determina la decisión antes de evaluar los requisitos legales de la información.",
      "¿Cómo debe tratarse el origen anónimo de esta noticia disciplinaria?",
      [
        "Comprobar si reúne los requisitos mínimos legales y evaluar su credibilidad.",
        "Inhibirse por anonimato aunque las referencias sean comprobables.",
        "Abrir investigación por la sola existencia de copias anexas."
      ],
      [
        "El art. 86 establece excepciones al rechazo de anónimos.",
        "El anonimato no es impedimento absoluto.",
        "Los anexos no sustituyen relevancia, competencia ni identificación."
      ],
      "86"
    ],
    [
      "En una investigación abierta surgen elementos que sugieren que el denunciante formuló deliberadamente una queja temeraria. Un asesor propone imponerle multa en la providencia que constata la discrepancia, sin citarlo ni escuchar sus explicaciones.",
      "¿Qué garantía debe observarse antes de decidir sobre la multa?",
      [
        "Citar al quejoso para explicaciones, pruebas y contradicción.",
        "Imponer la multa y permitirle controvertir exclusivamente mediante apelación.",
        "Declarar responsabilidad patrimonial y descontar la suma de manera inmediata."
      ],
      [
        "La decisión de multa exige oportunidad de defensa.",
        "La reposición posterior no reemplaza la oportunidad de explicaciones.",
        "La responsabilidad patrimonial se exige ante la autoridad judicial."
      ],
      "210"
    ],
    [
      "El funcionario competente emite inhibitoria porque la queja describe hechos de imposible ocurrencia. El quejoso presenta un escrito titulado recurso de apelación y pide tramitarlo como si fuera una decisión de archivo de investigación.",
      "¿Qué régimen de impugnación corresponde a esa decisión inhibitoria?",
      [
        "No procede recurso contra la decisión inhibitoria adoptada de plano.",
        "Procede apelación como contra el archivo de investigación.",
        "Procede reposición por tratarse de una decisión inicial."
      ],
      [
        "La norma excluye expresamente recursos contra la inhibitoria.",
        "Archivo e inhibitoria tienen supuestos distintos.",
        "La etapa inicial no crea una reposición que la ley excluye."
      ],
      "209"
    ],
    [
      "Un informe de auditoría identifica una posible alteración de expedientes que también podría configurar delito investigable de oficio. La autoridad disciplinaria competente conoce el asunto y dispone de los soportes. No existe decisión penal ni disciplinaria.",
      "¿Qué actuación corresponde frente a la posible dimensión penal?",
      [
        "Poner los hechos y soportes en conocimiento de la autoridad penal competente.",
        "Suspender la acción disciplinaria hasta una condena penal definitiva.",
        "Remitir el expediente penal y concluir necesariamente la acción disciplinaria."
      ],
      [
        "El art. 87 prevé comunicar delitos investigables de oficio.",
        "La posible relevancia penal no impone por sí sola suspensión.",
        "La remisión no extingue automáticamente la acción disciplinaria."
      ],
      "87"
    ],
    [
      "Un ciudadano califica como abuso que una funcionaria haya requerido un documento faltante. La revisión acredita que el requerimiento era legal, oportuno y no existió otro hecho disciplinariamente relevante. Todavía no se ha iniciado actuación disciplinaria.",
      "¿Qué decisión corresponde cuando la irrelevancia disciplinaria es manifiesta?",
      [
        "Inhibirse de iniciar actuación por irrelevancia disciplinaria del hecho.",
        "Abrir indagación para establecer si la funcionaria actuó con dolo.",
        "Abrir investigación para disponer posteriormente un archivo de fondo."
      ],
      [
        "La irrelevancia manifiesta es causal de inhibitoria.",
        "No existe posible falta que justifique indagación.",
        "No se requiere investigación para resolver ese supuesto de plano."
      ],
      "209"
    ],
    [
      "Una queja concreta sobre manipulación de inventarios señala una cuenta compartida por tres servidores. Los soportes permiten inferir una posible falta, pero no individualizan a quien hizo la modificación. La autoridad no dispone todavía de registros individuales.",
      "¿Qué actuación permite esclarecer la identidad sin atribuir responsabilidad por asociación?",
      [
        "Adelantar indagación previa con pruebas dirigidas a individualizar al autor.",
        "Abrir investigación contra los tres usuarios por compartir la cuenta.",
        "Inhibirse porque la queja no contiene el nombre del responsable."
      ],
      [
        "La duda de identidad ante una posible falta activa indagación.",
        "Compartir cuenta no individualiza a todos como autores.",
        "La falta de nombre no vuelve inconcreta una noticia verificable."
      ],
      "208–211"
    ]
  ],
  "pgn-m26": [
    [
      "En una indagación por modificación irregular de un registro, al segundo mes llega un informe de autenticación que individualiza al posible autor. Hay indicios de una posible falta y la oficina es competente. El plazo ordinario aún no se ha agotado.",
      "¿Qué decisión corresponde una vez individualizado el posible autor?",
      [
        "Abrir investigación de inmediato, sin esperar el término restante.",
        "Continuar la indagación hasta completar los seis meses previstos.",
        "Cerrar indagación y esperar certeza sobre culpabilidad antes de abrir."
      ],
      [
        "La identificación probatoria activa apertura inmediata.",
        "El plazo no obliga a esperar su vencimiento.",
        "Culpabilidad no es presupuesto para abrir investigación."
      ],
      "208"
    ],
    [
      "Una indagación ordinaria por pérdida documental cumple seis meses. Las diligencias agotadas no individualizan al posible autor, no se trata de DD. HH. ni DIH y no hay otro presupuesto legal. Se propone dejarla abierta por si llega información.",
      "¿Cuál es la salida procesal procedente en ese supuesto?",
      [
        "Ordenar el archivo previsto para la indagación previa.",
        "Prorrogar seis meses por la dificultad técnica del asunto.",
        "Abrir investigación contra persona indeterminada para continuar las diligencias."
      ],
      [
        "Se archiva cuando no se individualiza al autor.",
        "La extensión de seis meses exige supuesto especial.",
        "La apertura de investigación exige identificar al posible autor."
      ],
      "208–211"
    ],
    [
      "Una indagación se refiere a posibles violaciones del Derecho Internacional Humanitario. Al llegar al sexto mes queda una diligencia útil para identificar al posible autor. La autoridad considera aplicar el término especial previsto para esta etapa.",
      "¿Qué margen adicional permite la regla especial de indagación?",
      [
        "Extender hasta otros seis meses bajo el supuesto especial.",
        "Extender hasta dieciocho meses adicionales por tratarse de DIH.",
        "Extender tres meses por cualquier prueba pendiente de identificación."
      ],
      [
        "La extensión especial es de otros seis meses.",
        "Dieciocho meses corresponde al límite especial de investigación.",
        "La regla de tres meses pertenece a investigación."
      ],
      "208, 213"
    ],
    [
      "Tras el archivo de indagación por falta de individualización, llega un registro auténtico que identifica al posible autor del mismo hecho. No hubo fallo ni archivo de investigación con cosa juzgada material. La autoridad verifica que la acción sigue vigente.",
      "¿Qué efecto tiene ese archivo previo sobre la nueva prueba?",
      [
        "No impide examinar la nueva información por cosa juzgada material.",
        "Impide toda actuación por el carácter definitivo de cualquier archivo.",
        "Obliga a revocar previamente un fallo absolutorio que nunca existió."
      ],
      [
        "El parágrafo niega cosa juzgada material a ese archivo.",
        "No todos los archivos tienen el mismo efecto.",
        "No existió fallo absolutorio que revocar."
      ],
      "208"
    ],
    [
      "Un informe identifica a la funcionaria que realizó una actuación cuestionada y aporta elementos de posible relevancia disciplinaria. La autoridad desconoce si existió justificación funcional. Un proyecto propone indagación para aclarar primero el elemento subjetivo.",
      "¿Qué etapa permite verificar la conducta y sus posibles justificaciones?",
      [
        "Abrir investigación disciplinaria por estar individualizada la posible autora.",
        "Indagar previamente hasta comprobar la modalidad de culpabilidad.",
        "Inhibirse porque la posible justificación excluye toda relevancia inicial."
      ],
      [
        "Los fines del art. 212 se examinan en investigación.",
        "Indagación no se activa por duda de culpabilidad.",
        "Una posible justificación no equivale a exclusión demostrada."
      ],
      "208, 211–212"
    ],
    [
      "Una indagación busca identificar al autor de una eliminación de inventario. Existen turnos de trabajo, registros de autenticación y declaraciones de personal. El coordinador propone usar exclusivamente una encuesta informal sobre quién cree el equipo que modificó los datos.",
      "¿Qué diligencia es más adecuada para el objetivo de indagación?",
      [
        "Contrastar registros de acceso, turnos y testimonios legalmente obtenidos.",
        "Tomar la opinión mayoritaria como individualización suficiente del posible autor.",
        "Solicitar confesión al empleado más antiguo antes de verificar registros."
      ],
      [
        "Se requieren medios legales aptos para individualizar.",
        "La opinión colectiva no acredita identidad por sí sola.",
        "La antigüedad no es indicio suficiente y la confesión exige garantías."
      ],
      "208"
    ],
    [
      "En una indagación sobre modificación irregular de un acto, la prueba acredita que nunca fue alterado: la diferencia provenía de dos versiones legítimamente expedidas. El despacho todavía no conoce quién originó la confusión y tiene plazo restante.",
      "¿Debe mantenerse la indagación únicamente para individualizar a alguien?",
      [
        "Archivar motivadamente al quedar descartada la procedencia de investigación.",
        "Agotar siempre los seis meses para identificar al autor de la confusión.",
        "Abrir investigación por la diferencia documental pese a descartarse alteración."
      ],
      [
        "Se archiva si no procede investigación.",
        "El plazo no obliga a sostener una actuación sin fundamento.",
        "La diferencia no demuestra el hecho descartado."
      ],
      "208"
    ],
    [
      "Un equipo registra como indagación previa una posible falta ordinaria y planifica nueve meses invocando el plazo de investigación y una ampliación probatoria. No existen hechos relacionados con violaciones de derechos humanos ni del DIH.",
      "¿Qué corrección corresponde al calendario de la indagación ordinaria?",
      [
        "Aplicar el término ordinario de seis meses propio de la indagación.",
        "Mantener nueve meses por aplicación acumulada del art. 213.",
        "Aplicar doce meses por asimilación a investigaciones con varios servidores."
      ],
      [
        "El art. 208 fija seis meses en el supuesto ordinario.",
        "Las prórrogas de investigación no se trasladan a indagación.",
        "La pluralidad de investigados regula otra etapa."
      ],
      "208, 213"
    ],
    [
      "Una indagación por firma irregular de actas individualiza a una persona mediante prueba incorporada legalmente. La autoridad tiene competencia y el hecho conserva relevancia disciplinaria. La secretaría propone trasladar inmediatamente el expediente a juzgamiento.",
      "¿Qué decisión debe anteceder a una eventual formulación de cargos?",
      [
        "Emitir auto de apertura de investigación y desarrollar sus fines.",
        "Formular cargos directamente al haberse individualizado al posible autor.",
        "Remitir a juzgamiento para que ese funcionario abra investigación."
      ],
      [
        "La identificación activa investigación, no acredita el estándar de cargos.",
        "Formular cargos exige presupuestos adicionales del art. 222.",
        "Instrucción y juzgamiento son funciones diferenciadas."
      ],
      "208, 211–212, 222"
    ]
  ],
  "pgn-m27": [
    [
      "Una investigación se abrió el 15 de enero contra un servidor por una única falta ordinaria. La notificación se practicó el 2 de febrero. El equipo prepara el seguimiento de los seis meses y debe determinar qué actuación inicia el cómputo legal.",
      "¿A partir de qué actuación se cuenta el término de investigación?",
      [
        "Desde la decisión de apertura del 15 de enero.",
        "Desde la notificación practicada el 2 de febrero.",
        "Desde la recepción del primer medio de prueba."
      ],
      [
        "El art. 213 fija la decisión de apertura como punto inicial.",
        "La notificación cumple una función diferente.",
        "El primer recaudo probatorio no determina el inicio."
      ],
      "213"
    ],
    [
      "Una investigación ordinaria comprende tres faltas atribuidas a dos servidores identificados. Al aproximarse el término inicial, quedan diligencias necesarias y la autoridad estudia una prórroga justificada, diferenciándola de la ampliación adicional por pruebas decisivas.",
      "¿Qué margen de prórroga permite la pluralidad descrita?",
      [
        "Hasta otros seis meses bajo los presupuestos del art. 213.",
        "Exactamente tres meses por la pluralidad de sujetos y faltas.",
        "Hasta dieciocho meses por tratarse de una investigación compleja."
      ],
      [
        "Varias faltas o varios sujetos permiten prorrogar hasta otro tanto.",
        "Los tres meses corresponden a otra hipótesis de ampliación.",
        "El límite especial de dieciocho meses se refiere a DD. HH. o DIH."
      ],
      "213"
    ],
    [
      "Durante una investigación ordinaria se agota el término aplicable y también una ampliación de tres meses concedida por pruebas capaces de modificar la situación jurídica. Tras las diligencias no existe prueba que permita formular cargos. El equipo propone conceder otro mes.",
      "¿Qué decisión debe adoptar el instructor al vencer esa ampliación?",
      [
        "Ordenar el archivo definitivo por falta de prueba para formular cargos.",
        "Prorrogar nuevamente seis meses para completar el expediente.",
        "Formular cargos para que el juzgador examine la insuficiencia."
      ],
      [
        "El art. 213 exige archivo vencida la ampliación sin prueba de cargos.",
        "La extensión no se repite indefinidamente.",
        "El juzgamiento no sustituye el estándar de acusación."
      ],
      "213, 222"
    ],
    [
      "Durante una investigación se descubre que el servidor investigado habría intervenido en un hecho totalmente ajeno a la queja y a sus hechos conexos. Un asesor propone agregarlo al expediente actual por economía procesal, sin examinar competencia ni iniciar otro asunto.",
      "¿Cómo debe delimitarse el objeto de la investigación existente?",
      [
        "Mantener los hechos investigados y conexos; tramitar separadamente el nuevo asunto.",
        "Incorporar todo hecho del mismo servidor a la investigación iniciada.",
        "Cerrar el expediente inicial para investigar exclusivamente el nuevo hecho."
      ],
      [
        "El objeto está delimitado a hechos iniciales y conexos.",
        "La identidad del sujeto no establece conexidad por sí sola.",
        "Otro asunto no exige abandonar el expediente anterior."
      ],
      "212"
    ],
    [
      "Una investigación por omisión recibe un reporte de contingencia que respalda la explicación del disciplinado y un registro que podría desvirtuarla. El instructor considera decretar solamente la prueba que sostiene su hipótesis inicial para entregar oportunamente el proyecto.",
      "¿Qué deber probatorio se aplica a esas fuentes contradictorias?",
      [
        "Investigar con igual rigor los elementos de cargo y de descargo.",
        "Decretar solo el registro de cargo y reservar el reporte para juzgamiento.",
        "Aceptar el reporte favorable y archivar sin contrastar el registro."
      ],
      [
        "La búsqueda probatoria debe ser imparcial.",
        "Deben examinarse elementos exculpatorios pertinentes en investigación.",
        "La explicación favorable requiere valoración conjunta."
      ],
      "147–148, 212"
    ],
    [
      "Un servidor vinculado pide ser oído en versión libre durante investigación. En su escrito desea explicar una demora sin aceptar responsabilidad. La dependencia propone exigir juramento y tratar la explicación como aceptación de cargos antes de practicar nuevas diligencias.",
      "¿Qué tratamiento corresponde a la solicitud de versión libre?",
      [
        "Tramitar la solicitud respetando defensa y no autoincriminación del disciplinado.",
        "Condicionar la versión a que el disciplinado acepte previamente responsabilidad.",
        "Recibirla como testimonio obligatorio bajo juramento contra sí mismo."
      ],
      [
        "La versión libre es un derecho del vinculado.",
        "La aceptación tiene requisitos propios y no condiciona la versión.",
        "No es testimonio compulsivo contra sí mismo."
      ],
      "112, 161, 212"
    ],
    [
      "En una investigación se demuestra plenamente, antes del vencimiento del término, que el disciplinado no realizó la conducta atribuida. Los registros íntegros identifican a otra persona y descartan su intervención. La autoridad considera esperar al sexto mes para resolver.",
      "¿Qué decisión procede respecto de quien no cometió la conducta?",
      [
        "Declarar motivadamente la terminación y ordenar el archivo definitivo.",
        "Continuar hasta el vencimiento del término para resolver el archivo.",
        "Formular cargos provisionales y dejar que el juzgador valore."
      ],
      [
        "La causal demostrada permite terminar en cualquier etapa.",
        "No debe esperarse al término máximo si procede terminación.",
        "No hay fundamento para acusar a quien se demuestra ajeno."
      ],
      "90, 222"
    ],
    [
      "Se investiga una posible falta ordinaria en la que pudieron intervenir dos servidores. La prueba individualiza únicamente a uno y se requieren actuaciones distintas para esclarecer al otro. El instructor analiza si puede continuar respecto del identificado.",
      "¿Qué figura permite manejar las actuaciones en estas circunstancias?",
      [
        "Examinar la ruptura de unidad procesal con preservación de garantías.",
        "Declarar nulidad integral por no identificar simultáneamente a ambos servidores.",
        "Suspender necesariamente la investigación hasta identificar al segundo interviniente."
      ],
      [
        "La ruptura procede si se identifica solo a algunos intervinientes.",
        "La identificación parcial no constituye causal de nulidad por sí misma.",
        "La ruptura permite avanzar respetando garantías."
      ],
      "214"
    ],
    [
      "Un proyecto de apertura identifica al posible autor y las pruebas decretadas, pero omite los hechos concretos y solo indica «incumplimiento de funciones». La oficina conoce fechas, documentos y actuaciones específicas que deberían delimitar el objeto.",
      "¿Qué elemento debe incorporarse antes de expedir la decisión de apertura?",
      [
        "Relación clara y comprensible de los hechos disciplinariamente relevantes.",
        "Graduación definitiva de la sanción que recibiría el posible autor.",
        "Relación de los descargos que formulará durante la futura etapa de juicio."
      ],
      [
        "La apertura exige delimitar hechos relevantes en lenguaje comprensible.",
        "La sanción no se determina al abrir.",
        "Los descargos futuros no son contenido de apertura."
      ],
      "215"
    ]
  ],
  "pgn-m28": [
    [
      "Un ciudadano presenta queja por una irregularidad ordinaria en compras públicas; no es víctima de violaciones de derechos humanos, DIH ni acoso laboral. Después de la apertura solicita intervenir en toda práctica probatoria exactamente como el investigado.",
      "¿Qué alcance tiene su intervención en calidad de quejoso ordinario?",
      [
        "Ejercer las facultades limitadas que la ley reconoce al quejoso.",
        "Ejercer automáticamente todas las facultades de los sujetos procesales.",
        "Intervenir exclusivamente como testigo, sin aportar documentos ni recurrir."
      ],
      [
        "El parágrafo del art. 110 limita la intervención ordinaria.",
        "Presentar queja no otorga calidad procesal plena.",
        "Puede aportar pruebas y recurrir archivo y absolución."
      ],
      "109–110"
    ],
    [
      "La víctima de una conducta constitutiva de acoso laboral solicita reconocimiento como sujeto procesal y designa apoderado. La oficina propone tratarla igual que un ciudadano que denunció una irregularidad ordinaria sin ser víctima.",
      "¿Qué diferencia legal debe aplicar el despacho a esta intervención?",
      [
        "Reconocer su calidad de sujeto procesal y facultad de designar apoderado.",
        "Limitarla a ampliar la queja y recurrir el archivo o absolución.",
        "Reservar su intervención plena hasta la emisión del fallo sancionatorio."
      ],
      [
        "El art. 109 reconoce a víctimas de acoso laboral como sujetos procesales.",
        "La limitación ordinaria del quejoso no rige en este supuesto.",
        "Su condición no depende de que exista un fallo sancionatorio."
      ],
      "109–110"
    ],
    [
      "La autoridad competente expide el auto de apertura de investigación contra un servidor el lunes. La citación para notificación personal se remite el jueves. El equipo duda sobre cuándo adquirió la calidad procesal de disciplinado.",
      "¿Qué actuación determina legalmente esa calidad en el expediente?",
      [
        "La expedición del auto de apertura de investigación contra el servidor.",
        "La entrega efectiva de la citación para practicar la notificación personal.",
        "La presentación de los primeros descargos después de formular cargos."
      ],
      [
        "La calidad se adquiere con el auto de apertura o vinculación.",
        "La notificación no define el momento de adquisición de calidad.",
        "Los descargos corresponden a una etapa posterior."
      ],
      "111"
    ],
    [
      "Mientras se surte la notificación personal de la apertura, la autoridad practica pruebas para establecer el hecho. Tras notificarse, el disciplinado identifica puntos concretos que no pudo controvertir y solicita la ampliación o reiteración de esas diligencias.",
      "¿Qué tratamiento legal corresponde a las pruebas practicadas durante la notificación?",
      [
        "Ampliarlas o reiterarlas en los puntos que solicite el disciplinado.",
        "Excluirlas todas por haberse practicado antes de notificar la apertura.",
        "Negar la solicitud porque las pruebas ya fueron incorporadas regularmente."
      ],
      [
        "El art. 111 prevé continuidad probatoria y reiteración o ampliación solicitada.",
        "La notificación en trámite no suspende la prueba.",
        "La incorporación previa no elimina el derecho especial de contradicción."
      ],
      "111"
    ],
    [
      "En una investigación reservada, el defensor acreditado solicita acceso a los documentos para preparar la contradicción. El secretario le niega todo acceso alegando que la reserva general del proceso obliga a esperar hasta formular cargos, sin distinguir destinatarios.",
      "¿Qué criterio debe aplicarse al acceso solicitado por la defensa?",
      [
        "Garantizar el acceso procesal, observando las reservas legales específicas que correspondan.",
        "Negar todo acceso hasta formular cargos por la reserva de la actuación.",
        "Entregar el expediente a cualquier ciudadano por haberse solicitado por escrito."
      ],
      [
        "La reserva general no desconoce los derechos de sujetos procesales.",
        "No puede impedir en bloque la defensa.",
        "El acceso procesal no convierte el expediente en público."
      ],
      "110, 112, 115"
    ],
    [
      "En el curso de la investigación, el disciplinado y su defensor plantean criterios contradictorios sobre una solicitud procesal. Ambos están debidamente reconocidos y el despacho necesita determinar cuál criterio prevalece conforme a la regla de defensa técnica.",
      "¿Cuál criterio prevalece cuando existe esa contradicción procesal?",
      [
        "El criterio del defensor, según la regla expresa del Código.",
        "El criterio del disciplinado por ser titular del interés en juego.",
        "El criterio que el instructor estime más conveniente para resolver."
      ],
      [
        "El art. 113 otorga prevalencia al criterio del defensor.",
        "La condición de investigado no desplaza la regla específica.",
        "El instructor no elige a discreción la posición de defensa."
      ],
      "113"
    ],
    [
      "Después de surtirse el cierre, pero antes del traslado para alegar previo al fallo de primera instancia, el disciplinado solicita versión libre. El funcionario considera rechazarla porque ya terminó la fase de recaudo de pruebas durante la investigación.",
      "¿Qué límite temporal establece la norma para ejercer ese derecho?",
      [
        "Puede ser oído hasta antes del traslado de alegatos previos al fallo.",
        "Solo puede ser oído hasta la ejecutoria del cierre de investigación.",
        "Puede ser oído únicamente antes de notificarse el pliego de cargos."
      ],
      [
        "El art. 112 fija el límite previo a alegatos del fallo.",
        "El cierre no es el límite legal de la versión.",
        "La formulación de cargos tampoco extingue ese derecho."
      ],
      "112"
    ],
    [
      "Un quejoso ordinario recibe comunicación de una decisión de archivo definitivo y desea recurrirla. La secretaría le indica que no tiene calidad de sujeto procesal y que por esa razón no puede conocer el expediente ni ejercer ninguna impugnación.",
      "¿Qué facultad específica conserva frente al archivo definitivo comunicado?",
      [
        "Recurrir el archivo y conocer el expediente para ese preciso efecto.",
        "Interponer recursos contra cualquier decisión por ser autor de la queja.",
        "Carece de facultad de impugnación porque no es sujeto procesal."
      ],
      [
        "El parágrafo del art. 110 autoriza recurrir el archivo.",
        "Las facultades ordinarias no abarcan todas las decisiones.",
        "El Código prevé expresamente esa excepción a la intervención limitada."
      ],
      "110"
    ],
    [
      "En una diligencia de versión libre, el investigado decide no responder una pregunta cuya respuesta podría incriminarlo. El funcionario propone registrar su silencio como aceptación de responsabilidad y reducir por esa sola razón las pruebas que necesita la investigación.",
      "¿Qué valor puede atribuirse al silencio en el supuesto descrito?",
      [
        "No constituye por sí solo confesión ni prueba de responsabilidad.",
        "Equivale a aceptación tácita si el investigado cuenta con abogado.",
        "Permite suplir la prueba faltante cuando el expediente contiene indicios."
      ],
      [
        "La no autoincriminación protege el silencio; la carga corresponde al Estado.",
        "La confesión requiere manifestación voluntaria e informada.",
        "El silencio no sustituye prueba legal ni estándar de responsabilidad."
      ],
      "10, 112, 147, 161"
    ]
  ]
}

/** Revisión individual RC.8; conserva ID, clave y metadatos del reactivo histórico. */
export function reviewedTemplateQuestion(question: Question, number: number): Question {
  const item = reviewed[question.moduleId]?.[number - 2]
  if (!item) return question
  const [caseText, stem, choices, rationales, articles] = item
  let wrongIndex = 1
  return {
    ...question,
    case: caseText,
    stem,
    options: question.options.map(o => {
      const i = o.id === question.correctOptionId ? 0 : wrongIndex++
      return { id: o.id, text: choices[i]!, rationale: rationales[i]! }
    }),
    explanation: 'Código General Disciplinario, art(s). ' + articles + '. ' + rationales.join(' '),
    sourceIds: [...new Set([...question.sourceIds, 'ley-1952-2019', 'ley-2094-2021'])],
    verifiedAt: '2026-11-24',
  }
}

export const reviewedTemplateModuleIds = Object.keys(reviewed)
