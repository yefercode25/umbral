import type { Question } from '../../../../src/types/course'

const verifiedAt = '2026-09-13'

export const dianIntegratedQuestions: Question[] = [
  // Caso 1 · Estado de cuenta, normalización y cobro
  {
    id:'q-int-account-01', moduleId:'m6', relatedModuleIds:['m9','m11','m17'], scenarioId:'case-account-reality', integrated:true,
    skillIds:['estado-cuenta','normalizacion-saldos','calidad-datos'], type:'pjs', difficulty:4,
    case:'El aplicativo de cobro muestra una obligación por $12 millones. En el expediente aparece un recibo de pago por $4 millones que no está afectando la obligación y una solicitud de corrección aún pendiente. Todavía no se ha expedido mandamiento de pago.',
    stem:'¿Cuál es la actuación inicial más sólida?',
    options:[
      {id:'a',text:'Expedir mandamiento por $12 millones y revisar el pago después.',rationale:'Cobrar primero sobre una cifra posiblemente irreal traslada el error a una actuación de mayor consecuencia.'},
      {id:'b',text:'Contrastar los soportes y tramitar la corrección/normalización correspondiente para determinar el saldo real antes de iniciar el cobro.',rationale:'Las rutas de corrección y normalización buscan que recaudo y cartera reflejen la realidad de la obligación antes de continuar.'},
      {id:'c',text:'Eliminar toda la obligación porque existe un recibo de pago.',rationale:'Un recibo por parte del valor no demuestra extinción total; debe determinarse su efecto real.'}
    ], correctOptionId:'b', explanation:'CT-CR-3007 no solo cobra: también depura el estado de cuenta. Cuando existe evidencia de una inconsistencia material, la secuencia razonable es verificar, corregir/normalizar y luego definir la actuación de cobro sobre el saldo real.', sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-obligacion-0372','proc-normalizacion-ccc-0276','proc-inicio-cobro-0269'], verifiedAt
  },
  {
    id:'q-int-account-02', moduleId:'m9', relatedModuleIds:['m6','m11'], scenarioId:'case-account-reality', integrated:true,
    skillIds:['exigibilidad','estado-cuenta','inicio-cobro'], type:'pjs', difficulty:4,
    case:'Tras la normalización del expediente anterior, el saldo real queda en $8 millones.',
    stem:'¿Qué debe verificarse antes de convertir ese saldo en una actuación coactiva?',
    options:[
      {id:'a',text:'Que exista una obligación clara, expresa y exigible y el soporte que preste mérito ejecutivo según corresponda.',rationale:'La cifra depurada debe además reunir los presupuestos jurídicos para el cobro.'},
      {id:'b',text:'Que el contribuyente tenga redes sociales activas.',rationale:'No es un presupuesto jurídico del cobro.'},
      {id:'c',text:'Que el saldo sea superior a cualquier pago realizado durante el año.',rationale:'El monto relativo a otros pagos no reemplaza claridad, exigibilidad ni título.'}
    ], correctOptionId:'a', explanation:'Normalizar el saldo resuelve la realidad cuantitativa, pero el inicio del cobro exige además revisar los presupuestos jurídicos y documentales del crédito.', sourceIds:['proc-inicio-cobro-0269','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-int-account-03', moduleId:'m11', relatedModuleIds:['m6','m9'], scenarioId:'case-account-reality', integrated:true,
    skillIds:['mandamiento-pago','calidad-datos','debido-proceso'], type:'pjs', difficulty:5,
    case:'Supón ahora que el mandamiento ya había sido expedido sobre $12 millones y, antes de avanzar, se confirma documentalmente que $4 millones estaban pagados y no fueron aplicados.',
    stem:'¿Qué razonamiento es correcto?',
    options:[
      {id:'a',text:'La existencia del mandamiento impide revisar cualquier inconsistencia posterior.',rationale:'Una actuación previa no convierte una cifra errónea en verdadera ni elimina el deber de coherencia del expediente.'},
      {id:'b',text:'Debe documentarse la inconsistencia, actualizar la realidad de la obligación por la ruta competente y adoptar las actuaciones procesales que correspondan a esa nueva realidad.',rationale:'El proceso debe sostenerse sobre una obligación correctamente determinada y con trazabilidad de los cambios.'},
      {id:'c',text:'Debe cobrarse siempre el valor más alto para proteger a la administración.',rationale:'La defensa del crédito fiscal no autoriza cobrar valores inexistentes.'}
    ], correctOptionId:'b', explanation:'La calidad del dato sigue importando después de iniciado el cobro. La respuesta no es improvisar una consecuencia concreta sin revisar competencia y etapa, sino corregir la realidad fiscal y adecuar las actuaciones de manera documentada.', sourceIds:['proc-correccion-inconsistencias-0033','proc-normalizacion-obligacion-0372','proc-mandamiento-0270','cpaca'], verifiedAt
  },
  {
    id:'q-int-account-04', moduleId:'m17', relatedModuleIds:['m6','m9'], scenarioId:'case-account-reality', integrated:true,
    skillIds:['gestion-accesos','trazabilidad','calidad-datos'], type:'pjs', difficulty:3,
    case:'Para corregir el saldo del expediente, un compañero que no tiene el rol autorizado propone prestar sus credenciales a quien sí conoce la operación.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Compartir las credenciales porque la finalidad es corregir un error.',rationale:'Una finalidad legítima no justifica quebrar controles de acceso y trazabilidad.'},
      {id:'b',text:'Gestionar el acceso o la intervención del rol competente por el canal institucional, sin compartir credenciales.',rationale:'La corrección debe conservar autoría, autorización y trazabilidad.'},
      {id:'c',text:'Dejar el error sin corregir para evitar cualquier uso del sistema.',rationale:'La seguridad no exige inmovilizar la gestión, sino realizarla por mecanismos autorizados.'}
    ], correctOptionId:'b', explanation:'La trazabilidad del dato depende de saber quién hizo qué y bajo qué autorización. Compartir cuentas destruye ese control.', sourceIds:['manual-seguridad-dian','auditoria-accesos-dian-2025','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-int-account-05', moduleId:'m9', relatedModuleIds:['m6','m10','m11'], scenarioId:'case-account-reality', integrated:true,
    skillIds:['prescripcion','cronologia','exigibilidad'], type:'pjs', difficulty:5,
    case:'El saldo ya fue depurado. Un analista afirma que “como han pasado más de cinco años desde la declaración, la deuda necesariamente prescribió”. En el expediente hay actuaciones posteriores y una posible facilidad de pago.',
    stem:'¿Cuál es la forma correcta de resolver el punto?',
    options:[
      {id:'a',text:'Contar cinco años desde una sola fecha y cerrar el expediente sin revisar nada más.',rationale:'La prescripción exige reconstruir el punto inicial y los eventos que la interrumpen o suspenden.'},
      {id:'b',text:'Construir la línea de tiempo completa e identificar la fecha de inicio, las actuaciones relevantes y los eventos de interrupción o suspensión antes de concluir.',rationale:'Ese análisis evita declarar o negar prescripción con una cronología incompleta.'},
      {id:'c',text:'Asumir que una facilidad nunca afecta el término.',rationale:'La regulación de cobro prevé efectos específicos de las facilidades sobre la prescripción y el proceso.'}
    ], correctOptionId:'b', explanation:'En prescripción, la pregunta decisiva rara vez es solo “cuántos años han pasado”. Debes ordenar la cronología y calificar jurídicamente los eventos.', sourceIds:['estatuto-tributario','proc-facilidades-0272','dian-facilidades-faq-2026'], verifiedAt
  },

  // Caso 2 · Facilidad de pago + saldo a favor
  {
    id:'q-int-facrefund-01', moduleId:'m16', relatedModuleIds:['m10','m15'], scenarioId:'case-facility-refund', integrated:true,
    skillIds:['devoluciones','facilidad-pago','compensacion'], type:'pjs', difficulty:5,
    case:'Un contribuyente tiene una facilidad de pago vigente. Durante su ejecución presenta una solicitud de devolución y, después del análisis, se reconoce un saldo a favor procedente.',
    stem:'¿Qué debe revisarse antes de autorizar el giro del valor reconocido?',
    options:[
      {id:'a',text:'La aplicación del valor reconocido a las obligaciones objeto de la facilidad y la modificación de esta cuando corresponda.',rationale:'PR-COT-0272 contempla expresamente esta interacción antes de autorizar la devolución.'},
      {id:'b',text:'Girar siempre el 100 % porque una facilidad vuelve intocable cualquier saldo a favor.',rationale:'La existencia de la facilidad no impide aplicar las reglas de compensación y el procedimiento institucional.'},
      {id:'c',text:'Cancelar automáticamente la facilidad y empezar un remate.',rationale:'Un saldo a favor reconocido no equivale a incumplimiento de la facilidad.'}
    ], correctOptionId:'a', explanation:'Este es un caso típico de transferencia entre módulos: devolución y cartera se cruzan. La respuesta exige mirar el estado de la facilidad antes de disponer recursos.', sourceIds:['proc-facilidades-0272','estatuto-tributario','dian-devoluciones-servicio-2026'], verifiedAt
  },
  {
    id:'q-int-facrefund-02', moduleId:'m10', relatedModuleIds:['m9','m16'], scenarioId:'case-facility-refund', integrated:true,
    skillIds:['facilidad-pago','cobro-coactivo','extincion'], type:'pjs', difficulty:4,
    case:'La facilidad del caso anterior está vigente y el contribuyente viene pagando oportunamente sus cuotas.',
    stem:'¿Cuál afirmación describe mejor la situación de la obligación?',
    options:[
      {id:'a',text:'La facilidad extingue inmediatamente toda la deuda desde el día en que se concede.',rationale:'La facilidad organiza el pago; la obligación se extingue en la medida en que se producen los eventos jurídicos y pagos correspondientes.'},
      {id:'b',text:'La facilidad puede suspender la continuación del cobro coactivo mientras esté vigente, pero la obligación no se considera totalmente extinguida por ese solo hecho.',rationale:'Es la distinción operativa relevante.'},
      {id:'c',text:'La facilidad convierte la deuda en una obligación privada ajena a la DIAN.',rationale:'Sigue siendo una obligación administrada por la entidad.'}
    ], correctOptionId:'b', explanation:'No confundas facilidad con pago. El acuerdo cambia la forma y oportunidad de cumplimiento, pero no borra por sí mismo la obligación.', sourceIds:['proc-facilidades-0272','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-int-facrefund-03', moduleId:'m9', relatedModuleIds:['m10'], scenarioId:'case-facility-refund', integrated:true,
    skillIds:['prescripcion','facilidad-pago'], type:'pjs', difficulty:4,
    case:'Un servidor calcula la prescripción ignorando por completo una facilidad de pago que fue otorgada y notificada durante el período analizado.',
    stem:'¿Qué falla tiene ese análisis?',
    options:[
      {id:'a',text:'Ninguna: las facilidades son irrelevantes para la prescripción.',rationale:'La normativa atribuye efectos a la facilidad sobre la acción de cobro y la prescripción.'},
      {id:'b',text:'Debe incorporar la facilidad a la línea de tiempo y verificar el efecto jurídico que produjo sobre el término.',rationale:'La cronología no puede omitir un evento expresamente regulado.'},
      {id:'c',text:'Debe asumir que toda facilidad duplica automáticamente el término de prescripción.',rationale:'No existe una regla general de simple duplicación.'}
    ], correctOptionId:'b', explanation:'Una buena línea de tiempo distingue fechas y efectos. Las facilidades no son un dato narrativo: pueden cambiar el análisis de cobro y prescripción.', sourceIds:['estatuto-tributario','dian-facilidades-faq-2026','proc-facilidades-0272'], verifiedAt
  },
  {
    id:'q-int-facrefund-04', moduleId:'m16', relatedModuleIds:['m4','m15'], scenarioId:'case-facility-refund', integrated:true,
    skillIds:['inadmisión','requisitos-formales','devoluciones'], type:'pjs', difficulty:4,
    case:'En otra solicitud de devolución, el sistema marca que falta un requisito formal exigible. El funcionario verifica que la causal corresponde a una de inadmisión.',
    stem:'¿Qué actuación es más adecuada?',
    options:[
      {id:'a',text:'Tramitar la inadmisión conforme a la causal y al procedimiento, dejando soporte de la verificación.',rationale:'Las causales formales deben calificarse y documentarse según la ruta aplicable.'},
      {id:'b',text:'Rechazar de fondo cualquier solicitud con una marca del sistema.',rationale:'Una marca no sustituye la calificación jurídica ni todas las marcas producen rechazo.'},
      {id:'c',text:'Aprobar la devolución porque los requisitos formales nunca importan.',rationale:'El cumplimiento formal es parte del análisis de procedencia.'}
    ], correctOptionId:'a', explanation:'En devoluciones, una alerta es una señal para revisar. El funcionario debe verificar, calificar la causal y documentar la decisión.', sourceIds:['guia-devoluciones-ct-cot-0038','dian-devoluciones-servicio-2026','proc-devoluciones-sie-0124'], verifiedAt
  },
  {
    id:'q-int-facrefund-05', moduleId:'m15', relatedModuleIds:['m10','m16'], scenarioId:'case-facility-refund', integrated:true,
    skillIds:['compensacion','devolucion','saldo-favor'], type:'pjs', difficulty:3,
    case:'El contribuyente insiste en que “devolver” y “compensar” son exactamente la misma operación porque en ambos casos existe un saldo a favor.',
    stem:'¿Qué explicación es correcta?',
    options:[
      {id:'a',text:'La devolución restituye el valor procedente al beneficiario; la compensación aplica el saldo frente a obligaciones fiscales en los supuestos legales.',rationale:'Son destinos jurídicos distintos del saldo.'},
      {id:'b',text:'Son términos idénticos y siempre producen un giro bancario.',rationale:'La compensación puede extinguir obligaciones sin que exista giro del mismo valor al contribuyente.'},
      {id:'c',text:'La compensación solo existe después de un remate.',rationale:'No depende de la ejecución sobre bienes.'}
    ], correctOptionId:'a', explanation:'Identificar la figura correcta evita escoger el procedimiento equivocado. La existencia de un saldo no determina por sí sola su destino.', sourceIds:['estatuto-tributario','dian-devoluciones-servicio-2026'], verifiedAt
  },

  // Caso 3 · EAR con diferencias
  {
    id:'q-int-ear-01', moduleId:'m7', relatedModuleIds:['m6','m17'], scenarioId:'case-ear-reconciliation', integrated:true,
    skillIds:['ear','conciliacion-ear','recaudo'], type:'pjs', difficulty:4,
    case:'Una EAR transmitió archivos con recibos por $500 millones. Al conciliar, los movimientos de consignación no coinciden con ese valor y existen diferencias por fecha.',
    stem:'¿Cuál es el enfoque correcto?',
    options:[
      {id:'a',text:'Separar y conciliar la información transmitida, las consignaciones y los soportes antes de concluir la causa de la diferencia.',rationale:'Transmisión y consignación son obligaciones relacionadas pero distintas; la conciliación busca explicar su correspondencia.'},
      {id:'b',text:'Asumir que transmitir la información prueba automáticamente que los recursos fueron consignados.',rationale:'El reporte de datos no demuestra por sí solo el movimiento financiero.'},
      {id:'c',text:'Asumir que toda diferencia equivale automáticamente a fraude.',rationale:'Primero debe establecerse qué ocurrió y con qué evidencia.'}
    ], correctOptionId:'a', explanation:'Las preguntas sobre EAR suelen mezclar dato y dinero. Mantén separados recepción/transmisión, consignación, conciliación, auditoría y eventual sanción.', sourceIds:['proc-conciliacion-ear-0373','proc-recepcion-ear-0031','proc-indice-consignacion-0029'], verifiedAt
  },
  {
    id:'q-int-ear-02', moduleId:'m7', relatedModuleIds:['m4'], scenarioId:'case-ear-reconciliation', integrated:true,
    skillIds:['ear','auditoria-ear','debido-proceso'], type:'pjs', difficulty:4,
    case:'La diferencia de la EAR persiste después de una primera conciliación y parece corresponder a un incumplimiento sancionable.',
    stem:'¿Qué debe evitar el gestor?',
    options:[
      {id:'a',text:'Construir evidencia y seguir el procedimiento de auditoría/sanción aplicable.',rationale:'Es la forma de soportar una eventual consecuencia.'},
      {id:'b',text:'Imponer la sanción solo con base en una sospecha inicial, sin verificar hechos ni trámite.',rationale:'La potestad sancionatoria exige soporte y procedimiento.'},
      {id:'c',text:'Distinguir el hallazgo de la decisión sancionatoria.',rationale:'Esa distinción es precisamente correcta.'}
    ], correctOptionId:'b', explanation:'Que un hallazgo sea serio no permite saltar verificación ni debido proceso. Un buen PJS suele ofrecer como distractor la “acción inmediata” que ignora el procedimiento.', sourceIds:['proc-auditoria-ear-0032','proc-sanciones-ear-0030','cpaca'], verifiedAt
  },
  {
    id:'q-int-ear-03', moduleId:'m6', relatedModuleIds:['m7'], scenarioId:'case-ear-reconciliation', integrated:true,
    skillIds:['correccion-inconsistencias','ear','estado-cuenta'], type:'pjs', difficulty:4,
    case:'Durante la conciliación se descubre que una diferencia no proviene de dinero faltante, sino de un recibo correctamente pagado que quedó mal registrado y no afecta la obligación del contribuyente.',
    stem:'¿Qué debe priorizarse?',
    options:[
      {id:'a',text:'La ruta institucional de verificación/corrección del recibo y actualización de la obligación.',rationale:'El problema identificado es de registro, no necesariamente de consignación omitida.'},
      {id:'b',text:'Sancionar a la EAR por apropiación de recursos sin revisar el registro.',rationale:'La evidencia descrita apunta a una inconsistencia de información; atribuir otra causa sería apresurado.'},
      {id:'c',text:'Mantener el saldo errado porque cambiarlo afectaría las estadísticas.',rationale:'La estadística nunca justifica conservar información incorrecta.'}
    ], correctOptionId:'a', explanation:'La conciliación sirve precisamente para identificar la naturaleza de la diferencia. Cuando el pago existe pero está mal aplicado, el camino cambia.', sourceIds:['proc-correccion-inconsistencias-0033','proc-conciliacion-ear-0373','guia-devoluciones-ct-cot-0038'], verifiedAt
  },
  {
    id:'q-int-ear-04', moduleId:'m17', relatedModuleIds:['m7'], scenarioId:'case-ear-reconciliation', integrated:true,
    skillIds:['trazabilidad','gestion-accesos','ear'], type:'pjs', difficulty:3,
    case:'Para “acelerar” la conciliación, se propone exportar a un correo personal el archivo con datos detallados de contribuyentes y movimientos de recaudo.',
    stem:'¿Qué debe hacerse?',
    options:[
      {id:'a',text:'Usar únicamente canales y repositorios institucionales autorizados, preservando confidencialidad y trazabilidad.',rationale:'Los datos del proceso deben mantenerse bajo controles institucionales.'},
      {id:'b',text:'Enviar el archivo al correo personal si se promete borrarlo luego.',rationale:'La promesa no sustituye los controles de seguridad.'},
      {id:'c',text:'Publicarlo en una carpeta abierta para que todos ayuden a revisar.',rationale:'Aumentaría exposición y eliminaría controles de necesidad de acceso.'}
    ], correctOptionId:'a', explanation:'La presión operativa no convierte canales personales en mecanismos válidos de tratamiento de información institucional.', sourceIds:['manual-seguridad-dian','modelo-seguridad-dian'], verifiedAt
  },
  {
    id:'q-int-ear-05', moduleId:'m7', relatedModuleIds:['m6'], scenarioId:'case-ear-reconciliation', integrated:true,
    skillIds:['conciliacion-ear','evidencia','sanciones-ear'], type:'pjs', difficulty:4,
    case:'Después de reconstruir movimientos, la aparente diferencia de consignación queda plenamente explicada por un corte de fechas y los recursos sí fueron consignados en la oportunidad que correspondía.',
    stem:'¿Qué conclusión es más adecuada?',
    options:[
      {id:'a',text:'Documentar el resultado de la conciliación y no sostener una sanción basada en un incumplimiento que la evidencia descartó.',rationale:'La consecuencia debe depender de hechos verificados.'},
      {id:'b',text:'Sancionar de todas formas porque al inicio parecía existir una diferencia.',rationale:'El hallazgo inicial no prevalece sobre la evidencia final.'},
      {id:'c',text:'Eliminar todos los soportes para que no quede registro de la revisión.',rationale:'La trazabilidad exige conservar el razonamiento y evidencia.'}
    ], correctOptionId:'a', explanation:'Control efectivo no significa sancionar más; significa determinar correctamente si existió el incumplimiento y actuar en consecuencia.', sourceIds:['proc-conciliacion-ear-0373','proc-auditoria-ear-0032','proc-sanciones-ear-0030'], verifiedAt
  },

  // Caso 4 · Cobro y ejecución sobre bienes
  {
    id:'q-int-coactive-01', moduleId:'m11', relatedModuleIds:['m9','m12','m13'], scenarioId:'case-coactive-assets', integrated:true,
    skillIds:['titulo-ejecutivo','exigibilidad','mandamiento-pago'], type:'pjs', difficulty:4,
    case:'El expediente contiene una cifra de cartera, pero el documento que la sustenta no está ejecutoriado y aún existe discusión administrativa pendiente.',
    stem:'¿Qué debe hacer el funcionario antes de expedir mandamiento de pago?',
    options:[
      {id:'a',text:'Verificar si existe título ejecutivo y exigibilidad en los términos legales; no basta una cifra de cartera.',rationale:'El cobro coactivo requiere soporte ejecutivo y obligación exigible.'},
      {id:'b',text:'Expedir el mandamiento porque todo saldo en sistema presta mérito ejecutivo.',rationale:'El sistema registra información, pero no crea por sí solo todos los presupuestos del título.'},
      {id:'c',text:'Decretar remate directamente.',rationale:'El remate es una etapa muy posterior y exige múltiples presupuestos.'}
    ], correctOptionId:'a', explanation:'Antes de pensar en defensa, cautela o ejecución, confirma que el cobro puede jurídicamente iniciarse.', sourceIds:['estatuto-tributario','proc-inicio-cobro-0269','proc-mandamiento-0270'], verifiedAt
  },
  {
    id:'q-int-coactive-02', moduleId:'m12', relatedModuleIds:['m11','m13'], scenarioId:'case-coactive-assets', integrated:true,
    skillIds:['excepciones','debido-proceso','orden-secuencia'], type:'pjs', difficulty:4,
    case:'El mandamiento fue notificado y el deudor presenta oportunamente una excepción de pago parcial respaldada con documentos. Ya existe investigación de bienes en curso.',
    stem:'¿Cuál es la prioridad procesal?',
    options:[
      {id:'a',text:'Tramitar y decidir la excepción en su oportunidad, sin actuar como si la defensa no existiera.',rationale:'La etapa de defensa debe ser resuelta conforme al procedimiento.'},
      {id:'b',text:'Ignorar la excepción porque ya se localizaron bienes.',rationale:'La investigación de bienes no elimina el derecho a proponer y decidir excepciones.'},
      {id:'c',text:'Rematar el bien antes de revisar el pago alegado.',rationale:'Salta etapas y podría ejecutar un valor que debe ser revisado.'}
    ], correctOptionId:'a', explanation:'La presencia de bienes no reemplaza la secuencia del procedimiento. En PJS, el distractor suele mezclar una actuación posible con una oportunidad incorrecta.', sourceIds:['estatuto-tributario','proc-investigacion-bienes-0326'], verifiedAt
  },
  {
    id:'q-int-coactive-03', moduleId:'m13', relatedModuleIds:['m11'], scenarioId:'case-coactive-assets', integrated:true,
    skillIds:['medidas-cautelares','oportunidad','investigacion-bienes'], type:'pjs', difficulty:4,
    case:'Se identifica un bien de propiedad del deudor y existe riesgo de disposición. El expediente reúne los presupuestos del cobro y se proyecta el mandamiento.',
    stem:'¿Qué regla de oportunidad sobre medidas preventivas debe recordarse?',
    options:[
      {id:'a',text:'El embargo y secuestro preventivo pueden decretarse previa o simultáneamente con el mandamiento en los términos del artículo 837.',rationale:'La norma contempla esa oportunidad para asegurar el crédito.'},
      {id:'b',text:'Las medidas solo pueden adoptarse después del remate.',rationale:'El remate presupone medidas y etapas anteriores.'},
      {id:'c',text:'Nunca pueden coexistir con el mandamiento.',rationale:'La norma permite su adopción previa o simultánea dentro de los presupuestos legales.'}
    ], correctOptionId:'a', explanation:'No confundas medida preventiva con remate. La cautela asegura; la ejecución posterior busca convertir bienes en recursos.', sourceIds:['estatuto-tributario','proc-medidas-0327','proc-investigacion-bienes-0326'], verifiedAt
  },
  {
    id:'q-int-coactive-04', moduleId:'m13', relatedModuleIds:['m11','m12'], scenarioId:'case-coactive-assets', integrated:true,
    skillIds:['secuestro','costo-beneficio','eficiencia'], type:'pjs', difficulty:4,
    case:'Un bien ya está embargado. El análisis muestra que el costo de secuestro, administración y conservación sería desproporcionado frente a la recuperación probable.',
    stem:'¿Qué debe evitarse?',
    options:[
      {id:'a',text:'Practicar el secuestro automáticamente solo porque el bien ya está embargado.',rationale:'PR-COT-0388 incorpora análisis costo-beneficio antes de la diligencia.'},
      {id:'b',text:'Evaluar costo-beneficio y definir la actuación procedente respecto del bien.',rationale:'Esa es la gestión exigida por el procedimiento.'},
      {id:'c',text:'Documentar por qué una actuación materialmente posible no resulta conveniente.',rationale:'La documentación es necesaria para trazabilidad.'}
    ], correctOptionId:'a', explanation:'Embargo no significa secuestro inevitable. La gestión de cartera también exige eficiencia y trazabilidad de la decisión.', sourceIds:['proc-secuestro-0388'], verifiedAt
  },
  {
    id:'q-int-coactive-05', moduleId:'m13', relatedModuleIds:['m9','m12'], scenarioId:'case-coactive-assets', integrated:true,
    skillIds:['levantamiento-medidas','extincion','trazabilidad'], type:'pjs', difficulty:4,
    case:'Antes del remate, el deudor paga totalmente las obligaciones y los intereses exigibles. El pago queda validado y la obligación se extingue.',
    stem:'¿Qué debe revisarse a continuación?',
    options:[
      {id:'a',text:'El cierre/extinción del expediente y el levantamiento de medidas que ya no tengan fundamento, actualizando sistemas y soportes.',rationale:'La terminación también exige actuaciones y coherencia de información.'},
      {id:'b',text:'Continuar al remate para recuperar “un extra” preventivo.',rationale:'Extinguida la obligación, la medida no puede convertirse en castigo.'},
      {id:'c',text:'Mantener indefinidamente las medidas por si aparece una deuda futura.',rationale:'Las medidas responden a obligaciones y presupuestos concretos.'}
    ], correctOptionId:'a', explanation:'Un buen gestor no solo inicia y ejecuta correctamente; también termina y actualiza correctamente cuando desaparece el fundamento del cobro.', sourceIds:['proc-extincion-0330','proc-levantamiento-medidas-0345'], verifiedAt
  },

  // Caso 5 · Concurso y crédito fiscal
  {
    id:'q-int-concurso-01', moduleId:'m14', relatedModuleIds:['m9','m6'], scenarioId:'case-concursal-credit', integrated:true,
    skillIds:['procesos-concursales','credito-fiscal','oportunidad'], type:'pjs', difficulty:4,
    case:'La DIAN conoce oficialmente la apertura de un proceso concursal respecto de una sociedad con obligaciones fiscales pendientes.',
    stem:'¿Cuál es la lógica inicial correcta?',
    options:[
      {id:'a',text:'Activar la ruta institucional para intervenir y defender oportunamente el crédito fiscal.',rationale:'Los procedimientos concursales existen precisamente para coordinar la intervención de la DIAN en el proceso colectivo.'},
      {id:'b',text:'Esperar al final del concurso y revisar después si quedó algún activo.',rationale:'La defensa tardía puede afectar reconocimiento y recuperación del crédito.'},
      {id:'c',text:'Declarar extinguidas todas las obligaciones por la sola apertura.',rationale:'La apertura del concurso no equivale a pago ni extinción.'}
    ], correctOptionId:'a', explanation:'En procesos concursales, la oportunidad es parte de la defensa. La DIAN debe actuar dentro del escenario colectivo y conforme a la etapa correspondiente.', sourceIds:['proc-inicio-concursales-0431','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-int-concurso-02', moduleId:'m6', relatedModuleIds:['m9','m14'], scenarioId:'case-concursal-credit', integrated:true,
    skillIds:['calidad-datos','estado-cuenta','procesos-concursales'], type:'pjs', difficulty:5,
    case:'Antes de presentar la acreencia, el equipo detecta que dos pagos no están aplicados y el sistema muestra un saldo mayor al soportado documentalmente.',
    stem:'¿Qué debe priorizarse?',
    options:[
      {id:'a',text:'Depurar la información por las rutas de corrección/normalización y presentar una acreencia soportada en la realidad fiscal.',rationale:'Los procedimientos concursales remiten a la corrección de desajustes para defender un crédito veraz.'},
      {id:'b',text:'Presentar el saldo más alto porque en concurso conviene sobredimensionar la acreencia.',rationale:'La defensa del crédito público exige exactitud, no exageración.'},
      {id:'c',text:'Omitir la acreencia por completo porque existen inconsistencias.',rationale:'La inconsistencia debe resolverse; no justifica abandonar la defensa.'}
    ], correctOptionId:'a', explanation:'Esta es una de las conexiones más importantes del empleo: la calidad del estado de cuenta condiciona la calidad de la representación de la DIAN en el concurso.', sourceIds:['proc-inicio-concursales-0431','proc-liquidacion-judicial-0368','proc-correccion-inconsistencias-0033'], verifiedAt
  },
  {
    id:'q-int-concurso-03', moduleId:'m14', relatedModuleIds:['m9'], scenarioId:'case-concursal-credit', integrated:true,
    skillIds:['terceros-responsables','procesos-concursales','cobro'], type:'pjs', difficulty:5,
    case:'Durante la liquidación judicial aparecen posibles deudores solidarios o subsidiarios frente a ciertas obligaciones.',
    stem:'¿Qué enfoque corresponde?',
    options:[
      {id:'a',text:'Identificar los responsables y activar las actuaciones de cobro que legalmente procedan, respetando los presupuestos de responsabilidad y debido proceso.',rationale:'PR-COT-0368 exige revisar esas responsabilidades y coordinar el cobro.'},
      {id:'b',text:'Declararlos responsables automáticamente por aparecer relacionados con la sociedad.',rationale:'La relación fáctica no sustituye los presupuestos legales ni el procedimiento.'},
      {id:'c',text:'Ignorarlos porque el proceso concursal impide cualquier análisis sobre terceros.',rationale:'El propio procedimiento ordena identificarlos.'}
    ], correctOptionId:'a', explanation:'Concurso y cobro de terceros pueden coexistir, pero no se confunden. Cada responsabilidad necesita su soporte y actuación competente.', sourceIds:['proc-liquidacion-judicial-0368','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-int-concurso-04', moduleId:'m14', relatedModuleIds:['m9'], scenarioId:'case-concursal-credit', integrated:true,
    skillIds:['liquidacion-judicial','extincion','credito-fiscal'], type:'pjs', difficulty:3,
    case:'Un compañero sostiene que la apertura de liquidación judicial “borra” automáticamente todas las deudas fiscales de la sociedad.',
    stem:'¿Cómo debe corregirse esa afirmación?',
    options:[
      {id:'a',text:'La liquidación cambia el escenario de cobro y defensa del crédito; no equivale por sí sola a extinción de las obligaciones.',rationale:'La DIAN interviene precisamente porque el crédito sigue requiriendo reconocimiento, defensa y eventual satisfacción/extinción.'},
      {id:'b',text:'Es correcta porque todo concurso equivale a amnistía tributaria.',rationale:'No existe esa equivalencia general.'},
      {id:'c',text:'Es correcta solo si hay más de diez acreedores.',rationale:'El número de acreedores no convierte la apertura en extinción.'}
    ], correctOptionId:'a', explanation:'No confundas cambio de procedimiento con desaparición del crédito.', sourceIds:['proc-liquidacion-judicial-0368','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-int-concurso-05', moduleId:'m14', relatedModuleIds:['m9','m13'], scenarioId:'case-concursal-credit', integrated:true,
    skillIds:['adjudicacion','extincion','procesos-concursales'], type:'pjs', difficulty:4,
    case:'El proceso de liquidación llega a una etapa en la que corresponde definir el tratamiento de bienes adjudicados y el efecto final sobre las obligaciones fiscales.',
    stem:'¿Qué muestra la arquitectura de procedimientos DIAN?',
    options:[
      {id:'a',text:'Que la ruta concursal puede conectar con adjudicación de bienes y, según el resultado, con la extinción/actualización de las obligaciones.',rationale:'PR-COT-0368 conduce, según el caso, a adjudicación o extinción.'},
      {id:'b',text:'Que todo concurso termina obligatoriamente en remate tributario ordinario.',rationale:'El concurso tiene sus propias reglas y salidas.'},
      {id:'c',text:'Que ninguna actuación posterior necesita actualizar el estado de cuenta.',rationale:'El cierre debe reflejar la realidad final de la acreencia.'}
    ], correctOptionId:'a', explanation:'La defensa del crédito no termina al “presentarse” al concurso; hay que seguir el resultado hasta que bienes, pagos y obligaciones queden correctamente reflejados.', sourceIds:['proc-liquidacion-judicial-0368','proc-adjudicacion-0369','proc-extincion-0330'], verifiedAt
  },

  // Caso 6 · Devolución con señales de riesgo
  {
    id:'q-int-refund-01', moduleId:'m16', relatedModuleIds:['m4','m15'], scenarioId:'case-refund-risk', integrated:true,
    skillIds:['verificacion','investigacion-previa','devoluciones'], type:'pjs', difficulty:5,
    case:'El SIE de devoluciones genera varias marcas de riesgo sobre una solicitud. Ninguna ha sido revisada aún por el sustanciador.',
    stem:'¿Cuál es el primer error que debe evitarse?',
    options:[
      {id:'a',text:'Tratar las marcas como una decisión automática de rechazo sin verificarlas.',rationale:'La guía 2026 las presenta como alertas que deben ser revisadas y documentadas.'},
      {id:'b',text:'Revisar las marcas y sustentar el resultado con los soportes del expediente.',rationale:'Esa es la conducta correcta.'},
      {id:'c',text:'Identificar si el caso requiere una ruta adicional de fiscalización conforme a los criterios aplicables.',rationale:'También es correcto después del análisis correspondiente.'}
    ], correctOptionId:'a', explanation:'Automatización no elimina juicio técnico. El sistema ayuda a detectar; el funcionario verifica, sustenta y decide dentro de su competencia.', sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025'], verifiedAt
  },
  {
    id:'q-int-refund-02', moduleId:'m16', relatedModuleIds:['m4'], scenarioId:'case-refund-risk', integrated:true,
    skillIds:['inclusion-forzosa','investigacion-previa','competencia'], type:'pjs', difficulty:5,
    case:'Después de revisar la solicitud, aparecen factores de riesgo documentados que encajan en criterios definidos por la seccional para proponer traslado a Fiscalización.',
    stem:'¿Qué refleja mejor la guía CT-COT-0038 de 2026?',
    options:[
      {id:'a',text:'Proponer la inclusión forzosa por la ruta prevista y someter el caso a la evaluación/control correspondiente, dejando trazabilidad de los criterios.',rationale:'La guía exige criterios documentados y una instancia de evaluación y control.'},
      {id:'b',text:'Trasladar informalmente el expediente por mensajería personal sin registro.',rationale:'El traslado debe conservar competencia y trazabilidad.'},
      {id:'c',text:'Rechazar inmediatamente porque una señal de riesgo prueba improcedencia definitiva.',rationale:'Riesgo e improcedencia no son sinónimos.'}
    ], correctOptionId:'a', explanation:'La inclusión forzosa es una herramienta de control, no un atajo para decidir de fondo la solicitud.', sourceIds:['guia-devoluciones-ct-cot-0038','concepto-devoluciones-16116-2025'], verifiedAt
  },
  {
    id:'q-int-refund-03', moduleId:'m16', relatedModuleIds:['m4','m15'], scenarioId:'case-refund-risk', integrated:true,
    skillIds:['inadmisión','requisitos-formales','devoluciones'], type:'pjs', difficulty:4,
    case:'La solicitud incumple un requisito formal que la normativa y el portal oficial DIAN identifican como causal de inadmisión.',
    stem:'¿Qué opción demuestra mejor técnica procedimental?',
    options:[
      {id:'a',text:'Inadmitir por la causal aplicable, explicar el fundamento y conservar soporte de la verificación.',rationale:'La decisión debe corresponder a la causal y estar motivada/documentada.'},
      {id:'b',text:'Inventar una causal de rechazo distinta porque “suena más definitiva”.',rationale:'La administración debe aplicar la causal realmente configurada.'},
      {id:'c',text:'Ignorar el requisito porque todos los defectos pueden subsanarse verbalmente.',rationale:'La forma de subsanación y nueva presentación está reglada.'}
    ], correctOptionId:'a', explanation:'PJS suele evaluar si distingues figuras cercanas. No elijas la consecuencia “más fuerte”; elige la jurídicamente correspondiente.', sourceIds:['dian-devoluciones-servicio-2026','guia-devoluciones-ct-cot-0038','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-int-refund-04', moduleId:'m15', relatedModuleIds:['m16','m9'], scenarioId:'case-refund-risk', integrated:true,
    skillIds:['compensacion','devolucion','deudas-fiscales'], type:'pjs', difficulty:4,
    case:'El análisis reconoce un saldo a favor, pero también identifica obligaciones fiscales susceptibles de compensación conforme a la normativa.',
    stem:'¿Qué debe verificarse antes de ordenar un giro por todo el saldo?',
    options:[
      {id:'a',text:'Las compensaciones a que haya lugar y el saldo remanente realmente devolvible.',rationale:'El procedimiento de devolución contempla la relación con obligaciones fiscales y compensaciones procedentes.'},
      {id:'b',text:'Nada: todo saldo a favor debe girarse íntegramente sin revisar deudas.',rationale:'Desconoce la figura de compensación.'},
      {id:'c',text:'Embargar el saldo sin analizar su naturaleza.',rationale:'La respuesta debe partir de la ruta de devolución/compensación, no de una medida escogida automáticamente.'}
    ], correctOptionId:'a', explanation:'Devolución y compensación pueden coexistir dentro del mismo análisis. Primero se determina la situación fiscal completa; después el monto que efectivamente se devuelve.', sourceIds:['estatuto-tributario','proc-devoluciones-sie-0124','guia-devoluciones-ct-cot-0038'], verifiedAt
  },
  {
    id:'q-int-refund-05', moduleId:'m16', relatedModuleIds:['m17'], scenarioId:'case-refund-risk', integrated:true,
    skillIds:['sustanciacion','trazabilidad','devoluciones'], type:'pjs', difficulty:4,
    case:'El sustanciador revisó una marca del SIE y concluyó que no configura incumplimiento, pero pretende dejar el campo de resultado sin explicación ni folios de soporte.',
    stem:'¿Qué exige la guía institucional?',
    options:[
      {id:'a',text:'Registrar de forma clara, concisa y precisa las razones de la decisión e identificar los soportes del expediente.',rationale:'La guía CT-COT-0038 exige trazabilidad del resultado de las marcas y de sus soportes.'},
      {id:'b',text:'Basta con marcar “resuelto” sin justificar.',rationale:'Eso impide reconstruir el análisis y dificulta control posterior.'},
      {id:'c',text:'Eliminar la marca del sistema para que nadie la vea.',rationale:'La trazabilidad exige conservar la historia de la revisión.'}
    ], correctOptionId:'a', explanation:'La calidad de una decisión incluye poder explicar por qué se tomó y dónde está la evidencia que la sustenta.', sourceIds:['guia-devoluciones-ct-cot-0038'], verifiedAt
  },

  // Caso 7 · Campaña de control extensivo
  {
    id:'q-int-control-01', moduleId:'m8', relatedModuleIds:['m6','m17'], scenarioId:'case-extensive-control', integrated:true,
    skillIds:['control-extensivo','calidad-datos','seleccion-casos'], type:'pjs', difficulty:4,
    case:'Se prepara una campaña para 45.000 contribuyentes. Antes del envío se detecta que una fuente de datos presenta duplicados y obligaciones ya corregidas.',
    stem:'¿Cuál es la mejor decisión?',
    options:[
      {id:'a',text:'Depurar y validar el universo antes de ejecutar la campaña, aunque implique ajustar el cronograma.',rationale:'El procedimiento exige confiabilidad y busca minimizar selecciones basadas en información errada.'},
      {id:'b',text:'Enviar primero y corregir únicamente a quienes reclamen.',rationale:'Multiplica el impacto de datos deficientes y deteriora la relación con el ciudadano.'},
      {id:'c',text:'Eliminar toda la campaña porque cualquier error hace imposible el control extensivo.',rationale:'La respuesta es mejorar la calidad del universo, no renunciar al control.'}
    ], correctOptionId:'a', explanation:'En una acción masiva, la calidad de datos es un control preventivo. El error pequeño en la fuente se vuelve grande por escala.', sourceIds:['proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-int-control-02', moduleId:'m8', relatedModuleIds:['m2'], scenarioId:'case-extensive-control', integrated:true,
    skillIds:['control-extensivo','objetividad','imparcialidad'], type:'pjs', difficulty:3,
    case:'Un jefe propone excluir manualmente de la campaña a varias empresas conocidas de su círculo personal, pese a que cumplen los mismos criterios objetivos de selección.',
    stem:'¿Qué principio del procedimiento se compromete de forma directa?',
    options:[
      {id:'a',text:'Imparcialidad y objetividad en la selección.',rationale:'No pueden introducirse preferencias personales en el universo de control.'},
      {id:'b',text:'Solo economía procesal.',rationale:'El problema principal es el sesgo de selección.'},
      {id:'c',text:'Únicamente archivo documental.',rationale:'No es el núcleo de la conducta descrita.'}
    ], correctOptionId:'a', explanation:'El control extensivo debe basarse en datos y criterios verificables, no en relaciones o preferencias particulares.', sourceIds:['proc-control-extensivo-0382','constitucion-politica'], verifiedAt
  },
  {
    id:'q-int-control-03', moduleId:'m8', relatedModuleIds:['m17','m2'], scenarioId:'case-extensive-control', integrated:true,
    skillIds:['control-extensivo','confidencialidad','seguridad-informacion'], type:'pjs', difficulty:4,
    case:'El archivo de la campaña contiene NIT, obligaciones y criterios de riesgo. Se propone compartirlo por un enlace público “solo por dos horas” para facilitar el trabajo.',
    stem:'¿Qué debe prevalecer?',
    options:[
      {id:'a',text:'La confidencialidad y el uso de canales institucionales con acceso restringido a quienes necesitan la información.',rationale:'El procedimiento exige reserva de los casos objeto de control y la seguridad institucional limita accesos.'},
      {id:'b',text:'La conveniencia de un enlace público porque el tiempo de exposición es corto.',rationale:'La duración no elimina el riesgo ni la obligación de confidencialidad.'},
      {id:'c',text:'Publicar solo una parte y dejar el resto para después, sin controles.',rationale:'La fragmentación no sustituye controles de acceso.'}
    ], correctOptionId:'a', explanation:'La masividad del control no vuelve pública la información de cada caso.', sourceIds:['proc-control-extensivo-0382','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-int-control-04', moduleId:'m8', relatedModuleIds:['m3'], scenarioId:'case-extensive-control', integrated:true,
    skillIds:['control-extensivo','medicion-resultados','cumplimiento'], type:'pjs', difficulty:3,
    case:'La campaña envió 45.000 comunicaciones. El equipo quiere declarar éxito total sin revisar si hubo presentación de declaraciones, pagos o correcciones posteriores.',
    stem:'¿Qué debe señalarse?',
    options:[
      {id:'a',text:'El volumen enviado mide cobertura, pero el resultado debe analizar el efecto sobre el cumplimiento y documentarse en el informe correspondiente.',rationale:'El procedimiento finaliza con informe de resultados y su objetivo es cumplimiento voluntario/oportuno.'},
      {id:'b',text:'Enviar muchos mensajes demuestra por sí solo cumplimiento tributario.',rationale:'Actividad de gestión y resultado de cumplimiento son indicadores diferentes.'},
      {id:'c',text:'No debe medirse nada porque las campañas masivas no requieren evaluación.',rationale:'El procedimiento prevé control e informe de resultados.'}
    ], correctOptionId:'a', explanation:'En gestión pública, actividad ≠ resultado. El objetivo del control extensivo es influir en cumplimiento, no producir comunicaciones como fin en sí mismo.', sourceIds:['proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-int-control-05', moduleId:'m8', relatedModuleIds:['m5','m6'], scenarioId:'case-extensive-control', integrated:true,
    skillIds:['control-extensivo','obligaciones-formales','obligaciones-sustanciales'], type:'pjs', difficulty:4,
    case:'El universo contiene contribuyentes que presentaron declaración pero no pagaron y otros que pagaron parcialmente pero omitieron una obligación formal distinta.',
    stem:'¿Qué enfoque se alinea con el principio de integralidad?',
    options:[
      {id:'a',text:'Analizar de manera completa la situación de cumplimiento formal y sustancial de cada segmento, diferenciando la acción aplicable.',rationale:'Integralidad no significa tratar todos igual, sino abarcar la situación completa.'},
      {id:'b',text:'Usar exactamente el mismo mensaje y conclusión para todos sin importar su situación.',rationale:'La masividad no elimina la necesidad de segmentar según hechos relevantes.'},
      {id:'c',text:'Revisar solo si existe pago y omitir cualquier obligación formal.',rationale:'El objetivo abarca obligaciones formales y sustanciales.'}
    ], correctOptionId:'a', explanation:'Control extensivo combina escala con segmentación inteligente. La campaña debe responder al tipo de incumplimiento realmente detectado.', sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007'], verifiedAt
  },

  // Caso 8 · Accesos, integridad y operación
  {
    id:'q-int-access-01', moduleId:'m17', relatedModuleIds:['m19','m20'], scenarioId:'case-access-governance', integrated:true,
    skillIds:['gestion-accesos','baja-accesos','seguridad-informacion'], type:'pjs', difficulty:3,
    case:'Terminó el contrato de un tercero que tenía acceso a un sistema de cartera. Dos semanas después su cuenta sigue activa “por si lo vuelven a contratar”.',
    stem:'¿Qué actuación es más adecuada?',
    options:[
      {id:'a',text:'Gestionar la inactivación o ajuste oportuno del acceso conforme al fin de la relación y conservar evidencia del cambio.',rationale:'La auditoría DIAN ha identificado como riesgo cuentas y accesos que permanecen activos tras terminar relaciones.'},
      {id:'b',text:'Mantener la cuenta activa indefinidamente porque no hay evidencia de abuso.',rationale:'El control de acceso es preventivo y debe responder a necesidad vigente.'},
      {id:'c',text:'Compartir la cuenta con su reemplazo para evitar crear otra.',rationale:'Aumenta el riesgo y destruye trazabilidad individual.'}
    ], correctOptionId:'a', explanation:'El ciclo de acceso incluye baja. La ausencia de un incidente conocido no justifica mantener permisos sin necesidad.', sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-int-access-02', moduleId:'m17', relatedModuleIds:['m19'], scenarioId:'case-access-governance', integrated:true,
    skillIds:['minimo-privilegio','gestion-accesos'], type:'pjs', difficulty:3,
    case:'Una funcionaria necesita consultar estados de cuenta, pero solicita rol administrador porque “algún día podría necesitar corregir algo”.',
    stem:'¿Qué criterio debe aplicarse?',
    options:[
      {id:'a',text:'Asignar el acceso necesario para sus funciones actuales y tramitar cambios cuando exista necesidad y autorización.',rationale:'El mínimo privilegio reduce exposición y conserva control sobre cambios de rol.'},
      {id:'b',text:'Dar administración a todas las personas que puedan necesitarla en el futuro.',rationale:'Amplía privilegios sin necesidad vigente.'},
      {id:'c',text:'Negar incluso el acceso de consulta necesario para su trabajo.',rationale:'Seguridad no significa impedir funciones autorizadas.'}
    ], correctOptionId:'a', explanation:'La gestión profesional de accesos equilibra operación y control: ni privilegio excesivo ni bloqueo injustificado.', sourceIds:['auditoria-accesos-dian-2025','modelo-seguridad-dian'], verifiedAt
  },
  {
    id:'q-int-access-03', moduleId:'m17', relatedModuleIds:['m20'], scenarioId:'case-access-governance', integrated:true,
    skillIds:['credenciales','trazabilidad','integridad'], type:'pjs', difficulty:3,
    case:'Un compañero pide usar durante cinco minutos tu usuario porque su cuenta está bloqueada y “solo necesita mirar un expediente”.',
    stem:'¿Qué respuesta protege mejor la operación?',
    options:[
      {id:'a',text:'No compartir credenciales y orientar a restablecer o gestionar el acceso por el canal autorizado.',rationale:'La cuenta debe permitir atribuir las acciones a su verdadero usuario.'},
      {id:'b',text:'Prestar el usuario si la persona es de confianza.',rationale:'La confianza personal no sustituye controles de autenticación.'},
      {id:'c',text:'Escribir la contraseña en un papel para futuras emergencias.',rationale:'Aumenta el riesgo y elimina control.'}
    ], correctOptionId:'a', explanation:'Integridad operativa también significa preservar autoría y trazabilidad de cada acción en el sistema.', sourceIds:['manual-seguridad-dian','codigo-integridad-dian'], verifiedAt
  },
  {
    id:'q-int-access-04', moduleId:'m19', relatedModuleIds:['m10','m20'], scenarioId:'case-access-governance', integrated:true,
    skillIds:['comportamiento-etico','conflicto-intereses','facilidad-pago'], type:'pjs', difficulty:4,
    case:'Te asignan una solicitud de facilidad de pago de una empresa cuyo representante legal es un familiar cercano. Tienes acceso al sistema y podrías tramitarla sin que nadie lo note.',
    stem:'¿Qué conducta se alinea con el nivel esperado de comportamiento ético?',
    options:[
      {id:'a',text:'Identificar y declarar el posible conflicto para que se aplique la ruta institucional correspondiente.',rationale:'PR-COT-0272 remite a las reglas de conflicto de intereses y el nivel ético exige actuar preventivamente.'},
      {id:'b',text:'Tramitarla normalmente mientras creas ser imparcial.',rationale:'La apariencia o potencialidad del conflicto también debe gestionarse.'},
      {id:'c',text:'Otorgar condiciones más duras para demostrar neutralidad.',rationale:'Compensar el conflicto con trato desfavorable también vulnera imparcialidad.'}
    ], correctOptionId:'a', explanation:'La ética pública no se limita a evitar beneficio personal consumado; incluye gestionar conflictos reales, potenciales o aparentes.', sourceIds:['proc-facilidades-0272','res-65-2024','codigo-integridad-dian','cpaca'], verifiedAt
  },
  {
    id:'q-int-access-05', moduleId:'m20', relatedModuleIds:['m17','m19'], scenarioId:'case-access-governance', integrated:true,
    skillIds:['integridad','confidencialidad','diligencia'], type:'pjs', difficulty:4,
    case:'Para terminar una tarea antes del cierre, un funcionario propone descargar a su almacenamiento personal un archivo de contribuyentes y seguir trabajando desde casa sin autorización.',
    stem:'¿Qué decisión equilibra mejor diligencia e integridad?',
    options:[
      {id:'a',text:'Cumplir la tarea mediante los mecanismos autorizados o gestionar una alternativa institucional, sin sacar información a repositorios personales.',rationale:'Diligencia no consiste en lograr velocidad a costa de seguridad o legalidad.'},
      {id:'b',text:'Aceptar porque terminar rápido siempre es más importante que el canal usado.',rationale:'La diligencia debe ejercerse dentro de los controles aplicables.'},
      {id:'c',text:'Enviar el archivo a varios correos personales para tener respaldo.',rationale:'Aumenta la exposición y el número de copias no controladas.'}
    ], correctOptionId:'a', explanation:'Una conducta puede parecer eficiente y, al mismo tiempo, ser incompatible con confidencialidad y control. La respuesta correcta integra valores, no maximiza uno aisladamente.', sourceIds:['codigo-integridad-dian','manual-seguridad-dian','auditoria-accesos-dian-2025'], verifiedAt
  },
]
