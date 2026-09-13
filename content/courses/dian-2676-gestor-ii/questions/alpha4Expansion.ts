import type { Question } from '../../../../src/types/course'

const verifiedAt = '2026-09-13'

export const dianAlpha4ExpansionQuestions: Question[] = [
  // M0 · Perfil y estrategia
  {
    id:'q-v4-m0-01', moduleId:'m0', skillIds:['perfil-empleo','priorizacion-estudio'], type:'pjs', difficulty:2,
    case:'Un aspirante dispone de dos horas de estudio. Puede dedicar todo el tiempo a clasificación arancelaria avanzada o repasar cartera, recaudo-devoluciones y una base introductoria TACI.',
    stem:'¿Qué decisión está mejor alineada con CT-CR-3007?',
    options:[
      {id:'a',text:'Priorizar cartera y Recaudo-Devoluciones, manteniendo TACI como fundamento transversal.',rationale:'Es la combinación que refleja los subprocesos y competencias específicas de la ficha.'},
      {id:'b',text:'Estudiar únicamente clasificación arancelaria avanzada.',rationale:'Es una especialidad que no constituye el núcleo funcional de esta ficha.'},
      {id:'c',text:'Ignorar por completo cualquier conocimiento tributario general.',rationale:'El MERF incluye competencias básicas tributarias y TACI.'},
    ], correctOptionId:'a', explanation:'La estrategia de estudio parte del MERF: amplitud suficiente en fundamentos y profundidad en las responsabilidades reales del empleo.', sourceIds:['merf-ct-cr-3007'], verifiedAt,
  },
  {
    id:'q-v4-m0-02', moduleId:'m0', skillIds:['tecnica-estudio','fuentes','actualizacion'], type:'pjs', difficulty:2,
    case:'Una academia publica una tabla de “ejes definitivos DIAN 2676”, pero no enlaza una GOA oficial ni documento de la CNSC que la respalde.',
    stem:'¿Cómo debería usar esa información?',
    options:[
      {id:'a',text:'Tomarla como oficial y reemplazar el MERF.',rationale:'Sin fuente oficial no debe presentarse como eje definitivo.'},
      {id:'b',text:'Tratarla, como máximo, como referencia secundaria y mantener como base el MERF y las fuentes oficiales hasta que se publique la GOA.',rationale:'Distingue evidencia oficial de material de apoyo.'},
      {id:'c',text:'Eliminar todo el plan de estudio y esperar sin estudiar.',rationale:'El MERF y los procedimientos oficiales ya permiten avanzar con alta pertinencia.'},
    ], correctOptionId:'b', explanation:'Umbral etiqueta explícitamente lo oficial, lo provisional y lo pedagógico para evitar estudiar una inferencia como si fuera una directriz de la CNSC.', sourceIds:['merf-ct-cr-3007','cnsc-2676-abc'], verifiedAt,
  },
  {
    id:'q-v4-m0-03', moduleId:'m0', skillIds:['diagnostico','mastery','practica'], type:'pjs', difficulty:2,
    case:'En un diagnóstico, una persona obtiene 90% en fundamentos pero 45% en cobro coactivo y devoluciones, que son áreas centrales del empleo.',
    stem:'¿Qué plan es más eficiente?',
    options:[
      {id:'a',text:'Repetir solo los fundamentos porque ya producen una sensación de dominio.',rationale:'No atiende las debilidades de mayor relevancia funcional.'},
      {id:'b',text:'Conservar repasos espaciados de fortalezas y concentrar práctica deliberada en los módulos débiles con revisión de errores.',rationale:'Combina retención con corrección de brechas prioritarias.'},
      {id:'c',text:'Responder preguntas al azar sin revisar explicaciones.',rationale:'Reduce la posibilidad de corregir errores conceptuales y procedimentales.'},
    ], correctOptionId:'b', explanation:'El diagnóstico sirve para asignar esfuerzo, no para etiquetar al estudiante. Por eso Umbral combina mastery, errores y práctica adaptativa.', sourceIds:['learning-science-dunlosky-2013','merf-ct-cr-3007'], verifiedAt,
  },

  // M1
  {
    id:'q-v4-m1-01', moduleId:'m1', skillIds:['debido-proceso','defensa','funcion-publica'], type:'pjs', difficulty:3,
    case:'Una actuación puede afectar a un contribuyente, pero el funcionario considera innecesario darle la oportunidad de ejercer la defensa prevista porque “la evidencia parece muy clara”.',
    stem:'¿Qué debe prevalecer?',
    options:[
      {id:'a',text:'El procedimiento y las garantías aplicables, incluso cuando el funcionario crea anticipar el resultado.',rationale:'La convicción personal no elimina el debido proceso.'},
      {id:'b',text:'La rapidez, porque una evidencia fuerte hace innecesaria la defensa.',rationale:'Confunde valoración de evidencia con supresión de garantías.'},
      {id:'c',text:'Una decisión verbal sin expediente.',rationale:'Afectaría trazabilidad y control.'},
    ], correctOptionId:'a', explanation:'El debido proceso no existe solo para casos dudosos; estructura cómo la administración llega válidamente a sus decisiones.', sourceIds:['constitucion-politica','cpaca'], verifiedAt,
  },
  {
    id:'q-v4-m1-02', moduleId:'m1', skillIds:['moralidad','eficacia','principios'], type:'pjs', difficulty:3,
    case:'Un equipo descubre una práctica que aumenta la velocidad de cierre de casos pero oculta errores para que no aparezcan en los indicadores.',
    stem:'¿Qué lectura es correcta?',
    options:[
      {id:'a',text:'La eficacia no puede evaluarse separada de legalidad, moralidad, responsabilidad y calidad de la gestión.',rationale:'Los principios administrativos se interpretan de forma articulada.'},
      {id:'b',text:'La cifra de cierres justifica ocultar errores.',rationale:'El indicador no reemplaza los principios que rigen la función administrativa.'},
      {id:'c',text:'Los principios solo aplican a entidades territoriales, no a la DIAN.',rationale:'La función administrativa nacional también está sometida a ellos.'},
    ], correctOptionId:'a', explanation:'Una PJS puede presentar una opción aparentemente eficiente que es institucionalmente incorrecta porque degrada veracidad o control.', sourceIds:['constitucion-politica','codigo-buen-gobierno-dian'], verifiedAt,
  },

  // M2
  {
    id:'q-v4-m2-01', moduleId:'m2', skillIds:['transparencia','motivacion-reserva','acceso-informacion'], type:'pjs', difficulty:4,
    case:'Una dependencia niega acceso a información pública con la frase “es información interna”, sin identificar una causal legal de reserva ni explicar el daño protegido.',
    stem:'¿Qué problema presenta la respuesta?',
    options:[
      {id:'a',text:'La reserva requiere fundamento jurídico y motivación; la etiqueta “interna” no es suficiente por sí sola.',rationale:'Las excepciones a publicidad deben justificarse conforme al régimen aplicable.'},
      {id:'b',text:'Ninguno: toda información interna es automáticamente reservada.',rationale:'No existe una regla general con ese alcance.'},
      {id:'c',text:'El único problema es que no usó membrete institucional.',rationale:'La cuestión sustantiva es el fundamento de la restricción.'},
    ], correctOptionId:'a', explanation:'Máxima publicidad no significa entrega irrestricta, pero una negativa debe apoyarse en una excepción válida y suficientemente motivada.', sourceIds:['ley-1712-2014'], verifiedAt,
  },
  {
    id:'q-v4-m2-02', moduleId:'m2', skillIds:['peticion','respuesta-fondo','oportunidad'], type:'pjs', difficulty:3,
    case:'Una petición fue respondida dentro del término, pero la respuesta copia un texto genérico que no resuelve lo solicitado ni orienta sobre el punto consultado.',
    stem:'¿Basta con haber respondido a tiempo?',
    options:[
      {id:'a',text:'Sí, porque el contenido es irrelevante si se cumplió el término.',rationale:'La oportunidad es necesaria, pero la respuesta debe atender materialmente la petición dentro de la competencia.'},
      {id:'b',text:'No; oportunidad y respuesta materialmente pertinente son dimensiones distintas del deber de atención.',rationale:'Cumplir el término no convierte en suficiente una respuesta evasiva.'},
      {id:'c',text:'No, porque toda petición debe resolverse favorablemente.',rationale:'Responder de fondo no implica acceder a lo solicitado.'},
    ], correctOptionId:'b', explanation:'En servicio al ciudadano, una respuesta puede ser oportuna y aun así deficiente si no aborda la necesidad planteada.', sourceIds:['ley-1755-2015','mipg'], verifiedAt,
  },

  // M3
  {
    id:'q-v4-m3-01', moduleId:'m3', skillIds:['dian','competencia-institucional','coordinacion'], type:'pjs', difficulty:3,
    case:'Un ciudadano pide a un Gestor II que decida un asunto que pertenece a una función distinta dentro de la entidad. El gestor conoce informalmente el tema.',
    stem:'¿Qué debe hacer?',
    options:[
      {id:'a',text:'Asumir la función para evitar remisiones.',rationale:'Conocer un asunto no otorga competencia.'},
      {id:'b',text:'Orientar y encauzar la solicitud hacia el área competente según las reglas institucionales.',rationale:'Articula servicio con distribución funcional.'},
      {id:'c',text:'Crear una nueva competencia por analogía.',rationale:'Las competencias públicas no se crean por conveniencia del funcionario.'},
    ], correctOptionId:'b', explanation:'La estructura de la DIAN importa porque determina quién puede hacer qué. El PJS suele castigar la actuación “bien intencionada” fuera de competencia.', sourceIds:['decreto-1742-2020','cpaca'], verifiedAt,
  },
  {
    id:'q-v4-m3-02', moduleId:'m3', skillIds:['ct-cr-3007','funciones','sistemas-informacion'], type:'single', difficulty:2,
    stem:'¿Cuál actividad sí aparece expresamente dentro de las funciones de CT-CR-3007?',
    options:[
      {id:'a',text:'Gestionar permisos de acceso e implantación de sistemas corporativos de Recaudación y Administración de Cartera, dentro del nivel de responsabilidad del empleo.',rationale:'La ficha incluye esta responsabilidad de manera expresa.'},
      {id:'b',text:'Administrar la infraestructura de toda la Rama Judicial.',rationale:'No corresponde a la DIAN ni a esta ficha.'},
      {id:'c',text:'Expedir leyes tributarias.',rationale:'La función legislativa no corresponde al empleo.'},
    ], correctOptionId:'a', explanation:'El perfil combina conocimiento tributario con calidad y operación de información; por eso M17 no es un añadido tecnológico externo, sino parte del MERF.', sourceIds:['merf-ct-cr-3007'], verifiedAt,
  },

  // M4
  {
    id:'q-v4-m4-01', moduleId:'m4', skillIds:['competencia','nulidad-riesgo','procedimiento'], type:'pjs', difficulty:4,
    case:'Un acto está listo para firma, pero se detecta que la persona proyectada como decisora no tiene la competencia asignada para esa actuación.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Firmarlo de todos modos si la decisión material parece correcta.',rationale:'La competencia es un elemento esencial de la actuación administrativa.'},
      {id:'b',text:'Remitir o ajustar el trámite para que decida la autoridad competente, dejando trazabilidad del cambio.',rationale:'Evita consolidar una actuación viciada por falta de competencia.'},
      {id:'c',text:'Pedir al contribuyente que autorice al funcionario incompetente.',rationale:'La competencia pública no se convalida por acuerdo del interesado cuando la ley no lo permite.'},
    ], correctOptionId:'b', explanation:'La respuesta correcta no depende solo del “fondo” de la decisión. Quién decide y con qué competencia también forma parte de su validez.', sourceIds:['cpaca'], verifiedAt,
  },
  {
    id:'q-v4-m4-02', moduleId:'m4', skillIds:['terminos','conteo','norma-aplicable'], type:'pjs', difficulty:4,
    case:'Un servidor debe calcular un término procesal y encuentra que la norma especial regula expresamente su duración y forma de cómputo.',
    stem:'¿Qué enfoque reduce el riesgo de error?',
    options:[
      {id:'a',text:'Usar siempre una regla general memorizada, aunque exista disposición especial.',rationale:'Puede producir un cómputo equivocado.'},
      {id:'b',text:'Identificar primero el acto que inicia el término, la norma especial, la fecha jurídicamente relevante y las reglas de cómputo aplicables.',rationale:'El término depende de contexto, no solo de un número aislado.'},
      {id:'c',text:'Contar desde el día que resulte más conveniente para la entidad.',rationale:'El cómputo está sometido a reglas jurídicas.'},
    ], correctOptionId:'b', explanation:'La técnica de Umbral para términos es: disparador → fecha → regla especial → cómputo → consecuencia. Memorizar un número sin disparador es insuficiente.', sourceIds:['cpaca','estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m4-03', moduleId:'m4', skillIds:['expediente','conservacion','decision'], type:'pjs', difficulty:3,
    case:'Una actuación fue corregida después de detectar un error. Alguien propone eliminar todo rastro de la versión inicial para que el expediente se vea “limpio”.',
    stem:'¿Qué enfoque es más adecuado?',
    options:[
      {id:'a',text:'Conservar la trazabilidad de la actuación y de la corrección conforme a la gestión documental y al procedimiento aplicable.',rationale:'La historia del expediente permite explicar qué ocurrió y por qué se corrigió.'},
      {id:'b',text:'Borrar todo antecedente para que nadie conozca el error.',rationale:'Ocultar la historia compromete integridad y control.'},
      {id:'c',text:'Duplicar documentos contradictorios sin identificar cuál está vigente.',rationale:'También deteriora claridad y confiabilidad del expediente.'},
    ], correctOptionId:'a', explanation:'Corregir un error no significa borrar la historia institucional. La trazabilidad protege la decisión final.', sourceIds:['ley-594-2000','cpaca'], verifiedAt,
  },

  // M5
  {
    id:'q-v4-m5-01', moduleId:'m5', skillIds:['autorretenedor','retencion','control'], type:'pjs', difficulty:3,
    case:'En una campaña se incluye a un autorretenedor. Un funcionario afirma que, al ser autorretenedor, ya no existen deberes de declaración o pago asociados a esa calidad.',
    stem:'¿Qué debe hacerse antes de aceptar esa conclusión?',
    options:[
      {id:'a',text:'Revisar las obligaciones concretas que la normativa atribuye a esa calidad y el periodo objeto de control.',rationale:'La categoría determina responsabilidades específicas que deben verificarse.'},
      {id:'b',text:'Suponer que toda autorretención extingue cualquier obligación futura.',rationale:'Generaliza sin base jurídica.'},
      {id:'c',text:'Excluir siempre a los autorretenedores de control extensivo.',rationale:'El MERF menciona expresamente mecanismos de control sobre ellos.'},
    ], correctOptionId:'a', explanation:'Las categorías tributarias importan por las obligaciones que activan. En PJS, evita conclusiones absolutas basadas solo en una etiqueta.', sourceIds:['estatuto-tributario','merf-ct-cr-3007'], verifiedAt,
  },
  {
    id:'q-v4-m5-02', moduleId:'m5', skillIds:['sujeto-pasivo','responsable','roles'], type:'single', difficulty:3,
    stem:'¿Por qué es importante distinguir contribuyente, responsable y agente retenedor?',
    options:[
      {id:'a',text:'Porque el ordenamiento puede atribuir obligaciones distintas a cada rol y una actuación de control debe dirigirse a la responsabilidad realmente aplicable.',rationale:'La etiqueta del sujeto determina deberes y consecuencias diferentes.'},
      {id:'b',text:'Porque todos los roles son idénticos y solo cambia el nombre.',rationale:'El propósito de la distinción es precisamente separar responsabilidades.'},
      {id:'c',text:'Porque solo los agentes retenedores pueden tener obligaciones formales.',rationale:'Múltiples sujetos pueden tener obligaciones formales.'},
    ], correctOptionId:'a', explanation:'Una gran parte del error tributario proviene de atribuir a un sujeto una obligación que corresponde a otra calidad jurídica.', sourceIds:['estatuto-tributario'], verifiedAt,
  },

  // M6
  {
    id:'q-v4-m6-01', moduleId:'m6', skillIds:['normalizacion-saldos','estado-cuenta','evidencia'], type:'pjs', difficulty:4,
    case:'El estado de cuenta muestra una deuda, pero la declaración que la originó fue corregida válidamente y el sistema aún no refleja el cambio.',
    stem:'¿Qué debe priorizarse?',
    options:[
      {id:'a',text:'Cobrar el saldo antiguo porque aparece en pantalla.',rationale:'La pantalla puede contener una inconsistencia que debe depurarse.'},
      {id:'b',text:'Verificar la declaración vigente y aplicar el procedimiento de normalización/corrección para que la cuenta refleje la realidad antes de seguir.',rationale:'La gestión de cartera depende de información veraz.'},
      {id:'c',text:'Eliminar todas las obligaciones del contribuyente.',rationale:'La evidencia solo obliga a revisar la obligación afectada, no a borrar el historial completo.'},
    ], correctOptionId:'b', explanation:'PR-COT-0276 existe precisamente para tratar diferencias entre la información de recaudo/cartera y la realidad de las obligaciones.', sourceIds:['proc-normalizacion-ccc-0276','proc-correccion-inconsistencias-0033'], verifiedAt,
  },
  {
    id:'q-v4-m6-02', moduleId:'m6', skillIds:['recibo-pago','imputacion','saldo'], type:'pjs', difficulty:4,
    case:'Un recibo de pago válido existe, pero fue imputado a un periodo diferente y por ello el periodo correcto aparece en mora.',
    stem:'¿Qué conclusión es más sólida?',
    options:[
      {id:'a',text:'La existencia física del recibo extingue automáticamente cualquier obligación de cualquier periodo.',rationale:'Debe determinarse su imputación jurídica y registral.'},
      {id:'b',text:'Debe verificarse la imputación, los soportes y el procedimiento aplicable para corregir la inconsistencia y establecer el saldo real.',rationale:'La realidad de cuenta exige conectar pago, concepto, periodo y obligación.'},
      {id:'c',text:'No puede corregirse nunca un pago mal registrado.',rationale:'La DIAN cuenta con procedimientos de corrección y normalización.'},
    ], correctOptionId:'b', explanation:'Un pago solo resuelve correctamente el estado de cuenta cuando se identifica cómo afecta la obligación concreta.', sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-ccc-0276'], verifiedAt,
  },
  {
    id:'q-v4-m6-03', moduleId:'m6', skillIds:['certificacion-obligaciones','estado-cuenta','trazabilidad'], type:'pjs', difficulty:4,
    case:'Otra dependencia solicita certificación sobre el cumplimiento sustancial de una obligación, pero el estado de cuenta contiene una inconsistencia pendiente de aclarar.',
    stem:'¿Qué debe evitarse?',
    options:[
      {id:'a',text:'Certificar mecánicamente el dato inconsistente sin revisar los soportes necesarios.',rationale:'La certificación debe apoyarse en información confiable.'},
      {id:'b',text:'Verificar la situación y encauzar la actualización o corrección que corresponda antes de certificar.',rationale:'El procedimiento busca que la información comunicada represente correctamente la obligación.'},
      {id:'c',text:'Documentar las validaciones realizadas.',rationale:'La trazabilidad fortalece la certificación.'},
    ], correctOptionId:'a', explanation:'Certificar es transmitir una conclusión institucional; por ello la calidad del estado de cuenta es un presupuesto central.', sourceIds:['proc-certificacion-obligaciones-0328','proc-normalizacion-ccc-0276'], verifiedAt,
  },
  {
    id:'q-v4-m6-04', moduleId:'m6', skillIds:['extincion','saldo-cero','causa'], type:'pjs', difficulty:4,
    case:'El sistema muestra saldo cero. El expediente no deja claro si la obligación se extinguió por pago, compensación, remisión u otra causa.',
    stem:'¿Qué actuación es más prudente?',
    options:[
      {id:'a',text:'Cerrar automáticamente porque cero siempre explica por sí mismo la causa jurídica.',rationale:'El valor numérico no sustituye la identificación del modo de extinción.'},
      {id:'b',text:'Verificar la causa y los soportes de extinción antes de concluir el expediente, corrigiendo inconsistencias si aparecen.',rationale:'PR-COT-0330 exige conectar el saldo con la forma real de extinción.'},
      {id:'c',text:'Recrear una deuda para que el expediente tenga movimiento.',rationale:'No existe fundamento para inventar una obligación.'},
    ], correctOptionId:'b', explanation:'Un buen estado de cuenta no solo muestra cuánto; también permite explicar por qué la obligación existe o dejó de existir.', sourceIds:['proc-extincion-0330'], verifiedAt,
  },

  // M7
  {
    id:'q-v4-m7-01', moduleId:'m7', skillIds:['ear','autorizacion','requisitos'], type:'pjs', difficulty:3,
    case:'Una entidad financiera desea comenzar a recibir declaraciones y pagos administrados por la DIAN, pero aún no ha culminado el procedimiento de autorización correspondiente.',
    stem:'¿Qué principio operativo debe aplicarse?',
    options:[
      {id:'a',text:'La recepción como EAR exige cumplir la autorización y requisitos institucionales antes de operar como tal.',rationale:'La calidad de EAR no se asume informalmente.'},
      {id:'b',text:'Puede operar primero y pedir autorización cuando acumule suficiente recaudo.',rationale:'Invierte la secuencia del procedimiento.'},
      {id:'c',text:'Cualquier comercio puede recaudar tributos sin vínculo institucional.',rationale:'Desconoce el régimen de entidades autorizadas.'},
    ], correctOptionId:'a', explanation:'PR-COT-0028 separa el proceso de autorización de las actividades posteriores de recepción, transmisión, conciliación y control.', sourceIds:['proc-autorizacion-ear-0028','res-227-2025'], verifiedAt,
  },
  {
    id:'q-v4-m7-02', moduleId:'m7', skillIds:['ear','indice-consignacion','recursos'], type:'pjs', difficulty:4,
    case:'Una EAR transmite correctamente la información de pagos, pero conserva los recursos más allá del plazo que le corresponde según su índice de consignación.',
    stem:'¿Cuál aspecto debe analizarse de manera específica?',
    options:[
      {id:'a',text:'La oportunidad de la consignación de recursos, separada del cumplimiento de transmisión de información.',rationale:'Son obligaciones distintas del servicio de recaudo.'},
      {id:'b',text:'Solo si el archivo fue transmitido, porque eso vuelve irrelevante el dinero.',rationale:'La correcta transmisión no sustituye la consignación oportuna.'},
      {id:'c',text:'La declaración del contribuyente únicamente, sin revisar la EAR.',rationale:'El supuesto describe una posible obligación de la entidad recaudadora.'},
    ], correctOptionId:'a', explanation:'Una de las habilidades clave en EAR es no confundir información con recursos. El índice de consignación regula precisamente el tiempo de disponibilidad de estos últimos.', sourceIds:['proc-indice-consignacion-0029','res-227-2025'], verifiedAt,
  },
  {
    id:'q-v4-m7-03', moduleId:'m7', skillIds:['auditoria-ear','evidencia','muestra'], type:'pjs', difficulty:4,
    case:'Una auditoría a una EAR identifica varios registros atípicos. El equipo propone sancionar todos sin verificar si el patrón corresponde a una falla real o a una regla de procesamiento conocida.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Validar el hallazgo, reunir evidencia suficiente y aplicar el procedimiento correspondiente antes de concluir incumplimiento.',rationale:'Auditar es verificar, no convertir automáticamente una alerta en sanción.'},
      {id:'b',text:'Sancionar todos los registros atípicos porque una auditoría no requiere comprobación.',rationale:'Confunde indicador de riesgo con hecho probado.'},
      {id:'c',text:'Eliminar los registros para que no vuelvan a aparecer.',rationale:'Destruir evidencia impediría control y trazabilidad.'},
    ], correctOptionId:'a', explanation:'El régimen sancionatorio requiere hechos correctamente determinados y respeto del procedimiento. La auditoría construye esa evidencia.', sourceIds:['proc-auditoria-ear-0032','proc-sanciones-ear-0030'], verifiedAt,
  },
  {
    id:'q-v4-m7-04', moduleId:'m7', skillIds:['conciliacion-ear','diferencia','causa'], type:'pjs', difficulty:4,
    case:'En conciliación existe una diferencia entre lo reportado por la EAR y lo registrado en la cuenta. Antes de iniciar sanción se descubre que el recurso sí ingresó, pero un archivo fue reprocesado con fecha equivocada.',
    stem:'¿Qué conclusión es más adecuada?',
    options:[
      {id:'a',text:'Determinar la causa real, corregir la inconsistencia por la ruta competente y reevaluar si subsiste un incumplimiento de la EAR.',rationale:'La consecuencia depende del hecho finalmente probado.'},
      {id:'b',text:'Mantener la sanción imaginada inicialmente aunque la evidencia cambie.',rationale:'La decisión debe ajustarse a hechos verificados.'},
      {id:'c',text:'Ignorar el error de registro para conservar el indicador de hallazgos.',rationale:'La calidad de información es parte del control.'},
    ], correctOptionId:'a', explanation:'Conciliar significa explicar diferencias. Solo después puede saberse si la causa corresponde a registro, transmisión, consignación u otro incumplimiento.', sourceIds:['proc-conciliacion-ear-0373','proc-correccion-inconsistencias-0033'], verifiedAt,
  },

  // M8
  {
    id:'q-v4-m8-01', moduleId:'m8', skillIds:['control-extensivo','segmentacion','universo'], type:'pjs', difficulty:4,
    case:'Una campaña masiva se construye con una base que contiene registros duplicados, contribuyentes ya cumplidos y obligaciones de periodos incorrectos.',
    stem:'¿Qué debe ocurrir antes del contacto masivo?',
    options:[
      {id:'a',text:'Depurar y validar el universo para reducir actuaciones improcedentes y mejorar la efectividad de la campaña.',rationale:'La masividad exige mayor, no menor, control sobre la calidad del universo.'},
      {id:'b',text:'Enviar de todas formas porque en una campaña grande los falsos positivos son irrelevantes.',rationale:'Afectaría confiabilidad, servicio y eficiencia.'},
      {id:'c',text:'Eliminar toda campaña masiva y trabajar solo casos individuales.',rationale:'Control extensivo está diseñado precisamente para gestión de amplia cobertura.'},
    ], correctOptionId:'a', explanation:'PR-COT-0382 busca campañas inmediatas y amplias, pero basadas en información confiable y con resultado medible.', sourceIds:['proc-control-extensivo-0382','proc-normalizacion-ccc-0276'], verifiedAt,
  },
  {
    id:'q-v4-m8-02', moduleId:'m8', skillIds:['control-extensivo','cumplimiento-voluntario','resultado'], type:'pjs', difficulty:3,
    case:'Una campaña envía 50.000 comunicaciones, pero no se mide cuántos obligados corrigieron, declararon o pagaron después del contacto.',
    stem:'¿Qué debilidad tiene la evaluación?',
    options:[
      {id:'a',text:'Confunde volumen de gestión con resultado de cumplimiento.',rationale:'La cobertura es un dato operativo, pero no demuestra por sí sola efectividad.'},
      {id:'b',text:'Ninguna: enviar comunicaciones es el único objetivo posible.',rationale:'El procedimiento busca incentivar cumplimiento, no solo producir envíos.'},
      {id:'c',text:'La campaña debería ocultar el número de comunicaciones.',rationale:'La solución es complementar indicadores, no esconderlos.'},
    ], correctOptionId:'a', explanation:'Un buen control extensivo mide entrada, actuación y resultado: universo válido, contacto y cambio de conducta o estado de la obligación.', sourceIds:['proc-control-extensivo-0382'], verifiedAt,
  },
  {
    id:'q-v4-m8-03', moduleId:'m8', skillIds:['autorretenedores','riesgo','priorizacion'], type:'pjs', difficulty:4,
    case:'Hay capacidad limitada para una campaña y dos grupos: uno con incumplimientos históricos repetidos y alto impacto; otro sin señales recientes y de baja materialidad.',
    stem:'¿Qué enfoque de priorización es más defendible?',
    options:[
      {id:'a',text:'Usar criterios objetivos de riesgo, materialidad y comportamiento para orientar recursos, documentando la selección.',rationale:'Permite focalizar sin convertir la priorización en arbitrariedad.'},
      {id:'b',text:'Elegir contribuyentes por afinidad personal del funcionario.',rationale:'Carece de objetividad e imparcialidad.'},
      {id:'c',text:'Contactar únicamente al grupo que sea más fácil, aunque no tenga riesgo relevante.',rationale:'La facilidad operativa no es un criterio suficiente de efectividad.'},
    ], correctOptionId:'a', explanation:'PR-COT-0382 incorpora principios de objetividad, imparcialidad y confiabilidad. La priorización debe poder explicarse.', sourceIds:['proc-control-extensivo-0382'], verifiedAt,
  },
  {
    id:'q-v4-m8-04', moduleId:'m8', skillIds:['control-extensivo','escalamiento','incumplimiento'], type:'pjs', difficulty:4,
    case:'Después de una campaña, un grupo corrige voluntariamente y otro mantiene una obligación exigible sin atender los contactos realizados.',
    stem:'¿Qué lógica debe seguir la gestión?',
    options:[
      {id:'a',text:'Actualizar el resultado de cada segmento y encauzar los casos persistentes hacia la actuación que corresponda según obligación, competencia y procedimiento.',rationale:'El control extensivo puede alimentar otras rutas cuando el incumplimiento persiste.'},
      {id:'b',text:'Mantener a todos indefinidamente en la misma campaña aunque su estado ya sea distinto.',rationale:'Ignora el resultado de gestión y la evolución del caso.'},
      {id:'c',text:'Considerar cumplidos a todos porque recibieron un mensaje.',rationale:'El contacto no equivale a cumplimiento.'},
    ], correctOptionId:'a', explanation:'La campaña no es un fin en sí mismo. Su resultado debe modificar la clasificación y la siguiente actuación.', sourceIds:['proc-control-extensivo-0382','proc-inicio-cobro-0269'], verifiedAt,
  },

  // M9
  {
    id:'q-v4-m9-01', moduleId:'m9', skillIds:['exigibilidad','firmeza','cobro'], type:'pjs', difficulty:4,
    case:'Un saldo aparece cuantificado, pero el acto que lo origina todavía no se encuentra en una condición que permita exigirlo coactivamente.',
    stem:'¿Qué error debe evitarse?',
    options:[
      {id:'a',text:'Confundir existencia contable de un saldo con exigibilidad jurídica para cobro.',rationale:'La cartera cobrable requiere presupuestos adicionales a la cifra.'},
      {id:'b',text:'Verificar firmeza, ejecutoria y título según la fuente de la obligación.',rationale:'Es el análisis correcto antes del cobro.'},
      {id:'c',text:'Documentar la razón por la que el caso aún no puede avanzar.',rationale:'La trazabilidad es adecuada.'},
    ], correctOptionId:'a', explanation:'Realidad, exigibilidad y título son capas distintas. Una obligación puede existir y no estar aún habilitada para una actuación coactiva concreta.', sourceIds:['estatuto-tributario','proc-inicio-cobro-0269'], verifiedAt,
  },
  {
    id:'q-v4-m9-02', moduleId:'m9', skillIds:['prescripcion','cronologia','interrupcion'], type:'pjs', difficulty:5,
    case:'Al revisar prescripción, el funcionario observa un periodo prolongado sin actuación, pero también una notificación válida del mandamiento dentro de la cronología.',
    stem:'¿Qué debe hacer antes de concluir que transcurrió el término completo?',
    options:[
      {id:'a',text:'Reconstruir la línea de tiempo e identificar los eventos que interrumpen o suspenden el término y sus efectos.',rationale:'La prescripción no se resuelve contando años de calendario sin eventos jurídicos.'},
      {id:'b',text:'Contar solo desde la fecha más antigua y omitir cualquier actuación posterior.',rationale:'Puede desconocer eventos con efecto sobre el término.'},
      {id:'c',text:'Asumir que la prescripción nunca opera frente a la DIAN.',rationale:'El Estatuto Tributario regula expresamente la prescripción de la acción de cobro.'},
    ], correctOptionId:'a', explanation:'La habilidad evaluable es cronológica: fecha inicial + eventos relevantes + efecto de cada evento + nueva secuencia.', sourceIds:['estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m9-03', moduleId:'m9', skillIds:['remision','cartera','extincion'], type:'pjs', difficulty:4,
    case:'Una obligación lleva años registrada y el funcionario propone “borrarla” porque considera improbable su recuperación, sin revisar los presupuestos legales de remisión ni otra forma de extinción.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Aplicar la figura de extinción o depuración que jurídicamente corresponda solo si se acreditan sus presupuestos y con el procedimiento definido.',rationale:'La improbabilidad subjetiva de cobro no permite eliminar una obligación.'},
      {id:'b',text:'Borrar el saldo por decisión individual para mejorar la cartera.',rationale:'Carece de fundamento y trazabilidad.'},
      {id:'c',text:'Mantener cualquier obligación para siempre aunque legalmente proceda su extinción.',rationale:'La cartera también debe depurarse cuando concurren causales legales.'},
    ], correctOptionId:'a', explanation:'Administrar cartera implica cobrar lo real y exigible, pero también depurar correctamente lo que deba extinguirse o reclasificarse.', sourceIds:['estatuto-tributario','proc-extincion-0330'], verifiedAt,
  },
  {
    id:'q-v4-m9-04', moduleId:'m9', skillIds:['realidad-fiscal','calidad-informacion','normalizacion'], type:'pjs', difficulty:4,
    case:'Dos sistemas institucionales muestran valores distintos para la misma obligación y ambos tienen movimientos recientes.',
    stem:'¿Qué respuesta es más profesional?',
    options:[
      {id:'a',text:'Escoger el valor más alto para proteger el recaudo.',rationale:'El mayor valor no es necesariamente el correcto.'},
      {id:'b',text:'Conciliar fuentes, revisar soportes y aplicar la ruta de normalización para establecer un único saldo sustentado.',rationale:'La finalidad es representar la realidad fiscal, no elegir por conveniencia.'},
      {id:'c',text:'Promediar ambos valores.',rationale:'Una obligación jurídica no se determina por promedio matemático entre sistemas inconsistentes.'},
    ], correctOptionId:'b', explanation:'La calidad del dato es una competencia funcional directa del empleo y condiciona todas las actuaciones posteriores.', sourceIds:['proc-normalizacion-ccc-0276','proc-normalizacion-obligacion-0372','merf-ct-cr-3007'], verifiedAt,
  },

  // M10
  {
    id:'q-v4-m10-01', moduleId:'m10', skillIds:['cobro-persuasivo','voluntariedad','escalamiento'], type:'pjs', difficulty:3,
    case:'Durante cobro persuasivo, el contribuyente solicita conocer el saldo y opciones para normalizar. Aún no se ha expedido mandamiento.',
    stem:'¿Qué actuación se ajusta mejor a la finalidad persuasiva?',
    options:[
      {id:'a',text:'Informar la obligación y las alternativas procedentes para promover cumplimiento voluntario, dejando registro de la gestión.',rationale:'Corresponde al objetivo de normalización previa o paralela según el marco aplicable.'},
      {id:'b',text:'Afirmar que ya existe una orden judicial de embargo aunque no sea cierto.',rationale:'La presión mediante información falsa es improcedente.'},
      {id:'c',text:'Prometer una reducción de la deuda sin base legal.',rationale:'La gestión persuasiva no permite crear beneficios inexistentes.'},
    ], correctOptionId:'a', explanation:'Persuadir es gestionar cumplimiento con información correcta y opciones legales, no intimidar ni negociar fuera de la norma.', sourceIds:['concepto-cobro-persuasivo-4229-2026','ce-cobro-persuasivo-2010'], verifiedAt,
  },
  {
    id:'q-v4-m10-02', moduleId:'m10', skillIds:['facilidad-pago','garantia','evaluacion'], type:'pjs', difficulty:4,
    case:'Se solicita una facilidad de pago. El expediente presenta información incompleta sobre la garantía y capacidad de cumplimiento, pero el solicitante pide aprobación inmediata.',
    stem:'¿Qué debe hacer el funcionario?',
    options:[
      {id:'a',text:'Aprobar sin verificar requisitos para mostrar orientación al ciudadano.',rationale:'El servicio no elimina las condiciones legales de la facilidad.'},
      {id:'b',text:'Verificar los requisitos, información y garantías que resulten exigibles y decidir conforme al procedimiento.',rationale:'La facilidad es una actuación reglada que requiere soporte.'},
      {id:'c',text:'Negar siempre cualquier facilidad porque retrasa el recaudo.',rationale:'La ley contempla expresamente esta herramienta de normalización.'},
    ], correctOptionId:'b', explanation:'La facilidad busca hacer viable el pago, pero debe estructurarse sobre requisitos y seguimiento que protejan el crédito fiscal.', sourceIds:['proc-facilidades-0272','estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m10-03', moduleId:'m10', skillIds:['facilidad-pago','incumplimiento','cobro'], type:'pjs', difficulty:4,
    case:'Una facilidad vigente entra en incumplimiento y se configuran los presupuestos para declararlo conforme al procedimiento.',
    stem:'¿Qué lógica sigue la gestión?',
    options:[
      {id:'a',text:'Documentar y tramitar la declaración de incumplimiento y continuar la recuperación del crédito según corresponda, incluyendo garantías cuando proceda.',rationale:'El procedimiento contempla control del acuerdo y consecuencias del incumplimiento.'},
      {id:'b',text:'Mantener la facilidad como cumplida para evitar trabajo adicional.',rationale:'Distorsiona la realidad de cartera.'},
      {id:'c',text:'Eliminar la obligación por el hecho de haber existido una facilidad.',rationale:'La facilidad no extingue la deuda por sí sola.'},
    ], correctOptionId:'a', explanation:'Una facilidad cambia la ruta de cobro mientras está vigente, pero su incumplimiento reactiva las acciones previstas para recuperar el saldo.', sourceIds:['proc-facilidades-0272','dian-facilidades-faq-2026'], verifiedAt,
  },
  {
    id:'q-v4-m10-04', moduleId:'m10', skillIds:['facilidad-pago','prescripcion','efectos'], type:'pjs', difficulty:5,
    case:'Al analizar prescripción, el expediente muestra que durante la cronología se otorgó una facilidad de pago.',
    stem:'¿Qué debe hacer el funcionario?',
    options:[
      {id:'a',text:'Incorporar el efecto jurídico de la facilidad dentro de la línea de tiempo antes de concluir sobre prescripción.',rationale:'La facilidad tiene efectos expresos sobre la acción de cobro y su cronología.'},
      {id:'b',text:'Ignorar la facilidad porque solo cambia la forma de pago.',rationale:'Puede tener efectos sobre términos y cobro.'},
      {id:'c',text:'Asumir que toda facilidad extingue definitivamente la obligación el día que se concede.',rationale:'La extinción depende del pago/cumplimiento, no de la mera concesión.'},
    ], correctOptionId:'a', explanation:'En casos complejos de prescripción, cada evento debe clasificarse por su efecto; no se cuenta un periodo continuo desconectado de la historia del expediente.', sourceIds:['estatuto-tributario','dian-facilidades-faq-2026'], verifiedAt,
  },

  // M11
  {
    id:'q-v4-m11-01', moduleId:'m11', skillIds:['titulo-ejecutivo','soporte','cobro'], type:'pjs', difficulty:4,
    case:'El sistema marca una deuda vencida, pero en el expediente no se identifica con claridad cuál documento presta mérito ejecutivo para iniciar el cobro.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Identificar y verificar el título correspondiente antes de expedir mandamiento.',rationale:'El cobro coactivo necesita soporte ejecutivo conforme al Estatuto Tributario.'},
      {id:'b',text:'Expedir mandamiento únicamente con una captura de pantalla del saldo.',rationale:'La cifra de sistema no sustituye por sí sola el título requerido.'},
      {id:'c',text:'Embargar y rematar antes de identificar la obligación.',rationale:'Salta presupuestos y etapas esenciales.'},
    ], correctOptionId:'a', explanation:'El título conecta la obligación con la posibilidad jurídica de exigirla coactivamente.', sourceIds:['estatuto-tributario','proc-inicio-cobro-0269'], verifiedAt,
  },
  {
    id:'q-v4-m11-02', moduleId:'m11', skillIds:['mandamiento-pago','contenido','obligaciones'], type:'pjs', difficulty:4,
    case:'Se proyecta un mandamiento que incluye periodos ya pagados junto con otros exigibles, porque el estado de cuenta no fue actualizado.',
    stem:'¿Qué debe hacerse antes de notificarlo?',
    options:[
      {id:'a',text:'Depurar el estado y proyectar la actuación sobre obligaciones realmente exigibles y correctamente determinadas.',rationale:'El mandamiento no debe trasladar errores conocidos del estado de cuenta.'},
      {id:'b',text:'Notificarlo completo y esperar que el deudor demuestre lo que ya consta en la DIAN.',rationale:'La administración debe actuar sobre información veraz y no ignorar evidencia disponible.'},
      {id:'c',text:'Duplicar los periodos para compensar posibles intereses.',rationale:'No existe fundamento para inflar la obligación.'},
    ], correctOptionId:'a', explanation:'La calidad de datos no es una etapa “previa” que deje de importar una vez se prepara el cobro; acompaña toda la actuación.', sourceIds:['proc-mandamiento-0270','proc-normalizacion-ccc-0276'], verifiedAt,
  },
  {
    id:'q-v4-m11-03', moduleId:'m11', skillIds:['notificacion-mandamiento','termino-defensa','cronologia'], type:'pjs', difficulty:4,
    case:'El mandamiento fue expedido el lunes, pero se notificó válidamente varios días después. El funcionario va a contar el término para pagar o proponer excepciones.',
    stem:'¿Desde qué evento debe construir el análisis?',
    options:[
      {id:'a',text:'Desde la notificación válida del mandamiento, aplicando el término previsto por el régimen de cobro.',rationale:'La defensa se articula a la comunicación jurídica del mandamiento.'},
      {id:'b',text:'Desde la fecha en que el funcionario empezó a redactarlo.',rationale:'La preparación interna no activa por sí sola el término del deudor.'},
      {id:'c',text:'Desde cualquier fecha que produzca vencimiento más rápido.',rationale:'Los términos no dependen de conveniencia administrativa.'},
    ], correctOptionId:'a', explanation:'En cobro, fecha de expedición y fecha de notificación cumplen funciones distintas. El PJS puede probar justamente esa diferencia.', sourceIds:['estatuto-tributario','proc-mandamiento-0270'], verifiedAt,
  },
  {
    id:'q-v4-m11-04', moduleId:'m11', skillIds:['mandamiento','competencia','firma'], type:'pjs', difficulty:4,
    case:'El proyecto de mandamiento está jurídicamente bien sustentado, pero fue preparado para firma de una persona que no tiene la competencia para expedirlo en ese expediente.',
    stem:'¿Qué debe corregirse?',
    options:[
      {id:'a',text:'La autoridad decisora: el mandamiento debe ser expedido por quien tenga competencia, además de cumplir los demás requisitos.',rationale:'Una buena motivación no compensa una falta de competencia.'},
      {id:'b',text:'Nada, porque el contenido correcto permite firmar a cualquiera.',rationale:'La competencia es parte de la validez de la actuación.'},
      {id:'c',text:'Solo cambiar el tipo de letra del documento.',rationale:'No resuelve el defecto jurídico.'},
    ], correctOptionId:'a', explanation:'La técnica PJS debe revisar siempre “quién actúa” además de “qué se hace” y “cuándo se hace”.', sourceIds:['estatuto-tributario','proc-mandamiento-0270'], verifiedAt,
  },

  // M12
  {
    id:'q-v4-m12-01', moduleId:'m12', skillIds:['excepciones','pago','defensa'], type:'pjs', difficulty:4,
    case:'Después de la notificación del mandamiento, el deudor presenta oportunamente soporte completo de pago de una de las obligaciones incluidas.',
    stem:'¿Cómo debe tratarse el planteamiento?',
    options:[
      {id:'a',text:'Como una defensa que debe ser verificada y decidida dentro del trámite de excepciones aplicable.',rationale:'El pago efectivo integra el catálogo legal de excepciones.'},
      {id:'b',text:'Ignorarlo porque después del mandamiento ningún pago puede discutirse.',rationale:'El régimen prevé expresamente defensas frente al mandamiento.'},
      {id:'c',text:'Rematar bienes antes de leer el soporte.',rationale:'Desconoce la etapa de defensa.'},
    ], correctOptionId:'a', explanation:'Reconocer el nombre de una excepción es menos importante que ubicarla en la secuencia: propuesta → prueba → decisión → efectos sobre el cobro.', sourceIds:['estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m12-02', moduleId:'m12', skillIds:['excepciones','falta-ejecutoria','titulo'], type:'pjs', difficulty:4,
    case:'El deudor demuestra que el acto que sirve de fundamento al cobro aún no estaba ejecutoriado al momento relevante.',
    stem:'¿Qué excepción se relaciona directamente con ese hecho?',
    options:[
      {id:'a',text:'Falta de ejecutoria del título.',rationale:'El catálogo del artículo 831 contempla esta hipótesis.'},
      {id:'b',text:'Pago efectivo.',rationale:'El supuesto no describe un pago.'},
      {id:'c',text:'Acuerdo de pago.',rationale:'No se ha mencionado una facilidad o acuerdo vigente.'},
    ], correctOptionId:'a', explanation:'Los distractores del examen pueden ser excepciones reales pero incompatibles con los hechos. Primero clasifica el hecho, luego selecciona la figura.', sourceIds:['estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m12-03', moduleId:'m12', skillIds:['resolucion-excepciones','motivacion','prueba'], type:'pjs', difficulty:5,
    case:'Se presentaron tres excepciones diferentes con soportes distintos. El proyecto de decisión responde solo una y utiliza una frase genérica para negar las otras dos.',
    stem:'¿Qué mejora necesita la decisión?',
    options:[
      {id:'a',text:'Analizar las excepciones y pruebas pertinentes y motivar la conclusión sobre cada cuestión que deba resolverse.',rationale:'La decisión debe mostrar cómo fueron tratados los argumentos relevantes.'},
      {id:'b',text:'Mantener la frase genérica porque toda excepción debe negarse.',rationale:'No existe esa regla y la decisión requiere análisis.'},
      {id:'c',text:'Omitir toda referencia al expediente.',rationale:'Debilitaría motivación y control.'},
    ], correctOptionId:'a', explanation:'La resolución de excepciones es una decisión, no una formalidad. Debe ser coherente con hechos, pruebas y normas aplicables.', sourceIds:['estatuto-tributario','cpaca'], verifiedAt,
  },
  {
    id:'q-v4-m12-04', moduleId:'m12', skillIds:['acto-tramite','recursos','cobro'], type:'pjs', difficulty:4,
    case:'Dentro del cobro se expide una actuación de trámite para la cual el Estatuto Tributario no contempla recurso. El deudor presenta reposición como si fuera una decisión definitiva recurrible.',
    stem:'¿Qué debe analizar el funcionario?',
    options:[
      {id:'a',text:'La naturaleza de la actuación y la regla especial del artículo 833-1 sobre recursos en el procedimiento de cobro.',rationale:'No toda actuación de cobro admite recurso.'},
      {id:'b',text:'Conceder cualquier recurso por cortesía.',rationale:'La procedencia depende de la ley.'},
      {id:'c',text:'Transformar la actuación en sentencia judicial.',rationale:'No corresponde a la naturaleza administrativa del procedimiento.'},
    ], correctOptionId:'a', explanation:'Una respuesta PJS correcta puede ser “no procede”, pero debe derivarse de la naturaleza del acto y la regla especial, no de una actitud restrictiva general.', sourceIds:['estatuto-tributario'], verifiedAt,
  },

  // M13
  {
    id:'q-v4-m13-01', moduleId:'m13', skillIds:['investigacion-bienes','trazabilidad','medidas'], type:'pjs', difficulty:4,
    case:'Antes de decretar una medida, se reciben respuestas contradictorias sobre la titularidad de un bien aparentemente asociado al deudor.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Verificar la información de titularidad y documentar la investigación antes de afectar el bien.',rationale:'La medida debe recaer sobre bienes jurídicamente vinculables al obligado en los términos aplicables.'},
      {id:'b',text:'Embargar de inmediato cualquier bien con nombre parecido.',rationale:'Aumenta el riesgo de afectar a terceros indebidamente.'},
      {id:'c',text:'Ignorar toda investigación porque la cautela no requiere soporte.',rationale:'PR-COT-0326 existe para identificar bienes y sustentar actuaciones posteriores.'},
    ], correctOptionId:'a', explanation:'Investigar bienes no es coleccionar coincidencias; es construir una base verificable para medidas eficaces y legítimas.', sourceIds:['proc-investigacion-bienes-0326','proc-medidas-0327'], verifiedAt,
  },
  {
    id:'q-v4-m13-02', moduleId:'m13', skillIds:['levantamiento-medidas','extincion','oportunidad'], type:'pjs', difficulty:4,
    case:'La obligación garantizada por una medida cautelar queda plenamente extinguida y no existen otras razones jurídicas para mantenerla.',
    stem:'¿Qué debe evaluarse?',
    options:[
      {id:'a',text:'El levantamiento de la medida conforme al procedimiento y la actualización del expediente.',rationale:'Una cautela no debe permanecer sin la causa que la justifica.'},
      {id:'b',text:'Mantenerla indefinidamente como castigo histórico.',rationale:'La medida cumple función asegurativa, no punitiva autónoma.'},
      {id:'c',text:'Transferir el bien a la DIAN sin trámite adicional.',rationale:'Confunde cautela con adjudicación.'},
    ], correctOptionId:'a', explanation:'Tan importante como decretar una medida oportunamente es levantarla cuando desaparecen sus presupuestos.', sourceIds:['proc-levantamiento-medidas-0345','proc-extincion-0330'], verifiedAt,
  },
  {
    id:'q-v4-m13-03', moduleId:'m13', skillIds:['avaluo','secuestro','secuencia'], type:'pjs', difficulty:4,
    case:'Existe resolución de seguir adelante y el bien fue secuestrado, pero aún no se ha determinado su valor para continuar la ejecución.',
    stem:'¿Qué actuación corresponde en la cadena de ejecución?',
    options:[
      {id:'a',text:'Adelantar el avalúo conforme al procedimiento aplicable.',rationale:'El avalúo fija el valor del bien antes de etapas posteriores como el remate.'},
      {id:'b',text:'Volver a expedir mandamiento de pago por el mismo hecho.',rationale:'La actuación se encuentra en una etapa posterior.'},
      {id:'c',text:'Cerrar el expediente porque el secuestro extingue la deuda.',rationale:'El secuestro asegura/custodia; no equivale a pago.'},
    ], correctOptionId:'a', explanation:'En casos de secuencia, pregúntate qué dato o condición falta para la siguiente etapa. Aquí falta valorar el activo.', sourceIds:['proc-avaluo-0389','proc-secuestro-0388'], verifiedAt,
  },
  {
    id:'q-v4-m13-04', moduleId:'m13', skillIds:['liquidacion-credito','avaluo','distincion'], type:'pjs', difficulty:4,
    case:'Un funcionario confunde el documento que calcula capital, intereses y costas con el que determina el valor comercial del bien secuestrado.',
    stem:'¿Cómo se corrige la confusión?',
    options:[
      {id:'a',text:'El avalúo determina cuánto vale el bien; la liquidación del crédito y costas determina cuánto se ejecuta por la obligación.',rationale:'Son objetos y procedimientos diferentes dentro de la ejecución.'},
      {id:'b',text:'Ambos documentos siempre contienen exactamente el mismo valor.',rationale:'El valor del activo y el monto del crédito no tienen por qué coincidir.'},
      {id:'c',text:'La liquidación del crédito sustituye el secuestro.',rationale:'Cumplen funciones distintas.'},
    ], correctOptionId:'a', explanation:'Esta distinción evita saltos lógicos: activo, crédito y actuación procesal son piezas diferentes de la ejecución.', sourceIds:['proc-avaluo-0389','proc-liquidacion-credito-0390'], verifiedAt,
  },

  // M14
  {
    id:'q-v4-m14-01', moduleId:'m14', skillIds:['reorganizacion','credito-fiscal','presentacion'], type:'pjs', difficulty:5,
    case:'La DIAN es informada de la apertura de una reorganización. El estado de cuenta del deudor contiene obligaciones que deben ser verificadas antes de presentar la acreencia.',
    stem:'¿Qué debe priorizarse?',
    options:[
      {id:'a',text:'Depurar y consolidar oportunamente la acreencia fiscal y actuar dentro del proceso concursal por la ruta institucional correspondiente.',rationale:'La defensa del crédito exige llegar con información real y dentro de la oportunidad procesal.'},
      {id:'b',text:'Continuar como si el proceso concursal no existiera.',rationale:'La apertura modifica la forma en que debe gestionarse el crédito.'},
      {id:'c',text:'Inventar una acreencia estimada para no revisar el estado de cuenta.',rationale:'La presentación debe sustentarse en información verificable.'},
    ], correctOptionId:'a', explanation:'PR-COT-0431 conecta directamente la noticia del concurso con la depuración de obligaciones y la intervención para defender el crédito fiscal.', sourceIds:['proc-inicio-concursales-0431','proc-reorganizacion-0273'], verifiedAt,
  },
  {
    id:'q-v4-m14-02', moduleId:'m14', skillIds:['responsables-solidarios','concursal','cobro'], type:'pjs', difficulty:5,
    case:'Durante la revisión concursal se identifica un posible responsable solidario respecto de determinadas obligaciones.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Analizar los presupuestos jurídicos de responsabilidad y activar, si corresponden, las actuaciones de cobro por la ruta competente.',rationale:'La solidaridad no se presume sin norma y hechos, pero tampoco debe ignorarse cuando existe.'},
      {id:'b',text:'Cobrar a cualquier tercero cercano al deudor.',rationale:'La relación personal no crea solidaridad tributaria.'},
      {id:'c',text:'Ignorar responsables distintos del concursado en todos los casos.',rationale:'Los procedimientos contemplan revisión de responsables solidarios/subsidiarios cuando proceda.'},
    ], correctOptionId:'a', explanation:'Un proceso concursal no elimina la necesidad de identificar correctamente quiénes pueden responder por el crédito bajo reglas legales específicas.', sourceIds:['proc-inicio-concursales-0431','estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m14-03', moduleId:'m14', skillIds:['liquidacion-judicial','adjudicacion','secuencia'], type:'pjs', difficulty:4,
    case:'En una liquidación judicial avanza el proceso y llega el momento de materializar la recuperación mediante la adjudicación de bienes conforme a las decisiones concursales.',
    stem:'¿Qué relación procedimental debe reconocer el gestor?',
    options:[
      {id:'a',text:'La gestión de liquidación puede desembocar en el procedimiento de adjudicación y posteriormente en la aplicación/extinción que corresponda.',rationale:'Los procedimientos institucionales están conectados según la evolución del proceso concursal.'},
      {id:'b',text:'La adjudicación ocurre antes de que exista cualquier proceso de liquidación.',rationale:'Invierte la secuencia lógica del supuesto.'},
      {id:'c',text:'La apertura concursal borra de inmediato todas las obligaciones fiscales.',rationale:'El crédito debe ser reconocido y gestionado conforme al proceso.'},
    ], correctOptionId:'a', explanation:'En M14 importa comprender rutas, no solo definiciones: inicio concursal → proceso específico → reconocimiento/adjudicación → aplicación a la obligación.', sourceIds:['proc-liquidacion-judicial-0368','proc-adjudicacion-0369'], verifiedAt,
  },
  {
    id:'q-v4-m14-04', moduleId:'m14', skillIds:['concurso','informacion','plazos'], type:'pjs', difficulty:5,
    case:'La noticia de un proceso concursal llega tarde a una dependencia y quedan pocos días para una actuación relevante. El saldo presenta además una inconsistencia menor corregible.',
    stem:'¿Qué respuesta combina mejor oportunidad y calidad?',
    options:[
      {id:'a',text:'Priorizar de inmediato la verificación/corrección necesaria y coordinar la presentación o actuación concursal dentro de la oportunidad, dejando trazabilidad del riesgo.',rationale:'Gestiona simultáneamente plazo y calidad del crédito.'},
      {id:'b',text:'Esperar indefinidamente a tener un expediente perfecto aunque se pierda la oportunidad procesal.',rationale:'Ignora el efecto de los términos del proceso.'},
      {id:'c',text:'Presentar cualquier cifra sin soporte y corregir años después.',rationale:'La urgencia no elimina el deber de sustentación.'},
    ], correctOptionId:'a', explanation:'Los casos reales obligan a administrar tensiones. La solución profesional anticipa el término, coordina tareas críticas y evita tanto la parálisis como la improvisación.', sourceIds:['proc-inicio-concursales-0431','proc-normalizacion-ccc-0276'], verifiedAt,
  },

  // M15
  {
    id:'q-v4-m15-01', moduleId:'m15', skillIds:['pago-exceso','pago-no-debido','clasificacion'], type:'pjs', difficulty:3,
    case:'Una persona pagó dos veces una obligación que sí existía y por el mismo periodo.',
    stem:'¿Qué categoría debe analizarse primero?',
    options:[
      {id:'a',text:'Pago en exceso, porque existía obligación pero se pagó más de lo debido.',rationale:'La duplicidad sobre una obligación real apunta a un exceso.'},
      {id:'b',text:'Pago de lo no debido necesariamente, porque cualquier duplicidad implica inexistencia de obligación.',rationale:'La obligación sí existía; el problema es la cuantía pagada.'},
      {id:'c',text:'Saldo a favor declarado, sin revisar la naturaleza del pago.',rationale:'Son figuras distintas y no deben confundirse.'},
    ], correctOptionId:'a', explanation:'Clasificar correctamente el origen del crédito a favor determina requisitos, oportunidad y procedimiento posterior.', sourceIds:['proc-pagos-exceso-0128','dian-devoluciones-servicio-2026'], verifiedAt,
  },
  {
    id:'q-v4-m15-02', moduleId:'m15', skillIds:['compensacion','devolucion','obligaciones-cargo'], type:'pjs', difficulty:4,
    case:'Se reconoce un valor a favor del contribuyente y simultáneamente existen obligaciones a su cargo que pueden ser objeto de compensación según la normativa.',
    stem:'¿Qué idea debe tener presente el funcionario?',
    options:[
      {id:'a',text:'Devolución y compensación son mecanismos distintos y el saldo reconocido debe analizarse frente a las obligaciones a cargo antes de definir la disposición final.',rationale:'La existencia de deuda puede afectar la forma de materializar el saldo a favor.'},
      {id:'b',text:'Todo saldo reconocido debe pagarse en efectivo sin revisar obligaciones a cargo.',rationale:'Desconoce la figura de compensación.'},
      {id:'c',text:'Toda obligación a cargo permite retener cualquier valor sin procedimiento.',rationale:'La actuación debe estar respaldada por las reglas aplicables.'},
    ], correctOptionId:'a', explanation:'En CT-CR-3007, cartera y devoluciones se encuentran precisamente en este tipo de expedientes.', sourceIds:['estatuto-tributario','proc-devoluciones-sie-0124'], verifiedAt,
  },

  // M16
  {
    id:'q-v4-m16-01', moduleId:'m16', skillIds:['marcas-sie','sustanciacion','alerta'], type:'pjs', difficulty:5,
    case:'El SIE genera una marca de riesgo en una solicitud de devolución. Un funcionario propone rechazar automáticamente por la sola existencia de la marca.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Revisar la marca, verificar su fundamento y documentar el análisis; la alerta no sustituye por sí sola la decisión jurídica.',rationale:'La guía de sustanciación exige revisar y soportar cómo se tratan las marcas.'},
      {id:'b',text:'Rechazar sin mirar el expediente.',rationale:'Confunde herramienta de riesgo con causal decisoria automática.'},
      {id:'c',text:'Borrar la marca del sistema para evitar trabajo adicional.',rationale:'Eliminar una alerta sin análisis compromete control y trazabilidad.'},
    ], correctOptionId:'a', explanation:'La automatización ayuda a focalizar, pero el sustanciador conserva la responsabilidad de analizar la evidencia y aplicar las causales legales.', sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025'], verifiedAt,
  },
  {
    id:'q-v4-m16-02', moduleId:'m16', skillIds:['inclusion-forzosa','riesgo','documentacion'], type:'pjs', difficulty:5,
    case:'La solicitud no fue seleccionada inicialmente por el sistema para un tratamiento de mayor riesgo, pero el sustanciador identifica hechos objetivos relevantes que ameritan evaluar una inclusión adicional conforme a los criterios institucionales.',
    stem:'¿Qué debe hacer?',
    options:[
      {id:'a',text:'Aplicar la ruta prevista para solicitar/justificar la inclusión con criterios documentados y controles definidos, no por intuición aislada.',rationale:'La guía contempla criterios y documentación para este tipo de decisión.'},
      {id:'b',text:'Forzar cualquier inclusión sin explicar la razón.',rationale:'Eliminaría objetividad y trazabilidad.'},
      {id:'c',text:'Ignorar siempre cualquier riesgo que el sistema no detectó automáticamente.',rationale:'El procedimiento mantiene intervención y criterio profesional del sustanciador.'},
    ], correctOptionId:'a', explanation:'Un sistema de riesgo no reemplaza al funcionario; tampoco autoriza discrecionalidad sin soporte. El punto es combinar señal automatizada y juicio documentado.', sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025'], verifiedAt,
  },
  {
    id:'q-v4-m16-03', moduleId:'m16', skillIds:['verificacion-devolucion','investigacion-previa','distincion'], type:'pjs', difficulty:5,
    case:'Durante la sustanciación aparecen elementos que requieren verificar datos de la solicitud. Un compañero afirma que toda verificación equivale automáticamente a abrir la investigación previa del artículo 857-1.',
    stem:'¿Qué corrección conceptual es necesaria?',
    options:[
      {id:'a',text:'La verificación ordinaria y la investigación previa son actuaciones distintas; la segunda requiere sus presupuestos legales específicos.',rationale:'La doctrina DIAN distingue las dos figuras.'},
      {id:'b',text:'Son siempre la misma actuación y tienen idéntica consecuencia.',rationale:'El concepto DIAN diferencia su naturaleza y alcance.'},
      {id:'c',text:'En devoluciones nunca puede verificarse información.',rationale:'La verificación es parte central de la sustanciación.'},
    ], correctOptionId:'a', explanation:'La clave PJS es no escalar automáticamente una actividad de control a una figura más intensa sin identificar sus presupuestos.', sourceIds:['concepto-devoluciones-16116-2025','estatuto-tributario'], verifiedAt,
  },
  {
    id:'q-v4-m16-04', moduleId:'m16', skillIds:['certificacion-bancaria','pago-devolucion','requisitos'], type:'pjs', difficulty:4,
    case:'La solicitud fue aprobada y se prepara la disposición del recurso, pero la información bancaria necesaria presenta inconsistencias.',
    stem:'¿Qué debe hacerse antes de ordenar el pago?',
    options:[
      {id:'a',text:'Verificar y corregir la información requerida para que el pago pueda realizarse al destinatario y cuenta que correspondan.',rationale:'La gestión del pago también forma parte del procedimiento y debe apoyarse en datos válidos.'},
      {id:'b',text:'Enviar el dinero a cualquier cuenta aportada verbalmente.',rationale:'Aumentaría riesgo operativo y de pago incorrecto.'},
      {id:'c',text:'Considerar que la aprobación elimina todos los controles de pago.',rationale:'Decisión de fondo y ejecución financiera son etapas diferentes.'},
    ], correctOptionId:'a', explanation:'Una devolución no termina al reconocer el derecho: la disposición y pago deben ejecutarse con información correcta y controles suficientes.', sourceIds:['guia-devoluciones-ct-cot-0038','proc-devoluciones-sie-0124'], verifiedAt,
  },

  // M17
  {
    id:'q-v4-m17-01', moduleId:'m17', skillIds:['minimo-privilegio','roles','acceso'], type:'pjs', difficulty:4,
    case:'Un funcionario necesita consultar estados de cuenta, pero solicita un rol que además permite modificar saldos y administrar usuarios “por si algún día lo necesita”.',
    stem:'¿Qué decisión es más segura?',
    options:[
      {id:'a',text:'Asignar el nivel mínimo de privilegio necesario para la función actual y tramitar futuras ampliaciones cuando exista necesidad y autorización.',rationale:'Reduce exposición y mantiene alineación entre rol y función.'},
      {id:'b',text:'Asignar siempre el rol más alto para evitar solicitudes futuras.',rationale:'Aumenta riesgo sin necesidad funcional.'},
      {id:'c',text:'Compartir una cuenta administradora entre todo el equipo.',rationale:'Destruye trazabilidad individual.'},
    ], correctOptionId:'a', explanation:'La auditoría de accesos DIAN muestra por qué activación, revisión e inactivación de roles son controles operativos reales, no teoría de seguridad abstracta.', sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian'], verifiedAt,
  },
  {
    id:'q-v4-m17-02', moduleId:'m17', skillIds:['baja-acceso','terceros','ciclo-vida'], type:'pjs', difficulty:4,
    case:'El contrato de un tercero finalizó ayer. Su cuenta mantiene acceso VPN y permisos sobre un repositorio del subproceso.',
    stem:'¿Qué debe ocurrir?',
    options:[
      {id:'a',text:'Activar oportunamente la baja o ajuste de accesos conforme al proceso definido y verificar su ejecución.',rationale:'La necesidad de acceso terminó y conservarla amplía riesgo innecesario.'},
      {id:'b',text:'Mantener todos los permisos durante varios meses por comodidad.',rationale:'Contradice el ciclo de vida de acceso y mínimo privilegio.'},
      {id:'c',text:'Entregar la cuenta a su reemplazo para ahorrar tiempo.',rationale:'Las cuentas y responsabilidades deben gestionarse individualmente.'},
    ], correctOptionId:'a', explanation:'Un permiso válido puede dejar de serlo cuando cambia la relación laboral o contractual. La seguridad también consiste en retirar a tiempo.', sourceIds:['auditoria-accesos-dian-2025','modelo-seguridad-dian'], verifiedAt,
  },
  {
    id:'q-v4-m17-03', moduleId:'m17', skillIds:['trazabilidad','credenciales','responsabilidad'], type:'pjs', difficulty:3,
    case:'Un compañero pide la contraseña de otro usuario porque su cuenta está bloqueada y necesita terminar una corrección urgente.',
    stem:'¿Qué alternativa preserva mejor la continuidad y la seguridad?',
    options:[
      {id:'a',text:'Usar el canal institucional para recuperar/desbloquear el acceso o escalar al rol autorizado, sin compartir credenciales.',rationale:'Mantiene autenticidad y trazabilidad de quién realiza la operación.'},
      {id:'b',text:'Prestar la contraseña y cambiarla al final del día.',rationale:'Durante el uso compartido se pierde atribución individual de acciones.'},
      {id:'c',text:'Crear una contraseña común para todo el equipo.',rationale:'Amplifica el mismo problema y elimina responsabilidad individual.'},
    ], correctOptionId:'a', explanation:'La urgencia debe resolverse con mecanismos de continuidad autorizados, no sacrificando controles que después impiden reconstruir la actuación.', sourceIds:['manual-seguridad-dian','auditoria-accesos-dian-2025'], verifiedAt,
  },
]
