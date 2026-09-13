import type { Lesson } from '../../../../src/types/course'

/**
 * Lecciones de profundidad añadidas en alpha.6.
 * Se concentran en vacíos detectados por la auditoría: competencia, servicio,
 * gestión documental, CPACA, estructura DIAN, teoría tributaria, recaudo,
 * EAR, facilidades y calidad de información.
 */
export const dianDeepTheoryLessons: Lesson[] = [
  {
    id:'m1-l5', moduleId:'m1', order:5, title:'Estructura del Estado y competencia: ubica quién puede decidir', subtitle:'Pertenecer al Estado o a la misma entidad no convierte todas las funciones en intercambiables.', durationMinutes:13, skillIds:['estado-estructura','competencia'], status:'published',
    blocks:[
      {type:'lead',text:'En una PJS es frecuente encontrar una actuación jurídicamente real asignada a la autoridad equivocada. Antes de valorar si la medida “suena correcta”, identifica quién tiene la función y en qué ámbito puede ejercerla.'},
      {type:'objective',items:['Distinguir estructura institucional de competencia concreta.','Evitar que celeridad o servicio se usen como excusa para actuar sin habilitación.','Conectar la ubicación de la DIAN en la Rama Ejecutiva con la distribución interna de responsabilidades.']},
      {type:'definition',title:'Competencia',text:'Es la atribución jurídica que delimita quién puede ejercer una función y bajo qué materia, territorio, grado o condiciones. La estructura ayuda a ubicar la autoridad; la competencia permite saber si puede realizar la actuación del caso.'},
      {type:'rule',title:'Regla para PJS',text:'Si una opción describe una actuación posible pero la asigna a quien no tiene competencia, no se corrige porque parezca eficiente o favorable al ciudadano.'},
      {type:'example',title:'Lectura aplicada',text:'Que dos dependencias pertenezcan a la DIAN no significa que cualquiera pueda asumir indistintamente dirección, supervisión, sustanciación o decisión. Debes leer la función concreta.'},
      {type:'checkpoint',questionId:'q-v6d-m1-01'},
      {type:'sources',sourceIds:['constitucion-politica','cpaca','decreto-1742-2020','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m2-l7', moduleId:'m2', order:7, title:'Servicio a las ciudadanías: acceso efectivo, no solo atención amable', subtitle:'Confianza, inclusión, accesibilidad, escucha activa y mejora continua orientan el relacionamiento actual.', durationMinutes:14, skillIds:['servicio-ciudadanias','accesibilidad','lenguaje-claro'], status:'published',
    blocks:[
      {type:'lead',text:'La política vigente de Servicio a las Ciudadanías va más allá de responder solicitudes. Busca que las personas puedan acceder efectivamente a derechos, trámites e información en condiciones de calidad, dignidad e inclusión.'},
      {type:'comparison',title:'Servicio superficial vs. servicio efectivo',columns:['No basta con','Se busca'],rows:[['Responder rápido','Responder oportunamente y de fondo dentro de la competencia.'],['Repetir el texto técnico','Orientar con lenguaje claro sin alterar la regla jurídica.'],['Ofrecer un único canal','Considerar accesibilidad y particularidades de los grupos de valor.'],['Cerrar cada caso','Escuchar patrones y usar la experiencia para mejorar.']]},
      {type:'rule',title:'Legalidad y servicio se complementan',text:'El enfoque ciudadano no autoriza a inventar requisitos, beneficios o excepciones. La calidad está en facilitar el acceso correcto a la actuación que sí procede.'},
      {type:'tip',title:'Señal de examen',text:'Desconfía de opciones que confunden “orientar” con prometer un resultado o “ser eficiente” con omitir un requisito.'},
      {type:'checkpoint',questionId:'q-v6d-m2-01'},
      {type:'sources',sourceIds:['fp-relacion-estado-ciudadanias','mipg','cpaca']}
    ]
  },
  {
    id:'m2-l8', moduleId:'m2', order:8, title:'Gestión documental: el expediente tiene un ciclo de vida', subtitle:'Producción, organización, acceso, conservación y disposición sostienen la evidencia institucional.', durationMinutes:15, skillIds:['gestion-documental','ciclo-documental','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'Guardar archivos no equivale a gestionar documentos. La DIAN cuenta con un Programa de Gestión Documental que integra la información a los procesos y define responsabilidades durante el ciclo documental.'},
      {type:'steps',title:'Preguntas que debes hacer sobre un documento',items:['¿Por qué y en qué proceso se produjo o recibió?','¿Dónde debe incorporarse para conservar su contexto?','¿Qué versión es la válida y quién puede consultarla?','¿Cómo se mantiene íntegro y disponible durante el tiempo requerido?','¿Qué instrumento determina conservación, transferencia o disposición?']},
      {type:'trap',title:'Error frecuente',text:'Una carpeta personal “ordenada” puede seguir siendo una mala práctica si rompe expediente, permisos, versión, metadatos o trazabilidad institucional.'},
      {type:'example',title:'Caso CT-CR-3007',text:'Una corrección de saldo sin soporte documental suficiente puede dejar un valor aparentemente correcto, pero imposible de explicar o auditar después.'},
      {type:'checkpoint',questionId:'q-v6d-m2-03'},
      {type:'sources',sourceIds:['ley-594-2000','dian-pgd-2025','decreto-1080-2015-gestion-documental','dian-transparencia-informacion']}
    ]
  },
  {
    id:'m3-l5', moduleId:'m3', order:5, title:'Nivel Central, Local y Delegado: estructura útil para resolver casos', subtitle:'Aprende la lógica de distribución de funciones, no un organigrama recitado.', durationMinutes:12, skillIds:['dian-estructura','competencia'], status:'published',
    blocks:[
      {type:'lead',text:'El Decreto 1742 organiza el ejercicio de funciones en niveles. Para el examen, la utilidad está en distinguir dónde se orienta o supervisa una política y dónde se desarrolla una actuación concreta.'},
      {type:'definition',title:'Tres niveles',text:'La estructura general contempla Nivel Central, Nivel Local y Nivel Delegado. Cada uno cumple funciones conforme a la estructura y a las competencias asignadas.'},
      {type:'rule',title:'No equipares verbos funcionales',text:'Dirigir, orientar, coordinar, supervisar, sustanciar y decidir no significan lo mismo. Una opción puede copiar un verbo real del decreto y aun así asignarlo al actor equivocado.'},
      {type:'checkpoint',questionId:'q-v6d-m3-01'},
      {type:'sources',sourceIds:['decreto-1742-2020','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m3-l6', moduleId:'m3', order:6, title:'Dirigir, supervisar y ejecutar: tres verbos que cambian una PJS', subtitle:'La dependencia que fija lineamientos no necesariamente realiza cada actuación individual.', durationMinutes:11, skillIds:['dian-estructura','direccion-ejecucion','tecnica-pjs'], status:'published',
    blocks:[
      {type:'lead',text:'En normas de estructura abundan verbos institucionales. Leerlos con precisión ayuda a descartar distractores que atribuyen a una oficina directiva la ejecución automática de todo el trabajo operativo.'},
      {type:'comparison',title:'Lectura funcional',columns:['Verbo','Pregunta útil'],rows:[['Dirigir / orientar','¿Define lineamientos, políticas o conducción?'],['Supervisar / controlar','¿Verifica que la operación se desarrolle conforme a reglas y objetivos?'],['Ejecutar / tramitar','¿Realiza la actuación concreta sobre un expediente o universo?']]},
      {type:'trap',text:'No concluyas que todo se decide en Nivel Central ni que todo se ejecuta localmente. La respuesta depende de la función expresamente asignada.'},
      {type:'checkpoint',questionId:'q-v6d-m3-02'},
      {type:'sources',sourceIds:['decreto-1742-2020']}
    ]
  },
  {
    id:'m4-l7', moduleId:'m4', order:7, title:'Cómo nace una actuación y qué debes revisar primero', subtitle:'Origen, hechos, competencia y procedimiento antes de mover el expediente.', durationMinutes:13, skillIds:['cpaca-actuacion','inicio-actuacion','competencia'], status:'published',
    blocks:[
      {type:'lead',text:'El error más caro en procedimiento es empezar por la actuación que “parece seguir” sin haber definido qué expediente tienes delante. El CPACA exige leer la actuación dentro de su origen, competencia y reglas aplicables.'},
      {type:'steps',title:'Diagnóstico inicial',items:['Identifica si la actuación surge por solicitud, deber legal o iniciativa administrativa según el caso.','Separa hechos acreditados de afirmaciones pendientes de verificación.','Confirma competencia.','Ubica el procedimiento general o especial aplicable.','Solo entonces determina la actuación siguiente.']},
      {type:'sequence-exercise',title:'Ordena el diagnóstico',text:'Construye una secuencia segura antes de decidir qué hacer.',items:[{id:'c',label:'Confirmar competencia y procedimiento aplicable.'},{id:'a',label:'Identificar origen y objeto de la actuación.'},{id:'d',label:'Seleccionar la actuación que corresponde a la etapa.'},{id:'b',label:'Separar hechos relevantes y lo que aún requiere verificación.'}],correctOrder:['a','b','c','d'],explanation:'La actuación siguiente solo tiene sentido después de entender qué asunto existe, qué hechos importan y quién puede intervenir.'},
      {type:'checkpoint',questionId:'q-v6d-m4-01'},
      {type:'sources',sourceIds:['cpaca']}
    ]
  },
  {
    id:'m4-l8', moduleId:'m4', order:8, title:'Terceros y pruebas: el expediente no se decide en vacío', subtitle:'Participación, contradicción y evidencia cambian la calidad de la decisión.', durationMinutes:15, skillIds:['cpaca-terceros','cpaca-pruebas','debido-proceso'], status:'published',
    blocks:[
      {type:'lead',text:'Una actuación puede involucrar personas distintas del solicitante y hechos que no están suficientemente establecidos. Identificar terceros y necesidades probatorias evita decisiones construidas sobre un expediente incompleto.'},
      {type:'definition',title:'Tercero con interés jurídico',text:'No es cualquier observador. Su intervención depende de los supuestos previstos por el ordenamiento y puede activar garantías de participación y contradicción.'},
      {type:'rule',title:'Prueba con propósito',text:'No se practica prueba por rutina. Primero determina qué hecho es relevante y controvertido; luego identifica qué evidencia es pertinente y cómo debe incorporarse.'},
      {type:'checkpoint',questionId:'q-v6d-m4-02'},
      {type:'checkpoint',questionId:'q-v6d-m4-03'},
      {type:'sources',sourceIds:['cpaca']}
    ]
  },
  {
    id:'m4-l9', moduleId:'m4', order:9, title:'Irregularidades: corregir el trámite antes de que el defecto gobierne la decisión', subtitle:'No todo defecto produce el mismo efecto, pero ninguno se resuelve ignorándolo.', durationMinutes:11, skillIds:['cpaca-irregularidades','debido-proceso'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento administrativo no debe convertirse en una carrera para llegar a una decisión. Si se advierte un defecto relevante, debe analizarse su alcance y la forma jurídicamente procedente de corregirlo.'},
      {type:'comparison',title:'Dos extremos que debes evitar',columns:['Extremo','Problema'],rows:[['“Cualquier error obliga a empezar desde cero”','Desconoce que la respuesta depende de la naturaleza y efecto de la irregularidad.'],['“Si el resultado parece correcto, el error no importa”','Desconoce garantías, competencia y formas esenciales del procedimiento.']]},
      {type:'tip',text:'En PJS, la mejor opción suele ser la que identifica el defecto, determina su efecto y lo corrige con el mecanismo procedente, no la más dramática ni la más indiferente.'},
      {type:'checkpoint',questionId:'q-v6d-m4-04'},
      {type:'sources',sourceIds:['cpaca']}
    ]
  },
  {
    id:'m4-l10', moduleId:'m4', order:10, title:'Publicar, comunicar y notificar no son sinónimos', subtitle:'La forma de dar a conocer el acto depende de su naturaleza y del régimen aplicable.', durationMinutes:14, skillIds:['cpaca-publicidad','notificacion'], status:'published',
    blocks:[
      {type:'lead',text:'Una decisión puede estar correctamente motivada y aun generar un problema si se usa una forma de publicidad que no corresponde. Antes de escoger el medio, pregunta qué clase de acto tienes y a quién debe producir efectos.'},
      {type:'comparison',title:'Pregunta antes de actuar',columns:['Concepto','Qué debes verificar'],rows:[['Publicación','Si el acto o la norma exige hacerlo accesible de manera general.'],['Comunicación','Si el régimen ordena informar una actuación a un destinatario sin confundirla con notificación.'],['Notificación','Qué forma y requisitos hacen oponible o dan a conocer el acto particular en el supuesto.']]},
      {type:'trap',text:'“Está en la página web” no demuestra por sí solo que se haya cumplido la forma de publicidad o notificación exigida para ese acto.'},
      {type:'checkpoint',questionId:'q-v6d-m4-05'},
      {type:'sources',sourceIds:['cpaca']}
    ]
  },
  {
    id:'m4-l11', moduleId:'m4', order:11, title:'Recursos, silencio, firmeza y ejecutoriedad: aprende el orden', subtitle:'Decidir no significa automáticamente que el acto esté firme ni que todo pueda ejecutarse de inmediato.', durationMinutes:17, skillIds:['cpaca-recursos','cpaca-silencio','cpaca-firmeza','cpaca-ejecutoriedad'], status:'published',
    blocks:[
      {type:'lead',text:'Este bloque reúne cuatro conceptos que suelen mezclarse en distractores. Para resolverlos, piensa en estados del expediente: decisión, publicidad, impugnación, firmeza y posibilidad de ejecución.'},
      {type:'comparison',title:'No los confundas',columns:['Concepto','Idea central'],rows:[['Recurso','Mecanismo de impugnación cuando procede.'],['Silencio administrativo','Efecto jurídico que la ley asigna a la falta de decisión dentro de determinadas reglas; no es siempre positivo.'],['Firmeza','Estado del acto cuando se cumplen las condiciones legales que impiden su discusión por los recursos ordinarios que correspondan.'],['Ejecutoriedad','Capacidad del acto para ser ejecutado en los términos del ordenamiento.']]},
      {type:'sequence-exercise',title:'Orden conceptual',text:'Ordena el ciclo general, entendiendo que cada caso puede tener reglas especiales.',items:[{id:'d',label:'Analizar ejecutoriedad y actuación posterior.'},{id:'b',label:'Cumplir la forma de publicidad/notificación aplicable.'},{id:'a',label:'Adoptar la decisión.'},{id:'c',label:'Resolver o agotar recursos cuando procedan y verificar firmeza.'}],correctOrder:['a','b','c','d'],explanation:'La firma de una decisión no permite saltar automáticamente publicidad, recursos o firmeza.'},
      {type:'checkpoint',questionId:'q-v6d-m4-06'},
      {type:'checkpoint',questionId:'q-v6d-m4-08'},
      {type:'sources',sourceIds:['cpaca']}
    ]
  },
  {
    id:'m5-l5', moduleId:'m5', order:5, title:'Deber de contribuir y principios del sistema tributario', subtitle:'Recaudar es una función pública sometida a equidad, eficiencia, progresividad y reglas constitucionales.', durationMinutes:12, skillIds:['teoria-imposicion','deber-contribuir','principios-tributarios'], status:'published',
    blocks:[
      {type:'lead',text:'La teoría de la imposición explica por qué existe la obligación y qué límites orientan al legislador y a la administración. No es un bloque filosófico separado del trabajo operativo.'},
      {type:'definition',title:'Marco constitucional',text:'La Constitución impone el deber de contribuir al financiamiento de gastos e inversiones del Estado dentro de conceptos de justicia y equidad, y establece principios del sistema tributario como equidad, eficiencia y progresividad.'},
      {type:'rule',title:'No conviertas un principio en una autorización discrecional',text:'Los principios orientan interpretación y diseño, pero el servidor aplica la obligación y el procedimiento conforme a las normas vigentes; no puede rediseñar el tributo caso por caso.'},
      {type:'checkpoint',questionId:'q-v6d-m5-01'},
      {type:'sources',sourceIds:['constitucion-politica','estatuto-tributario']}
    ]
  },
  {
    id:'m5-l6', moduleId:'m5', order:6, title:'Elementos del tributo: reconstruye por qué existe la obligación', subtitle:'Sujeto, hecho, base y tarifa ayudan a distinguir cálculo, declaración y cobro.', durationMinutes:13, skillIds:['obligacion-tributaria','elementos-tributo'], status:'published',
    blocks:[
      {type:'lead',text:'Antes de discutir cobro, conviene poder responder qué hecho activa el tributo, quién ocupa cada posición relevante y cómo se determina la magnitud de la obligación en el régimen aplicable.'},
      {type:'steps',title:'Mapa de lectura',items:['Identifica el tributo concreto y el periodo.','Ubica el hecho generador o supuesto gravado.','Distingue sujetos y responsabilidades.','Revisa base y tarifa cuando el cálculo sea relevante.','Separa obligación sustancial de deberes formales asociados.']},
      {type:'trap',text:'Presentar una declaración, informar un dato o atender un requerimiento puede cumplir un deber formal sin extinguir por sí mismo una obligación sustancial diferente.'},
      {type:'checkpoint',questionId:'q-v6d-m5-03'},
      {type:'sources',sourceIds:['estatuto-tributario','decreto-1625-2016','constitucion-politica']}
    ]
  },
  {
    id:'m6-l10', moduleId:'m6', order:10, title:'Del recaudo al estado de cuenta: sigue la cadena de información', subtitle:'Un pago solo sirve para decidir cuando fue recibido, registrado, imputado y reflejado correctamente.', durationMinutes:15, skillIds:['recaudo','estado-cuenta','cadena-informacion'], status:'published',
    blocks:[
      {type:'lead',text:'En CT-CR-3007 el recaudo y la cartera se conectan por información. El dato viaja desde declaraciones o recibos hacia registros, imputaciones y estados de cuenta que deben representar la realidad fiscal.'},
      {type:'process',title:'Cadena conceptual',nodes:[{id:'a',label:'Declaración / recibo / pago',hint:'Documento o transacción de origen.'},{id:'b',label:'Recepción y registro',hint:'Ingreso al canal y sistema correspondiente.'},{id:'c',label:'Procesamiento / imputación',hint:'Asignación al concepto y periodo que corresponda.'},{id:'d',label:'Estado de cuenta',hint:'Consolidación para consulta y gestión.'},{id:'e',label:'Validación de realidad',hint:'Corrección o normalización si existen diferencias.'}]},
      {type:'rule',title:'El sistema informa; no reemplaza el análisis',text:'Si existe una inconsistencia conocida, la respuesta no es asumir que la pantalla es infalible ni que cualquier soporte externo manda automáticamente. Debes conciliar y aplicar el procedimiento de corrección.'},
      {type:'checkpoint',questionId:'q-v6d-m6-01'},
      {type:'sources',sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-ccc-0276','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m6-l11', moduleId:'m6', order:11, title:'Conciliar antes de cobrar: cuando soporte y sistema no coinciden', subtitle:'La inconsistencia es un dato del caso, no una molestia que pueda ignorarse.', durationMinutes:14, skillIds:['estado-cuenta','conciliacion','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'Una diferencia entre soporte de pago y estado de cuenta puede provenir de imputación, captura, transmisión, reproceso u otra causa. La tarea profesional es reconstruir el hecho antes de convertir el saldo en una actuación de cobro.'},
      {type:'steps',title:'Ruta de verificación',items:['Identifica el movimiento discutido y su soporte.','Consulta cómo fue registrado y procesado.','Verifica concepto, periodo, identificación y fecha.','Aplica el procedimiento de corrección o normalización cuando corresponda.','Conserva evidencia de la modificación y del resultado.']},
      {type:'checkpoint',questionId:'q-v6d-m6-02'},
      {type:'sources',sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-ccc-0276']}
    ]
  },
  {
    id:'m7-l9', moduleId:'m7', order:9, title:'Ciclo EAR: autorización, operación, conciliación, auditoría y control', subtitle:'No conviertas todas las actuaciones sobre una entidad recaudadora en “sanción”.', durationMinutes:15, skillIds:['ear','autorizacion','conciliacion','auditoria'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF exige desarrollar auditorías, capacitaciones, verificación de requisitos, seguimiento y aplicación de sanciones. Esa lista describe un sistema de control con etapas y finalidades diferentes.'},
      {type:'process',title:'Ciclo de control',nodes:[{id:'a',label:'Autorización',hint:'Verificar requisitos para operar como EAR.'},{id:'b',label:'Recepción y transmisión',hint:'Operación del recaudo y la información.'},{id:'c',label:'Conciliación',hint:'Comparar valores y registros.'},{id:'d',label:'Auditoría y seguimiento',hint:'Evaluar cumplimiento y controles.'},{id:'e',label:'Consecuencia',hint:'Corrección o sanción cuando el régimen y los hechos lo sustenten.'}]},
      {type:'comparison',title:'Las cinco acciones que la ficha menciona expresamente',columns:['Acción','Qué debes distinguir'],rows:[['Auditoría','Revisión estructurada de evidencia, operación y cumplimiento.'],['Capacitación','Orientación técnica para alinear la operación con requisitos y procedimientos; no sustituye el control.'],['Verificación de requisitos','Comprobar las condiciones exigidas para la actuación o permanencia de la entidad recaudadora.'],['Seguimiento','Observar continuidad, correcciones, resultados y cumplimiento en el tiempo.'],['Sanción','Consecuencia que exige hechos, norma, competencia y procedimiento; no es el punto de partida de todo hallazgo.']]},
      {type:'rule',title:'Prevención y consecuencia no son lo mismo',text:'Capacitar, verificar y hacer seguimiento pueden prevenir o corregir fallas; sancionar exige un fundamento propio. En una PJS, identifica qué finalidad tiene la actuación antes de elegir la respuesta.'},
      {type:'trap',text:'Una diferencia conciliatoria no equivale automáticamente a una infracción sancionable. Primero identifica causa, obligación incumplida, competencia y procedimiento.'},
      {type:'checkpoint',questionId:'q-v6d-m7-01'},
      {type:'sources',sourceIds:['proc-autorizacion-ear-0028','proc-recepcion-ear-0031','proc-conciliacion-ear-0373','proc-auditoria-ear-0032','proc-sanciones-ear-0030']}
    ]
  },
  {
    id:'m7-l10', moduleId:'m7', order:10, title:'Grandes Contribuyentes y agentes de retención: verifica la vigencia', subtitle:'Las calificaciones cambian; estudia la regla y consulta el acto vigente.', durationMinutes:12, skillIds:['grandes-contribuyentes','retencion-iva','control-extensivo'], status:'published',
    blocks:[
      {type:'lead',text:'El control sobre Grandes Contribuyentes y agentes requiere especial cuidado temporal. Las resoluciones de calificación pueden cambiar entre vigencias y una lista histórica no debe usarse como si fuera permanente.'},
      {type:'rule',title:'Consulta el acto vigente',text:'La Resolución 000248 de 2025 rige para 2026 y califica o retira determinados sujetos. También establece efectos para los calificados, sin perjuicio de normas especiales.'},
      {type:'tip',title:'Qué estudiar',text:'Aprende el concepto, el efecto jurídico y la necesidad de verificar vigencia. No memorices NIT o listados de empresas como objetivo principal de preparación.'},
      {type:'checkpoint',questionId:'q-v6d-m7-04'},
      {type:'sources',sourceIds:['res-248-2025-grandes-contribuyentes','res-227-2025','proc-control-extensivo-0382']}
    ]
  },
  {
    id:'m10-l9', moduleId:'m10', order:9, title:'Garantías en facilidades: ofrecer, perfeccionar y controlar no es lo mismo', subtitle:'La garantía debe ser jurídicamente apta para cumplir su función de respaldo.', durationMinutes:15, skillIds:['facilidades-pago','garantias','seguimiento'], status:'published',
    blocks:[
      {type:'lead',text:'Una facilidad puede exigir garantía según sus condiciones y régimen. Para el análisis del expediente importa distinguir entre una propuesta, una garantía formalizada y un respaldo que continúa siendo suficiente durante la facilidad.'},
      {type:'steps',title:'Tres momentos',items:['Verificar si el caso exige garantía y qué alternativas admite.','Comprobar constitución o perfeccionamiento conforme a las reglas aplicables.','Hacer seguimiento a su suficiencia y a las condiciones de la facilidad cuando corresponda.']},
      {type:'trap',text:'No asumas que “hay garantía” solo porque existe un documento llamado así. La utilidad jurídica depende de requisitos, suficiencia y trazabilidad.'},
      {type:'checkpoint',questionId:'q-v6d-m10-01'},
      {type:'sources',sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']}
    ]
  },
  {
    id:'m17-l8', moduleId:'m17', order:8, title:'Calidad de datos: exactitud, completitud, consistencia y oportunidad', subtitle:'Un dato puede ser seguro y aun así ser incorrecto, incompleto, contradictorio o tardío.', durationMinutes:14, skillIds:['calidad-datos','sistemas-informacion'], status:'published',
    blocks:[
      {type:'comparison',title:'Cuatro preguntas de control',columns:['Dimensión','Pregunta'],rows:[['Exactitud','¿Representa correctamente el hecho o valor?'],['Completitud','¿Están los datos necesarios para la decisión?'],['Consistencia','¿Coincide con las demás fuentes autorizadas o puede explicarse la diferencia?'],['Oportunidad','¿Está actualizado para el momento de la actuación?']]},
      {type:'rule',title:'Seguridad ≠ calidad',text:'Confidencialidad, integridad y disponibilidad protegen la información; la calidad pregunta además si el contenido es apto para la decisión. Ambas capas son necesarias.'},
      {type:'example',title:'Aplicación',text:'Un reporte puede estar perfectamente protegido y ser inservible para cobro si no incorpora pagos recientes o conserva duplicados.'},
      {type:'checkpoint',questionId:'q-v6d-m17-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','auditoria-accesos-dian-2025','proc-normalizacion-ccc-0276']}
    ]
  }
]
