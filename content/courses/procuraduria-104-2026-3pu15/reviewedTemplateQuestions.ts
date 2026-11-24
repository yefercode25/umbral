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
    explanation: (Number(question.moduleId.slice(5)) >= 45 ? 'Fundamento: ' : 'Código General Disciplinario, art(s). ') + articles + '. ' + rationales.join(' '),
    sourceIds: [...new Set([...question.sourceIds, ...(articles.includes('Constitución') ? ['constitucion'] : []), ...(articles.includes('Resolución PGN 132/2014') ? ['pgn-res-132-2014'] : []), ...(articles.includes('Decreto 1499/2017') ? ['decreto-1499-2017'] : []), ...(articles.includes('CPACA') ? ['cpaca'] : []), ...(Number(question.moduleId.slice(5)) < 45 ? ['ley-1952-2019', 'ley-2094-2021'] : []), ...(articles.includes('C-570/2019') ? ['cc-c570-2019'] : []), ...(articles.includes('NIST SP 800-86') ? ['nist-sp-800-86'] : []), ...(articles.includes('NIST SP 800-92') ? ['nist-sp-800-92'] : [])])],
    verifiedAt: '2026-11-24',
  }
}

export const reviewedTemplateModuleIds = Object.keys(reviewed)
