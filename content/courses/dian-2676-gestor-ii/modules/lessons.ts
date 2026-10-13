import type { Lesson } from '../../../../src/types/course'

export const dianLessons: Lesson[] = [
  {
    id:'m0-l1', moduleId:'m0', order:1, title:'Tu empleo, antes que el temario', subtitle:'CT-CR-3007 delimita qué estudiar y con qué profundidad.', durationMinutes:13, skillIds:['perfil-empleo'], status:'published',
    blocks:[
      {type:'lead',text:'Antes de memorizar artículos, necesitas saber qué problema institucional resuelve el empleo. Esa lectura evita estudiar toda la DIAN con la misma profundidad y permite conectar cada tema con una función real de CT-CR-3007.'},
      {type:'objective',items:['Reconocer propósito, proceso, subprocesos y ámbito de aplicación de CT-CR-3007.','Ubicar las once funciones esenciales dentro del mapa de módulos.','Distinguir competencias específicas de conocimientos transversales.','Usar el MERF como mapa y contrastarlo con la GOA publicada y los indicadores individuales de la inscripción.']},
      {type:'definition',title:'Núcleo del empleo',text:'Gestor II CT-CR-3007 pertenece al proceso misional Cumplimiento de obligaciones tributarias y se ubica en los subprocesos Administración de cartera y Recaudo-Devoluciones. La ficha indica aplicación en los niveles Central y Seccional.'},
      {type:'comparison',title:'Qué aparece expresamente en la ficha',columns:['Capa','Contenido'],rows:[['Propósito','Desarrollar acciones inherentes al cumplimiento de obligaciones tributarias.'],['Subprocesos','Administración de cartera · Recaudo-Devoluciones.'],['Competencias específicas','Cobro coactivo, cobro persuasivo, medidas cautelares, procesos concursales, EAR, devoluciones y compensaciones, control extensivo.'],['Conocimientos básicos','Función pública, CPACA, DIAN/TACI, recaudo, teoría de la imposición, MIPG, integridad, gestión documental, herramientas informáticas y servicio al ciudadano.']]},
      {type:'comparison',title:'Las 11 funciones esenciales y dónde las entrenas',columns:['Función de la ficha','Ruta principal en Umbral'],rows:[['1. Diligencias de Administración de Cartera','M9–M13 · cartera, persuasivo, coactivo y medidas.'],['2. Procesos especiales y concursales','M14 · intervención y protección de la acreencia fiscal.'],['3. Depurar estado de cuenta, exigibilidad y realidad de la obligación','M6 + M9 · información, saldo real y exigibilidad.'],['4. Devoluciones, compensaciones, disposición de recursos y gestión del pago','M15–M16 · origen del crédito, trámite, decisión y materialización.'],['5. Auditorías, capacitaciones, requisitos, seguimiento y sanciones a EAR','M7 · ciclo de recaudo y control de entidades autorizadas.'],['6. Incorporación, calidad y unificación de información','M6 + M17 · calidad de datos y sistemas corporativos.'],['7. Corregir inconsistencias y reprocesar saldos','M6 · declaración, recibo, imputación y normalización.'],['8. Campañas de ejecución inmediata y amplia cobertura','M8 · control extensivo y gestión de universos.'],['9. Control a autorretenedores, Grandes Contribuyentes y agentes de retención de IVA','M8 · controles sobre sujetos y obligaciones especiales.'],['10. Sistemas corporativos, mantenimiento, operación y permisos','M17 · cambios, accesos, seguridad y trazabilidad.'],['11. Funciones comunes del empleo','M1–M2 + M18–M20 · función pública, servicio, competencias e integridad.']]},
      {type:'tip',title:'Central y Seccional no significa competencia indistinta',text:'Que la ficha pueda aplicarse en ambos niveles no autoriza a cualquier dependencia o servidor a realizar cualquier actuación. La estructura de la DIAN y la competencia concreta se trabajan después en M3 y M4.'},
      {type:'tip',title:'Regla de estudio',text:'Cuando tengas que escoger entre dos temas, prioriza primero lo que el MERF conecta de forma directa con funciones y competencias del empleo. Luego estudia la capa transversal que permite resolver el caso.'},
      {type:'checkpoint',questionId:'q-profile-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','res-67-2024']}
    ]
  },
  {
    id:'m0-l2', moduleId:'m0', order:2, title:'Cómo convertir una norma en una respuesta PJS', subtitle:'Hecho → competencia → etapa → norma → actuación.', durationMinutes:10, skillIds:['tecnica-pjs'], status:'published',
    blocks:[
      {type:'lead',text:'Saber que “el artículo X dice Y” no basta. En una pregunta situacional tendrás que detectar qué hecho cambia jurídicamente la actuación y cuál opción respeta la secuencia correcta.'},
      {type:'steps',title:'Método Umbral de cinco pasos',items:['1. Hechos: separa datos relevantes de contexto decorativo.','2. Competencia: identifica quién puede actuar y sobre qué materia.','3. Etapa: ubica el expediente en la secuencia procedimental.','4. Regla: recuerda la norma o principio que gobierna esa etapa.','5. Actuación: elige lo jurídicamente procedente, no lo más duro ni lo más amable.']},
      {type:'trap',title:'Distractor típico',text:'Una opción puede describir una actuación real de la DIAN, pero ubicada en una etapa distinta. Eso la vuelve incorrecta para el caso concreto.'},
      {type:'example',title:'Ejemplo mental',text:'Si ya fue notificado el mandamiento y el caso pregunta por la oportunidad para proponer excepciones, no importa que “medida cautelar” también sea una figura real: primero debes resolver el momento procesal concreto.'},
      {type:'checkpoint',questionId:'q-profile-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m0-l3', moduleId:'m0', order:3, title:'Mapa completo del curso', subtitle:'Qué aprenderás y en qué orden.', durationMinutes:9, skillIds:['perfil-empleo'], status:'published',
    blocks:[
      {type:'lead',text:'El curso avanza de lo institucional y jurídico a la operación de cartera, recaudo y devoluciones. El objetivo es que cada concepto llegue al momento del simulacro ya conectado con una decisión y con la función del empleo que lo justifica.'},
      {type:'process',title:'Ruta de aprendizaje',nodes:[{id:'a',label:'Fundamentos públicos',hint:'Estado, función pública, DIAN, CPACA'},{id:'b',label:'Tributario y recaudo',hint:'Obligación, declaraciones, EAR, control extensivo'},{id:'c',label:'Cartera y cobro',hint:'Exigibilidad, persuasivo, coactivo, medidas, concursales'},{id:'d',label:'Devoluciones',hint:'Saldo a favor, compensación, procedimiento'},{id:'e',label:'Sistemas y competencias',hint:'Datos, accesos, comportamentales e integridad'},{id:'g',label:'Transversal complementario',hint:'Ofimática, Excel, datos, lógica y matemática práctica'},{id:'f',label:'PJS y simulacros',hint:'Integración, precisión y velocidad'}]},
      {type:'comparison',title:'Qué es núcleo y qué es complemento',columns:['Bloque','Cómo debes interpretarlo'],rows:[['M0–M23','Ruta principal construida desde propósito, funciones y competencias expresas de CT-CR-3007.'],['M24–M26','Complemento con justificación fuerte por la mención expresa de Herramientas Informáticas y el trabajo con información.'],['M27–M28','Cobertura prudente de razonamiento, matemática y probabilidad; no se presenta como eje individual confirmado sin los indicadores específicos de la inscripción.']]},
      {type:'tip',text:'Todo el mapa M0–M28 está publicado en este corte. El bloque transversal puede estudiarse en paralelo, pero no debe desplazar cartera, cobro, recaudo, devoluciones ni los fundamentos directamente asociados al empleo.'},
      {type:'sequence-exercise',title:'Ordena la ruta principal',text:'Construye la progresión nuclear del curso desde fundamentos hasta entrenamiento. El bloque transversal se estudia en paralelo.',items:[{id:'d',label:'Devoluciones y compensaciones.'},{id:'a',label:'Fundamentos públicos e institucionales.'},{id:'f',label:'Técnica PJS, práctica y simulacros.'},{id:'c',label:'Cartera, cobro y medidas.'},{id:'b',label:'Tributario, recaudo y control extensivo.'},{id:'e',label:'Sistemas, competencias e integridad.'}],correctOrder:['a','b','c','d','e','f'],explanation:'La ruta principal construye primero el marco común, después profundiza la operación misional y finalmente integra lo aprendido en decisiones y simulacros. M24–M28 funciona como refuerzo transversal paralelo.'},
      {type:'sources',sourceIds:['merf-ct-cr-3007']}
    ]
  },
  {
    id:'m2-l1', moduleId:'m2', order:1, title:'MIPG sin memorizarlo como una lista', subtitle:'Un marco para dirigir, ejecutar, evaluar y mejorar la gestión pública.', durationMinutes:10, skillIds:['mipg'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF menciona expresamente el Modelo Integrado de Planeación y Gestión. Para este empleo, importa comprender para qué existe y cómo se conecta con resultados, control y servicio, no aprender nombres aislados sin contexto.'},
      {type:'definition',title:'MIPG',text:'Función Pública lo define como un marco de referencia que integra y guía la gestión de las entidades públicas para hacerlas más eficientes, transparentes y orientadas a resultados que respondan a las necesidades ciudadanas.'},
      {type:'rule',title:'Idea que debes conservar',text:'MIPG no reemplaza la legalidad ni los procedimientos especiales: organiza la gestión institucional para que planeación, ejecución, seguimiento, evaluación y control produzcan valor público.'},
      {type:'example',title:'Aplicación al empleo',text:'Cuando una función exige calidad y unificación de información de obligaciones, no basta con “tener el dato”: importa que sea confiable, trazable y útil para tomar decisiones y cumplir objetivos institucionales.'},
      {type:'sequence-exercise',title:'Del propósito a la mejora',text:'Ordena un ciclo simple de gestión orientado a resultados.',items:[{id:'c',label:'Hacer seguimiento a resultados y evidencias.'},{id:'a',label:'Definir qué resultado público se busca.'},{id:'d',label:'Aprender y ajustar la gestión.'},{id:'b',label:'Ejecutar procesos y controles alineados con el objetivo.'}],correctOrder:['a','b','c','d'],explanation:'MIPG cobra sentido como ciclo de gestión: orientar, ejecutar, observar resultados y mejorar.'},
      {type:'sources',sourceIds:['mipg','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m3-l1', moduleId:'m3', order:1, title:'Qué es la DIAN y para qué existe', subtitle:'Propósito, misión y funciones generales.', durationMinutes:11, skillIds:['dian-mision'], status:'published',
    blocks:[
      {type:'lead',text:'Una pregunta situacional puede parecer puramente tributaria y, sin embargo, resolverse mejor si entiendes la finalidad institucional que orienta la actuación.'},
      {type:'definition',title:'Propósito central 2024–2026',text:'El Plan Estratégico Institucional vigente consultado resume el propósito en hacer posible que todas las personas aporten los recursos necesarios para sostener el Estado Social de Derecho.'},
      {type:'definition',title:'Misión',text:'La DIAN formula su misión alrededor de lograr una contribución justa y equitativa al financiamiento del gasto público, garantizando sostenibilidad fiscal y consolidación del Estado social de derecho.'},
      {type:'rule',title:'No reduzcas la DIAN a “recaudar”',text:'El Decreto 1742 atribuye funciones de administración, recaudo, fiscalización, control, cobro, devolución, sanción y otras competencias tributarias, aduaneras y cambiarias.'},
      {type:'checkpoint',questionId:'q-dian-02'},
      {type:'sources',sourceIds:['pei-dian-2024-2026-v2','decreto-1742-2020']}
    ]
  },
  {
    id:'m3-l2', moduleId:'m3', order:2, title:'La estructura que sí necesitas ubicar', subtitle:'Central, Local y Delegado; y dónde vive el trabajo de cobro.', durationMinutes:10, skillIds:['dian-estructura'], status:'published',
    blocks:[
      {type:'article',article:'Art. 4',title:'Estructura general',text:'El Decreto 1742 de 2020 organiza el ejercicio de funciones en Nivel Central, Nivel Local y Nivel Delegado.',sourceId:'decreto-1742-2020'},
      {type:'definition',title:'Dirección de Gestión de Impuestos',text:'Entre sus funciones está planear y supervisar operaciones relacionadas con recaudo, cobro y devolución de impuestos nacionales.'},
      {type:'definition',title:'Subdirección de Cobranzas y Control Extensivo',text:'Dirige y controla actividades relacionadas con el cobro de obligaciones y otras acreencias de competencia de la DIAN, dentro del marco normativo aplicable.'},
      {type:'tip',text:'No memorices el organigrama completo en la primera pasada. Aprende primero las dependencias que explican tus funciones y después amplía.'},
      {type:'checkpoint',questionId:'q-dian-01'},
      {type:'sources',sourceIds:['decreto-1742-2020','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m4-l1', moduleId:'m4', order:1, title:'Principios del procedimiento administrativo', subtitle:'La velocidad nunca reemplaza el debido proceso.', durationMinutes:12, skillIds:['cpaca-principios'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF remite a partes concretas de la Ley 1437 de 2011. El primer objetivo es dominar los principios porque funcionan como criterios de lectura de cualquier actuación administrativa.'},
      {type:'article',article:'Art. 3',title:'Principios',text:'Las actuaciones administrativas deben desarrollarse especialmente con arreglo a debido proceso, igualdad, imparcialidad, buena fe, moralidad, participación, responsabilidad, transparencia, publicidad, coordinación, eficacia, economía y celeridad.',sourceId:'cpaca'},
      {type:'rule',title:'Debido proceso administrativo',text:'Implica respetar normas de procedimiento y competencia, con garantías de representación, defensa y contradicción.'},
      {type:'trap',text:'Economía y celeridad no autorizan a saltarse una notificación, un término de defensa o la competencia del funcionario.'},
      {type:'checkpoint',questionId:'q-cpaca-01'},
      {type:'sources',sourceIds:['cpaca','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m5-l1', moduleId:'m5', order:1, title:'De dónde nace la obligación tributaria', subtitle:'Empieza por el hecho previsto en la ley, no por el cobro.', durationMinutes:10, skillIds:['obligacion-tributaria'], status:'published',
    blocks:[
      {type:'article',article:'Art. 1',title:'Origen de la obligación sustancial',text:'La obligación tributaria sustancial nace cuando se realiza el presupuesto o los presupuestos que la ley prevé como generadores del impuesto y tiene por objeto el pago del tributo.',sourceId:'estatuto-tributario'},
      {type:'definition',title:'Contribuyente',text:'Como regla básica del Estatuto Tributario, es responsable directo del pago del tributo el sujeto respecto de quien se realiza el hecho generador de la obligación sustancial.'},
      {type:'rule',title:'Secuencia mental',text:'Hecho generador → obligación sustancial → determinación/declaración según el tributo → exigibilidad → recaudo o cobro si no se paga.'},
      {type:'checkpoint',questionId:'q-tax-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m7-l1', moduleId:'m7', order:1, title:'Entidades Autorizadas para Recaudar: por qué se controlan', subtitle:'Recaudar implica deberes de verificación, información y oportunidad.', durationMinutes:12, skillIds:['ear-sanciones'], status:'published',
    blocks:[
      {type:'lead',text:'Una de las funciones esenciales del empleo es desarrollar auditorías, capacitaciones, verificación de requisitos y seguimiento a entidades recaudadoras autorizadas, además de aplicar sanciones conforme a competencia y procedimiento.'},
      {type:'article',article:'Art. 674',title:'Errores de verificación',text:'El Estatuto Tributario establece sanciones para entidades autorizadas por incumplimientos derivados de la recepción de declaraciones y recaudo, incluyendo ciertos errores de verificación.',sourceId:'estatuto-tributario'},
      {type:'example',title:'Un error típico',text:'Si el NIT de un documento recepcionado no coincide con el consignado en el RUT, el artículo 674 contiene una consecuencia sancionatoria específica expresada en UVT.'},
      {type:'trap',text:'No confundas el régimen sancionatorio de una entidad recaudadora con una sanción al contribuyente. Primero identifica quién incumple y cuál obligación tenía.'},
      {type:'checkpoint',questionId:'q-ear-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m9-l1', moduleId:'m9', order:1, title:'Exigibilidad antes de cobrar', subtitle:'No toda información registrada equivale automáticamente a deuda cobrable.', durationMinutes:12, skillIds:['exigibilidad'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF ordena depurar la información del estado de cuenta y verificar tanto la exigibilidad como la realidad de la obligación. Esa frase es una pista directa sobre cómo pensar los casos.'},
      {type:'definition',title:'Pregunta previa al cobro',text:'Antes de avanzar, confirma que exista una obligación real, correctamente registrada, exigible y respaldada por el título o soporte que corresponda.'},
      {type:'steps',title:'Chequeo mínimo del expediente',items:['Identificar origen y concepto de la obligación.','Verificar valor, saldos y pagos aplicados.','Determinar si la obligación es exigible.','Comprobar el título ejecutivo cuando se vaya a cobro coactivo.','Revisar prescripción, facilidades, procesos concursales u otros hechos que afecten la actuación.']},
      {type:'trap',text:'Un dato inconsistente en el sistema no debe tratarse como verdad por el simple hecho de estar registrado. La ficha del empleo exige calidad, incorporación y unificación de la información.'},
      {type:'sequence-exercise',title:'Antes de cobrar',text:'Ordena el análisis mínimo que evita convertir un registro en cobro automático.',items:[{id:'c',label:'Verificar exigibilidad y título cuando corresponda.'},{id:'a',label:'Reconstruir el origen y la realidad de la obligación.'},{id:'d',label:'Definir la actuación de cartera procedente.'},{id:'b',label:'Conciliar pagos, ajustes y saldos.'}],correctOrder:['a','b','c','d'],explanation:'La ruta parte de la realidad fiscal, pasa por exigibilidad y solo después llega a la actuación de cobro.'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m9-l2', moduleId:'m9', order:2, title:'Prescripción de la acción de cobro', subtitle:'Cinco años, pero el punto de inicio y los eventos posteriores importan.', durationMinutes:14, skillIds:['prescripcion-cobro'], status:'published',
    blocks:[
      {type:'article',article:'Art. 817',title:'Término general',text:'La acción de cobro de obligaciones fiscales prescribe en cinco años. La fecha desde la que se cuenta varía según el origen de la obligación: vencimiento para declarar, presentación extemporánea, corrección o ejecutoria del acto, entre otros supuestos.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 818',title:'Interrupción y suspensión',text:'La notificación del mandamiento de pago, el otorgamiento de facilidades para el pago y determinados eventos concursales o liquidatorios pueden interrumpir el término; la norma también regula supuestos de suspensión.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'No confundas',columns:['Figura','Efecto conceptual'],rows:[['Interrupción','El término que venía corriendo se corta y, según la regla aplicable, vuelve a correr desde el momento previsto.'],['Suspensión','El cómputo se detiene temporalmente durante el supuesto legal y luego continúa.']]},
      {type:'prescription-simulator',title:'¿Qué cambia si aparece un evento?',text:'Selecciona un escenario para visualizar la diferencia conceptual. La línea representa solo un ejemplo de estudio; no reemplaza el cómputo jurídico de un expediente.'},
      {type:'checkpoint',questionId:'q-presc-01'},
      {type:'checkpoint',questionId:'q-presc-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m10-l1', moduleId:'m10', order:1, title:'Facilidades para el pago', subtitle:'Normalizar no significa renunciar a garantías y condiciones.', durationMinutes:13, skillIds:['facilidades-pago'], status:'published',
    blocks:[
      {type:'lead',text:'El cobro persuasivo busca la normalización voluntaria antes o alrededor de la actuación coactiva, pero debe apoyarse en figuras jurídicamente válidas. Una de las más importantes es la facilidad para el pago.'},
      {type:'article',article:'Art. 814',title:'Facilidades',text:'La norma vigente permite a autoridades DIAN competentes conceder facilidades para el pago por determinados plazos y bajo garantías suficientes. También contempla un supuesto sin garantías cuando el término no supera un año y se cumplen las condiciones allí previstas.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Efecto en cobro',text:'La facilidad no elimina la obligación: organiza su pago. Su incumplimiento puede conducir a dejar sin efecto el plazo y continuar las actuaciones de cobro según la norma.'},
      {type:'example',title:'Conecta artículos',text:'La facilidad importa también para prescripción: el artículo 818 la contempla como uno de los eventos que interrumpen el término.'},
      {type:'checkpoint',questionId:'q-facilidad-01'},
      {type:'sources',sourceIds:['estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m11-l1', moduleId:'m11', order:1, title:'El esqueleto del cobro coactivo', subtitle:'Un procedimiento administrativo, no una secuencia improvisada.', durationMinutes:14, skillIds:['cobro-coactivo'], status:'published',
    blocks:[
      {type:'article',article:'Art. 823',title:'Procedimiento administrativo coactivo',text:'Para el cobro coactivo de las deudas fiscales por los conceptos previstos en la norma debe seguirse el procedimiento establecido en los artículos siguientes del Estatuto Tributario.',sourceId:'estatuto-tributario'},
      {type:'process',title:'Mapa base del procedimiento',nodes:[{id:'a',label:'Obligación exigible'},{id:'b',label:'Título ejecutivo'},{id:'c',label:'Mandamiento de pago'},{id:'d',label:'Notificación'},{id:'e',label:'15 días: pagar o excepcionar'},{id:'f',label:'Decisión de excepciones / ejecución'},{id:'g',label:'Medidas, remate o terminación según el caso'}]},
      {type:'coactive-simulator',title:'Mesa de decisiones · cobro coactivo',text:'Recorre cinco momentos del expediente y elige la actuación jurídicamente coherente antes de ver la explicación.'},
      {type:'rule',title:'Competencia primero',text:'El Estatuto regula competencia funcional y territorial. En una PJS, una actuación materialmente correcta puede ser incorrecta si la realiza quien no tiene competencia.'},
      {type:'checkpoint',questionId:'q-coactivo-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m11-l2', moduleId:'m11', order:2, title:'Título ejecutivo y mandamiento de pago', subtitle:'Qué sustenta el cobro y cómo se ordena pagar.', durationMinutes:15, skillIds:['titulo-ejecutivo','mandamiento-pago'], status:'published',
    blocks:[
      {type:'article',article:'Art. 828',title:'Títulos ejecutivos',text:'La norma enumera documentos y decisiones que prestan mérito ejecutivo, entre ellos liquidaciones privadas y sus correcciones bajo las condiciones legales, liquidaciones oficiales ejecutoriadas y otros actos ejecutoriados que fijan sumas líquidas a favor del fisco.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 826',title:'Mandamiento de pago',text:'El funcionario competente ordena cancelar las obligaciones pendientes y los intereses respectivos. La norma regula su notificación personal previa citación y la alternativa por correo cuando no hay comparecencia en el término previsto.',sourceId:'estatuto-tributario'},
      {type:'trap',title:'10 no es 15',text:'Diez días corresponde a la citación para comparecer a la notificación personal del mandamiento. Quince días, desde la notificación, corresponde al término del artículo 830 para pagar o presentar excepciones.'},
      {type:'checkpoint',questionId:'q-titulo-01'},
      {type:'checkpoint',questionId:'q-coactivo-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m12-l1', moduleId:'m12', order:1, title:'Excepciones: defensa dentro del cobro', subtitle:'No todo argumento cabe contra el mandamiento.', durationMinutes:15, skillIds:['excepciones-cobro'], status:'published',
    blocks:[
      {type:'article',article:'Art. 830',title:'Término',text:'Dentro de los quince días siguientes a la notificación del mandamiento, el deudor debe pagar o puede proponer por escrito las excepciones previstas por la ley.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 831',title:'Excepciones',text:'Entre las excepciones están pago efectivo, existencia de acuerdo de pago, falta o pérdida de ejecutoria del título, ciertas demandas ante la jurisdicción, prescripción y falta de título o incompetencia del funcionario, además de reglas para deudores solidarios.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Arts. 832–833',title:'Decisión y efecto',text:'El funcionario decide las excepciones dentro del término legal. Si están probadas, declara su prosperidad y ordena la terminación cuando corresponda, con levantamiento de medidas preventivas si fueron decretadas.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-exc-01'},
      {type:'checkpoint',questionId:'q-exc-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m13-l1', moduleId:'m13', order:1, title:'Medidas cautelares: asegurar el crédito sin perder el marco legal', subtitle:'Oportunidad, bienes y límites.', durationMinutes:14, skillIds:['medidas-cautelares'], status:'published',
    blocks:[
      {type:'article',article:'Art. 837',title:'Medidas preventivas',text:'El funcionario puede decretar embargo y secuestro preventivo de bienes del deudor que se hayan establecido como de su propiedad, previa o simultáneamente con el mandamiento de pago.',sourceId:'estatuto-tributario'},
      {type:'definition',title:'Finalidad',text:'Una medida cautelar busca asegurar la efectividad del cobro; no equivale por sí sola al pago ni al remate.'},
      {type:'article',article:'Art. 837-1',title:'Límite de inembargabilidad',text:'La norma establece reglas específicas para cuentas de ahorro de personas naturales y señala, entre otros aspectos, que en procesos contra personas jurídicas no existe el mismo límite allí previsto.',sourceId:'estatuto-tributario'},
      {type:'trap',text:'Antes de responder “embargar”, revisa oportunidad, titularidad del bien, límites legales y si existe un supuesto que obligue a levantar o modificar la medida.'},
      {type:'checkpoint',questionId:'q-medida-01'},
      {type:'checkpoint',questionId:'q-medida-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m15-l1', moduleId:'m15', order:1, title:'Devolución, compensación e imputación no son lo mismo', subtitle:'Tres destinos posibles para un saldo, con reglas distintas.', durationMinutes:13, skillIds:['compensacion'], status:'published',
    blocks:[
      {type:'article',article:'Art. 815',title:'Compensación con saldos a favor',text:'El Estatuto permite, según el supuesto, imputar saldos a favor en la liquidación privada del mismo impuesto del período siguiente y regula la compensación con deudas fiscales, con reglas particulares.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'Diferencia conceptual',columns:['Figura','Idea central'],rows:[['Imputación','Trasladar el saldo al período siguiente del mismo impuesto, cuando la norma lo permite.'],['Compensación','Aplicar un saldo a favor frente a deudas fiscales bajo las reglas legales.'],['Devolución','Restituir al contribuyente o responsable el saldo o pago procedente conforme al procedimiento.']]},
      {type:'article',article:'Art. 816',title:'Oportunidad general para compensar',text:'La solicitud de compensación debe presentarse, como regla general, a más tardar dos años después del vencimiento del término para declarar.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-comp-01'},
      {type:'checkpoint',questionId:'q-comp-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m16-l1', moduleId:'m16', order:1, title:'El procedimiento de devolución empieza por identificar qué se devuelve', subtitle:'Saldo a favor, pago en exceso o pago de lo no debido.', durationMinutes:15, skillIds:['devoluciones'], status:'published',
    blocks:[
      {type:'article',article:'Art. 850',title:'Devolución de saldos a favor',text:'Los contribuyentes o responsables que liquiden saldos a favor pueden solicitar devolución. La DIAN también debe devolver oportunamente pagos en exceso o de lo no debido, siguiendo el procedimiento aplicable.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 854',title:'Oportunidad para solicitar',text:'Como regla general del artículo 854, la solicitud de devolución de impuestos debe presentarse a más tardar dos años después del vencimiento del término para declarar, sin perjuicio de reglas especiales.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 855',title:'Término para efectuar la devolución',text:'Para saldos a favor de renta e IVA presentados oportunamente y en debida forma, el término general es de cincuenta días, previas las compensaciones a que haya lugar, con reglas especiales y términos adicionales en ciertos eventos.',sourceId:'estatuto-tributario'},
      {type:'trap',title:'Dos años ≠ cincuenta días',text:'Dos años puede referirse a la oportunidad para presentar la solicitud; cincuenta días es el término general de la administración para efectuar ciertas devoluciones una vez la solicitud está presentada oportunamente y en debida forma.'},
      {type:'checkpoint',questionId:'q-dev-01'},
      {type:'checkpoint',questionId:'q-dev-02'},
      {type:'sources',sourceIds:['estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m19-l1', moduleId:'m19', order:1, title:'Los niveles comportamentales sí cambian lo que se espera', subtitle:'CT-CR-3007 exige tres competencias nivel 3 y una nivel 4.', durationMinutes:12, skillIds:['competencias-comportamentales'], status:'published',
    blocks:[
      {type:'lead',text:'La Resolución 65 de 2024 adoptó el Diccionario de Competencias Comportamentales de la DIAN. El MERF asigna a cada empleo los niveles esperados para selección, evaluación y desarrollo.'},
      {type:'comparison',title:'Niveles de CT-CR-3007',columns:['Competencia','Nivel'],rows:[['Comportamiento ético','4'],['Adaptabilidad','3'],['Comunicación efectiva','3'],['Trabajo en equipo','3']]},
      {type:'definition',title:'Comportamiento ético nivel 4',text:'El diccionario lo ubica en un nivel de desarrollo orientado a estructurar, fomentar y aplicar estrategias organizacionales basadas en valores institucionales y prácticas correctas, para sí y para la organización.'},
      {type:'tip',text:'En pruebas comportamentales, evita buscar una “personalidad perfecta”. Comprende las conductas observables y responde de forma consistente con situaciones reales.'},
      {type:'checkpoint',questionId:'q-comp-beh-01'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m20-l1', moduleId:'m20', order:1, title:'Integridad aplicada al servicio', subtitle:'Cinco valores que deben reflejarse en decisiones cotidianas.', durationMinutes:12, skillIds:['integridad'], status:'published',
    blocks:[
      {type:'lead',text:'El Código de Integridad del Servicio Público Colombiano trabaja con cinco valores: Honestidad, Respeto, Compromiso, Diligencia y Justicia. La utilidad para una prueba no está en repetirlos, sino en reconocer qué conducta representa cada uno.'},
      {type:'comparison',title:'Mapa rápido',columns:['Valor','Idea operativa'],rows:[['Honestidad','Verdad, transparencia, rectitud e interés general.'],['Respeto','Trato digno, sin discriminación y apertura al diálogo.'],['Compromiso','Comprender necesidades ciudadanas y asumir el servicio como responsabilidad.'],['Diligencia','Cumplir con atención, prontitud, destreza y eficiencia.'],['Justicia','Decidir con imparcialidad, equidad e igualdad.']]},
      {type:'trap',text:'Una acción “rápida” no es diligente si viola procedimiento; una decisión “amable” no es justa si favorece indebidamente a una persona.'},
      {type:'checkpoint',questionId:'q-integridad-01'},
      {type:'sources',sourceIds:['codigo-integridad','codigo-buen-gobierno-dian']}
    ]
  },
  {
    id:'m21-l1', moduleId:'m21', order:1, title:'Anatomía de una buena respuesta PJS', subtitle:'Selecciona la actuación correcta, no la frase que “suena mejor”.', durationMinutes:11, skillIds:['tecnica-pjs'], status:'published',
    blocks:[
      {type:'steps',title:'Lectura en dos pasadas',items:['Primera pasada: ¿qué pasó y qué te están preguntando?','Segunda pasada: subraya fechas, actos, notificaciones, pagos, calidad del sujeto y etapa del procedimiento.','Elimina opciones que usan una figura real en el momento equivocado.','Compara las dos restantes contra competencia y norma.','Solo después decide.']},
      {type:'example',title:'Ejemplo de distractores',text:'“Embargar”, “archivar” y “resolver excepciones” pueden ser actuaciones reales; si el caso dice que el mandamiento apenas será expedido, debes ubicar cuál corresponde a ese instante y qué presupuestos se cumplen.'},
      {type:'tip',title:'Velocidad útil',text:'Primero entrena precisión sin cronómetro. Cuando alcances estabilidad en una habilidad, agrega tiempo para mejorar velocidad sin sacrificar razonamiento.'},
      {type:'checkpoint',questionId:'q-pjs-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  }

  ,{
    id:'m1-l1', moduleId:'m1', order:1, title:'La función pública es el marco de cada decisión', subtitle:'Antes del Estatuto Tributario están la Constitución y los principios de la actuación administrativa.', durationMinutes:13, skillIds:['funcion-publica'], status:'published',
    blocks:[
      {type:'lead',text:'En un cargo de cartera y recaudo puedes estar frente a cifras, actos y términos todos los días, pero la actuación sigue siendo función administrativa. Eso obliga a leer cada decisión con un marco de legalidad, interés general e imparcialidad.'},
      {type:'objective',items:['Reconocer la idea central del artículo 209 de la Constitución.','Relacionar principios constitucionales con decisiones de recaudo y cartera.','Descartar respuestas PJS que sacrifiquen garantías por velocidad o conveniencia.']},
      {type:'article',article:'Art. 209',title:'Función administrativa',text:'La Constitución dispone que la función administrativa está al servicio de los intereses generales y la orienta por principios como igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad. También exige coordinación entre autoridades y control interno.',sourceId:'constitucion-politica'},
      {type:'example',title:'Aplicación práctica',text:'Si dos contribuyentes están en condiciones equivalentes, una relación personal con uno de ellos no autoriza un tratamiento preferente. La actuación debe sostenerse en criterios objetivos y en el procedimiento.'},
      {type:'trap',title:'Celeridad no significa saltarse etapas',text:'Una actuación rápida puede ser incorrecta si elimina una oportunidad de defensa, omite una notificación o desconoce la competencia del funcionario.'},
      {type:'checkpoint',questionId:'q-const-01'},
      {type:'checkpoint',questionId:'q-const-02'},
      {type:'sources',sourceIds:['constitucion-politica','cpaca']}
    ]
  },
  {
    id:'m1-l2', moduleId:'m1', order:2, title:'Cómo leer un dilema de función pública', subtitle:'Interés general, igualdad, imparcialidad y debido proceso como filtros de respuesta.', durationMinutes:11, skillIds:['funcion-publica','cpaca-principios'], status:'published',
    blocks:[
      {type:'steps',title:'Filtro de cuatro preguntas',items:['¿La actuación tiene fundamento en una competencia y una norma?','¿Trata situaciones equivalentes con criterios objetivos?','¿Respeta defensa, contradicción y procedimiento?','¿La decisión puede explicarse y dejar trazabilidad suficiente?']},
      {type:'comparison',title:'Principio y señal de alerta',columns:['Principio','Señal de alerta en un caso'],rows:[['Igualdad','Trato distinto sin una razón jurídica objetiva.'],['Imparcialidad','Favorecer o perjudicar por vínculos o preferencias personales.'],['Eficacia','Actuar sin orientar la decisión al resultado legítimo del procedimiento.'],['Economía','Usar trámites innecesarios o recursos sin justificación.'],['Celeridad','Demora injustificada; nunca habilita a omitir garantías.'],['Publicidad','Ocultar una actuación que debe ser comunicada o conocida conforme a la ley.']]},
      {type:'tip',text:'En PJS, cuando una opción invoca “eficiencia” para desconocer legalidad o debido proceso, suele estar mezclando un valor correcto con una actuación incorrecta.'},
      {type:'sequence-exercise',title:'Aplica el filtro antes de escoger',text:'Ordena una lectura disciplinada del dilema de función pública.',items:[{id:'d',label:'Elegir la actuación que pueda explicarse y dejar trazabilidad.'},{id:'b',label:'Revisar igualdad e imparcialidad frente a los hechos.'},{id:'a',label:'Confirmar competencia y fundamento jurídico.'},{id:'c',label:'Verificar procedimiento, defensa y contradicción.'}],correctOrder:['a','b','c','d'],explanation:'La eficiencia solo se valora después de verificar que la actuación se mantiene dentro de competencia, imparcialidad y debido proceso.'},
      {type:'sources',sourceIds:['constitucion-politica','cpaca']}
    ]
  },
  {
    id:'m6-l1', moduleId:'m6', order:1, title:'Estado de cuenta: reconstruir la realidad antes de actuar', subtitle:'Declaraciones, pagos, saldos y exigibilidad deben contar la misma historia.', durationMinutes:15, skillIds:['estado-cuenta','imputacion-pagos'], status:'published',
    blocks:[
      {type:'lead',text:'Una de las funciones expresas de CT-CR-3007 es depurar la información del estado de cuenta del contribuyente y verificar la exigibilidad y realidad de la obligación. Por eso este módulo no se limita a “leer un saldo”: enseña a reconstruir cómo se formó.'},
      {type:'objective',items:['Separar declaración, obligación, pago e imputación.','Entender por qué un pago mal leído puede producir un estado de cuenta engañoso.','Conectar depuración con cartera y cobro.']},
      {type:'process',title:'Lectura mínima de una obligación',nodes:[{id:'d1',label:'Declaración o acto',hint:'¿Qué originó o determinó la obligación?'},{id:'d2',label:'Vencimiento / ejecutoria',hint:'¿Desde cuándo puede exigirse?'},{id:'d3',label:'Pagos y aplicaciones',hint:'¿Qué se pagó y cómo quedó imputado?'},{id:'d4',label:'Saldo real',hint:'¿Qué permanece pendiente?'},{id:'d5',label:'Estado de cartera',hint:'¿Qué actuación procede ahora?'}]},
      {type:'article',article:'Art. 804',title:'Imputación del pago',text:'El Estatuto Tributario contiene reglas sobre cómo se imputa un pago dentro de obligaciones vencidas. Para depuración, el dato importante no es solo la existencia del pago, sino su correcta aplicación al período, impuesto y conceptos correspondientes.',sourceId:'estatuto-tributario'},
      {type:'trap',text:'“Hay un recibo de pago” no equivale automáticamente a “la obligación está cancelada”. Primero verifica que el pago corresponda al sujeto, período, concepto y obligación que estás revisando.'},
      {type:'checkpoint',questionId:'q-pagos-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m6-l2', moduleId:'m6', order:2, title:'De saldo registrado a obligación cobrable', subtitle:'Calidad del dato, título y exigibilidad antes de escalar la gestión.', durationMinutes:13, skillIds:['estado-cuenta','titulo-ejecutivo'], status:'published',
    blocks:[
      {type:'definition',title:'Depurar',text:'En este curso, depurar significa contrastar los registros con sus soportes y reglas aplicables para identificar la situación real de la obligación: origen, exigibilidad, pagos, saldos e inconsistencias.'},
      {type:'article',article:'Art. 828',title:'Títulos ejecutivos',text:'El Estatuto enumera documentos y decisiones que prestan mérito ejecutivo, entre ellos liquidaciones privadas y sus correcciones bajo las condiciones legales, liquidaciones oficiales ejecutoriadas y otros actos ejecutoriados que fijen sumas líquidas a favor del fisco.',sourceId:'estatuto-tributario'},
      {type:'steps',title:'Antes de remitir o continuar en cartera',items:['Identifica el soporte jurídico de la obligación.','Verifica vencimiento, firmeza o ejecutoria cuando corresponda.','Reconcilia pagos, compensaciones, ajustes y saldos.','Documenta la inconsistencia detectada y su corrección conforme al procedimiento.','Solo después determina la actuación de cartera que corresponda.']},
      {type:'checkpoint',questionId:'q-pagos-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m8-l1', moduleId:'m8', order:1, title:'Control extensivo: gestionar patrones, no solo expedientes', subtitle:'Campañas de amplia cobertura para promover y exigir cumplimiento.', durationMinutes:14, skillIds:['control-extensivo'], status:'published',
    blocks:[
      {type:'lead',text:'La ficha del empleo no restringe la gestión al cobro individual. También asigna campañas de ejecución inmediata y amplia cobertura sobre obligaciones formales y sustanciales. Esa es una pista directa de por qué el control extensivo importa para este cargo.'},
      {type:'definition',title:'Idea operativa',text:'El control extensivo trabaja sobre universos o segmentos de obligados para identificar incumplimientos, contactar, orientar, requerir o gestionar su normalización conforme a la normativa y los lineamientos vigentes.'},
      {type:'article',article:'Decreto 1742 · Art. 20',title:'Cobranzas y Control Extensivo',text:'La estructura de la DIAN asigna a la Subdirección de Cobranzas y Control Extensivo funciones de dirección y control sobre actividades de cobro y gestión asociada al cumplimiento dentro de su competencia.',sourceId:'decreto-1742-2020'},
      {type:'example',title:'Cómo se ve en la práctica institucional',text:'En su Informe de Gestión 2025, la DIAN reportó acciones masivas y persuasivas mediante correos, mensajes, llamadas y otros canales dirigidos a la regularización y al cumplimiento correcto y voluntario de obligaciones.'},
      {type:'process',title:'Ciclo didáctico de una campaña',nodes:[{id:'c1',label:'Detectar patrón',hint:'Incumplimiento o riesgo común.'},{id:'c2',label:'Segmentar universo',hint:'¿A quién aplica el lineamiento?'},{id:'c3',label:'Ejecutar acción',hint:'Contacto, orientación o requerimiento.'},{id:'c4',label:'Medir respuesta',hint:'Normalización, persistencia o novedad.'},{id:'c5',label:'Escalar',hint:'Aplicar el procedimiento que corresponda.'}]},
      {type:'trap',text:'Masivo no significa automático sin control. La campaña sigue sujeta a competencia, calidad de información, normativa y procedimiento.'},
      {type:'checkpoint',questionId:'q-control-01'},
      {type:'checkpoint',questionId:'q-control-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','decreto-1742-2020','informe-gestion-dian-2025']}
    ]
  },
  {
    id:'m14-l1', moduleId:'m14', order:1, title:'Cuando el cobro entra a un escenario concursal', subtitle:'La DIAN sigue siendo acreedor, pero el terreno jurídico cambia.', durationMinutes:15, skillIds:['procesos-concursales'], status:'published',
    blocks:[
      {type:'lead',text:'CT-CR-3007 asigna expresamente representar a la UAE DIAN en procesos especiales y concursales. La clave inicial es entender que una reorganización no “borra” la deuda: inserta la acreencia dentro de un procedimiento colectivo con reglas propias.'},
      {type:'article',article:'Ley 1116 · Art. 1',title:'Finalidad del régimen',text:'El régimen de insolvencia busca proteger el crédito y favorecer la recuperación y conservación de la empresa como unidad económica, a través de reorganización y liquidación judicial bajo el criterio legal aplicable.',sourceId:'ley-1116-2006'},
      {type:'article',article:'Ley 1116 · Arts. 19 y 25',title:'Reconocimiento de acreencias',text:'La apertura de la reorganización activa un proceso de reconocimiento y graduación de créditos. Las acreencias deben identificarse por acreedor, cuantía y demás elementos exigidos por la ley.',sourceId:'ley-1116-2006'},
      {type:'comparison',title:'Cambio de lógica',columns:['Cobro individual','Proceso concursal'],rows:[['Se analiza la obligación y la actuación de cobro aplicable al deudor.','La acreencia participa dentro de un proceso colectivo sujeto al juez del concurso y a reglas de reconocimiento.'],['La estrategia se centra en la obligación administrada.','Además importa la clase, graduación, votos, acuerdo y efectos concursales.'],['Las actuaciones siguen el procedimiento tributario aplicable.','Debe considerarse el régimen de insolvencia y sus efectos sobre los acreedores.']]},
      {type:'checkpoint',questionId:'q-concursal-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','ley-1116-2006']}
    ]
  },
  {
    id:'m14-l2', moduleId:'m14', order:2, title:'Proteger la acreencia fiscal dentro del concurso', subtitle:'Verificar, reconocer, graduar y actuar oportunamente.', durationMinutes:14, skillIds:['procesos-concursales'], status:'published',
    blocks:[
      {type:'steps',title:'Mapa mental para un caso',items:['Confirma que existe un proceso concursal y su etapa.','Identifica la obligación de la DIAN, capital y demás componentes pertinentes.','Verifica que la acreencia esté correctamente relacionada y soportada.','Revisa reconocimiento, graduación, objeciones y oportunidades procesales.','Analiza el acuerdo o la liquidación desde la posición jurídica de la entidad.']},
      {type:'article',article:'Ley 1116 · Art. 34',title:'Acuerdo y acreencias fiscales',text:'La ley contiene reglas específicas sobre el tratamiento de los créditos a favor de la DIAN y demás acreedores fiscales dentro del acuerdo de reorganización, incluyendo reformas posteriores sobre garantías y prelación.',sourceId:'ley-1116-2006'},
      {type:'trap',text:'No apliques mecánicamente una regla de cobro coactivo sin revisar los efectos del proceso concursal. En una pregunta situacional, la existencia del concurso cambia el análisis.'},
      {type:'checkpoint',questionId:'q-concursal-02'},
      {type:'sources',sourceIds:['ley-1116-2006','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m17-l1', moduleId:'m17', order:1, title:'El dato también es parte de la obligación', subtitle:'Permisos, calidad y seguridad en sistemas de recaudo y cartera.', durationMinutes:14, skillIds:['calidad-datos','seguridad-informacion'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF de Gestor II incluye una función tecnológica poco común en perfiles puramente jurídicos: gestionar creación, ajuste, mantenimiento, operación y permisos de acceso de sistemas corporativos de Recaudación y Administración de Cartera, así como la información contenida en ellos.'},
      {type:'definition',title:'Tres propiedades que debes reconocer',text:'La documentación de seguridad DIAN trabaja con confidencialidad, integridad y disponibilidad. En términos prácticos: que la información sea accesible solo a quien corresponde, permanezca correcta y pueda estar disponible cuando se necesita.'},
      {type:'comparison',title:'Problema y riesgo',columns:['Situación','Qué compromete'],rows:[['Dar permisos excesivos','Confidencialidad y control de acceso.'],['Modificar un saldo sin soporte o trazabilidad','Integridad y calidad del dato.'],['Sistema crítico sin disponibilidad','Continuidad y disponibilidad.'],['Compartir credenciales','Autenticación, trazabilidad y control de acceso.']]},
      {type:'rule',title:'El acceso es una decisión controlada',text:'La DIAN mantiene políticas específicas de restricción, autenticación, control y derechos de acceso. En un caso PJS, “habilitar para que pueda trabajar” no es suficiente si faltan autorización, perfil o procedimiento.'},
      {type:'checkpoint',questionId:'q-datos-01'},
      {type:'checkpoint',questionId:'q-datos-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','modelo-seguridad-dian','manual-seguridad-dian']}
    ]
  },
  {
    id:'m18-l1', moduleId:'m18', order:1, title:'Las competencias básicas se observan en conducta', subtitle:'No se estudian como un glosario: se reconocen en decisiones y relaciones.', durationMinutes:13, skillIds:['comportamentales-basicas'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF lista seis competencias comportamentales básicas: comportamiento ético, comunicación efectiva, trabajo en equipo, adaptabilidad, orientación al logro y orientación al usuario y al ciudadano. Las cuatro competencias específicas con niveles se estudian en el módulo siguiente.'},
      {type:'comparison',title:'Competencia y señal observable',columns:['Competencia','En una situación podría verse como…'],rows:[['Comportamiento ético','Mantener la actuación dentro de valores y reglas aun bajo presión.'],['Comunicación efectiva','Escuchar, estructurar información y verificar comprensión.'],['Trabajo en equipo','Coordinar, compartir información pertinente y cumplir acuerdos.'],['Adaptabilidad','Ajustarse a cambios de contexto sin abandonar objetivos ni reglas.'],['Orientación al logro','Organizar la acción para alcanzar resultados verificables.'],['Orientación al usuario y ciudadano','Comprender necesidades y prestar un servicio claro dentro del marco aplicable.']]},
      {type:'tip',text:'En instrumentos tipo Likert, intentar contestar siempre el extremo “socialmente perfecto” puede producir patrones poco consistentes. Comprende la conducta esperada y responde con coherencia.'},
      {type:'checkpoint',questionId:'q-basic-beh-01'},
      {type:'checkpoint',questionId:'q-basic-beh-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','res-65-2024']}
    ]
  }
  ,{
    id:'m1-l3', moduleId:'m1', order:3, title:'Derechos fundamentales y debido proceso en la gestión tributaria', subtitle:'La potestad de cobro tiene límites constitucionales.', durationMinutes:12, skillIds:['funcion-publica','debido-proceso'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF incluye Derechos Fundamentales dentro de los conocimientos básicos. Para Gestor II, el punto no es estudiar toda la jurisprudencia constitucional, sino reconocer cuándo una actuación administrativa puede afectar garantías que condicionan el procedimiento.'},
      {type:'definition',title:'Debido proceso',text:'El artículo 29 de la Constitución proyecta el debido proceso sobre actuaciones judiciales y administrativas. En la práctica exige competencia, procedimiento previo, posibilidad de defensa y decisiones sustentadas.'},
      {type:'comparison',title:'Garantía y traducción operativa',columns:['Garantía','En un expediente significa'],rows:[['Legalidad','Actuar con base en una norma y dentro de la competencia.'],['Defensa','Permitir el ejercicio de las oportunidades previstas para controvertir.'],['Contradicción','Valorar las razones y pruebas que legalmente deban ser consideradas.'],['Imparcialidad','Decidir por hechos y derecho, no por preferencias personales.']]},
      {type:'trap',text:'La existencia de una deuda no convierte cualquier actuación en válida. La finalidad de recaudo debe alcanzarse mediante el procedimiento aplicable.'},
      {type:'checkpoint',questionId:'q-debido-01'},
      {type:'sources',sourceIds:['constitucion-politica','cpaca','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m2-l2', moduleId:'m2', order:2, title:'Transparencia: publicidad no significa revelar todo', subtitle:'Máxima publicidad, reserva legal y responsabilidad sobre la información.', durationMinutes:12, skillIds:['transparencia','seguridad-informacion'], status:'published',
    blocks:[
      {type:'lead',text:'La Ley de Transparencia aparece en el MERF. Su regla de entrada es la máxima publicidad, pero una respuesta PJS correcta también debe reconocer información sometida a reserva o protección legal.'},
      {type:'article',article:'Ley 1712 · Art. 2',title:'Máxima publicidad',text:'La información en posesión, control o custodia de un sujeto obligado es pública, salvo las restricciones previstas por la Constitución o la ley.',sourceId:'ley-1712-2014'},
      {type:'rule',title:'Dos errores opuestos',text:'Ocultar información pública sin fundamento es incorrecto; divulgar información reservada o protegida también lo es. La actuación debe identificar la naturaleza del dato, la norma aplicable y el canal autorizado.'},
      {type:'example',title:'Caso de sistemas',text:'Que un funcionario pueda consultar un sistema no significa que esté autorizado para divulgar cualquier dato. Acceso técnico y autorización jurídica no son sinónimos.'},
      {type:'checkpoint',questionId:'q-transparencia-01'},
      {type:'sources',sourceIds:['ley-1712-2014','manual-seguridad-dian','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m2-l3', moduleId:'m2', order:3, title:'PQRSF y derecho de petición', subtitle:'Qué puede pedir una persona y por qué los términos importan.', durationMinutes:14, skillIds:['derecho-peticion','servicio-ciudadano'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF menciona de manera expresa el sistema PQRSF y las políticas de servicio al ciudadano. El derecho de petición es la base jurídica transversal para entender buena parte de esas interacciones.'},
      {type:'article',article:'Ley 1755 · Art. 13',title:'Objeto y modalidades',text:'Toda persona puede presentar peticiones respetuosas a las autoridades y obtener una resolución pronta, completa y de fondo. El derecho permite, entre otros, solicitar información, copias, consultas, quejas, denuncias y reclamos.',sourceId:'ley-1755-2015'},
      {type:'comparison',title:'Términos generales del artículo 14',columns:['Modalidad','Término general'],rows:[['Petición general','15 días'],['Documentos e información','10 días'],['Consulta a la autoridad sobre materias a su cargo','30 días']]},
      {type:'trap',title:'La norma especial prevalece',text:'Estos son términos generales de petición. Si un trámite tributario tiene un procedimiento y término especial, debes aplicar primero la regla especial correspondiente.'},
      {type:'checkpoint',questionId:'q-peticion-01'},
      {type:'checkpoint',questionId:'q-peticion-02'},
      {type:'sources',sourceIds:['ley-1755-2015','cpaca','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m2-l4', moduleId:'m2', order:4, title:'Gestión documental: el expediente también es evidencia', subtitle:'Organización, conservación, acceso y trazabilidad de los documentos.', durationMinutes:11, skillIds:['gestion-documental','trazabilidad'], status:'published',
    blocks:[
      {type:'definition',title:'Archivo',text:'La Ley 594 concibe el archivo como el conjunto de documentos acumulados en el desarrollo de la gestión, conservados respetando su orden para servir como testimonio e información.'},
      {type:'rule',title:'Por qué importa para Gestor II',text:'Cobro, devoluciones, conciliación de saldos y decisiones sobre información requieren que el expediente permita reconstruir qué ocurrió, quién actuó, cuándo y con qué soporte.'},
      {type:'steps',title:'Cuatro preguntas de trazabilidad',items:['¿Cuál es el documento fuente?','¿Está asociado al contribuyente, obligación y período correctos?','¿Puede identificarse su fecha, origen y responsable?','¿La conservación y el acceso respetan las reglas institucionales?']},
      {type:'checkpoint',questionId:'q-archivo-01'},
      {type:'sources',sourceIds:['ley-594-2000','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m3-l3', moduleId:'m3', order:3, title:'TACI: ubica el sistema sin estudiar tres carreras a la vez', subtitle:'Tributario, aduanero y cambiario como marco institucional.', durationMinutes:10, skillIds:['taci'], status:'published',
    blocks:[
      {type:'lead',text:'La ficha incluye Introducción al Sistema Tributario, Aduanero y Cambiario. Eso no convierte este empleo en un cargo aduanero especializado: su proceso y subprocesos siguen siendo cumplimiento tributario, cartera y recaudo-devoluciones.'},
      {type:'comparison',title:'Mapa de alcance',columns:['Componente','Qué debes conservar en esta fase'],rows:[['Tributario','Obligaciones administradas, recaudo, cobro, devoluciones y control.'],['Aduanero','Reconocer que la DIAN administra funciones aduaneras y que ciertas obligaciones pueden remitir a procedimientos de cobro aplicables.'],['Cambiario','Ubicar la competencia institucional sin desplazar el foco del empleo tributario.']]},
      {type:'tip',text:'Si los indicadores individuales de la inscripción incluyen un eje TACI más amplio, deberá ajustarse su prioridad de estudio. Mientras no se consulten, el MERF justifica este fundamento institucional sin desplazar el núcleo de cartera.'},
      {type:'checkpoint',questionId:'q-taci-01'},
      {type:'sources',sourceIds:['decreto-1742-2020','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m4-l2', moduleId:'m4', order:2, title:'Derecho de petición: respuesta de fondo, no solo acuse de recibo', subtitle:'Título II del CPACA, sustituido por la Ley 1755 de 2015.', durationMinutes:13, skillIds:['derecho-peticion','cpaca-principios'], status:'published',
    blocks:[
      {type:'article',article:'Art. 13',title:'Petición ante autoridades',text:'El derecho comprende presentar solicitudes respetuosas y obtener pronta resolución completa y de fondo. No es necesario invocar expresamente el artículo 23 de la Constitución para que una actuación tenga naturaleza de petición.',sourceId:'ley-1755-2015'},
      {type:'rule',title:'Respuesta de fondo',text:'Un acuse de recibo no reemplaza la decisión que corresponda. La autoridad debe resolver lo pedido dentro de su competencia o proceder conforme a las reglas de remisión cuando no sea competente.'},
      {type:'example',title:'Aplicación',text:'Si la dependencia recibe una petición sobre un asunto que corresponde a otra autoridad, la solución no es archivarla silenciosamente: debe aplicarse la regla de remisión y comunicar al peticionario.'},
      {type:'checkpoint',questionId:'q-peticion-03'},
      {type:'sources',sourceIds:['ley-1755-2015','cpaca']}
    ]
  },
  {
    id:'m4-l3', moduleId:'m4', order:3, title:'Reglas generales de la actuación administrativa', subtitle:'El procedimiento común opera de manera supletoria frente a reglas especiales.', durationMinutes:13, skillIds:['cpaca-procedimiento'], status:'published',
    blocks:[
      {type:'article',article:'Art. 34',title:'Procedimiento común y principal',text:'Las actuaciones se sujetan al procedimiento administrativo común y principal, sin perjuicio de procedimientos regulados por leyes especiales; en lo no previsto por estas, se aplican las reglas de la Parte Primera del CPACA.',sourceId:'cpaca'},
      {type:'definition',title:'Regla especial',text:'En materia tributaria existen procedimientos propios en el Estatuto Tributario. El CPACA no se usa para ignorarlos, sino dentro del alcance que jurídicamente corresponda.'},
      {type:'trap',text:'Un artículo general del CPACA no desplaza automáticamente una regla especial del Estatuto Tributario sobre notificación, recursos o términos.'},
      {type:'checkpoint',questionId:'q-cpaca-02'},
      {type:'sources',sourceIds:['cpaca','estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m4-l4', moduleId:'m4', order:4, title:'Publicación, comunicación y notificación', subtitle:'La eficacia de una decisión depende también de cómo se da a conocer.', durationMinutes:14, skillIds:['notificaciones','cpaca-procedimiento'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF remite expresamente al Capítulo V del Título III del CPACA. En PJS, distinguir publicación, comunicación y notificación evita escoger una forma de dar a conocer el acto que no corresponde.'},
      {type:'article',article:'CPACA · Cap. V',title:'Publicaciones, citaciones, comunicaciones y notificaciones',text:'El capítulo regula las formas mediante las cuales se hacen públicos o se ponen en conocimiento actos y decisiones administrativas, según su naturaleza y destinatarios.',sourceId:'cpaca'},
      {type:'rule',title:'Primero pregunta qué acto tienes',text:'Antes de escoger el medio, identifica si se trata de un acto general, una decisión particular o una actuación sometida a norma especial. En cobro tributario, revisa siempre la regla específica del Estatuto Tributario.'},
      {type:'checkpoint',questionId:'q-notif-01'},
      {type:'sources',sourceIds:['cpaca','estatuto-tributario']}
    ]
  },
  {
    id:'m4-l5', moduleId:'m4', order:5, title:'Recursos administrativos: no todos proceden contra todo acto', subtitle:'Reposición, apelación y queja dentro del marco general.', durationMinutes:13, skillIds:['recursos-administrativos'], status:'published',
    blocks:[
      {type:'article',article:'Art. 74',title:'Recursos contra actos administrativos',text:'Como regla general, contra los actos definitivos pueden proceder reposición, apelación y, en el supuesto legal correspondiente, queja, con las excepciones y reglas del Código.',sourceId:'cpaca'},
      {type:'trap',title:'Cuidado con trasladar recursos',text:'El procedimiento administrativo de cobro contiene reglas especiales sobre recursos. No asumas que todo acto de cobro admite los mismos recursos generales del CPACA.'},
      {type:'steps',title:'Cómo resolver un caso',items:['Identifica si el acto es definitivo o de trámite.','Busca primero la norma especial aplicable.','Verifica qué recurso procede y ante quién.','Comprueba oportunidad y efecto antes de decidir.']},
      {type:'checkpoint',questionId:'q-recursos-01'},
      {type:'sources',sourceIds:['cpaca','estatuto-tributario']}
    ]
  },
  {
    id:'m4-l6', moduleId:'m4', order:6, title:'Silencio y firmeza: el paso que vuelve ejecutable una decisión', subtitle:'Capítulos VII y VIII del procedimiento administrativo general.', durationMinutes:14, skillIds:['firmeza-actos','cpaca-procedimiento'], status:'published',
    blocks:[
      {type:'definition',title:'Firmeza',text:'La firmeza identifica el momento en que el acto deja de estar pendiente de los recursos administrativos previstos, bajo los supuestos del artículo 87 del CPACA.'},
      {type:'article',article:'Art. 87',title:'Firmeza de los actos administrativos',text:'El Código contempla varios eventos de firmeza, entre ellos cuando no procede recurso, cuando se decide el recurso o cuando vence el término para interponerlo sin que se haya presentado.',sourceId:'cpaca'},
      {type:'article',article:'Art. 88',title:'Presunción de legalidad',text:'Los actos administrativos se presumen legales mientras no hayan sido anulados; si están suspendidos, no pueden ejecutarse mientras subsista la suspensión.',sourceId:'cpaca'},
      {type:'checkpoint',questionId:'q-firmeza-01'},
      {type:'sources',sourceIds:['cpaca','estatuto-tributario']}
    ]
  },
  {
    id:'m5-l2', moduleId:'m5', order:2, title:'Obligación sustancial y obligaciones formales', subtitle:'Pagar es central, pero no es la única obligación administrada.', durationMinutes:12, skillIds:['obligacion-tributaria','control-extensivo'], status:'published',
    blocks:[
      {type:'article',article:'Art. 1',title:'Origen de la obligación sustancial',text:'La obligación tributaria sustancial nace cuando se realizan los presupuestos previstos por la ley como generadores del impuesto y tiene por objeto el pago del tributo.',sourceId:'estatuto-tributario'},
      {type:'definition',title:'Obligaciones formales',text:'Son deberes instrumentales establecidos por el ordenamiento para permitir determinación, control, recaudo e información tributaria. Su incumplimiento puede ser gestionado aunque no se confunda con el nacimiento de la obligación sustancial.'},
      {type:'example',title:'Por qué importa en CT-CR-3007',text:'La función de campañas de control extensivo menciona de forma expresa obligaciones formales y sustanciales. Un PJS puede cambiar completamente según cuál de las dos esté incumplida.'},
      {type:'checkpoint',questionId:'q-obligacion-02'},
      {type:'sources',sourceIds:['estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m5-l3', moduleId:'m5', order:3, title:'Evasión, elusión y contrabando: conceptos que no deben mezclarse', subtitle:'Un mapa básico para interpretar riesgos de cumplimiento.', durationMinutes:11, skillIds:['evasion-elusion'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF incluye expresamente Conceptos Evasión, Elusión y Contrabando. En esta primera capa interesa reconocer la diferencia conceptual y evitar usar los términos como sinónimos.'},
      {type:'comparison',title:'Distinción de estudio',columns:['Concepto','Idea general'],rows:[['Evasión','Incumplimiento de obligaciones tributarias mediante conductas contrarias al ordenamiento.'],['Elusión','Uso de estructuras o alternativas para reducir carga tributaria cuya valoración depende del marco legal aplicable, incluido el régimen antiabuso.'],['Contrabando','Conductas asociadas al ingreso, salida, ocultamiento o circulación de mercancías al margen de las reglas aduaneras aplicables.']]},
      {type:'trap',text:'Esta lección es conceptual. No atribuyas automáticamente consecuencias penales o sancionatorias sin identificar la conducta, la norma y el procedimiento aplicable.'},
      {type:'checkpoint',questionId:'q-conceptos-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m6-l3', moduleId:'m6', order:3, title:'Declaración, recibo y pago: tres piezas distintas', subtitle:'Un sistema de recaudo puede registrar eventos relacionados, no equivalentes.', durationMinutes:13, skillIds:['recaudo','estado-cuenta'], status:'published',
    blocks:[
      {type:'lead',text:'La ficha exige corregir datos inconsistentes de declaraciones, recibos de pago y reproceso de saldos. Por eso debes distinguir el documento que declara, el instrumento usado para pagar y la aplicación efectiva del valor en el estado de cuenta.'},
      {type:'comparison',title:'No confundas',columns:['Pieza','Pregunta que responde'],rows:[['Declaración','¿Qué información y liquidación presentó el obligado?'],['Recibo de pago','¿Qué valor intentó o realizó pagar y bajo qué referencia?'],['Aplicación / estado de cuenta','¿Dónde quedó registrado e imputado el pago y qué saldo permanece?']]},
      {type:'example',title:'Inconsistencia típica de entrenamiento',text:'Existe recibo por $X, pero fue asociado a un período diferente. El trabajo no termina comprobando que el dinero entró: debe reconstruirse su correcta aplicación y el saldo real.'},
      {type:'checkpoint',questionId:'q-recaudo-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m6-l4', moduleId:'m6', order:4, title:'Corrección y reproceso: cambia el dato, conserva la trazabilidad', subtitle:'La calidad de información es parte de la función, no un detalle informático.', durationMinutes:12, skillIds:['calidad-datos','estado-cuenta'], status:'published',
    blocks:[
      {type:'rule',title:'Principio operativo',text:'Una corrección debe resolver la inconsistencia sin borrar la historia que permite explicar por qué cambió el dato, quién lo autorizó y qué efecto produjo en la obligación.'},
      {type:'steps',title:'Secuencia segura de análisis',items:['Identifica el dato inconsistente y el documento fuente.','Determina la regla o procedimiento de corrección aplicable.','Valida competencia y autorizaciones.','Ejecuta o proyecta el ajuste según el rol.','Comprueba el nuevo saldo y conserva evidencia de la actuación.']},
      {type:'trap',text:'Modificar directamente un dato para que “cuadre” sin soporte o autorización puede generar un problema mayor de integridad y trazabilidad.'},
      {type:'checkpoint',questionId:'q-reproceso-01'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','modelo-seguridad-dian','manual-seguridad-dian']}
    ]
  },
  {
    id:'m7-l2', moduleId:'m7', order:2, title:'Qué controla la DIAN en una Entidad Autorizada para Recaudar', subtitle:'Recepción, reporte, traslado y calidad de la información.', durationMinutes:14, skillIds:['ear','recaudo'], status:'published',
    blocks:[
      {type:'lead',text:'La competencia EAR del MERF se conecta con una función muy concreta: auditorías, capacitaciones, verificación de requisitos, seguimiento y aplicación de sanciones.'},
      {type:'definition',title:'EAR',text:'Son entidades autorizadas para recibir declaraciones y/o recaudar recursos administrados por la DIAN bajo las condiciones establecidas por la regulación.'},
      {type:'steps',title:'Cuatro dimensiones de control',items:['Recepción correcta de documentos y pagos.','Registro y reporte oportuno de la información.','Traslado de recursos conforme a los plazos y reglas aplicables.','Controles de calidad que permitan detectar errores, inconsistencias y extemporaneidades.']},
      {type:'checkpoint',questionId:'q-ear-02'},
      {type:'sources',sourceIds:['estatuto-tributario','res-227-2025','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m7-l3', moduleId:'m7', order:3, title:'Régimen sancionatorio EAR: conducta, prueba y gradualidad', subtitle:'Sancionar no es escoger la cifra más alta.', durationMinutes:15, skillIds:['ear','regimen-sancionatorio'], status:'published',
    blocks:[
      {type:'article',article:'Arts. 674–676',title:'Conductas sancionables',text:'El Estatuto Tributario regula sanciones asociadas a incumplimientos de las entidades autorizadas para recaudar, incluidos errores, inconsistencias, extemporaneidades y entrega tardía de información o recursos en los supuestos previstos.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Gradualidad',text:'El régimen incluye reglas que obligan a valorar los supuestos legales de reducción y gradualidad. La sanción debe corresponder a la conducta acreditada y a la norma vigente.'},
      {type:'trap',text:'Un hallazgo de auditoría no equivale automáticamente a una sanción firme. Identifica conducta, soporte, procedimiento, competencia y criterio de graduación aplicable.'},
      {type:'checkpoint',questionId:'q-ear-03'},
      {type:'sources',sourceIds:['estatuto-tributario','res-227-2025','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m8-l2', moduleId:'m8', order:2, title:'Diseñar una campaña de control extensivo', subtitle:'Segmentar, contactar, medir y escalar cuando corresponda.', durationMinutes:13, skillIds:['control-extensivo','calidad-datos'], status:'published',
    blocks:[
      {type:'process',title:'Ciclo básico de una campaña',nodes:[{id:'c1',label:'Identificar universo',hint:'¿Qué obligación o patrón se gestionará?'},{id:'c2',label:'Depurar y segmentar',hint:'Evita contactar casos incorrectos o ya normalizados.'},{id:'c3',label:'Ejecutar acción',hint:'Mensaje, llamada, orientación o requerimiento según lineamiento.'},{id:'c4',label:'Registrar respuesta',hint:'Pago, corrección, contacto fallido u otra novedad.'},{id:'c5',label:'Medir y escalar',hint:'Determina qué casos requieren otra actuación.'}]},
      {type:'rule',title:'Dato antes que volumen',text:'Una campaña masiva con información defectuosa multiplica el error. La depuración del universo y la trazabilidad de resultados son parte de la calidad de la gestión.'},
      {type:'checkpoint',questionId:'q-control-03'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','informe-gestion-dian-2025']}
    ]
  }

  ,{
    id:'m9-l3', moduleId:'m9', order:3, title:'Interrupción y suspensión de la prescripción', subtitle:'El reloj de cobro no se analiza mirando solo dos fechas.', durationMinutes:15, skillIds:['prescripcion','cartera'], status:'published',
    blocks:[
      {type:'lead',text:'Después de aprender el término de prescripción, el siguiente nivel es reconocer los eventos que cambian su cómputo. En PJS esta diferencia suele ser decisiva.'},
      {type:'article',article:'Art. 818',title:'Interrupción y suspensión',text:'El Estatuto Tributario regula eventos que interrumpen el término de prescripción de la acción de cobro y supuestos de suspensión. Cuando el término se interrumpe, vuelve a contarse desde el momento definido por la norma.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'No son sinónimos',columns:['Figura','Efecto de estudio'],rows:[['Interrupción','El término que venía corriendo se corta y se reinicia bajo la regla legal.'],['Suspensión','El cómputo se detiene temporalmente durante el supuesto legal y luego continúa conforme a la norma.']]},
      {type:'trap',text:'No decidas prescripción con una resta simple entre fecha de vencimiento y fecha actual. Primero reconstruye todos los eventos jurídicamente relevantes.'},
      {type:'checkpoint',questionId:'q-presc-03'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m9-l4', moduleId:'m9', order:4, title:'Remisión de deudas: no es lo mismo que prescripción', subtitle:'Dos formas distintas de depurar cartera con presupuestos propios.', durationMinutes:12, skillIds:['remision','cartera'], status:'published',
    blocks:[
      {type:'article',article:'Art. 820',title:'Remisión de deudas tributarias',text:'El Estatuto Tributario contempla supuestos y competencias para suprimir de los registros obligaciones tributarias dentro de las condiciones legales establecidas.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'Prescripción vs. remisión',columns:['Figura','Pregunta central'],rows:[['Prescripción','¿Se extinguió la acción de cobro por el transcurso del término y los eventos que afectan su cómputo?'],['Remisión','¿Se cumplen los presupuestos legales y administrativos para depurar o suprimir una deuda dentro del régimen aplicable?']]},
      {type:'checkpoint',questionId:'q-remision-01'},
      {type:'sources',sourceIds:['estatuto-tributario','ley-1066-2006']}
    ]
  },
  {
    id:'m10-l2', moduleId:'m10', order:2, title:'Facilidades de pago: plazo, garantía y competencia', subtitle:'Una alternativa de normalización sometida a condiciones, no un derecho automático.', durationMinutes:15, skillIds:['facilidades-pago','cobro-persuasivo'], status:'published',
    blocks:[
      {type:'article',article:'Art. 814',title:'Facilidades para el pago',text:'La norma permite a las autoridades allí señaladas conceder facilidades hasta por cinco años para obligaciones administradas por la DIAN, intereses y sanciones, con las condiciones y garantías previstas.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Garantía y plazo',text:'La regulación distingue supuestos según plazo y cuantía. Como regla de estudio, nunca supongas que toda facilidad exige exactamente la misma garantía: revisa la condición específica aplicable.'},
      {type:'article',article:'Art. 814',title:'Garantías personales',text:'El artículo 814 permite aceptar garantías personales cuando la cuantía de la deuda no sea superior a 3.000 UVT. Para montos y plazos distintos debes verificar la garantía que corresponda al supuesto concreto.',sourceId:'estatuto-tributario'},
      {type:'definition',title:'No es condonación',text:'Una facilidad modifica la forma y plazo de pago bajo condiciones; no elimina por sí misma la obligación, intereses o sanciones que correspondan.'},
      {type:'checkpoint',questionId:'q-facilidad-02'},
      {type:'checkpoint',questionId:'q-facilidad-04'},
      {type:'sources',sourceIds:['estatuto-tributario','decreto-1625-2016']}
    ]
  },
  {
    id:'m10-l3', moduleId:'m10', order:3, title:'Incumplimiento de una facilidad', subtitle:'Cuando el acuerdo deja de ser la solución y reaparece la ejecución.', durationMinutes:12, skillIds:['facilidades-pago','cobro-coactivo'], status:'published',
    blocks:[
      {type:'article',article:'Art. 814-3',title:'Incumplimiento',text:'El Estatuto regula las consecuencias del incumplimiento de las facilidades, incluida la posibilidad de dejar sin efecto el acuerdo y hacer efectivas las garantías conforme a la norma.',sourceId:'estatuto-tributario'},
      {type:'steps',title:'Antes de decidir',items:['Verifica que exista una facilidad válida y vigente.','Identifica la obligación o cuota incumplida y sus condiciones.','Revisa competencia y acto procedente.','Determina efecto sobre garantías y proceso de cobro.','Registra la actuación y actualiza el estado de cuenta.']},
      {type:'rule',title:'Recurso especial',text:'Contra la providencia que deja sin efecto la facilidad procede reposición ante el mismo funcionario dentro de los cinco días siguientes a su notificación; el artículo 814-3 fija un mes para resolverlo desde su interposición en debida forma.'},
      {type:'checkpoint',questionId:'q-facilidad-03'},
      {type:'checkpoint',questionId:'q-facilidad-05'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m11-l3', moduleId:'m11', order:3, title:'Notificación del mandamiento y término de defensa', subtitle:'Diez días para comparecer no son quince días para excepciones.', durationMinutes:14, skillIds:['mandamiento-pago','notificaciones','excepciones-cobro'], status:'published',
    blocks:[
      {type:'article',article:'Art. 826',title:'Notificación del mandamiento',text:'La norma prevé citación al deudor para que comparezca a notificarse personalmente y regula la forma alternativa cuando no comparece dentro del término correspondiente.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 830',title:'Pagar o presentar excepciones',text:'Dentro de los quince días siguientes a la notificación del mandamiento, el deudor debe cancelar el monto o puede proponer por escrito las excepciones previstas.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'Dos relojes diferentes',columns:['Momento','Término que debes recordar'],rows:[['Citación para comparecer a notificación personal','10 días desde su introducción al correo, bajo la regla del artículo 826.'],['Pagar o proponer excepciones','15 días siguientes a la notificación del mandamiento, artículo 830.']]},
      {type:'checkpoint',questionId:'q-notif-mandamiento-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m11-l4', moduleId:'m11', order:4, title:'Ejecutoria: cuándo el título está listo para cobro', subtitle:'Un acto existente no siempre es un acto ejecutoriado.', durationMinutes:13, skillIds:['titulo-ejecutivo','firmeza-actos'], status:'published',
    blocks:[
      {type:'article',article:'Art. 829',title:'Ejecutoria de los actos',text:'Para efectos del cobro, el Estatuto Tributario establece cuándo se entienden ejecutoriados los actos administrativos que sirven de fundamento a la obligación.',sourceId:'estatuto-tributario'},
      {type:'trap',text:'Que un acto haya sido expedido no significa automáticamente que ya pueda cobrarse coactivamente. Revisa notificación, recursos y el supuesto de ejecutoria aplicable.'},
      {type:'example',title:'Pregunta de control',text:'Antes de preparar mandamiento de pago sobre una liquidación oficial, pregunta: ¿el acto quedó en firme y presta mérito ejecutivo bajo los artículos 828 y 829?'},
      {type:'checkpoint',questionId:'q-ejecutoria-01'},
      {type:'sources',sourceIds:['estatuto-tributario','cpaca']}
    ]
  },
  {
    id:'m12-l2', moduleId:'m12', order:2, title:'De las excepciones a la orden de ejecución', subtitle:'Qué ocurre cuando la defensa no prospera.', durationMinutes:14, skillIds:['excepciones-cobro','orden-ejecucion'], status:'published',
    blocks:[
      {type:'article',article:'Art. 836',title:'Orden de ejecución',text:'Cuando vencido el término no se proponen excepciones o estas son decididas desfavorablemente, el funcionario ordena seguir adelante la ejecución y dispone las actuaciones de ejecución correspondientes.',sourceId:'estatuto-tributario'},
      {type:'process',title:'Secuencia después del mandamiento',nodes:[{id:'e1',label:'Notificación',hint:'Empieza el término del artículo 830.'},{id:'e2',label:'Pago o excepciones',hint:'El deudor puede pagar o defenderse.'},{id:'e3',label:'Resolver excepciones',hint:'Si fueron presentadas, deben decidirse.'},{id:'e4',label:'Seguir ejecución',hint:'Cuando jurídicamente corresponde.'},{id:'e5',label:'Avalúo / remate / aplicación',hint:'Según bienes y etapa.'}]},
      {type:'checkpoint',questionId:'q-ejecucion-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m12-l3', moduleId:'m12', order:3, title:'Recursos y control judicial dentro del cobro', subtitle:'El procedimiento coactivo tiene un régimen especial de impugnación.', durationMinutes:13, skillIds:['recursos-cobro','excepciones-cobro'], status:'published',
    blocks:[
      {type:'article',article:'Arts. 833-1 y 834',title:'Recursos en cobro',text:'Como regla, las actuaciones del procedimiento de cobro son de trámite y no tienen recurso, salvo los casos expresamente previstos. Si la resolución rechaza excepciones y ordena seguir la ejecución, procede únicamente reposición dentro del mes siguiente a su notificación.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 832',title:'Decisión de excepciones',text:'El funcionario competente decide las excepciones dentro del mes siguiente a la presentación del escrito, practicando previamente las pruebas cuando sea del caso.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 835',title:'Intervención de la jurisdicción',text:'La demanda contra la resolución que falla excepciones y ordena seguir la ejecución no suspende por sí sola el proceso de cobro; sin embargo, el remate no puede realizarse hasta que exista pronunciamiento definitivo de la jurisdicción.',sourceId:'estatuto-tributario'},
      {type:'tip',text:'Este es un punto clásico para distractores: una opción puede citar un recurso real del CPACA, pero si el Estatuto tiene una regla especial para el acto concreto, esa regla especial guía la respuesta.'},
      {type:'checkpoint',questionId:'q-recurso-cobro-01'},
      {type:'checkpoint',questionId:'q-excepciones-decision-01'},
      {type:'checkpoint',questionId:'q-recurso-excepciones-02'},
      {type:'checkpoint',questionId:'q-contencioso-cobro-01'},
      {type:'checkpoint',questionId:'q-revocatoria-cobro-01'},
      {type:'sources',sourceIds:['estatuto-tributario','cpaca']}
    ]
  },
  {
    id:'m13-l2', moduleId:'m13', order:2, title:'Inembargabilidad y proporcionalidad práctica', subtitle:'Asegurar la deuda no significa inmovilizar sin límites.', durationMinutes:14, skillIds:['medidas-cautelares','inembargabilidad'], status:'published',
    blocks:[
      {type:'article',article:'Art. 837-1',title:'Límites especiales',text:'El Estatuto establece reglas de inembargabilidad para determinados recursos y supuestos, incluidas cuentas de ahorro de personas naturales y bienes protegidos por las condiciones previstas en la norma.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Identifica al sujeto y el bien',text:'Antes de aplicar un límite debes saber si el deudor es persona natural o jurídica, cuál es el tipo de cuenta o bien y qué regla especial está vigente.'},
      {type:'trap',text:'No memorices una cifra aislada sin su unidad y supuesto. Algunos valores legales pueden estar reexpresados en UVT mediante reglamentación vigente.'},
      {type:'checkpoint',questionId:'q-inembargabilidad-01'},
      {type:'sources',sourceIds:['estatuto-tributario','decreto-1625-2016']}
    ]
  },
  {
    id:'m13-l3', moduleId:'m13', order:3, title:'Medida cautelar, avalúo y realización del bien', subtitle:'Embargar no es el final del procedimiento.', durationMinutes:13, skillIds:['medidas-cautelares','orden-ejecucion'], status:'published',
    blocks:[
      {type:'process',title:'Ciclo sobre el bien',nodes:[{id:'b1',label:'Identificar propiedad',hint:'Debe existir fundamento para asociar el bien al deudor.'},{id:'b2',label:'Decretar medida',hint:'Dentro de competencia y oportunidad legal.'},{id:'b3',label:'Registrar / practicar',hint:'Según la naturaleza del bien.'},{id:'b4',label:'Avalorar',hint:'Cuando el proceso llega a esa etapa.'},{id:'b5',label:'Realizar / aplicar',hint:'Con las reglas de ejecución y prelación que correspondan.'}]},
      {type:'rule',title:'La medida es instrumental',text:'Su propósito es asegurar el resultado del cobro. Debe ajustarse cuando desaparece su fundamento, la obligación se extingue o una decisión ordena su levantamiento.'},
      {type:'checkpoint',questionId:'q-medida-03'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m14-l3', moduleId:'m14', order:3, title:'Reconocimiento y graduación de la acreencia fiscal', subtitle:'En insolvencia, la DIAN debe actuar oportunamente como acreedor.', durationMinutes:15, skillIds:['procesos-concursales','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'La función del Gestor II incluye representar a la DIAN en procesos especiales y/o concursales. La habilidad práctica consiste en lograr que la acreencia fiscal esté correctamente soportada, reconocida y tratada dentro del concurso.'},
      {type:'steps',title:'Trabajo mínimo sobre la acreencia',items:['Identificar obligaciones y corte relevante.','Conciliar capital, intereses y demás conceptos según corresponda.','Verificar títulos y soportes.','Presentar u observar el crédito dentro de la oportunidad del proceso.','Revisar reconocimiento, clasificación y graduación.','Gestionar objeciones o actuaciones necesarias dentro de la competencia.']},
      {type:'rule',title:'El concurso cambia el escenario',text:'La admisión a reorganización o liquidación produce efectos jurídicos que deben respetarse. La respuesta correcta no suele ser continuar el cobro individual como si el proceso concursal no existiera.'},
      {type:'checkpoint',questionId:'q-concursal-03'},
      {type:'checkpoint',questionId:'q-concursal-04'},
      {type:'sources',sourceIds:['ley-1116-2006','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m15-l2', moduleId:'m15', order:2, title:'Compensación de oficio y cruce previo de deudas', subtitle:'Un saldo a favor puede encontrarse con una deuda antes de convertirse en devolución.', durationMinutes:13, skillIds:['compensacion','devoluciones'], status:'published',
    blocks:[
      {type:'article',article:'Art. 815-2',title:'Compensación de oficio',text:'El Estatuto Tributario contempla la compensación de oficio en los eventos y bajo las reglas allí previstas.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 861',title:'Compensación previa a la devolución',text:'En las devoluciones, las deudas y obligaciones de plazo vencido a cargo del beneficiario deben ser compensadas previamente conforme a la norma.',sourceId:'estatuto-tributario'},
      {type:'example',title:'Idea de examen',text:'Si existe un saldo a favor procedente y simultáneamente una obligación vencida susceptible de compensación, no asumas que la totalidad del saldo debe girarse directamente al solicitante.'},
      {type:'checkpoint',questionId:'q-comp-oficio-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m16-l2', moduleId:'m16', order:2, title:'Verificación de la devolución', subtitle:'Comprobar que el saldo existe y cumple los requisitos antes de ordenar el giro.', durationMinutes:15, skillIds:['devoluciones','verificacion'], status:'published',
    blocks:[
      {type:'article',article:'Art. 856',title:'Verificación',text:'La administración selecciona solicitudes que deben ser objeto de verificación dentro del término para devolver y constata la existencia de retenciones, impuestos descontables o pagos en exceso que originan el saldo.',sourceId:'estatuto-tributario'},
      {type:'steps',title:'Preguntas de verificación',items:['¿La solicitud fue presentada por quien corresponde?','¿El saldo existe en la declaración y no fue utilizado previamente?','¿Las retenciones, pagos o impuestos descontables tienen soporte y existencia?','¿Hay deudas que deban compensarse?','¿Existe un indicio que active investigación previa?']},
      {type:'checkpoint',questionId:'q-verif-dev-01'},
      {type:'sources',sourceIds:['estatuto-tributario','decreto-1625-2016','res-227-2025']}
    ]
  },
  {
    id:'m16-l3', moduleId:'m16', order:3, title:'Rechazo, inadmisión e investigación previa', subtitle:'Tres respuestas distintas para problemas distintos de la solicitud.', durationMinutes:16, skillIds:['devoluciones','investigacion-previa'], status:'published',
    blocks:[
      {type:'article',article:'Art. 857',title:'Rechazo e inadmisión',text:'El Estatuto distingue causales de rechazo definitivo y causales de inadmisión de solicitudes de devolución o compensación.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 857-1',title:'Investigación previa',text:'En determinados supuestos, el término para devolver o compensar puede suspenderse hasta por el máximo legal para adelantar investigación sobre la procedencia del saldo.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'No confundas respuestas',columns:['Figura','Qué resuelve'],rows:[['Inadmisión','Problemas subsanables o requisitos en los supuestos legales; permite presentar una nueva solicitud subsanada dentro del mes siguiente.'],['Rechazo','Causal legal que impide definitivamente esa solicitud en el supuesto concreto.'],['Investigación previa','Duda o indicio legalmente relevante que exige verificación adicional y puede suspender el término hasta por 90 días.']]},
      {type:'article',article:'Art. 858',title:'Auto inadmisorio',text:'Como regla general, el auto inadmisorio debe dictarse dentro de un término máximo de quince días. En solicitudes con garantía se aplica la regla especial prevista por el mismo artículo.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-dev-rechazo-01'},
      {type:'checkpoint',questionId:'q-dev-investiga-01'},
      {type:'checkpoint',questionId:'q-dev-inadmite-02'},
      {type:'checkpoint',questionId:'q-dev-auto-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m16-l4', moduleId:'m16', order:4, title:'Servicio informático de devoluciones y compensaciones', subtitle:'El procedimiento también depende de información estructurada y controles digitales.', durationMinutes:11, skillIds:['devoluciones','sistemas-informacion'], status:'published',
    blocks:[
      {type:'lead',text:'La regulación compilada por la DIAN contempla el Servicio Informático Electrónico de Devoluciones y Compensaciones para gestionar presentación, radicación, estudio, decisión y control de solicitudes dentro de su ámbito.'},
      {type:'rule',title:'La tecnología no reemplaza el análisis',text:'Que el sistema valide un formato o permita radicar no significa que la solicitud sea sustancialmente procedente. Los controles jurídicos, contables y documentales siguen siendo necesarios.'},
      {type:'example',title:'Conexión con tu perfil',text:'CT-CR-3007 incluye tanto devoluciones como gestión de sistemas de información corporativos del subproceso. Esta intersección entre norma y dato es una parte distintiva del empleo.'},
      {type:'checkpoint',questionId:'q-sie-dev-01'},
      {type:'sources',sourceIds:['res-227-2025','decreto-1625-2016','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m16-l5', moduleId:'m16', order:5, title:'Devolución con garantía y compensación previa', subtitle:'Dos reglas que cambian el resultado práctico de una solicitud procedente.', durationMinutes:13, skillIds:['devoluciones','garantia','compensacion'], status:'published',
    blocks:[
      {type:'article',article:'Art. 860',title:'Devolución con presentación de garantía',text:'Cuando la solicitud cumple el supuesto legal y se acompaña de garantía a favor de la Nación otorgada por entidad bancaria o compañía de seguros por el valor exigido, el artículo 860 contempla un término especial de veinte días, sin perjuicio de controles y reglas especiales de riesgo.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'La garantía no elimina el control',text:'Una devolución con garantía acelera el trámite en el supuesto legal, pero no transforma un saldo improcedente en procedente ni impide las actuaciones posteriores que autorice la ley.'},
      {type:'article',article:'Art. 861',title:'Compensación previa a la devolución',text:'Antes de efectuar la devolución deben compensarse las deudas y obligaciones de plazo vencido del contribuyente o responsable. La compensación se ordena en el mismo acto que dispone la devolución.',sourceId:'estatuto-tributario'},
      {type:'process',title:'Secuencia conceptual',nodes:[{id:'g1',label:'Solicitud procedente',hint:'Existe saldo y se cumplen requisitos.'},{id:'g2',label:'Revisar deudas vencidas',hint:'Estado de cuenta y obligaciones a cargo.'},{id:'g3',label:'Compensar',hint:'Aplicar el saldo contra las deudas cuando corresponda.'},{id:'g4',label:'Devolver remanente',hint:'Disponer el valor resultante por el mecanismo aplicable.'}]},
      {type:'checkpoint',questionId:'q-dev-garantia-01'},
      {type:'checkpoint',questionId:'q-dev-comp-previa-01'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m17-l2', moduleId:'m17', order:2, title:'Control de acceso: mínimo privilegio y trazabilidad', subtitle:'Dar acceso correcto es parte de proteger la información fiscal.', durationMinutes:13, skillIds:['seguridad-informacion','sistemas-informacion'], status:'published',
    blocks:[
      {type:'rule',title:'Acceso según necesidad',text:'Los permisos a sistemas deben corresponder al rol, responsabilidad y autorización institucional. Otorgar privilegios excesivos aumenta el riesgo sobre confidencialidad, integridad y trazabilidad.'},
      {type:'comparison',title:'Tres propiedades que debes reconocer',columns:['Propiedad','Pregunta práctica'],rows:[['Confidencialidad','¿Solo acceden quienes están autorizados?'],['Integridad','¿La información permanece correcta y los cambios son controlados?'],['Disponibilidad','¿La información y los servicios están accesibles cuando se requieren de forma autorizada?']]},
      {type:'trap',text:'Compartir credenciales puede parecer una solución rápida, pero rompe identificación individual, autenticación y trazabilidad.'},
      {type:'checkpoint',questionId:'q-acceso-03'},
      {type:'sources',sourceIds:['modelo-seguridad-dian','manual-seguridad-dian','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m18-l2', moduleId:'m18', order:2, title:'Las seis competencias básicas como conductas observables', subtitle:'Qué se espera de cualquier servidor DIAN antes de mirar el nivel específico.', durationMinutes:14, skillIds:['comportamentales-basicas'], status:'published',
    blocks:[
      {type:'comparison',title:'Competencia básica y señal observable',columns:['Competencia','Conducta de referencia'],rows:[['Adaptabilidad','Integra nuevas perspectivas, aprendizajes y tecnologías.'],['Comportamiento ético','Actúa conforme al código de integridad y reconoce el impacto de su actuación.'],['Comunicación efectiva','Escucha, comunica con claridad y verifica comprensión.'],['Orientación al logro','Organiza su trabajo y cumple objetivos con calidad.'],['Orientación al usuario','Entiende necesidades y ofrece respuesta dentro de políticas y competencia.'],['Trabajo en equipo','Cumple acuerdos y colabora coordinadamente.']]},
      {type:'tip',text:'La prueba comportamental no se estudia como un cuestionario de definiciones. Usa estas conductas para reconocer patrones y responder de forma coherente a escenarios.'},
      {type:'checkpoint',questionId:'q-basic-beh-03'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m19-l2', moduleId:'m19', order:2, title:'Qué significa nivel 3 en Adaptabilidad, Comunicación y Trabajo en equipo', subtitle:'El nivel exigido no es una cifra decorativa.', durationMinutes:15, skillIds:['competencias-comportamentales'], status:'published',
    blocks:[
      {type:'definition',title:'Adaptabilidad · nivel 3',text:'El diccionario la orienta a anticiparse a cambios y ajustar el propio accionar, identificando repercusiones y adoptando nuevas metodologías y herramientas.'},
      {type:'definition',title:'Comunicación efectiva · nivel 3',text:'Implica seleccionar métodos adecuados para lograr comunicación efectiva, consolidar redes de contacto y considerar el impacto en los interlocutores.'},
      {type:'definition',title:'Trabajo en equipo · nivel 3',text:'Supone un grado de participación y articulación superior al cumplimiento básico de acuerdos; el servidor contribuye activamente a la coordinación y resultados del equipo según las conductas del diccionario.'},
      {type:'rule',title:'No respondas como “jefe” si el caso no lo exige',text:'Nivel 3 es avanzado, pero no convierte automáticamente el empleo en gerencial. Mantén la conducta dentro del rol y grado de responsabilidad del Gestor II.'},
      {type:'checkpoint',questionId:'q-nivel3-01'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m20-l2', moduleId:'m20', order:2, title:'Integridad bajo presión', subtitle:'La opción ética debe seguir siendo viable dentro de la norma y del rol.', durationMinutes:12, skillIds:['integridad'], status:'published',
    blocks:[
      {type:'example',title:'Presión por resultados',text:'Una meta de recaudo no justifica alterar un saldo, omitir una etapa o comunicar información reservada. Diligencia y compromiso se ejercen dentro de legalidad e integridad.'},
      {type:'example',title:'Presión de un conocido',text:'La cordialidad no permite adelantar un expediente por amistad. Respeto y servicio deben coexistir con justicia e imparcialidad.'},
      {type:'example',title:'Error propio',text:'Ocultar un error para proteger la imagen personal contradice honestidad. La respuesta madura identifica, reporta y corrige por el canal correspondiente.'},
      {type:'checkpoint',questionId:'q-integridad-02'},
      {type:'sources',sourceIds:['codigo-integridad','res-65-2024']}
    ]
  },
  {
    id:'m21-l2', moduleId:'m21', order:2, title:'Gestiona el tiempo sin sacrificar la secuencia jurídica', subtitle:'Una técnica de tres rondas para simulacros.', durationMinutes:10, skillIds:['tecnica-pjs'], status:'published',
    blocks:[
      {type:'steps',title:'Tres rondas de práctica',items:['Ronda 1 · Seguras: responde las preguntas cuyo supuesto y regla reconoces con claridad.','Ronda 2 · Analíticas: vuelve a casos que exigen reconstruir cronología o comparar dos opciones plausibles.','Ronda 3 · Críticas: revisa las más dudosas y verifica que no hayas ignorado una palabra que cambie competencia, fecha o etapa.']},
      {type:'tip',title:'Marca la palabra que cambia el caso',text:'“Ejecutoriado”, “notificado”, “vencido”, “persona natural”, “saldo ya imputado” o “admitido a reorganización” pueden cambiar por completo la actuación procedente.'},
      {type:'checkpoint',questionId:'q-pjs-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','estatuto-tributario']}
    ]
  },
  {
    id:'m22-l1', moduleId:'m22', order:1, title:'Práctica adaptativa: estudiar donde más lo necesitas', subtitle:'Umbral usa tus intentos para priorizar errores, habilidades débiles y contenido aún no practicado.', durationMinutes:9, skillIds:['metacognicion','tecnica-pjs'], status:'published',
    blocks:[
      {type:'lead',text:'Repetir siempre lo que ya sabes produce una sensación agradable de avance, pero no necesariamente mejora el resultado. La práctica adaptativa de Umbral intenta hacer lo contrario: mostrarte primero aquello que tiene mayor valor de repaso.'},
      {type:'objective',items:['Entender cómo Umbral selecciona preguntas recomendadas.','Usar los errores como información y no como una nota definitiva.','Separar práctica de aprendizaje y simulacro de evaluación.']},
      {type:'comparison',title:'Qué prioriza una sesión recomendada',columns:['Señal','Cómo se usa'],rows:[['Última respuesta incorrecta','Aumenta la prioridad de esa pregunta.'],['Baja precisión de una habilidad','Da más peso a preguntas que entrenan esa habilidad.'],['Pregunta nunca respondida','Introduce cobertura nueva para evitar estudiar siempre el mismo subconjunto.'],['Respuesta correcta reciente','Reduce temporalmente la prioridad para espaciar el repaso.'],['Núcleo CT-CR-3007','Puede recibir un pequeño refuerzo por su relación directa con las funciones del empleo.']]},
      {type:'rule',title:'La recomendación no sustituye tu criterio',text:'Si estás estudiando un módulo concreto, usa también los filtros por tema. La sesión adaptativa es útil para repaso transversal y para detectar patrones de error.'},
      {type:'steps',title:'Ciclo recomendado',items:['Lee primero la lección del tema.','Resuelve una sesión recomendada sin consultar la norma.','Revisa por qué fallaste: concepto, término, etapa, competencia o lectura.','Vuelve a la fuente oficial solo después de intentar resolver el caso.','Repite la habilidad en otra sesión para comprobar retención.']},
      {type:'tip',title:'No persigas una racha artificial',text:'Una pregunta repetida inmediatamente puede pasar de incorrecta a correcta por memoria de corto plazo. Umbral da más valor a que una habilidad se sostenga en intentos posteriores.'},
      {type:'sequence-exercise',title:'Convierte un error en aprendizaje',text:'Ordena un ciclo de repaso que prioriza recuperación y comprensión.',items:[{id:'c',label:'Clasificar por qué fallaste y volver a la explicación o fuente.'},{id:'a',label:'Intentar resolver sin consultar la respuesta.'},{id:'d',label:'Reintentar la habilidad en otra sesión, con separación temporal.'},{id:'b',label:'Comprobar respuesta y explicación.'}],correctOrder:['a','b','c','d'],explanation:'El aprendizaje mejora cuando primero intentas recuperar, después corriges y finalmente compruebas la retención en otro momento.'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','learning-science-dunlosky-2013']}
    ]
  },
  {
    id:'m23-l1', moduleId:'m23', order:1, title:'Cómo usar un simulacro para mejorar', subtitle:'La nota importa menos que el patrón de errores que deja.', durationMinutes:8, skillIds:['tecnica-pjs','metacognicion'], status:'published',
    blocks:[
      {type:'lead',text:'El simulacro rápido de Umbral usa preguntas de estudio y oculta la retroalimentación hasta finalizar. La GOA DIAN 2676 fue publicada el 8 de octubre de 2026, pero un ejercicio privado no equivale a la prueba oficial ni permite predecir la calificación CNSC.'},
      {type:'steps',title:'Después de cada intento',items:['Revisa primero los errores, no el puntaje.','Clasifica cada fallo: norma, concepto, lectura, etapa o distracción.','Vuelve a la lección vinculada cuando el error sea conceptual.','Repite la habilidad otro día para comprobar retención.','Solo cuando la precisión sea estable, trabaja velocidad.']},
      {type:'rule',title:'Interpretación responsable',text:'Un 90/100 en un banco corto no predice automáticamente el resultado oficial. Úsalo como señal interna de dominio y para identificar debilidades.'},
      {type:'sequence-exercise',title:'Qué hacer después del simulacro',text:'Ordena el uso pedagógico del resultado.',items:[{id:'c',label:'Volver a la lección o fuente cuando el error sea conceptual.'},{id:'a',label:'Revisar errores y preguntas dudosas antes que celebrar el puntaje.'},{id:'d',label:'Comprobar la misma habilidad en una sesión posterior.'},{id:'b',label:'Clasificar el patrón: concepto, etapa, competencia, lectura o distractor.'}],correctOrder:['a','b','c','d'],explanation:'El puntaje sirve como señal; la mejora viene de diagnosticar el patrón, corregirlo y verificar después que el aprendizaje se mantiene.'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','cnsc-2676-especificaciones-pruebas','learning-science-dunlosky-2013']}
    ]
  }

  ,{
    id:'m7-l4', moduleId:'m7', order:4, title:'Auditoría a EAR: evidencia antes de concluir', subtitle:'La auditoría institucional empieza en la información y termina en un informe de cierre.', durationMinutes:14, skillIds:['ear','auditoria-ear'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento PR-COT-0032 convierte la auditoría a Entidades Autorizadas para Recaudar en una secuencia verificable. Para estudiar bien este tema, piensa en evidencia, trazabilidad y cierre, no solamente en sanciones.'},
      {type:'process',title:'Secuencia de estudio de una auditoría',nodes:[{id:'a1',label:'Solicitar información',hint:'Archivos y soportes requeridos a la EAR.'},{id:'a2',label:'Verificar',hint:'Contrastar cumplimiento, oportunidad y consistencia.'},{id:'a3',label:'Documentar hallazgos',hint:'El hallazgo necesita soporte verificable.'},{id:'a4',label:'Gestionar actuaciones',hint:'Según competencia y procedimiento aplicable.'},{id:'a5',label:'Informe de cierre',hint:'Consolidar resultado y trazabilidad de la auditoría.'}]},
      {type:'rule',title:'Una auditoría puede surgir fuera del programa anual',text:'El procedimiento institucional prevé que las jefaturas competentes autoricen auditorías no contempladas en el programa anual cuando sean necesarias para resolver situaciones que afecten el normal cumplimiento de las obligaciones de las EAR, dejando la debida documentación.'},
      {type:'trap',text:'Detectar una inconsistencia no equivale automáticamente a imponer una sanción. Primero determina el hecho, la evidencia, la norma aplicable, la competencia y el trámite.'},
      {type:'checkpoint',questionId:'q-ear-audit-01'},
      {type:'checkpoint',questionId:'q-ear-audit-02'},
      {type:'sources',sourceIds:['proc-auditoria-ear-0032','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m7-l5', moduleId:'m7', order:5, title:'Información transmitida por EAR: oportunidad, consistencia y registro', subtitle:'El recaudo no termina cuando se recibe dinero: la información también debe llegar correctamente.', durationMinutes:13, skillIds:['ear','recaudo','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento PR-COT-0031 muestra que las EAR transmiten información que debe ser recibida, verificada y registrada por la DIAN. Esto conecta el recaudo con calidad de datos, oportunidad y conciliación.'},
      {type:'definition',title:'Dos flujos inseparables',text:'En el recaudo existe un flujo financiero y un flujo de información. Un valor puede haberse recibido, pero una transmisión tardía o inconsistente puede afectar la correcta aplicación y control.'},
      {type:'comparison',title:'Qué revisar',columns:['Dimensión','Pregunta práctica'],rows:[['Oportunidad','¿La información se transmitió dentro del momento y medio definido?'],['Integridad','¿Llegaron los archivos y registros esperados?'],['Consistencia','¿Los datos coinciden con documentos y registros relacionados?'],['Trazabilidad','¿Puede reconstruirse qué fue recibido, procesado y registrado?']]},
      {type:'rule',title:'Los errores tienen categorías distintas',text:'El Estatuto Tributario diferencia errores de verificación, inconsistencias en la información remitida y extemporaneidad. Identificar correctamente la conducta es previo a seleccionar la consecuencia jurídica.'},
      {type:'checkpoint',questionId:'q-ear-info-01'},
      {type:'checkpoint',questionId:'q-ear-info-02'},
      {type:'sources',sourceIds:['proc-recepcion-ear-0031','proc-sanciones-ear-0030','estatuto-tributario']}
    ]
  },
  {
    id:'m8-l3', moduleId:'m8', order:3, title:'Condiciones de una acción de control extensivo bien diseñada', subtitle:'Objetividad, confiabilidad y cercanía evitan convertir una campaña masiva en una decisión automática.', durationMinutes:15, skillIds:['control-extensivo','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento PR-COT-0382 establece condiciones generales para las acciones de control extensivo. Son especialmente útiles para PJS porque permiten distinguir una campaña técnicamente válida de una acción masiva improvisada.'},
      {type:'comparison',title:'Seis criterios institucionales',columns:['Criterio','Cómo se traduce en una decisión'],rows:[['Objetividad','Decidir con datos y hechos verificables, sin intereses particulares.'],['Imparcialidad','Evitar selecciones sesgadas que favorezcan o perjudiquen sin criterio válido.'],['Confiabilidad','Verificar y depurar la información usada para seleccionar casos.'],['Confidencialidad','Mantener la reserva de los casos y de la información sometida a control.'],['Cercanía con el ciudadano','Orientar el cumplimiento de forma práctica, oportuna y amable.'],['Integralidad','Considerar de forma completa la situación de obligaciones formales y sustanciales.']]},
      {type:'rule',title:'Primero calidad del insumo',text:'Si la base utilizada para seleccionar contribuyentes tiene inconsistencias relevantes, la respuesta correcta no es enviar comunicaciones masivas de inmediato: debe verificarse o depurarse el insumo conforme al procedimiento.'},
      {type:'checkpoint',questionId:'q-control-criterios-01'},
      {type:'checkpoint',questionId:'q-control-criterios-02'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382','decreto-1742-2020','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m8-l4', moduleId:'m8', order:4, title:'Ciclo de una campaña de control extensivo', subtitle:'Recibir el insumo, ejecutar, medir y reportar resultados.', durationMinutes:14, skillIds:['control-extensivo','trazabilidad'], status:'published',
    blocks:[
      {type:'process',title:'Ciclo operativo conceptual',nodes:[{id:'c1',label:'Recibir insumo',hint:'Acción aprobada, campaña o requerimiento de dependencia.'},{id:'c2',label:'Validar información',hint:'Calidad y confiabilidad de la selección.'},{id:'c3',label:'Ejecutar acción',hint:'Gestión inmediata y de amplia cobertura.'},{id:'c4',label:'Registrar resultado',hint:'Cumplimiento, respuesta, novedad o escalamiento.'},{id:'c5',label:'Informar',hint:'Cerrar con informe de resultados según el ejecutor.'}]},
      {type:'definition',title:'El objetivo no es “contactar por contactar”',text:'El procedimiento busca determinar y promover el cumplimiento voluntario y oportuno de obligaciones formales y sustanciales. La interacción debe producir información útil para seguimiento y decisiones posteriores.'},
      {type:'trap',text:'No confundas control extensivo con fiscalización intensiva ni con cobro coactivo. Una acción masiva puede conducir a otros procedimientos, pero no reemplaza las etapas y competencias propias de ellos.'},
      {type:'checkpoint',questionId:'q-control-ciclo-01'},
      {type:'checkpoint',questionId:'q-control-ciclo-02'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382','decreto-1742-2020']}
    ]
  }

  ,{
    id:'m13-l4', moduleId:'m13', order:4, title:'Límites, registro y concurrencia de embargos', subtitle:'Una medida eficaz también debe respetar cuantía, titular y prelación.', durationMinutes:16, skillIds:['medidas-cautelares','inembargabilidad','concurrencia-embargos'], status:'published',
    blocks:[
      {type:'article',article:'Art. 837',title:'Oportunidad de las medidas preventivas',text:'El funcionario competente puede decretar embargo y secuestro preventivo de bienes del deudor, acreditados como de su propiedad, de manera previa o simultánea con el mandamiento de pago.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 838',title:'Límite del embargo',text:'El valor de los bienes embargados no puede exceder el doble de la deuda más sus intereses. Si el avalúo supera ese límite y es posible reducir la medida, debe ajustarse de oficio o a solicitud del interesado.',sourceId:'estatuto-tributario'},
      {type:'comparison',title:'Tres controles diferentes',columns:['Control','Pregunta'],rows:[['Titularidad','¿El bien está establecido como propiedad del deudor?'],['Inembargabilidad','¿Existe una protección o límite aplicable al tipo de bien y deudor?'],['Cuantía','¿La extensión de la medida respeta el límite legal frente a deuda e intereses?']]},
      {type:'rule',title:'Embargo anterior no significa “fin del caso”',text:'Cuando ya existe otro embargo registrado, las reglas de prelación del crédito determinan la actuación. Según el grado del crédito anterior, la administración puede continuar informando al juez o hacerse parte para proteger el remanente que garantice la acreencia fiscal.'},
      {type:'article',article:'Art. 839-2',title:'Regla supletoria',text:'En los aspectos compatibles y no regulados por el Estatuto Tributario para embargo, secuestro y remate, se aplican las disposiciones procesales generales correspondientes.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-medida-04'},
      {type:'checkpoint',questionId:'q-medida-05'},
      {type:'checkpoint',questionId:'q-medida-06'},
      {type:'checkpoint',questionId:'q-medida-07'},
      {type:'checkpoint',questionId:'q-medida-08'},
      {type:'sources',sourceIds:['estatuto-tributario','ley-1066-2006']}
    ]
  }

  ,{
    id:'m14-l4', moduleId:'m14', order:4, title:'Procesos de sucesión: intervenir antes de la partición', subtitle:'La acreencia fiscal también debe protegerse cuando el deudor fallece.', durationMinutes:14, skillIds:['procesos-especiales','sucesiones'], status:'published',
    blocks:[
      {type:'article',article:'Art. 844 E.T.',title:'Aviso en sucesiones',text:'Cuando la cuantía de los bienes de la sucesión supera 700 UVT, el funcionario que adelanta el trámite debe informar a la administración tributaria antes de la partición, indicando el causante y el avalúo o valor de los bienes.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Ventana de intervención',text:'Si la administración no se hace parte dentro de los veinte días siguientes a la comunicación, el funcionario que tramita la sucesión puede continuar con el procedimiento.'},
      {type:'definition',title:'Acuerdo de pago en la sucesión',text:'Herederos, asignatarios o legatarios pueden solicitar acuerdo de pago por las deudas fiscales de la sucesión dentro de las condiciones legales.'},
      {type:'process',title:'Secuencia conceptual',nodes:[{id:'s1',label:'Sucesión con bienes > 700 UVT'},{id:'s2',label:'Comunicación previa a la partición'},{id:'s3',label:'Verificar deudas fiscales'},{id:'s4',label:'Intervenir dentro de la oportunidad'},{id:'s5',label:'Proteger acreencia / gestionar acuerdo si procede'}]},
      {type:'checkpoint',questionId:'q-especial-sucesion-01'},
      {type:'checkpoint',questionId:'q-especial-sucesion-02'},
      {type:'checkpoint',questionId:'q-especial-sucesion-03'},
      {type:'sources',sourceIds:['estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m14-l5', moduleId:'m14', order:5, title:'Intervención en otros procesos y liquidación de sociedades', subtitle:'Hacerse parte a tiempo puede ser decisivo para recuperar el crédito fiscal.', durationMinutes:16, skillIds:['procesos-especiales','liquidacion-sociedades'], status:'published',
    blocks:[
      {type:'article',article:'Art. 846 E.T.',title:'Otros procesos',text:'En procesos concursales, de intervención y de liquidación judicial o administrativa, el juez o funcionario debe informar a la oficina de cobranzas dentro del término legal para que la administración se haga parte y haga valer las deudas fiscales vencidas y las que surjan hasta la liquidación o terminación.',sourceId:'estatuto-tributario'},
      {type:'article',article:'Art. 847 E.T.',title:'Liquidación de sociedades',text:'Cuando se configure una causal de disolución distinta de los supuestos concursales señalados en la norma, el representante legal debe avisar oportunamente a la oficina de cobranzas. Los liquidadores deben procurar el pago de las deudas respetando la prelación de los créditos fiscales.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'La prelación importa',text:'En escenarios colectivos o liquidatorios, proteger el crédito fiscal no significa ignorar a los demás acreedores. La actuación debe respetar la prelación legal y las reglas del proceso en el que se interviene.'},
      {type:'article',article:'Art. 848 E.T.',title:'Acreditación del funcionario',text:'Para la intervención en los procesos especiales señalados por el Estatuto, el funcionario de cobranzas acredita su personería mediante el auto comisorio expedido por el superior respectivo.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-especial-otros-01'},
      {type:'checkpoint',questionId:'q-especial-liquidacion-01'},
      {type:'checkpoint',questionId:'q-especial-personeria-01'},
      {type:'sources',sourceIds:['estatuto-tributario','ley-1116-2006','merf-ct-cr-3007']}
    ]
  }

  ,{
    id:'m6-l5', moduleId:'m6', order:5, title:'Corrección de inconsistencias: arreglar el dato sin borrar la historia', subtitle:'La función del empleo exige que declaraciones, pagos y estado de cuenta reflejen la realidad.', durationMinutes:16, skillIds:['calidad-datos','estado-cuenta','correccion-inconsistencias'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento PR-COT-0033 existe para corregir datos inconsistentes de declaraciones y recibos de pago registrados en los sistemas de información. Su finalidad no es “maquillar” una cuenta: es lograr un registro veraz del recaudo, de las obligaciones, de los pagos y del estado de cuenta.'},
      {type:'process',title:'Ruta mental antes de corregir',nodes:[{id:'c1',label:'Detectar inconsistencia'},{id:'c2',label:'Identificar documento y soporte'},{id:'c3',label:'Verificar qué dato está errado'},{id:'c4',label:'Aplicar corrección por el procedimiento competente'},{id:'c5',label:'Conservar soporte y trazabilidad'},{id:'c6',label:'Confirmar efecto en estado de cuenta'}]},
      {type:'account-simulator',title:'Laboratorio · depurar el estado de cuenta',text:'Compara lo registrado con la evidencia y decide si estás frente a una deuda real o a una inconsistencia que debe corregirse.'},
      {type:'rule',title:'La corrección debe poder auditarse',text:'El procedimiento exige conservar soportes de las modificaciones y controles periódicos. Por eso una respuesta PJS que propone “editar directamente el saldo” sin evidencia, autorización o rastro documental debe generar desconfianza.'},
      {type:'trap',title:'Corregir no es crear una nueva obligación',text:'Primero determina si hay un error de información o una verdadera obligación pendiente. La función de depuración del estado de cuenta exige separar ambos problemas.'},
      {type:'checkpoint',questionId:'q-correccion-01'},
      {type:'checkpoint',questionId:'q-correccion-02'},
      {type:'sources',sourceIds:['proc-correccion-inconsistencias-0033','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m8-l5', moduleId:'m8', order:5, title:'Control de Grandes Contribuyentes, autorretenedores y agentes de retención de IVA', subtitle:'Cruzar información para detectar incumplimientos antes de decidir qué actuación corresponde.', durationMinutes:17, skillIds:['control-extensivo','control-especiales','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'El MERF menciona de forma expresa la aplicación de mecanismos de control sobre autorretenedores, Grandes Contribuyentes y agentes de retención de IVA. El Listado Maestro de la DIAN mantiene un procedimiento específico para este control.'},
      {type:'steps',title:'Lógica operativa que debes reconocer',items:['Obtener información relevante de los sujetos bajo control.','Cruzar datos de presentación, pago, devoluciones, compensaciones y cartera.','Verificar si la información corresponde a la jurisdicción y al sujeto correcto.','Contrastar con otras áreas cuando existan procesos, sanciones o información pendiente.','Documentar el resultado y escalar el incumplimiento al procedimiento que corresponda.']},
      {type:'rule',title:'Control no es sanción automática',text:'Detectar una inconsistencia o un posible incumplimiento activa verificación y, según el caso, otro procedimiento. En PJS evita saltar directamente a sancionar sin identificar competencia, soporte y trámite.'},
      {type:'tip',title:'Sobre la nomenclatura del documento',text:'El Listado Maestro vigente lo presenta como PR-COT-0307 dentro de Recaudo-Devoluciones, aunque el PDF conserva un encabezado histórico PR-GM-0307. Para estudiar, prioriza la lógica funcional y verifica siempre la versión institucional publicada.'},
      {type:'checkpoint',questionId:'q-control-especiales-01'},
      {type:'checkpoint',questionId:'q-control-especiales-02'},
      {type:'sources',sourceIds:['proc-control-especiales-0307','listado-maestro-dian','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m9-l5', moduleId:'m9', order:5, title:'Inicio del cobro en sede administrativa: filtrar antes de repartir', subtitle:'El expediente debe entrar al cobro con una obligación que pueda sostener la actuación posterior.', durationMinutes:16, skillIds:['cartera','exigibilidad','clasificacion-obligaciones'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0269 inicia con la recepción de documentos donde constan obligaciones claras, expresas y exigibles y termina con el reparto para continuar el procedimiento de cobro que corresponda.'},
      {type:'steps',title:'Chequeo de ingreso al cobro',items:['Recibir y controlar los documentos que soportan la obligación.','Verificar claridad, expresividad y exigibilidad.','Revisar pagos, novedades y consistencia del estado de cuenta.','Clasificar la obligación y el tipo de gestión que corresponde.','Conformar o actualizar el expediente con trazabilidad.','Repartir al procedimiento competente: persuasivo, coactivo, facilidad, representación u otro según el caso.']},
      {type:'rule',title:'El reparto es una decisión técnica',text:'Las funciones de cobranzas incluyen estudio preliminar, clasificación y reparto. Un expediente mal clasificado puede llevar a aplicar la herramienta correcta en el momento equivocado.'},
      {type:'checkpoint',questionId:'q-inicio-cobro-01'},
      {type:'checkpoint',questionId:'q-inicio-cobro-02'},
      {type:'sources',sourceIds:['proc-inicio-cobro-0269','res-69-2021','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m10-l4', moduleId:'m10', order:4, title:'Cobro persuasivo: convencer no es ejecutar', subtitle:'Una gestión previa orientada al pago voluntario puede ser firme sin confundirse con el poder coactivo.', durationMinutes:15, skillIds:['cobro-persuasivo','cartera'], status:'published',
    blocks:[
      {type:'definition',title:'Cobro persuasivo',text:'Es una instancia previa orientada a procurar el pago voluntario de una obligación fiscal clara, expresa y exigible, antes de activar o profundizar la ejecución coactiva.'},
      {type:'comparison',title:'Persuasivo vs. coactivo',columns:['Cobro persuasivo','Cobro coactivo'],rows:[['Busca normalización voluntaria.','Aplica el procedimiento ejecutivo administrativo del Estatuto Tributario.'],['No es por sí mismo una ejecución.','Se estructura alrededor del título, mandamiento, notificación, excepciones y ejecución.'],['Puede informar deuda, alternativas y consecuencias.','Permite adoptar actos propios del poder de cobro en las etapas legales.']]},
      {type:'trap',title:'Tono fuerte ≠ cobro coactivo',text:'La naturaleza de la actuación la define su fundamento y etapa jurídica, no que la comunicación sea más o menos insistente.'},
      {type:'checkpoint',questionId:'q-persuasivo-01'},
      {type:'checkpoint',questionId:'q-persuasivo-02'},
      {type:'sources',sourceIds:['ce-cobro-persuasivo-2010','estatuto-tributario','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m10-l5', moduleId:'m10', order:5, title:'Ciclo completo de una facilidad de pago', subtitle:'Recibir, estudiar, decidir, controlar y cerrar —o reactivar el cobro si hay incumplimiento.', durationMinutes:17, skillIds:['facilidades-pago','cartera','garantias'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0272 no termina al expedir la resolución que concede una facilidad. Su alcance incluye controlar el cumplimiento y, si se incumple, continuar el proceso de cobro.'},
      {type:'process',title:'Ciclo institucional de la facilidad',nodes:[{id:'f1',label:'Solicitud'},{id:'f2',label:'Verificación de requisitos y obligaciones'},{id:'f3',label:'Garantías / condiciones'},{id:'f4',label:'Decisión y notificación'},{id:'f5',label:'Seguimiento de cuotas y obligaciones'},{id:'f6',label:'Cumplimiento → extinción'},{id:'f7',label:'Incumplimiento → continuar cobro'}]},
      {type:'rule',title:'La facilidad debe mirar la deuda real',text:'La doctrina DIAN reciente recuerda que el procedimiento exige considerar las obligaciones exigibles hasta la expedición de la resolución que concede la facilidad, de acuerdo con las reglas aplicables.'},
      {type:'rule',title:'Saldo a favor durante una facilidad',text:'El procedimiento institucional contempla la aplicación de saldos a favor a la facilidad antes de tramitar una devolución, con el ajuste que corresponda al acuerdo.'},
      {type:'checkpoint',questionId:'q-facilidad-ciclo-01'},
      {type:'checkpoint',questionId:'q-facilidad-ciclo-02'},
      {type:'checkpoint',questionId:'q-facilidad-ciclo-03'},
      {type:'sources',sourceIds:['proc-facilidades-0272','estatuto-tributario']}
    ]
  },
  {
    id:'m11-l5', moduleId:'m11', order:5, title:'PR-COT-0270: control de legalidad durante el mandamiento', subtitle:'El cobro coactivo se construye sobre un expediente que debe seguir siendo jurídicamente válido en cada etapa.', durationMinutes:16, skillIds:['cobro-coactivo','mandamiento-pago','debido-proceso'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento institucional de mandamiento de pago exige trabajar sobre obligaciones claras, expresas y exigibles y efectuar control de legalidad durante todo el proceso para respetar y garantizar el debido proceso.'},
      {type:'steps',title:'Qué debe vigilar el ejecutor',items:['Que el título y la obligación sigan soportando el cobro.','Que la notificación se practique por el medio y oportunidad aplicables.','Que pagos, nuevas obligaciones o novedades del expediente sean incorporados correctamente.','Que se tramiten las excepciones y recursos que procedan.','Que una causal de terminación, suspensión o cambio de trámite no sea ignorada.']},
      {type:'trap',title:'Expedir un mandamiento no congela la realidad',text:'Si después aparecen pagos, inconsistencias, una facilidad, un concurso o una causal de terminación, el funcionario debe revisar el efecto jurídico. El expediente no se vuelve automático.'},
      {type:'checkpoint',questionId:'q-mandamiento-proc-01'},
      {type:'checkpoint',questionId:'q-mandamiento-proc-02'},
      {type:'sources',sourceIds:['proc-mandamiento-0270','estatuto-tributario']}
    ]
  },
  {
    id:'m13-l5', moduleId:'m13', order:5, title:'Investigar bienes antes de ejecutar sobre ellos', subtitle:'La medida cautelar necesita un activo identificable y atribuible al obligado.', durationMinutes:15, skillIds:['investigacion-bienes','medidas-cautelares'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0326 tiene por objeto identificar bienes de propiedad del deudor y registrarlos en los instrumentos de cobro para apoyar la recuperación de las obligaciones.'},
      {type:'process',title:'De la búsqueda a la medida',nodes:[{id:'b1',label:'Revisar expediente y deuda'},{id:'b2',label:'Consultar fuentes y activos'},{id:'b3',label:'Verificar titularidad'},{id:'b4',label:'Registrar resultado de investigación'},{id:'b5',label:'Evaluar inembargabilidad y suficiencia'},{id:'b6',label:'Decretar o descartar la medida'}]},
      {type:'rule',title:'Titularidad primero',text:'Que un bien esté relacionado con el deudor no basta. Antes de afectar derechos patrimoniales debe verificarse que jurídicamente pueda ser objeto de la medida y que se atribuya al sujeto correcto.'},
      {type:'checkpoint',questionId:'q-bienes-01'},
      {type:'checkpoint',questionId:'q-bienes-02'},
      {type:'sources',sourceIds:['proc-investigacion-bienes-0326','proc-medidas-0327','estatuto-tributario']}
    ]
  },
  {
    id:'m13-l6', moduleId:'m13', order:6, title:'Levantar una medida también es parte de cobrar bien', subtitle:'Una cautela que perdió su fundamento no debe mantenerse por inercia.', durationMinutes:15, skillIds:['medidas-cautelares','levantamiento-medidas'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0345 regula el levantamiento de medidas cautelares cuando procede por extinción de obligaciones o por solicitud de autoridad competente, y obliga a determinar cómo continúa el expediente si aún existen obligaciones pendientes.'},
      {type:'comparison',title:'Tres preguntas antes de decidir',columns:['Pregunta','Qué evita'],rows:[['¿Subsiste la obligación?','Levantar todo cuando todavía existe deuda válida.'],['¿Subsiste la causa de la medida?','Mantener una restricción que ya no tiene fundamento.'],['¿Hay otras obligaciones o trámites?','Cerrar erróneamente un expediente que debe continuar por otra ruta.']]},
      {type:'rule',title:'La medida es accesoria',text:'La cautela sirve al cobro; no es un fin autónomo. Por eso extinción, autoridad competente, facilidad u otros eventos pueden exigir levantar, modificar o redirigir la actuación.'},
      {type:'checkpoint',questionId:'q-levantamiento-01'},
      {type:'checkpoint',questionId:'q-levantamiento-02'},
      {type:'sources',sourceIds:['proc-levantamiento-medidas-0345','proc-medidas-0327','estatuto-tributario']}
    ]
  },
  {
    id:'m14-l6', moduleId:'m14', order:6, title:'Reorganización empresarial desde la perspectiva de la DIAN', subtitle:'La prioridad deja de ser “seguir ejecutando” y pasa a defender correctamente el crédito dentro del proceso colectivo.', durationMinutes:17, skillIds:['procesos-concursales','reorganizacion','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0273 busca que la DIAN intervenga en procesos de reorganización empresarial realizando las actuaciones necesarias para defender el crédito fiscal de acuerdo con la Ley 1116 de 2006.'},
      {type:'process',title:'Mapa de intervención',nodes:[{id:'r1',label:'Conocer apertura / estado del proceso'},{id:'r2',label:'Depurar y certificar acreencia'},{id:'r3',label:'Presentar créditos al promotor'},{id:'r4',label:'Verificar reconocimiento y graduación'},{id:'r5',label:'Participar en etapas del acuerdo'},{id:'r6',label:'Controlar pago / extinción según decisiones'}]},
      {type:'rule',title:'El proceso colectivo cambia la estrategia',text:'La apertura de una reorganización somete la recuperación del crédito a las reglas concursales. No es correcto continuar como si solo existiera un expediente individual de cobro.'},
      {type:'tip',title:'No pierdas de vista a terceros responsables',text:'El procedimiento institucional también ordena identificar deudores solidarios, subsidiarios u otros terceros que deban responder y gestionar la actuación que corresponda frente a ellos.'},
      {type:'checkpoint',questionId:'q-reorganizacion-01'},
      {type:'checkpoint',questionId:'q-reorganizacion-02'},
      {type:'sources',sourceIds:['proc-reorganizacion-0273','ley-1116-2006','estatuto-tributario']}
    ]
  },
  {
    id:'m16-l6', moduleId:'m16', order:6, title:'SIE de devoluciones: de la radicación al acto administrativo', subtitle:'La tecnología estructura el expediente, pero la decisión sigue necesitando verificación jurídica y documental.', durationMinutes:18, skillIds:['devoluciones','sistemas-informacion','verificacion'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0124 describe el flujo de devoluciones y compensaciones de saldos a favor de renta y ventas mediante el Servicio Informático de Devoluciones. La herramienta organiza la gestión; no reemplaza el análisis de procedencia.'},
      {type:'process',title:'Flujo simplificado de estudio',nodes:[{id:'d1',label:'Radicación'},{id:'d2',label:'Requisitos formales'},{id:'d3',label:'Reparto / autorización'},{id:'d4',label:'Verificación del saldo y soportes'},{id:'d5',label:'Certificación de deudas / compensación'},{id:'d6',label:'Proyecto de acto'},{id:'d7',label:'Revisión y aprobación'},{id:'d8',label:'Notificación / pago o cierre'}]},
      {type:'rule',title:'El proyecto debe concordar con el expediente',text:'El procedimiento exige revisar que los datos del acto coincidan con la solicitud y sus soportes, que las causales de inadmisión o rechazo estén evidenciadas y que la compensación de deudas esté reflejada cuando corresponda.'},
      {type:'article',article:'Art. 853 E.T.',title:'Autorización para verificar',text:'La verificación de devoluciones debe realizarse por funcionarios autorizados, comisionados o a quienes se haya repartido el asunto conforme a la competencia.',sourceId:'estatuto-tributario'},
      {type:'checkpoint',questionId:'q-dev-sie-01'},
      {type:'checkpoint',questionId:'q-dev-sie-02'},
      {type:'sources',sourceIds:['proc-devoluciones-sie-0124','estatuto-tributario']}
    ]
  },
  {
    id:'m16-l7', moduleId:'m16', order:7, title:'Pago en exceso y pago de lo no debido: parecen iguales, pero nacen distinto', subtitle:'Identificar el origen del dinero es lo primero para escoger el procedimiento correcto.', durationMinutes:16, skillIds:['devoluciones','pago-exceso','pago-no-debido'], status:'published',
    blocks:[
      {type:'comparison',title:'Diferencia básica',columns:['Pago en exceso','Pago de lo no debido'],rows:[['Existe una obligación, pero se pagó una suma mayor a la legalmente correspondiente.','Se efectuó un pago sin que existiera causa legal que hiciera exigible ese pago.'],['La discusión se centra en el excedente.','La discusión se centra en la inexistencia de causa jurídica del pago.']]},
      {type:'lead',text:'PR-COT-0128 regula la devolución y/o compensación de estas situaciones y contempla como posibles resultados devolver/compensar, inadmitir o rechazar, según los requisitos y la evidencia del caso.'},
      {type:'rule',title:'La radicación y competencia también importan',text:'El procedimiento diferencia reglas de presentación según se trate de pago en exceso o pago de lo no debido. En una PJS no basta identificar que “hay dinero a devolver”: debes reconocer el origen y la ruta correspondiente.'},
      {type:'trap',title:'No confundas con saldo a favor declarado',text:'Un saldo a favor proveniente de una declaración puede tramitarse por un procedimiento distinto. La etiqueta correcta del origen evita aplicar requisitos o términos equivocados.'},
      {type:'checkpoint',questionId:'q-pago-exceso-01'},
      {type:'checkpoint',questionId:'q-pago-exceso-02'},
      {type:'sources',sourceIds:['proc-pagos-exceso-0128','decreto-1625-2016','estatuto-tributario']}
    ]
  }

  ,{
    id:'m6-l6', moduleId:'m6', order:6, title:'Certificar obligaciones: el estado de cuenta convertido en insumo', subtitle:'No basta consultar la deuda: otros procedimientos necesitan una certificación trazable.', durationMinutes:13, skillIds:['estado-cuenta','certificacion-obligaciones','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'La certificación de obligaciones conecta la calidad del estado de cuenta con decisiones de otros procedimientos, como devoluciones, procesos concursales o actuaciones de cartera. El dato debe ser verificable antes de convertirse en una certificación institucional.'},
      {type:'definition',title:'Finalidad institucional',text:'PR-COT-0328 busca certificar las obligaciones para que los procedimientos solicitantes conozcan el cumplimiento de la obligación sustancial del contribuyente.'},
      {type:'rule',title:'Primero realidad, después documento',text:'Si la consulta revela inconsistencias de declaración, pago o saldo, la ruta puede requerir actualización o corrección antes de expedir una certificación que reproduzca un dato erróneo.'},
      {type:'comparison',title:'Consulta vs. certificación',columns:['Acción','Qué produce'],rows:[['Consultar estado de cuenta','Información para analizar la situación del contribuyente.'],['Depurar inconsistencias','Alinea registros y soportes con la realidad documentada.'],['Certificar obligaciones','Documento institucional para informar obligaciones a otro procedimiento o autoridad.']]},
      {type:'tip',text:'El procedimiento público indica un término interno de cinco días desde la recepción de la solicitud para proferir la certificación. Estúdialo como regla operativa del procedimiento vigente, no como una regla universal de todo certificado DIAN.'},
      {type:'checkpoint',questionId:'q-cert-obligaciones-01'},
      {type:'checkpoint',questionId:'q-cert-obligaciones-02'},
      {type:'sources',sourceIds:['proc-certificacion-obligaciones-0328','proc-correccion-inconsistencias-0033']}
    ]
  },
  {
    id:'m9-l6', moduleId:'m9', order:6, title:'Extinción: saber cuándo dejar de cobrar', subtitle:'El expediente no termina solo porque el saldo “parezca” en cero.', durationMinutes:14, skillIds:['extincion-obligaciones','estado-cuenta','cartera'], status:'published',
    blocks:[
      {type:'lead',text:'La administración de cartera también exige reconocer cuándo una obligación dejó de ser exigible por una forma jurídicamente válida de extinción y documentar correctamente el cierre.'},
      {type:'definition',title:'Objetivo de PR-COT-0330',text:'Identificar la forma por la cual se extinguieron las obligaciones objeto del proceso de cobro y proferir las actuaciones necesarias para su extinción, hasta el cierre del expediente que contiene obligaciones extinguidas.'},
      {type:'steps',title:'Lectura segura del cierre',items:['Identifica exactamente qué obligación se pretende extinguir.','Verifica el hecho o acto que sustenta la extinción.','Contrasta saldos, pagos y soportes.','Si aparecen inconsistencias, activa la ruta de corrección o reproceso correspondiente.','Profiera y registre la actuación que proceda.','Cierra el expediente solo cuando la situación esté jurídicamente y documentalmente soportada.']},
      {type:'trap',title:'Cero en pantalla ≠ cierre automático',text:'PR-COT-0330 remite expresamente a corrección, actualización de saldos o mesa de servicio cuando detecta desajustes. Un resultado del aplicativo debe poder explicarse con el expediente.'},
      {type:'checkpoint',questionId:'q-extincion-01'},
      {type:'checkpoint',questionId:'q-extincion-02'},
      {type:'sources',sourceIds:['proc-extincion-0330','proc-correccion-inconsistencias-0033']}
    ]
  },
  {
    id:'m12-l4', moduleId:'m12', order:4, title:'Liquidación del crédito y las costas', subtitle:'Después de ordenar seguir adelante, hay que cuantificar qué se ejecuta.', durationMinutes:15, skillIds:['orden-ejecucion','liquidacion-credito','costas'], status:'published',
    blocks:[
      {type:'definition',title:'Qué busca la liquidación',text:'PR-COT-0390 establece el valor de las obligaciones objeto de cobro, discriminando capital e intereses causados hasta la fecha de liquidación e incluyendo las costas del proceso.'},
      {type:'rule',title:'No empieza desde cero',text:'El procedimiento parte de una resolución ejecutoriada que ordena seguir adelante la ejecución o de la resolución ejecutoriada que falla las excepciones. La liquidación desarrolla la ejecución; no reemplaza el título ni el mandamiento.'},
      {type:'process',title:'De la decisión a la realización',nodes:[{id:'l1',label:'Decisión ejecutoriada',hint:'Seguir adelante / fallo de excepciones.'},{id:'l2',label:'Liquidar crédito',hint:'Capital + intereses hasta la fecha.'},{id:'l3',label:'Incluir costas',hint:'Según las actuaciones del proceso.'},{id:'l4',label:'Aprobar liquidación',hint:'Cuantificación que sirve a la ejecución.'},{id:'l5',label:'Continuar realización',hint:'Remate, depósitos o extinción, según el caso.'}]},
      {type:'tip',text:'En PJS, distingue “si la obligación existe” de “cuánto se ejecuta en esta etapa”. La liquidación del crédito resuelve principalmente la segunda pregunta.'},
      {type:'checkpoint',questionId:'q-liquidacion-credito-01'},
      {type:'checkpoint',questionId:'q-liquidacion-credito-02'},
      {type:'checkpoint',questionId:'q-liquidacion-credito-03'},
      {type:'sources',sourceIds:['proc-liquidacion-credito-0390','estatuto-tributario']}
    ]
  },
  {
    id:'m13-l7', moduleId:'m13', order:7, title:'Secuestro: del embargo a la custodia del bien', subtitle:'Una medida registrada todavía necesita decisiones operativas antes de realizar el activo.', durationMinutes:17, skillIds:['medidas-cautelares','secuestro','costo-beneficio'], status:'published',
    blocks:[
      {type:'definition',title:'Finalidad del secuestro',text:'PR-COT-0388 busca quitar del dominio material del deudor los bienes embargados para entregarlos a un secuestre que los custodie y administre mientras culmina el proceso de cobro.'},
      {type:'rule',title:'Costo-beneficio antes de practicar la diligencia',text:'El procedimiento exige calcular la relación costo-beneficio antes de definir la diligencia de secuestro. Si el resultado conduce a no practicarla, se sigue la ruta de levantamiento de la medida y se continúa con el procedimiento de cartera que corresponda.'},
      {type:'process',title:'Decisión previa al secuestro',nodes:[{id:'s1',label:'Bien embargado',hint:'Expediente proveniente de medidas cautelares.'},{id:'s2',label:'Analizar costo-beneficio',hint:'Antes de fijar la diligencia.'},{id:'s3',label:'¿Conviene secuestrar?',hint:'Decisión soportada.'},{id:'s4',label:'Sí → diligencia',hint:'Fecha, auxiliar y actuación correspondiente.'},{id:'s5',label:'No → levantar',hint:'Ruta PR-COT-0345 y continuar cartera.'}]},
      {type:'trap',text:'Embargo y secuestro no son sinónimos. El embargo afecta jurídicamente la disponibilidad del bien; el secuestro incorpora su aprehensión/custodia en los términos del procedimiento.'},
      {type:'checkpoint',questionId:'q-secuestro-01'},
      {type:'checkpoint',questionId:'q-secuestro-02'},
      {type:'checkpoint',questionId:'q-secuestro-03'},
      {type:'sources',sourceIds:['proc-secuestro-0388','proc-medidas-0327','proc-levantamiento-medidas-0345']}
    ]
  },
  {
    id:'m13-l8', moduleId:'m13', order:8, title:'Avalúo y remate: convertir el bien en recuperación', subtitle:'La ejecución no salta del embargo al pago.', durationMinutes:18, skillIds:['avaluo','remate','medidas-cautelares','orden-ejecucion'], status:'published',
    blocks:[
      {type:'definition',title:'Avalúo',text:'PR-COT-0389 tiene como objetivo fijar el valor de los bienes embargados y secuestrados. Su alcance parte de la resolución de seguir adelante notificada y del acta de secuestro cuando existen bienes identificados, incluye la aprobación del avalúo y termina al continuar con el remate.'},
      {type:'definition',title:'Remate',text:'PR-COT-0391 busca obtener, mediante la venta forzada de los bienes del deudor, dinero destinado a extinguir parcial o totalmente las obligaciones objeto de cobro.'},
      {type:'process',title:'Cadena de realización del bien',nodes:[{id:'r1',label:'Embargo',hint:'Asegura jurídicamente el activo.'},{id:'r2',label:'Secuestro',hint:'Custodia/administración cuando corresponde.'},{id:'r3',label:'Avalúo',hint:'Fija el valor conforme a reglas vigentes.'},{id:'r4',label:'Liquidación',hint:'Cuantifica crédito, intereses y costas.'},{id:'r5',label:'Remate / adjudicación',hint:'Realización del activo.'},{id:'r6',label:'Aplicación / extinción',hint:'El producto se lleva a la obligación según corresponda.'}]},
      {type:'rule',title:'Control de legalidad transversal',text:'Los procedimientos de avalúo y remate reiteran debido proceso, defensa y revisión de eventos que alteran la ejecución, como facilidad de pago, extinción o apertura de proceso concursal.'},
      {type:'enforcement-simulator',title:'Simula la cadena de ejecución',text:'Practica en qué momento debe detenerse, continuar o cambiar de ruta una actuación sobre bienes.'},
      {type:'checkpoint',questionId:'q-avaluo-01'},
      {type:'checkpoint',questionId:'q-remate-01'},
      {type:'checkpoint',questionId:'q-remate-02'},
      {type:'sources',sourceIds:['proc-avaluo-0389','proc-liquidacion-credito-0390','proc-remate-0391','proc-extincion-0330']}
    ]
  }

  ,{
    id:'m0-l4', moduleId:'m0', order:4, title:'Así se construye tu prueba funcional: caso, enunciado y tres opciones', subtitle:'Conocer el formato cambia la forma de estudiar desde el primer día.', durationMinutes:14, skillIds:['estrategia-estudio','pjs','proceso-2676'], status:'published',
    blocks:[
      {type:'lead',text:'Las especificaciones técnicas de DIAN 2676 definen la prueba funcional en formato de Prueba de Juicio Situacional: cada ítem integra un caso, un enunciado y tres opciones de respuesta. Esto exige estudiar procedimientos como decisiones encadenadas, no como listas aisladas de artículos.'},
      {type:'process',title:'Estructura mental de un ítem funcional',nodes:[{id:'p1',label:'Caso',hint:'Hechos relevantes y contexto del empleo.'},{id:'p2',label:'Enunciado',hint:'La decisión concreta que debes tomar.'},{id:'p3',label:'Tres opciones',hint:'Una debe ajustarse mejor al marco aplicable.'},{id:'p4',label:'Razonamiento',hint:'Competencia + etapa + regla + consecuencia.'}]},
      {type:'rule',title:'La respuesta correcta no es la más severa ni la más amable',text:'En una PJS funcional debes escoger la actuación que corresponde a la competencia, al momento procedimental y a la evidencia disponible.'},
      {type:'tip',text:'Cuando estudies una norma, formula siempre cuatro preguntas: ¿quién actúa?, ¿cuándo?, ¿con qué presupuesto?, ¿qué ocurre después?'},
      {type:'checkpoint',questionId:'q-format-pjs-01'},
      {type:'checkpoint',questionId:'q-format-pjs-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','cnsc-2676-abc']}
    ]
  },
  {
    id:'m0-l5', moduleId:'m0', order:5, title:'Funcionales no es lo mismo que comportamentales e integridad', subtitle:'Tres instrumentos, tres formas diferentes de prepararte.', durationMinutes:12, skillIds:['estrategia-estudio','comportamentales','integridad'], status:'published',
    blocks:[
      {type:'comparison',title:'No estudies las tres pruebas igual',columns:['Prueba','Formato técnico previsto','Cómo prepararte'],rows:[['Funcionales','PJS: caso + enunciado + 3 opciones','Norma, procedimiento, competencia y práctica de decisiones.'],['Comportamentales','Afirmaciones en escala Likert de 4 opciones','Comprender las conductas observables y responder con consistencia.'],['Integridad','Afirmaciones en escala Likert de 4 opciones','Interiorizar valores y evitar respuestas impostadas o contradictorias.']]},
      {type:'trap',title:'No conviertas Likert en un examen de memoria',text:'Las especificaciones técnicas describen estas pruebas como instrumentos de autorreporte y prevén controles de consistencia y deseabilidad social. Memorizar una supuesta opción perfecta puede producir respuestas artificiales o contradictorias.'},
      {type:'checkpoint',questionId:'q-format-likert-01'},
      {type:'checkpoint',questionId:'q-format-likert-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','res-65-2024']}
    ]
  },
  {
    id:'m1-l4', moduleId:'m1', order:4, title:'Principios de la función administrativa convertidos en decisiones', subtitle:'El principio importa cuando modifica cómo actúas frente a un ciudadano o expediente.', durationMinutes:15, skillIds:['funcion-publica','debido-proceso','servicio-ciudadano'], status:'published',
    blocks:[
      {type:'lead',text:'En un caso situacional, los principios constitucionales y administrativos rara vez aparecen como una pregunta de definición. Funcionan como límites y criterios para escoger una actuación válida.'},
      {type:'comparison',title:'Principio y efecto práctico',columns:['Idea','Efecto en la actuación'],rows:[['Debido proceso','No sacrificar defensa, contradicción o competencia por rapidez.'],['Igualdad','Aplicar criterios objetivos sin privilegios indebidos.'],['Moralidad','Usar la función para el interés general y dentro del marco jurídico.'],['Eficacia','Buscar el resultado institucional sin desconocer garantías.'],['Publicidad','Permitir conocimiento de actuaciones salvo reserva legal.']]},
      {type:'example',title:'PJS típico',text:'Si una opción propone resolver más rápido omitiendo una oportunidad de defensa, puede sonar eficiente, pero vulnera el debido proceso y por ello deja de ser la mejor actuación.'},
      {type:'checkpoint',questionId:'q-funcion-publica-01'},
      {type:'checkpoint',questionId:'q-funcion-publica-02'},
      {type:'sources',sourceIds:['constitucion-politica','cpaca']}
    ]
  },
  {
    id:'m2-l5', moduleId:'m2', order:5, title:'Petición, acceso a información y reserva: separa las capas', subtitle:'Responder rápido no significa entregar información que la ley protege.', durationMinutes:16, skillIds:['pqrsf','transparencia','reserva-informacion'], status:'published',
    blocks:[
      {type:'comparison',title:'Tres preguntas distintas',columns:['Pregunta','Qué debes identificar'],rows:[['¿Qué pide el ciudadano?','Petición general, documentos/información o consulta.'],['¿En cuánto tiempo?','Regla general y términos especiales de la Ley 1755.'],['¿Puede entregarse todo?','Máxima publicidad, clasificación/reserva legal y posible versión pública.']]},
      {type:'rule',title:'Versión pública antes que negar todo',text:'Cuando solo una parte del documento esté protegida, la Ley de Transparencia permite suministrar una versión pública que mantenga en reserva únicamente lo protegido, cuando sea jurídicamente viable.'},
      {type:'trap',text:'No confundas reserva con incomodidad institucional. La restricción de acceso exige fundamento constitucional o legal; no basta con que la información sea sensible para la imagen de la entidad.'},
      {type:'checkpoint',questionId:'q-transparencia-peticion-01'},
      {type:'checkpoint',questionId:'q-transparencia-peticion-02'},
      {type:'sources',sourceIds:['ley-1755-2015','ley-1712-2014']}
    ]
  },
  {
    id:'m3-l4', moduleId:'m3', order:4, title:'Dónde vive CT-CR-3007 dentro de la DIAN', subtitle:'El mapa organizacional te ayuda a no responder como si fueras de otro subproceso.', durationMinutes:13, skillIds:['perfil-empleo','dian-estructura','cumplimiento-obligaciones'], status:'published',
    blocks:[
      {type:'lead',text:'La ficha ubica al Gestor II en el proceso misional Cumplimiento de Obligaciones Tributarias y en los subprocesos Administración de Cartera y Recaudo-Devoluciones, con aplicación en niveles Central y Seccional.'},
      {type:'process',title:'Del propósito institucional a tu actuación',nodes:[{id:'o1',label:'DIAN',hint:'Administración tributaria, aduanera y cambiaria.'},{id:'o2',label:'Cumplimiento de Obligaciones Tributarias',hint:'Proceso misional de la ficha.'},{id:'o3',label:'Administración de Cartera',hint:'Cobro, medidas, concursales, estado de cuenta.'},{id:'o4',label:'Recaudo-Devoluciones',hint:'EAR, correcciones, control, devoluciones y compensaciones.'}]},
      {type:'rule',title:'Competencia antes que conocimiento',text:'Saber que una actuación existe no significa que corresponda a tu empleo o a la etapa descrita. En PJS, identifica primero el subproceso y la competencia involucrada.'},
      {type:'checkpoint',questionId:'q-mapa-empleo-01'},
      {type:'checkpoint',questionId:'q-mapa-empleo-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','decreto-1742-2020']}
    ]
  },
  {
    id:'m5-l4', moduleId:'m5', order:4, title:'Obligación sustancial y obligación formal: no producen el mismo incumplimiento', subtitle:'Distinguirlas evita escoger controles equivocados.', durationMinutes:15, skillIds:['obligacion-tributaria','obligaciones-formales','control-extensivo'], status:'published',
    blocks:[
      {type:'definition',title:'Obligación sustancial',text:'Nace cuando se realiza el presupuesto previsto en la ley como generador del impuesto y tiene por objeto el pago del tributo.'},
      {type:'definition',title:'Obligaciones formales',text:'Son deberes instrumentales que permiten declarar, informar, identificar, documentar o facilitar el control tributario según la norma aplicable.'},
      {type:'comparison',title:'Lee el incumplimiento antes de actuar',columns:['Situación','Lectura inicial'],rows:[['No presentó una declaración exigida','Incumplimiento formal; puede coexistir con obligación sustancial.'],['Declaró pero no pagó el valor exigible','Incumplimiento sustancial de pago; puede generar cartera.'],['Información inconsistente en un recibo','Primero clasificar si el error es informativo/corregible o afecta la determinación del tributo.']]},
      {type:'checkpoint',questionId:'q-formal-sustancial-01'},
      {type:'checkpoint',questionId:'q-formal-sustancial-02'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-control-extensivo-0382']}
    ]
  },
  {
    id:'m6-l7', moduleId:'m6', order:7, title:'Error informativo no es igual a modificar el impuesto', subtitle:'La ruta de corrección depende de qué dato está mal y de su efecto jurídico.', durationMinutes:15, skillIds:['correccion-inconsistencias','estado-cuenta','declaraciones'], status:'published',
    blocks:[
      {type:'lead',text:'La propia DIAN diferencia errores informativos corregibles por la ruta de inconsistencias de cambios que afectan el impuesto a cargo y deben tramitarse por las reglas de corrección de declaraciones que correspondan.'},
      {type:'comparison',title:'Antes de corregir, clasifica',columns:['Hallazgo','Pregunta clave'],rows:[['NIT, nombre, concepto, periodo u otros datos informativos','¿Puede corregirse sin alterar la determinación del impuesto?'],['Imputación de saldos/anticipos','¿La inconsistencia encaja en el marco especial de corrección aplicable?'],['Cambio del impuesto a cargo','¿Requiere corrección de la declaración bajo los artículos y términos pertinentes?']]},
      {type:'trap',text:'No uses una corrección operativa de datos para modificar indirectamente la determinación sustancial del tributo. La competencia y el procedimiento cambian cuando cambia el impuesto.'},
      {type:'checkpoint',questionId:'q-correccion-dato-01'},
      {type:'checkpoint',questionId:'q-correccion-dato-02'},
      {type:'sources',sourceIds:['proc-correccion-inconsistencias-0033','estatuto-tributario']}
    ]
  },
  {
    id:'m15-l3', moduleId:'m15', order:3, title:'Matriz de origen del crédito: identifica qué estás devolviendo', subtitle:'La clasificación correcta ocurre antes de revisar requisitos o términos.', durationMinutes:16, skillIds:['devoluciones','saldo-favor','pago-exceso','pago-no-debido'], status:'published',
    blocks:[
      {type:'comparison',title:'Tres orígenes que no debes mezclar',columns:['Origen','Idea central','Documento o hecho que domina'],rows:[['Saldo a favor','Resultado favorable liquidado en una declaración tributaria.','Declaración y soportes del saldo.'],['Pago en exceso','Existía obligación, pero se pagó más de lo debido.','Recibo de pago y cuantificación del excedente.'],['Pago de lo no debido','Se pagó sin causa legal que hiciera exigible ese pago.','Trazabilidad del pago y ausencia de causa jurídica.']]},
      {type:'rule',title:'Mismo objetivo, rutas que pueden variar',text:'El artículo 850 reconoce la devolución de saldos a favor y ordena devolver pagos en exceso o de lo no debido siguiendo el procedimiento aplicable, pero el origen conserva relevancia para oportunidad, competencia y soportes.'},
      {type:'refund-simulator',title:'Clasifica el crédito antes de tramitar',text:'Usa tres expedientes breves para distinguir saldo a favor, pago en exceso y compensación previa.'},
      {type:'checkpoint',questionId:'q-origen-credito-01'},
      {type:'checkpoint',questionId:'q-origen-credito-02'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-pagos-exceso-0128','proc-devoluciones-sie-0124']}
    ]
  },
  {
    id:'m15-l4', moduleId:'m15', order:4, title:'La oportunidad cambia según el origen: dos años no es una regla universal', subtitle:'Uno de los distractores más peligrosos es trasladar un término correcto al trámite equivocado.', durationMinutes:16, skillIds:['devoluciones','terminos','saldo-favor','pago-exceso'], status:'published',
    blocks:[
      {type:'article',article:'Art. 854 E.T.',title:'Saldo a favor',text:'La solicitud de devolución de impuestos debe presentarse, como regla general, a más tardar dos años después del vencimiento del término para declarar.',sourceId:'estatuto-tributario'},
      {type:'rule',title:'Pagos en exceso y de lo no debido',text:'La regulación compilada en el Decreto 1625 vincula su oportunidad al término de prescripción de la acción ejecutiva, que actualmente es de cinco años. No traslades automáticamente el término del artículo 854 a estos pagos.'},
      {type:'comparison',title:'Término según origen',columns:['Supuesto','Referencia de estudio'],rows:[['Saldo a favor declarado','Art. 854 E.T.: regla de dos años desde vencimiento para declarar.'],['Pago en exceso / pago no debido','DUR 1625 y prescripción de la acción ejecutiva: estudiar la regla específica aplicable.']]},
      {type:'checkpoint',questionId:'q-termino-devolucion-01'},
      {type:'checkpoint',questionId:'q-termino-devolucion-02'},
      {type:'sources',sourceIds:['estatuto-tributario','decreto-1625-2016','proc-pagos-exceso-0128']}
    ]
  },
  {
    id:'m15-l5', moduleId:'m15', order:5, title:'No todas las devoluciones recorren el mismo procedimiento', subtitle:'Renta/ventas, trámites manuales, IVA-retención y sentencias tienen rutas diferenciadas.', durationMinutes:17, skillIds:['devoluciones','rutas-especiales','compensaciones'], status:'published',
    blocks:[
      {type:'lead',text:'El Listado Maestro de la DIAN publica procedimientos distintos dentro de Recaudo-Devoluciones. Reconocer la ruta evita aplicar mecánicamente pasos del SIE a situaciones que tienen un procedimiento especial.'},
      {type:'comparison',title:'Mapa mínimo de rutas públicas',columns:['Procedimiento','Qué cubre'],rows:[['PR-COT-0124','Saldos a favor de renta y ventas mediante el Servicio Informático de Devoluciones.'],['PR-COT-0125','Saldos a favor de renta y ventas por ruta manual.'],['PR-COT-0126','IVA pagado y retención en la fuente en los supuestos del procedimiento.'],['PR-COT-0127','Compensación por sentencias y conciliaciones judiciales.'],['PR-COT-0128','Pagos en exceso y pagos de lo no debido.']]},
      {type:'tip',text:'No memorices solo números de procedimiento. Aprende qué hecho activa cada ruta y qué resultado busca.'},
      {type:'checkpoint',questionId:'q-ruta-devolucion-01'},
      {type:'checkpoint',questionId:'q-ruta-devolucion-02'},
      {type:'sources',sourceIds:['listado-maestro-dian','proc-devoluciones-sie-0124','proc-devoluciones-manual-0125','proc-iva-retencion-0126','proc-sentencias-0127','proc-pagos-exceso-0128']}
    ]
  },
  {
    id:'m16-l8', moduleId:'m16', order:8, title:'Compensación previa: devolver solo después de cruzar lo que corresponde', subtitle:'La certificación de obligaciones puede cambiar el valor finalmente entregado.', durationMinutes:15, skillIds:['devoluciones','compensacion-previa','certificacion-obligaciones'], status:'published',
    blocks:[
      {type:'article',article:'Art. 861 E.T.',title:'Compensación previa a la devolución',text:'La devolución de saldos a favor se efectúa una vez compensadas las deudas y obligaciones de plazo vencido del mismo contribuyente o responsable, en los términos legales.',sourceId:'estatuto-tributario'},
      {type:'process',title:'Cruce antes de pagar',nodes:[{id:'c1',label:'Solicitud procedente'},{id:'c2',label:'Certificar obligaciones'},{id:'c3',label:'Identificar deuda vencida'},{id:'c4',label:'Compensar cuando proceda'},{id:'c5',label:'Determinar remanente'},{id:'c6',label:'Ordenar devolución / pago'}]},
      {type:'trap',text:'No confundas compensación con negar la devolución. Puede existir un saldo reconocido y, al mismo tiempo, una deuda vencida que deba cruzarse antes de entregar el remanente.'},
      {type:'checkpoint',questionId:'q-comp-previa-01'},
      {type:'checkpoint',questionId:'q-comp-previa-02'},
      {type:'sources',sourceIds:['estatuto-tributario','proc-certificacion-obligaciones-0328','proc-iva-retencion-0126']}
    ]
  },
  {
    id:'m16-l9', moduleId:'m16', order:9, title:'El acto que resuelve debe contar la misma historia que el expediente', subtitle:'Valores, causales y soportes deben ser coherentes antes de aprobar.', durationMinutes:15, skillIds:['devoluciones','acto-administrativo','calidad-expediente'], status:'published',
    blocks:[
      {type:'lead',text:'Los procedimientos de devoluciones exigen comparar el proyecto de acto con la solicitud, los soportes, la certificación de obligaciones y las causales de inadmisión, rechazo o negación cuando existan.'},
      {type:'steps',title:'Revisión previa a la aprobación',items:['Verifica identidad, impuesto, periodo y valor solicitado.','Contrasta el saldo con los soportes y resultados de verificación.','Revisa deudas a compensar y órdenes de embargo cuando existan.','Comprueba que cada causal desfavorable esté sustentada en evidencia del expediente.','Devuelve el proyecto para corrección si hay inconsistencias.','Aprueba solo cuando el acto represente fielmente la decisión soportada.']},
      {type:'rule',title:'Inadmitir debe permitir subsanar',text:'El procedimiento PR-COT-0126 ordena relacionar la totalidad de las causales de inadmisión para que el solicitante cuente con información suficiente para corregir y radicar nuevamente cuando sea procedente.'},
      {type:'checkpoint',questionId:'q-calidad-acto-dev-01'},
      {type:'checkpoint',questionId:'q-calidad-acto-dev-02'},
      {type:'sources',sourceIds:['proc-iva-retencion-0126','proc-devoluciones-sie-0124']}
    ]
  },
  {
    id:'m17-l3', moduleId:'m17', order:3, title:'Acceso privilegiado: más permisos significa más control, no más comodidad', subtitle:'Los privilegios deben responder a función, autorización y trazabilidad.', durationMinutes:15, skillIds:['seguridad-informacion','control-acceso','permisos'], status:'published',
    blocks:[
      {type:'lead',text:'El manual de seguridad DIAN exige restringir y controlar los accesos privilegiados a programas, servicios, aplicativos y bases de datos. Estos permisos deben asignarse a personas autorizadas y con las competencias requeridas para su función.'},
      {type:'steps',title:'Ciclo seguro del privilegio',items:['Justificar la necesidad funcional.','Solicitar y autorizar por el mecanismo definido.','Asignar solo los privilegios necesarios.','Mantener registro actualizado de usuarios privilegiados.','Monitorear su uso.','Retirar o deshabilitar cuando cambie la función o cese la necesidad.']},
      {type:'trap',text:'Un usuario que necesita consultar cartera no necesariamente necesita administrar usuarios, modificar configuraciones críticas o acceder a todos los datos del sistema.'},
      {type:'checkpoint',questionId:'q-acceso-priv-01'},
      {type:'checkpoint',questionId:'q-acceso-priv-02'},
      {type:'sources',sourceIds:['manual-seguridad-dian','modelo-seguridad-dian','decreto-1742-2020']}
    ]
  },
  {
    id:'m17-l4', moduleId:'m17', order:4, title:'Confidencialidad, integridad y disponibilidad dentro del trabajo diario', subtitle:'La calidad de información no se reduce a que un número esté bien escrito.', durationMinutes:14, skillIds:['seguridad-informacion','calidad-datos','trazabilidad'], status:'published',
    blocks:[
      {type:'comparison',title:'Tres propiedades, tres riesgos',columns:['Propiedad','Pregunta operativa','Ejemplo de riesgo'],rows:[['Confidencialidad','¿Solo accede quien está autorizado?','Compartir información tributaria con un usuario sin necesidad funcional.'],['Integridad','¿El dato conserva exactitud y trazabilidad?','Modificar un saldo sin soporte o sin dejar rastro de auditoría.'],['Disponibilidad','¿La información y el servicio están accesibles cuando se necesitan?','Una configuración crítica impide operar el sistema durante una gestión urgente.']]},
      {type:'rule',title:'Calidad + seguridad',text:'La función de CT-CR-3007 sobre incorporación, calidad y unificación de información debe leerse junto con controles de acceso, trazabilidad y protección de los sistemas corporativos.'},
      {type:'checkpoint',questionId:'q-cia-01'},
      {type:'checkpoint',questionId:'q-cia-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','manual-seguridad-dian','modelo-seguridad-dian']}
    ]
  },
  {
    id:'m17-l5', moduleId:'m17', order:5, title:'Cambiar un sistema también es una actuación controlada', subtitle:'Crear, ajustar, mantener o implantar no autoriza cambios improvisados.', durationMinutes:14, skillIds:['sistemas-informacion','gestion-cambios','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'La ficha del empleo incluye gestionar creación, modificación, ajuste, mantenimiento, operación, permisos de acceso e implantación de sistemas de los subprocesos. La mejor respuesta situacional debe combinar necesidad funcional, estándar institucional, seguridad y evidencia del cambio.'},
      {type:'process',title:'Cambio controlado',nodes:[{id:'g1',label:'Necesidad'},{id:'g2',label:'Competencia / autorización'},{id:'g3',label:'Evaluar impacto y seguridad'},{id:'g4',label:'Implementar de forma controlada'},{id:'g5',label:'Verificar resultado'},{id:'g6',label:'Registrar y mantener trazabilidad'}]},
      {type:'trap',text:'Que un ajuste parezca pequeño no justifica hacerlo por fuera de los procedimientos o con una cuenta compartida. La trazabilidad es parte del control.'},
      {type:'checkpoint',questionId:'q-cambio-sistema-01'},
      {type:'checkpoint',questionId:'q-cambio-sistema-02'},
      {type:'sources',sourceIds:['merf-ct-cr-3007','manual-seguridad-dian']}
    ]
  },
  {
    id:'m18-l3', moduleId:'m18', order:3, title:'Las seis competencias básicas en microcasos', subtitle:'Aprende a reconocer la conducta observable detrás de una situación cotidiana.', durationMinutes:17, skillIds:['comportamentales-basicas','conductas-observables'], status:'published',
    blocks:[
      {type:'comparison',title:'Competencia y señal observable',columns:['Competencia','Señal que deberías reconocer'],rows:[['Adaptabilidad','Integra nuevas perspectivas, aprendizajes o tecnologías y ajusta su conducta al contexto.'],['Comportamiento ético','Actúa de forma congruente con el Código de Integridad.'],['Comunicación efectiva','Escucha, pregunta y verifica que el mensaje haya sido comprendido.'],['Orientación al logro','Organiza el trabajo, usa bien recursos y cumple en tiempo y calidad.'],['Orientación al usuario y ciudadano','Escucha necesidades y entrega soluciones dentro de competencias y estándares.'],['Trabajo en equipo','Cumple acuerdos, colabora y respeta normas comunes de trabajo.']]},
      {type:'tip',text:'Una misma escena puede tocar varias competencias. Identifica cuál conducta es el centro de la afirmación antes de responder.'},
      {type:'checkpoint',questionId:'q-basicas-01'},
      {type:'checkpoint',questionId:'q-basicas-02'},
      {type:'sources',sourceIds:['res-65-2024']}
    ]
  },
  {
    id:'m18-l4', moduleId:'m18', order:4, title:'Básica y específica pueden compartir nombre, pero no el nivel esperado', subtitle:'La ficha CT-CR-3007 combina un piso común con exigencias superiores para determinadas competencias.', durationMinutes:14, skillIds:['comportamentales-basicas','comportamentales-especificas','niveles'], status:'published',
    blocks:[
      {type:'lead',text:'La Resolución 65 distingue competencias básicas para todos los empleos y competencias específicas asociadas al proceso/subproceso. Una competencia como Comportamiento ético puede aparecer en ambos niveles de análisis.'},
      {type:'rule',title:'Lee siempre nombre + categoría + nivel',text:'Para CT-CR-3007, el MERF exige específicamente Comportamiento ético nivel 4, Adaptabilidad nivel 3, Comunicación efectiva nivel 3 y Trabajo en equipo nivel 3, además del conjunto básico.'},
      {type:'checkpoint',questionId:'q-basica-especifica-01'},
      {type:'checkpoint',questionId:'q-basica-especifica-02'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m19-l3', moduleId:'m19', order:3, title:'Comportamiento ético nivel 4: no es solo evitar una falta', subtitle:'El nivel requerido espera promover prácticas y ser referente organizacional.', durationMinutes:15, skillIds:['comportamiento-etico','nivel-4','integridad'], status:'published',
    blocks:[
      {type:'lead',text:'El nivel 4 de Comportamiento ético va más allá de cumplir individualmente. La Resolución 65 lo asocia con estructurar, fomentar y aplicar estrategias basadas en valores institucionales y con promover prácticas de integridad en los equipos.'},
      {type:'comparison',title:'Progresión conceptual',columns:['Nivel','Idea dominante'],rows:[['1','Cumple su trabajo a la luz del código.'],['2','Mantiene el código incluso frente a intereses propios.'],['3','Genera confianza por coherencia, reserva y responsabilidad sobre sus actos.'],['4','Promueve prácticas éticas y se convierte en referente dentro de la organización.']]},
      {type:'checkpoint',questionId:'q-etico-n4-01'},
      {type:'checkpoint',questionId:'q-etico-n4-02'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007','codigo-integridad-dian']}
    ]
  },
  {
    id:'m19-l4', moduleId:'m19', order:4, title:'Nivel 3: anticipar, comunicar con método y cuidar el equipo', subtitle:'Tres competencias diferentes, tres señales que se pueden confundir.', durationMinutes:16, skillIds:['adaptabilidad','comunicacion-efectiva','trabajo-equipo','nivel-3'], status:'published',
    blocks:[
      {type:'comparison',title:'Qué busca el nivel 3 de tu ficha',columns:['Competencia','Núcleo del nivel 3'],rows:[['Adaptabilidad','Anticipa cambios, identifica repercusiones y ajusta proactivamente su accionar.'],['Comunicación efectiva','Selecciona métodos adecuados, consolida redes y considera el impacto en los interlocutores.'],['Trabajo en equipo','Fomenta colaboración, valora aportes, monitorea objetivos y cuida el clima laboral.']]},
      {type:'example',title:'Diferencia fina',text:'Alertar con datos una desviación del objetivo del equipo se acerca a Trabajo en equipo nivel 3; escoger un canal y adaptar el método para reducir barreras se acerca a Comunicación efectiva nivel 3.'},
      {type:'checkpoint',questionId:'q-found-m19-04'},
      {type:'checkpoint',questionId:'q-nivel3-02'},
      {type:'sources',sourceIds:['res-65-2024','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m19-l5', moduleId:'m19', order:5, title:'Likert de cuatro opciones: consistencia antes que personaje perfecto', subtitle:'La prueba comportamental está diseñada para detectar patrones simplistas.', durationMinutes:16, skillIds:['comportamentales','likert','consistencia'], status:'published',
    blocks:[
      {type:'lead',text:'Las especificaciones técnicas de DIAN 2676 prevén afirmaciones de autorreporte con escala Likert de cuatro opciones. También exigen afirmaciones directas e inversas y controles orientados a detectar sesgos de respuesta.'},
      {type:'rule',title:'Al menos 30% de afirmaciones con clave inversa',text:'El diseño técnico exige direccionalidad directa e inversa como mecanismo de control de patrones de respuesta, junto con índices de deseabilidad social y consistencia.'},
      {type:'tip',text:'No respondas buscando siempre un extremo. Lee cada afirmación completa, identifica qué conducta describe y responde de acuerdo con tu comportamiento real y consistente.'},
      {type:'behavior-simulator',title:'Practica el formato sin intentar adivinar la clave',text:'Reconoce afirmaciones directas e inversas y observa qué competencia está detrás de cada una.'},
      {type:'checkpoint',questionId:'q-likert-consistencia-01'},
      {type:'checkpoint',questionId:'q-likert-consistencia-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','res-65-2024']}
    ]
  },
  {
    id:'m20-l3', moduleId:'m20', order:3, title:'Los cinco valores del Código de Integridad DIAN', subtitle:'Honestidad, respeto, compromiso, diligencia y justicia deben verse en decisiones concretas.', durationMinutes:15, skillIds:['integridad','valores-dian'], status:'published',
    blocks:[
      {type:'lead',text:'El Código de Integridad institucional articula el servicio con cinco valores: honestidad, respeto, compromiso, diligencia y justicia, haciendo prevalecer el interés general sobre el particular.'},
      {type:'comparison',title:'Valor y riesgo que ayuda a evitar',columns:['Valor','Aplicación práctica'],rows:[['Honestidad','Decir la verdad, declarar conflictos y no usar información o cargo para beneficio indebido.'],['Respeto','Reconocer dignidad, diversidad y trato adecuado incluso ante desacuerdo.'],['Compromiso','Entender el impacto público del trabajo y actuar al servicio de los objetivos institucionales.'],['Diligencia','Cumplir deberes con oportunidad, cuidado y calidad, sin atajos negligentes.'],['Justicia','Tomar decisiones imparciales con criterios objetivos y derechos en consideración.']]},
      {type:'checkpoint',questionId:'q-valores-dian-01'},
      {type:'checkpoint',questionId:'q-valores-dian-02'},
      {type:'sources',sourceIds:['codigo-integridad-dian','res-65-2024']}
    ]
  },
  {
    id:'m20-l4', moduleId:'m20', order:4, title:'Integridad cuando hay presión por resultados', subtitle:'Rapidez, recaudo o jerarquía no justifican saltarse legalidad, imparcialidad o reserva.', durationMinutes:15, skillIds:['integridad','dilemas-eticos','reserva-informacion'], status:'published',
    blocks:[
      {type:'example',title:'Dilema',text:'Un superior informalmente pide compartir información tributaria con una persona que no tiene competencia, argumentando que el asunto es urgente. La urgencia no sustituye autorización ni deber de reserva.'},
      {type:'steps',title:'Cómo resolver un dilema',items:['Identifica el deber o valor comprometido.','Distingue instrucción legítima de presión informal.','Verifica competencia, autorización y procedimiento.','Protege derechos e información de terceros.','Documenta o escala cuando corresponda.','Escoge la alternativa que permita cumplir el objetivo sin sacrificar legalidad e integridad.']},
      {type:'checkpoint',questionId:'q-integridad-presion-01'},
      {type:'checkpoint',questionId:'q-integridad-presion-02'},
      {type:'sources',sourceIds:['codigo-integridad-dian','manual-seguridad-dian','res-65-2024']}
    ]
  },
  {
    id:'m21-l3', moduleId:'m21', order:3, title:'Método C-E-R-A para resolver una PJS', subtitle:'Competencia, Etapa, Regla y Actuación: cuatro filtros antes de marcar.', durationMinutes:14, skillIds:['pjs','estrategia-examen','razonamiento'], status:'published',
    blocks:[
      {type:'steps',title:'C-E-R-A',items:['Competencia: ¿qué dependencia, subproceso o funcionario puede actuar?','Etapa: ¿en qué momento del procedimiento está el caso?','Regla: ¿qué presupuesto, término, excepción o garantía controla la situación?','Actuación: ¿qué opción aplica la regla sin inventar hechos ni saltar etapas?']},
      {type:'tip',text:'Subraya mentalmente hechos con efecto jurídico: fechas, ejecutoria, notificación, tipo de deuda, existencia de bienes, deuda vencida, solicitud, garantía o proceso concursal.'},
      {type:'checkpoint',questionId:'q-metodo-cera-01'},
      {type:'checkpoint',questionId:'q-metodo-cera-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m21-l4', moduleId:'m21', order:4, title:'Taxonomía de distractores: por qué una opción falsa puede sonar profesional', subtitle:'Muchos errores ocurren porque reconoces una figura correcta en la etapa equivocada.', durationMinutes:15, skillIds:['pjs','distractores','razonamiento'], status:'published',
    blocks:[
      {type:'comparison',title:'Distractores frecuentes',columns:['Tipo','Cómo se ve'],rows:[['Figura real, etapa incorrecta','Propone rematar cuando todavía falta secuestro/avalúo.'],['Competencia incorrecta','Ordena actuar a quien no tiene habilitación o reparto.'],['Regla absoluta','Usa “siempre” o “nunca” donde existen condiciones y excepciones.'],['Atajo por eficiencia','Sacrifica defensa, soportes o verificación para resolver más rápido.'],['Hecho inventado','Supone pago, notificación o ejecutoria que el caso nunca menciona.'],['Confusión de conceptos vecinos','Trata embargo y secuestro, avalúo y liquidación, devolución y compensación como sinónimos.']]},
      {type:'checkpoint',questionId:'q-distractor-01'},
      {type:'checkpoint',questionId:'q-distractor-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas']}
    ]
  },
  {
    id:'m22-l2', moduleId:'m22', order:2, title:'Cuaderno de errores: convierte cada fallo en una regla recuperable', subtitle:'La práctica solo mejora si puedes explicar por qué te equivocaste.', durationMinutes:12, skillIds:['practica-adaptativa','errores','metacognicion'], status:'published',
    blocks:[
      {type:'steps',title:'Después de fallar una pregunta',items:['Clasifica el error: concepto, término, competencia, etapa, lectura o distracción.','Escribe en una frase la regla que habría cambiado tu respuesta.','Identifica por qué tu opción parecía plausible.','Vincula la fuente oficial que resuelve la duda.','Programa una pregunta del mismo tipo para una sesión posterior.']},
      {type:'tip',text:'No colecciones capturas de respuestas. Colecciona patrones de error. El objetivo es que el siguiente caso diferente active la regla correcta.'},
      {type:'checkpoint',questionId:'q-cuaderno-error-01'},
      {type:'checkpoint',questionId:'q-cuaderno-error-02'},
      {type:'sources',sourceIds:['learning-science-dunlosky-2013']}
    ]
  },
  {
    id:'m22-l3', moduleId:'m22', order:3, title:'Repaso espaciado y recuperación activa', subtitle:'Volver a leer se siente fácil; recuperar la regla sin verla produce aprendizaje más resistente.', durationMinutes:12, skillIds:['practica-adaptativa','repaso-espaciado','dominio'], status:'published',
    blocks:[
      {type:'lead',text:'Umbral prioriza habilidades débiles y preguntas que deben reaparecer después de un intervalo. Una respuesta correcta inmediatamente después de leer todavía no demuestra dominio estable.'},
      {type:'rule',title:'Dominio requiere confirmación posterior',text:'La plataforma usa una regla conservadora: una habilidad puede avanzar a Dominada cuando logra al menos 80% en práctica específica y vuelve a confirmarse correctamente en una sesión posterior.'},
      {type:'checkpoint',questionId:'q-repaso-espaciado-01'},
      {type:'checkpoint',questionId:'q-repaso-espaciado-02'},
      {type:'sources',sourceIds:['learning-science-dunlosky-2013']}
    ]
  },
  {
    id:'m23-l2', moduleId:'m23', order:2, title:'Simular no es practicar con cronómetro todo el tiempo', subtitle:'Primero aprende con feedback; luego mide rendimiento sin ayudas.', durationMinutes:12, skillIds:['simulacros','estrategia-examen'], status:'published',
    blocks:[
      {type:'comparison',title:'Modo aprendizaje vs. simulacro',columns:['Aprendizaje','Simulacro'],rows:[['Feedback inmediato y explicación','Sin explicación hasta finalizar.'],['Puedes consultar fuente después del intento','No interrumpas para investigar.'],['Sesiones enfocadas en una habilidad','Mezcla representativa de áreas.'],['Tiempo flexible','Tiempo controlado cuando se defina la estrategia de simulación.']]},
      {type:'tip',text:'No conviertas todos los días en examen. La mayor parte del progreso ocurre cuando corriges modelos mentales; el simulacro sirve para medir si sobreviven bajo mezcla y presión.'},
      {type:'checkpoint',questionId:'q-simulacro-modo-01'},
      {type:'checkpoint',questionId:'q-simulacro-modo-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','learning-science-dunlosky-2013']}
    ]
  },
  {
    id:'m23-l3', moduleId:'m23', order:3, title:'Postmortem del simulacro: el puntaje es el inicio del análisis', subtitle:'Un 72% puede esconder un problema de contenido, lectura o tiempo completamente distinto.', durationMinutes:13, skillIds:['simulacros','analisis-errores','dominio'], status:'published',
    blocks:[
      {type:'steps',title:'Revisión de 20 minutos',items:['Separa correctas seguras de correctas por intuición.','Clasifica los errores por módulo y habilidad.','Marca los distractores que te convencieron.','Revisa si el error provino de ignorar un hecho del caso.','Consulta solo las fuentes vinculadas a los errores relevantes.','Programa una sesión adaptativa con las dos debilidades principales.']},
      {type:'rule',title:'No persigas solo el porcentaje global',text:'Dos simulacros con la misma nota pueden requerir planes opuestos. El reporte por habilidad y tipo de error es más accionable que la cifra total.'},
      {type:'checkpoint',questionId:'q-postmortem-01'},
      {type:'checkpoint',questionId:'q-postmortem-02'},
      {type:'sources',sourceIds:['cnsc-2676-especificaciones-pruebas','learning-science-dunlosky-2013']}
    ]
  }

  ,{
    id:'m7-l6', moduleId:'m7', order:6, title:'Índice de consignación: el tiempo también hace parte del recaudo', subtitle:'La EAR administra dinero e información bajo reglas de oportunidad verificables.', durationMinutes:14, skillIds:['ear','recaudo','indice-consignacion'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0029 define el índice de consignación como el número de días durante los cuales una Entidad Autorizada para Recaudar puede conservar el dinero recaudado como contraprestación por el servicio. Para estudiar EAR conviene separar recepción, transmisión de información y consignación efectiva.'},
      {type:'comparison',title:'Tres preguntas distintas',columns:['Dimensión','Pregunta de control'],rows:[['Recepción','¿La entidad recibió correctamente el documento o pago?'],['Información','¿Transmitió los registros completos y oportunos?'],['Consignación','¿Trasladó los recursos dentro de la oportunidad aplicable?']]},
      {type:'rule',title:'No toda extemporaneidad es la misma',text:'Un retraso en transmitir información y un retraso en consignar recursos afectan dimensiones diferentes del servicio de recaudo. Antes de escoger una consecuencia, identifica qué obligación concreta incumplió la EAR.'},
      {type:'checkpoint',questionId:'q-ear-indice-01'},
      {type:'checkpoint',questionId:'q-ear-indice-02'},
      {type:'sources',sourceIds:['proc-indice-consignacion-0029','res-227-2025','proc-sanciones-ear-0030']}
    ]
  },
  {
    id:'m10-l6', moduleId:'m10', order:6, title:'Persuasivo no es coactivo: identifica qué poder se está ejerciendo', subtitle:'Informar y promover pago voluntario no equivale a ejecutar forzosamente la obligación.', durationMinutes:14, skillIds:['cobro-persuasivo','medidas-cautelares','competencia'], status:'published',
    blocks:[
      {type:'lead',text:'La doctrina oficial reiterada por la DIAN en 2026 distingue el cobro persuasivo como una instancia previa orientada al pago voluntario. No debe describirse como si ya existiera una ejecución coactiva.'},
      {type:'comparison',title:'No mezcles los planos',columns:['Situación','Lectura correcta'],rows:[['Contacto persuasivo','Informa la deuda y promueve normalización voluntaria.'],['Mandamiento de pago','Acto propio del procedimiento administrativo coactivo.'],['Medida preventiva','Puede tener oportunidad propia según el Estatuto Tributario; no convierte por sí sola el contacto persuasivo en ejecución.']]},
      {type:'trap',title:'Distractor frecuente',text:'“Como ya hubo llamada persuasiva, el proceso coactivo ya empezó”. Esa conclusión confunde una gestión previa con el acto que jurídicamente estructura el cobro coactivo.'},
      {type:'checkpoint',questionId:'q-persuasivo-naturaleza-01'},
      {type:'checkpoint',questionId:'q-persuasivo-naturaleza-02'},
      {type:'sources',sourceIds:['concepto-cobro-persuasivo-4229-2026','estatuto-tributario','proc-inicio-cobro-0269']}
    ]
  },
  {
    id:'m12-l5', moduleId:'m12', order:5, title:'Mapa de excepciones al mandamiento: primero clasifica la defensa', subtitle:'Pago, acuerdo, ejecutoria, demanda, prescripción y título no son argumentos intercambiables.', durationMinutes:18, skillIds:['cobro-coactivo','excepciones','mandamiento-pago'], status:'published',
    blocks:[
      {type:'lead',text:'El artículo 831 del Estatuto Tributario contiene un catálogo específico de excepciones contra el mandamiento de pago. En PJS, el reto suele estar en reconocer qué hecho del caso encaja —o no encaja— en una causal.'},
      {type:'comparison',title:'Catálogo de estudio',columns:['Hecho central','Excepción a considerar'],rows:[['La obligación ya fue satisfecha','Pago efectivo'],['Existe facilidad o acuerdo vigente','Existencia de acuerdo de pago'],['El acto base aún no está ejecutoriado','Falta de ejecutoria del título'],['El título perdió ejecutoria por decisión competente','Pérdida de ejecutoria'],['Se interpuso la demanda contemplada por la norma','Interposición de demanda'],['Se cumplió el término legal de cobro sin efecto que lo impida','Prescripción de la acción de cobro'],['No existe título o actuó funcionario incompetente','Falta de título / incompetencia']]},
      {type:'rule',title:'Deudores solidarios',text:'El parágrafo del artículo 831 contempla además defensas específicas relacionadas con la calidad de deudor solidario y la indebida tasación del monto de la deuda.'},
      {type:'trap',text:'No conviertas cualquier inconformidad con el impuesto en una excepción de cobro. La etapa coactiva no reabre indiscriminadamente discusiones que corresponden a la determinación de la obligación.'},
      {type:'checkpoint',questionId:'q-excepciones-mapa-01'},
      {type:'checkpoint',questionId:'q-excepciones-mapa-02'},
      {type:'checkpoint',questionId:'q-excepciones-mapa-03'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m12-l6', moduleId:'m12', order:6, title:'Trámite, recursos e irregularidades: no todo acto admite impugnación', subtitle:'Distingue actuaciones de trámite, decisiones definitivas y mecanismos expresamente previstos.', durationMinutes:17, skillIds:['cobro-coactivo','recursos','debido-proceso'], status:'published',
    blocks:[
      {type:'lead',text:'El procedimiento de cobro tiene reglas propias. El artículo 833-1 establece que las actuaciones de trámite no admiten recurso, salvo los recursos expresamente señalados para actuaciones definitivas.'},
      {type:'steps',title:'Secuencia de análisis',items:['Identifica qué actuación se profirió.','Determina si es de trámite o definitiva.','Busca si el procedimiento señala expresamente recurso.','Verifica término y legitimación antes de asumir que procede.','Si existe una irregularidad procesal, identifica si debe subsanarse antes de la actuación que aprueba el remate.']},
      {type:'rule',title:'Excepciones probadas cambian el curso',text:'Cuando prospera una excepción, la decisión debe producir el efecto que corresponda sobre la obligación o el procedimiento; no tendría sentido ordenar seguir adelante ignorando una defensa probada.'},
      {type:'checkpoint',questionId:'q-recursos-cobro-01'},
      {type:'checkpoint',questionId:'q-recursos-cobro-02'},
      {type:'sources',sourceIds:['estatuto-tributario']}
    ]
  },
  {
    id:'m14-l7', moduleId:'m14', order:7, title:'Inicio concursal: llegar con la acreencia depurada', subtitle:'La defensa del crédito fiscal empieza antes de presentar una actuación al proceso colectivo.', durationMinutes:16, skillIds:['procesos-concursales','calidad-datos','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0431 inicia con la noticia de un proceso concursal y busca garantizar información veraz para una intervención eficiente de la DIAN. El primer error sería llegar al concurso con saldos que nadie ha depurado.'},
      {type:'steps',title:'Preparación mínima',items:['Confirmar proceso concursal, autoridad y etapa.','Revisar todas las obligaciones y nuevas obligaciones que aparezcan.','Corregir desajustes de saldos, declaraciones o recibos antes de sostener una cifra.','Identificar deudores solidarios, subsidiarios u otros terceros cuando corresponda.','Conformar y conservar el expediente con trazabilidad.','Intervenir oportunamente en defensa del crédito fiscal.']},
      {type:'rule',title:'El concurso no elimina la calidad del dato',text:'La obligación de depurar información sigue vigente dentro del proceso colectivo. Una cifra incorrecta puede perjudicar reconocimiento, graduación, objeciones o seguimiento del crédito.'},
      {type:'checkpoint',questionId:'q-concursal-inicio-01'},
      {type:'checkpoint',questionId:'q-concursal-inicio-02'},
      {type:'sources',sourceIds:['proc-inicio-concursales-0431','proc-reorganizacion-0273','ley-1116-2006']}
    ]
  },
  {
    id:'m16-l10', moduleId:'m16', order:10, title:'Matriz de términos de devolución: primero identifica la ruta', subtitle:'15, 20, 30 o 50 días pueden ser correctos en escenarios distintos.', durationMinutes:18, skillIds:['devoluciones','terminos','verificacion'], status:'published',
    blocks:[
      {type:'lead',text:'La información oficial de trámites DIAN muestra que el término para devolver no se responde con un único número: depende de la clase de solicitud y de condiciones como devolución automática o garantía.'},
      {type:'comparison',title:'Términos que debes diferenciar',columns:['Escenario','Término informado por DIAN'],rows:[['Devolución automática cuando se cumplen sus requisitos','15 días'],['Solicitud con garantía en los eventos regulados','20 días'],['Determinados responsables/productores u OEA contemplados por la norma','30 días'],['Regla general para los demás casos de saldos a favor de renta/IVA','50 días']]},
      {type:'rule',title:'Oportunidad de solicitar ≠ término para devolver',text:'El plazo del solicitante para presentar una solicitud y el plazo de la administración para resolver/efectuar la devolución son relojes jurídicos diferentes.'},
      {type:'tip',title:'Pago en exceso y pago de lo no debido',text:'La propia DIAN informa rutas y términos de solicitud que no deben equipararse automáticamente al plazo de dos años de los saldos a favor declarados. Siempre clasifica el origen antes de contar.'},
      {type:'checkpoint',questionId:'q-dev-terminos-matriz-01'},
      {type:'checkpoint',questionId:'q-dev-terminos-matriz-02'},
      {type:'checkpoint',questionId:'q-dev-terminos-matriz-03'},
      {type:'sources',sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario','decreto-1625-2016']}
    ]
  }

  ,{
    id:'m6-l8', moduleId:'m6', order:8, title:'Normalización de saldos: que el sistema refleje la obligación real', subtitle:'Antes de cobrar, devolver o certificar, el saldo debe representar una realidad jurídica y contable verificable.', durationMinutes:18, skillIds:['normalizacion-saldos','estado-cuenta','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0372 busca establecer el saldo real de las obligaciones tributarias y depurar la cartera. La normalización no es “borrar” valores: identifica obligaciones exigibles y soporta ajustes o actos administrativos que hagan coincidir los sistemas con la realidad jurídica.'},
      {type:'process',title:'Del dato al saldo real',nodes:[{id:'n1',label:'Detectar diferencia',hint:'Deuda vencida, pago, acto o saldo que no coincide.'},{id:'n2',label:'Revisar expediente y NIT',hint:'No trabajar una obligación aislada sin contexto.'},{id:'n3',label:'Clasificar causa',hint:'Pago, acto, prescripción, remisión, inconsistencia o ajuste.'},{id:'n4',label:'Usar la ruta correcta',hint:'Corrección, actualización, normalización o extinción.'},{id:'n5',label:'Registrar evidencia',hint:'La trazabilidad hace parte del resultado.'}]},
      {type:'rule',title:'No dupliques actos ya existentes',text:'Si una obligación ya fue objeto de una resolución de prescripción o remisibilidad generada por el aplicativo correspondiente, el procedimiento indica procurar que ese acto afecte la Obligación Financiera en lugar de generar otro acto idéntico.'},
      {type:'tip',title:'Revisión integral',text:'PR-COT-0372 exige revisar el ciento por ciento de las obligaciones del NIT cargadas para los casos sometidos a normalización. El expediente se entiende como una realidad conectada, no como un único renglón.'},
      {type:'checkpoint',questionId:'q-normalizacion-of-01'},
      {type:'checkpoint',questionId:'q-normalizacion-of-02'},
      {type:'checkpoint',questionId:'q-normalizacion-of-03'},
      {type:'checkpoint',questionId:'q-normalizacion-of-04'},
      {type:'sources',sourceIds:['proc-normalizacion-obligacion-0372','proc-correccion-inconsistencias-0033','proc-extincion-0330']}
    ]
  },
  {
    id:'m7-l7', moduleId:'m7', order:7, title:'Conciliación EAR: el dinero, el reporte y el Tesoro deben contar la misma historia', subtitle:'Una diferencia detectada no se convierte automáticamente en sanción: primero hay que conciliarla y documentarla.', durationMinutes:17, skillIds:['ear','conciliacion','recaudo'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0373 cruza información reportada por las Entidades Autorizadas para Recaudar con los insumos de consignaciones y recaudo. El objetivo operativo es explicar diferencias y obtener información consistente antes de concluir si existe un incumplimiento sancionable.'},
      {type:'comparison',title:'Insumos que deben conversar',columns:['Insumo','Qué ayuda a verificar'],rows:[['Informe diario de recaudo','Valor global reportado inicialmente por la EAR.'],['Informe de consignaciones al Tesoro','Traslado efectivo de recursos al Tesoro Nacional.'],['Formatos/archivos transmitidos','Detalle y especificaciones técnicas del recaudo.'],['Índice de consignación','Oportunidad para trasladar recursos y, en ciertos eventos, para corregir diferencias.']]},
      {type:'rule',title:'Conciliar antes de sancionar',text:'La auditoría y el régimen sancionatorio siguen existiendo, pero una diferencia de información debe identificarse, verificarse y soportarse. El procedimiento de conciliación permite pedir correcciones y explicaciones antes de escalar la conclusión.'},
      {type:'checkpoint',questionId:'q-ear-conciliacion-01'},
      {type:'checkpoint',questionId:'q-ear-conciliacion-02'},
      {type:'checkpoint',questionId:'q-ear-conciliacion-03'},
      {type:'checkpoint',questionId:'q-ear-conciliacion-04'},
      {type:'sources',sourceIds:['proc-conciliacion-ear-0373','proc-indice-consignacion-0029','proc-auditoria-ear-0032','proc-sanciones-ear-0030']}
    ]
  },
  {
    id:'m8-l6', moduleId:'m8', order:6, title:'Después del envío: medir cumplimiento y efectividad', subtitle:'Una campaña no termina cuando se envía la comunicación; termina cuando puedes demostrar qué cambió.', durationMinutes:16, skillIds:['control-extensivo','seguimiento','efectividad'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0382 exige seguimiento a la acción de gestión masiva. Después del envío, el área consulta los sistemas para establecer el grado de cumplimiento de los seleccionados y documenta resultados de la gestión y de la efectividad.'},
      {type:'comparison',title:'Actividad no es resultado',columns:['Dato','Qué significa'],rows:[['10.000 comunicaciones enviadas','Volumen de ejecución.'],['Declaraciones presentadas o corregidas','Respuesta de cumplimiento.'],['Pagos realizados','Resultado sustancial asociado a la acción.'],['Responsabilidades actualizadas','Corrección de situación formal.'],['Indicadores sobre seleccionados','Medida de efectividad frente al objetivo.']]},
      {type:'tip',title:'Pregunta PJS típica',text:'Si el caso pregunta si la campaña “funcionó”, no respondas solo con el número de mensajes enviados. Busca evidencia del comportamiento posterior de los seleccionados y compárala con el objetivo definido.'},
      {type:'checkpoint',questionId:'q-control-seguimiento-01'},
      {type:'checkpoint',questionId:'q-control-seguimiento-02'},
      {type:'checkpoint',questionId:'q-control-seguimiento-03'},
      {type:'checkpoint',questionId:'q-control-seguimiento-04'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382']}
    ]
  },
  {
    id:'m9-l7', moduleId:'m9', order:7, title:'Cartera real: normalizar no es extinguir', subtitle:'Depurar el saldo corrige la representación; extinguir determina que la obligación ya no debe seguir en cobro.', durationMinutes:17, skillIds:['cartera','normalizacion-saldos','extincion'], status:'published',
    blocks:[
      {type:'comparison',title:'Tres decisiones distintas',columns:['Hallazgo','Ruta conceptual'],rows:[['El sistema muestra un valor irreal','Normalizar/corregir el saldo con soporte.'],['Existe una causal jurídica de extinción','Aplicar el procedimiento de extinción correspondiente.'],['La acción de cobro prescribió','Reconocer el efecto jurídico conforme a la norma; no confundirlo con un simple ajuste informático.']]},
      {type:'rule',title:'Calidad de cartera',text:'La cartera útil para gestión debe representar obligaciones reales y exigibles. Mantener saldos irreales distorsiona priorización, metas de recuperación y decisiones de cobro.'},
      {type:'trap',title:'Saldo cero no prueba por sí solo la causa',text:'Un aplicativo puede reflejar cero por múltiples razones. El expediente debe permitir determinar si hubo pago, compensación, acto administrativo, prescripción, remisión u otra forma válida de extinción o ajuste.'},
      {type:'checkpoint',questionId:'q-cartera-real-01'},
      {type:'checkpoint',questionId:'q-cartera-real-02'},
      {type:'checkpoint',questionId:'q-cartera-real-03'},
      {type:'checkpoint',questionId:'q-cartera-real-04'},
      {type:'sources',sourceIds:['proc-normalizacion-obligacion-0372','proc-extincion-0330','estatuto-tributario']}
    ]
  },
  {
    id:'m10-l7', moduleId:'m10', order:7, title:'Persuasivo penalizable: primero verifica si la obligación puede escalar', subtitle:'No toda obligación de retención o recaudo impaga se remite mecánicamente a la vía penal.', durationMinutes:18, skillIds:['cobro-persuasivo','agente-retenedor','penalizable'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0346 incorpora una verificación previa para determinar si una obligación puede ser denunciada por omisión del agente retenedor, autorretenedor o recaudador. La gestión exige revisar causales que limitan la responsabilidad penal y dejar soporte de la conclusión.'},
      {type:'steps',title:'Antes de escalar',items:['Identificar la obligación y su calidad de retenida, autorretenida o recaudada.','Revisar si existen situaciones que impiden o condicionan la denuncia, como solicitudes de compensación pendientes o facilidades vigentes no incumplidas.','Registrar el resultado de la revisión.','Solo si corresponde, expedir la gestión persuasiva penalizable y continuar la ruta institucional.']},
      {type:'rule',title:'Pago o compensación y proceso penal',text:'La doctrina DIAN sobre el artículo 402 del Código Penal recoge que la extinción por pago o compensación de las sumas adeudadas, con sus intereses, puede producir efectos dentro del proceso penal, sin borrar por ello las sanciones administrativas que correspondan.'},
      {type:'checkpoint',questionId:'q-penalizable-01'},
      {type:'checkpoint',questionId:'q-penalizable-02'},
      {type:'checkpoint',questionId:'q-penalizable-03'},
      {type:'checkpoint',questionId:'q-penalizable-04'},
      {type:'sources',sourceIds:['proc-persuasivo-penalizable-0346','concepto-omision-20039-2025','estatuto-tributario']}
    ]
  },
  {
    id:'m13-l9', moduleId:'m13', order:9, title:'Depósitos judiciales: el dinero inmovilizado también exige trazabilidad', subtitle:'Aplicar, convertir, fraccionar o endosar un depósito son actuaciones distintas dentro de la ejecución.', durationMinutes:18, skillIds:['depositos-judiciales','medidas-cautelares','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0275 regula la gestión de depósitos judiciales constituidos a favor de la Nación UAE DIAN. El procedimiento inicia con su consulta en el portal del Banco Agrario y termina con su aplicación, fraccionamiento, conversión o endoso, además de los reportes correspondientes.'},
      {type:'comparison',title:'No todo depósito termina igual',columns:['Actuación','Idea funcional'],rows:[['Aplicación','Usar el depósito frente a la obligación que jurídicamente corresponda.'],['Fraccionamiento','Separar el depósito cuando la gestión exige distribuir su valor según el procedimiento.'],['Conversión','Transformar la modalidad o destino del depósito conforme a la actuación.'],['Endoso','Transferir el depósito cuando el procedimiento lo ordena, por ejemplo para postores no favorecidos en remate.']]},
      {type:'rule',title:'Expediente físico y virtual deben coincidir',text:'El procedimiento exige que las actuaciones resultantes obren en el expediente y que los folios y consecutivos físicos coincidan con los del expediente en SIPAC, preservando trazabilidad.'},
      {type:'trap',text:'Un depósito judicial no es una caja genérica. El procedimiento prohíbe usarlo para cancelar obligaciones de terceros y no permite emplearlo para pagar auxiliares de la justicia.'},
      {type:'checkpoint',questionId:'q-deposito-01'},
      {type:'checkpoint',questionId:'q-deposito-02'},
      {type:'checkpoint',questionId:'q-deposito-03'},
      {type:'checkpoint',questionId:'q-deposito-04'},
      {type:'sources',sourceIds:['proc-depositos-0275','proc-remate-0391','proc-liquidacion-credito-0390']}
    ]
  },
  {
    id:'m14-l8', moduleId:'m14', order:8, title:'Liquidación judicial: defender el crédito dentro de un proceso colectivo', subtitle:'La DIAN deja de actuar como si todo fuera un expediente coactivo aislado y pasa a intervenir en el escenario concursal.', durationMinutes:19, skillIds:['procesos-concursales','liquidacion-judicial','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0368 tiene como objetivo intervenir en liquidación judicial realizando las actuaciones necesarias para defender el crédito fiscal. El procedimiento parte del seguimiento a la noticia de apertura y finaliza encaminando el expediente hacia adjudicación o extinción.'},
      {type:'steps',title:'Qué no puede faltar',items:['Detectar oportunamente el inicio del proceso.','Revisar y depurar la acreencia.','Identificar responsables solidarios, subsidiarios u otros terceros cuando corresponda.','Presentar y defender el crédito dentro del proceso colectivo.','Coordinar las decisiones posteriores con adjudicación o extinción.']},
      {type:'concursal-simulator',title:'Simulador de intervención concursal',text:'Decide qué hacer cuando la acreencia tiene inconsistencias, aparece una objeción o se propone adjudicar un bien.'},
      {type:'checkpoint',questionId:'q-liquidacion-judicial-01'},
      {type:'checkpoint',questionId:'q-liquidacion-judicial-02'},
      {type:'checkpoint',questionId:'q-liquidacion-judicial-03'},
      {type:'checkpoint',questionId:'q-liquidacion-judicial-04'},
      {type:'sources',sourceIds:['proc-liquidacion-judicial-0368','proc-inicio-concursales-0431','ley-1116-2006']}
    ]
  },
  {
    id:'m14-l9', moduleId:'m14', order:9, title:'Adjudicación Ley 1116: recibir un bien también es una decisión de cartera', subtitle:'La acreencia puede satisfacerse mediante bienes, pero la DIAN debe evaluar inventario, titularidad, prelación y viabilidad.', durationMinutes:20, skillIds:['procesos-concursales','adjudicacion','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0369 regula la intervención en adjudicación bajo la Ley 1116. El procedimiento revisa inventarios, gastos, objeciones y la viabilidad de bienes antes de que la adjudicación se convierta en una forma de pago o extinción.'},
      {type:'comparison',title:'Preguntas antes de aceptar una adjudicación',columns:['Dimensión','Qué revisar'],rows:[['Inventario','Que estén incluidos los bienes relevantes y la información sea coherente.'],['Crédito fiscal','Que reconocimiento y prelación no resulten afectados sin defensa.'],['Bien propuesto','Titularidad, legalidad, comerciabilidad y costo-beneficio.'],['Cierre','Que la adjudicación se refleje correctamente en la extinción o saldo remanente.']]},
      {type:'rule',title:'Objeciones',text:'Si el inventario, las actualizaciones de gastos u objeciones de terceros afectan el crédito fiscal, el procedimiento contempla intervenir, soportar la posición y utilizar los mecanismos del proceso dentro de la oportunidad correspondiente.'},
      {type:'checkpoint',questionId:'q-adjudicacion-01'},
      {type:'checkpoint',questionId:'q-adjudicacion-02'},
      {type:'checkpoint',questionId:'q-adjudicacion-03'},
      {type:'checkpoint',questionId:'q-adjudicacion-04'},
      {type:'sources',sourceIds:['proc-adjudicacion-0369','ley-1116-2006','proc-extincion-0330']}
    ]
  },
  {
    id:'m14-l10', moduleId:'m14', order:10, title:'Liquidación forzosa administrativa: reclamar, verificar y seguir hasta el cierre', subtitle:'No es lo mismo que la liquidación judicial, aunque ambas exigen defensa activa del crédito fiscal.', durationMinutes:20, skillIds:['procesos-concursales','liquidacion-forzosa','credito-fiscal'], status:'published',
    blocks:[
      {type:'lead',text:'PR-COT-0430 regula la intervención en liquidación forzosa administrativa. Inicia con la presentación de reclamaciones y contempla verificar decisiones del liquidador, objetar cuando proceda, seguir planes de pago y gestionar bienes o reservas hasta el cierre.'},
      {type:'comparison',title:'Liquidación judicial vs forzosa administrativa',columns:['Aspecto','Liquidación judicial','Liquidación forzosa administrativa'],rows:[['Marco operativo','Proceso judicial de insolvencia bajo su régimen aplicable.','Proceso concursal administrativo de entidades sometidas al régimen correspondiente.'],['Representación DIAN','Defensa del crédito dentro del proceso colectivo.','Defensa del crédito frente al liquidador y actos del proceso administrativo.'],['Finalidad de estudio','Reconocimiento, graduación, liquidación/adjudicación.','Reclamaciones, recursos, planes de pago, bienes y cierre.']]},
      {type:'steps',title:'Secuencia de pensamiento',items:['Presentar oportunamente la reclamación fiscal con soporte.','Revisar reclamaciones y actos que puedan afectar el crédito.','Objetar o recurrir cuando el marco lo permita y exista afectación.','Hacer seguimiento a pagos, reservas o bienes entregados.','Al cierre, reflejar correctamente pago, adjudicación o extinción.']},
      {type:'checkpoint',questionId:'q-liquidacion-forzosa-01'},
      {type:'checkpoint',questionId:'q-liquidacion-forzosa-02'},
      {type:'checkpoint',questionId:'q-liquidacion-forzosa-03'},
      {type:'checkpoint',questionId:'q-liquidacion-forzosa-04'},
      {type:'sources',sourceIds:['proc-liquidacion-forzosa-0430','proc-inicio-concursales-0431','proc-extincion-0330']}
    ]
  },
  {
    id:'m16-l11', moduleId:'m16', order:11, title:'Verificación e investigación previa: dos controles, dos propósitos', subtitle:'La revisión del trámite de devolución puede conducir a fiscalización sin que ambos procesos sean lo mismo.', durationMinutes:18, skillIds:['devoluciones','verificacion','investigacion-previa'], status:'published',
    blocks:[
      {type:'lead',text:'La doctrina DIAN distingue la verificación propia del trámite de devolución —orientada a comprobar la existencia y consistencia del saldo o pago— de la investigación previa prevista en el artículo 857-1, que corresponde al ámbito de fiscalización cuando aparecen los presupuestos legales.'},
      {type:'comparison',title:'No mezcles controles',columns:['Control','Pregunta central'],rows:[['Verificación de devolución','¿Existen y están soportados los elementos que dan lugar al saldo o pago reclamado?'],['Investigación previa','¿Existen hechos que justifican que fiscalización investigue antes de devolver en los términos del artículo 857-1?']]},
      {type:'rule',title:'Una puede conducir a la otra',text:'Que la verificación detecte una inconsistencia relevante puede originar la remisión a fiscalización. Eso no convierte automáticamente toda solicitud en investigación previa ni permite omitir la verificación ordinaria.'},
      {type:'checkpoint',questionId:'q-verificacion-investigacion-01'},
      {type:'checkpoint',questionId:'q-verificacion-investigacion-02'},
      {type:'checkpoint',questionId:'q-verificacion-investigacion-03'},
      {type:'checkpoint',questionId:'q-verificacion-investigacion-04'},
      {type:'sources',sourceIds:['concepto-devoluciones-16116-2025','estatuto-tributario','proc-devoluciones-sie-0124','dian-devoluciones-servicio-2026']}
    ]
  }

  ,{
    id:'m2-l6', moduleId:'m2', order:6, title:'MIPG por versiones: siete dimensiones antes del corte de junio de 2026', subtitle:'La versión 6.1 (febrero) tiene siete; la versión 7 (agosto) reorganizó en seis.', durationMinutes:18, skillIds:['mipg','gestion-publica','valor-publico'], status:'published',
    blocks:[
      {type:'lead',text:'CORRECCIÓN DE VIGENCIA. Según el Manual MIPG 6.1 de febrero de 2026, anterior al corte normativo anunciado en la GOA DIAN (19/06/2026), el modelo opera con SIETE dimensiones. La versión 7, publicada después, reorganiza el modelo en SEIS. La versión del portal actual no debe aplicarse hacia atrás.'},
      {type:'comparison',title:'Las siete dimensiones del Manual 6.1 (febrero de 2026)',columns:['Dimensión','Aplicación'],rows:[['1. Talento Humano','Capacidades y ética de servidores.'],['2. Direccionamiento Estratégico y Planeación','Objetivos, recursos y prioridades.'],['3. Gestión con Valores para Resultados','Ejecución de procesos y servicio dentro de la legalidad.'],['4. Evaluación de Resultados','Medición de logros y ajustes.'],['5. Información y Comunicación','Flujos de información confiable y transparencia.'],['6. Gestión del Conocimiento y la Innovación','Aprendizaje institucional y mejora.'],['7. Control Interno','MECI, riesgos y aseguramiento; no solo labor de auditores.']]},
      {type:'comparison',title:'Cuidado con el anacronismo',columns:['Versión','Número de dimensiones','Uso en este curso'],rows:[['6.1 · febrero de 2026','7','Prioridad para corte indicado en GOA'],['7 · agosto de 2026','6','Conocer como cambio posterior; no proyectar hacia junio']]},
      {type:'rule',title:'El modelo no sustituye el régimen especial',text:'MIPG orienta la gestión: no modifica competencias, plazos, actos ni medidas del Estatuto Tributario o del CPACA.'},
      {type:'example',title:'Caso de Gestor II',text:'Si una oficina corrige 300 saldos pero no aborda sus causas, la ejecución individual puede complementarse con evaluación de resultados, aprendizaje institucional y control interno, sin publicar datos protegidos.'},
      {type:'tip',text:'Continúa con los capítulos prácticos sobre MIPG en este módulo: versión comparada y caso de control de cartera.'},
      {type:'checkpoint',questionId:'q-mipg-v6-01'},
      {type:'checkpoint',questionId:'q-mipg-v6-02'},
      {type:'checkpoint',questionId:'q-mipg-v6-03'},
      {type:'checkpoint',questionId:'q-mipg-v6-04'},
      {type:'sources',sourceIds:['mipg-manual-6-1-2026','mipg-manual-v7-2026','goa-cnsc-2676-2026']}
    ]
  },
  {
    id:'m17-l6', moduleId:'m17', order:6, title:'Gestión de accesos en la vida real: el permiso también caduca', subtitle:'Asignar un rol es solo el comienzo; hay que revisar necesidad, vigencia, privilegios y trazabilidad.', durationMinutes:17, skillIds:['seguridad-informacion','control-acceso','permisos','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'La auditoría DIAN AGA 2025-002 revisó activación e inactivación de roles, accesos privilegiados, terceros, VPN, cuentas institucionales y controles sobre sistemas que soportan procesos misionales. Sus hallazgos muestran por qué la gestión de accesos es un ciclo y no una autorización permanente.'},
      {type:'process',title:'Ciclo mínimo de un acceso',nodes:[{id:'a1',label:'Necesidad funcional'},{id:'a2',label:'Autorización y rol mínimo'},{id:'a3',label:'Activación trazable'},{id:'a4',label:'Uso y monitoreo'},{id:'a5',label:'Revisión de vigencia'},{id:'a6',label:'Inactivación / ajuste'}]},
      {type:'rule',title:'Más privilegio exige más control',text:'La auditoría evaluó expresamente derechos de acceso privilegiado y la oportunidad de inactivar usuarios o roles cuando cambia la relación, la situación administrativa o la necesidad funcional.'},
      {type:'trap',title:'Error típico',text:'Conservar un acceso “por si acaso” no es una medida prudente. Si desapareció la necesidad funcional, aumenta innecesariamente la superficie de riesgo y deteriora la trazabilidad.'},
      {type:'checkpoint',questionId:'q-access-lifecycle-01'},
      {type:'checkpoint',questionId:'q-access-lifecycle-02'},
      {type:'checkpoint',questionId:'q-access-lifecycle-03'},
      {type:'checkpoint',questionId:'q-access-lifecycle-04'},
      {type:'sources',sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian','merf-ct-cr-3007']}
    ]
  }

  ,{
    id:'m6-l9', moduleId:'m6', order:9, title:'Antes de cobrar, el saldo debe representar la realidad', subtitle:'Recaudo, corrección y cartera se conectan en un mismo expediente.', durationMinutes:16, skillIds:['estado-cuenta','normalizacion-saldos','calidad-datos'], status:'published',
    blocks:[
      {type:'lead',text:'Una cifra visible en un aplicativo no basta, por sí sola, para concluir que esa es la obligación real y exigible. La función de CT-CR-3007 exige depurar el estado de cuenta y responder por la calidad de la información antes de normalizar o cobrar.'},
      {type:'comparison',title:'Tres preguntas antes de escalar a cobro',columns:['Pregunta','Qué debes verificar'],rows:[['¿Existe la obligación?','Declaración, acto, recibos y soportes que expliquen su origen.'],['¿Cuál es el saldo real?','Pagos, compensaciones, correcciones, imputaciones y ajustes pendientes.'],['¿Es exigible?','Firmeza, título, términos y eventos que afecten la acción de cobro.']]},
      {type:'rule',title:'Normalizar no es “borrar”',text:'PR-COT-0276 busca información veraz y confiable: corrige inconsistencias, suprime saldos irreales cuando procede y reclasifica obligaciones para que la cartera refleje la realidad.'},
      {type:'process',title:'Cadena de decisión',nodes:[{id:'a',label:'Detectar inconsistencia',hint:'No continuar mecánicamente.'},{id:'b',label:'Contrastar soportes',hint:'Declaraciones, recibos, actos y registros.'},{id:'c',label:'Corregir / normalizar',hint:'Usar la ruta institucional aplicable.'},{id:'d',label:'Recalcular realidad fiscal',hint:'Saldo real y situación jurídica.'},{id:'e',label:'Definir siguiente actuación',hint:'Cobro, extinción, certificación u otra ruta.'}]},
      {type:'trap',title:'Error típico PJS',text:'Elegir la actuación “más fuerte” antes de verificar la realidad del saldo. En este empleo, calidad de información y cobro no son mundos separados.'},
      {type:'checkpoint',questionId:'q-int-account-01'},
      {type:'checkpoint',questionId:'q-int-account-02'},
      {type:'sources',sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-obligacion-0372','proc-normalizacion-ccc-0276','proc-inicio-cobro-0269','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m7-l8', moduleId:'m7', order:8, title:'Conciliar una EAR: información y recursos deben contar la misma historia', subtitle:'Transmitir datos no equivale a consignar recursos, y una diferencia exige evidencia antes de sancionar.', durationMinutes:15, skillIds:['ear','conciliacion-ear','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'El ciclo de una Entidad Autorizada para Recaudar tiene varias capas: recepción, transmisión de información, consignación de recursos, conciliación, auditoría y —cuando jurídicamente proceda— sanción.'},
      {type:'comparison',title:'No confundas estas capas',columns:['Capa','Pregunta de control'],rows:[['Información','¿Qué documento o archivo reportó la EAR y cuándo?'],['Recursos','¿Qué valor fue efectivamente consignado y en qué oportunidad?'],['Conciliación','¿Los reportes y movimientos financieros corresponden?'],['Auditoría','¿Qué evidencia explica una diferencia o incumplimiento?'],['Sanción','¿Se configura la conducta y se agotó el trámite aplicable?']]},
      {type:'rule',title:'Una diferencia es un hallazgo, no una condena',text:'PR-COT-0373 y los procedimientos de auditoría/sanción obligan a reconstruir la información y soportar el resultado. La existencia de una diferencia inicial no reemplaza la verificación ni el debido proceso.'},
      {type:'checkpoint',questionId:'q-int-ear-01'},
      {type:'checkpoint',questionId:'q-int-ear-02'},
      {type:'sources',sourceIds:['proc-conciliacion-ear-0373','proc-auditoria-ear-0032','proc-sanciones-ear-0030','proc-recepcion-ear-0031','proc-indice-consignacion-0029']}
    ]
  },
  {
    id:'m8-l7', moduleId:'m8', order:7, title:'Una campaña masiva empieza por un universo confiable', subtitle:'Cobertura sin calidad puede multiplicar errores a miles de contribuyentes.', durationMinutes:14, skillIds:['control-extensivo','calidad-datos','servicio-ciudadano'], status:'published',
    blocks:[
      {type:'lead',text:'El control extensivo busca cumplimiento voluntario y oportuno a gran escala. Precisamente por su alcance, un dato inconsistente puede convertirse en miles de comunicaciones equivocadas.'},
      {type:'comparison',title:'Principios operativos del control extensivo',columns:['Principio','Cómo se ve en una campaña'],rows:[['Objetividad','Seleccionar con hechos y datos verificables.'],['Imparcialidad','No sesgar la selección para favorecer o perjudicar.'],['Confiabilidad','Depurar la información antes de seleccionar casos.'],['Confidencialidad','Proteger los casos y datos de control.'],['Cercanía','Orientar al cumplimiento de forma práctica y oportuna.'],['Integralidad','Mirar conjuntamente obligaciones formales y sustanciales.']]},
      {type:'rule',title:'Actividad no es resultado',text:'El número de mensajes enviados mide cobertura operativa, pero no demuestra por sí solo cumplimiento. El procedimiento termina con un informe de resultado de la acción de control.'},
      {type:'checkpoint',questionId:'q-int-control-01'},
      {type:'checkpoint',questionId:'q-int-control-04'},
      {type:'sources',sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007']}
    ]
  },
  {
    id:'m10-l8', moduleId:'m10', order:8, title:'Facilidad vigente + saldo a favor: dos procedimientos se encuentran', subtitle:'La facilidad organiza el pago, pero no extingue la obligación.', durationMinutes:16, skillIds:['facilidad-pago','compensacion','devoluciones'], status:'published',
    blocks:[
      {type:'lead',text:'Los casos reales no llegan separados por capítulos. Un contribuyente puede tener una facilidad vigente y, al mismo tiempo, una solicitud de devolución o un saldo reconocido.'},
      {type:'rule',title:'La facilidad sigue siendo deuda hasta su extinción',text:'PR-COT-0272 controla la facilidad desde su concesión hasta el cumplimiento o incumplimiento. Mientras esté vigente, el proceso coactivo se suspende en los términos legales, pero la obligación no desaparece.'},
      {type:'rule',title:'Saldo reconocido durante la facilidad',text:'El procedimiento institucional prevé que, cuando el beneficiario de una facilidad solicite un saldo a favor, antes de autorizar la devolución el valor reconocido se aplique a las obligaciones objeto de la facilidad y se modifique esta cuando corresponda.'},
      {type:'process',title:'Orden mental para el caso',nodes:[{id:'a',label:'Verificar facilidad',hint:'Obligaciones, vigencia y estado.'},{id:'b',label:'Determinar saldo reconocido',hint:'No asumir procedencia por mera solicitud.'},{id:'c',label:'Aplicar reglas de compensación / imputación',hint:'Según el supuesto legal y procedimental.'},{id:'d',label:'Actualizar facilidad',hint:'Mantener coherencia entre deuda, cuotas y saldo.'},{id:'e',label:'Definir pago o devolución remanente',hint:'Solo después de las compensaciones procedentes.'}]},
      {type:'checkpoint',questionId:'q-int-facrefund-01'},
      {type:'checkpoint',questionId:'q-int-facrefund-02'},
      {type:'sources',sourceIds:['proc-facilidades-0272','estatuto-tributario','dian-facilidades-faq-2026','dian-devoluciones-servicio-2026']}
    ]
  },
  {
    id:'m16-l12', moduleId:'m16', order:12, title:'Sustanciar una devolución: verificar, documentar y escalar cuando corresponda', subtitle:'La alerta del sistema no sustituye el análisis del funcionario.', durationMinutes:17, skillIds:['devoluciones','verificacion','investigacion-previa'], status:'published',
    blocks:[
      {type:'lead',text:'La guía CT-COT-0038 versión 10 (2026) unifica criterios de sustanciación y recuerda que el SIE genera marcas o alertas, pero el funcionario debe revisarlas, documentar su conclusión y conservar los soportes.'},
      {type:'comparison',title:'Tres planos que suelen confundirse',columns:['Plano','Función'],rows:[['Validación / marcas del SIE','Detectar posibles incumplimientos o puntos que requieren revisión.'],['Verificación del trámite','Comprobar requisitos, existencia de retenciones, pagos, impuestos descontables y demás elementos pertinentes.'],['Investigación previa de fiscalización','Profundizar cuando el caso es remitido bajo los supuestos del artículo 857-1 y los criterios aplicables.']]},
      {type:'rule',title:'Inclusión forzosa no es decisión individual improvisada',text:'La guía 2026 indica que las seccionales definen factores de riesgo y que la propuesta de traslado a Fiscalización se somete a la reunión de evaluación y control, con criterios documentados y actualizados.'},
      {type:'tip',text:'En un PJS, una marca de riesgo no significa “rechazar de inmediato”. Primero identifica qué validación debe comprobarse, quién tiene competencia y cuál es la ruta procedimental.'},
      {type:'checkpoint',questionId:'q-int-refund-01'},
      {type:'checkpoint',questionId:'q-int-refund-02'},
      {type:'sources',sourceIds:['guia-devoluciones-ct-cot-0038','proc-devoluciones-sie-0124','concepto-devoluciones-16116-2025','estatuto-tributario']}
    ]
  },
  {
    id:'m17-l7', moduleId:'m17', order:7, title:'Mínimo privilegio y baja oportuna: un permiso también tiene ciclo de vida', subtitle:'Dar acceso es una decisión; conservarlo también.', durationMinutes:14, skillIds:['gestion-accesos','seguridad-informacion','trazabilidad'], status:'published',
    blocks:[
      {type:'lead',text:'La función de CT-CR-3007 incluye permisos de acceso e implantación de sistemas corporativos de Recaudación y Administración de Cartera. No es un asunto accesorio: un permiso excesivo o vigente después de terminar una relación puede afectar confidencialidad, integridad y trazabilidad.'},
      {type:'process',title:'Ciclo de un acceso',nodes:[{id:'a',label:'Necesidad',hint:'Qué tarea real debe realizar.'},{id:'b',label:'Autorización',hint:'Quién aprueba y bajo qué rol.'},{id:'c',label:'Mínimo privilegio',hint:'Solo permisos necesarios.'},{id:'d',label:'Uso y monitoreo',hint:'Trazabilidad y revisiones.'},{id:'e',label:'Cambio / retiro',hint:'Ajustar o desactivar oportunamente.'}]},
      {type:'rule',title:'No existe “por si acaso” como justificación permanente',text:'La auditoría AGA 2025-002 revisó activación e inactivación de roles, accesos de terceros y cuentas que seguían activas después de terminar la relación. El control debe acompañar todo el ciclo.'},
      {type:'checkpoint',questionId:'q-int-access-01'},
      {type:'checkpoint',questionId:'q-int-access-02'},
      {type:'sources',sourceIds:['auditoria-accesos-dian-2025','modelo-seguridad-dian','manual-seguridad-dian','merf-ct-cr-3007']}
    ]
  }

]
