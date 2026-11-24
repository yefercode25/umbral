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
  ],
  "pgn-m29": [
    [
      "En una investigación ordinaria, todas las pruebas ordenadas fueron practicadas al cuarto mes y no hay diligencias pendientes. El instructor estima necesario esperar el vencimiento de los seis meses para que el cierre pueda considerarse válido.",
      "¿Qué actuación corresponde al haberse agotado el recaudo de pruebas?",
      [
        "Declarar cerrada la investigación y ordenar el traslado de alegatos precalificatorios.",
        "Esperar el vencimiento de los seis meses para declarar formalmente el cierre.",
        "Evaluar directamente el mérito y formular cargos antes de disponer traslado."
      ],
      [
        "La culminación del recaudo es supuesto de cierre.",
        "No es necesario esperar el término cuando se recaudaron las pruebas.",
        "Debe respetarse el traslado antes de la evaluación."
      ],
      "220–221"
    ],
    [
      "La investigación llegó al vencimiento de su término legal, incluidas las ampliaciones aplicables. El instructor prepara el cierre y propone conceder cinco días para argumentos porque considera que esa oportunidad equivale a la interposición de un recurso.",
      "¿Qué término corresponde al traslado de alegatos previos a la evaluación?",
      [
        "Diez días para los sujetos procesales conforme al régimen especial.",
        "Cinco días para los sujetos procesales conforme al régimen de recursos.",
        "Quince días para presentar descargos conforme al procedimiento de juicio."
      ],
      [
        "El art. 220 establece diez días para alegatos precalificatorios.",
        "El término de recursos regula otra actuación.",
        "Los quince días de descargos corresponden a juicio ordinario."
      ],
      "220, 225B"
    ],
    [
      "En un proyecto de cierre de investigación se anuncia que el disciplinado es definitivamente responsable porque existe prueba suficiente para evaluar el expediente. Todavía no se ha dado traslado para alegatos precalificatorios ni se ha formulado pliego de cargos.",
      "¿Qué debe corregirse en el alcance de esa decisión de cierre?",
      [
        "Limitar el cierre a finalizar la investigación y habilitar los alegatos.",
        "Mantener la declaración de responsabilidad como conclusión preliminar del cierre.",
        "Convertir el cierre en pliego de cargos para que opere simultáneamente."
      ],
      [
        "El cierre es una decisión de sustanciación, no sancionatoria.",
        "No corresponde declarar responsabilidad definitiva en instrucción.",
        "La evaluación de mérito es posterior al traslado."
      ],
      "220–222"
    ],
    [
      "Al finalizar el recaudo, el investigado presenta argumentos que cuestionan la conexión entre su deber y el hecho. El equipo afirma que solo considerará esos argumentos si se reiteran como descargos después de la formulación de cargos.",
      "¿Cómo deben tratarse esos argumentos en la evaluación de la investigación?",
      [
        "Analizarlos junto con las pruebas y motivar la evaluación del mérito.",
        "Reservarlos para que el juzgador los examine después de formular cargos.",
        "Excluirlos si el disciplinado no aporta simultáneamente una nueva prueba."
      ],
      [
        "El art. 220 permite alegatos antes de evaluar; deben considerarse.",
        "No se difiere una garantía que opera en instrucción.",
        "Alegar no exige aportar prueba nueva."
      ],
      "112, 220–223"
    ],
    [
      "El despacho cerró la investigación, concedió el traslado legal y recibió alegatos oportunamente. Aún no ha emitido decisión de evaluación. El coordinador propone trasladar al funcionario de juzgamiento para que decida si hay mérito para formular cargos.",
      "¿Quién debe efectuar la evaluación en esta fase de la actuación?",
      [
        "El instructor, mediante decisión motivada de cargos o terminación y archivo.",
        "El juzgador, mediante decisión sobre la suficiencia para formular cargos.",
        "La secretaría, mediante constancia de que venció el traslado de alegatos."
      ],
      [
        "La evaluación corresponde al funcionario de conocimiento en instrucción.",
        "Juzgamiento no reemplaza la evaluación del instructor.",
        "Una constancia de secretaría no es decisión de mérito."
      ],
      "12, 220–221"
    ],
    [
      "Se declaró cerrada una investigación y se concedió traslado para alegatos. Ningún sujeto procesal presentó escrito dentro de los diez días. La autoridad debe decidir si la ausencia de argumentos altera el estándar probatorio para adoptar la decisión siguiente.",
      "¿Qué efecto tiene la falta de alegatos en la evaluación posterior?",
      [
        "Evaluar el mérito de las pruebas sin inferir aceptación de responsabilidad.",
        "Formular cargos porque la falta de alegatos implica aceptación tácita.",
        "Archivar automáticamente porque no se produjo controversia durante el traslado."
      ],
      [
        "El vencimiento del traslado habilita evaluación; no prueba responsabilidad.",
        "La inactividad no sustituye los requisitos de confesión.",
        "La ausencia de controversia no es causal automática de archivo."
      ],
      "10, 161, 220–222"
    ],
    [
      "Un auxiliar confunde los alegatos precalificatorios del cierre de investigación con los alegatos de conclusión de un juicio ordinario. En su cronograma registra una única oportunidad común para ambas actuaciones, aunque el proceso aún permanece en instrucción.",
      "¿Qué ajuste distingue correctamente las dos oportunidades de defensa?",
      [
        "Mantener alegatos antes de evaluar investigación y otros antes del fallo.",
        "Utilizar solo los alegatos previos al fallo para evitar duplicar términos.",
        "Usar los alegatos precalificatorios como sustituto de los descargos en juicio."
      ],
      [
        "El Código prevé oportunidades diferenciadas antes de evaluar y fallar.",
        "Los alegatos del juicio no sustituyen los de instrucción.",
        "Los descargos tienen finalidad y oportunidad propias."
      ],
      "112, 220, 225B, 225E"
    ],
    [
      "Antes de cerrar una investigación ordinaria, queda pendiente una prueba ordenada que puede modificar la situación jurídica del disciplinado. El término aún está vigente y la diligencia puede practicarse oportunamente. La jefatura propone cerrar porque la entrega interna vence mañana.",
      "¿Qué debe priorizar el instructor ante esa prueba decretada pendiente?",
      [
        "Practicar la prueba dentro del término aplicable antes de disponer el cierre.",
        "Cerrar de inmediato y reservar toda práctica pendiente para el juzgador.",
        "Considerar agotado el recaudo porque la meta interna vence al día siguiente."
      ],
      [
        "El plazo interno no elimina la prueba pendiente ni el término legal.",
        "El juicio no sustituye automáticamente el recaudo de instrucción.",
        "La meta de gestión no equivale a la culminación del recaudo."
      ],
      "147–148, 213, 220"
    ],
    [
      "Una decisión de cierre concede los diez días de alegatos precalificatorios. Al vencerse el traslado, el expediente contiene hechos acreditados y otros inciertos. El proyecto de evaluación cita el cierre como razón suficiente para acusar al disciplinado.",
      "¿Qué análisis adicional exige la evaluación para decidir sobre los cargos?",
      [
        "Valorar si las pruebas satisfacen el estándar de formulación de cargos.",
        "Considerar el cierre como prueba suficiente de que la falta ocurrió.",
        "Aplicar el estándar de certeza del fallo para decidir si procede acusar."
      ],
      [
        "El cierre no sustituye el examen del mérito exigido para cargos.",
        "Una providencia de trámite no prueba la conducta.",
        "El estándar de fallo es diferente del de acusación."
      ],
      "160, 220–222"
    ]
  ],
  "pgn-m30": [
    [
      "Tras el cierre y traslado de alegatos, se encuentra objetivamente demostrada una posible falta disciplinaria y existe prueba que compromete la responsabilidad del servidor. No se ha alcanzado todavía el grado de certeza necesario para un fallo sancionatorio.",
      "¿Qué decisión de evaluación resulta procedente bajo ese estándar legal?",
      [
        "Formular pliego de cargos motivado y respetar la etapa de juzgamiento.",
        "Archivar hasta obtener certeza suficiente para proferir un fallo sancionatorio.",
        "Imponer sanción desde instrucción porque está demostrada la falta objetiva."
      ],
      [
        "El art. 222 diferencia estándar de cargos del estándar de fallo.",
        "No se exige certeza sancionatoria para formular cargos.",
        "El instructor no declara responsabilidad definitiva."
      ],
      "12, 160, 221–222"
    ],
    [
      "La investigación culminó después de agotar el término aplicable y las ampliaciones legales. Existe prueba de un hecho irregular, pero ninguna compromete personalmente la responsabilidad del disciplinado. El instructor considera formular cargos por la gravedad institucional del hecho.",
      "¿Qué decisión corresponde ante la insuficiencia del presupuesto de cargos?",
      [
        "Terminar la actuación y archivar motivadamente por insuficiencia del estándar.",
        "Formular cargos por la gravedad objetiva y trasladar la duda al juzgador.",
        "Formular cargos condicionados a que el disciplinado pruebe su inocencia."
      ],
      [
        "La falta objetiva sin prueba que comprometa responsabilidad no basta.",
        "La gravedad no sustituye la conexión personal.",
        "La carga probatoria corresponde al Estado."
      ],
      "147, 213, 221–222"
    ],
    [
      "El proyecto de pliego identifica al servidor y describe la actuación, pero se limita a copiar una lista de deberes generales sin explicar la relación entre cada norma presuntamente vulnerada y la conducta concreta investigada. Ya se surtieron los alegatos.",
      "¿Qué elemento debe completar el instructor para delimitar jurídicamente la acusación?",
      [
        "Precisar las normas presuntamente violadas y el concepto específico de violación.",
        "Agregar antecedentes disciplinarios sin desarrollar el nexo normativo de la conducta.",
        "Transcribir la sanción máxima sin identificar la modalidad de la infracción."
      ],
      [
        "El art. 223 exige identificar normas y concepto de violación.",
        "Los antecedentes no sustituyen la imputación normativa.",
        "La sanción abstracta no explica el comportamiento imputado."
      ],
      "223"
    ],
    [
      "En un proyecto de cargos se describe un incumplimiento formal, pero no se analiza su afectación al deber funcional ni una justificación aportada por el disciplinado. El instructor considera que basta con acreditar la fecha del incumplimiento.",
      "¿Qué análisis sustantivo falta en la motivación del pliego?",
      [
        "Analizar ilicitud sustancial en relación con el deber funcional y justificación.",
        "Calcular únicamente la gravedad con base en los días de incumplimiento.",
        "Reservar la afectación del deber exclusivamente para la motivación del fallo."
      ],
      [
        "La ilicitud sustancial exige afectación sustancial del deber sin justificación.",
        "La duración no demuestra por sí sola ilicitud.",
        "El pliego exige expresamente analizarla."
      ],
      "9, 223"
    ],
    [
      "Un proyecto de pliego fundamenta dos cargos diferentes con una lista común de documentos y no identifica cuáles respaldan cada imputación. Las circunstancias temporales y los deberes presuntamente afectados son distintos para los dos cargos.",
      "¿Qué corrección debe hacerse a la motivación probatoria del pliego?",
      [
        "Analizar las pruebas que fundamentan cada cargo y su relación con los hechos.",
        "Mantener una lista global porque los documentos pertenecen al mismo expediente.",
        "Trasladar todo análisis individual de pruebas al futuro funcionario de juzgamiento."
      ],
      [
        "El art. 223 exige fundamentación probatoria de cada cargo.",
        "La pertenencia al expediente no prueba cada imputación.",
        "La evaluación del instructor no se traslada al juzgador."
      ],
      "221–223"
    ],
    [
      "Después de la notificación válida del pliego, la defensa intenta interponer apelación contra su formulación, alegando que toda providencia que compromete la responsabilidad debe admitir impugnación inmediata. La secretaría debe revisar el régimen especial de recursos.",
      "¿Qué tratamiento corresponde al recurso interpuesto contra el pliego de cargos?",
      [
        "Aplicar la improcedencia de recursos prevista expresamente para esa decisión.",
        "Conceder apelación porque el pliego equivale al fallo de primera instancia.",
        "Conceder reposición porque todas las decisiones del instructor son recurribles."
      ],
      [
        "El art. 222 excluye recursos contra la formulación.",
        "El pliego no equivale a fallo.",
        "La reposición solo procede en supuestos legales."
      ],
      "133–134, 222"
    ],
    [
      "En una investigación, mediante decisión motivada y firme, se archivó porque se demostró plenamente que el disciplinado no cometió la conducta. No se trata de autor sin individualizar. Un funcionario plantea iniciar de nuevo la misma actuación por idénticos hechos.",
      "¿Qué efecto debe examinarse antes de reabrir ese mismo asunto?",
      [
        "La cosa juzgada del archivo definitivo respecto del disciplinado y hechos decididos.",
        "La ausencia de cosa juzgada material propia de toda indagación previa.",
        "La posibilidad de reiniciar automáticamente por tratarse de una decisión del instructor."
      ],
      [
        "El art. 224 atribuye cosa juzgada al archivo de investigación.",
        "La indagación previa tiene régimen distinto.",
        "La autoridad debe respetar el efecto de la decisión firme."
      ],
      "90, 208, 224"
    ],
    [
      "Se formuló pliego de cargos dentro de una actuación ordinaria y se cumplieron todas las notificaciones correspondientes. El instructor considera conservar el expediente durante quince días para preparar un informe adicional que recomiende al juzgador el tipo de fallo.",
      "¿Qué plazo legal tiene el instructor para remitir el expediente al juzgador?",
      [
        "Tres días improrrogables contados una vez cumplidas las notificaciones.",
        "Cinco días contados desde la firma del pliego aunque no esté notificado.",
        "Quince días contados desde el vencimiento de los alegatos precalificatorios."
      ],
      [
        "El art. 225 fija tres días improrrogables tras notificar.",
        "La firma no es el hecho que inicia la remisión.",
        "El plazo no se cuenta desde alegatos de instrucción."
      ],
      "225"
    ],
    [
      "La autoridad de instrucción proyecta archivo definitivo al demostrar una causal del artículo 90. Existe quejoso ordinario identificado y un funcionario propone omitir toda comunicación porque la decisión no lo declara responsable ni le impone obligación alguna.",
      "¿Qué garantía debe observarse frente al quejoso al ordenar el archivo?",
      [
        "Comunicarle la decisión para que pueda ejercer las facultades legales correspondientes.",
        "Notificarlo únicamente cuando también ostente la calidad plena de sujeto procesal.",
        "Omitir comunicación porque el archivo solo produce efectos para el disciplinado."
      ],
      [
        "El art. 90 ordena comunicación al quejoso; puede recurrir archivo.",
        "No necesita calidad plena para esa facultad.",
        "La ausencia de sanción no elimina el deber de comunicar."
      ],
      "90, 110, 134"
    ]
  ],
  "pgn-m31": [
    [
      "Un despacho expide auto de apertura de investigación y la secretaría plantea publicarlo únicamente en el estado electrónico ordinario porque el disciplinado ya conoce informalmente que existe una queja. Aún no ha surtido notificación ni se configura conducta concluyente.",
      "¿Qué modalidad de notificación corresponde inicialmente al auto de apertura?",
      [
        "Notificación personal, con aplicación de las alternativas legales si no se logra.",
        "Notificación directa por estado electrónico como cualquier providencia de trámite.",
        "Comunicación informal por el medio más eficaz sin constancia de notificación."
      ],
      [
        "El art. 121 exige notificación personal de la apertura.",
        "El estado ordinario no sustituye sin más la regla especial.",
        "Comunicar informalmente no equivale a notificar."
      ],
      "111, 120–121"
    ],
    [
      "La defensa facilitó una dirección electrónica en una actuación, pero no aceptó previamente por escrito ser notificada por ese medio. La oficina envía allí un fallo y propone certificar la notificación personal electrónica con el mero comprobante de salida.",
      "¿Qué presupuesto debe verificar antes de utilizar esa modalidad de notificación?",
      [
        "Aceptación previa por escrito y las condiciones legales de recepción y constancia.",
        "La existencia de cualquier dirección electrónica mencionada durante la investigación.",
        "La disponibilidad de un reporte interno que acredite únicamente el envío."
      ],
      [
        "El art. 122 exige aceptación previa escrita y debe atenderse el condicionamiento constitucional.",
        "Informar una dirección no equivale automáticamente a aceptar esa modalidad.",
        "El envío aislado no acredita todos los requisitos."
      ],
      "122; C-570/2019"
    ],
    [
      "Una providencia fue notificada irregularmente. El defensor no reclama el defecto y, en un escrito posterior, identifica expresamente la decisión, reproduce su contenido y solicita que se reconsidere. El despacho debe determinar el efecto procesal de esa intervención.",
      "¿Qué figura permite considerar cumplida la notificación en el supuesto descrito?",
      [
        "Notificación por conducta concluyente conforme a la actuación posterior del defensor.",
        "Notificación por edicto presumida desde la fecha de expedición de la providencia.",
        "Notificación personal electrónica presumida por haber presentado un escrito posterior."
      ],
      [
        "El art. 128 contempla actuación o referencia posterior sin reclamo.",
        "El edicto exige su trámite específico.",
        "Presentar escrito no acredita aceptación electrónica previa."
      ],
      "128"
    ],
    [
      "El instructor niega mediante decisión notificada una solicitud de prueba de la defensa durante la etapa de investigación. La defensa presenta recurso oportuno y solicita determinar el trámite aplicable, sin que se trate todavía de la fase de juicio.",
      "¿Qué recurso ordinario procede contra esa negativa de prueba en investigación?",
      [
        "Reposición ante el funcionario que profirió la decisión de investigación.",
        "Apelación ante el superior funcional como si fuera negativa en juicio.",
        "Queja directamente ante el superior sin rechazo previo de apelación."
      ],
      [
        "La negativa de pruebas en investigación admite reposición.",
        "La apelación corresponde a la negativa de pruebas en juicio.",
        "La queja presupone rechazo de apelación."
      ],
      "133–136"
    ],
    [
      "Durante la etapa de juicio, el juzgador niega parcialmente las pruebas solicitadas por la defensa. Las demás fueron decretadas y el disciplinado desea recurrir oportunamente la negativa parcial. La secretaría debe determinar recurso y efecto.",
      "¿En qué efecto procede el recurso contra esa negativa parcial en juicio?",
      [
        "Apelación en el efecto devolutivo por tratarse de negativa parcial.",
        "Apelación en el efecto suspensivo porque toda negativa impide continuar.",
        "Reposición en el efecto suspensivo por tratarse de una solicitud probatoria."
      ],
      [
        "El art. 134 prevé efecto devolutivo para negativa parcial.",
        "El suspensivo no aplica a toda negativa.",
        "La reposición por negativa probatoria corresponde a investigación."
      ],
      "133–134"
    ],
    [
      "El funcionario de juicio notifica válidamente un fallo de primera instancia en el procedimiento ordinario regulado por los artículos 225B y siguientes. El equipo utiliza un formato general de recursos que asigna cinco días para cualquier apelación.",
      "¿Qué plazo especial debe aplicar a la apelación escrita de ese fallo?",
      [
        "Diez días siguientes a la notificación para interponer y sustentar.",
        "Cinco días siguientes a la notificación según la regla general.",
        "Quince días siguientes a la notificación según el término de descargos."
      ],
      [
        "El art. 225G establece diez días para ese fallo.",
        "La regla general de cinco días cede ante la especial.",
        "Quince días corresponden a descargos en juicio ordinario."
      ],
      "131, 225B, 225G"
    ],
    [
      "Una defensa interpuso apelación contra una providencia que legalmente admite ese recurso. El funcionario lo rechazó por considerarlo improcedente. Dentro del término de ejecutoria de esa decisión, la defensa quiere que el superior examine el rechazo.",
      "¿Qué recurso está previsto específicamente contra el rechazo de la apelación?",
      [
        "Queja, interpuesta y sustentada dentro del término de ejecutoria del rechazo.",
        "Reposición, porque todo rechazo de apelación admite exclusivamente ese recurso.",
        "Una nueva apelación contra la decisión que rechazó la primera apelación."
      ],
      [
        "Los arts. 136–137 regulan queja contra rechazo de apelación.",
        "La reposición no es el recurso específico previsto.",
        "No se interpone una apelación sucesiva contra su propio rechazo."
      ],
      "136–137"
    ],
    [
      "Una sanción de primera instancia fue apelada únicamente por el disciplinado. No existen otros apelantes. Al estudiar los argumentos del recurso, el superior considera que la sanción inicial fue demasiado leve y plantea aumentarla en la decisión.",
      "¿Qué límite rige la resolución de esa apelación del disciplinado único apelante?",
      [
        "No agravar la sanción impuesta al resolver el recurso del apelante único.",
        "Agravar la sanción si explica detalladamente el criterio de graduación utilizado.",
        "Aumentar la sanción únicamente si la conducta fue calificada como gravísima."
      ],
      [
        "El art. 135 prohíbe agravar con investigado apelante único.",
        "La motivación no elimina la prohibición.",
        "La gravedad no constituye excepción general a esa regla."
      ],
      "135"
    ],
    [
      "Una providencia de sustanciación no tiene forma especial de notificación prevista en el Código y constituye una actuación de simple trámite. El despacho necesita informar su contenido a los sujetos procesales y dejar constancia de ello.",
      "¿Qué trámite corresponde a la comunicación y los recursos de esta providencia?",
      [
        "Comunicar por el medio más eficaz, dejar constancia y no conceder recursos.",
        "Notificar necesariamente en forma personal y conceder apelación ante el superior.",
        "Publicar exclusivamente por edicto y conceder reposición contra el simple trámite."
      ],
      [
        "El art. 129 ordena comunicación y el 130 excluye recursos en simple trámite.",
        "No existe mandato general de notificación personal para esa providencia.",
        "El edicto y la reposición no corresponden a este supuesto."
      ],
      "129–130"
    ]
  ],
  "pgn-m32": [
    [
      "Una constancia presenta un error de digitación en la fecha, pero los soportes permiten identificar inequívocamente el momento de la diligencia. El acto cumplió su finalidad y la defensa ejerció oportunamente todas sus facultades. El equipo propone anular por el error formal.",
      "¿Qué criterio debe orientar la respuesta a esa irregularidad formal?",
      [
        "Conservar el acto que cumplió su finalidad sin vulnerar la defensa.",
        "Declarar nulidad de toda la actuación por cualquier error de digitación.",
        "Invalidar todas las pruebas anteriores aunque el defecto sea subsanable."
      ],
      [
        "El art. 203 protege el acto que cumple finalidad sin afectar defensa.",
        "No toda irregularidad formal configura nulidad.",
        "La invalidez no se extiende automáticamente a pruebas válidas."
      ],
      "202–203"
    ],
    [
      "El funcionario que profirió el fallo disciplinario carecía de competencia para hacerlo. La parte interesada demuestra esta circunstancia y no existe otro mecanismo procesal para subsanar el defecto dentro de la actuación. La oficina propone conservar el fallo por celeridad.",
      "¿Qué causal específica debe analizarse ante ese defecto de competencia?",
      [
        "Falta de competencia del funcionario para proferir el fallo.",
        "Simple irregularidad de trámite convalidada por la existencia de motivación.",
        "Defecto de notificación que solo afecta el término de impugnación."
      ],
      [
        "El numeral primero del art. 202 contempla esa causal.",
        "La motivación y celeridad no sustituyen competencia legal.",
        "La irregularidad descrita es de competencia, no de notificación."
      ],
      "202–203"
    ],
    [
      "La defensa solicita nulidad por una diferencia de formato en una comunicación. Reconoce que recibió el contenido oportunamente y pudo actuar, pero no identifica ninguna garantía afectada ni una irregularidad sustancial. El despacho debe examinar su fundamentación.",
      "¿Qué carga exige el régimen a quien alega la nulidad?",
      [
        "Demostrar la afectación de garantías o de bases fundamentales del proceso.",
        "Indicar cualquier diferencia formal sin explicar su relevancia para la actuación.",
        "Aportar exclusivamente una copia de la comunicación que considera irregular."
      ],
      [
        "El art. 203 exige demostrar trascendencia del defecto sustancial.",
        "La diferencia formal por sí sola no satisface esa carga.",
        "Una copia no demuestra automáticamente afectación de garantías."
      ],
      "203, 206"
    ],
    [
      "En una investigación se advierte que una actuación sustancial impidió ejercer defensa y no existe otro medio procesal para subsanar el defecto. Ningún sujeto ha solicitado formalmente nulidad, pero el funcionario competente conoce las circunstancias y su trascendencia.",
      "¿Puede la autoridad declarar la nulidad sin solicitud de los sujetos?",
      [
        "Declararla de oficio al verificar la causal legal de nulidad.",
        "Esperar una solicitud formal porque la nulidad depende siempre de parte.",
        "Continuar hasta el fallo y reservar el examen exclusivamente para apelación."
      ],
      [
        "El art. 204 permite declaratoria oficiosa en cualquier estado.",
        "La solicitud de parte no es requisito indispensable.",
        "La autoridad no debe diferir una causal comprobada sin alternativa de subsanación."
      ],
      "202–204"
    ],
    [
      "Una irregularidad sustancial surgió en una providencia de la fase de investigación. Se declara su nulidad y existen decisiones posteriores que dependen de ella, además de actuaciones previas válidas. La autoridad debe precisar qué segmento del expediente se repone.",
      "¿Cuál es el alcance temporal que debe señalar la declaratoria de nulidad?",
      [
        "Reponer la actuación desde la causal y las actuaciones que dependan de ella.",
        "Anular necesariamente todo el expediente desde la recepción de la queja.",
        "Repetir solo la providencia sin examinar las actuaciones posteriores dependientes."
      ],
      [
        "El art. 205 delimita efectos desde el momento de la causal.",
        "La nulidad no borra por defecto lo anterior válido.",
        "Se reponen las actuaciones que dependen de la decisión nula."
      ],
      "205"
    ],
    [
      "Al declararse una nulidad por vulneración de defensa en una decisión posterior, el expediente conserva documentos y testimonios que fueron allegados y practicados legalmente antes del defecto. La oficina propone volver a recaudar absolutamente toda la prueba por precaución.",
      "¿Qué efecto produce la nulidad sobre esas pruebas legalmente incorporadas?",
      [
        "Conservan validez conforme a la regla del art. 205.",
        "Pierden validez por la sola declaratoria de nulidad de la actuación.",
        "Conservan validez únicamente si las partes ratifican todas las pruebas."
      ],
      [
        "La nulidad de la actuación no invalida las pruebas legalmente allegadas y practicadas.",
        "No se pierde validez por una nulidad posterior sin nexo con la prueba.",
        "El art. 205 no condiciona su conservación a ratificación general."
      ],
      "205"
    ],
    [
      "Antes de dar traslado para alegatos de conclusión, la defensa presenta solicitud de nulidad. Identifica la causal concreta y explica los hechos y fundamentos jurídicos que la sustentan. El funcionario considera que únicamente puede examinarla durante el fallo.",
      "¿Qué trámite corresponde a esa solicitud presentada en oportunidad legal?",
      [
        "Resolverla conforme al término especial de cinco días desde su recibo.",
        "Reservar su estudio para el fallo aunque cumpla requisitos y oportunidad.",
        "Rechazarla por presentarse después del cierre de la investigación disciplinaria."
      ],
      [
        "Los arts. 206–207 regulan oportunidad y término de resolución.",
        "La solicitud no debe diferirse automáticamente hasta el fallo.",
        "El cierre de investigación no es el límite legal para solicitar nulidad."
      ],
      "206–207"
    ],
    [
      "Durante una audiencia, la defensa formula solicitud de nulidad con fundamento de hecho y de derecho. La autoridad está en condiciones de resolver y debe adoptar la decisión conforme al procedimiento especial, sin diferir innecesariamente el debate.",
      "¿Cuándo se debe resolver una solicitud de nulidad presentada en audiencia?",
      [
        "En la misma audiencia conforme al régimen especial de resolución.",
        "Dentro de cinco días posteriores a la finalización de la audiencia.",
        "Al proferir el fallo definitivo como cuestión previa de motivación."
      ],
      [
        "El art. 207 dispone resolver en audiencia si allí se presenta.",
        "Los cinco días corresponden a la regla fuera de audiencia.",
        "No se difiere automáticamente hasta el fallo."
      ],
      "207"
    ],
    [
      "El funcionario competente dicta una providencia que niega una solicitud de nulidad planteada por la defensa. La decisión fue notificada válidamente y el disciplinado busca impugnarla. No se trata de una nulidad declarada de oficio.",
      "¿Qué recurso procede contra la decisión que resuelve la solicitud?",
      [
        "Reposición conforme a la regla específica de los artículos 133 y 207.",
        "Apelación por tratarse de una cuestión sustancial del debido proceso.",
        "Ningún recurso porque toda decisión relacionada con nulidad es irrecurrible."
      ],
      [
        "La decisión sobre solicitud de nulidad admite reposición.",
        "La apelación no es la vía prevista para esa decisión.",
        "La irrecurribilidad del art. 204 corresponde a declaratoria oficiosa."
      ],
      "133, 204, 207"
    ]
  ],
  "pgn-m33": [
    [
      "El despacho competente de la Procuraduría debe recaudar un testimonio en un municipio distinto al de su sede. Identifica que la personería municipal puede practicar la diligencia y cuenta con la información necesaria para delimitar el encargo.",
      "¿Qué mecanismo permite obtener esa prueba sin trasladar el conocimiento del asunto?",
      [
        "Comisionar a la personería para practicar la diligencia probatoria fuera de sede.",
        "Remitir la investigación completa a la personería para que decida sobre los cargos.",
        "Ordenar a la personería que asuma el poder preferente sobre el proceso."
      ],
      [
        "El art. 152 permite acudir a personerías para pruebas fuera de sede.",
        "La comisión no transfiere el conocimiento completo.",
        "No equivale al ejercicio de poder preferente."
      ],
      "152"
    ],
    [
      "Un servidor de la Procuraduría distinto del Procurador General pretende comisionar para una prueba que se practicará en su propia sede a un servidor de otra dependencia. No existe un supuesto especial que permita ampliar esa facultad.",
      "¿Qué límite debe observar ese servidor al decidir sobre la comisión?",
      [
        "No comisionar en la misma sede salvo que pertenezca a su dependencia.",
        "Comisionar a cualquier servidor de la Procuraduría por compartir la misma entidad.",
        "Comisionar a cualquier funcionario público por ser una prueba de carácter disciplinario."
      ],
      [
        "El art. 152 restringe esa facultad en la misma sede.",
        "Compartir entidad no sustituye pertenencia a dependencia en ese supuesto.",
        "La facultad amplia corresponde al Procurador General."
      ],
      "152"
    ],
    [
      "Se prepara un despacho comisorio para recibir varias declaraciones fuera de sede. El borrador dice solamente «practicar las pruebas necesarias» y no establece cuándo debe completarse el encargo. La oficina propone enviarlo así para dar flexibilidad.",
      "¿Qué contenido debe quedar definido en la decisión que ordena la comisión?",
      [
        "Las diligencias objeto del encargo y el término para practicarlas.",
        "La identidad del comisionado y el criterio definitivo de responsabilidad del disciplinado.",
        "La fecha estimada de regreso, dejando abierto el objeto de las diligencias."
      ],
      [
        "El art. 152 exige delimitar objeto y término.",
        "No corresponde anticipar responsabilidad como parte del encargo.",
        "Una fecha estimada no reemplaza la determinación de diligencias."
      ],
      "152"
    ],
    [
      "Durante una declaración comisionada aparece un documento directamente relacionado con los hechos que se están esclareciendo. El término sigue vigente, el comisionado puede recaudarlo legalmente y el despacho comisorio no contiene prohibición expresa de practicar pruebas derivadas.",
      "¿Qué actuación puede adelantar el comisionado en relación con ese documento?",
      [
        "Practicar la prueba derivada directamente del objeto de la comisión.",
        "Solicitar siempre una nueva comisión aunque la prueba derive directamente del encargo.",
        "Trasladar el proceso principal a su despacho para practicar toda prueba relacionada."
      ],
      [
        "El art. 152 autoriza pruebas que surjan directamente, salvo prohibición.",
        "No siempre se necesita otra comisión dentro de ese supuesto.",
        "Practicar prueba derivada no transfiere competencia sobre el proceso."
      ],
      "152"
    ],
    [
      "En una diligencia comisionada surge una prueba que deriva directamente de la declaración ordenada. Sin embargo, el despacho comisorio prohíbe expresamente practicar pruebas adicionales. El servidor comisionado reconoce la relevancia del nuevo soporte.",
      "¿Cómo debe proceder ante esa prohibición expresa del comitente?",
      [
        "Informar al comitente y solicitar la habilitación correspondiente antes de recaudarla.",
        "Practicarla directamente porque su conexidad deja sin efecto cualquier restricción del encargo.",
        "Adoptar una decisión de fondo sobre el documento para no ampliar la comisión."
      ],
      [
        "La autorización de prueba derivada no opera si fue prohibida expresamente.",
        "La conexidad no elimina esa limitación legal.",
        "El comisionado no adquiere competencia para decidir el fondo."
      ],
      "152"
    ],
    [
      "Una diligencia comisionada requiere más tiempo y el término del encargo ya venció. El comisionado identifica una prueba directamente derivada de la orden y solicita continuar, pero aún no ha recibido autorización ni se ha dejado constancia de ampliación.",
      "¿Qué requisito debe cumplirse para ampliar el término del despacho comisorio?",
      [
        "Solicitar ampliación, obtener su concesión y comunicación eficaz con constancia.",
        "Prorrogar unilateralmente el término y notificar al comitente al devolver el expediente.",
        "Mantener el encargo abierto por el solo hecho de existir una prueba derivada."
      ],
      [
        "El art. 152 establece solicitud, concesión, comunicación y constancia.",
        "El comisionado no concede su propia ampliación.",
        "La prueba derivada no prolonga automáticamente el término."
      ],
      "152"
    ],
    [
      "La dependencia que practica una prueba comisionada pide copias de las actuaciones necesarias para contextualizar la diligencia. El expediente original permanece en el despacho competente. La oficina discute si puede remitir las copias de manera electrónica.",
      "¿Qué forma de remisión permite el régimen de la comisión probatoria?",
      [
        "Remitir las copias necesarias para practicar las pruebas, incluso por vía electrónica.",
        "Remitir necesariamente todo el expediente original mediante traslado físico a la dependencia.",
        "Enviar solamente el despacho comisorio aunque falten antecedentes indispensables para practicar la prueba."
      ],
      [
        "El art. 152 permite remitir copias necesarias electrónicamente.",
        "No exige trasladar el expediente original completo.",
        "Deben remitirse los antecedentes necesarios para el encargo."
      ],
      "152"
    ],
    [
      "Durante una comisión para recibir testimonio, la defensa presenta una solicitud de terminación y archivo de la investigación. La decisión que comisiona solo autoriza practicar esa declaración y ninguna disposición le atribuye al comisionado decidir el fondo.",
      "¿Cómo se debe gestionar esa solicitud dentro del alcance del encargo?",
      [
        "Recibirla, documentarla y remitirla al funcionario competente para decidir su contenido.",
        "Resolver el archivo por tener temporalmente las copias necesarias de la actuación.",
        "Rechazarla definitivamente porque toda petición al comisionado carece de efecto."
      ],
      [
        "La comisión delimita la práctica de la prueba, no el conocimiento del fondo.",
        "Tener copias no atribuye competencia para archivar.",
        "La petición debe llegar al funcionario competente."
      ],
      "90, 152"
    ],
    [
      "Para notificar un pliego de cargos fuera de la sede del despacho competente se comisiona a un funcionario autorizado conforme al artículo 124. El comisionado no logra efectuar la notificación personal y debe aplicar la regla especial de esa comisión.",
      "¿Qué actuación prevé el artículo 124 ante esa imposibilidad de notificar personalmente?",
      [
        "Fijar edicto durante cinco días y devolver la actuación con constancias.",
        "Fijar edicto durante tres días como en la regla general de apertura.",
        "Publicar el pliego por estado sin dejar constancia de devolución al comitente."
      ],
      [
        "El art. 124 fija cinco días de edicto para este supuesto especial.",
        "La regla general de edicto no reemplaza el régimen específico.",
        "Deben devolverse las actuaciones con las constancias correspondientes."
      ],
      "124, 127"
    ]
  ],
  "pgn-m34": [
    [
      "En una dependencia, el funcionario que condujo la investigación y formuló cargos recibe también la asignación del juzgamiento del mismo expediente. Se argumenta que un equipo asesor diferente revisará su proyecto de fallo, aunque él conservará la decisión final.",
      "¿Qué ajuste exige la separación funcional del procedimiento disciplinario?",
      [
        "Asignar juzgamiento a un funcionario distinto, competente, independiente e imparcial.",
        "Mantener al instructor como juzgador con apoyo de un equipo asesor diferente.",
        "Permitir al instructor decidir el fallo si otro servidor revisa la redacción."
      ],
      [
        "El art. 12 exige autoridades diferentes e independientes.",
        "Cambiar asesores no cambia quién decide.",
        "Revisar un borrador no satisface la separación funcional."
      ],
      "12"
    ],
    [
      "Después de formular cargos y surtir las notificaciones, el instructor prepara el envío del expediente al funcionario de juzgamiento. Decide excluir una prueba de descargo que considera poco convincente para facilitar que se comprenda mejor su hipótesis acusatoria.",
      "¿Qué actuación respeta la imparcialidad y la independencia del juzgamiento?",
      [
        "Remitir el expediente íntegro, con pruebas de cargo y descargo disponibles.",
        "Remitir únicamente los elementos que sustentan la formulación de los cargos.",
        "Separar las pruebas favorables y remitirlas solo si el juzgador las solicita."
      ],
      [
        "La investigación integral y valoración independiente requieren disponibilidad del material.",
        "Seleccionar únicamente prueba incriminatoria desconoce imparcialidad.",
        "La evidencia exculpatoria no se condiciona a una petición posterior."
      ],
      "12–13, 148, 225"
    ],
    [
      "Cumplidas las notificaciones del pliego, el instructor prepara la remisión y agrega una decisión que fija el procedimiento de juicio ordinario. El funcionario de juzgamiento aún no ha recibido el expediente ni ha evaluado los criterios legales para escoger modalidad.",
      "¿A qué funcionario corresponde fijar el procedimiento de juzgamiento aplicable?",
      [
        "Al funcionario de juzgamiento, mediante auto motivado conforme al art. 225A.",
        "Al instructor, porque fue quien calificó la falta y formuló el pliego.",
        "Al superior jerárquico, mediante autorización previa a cualquier modalidad de juicio."
      ],
      [
        "El art. 225A atribuye esa decisión al juzgador.",
        "Calificar en instrucción no atribuye selección de modalidad de juicio.",
        "La norma no exige autorización general de un superior."
      ],
      "225–225A"
    ],
    [
      "En el juicio ordinario, vencido el término de descargos, el juzgador advierte un error de calificación en el pliego. No ha surgido prueba sobreviniente que genere el error. El equipo debe determinar quién realiza la nueva calificación.",
      "¿Qué actuación corresponde ante el error de calificación en ese momento?",
      [
        "Devolver motivadamente al instructor para nueva calificación en máximo quince días.",
        "Variar inmediatamente los cargos por decisión directa del funcionario de juzgamiento.",
        "Ordenar la reapertura integral de la investigación y reiniciar todos sus términos."
      ],
      [
        "El art. 225D numeral 1 regula devolución al instructor por error de calificación.",
        "La variación directa corresponde a otro supuesto de prueba sobreviniente.",
        "La devolución no equivale a reiniciar toda la investigación."
      ],
      "225D"
    ],
    [
      "En juicio ordinario, una vez agotada la etapa probatoria, una prueba sobreviniente hace necesaria la variación del pliego. No se trata de un error de calificación advertido al vencimiento de los descargos. Debe preservarse la defensa frente a la nueva imputación.",
      "¿Quién realiza la variación en ese supuesto de prueba sobreviniente?",
      [
        "El juzgador, con la notificación y oportunidad de defensa legalmente previstas.",
        "El instructor, mediante devolución obligatoria en todos los casos de variación.",
        "El secretario, mediante corrección del pliego y actualización de los registros."
      ],
      [
        "El numeral 4 del art. 225D atribuye esta variación al juzgador.",
        "La devolución al instructor regula el error de calificación.",
        "La secretaría no puede variar la imputación."
      ],
      "225D"
    ],
    [
      "El juzgador devolvió el pliego por error de calificación conforme al artículo 225D. El instructor examinó la observación y decidió motivadamente no variar los cargos, por lo que devuelve el expediente al despacho de juzgamiento.",
      "¿Qué posibilidad contempla la norma para el juzgador ante esa devolución?",
      [
        "Examinar la nulidad del pliego conforme a los presupuestos legales aplicables.",
        "Imponer inmediatamente la calificación alternativa sin otra actuación procesal.",
        "Archivar necesariamente todo el expediente por existir discrepancia entre los funcionarios."
      ],
      [
        "El numeral 3 permite al juzgador decretar nulidad conforme al Código.",
        "La discrepancia no autoriza alterar sin trámite la acusación.",
        "No existe archivo automático por esa discrepancia."
      ],
      "202–203, 225D"
    ],
    [
      "Durante la etapa de investigación el disciplinable confiesa con defensor y se verifican los requisitos legales de voluntariedad e información. Todavía no está ejecutoriado el auto de cierre. El instructor propone imponer directamente una sanción reducida por confesión.",
      "¿Qué trámite preserva la separación de funciones en este supuesto?",
      [
        "Elaborar el acta equivalente al pliego y remitirla al juzgador para fallo.",
        "Imponer sanción reducida en instrucción porque la confesión elimina el juzgamiento.",
        "Remitir al juzgador sin acta ni evaluación por tratarse de confesión."
      ],
      [
        "El art. 162 exige acta y remisión para que el juzgador falle.",
        "La confesión no transfiere la función sancionatoria al instructor.",
        "La aceptación requiere evaluación y acta en los términos legales."
      ],
      "12, 161–162"
    ],
    [
      "Un instructor organiza un informe de remisión para facilitar la consulta del expediente. Incluye índices, datos de identificación y constancias, pero propone agregar una orden vinculante para que el juzgador imponga exactamente la sanción que considera adecuada.",
      "¿Qué límite debe respetar el informe de remisión elaborado en instrucción?",
      [
        "Documentar actuaciones y soportes sin sustituir la valoración independiente del juzgador.",
        "Fijar una sanción obligatoria y permitir al juzgador revisar únicamente su cuantía.",
        "Omitir toda información relacionada con los cargos para asegurar independencia del juzgador."
      ],
      [
        "La organización del expediente no autoriza anticipar el fallo vinculante.",
        "El juzgador debe valorar y decidir de forma independiente.",
        "La independencia no exige ocultar información necesaria."
      ],
      "12, 223, 225"
    ],
    [
      "El instructor estima que las pruebas reunidas comprometen la responsabilidad y formula cargos. El juzgador, al estudiar la defensa y practicar las pruebas procedentes, advierte que persiste duda razonable sobre la conducta atribuida. No se ha proferido fallo ejecutoriado.",
      "¿Qué criterio debe guiar al juzgador frente a esa diferencia con la acusación?",
      [
        "Valorar independientemente y resolver la duda razonable a favor del disciplinado.",
        "Sostener los cargos porque la evaluación del instructor determina la decisión de fondo.",
        "Ordenar al instructor que dicte el fallo para mantener coherencia del proceso."
      ],
      [
        "La presunción de inocencia y la valoración independiente subsisten tras los cargos.",
        "La acusación no predetermina responsabilidad.",
        "La separación impide devolver al instructor la función de fallar."
      ],
      "12, 14, 160, 222"
    ]
  ],
  "pgn-m20": [
    [
      "Una entidad abrió investigación por una conducta realizada cuando estaba vigente una norma disciplinaria que la tipificaba. Antes del fallo entra en vigor una disposición sustancial que elimina la infracción, sin que exista un régimen especial que impida examinar la favorabilidad.",
      "¿Qué efecto debe analizar el funcionario ante esa sucesión normativa?",
      [
        "Aplicar preferentemente la disposición posterior favorable y motivar su incidencia.",
        "Aplicar exclusivamente la norma vigente al momento de la conducta investigada.",
        "Aplicar la disposición posterior solo cuando se haya ejecutado la sanción."
      ],
      [
        "La favorabilidad permite aplicar la norma posterior más benigna.",
        "La legalidad temporal no excluye la favorabilidad.",
        "No se exige que la sanción haya sido ejecutada."
      ],
      "4, 8"
    ],
    [
      "Un equipo propone sancionar al responsable de una dependencia porque una pérdida patrimonial ocurrió durante su gestión. Los soportes prueban el resultado, pero no acreditan una infracción funcional personalmente imputable ni su modalidad subjetiva.",
      "¿Qué principio impide fundamentar la sanción únicamente en el resultado?",
      [
        "La culpabilidad y la proscripción de responsabilidad objetiva.",
        "La proporcionalidad como criterio exclusivo de graduación de sanciones.",
        "La economía procesal como regla de distribución de cargas probatorias."
      ],
      [
        "La sanción exige dolo o culpa sancionable.",
        "Graduar no resuelve si existe responsabilidad.",
        "Economía no autoriza presumir culpabilidad."
      ],
      "9–10"
    ],
    [
      "Una funcionaria es investigada por hechos que también estudia una autoridad penal. El equipo disciplinario propone archivar de inmediato porque la Fiscalía inició una actuación por la misma conducta, aunque todavía no existe ninguna decisión de fondo.",
      "¿Qué relación existe entre ambas acciones frente a ese único dato?",
      [
        "La acción disciplinaria es independiente y debe examinar sus propios presupuestos.",
        "La apertura penal extingue la acción disciplinaria por identidad de hechos.",
        "La actuación disciplinaria queda suspendida hasta la decisión penal definitiva."
      ],
      [
        "Cada acción protege bienes y aplica reglas propias.",
        "La apertura penal no extingue la acción disciplinaria.",
        "No existe suspensión automática por esa sola circunstancia."
      ],
      "2"
    ],
    [
      "El despacho cuenta con indicios de cargo y una prueba de descargo que no logra desvirtuar. Terminada la etapa de juicio, persiste una duda razonable insuperable sobre la responsabilidad; no hay otra diligencia pertinente que permita resolverla.",
      "¿Qué consecuencia tiene esa duda en la decisión de fondo?",
      [
        "Resolver la duda razonable en favor de la persona disciplinada.",
        "Imponer la sanción mínima debido a la incertidumbre probatoria.",
        "Exigir que la defensa demuestre su inocencia para evitar el fallo sancionatorio."
      ],
      [
        "La presunción de inocencia impone resolver la duda razonable favorablemente.",
        "La graduación no remedia insuficiencia probatoria.",
        "La carga probatoria corresponde al Estado."
      ],
      "14, 147, 160"
    ],
    [
      "Una oficina propone aumentar la sanción por encima del máximo legal porque el hecho generó amplia cobertura mediática y numerosas críticas ciudadanas. La falta y su modalidad subjetiva ya fueron determinadas conforme a la ley aplicable.",
      "¿Qué límite debe respetar el funcionario al individualizar la sanción?",
      [
        "Mantener la sanción dentro del marco legal con criterios de proporcionalidad.",
        "Exceder el máximo cuando la exposición pública haya afectado la entidad.",
        "Aplicar una sanción diferente a la prevista para asegurar prevención general."
      ],
      [
        "La proporcionalidad opera dentro del marco normativo aplicable.",
        "La cobertura mediática no amplía el máximo legal.",
        "La finalidad preventiva no permite inventar sanciones."
      ],
      "4–6, 48"
    ],
    [
      "El investigado recibe un fallo sancionatorio de primera instancia y presenta oportunamente el recurso procedente. La oficina de talento humano registra que ya existe responsabilidad ejecutoriada, aunque la segunda instancia está pendiente y el recurso fue concedido.",
      "¿En qué momento cesa la presunción de inocencia del disciplinado?",
      [
        "Cuando queda ejecutoriada una decisión que declara su responsabilidad disciplinaria.",
        "Cuando se notifica cualquier fallo sancionatorio de primera instancia.",
        "Cuando el instructor formula cargos y remite el expediente a juicio."
      ],
      [
        "La presunción se mantiene hasta fallo ejecutoriado.",
        "La notificación no equivale necesariamente a ejecutoria.",
        "El pliego no declara responsabilidad definitiva."
      ],
      "14"
    ],
    [
      "Una autoridad pretende utilizar una declaración obtenida mediante vulneración acreditada de garantías fundamentales porque coincide con otras fuentes del expediente. La defensa identifica el defecto durante el juicio y pide examinar su efecto probatorio.",
      "¿Qué tratamiento corresponde a esa declaración obtenida de manera ilícita?",
      [
        "Excluir la prueba vulneratoria y valorar por separado los medios restantes.",
        "Mantenerla por su coincidencia con las demás fuentes incorporadas legalmente.",
        "Reducir su peso probatorio y conservarla como indicio secundario del hecho."
      ],
      [
        "La cláusula de exclusión impide emplear la prueba ilícita.",
        "La corroboración no sana la vulneración fundamental.",
        "Menor peso no reemplaza la exclusión legal."
      ],
      "21, 158"
    ],
    [
      "Dos servidores son investigados por hechos similares. En uno de los expedientes se propone limitar la contradicción probatoria por la afiliación política del investigado, pese a que ambos casos se encuentran en condiciones procesales equivalentes.",
      "¿Qué regla debe orientar el tratamiento de ambos expedientes?",
      [
        "Garantizar igualdad procesal sin restringir derechos por afiliación política.",
        "Establecer garantías distintas según la posición política del servidor investigado.",
        "Compensar la diferencia de trato mediante una sanción de menor gravedad."
      ],
      [
        "La igualdad proscribe discriminación durante el proceso.",
        "La afiliación no justifica trato procesal desigual.",
        "Una sanción menor no repara la privación de defensa."
      ],
      "7"
    ],
    [
      "Un despacho conoce una actuación contra un servidor que ya fue juzgado mediante fallo disciplinario ejecutoriado por el mismo hecho y fundamento. No se invoca ninguna excepción legal ni mecanismo extraordinario que permita revisar esa decisión.",
      "¿Qué principio impide iniciar nuevamente el juicio disciplinario descrito?",
      [
        "La prohibición de doble juzgamiento por el mismo hecho disciplinario.",
        "La favorabilidad, porque toda decisión anterior resulta necesariamente más benigna.",
        "La prescripción, aun cuando no haya transcurrido el término legal."
      ],
      [
        "La cosa juzgada protege frente a un nuevo juzgamiento idéntico.",
        "No depende de comparar normas sucesivas.",
        "No exige que haya prescrito la acción."
      ],
      "16"
    ]
  ],
  "pgn-m21": [
    [
      "Una entidad detecta una posible falta cometida por un funcionario mientras ejercía su cargo. Al momento de recibir la noticia el servidor ya se retiró de la administración; la acción sigue vigente y los documentos permiten identificarlo plenamente.",
      "¿Qué efecto tiene el retiro sobre su condición de destinatario disciplinario?",
      [
        "Puede ser investigado por la conducta realizada mientras ejercía el cargo.",
        "Solo puede ser investigado si vuelve a vincularse a la entidad.",
        "El retiro extingue la acción por desaparecer la relación de servicio."
      ],
      [
        "El art. 25 comprende servidores retirados.",
        "Una nueva vinculación no es presupuesto de la acción.",
        "El retiro no es causal legal de extinción."
      ],
      "25, 32"
    ],
    [
      "Una persona natural presta mantenimiento de impresoras mediante contrato estatal. No ejerce potestades públicas, no administra recursos públicos, no supervisa contratos ni actúa como auxiliar de justicia. Se reporta un posible incumplimiento contractual.",
      "¿Qué conclusión procede respecto de su calidad disciplinable bajo el régimen de particulares?",
      [
        "No se configura por la sola celebración de un contrato estatal.",
        "Se configura porque cualquier contratista recibe pagos de origen público.",
        "Se configura porque todo mantenimiento equivale a ejercer función pública."
      ],
      [
        "El art. 70 exige alguno de sus supuestos específicos.",
        "Recibir un pago no equivale a administrar recursos públicos.",
        "El soporte técnico no implica prerrogativas exclusivas del Estado."
      ],
      "70"
    ],
    [
      "Un particular contratado como interventor certifica actividades ejecutadas en una obra estatal. Se denuncia una posible infracción propia de esa labor y el informe acredita su identidad y las obligaciones asumidas mediante el contrato de interventoría.",
      "¿Qué presupuesto subjetivo se cumple para estudiar el caso disciplinariamente?",
      [
        "La condición de particular que realiza labores de interventoría contractual estatal.",
        "La calidad de servidor público de carrera por supervisar recursos estatales.",
        "La condición de auxiliar de justicia por emitir certificaciones técnicas contractuales."
      ],
      [
        "La interventoría está prevista expresamente en el art. 70.",
        "No se transforma por ello en empleado de carrera.",
        "Certificar obras no implica auxiliar a un juez."
      ],
      "69–70"
    ],
    [
      "Una empresa privada presta un servicio público domiciliario mediante actividad ordinaria de operación. La denuncia cuestiona un incumplimiento operativo, pero no acredita que la persona investigada haya ejercido una función pública ni otro supuesto del artículo 70.",
      "¿Qué criterio distingue servicio público de función pública disciplinable en este supuesto?",
      [
        "Verificar si ejerció prerrogativas estatales o concurre otro supuesto legal.",
        "Considerar disciplinable a todo operador por prestar un servicio público.",
        "Descartar cualquier responsabilidad de particulares sin revisar sus funciones efectivas."
      ],
      [
        "El servicio público no equivale necesariamente a función pública.",
        "El art. 70 distingue ambas actividades.",
        "Los particulares sí pueden ser disciplinables bajo condiciones legales."
      ],
      "70"
    ],
    [
      "Una fundación privada recibe recursos públicos destinados a un programa específico y su representante decide su uso. Una revisión identifica soportes de disposición de esos fondos que podrían acreditar una conducta incluida en el régimen disciplinario especial.",
      "¿Qué circunstancia sustenta examinar su condición de particular disciplinable?",
      [
        "La administración o disposición de recursos públicos destinados a fines específicos.",
        "La existencia de cualquier relación comercial con una entidad del Estado.",
        "La sola inscripción de la fundación como persona jurídica sin ánimo de lucro."
      ],
      [
        "Administrar recursos públicos constituye un supuesto del art. 70.",
        "Una relación comercial no demuestra administración de recursos.",
        "La naturaleza jurídica de la entidad no basta por sí sola."
      ],
      "70"
    ],
    [
      "Durante una investigación por falta atribuida a un particular disciplinable y a un servidor público se acredita que ambos participaron en hechos conexos. La oficina de control interno pretende asumir todo el expediente porque el servidor pertenece a su entidad.",
      "¿Qué autoridad debe conocer los hechos conexos de ambos disciplinables?",
      [
        "La Procuraduría General de la Nación, conforme a su competencia exclusiva.",
        "La oficina de control disciplinario interno por la pertenencia del servidor.",
        "La personería municipal por la naturaleza territorial de los hechos investigados."
      ],
      [
        "La conexidad entre particular y servidor activa competencia exclusiva de PGN.",
        "El vínculo del servidor no desplaza la regla especial.",
        "La territorialidad tampoco sustituye la competencia exclusiva."
      ],
      "92"
    ],
    [
      "Un particular ejerce una función pública transitoria y se acredita esa condición. El proyecto de cargos pretende imputarle una falta leve prevista para servidores públicos, sin identificar ninguna conducta del catálogo especial del régimen de particulares.",
      "¿Qué límite material debe observarse antes de formular esa imputación?",
      [
        "Verificar si la conducta corresponde a las faltas gravísimas del catálogo especial.",
        "Aplicar directamente las faltas leves de servidores por ejercer una función pública.",
        "Escoger cualquier falta general que tenga una descripción semejante a los hechos."
      ],
      [
        "Los particulares de ese título responden por su catálogo especial.",
        "Ejercer función pública no elimina el régimen diferenciado.",
        "La semejanza no sustituye la tipicidad legal."
      ],
      "69, 72"
    ],
    [
      "Un servidor público es enviado temporalmente al exterior en cumplimiento de sus funciones. Durante la comisión se reporta una conducta que podría vulnerar sus deberes funcionales. El equipo descarta estudiar los hechos por haber sucedido fuera de Colombia.",
      "¿Qué regla determina el ámbito territorial de la ley disciplinaria?",
      [
        "Se aplica a sus destinatarios incluso por faltas cometidas fuera del país.",
        "Solo se aplica a hechos realizados en territorio colombiano durante el servicio.",
        "Se aplica en el exterior únicamente cuando existe una condena penal previa."
      ],
      [
        "El art. 24 prevé ámbito dentro y fuera del territorio nacional.",
        "La ubicación geográfica no excluye la acción.",
        "No se exige condena penal previa."
      ],
      "24"
    ],
    [
      "Una queja identificada motivó una actuación por una posible falta disciplinaria. Posteriormente el quejoso presenta desistimiento escrito y solicita que se cierre todo el expediente, aunque permanecen elementos de relevancia disciplinaria por esclarecer.",
      "¿Qué efecto jurídico tiene el desistimiento sobre la acción disciplinaria?",
      [
        "No extingue la acción; debe continuarse o decidirse según sus presupuestos.",
        "Extingue la acción cuando el quejoso es la única fuente inicial.",
        "Obliga a archivar salvo que exista una denuncia penal por los hechos."
      ],
      [
        "El parágrafo del art. 32 excluye ese efecto extintivo.",
        "El origen de la noticia no altera la regla.",
        "La acción disciplinaria no depende de denuncia penal."
      ],
      "32, 85–86"
    ]
  ],
  "pgn-m22": [
    [
      "El informe demuestra que un servidor omitió impedir una alteración de datos. Su cargo incluía el deber jurídico de evitarla y disponía de medios efectivos para hacerlo; el expediente aún debe establecer los demás elementos de la falta y la responsabilidad.",
      "¿Qué relación normativa existe entre esa omisión y el resultado producido?",
      [
        "No impedir el resultado pudiendo hacerlo equivale jurídicamente a producirlo.",
        "Toda omisión equivale a producir el resultado aunque falte deber jurídico.",
        "La omisión solo puede sancionarse cuando existe daño patrimonial cuantificado."
      ],
      [
        "La equivalencia exige deber jurídico y posibilidad de impedir el resultado.",
        "No toda omisión cumple esos presupuestos.",
        "El daño patrimonial no es requisito universal."
      ],
      "27"
    ],
    [
      "Un funcionario conoce los hechos que constituyen la falta, entiende que su conducta es ilícita y decide ejecutarla deliberadamente. El equipo debe calificar la modalidad subjetiva sin confundirla con los criterios de gravedad de la infracción.",
      "¿Qué modalidad subjetiva describen los elementos expresamente acreditados en el caso?",
      [
        "Dolo, por conocimiento de la falta y voluntad de realizarla.",
        "Culpa gravísima, por cualquier infracción manifiesta de una regla obligatoria.",
        "Culpa grave, por ausencia del cuidado ordinario en las actuaciones."
      ],
      [
        "El art. 28 exige conocimiento y voluntad.",
        "La culpa no describe la voluntad ilícita acreditada.",
        "La negligencia no equivale a querer el hecho."
      ],
      "28–29"
    ],
    [
      "Un servidor prevé que omitir una verificación obligatoria puede generar una inconsistencia, pero confía en que logrará evitarla mediante otro control. Finalmente incumple el deber de cuidado y se produce el hecho, sin que se acredite voluntad de realizar la falta.",
      "¿Qué modalidad debe examinarse conforme a esa previsión del resultado?",
      [
        "Culpa, porque previó el hecho y confió en poder evitarlo.",
        "Dolo, porque toda previsión del resultado equivale a voluntad de realizarlo.",
        "Responsabilidad objetiva, porque el resultado se produjo durante el ejercicio funcional."
      ],
      [
        "La culpa comprende previsión con confianza de evitación.",
        "Prever no equivale necesariamente a querer.",
        "El resultado no basta para atribuir responsabilidad."
      ],
      "10, 28–29"
    ],
    [
      "El expediente acredita un incumplimiento funcional, pero la modalidad subjetiva que logra demostrarse corresponde únicamente a culpa leve. No existe prueba que permita calificarla como culpa grave, gravísima o dolo bajo los presupuestos del Código.",
      "¿Qué efecto tiene esa modalidad subjetiva en materia disciplinaria?",
      [
        "La culpa leve no resulta sancionable conforme al Código disciplinario.",
        "La culpa leve permite imponer la amonestación escrita prevista para faltas leves.",
        "La culpa leve se convierte automáticamente en culpa grave si existe afectación funcional."
      ],
      [
        "Solo la culpa grave y gravísima son sancionables.",
        "Falta leve y culpa leve son categorías diferentes.",
        "La afectación no cambia automáticamente la modalidad de culpa."
      ],
      "29, 48"
    ],
    [
      "Una autoridad comprueba que un servidor incumplió una regla por una orden de su superior que era manifiestamente ilegítima. La defensa invoca obediencia jerárquica como causal automática de exclusión, aunque no acredita otros supuestos de exclusión.",
      "¿Qué presupuesto falta para aplicar la causal de cumplimiento de una orden?",
      [
        "Que la orden sea legítima, de autoridad competente y legalmente formalizada.",
        "Que la orden provenga de un superior, con independencia de su legitimidad.",
        "Que el servidor haya documentado posteriormente que actuó por instrucciones recibidas."
      ],
      [
        "La causal exige legitimidad, competencia y formalidades legales.",
        "La jerarquía sola no exonera.",
        "Documentar una orden ilegítima no la transforma en legítima."
      ],
      "31.4"
    ],
    [
      "El disciplinado incumplió una obligación porque se produjo un evento externo, irresistible e imprevisible que hizo imposible cumplirla y no existía una alternativa razonable. El hecho y la imposibilidad están plenamente acreditados en el expediente.",
      "¿Qué causal de exclusión corresponde examinar en este supuesto acreditado?",
      [
        "La fuerza mayor como circunstancia excluyente de responsabilidad disciplinaria.",
        "La favorabilidad como criterio para reducir automáticamente la sanción disciplinaria.",
        "La culpa grave por no haber previsto cualquier contingencia operativa posible."
      ],
      [
        "La fuerza mayor excluye responsabilidad en los términos legales.",
        "No se trata de sucesión normativa.",
        "El supuesto acreditado niega una alternativa razonable de cumplimiento."
      ],
      "31.1"
    ],
    [
      "Un servidor adopta una actuación bajo un error de hecho vencible. La autoridad comprueba que la conducta está prevista como falta, pero el análisis normativo demuestra que dicha falta no admite la modalidad culposa; no existe prueba de dolo.",
      "¿Qué límite tiene la sanción por error de hecho vencible?",
      [
        "Solo puede sancionarse a título de culpa si la falta admite esa modalidad.",
        "Se sanciona necesariamente como dolo porque el error era superable.",
        "Se sanciona siempre a título de culpa, aunque la falta no la admita."
      ],
      [
        "El art. 31 condiciona sanción culposa a la modalidad admitida.",
        "Error vencible no acredita voluntad dolosa.",
        "No se puede crear una modalidad no prevista."
      ],
      "31.8"
    ],
    [
      "Un servidor incumple una obligación de menor relevancia para atender estrictamente un deber legal de mayor importancia que no podía satisfacer simultáneamente. El expediente acredita el conflicto concreto y la necesidad de sacrificar el deber menor.",
      "¿Qué causal de exclusión debe valorar la autoridad disciplinaria?",
      [
        "El cumplimiento estricto de un deber constitucional o legal de mayor importancia.",
        "La obediencia jerárquica, aunque no exista ninguna orden de un superior.",
        "El error invencible de derecho, aunque el servidor conozca ambas obligaciones."
      ],
      [
        "La prevalencia del deber superior está prevista como causal autónoma.",
        "No se describe cumplimiento de orden jerárquica.",
        "No se acredita error sobre la regla aplicable."
      ],
      "31.3"
    ],
    [
      "Una falta se atribuye a un servidor cuya conducta presenta una desviación formal. El expediente acredita que no se afectó sustancialmente el deber funcional; solo se contrarió en menor grado el orden administrativo interno de la dependencia.",
      "¿Qué respuesta distingue el caso de una falta disciplinaria sancionable?",
      [
        "Adoptar medidas correctivas internas pertinentes sin generar antecedente disciplinario.",
        "Imponer amonestación escrita porque toda desviación formal es una falta leve.",
        "Formular cargos y graduar la sanción únicamente por el bajo impacto."
      ],
      [
        "El art. 68 contempla preservación del orden interno sin afectación sustancial.",
        "No toda desviación configura falta disciplinaria.",
        "Graduar no suple la ausencia de ilicitud sustancial."
      ],
      "9, 68"
    ]
  ],
  "pgn-m23": [
    [
      "Una servidora debe evaluar una solicitud contractual que beneficiaría directamente a su hermano. Conoce la relación familiar antes de participar en la decisión y considera que su criterio técnico es suficiente para garantizar objetividad.",
      "¿Qué actuación exige el conflicto de intereses acreditado en el supuesto?",
      [
        "Declararse impedida y tramitar la decisión ante la autoridad competente.",
        "Emitir evaluación técnica y abstenerse únicamente de firmar el acto definitivo.",
        "Revelar la relación al terminar el trámite para garantizar transparencia posterior."
      ],
      [
        "El interés directo de un hermano está dentro del grado legal.",
        "La gestión también está comprendida en el conflicto.",
        "La revelación tardía no reemplaza el impedimento."
      ],
      "44"
    ],
    [
      "Un funcionario que conoce una actuación disciplinaria advierte que tiene amistad íntima con el disciplinado reconocido como sujeto procesal. La situación se encuentra acreditada; el despacho propone conservar al funcionario para evitar cambiar el cronograma.",
      "¿Cómo debe gestionar el funcionario la causal que acaba de advertir?",
      [
        "Declararse inmediatamente impedido mediante escrito motivado con la causal y soportes posibles.",
        "Solicitar al defensor que se retire para mantener al funcionario en el asunto.",
        "Continuar hasta el cierre y presentar el impedimento al remitir a juzgamiento."
      ],
      [
        "La amistad íntima con sujeto procesal es causal; debe declararse de inmediato.",
        "No corresponde desplazar al defensor para evitar el trámite.",
        "No puede diferirse la declaración hasta el cierre."
      ],
      "104–105"
    ],
    [
      "Un disciplinado presenta recusación escrita contra quien instruye su expediente y aporta prueba de una causal legal. El servidor recusado estima que la causal no se configura y necesita responder conforme al procedimiento especial.",
      "¿Dentro de qué término debe manifestar si acepta o no la causal?",
      [
        "Dos días siguientes a la formulación de la recusación.",
        "Tres días siguientes a la formulación de la recusación.",
        "Cinco días siguientes al recibo de la recusación."
      ],
      [
        "El recusado dispone de dos días para manifestarse.",
        "Tres días corresponden a la decisión del superior.",
        "Cinco días no es el plazo general aplicable al recusado."
      ],
      "106–107"
    ],
    [
      "Un instructor se declara impedido y remite de inmediato la actuación al superior. Este recibe el expediente con la explicación y los soportes correspondientes; no se trata del régimen especial del Procurador General.",
      "¿Qué término tiene el superior para decidir de plano ese impedimento?",
      [
        "Tres días siguientes al recibo de la actuación disciplinaria.",
        "Dos días siguientes a la recepción de la actuación disciplinaria.",
        "Cinco días hábiles desde la formulación del impedimento."
      ],
      [
        "El art. 107 fija tres días desde el recibo.",
        "Dos días regulan la manifestación del recusado.",
        "No se aplica aquí el supuesto especial del Procurador General."
      ],
      "107–108"
    ],
    [
      "El superior recibe la actuación disciplinaria de un instructor que se declaró impedido. Al revisar las razones y las pruebas considera acreditada la causal y acepta el impedimento; el expediente permanece suspendido mientras se resuelve.",
      "¿Qué debe determinar el superior al aceptar la causal de impedimento?",
      [
        "A quién corresponde el conocimiento de las diligencias disciplinarias.",
        "Si el disciplinado cometió la falta objeto de la actuación.",
        "Si procede terminar definitivamente la actuación por pérdida de competencia."
      ],
      [
        "El superior debe determinar quién conoce las diligencias.",
        "La decisión de impedimento no resuelve responsabilidad.",
        "Aceptar la causal no extingue la acción."
      ],
      "107"
    ],
    [
      "Un instructor recibió recusación debidamente formulada y estima que debe rechazarla. Mientras el superior resuelve, la secretaría propone practicar una diligencia ordinaria ya programada y proseguir con el cómputo de la actuación.",
      "¿Qué estado tiene la actuación desde la presentación de la recusación?",
      [
        "Se suspende hasta que se decida la recusación conforme al procedimiento.",
        "Continúa hasta que el superior acepte expresamente la causal invocada.",
        "Se suspende únicamente si el instructor manifiesta aceptar la causal."
      ],
      [
        "La presentación activa la suspensión de la actuación.",
        "No se requiere aceptación previa del superior.",
        "No depende de que el recusado acepte la causal."
      ],
      "107"
    ],
    [
      "Un servidor público utiliza un bien institucional asignado exclusivamente para su trabajo en un asunto personal ajeno al servicio. La investigación debe identificar qué clase de regla funcional se encuentra comprometida antes de evaluar los restantes elementos.",
      "¿Qué categoría normativa describe el mandato de destinar bienes a su finalidad pública?",
      [
        "Un deber funcional respecto del uso de bienes y recursos asignados.",
        "Una inhabilidad para acceder al empleo público por su vínculo contractual.",
        "Una causal de recusación de quien instruye el proceso por interés directo."
      ],
      [
        "El art. 38 exige destinar bienes a sus fines asignados.",
        "No se describe restricción de acceso al cargo.",
        "No se describe una causal del operador disciplinario."
      ],
      "38"
    ],
    [
      "En una entidad, un nominador interviene en la designación de una persona pese a saber que existe una inhabilidad legal vigente para ese empleo. La oficina analiza la conducta del nominador, no la eventual responsabilidad del aspirante.",
      "¿Qué supuesto debe examinarse en el régimen disciplinario del nominador?",
      [
        "La falta relacionada con designar a sabiendas de la causal de inhabilidad.",
        "El conflicto de intereses únicamente si el aspirante es pariente del nominador.",
        "La falta por uso indebido de bienes institucionales asignados al nominador."
      ],
      [
        "El art. 56 contempla intervenir en designación con conocimiento de la causal.",
        "La inhabilidad no exige parentesco con el nominador.",
        "No se describe utilización de bienes institucionales."
      ],
      "40, 56.2"
    ],
    [
      "Un servidor que ejerce funciones disciplinarias debe revisar una decisión que él mismo profirió cuando ocupaba otro cargo. El equipo considera que conoce mejor los hechos y propone que resuelva la revisión sin examinar el impedimento.",
      "¿Qué causal concreta debe tramitar antes de asumir esa revisión?",
      [
        "Haber proferido la decisión que ahora corresponde revisar.",
        "Tener enemistad grave con el sujeto procesal que recurre.",
        "Haber dejado vencer injustificadamente el término de la actuación."
      ],
      [
        "La revisión de la propia decisión está prevista como causal.",
        "El caso no acredita enemistad grave.",
        "No se describe vencimiento injustificado de términos."
      ],
      "104.2, 105"
    ]
  ],
  "pgn-m24": [
    [
      "Un servidor comete una falta instantánea ordinaria el 10 de febrero de 2024. La entidad conoce la noticia en agosto de 2025 y abre investigación en octubre de ese año. Se aplica el artículo 33 vigente, sin régimen especial.",
      "¿Qué fecha determina el inicio del término ordinario de prescripción?",
      [
        "El 10 de febrero de 2024, fecha de consumación de la falta.",
        "La fecha de agosto de 2025 en que se conoció la noticia.",
        "La fecha de octubre de 2025 en que se abrió la investigación."
      ],
      [
        "En faltas instantáneas se cuenta desde la consumación.",
        "El conocimiento posterior no inicia el cómputo.",
        "La apertura no es el punto inicial legal."
      ],
      "33"
    ],
    [
      "Una conducta permanente ordinaria comienza el 3 de marzo de 2024 y su último acto ocurre el 12 de septiembre de 2024. La queja llega en junio de 2025 y se verifica que la regla vigente del artículo 33 es aplicable al supuesto.",
      "¿Desde cuándo comienza el término de cinco años de prescripción?",
      [
        "Desde el 12 de septiembre de 2024, último acto de la conducta.",
        "Desde el 3 de marzo de 2024, primer acto de la conducta.",
        "Desde la fecha de junio de 2025 en que se recibió la queja."
      ],
      [
        "En conductas permanentes o continuadas se cuenta desde el último hecho o acto.",
        "El inicio de la permanencia no determina ese cómputo.",
        "La noticia posterior no desplaza el punto legal."
      ],
      "33"
    ],
    [
      "Una obligación funcional permanece incumplida desde abril de 2024 hasta que cesa jurídicamente el deber de actuar el 18 de diciembre de 2024. Se trata de una falta omisiva ordinaria sujeta al artículo 33 vigente.",
      "¿Cuál es el punto inicial de prescripción aplicable a esa omisión?",
      [
        "El 18 de diciembre de 2024, cuando cesó el deber de actuar.",
        "La primera fecha de abril de 2024 en que se omitió actuar.",
        "La fecha en que el funcionario investigador conoció el incumplimiento."
      ],
      [
        "La prescripción de faltas omisivas se cuenta al cesar el deber.",
        "La primera omisión no es el punto inicial previsto.",
        "El conocimiento del investigador no inicia ese plazo."
      ],
      "33"
    ],
    [
      "En un expediente se juzgan dos faltas ordinarias instantáneas consumadas el 8 de enero y el 20 de noviembre de 2024, respectivamente. No existen reglas especiales ni eventos interruptivos. El equipo proyecta un único vencimiento para ambas.",
      "¿Cómo deben tratarse los términos de prescripción de esas dos conductas?",
      [
        "Computarlos independientemente desde la fecha de consumación de cada falta.",
        "Computarlos conjuntamente desde la fecha de consumación de la última falta.",
        "Computarlos conjuntamente desde la apertura del expediente que reúne ambas."
      ],
      [
        "La prescripción se cumple por separado para cada conducta.",
        "La última fecha no prolonga el término de la primera.",
        "La unidad del expediente no unifica los cómputos."
      ],
      "33"
    ],
    [
      "En una actuación por falta ordinaria se firma fallo de primera instancia antes de vencer el término de cinco años, pero su notificación válida se practica después de que ese término ya había transcurrido. No existe otro evento legal interruptivo.",
      "¿Qué efecto tiene la firma oportuna frente a la prescripción de la acción?",
      [
        "No interrumpe por sí sola, pues el evento exigido es la notificación.",
        "Interrumpe desde la firma aunque la notificación se practique posteriormente al vencimiento.",
        "Interrumpe retroactivamente desde la fecha en que se proyectó el fallo sancionatorio."
      ],
      [
        "El art. 33 exige notificación de primera instancia.",
        "Expedir no equivale a notificar.",
        "El proyecto de fallo no tiene efecto interruptivo."
      ],
      "33"
    ],
    [
      "Un servidor público ordinario, no elegido popularmente, cometió una falta que coincide objetivamente con una descripción taxativa gravísima. La prueba demuestra culpa grave, no dolo ni culpa gravísima, y no concurre otro régimen especial.",
      "¿Cómo se clasifica la falta objetivamente gravísima cometida con culpa grave?",
      [
        "Como falta grave conforme al criterio especial de clasificación del Código.",
        "Como falta gravísima porque su descripción típica permanece en el catálogo legal.",
        "Como falta leve porque no se ha demostrado la intención de cometerla."
      ],
      [
        "El numeral 9 del art. 47 prevé la reclasificación.",
        "La tipicidad objetiva no elimina ese criterio especial.",
        "Ausencia de dolo no implica levedad."
      ],
      "47.9"
    ],
    [
      "Un servidor de carrera es declarado responsable de una falta grave dolosa, sin reducción especial aplicable. La autoridad debe identificar el tipo y rango legal de sanción antes de valorar agravantes y atenuantes del expediente.",
      "¿Qué sanción establece el Código para esa clasificación y modalidad subjetiva?",
      [
        "Suspensión de tres a dieciocho meses e inhabilidad especial por igual término.",
        "Suspensión de uno a doce meses sin inhabilidad especial por ese concepto.",
        "Destitución e inhabilidad general de ocho a diez años por esa conducta."
      ],
      [
        "El art. 48.3 regula la falta grave dolosa.",
        "El segundo rango corresponde a falta grave culposa.",
        "La destitución descrita corresponde a gravísima con culpa gravísima."
      ],
      "48"
    ],
    [
      "Una servidora es declarada responsable de una falta leve dolosa. No concurre una regla especial de reducción y el funcionario debe aplicar la sanción ordinaria legal, tomando como referencia el salario básico de la época de los hechos.",
      "¿Qué sanción corresponde a esa falta leve cometida con dolo?",
      [
        "Multa de diez a ciento ochenta días del salario básico de la época.",
        "Amonestación escrita por la sola clasificación de la falta como leve.",
        "Suspensión de uno a doce meses sin inhabilidad especial por ese concepto."
      ],
      [
        "El art. 48.5 establece multa para la leve dolosa.",
        "La amonestación corresponde a leve culposa.",
        "La suspensión citada corresponde a grave culposa."
      ],
      "48"
    ],
    [
      "Una sanción disciplinaria quedó ejecutoriada el 15 de marzo de 2024. La oficina de ejecución confunde el término para ejecutar la sanción con el de prescripción de la acción, que había sido interrumpido por notificación del fallo inicial.",
      "¿Qué término y punto inicial rigen la prescripción de la sanción impuesta?",
      [
        "Cinco años contados a partir de la ejecutoria del fallo disciplinario.",
        "Dos años contados a partir de la notificación del fallo de primera instancia.",
        "Cinco años contados a partir de la fecha de consumación de la falta."
      ],
      [
        "El art. 36 fija cinco años desde ejecutoria.",
        "Dos años regulan la acción ordinaria tras interrupción.",
        "La consumación determina el inicio de la acción instantánea."
      ],
      "33, 36"
    ]
  ],
  "pgn-m35": [
    [
      "Un informe de control interno identifica un faltante de inventario. El funcionario encargado tenía acceso al almacén, al igual que otros tres servidores. No se aportan registros que permitan establecer qué persona retiró los bienes ni cómo ocurrió el hecho.",
      "¿Qué debe hacer la autoridad antes de atribuir responsabilidad personal?",
      [
        "Obtener pruebas que vinculen al investigado con la conducta y valorar alternativas.",
        "Atribuir el faltante al encargado porque tenía acceso funcional al almacén.",
        "Exigir al encargado demostrar quién retiró los elementos para desvirtuar responsabilidad."
      ],
      [
        "El Estado debe probar la responsabilidad individual.",
        "Tener acceso no acredita ejecución de la conducta.",
        "La carga no se traslada al disciplinado."
      ],
      "147–148"
    ],
    [
      "La defensa identifica un registro institucional que podría demostrar que el servidor no estaba presente cuando se realizó la conducta. Ninguna parte ha solicitado formalmente su incorporación y el instructor conoce su existencia y relevancia.",
      "¿Qué facultad permite al instructor obtener ese elemento probatorio favorable?",
      [
        "Decretar de oficio la prueba relevante y garantizar su contradicción.",
        "Esperar exclusivamente a que la defensa presente la solicitud probatoria correspondiente.",
        "Omitirla porque el instructor únicamente debe sustentar la hipótesis de responsabilidad."
      ],
      [
        "La búsqueda imparcial incluye pruebas de oficio favorables.",
        "La iniciativa de parte no es indispensable.",
        "La instrucción no busca solamente sustentar cargos."
      ],
      "148"
    ],
    [
      "En una actuación disciplinaria el único sustento para sancionar es una afirmación del instructor sobre la conducta atribuida al servidor. Aunque conoce personalmente el contexto institucional, no se produjo ni incorporó prueba legal del hecho decisivo.",
      "¿Qué exigencia debe satisfacerse antes de adoptar el fallo disciplinario?",
      [
        "Fundar el fallo en pruebas legalmente producidas y aportadas al proceso.",
        "Fundar el fallo en el conocimiento personal documentado del instructor del expediente.",
        "Complementar el fallo con la experiencia profesional de quien dirige la investigación."
      ],
      [
        "La decisión exige material probatorio producido e incorporado legalmente.",
        "El conocimiento personal no sustituye las pruebas del proceso.",
        "La experiencia orienta valoración, no suple prueba faltante."
      ],
      "147, 160"
    ],
    [
      "El instructor tiene una declaración que atribuye al servidor una omisión y una certificación que demuestra que otra persona ejercía temporalmente la función. Su coordinador recomienda concentrar las diligencias en confirmar el relato acusatorio para cerrar pronto el expediente.",
      "¿Qué criterio debe guiar la investigación de esas dos versiones contrapuestas?",
      [
        "Examinar con igual rigor la hipótesis de responsabilidad y la de descargo.",
        "Dar prioridad a la versión acusatoria por haber motivado la apertura del expediente.",
        "Aceptar la certificación sin comprobar su alcance porque favorece al investigado."
      ],
      [
        "El art. 148 exige búsqueda imparcial de la verdad real.",
        "El origen de la investigación no otorga prioridad probatoria.",
        "La imparcialidad tampoco significa aceptar sin análisis el descargo."
      ],
      "148"
    ],
    [
      "Un despacho analiza una falta cuya ocurrencia puede acreditarse con documentos, testimonios y una inspección, sin que una regla especial exija determinado medio. Un asesor sostiene que solo un dictamen pericial puede demostrar legalmente el hecho.",
      "¿Qué principio permite utilizar distintos medios reconocidos para demostrar la falta?",
      [
        "Libertad probatoria dentro de los medios legalmente reconocidos y garantías aplicables.",
        "Tarifa legal que exige siempre dictamen experto en toda actuación disciplinaria.",
        "Prevalencia documental que excluye otros medios cuando existen registros escritos."
      ],
      [
        "El art. 150 permite cualquiera de los medios legalmente reconocidos.",
        "No existe la exigencia universal planteada.",
        "La existencia de documentos no impide otros medios."
      ],
      "149–150"
    ],
    [
      "Durante el juicio se propone utilizar un medio probatorio no regulado expresamente en el Código General Disciplinario. Existe regulación legal específica de ese medio y el despacho debe determinar si es posible practicarlo en la actuación.",
      "¿Qué condición permite utilizar ese medio no previsto expresamente por el Código?",
      [
        "Aplicar las disposiciones que lo regulan respetando los derechos fundamentales.",
        "Aplicar las reglas del testimonio sin importar la naturaleza del medio propuesto.",
        "Excluirlo por no aparecer expresamente enumerado en el Código General Disciplinario."
      ],
      [
        "El art. 149 permite medios no previstos bajo su regulación propia.",
        "No corresponde aplicar indiscriminadamente reglas de otro medio.",
        "La enumeración no constituye exclusión absoluta."
      ],
      "149"
    ],
    [
      "En una investigación existen dos indicios de que el servidor conocía una instrucción, pero ningún soporte directo acredita su intervención. La defensa solicita que el funcionario explique cómo se relacionan los hechos indicadores con la hipótesis de autoría.",
      "¿Qué tratamiento exige el Código al apreciar los indicios dentro del expediente?",
      [
        "Valorar los indicios mediante sana crítica, explicando su alcance inferencial.",
        "Excluir los indicios porque no figuran como medios autónomos del artículo 149.",
        "Asignar a los indicios valor equivalente al de una confesión expresa."
      ],
      [
        "Los indicios se consideran al apreciar las pruebas conforme a sana crítica.",
        "La norma los admite en la valoración.",
        "No tienen equivalencia automática con confesión."
      ],
      "149, 159"
    ],
    [
      "Un despacho dispone de datos financieros que requieren conocimiento especializado para interpretarse. Una entidad estatal cuenta con personal idóneo y puede colaborar, pero el instructor considera contratar obligatoriamente un particular sin explorar esa posibilidad.",
      "¿Qué mecanismo de colaboración contempla el Código para esa necesidad técnica?",
      [
        "Solicitar gratuitamente la colaboración técnica necesaria a los organismos del Estado.",
        "Delegar la decisión disciplinaria a la entidad que dispone de los expertos.",
        "Exigir a la defensa que contrate al experto para demostrar su inocencia."
      ],
      [
        "El art. 156 prevé colaboración técnica gratuita de organismos estatales.",
        "El apoyo no transfiere la decisión jurídica.",
        "La carga probatoria sigue en cabeza del Estado."
      ],
      "147, 156"
    ],
    [
      "La autoridad tiene pruebas legalmente incorporadas que demuestran una irregularidad administrativa, pero persiste una duda razonable sobre la responsabilidad del disciplinado al concluir el juicio. El proyecto de fallo propone imponer una sanción reducida.",
      "¿Qué estándar probatorio impide sancionar en esas condiciones de incertidumbre?",
      [
        "La certeza acerca de la existencia de la falta y la responsabilidad.",
        "La mera probabilidad de responsabilidad que permitió formular inicialmente cargos.",
        "La existencia de indicios suficientes para justificar la apertura de investigación."
      ],
      [
        "El fallo sancionatorio exige certeza de ambos elementos.",
        "El estándar de cargos no es el de sanción.",
        "El umbral inicial tampoco satisface el fallo."
      ],
      "14, 160, 222"
    ]
  ],
  "pgn-m36": [
    [
      "Se investiga la modificación de una fecha en un registro de inventario durante marzo. La defensa pide verificar los registros de acceso del día de la modificación; otra solicitud pretende obtener los historiales de vacaciones de servidores sin relación con el asunto.",
      "¿Qué criterio permite diferenciar las dos solicitudes por su relación con los hechos?",
      [
        "La pertinencia de cada prueba respecto del hecho disciplinariamente relevante.",
        "La autenticidad documental de ambas fuentes por proceder de la misma entidad.",
        "La cantidad de registros que podrían obtenerse mediante cada solicitud probatoria."
      ],
      [
        "La pertinencia exige conexión material con el hecho a probar.",
        "La autenticidad no establece pertinencia.",
        "El volumen no determina relación con el objeto."
      ],
      "151"
    ],
    [
      "Una inspección ya verificó y documentó íntegramente el estado de un equipo. Se solicita repetirla en idénticas condiciones sin hechos nuevos, cuestiones pendientes ni finalidad adicional; el despacho dispone de la diligencia y todos sus soportes.",
      "¿Qué fundamento permite negar motivadamente la repetición solicitada en este supuesto?",
      [
        "Su carácter superfluo por no aportar información adicional relevante.",
        "Su carácter ilícito porque las diligencias repetidas vulneran necesariamente garantías.",
        "Su falta de autenticidad porque ya existe otra inspección sobre el mismo equipo."
      ],
      [
        "El art. 151 ordena negar las pruebas superfluas.",
        "Repetir no constituye por sí solo ilicitud.",
        "La duplicación no demuestra falsedad o inautenticidad."
      ],
      "151"
    ],
    [
      "Una defensa solicita incorporar un registro técnico vinculado directamente con la identificación de quien ejecutó una transacción. El instructor propone negarlo únicamente porque la hipótesis oficial ya considera demostrada la autoría y el registro podría contradecirla.",
      "¿Qué criterio debe aplicar al resolver la petición de prueba de descargo?",
      [
        "Examinar su pertinencia, conducencia y utilidad sin prejuzgar su resultado.",
        "Negarla si contradice la hipótesis sustentada en el auto de apertura.",
        "Decretarla únicamente cuando se haya formulado pliego de cargos contra el servidor."
      ],
      [
        "El mérito anticipado no reemplaza el examen de admisibilidad.",
        "La contradicción de una hipótesis justifica evaluarla, no descartarla.",
        "Los sujetos pueden solicitar pruebas en investigación."
      ],
      "148, 151"
    ],
    [
      "En una investigación se solicita un medio para demostrar un hecho respecto del cual existe una exigencia legal específica de prueba. El medio propuesto no satisface esa exigencia, aunque la información que podría aportar guarda relación con el hecho.",
      "¿Qué criterio concreto debe analizarse respecto de esa limitación jurídica del medio?",
      [
        "Conducencia, por la idoneidad legal del medio para acreditar el hecho.",
        "Pertinencia, porque toda relación temática garantiza idoneidad jurídica del medio.",
        "Utilidad, porque el medio debe aceptarse siempre que aporte información novedosa."
      ],
      [
        "La conducencia examina aptitud jurídica del medio.",
        "La relación temática no sustituye exigencias legales.",
        "La novedad no elimina un requisito normativo."
      ],
      "149–151"
    ],
    [
      "En un expediente se solicita un documento que acredita la propiedad de un bien directamente relacionado con los hechos. El instructor considera negar la solicitud por tratarse de un documento presentado por el investigado y no por una autoridad pública.",
      "¿Qué fundamento debe utilizar para resolver la petición de incorporación documental?",
      [
        "Evaluar las condiciones legales del documento y su relación con los hechos.",
        "Negarlo por provenir de un sujeto procesal interesado en el resultado.",
        "Exigir que toda prueba solicitada por la defensa sea decretada de oficio."
      ],
      [
        "Los sujetos procesales pueden aportar y solicitar pruebas pertinentes y conducentes.",
        "El interés del aportante no es causal automática de rechazo.",
        "La iniciativa de parte está prevista por el Código."
      ],
      "147, 151"
    ],
    [
      "Se investigan accesos no autorizados a una carpeta institucional el 5 de mayo. El equipo propone recaudar indiscriminadamente mensajes privados de todo el personal durante varios años, pese a existir registros acotados que permiten estudiar el evento.",
      "¿Qué delimitación probatoria se ajusta mejor a los hechos investigados y las garantías?",
      [
        "Solicitar los registros relevantes del evento mediante un procedimiento legalmente autorizado.",
        "Recopilar todos los mensajes para seleccionar posteriormente los que parezcan relevantes.",
        "Abandonar las pruebas digitales porque su obtención siempre afecta derechos fundamentales."
      ],
      [
        "La búsqueda debe ser pertinente y respetar garantías.",
        "La recolección indiscriminada no se justifica por mera conveniencia.",
        "La evidencia digital puede obtenerse respetando las reglas aplicables."
      ],
      "149, 151, 158"
    ],
    [
      "Un testigo presencial puede aclarar quién entregó un expediente en una fecha discutida. La autoridad ya cuenta con una fotografía del lugar, pero esta no permite establecer quién realizó la entrega. Se plantea negar el testimonio por existir una imagen.",
      "¿Qué criterio permite reconocer el aporte adicional del testimonio en ese supuesto?",
      [
        "Utilidad probatoria para esclarecer una cuestión que la fotografía no resuelve.",
        "Carácter superfluo porque ya se incorporó una prueba sobre el lugar.",
        "Falta de pertinencia porque la entrega ocurrió en un espacio fotografiado."
      ],
      [
        "El testimonio puede aportar información no contenida en la imagen.",
        "Referirse al mismo hecho no implica redundancia.",
        "El testigo se relaciona directamente con la cuestión investigada."
      ],
      "151"
    ],
    [
      "Se aporta al proceso una prueba que guarda relación directa con la conducta investigada. Sin embargo, se acredita que fue practicada ilegalmente y que su obtención vulneró derechos fundamentales del disciplinado. El equipo estima que resulta muy esclarecedora.",
      "¿Qué consecuencia prevalece frente a la utilidad de esa prueba ilegal?",
      [
        "No atender la prueba obtenida ilegalmente y aplicar la regla de exclusión.",
        "Incorporarla por su pertinencia y asignarle menor valor en el fallo.",
        "Decretarla nuevamente como prueba de oficio sin subsanar el origen ilícito."
      ],
      [
        "La utilidad no elimina la ilegalidad ni la cláusula de exclusión.",
        "La disminución de peso no sustituye exclusión.",
        "El decreto posterior no sana por sí solo el origen."
      ],
      "21, 151, 158"
    ],
    [
      "Una solicitud probatoria pretende obtener doce copias idénticas de un mismo informe certificado ya incorporado. No se cuestionan autenticidad, integridad o contenido, y el solicitante no explica qué información distinta pretende demostrar con las copias.",
      "¿Qué motivo permite negar esa solicitud sin afectar la investigación del hecho?",
      [
        "La falta de utilidad adicional de las copias idénticas solicitadas.",
        "La impertinencia del informe original respecto de todos los hechos investigados.",
        "La inconducencia de todo documento como medio de prueba disciplinaria."
      ],
      [
        "La multiplicación de copias no aporta información adicional.",
        "El caso no demuestra impertinencia del informe original.",
        "Los documentos son medios reconocidos de prueba."
      ],
      "149, 151"
    ]
  ],
  "pgn-m37": [
    [
      "Un archivo electrónico contiene información muy relevante sobre una presunta falta y su integridad técnica se verifica mediante una huella digital. Posteriormente se acredita que su recaudo desconoció derechos fundamentales del disciplinado.",
      "¿Qué consecuencia jurídica corresponde pese a la integridad técnica del archivo?",
      [
        "Tener la prueba como inexistente y no fundamentar decisiones en ella.",
        "Conservar la prueba porque su integridad demuestra autenticidad y legalidad.",
        "Utilizarla con valor reducido por haber sido obtenida fuera del procedimiento."
      ],
      [
        "La vulneración fundamental activa el art. 158 y la exclusión.",
        "Integridad y legalidad son cuestiones diferentes.",
        "El menor valor no subsana la vulneración."
      ],
      "21, 158"
    ],
    [
      "En una actuación ya se practicó una prueba antes de vincular formalmente a un servidor. El auto de vinculación acaba de notificarse válidamente y la defensa solicita conocer y controvertir el material incorporado al expediente.",
      "¿Desde qué momento reconoce el Código la oportunidad de controvertir las pruebas?",
      [
        "Desde la notificación del auto de apertura o de la orden de vinculación.",
        "Desde la notificación del pliego de cargos, aunque exista vinculación anterior.",
        "Desde el traslado para alegar de conclusión en la etapa de juzgamiento."
      ],
      [
        "El art. 157 fija la notificación de apertura o vinculación.",
        "La contradicción no se pospone hasta cargos.",
        "El traslado final no es el inicio del derecho."
      ],
      "157"
    ],
    [
      "Un proceso penal llegó a la presentación del escrito de acusación y la Fiscalía descubrió evidencias físicas que todavía no se introdujeron ni controvirtieron en juicio. La autoridad disciplinaria requiere trasladar esos elementos relevantes.",
      "¿Qué condición debe satisfacer su utilización dentro de la actuación disciplinaria?",
      [
        "Someter los elementos trasladados a contradicción dentro del proceso disciplinario.",
        "Considerarlos automáticamente pruebas plenas por haber sido descubiertos por la Fiscalía.",
        "Esperar necesariamente a que exista sentencia penal condenatoria ejecutoriada para trasladarlos."
      ],
      [
        "El art. 154 permite traslado con contradicción disciplinaria.",
        "El descubrimiento no equivale a práctica y contradicción en juicio.",
        "La ley permite trasladarlos antes de sentencia."
      ],
      "154"
    ],
    [
      "En un proceso penal en curso existen evidencias que no han sido descubiertas por la Fiscalía. El despacho disciplinario considera que pueden esclarecer un hecho y propone solicitarlas directamente al custodio, sin informar al fiscal responsable.",
      "¿A quién corresponde evaluar la solicitud de entrega en este supuesto especial?",
      [
        "Al fiscal del caso, quien decide qué puede entregar sin comprometer la investigación.",
        "Al custodio de las evidencias, quien debe entregarlas por la sola solicitud disciplinaria.",
        "Al defensor del investigado, quien decide qué información penal puede trasladarse."
      ],
      [
        "El art. 154 atribuye la evaluación al fiscal del caso.",
        "El custodio no sustituye esa competencia.",
        "La defensa no autoriza por sí sola la entrega."
      ],
      "154"
    ],
    [
      "Una autoridad disciplinaria requiere un testimonio practicado válidamente en otra actuación administrativa. Dispone de una copia informal enviada por un tercero, pero todavía no cuenta con copia autorizada por el funcionario responsable de la actuación de origen.",
      "¿Qué mecanismo de traslado debe gestionar para incorporar la prueba conforme al Código?",
      [
        "Obtener copia autorizada por el funcionario respectivo y valorar según el CGD.",
        "Adoptar la copia informal como prueba plena por proceder de otro proceso.",
        "Pedir que el funcionario de origen decida la responsabilidad disciplinaria del servidor."
      ],
      [
        "El traslado exige copias autorizadas de la prueba válidamente practicada.",
        "La copia informal no acredita por sí sola el requisito.",
        "La autoridad de origen no decide este asunto disciplinario."
      ],
      "154"
    ],
    [
      "Se constata que un medio de prueba fue recaudado sin una formalidad sustancial exigible. El documento conserva su contenido original y varios servidores reconocen que parece auténtico, pero el defecto sustancial está plenamente demostrado.",
      "¿Cómo califica el Código la prueba afectada por esa omisión sustancial?",
      [
        "Como inexistente para efectos de la actuación disciplinaria.",
        "Como plenamente válida por conservar su contenido original.",
        "Como prueba de valor reducido por la sola omisión formal."
      ],
      [
        "El art. 158 comprende la falta de formalidades sustanciales.",
        "Autenticidad no corrige la omisión sustancial.",
        "No corresponde simplemente reducir valor."
      ],
      "158"
    ],
    [
      "La defensa fue notificada de la apertura, recibió acceso oportuno a una prueba válida y contó con una oportunidad efectiva para controvertirla, pero decidió no formular observaciones. Después sostiene que la prueba es inexistente exclusivamente por no haberla contradicho.",
      "¿Qué distinción debe aplicar el funcionario frente a esa alegación de inexistencia?",
      [
        "Diferenciar la oportunidad efectiva no utilizada de la privación de contradicción.",
        "Excluir la prueba porque solo es válida si la defensa formula observaciones.",
        "Declarar que el silencio de la defensa confirma todos los hechos contenidos en la prueba."
      ],
      [
        "La garantía exige oportunidad efectiva, no ejercicio obligatorio.",
        "No controvertir no vuelve inexistente una prueba válida.",
        "El silencio no equivale a aceptación de su contenido."
      ],
      "157–159"
    ],
    [
      "Un informe técnico legalmente incorporado contiene registros y una interpretación del experto. La defensa identifica un error en el método y solicita examinar las fuentes y cuestionar la conclusión, sin alegar que el recaudo haya vulnerado garantías fundamentales.",
      "¿Qué alcance tiene la contradicción frente a esa interpretación técnica incorporada?",
      [
        "Permitir cuestionar el método y valorar razonadamente su efecto en la conclusión.",
        "Excluir automáticamente todo el informe porque se controvirtió una de sus inferencias.",
        "Impedir el cuestionamiento porque la prueba ya fue incorporada de forma legal."
      ],
      [
        "La contradicción comprende el contenido y alcance de la prueba.",
        "Una objeción metodológica no implica automáticamente exclusión integral.",
        "La legalidad del recaudo no elimina el derecho de contradicción."
      ],
      "157, 159"
    ],
    [
      "Una decisión de fondo utiliza un registro obtenido con vulneración fundamental acreditada y además cita dos documentos independientes recaudados legalmente. Al revisar el defecto, el funcionario debe distinguir la situación de cada elemento probatorio.",
      "¿Qué análisis corresponde respecto de las demás pruebas independientes y la decisión?",
      [
        "Excluir el registro afectado y valorar legalidad y suficiencia de las pruebas restantes.",
        "Invalidar automáticamente toda prueba del expediente sin establecer ninguna relación causal.",
        "Mantener el registro ilícito porque existen otros documentos que corroboran parcialmente sus datos."
      ],
      [
        "La exclusión del registro no elimina necesariamente evidencia independiente válida.",
        "Se debe examinar el alcance concreto del defecto.",
        "La corroboración no convierte la prueba ilícita en lícita."
      ],
      "21, 158–160, 205"
    ]
  ],
  "pgn-m38": [
    [
      "Un equipo investiga una modificación de un registro institucional. La bitácora de eventos se sobrescribe cada siete días y las declaraciones pueden recibirse posteriormente. La autoridad competente dispone de un mecanismo legal de preservación inmediata.",
      "¿Qué prioridad debe establecer el plan probatorio para evitar pérdida de evidencia?",
      [
        "Preservar primero la bitácora mediante adquisición documentada y autorizada.",
        "Recibir primero todos los testimonios antes de asegurar los registros.",
        "Esperar a la evaluación de cargos para solicitar la bitácora definitiva."
      ],
      [
        "El riesgo de pérdida justifica priorizar aseguramiento legal.",
        "Los testimonios no sustituyen un registro próximo a desaparecer.",
        "La espera podría impedir su recuperación."
      ],
      "147–148, 155"
    ],
    [
      "Una investigación debe establecer si la omisión de una respuesta ocurrió antes de que el servidor fuera reasignado. El expediente contiene correos de solicitud, una resolución de reasignación y un historial de asignaciones con fechas distintas.",
      "¿Qué pregunta probatoria conecta mejor las fuentes con el deber funcional investigado?",
      [
        "Determinar quién tenía el deber de responder cuando venció el plazo aplicable.",
        "Determinar cuántas comunicaciones recibió cada servidor durante toda la vigencia.",
        "Determinar quién ocupaba el cargo cuando llegó la queja a Procuraduría."
      ],
      [
        "El deber se analiza para el momento relevante de la conducta.",
        "El volumen general no determina la asignación concreta.",
        "La noticia posterior no identifica al obligado cuando venció el plazo."
      ],
      "9, 27, 148"
    ],
    [
      "La hipótesis inicial atribuye una transacción a una persona por el nombre de usuario registrado. Se documenta que las credenciales pudieron compartirse y existe una fuente independiente de control de acceso físico que cubre el mismo intervalo.",
      "¿Qué diligencia discrimina mejor entre la hipótesis de autoría y la alternativa?",
      [
        "Contrastar accesos, sesiones y circunstancias con los registros independientes disponibles.",
        "Solicitar nuevamente el mismo registro de usuario en un formato de exportación diferente.",
        "Entrevistar solamente a quienes ya respaldan la atribución inicial de la transacción."
      ],
      [
        "El contraste de fuentes permite probar alternativas de atribución.",
        "Cambiar formato no genera una fuente independiente.",
        "Seleccionar testigos confirmatorios introduce sesgo."
      ],
      "147–148, 159"
    ],
    [
      "Una matriz probatoria marca como acreditada la autoría de un cambio porque existe una captura con el nombre del usuario. No se verificó si el usuario era compartido ni si la captura corresponde al sistema y momento investigados.",
      "¿Cómo debe actualizarse la matriz para representar el estado real del conocimiento?",
      [
        "Registrar el dato observado, la inferencia provisional y las verificaciones pendientes.",
        "Mantener autoría acreditada y añadir una advertencia general sobre incertidumbre técnica.",
        "Eliminar la captura de la matriz hasta lograr una prueba directa de autoría."
      ],
      [
        "La matriz distingue observación, inferencia y vacío.",
        "Una advertencia no corrige la clasificación errónea.",
        "Puede registrarse un elemento aún pendiente de contextualización."
      ],
      "147–148, 159"
    ],
    [
      "Dos documentos relevantes presentan horas distintas para un evento. Uno usa UTC y el otro hora colombiana; ambas fuentes conservan los registros originales. Antes de comparar el orden de eventos, el equipo necesita establecer si la diferencia es real.",
      "¿Qué comprobación debe integrarse primero en el plan de análisis cronológico?",
      [
        "Normalizar las zonas horarias en copia y comprobar los desfases de reloj.",
        "Promediar ambos horarios para fijar una hora aproximada del evento investigado.",
        "Priorizar la hora del sistema que registró el evento con mayor precisión decimal."
      ],
      [
        "La comparación exige una referencia temporal común y control de sincronización.",
        "Promediar marcas no equivalentes carece de fundamento.",
        "Los decimales no prueban exactitud temporal."
      ],
      "148, 156, 159"
    ],
    [
      "Una investigación sobre incumplimiento contractual tiene una matriz de pruebas centrada en el pago. Surge un acta que demuestra una suspensión válida del contrato durante parte del periodo investigado. El plazo de investigación permite practicar nuevas diligencias.",
      "¿Cómo debe modificarse el plan frente a ese hecho temporal relevante?",
      [
        "Revisar deberes y periodos afectados, ajustando las diligencias a la nueva premisa.",
        "Mantener el plan inicial y anexar el acta únicamente como documento de contexto.",
        "Repetir todo el recaudo anterior sin distinguir qué hipótesis resulta afectada."
      ],
      [
        "El hecho nuevo cambia la delimitación del deber y las preguntas probatorias.",
        "Anexar sin valorar deja intacta una premisa cuestionada.",
        "No se justifica repetir evidencia que conserva validez y utilidad."
      ],
      "9, 148, 159"
    ],
    [
      "En un expediente se desconoce si una demora obedeció a una falla institucional o a inacción del responsable. Existen reportes de disponibilidad, solicitudes de soporte y registros de trabajo que podrían contrastar ambas explicaciones.",
      "¿Qué diseño probatorio es más apropiado para distinguir entre las dos hipótesis?",
      [
        "Examinar tanto la disponibilidad del sistema como las actuaciones posibles del servidor.",
        "Revisar exclusivamente reportes de falla para determinar que toda demora estuvo justificada.",
        "Verificar solamente el plazo vencido y descartar los factores operativos del caso."
      ],
      [
        "Ambas hipótesis requieren pruebas sobre posibilidad y deber de actuar.",
        "La falla no demuestra por sí sola imposibilidad de cumplimiento.",
        "La fecha vencida no explica culpabilidad ni justificación."
      ],
      "9–10, 31, 148"
    ],
    [
      "En una investigación por cambios en un documento, los testigos difieren respecto de su fecha. El expediente cuenta con un historial de versiones y copias de correos remitidos a destinatarios independientes que permiten contrastar el orden de los cambios.",
      "¿Qué diseño de recaudo permite verificar la secuencia con mayor capacidad explicativa?",
      [
        "Contrastar versiones y fechas de envío con las declaraciones sobre cada cambio.",
        "Elegir la declaración más detallada y utilizarla como cronología oficial del expediente.",
        "Contar cuántos testigos respaldan cada fecha y adoptar la versión mayoritaria."
      ],
      [
        "La secuencia puede contrastarse mediante fuentes documentales independientes y relatos.",
        "Detalle narrativo no garantiza exactitud.",
        "La mayoría no reemplaza comprobación cronológica."
      ],
      "148, 159"
    ],
    [
      "Un despacho recibe veinte documentos sobre una posible omisión. Quedan dos hechos decisivos sin fuente asignada: la fecha de conocimiento de una obligación y la posibilidad efectiva de cumplirla. Se aproxima el vencimiento de la etapa.",
      "¿Cómo debe priorizarse el ajuste final del plan de investigación?",
      [
        "Asignar diligencias pertinentes a los dos vacíos y verificar el término disponible.",
        "Solicitar nuevos documentos generales de la dependencia para aumentar el volumen probatorio.",
        "Cerrar el plan por haberse alcanzado una cantidad suficiente de documentos recaudados."
      ],
      [
        "Los vacíos deben vincularse a hechos relevantes y tiempo legal.",
        "El volumen no garantiza resolver la cuestión pendiente.",
        "El número de anexos no determina suficiencia."
      ],
      "147–148, 151, 213"
    ]
  ],
  "pgn-m39": [
    [
      "Un expediente contiene cuatro informes que citan literalmente una única denuncia y otro registro independiente que cuestiona su contenido. El equipo contabiliza cinco fuentes y considera que cuatro respaldan la hipótesis de responsabilidad.",
      "¿Qué valoración distingue adecuadamente corroboración independiente de repetición documental?",
      [
        "Reconocer el origen común de cuatro informes y contrastar el registro independiente.",
        "Asignar cuatro votos probatorios a la denuncia frente a un voto contrario.",
        "Descartar la fuente independiente porque su versión aparece en menos documentos del expediente."
      ],
      [
        "Repetir una misma información no multiplica su independencia.",
        "La sana crítica no consiste en votación documental.",
        "La cantidad no determina por sí sola el mérito."
      ],
      "149, 159"
    ],
    [
      "Un registro de ingreso acredita que una persona entró al edificio donde se modificó un documento. No existe prueba directa de acceso al equipo ni de intervención en el documento. El instructor propone usar el ingreso como demostración de autoría.",
      "¿Qué alcance permite atribuir razonadamente al hecho indicador acreditado?",
      [
        "Sostener presencia en el lugar, sin concluir automáticamente autoría de la modificación.",
        "Sostener autoría de la modificación porque el ingreso se encuentra documentalmente acreditado.",
        "Descartar el registro de ingreso porque no demuestra por sí solo la responsabilidad."
      ],
      [
        "La presencia es un indicador cuya inferencia requiere premisas adicionales.",
        "El salto desde presencia hasta autoría no está justificado.",
        "Un indicio limitado puede conservar utilidad."
      ],
      "149, 159"
    ],
    [
      "Una decisión disciplinaria enumera ocho pruebas legalmente practicadas y afirma que todas resultan suficientes. No explica el mérito de cada elemento, las contradicciones entre fuentes ni cómo sustentan la conclusión de responsabilidad.",
      "¿Qué componente de motivación probatoria debe incorporarse a la decisión?",
      [
        "Exponer razonadamente el mérito de las pruebas y su valoración conjunta.",
        "Agregar el texto íntegro de las pruebas para sustituir el análisis de mérito.",
        "Aumentar las citas normativas sin explicar la relación entre pruebas y conclusión."
      ],
      [
        "El art. 159 exige motivación razonada del mérito probatorio.",
        "Transcribir no equivale a valorar.",
        "Citar normas no explica inferencias fácticas."
      ],
      "159"
    ],
    [
      "Dos testimonios discrepan en detalles periféricos sobre el color de una carpeta, pero coinciden en la entrega y existe un registro independiente que confirma su fecha. No se identifican contradicciones materiales sobre el hecho central.",
      "¿Cómo debe evaluarse esa discrepancia dentro del conjunto probatorio?",
      [
        "Examinar su relevancia y conservar el mérito corroborado del hecho central.",
        "Excluir ambos relatos porque toda diferencia periférica destruye su fuerza probatoria.",
        "Considerar los testimonios plenamente exactos en todos sus detalles por la corroboración."
      ],
      [
        "La discrepancia se valora según su incidencia en el hecho debatido.",
        "No toda diferencia elimina la credibilidad del relato.",
        "Corroborar la entrega no confirma todos los detalles."
      ],
      "159"
    ],
    [
      "Una prueba técnica indica que una transacción se ejecutó desde una cuenta autorizada, pero el análisis del sistema demuestra que esa cuenta podía ser utilizada por varios operadores. El proyecto de decisión atribuye la acción al titular nominal.",
      "¿Qué inferencia respeta el alcance técnico de los datos acreditados?",
      [
        "Acreditar el uso de la cuenta y mantener abierta la identidad del operador.",
        "Acreditar la autoría personal del titular por la sola identificación de su cuenta.",
        "Descartar toda evidencia del sistema por no individualizar directamente a la persona."
      ],
      [
        "La identidad de cuenta no demuestra necesariamente identidad de quien operó.",
        "La titularidad no resuelve el uso compartido.",
        "La prueba sigue aportando información sobre la transacción."
      ],
      "147, 159–160"
    ],
    [
      "Un informe de auditoría identifica una omisión de control y concluye que hubo dolo. La fuente acredita la ausencia de la verificación, pero no presenta datos sobre conocimiento de la ilicitud ni voluntad del servidor investigado.",
      "¿Qué distinción debe efectuar el funcionario al valorar la conclusión del informe?",
      [
        "Separar el incumplimiento acreditado de la modalidad subjetiva que requiere prueba adicional.",
        "Aceptar el dolo porque la auditoría acredita objetivamente la falta de control.",
        "Reducir la conducta a culpa leve porque el informe no acredita voluntad ilícita."
      ],
      [
        "El dolo exige elementos propios distintos del incumplimiento objetivo.",
        "El hallazgo técnico no acredita por sí mismo dolo.",
        "La ausencia de prueba de dolo no acredita automáticamente culpa leve."
      ],
      "10, 28–29, 159"
    ],
    [
      "En una investigación por presunto acoso sexual laboral tipificado en el numeral 5 del artículo 53, la autoridad debe valorar una situación de subordinación entre la víctima y la persona investigada. El equipo propone excluir ese factor del análisis.",
      "¿Qué enfoque debe aplicar al valorar las pruebas en ese supuesto específico?",
      [
        "Enfoque diferencial e interseccional, considerando las relaciones de poder pertinentes.",
        "Un estándar de responsabilidad objetiva basado únicamente en la posición de subordinación.",
        "Un criterio que excluya toda circunstancia de vulnerabilidad por igualdad formal."
      ],
      [
        "El art. 160A exige ese enfoque en el supuesto indicado.",
        "La posición de poder no prueba automáticamente responsabilidad.",
        "La igualdad no impide considerar circunstancias pertinentes de vulnerabilidad."
      ],
      "10, 53.5, 159–160A"
    ],
    [
      "Un expediente presenta dos explicaciones incompatibles de un hecho decisivo. La fuente que respalda una de ellas es íntegra, pero su alcance temporal no cubre el momento investigado; la otra explicación cuenta con soportes que sí cubren ese intervalo.",
      "¿Qué criterio permite asignar mérito a las fuentes sin depender de su apariencia técnica?",
      [
        "Valorar integridad, alcance temporal y relación de cada fuente con el hecho.",
        "Priorizar la fuente íntegra aunque no cubra el momento investigado.",
        "Asignar igual mérito a ambas fuentes por provenir de sistemas institucionales."
      ],
      [
        "Integridad no equivale a cobertura del hecho que se pretende demostrar.",
        "La fuente íntegra puede no resolver la cuestión temporal.",
        "El origen institucional no iguala automáticamente su valor."
      ],
      "149, 159"
    ],
    [
      "Una defensa acredita que el hecho indicador central utilizado por el instructor nunca ocurrió, aunque permanecen dos datos secundarios compatibles con la acusación. El proyecto de fallo conserva la inferencia original sin analizar el efecto de la nueva prueba.",
      "¿Qué revisión exige la sana crítica ante la pérdida de esa premisa central?",
      [
        "Reexaminar la inferencia y verificar si las pruebas restantes sostienen la conclusión.",
        "Mantener la inferencia porque dos datos secundarios todavía coinciden con la acusación.",
        "Excluir todo el expediente por haber quedado desvirtuado uno de sus hechos indicadores."
      ],
      [
        "La inferencia pierde soporte si su premisa se desvirtúa.",
        "La coincidencia secundaria no conserva automáticamente la conclusión.",
        "El efecto se examina sobre cada prueba e inferencia."
      ],
      "149, 159–160"
    ]
  ],
  "pgn-m40": [
    [
      "Una queja relata que un servidor cambió indebidamente una fecha y anexa dos versiones del mismo documento. La oficina propone tomar el relato de la queja como prueba suficiente de autoría y no examinar por separado los anexos.",
      "¿Qué tratamiento distingue el valor de la noticia y el de los documentos anexos?",
      [
        "Orientar el recaudo con la queja y valorar los documentos conforme a sana crítica.",
        "Atribuir valor probatorio pleno a la queja por estar acompañada de documentos.",
        "Excluir los anexos porque la queja no constituye prueba de los hechos."
      ],
      [
        "La noticia no prueba por sí misma; sus anexos sí pueden valorarse.",
        "Adjuntar documentos no convierte el relato en demostración de autoría.",
        "Los anexos se examinan de manera diferenciada."
      ],
      "187"
    ],
    [
      "Un servidor aporta copia legible de un acto administrativo directamente relacionado con los hechos. No se presentan inconsistencias ni dudas concretas sobre su autenticidad. El instructor decide rechazar la copia por no estar acompañada del original.",
      "¿Qué regla del Código debe aplicar para resolver la incorporación del documento?",
      [
        "Admitir original o copia y verificar autenticidad cuando resulte necesario.",
        "Exigir siempre el original para cualquier documento aportado por un sujeto procesal.",
        "Tratar toda copia como indicio de falsedad hasta que sea certificada judicialmente."
      ],
      [
        "El art. 188 admite documentos en original o copia.",
        "No existe exigencia general de original en ese artículo.",
        "La copia no implica falsedad."
      ],
      "188"
    ],
    [
      "Un informe requerido a una empresa presenta inconsistencias entre las cifras del anexo y el registro de origen. Existen dudas fundadas sobre la autenticidad del documento allegado. El funcionario considera que la presunción legal impide solicitar examen adicional.",
      "¿Qué diligencia permite el Código ante la duda de autenticidad del documento?",
      [
        "Someter el documento a examen técnico según las reglas de la prueba pericial.",
        "Mantener la presunción sin verificación porque proviene de una entidad requerida.",
        "Excluir definitivamente el informe sin examinar la inconsistencia que genera la duda."
      ],
      [
        "La presunción documental admite verificación técnica cuando hay duda.",
        "El origen no vuelve irrebatible la presunción.",
        "La inconsistencia exige examen antes de concluir falsedad."
      ],
      "191"
    ],
    [
      "En una actuación se incorpora una historia clínica sometida a reserva legal y pertinente para esclarecer el hecho investigado. La defensa acredita su calidad de sujeto procesal y solicita consultar el documento y obtener copia del cuaderno reservado.",
      "¿Qué tratamiento corresponde al documento reservado incorporado al expediente?",
      [
        "Conservarlo en cuaderno separado, permitir consulta a sujetos procesales sin expedir copias.",
        "Integrarlo al cuaderno público y expedir copias al desaparecer la reserva procesal.",
        "Impedir incluso la consulta de los sujetos procesales por la reserva legal."
      ],
      [
        "El art. 192 establece ese tratamiento diferenciado.",
        "La incorporación no elimina la reserva del documento.",
        "La consulta por sujetos procesales está expresamente permitida."
      ],
      "192"
    ],
    [
      "Un despacho requiere a una sociedad privada entregar registros que legalmente debe conservar y que son relevantes para un proceso. No concurre excepción legal y se necesita determinar a quién comunicar la orden formal de solicitud.",
      "¿Quién recibe la orden de entrega documental tratándose de esa persona jurídica?",
      [
        "El representante legal, en quien recae la obligación prevista por el Código.",
        "El contador de la sociedad, aunque no represente legalmente a la persona jurídica.",
        "El empleado que registró los datos, como único destinatario obligatorio del requerimiento."
      ],
      [
        "El art. 189 atribuye la obligación al representante legal.",
        "La función contable no sustituye esa regla de comunicación.",
        "El registro material no determina el destinatario legal."
      ],
      "189"
    ],
    [
      "Un documento tachado de falso se encuentra incorporado en otra actuación. Para analizarlo se necesita cotejar el original con una firma cuestionada; la autoridad disciplinaria todavía no cuenta con el documento ni con copia autorizada.",
      "¿Qué actuación permite verificar el documento que permanece en otro proceso?",
      [
        "Solicitar a la autoridad que lo tiene copia autenticada u original si es necesario.",
        "Exigir al disciplinado que retire el original del otro expediente y lo entregue.",
        "Dar por demostrado el carácter falso por la sola formulación de la tacha."
      ],
      [
        "El art. 190 permite requerir a la autoridad que conserva el documento.",
        "El retiro informal no es el trámite previsto.",
        "La tacha no acredita automáticamente falsedad."
      ],
      "190"
    ],
    [
      "Un despacho recibe un informe técnico requerido a una entidad sobre datos registrados en sus archivos. El informe explica el origen de los datos y está motivado; un sujeto procesal desea pedir aclaración dentro de la oportunidad prevista.",
      "¿Qué trámite corresponde a ese informe técnico de datos registrados?",
      [
        "Traslado por tres días para pedir aclaración o complementación, sin objeción por error grave.",
        "Traslado por cinco días con objeción por error grave como en toda prueba documental.",
        "Traslado hasta el fallo para cuestionarlo exclusivamente mediante el recurso de apelación."
      ],
      [
        "El art. 195 fija tres días y excluye esa objeción.",
        "No se aplica indistintamente el trámite pericial.",
        "La oportunidad no se reserva al recurso contra el fallo."
      ],
      "193–195"
    ],
    [
      "Una defensa aporta un correo electrónico cuya fuente original puede consultarse. El funcionario sostiene que no puede considerarse como medio de prueba por carecer de soporte en papel, pese a que se dispone de datos sobre su envío y conservación.",
      "¿Qué criterio legal debe aplicar respecto de su formato electrónico?",
      [
        "No excluirlo por ser mensaje de datos; valorar su confiabilidad y condiciones de incorporación.",
        "Exigir siempre una impresión certificada para que tenga fuerza demostrativa en la actuación.",
        "Atribuirle valor probatorio pleno por conservarse dentro del servidor de correo institucional."
      ],
      [
        "La Ley 527 admite mensajes de datos y exige valorar confiabilidad.",
        "El formato electrónico no implica inadmisibilidad.",
        "El almacenamiento institucional no prueba por sí solo todos los hechos."
      ],
      "149, 159; Ley 527/1999 arts. 10–11"
    ],
    [
      "En un expediente se aporta una captura de una conversación que muestra un texto relevante pero carece de identificación verificable del remitente y fecha completa. Existe la posibilidad legal de obtener la conversación original y sus datos de contexto.",
      "¿Qué diligencia incrementa la capacidad de valoración del elemento aportado?",
      [
        "Contrastar la captura con la fuente original, su contexto y datos de identificación.",
        "Considerar demostrada la autoría por el nombre mostrado en la interfaz de la captura.",
        "Descartar de inmediato el elemento sin valorar su relación con la fuente original disponible."
      ],
      [
        "La confiabilidad exige examinar origen, integridad y contexto según el caso.",
        "El nombre visible no acredita por sí solo identidad.",
        "Una captura no se descarta automáticamente por su formato."
      ],
      "159; Ley 527/1999 arts. 10–11"
    ]
  ],
  "pgn-m41": [
    [
      "Un testigo llamado a declarar sobre una posible falta disciplinaria informa que parte de la respuesta lo incriminaría personalmente. El funcionario propone exigirle contestar bajo juramento porque la obligación general de testimoniar está prevista en el Código.",
      "¿Qué límite constitucional debe observarse frente a esa obligación general?",
      [
        "Informar y respetar la garantía de no declarar contra sí mismo.",
        "Exigir la respuesta porque el juramento prevalece sobre la excepción constitucional.",
        "Aplicar multa por renuencia antes de examinar la excepción invocada."
      ],
      [
        "Los arts. 164 y 166 reconocen excepciones constitucionales.",
        "El deber general no elimina las garantías.",
        "La sanción por renuencia no procede frente a quien está exceptuado."
      ],
      "164–166"
    ],
    [
      "Un testigo fue citado para una diligencia disciplinaria y no comparece. Dentro de los tres días siguientes presenta una justificación médica suficiente y verificable. La autoridad analiza si debe imponer automáticamente la multa prevista para la renuencia.",
      "¿Qué decisión corresponde respecto de la inasistencia satisfactoriamente justificada?",
      [
        "No imponer la multa por renuencia y gestionar nueva fecha de declaración.",
        "Imponer la multa porque la inasistencia ocurrió antes de presentar la justificación.",
        "Declarar desistida definitivamente la prueba por no comparecer en la fecha inicial."
      ],
      [
        "La justificación oportuna y satisfactoria excluye la multa del art. 165.",
        "La ley contempla plazo posterior para justificar.",
        "La justificación no impide reprogramar el testimonio pertinente."
      ],
      "165"
    ],
    [
      "Durante una actuación se requiere el testimonio de un abogado sobre hechos que le fueron confiados exclusivamente por su cliente en el ejercicio profesional. La oficina pretende obligarlo a revelarlos porque la información parece pertinente al caso investigado.",
      "¿Qué excepción debe examinarse antes de ordenar esas respuestas al abogado?",
      [
        "La excepción al deber de declarar sobre información confiada por razón de su profesión.",
        "La obligación absoluta de declarar cuando los hechos puedan tener relevancia disciplinaria.",
        "La excepción únicamente si el abogado también tiene calidad de disciplinado en el proceso."
      ],
      [
        "El art. 167 protege lo conocido por razón de la profesión.",
        "Pertinencia no elimina secreto profesional.",
        "La excepción no depende de ser investigado."
      ],
      "167"
    ],
    [
      "El instructor cita simultáneamente a tres testigos presenciales de un hecho y propone que los dos últimos escuchen la primera declaración para que recuerden mejor los detalles y puedan complementar entre ellos la reconstrucción del expediente.",
      "¿Qué regla de recepción impide ese procedimiento de declaración conjunta?",
      [
        "Interrogar separadamente, evitando que conozcan o escuchen las declaraciones anteriores.",
        "Recibir una declaración conjunta y registrar las coincidencias entre los asistentes.",
        "Permitir que escuchen los relatos previos siempre que declaren individualmente bajo juramento."
      ],
      [
        "El art. 172 exige examen separado sin conocimiento de relatos precedentes.",
        "La declaración conjunta no preserva esa regla.",
        "El juramento no elimina la contaminación de relatos."
      ],
      "172"
    ],
    [
      "En un interrogatorio a un testigo presencial, una parte formula la pregunta «¿es cierto que el servidor alteró deliberadamente el archivo?». La pregunta introduce una conclusión no expresada por el testigo y le sugiere responder afirmativamente.",
      "¿Qué ajuste debe realizarse para respetar las reglas del interrogatorio disciplinario?",
      [
        "Formular preguntas neutrales sobre hechos que le consten sin sugerir respuestas.",
        "Mantener la pregunta porque los sujetos procesales no están sujetos a esa prohibición.",
        "Exigir al testigo que califique jurídicamente la conducta antes de describir los hechos."
      ],
      [
        "El art. 173 prohíbe sugerir respuestas, también a sujetos procesales.",
        "La prohibición se extiende a las partes.",
        "El testigo ordinario relata hechos, no define dolo disciplinario."
      ],
      "173–175"
    ],
    [
      "Un testigo cuya condición permite rendir certificación jurada recibe el cuestionario remitido por la autoridad competente. No renuncia a esa modalidad y el despacho necesita establecer el plazo legal para devolver la certificación firmada.",
      "¿En qué plazo debe remitir la certificación jurada al despacho de origen?",
      [
        "Ocho días siguientes al recibo del cuestionario remitido por la autoridad.",
        "Tres días siguientes a la fecha de expedición del cuestionario respectivo.",
        "Diez días siguientes a la fecha en que se ordenó la prueba."
      ],
      [
        "El art. 170 fija ocho días desde el recibo.",
        "Tres días no es el término aplicable a la certificación.",
        "La expedición de la orden no inicia ese plazo."
      ],
      "170"
    ],
    [
      "Una persona disciplinada manifiesta que desea aceptar responsabilidad y presenta un escrito espontáneo, pero no está asistida por defensor ni ha sido informada de sus garantías y beneficios. La autoridad contempla tenerlo como confesión válida.",
      "¿Qué condición debe verificar antes de reconocer la manifestación como confesión válida?",
      [
        "Asistencia de defensor, información de garantías y voluntariedad consciente de la manifestación.",
        "Ratificación escrita sin defensor porque la espontaneidad satisface todas las exigencias legales.",
        "Firma de un testigo que sustituya la información sobre garantías del disciplinado."
      ],
      [
        "El art. 161 exige defensor, información y manifestación libre e informada.",
        "La espontaneidad no sustituye requisitos concurrentes.",
        "El testigo no reemplaza la asistencia técnica."
      ],
      "161"
    ],
    [
      "En una investigación ordinaria el disciplinado confiesa válidamente antes de la ejecutoria del auto de cierre. La autoridad verifica todos los requisitos y debe elaborar el documento equivalente al pliego para remitirlo a juzgamiento.",
      "¿Qué plazo improrrogable tiene la autoridad instructora para elaborar esa acta?",
      [
        "Diez días para elaborar el acta con los elementos exigidos.",
        "Quince días para emitir directamente un fallo de responsabilidad en instrucción.",
        "Cuarenta y cinco días para preparar el acta antes de remitirla."
      ],
      [
        "El art. 162 fija diez días improrrogables para el acta.",
        "El instructor no profiere el fallo por esa confesión.",
        "Cuarenta y cinco días corresponden al término de fallo del juzgador."
      ],
      "162"
    ],
    [
      "Una persona disciplinada acepta válidamente cargos durante el juzgamiento antes de la ejecutoria del auto que concede traslado para alegar de conclusión. Se trata de una falta distinta de las del artículo 52 y la sanción aplicable es suspensión.",
      "¿Qué reducción corresponde a esa aceptación realizada en etapa de juzgamiento?",
      [
        "Reducir la sanción de suspensión en una tercera parte.",
        "Reducir la sanción hasta la mitad como en la etapa de investigación.",
        "Omitir la reducción porque ya se había formulado el pliego de cargos."
      ],
      [
        "El art. 162 contempla reducción de un tercio en juzgamiento.",
        "Hasta la mitad corresponde a investigación.",
        "La aceptación sigue siendo posible en la oportunidad descrita."
      ],
      "162"
    ]
  ],
  "pgn-m42": [
    [
      "La autoridad requiere un dictamen para establecer si un registro informático fue alterado. El experto designado tiene experiencia en análisis contable, pero no acredita conocimientos sobre sistemas, metadatos ni reconstrucción de eventos digitales.",
      "¿Qué debe verificar el despacho antes de permitir que el experto rinda el dictamen?",
      [
        "Su idoneidad y experiencia específicas en la materia objeto de prueba.",
        "Su antigüedad como profesional, sin considerar la especialidad de la prueba.",
        "La sola aceptación del encargo, que reemplaza la acreditación de conocimientos técnicos."
      ],
      [
        "El art. 179 exige idoneidad y experiencia en la materia.",
        "La antigüedad no sustituye competencia específica.",
        "Aceptar el encargo no demuestra idoneidad."
      ],
      "177, 179"
    ],
    [
      "Un dictamen pericial presenta una conclusión sobre alteración de archivos, pero no identifica las muestras examinadas, los procedimientos aplicados ni las razones técnicas que sustentan el resultado. El despacho recibe el documento antes de correr traslado.",
      "¿Qué actuación corresponde antes de trasladar el dictamen a los sujetos procesales?",
      [
        "Devolverlo al perito para que corrija o complete los requisitos incumplidos.",
        "Correr traslado inmediatamente y dejar toda revisión metodológica para los alegatos.",
        "Aceptar la conclusión como suficiente por tratarse de un perito posesionado."
      ],
      [
        "El art. 180 exige verificar cumplimiento antes del traslado.",
        "No se omite el examen previo por existir contradicción posterior.",
        "La posesión no reemplaza motivación y metodología."
      ],
      "179–180"
    ],
    [
      "El perito designado acredita experiencia y presenta un dictamen que satisface todos los requisitos. La decisión se notifica por estado durante la investigación y debe abrirse la oportunidad para que los sujetos soliciten aclaraciones o complementaciones.",
      "¿Qué término común corresponde al traslado del dictamen pericial en este supuesto?",
      [
        "Tres días para solicitar aclaración, complementación o adición.",
        "Cinco días para solicitar aclaración, complementación o adición.",
        "Diez días para solicitar aclaración, complementación o adición."
      ],
      [
        "El art. 180 fija traslado común de tres días.",
        "Cinco días corresponden al término máximo concedido al perito para aclarar.",
        "Diez días no es el término de traslado pericial."
      ],
      "177, 180"
    ],
    [
      "Dos sujetos procesales presentan solicitudes distintas frente al mismo dictamen: uno solicita aclaración y otro formula una objeción motivada por error grave. Ambas cumplen las exigencias legales y la autoridad debe resolver su orden de trámite.",
      "¿Cuál solicitud debe decidir primero el funcionario competente en este supuesto?",
      [
        "La objeción por error grave antes de resolver la solicitud de aclaración.",
        "La aclaración, porque siempre debe agotarse antes de cualquier objeción técnica.",
        "Ambas simultáneamente mediante un nuevo dictamen sin resolver previamente las solicitudes."
      ],
      [
        "El art. 180 da prioridad a la objeción cuando concurren solicitudes.",
        "No se exige agotar primero la aclaración.",
        "La concurrencia tiene un orden legal específico."
      ],
      "180"
    ],
    [
      "La autoridad acepta una objeción por error grave y designa a un nuevo perito conforme al procedimiento. Al recibirse el segundo dictamen, la defensa pretende formular otra objeción por error grave contra ese nuevo documento.",
      "¿Qué medio de contradicción permite el Código frente a ese nuevo dictamen?",
      [
        "Solicitar aclaración o complementación, pues el nuevo dictamen es inobjetable.",
        "Formular otra objeción por error grave bajo idénticas reglas del dictamen inicial.",
        "Excluir el dictamen sin solicitar aclaración por haberse producido tras una objeción."
      ],
      [
        "El art. 180 dispone inobjetabilidad con posibilidad de aclarar o complementar.",
        "No cabe repetir la objeción contra ese nuevo dictamen.",
        "La inobjetabilidad no implica exclusión."
      ],
      "180, 183"
    ],
    [
      "Dos peritos fueron designados para estudiar conjuntamente una inconsistencia técnica. Ambos practicaron las diligencias y examinaron los datos, pero llegaron a conclusiones diferentes sobre el origen de la modificación investigada.",
      "¿Cómo deben presentar sus conclusiones ante la discrepancia técnica descrita?",
      [
        "Cada perito debe rendir su dictamen por separado ante la discrepancia.",
        "El perito con mayor experiencia debe imponer su conclusión al otro experto.",
        "Ambos deben presentar un dictamen único omitiendo las diferencias técnicas relevantes."
      ],
      [
        "El art. 179 contempla dictámenes separados en caso de discrepancia.",
        "La experiencia no autoriza imponer una conclusión a otro perito.",
        "Ocultar diferencias impide conocer el desacuerdo."
      ],
      "179"
    ],
    [
      "Un experto informático identifica que un archivo fue modificado utilizando determinada cuenta y concluye que el servidor titular actuó con dolo disciplinario. El instructor debe valorar el informe sin confundir el hallazgo técnico y la decisión jurídica.",
      "¿Qué límite legal debe observar el perito al rendir su dictamen técnico?",
      [
        "Abstenerse de emitir juicios de responsabilidad disciplinaria y delimitar sus conclusiones técnicas.",
        "Determinar la responsabilidad disciplinaria cuando su análisis identifica una cuenta institucional.",
        "Calificar jurídicamente el dolo si el funcionario aún no ha formulado cargos."
      ],
      [
        "El art. 179 prohíbe juicios de responsabilidad disciplinaria en dictámenes.",
        "Identificar una cuenta no atribuye competencia jurídica al experto.",
        "La etapa no modifica esa prohibición."
      ],
      "179, 182"
    ],
    [
      "Un perito designado reconoce antes de tomar posesión que mantiene un interés directo en el resultado de la actuación. Aporta documentos que acreditan la situación y consulta si puede rendir el dictamen mientras se estudia su declaración.",
      "¿Qué trámite debe seguir respecto de la causal que afecta su imparcialidad?",
      [
        "Manifestar el impedimento antes de posesionarse y permitir que la autoridad resuelva.",
        "Posesionarse y rendir el dictamen, revelando el impedimento al presentar sus conclusiones.",
        "Solicitar autorización informal de los sujetos procesales para conservar la designación."
      ],
      [
        "El art. 178 exige manifestar la causal antes de la posesión.",
        "No debe diferir el impedimento hasta el dictamen.",
        "La decisión corresponde a la autoridad competente."
      ],
      "178"
    ],
    [
      "El despacho cuenta con dos dictámenes legalmente practicados sobre una misma cuestión. El segundo utiliza un método diferente y no ha prosperado objeción por error grave contra el primero. El proyecto propone valorar únicamente el más reciente.",
      "¿Qué regla debe aplicar al apreciar los dos dictámenes disponibles?",
      [
        "Valorarlos conjuntamente atendiendo su fundamentación, precisión e idoneidad de los expertos.",
        "Sustituir automáticamente el primero por el segundo debido a su fecha posterior.",
        "Asignar idéntico mérito a ambos sin analizar sus métodos o fundamentos."
      ],
      [
        "El art. 182 ordena apreciación conjunta salvo la excepción indicada.",
        "El segundo no sustituye automáticamente al primero.",
        "La apreciación conjunta exige valorar calidad técnica."
      ],
      "182–183"
    ]
  ],
  "pgn-m43": [
    [
      "Se investiga la desaparición de varios equipos y se requiere verificar directamente las condiciones del almacén donde fueron registrados. El despacho competente considera ordenar una diligencia para observar bienes, lugares y otros efectos materiales relevantes.",
      "¿Qué medio de prueba permite realizar esa verificación directa conforme al Código?",
      [
        "Inspección disciplinaria decretada de oficio o a petición de parte.",
        "Prueba trasladada mediante copias de actuaciones judiciales o administrativas anteriores.",
        "Certificación jurada dirigida al responsable del almacén como sustituto de la observación."
      ],
      [
        "El art. 185 permite inspección sobre cosas, lugares y bienes.",
        "El traslado incorpora pruebas de otra actuación.",
        "La certificación jurada no sustituye observación directa."
      ],
      "185"
    ],
    [
      "Una providencia dispone practicar inspección disciplinaria, pero solo señala que debe visitarse una dependencia sin identificar qué debe verificarse ni su lugar concreto. El funcionario desea subsanar el proyecto antes de notificar la diligencia.",
      "¿Qué elementos debe expresar con claridad la providencia que decreta la inspección?",
      [
        "El objeto y lugar de la diligencia, informando al disciplinable fecha y hora.",
        "La conclusión probatoria esperada y el posible sentido del fallo disciplinario.",
        "La sanción probable y el nombre de la persona que debe ser declarada responsable."
      ],
      [
        "El art. 186 exige objeto y lugar, e informar fecha y hora.",
        "La providencia no anticipa el resultado.",
        "No corresponde prejuzgar responsabilidad ni sanción."
      ],
      "186"
    ],
    [
      "Durante una inspección comisionada se encuentra un testigo presencial que puede comparecer de inmediato y aportar información útil. El funcionario desea recibir su declaración y conservar correctamente la documentación de ambos medios de prueba.",
      "¿Cómo debe registrar el testimonio recibido durante la inspección disciplinaria?",
      [
        "Recibirlo y recogerlo en un formulario distinto del acta de inspección.",
        "Incluirlo únicamente como una observación material sin distinguir el medio testimonial.",
        "Diferirlo obligatoriamente a una actuación independiente fuera de toda inspección."
      ],
      [
        "El art. 185 autoriza ese testimonio y exige formulario separado.",
        "La declaración conserva naturaleza testimonial.",
        "No es necesario diferirla si cumple los requisitos."
      ],
      "185"
    ],
    [
      "En una inspección se identifican elementos materiales útiles para esclarecer los hechos. La autoridad cuenta con autorización para recogerlos y requiere conservarlos de modo que pueda demostrarse su identidad en análisis posteriores.",
      "¿Qué procedimiento debe observar al recoger y conservar esos elementos útiles?",
      [
        "Aplicar los procedimientos de cadena de custodia y documentar el recaudo.",
        "Trasladarlos sin registro individual hasta que el experto solicite su identificación.",
        "Registrar únicamente su descripción en el acta y omitir su conservación material."
      ],
      [
        "El art. 185 exige procedimientos de cadena de custodia.",
        "La identificación posterior no sustituye la trazabilidad inicial.",
        "La descripción no reemplaza conservar los elementos recogidos."
      ],
      "185"
    ],
    [
      "Una inspección se practica con un objeto inicialmente limitado a comprobar un registro. Durante la diligencia aparece un aspecto directamente relacionado que requiere ampliación, y un sujeto procesal solicita incluirlo antes de finalizar la actuación.",
      "¿Qué facultad contempla el Código durante el trámite de esa inspección?",
      [
        "Ampliar los aspectos objeto de la diligencia de oficio o a petición de parte.",
        "Limitarse siempre al objeto inicial aunque la ampliación esté legalmente justificada.",
        "Convertir la inspección en una investigación distinta sin delimitar los nuevos aspectos."
      ],
      [
        "El art. 186 permite ampliar aspectos durante el trámite.",
        "La delimitación inicial no impide ampliación legal.",
        "La ampliación no habilita cambiar indiscriminadamente de asunto."
      ],
      "186"
    ],
    [
      "Durante una inspección el funcionario encuentra una cuestión que exige conocimiento especializado. No se había designado perito en la providencia inicial y el funcionario competente se encuentra practicando personalmente la diligencia.",
      "¿Qué facultad puede ejercer en ese momento respecto de la necesidad técnica?",
      [
        "Designar un perito al momento de practicar la inspección si resulta necesario.",
        "Suspender definitivamente la diligencia porque la designación solo procede en la providencia inicial.",
        "Delegar en el experto la decisión de fondo sobre la falta investigada."
      ],
      [
        "El art. 186 permite designar perito durante la diligencia.",
        "La designación inicial no es la única oportunidad.",
        "La peritación no transfiere competencia decisoria."
      ],
      "186"
    ],
    [
      "Una autoridad requiere incorporar una prueba practicada válidamente en una actuación judicial de otro país. El despacho conoce la autoridad responsable y dispone de una vía regular para obtener copia autorizada del elemento de interés.",
      "¿Qué criterio determina su eventual traslado a la actuación disciplinaria colombiana?",
      [
        "Obtener copia autorizada y apreciarla de acuerdo con las reglas del Código.",
        "Excluirla por haber sido practicada fuera del territorio nacional colombiano.",
        "Aceptar como vinculante la valoración jurídica realizada por la autoridad extranjera."
      ],
      [
        "El art. 154 contempla traslado de pruebas válidas del exterior.",
        "El origen extranjero no impide automáticamente traslado.",
        "Se realiza valoración autónoma conforme al CGD."
      ],
      "154, 159"
    ],
    [
      "La Procuraduría necesita información de una investigación penal en curso sobre evidencias que aún no fueron descubiertas. La autoridad disciplinaria prepara una solicitud y desea evitar que el traslado comprometa las diligencias penales pendientes.",
      "¿Qué autoridad evalúa qué información puede entregar en ese supuesto especial?",
      [
        "El fiscal del caso, considerando la protección y éxito de la investigación penal.",
        "El juez de conocimiento, en todos los casos antes del descubrimiento de pruebas.",
        "El funcionario disciplinario, quien determina unilateralmente qué evidencias penales deben entregarse."
      ],
      [
        "El art. 154 asigna esa evaluación al fiscal del caso.",
        "No exige acudir necesariamente al juez en ese supuesto.",
        "El requerimiento no elimina la evaluación del fiscal."
      ],
      "154"
    ],
    [
      "Se incorpora copia autorizada de una inspección practicada en otro proceso. El documento acredita determinadas condiciones físicas del lugar, pero la decisión de origen atribuye una responsabilidad jurídica distinta a la materia disciplinaria actualmente investigada.",
      "¿Qué tratamiento corresponde al mérito de esa prueba trasladada y a la conclusión externa?",
      [
        "Valorar autónomamente los hallazgos conforme a las reglas disciplinarias y el objeto actual.",
        "Adoptar la conclusión jurídica externa como obligatoria por provenir de otra autoridad.",
        "Descartar todos los hallazgos porque el proceso de origen perseguía una finalidad distinta."
      ],
      [
        "El traslado permite valorar pruebas, no importar automáticamente decisiones.",
        "La conclusión externa no sustituye el examen disciplinario.",
        "La diferencia de objeto exige delimitar pertinencia, no exclusión general."
      ],
      "154, 159"
    ]
  ],
  "pgn-m44": [
    [
      "Un equipo recibe una exportación original de registros de acceso. Antes de ordenar filas y convertir campos de fecha para analizarlos, el responsable debe garantizar que los resultados puedan compararse con los datos recibidos originalmente.",
      "¿Qué procedimiento preserva mejor la integridad y reproducibilidad del análisis digital?",
      [
        "Conservar el original, verificar su huella y transformar solo una copia documentada.",
        "Ordenar el archivo original y recalcular su huella después de cada modificación.",
        "Conservar únicamente el resultado tabular porque facilita reproducir las conclusiones del analista."
      ],
      [
        "Separar original y copia permite verificar cambios y repetir el análisis.",
        "Modificar el original elimina la referencia inicial.",
        "El resultado procesado no sustituye los datos originales."
      ],
      "155, 185; NIST SP 800-86"
    ],
    [
      "Dos archivos obtenidos mediante un procedimiento autorizado presentan la misma huella SHA-256 al compararlos. El investigador propone concluir que ambos fueron creados por la misma persona y exactamente en el mismo instante.",
      "¿Qué conclusión técnica permite sostener razonablemente esa coincidencia de huellas?",
      [
        "Que sus contenidos binarios coinciden con alta confianza, no necesariamente su autoría.",
        "Que ambos archivos fueron producidos por la misma persona en idéntico momento.",
        "Que los archivos fueron obtenidos legalmente porque sus huellas digitales son iguales."
      ],
      [
        "La huella permite verificar identidad de contenido con alta confianza.",
        "La igualdad de bytes no demuestra autoría ni tiempo de creación.",
        "El hash no acredita legalidad de adquisición."
      ],
      "159, 185; NIST SP 800-86"
    ],
    [
      "Una copia de evidencia cambia de custodio entre la adquisición y el análisis. La institución conserva la huella de integridad, pero no cuenta con registro del traslado, fecha, responsable receptor ni condiciones de entrega.",
      "¿Qué aspecto de la preservación debe documentarse para reducir ese vacío de trazabilidad?",
      [
        "El historial de custodia, responsables, fechas y condiciones de cada transferencia.",
        "Únicamente la última huella, porque sustituye toda documentación de la custodia.",
        "Solo el nombre del analista final, sin reconstruir los movimientos anteriores."
      ],
      [
        "La cadena de custodia permite rastrear manejo y transferencias.",
        "La huella no documenta por sí sola quién manipuló la evidencia.",
        "Identificar al último analista no reconstruye los traspasos."
      ],
      "185; NIST SP 800-86"
    ],
    [
      "Un registro de autenticación utiliza UTC y marca un evento a las 14:30. Un servidor institucional configurado con hora colombiana UTC-5 registra otro evento a las 09:30 del mismo día. No se han verificado los desfases de reloj.",
      "¿Qué conclusión temporal es válida al comparar inicialmente las dos marcas horarias?",
      [
        "Representan la misma hora nominal tras conversión; debe comprobarse la sincronización real.",
        "Los eventos ocurrieron con cinco horas de diferencia por mostrar horas distintas.",
        "Los eventos son necesariamente simultáneos porque la conversión de zona horaria coincide."
      ],
      [
        "Convertir zonas permite comparar tiempos nominales, no garantiza exactitud del reloj.",
        "La diferencia visual se explica por la zona horaria.",
        "La coincidencia nominal no prueba simultaneidad efectiva."
      ],
      "159; NIST SP 800-92"
    ],
    [
      "Un servidor de aplicaciones puede sobrescribir registros antiguos y se aproxima la fecha de rotación. El instructor conoce el riesgo y cuenta con una vía legal para asegurar los elementos, pero aún no tiene definido el método de análisis.",
      "¿Qué actuación conserva la disponibilidad de los registros sin anticipar su valoración?",
      [
        "Asegurar oportunamente los registros autorizados y documentar su adquisición antes del análisis.",
        "Esperar a definir todas las hipótesis para preservar los registros una vez rotados.",
        "Modificar la configuración y reconstruir posteriormente los registros sin conservar la fuente actual."
      ],
      [
        "El aseguramiento previene pérdida de elementos probatorios.",
        "La demora puede hacer imposible recuperar los registros.",
        "La modificación no sustituye una adquisición trazable."
      ],
      "155; NIST SP 800-86, NIST SP 800-92"
    ],
    [
      "Se recibe un archivo de registros cuya huella actual difiere de la huella calculada durante la adquisición. La oficina conoce la identidad de los custodios, pero no sabe si existió una conversión autorizada, un error o una modificación no documentada.",
      "¿Qué respuesta técnica permite evaluar la discrepancia sin prejuzgar su causa?",
      [
        "Preservar ambas versiones, investigar la diferencia y documentar su impacto en la integridad.",
        "Reemplazar la huella anterior por la actual para continuar con una referencia actualizada.",
        "Afirmar manipulación dolosa por el solo hecho de que las huellas no coinciden."
      ],
      [
        "La discrepancia requiere investigar cambios y conservar las referencias.",
        "Reemplazar la huella elimina la posibilidad de verificar el cambio.",
        "La diferencia no demuestra intención ni identifica autor."
      ],
      "159, 185; NIST SP 800-86"
    ],
    [
      "Un tercero entrega un archivo de datos y una huella de integridad calculada antes de la entrega. El despacho verifica la coincidencia, pero aún debe examinar cómo obtuvo el tercero la información y si se respetaron garantías fundamentales.",
      "¿Qué distinción debe conservarse antes de valorar el archivo como prueba disciplinaria?",
      [
        "Integridad técnica y legalidad de obtención requieren verificaciones distintas.",
        "La coincidencia de huella acredita simultáneamente integridad y legalidad del recaudo.",
        "La información entregada por terceros se excluye siempre sin examinar su origen."
      ],
      [
        "El hash no demuestra cumplimiento de garantías legales.",
        "Son dimensiones independientes de valoración.",
        "La entrega por terceros no implica ilicitud automática."
      ],
      "21, 158–159; NIST SP 800-86"
    ],
    [
      "Una entidad usa un registro de accesos de una aplicación que fue exportado a una hoja de cálculo. Al abrirlo, algunas fechas se convirtieron automáticamente y ciertos identificadores perdieron ceros iniciales. El analista conserva la exportación original.",
      "¿Qué procedimiento permite reconstruir el análisis sin perder el contexto de los datos?",
      [
        "Importar nuevamente desde el original con tipos de datos controlados y registrar transformaciones.",
        "Corregir manualmente las celdas sin consultar la exportación original ni registrar los cambios.",
        "Usar el resultado actual porque las conversiones automáticas no alteran el significado probatorio."
      ],
      [
        "Los tipos controlados y el registro de cambios preservan reproducibilidad.",
        "La corrección manual sin referencia no permite comprobar los valores.",
        "Las conversiones pueden alterar datos relevantes."
      ],
      "159, 185; NIST SP 800-86"
    ],
    [
      "Un informe técnico contiene resultados obtenidos mediante una búsqueda sobre una copia de evidencia. No indica la versión de la herramienta, filtros, parámetros, fechas ni los archivos examinados, aunque conserva la evidencia original y su huella.",
      "¿Qué información adicional debe documentar el analista para hacer verificable su conclusión?",
      [
        "Método, herramientas, parámetros, datos examinados, transformaciones y límites de los resultados.",
        "Únicamente la huella de la evidencia original y una conclusión resumida del análisis.",
        "Solo los resultados coincidentes con la hipótesis para facilitar la revisión posterior."
      ],
      [
        "La documentación metodológica permite reproducir y controvertir el análisis.",
        "La huella verifica contenido, no describe cómo se obtuvo la conclusión.",
        "La selección sesgada impide evaluar el conjunto."
      ],
      "148–159, 179; NIST SP 800-86"
    ]
  ],
  "pgn-m45": [
    [
      "Antes de adjudicar un contrato de alimentación escolar, una veeduría documenta que el cronograma puede interrumpir el servicio durante dos semanas. La entidad todavía dispone de tiempo para adoptar medidas dentro de sus competencias.",
      "¿Qué actuación preventiva corresponde al riesgo identificado antes de la afectación?",
      [
        "Requerir información y advertir el riesgo para que la entidad evalúe medidas oportunas.",
        "Ordenar directamente adjudicar el contrato al proveedor que garantice continuidad inmediata.",
        "Esperar la interrupción efectiva para establecer si existe responsabilidad disciplinaria."
      ],
      [
        "La prevención anticipa riesgos sobre derechos sin sustituir la administración.",
        "La adjudicación corresponde a la entidad contratante.",
        "No se exige daño consumado para prevenir."
      ],
      "Resolución PGN 132/2014 arts. 3–5, 9"
    ],
    [
      "Un operador preventivo detecta deficiencias en un proceso de compras. La autoridad vigilada le pide firmar conjuntamente el informe de evaluación para garantizar que la decisión quede respaldada por la Procuraduría.",
      "¿Qué límite debe observar el operador frente a la solicitud de firma?",
      [
        "Mantener vigilancia y formular observaciones sin asumir la evaluación contractual.",
        "Firmar el informe como evaluador externo para reforzar su imparcialidad técnica.",
        "Aprobar únicamente los aspectos jurídicos del informe con efectos vinculantes."
      ],
      [
        "El operador vigila; no sustituye competencias administrativas.",
        "La firma evaluadora implica asumir una función ajena.",
        "La revisión preventiva no es aprobación contractual."
      ],
      "Constitución art. 277; Resolución PGN 132/2014 arts. 5, 9.2"
    ],
    [
      "Un municipio recibe alertas sobre una vía que presenta riesgo para sus habitantes. La dependencia preventiva puede requerir información técnica de inmediato, pero propone esperar al siguiente comité mensual para iniciar el procedimiento.",
      "¿Qué principio justifica activar oportunamente la actuación en este supuesto?",
      [
        "Oportunidad, ante la necesidad de prevenir la potencial vulneración de derechos.",
        "Autonomía, porque el calendario interno prevalece sobre la evaluación del riesgo.",
        "Flexibilidad, porque cualquier plazo elegido por el operador es suficiente."
      ],
      [
        "La oportunidad demanda celeridad ante el riesgo.",
        "La autonomía distingue funciones misionales, no justifica demoras.",
        "La flexibilidad exige decisiones razonables y justificadas."
      ],
      "Resolución PGN 132/2014 art. 9.4"
    ],
    [
      "Una actuación preventiva obtiene evidencia de hechos que también podrían tener relevancia disciplinaria. El operador propone incorporar una declaración de responsabilidad al informe preventivo para evitar abrir otro procedimiento con las garantías correspondientes.",
      "¿Qué principio permite tramitar ambos aspectos sin confundir sus efectos jurídicos?",
      [
        "Autonomía de la actuación preventiva respecto de las demás funciones misionales.",
        "Economía procesal para decidir responsabilidad directamente en el trámite preventivo.",
        "Flexibilidad para reemplazar la instrucción disciplinaria por un informe de vigilancia."
      ],
      [
        "Las funciones conservan sus objetos y procedimientos.",
        "La economía no permite omitir garantías disciplinarias.",
        "La flexibilidad no altera competencias legales."
      ],
      "Resolución PGN 132/2014 art. 9.3"
    ],
    [
      "Una dependencia analiza dos medidas frente a un riesgo identificado: solicitar soportes específicos o exigir la paralización general de todas las actividades de una entidad. Solo la primera está dentro de su competencia y resulta suficiente.",
      "¿Qué principio permite escoger la medida ajustada a hechos y competencia?",
      [
        "Racionalidad, mediante una actuación proporcional al riesgo y a la competencia.",
        "Oportunidad, mediante la actuación más restrictiva sin considerar su alcance legal.",
        "Priorización, mediante la suspensión de todas las actividades institucionales involucradas."
      ],
      [
        "La racionalidad evita insuficiencia y extralimitación.",
        "La rapidez no autoriza restricciones desproporcionadas.",
        "Priorizar no confiere facultad general de suspensión."
      ],
      "Resolución PGN 132/2014 art. 9.2"
    ],
    [
      "Una procuraduría territorial recibe varias alertas simultáneas con diferente impacto sobre derechos. El equipo puede atenderlas todas de manera escalonada y debe establecer qué actuación inicia primero conforme a las directrices institucionales.",
      "¿Qué criterio orienta la programación de esas actuaciones preventivas concurrentes?",
      [
        "Considerar políticas institucionales, magnitud del riesgo y potencial afectación de derechos.",
        "Atender exclusivamente en orden de llegada sin considerar la magnitud de riesgos.",
        "Seleccionar los asuntos con mayor número de documentos para facilitar su registro."
      ],
      [
        "La priorización considera directrices y riesgos de vulneración.",
        "El orden de llegada no es el único criterio.",
        "La cantidad documental no representa necesariamente gravedad."
      ],
      "Resolución PGN 132/2014 art. 9.5"
    ],
    [
      "Una asociación de vecinos presenta información sobre un particular que administra recursos del Estado. La oficina considera rechazar la solicitud porque el vigilado no es una entidad pública y los peticionarios actúan colectivamente.",
      "¿Qué alcance tiene la función preventiva respecto de esa solicitud colectiva?",
      [
        "Puede examinarla dentro de su competencia sobre quienes administran recursos públicos.",
        "Solo puede atender solicitudes individuales contra entidades de naturaleza pública.",
        "Debe abstenerse porque los particulares quedan excluidos de toda vigilancia preventiva."
      ],
      [
        "Los usuarios pueden actuar colectivamente y la vigilancia comprende esos particulares.",
        "No se limita a solicitudes individuales.",
        "La naturaleza privada no excluye el supuesto descrito."
      ],
      "Resolución PGN 132/2014 arts. 5–7"
    ],
    [
      "Un funcionario recibe una alerta relacionada con una materia ajena a las responsabilidades preventivas que tiene asignadas. Existe otra dependencia competente y se dispone de soportes suficientes para identificar el asunto y orientar al ciudadano.",
      "¿Qué actuación respeta mejor la asignación institucional de responsabilidades preventivas?",
      [
        "Gestionar la remisión u orientación a la dependencia competente dejando trazabilidad.",
        "Asumir personalmente la actuación por ser servidor de la Procuraduría.",
        "Cerrar sin orientar porque la materia no corresponde a sus responsabilidades asignadas."
      ],
      [
        "La calidad de operador depende de responsabilidades asignadas.",
        "Pertenecer a PGN no confiere todas las competencias.",
        "La falta de competencia no justifica desatender la orientación."
      ],
      "Resolución PGN 132/2014 arts. 6–8"
    ],
    [
      "Una dependencia de apoyo desarrolla un sistema para alertar oportunamente sobre trámites que pueden afectar derechos ciudadanos. Un funcionario sostiene que no debe incorporar indicadores preventivos porque su dependencia no ejerce directamente la función misional.",
      "¿Qué alcance tiene la prevención integral dentro de la gestión institucional?",
      [
        "Los procesos de apoyo también deben contribuir al ejercicio de la prevención.",
        "Solo las dependencias disciplinarias deben incorporar elementos preventivos en su gestión.",
        "Los procesos de apoyo deben asumir directamente la competencia misional preventiva."
      ],
      [
        "La prevención integral involucra procesos misionales, estratégicos y de apoyo.",
        "No se limita a una función misional.",
        "Contribuir no equivale a asumir competencia decisoria."
      ],
      "Resolución PGN 132/2014 arts. 3–4"
    ]
  ],
  "pgn-m46": [
    [
      "Un operador identifica que un municipio planea cerrar temporalmente el único punto de atención a una población rural. El cierre todavía no ocurre y existen alternativas para evitar afectaciones a los usuarios del servicio público.",
      "¿En qué escenario del modelo preventivo encaja principalmente la actuación descrita?",
      [
        "Anticipación, porque busca evitar una afectación que todavía no se materializa.",
        "Mitigación o restitución, porque ya se produjo la vulneración del derecho.",
        "Orientación, porque solo se suministrará información general al usuario del servicio."
      ],
      [
        "La anticipación busca intervenir antes de la afectación.",
        "El caso no acredita vulneración consumada.",
        "Existe un riesgo concreto que requiere actuación preventiva."
      ],
      "Resolución PGN 132/2014; Guía Preventiva PGN"
    ],
    [
      "Tras una interrupción efectiva de un servicio esencial, la población afectada continúa expuesta a consecuencias que pueden agravarse. La Procuraduría evalúa actuaciones inmediatas para limitar los efectos y promover la recuperación del derecho.",
      "¿Qué escenario preventivo corresponde al hecho ya materializado descrito?",
      [
        "Mitigación o restitución de derechos, según el alcance de la actuación.",
        "Anticipación exclusivamente, porque la intervención se realiza antes de una sanción.",
        "Orientación exclusivamente, porque los afectados ya conocen la interrupción del servicio."
      ],
      [
        "La mitigación actúa sobre afectaciones ocurridas para reducir efectos o restituir.",
        "La fecha de una sanción no determina el escenario.",
        "La situación requiere más que información general."
      ],
      "Resolución PGN 132/2014; Guía Preventiva PGN"
    ],
    [
      "Un ciudadano acude a la Procuraduría porque desconoce la autoridad que tramita su solicitud y los canales disponibles para ejercer un derecho. No reporta hechos concretos que requieran una actuación preventiva de vigilancia.",
      "¿Qué escenario corresponde a la necesidad inmediata identificada por el operador?",
      [
        "Orientación al ciudadano para facilitar el ejercicio de su derecho.",
        "Mitigación de una vulneración acreditada mediante una actuación de seguimiento.",
        "Anticipación mediante un proyecto preventivo de alcance nacional sobre el asunto."
      ],
      [
        "La orientación facilita acceso a rutas y derechos.",
        "No se acredita una vulneración que deba mitigarse.",
        "No se justifica un proyecto general por esa sola consulta."
      ],
      "Resolución PGN 132/2014; Guía Preventiva PGN"
    ],
    [
      "Una dependencia diseña una actuación con tres objetivos distintos y envía varios oficios a entidades vigiladas. El informe final solo presenta el número de comunicaciones y no indica si se alcanzó alguno de los objetivos previstos.",
      "¿Qué información permite evaluar mejor el resultado de la gestión preventiva?",
      [
        "Comparar resultados verificables con los objetivos e indicadores definidos para la actuación.",
        "Contar oficios y reuniones para sustituir la medición de resultados previstos.",
        "Registrar únicamente el tiempo empleado por los operadores para completar las actividades."
      ],
      [
        "La evaluación debe vincular productos y resultados con objetivos.",
        "Las comunicaciones son actividades, no necesariamente resultados.",
        "El tiempo es un indicador de gestión parcial."
      ],
      "Resolución PGN 132/2014; Guía Preventiva PGN"
    ],
    [
      "Un equipo preventivo recibe datos de tres entidades sobre un mismo riesgo territorial. Las dependencias utilizan distintas definiciones y fechas de corte, y cada una propone ejecutar requerimientos independientes sobre los mismos hechos.",
      "¿Qué acción de coordinación mejora la gestión dentro del Sistema Integral de Prevención?",
      [
        "Unificar criterios de análisis, distribuir responsabilidades y coordinar los requerimientos necesarios.",
        "Duplicar requerimientos en cada dependencia para aumentar la cobertura documental del riesgo.",
        "Elegir una sola fuente sin revisar las diferencias de definición y corte temporal."
      ],
      [
        "El SIP articula actores y herramientas de gestión.",
        "Duplicar no asegura coordinación ni eficacia.",
        "Las diferencias deben evaluarse antes de consolidar información."
      ],
      "Resolución PGN 132/2014 art. 4"
    ],
    [
      "Un operador dispone de dos instrumentos institucionalmente habilitados para responder a un riesgo: una visita o un requerimiento documental. Ambos son posibles, pero la información necesaria puede obtenerse mediante el requerimiento sin intervención adicional.",
      "¿Qué principio permite escoger razonadamente el instrumento preventivo más adecuado?",
      [
        "Flexibilidad, armonizada con eficacia, economía y las herramientas institucionales vigentes.",
        "Autonomía, entendida como libertad para dejar sin aplicación los procedimientos institucionales.",
        "Oportunidad, entendida como obligación de escoger siempre una visita presencial inmediata."
      ],
      [
        "La flexibilidad permite elegir medios razonables dentro de los procedimientos.",
        "La autonomía no equivale a prescindir de procedimientos.",
        "La oportunidad no impone un instrumento único."
      ],
      "Resolución PGN 132/2014 art. 9.1"
    ],
    [
      "Una dependencia prepara su programación preventiva anual con base únicamente en solicitudes recibidas el año anterior. El análisis territorial revela riesgos emergentes de mayor impacto que no aparecen en aquellas solicitudes históricas.",
      "¿Qué ajuste mejora la planificación de la función preventiva del periodo siguiente?",
      [
        "Incorporar los riesgos emergentes y alinearlos con los planes y prioridades institucionales.",
        "Mantener únicamente asuntos históricos para asegurar comparabilidad entre vigencias institucionales.",
        "Esperar solicitudes ciudadanas sobre cada riesgo antes de incorporarlo a la programación."
      ],
      [
        "La planeación considera riesgos y directrices institucionales.",
        "La comparabilidad no excluye riesgos nuevos.",
        "La actuación preventiva puede iniciarse sin esperar una queja."
      ],
      "Resolución PGN 132/2014 arts. 5, 9.5"
    ],
    [
      "Una actuación de seguimiento evidencia que la entidad vigilada implementó dos controles, pero el tercero no funciona y el riesgo original permanece alto. El cronograma de actividades preventivas ya se ejecutó completamente.",
      "¿Qué elemento debe examinarse al decidir sobre el seguimiento posterior?",
      [
        "La persistencia del riesgo y la necesidad de nuevas medidas competentes y justificadas.",
        "El cumplimiento del cronograma como criterio suficiente para declarar resuelto el riesgo.",
        "La cantidad de controles instalados, sin comprobar si operan efectivamente."
      ],
      [
        "La conclusión depende del resultado y alcance de la actuación.",
        "Ejecutar actividades no demuestra reducción del riesgo.",
        "Un control instalado puede ser ineficaz."
      ],
      "Resolución PGN 132/2014 arts. 5, 9.2; Guía Preventiva PGN"
    ],
    [
      "Una entidad vigilada solicita que la Procuraduría defina por ella el procedimiento interno para atender una alerta. El operador considera que elaborar y aprobar el procedimiento ajeno facilitaría demostrar el cumplimiento de su propio plan preventivo.",
      "¿Qué actuación preserva los límites del modelo de gestión preventiva?",
      [
        "Advertir necesidades de control y evaluar las medidas que adopte la entidad competente.",
        "Aprobar directamente el procedimiento interno en nombre de la entidad vigilada.",
        "Asumir temporalmente la ejecución del procedimiento hasta que desaparezca la alerta."
      ],
      [
        "El seguimiento no sustituye la gestión de la entidad.",
        "Aprobar el procedimiento ajeno implica asumir su competencia.",
        "El plan preventivo no autoriza administrar la entidad."
      ],
      "Constitución art. 277; Resolución PGN 132/2014 art. 9.2"
    ]
  ],
  "pgn-m47": [
    [
      "Dos municipios informan respectivamente 60 y 90 beneficiarios atendidos por una política pública. El primero tiene 75 personas elegibles y el segundo 150; ambos utilizan la misma definición de beneficiario y periodo.",
      "¿Cuál comparación de cobertura resulta apropiada para el informe preventivo?",
      [
        "El primero alcanza 80 % y el segundo 60 % de cobertura.",
        "El segundo tiene mayor cobertura porque atendió a 30 personas adicionales.",
        "Ambos tienen igual cobertura porque comparten la misma definición del indicador."
      ],
      [
        "Se divide atendidos entre población elegible.",
        "El número absoluto no refleja la proporción atendida.",
        "La definición común permite comparar, no iguala los resultados."
      ],
      "Resolución PGN 132/2014; análisis de indicadores"
    ],
    [
      "Una entidad ejecutó todos los talleres de una estrategia para reducir deserción escolar. El reporte no mide si los estudiantes permanecieron en el sistema ni compara el indicador de deserción con la línea base acordada.",
      "¿Qué dato permitiría evaluar el resultado social y no solo el producto?",
      [
        "La variación de la deserción en la población objetivo respecto de la línea base.",
        "La cantidad de talleres y horas de capacitación ejecutadas durante el periodo.",
        "El porcentaje de presupuesto comprometido en la contratación de los talleres."
      ],
      [
        "La deserción mide el resultado buscado.",
        "Los talleres miden productos de la intervención.",
        "El compromiso presupuestal mide recursos, no el efecto social."
      ],
      "Decreto 1499/2017; análisis de cadena de valor"
    ],
    [
      "Un programa aumentó su cobertura del 40 % al 50 % con una población elegible estable. El informe de vigilancia debe explicar el cambio sin confundir la diferencia entre porcentajes con el crecimiento relativo al valor inicial.",
      "¿Cómo debe expresarse correctamente el incremento de la cobertura reportada?",
      [
        "Aumento de diez puntos porcentuales y crecimiento relativo del 25 %.",
        "Aumento de veinticinco puntos porcentuales y crecimiento relativo del 10 %.",
        "Aumento de diez puntos porcentuales y crecimiento relativo del 10 %."
      ],
      [
        "La diferencia es 10 puntos y 10 dividido por 40 es 25 %.",
        "Intercambia las dos medidas.",
        "La variación relativa utiliza como base el 40 %."
      ],
      "Resolución PGN 132/2014; cálculo de indicadores"
    ],
    [
      "Un tablero territorial muestra que las quejas aumentaron tras abrir una plataforma digital de denuncias. No se dispone de una medición independiente de la incidencia real del problema antes y después de habilitar el nuevo canal.",
      "¿Qué inferencia resulta defendible para orientar la vigilancia preventiva?",
      [
        "El aumento puede reflejar cambios de incidencia o de acceso al reporte.",
        "La plataforma causó el aumento de los hechos porque ambos cambios coinciden.",
        "La incidencia disminuyó porque la entidad cuenta con más canales de denuncia."
      ],
      [
        "El registro de quejas depende también de la propensión a reportar.",
        "La coincidencia temporal no acredita causalidad.",
        "La existencia de canales no demuestra reducción del problema."
      ],
      "Resolución PGN 132/2014; análisis de riesgos"
    ],
    [
      "Un informe calcula el cumplimiento de una meta con registros de atención. Los datos incluyen solicitudes repetidas de una misma persona, aunque la ficha del indicador define como unidad de medida a los beneficiarios únicos.",
      "¿Qué ajuste debe realizarse antes de validar el indicador de cumplimiento?",
      [
        "Identificar beneficiarios únicos conforme a la definición y documentar las deduplicaciones.",
        "Mantener todas las solicitudes porque cada trámite representa una actividad institucional realizada.",
        "Eliminar aleatoriamente registros hasta alcanzar el valor esperado en la meta."
      ],
      [
        "La unidad definida es la persona única, no el trámite.",
        "El conteo de actividades corresponde a otro indicador.",
        "La eliminación arbitraria altera el soporte del cálculo."
      ],
      "Decreto 1499/2017; calidad de datos"
    ],
    [
      "La entidad reporta un riesgo de interrupción del servicio por fallas de suministro. Existe un protocolo de contingencia formalmente aprobado, pero las pruebas muestran que el personal no conoce cómo activarlo ante una interrupción.",
      "¿Qué diferencia debe reconocer el operador al valorar ese control institucional?",
      [
        "Distinguir diseño del control y funcionamiento efectivo antes de estimar el riesgo residual.",
        "Considerar eliminado el riesgo porque existe un protocolo aprobado por la autoridad.",
        "Clasificar el riesgo como inevitable y omitir cualquier valoración de los controles existentes."
      ],
      [
        "Un control documentado puede no operar en la práctica.",
        "La aprobación formal no demuestra efectividad.",
        "La deficiencia permite examinar acciones de mejora."
      ],
      "Decreto 1499/2017; Resolución PGN 132/2014 art. 9"
    ],
    [
      "Una oficina compara la tasa mensual de atención en zonas urbanas y rurales. En la zona rural hay solo cinco solicitudes y en la urbana quinientas, por lo que una sola atención cambia considerablemente la tasa rural.",
      "¿Qué cautela permite interpretar esa diferencia territorial de manera responsable?",
      [
        "Presentar los denominadores y advertir la sensibilidad del resultado al pequeño tamaño rural.",
        "Promediar las tasas con igual peso y atribuir el resultado a toda la población.",
        "Descartar automáticamente los resultados rurales por tener menos observaciones que los urbanos."
      ],
      [
        "El denominador contextualiza la estabilidad de cada tasa.",
        "El promedio simple no representa necesariamente el total.",
        "Un grupo pequeño puede conservar relevancia preventiva."
      ],
      "Resolución PGN 132/2014; análisis de indicadores"
    ],
    [
      "Un municipio informa una ejecución presupuestal del 95 % para un proyecto de acceso a agua. La cobertura efectiva del servicio continúa por debajo de la meta y no se han verificado las obras que están en operación.",
      "¿Qué enfoque corresponde al control preventivo de gestión en este supuesto?",
      [
        "Contrastar recursos, productos operativos y cobertura efectiva frente a las metas.",
        "Concluir cumplimiento integral por el porcentaje de ejecución presupuestal informado.",
        "Declarar responsabilidad individual por la diferencia entre ejecución financiera y cobertura."
      ],
      [
        "Los recursos y los resultados deben analizarse separadamente.",
        "La ejecución financiera no garantiza resultados.",
        "Una desviación no prueba responsabilidad individual."
      ],
      "Decreto 1499/2017; Resolución PGN 132/2014 art. 5"
    ],
    [
      "Una matriz identifica un riesgo de afectación de derechos con alta probabilidad y alto impacto. La entidad plantea sustituir su valoración por el número de quejas recibidas, aunque el servicio apenas comenzará el mes siguiente.",
      "¿Qué criterio debe conservarse para priorizar el riesgo antes de su materialización?",
      [
        "Evaluar probabilidad e impacto con los datos y controles disponibles.",
        "Reducir la prioridad mientras no se registren quejas sobre el servicio.",
        "Asignar prioridad únicamente según el volumen histórico de comunicaciones institucionales."
      ],
      [
        "La priorización considera potencial de vulneración y magnitud del riesgo.",
        "La ausencia de quejas no implica ausencia de riesgo.",
        "El volumen de comunicaciones no mide por sí solo impacto."
      ],
      "Resolución PGN 132/2014 arts. 5, 9.5"
    ]
  ],
  "pgn-m48": [
    [
      "En un proceso de nulidad contractual ante la jurisdicción contenciosa, el agente del Ministerio Público identifica una cuestión que podría afectar recursos públicos. Las partes no han planteado esa cuestión en sus escritos previos.",
      "¿Qué finalidad legitima examinar una intervención dentro del proceso judicial?",
      [
        "Defender el patrimonio público mediante las facultades procesales legalmente previstas.",
        "Representar automáticamente a la entidad demandada como su apoderado judicial.",
        "Reemplazar al juez en la valoración definitiva de la legalidad contractual."
      ],
      [
        "La defensa patrimonial es finalidad del Ministerio Público.",
        "El agente no es necesariamente abogado de la entidad.",
        "La decisión judicial corresponde al juez."
      ],
      "CPACA art. 303; Constitución art. 277.7"
    ],
    [
      "Un procurador judicial recibe un expediente contencioso y advierte que falta una prueba relevante para esclarecer un posible detrimento del patrimonio público. El trámite permite solicitar su decreto dentro de la oportunidad correspondiente.",
      "¿Qué actuación puede promover el agente del Ministerio Público en ese supuesto?",
      [
        "Solicitar la prueba justificando su relación con la finalidad de la intervención.",
        "Decretar por sí mismo la prueba y ordenar su práctica al despacho judicial.",
        "Abrir obligatoriamente una investigación disciplinaria antes de solicitar cualquier medio probatorio."
      ],
      [
        "La intervención permite formular solicitudes procesales pertinentes.",
        "El decreto corresponde a la autoridad judicial.",
        "La intervención no depende de una apertura disciplinaria."
      ],
      "CPACA art. 303"
    ],
    [
      "Un juzgado administrativo recibe un concepto del Ministerio Público que solicita declarar la nulidad de un acto. El juez analiza los argumentos y considera jurídicamente procedente una conclusión distinta al concepto presentado por el agente.",
      "¿Qué efecto tiene el concepto sobre la competencia decisoria del juzgado?",
      [
        "Es un aporte procesal que el juez valora sin quedar sustituido por el agente.",
        "Es una orden vinculante que obliga al juez a acoger la solicitud formulada.",
        "Es una decisión administrativa que anula directamente el acto objeto del proceso."
      ],
      [
        "El Ministerio Público interviene, pero no decide el litigio.",
        "El concepto no predetermina el sentido judicial.",
        "No produce directamente la nulidad solicitada."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ],
    [
      "Una entidad pública solicita al agente del Ministerio Público que defienda su posición en un litigio aunque el análisis del expediente revela que esa posición podría afectar derechos fundamentales protegidos por el ordenamiento jurídico.",
      "¿Qué criterio debe orientar la posición institucional del agente que interviene?",
      [
        "Defender el orden jurídico y los derechos, con independencia de la postura de la entidad.",
        "Respaldar la posición de la entidad pública por el solo carácter estatal de esta.",
        "Abstenerse de intervenir cuando su posición difiera de la administración demandada."
      ],
      [
        "La intervención se orienta por las finalidades constitucionales.",
        "El carácter público no exige adhesión a su posición.",
        "La discrepancia no excluye intervención legalmente habilitada."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ],
    [
      "Un juez administrativo aprueba un acuerdo conciliatorio que, según el agente del Ministerio Público, puede comprometer injustificadamente recursos públicos. El agente está legitimado y aún se encuentra en la oportunidad procesal pertinente.",
      "¿Qué facultad específica reconoce el CPACA frente a esa providencia judicial?",
      [
        "Interponer el recurso procedente contra el auto que aprueba la conciliación.",
        "Revocar directamente el auto mediante una resolución de la Procuraduría.",
        "Imponer al juez una sanción como requisito previo para cuestionar el acuerdo."
      ],
      [
        "El art. 303 contempla recurrir autos sobre conciliación judicial.",
        "La revocación judicial no corresponde al agente.",
        "Recurrir no exige sancionar al juez."
      ],
      "CPACA art. 303"
    ],
    [
      "En un proceso contencioso se demanda una actuación estatal. El agente del Ministerio Público analiza si puede participar como sujeto procesal especial, aunque la entidad pública ya cuenta con apoderado y el ciudadano demandante también.",
      "¿Qué condición justifica esa intervención adicional conforme al régimen contencioso?",
      [
        "La protección del orden jurídico, patrimonio público o derechos y garantías fundamentales.",
        "La ausencia de representante judicial de alguna de las partes del proceso.",
        "La autorización previa de ambos litigantes para que participe el agente institucional."
      ],
      [
        "La ley reconoce una función especial ligada a intereses protegidos.",
        "No es sustitución de abogados ausentes.",
        "La habilitación no depende del consentimiento de las partes."
      ],
      "CPACA art. 303"
    ],
    [
      "Un operador preventivo identifica un riesgo en la ejecución de una obra; paralelamente un procurador judicial interviene en un litigio relacionado con el contrato. Un equipo propone unificar las dos actuaciones para que una recomendación preventiva decida el litigio.",
      "¿Cómo deben articularse las funciones frente a los hechos que comparten?",
      [
        "Coordinar información pertinente sin confundir sus procedimientos ni efectos jurídicos.",
        "Convertir las recomendaciones preventivas en decisiones vinculantes dentro del proceso judicial.",
        "Suspender la intervención judicial hasta que se cierre toda actuación preventiva relacionada."
      ],
      [
        "Las funciones tienen finalidades y competencias diferenciadas.",
        "La recomendación no decide el litigio.",
        "No se exige cierre preventivo como condición general."
      ],
      "Constitución art. 277; Decreto Ley 262/2000"
    ],
    [
      "Un profesional prepara un concepto para una intervención judicial. La documentación muestra hechos favorables y desfavorables a la pretensión que inicialmente consideró viable, y existen disposiciones especiales que regulan el procedimiento.",
      "¿Qué método permite construir una posición institucional sustentada y verificable?",
      [
        "Examinar ambas clases de hechos, las normas aplicables y la finalidad de intervención.",
        "Seleccionar únicamente los soportes que favorecen la posición inicial para fortalecer el concepto.",
        "Aplicar la regla general sin examinar la regulación especial del procedimiento judicial."
      ],
      [
        "La posición debe fundarse en hechos y derecho aplicables.",
        "Omitir datos relevantes debilita su justificación.",
        "La regla especial requiere examen propio."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ],
    [
      "Un agente pretende solicitar una medida dentro de un proceso judicial para proteger un derecho fundamental. El expediente contiene la prueba del riesgo, pero la decisión que resuelve la medida se encuentra atribuida por ley a la autoridad judicial.",
      "¿Qué diferencia debe conservar el profesional al redactar la solicitud de intervención?",
      [
        "Motivar la petición al juez sin emitir una decisión ejecutoria sobre la medida.",
        "Emitir la medida directamente y pedir al juez que ratifique su ejecución.",
        "Limitarse a registrar el riesgo sin formular una solicitud procesal permitida."
      ],
      [
        "La intervención promueve decisiones dentro de la competencia judicial.",
        "El agente no sustituye al juez.",
        "La existencia de una facultad permite ejercerla motivadamente."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ]
  ],
  "pgn-m49": [
    [
      "Una ciudadana con discapacidad visual solicita consultar una respuesta de la Procuraduría que solo está disponible como imagen escaneada sin texto accesible. La oficina conserva el documento original y puede generar una versión equivalente legible por lector de pantalla.",
      "¿Qué ajuste permite garantizar acceso efectivo a la respuesta institucional?",
      [
        "Facilitar una versión accesible que conserve el contenido y proteja los datos correspondientes.",
        "Exigir que otra persona lea el documento porque el original ya fue publicado.",
        "Sustituir la respuesta completa por un resumen verbal sin acceso al contenido solicitado."
      ],
      [
        "El acceso a información exige eliminar barreras de comunicación.",
        "Publicar no garantiza accesibilidad real.",
        "El resumen no reemplaza necesariamente el contenido completo."
      ],
      "Ley 1618/2013 arts. 14 y 16"
    ],
    [
      "Una petición solicita reconocimiento de un derecho fundamental y aporta prueba sumaria de titularidad y de un riesgo de perjuicio irremediable. La oficina la registra como solicitud ordinaria y propone tramitarla únicamente por orden cronológico.",
      "¿Qué tratamiento dispone la ley ante las circunstancias acreditadas en esa petición?",
      [
        "Dar atención prioritaria por el riesgo de perjuicio irremediable invocado y sustentado.",
        "Aplicar exclusivamente el orden de recepción porque toda petición tiene igual prioridad.",
        "Exigir sentencia judicial previa que declare el perjuicio para admitir prioridad."
      ],
      [
        "El art. 20 prevé prioridad con prueba sumaria de ambos presupuestos.",
        "La igualdad no impide la prioridad legal.",
        "No se requiere sentencia previa."
      ],
      "Ley 1755/2015 art. 20"
    ],
    [
      "Un ciudadano acude a la entidad con una petición que evidencia peligro inminente para su vida por razones de salud. La autoridad cuenta con facultades inmediatas para atender parte de la emergencia mientras tramita la petición de fondo.",
      "¿Qué actuación exige el régimen de atención prioritaria en esa situación?",
      [
        "Adoptar de inmediato las medidas urgentes necesarias dentro de competencia, sin omitir el trámite.",
        "Esperar la respuesta definitiva de la petición antes de considerar las medidas urgentes.",
        "Remitir la petición y suspender cualquier medida que la autoridad sí pueda adoptar."
      ],
      [
        "El art. 20 exige medidas inmediatas para conjurar el peligro.",
        "El trámite ordinario no sustituye la protección urgente.",
        "La remisión no elimina competencias propias."
      ],
      "Ley 1755/2015 art. 20"
    ],
    [
      "Una oficina publica resultados de atención a personas vulnerables y dispone de una base con nombres, condiciones de salud y direcciones. La finalidad estadística puede satisfacerse mediante conteos agregados sin identificar a los usuarios.",
      "¿Qué tratamiento permite informar resultados sin divulgar datos sensibles innecesarios?",
      [
        "Publicar datos agregados y restringir el acceso a la información identificable según finalidad.",
        "Publicar la base nominativa porque todos los registros provienen de una entidad pública.",
        "Eliminar toda estadística de atención porque cualquier dato de salud impide generar informes."
      ],
      [
        "La finalidad estadística no requiere divulgar identidades en ese supuesto.",
        "El origen estatal no convierte los datos sensibles en públicos.",
        "La agregación permite informar sin exposición innecesaria."
      ],
      "Ley 1581/2012 arts. 4–6"
    ],
    [
      "Una persona sorda desea radicar una queja directamente y solicita atención en una modalidad de comunicación que utiliza. La oficina propone que un familiar responda por ella, aunque puede facilitar un canal accesible y respetar su autonomía.",
      "¿Qué alternativa garantiza el ejercicio autónomo del derecho a presentar la queja?",
      [
        "Ofrecer el ajuste de comunicación solicitado o una alternativa accesible acordada con la persona.",
        "Exigir representación familiar como condición general para recibir la queja de la persona.",
        "Recibir exclusivamente por el canal oral habitual para mantener igualdad entre usuarios."
      ],
      [
        "Los ajustes razonables favorecen autonomía e igualdad material.",
        "La discapacidad no implica necesidad automática de representación.",
        "El trato idéntico puede mantener barreras."
      ],
      "Ley 1618/2013 arts. 14 y 16"
    ],
    [
      "Una autoridad requiere datos personales para ejercer una función legal específica. El equipo que recibe la información propone utilizarlos después para un informe público identificable cuya finalidad no está relacionada con el requerimiento original.",
      "¿Qué límite subsiste aunque la autorización del titular no sea exigible para el requerimiento?",
      [
        "Respetar finalidad, acceso restringido y demás principios del tratamiento de datos.",
        "Usar la información para cualquier finalidad institucional por existir una excepción a la autorización.",
        "Publicar los datos siempre que se omita mencionar la entidad que los suministró."
      ],
      [
        "La excepción de autorización no elimina principios ni finalidad.",
        "No constituye autorización general de reutilización.",
        "Ocultar la entidad de origen no protege al titular."
      ],
      "Ley 1581/2012 arts. 4 y 10"
    ],
    [
      "Una mujer relata hechos de posible acoso sexual laboral y solicita orientación. Dos dependencias necesitan coordinar la ruta de atención; ambas pueden acceder a la información autorizada sin exigir que repita íntegramente su relato ante cada funcionario.",
      "¿Qué práctica protege mejor su dignidad y reduce el riesgo de revictimización?",
      [
        "Coordinar la ruta y compartir únicamente la información necesaria por canales autorizados.",
        "Exigir un relato completo ante cada dependencia para garantizar versiones independientes de atención.",
        "Divulgar su identidad al conjunto del equipo institucional para facilitar futuras consultas."
      ],
      [
        "La coordinación reduce exposición y repetición innecesarias.",
        "La atención no exige multiplicar relatos sin finalidad.",
        "La confidencialidad limita accesos a datos personales."
      ],
      "Ley 2365/2024; Ley 1581/2012 art. 4"
    ],
    [
      "Una entidad diseña una plataforma de atención exclusivamente en línea. En una zona rural existen usuarios que carecen de conectividad y otros que requieren ajustes de accesibilidad. El servicio puede ofrecer alternativas equivalentes de radicación.",
      "¿Qué diseño permite reducir las barreras objetivas sin alterar los requisitos legales del trámite?",
      [
        "Mantener canales alternativos accesibles y ofrecer orientación según las necesidades concretas.",
        "Exigir únicamente la plataforma digital para aplicar el mismo procedimiento a toda persona.",
        "Exonerar a todos los usuarios rurales de cualquier requisito legal del trámite solicitado."
      ],
      [
        "La igualdad material requiere acceso efectivo a los canales.",
        "El canal único puede excluir a parte de la población.",
        "La accesibilidad no elimina requisitos legales."
      ],
      "Ley 1618/2013 arts. 14 y 16; Constitución art. 13"
    ],
    [
      "Una petición escrita de una persona vulnerable llega a una dependencia que carece de competencia. Existe una autoridad competente identificada y el ciudadano aporta datos de contacto suficientes para recibir información sobre el trámite de traslado.",
      "¿Qué gestión corresponde ante la falta de competencia sin abandonar la atención diferencial?",
      [
        "Informar y remitir a la autoridad competente dentro del plazo legal aplicable.",
        "Conservar la petición sin remitirla porque la persona requiere atención especial.",
        "Responder negativamente de fondo aunque la dependencia no tenga competencia material."
      ],
      [
        "El art. 21 exige informar y remitir oportunamente.",
        "La vulnerabilidad no suprime la regla de competencia.",
        "La falta de competencia no autoriza decidir el fondo."
      ],
      "Ley 1755/2015 art. 21"
    ]
  ],
  "pgn-m50": [
    [
      "Una alcaldía necesita comprar equipos de cómputo y el área solicitante propone celebrar el contrato con una empresa conocida antes de identificar las características del objeto, su valor y la modalidad legal que corresponde. No existe causal especial de contratación directa.",
      "¿Qué debe examinar primero el profesional que realiza vigilancia preventiva?",
      [
        "La justificación de la necesidad, estudios previos y modalidad legal de selección.",
        "La experiencia previa con el proveedor como fundamento autónomo de contratación directa.",
        "La disponibilidad del proveedor para entregar antes de formalizar la planeación contractual."
      ],
      [
        "La planeación precede a la selección y sustenta el procedimiento.",
        "La experiencia no configura por sí sola causal directa.",
        "La rapidez no sustituye estudios ni modalidad."
      ],
      "Ley 80/1993 arts. 24–26; Ley 1150/2007 art. 2"
    ],
    [
      "Una entidad sometida al Estatuto General proyecta contratar una obra cuyo valor supera su menor cuantía. No concurre una causal de selección abreviada, concurso de méritos, contratación directa ni otra excepción legal al procedimiento general.",
      "¿Qué modalidad corresponde bajo las circunstancias expresamente descritas en el caso?",
      [
        "Licitación pública como regla general de escogencia del contratista.",
        "Selección abreviada por el solo hecho de tratarse de una obra pública.",
        "Contratación directa porque la entidad ya dispone del presupuesto necesario."
      ],
      [
        "La licitación es regla general cuando no opera excepción.",
        "La obra no configura por sí misma causal abreviada.",
        "Tener recursos no habilita modalidad directa."
      ],
      "Ley 1150/2007 art. 2"
    ],
    [
      "Una entidad necesita contratar estudios de consultoría técnica especializada para formular un proyecto. Se cumplen los presupuestos de la modalidad y no existe causal especial que autorice una contratación diferente; el objeto no consiste en ejecutar la obra.",
      "¿Qué modalidad corresponde a la selección del consultor en ese supuesto?",
      [
        "Concurso de méritos, atendiendo la naturaleza del objeto de consultoría.",
        "Licitación pública, porque todo estudio técnico equivale a ejecución material de obra.",
        "Selección abreviada, porque los servicios profesionales tienen características técnicas uniformes."
      ],
      [
        "La consultoría se selecciona mediante concurso de méritos bajo esos presupuestos.",
        "Estudiar y ejecutar obra son objetos diferentes.",
        "La especialidad técnica no equivale a uniformidad."
      ],
      "Ley 80/1993 art. 32.2; Ley 1150/2007 art. 2.3"
    ],
    [
      "Una entidad sometida al régimen general requiere adquirir bienes cuyo valor estimado corresponde al ocho por ciento de su menor cuantía. No existe instrumento de compra obligatorio, causal de régimen especial ni otro supuesto que altere la regla aplicable.",
      "¿Qué modalidad corresponde en razón de ese valor y los presupuestos descritos?",
      [
        "Mínima cuantía por no superar el diez por ciento de la menor cuantía.",
        "Selección abreviada de menor cuantía por estar debajo del límite presupuestal general.",
        "Contratación directa porque el valor reducido elimina la necesidad de selección competitiva."
      ],
      [
        "El umbral legal de mínima cuantía es hasta el 10 % de menor cuantía.",
        "El límite específico prevalece en el supuesto.",
        "El bajo valor no autoriza por sí solo contratación directa."
      ],
      "Ley 1150/2007 art. 2.5"
    ],
    [
      "En un contrato estatal ordinario y escrito, las partes acuerdan objeto y contraprestación y suscriben el documento. Todavía no se han cumplido los requisitos presupuestales de ejecución ni aprobado la garantía exigible según el contrato.",
      "¿Qué diferencia debe identificar el profesional al examinar el estado del contrato?",
      [
        "El contrato está perfeccionado, pero aún faltan requisitos para iniciar su ejecución.",
        "El contrato no existe jurídicamente hasta aprobar la garantía exigida para su ejecución.",
        "El contrato puede ejecutarse inmediatamente porque las partes ya firmaron el documento."
      ],
      [
        "El acuerdo escrito sobre objeto y contraprestación perfecciona el contrato.",
        "La garantía de ejecución no es requisito de perfeccionamiento.",
        "La firma no sustituye requisitos de ejecución."
      ],
      "Ley 80/1993 art. 41"
    ],
    [
      "Una entidad quiere incorporar obligaciones adicionales por un valor equivalente al sesenta por ciento del valor inicial de un contrato ordinario. El cálculo está expresado en salarios mínimos legales mensuales y no concurre una excepción legal.",
      "¿Qué límite debe advertir el operador al revisar la propuesta de adición?",
      [
        "La adición supera el límite general del cincuenta por ciento del valor inicial.",
        "La adición es válida si el contratista acepta por escrito el nuevo valor.",
        "La adición no está limitada cuando existe disponibilidad presupuestal para financiarla."
      ],
      [
        "La ley establece un máximo general del 50 % expresado en salarios mínimos.",
        "El acuerdo no elimina la restricción legal.",
        "La disponibilidad presupuestal es un requisito diferente."
      ],
      "Ley 80/1993 art. 40 parágrafo"
    ],
    [
      "Una emergencia pone en riesgo la continuidad inmediata de un servicio esencial. La entidad acredita circunstancias que impiden acudir a procedimientos ordinarios de selección y elabora un acto motivado en el que identifica las razones de la urgencia.",
      "¿Qué figura puede habilitar la contratación directa en esas circunstancias acreditadas?",
      [
        "La urgencia manifiesta, declarada mediante acto administrativo motivado conforme a la ley.",
        "La mínima cuantía, sin importar el valor estimado de los contratos requeridos.",
        "La selección abreviada, porque toda emergencia debe resolverse mediante esa modalidad."
      ],
      [
        "La urgencia manifiesta tiene presupuestos y declaración motivada.",
        "La emergencia no cambia por sí sola el umbral de mínima cuantía.",
        "La causal descrita permite contratación directa."
      ],
      "Ley 80/1993 arts. 42–43; Ley 1150/2007 art. 2.4"
    ],
    [
      "Una auditoría identifica que los estudios previos contienen un presupuesto global sin soporte del análisis económico, a pesar de que la entidad disponía de información de mercado antes de abrir el procedimiento ordinario de contratación.",
      "¿Qué riesgo debe examinarse antes de emitir una conclusión preventiva sobre la contratación?",
      [
        "La suficiencia del análisis del valor estimado y de las fuentes que lo sustentan.",
        "La responsabilidad disciplinaria definitiva de todos los funcionarios que firmaron los estudios.",
        "La validez de la adjudicación exclusivamente a partir del saldo presupuestal disponible."
      ],
      [
        "El estudio debe sustentar el valor estimado según el régimen aplicable.",
        "La deficiencia no determina automáticamente responsabilidad personal.",
        "El saldo no demuestra razonabilidad económica."
      ],
      "Decreto 1082/2015 art. 2.2.1.1.2.1.1"
    ],
    [
      "Una entidad proyecta declarar desierto un proceso de selección porque el funcionario prefiere otra marca de equipos. Las ofertas recibidas cumplen los requisitos publicados y no se acredita ninguna circunstancia que impida la escogencia objetiva.",
      "¿Qué límite debe observar la entidad al adoptar una eventual declaratoria desierta?",
      [
        "Fundarla en razones que impidan la selección objetiva y motivarlas expresamente.",
        "Declararla por conveniencia del funcionario aunque exista una oferta objetivamente elegible.",
        "Cambiar informalmente los criterios publicados para justificar que ninguna oferta cumple."
      ],
      [
        "La declaratoria desierta exige causas que impidan escoger objetivamente.",
        "La preferencia personal no constituye justificación legal.",
        "Modificar informalmente criterios afecta transparencia e igualdad."
      ],
      "Ley 80/1993 art. 25.18"
    ]
  ],
  "pgn-m51": [
    [
      "En un proceso ordinario para adquirir equipos, la entidad exige una certificación de experiencia que solo tiene un proveedor. No se acredita que sea necesaria para el objeto ni proporcional a su complejidad y riesgos contractuales.",
      "¿Qué debe solicitar la Procuraduría en ejercicio de una actuación preventiva competente?",
      [
        "Justificación técnica y proporcionalidad del requisito frente al objeto y condiciones del mercado.",
        "La adjudicación al proveedor con certificación para respetar el requisito inicialmente publicado.",
        "La exclusión definitiva del proveedor certificado porque el requisito evidencia por sí solo corrupción."
      ],
      [
        "La selección objetiva requiere condiciones relacionadas con objeto y valor.",
        "La publicación no subsana una exigencia desproporcionada.",
        "Una alerta no demuestra corrupción ni habilita excluir sin causa."
      ],
      "Ley 1150/2007 art. 5; Decreto 1082/2015"
    ],
    [
      "En una licitación se exige experiencia como requisito habilitante y no como factor de puntuación. Un proponente omitió el documento que demuestra experiencia adquirida antes del cierre y la entidad debe resolver si puede solicitar su acreditación.",
      "¿Qué tratamiento corresponde a esa omisión documental bajo la regla general de subsanación?",
      [
        "Solicitar la subsanación oportuna de la acreditación sin permitir hechos posteriores al cierre.",
        "Rechazar inmediatamente la oferta porque toda omisión documental es un incumplimiento insubsanable.",
        "Permitir que el proponente adquiera la experiencia después del cierre y la acredite."
      ],
      [
        "La falta de documento no puntuable puede subsanarse dentro de las reglas legales.",
        "No toda omisión exige rechazo inmediato.",
        "No pueden acreditarse circunstancias ocurridas después del cierre."
      ],
      "Ley 1150/2007 art. 5 parágrafo 1"
    ],
    [
      "Un proponente presenta su oferta en una licitación donde se exige garantía de seriedad. Al revisar los documentos de cierre se comprueba que no entregó ninguna garantía junto con la propuesta, aunque después ofrece aportarla.",
      "¿Qué consecuencia establece la ley para la ausencia total de esa garantía al presentar la propuesta?",
      [
        "Rechazar la oferta porque la no entrega junto con la propuesta es insubsanable.",
        "Solicitar la garantía durante el plazo general de subsanación de requisitos no puntuables.",
        "Aceptar la oferta si el proponente aporta la garantía antes de firmar el contrato."
      ],
      [
        "La ley excluye expresamente la subsanación de la no entrega.",
        "La regla general cede ante esta excepción.",
        "Aportarla al firmar no corrige la omisión inicial."
      ],
      "Ley 1150/2007 art. 5 parágrafo 3"
    ],
    [
      "Una entidad prepara una selección de bienes de características técnicas uniformes y de común utilización bajo la modalidad correspondiente. El área evaluadora propone otorgar puntos adicionales por relaciones comerciales previas con la entidad.",
      "¿Qué factor debe aplicarse conforme al régimen de evaluación de esos bienes uniformes?",
      [
        "El menor precio entre las ofertas que cumplen los requisitos establecidos para el proceso.",
        "La experiencia anterior con la entidad como factor que prevalece sobre el menor precio.",
        "La preferencia por proveedores conocidos para reducir el riesgo de gestión del contrato."
      ],
      [
        "La ley establece el menor precio como factor de evaluación de estos bienes.",
        "La experiencia no sustituye el criterio específico aplicable.",
        "La familiaridad no es criterio objetivo de escogencia."
      ],
      "Ley 1150/2007 art. 5.3"
    ],
    [
      "En un proceso competitivo la entidad detecta antes del cierre un error material en las especificaciones que puede cambiar la preparación de las ofertas. Existe tiempo legal para modificar los documentos del proceso y comunicar a los interesados.",
      "¿Cómo debe gestionarse la modificación de las reglas de selección antes de recibir ofertas?",
      [
        "Expedir y publicar la adenda correspondiente dentro de los límites temporales aplicables.",
        "Comunicar el cambio exclusivamente a quienes ya formularon observaciones a los documentos.",
        "Aplicar la especificación corregida sin publicación cuando se realice la evaluación de ofertas."
      ],
      [
        "La modificación exige publicidad y respeto de las reglas de adendas.",
        "La comunicación selectiva afecta igualdad de información.",
        "La evaluación no puede aplicar reglas ocultas."
      ],
      "Decreto 1082/2015 art. 2.2.1.1.2.2.1"
    ],
    [
      "Una invitación de mínima cuantía contiene condiciones técnicas verificables. La oferta de menor precio incumple un requisito técnico sustancial y no puede subsanarse sin modificar la oferta; la siguiente sí cumple todos los requisitos exigidos.",
      "¿Cómo procede la entidad al verificar las ofertas en esa modalidad?",
      [
        "Verificar sucesivamente las ofertas según precio hasta identificar la que cumple los requisitos.",
        "Aceptar la de menor precio aunque no cumpla las especificaciones técnicas exigidas.",
        "Asignar puntos técnicos adicionales a cada oferta y elegir la mayor puntuación total."
      ],
      [
        "El menor precio se acepta si satisface condiciones exigidas.",
        "El precio no elimina cumplimiento técnico.",
        "La modalidad no se convierte en concurso por puntaje técnico."
      ],
      "Decreto 1082/2015 art. 2.2.1.2.1.5.2"
    ],
    [
      "Una entidad publica una licitación con requisitos y factores de evaluación definidos. Después del cierre advierte que un criterio puntuable favorece a otro proponente y propone cambiar su ponderación en el informe de evaluación.",
      "¿Qué límite protege la selección objetiva frente a ese cambio posterior al cierre?",
      [
        "Evaluar todas las ofertas con los factores y ponderaciones válidamente establecidos.",
        "Modificar la ponderación si el comité considera que produce una mejor decisión técnica.",
        "Aplicar la ponderación nueva solo a las ofertas cuyos precios excedan el presupuesto estimado."
      ],
      [
        "La evaluación se sujeta a reglas previamente conocidas.",
        "La conveniencia posterior no autoriza cambiar factores.",
        "El trato desigual carece de fundamento en ese supuesto."
      ],
      "Ley 80/1993 art. 24; Ley 1150/2007 art. 5"
    ],
    [
      "Un proceso de contratación requiere identificar riesgos de transporte, entrega y disponibilidad de equipos. Los estudios previos describen solamente el objeto y el precio, sin examinar la asignación de riesgos previsibles de la operación.",
      "¿Qué aspecto de la planeación debe incorporarse antes de avanzar en el proceso?",
      [
        "Tipificar, estimar y asignar los riesgos previsibles según el régimen aplicable.",
        "Trasladar automáticamente todos los riesgos al contratista sin analizar su origen o control.",
        "Omitir la asignación porque cualquier riesgo se resuelve durante la ejecución del contrato."
      ],
      [
        "La planeación debe considerar los riesgos previsibles y su asignación.",
        "Asignar indiscriminadamente no sustituye el análisis.",
        "La ejecución no reemplaza planeación."
      ],
      "Ley 1150/2007 art. 4; Decreto 1082/2015"
    ],
    [
      "Una entidad recibe dos ofertas para un proceso con criterios técnicos y económicos ponderados según reglas publicadas. Una de ellas es más barata, pero la otra obtiene mayor puntaje total conforme a la fórmula y ambas están habilitadas.",
      "¿Qué criterio corresponde aplicar para identificar la oferta más favorable en ese régimen?",
      [
        "La ponderación de calidad y precio establecida, sin privilegiar automáticamente el menor precio.",
        "El menor precio en todo caso, porque cualquier diferencia económica prevalece sobre la calidad.",
        "La oferta con mejor calidad técnica, sin utilizar la ponderación económica publicada."
      ],
      [
        "La modalidad descrita exige aplicar la ponderación prevista.",
        "El menor precio no es factor exclusivo en todos los procesos.",
        "La calidad sola tampoco reemplaza la fórmula."
      ],
      "Ley 1150/2007 art. 5.2"
    ]
  ],
  "pgn-m52": [
    [
      "Una entidad contrata un servicio que no requiere conocimiento especializado para su seguimiento y dispone de personal idóneo. El ordenador del gasto debe establecer el mecanismo de vigilancia permanente sobre el cumplimiento de las obligaciones del contratista.",
      "¿Qué figura corresponde al seguimiento ejercido directamente por la entidad en este supuesto?",
      [
        "Supervisión contractual con seguimiento técnico, administrativo, financiero, contable y jurídico.",
        "Interventoría externa obligatoria para todos los contratos celebrados por entidades públicas.",
        "Control disciplinario preventivo ejercido por Procuraduría como reemplazo de la supervisión."
      ],
      [
        "La supervisión es ejercida por la propia entidad.",
        "No toda contratación exige interventoría.",
        "La PGN no reemplaza el deber contractual de seguimiento."
      ],
      "Ley 1474/2011 art. 83"
    ],
    [
      "Una obra requiere un seguimiento técnico especializado que supera la capacidad del personal de planta. La entidad examina contratar a una persona externa para verificar aspectos técnicos específicos durante la ejecución, sin transferir la decisión administrativa contractual.",
      "¿Qué figura permite contratar ese seguimiento especializado cuando está justificado?",
      [
        "Interventoría, mediante un contrato que delimite las actividades de seguimiento correspondientes.",
        "Supervisión interna, delegando exclusivamente en el contratista principal la verificación técnica.",
        "Control fiscal posterior como mecanismo sustitutivo de la vigilancia permanente del contrato."
      ],
      [
        "La interventoría se contrata cuando exige conocimiento especializado u otra justificación legal.",
        "El contratista no debe sustituir la verificación independiente.",
        "El control fiscal no reemplaza seguimiento contractual."
      ],
      "Ley 1474/2011 art. 83"
    ],
    [
      "La entidad contrata interventoría técnica de una obra y conserva el seguimiento administrativo y financiero mediante un supervisor. El contrato de interventoría delimita expresamente sus tareas y la entidad asigna las restantes responsabilidades de seguimiento.",
      "¿Qué regla permite esa distribución del seguimiento entre supervisor e interventor?",
      [
        "Dividir la vigilancia delimitando las actividades del interventor y las restantes del supervisor.",
        "Asignar indistintamente todas las actividades a ambos sin definir responsabilidades individuales.",
        "Excluir al supervisor de toda vigilancia desde el momento en que exista interventoría técnica."
      ],
      [
        "El art. 83 permite división expresa del seguimiento.",
        "La concurrencia no justifica duplicidad indefinida de funciones.",
        "La entidad puede conservar tareas de seguimiento."
      ],
      "Ley 1474/2011 art. 83"
    ],
    [
      "Un proveedor presenta una factura por cien equipos. El supervisor solo ha verificado físicamente ochenta y no dispone de soporte de entrega de los restantes; el contrato exige recepción completa para certificar el cumplimiento facturado.",
      "¿Qué actuación corresponde antes de emitir el certificado de cumplimiento de esa obligación?",
      [
        "Documentar lo efectivamente recibido y requerir aclaración o cumplimiento de lo faltante.",
        "Certificar los cien equipos según factura y completar la verificación en la liquidación.",
        "Negar definitivamente toda obligación de pago sin evaluar el alcance contractual ni los soportes."
      ],
      [
        "Certificar exige evidencia de cumplimiento según las obligaciones pactadas.",
        "La factura no acredita recepción material completa.",
        "Debe evaluarse el soporte y las condiciones contractuales."
      ],
      "Ley 1474/2011 arts. 83–84"
    ],
    [
      "Durante la ejecución, un supervisor identifica hechos que ponen en riesgo el cumplimiento del objeto contratado. El contratista promete corregirlos verbalmente, pero todavía no aporta evidencia y la fecha pactada para entrega se aproxima.",
      "¿Qué debe hacer el supervisor frente a esa situación que amenaza el cumplimiento?",
      [
        "Informar oportunamente a la entidad contratante, documentar el riesgo y requerir explicaciones.",
        "Esperar hasta la liquidación para informar, dando prioridad a la promesa del contratista.",
        "Imponer por sí mismo una multa contractual sin verificar competencia ni procedimiento."
      ],
      [
        "El seguimiento incluye mantener informada a la entidad sobre riesgos e incumplimientos.",
        "La promesa no elimina el deber de informar.",
        "La sanción exige autoridad y trámite competente."
      ],
      "Ley 1474/2011 art. 84"
    ],
    [
      "La entidad considera imponer una multa pactada por un incumplimiento contractual. Tiene un informe detallado de supervisión que sustenta los hechos, pero el contratista y el garante aún no han tenido oportunidad de presentar sus explicaciones.",
      "¿Qué trámite debe asegurar la entidad antes de adoptar la decisión sancionatoria contractual?",
      [
        "Citar a audiencia indicando hechos, soportes, cláusulas y consecuencias posibles, con oportunidad de defensa.",
        "Imponer la multa mediante el informe del supervisor y escuchar al contratista después del descuento.",
        "Remitir el asunto exclusivamente a Procuraduría para que decida sobre la multa contractual."
      ],
      [
        "El art. 86 regula citación, audiencia y decisión motivada.",
        "El informe no sustituye audiencia ni decisión.",
        "La sanción contractual corresponde a la entidad competente."
      ],
      "Ley 1474/2011 art. 86"
    ],
    [
      "En una audiencia contractual la entidad escucha al contratista, practica las pruebas pertinentes y emite resolución motivada sobre el incumplimiento. El contratista no está de acuerdo y desea ejercer el recurso específico contra esa decisión.",
      "¿Qué recurso establece el procedimiento especial contra la resolución adoptada en audiencia?",
      [
        "Reposición, interpuesta, sustentada y decidida en la misma audiencia.",
        "Apelación, presentada por escrito dentro de los diez días siguientes a la audiencia.",
        "Queja, interpuesta directamente contra la resolución sin rechazo de una apelación previa."
      ],
      [
        "El art. 86 establece reposición en la misma audiencia.",
        "No es la apelación del procedimiento administrativo ordinario.",
        "La queja no es el recurso previsto para esta resolución."
      ],
      "Ley 1474/2011 art. 86.c"
    ],
    [
      "Un supervisor recibe una solicitud del contratista para ampliar el alcance del objeto y su valor mediante un correo electrónico. La modificación requiere decisión del ordenador competente, estudios y requisitos presupuestales que aún no se han gestionado.",
      "¿Qué límite debe observar el supervisor ante la solicitud de cambio contractual?",
      [
        "Evaluar y sustentar la solicitud sin autorizar ejecución adicional al margen de los requisitos.",
        "Ordenar por correo la ampliación y gestionar posteriormente los documentos de modificación.",
        "Aceptar la solicitud del contratista como modificación vinculante por existir supervisión asignada."
      ],
      [
        "El supervisor no reemplaza al funcionario competente para modificar el contrato.",
        "Una orden informal no satisface requisitos de modificación.",
        "La solicitud no modifica automáticamente las obligaciones."
      ],
      "Ley 80/1993 arts. 40–41; Ley 1474/2011 arts. 83–84"
    ],
    [
      "Una obra tiene contrato principal y contrato de interventoría. El contrato principal se prorroga justificadamente y se requiere garantizar continuidad de la interventoría durante el nuevo plazo, con ajuste de valor conforme a sus obligaciones.",
      "¿Qué regla especial permite examinar el ajuste de esa interventoría frente al contrato principal?",
      [
        "Prorrogarla por el mismo plazo y ajustar su valor conforme a sus obligaciones.",
        "Aplicar siempre el límite de adición general del contrato ordinario sin considerar excepción alguna.",
        "Extinguir obligatoriamente la interventoría cuando vence su plazo original pese a la prórroga principal."
      ],
      [
        "El art. 85 permite continuidad y ajuste bajo su régimen especial.",
        "El artículo exceptúa el límite general del art. 40 de Ley 80 en ese supuesto.",
        "El vencimiento inicial no impide prórroga legalmente gestionada."
      ],
      "Ley 1474/2011 art. 85"
    ]
  ],
  "pgn-m53": [
    [
      "Un servidor público en ejercicio desea presentar personalmente una propuesta para suministrar equipos a una entidad estatal sometida a la Ley 80. No actúa por obligación legal ni concurre ninguna de las excepciones previstas en el artículo 10.",
      "¿Qué restricción debe verificarse antes de admitir la propuesta del servidor?",
      [
        "La inhabilidad legal de los servidores públicos para participar y celebrar esos contratos.",
        "La incompatibilidad aplicable exclusivamente cuando trabaja en la misma entidad contratante.",
        "La posibilidad de contratar si se abstiene de evaluar personalmente su propia oferta."
      ],
      [
        "El artículo 8 incluye a servidores públicos dentro de las inhabilidades.",
        "La restricción no se limita al empleo en la contratante.",
        "Abstenerse de evaluar no elimina la inhabilidad."
      ],
      "Ley 80/1993 arts. 8.1.f y 10"
    ],
    [
      "Durante la ejecución de un contrato ordinario sobreviene una inhabilidad legal del contratista. No corresponde al literal j del numeral 1 del artículo 8 ni existe una sanción administrativa por corrupción que active el régimen especial.",
      "¿Qué alternativa general dispone la ley frente a esa inhabilidad sobreviniente?",
      [
        "Ceder el contrato previa autorización escrita de la entidad o renunciar si ello no es posible.",
        "Continuar el contrato hasta su vencimiento, pues al momento de la firma estaba habilitado.",
        "Transferir el contrato libremente a un tercero sin autorización de la entidad contratante."
      ],
      [
        "El artículo 9 regula cesión autorizada o renuncia en ese supuesto general.",
        "La validez inicial no elimina los efectos sobrevinientes.",
        "La cesión requiere autorización escrita."
      ],
      "Ley 80/1993 art. 9"
    ],
    [
      "Una empresa que presentó oferta válida adquiere una incompatibilidad legal durante el proceso de selección, antes de la adjudicación. La entidad confirma que la causal aplica a ese procedimiento y no concurre una excepción que permita continuar.",
      "¿Qué consecuencia prevé el artículo 9 para ese proponente antes de la adjudicación?",
      [
        "Se entiende que renuncia a su participación y a los derechos surgidos del proceso.",
        "Debe ceder su oferta a otro proveedor previa autorización escrita de la entidad.",
        "Puede continuar porque la habilitación se verifica únicamente al presentar la oferta."
      ],
      [
        "La incompatibilidad sobreviniente del proponente implica renuncia a participación y derechos.",
        "La cesión contractual corresponde a otra etapa.",
        "La causal sobreviniente produce efectos durante la selección."
      ],
      "Ley 80/1993 art. 9"
    ],
    [
      "Uno de los miembros de una unión temporal contratista incurre en una inhabilidad sobreviniente ordinaria. La entidad verifica que no se trata de una causal especial por corrupción y que el contrato continúa ejecutándose con los demás integrantes.",
      "¿Cómo dispone la ley gestionar la participación de ese miembro inhabilitado?",
      [
        "Ceder su participación a un tercero previa autorización escrita, sin cesión entre integrantes.",
        "Transferir su participación libremente a otro integrante de la misma unión temporal.",
        "Declarar necesariamente terminado todo el contrato sin examinar la posibilidad de cesión."
      ],
      [
        "El artículo 9 prevé cesión a tercero y prohíbe cesión entre integrantes.",
        "La cesión interna no es la alternativa permitida.",
        "La norma contempla una solución distinta a terminación automática."
      ],
      "Ley 80/1993 art. 9"
    ],
    [
      "Una persona utiliza un servicio que una entidad estatal ofrece a todo el público en condiciones comunes. La oficina considera negarle el acceso invocando una inhabilidad contractual del artículo 8, aunque el negocio se limita al uso de ese servicio.",
      "¿Qué disposición debe examinar antes de extender la restricción a esa operación?",
      [
        "La excepción legal para contratar bienes o servicios ofrecidos al público en condiciones comunes.",
        "La eliminación definitiva de todas las inhabilidades por ser usuario de un servicio público.",
        "La obligación de exigir autorización judicial previa a cualquier usuario con inhabilidad contractual."
      ],
      [
        "El artículo 10 prevé una excepción para ese negocio concreto.",
        "No elimina restricciones para otros negocios.",
        "No establece autorización judicial general para esa excepción."
      ],
      "Ley 80/1993 art. 10"
    ],
    [
      "Un integrante del comité evaluador posee una participación económica en una empresa proponente y puede obtener beneficio directo de la decisión. El procedimiento se rige por las reglas administrativas y el interés particular está acreditado.",
      "¿Qué debe hacer el evaluador al identificar ese conflicto antes de continuar la actuación?",
      [
        "Manifestar su impedimento motivado y someterlo al trámite de la autoridad competente.",
        "Continuar evaluando mientras no participe en la firma del acto de adjudicación.",
        "Solicitar al proponente que retire su oferta para conservar la integración del comité."
      ],
      [
        "El interés particular y directo exige declarar impedimento.",
        "La sustanciación también queda comprendida en la regla.",
        "La solución no consiste en desplazar al proponente."
      ],
      "CPACA arts. 11–12"
    ],
    [
      "Un funcionario advierte una causal de impedimento en una actuación administrativa contractual. El equipo propone aplicar los términos especiales de recusación del Código General Disciplinario, pese a que se trata de gestión administrativa, no de instrucción disciplinaria.",
      "¿Qué plazo tiene el servidor para remitir la actuación con su escrito de impedimento?",
      [
        "Tres días siguientes al conocimiento de la causal, conforme al CPACA.",
        "Dos días desde el conocimiento de la causal conforme al régimen disciplinario.",
        "Diez días desde la causal, por ser el término de decisión de la autoridad."
      ],
      [
        "El CPACA fija tres días para la remisión motivada.",
        "Los términos disciplinarios no rigen este supuesto.",
        "Diez días corresponden a la decisión de la autoridad competente."
      ],
      "CPACA art. 12"
    ],
    [
      "La autoridad competente recibe una actuación administrativa contractual remitida por un evaluador que se declara impedido. Debe decidir de plano la causal invocada y, si la acepta, determinar quién asume el conocimiento del asunto.",
      "¿Qué plazo establece el CPACA para resolver el impedimento en este trámite administrativo?",
      [
        "Diez días siguientes a la fecha de recibo de la actuación.",
        "Tres días siguientes al recibo, como en el régimen disciplinario especial.",
        "Cinco días siguientes al recibo, por aplicación del plazo de remisión de peticiones."
      ],
      [
        "El artículo 12 fija diez días desde el recibo.",
        "El trámite disciplinario tiene reglas distintas.",
        "La remisión de peticiones no gobierna este incidente."
      ],
      "CPACA art. 12"
    ],
    [
      "Un informe de vigilancia identifica que dos oferentes tienen vínculos comerciales previos, pero no acredita una causal legal de inhabilidad, incompatibilidad ni acuerdo anticompetitivo. Se propone excluirlos únicamente por ese vínculo comercial.",
      "¿Qué criterio debe orientar la revisión antes de concluir que existe una restricción contractual?",
      [
        "Identificar una causal legal aplicable y verificar sus hechos y ámbito temporal.",
        "Crear una inhabilidad preventiva mediante analogía con restricciones de parentesco.",
        "Excluir a ambos por precaución sin motivar una causal jurídica específica."
      ],
      [
        "Las restricciones requieren fundamento legal y hechos acreditados.",
        "La analogía no crea una inhabilidad contractual.",
        "La precaución no sustituye motivación ni procedimiento."
      ],
      "Ley 80/1993 arts. 8–10; Constitución art. 29"
    ]
  ],
  "pgn-m54": [
    [
      "Un tablero preventivo detecta que cuatro contratos pequeños corresponden a bienes similares adquiridos durante un mes. No se ha revisado la unidad de necesidad, planeación, fechas, mercado ni circunstancias de las adquisiciones documentadas.",
      "¿Qué actuación corresponde antes de concluir que existió fraccionamiento indebido?",
      [
        "Contrastar objetos, necesidad, planificación y contexto temporal para establecer si hay fundamento jurídico.",
        "Declarar acreditado el fraccionamiento porque todos los contratos tienen valores pequeños.",
        "Descartar el patrón por existir cuatro documentos contractuales independientes y firmados."
      ],
      [
        "El patrón es una alerta que necesita contexto y evidencia.",
        "La cuantía individual no demuestra por sí sola infracción.",
        "La pluralidad formal no descarta una posible irregularidad."
      ],
      "Ley 80/1993 arts. 24–26; Ley 1474/2011"
    ],
    [
      "Una entidad recibe una solicitud de información sobre un contrato. El documento contiene datos amparados por una excepción legal, pero la mayor parte de su contenido puede divulgarse sin afectar el interés protegido por esa excepción.",
      "¿Qué respuesta exige la regla de divulgación parcial para ese documento mixto?",
      [
        "Elaborar una versión pública reservando únicamente la parte indispensable protegida por la excepción.",
        "Negar el acceso a todo el documento porque contiene algún dato legalmente protegido.",
        "Entregar todo el contenido porque la publicidad contractual elimina cualquier reserva legal aplicable."
      ],
      [
        "La Ley 1712 exige acceso parcial cuando es posible separar lo protegido.",
        "Una excepción parcial no justifica reserva integral automática.",
        "La publicidad no elimina las excepciones legales."
      ],
      "Ley 1712/2014 art. 21"
    ],
    [
      "Un ciudadano solicita saber si existe un expediente contractual cuyo contenido se encuentra sujeto a una reserva legal aplicable. El funcionario propone negar incluso la existencia del documento por considerar que la reserva comprende cualquier información sobre él.",
      "¿Qué diferencia establece la ley entre la existencia y el contenido reservado del documento?",
      [
        "La reserva recae sobre el contenido protegido y no sobre la existencia del documento.",
        "La reserva del contenido obliga a negar que el documento existe en cualquier supuesto.",
        "La existencia del documento convierte automáticamente su contenido completo en información pública."
      ],
      [
        "El artículo 21 distingue existencia de contenido reservado.",
        "La reserva no permite negar existencia por sí sola.",
        "Confirmar existencia no levanta la reserva del contenido."
      ],
      "Ley 1712/2014 art. 21"
    ],
    [
      "Una entidad pública mantiene un archivo denominado plan anticorrupción con actividades aisladas y sin mecanismos para identificar, controlar y monitorear los riesgos de corrupción. Debe actualizar su gestión conforme al régimen de transparencia y ética pública.",
      "¿Qué instrumento debe estructurar e implementar de acuerdo con el marco vigente aplicable?",
      [
        "El Programa de Transparencia y Ética Pública, incorporando gestión y monitoreo de riesgos.",
        "Un informe anual de actividades que sustituya la identificación y tratamiento de los riesgos.",
        "Un programa exclusivamente disciplinario que se active después de confirmarse conductas corruptas."
      ],
      [
        "La Ley 2195 y el Decreto 1122 regulan los PTEP.",
        "El informe de actividades no sustituye controles y gestión de riesgo.",
        "El programa tiene finalidad preventiva, no exclusivamente sancionatoria."
      ],
      "Ley 1474/2011 art. 73 modificado por Ley 2195/2022 art. 31; Decreto 1122/2024"
    ],
    [
      "Un canal institucional de denuncias recibe información identificable sobre un posible caso de corrupción. La dependencia necesita remitirla a funcionarios competentes y elaborar un boletín de gestión para el público general sin exponer al denunciante.",
      "¿Qué tratamiento diferencia la gestión del reporte y la divulgación de resultados institucionales?",
      [
        "Remitir por canales autorizados y publicar estadísticas sin identificación innecesaria del denunciante.",
        "Publicar el reporte íntegro para permitir que la ciudadanía compruebe su contenido y autor.",
        "Retener toda la información incluso frente a autoridades competentes que deban conocer el asunto."
      ],
      [
        "La gestión del reporte requiere finalidad, confidencialidad y competencia.",
        "La transparencia no implica divulgar datos protegidos.",
        "La confidencialidad no impide remisión legalmente autorizada."
      ],
      "Ley 1474/2011 art. 73; Ley 1712/2014; Ley 1581/2012 art. 4"
    ],
    [
      "Una matriz de riesgos clasifica todos los contratos con adiciones como casos de corrupción comprobada. El profesional observa que varias adiciones fueron justificadas y otras presentan inconsistencias documentales que requieren revisión adicional.",
      "¿Qué ajuste debe realizarse al significado de la clasificación utilizada por la matriz?",
      [
        "Tratar las adiciones como señal de revisión, diferenciando justificación, irregularidad y responsabilidad acreditada.",
        "Mantener la clasificación como corrupción porque cualquier adición implica un incumplimiento legal.",
        "Eliminar el indicador porque las adiciones pueden estar legalmente permitidas en algunos contratos."
      ],
      [
        "Una alerta no equivale a conclusión jurídica individual.",
        "La adición puede estar permitida bajo sus condiciones legales.",
        "El indicador puede conservar utilidad si se interpreta correctamente."
      ],
      "Ley 80/1993 art. 40; Ley 2195/2022 art. 31"
    ],
    [
      "Un reporte indica que un proveedor concentra el setenta por ciento del valor contratado durante el periodo. No considera el tipo de mercado, instrumentos de compra obligatorios, número de oferentes disponibles ni naturaleza de los objetos adquiridos.",
      "¿Qué verificación mejora la interpretación de ese indicador antes de emitir una alerta motivada?",
      [
        "Desagregar por objeto, modalidad y mercado, contrastando explicaciones alternativas de la concentración.",
        "Atribuir favorecimiento indebido porque la participación porcentual supera la mitad del valor.",
        "Descartar toda concentración porque un proveedor puede celebrar varios contratos con la entidad."
      ],
      [
        "El contexto permite distinguir una señal de una conclusión injustificada.",
        "La concentración no prueba favorecimiento por sí sola.",
        "La posibilidad legal de varios contratos no elimina el riesgo analizable."
      ],
      "Ley 80/1993 arts. 24–26; Ley 1150/2007 art. 5"
    ],
    [
      "Un organismo formula un PTEP y registra como único indicador el número de capacitaciones de integridad realizadas. Los riesgos de corrupción identificados no cuentan con responsables, controles verificables ni evidencia sobre el funcionamiento de estos.",
      "¿Qué componente debe fortalecerse para que la gestión de riesgos no sea meramente formal?",
      [
        "Asignar controles y responsables, verificar su operación y monitorear el riesgo residual.",
        "Aumentar el número de capacitaciones sin examinar los controles que operan sobre los riesgos.",
        "Reemplazar la gestión preventiva por una lista de sanciones disciplinarias impuestas durante la vigencia."
      ],
      [
        "El programa exige gestión y monitoreo de riesgos, no solo actividades formativas.",
        "Las capacitaciones no demuestran eficacia de los controles.",
        "Las sanciones no sustituyen prevención."
      ],
      "Ley 2195/2022 art. 31; Decreto 1122/2024"
    ],
    [
      "Un equipo recibe una alerta algorítmica de alto riesgo sobre un contrato y prepara un comunicado público que identifica al responsable como corrupto. Solo cuenta con variables de priorización y todavía no ha contrastado los soportes del expediente.",
      "¿Qué debe hacer antes de formular cualquier conclusión de responsabilidad individual?",
      [
        "Verificar los soportes, documentar límites de la alerta y remitir según la competencia correspondiente.",
        "Publicar la identificación como responsable mientras la persona demuestra que la alerta es incorrecta.",
        "Cerrar la revisión porque las herramientas de riesgo no constituyen prueba definitiva de una infracción."
      ],
      [
        "La herramienta prioriza revisión; no declara responsabilidad.",
        "La presunción de inocencia y carga probatoria impiden esa inversión.",
        "Una alerta puede justificar revisión sin prejuzgar."
      ],
      "Constitución art. 29; Ley 2195/2022 art. 31; CGD arts. 14, 147"
    ]
  ],
  "pgn-m15": [
    [
      "La oficina de atención remite un correo que únicamente confirma el número de radicación de una solicitud de reconocimiento. No concede ni niega el derecho, ni impide que se continúe el procedimiento. El interesado pregunta qué clase de actuación recibió.",
      "¿Cómo debe clasificarse esa comunicación por su contenido?",
      [
        "Como constancia de recepción, sin decisión definitiva de la pretensión.",
        "Como acto definitivo por haber sido expedido por una autoridad.",
        "Como acto general porque fue remitido mediante correo institucional."
      ],
      [
        "El acuse acredita recepción, no decide el fondo.",
        "El origen público no determina naturaleza definitiva.",
        "El canal no convierte el acto en general."
      ],
      "CPACA art. 43"
    ],
    [
      "Una dependencia expide una decisión que rechaza definitivamente la continuación de un trámite administrativo, aunque todavía no se pronuncia sobre la pretensión material. No existe posibilidad de seguir ese trámite ante la misma dependencia.",
      "¿Qué naturaleza tiene la decisión por impedir continuar la actuación?",
      [
        "Acto definitivo, aunque no resuelva expresamente el fondo de la pretensión.",
        "Acto de simple trámite por no decidir materialmente el derecho solicitado.",
        "Comunicación informativa porque la solicitud no fue examinada de fondo."
      ],
      [
        "El art. 43 también comprende actos que imposibilitan continuar.",
        "La falta de pronunciamiento material no lo vuelve mero trámite.",
        "El rechazo produce efectos jurídicos."
      ],
      "CPACA art. 43"
    ],
    [
      "Una autoridad expide un acto de carácter general que establece condiciones para todos los destinatarios de una categoría. El acto no es electoral y no existe régimen especial que disponga una modalidad de publicidad diferente.",
      "¿Qué requisito condiciona su obligatoriedad frente a esos destinatarios?",
      [
        "La publicación conforme al medio legal que corresponda al acto general.",
        "La notificación personal de cada ciudadano potencialmente afectado por el acto.",
        "La firma del funcionario competente, sin necesidad de publicación institucional."
      ],
      [
        "El art. 65 exige publicación de actos generales.",
        "La notificación personal corresponde a decisiones particulares en los casos previstos.",
        "La expedición no sustituye publicidad."
      ],
      "CPACA art. 65"
    ],
    [
      "Una autoridad decide una petición mediante acto particular. Para notificarlo personalmente, la oficina entrega copia íntegra de la decisión, pero omite informar al destinatario cuáles recursos proceden, ante quién y en qué plazo.",
      "¿Qué debe corregirse para cumplir los requisitos de la notificación personal?",
      [
        "Informar recursos procedentes, autoridad competente y término, además de entregar la copia.",
        "Limitarse a indicar que el acto fue firmado por el funcionario competente.",
        "Remitir posteriormente un enlace genérico a las normas administrativas de la entidad."
      ],
      [
        "El art. 67 exige esa información en la notificación personal.",
        "La competencia del firmante no subsana la notificación.",
        "Un enlace genérico no informa los recursos del acto."
      ],
      "CPACA art. 67"
    ],
    [
      "Un acto particular no tiene modalidad especial de notificación y el interesado no ha aceptado notificación electrónica. La entidad remite citación, transcurren cinco días desde su envío y no logra practicar la notificación personal.",
      "¿Qué modalidad debe gestionar conforme al procedimiento general en ese supuesto?",
      [
        "Notificación por aviso con copia íntegra y los datos exigidos por la ley.",
        "Publicación general del acto como sustituto de cualquier trámite individual.",
        "Comunicación verbal a un tercero sin constancia de recepción ni copia."
      ],
      [
        "El art. 69 prevé aviso cuando no se logra notificación personal.",
        "El acto particular conserva el régimen de notificación aplicable.",
        "La comunicación verbal no cumple las formalidades del aviso."
      ],
      "CPACA arts. 68–69"
    ],
    [
      "Contra un acto definitivo de primera instancia proceden reposición y apelación. La persona interesada fue notificada válidamente y desea acudir directamente al superior funcional, sin interponer primero reposición ante quien decidió.",
      "¿Puede formular la apelación directamente dentro del término legal?",
      [
        "Sí, la apelación puede interponerse directamente o como subsidiaria de reposición.",
        "No, la reposición es siempre requisito obligatorio para interponer la apelación.",
        "No, solo puede recurrir en queja mientras no exista decisión de reposición."
      ],
      [
        "El art. 76 permite apelación directa o subsidiaria.",
        "La reposición no es requisito obligatorio.",
        "La queja procede ante rechazo de apelación."
      ],
      "CPACA arts. 74, 76"
    ],
    [
      "Un acto particular fue expedido el lunes. La citación se remitió el martes, pero el destinatario no fue notificado ni se configuró conducta concluyente. La entidad registra el miércoles como fecha de firmeza por considerar suficiente la citación.",
      "¿Qué defecto presenta el cálculo de firmeza realizado por la entidad?",
      [
        "Confunde el envío de citación con notificación efectiva y sus efectos sobre recursos.",
        "Aplica la fecha de citación cuando debería aplicar siempre la de firma del acto.",
        "Debería contar desde el ingreso del asunto a la entidad, no desde la citación."
      ],
      [
        "Citación y notificación son actuaciones diferentes.",
        "La firma tampoco acredita por sí sola firmeza.",
        "La recepción inicial no determina ejecutoria."
      ],
      "CPACA arts. 68–69, 72, 87"
    ],
    [
      "Un acto particular fue notificado correctamente y admite recursos. El interesado deja transcurrir el término legal sin presentarlos, no renuncia expresamente ni se configura otra causal especial de firmeza. La oficina debe identificar el momento correspondiente.",
      "¿Cuándo queda en firme ese acto por falta de interposición de recursos?",
      [
        "Desde el día siguiente al vencimiento del término para interponer los recursos.",
        "Desde el mismo día en que se practicó la notificación personal válida.",
        "Desde el día en que la entidad comenzó a ejecutar materialmente la decisión."
      ],
      [
        "El art. 87.3 establece firmeza desde el día siguiente al vencimiento.",
        "La notificación inicia, pero no agota, la oportunidad de recurrir.",
        "La ejecución material no determina esa causal de firmeza."
      ],
      "CPACA art. 87.3"
    ],
    [
      "Una entidad detecta un error de digitación en el número de un documento citado dentro de un acto particular. La corrección no modifica el sentido material de la decisión ni afecta sus destinatarios. El acto ya fue notificado.",
      "¿Qué vía permite corregir ese defecto formal sin reabrir el fondo del asunto?",
      [
        "Corregir el error formal, comunicar o notificar la corrección y no revivir términos.",
        "Revocar íntegramente el acto y expedir una nueva decisión con los mismos efectos.",
        "Reiniciar el término para demandar porque toda corrección modifica el acto original."
      ],
      [
        "El art. 45 permite corregir errores formales sin cambiar el fondo.",
        "La revocación integral no es necesaria por ese defecto.",
        "La corrección no revive términos para demandar."
      ],
      "CPACA art. 45"
    ]
  ],
  "pgn-m16": [
    [
      "Un operador disciplinario revisa el término de una actuación expresamente regulada por el Código General Disciplinario. Otro funcionario propone aplicar el plazo del procedimiento administrativo común por tratarse de una autoridad administrativa.",
      "¿Qué criterio determina la norma que debe aplicarse primero en este caso?",
      [
        "La regla especial disciplinaria que regula expresamente la actuación correspondiente.",
        "El término del CPACA por su carácter general para las autoridades administrativas.",
        "El plazo más corto entre ambos códigos, por el principio de celeridad."
      ],
      [
        "El art. 34 preserva procedimientos especiales.",
        "La naturaleza administrativa no desplaza la regla especial.",
        "La celeridad no habilita escoger arbitrariamente términos."
      ],
      "CPACA art. 34; CGD"
    ],
    [
      "Una actuación administrativa está regida por una ley especial que no regula un aspecto procedimental. No existe prohibición de integración y la disposición general resulta compatible con la naturaleza y garantías del procedimiento especial.",
      "¿Qué posibilidad ofrece el artículo 34 frente a ese vacío específico?",
      [
        "Aplicar supletoriamente la Parte Primera del CPACA en lo no previsto.",
        "Reemplazar todo el procedimiento especial por el procedimiento administrativo común.",
        "Crear una regla interna sin acudir a las normas que regulan actuaciones administrativas."
      ],
      [
        "La regla general integra aspectos no regulados cuando procede.",
        "El vacío no elimina el régimen especial.",
        "Una instrucción interna no sustituye la integración normativa legal."
      ],
      "CPACA art. 34"
    ],
    [
      "Una autoridad abre una actuación administrativa de oficio y advierte que la decisión puede afectar directamente a terceros determinados. El trámite ordinario no tiene excepción legal que dispense la comunicación a esos terceros identificados.",
      "¿Qué garantía debe examinar antes de adoptar la decisión de fondo?",
      [
        "Comunicar la existencia y objeto de la actuación para permitir intervención de los terceros.",
        "Esperar a decidir y notificar únicamente a quien originó la actuación administrativa.",
        "Publicar el resultado definitivo sin habilitar intervención durante la actuación."
      ],
      [
        "El art. 37 permite a terceros directamente afectados constituirse como parte.",
        "La comunicación oportuna protege participación.",
        "Publicar el resultado no reemplaza esa oportunidad."
      ],
      "CPACA art. 37"
    ],
    [
      "En un procedimiento administrativo ordinario, el interesado solicita pruebas pertinentes antes de que se profiera la decisión de fondo. La autoridad argumenta que solo puede solicitar pruebas dentro de un periodo inicial que no está previsto para ese trámite.",
      "¿Qué regla general establece el CPACA sobre prueba antes de la decisión?",
      [
        "Pueden aportarse, pedirse y practicarse pruebas hasta antes de decidir, garantizando contradicción.",
        "Solo pueden aportarse pruebas en el momento inicial de radicación de la solicitud.",
        "Las pruebas posteriores requieren interponer recurso contra una decisión de fondo ya expedida."
      ],
      [
        "El art. 40 habilita actividad probatoria durante la actuación.",
        "No impone exclusivamente la radicación como oportunidad.",
        "No exige esperar una decisión para pedir prueba."
      ],
      "CPACA art. 40"
    ],
    [
      "Una entidad detecta antes de decidir que omitió una comunicación obligatoria en una actuación administrativa ordinaria. Todavía puede practicarla oportunamente y garantizar la participación de la persona afectada sin cambiar el objeto del trámite.",
      "¿Qué facultad permite corregir la irregularidad antes de expedir el acto definitivo?",
      [
        "Adoptar las medidas necesarias de corrección y ajustar la actuación a derecho.",
        "Declarar automáticamente la nulidad judicial de todo lo actuado desde la radicación.",
        "Continuar sin corregir porque aún no se ha expedido el acto administrativo definitivo."
      ],
      [
        "El art. 41 permite corregir irregularidades antes de decidir.",
        "La autoridad administrativa no declara automáticamente nulidad judicial.",
        "La ausencia de decisión final facilita corrección, no permite omitirla."
      ],
      "CPACA art. 41"
    ],
    [
      "Una autoridad tramita una actuación administrativa ordinaria y dispone de los informes, pruebas y argumentos aportados. El proyecto de decisión resuelve solo una de las solicitudes oportunamente planteadas y no explica la suerte de las demás.",
      "¿Qué exigencia debe cumplir la decisión de fondo para resolver ese trámite?",
      [
        "Motivar la decisión y resolver todas las peticiones oportunamente planteadas que correspondan.",
        "Resolver únicamente la pretensión considerada principal sin explicar las solicitudes restantes.",
        "Emitir una respuesta de trámite y conservar indefinidamente abiertas las otras pretensiones."
      ],
      [
        "El art. 42 exige decisión motivada y resolución de peticiones planteadas.",
        "La selección arbitraria produce respuesta incompleta.",
        "El impulso de trámite no sustituye decisión de fondo."
      ],
      "CPACA art. 42"
    ],
    [
      "Durante una investigación disciplinaria la defensa solicita una prueba. La negativa está regulada expresamente por el CGD y admite reposición. La secretaría propone tramitar apelación aplicando indistintamente el régimen general de actos definitivos.",
      "¿Qué regla corresponde al recurso en esa etapa de la actuación disciplinaria?",
      [
        "Aplicar el recurso especial previsto para la negativa de prueba en investigación.",
        "Aplicar automáticamente apelación por tratarse de una decisión administrativa motivada.",
        "Conceder conjuntamente todos los recursos ordinarios para ampliar garantías del investigado."
      ],
      [
        "El procedimiento especial determina recurso y etapa.",
        "Motivar la decisión no crea recurso general.",
        "Los recursos proceden en los supuestos legales."
      ],
      "CPACA art. 34; CGD art. 133"
    ],
    [
      "Una persona solicita copias de documentos administrativos a una oficina que también adelanta investigaciones disciplinarias. La solicitud no busca controvertir una providencia ni ejerce una facultad propia de un sujeto procesal disciplinario.",
      "¿Qué régimen debe examinarse para resolver esa solicitud autónoma de información?",
      [
        "Derecho de petición y acceso a información, incluyendo las reservas especiales aplicables.",
        "Término de investigación disciplinaria, porque la oficina desarrolla esa función institucional.",
        "Plazo de apelación contra fallo disciplinario, por contener documentos de una dependencia instructora."
      ],
      [
        "El objeto de la solicitud determina el régimen inicial.",
        "El plazo de investigación no regula esa petición autónoma.",
        "No se trata de impugnación de fallo."
      ],
      "Ley 1755/2015 art. 14; CPACA art. 34"
    ],
    [
      "Una entidad expide un acto particular favorable que reconoció expresamente un derecho. Luego considera que su expedición fue ilegal; no existe consentimiento previo, expreso y escrito del titular ni excepción legal aplicable para revocarlo directamente.",
      "¿Qué debe hacer la autoridad si considera necesario retirar ese acto favorable?",
      [
        "Acudir a la jurisdicción competente para demandar su propio acto en los términos legales.",
        "Revocarlo unilateralmente por considerar que viola el ordenamiento jurídico.",
        "Suspender indefinidamente sus efectos mediante una simple nota interna sin competencia especial."
      ],
      [
        "El art. 97 protege actos particulares favorables sin consentimiento y prevé demanda.",
        "La opinión de ilegalidad no sustituye consentimiento o control judicial.",
        "Una nota no produce automáticamente suspensión legal."
      ],
      "CPACA art. 97"
    ]
  ],
  "pgn-m17": [
    [
      "Una ciudadana radica una petición general para que una entidad adopte una decisión dentro de sus competencias. No pide documentos ni formula una consulta jurídica y no existe término especial para resolver la pretensión que planteó.",
      "¿Cuál es el plazo ordinario de respuesta aplicable a esa petición general?",
      [
        "Quince días siguientes a su recepción, salvo disposición legal especial.",
        "Diez días siguientes a su recepción, como para solicitudes documentales.",
        "Treinta días siguientes a su recepción, como para consultas sobre competencias."
      ],
      [
        "La regla ordinaria del art. 14 es quince días.",
        "Diez corresponde a información y documentos.",
        "Treinta corresponde a consultas."
      ],
      "Ley 1755/2015 art. 14"
    ],
    [
      "Un ciudadano solicita copias de documentos públicos disponibles en una entidad. La autoridad no tiene reserva que aplicar ni plazo especial; el responsable registra el término ordinario de quince días de las peticiones generales.",
      "¿Qué término específico corresponde a esa solicitud de documentos e información?",
      [
        "Diez días siguientes a su recepción conforme al régimen de información.",
        "Quince días siguientes a su recepción por la regla general de peticiones.",
        "Treinta días siguientes a su recepción por requerir una respuesta escrita."
      ],
      [
        "El art. 14 fija diez días para información y documentos.",
        "La regla general cede ante el plazo específico.",
        "La forma escrita no convierte la solicitud en consulta."
      ],
      "Ley 1755/2015 art. 14.1"
    ],
    [
      "Una profesional eleva a una autoridad una consulta sobre la interpretación general de una materia que está a su cargo. No solicita una decisión sobre su derecho particular ni copia de documentos y no existe regla especial.",
      "¿Qué plazo y efecto general corresponden a la respuesta de esa consulta?",
      [
        "Treinta días para responder; el concepto no es vinculante salvo disposición legal.",
        "Quince días para responder; el concepto es obligatorio para todos los destinatarios.",
        "Diez días para responder; el concepto equivale a un acto administrativo definitivo."
      ],
      [
        "Las consultas tienen treinta días y sus conceptos no son obligatorios por regla general.",
        "El carácter conceptual no activa el plazo de petición general.",
        "Una consulta no equivale a solicitud documental ni a acto decisorio."
      ],
      "Ley 1755/2015 arts. 14.2, 28"
    ],
    [
      "Una petición escrita llega a una dependencia que carece de competencia para resolverla. Identifica claramente cuál autoridad debe conocer el asunto y dispone de dirección de contacto para informar al solicitante y remitir el escrito.",
      "¿Qué plazo aplica para informar y remitir esa petición a la autoridad competente?",
      [
        "Dentro de los cinco días siguientes a la recepción de la petición escrita.",
        "Dentro de los diez días siguientes por tratarse de una gestión de correspondencia.",
        "Al vencimiento de los quince días previstos para decidir una petición general."
      ],
      [
        "El art. 21 fija cinco días para peticiones escritas.",
        "No se aplica el plazo documental a la remisión.",
        "Esperar el término general desconoce la regla de competencia."
      ],
      "Ley 1755/2015 art. 21"
    ],
    [
      "Una entidad recibe una petición incompleta. Falta un documento que legalmente debe aportar el interesado, es necesario para decidir y la autoridad no lo tiene; la actuación puede continuar si se completa la solicitud radicada.",
      "¿Qué trámite corresponde para requerir la información faltante en este supuesto?",
      [
        "Requerir dentro de diez días de radicación, concediendo hasta un mes para completar.",
        "Rechazar inmediatamente la petición por falta de un documento indispensable para decidir.",
        "Conceder quince días sin realizar un requerimiento oportuno ni identificar lo que falta."
      ],
      [
        "El art. 17 dispone requerimiento dentro de diez días y hasta un mes.",
        "No procede rechazo automático en ese supuesto.",
        "El término y el requerimiento están regulados expresamente."
      ],
      "Ley 1755/2015 art. 17"
    ],
    [
      "Una persona presenta una petición respetuosa verbal en una oficina habilitada. El funcionario se niega a recibirla porque el ciudadano no entregó un formato escrito, aunque el asunto puede formularse por ese medio y no existe excepción legal.",
      "¿Qué conducta corresponde a la autoridad ante esa petición verbal procedente?",
      [
        "Recibirla y dejar constancia de su presentación conforme a las reglas aplicables.",
        "Exigir escrito firmado como condición general de validez de toda petición.",
        "Remitir al interesado a un abogado para que formule la solicitud de manera escrita."
      ],
      [
        "El derecho admite peticiones verbales y exige constancia.",
        "El formato escrito no es requisito universal.",
        "No se requiere abogado por regla general."
      ],
      "Ley 1755/2015 arts. 13, 15"
    ],
    [
      "Una solicitud de copias de documentos públicos no reservados no fue respondida dentro de los diez días legales. No existe una ampliación comunicada oportunamente ni regla especial que modifique el efecto previsto para ese silencio.",
      "¿Qué consecuencia específica establece la ley para esa solicitud documental?",
      [
        "Se entiende aceptada y las copias deben entregarse dentro de los tres días siguientes.",
        "Se entiende negada y el interesado debe interponer apelación dentro de diez días.",
        "Se amplía automáticamente el término a treinta días para resolver la solicitud."
      ],
      [
        "El art. 14.1 establece aceptación y entrega en tres días.",
        "No es silencio negativo en ese supuesto.",
        "No existe ampliación automática por vencimiento."
      ],
      "Ley 1755/2015 art. 14.1"
    ],
    [
      "Una autoridad verifica antes del vencimiento de una petición general de quince días que excepcionalmente no puede resolver dentro del término. Puede explicar los motivos concretos y necesita establecer un plazo razonable de respuesta.",
      "¿Qué límite y actuación debe observar antes de que venza el término inicial?",
      [
        "Informar motivos y señalar un plazo razonable que no exceda el doble del inicial.",
        "Esperar el vencimiento y comunicar después una ampliación discrecional de treinta días adicionales.",
        "Suspender indefinidamente el término hasta contar con todos los soportes internos necesarios."
      ],
      [
        "La ampliación exige aviso previo motivado y límite del doble.",
        "La comunicación posterior no satisface esa condición.",
        "No se permite suspensión indefinida por mera dificultad."
      ],
      "Ley 1755/2015 art. 14 parágrafo"
    ],
    [
      "Una dependencia recibe un escrito que solicita una decisión general y copia de un informe disponible. Contesta únicamente la primera pretensión dentro de quince días y considera cerrado el radicado, aunque nunca se pronunció sobre el documento.",
      "¿Qué revisión permite establecer si la entidad atendió íntegramente la petición mixta?",
      [
        "Distinguir las pretensiones y verificar respuesta y término aplicable a cada una.",
        "Considerar completo el trámite por haberse respondido la solicitud de mayor extensión.",
        "Aplicar el plazo de consulta a todo el escrito por contener solicitudes diferentes."
      ],
      [
        "Cada componente tiene objeto, respuesta y término correspondiente.",
        "Responder un punto no agota el escrito.",
        "La mezcla no convierte todo en consulta."
      ],
      "Ley 1755/2015 arts. 13–14"
    ]
  ],
  "pgn-m18": [
    [
      "Una entidad recibe una solicitud de acceso a un informe institucional. El responsable afirma que el documento es reservado porque la oficina lo etiquetó como interno, sin identificar una disposición constitucional o legal que fundamente la limitación.",
      "¿Qué principio debe aplicar antes de negar el acceso al documento solicitado?",
      [
        "Máxima publicidad y exigencia de fundamento legal para limitar el acceso.",
        "Reserva general de toda información que tenga una etiqueta institucional de uso interno.",
        "Publicidad únicamente de documentos previamente aprobados por el jefe de la dependencia."
      ],
      [
        "La información se presume pública salvo excepción legal.",
        "Una etiqueta no crea reserva.",
        "La aprobación jerárquica no es requisito general de publicidad."
      ],
      "Ley 1712/2014 arts. 2, 18–19"
    ],
    [
      "Un documento contiene información íntima de una persona natural cuya divulgación afectaría injustificadamente sus derechos. La oficina identifica que el supuesto legal protege el interés privado de ese titular y no un interés público estatal.",
      "¿Qué categoría de excepción corresponde a la protección descrita en el caso?",
      [
        "Información pública clasificada por afectación de derechos de personas.",
        "Información pública reservada exclusivamente por afectación de intereses públicos.",
        "Información secreta creada mediante instrucción interna del funcionario encargado."
      ],
      [
        "El art. 18 regula información clasificada por derechos privados.",
        "El art. 19 protege intereses públicos legalmente definidos.",
        "Una instrucción interna no crea una categoría legal de reserva."
      ],
      "Ley 1712/2014 arts. 18–19"
    ],
    [
      "Un contrato contiene cláusulas públicas y una sección específica protegida por una excepción legal debidamente sustentada. La entidad puede separar esa sección sin afectar la comprensión del resto ni revelar indirectamente el contenido protegido.",
      "¿Qué mecanismo permite satisfacer el acceso a la parte no exceptuada?",
      [
        "Elaborar una versión pública que reserve únicamente la parte indispensable protegida.",
        "Negar el documento completo por contener una sección exceptuada de publicidad.",
        "Entregar el contrato completo porque los documentos contractuales siempre son públicos."
      ],
      [
        "La divulgación parcial protege solo la parte legalmente exceptuada.",
        "La reserva parcial no justifica negar todo.",
        "La publicidad admite excepciones legales."
      ],
      "Ley 1712/2014 art. 21"
    ],
    [
      "Una autoridad rechaza una petición de información invocando una reserva legal. La persona interesada insiste oportunamente ante esa misma autoridad y desea que se determine judicialmente si corresponde entregar la información pedida.",
      "¿Qué mecanismo especial debe activar frente a la insistencia por reserva?",
      [
        "Remitir la documentación a la autoridad judicial administrativa competente conforme al art. 26.",
        "Conceder apelación ordinaria ante el superior administrativo de quien negó la petición.",
        "Resolver nuevamente sin remisión, porque la decisión de reserva no admite control judicial."
      ],
      [
        "La insistencia activa el procedimiento judicial especial.",
        "No es una apelación administrativa ordinaria.",
        "La autoridad judicial decide si se acepta o niega el acceso."
      ],
      "Ley 1755/2015 arts. 25–26"
    ],
    [
      "Un ciudadano solicita información y la autoridad considera que concurre una excepción de acceso. El proyecto de respuesta solo cita la ley de transparencia de forma general, sin identificar la disposición concreta ni explicar el daño que ocasionaría divulgarla.",
      "¿Qué debe agregar para sustentar debidamente la negativa de acceso a la información?",
      [
        "Identificar la excepción legal aplicable y justificar el daño conforme a la carga de prueba.",
        "Repetir la denominación interna del documento y adjuntar la firma del responsable.",
        "Exigir al solicitante que demuestre por qué merece acceso a la información."
      ],
      [
        "El sujeto obligado debe justificar la excepción y el daño.",
        "La etiqueta y firma no acreditan la restricción.",
        "La carga de fundamentar la excepción no recae en el solicitante."
      ],
      "Ley 1712/2014 art. 28"
    ],
    [
      "Un disciplinado debidamente vinculado solicita acceso a su propio expediente durante la fase investigativa. Un ciudadano externo formula simultáneamente una solicitud de acceso general a la misma actuación, que está sometida a reserva procesal.",
      "¿Qué distinción debe aplicar la oficina al resolver las dos solicitudes?",
      [
        "Diferenciar derechos del sujeto procesal y régimen de acceso del ciudadano externo.",
        "Negar ambas solicitudes de manera idéntica por estar reservada la investigación.",
        "Entregar todo a ambos porque la solicitud del disciplinado elimina la reserva procesal."
      ],
      [
        "La reserva general no suprime los derechos de sujetos procesales.",
        "Ambos no tienen idéntica calidad jurídica.",
        "El acceso del vinculado no vuelve público el expediente."
      ],
      "CGD art. 115; Ley 1712/2014"
    ],
    [
      "Una dependencia prepara una versión pública de una hoja de cálculo con datos privados de terceros. Oculta visualmente las columnas protegidas, pero estas permanecen en el archivo y cualquier usuario puede mostrarlas nuevamente.",
      "¿Qué control técnico debe realizar antes de entregar esa versión pública?",
      [
        "Eliminar los datos protegidos de la copia y verificar que no puedan recuperarse allí.",
        "Mantener las columnas ocultas y advertir al usuario que no debe mostrarlas.",
        "Enviar el archivo original protegido únicamente por una contraseña de edición de celdas."
      ],
      [
        "La versión pública debe excluir efectivamente el contenido protegido.",
        "Ocultar no elimina información del archivo.",
        "La restricción de edición no impide necesariamente lectura."
      ],
      "Ley 1712/2014 art. 21; Ley 1581/2012 art. 4"
    ],
    [
      "Una oficina recibe datos personales para cumplir una función legal y puede tratarlos sin autorización previa en ese supuesto. Luego propone publicar la base nominativa con una finalidad diferente que no es necesaria para cumplir la función.",
      "¿Qué regla subsiste aunque la autorización no sea exigible para el tratamiento inicial?",
      [
        "Respetar finalidad, circulación restringida y demás principios legales del tratamiento.",
        "Publicar la base porque toda excepción de autorización permite reutilización ilimitada.",
        "Solicitar únicamente autorización verbal del superior jerárquico para cualquier difusión pública."
      ],
      [
        "La excepción no elimina los principios de protección de datos.",
        "No habilita finalidades incompatibles.",
        "La jerarquía no sustituye requisitos legales de tratamiento."
      ],
      "Ley 1581/2012 arts. 4, 10"
    ],
    [
      "Una veeduría solicita copia de estadísticas de gestión y números telefónicos personales de terceros que aparecen en la misma base. La entidad puede producir cifras desagregadas por dependencia sin divulgar teléfonos ni identificar personas.",
      "¿Qué respuesta concilia acceso a información y protección de datos en ese supuesto?",
      [
        "Entregar información pública separable y proteger los datos personales legalmente restringidos.",
        "Negar todas las cifras porque fueron obtenidas de una base con datos personales.",
        "Publicar los teléfonos para demostrar que las cifras provienen de registros auténticos."
      ],
      [
        "La entrega parcial permite informar sin divulgar datos protegidos.",
        "El origen de la base no impide publicar información separable.",
        "Autenticidad no exige exposición de teléfonos."
      ],
      "Ley 1712/2014 art. 21; Ley 1581/2012 art. 4"
    ]
  ],
  "pgn-m19": [
    [
      "Un ciudadano ordinario formula una queja disciplinaria y aporta documentos. Después solicita ejercer todas las facultades del investigado, incluyendo intervenir sin limitaciones en cada diligencia; no tiene una calidad especial de víctima reconocida por ley.",
      "¿Qué distinción procesal debe examinar el operador al responder esa solicitud?",
      [
        "La calidad de quejoso ordinario y sus facultades específicas frente a los sujetos procesales.",
        "La condición automática de sujeto procesal pleno por haber originado la actuación disciplinaria.",
        "La inexistencia de cualquier facultad de aportar elementos por no ser el investigado."
      ],
      [
        "El CGD distingue quejoso y sujetos procesales, con facultades específicas.",
        "Presentar queja no otorga todas las facultades.",
        "El quejoso puede aportar pruebas y ejercer derechos legales."
      ],
      "CGD arts. 109–110"
    ],
    [
      "Un expediente disciplinario contiene un auto que ordena practicar una prueba pertinente. La autoridad no ha evaluado definitivamente la responsabilidad ni formulado una decisión de fondo sobre la conducta investigada en el trámite.",
      "¿Cómo debe clasificarse la actuación que decreta esa diligencia probatoria?",
      [
        "Como actuación probatoria que prepara una decisión de mérito posterior.",
        "Como fallo sancionatorio porque permite obtener evidencia contra el disciplinado.",
        "Como terminación y archivo porque la autoridad ya definió qué prueba practicará."
      ],
      [
        "El decreto probatorio impulsa el esclarecimiento de hechos.",
        "Ordenar prueba no sanciona.",
        "No implica terminación del proceso."
      ],
      "CGD arts. 147–151, 212"
    ],
    [
      "Un investigado decide no aportar documentos de descargo ni explicar su conducta. El instructor propone considerar probada la responsabilidad por la sola falta de colaboración, pese a que el expediente presenta vacíos sobre los hechos.",
      "¿Qué diferencia entre carga procesal y deber estatal impide esa conclusión?",
      [
        "La carga de demostrar responsabilidad corresponde al Estado y no se traslada al investigado.",
        "El silencio convierte la carga de prueba en una obligación exclusiva del disciplinado.",
        "La falta de colaboración equivale a una confesión suficiente para proferir el fallo."
      ],
      [
        "El CGD atribuye carga al Estado.",
        "El ejercicio defensivo no desplaza esa carga.",
        "La confesión exige presupuestos propios."
      ],
      "CGD arts. 14, 147, 161"
    ],
    [
      "Un auto disciplinario fue expedido una fecha y notificado posteriormente. El equipo necesita calcular la oportunidad de interponer un recurso legalmente procedente, pero no ha distinguido el momento de expedición de la notificación válida.",
      "¿Qué hito debe identificar antes de calcular la oportunidad del recurso?",
      [
        "La notificación legal y el término específico previsto para ese recurso.",
        "La fecha de elaboración del proyecto de auto, aunque aún no existiera decisión.",
        "El día en que llegó la queja inicial, común para todas las impugnaciones."
      ],
      [
        "La oportunidad depende de la modalidad y término legales.",
        "El proyecto no produce notificación.",
        "La noticia inicial no fija todos los recursos posteriores."
      ],
      "CGD arts. 120–132"
    ],
    [
      "En una actuación disciplinaria se solicita apelación contra una providencia para la que la ley especial únicamente prevé reposición. El funcionario considera conceder ambos recursos para evitar una eventual inconformidad de quien presenta el escrito.",
      "¿Qué control debe aplicar antes de decidir el trámite de la impugnación?",
      [
        "Verificar procedencia, legitimación, oportunidad y autoridad del recurso regulado legalmente.",
        "Conceder cualquier recurso solicitado porque la defensa puede escoger su propia modalidad.",
        "Rechazar todos los recursos contra decisiones interlocutorias para evitar dilaciones procesales."
      ],
      [
        "Los recursos tienen supuestos y requisitos legales.",
        "El nombre escogido no crea un recurso.",
        "Las interlocutorias pueden admitir recursos específicos."
      ],
      "CGD arts. 130–137"
    ],
    [
      "Una constancia procesal tiene un número de folio digitado incorrectamente. La actuación cumplió su finalidad, la defensa pudo ejercer contradicción y no existe afectación sustancial acreditada. Una parte solicita anular todo el expediente.",
      "¿Qué criterio debe orientar el examen de esa solicitud de nulidad?",
      [
        "Valorar causal, trascendencia y posibilidad de corrección antes de declarar nulidad.",
        "Anular íntegramente por cualquier diferencia material en las constancias procesales.",
        "Ignorar definitivamente el defecto sin documentar una corrección que pueda ser necesaria."
      ],
      [
        "No toda irregularidad constituye causal de nulidad.",
        "La finalidad y garantías conservadas importan al evaluar trascendencia.",
        "La corrección puede preservar trazabilidad."
      ],
      "CGD arts. 202–205"
    ],
    [
      "Al concluir la investigación se demuestra objetivamente la falta y existe prueba que compromete al disciplinado. La autoridad instructora considera que todavía no hay certeza para imponer una sanción, pero debe evaluar si procede la acusación.",
      "¿Qué estándar corresponde a la formulación del pliego de cargos en esa etapa?",
      [
        "Demostración objetiva de la falta y prueba que comprometa responsabilidad del disciplinado.",
        "Certeza sancionatoria definitiva sobre la falta y responsabilidad antes de formular cualquier cargo.",
        "Sospecha inicial sobre una persona aunque no exista prueba que comprometa responsabilidad."
      ],
      [
        "El art. 222 establece el estándar propio de cargos.",
        "La certeza corresponde al fallo sancionatorio.",
        "La mera sospecha no satisface el umbral de acusación."
      ],
      "CGD arts. 160, 222"
    ],
    [
      "El funcionario que formuló el pliego de cargos propone dictar también el fallo del mismo expediente, pues afirma que conoce mejor las pruebas y puede resolver más rápido. No existe supuesto que autorice concentrar ambas funciones.",
      "¿Qué garantía estructural debe observarse al asignar la etapa de juzgamiento?",
      [
        "Separar la autoridad que instruye de quien juzga, preservando independencia e imparcialidad.",
        "Mantener al instructor como juzgador para asegurar continuidad de la hipótesis probatoria.",
        "Permitir que el instructor falle si la defensa no solicita expresamente un cambio."
      ],
      [
        "El art. 12 exige funcionarios diferentes e independientes.",
        "La continuidad no sustituye separación funcional.",
        "No depende de una petición de la defensa."
      ],
      "CGD art. 12"
    ],
    [
      "En juzgamiento se practica prueba legalmente incorporada y se escuchan argumentos de defensa. Al finalizar, persiste duda razonable sobre la responsabilidad del acusado aunque la falta objetiva esté acreditada. El despacho considera sancionar por la gravedad del hecho.",
      "¿Qué regla del fallo impide fundamentar sanción en esa insuficiencia probatoria?",
      [
        "Exigir certeza de falta y responsabilidad, resolviendo la duda razonable a favor del disciplinado.",
        "Aplicar el estándar de formulación de cargos porque la falta objetiva quedó acreditada.",
        "Imponer sanción atenuada debido a la incertidumbre sobre la intervención personal."
      ],
      [
        "El art. 160 exige certeza de ambos presupuestos.",
        "Los cargos y el fallo tienen estándares distintos.",
        "Reducir sanción no corrige ausencia de certeza."
      ],
      "CGD arts. 14, 160, 222"
    ]
  ],
  "pgn-m5": [
    [
      "Un municipio organiza su atención ciudadana para atender únicamente a personas que pueden realizar trámites por internet. Una comunidad sin conectividad solicita una alternativa y la entidad alega que la eficiencia administrativa basta para mantener el canal único.",
      "¿Qué fundamento constitucional exige revisar esa barrera de acceso?",
      [
        "El Estado social de derecho y la efectividad material de los derechos.",
        "La autonomía territorial entendida como facultad de excluir usuarios de los servicios.",
        "La separación de poderes como impedimento para ofrecer canales alternativos de atención."
      ],
      [
        "La dignidad y efectividad de derechos orientan la actuación estatal.",
        "La autonomía opera dentro de Constitución y ley.",
        "La separación de poderes no impide corregir barreras."
      ],
      "Constitución arts. 1–2, 13"
    ],
    [
      "Un funcionario afirma que sus actuaciones solo pueden generar responsabilidad si infringe una prohibición expresa. El expediente muestra que dejó de ejercer una función que la ley le asignaba y que tenía posibilidad de cumplir en el momento relevante.",
      "¿Qué regla constitucional permite examinar esa omisión funcional?",
      [
        "Los servidores responden también por omisión o extralimitación en sus funciones.",
        "Los servidores responden únicamente por ejecutar actos expresamente prohibidos por la ley.",
        "Los servidores responden por omisión solo cuando otra autoridad les ordena actuar."
      ],
      [
        "El art. 6 incluye omisiones y extralimitaciones.",
        "La infracción activa no es el único supuesto.",
        "El deber legal puede existir sin una orden adicional."
      ],
      "Constitución art. 6"
    ],
    [
      "Una dependencia quiere impedir que una persona controvierta una prueba administrativa para resolver más rápido una solicitud. La actuación no es judicial, pero la decisión puede afectar de manera directa los derechos de esa persona.",
      "¿Qué garantía constitucional resulta aplicable a esa actuación administrativa?",
      [
        "El debido proceso, incluida la defensa y contradicción conforme al procedimiento.",
        "El debido proceso únicamente cuando un juez asume conocimiento de la controversia.",
        "El derecho a controvertir pruebas solo después de ejecutarse la decisión administrativa."
      ],
      [
        "El art. 29 también rige las actuaciones administrativas.",
        "No se limita a procesos judiciales.",
        "La contradicción debe garantizarse en su oportunidad legal."
      ],
      "Constitución art. 29"
    ],
    [
      "Un superior pide a un profesional de apoyo expedir una decisión que la ley reserva a otro funcionario. La orden se comunica verbalmente y la persona que la imparte afirma que actúa para proteger el interés general y cumplir una meta urgente.",
      "¿Qué verificación debe preceder a la actuación solicitada en ese caso?",
      [
        "Confirmar que existe una atribución legal para ejercer esa función concreta.",
        "Comprobar que la orden proviene de un superior, pues eso sustituye la atribución legal.",
        "Verificar que la medida es rápida y beneficiosa, con independencia de la competencia."
      ],
      [
        "Ninguna autoridad ejerce funciones distintas de las conferidas por Constitución y ley.",
        "La jerarquía no crea atribuciones.",
        "El objetivo público no reemplaza competencia."
      ],
      "Constitución arts. 6, 121"
    ],
    [
      "Una autoridad tramita una solicitud que puede afectar un derecho fundamental. Tiene dos actuaciones legalmente permitidas: una medida que protege el derecho con garantías y otra que logra el objetivo más rápido pero omite una formalidad sustancial exigible.",
      "¿Qué criterio debe guiar la elección entre esas alternativas disponibles?",
      [
        "Adoptar la actuación competente, proporcionada y respetuosa de las garantías exigibles.",
        "Preferir la vía más breve porque la celeridad prevalece sobre las formalidades sustanciales.",
        "Elegir la actuación más restrictiva para demostrar que se protege el interés general."
      ],
      [
        "La eficacia se armoniza con legalidad y debido proceso.",
        "La celeridad no autoriza omitir garantías.",
        "La intensidad no garantiza proporcionalidad."
      ],
      "Constitución arts. 29, 121, 209"
    ],
    [
      "Una oficina compara dos solicitudes en condiciones equivalentes. Una pertenece a un ciudadano conocido de la jefatura y otra a un ciudadano sin vínculos con la entidad. No concurre una prioridad legal diferente entre las dos peticiones.",
      "¿Qué principio exige aplicar criterios objetivos en la atención de ambas personas?",
      [
        "Igualdad e imparcialidad de la actuación administrativa.",
        "Publicidad de las decisiones sin necesidad de examinar criterios de atención.",
        "Autonomía administrativa para distribuir beneficios según la cercanía con la jefatura."
      ],
      [
        "La igualdad y la imparcialidad proscriben preferencias injustificadas.",
        "Publicidad no sustituye el trato objetivo.",
        "La autonomía no permite privilegios personales."
      ],
      "Constitución arts. 13, 209"
    ],
    [
      "Un funcionario conoce una queja grave que todavía no ha sido corroborada. El equipo propone publicar al presunto autor como responsable y después permitirle presentar sus explicaciones, alegando que la transparencia exige informar cuanto antes.",
      "¿Qué límite constitucional debe preservarse frente a esa comunicación pública?",
      [
        "La presunción de inocencia y el respeto de las garantías antes de atribuir responsabilidad.",
        "La publicidad absoluta de cualquier afirmación formulada por quien presenta una queja.",
        "La atribución provisional de responsabilidad pública mientras se recibe la explicación del señalado."
      ],
      [
        "La presunción impide tratar una imputación no probada como responsabilidad.",
        "La publicidad tiene límites constitucionales y legales.",
        "La defensa posterior no justifica una atribución anticipada."
      ],
      "Constitución arts. 29, 209"
    ],
    [
      "Existe riesgo verificable de afectación de un derecho y una autoridad dispone de facultades legales para recaudar información y adoptar una medida preventiva proporcionada. Un funcionario propone esperar hasta tener certeza de que ya se produjo una infracción.",
      "¿Qué decisión armoniza prevención, competencia y garantías constitucionales?",
      [
        "Ejercer las facultades preventivas habilitadas sin prejuzgar responsabilidad individual.",
        "Postergar toda actuación hasta obtener certeza sancionatoria sobre la posible infracción.",
        "Declarar responsable al servidor preventivamente para justificar la protección del derecho."
      ],
      [
        "La protección oportuna puede ejercerse sin sancionar anticipadamente.",
        "La certeza sancionatoria no es presupuesto universal de prevención.",
        "Prevenir no equivale a declarar responsabilidad."
      ],
      "Constitución arts. 2, 121, 277"
    ],
    [
      "Una entidad expide una instrucción interna que limita el acceso a un servicio público de manera contraria a una norma constitucional directamente aplicable. El funcionario debe resolver un caso concreto y comprueba la incompatibilidad entre ambas disposiciones.",
      "¿Qué regla de jerarquía normativa orienta su decisión en el caso concreto?",
      [
        "Aplicar la Constitución frente a la disposición incompatible, dentro de su competencia.",
        "Aplicar siempre la instrucción interna por ser posterior y específica para la entidad.",
        "Aplicar ambas indistintamente según cuál permita responder más rápido a la solicitud."
      ],
      [
        "La Constitución es norma de normas y prevalece en caso de incompatibilidad.",
        "Posterioridad y especialidad no superan supremacía constitucional.",
        "La rapidez no resuelve la contradicción jerárquica."
      ],
      "Constitución art. 4"
    ]
  ],
  "pgn-m6": [
    [
      "Un ciudadano dirige a la Procuraduría una solicitud para que imponga una pena privativa de libertad por un posible delito cometido por un servidor público. La oficina debe identificar qué institución desarrolla la investigación penal y cuál decide judicialmente.",
      "¿Qué institución tiene a su cargo la investigación penal en el supuesto ordinario?",
      [
        "La Fiscalía General de la Nación, que integra la Rama Judicial.",
        "La Contraloría General, por ejercer vigilancia sobre la gestión fiscal del Estado.",
        "La Procuraduría General, por pertenecer constitucionalmente al Ministerio Público."
      ],
      [
        "La Fiscalía investiga delitos y ejerce la acción penal según sus competencias.",
        "La Contraloría ejerce control fiscal.",
        "La PGN no sustituye la investigación penal."
      ],
      "Constitución arts. 116, 250"
    ],
    [
      "Una entidad está preparando un mapa de organismos de control para orientar ciudadanos. El borrador ubica a la Procuraduría dentro de la Rama Ejecutiva porque sus servidores realizan actuaciones administrativas y atienden solicitudes de interés público.",
      "¿Qué ubicación constitucional corresponde a la Procuraduría en ese mapa?",
      [
        "Organismo del Ministerio Público, distinto de las ramas del poder público.",
        "Ministerio de la Rama Ejecutiva encargado de coordinar la vigilancia administrativa.",
        "Dependencia de la Rama Judicial que decide todas las controversias contra servidores."
      ],
      [
        "La PGN pertenece al Ministerio Público, órgano de control.",
        "No es un ministerio del Gobierno.",
        "La función disciplinaria no la convierte en rama judicial."
      ],
      "Constitución arts. 113, 117–118"
    ],
    [
      "Un equipo de vigilancia detecta una posible afectación al patrimonio estatal derivada de la gestión fiscal y prepara una orientación para el ciudadano. El documento confunde el control fiscal con la potestad disciplinaria sobre deberes funcionales.",
      "¿Qué órgano ejerce constitucionalmente la vigilancia y el control fiscal en su ámbito?",
      [
        "La Contraloría, conforme a la distribución constitucional y legal de competencias.",
        "La Procuraduría, por ser el máximo organismo del Ministerio Público.",
        "La Fiscalía, por investigar conductas que pueden constituir delitos contra la administración."
      ],
      [
        "El control fiscal corresponde a contralorías en sus ámbitos.",
        "La PGN tiene atribuciones diferentes.",
        "La investigación penal no equivale a control fiscal."
      ],
      "Constitución arts. 117–119, 267"
    ],
    [
      "Una revisión de un contrato estatal revela una posible omisión del supervisor, un eventual daño patrimonial y hechos que podrían ser delito. El funcionario debe orientar la información sin asumir que una sola autoridad decide todas esas dimensiones.",
      "¿Qué ruta distingue correctamente los objetos de las posibles actuaciones?",
      [
        "Disciplinaria por deber funcional, fiscal por gestión fiscal y penal por posible delito.",
        "Fiscal por omisión funcional, disciplinaria por daño patrimonial y penal por cualquier incumplimiento contractual.",
        "Penal por todo el contrato, excluyendo las demás actuaciones hasta obtener una sentencia."
      ],
      [
        "Cada régimen examina presupuestos y finalidades diferentes.",
        "La clasificación intercambia los objetos de control.",
        "La dimensión penal no excluye automáticamente otras rutas."
      ],
      "Constitución arts. 250, 267, 277; CGD art. 2"
    ],
    [
      "Un ciudadano solicita asistencia para ejercer un derecho fundamental y no pretende que se declare responsabilidad fiscal ni penal. La oficina estudia a qué institución puede acudir para recibir orientación y apoyo en la defensa de sus derechos.",
      "¿Qué institución cumple funciones constitucionales de promoción y defensa de derechos humanos?",
      [
        "La Defensoría del Pueblo, dentro del Ministerio Público.",
        "La Contraloría General, dentro de la vigilancia de la gestión fiscal.",
        "La Fiscalía General, dentro de la investigación y acusación penal."
      ],
      [
        "La Defensoría promueve y divulga derechos y orienta a las personas.",
        "La Contraloría tiene objeto fiscal.",
        "La Fiscalía ejerce competencias penales."
      ],
      "Constitución arts. 118, 282"
    ],
    [
      "Una autoridad municipal y un organismo de control requieren información sobre un mismo proyecto. La entidad propone entregar toda la dirección del proyecto al organismo de control para evitar actuaciones duplicadas entre las instituciones que intervienen.",
      "¿Qué principio permite coordinar actuaciones sin trasladar competencias propias de cada organismo?",
      [
        "Colaboración armónica entre órganos con funciones constitucionalmente separadas.",
        "Subordinación automática de las autoridades administrativas a cualquier órgano de control.",
        "Unidad de mando para que una sola institución concentre todas las funciones relacionadas."
      ],
      [
        "Los órganos colaboran armónicamente conservando funciones propias.",
        "El control no supone asumir administración ajena.",
        "La unidad de asunto no elimina separación funcional."
      ],
      "Constitución art. 113"
    ],
    [
      "La Fiscalía abre investigación sobre una conducta que también podría constituir falta disciplinaria. No existe fallo penal y la autoridad disciplinaria recibe información concreta que permite examinar sus propias atribuciones conforme al Código.",
      "¿Qué efecto tiene la apertura penal sobre la decisión disciplinaria de iniciar su propia actuación?",
      [
        "No impide examinar los presupuestos disciplinarios por la independencia de ambas acciones.",
        "Obliga a suspender cualquier actuación disciplinaria hasta que concluya el juicio penal.",
        "Demuestra la falta disciplinaria y permite formular cargos sin valorar otras pruebas."
      ],
      [
        "La acción disciplinaria es independiente de otras acciones.",
        "La apertura penal no impone suspensión automática.",
        "La noticia penal no prueba por sí sola la falta."
      ],
      "CGD art. 2; Constitución art. 277"
    ],
    [
      "Una contraloría comunica un hallazgo fiscal a una autoridad disciplinaria. La documentación puede ser útil, pero el informe no analiza todos los elementos subjetivos y funcionales que exige el régimen disciplinario respecto del servidor.",
      "¿Qué valor debe asignarse al hallazgo fiscal dentro de la actuación disciplinaria?",
      [
        "Examinar los soportes y su incorporación, valorando autónomamente los elementos disciplinarios.",
        "Adoptar el hallazgo como prueba automática de responsabilidad disciplinaria definitiva.",
        "Descartar todos los soportes porque provienen de una autoridad de naturaleza fiscal."
      ],
      [
        "El hallazgo puede orientar y aportar evidencia, sin sustituir valoración propia.",
        "Los presupuestos de responsabilidad no son idénticos.",
        "El origen fiscal no impide examinar evidencia legalmente incorporada."
      ],
      "CGD arts. 147, 154, 159"
    ],
    [
      "Una actuación penal termina sin condena respecto de un servidor. La autoridad disciplinaria tiene un expediente por posible incumplimiento de deberes, con fundamentos propios, y debe determinar el alcance de la decisión penal en ese asunto.",
      "¿Qué análisis corresponde antes de inferir que el resultado debe ser idéntico?",
      [
        "Examinar fundamentos, hechos y efectos jurídicos de la decisión penal frente al régimen disciplinario.",
        "Archivar necesariamente porque cualquier decisión penal favorable extingue la acción disciplinaria.",
        "Sancionar necesariamente porque el proceso disciplinario es independiente del proceso penal."
      ],
      [
        "La independencia no permite trasladar automáticamente resultados ni ignorar su fundamento.",
        "No existe extinción automática por cualquier decisión penal favorable.",
        "La independencia tampoco autoriza sanción sin prueba."
      ],
      "CGD arts. 2, 147, 160"
    ]
  ],
  "pgn-m7": [
    [
      "Una oficina recibe solicitudes equivalentes y aplica reglas diferentes por afinidad personal con uno de los ciudadanos. El jefe sostiene que ambas serán respondidas dentro del plazo legal, por lo que no existe problema con modificar arbitrariamente sus turnos.",
      "¿Qué principio de la función administrativa resulta comprometido por esa preferencia?",
      [
        "Igualdad e imparcialidad al aplicar criterios objetivos de atención.",
        "Economía por reducir el número de actuaciones necesarias para responder.",
        "Publicidad por comunicar a los solicitantes que las respuestas están en trámite."
      ],
      [
        "El trato preferente sin fundamento afecta igualdad e imparcialidad.",
        "Economía no justifica favoritismo.",
        "Informar el trámite no corrige el criterio desigual."
      ],
      "Constitución art. 209; CPACA art. 3"
    ],
    [
      "Un procedimiento interno exige documentos que la entidad ya tiene en sus archivos. El responsable reconoce que puede consultarlos directamente sin afectar garantías ni desconocer una exigencia legal, pero insiste en pedirlos de nuevo al ciudadano.",
      "¿Qué principio justifica evitar esa carga administrativa innecesaria sobre el interesado?",
      [
        "Economía, mediante el uso razonable de recursos y la simplificación compatible con la ley.",
        "Publicidad, mediante la publicación de todos los documentos que reposan en los archivos.",
        "Imparcialidad, mediante la obligación de exigir siempre los mismos documentos a cada persona."
      ],
      [
        "La economía procura optimizar actuaciones sin perder garantías.",
        "Publicar archivos no resuelve la duplicidad de exigencias.",
        "Trato igual no exige cargas innecesarias."
      ],
      "Constitución art. 209; CPACA art. 3"
    ],
    [
      "Una entidad reporta cien trámites cerrados, pero las verificaciones muestran que varias respuestas no resolvieron las solicitudes de los ciudadanos. La oficina considera cumplida su finalidad porque superó la meta numérica de cierres del mes.",
      "¿Qué principio exige examinar si se alcanzó el resultado material del servicio?",
      [
        "Eficacia, orientada a la finalidad de la actuación y la efectividad de derechos.",
        "Celeridad, entendida como cierre de cualquier actuación dentro del tiempo disponible.",
        "Publicidad, entendida como registro de los trámites cerrados en el tablero."
      ],
      [
        "La eficacia no se reduce a contabilizar actividad.",
        "La rapidez no demuestra respuesta material suficiente.",
        "Publicar un conteo no satisface el objeto del trámite."
      ],
      "Constitución art. 209; CPACA art. 3"
    ],
    [
      "Un solicitante conocido del funcionario pide que su trámite sea atendido antes que los demás. En el mismo momento otra persona acredita sumariamente riesgo de perjuicio irremediable y titularidad de un derecho fundamental cuya protección requiere prioridad.",
      "¿Qué criterio permite ordenar la atención de los dos asuntos conforme a la ley?",
      [
        "Aplicar la prioridad legal acreditada y conservar criterios objetivos para los demás trámites.",
        "Atender primero al conocido porque su solicitud fue informalmente recomendada por la jefatura.",
        "Mantener siempre el orden cronológico aunque se acrediten los presupuestos de atención prioritaria."
      ],
      [
        "La prioridad legal es compatible con igualdad material.",
        "La relación personal no configura excepción.",
        "El turno ordinario cede ante la prioridad prevista en la ley."
      ],
      "Ley 1755/2015 art. 20; CPACA art. 3"
    ],
    [
      "Una respuesta administrativa contiene información de interés público y datos privados de terceros que no son necesarios para satisfacer la solicitud. El equipo propone publicar el expediente completo invocando el principio constitucional de publicidad.",
      "¿Cómo debe aplicarse la publicidad ante información con límites legales de acceso?",
      [
        "Facilitar acceso a lo público y proteger los datos legalmente restringidos.",
        "Divulgar íntegramente todo el expediente porque la publicidad no admite excepciones legales.",
        "Negar cualquier información relacionada con el expediente por contener datos de terceros."
      ],
      [
        "Publicidad se armoniza con reservas y protección de derechos.",
        "Existen excepciones legales.",
        "La restricción parcial no exige negar todo."
      ],
      "Constitución art. 209; Ley 1712/2014 art. 21"
    ],
    [
      "Una dependencia recibe un asunto con componentes que deben ser tramitados por otra autoridad. El responsable puede compartir información necesaria por canales autorizados, pero propone asumir la decisión ajena para acelerar la atención al ciudadano.",
      "¿Qué principio permite organizar el trámite sin sustituir la autoridad competente?",
      [
        "Coordinación, articulando actuaciones y remisiones dentro de las atribuciones de cada entidad.",
        "Celeridad, que permite a cualquier dependencia decidir cuando otra autoridad demora.",
        "Eficacia, que convierte toda solicitud urgente en competencia de la oficina receptora."
      ],
      [
        "La coordinación armoniza funciones sin trasladarlas arbitrariamente.",
        "La rapidez no crea competencia.",
        "El objetivo no altera atribuciones legales."
      ],
      "Constitución arts. 121, 209; CPACA art. 3"
    ],
    [
      "Una jefatura ordena alterar una fecha de radicación para que la entidad parezca haber cumplido el término de una solicitud. La corrección propuesta no corresponde a un error real y los soportes originales contienen la fecha efectiva de recepción.",
      "¿Qué principio de la función administrativa obliga a conservar la fecha verdadera?",
      [
        "Moralidad, mediante una actuación íntegra y fiel a la información verificable.",
        "Economía, mediante la eliminación de registros que generan trabajo adicional al funcionario.",
        "Celeridad, mediante la adaptación de fechas para alcanzar indicadores de oportunidad."
      ],
      [
        "La moralidad exige rectitud e integridad en el ejercicio público.",
        "El ahorro no autoriza eliminar soportes reales.",
        "La meta no justifica alterar registros."
      ],
      "Constitución art. 209; CPACA art. 3"
    ],
    [
      "Un ciudadano inicialmente solicita acceso a un documento público. Durante la revisión aparece un anexo cuya reserva legal está acreditada, pero el resto del documento puede divulgarse sin revelar el contenido protegido de manera directa o indirecta.",
      "¿Qué ajuste permite mantener publicidad y legalidad al responder esa solicitud?",
      [
        "Preparar una versión pública que suprima únicamente la información legalmente protegida.",
        "Mantener la decisión inicial de entrega íntegra porque la reserva fue detectada posteriormente.",
        "Cambiar la decisión a negativa total aunque el resto pueda divulgarse de forma separada."
      ],
      [
        "La divulgación parcial protege el contenido exceptuado.",
        "La reserva detectada debe valorarse antes de divulgar.",
        "La negativa total no se justifica si existe parte separable."
      ],
      "Ley 1712/2014 art. 21"
    ],
    [
      "Un procedimiento ordinario está próximo a vencer y la autoridad advierte una irregularidad que puede corregirse antes de decidir. El defecto afecta la oportunidad de intervención de un tercero y aún es posible garantizarla dentro del marco legal.",
      "¿Qué actuación armoniza celeridad, eficacia y debido proceso en esa circunstancia?",
      [
        "Corregir oportunamente la irregularidad y permitir intervención antes de decidir.",
        "Expedir la decisión sin corregir y considerar la garantía después de su ejecución.",
        "Reiniciar automáticamente todo el procedimiento aunque sea suficiente corregir el defecto."
      ],
      [
        "El art. 41 permite corregir antes de decidir y proteger garantías.",
        "La corrección posterior no reemplaza la participación oportuna.",
        "No toda irregularidad exige reinicio total."
      ],
      "CPACA arts. 3, 37, 41"
    ]
  ],
  "pgn-m8": [
    [
      "Un concejal sostiene que no es servidor público porque no tiene un empleo de planta en la alcaldía. Durante el análisis de una actuación se necesita determinar si la Constitución incluye a los miembros de corporaciones públicas dentro de esa categoría.",
      "¿Qué regla constitucional corresponde a la calidad del concejal en ese supuesto?",
      [
        "Es servidor público por ser miembro de una corporación pública.",
        "Es particular porque no tiene vínculo laboral con la administración municipal.",
        "Es trabajador oficial exclusivamente si recibe remuneración por asistir a sesiones."
      ],
      [
        "El art. 123 incluye miembros de corporaciones públicas.",
        "No se exige empleo de planta para esa categoría.",
        "La remuneración no lo convierte en trabajador oficial."
      ],
      "Constitución art. 123"
    ],
    [
      "Una persona presta servicios técnicos por contrato estatal sin ejercer funciones públicas, administrar recursos públicos ni realizar interventoría o supervisión. El equipo la clasifica como servidora pública por el solo origen estatal de sus honorarios.",
      "¿Qué distinción debe aplicar al establecer la calidad jurídica de esa persona?",
      [
        "El contrato no la convierte automáticamente en servidora pública ni en sujeto disciplinable.",
        "Todo contratista es empleado público cuando recibe honorarios de una entidad estatal.",
        "Toda persona contratada ejerce función pública porque realiza una tarea para la administración."
      ],
      [
        "El vínculo contractual y las categorías de servidor o disciplinable son distintos.",
        "El pago no crea empleo público.",
        "Prestar servicios no equivale necesariamente a ejercer función pública."
      ],
      "Constitución art. 123; CGD arts. 25, 70"
    ],
    [
      "Una entidad analiza la actuación de un empleado que adoptó una decisión fuera de las atribuciones de su cargo. El empleado alega que el resultado benefició a la institución y por eso no puede examinarse su eventual responsabilidad funcional.",
      "¿Qué regla permite evaluar esa extralimitación aun cuando se invoque un resultado favorable?",
      [
        "Los servidores responden también por extralimitación en el ejercicio de sus funciones.",
        "El beneficio institucional sustituye la competencia legal para adoptar cualquier decisión pública.",
        "La responsabilidad únicamente procede si la actuación genera un daño patrimonial cuantificable."
      ],
      [
        "El art. 6 incluye extralimitación como supuesto de responsabilidad.",
        "El beneficio no atribuye funciones.",
        "La responsabilidad disciplinaria no exige siempre daño patrimonial."
      ],
      "Constitución arts. 6, 121"
    ],
    [
      "Un informe atribuye la pérdida de un expediente al jefe de una dependencia. Los documentos muestran que había delegación de tareas y un manual vigente que distribuye obligaciones, pero no identifican qué deber concreto correspondía a cada servidor.",
      "¿Qué debe establecer primero el profesional antes de atribuir una omisión a una persona?",
      [
        "El deber funcional aplicable al momento del hecho y su asignación jurídica efectiva.",
        "La ubicación del servidor en el organigrama como prueba suficiente de cualquier incumplimiento.",
        "El valor estimado de la pérdida como criterio único para determinar quién tenía el deber."
      ],
      [
        "El deber concreto precede al análisis de conducta imputable.",
        "La jefatura no prueba automáticamente autoría u omisión.",
        "El daño no define por sí solo la atribución funcional."
      ],
      "Constitución arts. 6, 122; CGD arts. 9, 27"
    ],
    [
      "Una funcionaria no realiza una actuación durante un periodo en que el sistema institucional estuvo fuera de servicio. El expediente contiene un procedimiento de contingencia y debe verificarse si podía utilizarlo para cumplir su deber oportunamente.",
      "¿Qué cuestión debe examinarse para determinar el alcance de la posible omisión?",
      [
        "Si existía deber de actuar y posibilidad efectiva de cumplirlo en esas circunstancias.",
        "Si la caída del sistema exonera automáticamente cualquier conducta de todos los funcionarios.",
        "Si el resultado tardío permite atribuir responsabilidad sin analizar las circunstancias operativas."
      ],
      [
        "La omisión exige examinar deber y posibilidad de actuar.",
        "La falla técnica no elimina necesariamente alternativas de cumplimiento.",
        "El resultado no prueba responsabilidad objetiva."
      ],
      "CGD arts. 9–10, 27, 31"
    ],
    [
      "Un servidor aparece como titular de una cuenta que ejecutó una modificación de datos. El informe técnico acredita que varios operadores tenían acceso a la misma cuenta y todavía no existen registros que individualicen a quien realizó el cambio.",
      "¿Qué conclusión puede sostener el profesional acerca de la responsabilidad personal?",
      [
        "La operación está registrada, pero la identidad del operador requiere comprobaciones adicionales.",
        "El titular de la cuenta realizó la operación porque su nombre aparece en el registro.",
        "Todos los usuarios autorizados son responsables en partes iguales de la modificación registrada."
      ],
      [
        "La atribución personal requiere prueba adicional cuando la cuenta es compartida.",
        "Titularidad no demuestra ejecución.",
        "El acceso compartido no prueba participación de todos."
      ],
      "CGD arts. 10, 147–148"
    ],
    [
      "Una investigación contractual documenta un posible daño fiscal y una conducta que podría afectar el deber funcional del supervisor. El profesional debe remitir un informe a las autoridades pertinentes sin confundir sus atribuciones decisorias.",
      "¿Qué diferencia debe conservar al describir las dos dimensiones de responsabilidad?",
      [
        "Separar el análisis del deber disciplinario del examen del daño fiscal según cada régimen.",
        "Declarar responsabilidad fiscal en el informe disciplinario cuando el daño parezca cuantificable.",
        "Tratar toda afectación funcional como daño fiscal aunque no se acredite pérdida patrimonial."
      ],
      [
        "Los objetos y presupuestos de ambos regímenes son diferentes.",
        "El informe no sustituye la decisión fiscal competente.",
        "Afectación funcional no equivale siempre a daño patrimonial."
      ],
      "Constitución arts. 6, 267, 277"
    ],
    [
      "Un servidor que se retiró de la entidad antes de recibirse la queja realizó la conducta cuestionada cuando estaba en ejercicio del cargo. La acción permanece vigente y la autoridad conoce el deber funcional que pudo haber infringido.",
      "¿Qué consecuencia tiene el retiro sobre el análisis de esa conducta previa?",
      [
        "Puede ser objeto de actuación disciplinaria pese a no continuar vinculado a la entidad.",
        "El retiro extingue automáticamente toda acción disciplinaria relacionada con el cargo anterior.",
        "Solo puede examinarse la conducta si el servidor obtiene un nuevo nombramiento público."
      ],
      [
        "El CGD comprende servidores retirados por hechos de su servicio.",
        "El retiro no es causal de extinción.",
        "No se exige una nueva vinculación."
      ],
      "CGD arts. 25, 32"
    ],
    [
      "Un informe demuestra una irregularidad y cuantifica el daño, pero no acredita la culpabilidad del servidor a quien se pretende atribuirla. La autoridad analiza si el resultado desfavorable es suficiente para imponer una sanción disciplinaria.",
      "¿Qué presupuesto adicional impide sancionar exclusivamente por el resultado irregular?",
      [
        "Acreditar culpabilidad y los demás elementos de la responsabilidad disciplinaria personal.",
        "Acreditar solamente que el servidor ocupaba el cargo durante el periodo investigado.",
        "Acreditar que otro órgano de control recibió el informe sobre el mismo hecho."
      ],
      [
        "El CGD proscribe responsabilidad objetiva.",
        "La ocupación del cargo no acredita culpabilidad.",
        "La recepción del informe no demuestra responsabilidad."
      ],
      "CGD arts. 9–10, 160"
    ]
  ],
  "pgn-m9": [
    [
      "Un municipio dicta una medida contraria a una ley nacional argumentando que su autonomía le permite organizar todos los asuntos locales sin límites externos. La autoridad debe examinar la relación entre autonomía territorial y unidad del Estado.",
      "¿Qué alcance tiene la autonomía territorial según el orden constitucional colombiano?",
      [
        "Se ejerce dentro de los límites establecidos por Constitución y ley.",
        "Equivale a soberanía plena para inaplicar cualquier ley nacional en el territorio.",
        "Desaparece completamente porque Colombia está organizada como república unitaria."
      ],
      [
        "La autonomía está reconocida, pero no es soberanía.",
        "La entidad territorial permanece sujeta al ordenamiento.",
        "La unidad estatal admite descentralización y autonomía."
      ],
      "Constitución arts. 1, 287"
    ],
    [
      "Varios municipios crean una asociación para ejecutar proyectos regionales y comparten recursos conforme a un convenio. Un informe afirma que la asociación se convierte automáticamente en una nueva entidad territorial del mismo nivel que un departamento.",
      "¿Qué distinción exige el artículo 286 frente a esa afirmación del informe?",
      [
        "La asociación no adquiere automáticamente calidad de entidad territorial por su creación.",
        "Toda asociación de municipios es una entidad territorial autónoma reconocida por la Constitución.",
        "Las entidades territoriales pueden crear departamentos mediante convenios administrativos entre sus alcaldes."
      ],
      [
        "Las entidades territoriales responden al régimen constitucional y legal correspondiente.",
        "La asociación es un esquema de cooperación, no necesariamente entidad territorial.",
        "Un convenio no crea por sí solo un departamento."
      ],
      "Constitución art. 286; Ley 1454/2011"
    ],
    [
      "Una entidad territorial prepara su presupuesto y elige autoridades propias dentro del ordenamiento. Un asesor sostiene que esas facultades dependen exclusivamente de una autorización discrecional anual del Gobierno nacional y no de derechos constitucionales.",
      "¿Qué garantía reconoce el artículo 287 para las entidades territoriales?",
      [
        "Gobernarse por autoridades propias y gestionar recursos y competencias dentro de la ley.",
        "Administrar recursos sin controles legales por tratarse de ingresos del territorio correspondiente.",
        "Ejercer exclusivamente funciones que el Gobierno decida autorizar cada año mediante instrucciones."
      ],
      [
        "El art. 287 reconoce autoridades, competencias y administración de recursos.",
        "La autonomía conserva límites legales.",
        "Las competencias tienen fundamento normativo, no mera autorización anual."
      ],
      "Constitución art. 287"
    ],
    [
      "Un departamento y varios municipios ejecutan un proyecto compartido. Cada uno conserva sus obligaciones legales y se reúnen para armonizar cronogramas, información y metas, de forma que las actuaciones no sean contradictorias entre sí.",
      "¿Qué principio de distribución territorial describe principalmente esa armonización de actuaciones?",
      [
        "Coordinación entre autoridades de distintos niveles dentro de sus competencias.",
        "Subsidiariedad porque el departamento necesariamente reemplaza a los municipios en el proyecto.",
        "Concurrencia entendida como transferencia total de atribuciones al departamento coordinador."
      ],
      [
        "La coordinación armoniza el ejercicio de atribuciones propias.",
        "No se acredita incapacidad que active apoyo subsidiario.",
        "Concurrir no equivale a transferir todas las competencias."
      ],
      "Constitución art. 288; Ley 1454/2011 art. 27"
    ],
    [
      "Una competencia sobre un servicio se distribuye legalmente entre el departamento y los municipios. Cada nivel debe aportar recursos o actividades específicas y ambos intervienen de manera articulada para alcanzar el resultado público previsto.",
      "¿Qué principio explica la participación conjunta de esos niveles en el ejercicio de la competencia?",
      [
        "Concurrencia, de acuerdo con la distribución y condiciones establecidas por la ley.",
        "Subsidiariedad, porque uno de los niveles asume todas las competencias del otro.",
        "Autonomía, entendida como ejercicio aislado sin relación con los demás niveles."
      ],
      [
        "La concurrencia permite actuación articulada de niveles habilitados.",
        "No implica reemplazo completo del otro nivel.",
        "La autonomía no elimina coordinación y concurrencia."
      ],
      "Constitución art. 288; Ley 1454/2011 art. 27"
    ],
    [
      "Un municipio demuestra que no puede ejercer debidamente una competencia por limitaciones institucionales concretas. La ley permite que una instancia habilitada lo apoye temporal y parcialmente, conservando los límites de esa intervención.",
      "¿Qué principio fundamenta ese apoyo temporal bajo los presupuestos descritos?",
      [
        "Subsidiariedad, cuando se acredita imposibilidad de ejercer adecuadamente la competencia.",
        "Centralización permanente, que elimina la competencia del municipio beneficiario del apoyo.",
        "Coordinación entendida como asistencia obligatoria sin comprobar la necesidad ni las reglas legales."
      ],
      [
        "La subsidiariedad permite apoyo transitorio y parcial en el supuesto legal.",
        "No equivale a supresión permanente de competencias.",
        "La asistencia subsidiaria requiere presupuestos específicos."
      ],
      "Ley 1454/2011 art. 27; Constitución art. 288"
    ],
    [
      "Una queja disciplinaria llega a la sede de Procuraduría más cercana al lugar de los hechos. El servidor involucrado pertenece a una entidad departamental y una regla orgánica especial puede atribuir el asunto a otra dependencia.",
      "¿Qué verificación debe realizarse antes de decidir qué despacho asume la instrucción?",
      [
        "Examinar sujeto, nivel, materia, territorio, etapa y reglas orgánicas aplicables.",
        "Asignar automáticamente la queja a la sede físicamente más cercana al hecho investigado.",
        "Asignar el asunto al último despacho que recibió el escrito con los documentos anexos."
      ],
      [
        "La competencia combina factores legales y orgánicos.",
        "La distancia física no determina por sí sola atribución.",
        "La recepción material no confiere competencia."
      ],
      "Decreto Ley 262/2000; Decreto Ley 1851/2021"
    ],
    [
      "Un asunto disciplinario reúne hechos relacionados ocurridos en dos municipios y posibles intervinientes sujetos a reglas orgánicas diferentes. Una dependencia propone escoger el despacho únicamente con base en el municipio que registra el último hecho.",
      "¿Qué aspecto adicional debe examinar para resolver correctamente la distribución del asunto?",
      [
        "Conexidad y factores de competencia, incluyendo las reglas especiales que resulten aplicables.",
        "La fecha más reciente como factor exclusivo que desplaza todas las reglas de competencia.",
        "La cercanía de un despacho a ambos municipios como criterio decisorio único del reparto."
      ],
      [
        "La conexidad puede activar reglas específicas de distribución.",
        "El último hecho no resuelve todas las atribuciones.",
        "La proximidad no sustituye competencia orgánica."
      ],
      "Decreto Ley 262/2000; CGD arts. 91–98"
    ],
    [
      "Una dependencia territorial de instrucción concluye su actuación y remite cargos. El equipo propone mantener el expediente en la misma autoridad para el juzgamiento porque todos los hechos ocurrieron dentro de su circunscripción.",
      "¿Qué límite debe observarse además del factor territorial al asignar la etapa siguiente?",
      [
        "Verificar la competencia de juzgamiento y separación funcional respecto de la instrucción.",
        "Mantener siempre el mismo funcionario si la competencia territorial no ha cambiado.",
        "Asignar automáticamente el fallo al despacho que recibió inicialmente la queja."
      ],
      [
        "La etapa y separación funcional son factores decisivos.",
        "El territorio no elimina imparcialidad estructural.",
        "La recepción inicial no determina quién juzga."
      ],
      "CGD art. 12; Decreto Ley 1851/2021"
    ]
  ],
  "pgn-m10": [
    [
      "Una entidad prepara material de orientación ciudadana y presenta a la Procuraduría como un ministerio encargado de dirigir las políticas del Gobierno. El equipo necesita corregir esa ubicación institucional antes de publicar el material.",
      "¿Qué naturaleza constitucional corresponde a la Procuraduría?",
      [
        "Es un organismo del Ministerio Público con atribuciones constitucionales propias.",
        "Es un ministerio ejecutivo encargado de coordinar el control administrativo.",
        "Es una dependencia judicial que resuelve controversias entre ciudadanos y autoridades."
      ],
      [
        "La PGN pertenece al Ministerio Público.",
        "No integra el Gobierno nacional.",
        "La potestad disciplinaria no la convierte en órgano judicial."
      ],
      "Constitución arts. 117–118, 275–277"
    ],
    [
      "Un municipio advierte que una falla de planeación amenaza la continuidad de un servicio esencial. Todavía no existe una falta consumada acreditada y la Procuraduría puede ejercer vigilancia dentro de las atribuciones de la dependencia competente.",
      "¿Qué función permite examinar el riesgo antes de que se materialice?",
      [
        "Función preventiva y de control de gestión dentro de las atribuciones legales.",
        "Función disciplinaria mediante declaración anticipada de responsabilidad individual.",
        "Función de intervención mediante sustitución de decisiones administrativas municipales."
      ],
      [
        "Prevenir permite actuar antes de consumarse el daño.",
        "No es sanción anticipada.",
        "La intervención no sustituye la administración."
      ],
      "Constitución art. 277; Guía Preventiva PGN"
    ],
    [
      "Un agente del Ministerio Público participa en un proceso judicial en el que se discute una afectación a derechos fundamentales. Presenta argumentos sustentados para que la autoridad judicial considere una medida prevista por la ley.",
      "¿Qué función constitucional ejerce en esa participación ante el órgano judicial?",
      [
        "Intervención en defensa del orden jurídico, patrimonio público o derechos fundamentales.",
        "Investigación disciplinaria dirigida a sancionar al funcionario que conoce el proceso.",
        "Control fiscal destinado a decidir responsabilidad patrimonial de los litigantes."
      ],
      [
        "El art. 277.7 prevé esa intervención.",
        "Participar no equivale a investigar al juez.",
        "El agente no decide responsabilidad fiscal."
      ],
      "Constitución art. 277.7"
    ],
    [
      "Una oficina recibe un informe con dos componentes: una posible interrupción futura del servicio de salud y documentos sobre una omisión funcional ya ocurrida. Ambos asuntos pueden corresponder a atribuciones diferentes de Procuraduría.",
      "¿Qué tratamiento permite ejercer las funciones misionales sin confundir sus propósitos?",
      [
        "Evaluar rutas preventiva y disciplinaria separadamente y articular información pertinente.",
        "Abrir únicamente investigación y esperar el fallo para evaluar el riesgo.",
        "Declarar responsabilidad dentro del informe preventivo para evitar actuaciones separadas."
      ],
      [
        "Las rutas pueden concurrir con objetos y garantías diferentes.",
        "La prevención no depende de sanción.",
        "El informe preventivo no declara responsabilidad."
      ],
      "Constitución art. 277; Decreto Ley 262/2000"
    ],
    [
      "Una queja identificada narra hechos concretos de posible incumplimiento de deberes de un servidor. El responsable de atención propone clasificarla exclusivamente como solicitud de orientación y no remitirla para evaluación disciplinaria.",
      "¿Qué debe examinar el operador frente a los hechos concretos narrados?",
      [
        "Si existe noticia disciplinaria y qué autoridad resulta competente para evaluarla.",
        "Si el ciudadano solicitó una sanción, único supuesto de inicio disciplinario.",
        "Si la conducta produjo daño fiscal, presupuesto de toda acción disciplinaria."
      ],
      [
        "La relevancia y competencia orientan la noticia.",
        "También puede iniciarse de oficio o por informe.",
        "No toda falta exige daño patrimonial."
      ],
      "Constitución art. 277.6; CGD arts. 85–87"
    ],
    [
      "Una dependencia de la PGN conoce la existencia de un proceso contencioso sobre un acto administrativo. Su equipo preventivo desea solicitar una medida al juez en nombre de toda la entidad, sin revisar la habilitación procesal correspondiente.",
      "¿Qué presupuesto debe verificar antes de intervenir en ese proceso judicial?",
      [
        "Competencia del agente, proceso, etapa y facultades legalmente previstas.",
        "Pertenencia de los funcionarios a la planta de personal de Procuraduría.",
        "Existencia de cualquier alerta preventiva que habilite toda intervención judicial."
      ],
      [
        "La intervención requiere atribución procesal.",
        "Pertenecer a PGN no otorga todas las competencias.",
        "La alerta no sustituye las reglas procesales."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ],
    [
      "Una entidad vigilada ejecuta las medidas correctivas solicitadas durante una actuación preventiva y entrega soportes de reducción del riesgo. El expediente conserva además información sobre una posible omisión funcional anterior que no se ha evaluado disciplinariamente.",
      "¿Qué efecto tiene la corrección frente a la eventual falta anterior?",
      [
        "Verificar el resultado preventivo sin concluir automáticamente que desapareció la relevancia disciplinaria.",
        "Archivar toda noticia previa porque la entidad corrigió la situación administrativa.",
        "Sancionar al servidor porque la corrección confirma necesariamente una falta anterior."
      ],
      [
        "El resultado preventivo no resuelve por sí solo otra actuación.",
        "Corregir no extingue automáticamente una posible falta.",
        "La mejora no demuestra responsabilidad."
      ],
      "Constitución art. 277; CGD arts. 9–10, 147"
    ],
    [
      "En una vigilancia preventiva surge un documento que individualiza al posible autor de una conducta disciplinariamente relevante. El funcionario preventivo no tiene competencia de instrucción, pero dispone de canales institucionales para entregar la información.",
      "¿Cómo debe gestionar esa información dentro del límite de su función?",
      [
        "Preservar los soportes y remitir a la autoridad disciplinaria competente.",
        "Formular cargos dentro del expediente preventivo al conocer la identidad del autor.",
        "Retener la información hasta finalizar toda la actuación preventiva de vigilancia."
      ],
      [
        "El servidor sin competencia informa a quien corresponda.",
        "La identidad no habilita cargos desde prevención.",
        "No se exige esperar el cierre preventivo."
      ],
      "CGD arts. 87, 211–222"
    ],
    [
      "Dos informes institucionales presentan cifras incompatibles sobre el mismo riesgo. El operador debe decidir si emite un requerimiento preventivo motivado y existe tiempo para comprobar las definiciones, fechas de corte y fuentes originales.",
      "¿Qué actuación conserva el fundamento y los límites de la prevención?",
      [
        "Contrastar fuentes y distinguir hechos comprobados de incertidumbres al motivar la advertencia.",
        "Seleccionar la cifra más alta para justificar la actuación más intensa.",
        "Suspender toda vigilancia porque los informes contienen datos que no coinciden."
      ],
      [
        "La advertencia requiere información verificable.",
        "La cifra mayor no es necesariamente confiable.",
        "Discrepar exige contraste, no parálisis."
      ],
      "Constitución art. 277; Resolución PGN 132/2014"
    ]
  ],
  "pgn-m11": [
    [
      "Un servidor de una dependencia central afirma que todas las procuradurías delegadas tienen competencia indistinta para conocer cualquier asunto disciplinario. El equipo de reparto necesita contrastar esa afirmación con la estructura institucional vigente.",
      "¿Qué criterio debe utilizar al asignar asuntos a procuradurías delegadas?",
      [
        "Consultar especialidades y atribuciones de cada dependencia según las reglas orgánicas.",
        "Distribuir indistintamente todos los casos entre las delegadas del nivel central.",
        "Asignar cada caso a la delegada con menor cantidad de expedientes pendientes."
      ],
      [
        "Las competencias están delimitadas normativamente.",
        "El nivel central no crea competencia indistinta.",
        "La carga de trabajo no sustituye la atribución legal."
      ],
      "Decreto Ley 262/2000; Decreto Ley 1851/2021"
    ],
    [
      "La oficina prepara un organigrama funcional de la Procuraduría después de la reforma disciplinaria. El borrador incluye una sola categoría de procuradurías delegadas disciplinarias y atribuye a cada despacho todas las fases de un expediente.",
      "¿Qué separación estructural debe reflejar el organigrama actualizado de la entidad?",
      [
        "Dependencias de instrucción y de juzgamiento con competencias diferenciadas.",
        "Dependencias instructoras que formulan cargos y emiten el fallo del mismo asunto.",
        "Dependencias exclusivamente territoriales, sin atribuciones disciplinarias del nivel central."
      ],
      [
        "La estructura reformada distingue instrucción y juicio.",
        "No se concentra acusación y fallo en el mismo funcionario.",
        "Existen niveles central y territorial."
      ],
      "Decreto Ley 262/2000 art. 2; Decreto Ley 1851/2021 art. 1; CGD art. 12"
    ],
    [
      "Una queja se presenta ante una procuraduría provincial por facilidad de acceso del ciudadano. El asunto puede corresponder a otra dependencia territorial debido a la calidad y nivel del servidor investigado y a la naturaleza de la conducta.",
      "¿Qué diferencia debe reconocer entre la sede receptora y la competente?",
      [
        "Recibir la noticia no atribuye automáticamente competencia para adelantar el procedimiento.",
        "Registrar primero el escrito del ciudadano atribuye competencia de fondo a la receptora.",
        "La provincial desplaza a las regionales por proximidad al lugar de los hechos."
      ],
      [
        "Recepción y conocimiento de fondo son distintos.",
        "Registrar no crea potestades.",
        "Las reglas orgánicas delimitan la competencia."
      ],
      "Decreto Ley 262/2000; Decreto Ley 1851/2021"
    ],
    [
      "Una noticia describe hechos cometidos por una persona vinculada a una entidad pública. El reparto cuenta con el nombre y lugar de los hechos, pero desconoce el nivel del cargo, sus funciones y si existe una atribución disciplinaria especial.",
      "¿Qué datos necesita completar antes de asignar el expediente para actuación sustancial?",
      [
        "Calidad y nivel del sujeto, materia, circunscripción, etapa y reglas especiales.",
        "Residencia del denunciante y antigüedad del funcionario encargado del reparto.",
        "Número de anexos y disponibilidad física de cada despacho de instrucción."
      ],
      [
        "La competencia reúne factores subjetivos, funcionales y territoriales.",
        "La residencia no resuelve el reparto.",
        "La logística no sustituye las reglas normativas."
      ],
      "CGD arts. 91–98; Decreto Ley 262/2000"
    ],
    [
      "El equipo identifica dos actuaciones que podrían estar relacionadas y se encuentran distribuidas en despachos territoriales diferentes. Una de ellas involucra servidores de un nivel sujeto a una regla orgánica especial de competencia.",
      "¿Qué control precede a una eventual acumulación o redistribución de expedientes?",
      [
        "Verificar conexidad y normas que atribuyen conocimiento de los asuntos relacionados.",
        "Acumular siempre en la dependencia que inició primero su actuación disciplinaria.",
        "Distribuir ambos expedientes a la sede más cercana a los hechos."
      ],
      [
        "La conexidad requiere presupuestos y atribuciones.",
        "La prioridad cronológica no desplaza la ley.",
        "La distancia no resuelve competencia funcional."
      ],
      "CGD arts. 91–98; Decreto Ley 262/2000"
    ],
    [
      "Una dependencia de instrucción formula válidamente cargos y termina las notificaciones correspondientes. La secretaría prepara el reparto para continuar el procedimiento y propone dejar el asunto a la misma autoridad que formuló la acusación.",
      "¿Qué debe verificar al asignar el expediente para juzgamiento?",
      [
        "La dependencia y el funcionario habilitados, distintos de quienes ejercieron instrucción.",
        "La permanencia del instructor por haber tramitado la mayor parte del expediente.",
        "La asignación al despacho que recibió inicialmente la noticia disciplinaria."
      ],
      [
        "La fase siguiente exige separación y competencia.",
        "La continuidad no elimina imparcialidad estructural.",
        "La recepción no determina quién juzga."
      ],
      "CGD arts. 12, 225–225A; Decreto Ley 1851/2021"
    ],
    [
      "Una procuraduría delegada recibe una petición para asumir un asunto actualmente conocido por una dependencia territorial. El solicitante invoca competencia preferente, pero no se han examinado las atribuciones ni las condiciones legales para ejercerla.",
      "¿Qué límite debe observar antes de modificar el despacho competente?",
      [
        "Comprobar la habilitación específica y el procedimiento de esa competencia preferente.",
        "Asumir todo expediente territorial por el rango superior de la delegada central.",
        "Rechazar cualquier cambio porque una actuación iniciada nunca puede redistribuirse."
      ],
      [
        "La preferencia requiere habilitación y condiciones.",
        "El rango no atribuye cualquier asunto.",
        "Existen mecanismos legales de reasignación."
      ],
      "Decreto Ley 262/2000; Decreto Ley 1851/2021"
    ],
    [
      "Una dependencia territorial cuenta con un equipo técnico idóneo para practicar una prueba fuera de la sede del despacho competente. La oficina analiza si esa facilidad logística permite transferirle automáticamente toda la instrucción del expediente.",
      "¿Qué figura permite diferenciar la diligencia del conocimiento del proceso completo?",
      [
        "La comisión encarga una diligencia delimitada sin transferir el conocimiento del asunto.",
        "El reparto transfiere toda competencia mediante una solicitud de apoyo técnico.",
        "La delegación verbal de una prueba otorga facultad para formular cargos y fallar."
      ],
      [
        "La comisión tiene objeto específico.",
        "Apoyo técnico no equivale a reparto.",
        "No habilita decisiones ajenas al encargo."
      ],
      "CGD art. 152; Decreto Ley 262/2000"
    ],
    [
      "Un profesional del empleo 3PU-15 recibe una asignación interna para analizar soportes y proyectar una recomendación en una investigación. La descripción del empleo incluye apoyo profesional, pero no se identifica atribución para adoptar la decisión final.",
      "¿Qué alcance debe mantener el profesional al realizar el apoyo asignado?",
      [
        "Ejecutar el apoyo y someter la decisión a quien tenga competencia legal.",
        "Suscribir la decisión final porque el manual contempla apoyo a la instrucción.",
        "Transferir el asunto a otra dependencia por tratarse de una función jurídica."
      ],
      [
        "Apoyar no sustituye competencia decisoria.",
        "El perfil no confiere una potestad general.",
        "Un profesional puede apoyar asuntos jurídicos dentro de su rol."
      ],
      "Convocatoria 104-2026 v4; Decreto Ley 262/2000"
    ]
  ],
  "pgn-m12": [
    [
      "Una veeduría informa sobre una cláusula que puede restringir participación de oferentes en un proceso todavía no adjudicado. La información permite verificar el riesgo sin establecer que se haya producido una falta disciplinaria o un daño fiscal.",
      "¿Qué ruta misional puede activarse para examinar esa alerta?",
      [
        "Vigilancia preventiva y control de gestión dentro de las competencias aplicables.",
        "Juzgamiento disciplinario inmediato por el posible efecto de la cláusula.",
        "Control fiscal sancionatorio ejercido por el profesional receptor de la alerta."
      ],
      [
        "Prevenir permite examinar riesgos antes del daño.",
        "La alerta no satisface el estándar de sanción.",
        "No corresponde control fiscal al operador PGN."
      ],
      "Constitución art. 277; Resolución PGN 132/2014"
    ],
    [
      "Un informe acredita que un servidor identificado podría haber incumplido una obligación funcional y aporta soportes concretos. El asunto requiere que la autoridad competente evalúe conducta, ilicitud, culpabilidad y procedimiento conforme a la ley.",
      "¿Qué función se relaciona con ese examen de responsabilidad individual?",
      [
        "La función disciplinaria, sometida al Código General Disciplinario y sus garantías.",
        "La función preventiva, mediante advertencia definitiva de responsabilidad individual.",
        "La función de intervención, mediante sustitución de la autoridad judicial."
      ],
      [
        "La responsabilidad exige procedimiento disciplinario.",
        "La advertencia no es fallo.",
        "Intervenir no sustituye al juez."
      ],
      "Constitución art. 277.6; CGD arts. 9–10, 12"
    ],
    [
      "Un procurador judicial participa en una actuación contenciosa en la que se discute la legalidad de un contrato. La entidad contratante tiene apoderado y el agente del Ministerio Público desea presentar un concepto en defensa del patrimonio público.",
      "¿Qué objetivo corresponde a la intervención dentro del proceso descrito?",
      [
        "Ejercer facultades legales en defensa del orden jurídico y patrimonio público.",
        "Representar a la entidad demandada y defender necesariamente su posición contractual.",
        "Declarar mediante concepto el detrimento fiscal y responsabilidad de funcionarios."
      ],
      [
        "La intervención protege intereses constitucionales.",
        "El agente no es necesariamente apoderado de la entidad.",
        "El concepto no constituye fallo fiscal."
      ],
      "Constitución art. 277.7; CPACA art. 303"
    ],
    [
      "Durante la revisión preventiva de un pliego se identifica un requisito técnico que parece restringir el mercado. La entidad aún puede motivarlo o modificarlo y la Procuraduría cuenta con atribuciones para solicitar información pertinente.",
      "¿Qué actuación examina la restricción sin asumir la selección del contratista?",
      [
        "Requerir justificación y evaluar proporcionalidad, publicidad y riesgos del requisito.",
        "Ordenar adjudicación al oferente que la Procuraduría considere más competitivo.",
        "Eliminar directamente la cláusula mediante instrucción del operador preventivo."
      ],
      [
        "La vigilancia solicita justificación y evalúa riesgos.",
        "Adjudicar corresponde a la entidad.",
        "La PGN no modifica directamente documentos ajenos."
      ],
      "Resolución PGN 132/2014; Ley 1150/2007 art. 5"
    ],
    [
      "Un oferente cuestiona el pliego porque su propia empresa no acredita una certificación exigida. La observación no explica si la condición es desproporcionada y la entidad aporta estudios técnicos que todavía requieren ser contrastados.",
      "¿Qué análisis precede a clasificar la observación como riesgo preventivo?",
      [
        "Distinguir desacuerdo comercial de alerta sustentada revisando objeto y soportes.",
        "Considerar acreditada la restricción por la sola inconformidad del oferente.",
        "Descartar toda observación comercial sin examinar el requisito técnico."
      ],
      [
        "La alerta requiere verificación y justificación.",
        "La inconformidad no prueba irregularidad.",
        "Una observación puede aportar información relevante."
      ],
      "Ley 1150/2007 art. 5; Resolución PGN 132/2014"
    ],
    [
      "Una entidad responde a un requerimiento preventivo explicando las medidas que tomará para corregir un riesgo de contratación. El equipo de Procuraduría pretende firmar el informe de evaluación de ofertas para certificar que la entidad actuó correctamente.",
      "¿Qué límite debe conservar al hacer seguimiento a la administración?",
      [
        "Verificar medidas y fundamento sin firmar como evaluador contractual.",
        "Aprobar la evaluación como condición para que se adjudique el contrato.",
        "Asumir la decisión en los aspectos previamente advertidos por Procuraduría."
      ],
      [
        "La vigilancia no sustituye la gestión contractual.",
        "No es autorización previa general.",
        "Advertir no transfiere competencia."
      ],
      "Constitución art. 277; Resolución PGN 132/2014"
    ],
    [
      "La administración modifica oportunamente una cláusula objetada durante la vigilancia preventiva. El operador dispone de la adenda, constancias de publicación y datos sobre la nueva participación, pero no ha evaluado todavía el efecto real de la modificación.",
      "¿Qué debe comprobar antes de cerrar la actuación por corrección del riesgo?",
      [
        "Motivación, publicidad y efecto verificable de la corrección sobre el riesgo.",
        "Existencia de la adenda, que demuestra automáticamente la eliminación del riesgo.",
        "Responsabilidad disciplinaria como condición indispensable para cerrar la vigilancia."
      ],
      [
        "El cierre requiere valorar resultados.",
        "Modificar no garantiza mejora.",
        "La responsabilidad sigue otra ruta."
      ],
      "Resolución PGN 132/2014; Decreto 1082/2015"
    ],
    [
      "Durante una vigilancia aparece un mensaje que podría evidenciar favorecimiento en la contratación. No se conoce su origen completo y la persona señalada aún no ha ejercido contradicción dentro de una actuación disciplinaria competente.",
      "¿Qué gestión permite examinar el mensaje sin convertirlo en sanción?",
      [
        "Preservarlo, contextualizarlo y evaluar remisión disciplinaria según competencia.",
        "Declarar probado el dolo en el informe preventivo por existir el mensaje.",
        "Ignorar el mensaje porque la vigilancia se inició por otro riesgo."
      ],
      [
        "La información requiere preservación y evaluación.",
        "El mensaje aislado no prueba culpabilidad.",
        "La actuación puede ajustarse a información nueva."
      ],
      "CGD arts. 87, 147–148; Resolución PGN 132/2014"
    ],
    [
      "Un estudio de mercado posterior acredita que una exigencia técnica previamente cuestionada es necesaria y proporcional al objeto del contrato. Los documentos permiten comprobar que la premisa inicial de restricción injustificada no se sostiene.",
      "¿Cómo debe actualizar el operador su valoración preventiva inicial?",
      [
        "Modificarla motivadamente y explicar qué premisa cambió y qué riesgos permanecen.",
        "Mantener la alerta original para conservar coherencia con el primer requerimiento.",
        "Declarar irregular todo el proceso porque una alerta no puede revisarse."
      ],
      [
        "La valoración responde a evidencia verificable.",
        "Coherencia no justifica una premisa desvirtuada.",
        "La alerta no es declaración irrevocable de irregularidad."
      ],
      "Resolución PGN 132/2014; Ley 1150/2007 art. 5"
    ]
  ],
  "pgn-m13": [
    [
      "Una oficina asigna mediante reparto un expediente a un despacho que, conforme a las reglas orgánicas, carece de atribución material para conocerlo. El funcionario sostiene que el registro del reparto subsana cualquier limitación de competencia.",
      "¿Qué distinción jurídica debe reconocer antes de actuar de fondo?",
      [
        "El reparto distribuye asuntos conforme a competencia, pero no crea potestades.",
        "El reparto transfiere competencia aunque contradiga las normas orgánicas aplicables.",
        "La competencia se adquiere al recibir físicamente los documentos del caso."
      ],
      [
        "La competencia es normativa; el reparto la aplica.",
        "La asignación no modifica atribuciones.",
        "Recibir soportes no otorga potestades."
      ],
      "Constitución art. 121; Decreto Ley 262/2000"
    ],
    [
      "El Viceprocurador pretende encargar una función de su despacho a un servidor adscrito. La oficina identifica que el decreto orgánico enumera las funciones delegables y aún no ha comprobado si la función solicitada se encuentra entre ellas.",
      "¿Qué debe comprobar antes de formalizar esa delegación interna?",
      [
        "Que la función concreta esté autorizada por la norma orgánica aplicable.",
        "Que el servidor adscrito acepte la función aunque la ley no permita delegarla.",
        "Que el expediente haya sido repartido al servidor para asumir la función decisoria."
      ],
      [
        "El parágrafo 2 del art. 17 delimita funciones delegables.",
        "La aceptación no sustituye habilitación.",
        "Repartir asuntos no equivale a delegar potestades."
      ],
      "Decreto Ley 262/2000 art. 17, parágrafo 2"
    ],
    [
      "Un despacho competente comisiona a otro funcionario para recibir un testimonio determinado fuera de sede. El comisionado recibe copia de actuaciones necesarias y propone asumir las restantes decisiones de instrucción por contar con los soportes del caso.",
      "¿Qué límite distingue comisión y transferencia del conocimiento del proceso?",
      [
        "La comisión habilita diligencias encargadas y derivadas permitidas, no toda la instrucción.",
        "La comisión transfiere todas las facultades del instructor mientras conserva los documentos.",
        "La comisión equivale a una asignación para formular cargos y juzgar."
      ],
      [
        "El encargo se delimita por objeto y término.",
        "Recibir copias no transfiere función de fondo.",
        "No equivale a reparto ni juzgamiento."
      ],
      "CGD art. 152"
    ],
    [
      "Antes de practicar una declaración comisionada, el profesional advierte que el despacho no especifica claramente qué hechos debe esclarecer ni el término para evacuar la diligencia. Todavía no se ha citado al testigo correspondiente.",
      "¿Qué debe verificar antes de ejecutar el despacho comisorio incompleto?",
      [
        "La precisión del objeto de la diligencia y del término concedido.",
        "Una autorización para decidir responsabilidad después de recibir la declaración.",
        "La totalidad del expediente original aunque no sea necesaria para la prueba."
      ],
      [
        "El art. 152 exige objeto y término.",
        "El encargo no habilita decisión de fondo.",
        "Se remiten las copias necesarias."
      ],
      "CGD art. 152"
    ],
    [
      "Durante un testimonio comisionado surge una solicitud de la defensa directamente vinculada con el alcance de la declaración. La diligencia debe respetar las garantías correspondientes y el profesional dispone de medios para registrar lo ocurrido.",
      "¿Qué actuación conserva las garantías y trazabilidad de la diligencia?",
      [
        "Tramitar lo habilitado, preservar la contradicción y registrar fielmente la novedad.",
        "Omitir la solicitud porque toda intervención adicional excede cualquier comisión.",
        "Resolver todas las pretensiones para evitar devolver cuestiones al comitente."
      ],
      [
        "Las garantías subsisten en prueba comisionada.",
        "No toda solicitud relacionada excede el encargo.",
        "Las decisiones de fondo corresponden a la autoridad competente."
      ],
      "CGD arts. 152, 157, 172–175"
    ],
    [
      "Finaliza una prueba comisionada y el profesional tiene el acta, grabación autorizada y documentos recaudados. Una inconsistencia advertida durante la práctica podría ser relevante para el comitente, aunque no exige decidir inmediatamente el fondo.",
      "¿Qué debe integrar la devolución al despacho comitente?",
      [
        "Acta, soportes, constancias y novedades verificables, delimitando el alcance del encargo.",
        "Una conclusión de culpabilidad sin incorporar documentos de soporte de la diligencia.",
        "Solo los elementos favorables a la hipótesis que motivó la comisión."
      ],
      [
        "La remisión preserva integridad y trazabilidad.",
        "No sustituye valoración de fondo.",
        "Seleccionar por hipótesis introduce sesgo."
      ],
      "CGD arts. 148, 152, 159"
    ],
    [
      "Durante una prueba comisionada aparece un elemento probatorio que surge directamente de la diligencia ordenada. El plazo sigue vigente y la decisión del comitente no prohíbe expresamente practicar pruebas adicionales derivadas del encargo.",
      "¿Qué facultad permite examinar ese elemento dentro de la comisión?",
      [
        "Practicar la prueba directamente derivada, respetando condiciones y garantías.",
        "Esperar otra comisión aunque la prueba derive directamente y no esté prohibida.",
        "Abrir investigación autónoma por cualquier hecho surgido durante la diligencia."
      ],
      [
        "El art. 152 permite prueba derivada salvo prohibición.",
        "No siempre exige otra comisión.",
        "Se limita a conexión directa con el encargo."
      ],
      "CGD art. 152"
    ],
    [
      "El término concedido para una prueba comisionada está por vencer y queda una diligencia necesaria que no puede completarse oportunamente. El profesional puede comunicar la situación al comitente por un medio eficaz y dejar constancia.",
      "¿Qué gestión permite continuar más allá del término concedido?",
      [
        "Solicitar y obtener ampliación del término con comunicación eficaz y constancia.",
        "Prorrogar unilateralmente y justificar la demora al entregar los soportes.",
        "Dejar vencer el encargo y practicar después las pruebas sin autorización."
      ],
      [
        "La ampliación exige solicitud, concesión y comunicación documentada.",
        "El comisionado no se concede la prórroga.",
        "El plazo no se extiende automáticamente."
      ],
      "CGD art. 152"
    ],
    [
      "Al practicar una comisión, el servidor advierte que el despacho de origen podría carecer de competencia material por una regla especial aplicable. La situación no está aún resuelta y el profesional no tiene facultad de decidir el conflicto.",
      "¿Qué procede ante esa duda fundada de competencia del comitente?",
      [
        "Documentar y comunicar la novedad a la autoridad habilitada para definirla.",
        "Considerar saneada la competencia por la existencia de una providencia de comisión.",
        "Resolver el conflicto y asumir íntegramente el expediente en la oficina comisionada."
      ],
      [
        "La comisión no sana competencia por sí sola.",
        "La orden no elimina la regla orgánica.",
        "El profesional no adquiere potestad de resolver el conflicto."
      ],
      "Constitución art. 121; CGD arts. 91–98, 152"
    ]
  ],
  "pgn-m14": [
    [
      "Un profesional recibe un expediente sobre cambios en registros de inventario y debe preparar insumos para la investigación. El material contiene fechas, asignaciones funcionales, registros de sistema y declaraciones que no coinciden plenamente.",
      "¿Qué producto inicial aporta utilidad al análisis de instrucción dentro de su rol?",
      [
        "Una matriz de hechos, obligaciones, fuentes, contradicciones y cuestiones pendientes.",
        "Una declaración definitiva de culpabilidad basada en la primera versión del incidente.",
        "Una recopilación cronológica sin relacionar los documentos con los hechos investigados."
      ],
      [
        "La matriz delimita soportes y vacíos.",
        "La culpabilidad exige valoración competente.",
        "Ordenar no basta si falta relación probatoria."
      ],
      "Convocatoria 104-2026 v4; Guía de investigación PGN"
    ],
    [
      "Una autoridad solicita a una entidad un informe técnico sobre datos que aparecen registrados en sus archivos. El documento debe responder a esa solicitud, sin desarrollar un dictamen experto sobre una cuestión que requiera metodología pericial específica.",
      "¿Qué régimen debe distinguir el profesional al identificar ese medio?",
      [
        "El informe de datos registrados se regula separadamente del dictamen pericial.",
        "Todo informe técnico es dictamen pericial por utilizar información especializada.",
        "El informe de archivo constituye testimonio jurado de quien lo firma."
      ],
      [
        "El CGD distingue informes y prueba pericial.",
        "La denominación no determina automáticamente el medio.",
        "El informe no equivale a declaración testimonial."
      ],
      "CGD arts. 177–184, 193–195"
    ],
    [
      "Una persona vinculada solicita analizar una base institucional para identificar quién realizó una modificación. El profesional obtiene una consulta que acredita el usuario registrado, pero la base no permite comprobar por sí sola qué persona operó la cuenta.",
      "¿Qué límite debe expresar para evitar una atribución personal injustificada?",
      [
        "El registro identifica la cuenta, no necesariamente la persona que la utilizó.",
        "El usuario registrado demuestra autoría y excluye hipótesis alternativas de ejecución.",
        "La consulta carece de valor porque los registros nunca permiten analizar conductas."
      ],
      [
        "El alcance técnico de la consulta es limitado.",
        "Cuenta no equivale a autoría personal.",
        "El registro conserva valor parcial."
      ],
      "CGD arts. 147–148, 159; Guía de pruebas PGN"
    ],
    [
      "Un profesional elabora un informe sobre transacciones de un sistema. Recibió datos exportados por una dependencia, pero su borrador no registra quién realizó la extracción, qué intervalo cubre ni en qué formato se entregaron los datos.",
      "¿Qué información debe añadir para hacer verificable la fuente analizada?",
      [
        "Origen, responsable de extracción, intervalo, formato y condiciones de adquisición.",
        "Nombre de la herramienta con que abrió el archivo y fecha del informe.",
        "Sentido de la decisión jurídica sin documentar la forma de obtener los datos."
      ],
      [
        "Identificar fuente y adquisición permite reproducir el análisis.",
        "La herramienta no describe origen ni cobertura.",
        "La conclusión jurídica no reemplaza documentación técnica."
      ],
      "Guía de pruebas PGN; CGD art. 159"
    ],
    [
      "Un informe informático contiene una tabla de resultados y afirma que varios eventos coinciden temporalmente. No identifica los filtros, parámetros de búsqueda ni tratamiento de zonas horarias que utilizó para producir esa tabla.",
      "¿Qué aspecto metodológico debe documentarse para permitir revisión del informe?",
      [
        "Procedimientos, filtros, referencia temporal, transformaciones y límites de la comparación.",
        "Cantidad de registros coincidentes para que el lector compruebe el resultado final.",
        "Experiencia profesional sin describir las operaciones realizadas sobre los datos."
      ],
      [
        "El método permite comprender y reproducir resultados.",
        "La cantidad no explica cómo se seleccionó evidencia.",
        "La experiencia no sustituye un método verificable."
      ],
      "CGD arts. 157, 159, 179; NIST SP 800-86"
    ],
    [
      "Una dependencia solicita al profesional establecer si una actualización de un archivo fue realizada manualmente. El informe separa registros observados de dos hipótesis plausibles, pero el coordinador pide suprimir la sección de limitaciones para simplificarlo.",
      "¿Qué estructura debe conservar para entregar un insumo técnico íntegro?",
      [
        "Hallazgos, inferencias, hipótesis alternativas, límites y soportes verificables.",
        "Una conclusión única aunque no se puedan descartar otras explicaciones plausibles.",
        "Resultados sin límites ni anexos para que la autoridad los reconstruya después."
      ],
      [
        "El informe distingue observación e inferencia.",
        "No se justifica una conclusión única con alternativas plausibles.",
        "La revisión requiere documentación suficiente."
      ],
      "CGD arts. 148, 159, 179; Guía de pruebas PGN"
    ],
    [
      "Tras analizar una operación registrada como manual, aparece un reporte de un proceso automático ejecutado en el mismo intervalo. El profesional conserva las fuentes originales y puede comparar la configuración del sistema con el evento cuestionado.",
      "¿Qué ajuste requiere esa evidencia respecto de la hipótesis inicial?",
      [
        "Contrastar configuración y registros para actualizar las conclusiones afectadas.",
        "Mantener la hipótesis manual por haber fundamentado el primer informe técnico.",
        "Declarar legítima toda modificación por existir un proceso automático en ese horario."
      ],
      [
        "La nueva fuente exige reexaminar inferencias.",
        "No se sostiene una hipótesis contra evidencia relevante.",
        "Coincidencia no acredita legitimidad."
      ],
      "CGD arts. 148, 159; NIST SP 800-92"
    ],
    [
      "Una copia de un archivo presenta una huella SHA-256 diferente de la registrada en la adquisición. No se ha determinado si hubo una exportación distinta, una transformación documentada o una modificación no autorizada del contenido.",
      "¿Qué conclusión técnica puede sostener antes de esclarecer esa diferencia?",
      [
        "Existe una discrepancia que exige verificar el origen y las transformaciones.",
        "Está demostrada una alteración dolosa del último receptor de los archivos.",
        "La integridad permanece idéntica porque ambas copias conservan su nombre visible."
      ],
      [
        "La diferencia exige comprobar la comparación y su causa.",
        "No demuestra intención ni autoría.",
        "El nombre no acredita identidad binaria."
      ],
      "CGD art. 159; NIST SP 800-86"
    ],
    [
      "Una autoridad pide al profesional informático que incluya en su informe la conclusión de que el disciplinado actuó con dolo. Los registros permiten describir operaciones y autorizaciones, pero no contienen prueba suficiente sobre conocimiento y voluntad.",
      "¿Qué respuesta respeta los límites del aporte especializado al expediente?",
      [
        "Documentar hallazgos y alcance, dejando la calificación subjetiva a la autoridad competente.",
        "Certificar dolo porque una operación no autorizada demuestra necesariamente intención disciplinaria.",
        "Negarse a todo análisis porque el asunto incluye una valoración jurídica."
      ],
      [
        "El experto aporta hechos y método, no sustituye el juicio.",
        "La operación no acredita automáticamente dolo.",
        "El apoyo técnico es útil dentro de sus límites."
      ],
      "CGD arts. 28, 179; Convocatoria 104-2026 v4"
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
    explanation: (Number(question.moduleId.slice(5)) >= 20 && Number(question.moduleId.slice(5)) < 45 ? 'Código General Disciplinario, art(s). ' : 'Fundamento: ') + articles + '. ' + rationales.join(' '),
    sourceIds: [...new Set([...question.sourceIds, ...(articles.includes('Decreto 1082/2015') ? ['decreto-1082-2015'] : []), ...(articles.includes('Guía Preventiva PGN') ? ['pgn-guia-preventiva'] : []), ...(articles.includes('Guía de pruebas PGN') ? ['pgn-guia-pruebas'] : []), ...(articles.includes('Guía de investigación PGN') ? ['pgn-guia-investigacion'] : []), ...(articles.includes('Convocatoria 104-2026') ? ['pgn-convocatoria-104-v4'] : []), ...(articles.includes('Constitución') ? ['constitucion'] : []), ...(articles.includes('Resolución PGN 132/2014') ? ['pgn-res-132-2014'] : []), ...(articles.includes('Decreto 1499/2017') ? ['decreto-1499-2017'] : []), ...(articles.includes('CPACA') ? ['cpaca'] : []), ...(articles.includes('Ley 1454/2011') ? ['ley-1454-2011'] : []), ...(articles.includes('Decreto Ley 262/2000') ? ['decreto-262-2000'] : []), ...(articles.includes('Decreto Ley 1851/2021') ? ['decreto-1851-2021'] : []), ...(articles.includes('Ley 1755/2015') ? ['ley-1755-2015'] : []), ...(articles.includes('Ley 80/1993') ? ['ley-80-1993'] : []), ...(articles.includes('Ley 1150/2007') ? ['ley-1150-2007'] : []), ...(articles.includes('Ley 1474/2011') ? ['ley-1474-2011'] : []), ...(articles.includes('Ley 2195/2022') ? ['ley-2195-2022'] : []), ...(articles.includes('Ley 1712/2014') ? ['ley-1712-2014'] : []), ...(articles.includes('Ley 1581/2012') ? ['ley-1581-2012'] : []), ...(articles.includes('CGD') ? ['ley-1952-2019'] : []), ...(Number(question.moduleId.slice(5)) >= 20 && Number(question.moduleId.slice(5)) < 45 ? ['ley-1952-2019', 'ley-2094-2021'] : []), ...(articles.includes('C-570/2019') ? ['cc-c570-2019'] : []), ...(articles.includes('NIST SP 800-86') ? ['nist-sp-800-86'] : []), ...(articles.includes('NIST SP 800-92') ? ['nist-sp-800-92'] : [])])],
    verifiedAt: '2026-11-24',
  }
}

export const reviewedTemplateModuleIds = Object.keys(reviewed)
