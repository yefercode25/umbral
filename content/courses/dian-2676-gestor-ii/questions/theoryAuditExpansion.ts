import type { Question } from '../../../../src/types/course'

type QuestionDraft = Omit<Question, 'verifiedAt'>
const q = (draft: QuestionDraft): Question => ({ ...draft, verifiedAt: '2026-09-13' })

/** Preguntas de refuerzo procedimental, comportamental y transversal de alpha.6. */
export const dianTheoryAuditExpansionQuestions: Question[] = [
  q({
    id:'q-v6a-m8-01', moduleId:'m8', skillIds:['control-extensivo','universo'], type:'pjs', difficulty:3,
    case:'Una campaña pretende requerir a quienes incumplieron una obligación. El universo se construyó mezclando periodos y contiene registros duplicados.',
    stem:'¿Qué debe hacerse antes de lanzar la campaña?',
    options:[
      {id:'a',text:'Enviar primero y depurar después para aumentar cobertura.',rationale:'La cobertura aparente no compensa requerimientos mal dirigidos.'},
      {id:'b',text:'Validar periodo, obligación, identificadores y criterios de inclusión/exclusión para obtener un universo confiable.',rationale:'La calidad del universo condiciona la pertinencia de la campaña.'},
      {id:'c',text:'Eliminar todos los registros que aparezcan más de una vez sin investigar por qué.',rationale:'Un duplicado puede revelar un problema de integración que debe entenderse.'}
    ], correctOptionId:'b',
    explanation:'Control extensivo depende de seleccionar correctamente a quién corresponde gestionar; un universo defectuoso traslada el error a escala masiva.',
    sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6a-m8-02', moduleId:'m8', skillIds:['control-extensivo','efectividad'], type:'single', difficulty:3,
    stem:'¿Qué indicador resulta más informativo que contar únicamente comunicaciones enviadas?',
    options:[
      {id:'a',text:'Número de plantillas disponibles.',rationale:'No muestra cambio de cumplimiento.'},
      {id:'b',text:'Cantidad total de caracteres de los mensajes.',rationale:'No es un resultado de gestión.'},
      {id:'c',text:'Proporción de obligados que regularizan la conducta o situación objetivo después de la gestión, con un universo y periodo definidos.',rationale:'Relaciona la intervención con un resultado de cumplimiento medible.'}
    ], correctOptionId:'c',
    explanation:'Una campaña debe evaluarse por resultados y calidad, no solo por volumen de salidas operativas.',
    sourceIds:['proc-control-extensivo-0382','mipg']
  }),

  q({
    id:'q-v6a-m9-01', moduleId:'m9', skillIds:['cartera','exigibilidad'], type:'pjs', difficulty:3,
    case:'El estado de cuenta muestra un saldo, pero el expediente contiene una novedad pendiente de depuración que podría modificarlo.',
    stem:'¿Cuál es el orden de análisis más seguro?',
    options:[
      {id:'a',text:'Establecer primero realidad y exigibilidad de la obligación; después definir la ruta de cobro que corresponda.',rationale:'Cobrar exige algo más que visualizar un saldo: debe existir una obligación real y exigible.'},
      {id:'b',text:'Iniciar coactivo y revisar la novedad únicamente si el deudor presenta defensa.',rationale:'Traslada al administrado una inconsistencia que la entidad ya conoce.'},
      {id:'c',text:'Eliminar el saldo del sistema sin soporte para evitar riesgos.',rationale:'La depuración también debe ser trazable y procedente.'}
    ], correctOptionId:'a',
    explanation:'El MERF pone expresamente en cabeza del empleo la depuración de realidad y exigibilidad; esas condiciones preceden la decisión de cobro.',
    sourceIds:['merf-ct-cr-3007','proc-normalizacion-obligacion-0372','proc-normalizacion-ccc-0276']
  }),
  q({
    id:'q-v6a-m9-02', moduleId:'m9', skillIds:['prescripcion','cronologia'], type:'pjs', difficulty:4,
    case:'Para resolver un posible problema de prescripción se conocen varias fechas: vencimiento, acto posterior, notificación y una actuación que podría afectar el cómputo.',
    stem:'¿Qué método reduce más el riesgo de error?',
    options:[
      {id:'a',text:'Tomar únicamente la fecha más reciente.',rationale:'La fecha más reciente puede no ser la jurídicamente relevante.'},
      {id:'b',text:'Construir una línea de tiempo, identificar el punto inicial y verificar los hechos que legalmente alteren el cómputo.',rationale:'Prescripción es un problema de regla y cronología; cada fecha debe tener función jurídica.'},
      {id:'c',text:'Contar años calendario sin revisar la naturaleza de los actos.',rationale:'El cómputo no se resuelve con una resta cronológica genérica.'}
    ], correctOptionId:'b',
    explanation:'Antes de calcular, clasifica cada fecha: inicio, actuación relevante y efecto jurídico. No todas las fechas del expediente interrumpen, suspenden o modifican el término.',
    sourceIds:['estatuto-tributario','proc-inicio-cobro-0269']
  }),
  q({
    id:'q-v6a-m9-03', moduleId:'m9', skillIds:['cartera','titulo-ejecutivo'], type:'single', difficulty:3,
    stem:'¿Por qué “existe un saldo” y “existe un título ejecutivo cobrable” no deben tratarse como expresiones idénticas?',
    options:[
      {id:'a',text:'Porque el título y la exigibilidad requieren verificar presupuestos jurídicos adicionales a la sola visualización contable de un saldo.',rationale:'La ruta coactiva exige soporte jurídico, no solo una cifra.'},
      {id:'b',text:'Porque los títulos ejecutivos nunca contienen valores monetarios.',rationale:'Sí pueden incorporar obligaciones dinerarias.'},
      {id:'c',text:'Porque todo saldo pertenece exclusivamente al proceso de devoluciones.',rationale:'Los saldos también son relevantes en cartera y recaudo.'}
    ], correctOptionId:'a',
    explanation:'La decisión de cobro se apoya en realidad, exigibilidad y título; confundir esas capas es un distractor frecuente.',
    sourceIds:['estatuto-tributario','proc-inicio-cobro-0269','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6a-m10-01', moduleId:'m10', skillIds:['cobro-persuasivo','etapa'], type:'pjs', difficulty:3,
    case:'Una obligación real y exigible aún se encuentra en gestión persuasiva. El deudor solicita conocer opciones de normalización antes de que avance el expediente.',
    stem:'¿Qué respuesta se alinea mejor con la finalidad de la etapa?',
    options:[
      {id:'a',text:'Negar cualquier orientación porque solo el coactivo permite normalizar.',rationale:'La gestión persuasiva precisamente busca promover normalización voluntaria cuando proceda.'},
      {id:'b',text:'Explicar las alternativas legalmente disponibles y sus requisitos, sin prometer beneficios que no estén previstos.',rationale:'Combina orientación con respeto por las condiciones del régimen.'},
      {id:'c',text:'Ofrecer una reducción discrecional de la deuda para obtener pago inmediato.',rationale:'El servidor no puede crear beneficios por conveniencia.'}
    ], correctOptionId:'b',
    explanation:'Persuasivo busca cumplimiento voluntario dentro de la ley; no es una negociación libre ni una fase sin requisitos.',
    sourceIds:['ce-cobro-persuasivo-2010','concepto-cobro-persuasivo-4229-2026','dian-facilidades-faq-2026']
  }),
  q({
    id:'q-v6a-m10-02', moduleId:'m10', skillIds:['facilidades-pago','incumplimiento'], type:'single', difficulty:3,
    stem:'Al analizar una facilidad de pago, ¿qué dato cambia materialmente la ruta del caso?',
    options:[
      {id:'a',text:'El color usado en el documento que la concede.',rationale:'No tiene efecto jurídico.'},
      {id:'b',text:'Si fue tramitada por correo o por ventanilla, sin atender a su estado.',rationale:'El canal no sustituye el análisis de vigencia y cumplimiento.'},
      {id:'c',text:'Si está vigente, cuáles son sus condiciones y si existe cumplimiento o una causal que active consecuencias previstas.',rationale:'El estado real de la facilidad determina qué actuaciones pueden seguir.'}
    ], correctOptionId:'c',
    explanation:'En PJS, “hay facilidad” no basta. La pregunta suele depender de vigencia, pagos, garantías y eventual incumplimiento.',
    sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']
  }),
  q({
    id:'q-v6a-m10-03', moduleId:'m10', skillIds:['facilidades-pago','garantias'], type:'pjs', difficulty:4,
    case:'La garantía que respaldaba una facilidad pierde valor de manera significativa y el expediente exige seguimiento.',
    stem:'¿Qué razonamiento es más adecuado?',
    options:[
      {id:'a',text:'Verificar las condiciones de la facilidad y el régimen aplicable para determinar las medidas procedentes frente a la suficiencia del respaldo.',rationale:'La garantía debe conservar la función exigida y el seguimiento depende de las reglas del caso.'},
      {id:'b',text:'Ignorar la variación porque la garantía solo se revisa el día en que se presenta.',rationale:'La función de respaldo puede requerir control durante la facilidad.'},
      {id:'c',text:'Declarar automáticamente extinguida la deuda.',rationale:'La pérdida de suficiencia de una garantía no extingue la obligación.'}
    ], correctOptionId:'a',
    explanation:'Las garantías no se estudian como un documento estático; importa que cumplan su finalidad dentro de la facilidad y que cualquier actuación siga el régimen vigente.',
    sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026']
  }),

  q({
    id:'q-v6a-m11-01', moduleId:'m11', skillIds:['cobro-coactivo','titulo-ejecutivo'], type:'pjs', difficulty:3,
    case:'Antes de proyectar un mandamiento de pago se advierte que el documento invocado como título no permite todavía establecer con claridad una obligación exigible bajo el supuesto.',
    stem:'¿Qué debe prevalecer?',
    options:[
      {id:'a',text:'Expedir el mandamiento y completar el soporte después.',rationale:'El inicio del cobro no debe adelantarse sobre un presupuesto esencial incierto.'},
      {id:'b',text:'Verificar la existencia y condiciones del título y de la exigibilidad antes de avanzar al mandamiento.',rationale:'La secuencia protege legalidad y evita un cobro prematuro.'},
      {id:'c',text:'Sustituir el título por cualquier impresión del estado de cuenta.',rationale:'Un reporte no reemplaza automáticamente el título exigido por la normativa.'}
    ], correctOptionId:'b',
    explanation:'Título y exigibilidad son presupuestos que deben estar claros antes de la actuación de inicio que depende de ellos.',
    sourceIds:['estatuto-tributario','proc-inicio-cobro-0269','proc-mandamiento-0270']
  }),
  q({
    id:'q-v6a-m11-02', moduleId:'m11', skillIds:['cobro-coactivo','secuencia'], type:'single', difficulty:2,
    stem:'¿Qué secuencia mental es más útil para el inicio del cobro coactivo?',
    options:[
      {id:'a',text:'Título/exigibilidad → competencia → mandamiento → notificación → oportunidad de defensa según el régimen aplicable.',rationale:'Organiza los hitos sin adelantar etapas posteriores.'},
      {id:'b',text:'Remate → mandamiento → título → notificación.',rationale:'Invierte la lógica del procedimiento.'},
      {id:'c',text:'Embargo → devolución → campaña extensiva → mandamiento.',rationale:'Mezcla subprocesos y etapas distintas.'}
    ], correctOptionId:'a',
    explanation:'Una buena respuesta PJS suele depender de reconocer qué actuación viene después del estado actual del expediente.',
    sourceIds:['proc-inicio-cobro-0269','proc-mandamiento-0270','estatuto-tributario']
  }),

  q({
    id:'q-v6a-m13-01', moduleId:'m13', skillIds:['medidas-cautelares','investigacion-bienes'], type:'pjs', difficulty:3,
    case:'Se analiza una medida cautelar, pero no se cuenta con información confiable sobre titularidad, valor o situación jurídica de los bienes identificados.',
    stem:'¿Qué enfoque es más sólido?',
    options:[
      {id:'a',text:'Investigar y validar la información relevante del bien antes de seleccionar y ejecutar la medida que corresponda.',rationale:'La efectividad y proporcionalidad de la cautela dependen de conocer el activo y su situación.'},
      {id:'b',text:'Embargar todos los bienes mencionados en cualquier fuente sin verificación.',rationale:'La actuación debe apoyarse en información confiable y límites aplicables.'},
      {id:'c',text:'Abandonar definitivamente el cobro.',rationale:'La falta inicial de información puede requerir investigación, no cierre automático.'}
    ], correctOptionId:'a',
    explanation:'La investigación de bienes precede muchas decisiones de cautela y evita actuaciones ineficaces o desproporcionadas.',
    sourceIds:['proc-investigacion-bienes-0326','proc-medidas-0327']
  }),
  q({
    id:'q-v6a-m13-02', moduleId:'m13', skillIds:['auxiliares-justicia','secuestro'], type:'single', difficulty:3,
    stem:'¿Qué papel cumplen los auxiliares de la justicia dentro de ciertas actuaciones de ejecución?',
    options:[
      {id:'a',text:'Sustituyen al funcionario competente y deciden la obligación tributaria.',rationale:'Su actuación auxiliar no desplaza la competencia de la autoridad.'},
      {id:'b',text:'Pueden intervenir en funciones auxiliares reguladas, con designación, deberes, control y reconocimiento conforme a procedimientos aplicables.',rationale:'Describe su rol instrumental dentro de la ejecución.'},
      {id:'c',text:'Actúan sin necesidad de expediente ni trazabilidad.',rationale:'Los procedimientos exigen documentación y control.'}
    ], correctOptionId:'b',
    explanation:'No confundas auxiliar de la justicia con autoridad que decide el crédito; su intervención está reglada y conectada con actuaciones como secuestro y administración de bienes.',
    sourceIds:['proc-auxiliares-justicia-0418','proc-honorarios-auxiliares-0420','proc-secuestro-0388']
  }),
  q({
    id:'q-v6a-m13-03', moduleId:'m13', skillIds:['medidas-cautelares','costo-beneficio'], type:'pjs', difficulty:4,
    case:'Existe un bien de muy baja realización económica cuya persecución demandaría actuaciones y costos desproporcionados frente al valor recuperable.',
    stem:'¿Qué criterio debe incorporarse al análisis, además de la viabilidad jurídica?',
    options:[
      {id:'a',text:'Que siempre debe perseguirse cualquier bien sin considerar utilidad de la actuación.',rationale:'La gestión pública también requiere racionalidad y eficiencia dentro de la legalidad.'},
      {id:'b',text:'Que basta la opinión subjetiva de que el bien “no vale la pena”.',rationale:'El análisis debe apoyarse en información y criterios verificables.'},
      {id:'c',text:'La relación entre efectividad, valor, costos y condiciones del bien para seleccionar actuaciones razonables y legalmente procedentes.',rationale:'Evita confundir posibilidad jurídica con conveniencia operativa automática.'}
    ], correctOptionId:'c',
    explanation:'La ejecución debe ser legal y también orientada a resultados; la proporcionalidad operativa requiere datos sobre el bien y el crédito.',
    sourceIds:['proc-investigacion-bienes-0326','proc-avaluo-0389','mipg']
  }),
  q({
    id:'q-v6a-m13-04', moduleId:'m13', skillIds:['medidas-cautelares','extincion-dominio'], type:'pjs', difficulty:4,
    case:'Un bien investigado en cobro aparece vinculado a una actuación de extinción de dominio. Una opción sostiene que el cobro puede ignorar por completo esa circunstancia.',
    stem:'¿Cómo debería evaluarse?',
    options:[
      {id:'a',text:'Como correcta, porque los procedimientos nunca interactúan.',rationale:'La concurrencia de actuaciones sobre un bien puede exigir coordinación y análisis específico.'},
      {id:'b',text:'Como dudosa: debe verificarse la situación jurídica del bien y las reglas de coordinación aplicables antes de continuar como si no existiera otra actuación.',rationale:'La información sobre afectaciones del bien es relevante para una ejecución válida y efectiva.'},
      {id:'c',text:'Como correcta si la deuda es suficientemente alta.',rationale:'El monto no elimina la necesidad de analizar el estado jurídico del activo.'}
    ], correctOptionId:'b',
    explanation:'Un bien no se estudia aislado de su situación jurídica. La existencia de otro proceso puede cambiar la forma de actuar y debe verificarse antes de ejecutar.',
    sourceIds:['proc-extincion-0330','proc-investigacion-bienes-0326']
  }),

  q({
    id:'q-v6a-m14-01', moduleId:'m14', skillIds:['concursales','credito-fiscal'], type:'pjs', difficulty:3,
    case:'La DIAN conoce la apertura de un proceso concursal de un deudor con obligaciones registradas en cartera.',
    stem:'¿Qué prioridad inicial es más consistente con la función del empleo?',
    options:[
      {id:'a',text:'Verificar y depurar el crédito fiscal y actuar oportunamente dentro del procedimiento concursal conforme a la competencia institucional.',rationale:'La representación exige llegar al proceso con información confiable y ejercer los derechos del acreedor público en la etapa correspondiente.'},
      {id:'b',text:'Ignorar el concurso y continuar todas las actuaciones como si no existiera.',rationale:'El proceso concursal puede modificar la ruta de cobro y coordinación.'},
      {id:'c',text:'Condonar la deuda por la sola apertura del proceso.',rationale:'La apertura no extingue automáticamente el crédito fiscal.'}
    ], correctOptionId:'a',
    explanation:'El MERF exige representar a la DIAN en procesos especiales/concursales; eso supone información depurada, oportunidad procesal y coordinación con cartera.',
    sourceIds:['merf-ct-cr-3007','proc-inicio-concursales-0431','ley-1116-2006']
  }),
  q({
    id:'q-v6a-m14-02', moduleId:'m14', skillIds:['concursales','depuracion'], type:'single', difficulty:3,
    stem:'¿Por qué la depuración del estado de cuenta también importa en un proceso concursal?',
    options:[
      {id:'a',text:'Porque aumenta automáticamente la prioridad del crédito.',rationale:'La prioridad depende del régimen, no de una depuración administrativa.'},
      {id:'b',text:'Porque presentar una acreencia inexacta puede afectar reconocimiento, objeciones, seguimiento y decisiones posteriores.',rationale:'La DIAN debe defender un crédito que corresponda a la realidad fiscal disponible.'},
      {id:'c',text:'Porque elimina la necesidad de revisar el proceso concursal.',rationale:'Depuración y actuación concursal son tareas complementarias.'}
    ], correctOptionId:'b',
    explanation:'La calidad del crédito presentado es parte de la defensa institucional; no se debe trasladar una inconsistencia de cartera al escenario concursal.',
    sourceIds:['proc-liquidacion-judicial-0368','proc-reorganizacion-0273','proc-normalizacion-ccc-0276']
  }),
  q({
    id:'q-v6a-m14-03', moduleId:'m14', skillIds:['concursales','etapa-procesal'], type:'pjs', difficulty:4,
    case:'Una actuación sería válida durante una etapa de reconocimiento de acreencias, pero el expediente ya se encuentra en una fase posterior con reglas distintas.',
    stem:'¿Qué enseña esto para resolver PJS?',
    options:[
      {id:'a',text:'Que basta reconocer una actuación real del proceso para marcarla correcta.',rationale:'La etapa puede volver improcedente una actuación que existe en abstracto.'},
      {id:'b',text:'Que los procesos concursales no tienen secuencia.',rationale:'Sí tienen etapas y oportunidades específicas.'},
      {id:'c',text:'Que debe ubicarse la etapa y la oportunidad antes de elegir la actuación, incluso si el distractor describe una figura jurídica verdadera.',rationale:'La procedencia depende del momento procesal y de la competencia.'}
    ], correctOptionId:'c',
    explanation:'El distractor plausible suele ser una actuación correcta en otro momento; la cronología evita caer en esa trampa.',
    sourceIds:['ley-1116-2006','proc-reorganizacion-0273','proc-liquidacion-judicial-0368']
  }),

  q({
    id:'q-v6a-m15-01', moduleId:'m15', skillIds:['devoluciones','origen-credito'], type:'single', difficulty:2,
    stem:'¿Por qué conviene identificar el origen del valor solicitado antes de aplicar una ruta de devolución?',
    options:[
      {id:'a',text:'Porque saldo a favor, pago en exceso y pago de lo no debido no deben asumirse como situaciones idénticas en todos sus presupuestos.',rationale:'El origen orienta legitimación, soportes y reglas aplicables.'},
      {id:'b',text:'Porque todo valor a devolver proviene necesariamente de la misma declaración.',rationale:'Existen orígenes distintos.'},
      {id:'c',text:'Porque el origen solo importa después de ordenar el pago.',rationale:'Debe analizarse desde la procedencia de la solicitud.'}
    ], correctOptionId:'a',
    explanation:'Antes de preguntar “¿se devuelve?”, identifica de dónde surge el crédito y cuál régimen gobierna esa situación.',
    sourceIds:['estatuto-tributario','proc-pagos-exceso-0128','dian-devoluciones-servicio-2026']
  }),
  q({
    id:'q-v6a-m15-02', moduleId:'m15', skillIds:['devoluciones','compensacion'], type:'pjs', difficulty:3,
    case:'Un contribuyente tiene un saldo susceptible de devolución y, al mismo tiempo, aparece una deuda administrada por la entidad que debe verificarse.',
    stem:'¿Qué concepto evita tratar el caso como un simple “pagar el saldo”?',
    options:[
      {id:'a',text:'La posibilidad de compensación y la necesidad de establecer correctamente saldos y obligaciones antes de disponer recursos.',rationale:'Devolución y compensación se relacionan con la realidad de créditos y deudas.'},
      {id:'b',text:'La obligación de ignorar cualquier deuda existente.',rationale:'La deuda puede ser jurídicamente relevante para el trámite.'},
      {id:'c',text:'La regla de que toda devolución se paga en efectivo inmediatamente.',rationale:'La forma y ruta de materialización dependen del régimen aplicable.'}
    ], correctOptionId:'a',
    explanation:'El expediente debe integrar la información disponible; la devolución no se decide desconectada de obligaciones que jurídicamente deban considerarse.',
    sourceIds:['estatuto-tributario','guia-devoluciones-ct-cot-0038','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6a-m16-01', moduleId:'m16', skillIds:['devoluciones','verificacion'], type:'pjs', difficulty:3,
    case:'Una solicitud cumple inicialmente con aspectos formales, pero el análisis identifica una marca de riesgo que requiere profundizar la verificación.',
    stem:'¿Qué error debe evitarse?',
    options:[
      {id:'a',text:'Creer que toda marca de riesgo equivale automáticamente a rechazo definitivo.',rationale:'El riesgo orienta controles; la consecuencia depende de los hallazgos y del régimen.'},
      {id:'b',text:'Revisar soportes y aplicar el procedimiento correspondiente.',rationale:'Esa es precisamente la actuación esperable.'},
      {id:'c',text:'Documentar el análisis realizado.',rationale:'La trazabilidad fortalece el trámite.'}
    ], correctOptionId:'a',
    explanation:'La señal de riesgo activa análisis; no debe confundirse con prueba concluyente ni con una causal automática de rechazo.',
    sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025']
  }),
  q({
    id:'q-v6a-m16-02', moduleId:'m16', skillIds:['devoluciones','investigacion-previa'], type:'single', difficulty:4,
    stem:'¿Qué distinción enfatiza el Concepto DIAN 16116 de 2025?',
    options:[
      {id:'a',text:'Que la verificación del trámite de devolución y la investigación previa de fiscalización son exactamente la misma actuación.',rationale:'El concepto precisamente diferencia estos ámbitos.'},
      {id:'b',text:'Que toda solicitud debe enviarse a fiscalización.',rationale:'No establece una remisión automática universal.'},
      {id:'c',text:'Que debe distinguirse la verificación propia del trámite de la investigación previa prevista en el artículo 857-1 del Estatuto Tributario.',rationale:'Es la diferencia central resaltada en la doctrina consultada.'}
    ], correctOptionId:'c',
    explanation:'La existencia de controles dentro del trámite no significa que toda verificación sea una investigación previa de fiscalización.',
    sourceIds:['concepto-devoluciones-16116-2025','estatuto-tributario']
  }),
  q({
    id:'q-v6a-m16-03', moduleId:'m16', skillIds:['devoluciones','pago'], type:'pjs', difficulty:3,
    case:'La autoridad adopta una decisión favorable de devolución. Un aprendiz concluye que el trámite termina necesariamente en el instante en que se firma el acto.',
    stem:'¿Qué debe recordar?',
    options:[
      {id:'a',text:'Que la decisión favorable y la materialización del pago son hitos distintos y pueden requerir actuaciones posteriores de disposición y gestión de recursos.',rationale:'El MERF incluye expresamente la disposición de recursos y gestión del pago.'},
      {id:'b',text:'Que toda devolución favorable debe convertirse en cobro coactivo.',rationale:'Es un subproceso distinto.'},
      {id:'c',text:'Que la firma del acto elimina toda necesidad de trazabilidad posterior.',rationale:'Las actuaciones posteriores también deben quedar soportadas.'}
    ], correctOptionId:'a',
    explanation:'Para CT-CR-3007 el ciclo no se limita a decidir: también importa completar la ruta hasta la gestión del pago cuando corresponda.',
    sourceIds:['merf-ct-cr-3007','guia-devoluciones-ct-cot-0038','proc-devoluciones-manual-0125']
  }),
  q({
    id:'q-v6a-m16-04', moduleId:'m16', skillIds:['devoluciones','secuencia'], type:'single', difficulty:3,
    stem:'¿Qué secuencia conceptual es más útil para una solicitud de devolución?',
    options:[
      {id:'a',text:'Pago → radicación → existencia del crédito → verificación.',rationale:'Coloca el pago antes de establecer procedencia.'},
      {id:'b',text:'Radicación y requisitos → análisis/verificación → decisión → compensación o gestión de pago según corresponda.',rationale:'Resume la lógica del trámite sin convertirla en una lista rígida para todos los casos.'},
      {id:'c',text:'Rechazo → investigación → solicitud.',rationale:'No representa la secuencia general.'}
    ], correctOptionId:'b',
    explanation:'La ruta puede bifurcarse, pero la idea central es que primero se recibe y verifica, luego se decide y solo después se materializa el efecto favorable cuando proceda.',
    sourceIds:['guia-devoluciones-ct-cot-0038','proc-devoluciones-sie-0124']
  }),

  q({
    id:'q-v6a-m17-01', moduleId:'m17', skillIds:['accesos','minimo-privilegio'], type:'pjs', difficulty:3,
    case:'Un usuario necesita consultar información para una tarea temporal y solicita un rol con permisos de modificación “por si llega a necesitarlos”.',
    stem:'¿Qué criterio debe aplicarse?',
    options:[
      {id:'a',text:'Conceder el rol más amplio para evitar futuras solicitudes.',rationale:'Aumenta exposición sin necesidad demostrada.'},
      {id:'b',text:'Asignar únicamente los privilegios necesarios para la función autorizada y revisar su vigencia cuando cambie la necesidad.',rationale:'Es coherente con mínimo privilegio y ciclo de vida de accesos.'},
      {id:'c',text:'Compartir temporalmente las credenciales de otro usuario.',rationale:'Rompe trazabilidad y responsabilidad individual.'}
    ], correctOptionId:'b',
    explanation:'El acceso debe corresponder a la función real y mantenerse solo mientras exista la necesidad autorizada.',
    sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian','merf-ct-cr-3007']
  }),
  q({
    id:'q-v6a-m17-02', moduleId:'m17', skillIds:['accesos','ciclo-vida'], type:'single', difficulty:3,
    stem:'¿Cuál evento exige revisar de forma prioritaria los accesos de un usuario?',
    options:[
      {id:'a',text:'Cambio de funciones, traslado, terminación de vínculo o desaparición de la necesidad que justificó el permiso.',rationale:'El acceso debe acompañar el ciclo real de la relación y del rol.'},
      {id:'b',text:'Cambio de fondo de pantalla.',rationale:'No altera la necesidad de privilegios.'},
      {id:'c',text:'Aumento de espacio en el buzón de correo.',rationale:'No implica por sí mismo revisar roles misionales.'}
    ], correctOptionId:'a',
    explanation:'La auditoría institucional de accesos muestra la importancia de alta, modificación e inactivación oportuna de roles y cuentas.',
    sourceIds:['auditoria-accesos-dian-2025']
  }),
  q({
    id:'q-v6a-m17-03', moduleId:'m17', skillIds:['calidad-datos','oportunidad'], type:'pjs', difficulty:3,
    case:'Un reporte es exacto y completo, pero fue actualizado varios meses atrás y desde entonces ocurrieron pagos relevantes.',
    stem:'¿Qué dimensión de calidad está comprometida para decidir hoy?',
    options:[
      {id:'a',text:'Únicamente la ortografía.',rationale:'No es el problema material del caso.'},
      {id:'b',text:'La oportunidad o actualidad del dato.',rationale:'Un dato históricamente correcto puede dejar de ser apto para una decisión presente.'},
      {id:'c',text:'Ninguna, porque exactitud histórica es suficiente.',rationale:'Las decisiones requieren información vigente para el momento relevante.'}
    ], correctOptionId:'b',
    explanation:'Calidad no es una propiedad única: exactitud, completitud, consistencia y oportunidad pueden fallar por separado.',
    sourceIds:['merf-ct-cr-3007','proc-normalizacion-ccc-0276']
  }),

  q({
    id:'q-v6a-m19-01', moduleId:'m19', skillIds:['comportamiento-etico','nivel-4'], type:'pjs', difficulty:3,
    case:'Un compañero propone omitir una validación para cumplir una meta diaria y asegura que “nadie se dará cuenta” porque el resultado probablemente será el mismo.',
    stem:'¿Qué conducta representa mejor un nivel alto de comportamiento ético?',
    options:[
      {id:'a',text:'Aceptar si la meta del equipo está retrasada.',rationale:'El logro no justifica sacrificar integridad o controles relevantes.'},
      {id:'b',text:'Rechazar la omisión, explicar el riesgo y promover una alternativa que cumpla la meta sin vulnerar reglas o trazabilidad.',rationale:'Integra criterio ético, responsabilidad e influencia positiva sobre el equipo.'},
      {id:'c',text:'Omitir la validación y registrar después una justificación genérica.',rationale:'Documentar posteriormente no corrige una omisión deliberada.'}
    ], correctOptionId:'b',
    explanation:'En competencias comportamentales, el nivel alto se observa en la conducta sostenida y en la capacidad de proteger la integridad incluso bajo presión.',
    sourceIds:['merf-ct-cr-3007','res-65-2024','codigo-integridad-dian']
  }),

  q({
    id:'q-v6a-m21-01', moduleId:'m21', skillIds:['tecnica-pjs','cronologia'], type:'single', difficulty:2,
    stem:'¿Cuál es el orden de lectura que Umbral recomienda para una PJS procedimental?',
    options:[
      {id:'a',text:'Opción más larga → artículo → intuición → respuesta.',rationale:'Favorece señales superficiales.'},
      {id:'b',text:'Hechos → competencia → etapa → regla → actuación.',rationale:'Obliga a conectar el contexto con la decisión procedente.'},
      {id:'c',text:'Respuesta → caso → hechos.',rationale:'Leer desde la conclusión aumenta sesgo de confirmación.'}
    ], correctOptionId:'b',
    explanation:'Primero entiende qué ocurre y quién puede actuar; después determina qué regla gobierna esa etapa y qué opción la satisface.',
    sourceIds:['merf-ct-cr-3007','cnsc-2676-especificaciones-pruebas']
  }),
  q({
    id:'q-v6a-m21-02', moduleId:'m21', skillIds:['tecnica-pjs','distractores'], type:'pjs', difficulty:3,
    case:'Dos opciones describen actuaciones que existen jurídicamente. Una corresponde a la etapa actual; la otra solo sería posible después de que ocurra un hecho que todavía no se ha presentado.',
    stem:'¿Qué regla de decisión debe usarse?',
    options:[
      {id:'a',text:'Elegir la actuación más severa.',rationale:'La severidad no determina procedencia.'},
      {id:'b',text:'Elegir la que tenga más palabras.',rationale:'La longitud es una señal editorial, no jurídica.'},
      {id:'c',text:'Elegir la actuación procedente en la etapa actual y descartar la opción prematura aunque sea jurídicamente real.',rationale:'Es la lógica central de los distractores procedimentales.'}
    ], correctOptionId:'c',
    explanation:'La mejor opción no es la más “completa” en abstracto; es la que responde correctamente al momento y competencia descritos.',
    sourceIds:['cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007']
  }),

  q({
    id:'q-v6a-m24-01', moduleId:'m24', skillIds:['outlook','correo'], type:'single', difficulty:1,
    stem:'En Outlook, ¿para qué sirve el campo CCO?',
    options:[
      {id:'a',text:'Para enviar una copia a destinatarios cuya dirección no se muestra a los demás receptores del mensaje.',rationale:'CCO corresponde a copia oculta.'},
      {id:'b',text:'Para convertir automáticamente un mensaje en PDF.',rationale:'No es la función de CCO.'},
      {id:'c',text:'Para reemplazar el asunto del mensaje.',rationale:'Asunto y destinatarios son campos distintos.'}
    ], correctOptionId:'a',
    explanation:'Para, CC y CCO administran destinatarios; CCO permite ocultar esas direcciones frente a los demás receptores.',
    sourceIds:['microsoft-outlook-email']
  }),
  q({
    id:'q-v6a-m24-02', moduleId:'m24', skillIds:['outlook','adjuntos','permisos'], type:'pjs', difficulty:2,
    case:'Debes compartir por correo un documento almacenado en OneDrive con un grupo que solo necesita leerlo.',
    stem:'¿Qué práctica es más adecuada?',
    options:[
      {id:'a',text:'Compartir un vínculo revisando que los permisos otorguen solo el nivel de acceso necesario.',rationale:'Outlook/OneDrive permiten definir permisos; mínimo acceso reduce modificaciones no deseadas.'},
      {id:'b',text:'Conceder edición a cualquier persona con el enlace por defecto.',rationale:'Da más privilegios de los necesarios.'},
      {id:'c',text:'Publicar el archivo en un sitio abierto para evitar permisos.',rationale:'Eso puede exponer información indebidamente.'}
    ], correctOptionId:'a',
    explanation:'La herramienta permite compartir vínculos con distintos permisos; el contexto institucional exige revisar quién necesita ver o editar.',
    sourceIds:['microsoft-outlook-attachments','manual-seguridad-dian']
  }),
  q({
    id:'q-v6a-m24-03', moduleId:'m24', skillIds:['formatos-archivo','word'], type:'single', difficulty:1,
    stem:'¿Qué diferencia práctica existe entre DOCX y PDF al distribuir un documento final?',
    options:[
      {id:'a',text:'DOCX nunca puede editarse.',rationale:'DOCX es precisamente un formato editable de Word.'},
      {id:'b',text:'PDF suele preservar la presentación para distribución, mientras DOCX conserva una estructura editable más adecuada para continuar trabajando el documento.',rationale:'Es una diferencia útil de propósito, sin afirmar que PDF sea imposible de modificar.'},
      {id:'c',text:'PDF conserva todas las funciones de edición y macros de un DOCX.',rationale:'No es equivalente al formato nativo de Word.'}
    ], correctOptionId:'b',
    explanation:'El formato debe elegirse según la finalidad: edición, interoperabilidad, datos o distribución final.',
    sourceIds:['microsoft-word-file-formats','microsoft-office-file-formats']
  }),
  q({
    id:'q-v6a-m24-04', moduleId:'m24', skillIds:['formatos-archivo','csv'], type:'single', difficulty:2,
    stem:'¿Qué precaución es importante al guardar una hoja de Excel como CSV?',
    options:[
      {id:'a',text:'CSV siempre conserva todas las hojas, fórmulas y formato visual del libro.',rationale:'El formato de texto no conserva todas las características de un libro de Excel.'},
      {id:'b',text:'Guardar como CSV convierte automáticamente el archivo en una base de datos relacional.',rationale:'CSV sigue siendo un formato tabular de texto.'},
      {id:'c',text:'Puede perderse formato y características del libro, por lo que debe verificarse qué datos se exportan y conservar el original cuando sea necesario.',rationale:'Microsoft advierte que al cambiar de formato pueden no transferirse datos, formato o características.'}
    ], correctOptionId:'c',
    explanation:'CSV es útil para intercambio tabular, pero no sustituye un XLSX cuando se requieren fórmulas, múltiples hojas o formato del libro.',
    sourceIds:['microsoft-excel-file-formats','microsoft-office-file-formats']
  }),

  q({
    id:'q-v6a-m25-01', moduleId:'m25', skillIds:['excel','csv','calidad-datos'], type:'pjs', difficulty:2,
    case:'Recibes un CSV con identificadores que tienen ceros iniciales. Al abrirlo, una herramienta los interpreta como números y elimina esos ceros.',
    stem:'¿Qué lección de calidad de datos aplica?',
    options:[
      {id:'a',text:'El tipo y formato de un campo forman parte de su significado; debe controlarse la importación para no transformar identificadores.',rationale:'Un identificador no siempre debe tratarse como cantidad numérica.'},
      {id:'b',text:'Los ceros iniciales nunca tienen significado.',rationale:'En códigos e identificadores pueden ser esenciales.'},
      {id:'c',text:'El problema se corrige sumando cero a todas las celdas.',rationale:'Eso mantiene la interpretación numérica y puede empeorar la pérdida.'}
    ], correctOptionId:'a',
    explanation:'Antes de analizar, define qué representa cada columna. Un código puede parecer número y, sin embargo, requerir tratamiento como texto.',
    sourceIds:['microsoft-excel-file-formats','microsoft-excel-formulas']
  }),

  q({
    id:'q-v6a-m26-01', moduleId:'m26', skillIds:['datos','poblacion-muestra'], type:'single', difficulty:2,
    stem:'¿Cuál diferencia básica existe entre población y muestra?',
    options:[
      {id:'a',text:'La población es el conjunto de interés definido; una muestra es un subconjunto observado de esa población.',rationale:'Esta distinción es necesaria antes de generalizar resultados.'},
      {id:'b',text:'Son sinónimos si la muestra contiene más de 100 casos.',rationale:'El tamaño no vuelve idénticos ambos conceptos.'},
      {id:'c',text:'La muestra siempre contiene más elementos que la población.',rationale:'Es un subconjunto, no un conjunto mayor.'}
    ], correctOptionId:'a',
    explanation:'Un resultado de una muestra solo puede generalizarse responsablemente considerando cómo fue seleccionada y qué población pretende representar.',
    sourceIds:['openstax-statistics-center']
  }),
  q({
    id:'q-v6a-m26-02', moduleId:'m26', skillIds:['datos','sesgo-muestreo'], type:'pjs', difficulty:3,
    case:'Para estimar la experiencia de todos los usuarios de un servicio se encuesta únicamente a quienes presentaron una queja formal.',
    stem:'¿Cuál es el problema principal?',
    options:[
      {id:'a',text:'Ninguno: quien se queja representa automáticamente a toda la población.',rationale:'Ese grupo puede diferir sistemáticamente de quienes no presentaron queja.'},
      {id:'b',text:'Existe riesgo de sesgo de selección; la muestra no representa necesariamente al conjunto de usuarios.',rationale:'La forma de selección puede distorsionar la inferencia.'},
      {id:'c',text:'La encuesta deja de ser un conjunto de datos.',rationale:'Sigue siendo datos, aunque su representatividad sea limitada.'}
    ], correctOptionId:'b',
    explanation:'El tamaño de una muestra no corrige por sí solo un mecanismo de selección sesgado; siempre pregunta quién quedó incluido y quién no.',
    sourceIds:['openstax-statistics-center']
  }),

  q({
    id:'q-v6a-m27-01', moduleId:'m27', skillIds:['logica','cuantificadores'], type:'single', difficulty:2,
    stem:'Si la afirmación es “todos los registros del grupo A cumplen la condición X”, ¿qué basta para demostrar que es falsa?',
    options:[
      {id:'a',text:'Encontrar un registro de A que no cumpla X.',rationale:'Un solo contraejemplo refuta una afirmación universal.'},
      {id:'b',text:'Encontrar un registro de A que sí cumpla X.',rationale:'Eso es compatible con que todos cumplan, pero no lo demuestra ni lo refuta.'},
      {id:'c',text:'Contar cuántos registros existen fuera de A.',rationale:'No afecta directamente la afirmación sobre todos los miembros de A.'}
    ], correctOptionId:'a',
    explanation:'Los cuantificadores importan: “todos” se refuta con un contraejemplo; “existe al menos uno” se demuestra con un ejemplo válido.',
    sourceIds:['openstax-statistics-probability']
  }),
  q({
    id:'q-v6a-m27-02', moduleId:'m27', skillIds:['logica','conteo'], type:'pjs', difficulty:2,
    case:'Una campaña tiene 90 registros en el grupo A, 70 en B y 25 pertenecen a ambos. Se quiere conocer cuántos registros únicos están en A o B.',
    stem:'¿Cuál es el total?',
    options:[
      {id:'a',text:'185, porque se suman todos los valores.',rationale:'Cuenta dos veces la intersección y además vuelve a sumarla.'},
      {id:'b',text:'135, aplicando 90 + 70 − 25.',rationale:'La intersección se resta una vez porque fue contada en ambos grupos.'},
      {id:'c',text:'95, porque solo debe conservarse el grupo mayor más la diferencia.',rationale:'No representa la unión de los conjuntos.'}
    ], correctOptionId:'b',
    explanation:'La inclusión-exclusión evita duplicar personas o expedientes que cumplen ambos criterios.',
    sourceIds:['openstax-statistics-probability']
  })
]
