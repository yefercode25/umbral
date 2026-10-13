import type { Question } from '../../../../src/types/course'

const verifiedAt = '2026-09-12'

export const dianQuestions: Question[] = [
  {
    id:'q-profile-01', moduleId:'m0', skillIds:['perfil-empleo'], type:'single', difficulty:1,
    stem:'¿Cuáles son los dos subprocesos expresamente asociados a la ficha CT-CR-3007?',
    options:[
      {id:'a',text:'Fiscalización tributaria y gestión jurídica',rationale:'No corresponden a los subprocesos indicados en la ficha.'},
      {id:'b',text:'Administración de cartera y Recaudo-Devoluciones',rationale:'Son los dos subprocesos señalados por el MERF para CT-CR-3007.'},
      {id:'c',text:'Aduanas y control cambiario',rationale:'Son áreas de la DIAN, pero no los subprocesos asignados a esta ficha.'}
    ], correctOptionId:'b', explanation:'La preparación debe priorizar los subprocesos que el MERF vincula directamente al empleo: Administración de cartera y Recaudo-Devoluciones.', sourceIds:['merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-profile-02', moduleId:'m0', skillIds:['perfil-empleo'], type:'pjs', difficulty:2,
    case:'Estás priorizando el estudio y solo tienes dos horas disponibles hoy. Tienes tres opciones de material: clasificación arancelaria avanzada, procedimiento de cobro coactivo y valoración aduanera.',
    stem:'¿Qué decisión se alinea mejor con la ficha CT-CR-3007?',
    options:[
      {id:'a',text:'Estudiar procedimiento de cobro coactivo.',rationale:'Cobro coactivo aparece como competencia funcional específica del empleo.'},
      {id:'b',text:'Estudiar valoración aduanera.',rationale:'Es relevante para otros perfiles, pero no es competencia funcional específica de CT-CR-3007.'},
      {id:'c',text:'Estudiar clasificación arancelaria avanzada.',rationale:'No es el núcleo funcional del empleo.'}
    ], correctOptionId:'a', explanation:'El criterio de priorización debe partir del MERF: primero las competencias y funciones específicas del empleo; después, conocimientos transversales.', sourceIds:['merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-dian-01', moduleId:'m3', skillIds:['dian-estructura'], type:'single', difficulty:1,
    stem:'Según el Decreto 1742 de 2020, la DIAN desarrolla sus funciones en:',
    options:[
      {id:'a',text:'Nivel Central, Nivel Local y Nivel Delegado.',rationale:'Esta es la estructura general indicada por el decreto.'},
      {id:'b',text:'Nivel Nacional y Nivel Territorial únicamente.',rationale:'No corresponde a la estructura señalada en el Decreto 1742.'},
      {id:'c',text:'Nivel Central y Nivel Municipal.',rationale:'La estructura oficial no se formula de esa manera.'}
    ], correctOptionId:'a', explanation:'El artículo 4 del Decreto 1742 de 2020 establece tres niveles: Central, Local y Delegado.', sourceIds:['decreto-1742-2020'], verifiedAt
  },
  {
    id:'q-dian-02', moduleId:'m3', skillIds:['dian-mision'], type:'single', difficulty:1,
    stem:'¿Cuál idea resume mejor la misión DIAN establecida en el Plan Estratégico Institucional 2024–2026, versión 02 de 2026?',
    options:[
      {id:'a',text:'Garantizar que la ciudadanía contribuya de manera justa y equitativa al financiamiento del gasto público.',rationale:'Es el núcleo de la misión institucional vigente consultada.'},
      {id:'b',text:'Maximizar el recaudo sin considerar criterios de equidad.',rationale:'La misión expresa justicia, equidad y sostenibilidad fiscal, no solo maximización del recaudo.'},
      {id:'c',text:'Administrar exclusivamente los tributos internos.',rationale:'La DIAN también tiene competencias aduaneras y cambiarias, entre otras.'}
    ], correctOptionId:'a', explanation:'La misión vigente consultada enfatiza una contribución justa y equitativa para financiar el gasto público, sostener fiscalmente al país y consolidar el Estado social de derecho.', sourceIds:['pei-dian-2024-2026-v2'], verifiedAt
  },
  {
    id:'q-cpaca-01', moduleId:'m4', skillIds:['cpaca-principios'], type:'pjs', difficulty:2,
    case:'En una actuación administrativa, un servidor decide omitir una oportunidad de defensa porque considera que así resolverá más rápido.',
    stem:'¿Qué principio resulta directamente comprometido?',
    options:[
      {id:'a',text:'Debido proceso.',rationale:'El CPACA exige respetar procedimiento, competencia, defensa y contradicción.'},
      {id:'b',text:'Economía únicamente.',rationale:'La economía no autoriza a sacrificar garantías del debido proceso.'},
      {id:'c',text:'Coordinación exclusivamente.',rationale:'El problema central descrito es la garantía de defensa y contradicción.'}
    ], correctOptionId:'a', explanation:'El artículo 3 del CPACA exige que las actuaciones respeten el debido proceso, incluyendo representación, defensa y contradicción.', sourceIds:['cpaca'], verifiedAt
  },
  {
    id:'q-tax-01', moduleId:'m5', skillIds:['obligacion-tributaria'], type:'single', difficulty:1,
    stem:'¿Cuándo se origina la obligación tributaria sustancial según el artículo 1 del Estatuto Tributario?',
    options:[
      {id:'a',text:'Cuando la DIAN inicia un proceso de cobro.',rationale:'El cobro es posterior al nacimiento de la obligación.'},
      {id:'b',text:'Al realizarse el presupuesto o presupuestos previstos en la ley como generadores del impuesto.',rationale:'Esa es la regla del artículo 1.'},
      {id:'c',text:'Cuando el contribuyente solicita una facilidad de pago.',rationale:'La facilidad presupone una obligación ya existente.'}
    ], correctOptionId:'b', explanation:'El artículo 1 del Estatuto Tributario vincula el origen de la obligación sustancial con la realización del hecho o presupuesto generador previsto legalmente, y su objeto es el pago del tributo.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-ear-01', moduleId:'m7', skillIds:['ear-sanciones'], type:'pjs', difficulty:2,
    case:'Una entidad autorizada para recaudar recibe una declaración cuyo NIT no coincide con el registrado en el RUT.',
    stem:'¿Qué tema del Estatuto Tributario debes revisar primero para analizar el posible incumplimiento?',
    options:[
      {id:'a',text:'Errores de verificación de entidades autorizadas para recaudar.',rationale:'El artículo 674 regula precisamente errores de verificación, entre ellos la inconsistencia del NIT.'},
      {id:'b',text:'Excepciones contra el mandamiento de pago.',rationale:'Estas pertenecen al procedimiento coactivo, no al control de EAR.'},
      {id:'c',text:'Prescripción de la acción de cobro.',rationale:'No es el tema central del caso.'}
    ], correctOptionId:'a', explanation:'El artículo 674 del Estatuto Tributario establece sanciones para entidades autorizadas por errores de verificación, incluida la inconsistencia del NIT frente al RUT.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-presc-01', moduleId:'m9', skillIds:['prescripcion-cobro'], type:'single', difficulty:2,
    stem:'Como regla general del artículo 817 del Estatuto Tributario, ¿cuál es el término de prescripción de la acción de cobro de obligaciones fiscales?',
    options:[
      {id:'a',text:'Dos años.',rationale:'Ese término aparece en otros trámites, como ciertas solicitudes de devolución o compensación, pero no es la regla del artículo 817.'},
      {id:'b',text:'Cinco años.',rationale:'Es el término general previsto para la acción de cobro.'},
      {id:'c',text:'Diez años.',rationale:'No corresponde al término establecido por el artículo 817.'}
    ], correctOptionId:'b', explanation:'El artículo 817 establece un término de cinco años, cuyo punto de inicio depende del supuesto: vencimiento para declarar, presentación extemporánea, corrección o ejecutoria del acto, entre otros.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-presc-02', moduleId:'m9', skillIds:['prescripcion-cobro'], type:'pjs', difficulty:3,
    case:'En un expediente se encuentra una obligación cuya acción de cobro estaba corriendo y posteriormente se notificó válidamente el mandamiento de pago.',
    stem:'¿Qué efecto debes considerar sobre el término de prescripción?',
    options:[
      {id:'a',text:'La notificación del mandamiento de pago interrumpe la prescripción.',rationale:'El artículo 818 la contempla expresamente como causal de interrupción.'},
      {id:'b',text:'El término permanece inalterado porque el mandamiento solo comunica la deuda.',rationale:'Desconoce el efecto legal expreso de la notificación.'},
      {id:'c',text:'La obligación se extingue automáticamente.',rationale:'La notificación no extingue la obligación.'}
    ], correctOptionId:'a', explanation:'El artículo 818 dispone que el término de prescripción se interrumpe, entre otros eventos, por la notificación del mandamiento de pago.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-facilidad-01', moduleId:'m10', skillIds:['facilidades-pago'], type:'single', difficulty:2,
    stem:'Según el artículo 814 vigente, una facilidad para el pago sin garantías puede concederse cuando:',
    options:[
      {id:'a',text:'El término no supera un año y el contribuyente no ha incumplido facilidades durante el año anterior.',rationale:'Esa condición aparece expresamente en la norma vigente consultada.'},
      {id:'b',text:'Siempre que la deuda sea inferior a 10.000 UVT.',rationale:'La regla sin garantía no está formulada así.'},
      {id:'c',text:'Solo si ya existe remate programado.',rationale:'No es requisito de la norma.'}
    ], correctOptionId:'a', explanation:'El artículo 814 permite facilidades sin garantías cuando el plazo no sea superior a un año y no exista incumplimiento de facilidades durante el año anterior, bajo las condiciones allí previstas.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-coactivo-01', moduleId:'m11', skillIds:['cobro-coactivo'], type:'single', difficulty:1,
    stem:'¿Qué norma del Estatuto Tributario introduce el procedimiento administrativo coactivo para las deudas fiscales allí señaladas?',
    options:[
      {id:'a',text:'Artículo 823.',rationale:'Es el artículo que abre el Título de cobro coactivo y establece la aplicación del procedimiento.'},
      {id:'b',text:'Artículo 850.',rationale:'Regula devoluciones.'},
      {id:'c',text:'Artículo 674.',rationale:'Regula sanciones a entidades autorizadas para recaudar.'}
    ], correctOptionId:'a', explanation:'El artículo 823 dispone que el cobro coactivo de deudas fiscales por los conceptos allí mencionados debe seguir el procedimiento de los artículos siguientes.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-coactivo-02', moduleId:'m11', skillIds:['mandamiento-pago'], type:'pjs', difficulty:2,
    case:'El funcionario competente va a iniciar la exigencia coactiva de obligaciones pendientes e intereses a cargo de un deudor.',
    stem:'¿Qué actuación corresponde según el artículo 826?',
    options:[
      {id:'a',text:'Producir el mandamiento de pago y adelantar su notificación conforme a la norma.',rationale:'Es la actuación prevista por el artículo 826.'},
      {id:'b',text:'Ordenar directamente el remate sin mandamiento.',rationale:'La secuencia omite una actuación esencial del procedimiento.'},
      {id:'c',text:'Archivar el expediente hasta que el deudor solicite información.',rationale:'No corresponde al deber de cobro cuando existen presupuestos para adelantarlo.'}
    ], correctOptionId:'a', explanation:'El mandamiento de pago ordena cancelar obligaciones pendientes e intereses y debe notificarse conforme al procedimiento legal.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-titulo-01', moduleId:'m11', skillIds:['titulo-ejecutivo'], type:'single', difficulty:2,
    stem:'¿Cuál de los siguientes puede prestar mérito ejecutivo de acuerdo con el artículo 828?',
    options:[
      {id:'a',text:'Una liquidación oficial ejecutoriada.',rationale:'Está expresamente prevista como título ejecutivo.'},
      {id:'b',text:'Un borrador interno sin decisión ejecutoriada.',rationale:'Un borrador no satisface los supuestos legales del título.'},
      {id:'c',text:'Una conversación telefónica no documentada.',rationale:'No constituye por sí sola título ejecutivo.'}
    ], correctOptionId:'a', explanation:'El artículo 828 enumera títulos ejecutivos, entre ellos liquidaciones oficiales ejecutoriadas, actos administrativos ejecutoriados con sumas líquidas y otros supuestos.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-exc-01', moduleId:'m12', skillIds:['excepciones-cobro'], type:'single', difficulty:2,
    stem:'Tras la notificación del mandamiento de pago, ¿qué término general tiene el deudor para pagar o proponer las excepciones del artículo 831?',
    options:[
      {id:'a',text:'Diez días.',rationale:'Diez días aparece en la citación previa para comparecer a la notificación personal del mandamiento, no en este término.'},
      {id:'b',text:'Quince días.',rationale:'Es el término del artículo 830.'},
      {id:'c',text:'Un mes.',rationale:'Un mes es el término previsto para decidir las excepciones, no para presentarlas.'}
    ], correctOptionId:'b', explanation:'El artículo 830 concede quince días desde la notificación del mandamiento para pagar o presentar por escrito las excepciones.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-exc-02', moduleId:'m12', skillIds:['excepciones-cobro'], type:'pjs', difficulty:3,
    case:'Un deudor presenta oportunamente una excepción de pago efectivo y la prueba demuestra que la obligación fue cancelada en su totalidad.',
    stem:'¿Qué actuación es coherente con el artículo 833?',
    options:[
      {id:'a',text:'Declarar probada la excepción y terminar el procedimiento cuando corresponda, levantando medidas preventivas si las hubo.',rationale:'Es la consecuencia prevista para excepciones probadas.'},
      {id:'b',text:'Ignorar la prueba y continuar al remate.',rationale:'Contraría el efecto de una excepción probada.'},
      {id:'c',text:'Imponer una nueva sanción por haber presentado excepción.',rationale:'No existe tal consecuencia por ejercer el derecho de defensa.'}
    ], correctOptionId:'a', explanation:'Cuando se prueban las excepciones, el artículo 833 ordena declararlo y terminar el procedimiento cuando corresponda, además de levantar medidas preventivas si fueron decretadas.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-medida-01', moduleId:'m13', skillIds:['medidas-cautelares'], type:'single', difficulty:2,
    stem:'¿Cuándo puede el funcionario decretar embargo y secuestro preventivo según el artículo 837?',
    options:[
      {id:'a',text:'Previa o simultáneamente con el mandamiento de pago, respecto de bienes establecidos como propiedad del deudor.',rationale:'Es la regla del artículo 837.'},
      {id:'b',text:'Únicamente después del remate.',rationale:'Sería contrario a la naturaleza preventiva de la medida.'},
      {id:'c',text:'Solo cuando el contribuyente lo autorice.',rationale:'No es un requisito de la medida cautelar administrativa.'}
    ], correctOptionId:'a', explanation:'Las medidas preventivas pueden decretarse antes o simultáneamente con el mandamiento de pago cuando se han identificado bienes del deudor.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-medida-02', moduleId:'m13', skillIds:['medidas-cautelares'], type:'pjs', difficulty:3,
    case:'En un proceso contra una persona natural se proyecta embargo de una cuenta de ahorros. El equipo debe revisar si aplica un límite de inembargabilidad.',
    stem:'¿Qué disposición debe revisarse específicamente?',
    options:[
      {id:'a',text:'Artículo 837-1 del Estatuto Tributario.',rationale:'Regula el límite de inembargabilidad para cuentas de ahorro en procesos de cobro de la DIAN, bajo sus condiciones.'},
      {id:'b',text:'Artículo 850.',rationale:'Regula devoluciones de saldos a favor.'},
      {id:'c',text:'Artículo 675.',rationale:'Regula inconsistencias en información remitida por entidades recaudadoras.'}
    ], correctOptionId:'a', explanation:'El artículo 837-1 contiene el límite de inembargabilidad aplicable a cuentas de ahorro de personas naturales y otras reglas relacionadas.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-comp-01', moduleId:'m15', skillIds:['compensacion'], type:'single', difficulty:2,
    stem:'Según el artículo 815, un contribuyente que liquida un saldo a favor puede, entre otras posibilidades:',
    options:[
      {id:'a',text:'Imputarlo en la liquidación privada del mismo impuesto del siguiente período, cuando corresponda.',rationale:'Es una de las alternativas previstas por el artículo 815.'},
      {id:'b',text:'Convertirlo automáticamente en una sanción a la administración.',rationale:'No existe esa consecuencia.'},
      {id:'c',text:'Usarlo para extinguir cualquier obligación privada ajena a la administración tributaria.',rationale:'No es el alcance del mecanismo tributario de compensación.'}
    ], correctOptionId:'a', explanation:'El artículo 815 regula la compensación con saldos a favor y contempla la imputación al período siguiente del mismo impuesto, además de otros supuestos.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-comp-02', moduleId:'m15', skillIds:['compensacion'], type:'single', difficulty:2,
    stem:'Como regla general, ¿hasta cuándo debe presentarse una solicitud de compensación de impuestos según el artículo 816?',
    options:[
      {id:'a',text:'A más tardar dos años después del vencimiento del término para declarar.',rationale:'Es la regla general del artículo 816.'},
      {id:'b',text:'Dentro de quince días del vencimiento.',rationale:'Ese término no corresponde a la regla general de compensación.'},
      {id:'c',text:'En cualquier momento sin límite temporal.',rationale:'La norma establece término.'}
    ], correctOptionId:'a', explanation:'El artículo 816 establece, como regla general, dos años desde el vencimiento del término para declarar.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-dev-01', moduleId:'m16', skillIds:['devoluciones'], type:'single', difficulty:2,
    stem:'¿Qué reconoce el artículo 850 del Estatuto Tributario?',
    options:[
      {id:'a',text:'La posibilidad de solicitar devolución de saldos a favor y la devolución oportuna de pagos en exceso o de lo no debido bajo el procedimiento aplicable.',rationale:'Resume el núcleo del artículo 850.'},
      {id:'b',text:'La prescripción automática de toda deuda a los dos años.',rationale:'No es el contenido del artículo.'},
      {id:'c',text:'La eliminación de los controles previos a una devolución.',rationale:'El artículo no establece esa regla general.'}
    ], correctOptionId:'a', explanation:'El artículo 850 reconoce la devolución de saldos a favor y ordena devolver oportunamente pagos en exceso o de lo no debido según el procedimiento aplicable.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-dev-02', moduleId:'m16', skillIds:['devoluciones'], type:'pjs', difficulty:3,
    case:'Se recibe una solicitud de devolución de saldo a favor de renta, presentada oportunamente y en debida forma. No se configura en el caso ninguna regla especial que modifique el término ordinario.',
    stem:'¿Qué término general debes tener presente según el artículo 855?',
    options:[
      {id:'a',text:'Cincuenta días siguientes a la solicitud, previas las compensaciones a que haya lugar.',rationale:'Es el término ordinario previsto en el artículo 855 para renta e IVA, bajo sus condiciones.'},
      {id:'b',text:'Quince días en todos los casos.',rationale:'No es el término general del artículo 855.'},
      {id:'c',text:'Dos años para decidir.',rationale:'Dos años aparece como término para solicitar en otras disposiciones, no como término ordinario para efectuar la devolución.'}
    ], correctOptionId:'a', explanation:'El artículo 855 dispone cincuenta días para efectuar la devolución de saldos a favor de renta e IVA presentada oportunamente y en debida forma, sin perjuicio de reglas especiales.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-comp-beh-01', moduleId:'m19', skillIds:['competencias-comportamentales'], type:'single', difficulty:1,
    stem:'¿Qué nivel exige la ficha CT-CR-3007 para Comportamiento ético?',
    options:[
      {id:'a',text:'Nivel 1.',rationale:'La ficha exige un nivel superior para esta competencia específica.'},
      {id:'b',text:'Nivel 3.',rationale:'Nivel 3 corresponde en la ficha a otras competencias como Adaptabilidad, Comunicación efectiva y Trabajo en equipo.'},
      {id:'c',text:'Nivel 4.',rationale:'Es el nivel exigido por la ficha para Comportamiento ético.'}
    ], correctOptionId:'c', explanation:'El MERF CT-CR-3007 exige Comportamiento ético nivel 4; Adaptabilidad, Comunicación efectiva y Trabajo en equipo están en nivel 3.', sourceIds:['merf-ct-cr-3007','res-65-2024'], verifiedAt
  },
  {
    id:'q-integridad-01', moduleId:'m20', skillIds:['integridad'], type:'pjs', difficulty:2,
    case:'Un ciudadano solicita orientación. El servidor considera que atenderlo “le hace un favor” y decide posponerlo sin razón, aunque puede resolver la consulta oportunamente.',
    stem:'¿Qué valor del Código de Integridad se compromete de manera más directa?',
    options:[
      {id:'a',text:'Compromiso.',rationale:'El valor resalta comprender y resolver necesidades ciudadanas y no asumir el servicio como un favor.'},
      {id:'b',text:'Justicia únicamente.',rationale:'Podría relacionarse con varios valores, pero el caso describe de forma directa una conducta contraria al compromiso de servicio.'},
      {id:'c',text:'Ninguno, porque la orientación es opcional.',rationale:'El servicio al ciudadano forma parte de la actuación pública y de las pautas de integridad.'}
    ], correctOptionId:'a', explanation:'El Código de Integridad asocia Compromiso con comprender y resolver las necesidades de las personas y rechaza la idea de que el trabajo público sea un favor.', sourceIds:['codigo-integridad'], verifiedAt
  },
  {
    id:'q-pjs-01', moduleId:'m21', skillIds:['tecnica-pjs'], type:'pjs', difficulty:2,
    case:'Una pregunta presenta tres opciones plausibles. Una es más severa, otra más amable y una tercera coincide con la competencia, el momento procesal y la norma aplicable.',
    stem:'¿Qué criterio debes priorizar?',
    options:[
      {id:'a',text:'Elegir siempre la opción más severa para proteger el recaudo.',rationale:'La severidad no sustituye legalidad, competencia y procedimiento.'},
      {id:'b',text:'Elegir la actuación jurídicamente procedente según hechos, competencia y etapa.',rationale:'Ese es el criterio operativo para resolver PJS funcionales.'},
      {id:'c',text:'Elegir la opción más empática aunque desconozca el procedimiento.',rationale:'El servicio al ciudadano no permite actuar por fuera del marco jurídico.'}
    ], correctOptionId:'b', explanation:'En PJS funcionales conviene reconstruir hechos, competencia, cronología y norma; la respuesta correcta es la actuación procedente, no necesariamente la más dura o amable.', sourceIds:['merf-ct-cr-3007','estatuto-tributario'], verifiedAt
  }

  ,{
    id:'q-const-01', moduleId:'m1', skillIds:['funcion-publica'], type:'single', difficulty:1,
    stem:'¿Qué idea recoge el artículo 209 de la Constitución sobre la función administrativa?',
    options:[
      {id:'a',text:'Está al servicio de los intereses generales y se desarrolla con principios como igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.',rationale:'Corresponde al núcleo del artículo 209.'},
      {id:'b',text:'Está al servicio exclusivo de la autoridad que expide el acto.',rationale:'La función administrativa se orienta a los intereses generales, no a un interés personal o de la autoridad.'},
      {id:'c',text:'Puede prescindir de principios cuando exista una meta de recaudo.',rationale:'Las metas de gestión no desplazan los principios constitucionales.'}
    ], correctOptionId:'a', explanation:'El artículo 209 conecta la actuación administrativa con el interés general y con principios que deben orientar su ejercicio. Para un Gestor II, esos principios sirven como marco de todas las decisiones del procedimiento.', sourceIds:['constitucion-politica'], verifiedAt
  },
  {
    id:'q-const-02', moduleId:'m1', skillIds:['funcion-publica'], type:'pjs', difficulty:2,
    case:'Un servidor tiene dos expedientes equivalentes, pero decide acelerar el de una persona conocida sin una razón objetiva prevista en el procedimiento.',
    stem:'¿Qué principio constitucional resulta especialmente comprometido?',
    options:[
      {id:'a',text:'Imparcialidad.',rationale:'El trato preferente por una relación personal desconoce la decisión objetiva e imparcial.'},
      {id:'b',text:'Publicidad únicamente.',rationale:'El problema central no es la divulgación de la actuación sino el trato parcial.'},
      {id:'c',text:'Economía exclusivamente.',rationale:'La economía busca uso racional de recursos, pero no justifica privilegios.'}
    ], correctOptionId:'a', explanation:'La función administrativa exige imparcialidad. En PJS, una relación personal nunca sustituye los criterios objetivos del procedimiento.', sourceIds:['constitucion-politica','cpaca'], verifiedAt
  },
  {
    id:'q-pagos-01', moduleId:'m6', skillIds:['estado-cuenta','imputacion-pagos'], type:'single', difficulty:2,
    stem:'Al revisar un pago asociado a una deuda vencida, ¿qué tema regula expresamente el artículo 804 del Estatuto Tributario?',
    options:[
      {id:'a',text:'La imputación del pago dentro de la obligación tributaria.',rationale:'El artículo 804 contiene reglas de imputación del pago.'},
      {id:'b',text:'La apertura de un proceso de reorganización empresarial.',rationale:'Eso pertenece al régimen de insolvencia.'},
      {id:'c',text:'La competencia territorial para cobro.',rationale:'La competencia territorial se aborda en otras disposiciones del procedimiento de cobro.'}
    ], correctOptionId:'a', explanation:'Para depurar un estado de cuenta no basta con constatar que “hubo un pago”: debe establecerse a qué obligación, período y conceptos quedó aplicado según las reglas vigentes.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-pagos-02', moduleId:'m6', skillIds:['estado-cuenta','titulo-ejecutivo'], type:'pjs', difficulty:3,
    case:'Al depurar la cuenta de un contribuyente encuentras una declaración tributaria presentada con saldo a pagar y verificas que ya venció el plazo para cancelarla.',
    stem:'Antes de concluir que la obligación puede ser objeto de cobro, ¿qué debes verificar como parte del análisis?',
    options:[
      {id:'a',text:'La existencia, exigibilidad, correcta imputación de pagos y soporte del título que refleja la obligación.',rationale:'La depuración exige reconstruir la realidad de la obligación antes de continuar con gestión de cartera.'},
      {id:'b',text:'Únicamente que el valor sea alto.',rationale:'La cuantía no reemplaza los presupuestos jurídicos y contables de la obligación.'},
      {id:'c',text:'Solo que exista un correo enviado al contribuyente.',rationale:'Una comunicación no demuestra por sí sola la realidad ni exigibilidad de la obligación.'}
    ], correctOptionId:'a', explanation:'El MERF exige depurar el estado de cuenta y la exigibilidad y realidad de la obligación. El Estatuto también identifica las declaraciones y otros actos que pueden prestar mérito ejecutivo bajo sus condiciones.', sourceIds:['merf-ct-cr-3007','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-control-01', moduleId:'m8', skillIds:['control-extensivo'], type:'single', difficulty:2,
    stem:'¿Qué objetivo caracteriza mejor una acción de control extensivo orientada al cumplimiento?',
    options:[
      {id:'a',text:'Gestionar de forma amplia incumplimientos o riesgos y promover el cumplimiento correcto y voluntario mediante acciones masivas o segmentadas.',rationale:'Coincide con la función del empleo y con el enfoque institucional reciente de control extensivo.'},
      {id:'b',text:'Resolver únicamente litigios judiciales individuales.',rationale:'Eso no describe el núcleo del control extensivo.'},
      {id:'c',text:'Reemplazar todos los procedimientos de fiscalización y cobro.',rationale:'El control extensivo es una herramienta de gestión del cumplimiento, no un sustituto universal de los demás procesos.'}
    ], correctOptionId:'a', explanation:'La ficha CT-CR-3007 incluye campañas de amplia cobertura y la DIAN reporta acciones masivas y persuasivas dirigidas al cumplimiento voluntario como parte de su gestión de control extensivo.', sourceIds:['merf-ct-cr-3007','informe-gestion-dian-2025','decreto-1742-2020'], verifiedAt
  },
  {
    id:'q-control-02', moduleId:'m8', skillIds:['control-extensivo'], type:'pjs', difficulty:3,
    case:'Un segmento amplio de obligados presenta un mismo patrón de incumplimiento formal. La dependencia cuenta con información suficiente para identificarlos y existe un lineamiento vigente para una campaña de cumplimiento.',
    stem:'¿Qué actuación es más coherente con el perfil CT-CR-3007?',
    options:[
      {id:'a',text:'Aplicar la campaña conforme al lineamiento, segmentar los casos y registrar sus resultados para seguimiento.',rationale:'Conecta la función de campañas de amplia cobertura con control, trazabilidad y cumplimiento.'},
      {id:'b',text:'Ignorar el patrón porque no se trata de un solo expediente.',rationale:'La gestión masiva es precisamente una de las finalidades del control extensivo.'},
      {id:'c',text:'Imponer automáticamente la máxima sanción sin verificar competencia ni procedimiento.',rationale:'El control debe mantenerse dentro de la normativa y el procedimiento aplicable.'}
    ], correctOptionId:'a', explanation:'El empleo contempla desarrollar campañas de ejecución inmediata y amplia cobertura que incentiven o requieran el cumplimiento, siempre bajo normativa, lineamientos y procedimientos vigentes.', sourceIds:['merf-ct-cr-3007','informe-gestion-dian-2025'], verifiedAt
  },
  {
    id:'q-concursal-01', moduleId:'m14', skillIds:['procesos-concursales'], type:'single', difficulty:2,
    stem:'¿Cuál es una finalidad central del régimen de insolvencia de la Ley 1116 de 2006?',
    options:[
      {id:'a',text:'Proteger el crédito y procurar la recuperación y conservación de la empresa mediante reorganización, o realizar ordenadamente la liquidación cuando corresponda.',rationale:'Resume la finalidad legal del régimen.'},
      {id:'b',text:'Eliminar automáticamente todas las obligaciones fiscales.',rationale:'La insolvencia no equivale a una extinción automática de las acreencias fiscales.'},
      {id:'c',text:'Suspender indefinidamente cualquier actuación de los acreedores sin reglas.',rationale:'El régimen establece procedimientos, efectos, reconocimiento y graduación de acreencias.'}
    ], correctOptionId:'a', explanation:'La Ley 1116 estructura la insolvencia alrededor de la protección del crédito y la empresa, a través de reorganización y liquidación judicial bajo reglas concursales.', sourceIds:['ley-1116-2006'], verifiedAt
  },
  {
    id:'q-concursal-02', moduleId:'m14', skillIds:['procesos-concursales'], type:'pjs', difficulty:4,
    case:'La DIAN conoce que un deudor con obligaciones fiscales fue admitido a un proceso de reorganización. La acreencia de la entidad debe quedar correctamente reconocida dentro del concurso.',
    stem:'¿Cuál enfoque es más adecuado?',
    options:[
      {id:'a',text:'Verificar la acreencia, su cuantía y soporte, intervenir oportunamente en el reconocimiento y graduación de créditos y actuar dentro de las reglas del proceso concursal.',rationale:'La DIAN actúa como acreedor dentro del régimen y debe proteger la acreencia respetando el proceso.'},
      {id:'b',text:'Suponer que la deuda desapareció por la sola admisión al proceso.',rationale:'La admisión no extingue automáticamente la acreencia fiscal.'},
      {id:'c',text:'Desconocer el proceso concursal y continuar cualquier actuación como si no existiera.',rationale:'El régimen de insolvencia produce efectos que deben ser considerados por los acreedores.'}
    ], correctOptionId:'a', explanation:'El MERF asigna al Gestor II la representación de la DIAN en procesos especiales o concursales. La Ley 1116 regula reconocimiento, graduación y tratamiento de acreencias, incluidas las de entidades públicas.', sourceIds:['merf-ct-cr-3007','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-datos-01', moduleId:'m17', skillIds:['calidad-datos','seguridad-informacion'], type:'single', difficulty:2,
    stem:'¿Cuáles son las tres propiedades clásicas de seguridad que el manual DIAN menciona expresamente?',
    options:[
      {id:'a',text:'Confidencialidad, integridad y disponibilidad.',rationale:'Son las propiedades señaladas en el manual de seguridad y privacidad de la información.'},
      {id:'b',text:'Rapidez, diseño y popularidad.',rationale:'No son propiedades de seguridad de la información.'},
      {id:'c',text:'Publicidad, gratuidad y oralidad.',rationale:'Pueden existir principios jurídicos relacionados con actuaciones, pero no son la tríada de seguridad solicitada.'}
    ], correctOptionId:'a', explanation:'La función del empleo sobre sistemas, accesos e información no es puramente técnica: exige preservar calidad, permisos y seguridad de la información institucional.', sourceIds:['manual-seguridad-dian','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-datos-02', moduleId:'m17', skillIds:['calidad-datos','seguridad-informacion'], type:'pjs', difficulty:3,
    case:'Un usuario solicita acceso a un sistema corporativo de recaudo. La solicitud no tiene soporte de autorización y el perfil pedido permitiría consultar información que no necesita para sus funciones.',
    stem:'¿Qué actuación es más adecuada?',
    options:[
      {id:'a',text:'Verificar autorización, necesidad y perfil antes de conceder el acceso, aplicando los lineamientos institucionales de control de acceso.',rationale:'Es coherente con la gestión de permisos del MERF y con las políticas de seguridad DIAN.'},
      {id:'b',text:'Conceder el acceso completo para evitar demoras.',rationale:'La rapidez no justifica omitir controles de acceso.'},
      {id:'c',text:'Compartir las credenciales de otro usuario mientras se formaliza la solicitud.',rationale:'Compromete autenticación, trazabilidad y seguridad.'}
    ], correctOptionId:'a', explanation:'El MERF contempla gestionar permisos de acceso y la DIAN dispone políticas específicas de control y derechos de acceso. La decisión debe quedar dentro del procedimiento y la autorización correspondiente.', sourceIds:['merf-ct-cr-3007','modelo-seguridad-dian','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-basic-beh-01', moduleId:'m18', skillIds:['comportamentales-basicas'], type:'single', difficulty:1,
    stem:'¿Cuál grupo corresponde a competencias comportamentales básicas listadas en el MERF CT-CR-3007?',
    options:[
      {id:'a',text:'Comportamiento ético, comunicación efectiva, trabajo en equipo, adaptabilidad, orientación al logro y orientación al usuario y al ciudadano.',rationale:'Es el conjunto que aparece en la ficha.'},
      {id:'b',text:'Liderazgo político, negociación comercial y ventas.',rationale:'No corresponde al conjunto del MERF.'},
      {id:'c',text:'Programación, redes y administración de bases de datos.',rationale:'Son conocimientos técnicos posibles, no las competencias comportamentales básicas listadas.'}
    ], correctOptionId:'a', explanation:'La ficha separa competencias básicas de las competencias específicas con nivel. Reconocer esa diferencia evita mezclar conocimiento técnico con conducta esperada.', sourceIds:['merf-ct-cr-3007','res-65-2024'], verifiedAt
  },
  {
    id:'q-basic-beh-02', moduleId:'m18', skillIds:['comportamentales-basicas'], type:'pjs', difficulty:2,
    case:'Durante una atención, el contribuyente explica una inconsistencia compleja. El servidor lo interrumpe repetidamente y responde con términos técnicos sin comprobar si fue comprendido.',
    stem:'¿Qué mejora conductual sería más pertinente?',
    options:[
      {id:'a',text:'Escuchar activamente, comunicar con claridad y verificar comprensión manteniendo el marco técnico correcto.',rationale:'Integra comunicación efectiva y orientación al usuario.'},
      {id:'b',text:'Evitar toda explicación para reducir el tiempo de atención.',rationale:'La eficiencia no supone omitir una comunicación necesaria.'},
      {id:'c',text:'Prometer una solución contraria al procedimiento para que la persona se sienta atendida.',rationale:'La orientación al usuario no permite desconocer la legalidad.'}
    ], correctOptionId:'a', explanation:'Las competencias comportamentales deben leerse como conductas observables dentro de situaciones reales de servicio, no como definiciones aisladas.', sourceIds:['merf-ct-cr-3007','res-65-2024'], verifiedAt
  },
{
  "id": "q-debido-01",
  "moduleId": "m1",
  "skillIds": [
    "constitucion",
    "debido-proceso"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un expediente podría resolverse más rápido si se omite una oportunidad de defensa prevista para el interesado. El equipo argumenta que la meta mensual justifica acelerar el trámite.",
  "stem": "¿Cuál es la actuación más adecuada?",
  "options": [
    {
      "id": "a",
      "text": "Omitir la oportunidad de defensa para cerrar el expediente antes.",
      "rationale": "La celeridad no autoriza a eliminar una garantía esencial del debido proceso."
    },
    {
      "id": "b",
      "text": "Respetar la etapa de defensa y continuar el trámite con la secuencia aplicable.",
      "rationale": "Compatibiliza eficacia administrativa con debido proceso."
    },
    {
      "id": "c",
      "text": "Delegar informalmente la decisión a otro servidor sin verificar competencia.",
      "rationale": "La competencia también integra la legalidad del procedimiento."
    }
  ],
  "correctOptionId": "b",
  "explanation": "En la actuación administrativa, eficiencia y celeridad deben ejercerse dentro del debido proceso, respetando competencia, defensa y contradicción.",
  "sourceIds": [
    "constitucion-politica",
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-transparencia-01",
  "moduleId": "m2",
  "skillIds": [
    "transparencia"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un ciudadano solicita información de un documento institucional que contiene datos públicos junto con información que podría estar legalmente protegida.",
  "stem": "¿Qué criterio debe aplicarse primero?",
  "options": [
    {
      "id": "a",
      "text": "Negar toda la información porque pertenece a un expediente de la entidad.",
      "rationale": "La información pública se presume accesible; la restricción requiere fundamento constitucional o legal."
    },
    {
      "id": "b",
      "text": "Entregar todo sin revisar si existen datos clasificados o reservados.",
      "rationale": "La máxima publicidad no elimina las excepciones legales ni la protección de derechos."
    },
    {
      "id": "c",
      "text": "Aplicar máxima publicidad, identificar eventuales excepciones legales y, si procede, entregar versión pública de lo no protegido.",
      "rationale": "Es el equilibrio previsto por la Ley 1712 entre publicidad y excepciones."
    }
  ],
  "correctOptionId": "c",
  "explanation": "La Ley 1712 parte de la máxima publicidad, pero admite restricciones constitucionales o legales y contempla la divulgación parcial cuando solo una parte está protegida.",
  "sourceIds": [
    "ley-1712-2014"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-peticion-01",
  "moduleId": "m2",
  "skillIds": [
    "derecho-peticion"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "Salvo norma legal especial, ¿cuáles son los términos generales de la Ley 1755 para estas peticiones?",
  "options": [
    {
      "id": "a",
      "text": "General 15 días; documentos/información 10 días; consultas 30 días.",
      "rationale": "Corresponde al artículo 14 de la Ley 1755 de 2015."
    },
    {
      "id": "b",
      "text": "General 30 días; documentos 15 días; consultas 10 días.",
      "rationale": "Invierte los términos establecidos."
    },
    {
      "id": "c",
      "text": "Todas deben resolverse en 15 días sin distinción.",
      "rationale": "La ley establece términos especiales para documentos/información y consultas."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El artículo 14 fija como regla 15 días para toda petición, con 10 días para documentos e información y 30 días para consultas, salvo norma especial.",
  "sourceIds": [
    "ley-1755-2015"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-peticion-02",
  "moduleId": "m2",
  "skillIds": [
    "derecho-peticion",
    "norma-especial"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Una solicitud se presenta dentro de un procedimiento tributario que tiene regulación especial de términos. Un compañero propone aplicar automáticamente el término general de derecho de petición.",
  "stem": "¿Cómo debes resolver el conflicto de términos?",
  "options": [
    {
      "id": "a",
      "text": "Aplicar siempre los 15 días de la Ley 1755.",
      "rationale": "La propia regla general opera salvo norma legal especial."
    },
    {
      "id": "b",
      "text": "Verificar primero la norma especial del trámite y aplicar el término especial si efectivamente regula el caso.",
      "rationale": "Respeta la cláusula de especialidad prevista en la Ley 1755."
    },
    {
      "id": "c",
      "text": "Escoger el término más corto sin revisar la materia.",
      "rationale": "El término se determina por la norma aplicable, no por conveniencia."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La regla general del derecho de petición cede cuando existe una norma legal especial aplicable al trámite concreto.",
  "sourceIds": [
    "ley-1755-2015",
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-archivo-01",
  "moduleId": "m2",
  "skillIds": [
    "gestion-documental"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Durante una corrección del estado de cuenta se produce un documento que explica el origen del ajuste y debe incorporarse al expediente.",
  "stem": "¿Qué práctica protege mejor la gestión documental?",
  "options": [
    {
      "id": "a",
      "text": "Reemplazar el documento anterior sin dejar rastro para evitar duplicados.",
      "rationale": "Eliminar trazabilidad dificulta acreditar la historia y autenticidad del expediente."
    },
    {
      "id": "b",
      "text": "Gestionar el documento dentro del expediente, conservar su relación con la actuación y aplicar las reglas institucionales de organización, conservación y disposición.",
      "rationale": "Se alinea con el ciclo documental y la función archivística."
    },
    {
      "id": "c",
      "text": "Guardar una copia personal fuera de los sistemas institucionales.",
      "rationale": "Fragmenta la custodia y puede comprometer seguridad y trazabilidad."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La Ley 594 concibe la gestión documental como el manejo y organización de documentos desde su origen hasta su destino final, para facilitar utilización y conservación.",
  "sourceIds": [
    "ley-594-2000"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-taci-01",
  "moduleId": "m3",
  "skillIds": [
    "taci",
    "perfil-empleo"
  ],
  "type": "single",
  "difficulty": 1,
  "stem": "Para CT-CR-3007, ¿cómo debe estudiarse el sistema Tributario, Aduanero y Cambiario (TACI)?",
  "options": [
    {
      "id": "a",
      "text": "Como contexto institucional transversal, profundizando especialmente en los componentes tributarios conectados con cartera y recaudo-devoluciones.",
      "rationale": "El MERF incluye introducción al TACI, pero ubica el empleo en Cumplimiento de obligaciones tributarias."
    },
    {
      "id": "b",
      "text": "Como especialización principal en clasificación arancelaria.",
      "rationale": "No corresponde al núcleo funcional de la ficha."
    },
    {
      "id": "c",
      "text": "Debe omitirse porque el cargo solo trata cartera.",
      "rationale": "El MERF sí incluye expresamente la introducción al TACI dentro de las competencias básicas."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El TACI forma parte de la base institucional, pero la profundidad de estudio debe respetar el proceso y subprocesos del empleo.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "decreto-1742-2020"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-peticion-03",
  "moduleId": "m4",
  "skillIds": [
    "derecho-peticion",
    "competencia"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Llega una petición sobre un asunto que, después de verificar las funciones, corresponde a otra autoridad.",
  "stem": "¿Qué enfoque es correcto?",
  "options": [
    {
      "id": "a",
      "text": "Archivar la petición porque fue dirigida a la autoridad equivocada.",
      "rationale": "La falta de competencia no autoriza simplemente a ignorar la solicitud."
    },
    {
      "id": "b",
      "text": "Aplicar el tratamiento legal para falta de competencia, informar al interesado y remitir a la autoridad competente cuando corresponda.",
      "rationale": "Es la lógica del derecho de petición frente a autoridad incompetente."
    },
    {
      "id": "c",
      "text": "Responder de fondo aunque el servidor no tenga competencia material.",
      "rationale": "Actuar sin competencia puede viciar la actuación."
    }
  ],
  "correctOptionId": "b",
  "explanation": "El derecho de petición regula la actuación cuando la autoridad receptora no es competente: la solución no es ignorar la solicitud ni asumir una competencia inexistente.",
  "sourceIds": [
    "ley-1755-2015",
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-cpaca-02",
  "moduleId": "m4",
  "skillIds": [
    "cpaca-procedimiento",
    "norma-especial"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "Según el artículo 34 del CPACA, cuando un procedimiento administrativo está regulado por una ley especial:",
  "options": [
    {
      "id": "a",
      "text": "La ley especial se aplica y, en lo no previsto, operan las reglas generales del CPACA cuando correspondan.",
      "rationale": "Resume la relación de especialidad y supletoriedad del artículo 34."
    },
    {
      "id": "b",
      "text": "El CPACA desplaza siempre toda regulación especial.",
      "rationale": "Desconoce la prevalencia del procedimiento especial."
    },
    {
      "id": "c",
      "text": "La autoridad puede escoger libremente cualquiera de los dos procedimientos.",
      "rationale": "La aplicación normativa no depende de una preferencia del funcionario."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El procedimiento administrativo común y principal del CPACA opera sin perjuicio de los procedimientos administrativos regulados por leyes especiales.",
  "sourceIds": [
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-notif-01",
  "moduleId": "m4",
  "skillIds": [
    "notificaciones",
    "cpaca-procedimiento"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Debes comunicar una decisión dentro de un procedimiento que cuenta con reglas tributarias especiales de notificación.",
  "stem": "¿Qué debes hacer antes de escoger la forma de notificación?",
  "options": [
    {
      "id": "a",
      "text": "Usar siempre la notificación del CPACA porque es la norma general.",
      "rationale": "Puede existir una regla especial aplicable al acto o procedimiento."
    },
    {
      "id": "b",
      "text": "Identificar la naturaleza del acto y verificar primero el régimen especial aplicable; solo después determinar la forma de comunicación o notificación.",
      "rationale": "Evita aplicar mecánicamente una regla general cuando existe especialidad."
    },
    {
      "id": "c",
      "text": "Enviar un mensaje informal por cualquier canal y asumir que quedó notificado.",
      "rationale": "La notificación debe cumplir la forma exigida por la normativa aplicable."
    }
  ],
  "correctOptionId": "b",
  "explanation": "En materia administrativa y tributaria la forma de notificar depende del acto y del régimen aplicable. La primera tarea es identificar correctamente la regla especial o general pertinente.",
  "sourceIds": [
    "cpaca",
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-recursos-01",
  "moduleId": "m4",
  "skillIds": [
    "recursos-administrativos",
    "norma-especial"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un interesado presenta un escrito contra una decisión administrativa y lo denomina “recurso”.",
  "stem": "¿Cuál es la primera verificación jurídica?",
  "options": [
    {
      "id": "a",
      "text": "Qué recurso procede según el régimen especial del acto y cuáles son sus términos y requisitos.",
      "rationale": "La procedencia del recurso no se presume; depende de la norma aplicable."
    },
    {
      "id": "b",
      "text": "Asumir que siempre procede reposición y apelación conjuntamente.",
      "rationale": "No todos los actos tienen los mismos recursos."
    },
    {
      "id": "c",
      "text": "Negar cualquier recurso por tratarse de una autoridad tributaria.",
      "rationale": "La existencia de un régimen tributario no elimina por sí sola los medios de impugnación previstos legalmente."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El CPACA regula recursos de forma general, pero los procedimientos especiales pueden establecer reglas propias; por eso debe identificarse la norma aplicable al acto concreto.",
  "sourceIds": [
    "cpaca",
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-firmeza-01",
  "moduleId": "m4",
  "skillIds": [
    "firmeza-acto"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "¿Qué efecto práctico tiene determinar que un acto administrativo está en firme?",
  "options": [
    {
      "id": "a",
      "text": "Permite establecer que agotó las condiciones de firmeza aplicables y puede producir los efectos que la ley asocia a esa ejecutoria, sin confundirla con otras etapas.",
      "rationale": "La firmeza es jurídicamente relevante para la eficacia y ejecución de decisiones."
    },
    {
      "id": "b",
      "text": "Significa que nunca puede ser objeto de control judicial.",
      "rationale": "La firmeza administrativa no elimina por sí sola el control jurisdiccional."
    },
    {
      "id": "c",
      "text": "Equivale automáticamente a que la obligación ya fue pagada.",
      "rationale": "Firmeza y pago son conceptos distintos."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El artículo 87 del CPACA enumera eventos de firmeza de los actos. En un perfil de cartera, reconocer la ejecutoria puede ser decisivo para la exigibilidad de determinadas obligaciones.",
  "sourceIds": [
    "cpaca",
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-obligacion-02",
  "moduleId": "m5",
  "skillIds": [
    "obligacion-tributaria"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Una persona presentó oportunamente una declaración, pero el sistema evidencia un valor a pagar pendiente.",
  "stem": "¿Qué distinción conceptual ayuda a analizar el caso?",
  "options": [
    {
      "id": "a",
      "text": "Separar la obligación sustancial de pagar el tributo de las obligaciones formales de declarar, informar, facturar u otras que correspondan.",
      "rationale": "Permite identificar qué deber fue incumplido y qué consecuencia analizar."
    },
    {
      "id": "b",
      "text": "Asumir que toda obligación tributaria es únicamente monetaria.",
      "rationale": "Existen deberes formales tributarios diferentes del pago."
    },
    {
      "id": "c",
      "text": "Considerar que declarar siempre extingue el deber de pago.",
      "rationale": "Presentar una declaración no implica necesariamente que el valor adeudado haya sido pagado."
    }
  ],
  "correctOptionId": "a",
  "explanation": "Para resolver casos de cumplimiento es esencial distinguir obligación sustancial y deberes formales, porque sus hechos, controles y consecuencias no son idénticos.",
  "sourceIds": [
    "estatuto-tributario",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-conceptos-01",
  "moduleId": "m5",
  "skillIds": [
    "evasion-elusion-contrabando"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "¿Cuál enfoque es más seguro frente a los conceptos de evasión, elusión y contrabando?",
  "options": [
    {
      "id": "a",
      "text": "Tratarlos como sinónimos de cualquier planeación tributaria.",
      "rationale": "Son fenómenos distintos y no toda planeación es ilícita."
    },
    {
      "id": "b",
      "text": "Distinguirlos por la conducta y el marco normativo concreto, evitando inferir ilegalidad solo por el nombre o por una reducción de carga fiscal.",
      "rationale": "El análisis exige hechos y norma aplicable."
    },
    {
      "id": "c",
      "text": "Suponer que contrabando es una categoría exclusiva de cartera tributaria.",
      "rationale": "El contrabando se vincula principalmente al ámbito aduanero y penal/administrativo según el caso."
    }
  ],
  "correctOptionId": "b",
  "explanation": "El MERF exige conceptos de evasión, elusión y contrabando como conocimiento básico; la preparación debe reconocer sus diferencias y no convertir etiquetas en conclusiones automáticas.",
  "sourceIds": [
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-recaudo-01",
  "moduleId": "m6",
  "skillIds": [
    "recaudo",
    "estado-cuenta"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un contribuyente aporta un recibo de pago, pero el sistema mantiene una obligación pendiente.",
  "stem": "¿Cuál es la actuación más técnica?",
  "options": [
    {
      "id": "a",
      "text": "Dar por extinguida la obligación únicamente porque existe un recibo.",
      "rationale": "La existencia del recibo no demuestra por sí sola correcta imputación, valor, fecha o aplicación."
    },
    {
      "id": "b",
      "text": "Conciliar declaración, recibo, valor, fecha, identificación e imputación registrada antes de concluir el estado real de la obligación.",
      "rationale": "La depuración exige verificar consistencia entre documentos y registros."
    },
    {
      "id": "c",
      "text": "Modificar manualmente el saldo para que coincida con lo dicho por el contribuyente.",
      "rationale": "Un ajuste debe tener soporte, competencia y trazabilidad."
    }
  ],
  "correctOptionId": "b",
  "explanation": "Una función central de CT-CR-3007 es depurar el estado de cuenta y corregir inconsistencias. La conclusión debe partir de evidencia y trazabilidad, no de un solo dato aislado.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-reproceso-01",
  "moduleId": "m6",
  "skillIds": [
    "recaudo",
    "calidad-datos"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Detectas que un dato inconsistente produjo un saldo erróneo en el estado de cuenta.",
  "stem": "¿Qué principio operativo debe prevalecer?",
  "options": [
    {
      "id": "a",
      "text": "Modificar el saldo de inmediato y documentar después si alguien pregunta.",
      "rationale": "Rompe trazabilidad y aumenta el riesgo de ajustes sin soporte."
    },
    {
      "id": "b",
      "text": "Validar la inconsistencia, usar el procedimiento autorizado, conservar el soporte y dejar trazabilidad del ajuste.",
      "rationale": "Alinea calidad de información, competencia y control."
    },
    {
      "id": "c",
      "text": "Crear una hoja de cálculo privada paralela para reemplazar el registro institucional.",
      "rationale": "Fragmenta la información y evita los controles del sistema corporativo."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La ficha del empleo vincula corrección/reproceso de saldos con procedimiento, competencia y normativa. El ajuste correcto debe ser verificable y trazable.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "manual-seguridad-dian"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-ear-02",
  "moduleId": "m7",
  "skillIds": [
    "ear-auditoria"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Durante una auditoría a una Entidad Autorizada para Recaudar aparecen varios registros con un mismo tipo de inconsistencia.",
  "stem": "¿Qué secuencia es más adecuada?",
  "options": [
    {
      "id": "a",
      "text": "Sancionar inmediatamente con base en una muestra aislada sin validar la conducta ni el procedimiento.",
      "rationale": "La sanción exige establecer hechos, norma, competencia y debido proceso."
    },
    {
      "id": "b",
      "text": "Documentar el hallazgo, verificar requisitos y obligación aplicable, consolidar evidencia y adelantar el procedimiento de control correspondiente.",
      "rationale": "Es coherente con auditoría, seguimiento y eventual sanción."
    },
    {
      "id": "c",
      "text": "Ignorar el patrón porque la entidad ya está autorizada para recaudar.",
      "rationale": "La autorización no excluye el seguimiento ni el régimen de control."
    }
  ],
  "correctOptionId": "b",
  "explanation": "CT-CR-3007 incluye auditorías, verificación de requisitos, seguimiento y aplicación de sanciones a EAR. Un hallazgo debe convertirse en evidencia jurídica y procedimental, no en una conclusión automática.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "estatuto-tributario",
    "res-227-2025"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-ear-03",
  "moduleId": "m7",
  "skillIds": [
    "ear-sanciones"
  ],
  "type": "single",
  "difficulty": 3,
  "stem": "Antes de imponer una sanción a una EAR, ¿qué combinación debe verificarse?",
  "options": [
    {
      "id": "a",
      "text": "Conducta tipificada, hechos probados, norma aplicable, competencia y procedimiento, incluyendo las reglas de gradualidad/reducción cuando correspondan.",
      "rationale": "Es el análisis jurídico completo del régimen sancionatorio."
    },
    {
      "id": "b",
      "text": "Solo la existencia de un error de digitación, sin importar sus circunstancias.",
      "rationale": "No todo hallazgo se sanciona de la misma manera ni sin procedimiento."
    },
    {
      "id": "c",
      "text": "Únicamente el monto total recaudado por la entidad.",
      "rationale": "El volumen de recaudo no sustituye la verificación de la conducta sancionable."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El régimen de EAR contiene conductas específicas y reglas procedimentales; la preparación debe centrarse en identificar supuesto, evidencia y consecuencia, no en memorizar una sanción aislada.",
  "sourceIds": [
    "estatuto-tributario",
    "res-227-2025"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-control-03",
  "moduleId": "m8",
  "skillIds": [
    "control-extensivo"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Una campaña de cumplimiento identifica 40.000 posibles omisos, pero una revisión inicial muestra duplicados e inconsistencias de identificación.",
  "stem": "¿Qué debe ocurrir antes de ejecutar requerimientos masivos?",
  "options": [
    {
      "id": "a",
      "text": "Depurar el universo, validar reglas de selección y calidad de datos, y documentar los criterios de campaña.",
      "rationale": "Reduce falsos positivos y protege la calidad del control."
    },
    {
      "id": "b",
      "text": "Enviar comunicaciones a toda la base sin revisar inconsistencias porque el volumen es prioritario.",
      "rationale": "Una campaña masiva con datos defectuosos puede generar requerimientos improcedentes."
    },
    {
      "id": "c",
      "text": "Eliminar de la base cualquier registro difícil de interpretar.",
      "rationale": "Depurar no significa borrar arbitrariamente información."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El control extensivo combina cobertura con calidad. La masividad no elimina la necesidad de criterios, información confiable y procedimientos definidos.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "informe-gestion-dian-2025"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-presc-03",
  "moduleId": "m9",
  "skillIds": [
    "prescripcion-cobro",
    "cronologia-cobro"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "La acción de cobro venía corriendo y el mandamiento de pago fue notificado válidamente antes de completar el término general.",
  "stem": "¿Qué efecto debes aplicar a la notificación válida del mandamiento?",
  "options": [
    {
      "id": "a",
      "text": "Interrumpe la prescripción y el término vuelve a correr conforme a la regla del artículo 818.",
      "rationale": "La notificación del mandamiento es causal expresa de interrupción."
    },
    {
      "id": "b",
      "text": "Solo suspende por un día el término.",
      "rationale": "No es el efecto previsto para este evento."
    },
    {
      "id": "c",
      "text": "No produce ningún efecto sobre prescripción.",
      "rationale": "Contradice el artículo 818."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El artículo 818 diferencia interrupción y suspensión. La notificación del mandamiento de pago es causal expresa de interrupción; para resolver la cronología debe aplicarse el efecto legal correspondiente.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-remision-01",
  "moduleId": "m9",
  "skillIds": [
    "remision",
    "prescripcion-cobro"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "¿Por qué no deben confundirse remisión y prescripción?",
  "options": [
    {
      "id": "a",
      "text": "Porque son figuras distintas, con presupuestos y efectos propios: la prescripción se relaciona con la extinción de la acción de cobro por el transcurso legal del término, mientras la remisión depende de supuestos específicos para depurar cartera.",
      "rationale": "Distingue correctamente las instituciones."
    },
    {
      "id": "b",
      "text": "Porque la remisión siempre requiere que hayan pasado exactamente cinco años.",
      "rationale": "No es una equivalencia general."
    },
    {
      "id": "c",
      "text": "Porque la prescripción solo aplica a obligaciones privadas.",
      "rationale": "La acción de cobro fiscal tiene una regulación expresa de prescripción en el Estatuto Tributario."
    }
  ],
  "correctOptionId": "a",
  "explanation": "En depuración de cartera, cada figura debe analizarse con su norma y presupuesto; usarlas como sinónimos conduce a decisiones erradas.",
  "sourceIds": [
    "estatuto-tributario",
    "ley-1066-2006"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-facilidad-02",
  "moduleId": "m10",
  "skillIds": [
    "facilidades-pago"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "Según el artículo 814 vigente, las autoridades allí señaladas pueden conceder facilidades para el pago, como regla general, hasta por:",
  "options": [
    {
      "id": "a",
      "text": "Cinco años, bajo las condiciones y garantías previstas por la norma.",
      "rationale": "Es el límite general previsto en el inciso modificado por la Ley 2277 de 2022."
    },
    {
      "id": "b",
      "text": "Quince años sin garantías.",
      "rationale": "No corresponde al límite legal general."
    },
    {
      "id": "c",
      "text": "Seis meses en todos los casos.",
      "rationale": "La norma contempla un marco más amplio y distingue supuestos de garantía."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El artículo 814 permite facilidades hasta por cinco años y regula garantías; además contempla un supuesto de facilidad sin garantía cuando el plazo no supera un año y se cumplen las condiciones legales.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-facilidad-03",
  "moduleId": "m10",
  "skillIds": [
    "facilidades-pago",
    "incumplimiento-facilidad"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Un beneficiario deja de pagar una cuota de una facilidad y además aparece una obligación tributaria posterior incumplida.",
  "stem": "¿Qué enfoque corresponde?",
  "options": [
    {
      "id": "a",
      "text": "Ignorar el incumplimiento mientras exista voluntad verbal de ponerse al día.",
      "rationale": "El acuerdo produce efectos jurídicos y el incumplimiento tiene consecuencias reguladas."
    },
    {
      "id": "b",
      "text": "Verificar los supuestos del artículo 814-3 y adelantar la actuación que corresponda para dejar sin efecto la facilidad y hacer efectivas las medidas previstas, respetando el procedimiento.",
      "rationale": "Es el marco legal específico del incumplimiento."
    },
    {
      "id": "c",
      "text": "Borrar la facilidad del sistema sin acto ni soporte.",
      "rationale": "Eliminar registros no sustituye la actuación administrativa requerida."
    }
  ],
  "correctOptionId": "b",
  "explanation": "El artículo 814-3 regula consecuencias del incumplimiento de facilidades, incluyendo la posibilidad de dejar sin efecto el plazo y hacer efectiva la garantía o continuar medidas de cobro, según corresponda.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-notif-mandamiento-01",
  "moduleId": "m11",
  "skillIds": [
    "mandamiento-pago",
    "notificaciones"
  ],
  "type": "single",
  "difficulty": 3,
  "stem": "En la regla del artículo 826, la citación previa a la notificación personal del mandamiento concede al deudor un término de:",
  "options": [
    {
      "id": "a",
      "text": "Diez días para comparecer.",
      "rationale": "Es el término indicado por el artículo 826."
    },
    {
      "id": "b",
      "text": "Quince días para comparecer.",
      "rationale": "Quince días corresponde al término para pagar o proponer excepciones después de la notificación del mandamiento, según el artículo 830."
    },
    {
      "id": "c",
      "text": "Treinta días para comparecer.",
      "rationale": "No es el término previsto por el artículo 826."
    }
  ],
  "correctOptionId": "a",
  "explanation": "No confundas dos hitos: el artículo 826 contempla diez días de citación para comparecer a la notificación personal; el artículo 830 concede quince días después de la notificación para pagar o proponer excepciones.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-ejecutoria-01",
  "moduleId": "m11",
  "skillIds": [
    "titulo-ejecutivo",
    "firmeza-acto"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "En el expediente existe un acto administrativo que determina una obligación, pero no se ha revisado su estado de firmeza.",
  "stem": "¿Qué debes verificar antes de usarlo como fundamento de cobro?",
  "options": [
    {
      "id": "a",
      "text": "Que el documento reúna los requisitos del título ejecutivo aplicable y, cuando corresponda, que el acto esté ejecutoriado.",
      "rationale": "El cobro coactivo exige un título jurídicamente apto."
    },
    {
      "id": "b",
      "text": "Únicamente que el documento tenga membrete institucional.",
      "rationale": "La apariencia del documento no acredita exigibilidad ni mérito ejecutivo."
    },
    {
      "id": "c",
      "text": "Que el contribuyente haya llamado a preguntar por la deuda.",
      "rationale": "Una consulta no transforma un acto en título ejecutivo."
    }
  ],
  "correctOptionId": "a",
  "explanation": "En cobro no basta con que exista un documento: debe verificarse que encaje en los títulos ejecutivos reconocidos por la ley y que cumpla las condiciones de exigibilidad que correspondan.",
  "sourceIds": [
    "estatuto-tributario",
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-ejecucion-01",
  "moduleId": "m12",
  "skillIds": [
    "cobro-coactivo",
    "excepciones"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Las excepciones propuestas contra el mandamiento fueron resueltas desfavorablemente al deudor y la decisión quedó en el estado procesal que permite continuar.",
  "stem": "¿Cuál es el siguiente análisis correcto?",
  "options": [
    {
      "id": "a",
      "text": "Determinar, conforme al Estatuto Tributario, si procede ordenar seguir adelante la ejecución y las actuaciones subsiguientes.",
      "rationale": "La decisión sobre excepciones define la continuación del proceso."
    },
    {
      "id": "b",
      "text": "Volver a expedir un nuevo mandamiento idéntico por rutina.",
      "rationale": "No corresponde automáticamente después de resolver excepciones."
    },
    {
      "id": "c",
      "text": "Declarar prescrita la obligación sin revisar fechas.",
      "rationale": "La prescripción exige su propio análisis cronológico y jurídico."
    }
  ],
  "correctOptionId": "a",
  "explanation": "En la fase posterior a excepciones, debe aplicarse la secuencia especial del Estatuto Tributario y distinguir decisión, continuación de la ejecución y medidas subsiguientes.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-recurso-cobro-01",
  "moduleId": "m12",
  "skillIds": [
    "cobro-coactivo",
    "recursos-administrativos"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Un deudor pretende controvertir un acto expedido dentro del procedimiento administrativo de cobro.",
  "stem": "¿Qué regla metodológica debes aplicar?",
  "options": [
    {
      "id": "a",
      "text": "Revisar primero el régimen especial de cobro del Estatuto Tributario para determinar recurso, término y efectos.",
      "rationale": "El cobro coactivo cuenta con reglas especiales que deben prevalecer cuando regulan el punto."
    },
    {
      "id": "b",
      "text": "Aplicar automáticamente cualquier recurso del CPACA sin revisar el Estatuto Tributario.",
      "rationale": "Desconoce la especialidad del procedimiento tributario."
    },
    {
      "id": "c",
      "text": "Concluir que ningún acto de cobro puede ser controvertido.",
      "rationale": "Existen medios de impugnación y control definidos por la normativa."
    }
  ],
  "correctOptionId": "a",
  "explanation": "En un PJS de cobro, identificar la norma especial es parte del problema. El CPACA sirve como marco general, pero no sustituye reglas tributarias expresas.",
  "sourceIds": [
    "estatuto-tributario",
    "cpaca"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-inembargabilidad-01",
  "moduleId": "m13",
  "skillIds": [
    "medidas-cautelares",
    "inembargabilidad"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "El sistema reporta una cuenta bancaria de un deudor y el expediente ya tiene una medida cautelar ordenada.",
  "stem": "¿Qué debe hacer el Gestor antes de mantener o ampliar la cautela?",
  "options": [
    {
      "id": "a",
      "text": "Verificar la regla legal de inembargabilidad aplicable al tipo de cuenta, titular y monto, además de las reglas especiales del cobro tributario.",
      "rationale": "La cautela requiere identificar límites y excepciones legales."
    },
    {
      "id": "b",
      "text": "Embargar el 100 % porque toda cuenta bancaria es embargable sin límite.",
      "rationale": "Existen reglas de inembargabilidad y tratamientos diferenciados."
    },
    {
      "id": "c",
      "text": "Levantar siempre cualquier embargo bancario sin revisar la norma.",
      "rationale": "La existencia de reglas de protección no implica que toda cuenta sea inembargable."
    }
  ],
  "correctOptionId": "a",
  "explanation": "Las medidas cautelares deben aplicarse con precisión: tipo de bien, titular, monto, límites y excepciones pueden modificar la actuación procedente.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-medida-03",
  "moduleId": "m13",
  "skillIds": [
    "medidas-cautelares",
    "cobro-coactivo"
  ],
  "type": "single",
  "difficulty": 2,
  "stem": "¿Qué afirmación es correcta sobre un bien embargado?",
  "options": [
    {
      "id": "a",
      "text": "El embargo asegura jurídicamente el bien dentro del proceso, pero no equivale por sí solo al pago efectivo de la obligación.",
      "rationale": "Distingue la medida cautelar de la satisfacción del crédito."
    },
    {
      "id": "b",
      "text": "El embargo extingue automáticamente la deuda por el valor comercial estimado del bien.",
      "rationale": "La cautela no es sinónimo de pago ni de realización del activo."
    },
    {
      "id": "c",
      "text": "El embargo impide cualquier actuación posterior de avalúo o remate.",
      "rationale": "Precisamente puede anteceder etapas de realización cuando procedan."
    }
  ],
  "correctOptionId": "a",
  "explanation": "En la secuencia de cobro, embargo, secuestro, avalúo y eventual realización son actuaciones diferentes. No deben confundirse con la extinción de la obligación.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-concursal-03",
  "moduleId": "m14",
  "skillIds": [
    "procesos-concursales"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Una sociedad deudora de impuestos es admitida a un proceso de reorganización empresarial.",
  "stem": "¿Cuál es la reacción institucional más adecuada?",
  "options": [
    {
      "id": "a",
      "text": "Continuar todas las actuaciones individuales exactamente igual, sin considerar la apertura del proceso concursal.",
      "rationale": "La insolvencia modifica el escenario jurídico del cobro y exige aplicar el régimen concursal."
    },
    {
      "id": "b",
      "text": "Verificar inmediatamente el estado del proceso, la oportunidad y mecanismo para hacer valer el crédito fiscal, y actuar dentro del régimen concursal aplicable.",
      "rationale": "Protege el crédito respetando la universalidad y reglas del concurso."
    },
    {
      "id": "c",
      "text": "Condonar automáticamente la obligación tributaria.",
      "rationale": "La admisión a reorganización no equivale a condonación."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La función de CT-CR-3007 incluye representar a la DIAN en procesos especiales y concursales. La actuación debe trasladarse al marco de insolvencia aplicable y proteger oportunamente la acreencia fiscal.",
  "sourceIds": [
    "ley-1116-2006",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-comp-oficio-01",
  "moduleId": "m15",
  "skillIds": [
    "compensacion",
    "devoluciones"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Un contribuyente tiene un saldo a favor procedente, pero el estado de cuenta también muestra obligaciones pendientes.",
  "stem": "¿Qué verificación es especialmente relevante antes de disponer el pago?",
  "options": [
    {
      "id": "a",
      "text": "Si existen obligaciones fiscales susceptibles de compensación conforme a la normativa aplicable.",
      "rationale": "La devolución puede estar precedida por compensaciones a que haya lugar."
    },
    {
      "id": "b",
      "text": "Si el contribuyente desea recibir más del saldo solicitado.",
      "rationale": "La voluntad no amplía el saldo jurídicamente procedente."
    },
    {
      "id": "c",
      "text": "Si puede omitirse toda conciliación del estado de cuenta para acelerar.",
      "rationale": "La calidad del estado de cuenta es fundamental para determinar compensaciones y saldo efectivo."
    }
  ],
  "correctOptionId": "a",
  "explanation": "Devolución y compensación están conectadas: antes de disponer recursos debe verificarse la realidad del saldo y las obligaciones que legalmente deban compensarse.",
  "sourceIds": [
    "estatuto-tributario",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-verif-dev-01",
  "moduleId": "m16",
  "skillIds": [
    "devoluciones",
    "verificacion"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "Una solicitud de devolución fue radicada correctamente en el servicio informático y supera las validaciones formales iniciales.",
  "stem": "¿Qué enfoque corresponde al estudio?",
  "options": [
    {
      "id": "a",
      "text": "Autorizar por el solo hecho de que el formulario fue recibido por el sistema.",
      "rationale": "La radicación no prueba la procedencia sustancial del saldo."
    },
    {
      "id": "b",
      "text": "Verificar soporte y existencia del saldo, retenciones/pagos/impuestos descontables cuando correspondan, consistencia de la solicitud y compensaciones procedentes.",
      "rationale": "Resume los controles esenciales del estudio."
    },
    {
      "id": "c",
      "text": "Rechazar automáticamente toda solicitud de alto valor.",
      "rationale": "El monto por sí solo no constituye causal general de rechazo."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La devolución exige validar la realidad jurídica y económica del saldo y aplicar los controles previstos por la normativa antes de decidir y disponer recursos.",
  "sourceIds": [
    "estatuto-tributario",
    "decreto-1625-2016"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-dev-rechazo-01",
  "moduleId": "m16",
  "skillIds": [
    "devoluciones",
    "inadmisión-rechazo"
  ],
  "type": "single",
  "difficulty": 3,
  "stem": "¿Qué diferencia metodológica debes recordar entre inadmisión y rechazo de una solicitud de devolución o compensación?",
  "options": [
    {
      "id": "a",
      "text": "Son exactamente la misma decisión con distinto nombre.",
      "rationale": "El Estatuto diferencia causales y consecuencias."
    },
    {
      "id": "b",
      "text": "Debe identificarse si el defecto encaja en una causal legal de inadmisión o de rechazo, porque producen tratamientos procedimentales distintos.",
      "rationale": "La calificación depende del supuesto legal concreto."
    },
    {
      "id": "c",
      "text": "La autoridad puede escoger cualquiera de las dos según la carga de trabajo.",
      "rationale": "La decisión está reglada por la causal aplicable."
    }
  ],
  "correctOptionId": "b",
  "explanation": "El artículo 857 diferencia causales de rechazo e inadmisión. En examen conviene identificar primero el hecho y luego encajarlo en la causal legal, evitando memorizar etiquetas aisladas.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-dev-investiga-01",
  "moduleId": "m16",
  "skillIds": [
    "devoluciones",
    "investigacion-previa"
  ],
  "type": "single",
  "difficulty": 3,
  "stem": "Cuando se configura uno de los hechos previstos en el artículo 857-1, el término para devolver o compensar puede suspenderse para investigación previa hasta por un máximo de:",
  "options": [
    {
      "id": "a",
      "text": "Noventa días.",
      "rationale": "Es el máximo legal previsto en el artículo 857-1."
    },
    {
      "id": "b",
      "text": "Diez días.",
      "rationale": "No corresponde al máximo de investigación previa."
    },
    {
      "id": "c",
      "text": "Cinco años.",
      "rationale": "Es un término asociado a otras materias, no a esta investigación."
    }
  ],
  "correctOptionId": "a",
  "explanation": "El artículo 857-1 permite suspender el término hasta por un máximo de 90 días cuando se presentan los supuestos legales que justifican investigación previa.",
  "sourceIds": [
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-sie-dev-01",
  "moduleId": "m16",
  "skillIds": [
    "devoluciones",
    "sistemas-informacion"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "El servicio informático acepta una solicitud y asigna número de radicación. Un compañero afirma que eso significa que la devolución ya fue aprobada.",
  "stem": "¿Qué conclusión es correcta?",
  "options": [
    {
      "id": "a",
      "text": "La validación tecnológica reemplaza el análisis jurídico y probatorio.",
      "rationale": "El sistema apoya el procedimiento, pero no convierte automáticamente el saldo en procedente."
    },
    {
      "id": "b",
      "text": "La radicación electrónica es una etapa del trámite; la decisión debe continuar con las verificaciones sustanciales y controles que correspondan.",
      "rationale": "Distingue validación del sistema y decisión administrativa."
    },
    {
      "id": "c",
      "text": "Todo trámite electrónico carece de validez hasta imprimirse.",
      "rationale": "La normativa admite actuaciones y documentos electrónicos bajo las condiciones aplicables."
    }
  ],
  "correctOptionId": "b",
  "explanation": "Los servicios informáticos estructuran y trazan el trámite, pero la procedencia de una devolución depende de requisitos y verificaciones jurídicas, contables y documentales.",
  "sourceIds": [
    "res-227-2025",
    "decreto-1625-2016",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-acceso-03",
  "moduleId": "m17",
  "skillIds": [
    "seguridad-informacion",
    "sistemas-informacion"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un servidor nuevo necesita consultar información de recaudo, pero solo desempeñará una parte concreta del subproceso.",
  "stem": "¿Qué decisión es más adecuada?",
  "options": [
    {
      "id": "a",
      "text": "Otorgar acceso total para evitar futuras solicitudes de permisos.",
      "rationale": "Contradice el principio de acceso según necesidad y aumenta exposición innecesaria."
    },
    {
      "id": "b",
      "text": "Asignar únicamente los privilegios necesarios para las funciones autorizadas y conservar trazabilidad de la asignación.",
      "rationale": "Aplica mínimo privilegio y control de acceso."
    },
    {
      "id": "c",
      "text": "Compartir temporalmente las credenciales de otro funcionario.",
      "rationale": "Rompe autenticación individual, responsabilidad y trazabilidad."
    }
  ],
  "correctOptionId": "b",
  "explanation": "CT-CR-3007 incluye gestión de permisos de acceso a sistemas corporativos. Los permisos deben corresponder a función, autorización y necesidad, con trazabilidad.",
  "sourceIds": [
    "modelo-seguridad-dian",
    "manual-seguridad-dian",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-basic-beh-03",
  "moduleId": "m18",
  "skillIds": [
    "comportamentales-basicas"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Un ciudadano no comprende por qué su estado de cuenta muestra una obligación y solicita orientación.",
  "stem": "¿Qué conducta refleja mejor Comunicación efectiva?",
  "options": [
    {
      "id": "a",
      "text": "Usar el mismo lenguaje técnico con cualquier interlocutor y asumir que entendió.",
      "rationale": "La competencia exige escuchar, transmitir claramente y verificar comprensión."
    },
    {
      "id": "b",
      "text": "Escuchar la necesidad, explicar con claridad usando un canal adecuado y confirmar que el interlocutor comprendió.",
      "rationale": "Coincide con la definición y conductas observables de la competencia básica."
    },
    {
      "id": "c",
      "text": "Evitar preguntas para reducir el tiempo de atención.",
      "rationale": "Preguntar adecuadamente ayuda a obtener la información necesaria y comprender al interlocutor."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La Resolución 65 de 2024 define Comunicación efectiva como escuchar, entender y transmitir información clara y precisa, verificando la comprensión y usando redes de contacto de forma adecuada.",
  "sourceIds": [
    "res-65-2024"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-nivel3-01",
  "moduleId": "m19",
  "skillIds": [
    "competencias-comportamentales"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "La DIAN implementa una nueva herramienta para un proceso que cambia la secuencia habitual de consulta y registro.",
  "stem": "¿Cuál conducta se aproxima mejor al nivel 3 de Adaptabilidad exigido por CT-CR-3007?",
  "options": [
    {
      "id": "a",
      "text": "Esperar a que otros resuelvan el cambio y continuar trabajando como antes.",
      "rationale": "No refleja anticipación ni ajuste del propio accionar."
    },
    {
      "id": "b",
      "text": "Analizar el cambio, anticipar sus repercusiones en el trabajo, ajustar el propio accionar y fomentar el uso de herramientas que faciliten la adaptación.",
      "rationale": "Resume las conductas de nivel 3 descritas por el diccionario DIAN."
    },
    {
      "id": "c",
      "text": "Rediseñar unilateralmente toda la estrategia institucional sin competencia para hacerlo.",
      "rationale": "Se excede del rol y no es lo que define el nivel 3 del empleo."
    }
  ],
  "correctOptionId": "b",
  "explanation": "La Resolución 65 describe en nivel 3 una adaptación anticipada: identificar repercusiones, ajustar el accionar y fomentar metodologías/herramientas de adaptación. La ficha exige Adaptabilidad nivel 3.",
  "sourceIds": [
    "res-65-2024",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-integridad-02",
  "moduleId": "m20",
  "skillIds": [
    "integridad",
    "comportamiento-etico"
  ],
  "type": "pjs",
  "difficulty": 3,
  "case": "El cierre mensual está por debajo de la meta. Un compañero propone cambiar temporalmente el estado de varias obligaciones para mejorar el indicador.",
  "stem": "¿Cuál actuación es coherente con integridad y comportamiento ético?",
  "options": [
    {
      "id": "a",
      "text": "Modificar el registro para cumplir la meta y corregirlo después si alguien lo detecta.",
      "rationale": "Sacrifica veracidad e integridad por un resultado inmediato."
    },
    {
      "id": "b",
      "text": "Mantener la información real, documentar la situación, escalar por el canal correspondiente y proponer acciones legales para mejorar el resultado.",
      "rationale": "Combina orientación al logro con legalidad, honestidad y trazabilidad."
    },
    {
      "id": "c",
      "text": "Ocultar el expediente del reporte mensual.",
      "rationale": "Manipular el universo de información también compromete integridad."
    }
  ],
  "correctOptionId": "b",
  "explanation": "Los resultados institucionales deben alcanzarse dentro de la legalidad y el código de integridad. El nivel 4 de Comportamiento ético exige promover y aplicar prácticas basadas en valores, no relativizarlas por presión.",
  "sourceIds": [
    "codigo-integridad",
    "res-65-2024",
    "merf-ct-cr-3007"
  ],
  "verifiedAt": verifiedAt
},
{
  "id": "q-pjs-02",
  "moduleId": "m21",
  "skillIds": [
    "tecnica-pjs"
  ],
  "type": "pjs",
  "difficulty": 2,
  "case": "Dos opciones de una PJS parecen jurídicamente posibles, pero una presupone que el acto ya está ejecutoriado y el caso no lo dice.",
  "stem": "¿Qué estrategia reduce mejor el error de lectura?",
  "options": [
    {
      "id": "a",
      "text": "Elegir la opción que suena más estricta, aunque ignore la etapa del procedimiento.",
      "rationale": "La severidad no determina la corrección jurídica."
    },
    {
      "id": "b",
      "text": "Identificar palabras que cambian el supuesto —por ejemplo, ejecutoriado, notificado, vencido o admitido a reorganización— y reconstruir la secuencia antes de responder.",
      "rationale": "Las condiciones del caso determinan competencia y siguiente actuación."
    },
    {
      "id": "c",
      "text": "Buscar primero el número de artículo en las respuestas y escoger el que parezca familiar.",
      "rationale": "La PJS mide aplicación; una referencia conocida puede ser un distractor fuera de contexto."
    }
  ],
  "correctOptionId": "b",
  "explanation": "En juicio situacional, los detalles del caso definen la regla aplicable. Una técnica eficaz es separar hechos, etapa, competencia y objetivo antes de comparar las tres opciones.",
  "sourceIds": [
    "merf-ct-cr-3007",
    "estatuto-tributario"
  ],
  "verifiedAt": verifiedAt
}

,
{
  id:'q-facilidad-04', moduleId:'m10', skillIds:['facilidades-pago','garantias'], type:'single', difficulty:3,
  stem:'Según el artículo 814 del Estatuto Tributario, las garantías personales pueden aceptarse cuando la cuantía de la deuda no sea superior a:',
  options:[
    {id:'a',text:'3.000 UVT.',rationale:'Es el límite expresamente previsto por el artículo 814 para aceptar garantías personales.'},
    {id:'b',text:'40 UVT.',rationale:'Ese valor aparece en reglas de remisión de deudas, no como límite general de garantía personal en facilidades.'},
    {id:'c',text:'10.000 UVT.',rationale:'No es el límite señalado por el artículo 814 para este supuesto.'}
  ], correctOptionId:'a', explanation:'El artículo 814 permite aceptar garantías personales cuando la cuantía de la deuda no sea superior a 3.000 UVT. En un caso práctico, primero identifica cuantía, plazo, autoridad competente y tipo de garantía ofrecida.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-facilidad-05', moduleId:'m10', skillIds:['facilidades-pago','recursos'], type:'pjs', difficulty:4,
  case:'Se notifica una resolución que deja sin efecto una facilidad por incumplimiento. El interesado pregunta qué recurso procede y en qué término debe interponerlo.',
  stem:'¿Cuál orientación corresponde al artículo 814-3?',
  options:[
    {id:'a',text:'Reposición ante el mismo funcionario, dentro de los cinco días siguientes a la notificación.',rationale:'Es la regla expresa del artículo 814-3.'},
    {id:'b',text:'Apelación dentro de un mes ante cualquier superior jerárquico.',rationale:'La norma especial no establece esa vía.'},
    {id:'c',text:'Ningún recurso, porque toda actuación de cobro es de simple trámite.',rationale:'El artículo 814-3 sí prevé expresamente reposición contra esta providencia.'}
  ], correctOptionId:'a', explanation:'Contra la providencia que deja sin efecto la facilidad procede reposición ante el mismo funcionario dentro de cinco días; la norma además fija un mes para resolverla desde su interposición en debida forma.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-cobro-solidario-01', moduleId:'m11', skillIds:['cobro-coactivo','deudores-solidarios'], type:'pjs', difficulty:4,
  case:'La administración debe vincular a un deudor solidario dentro de un proceso de cobro.',
  stem:'¿Qué actuación se ajusta al artículo 828-1?',
  options:[
    {id:'a',text:'Vincularlo mediante la notificación de un mandamiento de pago que determine individualmente el monto de su obligación.',rationale:'Es la forma de vinculación prevista en el artículo 828-1.'},
    {id:'b',text:'Vincularlo solo mediante una llamada informativa sin acto alguno.',rationale:'No satisface la forma prevista por la norma.'},
    {id:'c',text:'Crear necesariamente un nuevo título ejecutivo distinto para cada solidario antes de poder vincularlo.',rationale:'La norma señala que los títulos contra el deudor principal también lo son contra solidarios y subsidiarios, sin exigir títulos individuales adicionales.'}
  ], correctOptionId:'a', explanation:'La vinculación se realiza mediante notificación del mandamiento de pago, individualizando el monto atribuible al deudor solidario y siguiendo la forma de notificación del artículo 826.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-revocatoria-cobro-01', moduleId:'m12', skillIds:['cobro-coactivo','recursos'], type:'pjs', difficulty:4,
  case:'Durante un proceso de cobro se presenta una solicitud de revocatoria directa contra el acto que sirve de fundamento. El equipo duda si debe detener todo el procedimiento.',
  stem:'¿Qué regla contiene el artículo 829-1?',
  options:[
    {id:'a',text:'La revocatoria directa no suspende el proceso de cobro, pero el remate no se realiza hasta que exista pronunciamiento definitivo.',rationale:'Es la regla expresa del artículo 829-1.'},
    {id:'b',text:'La sola solicitud extingue automáticamente la obligación.',rationale:'No produce ese efecto.'},
    {id:'c',text:'La administración debe rematar inmediatamente para evitar que la solicitud produzca efectos.',rationale:'La norma precisamente impide realizar el remate hasta el pronunciamiento definitivo.'}
  ], correctOptionId:'a', explanation:'El procedimiento puede continuar, pero el remate queda condicionado al pronunciamiento definitivo. Es un ejemplo clásico de por qué “no suspende” no equivale a “todo puede continuar sin límite”.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-excepciones-decision-01', moduleId:'m12', skillIds:['excepciones-cobro','terminos'], type:'single', difficulty:3,
  stem:'¿En qué término debe decidirse, como regla del artículo 832, el escrito de excepciones presentado contra el mandamiento de pago?',
  options:[
    {id:'a',text:'Dentro del mes siguiente a la presentación del escrito.',rationale:'Es el término previsto por el artículo 832.'},
    {id:'b',text:'Dentro de cinco días.',rationale:'Cinco días aparece en otra materia, como la reposición del artículo 814-3.'},
    {id:'c',text:'Dentro de noventa días.',rationale:'Noventa días aparece en investigación previa de devoluciones, no en el trámite ordinario de excepciones.'}
  ], correctOptionId:'a', explanation:'El artículo 832 ordena decidir las excepciones dentro del mes siguiente a su presentación, practicando previamente pruebas cuando sea del caso.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-recurso-excepciones-02', moduleId:'m12', skillIds:['excepciones-cobro','recursos'], type:'pjs', difficulty:4,
  case:'Una resolución rechaza las excepciones y ordena seguir adelante la ejecución.',
  stem:'¿Qué recurso procede según el artículo 834?',
  options:[
    {id:'a',text:'Únicamente reposición, dentro del mes siguiente a la notificación.',rationale:'Es la regla especial del artículo 834.'},
    {id:'b',text:'Apelación y queja, ambas obligatorias.',rationale:'No corresponde al régimen especial del artículo 834.'},
    {id:'c',text:'Ninguno, por tratarse siempre de un acto de trámite.',rationale:'La resolución que decide excepciones es una de las actuaciones para las que el Estatuto prevé recurso expreso.'}
  ], correctOptionId:'a', explanation:'El artículo 834 prevé únicamente reposición ante el jefe de cobranzas, dentro del mes siguiente a la notificación, y fija también un mes para resolver desde su interposición en debida forma.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-contencioso-cobro-01', moduleId:'m12', skillIds:['cobro-coactivo','control-judicial'], type:'pjs', difficulty:4,
  case:'El deudor demanda ante la jurisdicción contencioso-administrativa la resolución que falló excepciones y ordenó llevar adelante la ejecución.',
  stem:'¿Qué efecto debe tener presente el Gestor según el artículo 835?',
  options:[
    {id:'a',text:'La admisión de la demanda no suspende el proceso de cobro, pero el remate no se realizará hasta pronunciamiento definitivo.',rationale:'Es la regla especial del artículo 835.'},
    {id:'b',text:'La demanda extingue el crédito y obliga a archivar inmediatamente.',rationale:'No es el efecto de la demanda.'},
    {id:'c',text:'La demanda no tiene ningún efecto sobre ninguna etapa del cobro.',rationale:'Aunque no suspenda todo el proceso, sí condiciona la realización del remate.'}
  ], correctOptionId:'a', explanation:'La regla diferencia continuidad del cobro y realización del remate. Esa distinción es muy susceptible de aparecer como distractor situacional.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-concursal-04', moduleId:'m14', skillIds:['procesos-concursales','cobro-coactivo'], type:'pjs', difficulty:4,
  case:'La DIAN venía adelantando un proceso administrativo de cobro cuando se inicia formalmente un proceso de reorganización del deudor bajo la Ley 1116.',
  stem:'¿Qué pauta general surge del artículo 20 de la Ley 1116?',
  options:[
    {id:'a',text:'No debe continuarse aisladamente el cobro ejecutivo; el proceso iniciado debe remitirse para incorporarlo al trámite concursal y las cautelas quedan a disposición del juez del concurso.',rationale:'Resume los efectos centrales del artículo 20.'},
    {id:'b',text:'La DIAN debe ignorar el concurso porque el crédito fiscal nunca participa en procesos de insolvencia.',rationale:'La DIAN interviene como acreedor dentro del concurso.'},
    {id:'c',text:'La admisión obliga a perdonar automáticamente toda obligación tributaria anterior.',rationale:'El concurso no equivale a condonación automática del crédito fiscal.'}
  ], correctOptionId:'a', explanation:'Desde el inicio de la reorganización no pueden admitirse ni continuarse procesos de ejecución o cobro contra el deudor; los que ya existían se remiten al concurso y las medidas cautelares quedan a disposición del juez concursal.', sourceIds:['ley-1116-2006'], verifiedAt
},
{
  id:'q-dev-inadmite-02', moduleId:'m16', skillIds:['devoluciones','inadmission'], type:'single', difficulty:3,
  stem:'Cuando una solicitud de devolución o compensación es inadmitida, ¿qué plazo contempla el parágrafo 1 del artículo 857 para presentar una nueva solicitud subsanada?',
  options:[
    {id:'a',text:'Dentro del mes siguiente.',rationale:'Es el plazo fijado por el parágrafo 1 del artículo 857.'},
    {id:'b',text:'Dentro de cinco años.',rationale:'No corresponde al trámite de subsanación de una inadmisión.'},
    {id:'c',text:'No puede volver a presentarse.',rationale:'La inadmisión, a diferencia de determinadas causales de rechazo, permite subsanar en los términos legales.'}
  ], correctOptionId:'a', explanation:'La nueva solicitud debe presentarse dentro del mes siguiente, subsanando las causales de inadmisión. El Estatuto contiene además reglas sobre oportunidad cuando ya venció el término general para solicitar.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-dev-auto-01', moduleId:'m16', skillIds:['devoluciones','inadmission','terminos'], type:'single', difficulty:3,
  stem:'Como regla del artículo 858, el auto inadmisorio debe dictarse en un término máximo de:',
  options:[
    {id:'a',text:'Quince días.',rationale:'Es el término máximo señalado por el artículo 858.'},
    {id:'b',text:'Noventa días.',rationale:'Noventa días corresponde al máximo de la investigación previa del artículo 857-1.'},
    {id:'c',text:'Dos años.',rationale:'Dos años aparece en términos para solicitar devolución/compensación, no para dictar el auto inadmisorio.'}
  ], correctOptionId:'a', explanation:'El artículo 858 fija un máximo de quince días para dictar el auto inadmisorio; en devoluciones con garantía opera la regla especial allí prevista.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-dev-garantia-01', moduleId:'m16', skillIds:['devoluciones','garantia'], type:'pjs', difficulty:4,
  case:'Un contribuyente presenta una solicitud de devolución acompañada de garantía a favor de la Nación, otorgada por una entidad habilitada y por el valor exigido. No se configura una regla especial de riesgo que remita al término general.',
  stem:'¿Qué término especial debes reconocer en el artículo 860?',
  options:[
    {id:'a',text:'Veinte días para hacer entrega del cheque, título o giro.',rationale:'Es el término especial del artículo 860 en el supuesto descrito.'},
    {id:'b',text:'Cincuenta días necesariamente en todos los casos.',rationale:'Cincuenta días es el término general del artículo 855, pero el artículo 860 contempla un supuesto especial con garantía.'},
    {id:'c',text:'Un año.',rationale:'No es el término de devolución previsto en este supuesto.'}
  ], correctOptionId:'a', explanation:'El artículo 860 establece un término de veinte días para la devolución con garantía bajo sus requisitos. También regula la vigencia de la garantía y supuestos especiales de control.', sourceIds:['estatuto-tributario'], verifiedAt
},
{
  id:'q-dev-comp-previa-01', moduleId:'m16', skillIds:['devoluciones','compensacion'], type:'pjs', difficulty:3,
  case:'La solicitud de devolución es procedente, pero el contribuyente tiene deudas fiscales de plazo vencido a su cargo.',
  stem:'¿Qué regla debe aplicarse antes de disponer el saldo a devolver?',
  options:[
    {id:'a',text:'Compensar las deudas y obligaciones vencidas y efectuar la devolución sobre el resultado que corresponda.',rationale:'Es la regla del artículo 861.'},
    {id:'b',text:'Ignorar toda deuda porque la devolución debe pagarse íntegra primero.',rationale:'Desconoce la compensación previa prevista por la norma.'},
    {id:'c',text:'Convertir automáticamente toda deuda en una sanción nueva.',rationale:'No es el mecanismo previsto por el Estatuto.'}
  ], correctOptionId:'a', explanation:'El artículo 861 dispone que la devolución se efectúa una vez compensadas las deudas y obligaciones de plazo vencido; la compensación se ordena en el mismo acto que dispone la devolución.', sourceIds:['estatuto-tributario'], verifiedAt
}

  ,{
    id:'q-ear-audit-01', moduleId:'m7', skillIds:['auditoria-ear'], type:'pjs', difficulty:3,
    case:'Durante el seguimiento a una EAR aparece una situación que puede afectar el normal cumplimiento de sus obligaciones, pero el caso no estaba incluido en el programa anual de auditorías.',
    stem:'¿Qué actuación se ajusta mejor al procedimiento institucional?',
    options:[
      {id:'a',text:'Descartar la auditoría porque solo pueden realizarse las programadas al inicio del año.',rationale:'El procedimiento permite auditorías no contempladas en el programa cuando sean necesarias y sean autorizadas por la jefatura competente.'},
      {id:'b',text:'Gestionar la autorización de la jefatura competente y documentar debidamente la auditoría extraordinaria.',rationale:'Corresponde a la posibilidad prevista en PR-COT-0032.'},
      {id:'c',text:'Imponer primero una sanción y solicitar la información después.',rationale:'La sanción exige hechos, soporte, competencia y procedimiento; no sustituye la auditoría.'}
    ], correctOptionId:'b', explanation:'PR-COT-0032 permite que las jefaturas señaladas autoricen auditorías no contempladas en el programa anual cuando sean necesarias para atender problemas que afecten las obligaciones de las EAR, con la debida documentación.', sourceIds:['proc-auditoria-ear-0032'], verifiedAt
  },
  {
    id:'q-ear-audit-02', moduleId:'m7', skillIds:['auditoria-ear'], type:'single', difficulty:2,
    stem:'Según el alcance general del procedimiento PR-COT-0032, ¿qué hito cierra la auditoría a una Entidad Autorizada para Recaudar?',
    options:[
      {id:'a',text:'La elaboración del informe de cierre de auditoría.',rationale:'El procedimiento define su terminación con este informe.'},
      {id:'b',text:'La primera solicitud de archivos.',rationale:'Ese es un hito de inicio, no de cierre.'},
      {id:'c',text:'La apertura automática de cobro coactivo contra la EAR.',rationale:'No constituye el cierre general del procedimiento de auditoría.'}
    ], correctOptionId:'a', explanation:'El alcance publicado de PR-COT-0032 inicia con la solicitud de archivos/información requerida y finaliza con la elaboración del informe de cierre de auditoría.', sourceIds:['proc-auditoria-ear-0032'], verifiedAt
  },
  {
    id:'q-ear-info-01', moduleId:'m7', skillIds:['ear','calidad-datos'], type:'pjs', difficulty:3,
    case:'Una EAR recaudó oportunamente, pero al revisar los archivos remitidos se detectan inconsistencias que impiden conciliar correctamente la información recibida con los documentos asociados.',
    stem:'¿Cuál es el primer enfoque correcto para analizar el caso?',
    options:[
      {id:'a',text:'Distinguir si se trata de inconsistencia de información, error de verificación u otra conducta y soportar el hallazgo antes de aplicar el régimen correspondiente.',rationale:'El Estatuto diferencia conductas y el procedimiento exige evidencia y trazabilidad.'},
      {id:'b',text:'Tratar toda inconsistencia como prescripción de la obligación del contribuyente.',rationale:'La prescripción pertenece a la acción de cobro y no describe la conducta de la EAR.'},
      {id:'c',text:'Corregir silenciosamente la información sin dejar trazabilidad.',rationale:'La calidad de datos no autoriza ocultar el origen ni la gestión de la inconsistencia.'}
    ], correctOptionId:'a', explanation:'En EAR la tipificación importa: los artículos 674 a 678 distinguen categorías sancionatorias y los procedimientos institucionales parten de información verificable. Primero clasifica el hecho y conserva evidencia.', sourceIds:['estatuto-tributario','proc-recepcion-ear-0031','proc-sanciones-ear-0030'], verifiedAt
  },
  {
    id:'q-ear-info-02', moduleId:'m7', skillIds:['ear','recaudo'], type:'single', difficulty:2,
    stem:'¿Cuál afirmación describe mejor la relación entre recaudo e información transmitida por una EAR?',
    options:[
      {id:'a',text:'Son flujos relacionados: además de recibir recursos, la EAR debe cumplir las obligaciones de procesamiento, entrega y reporte de información que correspondan.',rationale:'El esquema institucional de recepción y recaudo incluye dinero e información.'},
      {id:'b',text:'Una vez recibido el dinero, la información deja de tener relevancia para la DIAN.',rationale:'La DIAN requiere información para registro, conciliación, control y aplicación de pagos.'},
      {id:'c',text:'La EAR solo debe informar cuando exista una sanción previa.',rationale:'Las obligaciones de información forman parte ordinaria del esquema de recaudo.'}
    ], correctOptionId:'a', explanation:'La regulación y los procedimientos de EAR contemplan recepción/recaudo, procesamiento, transmisión y control de la información. El flujo informativo es esencial para registrar y conciliar correctamente el recaudo.', sourceIds:['res-227-2025','proc-recepcion-ear-0031'], verifiedAt
  },
  {
    id:'q-control-criterios-01', moduleId:'m8', skillIds:['control-extensivo','calidad-datos'], type:'pjs', difficulty:3,
    case:'Antes de lanzar una campaña masiva, el equipo detecta que la base de selección contiene registros duplicados y posibles errores que podrían incluir contribuyentes cumplidos.',
    stem:'¿Qué actuación es más coherente con PR-COT-0382?',
    options:[
      {id:'a',text:'Enviar la campaña de inmediato para no retrasar la meta y corregir después.',rationale:'Sacrifica confiabilidad y puede afectar objetividad e imparcialidad.'},
      {id:'b',text:'Verificar y depurar la información empleada para la selección antes de ejecutar la acción masiva.',rationale:'La confiabilidad exige revisar el insumo para minimizar selecciones basadas en información errada.'},
      {id:'c',text:'Eliminar aleatoriamente una parte de los registros para reducir el riesgo.',rationale:'No es una depuración objetiva ni verificable.'}
    ], correctOptionId:'b', explanation:'El procedimiento institucional señala la confiabilidad como condición del control extensivo: debe verificarse y, cuando sea necesario, depurarse la información utilizada para seleccionar los casos.', sourceIds:['proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-control-criterios-02', moduleId:'m8', skillIds:['control-extensivo'], type:'single', difficulty:2,
    stem:'¿Cuál de estos grupos coincide con condiciones generales expresamente descritas por PR-COT-0382 para el control extensivo?',
    options:[
      {id:'a',text:'Objetividad, imparcialidad, confiabilidad, confidencialidad, cercanía con el ciudadano e integralidad.',rationale:'Son las condiciones generales señaladas en el procedimiento.'},
      {id:'b',text:'Severidad, secreto absoluto, automaticidad y sanción inmediata.',rationale:'No corresponde al enfoque institucional descrito.'},
      {id:'c',text:'Rentabilidad, publicidad comercial y libre selección subjetiva.',rationale:'No son criterios del procedimiento de control extensivo.'}
    ], correctOptionId:'a', explanation:'PR-COT-0382 establece esas seis condiciones para orientar las acciones masivas y su interacción con ciudadanos y contribuyentes.', sourceIds:['proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-control-ciclo-01', moduleId:'m8', skillIds:['control-extensivo','trazabilidad'], type:'pjs', difficulty:3,
    case:'Una campaña de amplia cobertura terminó sus contactos, pero el equipo propone cerrar la actividad sin consolidar qué obligados atendieron el llamado, qué novedades aparecieron ni qué casos requieren otra actuación.',
    stem:'¿Qué elemento falta según el alcance del procedimiento de control extensivo?',
    options:[
      {id:'a',text:'Registrar y consolidar resultados hasta producir el informe correspondiente de la acción de control masiva.',rationale:'El procedimiento finaliza con un informe de resultado de la acción de control según el tipo de ejecutor.'},
      {id:'b',text:'Eliminar la evidencia para proteger la confidencialidad.',rationale:'Confidencialidad no significa destruir trazabilidad institucional.'},
      {id:'c',text:'Convertir todos los casos en cobro coactivo sin análisis adicional.',rationale:'La campaña no reemplaza la evaluación y requisitos de otros procedimientos.'}
    ], correctOptionId:'a', explanation:'PR-COT-0382 define que el procedimiento culmina con el envío del informe de resultado de la acción masiva. Medir y registrar resultados es parte del ciclo, no un accesorio.', sourceIds:['proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-control-ciclo-02', moduleId:'m8', skillIds:['control-extensivo'], type:'pjs', difficulty:3,
    case:'Una campaña identifica a un contribuyente que, luego del contacto, mantiene una obligación cuya gestión requiere un procedimiento distinto y una autoridad competente específica.',
    stem:'¿Qué debe hacer el Gestor II desde la lógica del control extensivo?',
    options:[
      {id:'a',text:'Registrar el resultado y encauzar o escalar el caso conforme al procedimiento y competencia que correspondan.',rationale:'El control extensivo genera gestión y seguimiento, pero no permite saltar las reglas del procedimiento posterior.'},
      {id:'b',text:'Inventar una actuación intermedia para cerrar el caso dentro de la misma campaña.',rationale:'La actuación administrativa depende de competencia y procedimiento.'},
      {id:'c',text:'Considerar cumplida la obligación por el solo hecho de haber contactado al contribuyente.',rationale:'El contacto no equivale al cumplimiento material o formal de la obligación.'}
    ], correctOptionId:'a', explanation:'La campaña es un instrumento de control de amplia cobertura. Sus resultados deben quedar trazados y, si el caso exige otra actuación, deben respetarse la competencia y el procedimiento aplicables.', sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007'], verifiedAt
  }

  ,{
    id:'q-medida-04', moduleId:'m13', skillIds:['medidas-cautelares'], type:'single', difficulty:2,
    stem:'¿En qué momento puede decretarse, según el artículo 837, el embargo y secuestro preventivo de bienes del deudor acreditados como de su propiedad?',
    options:[
      {id:'a',text:'Previa o simultáneamente con el mandamiento de pago.',rationale:'Es la oportunidad expresamente prevista por el artículo 837.'},
      {id:'b',text:'Únicamente después del remate.',rationale:'El remate es una etapa posterior y no condiciona así la medida preventiva.'},
      {id:'c',text:'Solo después de que termine una demanda contenciosa.',rationale:'La norma no establece esa condición general.'}
    ], correctOptionId:'a', explanation:'El artículo 837 permite medidas preventivas antes o al mismo tiempo que el mandamiento, siempre sobre bienes establecidos como de propiedad del deudor y dentro de las demás reglas aplicables.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-medida-05', moduleId:'m13', skillIds:['medidas-cautelares','limite-embargo'], type:'pjs', difficulty:3,
    case:'Después del avalúo se establece que los bienes embargados superan ampliamente el doble de la deuda más los intereses y es materialmente posible reducir la medida.',
    stem:'¿Qué exige el artículo 838?',
    options:[
      {id:'a',text:'Mantener siempre la totalidad porque todo exceso favorece el recaudo.',rationale:'La medida está sometida a un límite legal.'},
      {id:'b',text:'Reducir el embargo hasta el límite legal, de oficio o a solicitud del interesado, cuando sea posible.',rationale:'Es la regla del artículo 838.'},
      {id:'c',text:'Extinguir la obligación por el valor total del avalúo.',rationale:'Embargo y avalúo no equivalen al pago de la deuda.'}
    ], correctOptionId:'b', explanation:'El valor de los bienes embargados no puede exceder del doble de la deuda más sus intereses. Si el avalúo revela exceso y puede reducirse, la administración debe ajustar la medida.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-medida-06', moduleId:'m13', skillIds:['medidas-cautelares','inembargabilidad'], type:'pjs', difficulty:4,
    case:'En un proceso contra una persona jurídica se identifica una cuenta de ahorros. Un integrante del equipo afirma que debe aplicarse automáticamente el mismo límite especial de inembargabilidad que el artículo 837-1 contempla para cuentas de ahorro en procesos contra personas naturales.',
    stem:'¿Qué corrección corresponde?',
    options:[
      {id:'a',text:'Ese límite especial del artículo 837-1 está previsto para personas naturales; la norma indica que en procesos contra personas jurídicas no opera ese límite específico.',rationale:'Distingue correctamente el sujeto al que se aplica la protección específica.'},
      {id:'b',text:'Todas las cuentas de personas jurídicas son absolutamente inembargables.',rationale:'La norma no establece esa regla.'},
      {id:'c',text:'La naturaleza del deudor nunca tiene relevancia para analizar la medida.',rationale:'El artículo 837-1 diferencia expresamente entre persona natural y jurídica.'}
    ], correctOptionId:'a', explanation:'El artículo 837-1 contiene una protección específica para cuentas de ahorro en cobro contra personas naturales y señala que ese límite no existe para personas jurídicas. Esto no autoriza a ignorar otras reglas de inembargabilidad que puedan resultar aplicables al bien concreto.', sourceIds:['estatuto-tributario','ley-1066-2006'], verifiedAt
  },
  {
    id:'q-medida-07', moduleId:'m13', skillIds:['medidas-cautelares','concurrencia-embargos'], type:'pjs', difficulty:4,
    case:'Al registrar un embargo sobre un bien se informa que ya existe un embargo anterior ordenado por otro despacho. El crédito anterior tiene un grado superior al crédito fiscal.',
    stem:'¿Qué lógica recoge el Estatuto Tributario para proteger la acreencia de la DIAN?',
    options:[
      {id:'a',text:'Desconocer el embargo anterior y continuar como si no existiera.',rationale:'La concurrencia exige considerar la prelación del crédito.'},
      {id:'b',text:'Hacerse parte en el proceso correspondiente y velar porque la deuda fiscal quede garantizada con el remanente del remate.',rationale:'Es la actuación prevista cuando el crédito anterior es de grado superior al del fisco.'},
      {id:'c',text:'Declarar prescrita la obligación tributaria por la existencia del embargo previo.',rationale:'La concurrencia de embargos no produce por sí misma prescripción.'}
    ], correctOptionId:'b', explanation:'Las reglas de registro y concurrencia distinguen según la prelación. Si el crédito que originó el embargo anterior es superior al del fisco, cobranzas debe intervenir para proteger la acreencia con el remanente.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-medida-08', moduleId:'m13', skillIds:['medidas-cautelares','norma-supletoria'], type:'single', difficulty:3,
    stem:'¿Qué regla contiene el artículo 839-2 para aspectos de embargo, secuestro y remate no contemplados expresamente por el Estatuto Tributario?',
    options:[
      {id:'a',text:'Aplicar, en los aspectos compatibles, las disposiciones procesales generales que regulan esas materias.',rationale:'Esa es la regla supletoria del artículo 839-2.'},
      {id:'b',text:'Inventar un procedimiento interno sin fundamento normativo.',rationale:'La ausencia de detalle no autoriza a crear reglas arbitrarias.'},
      {id:'c',text:'Archivar automáticamente el cobro.',rationale:'La norma precisamente remite a reglas procesales compatibles para completar el procedimiento.'}
    ], correctOptionId:'a', explanation:'El Estatuto establece una remisión supletoria para embargo, secuestro y remate en aquello compatible y no regulado específicamente. En PJS, esto obliga a distinguir norma especial y norma complementaria.', sourceIds:['estatuto-tributario'], verifiedAt
  }

  ,{
    id:'q-especial-sucesion-01', moduleId:'m14', skillIds:['procesos-especiales','sucesiones'], type:'single', difficulty:2,
    stem:'Según el artículo 844 del Estatuto Tributario, ¿qué umbral activa el deber de informar previamente a la partición en un proceso de sucesión?',
    options:[
      {id:'a',text:'Cuando la cuantía de los bienes sea superior a 700 UVT.',rationale:'Es el umbral previsto por el artículo 844.'},
      {id:'b',text:'Solo cuando la deuda fiscal sea superior a 3.000 UVT.',rationale:'3.000 UVT aparece en la regla de garantías personales de facilidades de pago, no en sucesiones.'},
      {id:'c',text:'Toda sucesión, sin importar cuantía.',rationale:'El artículo 844 condiciona el deber de comunicación al umbral legal de los bienes.'}
    ], correctOptionId:'a', explanation:'El artículo 844 exige la comunicación previa a la partición cuando la cuantía de los bienes de la sucesión supera 700 UVT.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-especial-sucesion-02', moduleId:'m14', skillIds:['procesos-especiales','sucesiones'], type:'pjs', difficulty:3,
    case:'El despacho que tramita una sucesión comunicó oportunamente a la DIAN antes de la partición. Han pasado veinte días desde la comunicación y la administración no se ha hecho parte.',
    stem:'¿Qué consecuencia contempla el artículo 844?',
    options:[
      {id:'a',text:'El funcionario que adelanta la sucesión puede continuar con los trámites correspondientes.',rationale:'Es la consecuencia expresamente prevista una vez transcurrido el término sin intervención.'},
      {id:'b',text:'La sucesión debe suspenderse indefinidamente.',rationale:'La norma no impone esa suspensión permanente.'},
      {id:'c',text:'Todas las deudas fiscales quedan extinguidas.',rationale:'La falta de intervención dentro de esa ventana no equivale a extinción automática de las obligaciones.'}
    ], correctOptionId:'a', explanation:'El plazo de veinte días funciona como oportunidad de intervención frente al trámite sucesoral; vencido sin que la administración se haga parte, el funcionario puede continuar.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-especial-sucesion-03', moduleId:'m14', skillIds:['procesos-especiales','facilidades-pago'], type:'pjs', difficulty:3,
    case:'Los herederos reconocen que existen deudas fiscales de la sucesión y preguntan si necesariamente deben pagar todo de contado antes de cualquier avance.',
    stem:'¿Qué posibilidad reconoce el artículo 844?',
    options:[
      {id:'a',text:'Pueden solicitar un acuerdo de pago por las deudas fiscales de la sucesión, sujeto a las reglas aplicables.',rationale:'El artículo 844 contempla expresamente esta posibilidad.'},
      {id:'b',text:'Pueden eliminar unilateralmente la deuda del estado de cuenta.',rationale:'No existe esa potestad.'},
      {id:'c',text:'La DIAN debe renunciar a la acreencia para permitir la partición.',rationale:'La norma protege la acreencia y permite mecanismos de normalización, no una renuncia automática.'}
    ], correctOptionId:'a', explanation:'El Estatuto prevé que herederos, asignatarios o legatarios puedan solicitar acuerdo de pago por las deudas fiscales de la sucesión.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-especial-otros-01', moduleId:'m14', skillIds:['procesos-especiales'], type:'pjs', difficulty:4,
    case:'Se inicia un proceso de liquidación judicial en el que una sociedad tiene deudas fiscales de plazo vencido. La DIAN recibe la comunicación correspondiente.',
    stem:'¿Cuál es la finalidad principal de la intervención de cobranzas según el artículo 846?',
    options:[
      {id:'a',text:'Hacerse parte y hacer valer las deudas fiscales dentro del proceso, respetando las reglas y prelación aplicables.',rationale:'Ese es el objetivo de la comunicación prevista en el artículo 846.'},
      {id:'b',text:'Continuar un cobro individual ignorando la existencia del proceso colectivo.',rationale:'La existencia del proceso especial cambia el escenario jurídico de recuperación.'},
      {id:'c',text:'Eliminar las deudas de plazo vencido porque comenzó la liquidación.',rationale:'La apertura no extingue por sí misma las acreencias fiscales.'}
    ], correctOptionId:'a', explanation:'El artículo 846 busca que la administración intervenga oportunamente para hacer valer las acreencias fiscales en el proceso especial y que se respete su prelación legal.', sourceIds:['estatuto-tributario','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-especial-liquidacion-01', moduleId:'m14', skillIds:['procesos-especiales','liquidacion-sociedades'], type:'pjs', difficulty:4,
    case:'Una sociedad entra en causal de disolución bajo el supuesto regulado por el artículo 847. Su representante legal evalúa si debe informar a la DIAN.',
    stem:'¿Qué regla debe tener presente?',
    options:[
      {id:'a',text:'Debe dar aviso a la oficina de cobranzas dentro de los diez días siguientes al hecho que produjo la causal de disolución, en los supuestos de la norma.',rationale:'Es el deber temporal establecido por el artículo 847.'},
      {id:'b',text:'Solo debe informar después de repartir todos los activos.',rationale:'El aviso busca precisamente permitir que la administración informe y proteja las deudas antes del cierre.'},
      {id:'c',text:'No existe deber de aviso cuando hay deudas fiscales.',rationale:'El artículo 847 establece expresamente la comunicación.'}
    ], correctOptionId:'a', explanation:'En los supuestos del artículo 847, el representante legal debe comunicar la causal de disolución dentro de diez días para que cobranzas pueda informar sobre deudas fiscales vencidas.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-especial-personeria-01', moduleId:'m14', skillIds:['procesos-especiales'], type:'single', difficulty:2,
    stem:'¿Cómo acredita su personería el funcionario de cobranzas para intervenir en los procesos especiales señalados por el Estatuto Tributario?',
    options:[
      {id:'a',text:'Mediante la exhibición del auto comisorio proferido por el superior respectivo.',rationale:'Es la regla del artículo 848.'},
      {id:'b',text:'Únicamente mediante poder otorgado por el contribuyente.',rationale:'El funcionario representa a la administración, no al contribuyente.'},
      {id:'c',text:'No necesita acreditar ninguna calidad.',rationale:'El Estatuto establece una forma concreta de acreditación.'}
    ], correctOptionId:'a', explanation:'El artículo 848 simplifica la acreditación de la representación institucional en estos procesos mediante el auto comisorio del superior respectivo.', sourceIds:['estatuto-tributario'], verifiedAt
  }

  ,{
    id:'q-correccion-01', moduleId:'m6', skillIds:['calidad-datos','correccion-inconsistencias'], type:'pjs', difficulty:3,
    case:'En el estado de cuenta aparece un pago asociado a un concepto equivocado. El contribuyente aporta el recibo y los soportes coinciden con la inconsistencia detectada.',
    stem:'¿Cuál es la actuación más coherente con la función del empleo y el procedimiento institucional?',
    options:[
      {id:'a',text:'Modificar el saldo directamente y eliminar el registro anterior para que no queden diferencias.',rationale:'Eliminar la historia rompe trazabilidad y dificulta el control posterior.'},
      {id:'b',text:'Aplicar el procedimiento de corrección con los soportes correspondientes, conservar la trazabilidad y verificar el efecto final en el estado de cuenta.',rationale:'Integra veracidad del registro, soporte y control posterior.'},
      {id:'c',text:'Ignorar la inconsistencia porque el pago ya fue recibido por la DIAN.',rationale:'La función exige depurar información y mantener un estado de cuenta veraz.'}
    ], correctOptionId:'b', explanation:'PR-COT-0033 busca corregir inconsistencias de declaraciones y recibos de pago para mantener registros veraces del recaudo, obligaciones, pagos y estados de cuenta; la modificación debe quedar soportada y trazable.', sourceIds:['proc-correccion-inconsistencias-0033','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-correccion-02', moduleId:'m6', skillIds:['calidad-datos','estado-cuenta'], type:'single', difficulty:2,
    stem:'¿Cuál es el propósito central de PR-COT-0033?',
    options:[
      {id:'a',text:'Crear nuevas obligaciones cuando el sistema presenta cualquier diferencia.',rationale:'El procedimiento corrige datos; no convierte toda inconsistencia en una nueva deuda.'},
      {id:'b',text:'Corregir datos inconsistentes para contar con un registro veraz del recaudo, obligaciones, pagos y estados de cuenta.',rationale:'Resume el objetivo institucional del procedimiento.'},
      {id:'c',text:'Autorizar automáticamente devoluciones de saldos a favor.',rationale:'Las devoluciones tienen procedimientos específicos distintos.'}
    ], correctOptionId:'b', explanation:'La calidad de la información es una finalidad expresa del procedimiento de corrección y coincide con las funciones de CT-CR-3007.', sourceIds:['proc-correccion-inconsistencias-0033','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-control-especiales-01', moduleId:'m8', skillIds:['control-especiales','calidad-datos'], type:'pjs', difficulty:3,
    case:'Una base de control señala que un autorretenedor presenta posible incumplimiento. Antes de escalar el caso, aparecen diferencias entre la información de declaraciones, cartera y la dependencia a la que pertenece el contribuyente.',
    stem:'¿Qué actuación es más sólida?',
    options:[
      {id:'a',text:'Sancionar inmediatamente porque una base de control ya marcó la alerta.',rationale:'Una alerta no sustituye verificación, competencia ni procedimiento.'},
      {id:'b',text:'Validar identidad, jurisdicción y cruces de información, documentar el resultado y remitir al procedimiento competente si se confirma el incumplimiento.',rationale:'Es la lógica de control y verificación previa a la actuación correspondiente.'},
      {id:'c',text:'Eliminar el registro para evitar falsos positivos futuros.',rationale:'Eliminar evidencia sin análisis afecta integridad y trazabilidad.'}
    ], correctOptionId:'b', explanation:'El control sobre Grandes Contribuyentes, autorretenedores y agentes de retención se apoya en información cruzada y verificación antes de escalar los incumplimientos.', sourceIds:['proc-control-especiales-0307','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-control-especiales-02', moduleId:'m8', skillIds:['control-especiales'], type:'single', difficulty:2,
    stem:'¿Qué principio de razonamiento conviene aplicar al detectar un posible incumplimiento en una campaña o base de control?',
    options:[
      {id:'a',text:'La detección es suficiente para imponer cualquier consecuencia disponible.',rationale:'La actuación posterior depende de verificación, competencia y procedimiento.'},
      {id:'b',text:'La detección funciona como insumo para verificar y encaminar el caso al trámite que corresponda.',rationale:'Distingue correctamente señal de riesgo y decisión administrativa.'},
      {id:'c',text:'Toda diferencia de datos debe tratarse como fraude.',rationale:'Una inconsistencia puede tener múltiples causas y requiere comprobación.'}
    ], correctOptionId:'b', explanation:'En un PJS es clave no saltar de un hallazgo preliminar a una consecuencia definitiva sin pasar por la actuación prevista.', sourceIds:['proc-control-especiales-0307','proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-inicio-cobro-01', moduleId:'m9', skillIds:['cartera','exigibilidad','clasificacion-obligaciones'], type:'pjs', difficulty:3,
    case:'Llega a cobranzas un documento que refleja una suma a cargo del contribuyente, pero el expediente muestra un pago reciente aún no conciliado y no está claro si la obligación sigue exigible por el valor registrado.',
    stem:'¿Qué debe hacerse primero?',
    options:[
      {id:'a',text:'Repartirlo de inmediato a coactivo porque ya existe un valor en el sistema.',rationale:'El registro no sustituye la verificación de realidad y exigibilidad.'},
      {id:'b',text:'Realizar el estudio preliminar, verificar pago y exigibilidad, depurar la información y clasificar la obligación antes del reparto.',rationale:'Es la función técnica de entrada al cobro.'},
      {id:'c',text:'Archivar definitivamente la obligación por la sola existencia de un pago pendiente de conciliación.',rationale:'La existencia de un pago por verificar no demuestra extinción total.'}
    ], correctOptionId:'b', explanation:'PR-COT-0269 y las funciones de cobranzas exigen controlar documentos, verificar la obligación y clasificarla antes de continuar por la ruta correspondiente.', sourceIds:['proc-inicio-cobro-0269','res-69-2021'], verifiedAt
  },
  {
    id:'q-inicio-cobro-02', moduleId:'m9', skillIds:['cartera','clasificacion-obligaciones'], type:'single', difficulty:2,
    stem:'¿Dónde termina conceptualmente PR-COT-0269?',
    options:[
      {id:'a',text:'Con la sentencia judicial que declara pagada la obligación.',rationale:'El procedimiento es de recepción y preparación del cobro, no un proceso judicial.'},
      {id:'b',text:'Con el reparto para continuar con el procedimiento de cobro que corresponda.',rationale:'Ese es el alcance institucional publicado.'},
      {id:'c',text:'Con el remate obligatorio de un bien.',rationale:'El remate pertenece a una etapa posterior y solo procede en ciertos casos.'}
    ], correctOptionId:'b', explanation:'El procedimiento de inicio prepara, controla y distribuye el asunto para la gestión de cobro apropiada.', sourceIds:['proc-inicio-cobro-0269'], verifiedAt
  },
  {
    id:'q-persuasivo-01', moduleId:'m10', skillIds:['cobro-persuasivo','cartera'], type:'pjs', difficulty:3,
    case:'Un contribuyente tiene una obligación clara, expresa y exigible. El expediente aún se encuentra en gestión persuasiva y el servidor evalúa cómo contactar al deudor.',
    stem:'¿Qué enfoque corresponde mejor a esta etapa?',
    options:[
      {id:'a',text:'Presentar la deuda y promover su normalización voluntaria, explicando alternativas y consecuencias sin confundir la gestión con una ejecución coactiva.',rationale:'Describe la naturaleza de la gestión persuasiva.'},
      {id:'b',text:'Resolver excepciones al mandamiento aunque todavía no se haya librado ni notificado.',rationale:'Las excepciones pertenecen al procedimiento coactivo tras el mandamiento.'},
      {id:'c',text:'Declarar adjudicado un bien al Estado como primera comunicación.',rationale:'No corresponde a una gestión persuasiva.'}
    ], correctOptionId:'a', explanation:'El cobro persuasivo busca el pago voluntario y es una instancia previa distinta de la ejecución coactiva, aunque la obligación que lo sustenta debe ser real y exigible.', sourceIds:['ce-cobro-persuasivo-2010'], verifiedAt
  },
  {
    id:'q-persuasivo-02', moduleId:'m10', skillIds:['cobro-persuasivo','cobro-coactivo'], type:'single', difficulty:2,
    stem:'¿Qué diferencia conceptual es correcta?',
    options:[
      {id:'a',text:'Cobro persuasivo y coactivo son sinónimos y tienen idénticas etapas.',rationale:'Son figuras diferentes.'},
      {id:'b',text:'El persuasivo procura el pago voluntario; el coactivo aplica el procedimiento administrativo de ejecución previsto en el Estatuto Tributario.',rationale:'Es la distinción central.'},
      {id:'c',text:'El cobro persuasivo solo puede usarse después del remate.',rationale:'La gestión persuasiva es previa o preparatoria, no posterior al remate como regla.'}
    ], correctOptionId:'b', explanation:'La diferencia de naturaleza ayuda a descartar opciones que mezclan herramientas de etapas distintas.', sourceIds:['ce-cobro-persuasivo-2010','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-facilidad-ciclo-01', moduleId:'m10', skillIds:['facilidades-pago','cartera'], type:'pjs', difficulty:3,
    case:'La DIAN concedió una facilidad de pago. Tres meses después el funcionario descubre que nadie ha verificado el cumplimiento de las cuotas porque se asumió que el trámite terminó con la resolución inicial.',
    stem:'¿Qué corrección corresponde?',
    options:[
      {id:'a',text:'Mantener la facilidad sin seguimiento hasta que el deudor avise voluntariamente si incumplió.',rationale:'El procedimiento incluye control del cumplimiento.'},
      {id:'b',text:'Realizar el seguimiento previsto, verificar pagos y obligaciones y, según el resultado, continuar hasta cumplimiento o tramitar el incumplimiento.',rationale:'Refleja el alcance integral de PR-COT-0272.'},
      {id:'c',text:'Declarar cumplida la facilidad por el solo transcurso del tiempo.',rationale:'El cumplimiento depende del pago y condiciones, no del tiempo por sí solo.'}
    ], correctOptionId:'b', explanation:'PR-COT-0272 cubre solicitud, decisión, control, cumplimiento e incumplimiento; no finaliza automáticamente al conceder la facilidad.', sourceIds:['proc-facilidades-0272'], verifiedAt
  },
  {
    id:'q-facilidad-ciclo-02', moduleId:'m10', skillIds:['facilidades-pago','devoluciones'], type:'pjs', difficulty:4,
    case:'Durante una facilidad de pago vigente aparece un saldo a favor del contribuyente que pretende solicitar en devolución.',
    stem:'¿Qué aspecto debe verificar el gestor antes de tramitar el giro como si la deuda no existiera?',
    options:[
      {id:'a',text:'Si el saldo a favor debe aplicarse a la facilidad y cómo modifica el acuerdo antes de una devolución.',rationale:'El procedimiento institucional contempla esta interacción.'},
      {id:'b',text:'Nada: una facilidad impide cualquier compensación o aplicación de saldos.',rationale:'La facilidad no vuelve irrelevantes las reglas de compensación y aplicación.'},
      {id:'c',text:'Si puede borrar la facilidad del sistema para acelerar la devolución.',rationale:'Eso afectaría legalidad y trazabilidad.'}
    ], correctOptionId:'a', explanation:'La existencia simultánea de deuda sujeta a facilidad y saldo a favor exige coordinar cartera y devoluciones, no analizar cada dato de forma aislada.', sourceIds:['proc-facilidades-0272','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-facilidad-ciclo-03', moduleId:'m10', skillIds:['facilidades-pago','cobro-coactivo'], type:'single', difficulty:3,
    stem:'Según el alcance de PR-COT-0272, ¿qué puede ocurrir si la facilidad se incumple?',
    options:[
      {id:'a',text:'La obligación se extingue automáticamente.',rationale:'El incumplimiento no equivale a pago.'},
      {id:'b',text:'Se continúa el proceso de cobro conforme a la actuación que corresponda.',rationale:'Es uno de los desenlaces previstos por el procedimiento.'},
      {id:'c',text:'La DIAN pierde competencia sobre la obligación.',rationale:'No existe tal consecuencia automática.'}
    ], correctOptionId:'b', explanation:'El procedimiento termina por cumplimiento con extinción o por la continuación del cobro cuando se presenta incumplimiento.', sourceIds:['proc-facilidades-0272'], verifiedAt
  },
  {
    id:'q-mandamiento-proc-01', moduleId:'m11', skillIds:['cobro-coactivo','debido-proceso'], type:'pjs', difficulty:4,
    case:'Después de notificado el mandamiento de pago, el gestor recibe prueba de un pago que podría extinguir una de las obligaciones incluidas. Un compañero sugiere ignorarlo porque “el mandamiento ya salió”.',
    stem:'¿Qué actuación es correcta?',
    options:[
      {id:'a',text:'Continuar sin revisar porque el mandamiento vuelve inmodificable todo el expediente.',rationale:'El procedimiento exige control de legalidad durante su ejecución.'},
      {id:'b',text:'Verificar el pago, actualizar la realidad de la obligación y ajustar la actuación conforme a su efecto jurídico.',rationale:'El cobro debe recaer sobre obligaciones reales y exigibles y respetar el debido proceso.'},
      {id:'c',text:'Anular todas las obligaciones del deudor sin comprobar el alcance del pago.',rationale:'El pago puede ser parcial o corresponder solo a ciertos conceptos.'}
    ], correctOptionId:'b', explanation:'PR-COT-0270 exige control de legalidad continuo; los hechos posteriores o detectados durante el trámite deben incorporarse al análisis.', sourceIds:['proc-mandamiento-0270','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-mandamiento-proc-02', moduleId:'m11', skillIds:['cobro-coactivo','mandamiento-pago'], type:'single', difficulty:2,
    stem:'¿Cuál es el objetivo institucional de PR-COT-0270?',
    options:[
      {id:'a',text:'Dar inicio al proceso administrativo de cobro coactivo ordenando el pago de las obligaciones fiscales.',rationale:'Resume el objetivo publicado del procedimiento.'},
      {id:'b',text:'Resolver todas las solicitudes de devolución.',rationale:'Ese asunto corresponde a Recaudo-Devoluciones.'},
      {id:'c',text:'Calificar a los Grandes Contribuyentes.',rationale:'Es una materia distinta.'}
    ], correctOptionId:'a', explanation:'El mandamiento de pago es una pieza central del inicio de la ejecución administrativa, sobre obligaciones que cumplen los presupuestos legales.', sourceIds:['proc-mandamiento-0270'], verifiedAt
  },
  {
    id:'q-bienes-01', moduleId:'m13', skillIds:['investigacion-bienes','medidas-cautelares'], type:'pjs', difficulty:3,
    case:'Una consulta externa muestra un inmueble con el mismo apellido del deudor, pero aún no se ha verificado titularidad. El gestor considera embargarlo de inmediato.',
    stem:'¿Qué actuación debe anteceder la medida?',
    options:[
      {id:'a',text:'Verificar que el bien sea realmente de propiedad del sujeto obligado y registrar el resultado de la investigación.',rationale:'La investigación de bienes busca identificar activos atribuibles al deudor.'},
      {id:'b',text:'Embargar primero y revisar quién es el propietario después.',rationale:'Afectaría derechos sin verificar el presupuesto básico de titularidad.'},
      {id:'c',text:'Cerrar el cobro porque la titularidad no aparece confirmada en la primera consulta.',rationale:'Una consulta no concluyente no implica inexistencia de bienes ni extinción.'}
    ], correctOptionId:'a', explanation:'PR-COT-0326 se orienta a identificar bienes de propiedad del deudor; la medida exige luego revisar titularidad, embargabilidad y demás requisitos.', sourceIds:['proc-investigacion-bienes-0326','proc-medidas-0327'], verifiedAt
  },
  {
    id:'q-bienes-02', moduleId:'m13', skillIds:['investigacion-bienes'], type:'single', difficulty:2,
    stem:'¿Cuál es la finalidad principal de la investigación de bienes en cobranzas?',
    options:[
      {id:'a',text:'Identificar activos del deudor y registrarlos para apoyar la recuperación de las obligaciones.',rationale:'Corresponde al objetivo de PR-COT-0326.'},
      {id:'b',text:'Determinar la sanción penal del contribuyente.',rationale:'No es la finalidad de este procedimiento.'},
      {id:'c',text:'Calcular el impuesto debido desde cero.',rationale:'La investigación patrimonial no sustituye la determinación tributaria.'}
    ], correctOptionId:'a', explanation:'La investigación patrimonial es instrumental al cobro y debe mantenerse separada de otras funciones de determinación o sanción.', sourceIds:['proc-investigacion-bienes-0326'], verifiedAt
  },
  {
    id:'q-levantamiento-01', moduleId:'m13', skillIds:['medidas-cautelares','levantamiento-medidas'], type:'pjs', difficulty:3,
    case:'La obligación que sustentaba un embargo quedó totalmente extinguida y no aparecen otras obligaciones pendientes que justifiquen mantener la cautela.',
    stem:'¿Qué actuación resulta coherente?',
    options:[
      {id:'a',text:'Mantener el embargo por tiempo indefinido “por prevención”.',rationale:'La medida es accesoria al cobro y no puede mantenerse sin fundamento.'},
      {id:'b',text:'Tramitar el levantamiento de la medida y verificar el cierre o la ruta que corresponda al expediente.',rationale:'Es el propósito del procedimiento de levantamiento cuando se extingue la obligación.'},
      {id:'c',text:'Convertir automáticamente el embargo en una sanción.',rationale:'Una medida cautelar no se transforma en sanción.'}
    ], correctOptionId:'b', explanation:'PR-COT-0345 contempla el levantamiento cuando procede por extinción de obligaciones y exige revisar si existen otras obligaciones para decidir cómo continuar.', sourceIds:['proc-levantamiento-medidas-0345'], verifiedAt
  },
  {
    id:'q-levantamiento-02', moduleId:'m13', skillIds:['medidas-cautelares','levantamiento-medidas'], type:'single', difficulty:3,
    stem:'¿Qué idea describe mejor la relación entre la obligación y la medida cautelar?',
    options:[
      {id:'a',text:'La medida es un fin autónomo y puede sobrevivir siempre al cobro.',rationale:'La cautela es instrumental al cumplimiento de la obligación.'},
      {id:'b',text:'La medida es accesoria y su mantenimiento debe seguir teniendo fundamento jurídico dentro del expediente.',rationale:'La finalidad es asegurar el cobro, no restringir bienes por sí misma.'},
      {id:'c',text:'Toda medida desaparece apenas el deudor presenta una solicitud.',rationale:'Una solicitud no produce automáticamente levantamiento.'}
    ], correctOptionId:'b', explanation:'La decisión de mantener o levantar una cautela depende de la situación de la obligación y las causales aplicables.', sourceIds:['proc-levantamiento-medidas-0345','proc-medidas-0327'], verifiedAt
  },
  {
    id:'q-reorganizacion-01', moduleId:'m14', skillIds:['procesos-concursales','reorganizacion'], type:'pjs', difficulty:4,
    case:'La DIAN conoce la apertura de un proceso de reorganización de un deudor que tiene obligaciones fiscales. El expediente de cobro individual venía activo.',
    stem:'¿Cuál es el cambio de enfoque correcto?',
    options:[
      {id:'a',text:'Ignorar el proceso concursal y continuar todas las actuaciones individuales exactamente igual.',rationale:'La reorganización somete la recuperación a reglas colectivas específicas.'},
      {id:'b',text:'Depurar la acreencia, intervenir oportunamente en el proceso colectivo y defender el crédito fiscal conforme a la Ley 1116 y el procedimiento institucional.',rationale:'Es la finalidad de la intervención de la DIAN en reorganización.'},
      {id:'c',text:'Extinguir de oficio todas las obligaciones por la apertura del proceso.',rationale:'La apertura no equivale a pago ni extinción.'}
    ], correctOptionId:'b', explanation:'PR-COT-0273 se orienta a la defensa del crédito fiscal dentro de la reorganización, donde las reglas colectivas sustituyen la lógica de simple ejecución individual.', sourceIds:['proc-reorganizacion-0273','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-reorganizacion-02', moduleId:'m14', skillIds:['procesos-concursales','credito-fiscal'], type:'single', difficulty:3,
    stem:'¿Con qué actuación comienza el alcance descrito por PR-COT-0273?',
    options:[
      {id:'a',text:'Con la presentación de créditos al promotor.',rationale:'Así está descrito el inicio del alcance del procedimiento.'},
      {id:'b',text:'Con el remate individual de todos los activos.',rationale:'La reorganización busca una solución colectiva y no inicia con remate individual.'},
      {id:'c',text:'Con la renuncia de la DIAN a su acreencia.',rationale:'El objetivo es defender el crédito fiscal.'}
    ], correctOptionId:'a', explanation:'El procedimiento institucional parte de la presentación del crédito y continúa con las actuaciones necesarias hasta la extinción conforme a las decisiones concursales.', sourceIds:['proc-reorganizacion-0273'], verifiedAt
  },
  {
    id:'q-dev-sie-01', moduleId:'m16', skillIds:['devoluciones','sistemas-informacion','verificacion'], type:'pjs', difficulty:4,
    case:'El sistema generó un proyecto de resolución de devolución, pero al comparar el PDF con la solicitud se detecta que el número de cuenta y el valor solicitado no coinciden.',
    stem:'¿Qué debe hacer el revisor?',
    options:[
      {id:'a',text:'Aprobar porque el documento fue generado por el sistema.',rationale:'La automatización no elimina la obligación de revisar consistencia.'},
      {id:'b',text:'Devolver el proyecto para corrección y verificar que el acto coincida con la solicitud, soportes y compensaciones aplicables.',rationale:'Es la lógica de revisión prevista en PR-COT-0124.'},
      {id:'c',text:'Cambiar verbalmente el valor y continuar sin dejar evidencia.',rationale:'La decisión debe quedar correctamente documentada y trazable.'}
    ], correctOptionId:'b', explanation:'PR-COT-0124 exige que el acto administrativo sea consistente con la solicitud y las evidencias del expediente antes de aprobarlo.', sourceIds:['proc-devoluciones-sie-0124'], verifiedAt
  },
  {
    id:'q-dev-sie-02', moduleId:'m16', skillIds:['devoluciones','verificacion'], type:'pjs', difficulty:4,
    case:'Un funcionario quiere requerir soportes durante la verificación de una devolución, pero el asunto aún no le ha sido autorizado, comisionado ni repartido por quien tiene competencia.',
    stem:'¿Qué debe ocurrir primero?',
    options:[
      {id:'a',text:'Obtener la habilitación o reparto correspondiente antes de ejercer la verificación del caso.',rationale:'La competencia y autorización anteceden la actuación verificadora.'},
      {id:'b',text:'Requerir igualmente porque cualquier servidor puede verificar devoluciones.',rationale:'El artículo 853 condiciona la actuación a la asignación competente.'},
      {id:'c',text:'Aprobar la devolución sin ninguna verificación.',rationale:'La falta de asignación no convierte la devolución en automática.'}
    ], correctOptionId:'a', explanation:'La verificación debe adelantarse por el funcionario habilitado conforme a la competencia y reparto aplicables.', sourceIds:['estatuto-tributario','proc-devoluciones-sie-0124'], verifiedAt
  },
  {
    id:'q-pago-exceso-01', moduleId:'m16', skillIds:['devoluciones','pago-exceso','pago-no-debido'], type:'single', difficulty:2,
    stem:'¿Cuál ejemplo corresponde mejor a un pago en exceso?',
    options:[
      {id:'a',text:'Existía una obligación de 5 millones y, por error, se pagaron 7 millones.',rationale:'Hay causa legal de pago, pero se canceló una suma superior.'},
      {id:'b',text:'Se pagó un concepto que jurídicamente nunca era exigible al sujeto.',rationale:'Ese supuesto se acerca al pago de lo no debido.'},
      {id:'c',text:'La persona nunca realizó ningún pago.',rationale:'Sin pago no existe pago en exceso.'}
    ], correctOptionId:'a', explanation:'PR-COT-0128 define el pago en exceso como el pago de sumas mayores a las que legalmente correspondían.', sourceIds:['proc-pagos-exceso-0128'], verifiedAt
  },
  {
    id:'q-pago-exceso-02', moduleId:'m16', skillIds:['devoluciones','pago-no-debido'], type:'pjs', difficulty:3,
    case:'Una persona demuestra que realizó un pago sin que existiera causa legal que hiciera exigible ese concepto a su cargo.',
    stem:'¿Cómo debe clasificarse inicialmente la situación?',
    options:[
      {id:'a',text:'Como pago de lo no debido, sujeto al procedimiento y requisitos aplicables.',rationale:'La inexistencia de causa legal es la característica distintiva.'},
      {id:'b',text:'Como pago en exceso necesariamente, aunque no existiera obligación.',rationale:'El exceso presupone que sí había una suma legalmente debida.'},
      {id:'c',text:'Como una facilidad de pago incumplida.',rationale:'No existe relación con un acuerdo de pago.'}
    ], correctOptionId:'a', explanation:'La primera tarea es clasificar correctamente el origen del pago; esa clasificación determina la ruta de devolución o compensación.', sourceIds:['proc-pagos-exceso-0128','decreto-1625-2016'], verifiedAt
  }

  ,{
    id:'q-cert-obligaciones-01', moduleId:'m6', skillIds:['certificacion-obligaciones','estado-cuenta'], type:'pjs', difficulty:3,
    case:'Un área solicita una certificación de obligaciones. Al revisar el estado de cuenta, el funcionario encuentra un recibo de pago soportado que todavía no se refleja correctamente en el saldo.',
    stem:'¿Qué actuación protege mejor la calidad de la certificación?',
    options:[
      {id:'a',text:'Certificar inmediatamente el saldo del aplicativo porque es la fuente oficial.',rationale:'Un registro inconsistente debe depurarse antes de convertirlo en una certificación institucional.'},
      {id:'b',text:'Verificar y tramitar la corrección o actualización que corresponda, y luego certificar sobre información depurada.',rationale:'La certificación debe reflejar la situación real y trazable de la obligación.'},
      {id:'c',text:'Eliminar manualmente la obligación sin soporte para acelerar la respuesta.',rationale:'Modificar sin fundamento rompe trazabilidad y puede falsear el estado de cuenta.'}
    ], correctOptionId:'b', explanation:'PR-COT-0328 se articula con actualización de saldos y corrección de inconsistencias cuando la información que sustentará la certificación presenta desajustes.', sourceIds:['proc-certificacion-obligaciones-0328','proc-correccion-inconsistencias-0033'], verifiedAt
  },
  {
    id:'q-cert-obligaciones-02', moduleId:'m6', skillIds:['certificacion-obligaciones'], type:'single', difficulty:2,
    stem:'Según el procedimiento público PR-COT-0328, ¿cuál es el término interno señalado para proferir la certificación de obligaciones desde la recepción de la solicitud?',
    options:[
      {id:'a',text:'Cinco días.',rationale:'Es el término indicado en las condiciones generales del procedimiento.'},
      {id:'b',text:'Quince días en todos los casos.',rationale:'Ese término no es el señalado por PR-COT-0328 para esta actividad interna.'},
      {id:'c',text:'Treinta días.',rationale:'No corresponde al término operativo indicado en el procedimiento.'}
    ], correctOptionId:'a', explanation:'PR-COT-0328 indica que la dependencia de cobranzas o quien haga sus veces debe proferir la certificación dentro de los cinco días siguientes a la recepción de la solicitud.', sourceIds:['proc-certificacion-obligaciones-0328'], verifiedAt
  },
  {
    id:'q-extincion-01', moduleId:'m9', skillIds:['extincion-obligaciones','estado-cuenta'], type:'pjs', difficulty:3,
    case:'Durante el cierre de un expediente, el sistema muestra saldo cero, pero los documentos del expediente no permiten explicar con claridad la razón y existen indicios de un desajuste del aplicativo.',
    stem:'¿Cuál es la mejor actuación inicial?',
    options:[
      {id:'a',text:'Cerrar el expediente porque el saldo cero basta para acreditar extinción.',rationale:'El cierre debe estar soportado por la forma de extinción y por información consistente.'},
      {id:'b',text:'Identificar la causa del saldo, verificar soportes y activar la corrección o ajuste correspondiente antes de cerrar.',rationale:'PR-COT-0330 exige tratar desajustes y sostener documentalmente la extinción.'},
      {id:'c',text:'Mantener el expediente abierto de manera indefinida sin realizar ninguna verificación.',rationale:'La inconsistencia exige gestión, no inactividad.'}
    ], correctOptionId:'b', explanation:'La extinción no se presume únicamente por una pantalla; debe identificarse su forma y corregirse cualquier desajuste de saldos, declaraciones, pagos o aplicativos.', sourceIds:['proc-extincion-0330'], verifiedAt
  },
  {
    id:'q-extincion-02', moduleId:'m9', skillIds:['extincion-obligaciones'], type:'single', difficulty:2,
    stem:'¿Cuál describe mejor el alcance de PR-COT-0330?',
    options:[
      {id:'a',text:'Empieza determinando las obligaciones a extinguir y termina con el cierre del expediente que contiene obligaciones extinguidas.',rationale:'Corresponde al alcance publicado por la DIAN.'},
      {id:'b',text:'Empieza con la declaración tributaria y termina con la fiscalización del impuesto.',rationale:'Ese no es el alcance del procedimiento de extinción en cartera.'},
      {id:'c',text:'Empieza con el embargo y siempre termina con remate.',rationale:'La extinción puede surgir por distintas formas y no exige remate en todos los casos.'}
    ], correctOptionId:'a', explanation:'El procedimiento se concentra en determinar y documentar la extinción dentro de la gestión de cobro hasta el cierre del expediente correspondiente.', sourceIds:['proc-extincion-0330'], verifiedAt
  },
  {
    id:'q-liquidacion-credito-01', moduleId:'m12', skillIds:['liquidacion-credito','orden-ejecucion'], type:'pjs', difficulty:4,
    case:'Las excepciones fueron decididas desfavorablemente y la decisión que permite seguir adelante la ejecución se encuentra ejecutoriada. Debe definirse el monto sobre el cual continuará la ejecución.',
    stem:'¿Qué procedimiento cobra especial relevancia en esta etapa?',
    options:[
      {id:'a',text:'Liquidar el crédito y las costas, discriminando capital e intereses causados hasta la fecha de la liquidación.',rationale:'Es justamente el objeto de PR-COT-0390 después de la decisión ejecutoriada.'},
      {id:'b',text:'Volver a expedir el título ejecutivo desde cero.',rationale:'La etapa parte de un título y una decisión ya existentes.'},
      {id:'c',text:'Reabrir automáticamente el término inicial para excepciones.',rationale:'No es la función de la liquidación del crédito.'}
    ], correctOptionId:'a', explanation:'PR-COT-0390 cuantifica el crédito ejecutado después de la resolución que ordena seguir adelante o de la resolución ejecutoriada que falla excepciones.', sourceIds:['proc-liquidacion-credito-0390'], verifiedAt
  },
  {
    id:'q-liquidacion-credito-02', moduleId:'m12', skillIds:['liquidacion-credito','costas'], type:'single', difficulty:2,
    stem:'¿Qué componentes menciona expresamente PR-COT-0390 al establecer el valor objeto de cobro?',
    options:[
      {id:'a',text:'Capital, intereses causados hasta la fecha de liquidación y costas del proceso.',rationale:'Son los elementos señalados en el objetivo del procedimiento.'},
      {id:'b',text:'Únicamente el capital histórico, sin intereses ni costas.',rationale:'El procedimiento contempla expresamente intereses y costas.'},
      {id:'c',text:'Solo el valor comercial de los bienes del deudor.',rationale:'Ese asunto pertenece a la valoración de los bienes, no a la liquidación del crédito.'}
    ], correctOptionId:'a', explanation:'La liquidación del crédito cuantifica la obligación ejecutada; el avalúo, en cambio, cuantifica el valor del bien.', sourceIds:['proc-liquidacion-credito-0390','proc-avaluo-0389'], verifiedAt
  },
  {
    id:'q-liquidacion-credito-03', moduleId:'m12', skillIds:['liquidacion-credito','orden-ejecucion'], type:'pjs', difficulty:4,
    case:'Un funcionario propone realizar la liquidación del crédito antes de que exista una resolución ejecutoriada que ordene seguir adelante la ejecución o decida las excepciones.',
    stem:'¿Qué problema presenta la propuesta?',
    options:[
      {id:'a',text:'Invierte la secuencia del procedimiento: PR-COT-0390 parte de una decisión ejecutoriada que habilita esa etapa.',rationale:'La entrada del procedimiento está definida por la decisión ejecutoriada correspondiente.'},
      {id:'b',text:'Ninguno, porque la liquidación sustituye el mandamiento de pago.',rationale:'La liquidación no sustituye las etapas anteriores del cobro.'},
      {id:'c',text:'El único problema es que todavía no existe un avalúo comercial.',rationale:'El defecto principal del caso es la falta de la decisión ejecutoriada que antecede a la liquidación.'}
    ], correctOptionId:'a', explanation:'La secuencia importa: cuantificar el crédito de ejecución no reemplaza la formación del título, mandamiento, defensa ni decisión que habilita seguir adelante.', sourceIds:['proc-liquidacion-credito-0390','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-secuestro-01', moduleId:'m13', skillIds:['secuestro','medidas-cautelares'], type:'single', difficulty:2,
    stem:'¿Cuál es la finalidad principal del secuestro de bienes en PR-COT-0388?',
    options:[
      {id:'a',text:'Retirar del dominio material del deudor los bienes embargados para entregarlos a custodia y administración de un secuestre mientras culmina el cobro.',rationale:'Corresponde al objetivo del procedimiento.'},
      {id:'b',text:'Determinar el impuesto a cargo del contribuyente.',rationale:'La determinación tributaria no es el objeto del secuestro.'},
      {id:'c',text:'Declarar prescrita la obligación automáticamente.',rationale:'El secuestro no define la prescripción.'}
    ], correctOptionId:'a', explanation:'El secuestro es una actuación de ejecución sobre bienes previamente embargados y se diferencia tanto de la determinación de la deuda como de la extinción de la obligación.', sourceIds:['proc-secuestro-0388'], verifiedAt
  },
  {
    id:'q-secuestro-02', moduleId:'m13', skillIds:['secuestro','costo-beneficio'], type:'pjs', difficulty:4,
    case:'Existe un bien embargado, pero el análisis previo arroja una relación costo-beneficio negativa para practicar la diligencia de secuestro.',
    stem:'Según el procedimiento institucional, ¿qué decisión es la más coherente?',
    options:[
      {id:'a',text:'Practicar el secuestro de todas formas porque todo embargo debe terminar necesariamente en secuestro.',rationale:'PR-COT-0388 exige evaluar el costo-beneficio y contempla abstenerse.'},
      {id:'b',text:'Abstenerse de practicar el secuestro, tramitar el levantamiento de la medida y continuar con la ruta de cartera que corresponda.',rationale:'Es la salida prevista cuando el análisis lleva a no secuestrar.'},
      {id:'c',text:'Extinguir la obligación por el solo hecho de que el secuestro no sea conveniente.',rationale:'La inconveniencia del secuestro no extingue la deuda.'}
    ], correctOptionId:'b', explanation:'El artículo 839-4 y PR-COT-0388 incorporan un análisis costo-beneficio antes de la diligencia; una relación negativa puede conducir a no secuestrar y levantar la cautela sobre ese bien.', sourceIds:['proc-secuestro-0388','proc-levantamiento-medidas-0345'], verifiedAt
  },
  {
    id:'q-secuestro-03', moduleId:'m13', skillIds:['secuestro','medidas-cautelares'], type:'pjs', difficulty:3,
    case:'Un estudiante afirma que “embargo” y “secuestro” son exactamente la misma actuación y siempre ocurren al mismo tiempo.',
    stem:'¿Cuál corrección conceptual es más adecuada?',
    options:[
      {id:'a',text:'Son etapas y efectos distintos: PR-COT-0388 recibe el expediente proveniente de medidas cautelares y regula actuaciones posteriores al embargo, incluido el secuestro cuando corresponda.',rationale:'El propio alcance del procedimiento muestra la separación entre embargo y secuestro.'},
      {id:'b',text:'Tiene razón: ambos términos son intercambiables en cualquier contexto.',rationale:'Los procedimientos los tratan como actuaciones distintas.'},
      {id:'c',text:'El secuestro siempre ocurre antes de identificar el bien.',rationale:'La secuencia parte de un bien ya embargado o de la actuación cautelar correspondiente.'}
    ], correctOptionId:'a', explanation:'Distinguir figuras próximas es clave en PJS: una opción puede mencionar una institución real pero ubicarla en la etapa equivocada.', sourceIds:['proc-secuestro-0388','proc-medidas-0327'], verifiedAt
  },
  {
    id:'q-avaluo-01', moduleId:'m13', skillIds:['avaluo','medidas-cautelares'], type:'pjs', difficulty:3,
    case:'La ejecución cuenta con resolución de seguir adelante debidamente notificada y un bien ya embargado y secuestrado. Ahora se requiere establecer un valor técnico para avanzar hacia su realización.',
    stem:'¿Cuál es la actuación que sigue lógicamente?',
    options:[
      {id:'a',text:'Iniciar el avalúo y someterlo al trámite de aprobación correspondiente.',rationale:'PR-COT-0389 fija el valor del bien y conecta esa etapa con el remate.'},
      {id:'b',text:'Expedir una nueva declaración tributaria por el valor del bien.',rationale:'El avalúo no determina la obligación tributaria.'},
      {id:'c',text:'Cerrar el expediente sin cuantificar ni realizar el activo.',rationale:'La existencia de un bien secuestrado dentro de una ejecución activa exige continuar la ruta correspondiente.'}
    ], correctOptionId:'a', explanation:'PR-COT-0389 parte de la ejecución y del secuestro del bien, incluye la aprobación del avalúo y finaliza continuando con el remate.', sourceIds:['proc-avaluo-0389'], verifiedAt
  },
  {
    id:'q-remate-01', moduleId:'m13', skillIds:['remate','orden-ejecucion'], type:'single', difficulty:2,
    stem:'¿Cuál es el objetivo institucional del remate de bienes según PR-COT-0391?',
    options:[
      {id:'a',text:'Obtener dinero mediante la venta forzada de bienes del deudor para extinguir parcial o totalmente las obligaciones en cobro.',rationale:'Es la finalidad expresamente indicada por el procedimiento.'},
      {id:'b',text:'Sancionar moralmente al deudor mediante la pérdida del bien.',rationale:'La finalidad es patrimonial y de recuperación, no punitiva.'},
      {id:'c',text:'Fijar por primera vez la existencia de la obligación tributaria.',rationale:'La obligación y su exigibilidad anteceden a la etapa de remate.'}
    ], correctOptionId:'a', explanation:'El remate es una fase de realización del activo dentro de la ejecución y su producto se orienta al pago de la obligación.', sourceIds:['proc-remate-0391'], verifiedAt
  },
  {
    id:'q-remate-02', moduleId:'m13', skillIds:['remate','avaluo','liquidacion-credito'], type:'pjs', difficulty:4,
    case:'En un expediente existen bienes embargados, pero aún no se ha practicado el secuestro que corresponde, no existe avalúo aprobado y tampoco se ha completado la liquidación necesaria de la ejecución.',
    stem:'¿Es correcto saltar directamente al remate?',
    options:[
      {id:'a',text:'Sí, porque el embargo por sí solo sustituye todas las etapas posteriores.',rationale:'Los procedimientos DIAN separan embargo, secuestro, avalúo, liquidación y remate.'},
      {id:'b',text:'No. Debe respetarse la secuencia y los presupuestos de las actuaciones previas aplicables antes de realizar el bien.',rationale:'La venta forzada no puede desprenderse del debido proceso y de las actuaciones que la sustentan.'},
      {id:'c',text:'Sí, siempre que el deudor no responda una llamada telefónica.',rationale:'La inactividad frente a una gestión informal no reemplaza los presupuestos legales de ejecución.'}
    ], correctOptionId:'b', explanation:'Los documentos institucionales muestran una cadena de actuaciones conectadas y reiteran el control de legalidad y el debido proceso durante la ejecución.', sourceIds:['proc-secuestro-0388','proc-avaluo-0389','proc-liquidacion-credito-0390','proc-remate-0391'], verifiedAt
  }
  ,{
    id:'q-format-pjs-01', moduleId:'m0', skillIds:['pjs','proceso-2676'], type:'single', difficulty:1,
    stem:'Según las especificaciones técnicas de DIAN 2676, ¿cómo se estructura un ítem de la prueba funcional?',
    options:[
      {id:'a',text:'Un caso, un enunciado y tres opciones de respuesta.',rationale:'Es la estructura técnica prevista para la Prueba de Juicio Situacional funcional.'},
      {id:'b',text:'Una afirmación y cuatro grados de acuerdo.',rationale:'Ese esquema corresponde a los instrumentos tipo Likert previstos para comportamentales e integridad.'},
      {id:'c',text:'Una pregunta abierta que debe justificarse por escrito.',rationale:'No es el formato definido para la prueba funcional.'}
    ], correctOptionId:'a', explanation:'La prueba funcional se estructura como PJS: caso, enunciado y tres opciones. Por eso el estudio debe entrenar decisiones situadas y no solo definiciones.', sourceIds:['cnsc-2676-especificaciones-pruebas'], verifiedAt
  },
  {
    id:'q-format-pjs-02', moduleId:'m0', skillIds:['pjs','estrategia-estudio'], type:'pjs', difficulty:2,
    case:'Estás estudiando una norma que regula mandamiento de pago. Puedes memorizar únicamente el número del artículo o reconstruir quién actúa, en qué etapa, bajo qué condiciones y qué actuación sigue.',
    stem:'¿Qué estrategia se ajusta mejor al formato funcional previsto?',
    options:[
      {id:'a',text:'Reconstruir competencia, etapa, presupuesto y consecuencia, y luego practicar casos.',rationale:'Ese enfoque prepara para aplicar reglas dentro de un caso situacional.'},
      {id:'b',text:'Memorizar solo el número del artículo y evitar escenarios para no confundirse.',rationale:'El formato PJS exige aplicar la regla a hechos, no únicamente reconocer el artículo.'},
      {id:'c',text:'Estudiar únicamente competencias comportamentales porque también usan situaciones.',rationale:'Las funcionales tienen un propósito y formato diferente.'}
    ], correctOptionId:'a', explanation:'Conocer el formato PJS permite convertir cada tema jurídico en una secuencia de decisiones: competencia, etapa, regla y actuación.', sourceIds:['cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-format-likert-01', moduleId:'m0', skillIds:['comportamentales','integridad','likert'], type:'single', difficulty:1,
    stem:'¿Qué formato técnico está previsto para las pruebas comportamentales e integridad en DIAN 2676?',
    options:[
      {id:'a',text:'Afirmaciones de autorreporte con escala Likert de cuatro opciones.',rationale:'Las especificaciones técnicas prevén ese formato.'},
      {id:'b',text:'Casos con tres opciones y una única actuación jurídicamente correcta.',rationale:'Ese diseño corresponde a la prueba funcional PJS.'},
      {id:'c',text:'Preguntas abiertas calificadas por un jurado.',rationale:'No es el formato previsto.'}
    ], correctOptionId:'a', explanation:'Comportamentales e integridad se plantean como instrumentos de autorreporte con escala Likert de cuatro opciones, distintos de la PJS funcional.', sourceIds:['cnsc-2676-especificaciones-pruebas'], verifiedAt
  },
  {
    id:'q-format-likert-02', moduleId:'m0', skillIds:['comportamentales','consistencia','likert'], type:'pjs', difficulty:2,
    case:'Un aspirante decide marcar siempre el extremo que “suena mejor” en todas las afirmaciones comportamentales, sin leer si están redactadas en sentido directo o inverso.',
    stem:'¿Cuál es la mejor recomendación?',
    options:[
      {id:'a',text:'Leer cada afirmación completa y responder de manera consistente con la conducta real descrita.',rationale:'El diseño contempla afirmaciones directas e inversas y controles de consistencia.'},
      {id:'b',text:'Mantener siempre el mismo extremo porque así se maximiza cualquier escala.',rationale:'La escala no funciona como una suma simple de extremos y contempla controles de patrón de respuesta.'},
      {id:'c',text:'Responder al azar para evitar que el instrumento detecte un patrón.',rationale:'Responder al azar destruye consistencia y no representa el perfil del aspirante.'}
    ], correctOptionId:'a', explanation:'El diseño técnico contempla direccionalidad directa e inversa y controles psicométricos; la estrategia adecuada es comprender la conducta y responder con consistencia.', sourceIds:['cnsc-2676-especificaciones-pruebas','res-65-2024'], verifiedAt
  },
  {
    id:'q-funcion-publica-01', moduleId:'m1', skillIds:['funcion-publica','debido-proceso'], type:'pjs', difficulty:2,
    case:'Para cerrar rápidamente un expediente, un servidor propone omitir una oportunidad de contradicción expresamente prevista porque considera evidente cuál será la decisión final.',
    stem:'¿Qué actuación es más adecuada?',
    options:[
      {id:'a',text:'Mantener la oportunidad de contradicción y decidir después de cumplir el procedimiento.',rationale:'La eficacia no autoriza a sacrificar el debido proceso.'},
      {id:'b',text:'Omitirla porque la economía administrativa prevalece sobre las garantías.',rationale:'Los principios deben armonizarse; economía no elimina defensa y contradicción.'},
      {id:'c',text:'Decidir primero y conceder la contradicción solo si el interesado reclama.',rationale:'Convertir la garantía en una actuación posterior vacía su finalidad.'}
    ], correctOptionId:'a', explanation:'Los principios de eficacia y economía operan dentro del debido proceso, no contra él.', sourceIds:['constitucion-politica','cpaca'], verifiedAt
  },
  {
    id:'q-funcion-publica-02', moduleId:'m1', skillIds:['funcion-publica','igualdad','imparcialidad'], type:'pjs', difficulty:2,
    case:'Dos contribuyentes se encuentran en condiciones equivalentes. Uno solicita trato preferente alegando una relación personal con un funcionario de la entidad.',
    stem:'¿Qué criterio debe orientar la decisión?',
    options:[
      {id:'a',text:'Aplicar los mismos criterios objetivos y el procedimiento correspondiente a ambos.',rationale:'Igualdad, moralidad e imparcialidad excluyen privilegios personales.'},
      {id:'b',text:'Dar prioridad si ello permite terminar el asunto más rápido.',rationale:'La rapidez no legitima un trato preferente sin fundamento.'},
      {id:'c',text:'Aceptar el trato especial siempre que no exista perjuicio económico inmediato.',rationale:'La imparcialidad se compromete aunque no exista perjuicio económico evidente.'}
    ], correctOptionId:'a', explanation:'La función administrativa se desarrolla al servicio del interés general y bajo principios como igualdad, moralidad e imparcialidad.', sourceIds:['constitucion-politica','cpaca'], verifiedAt
  },
  {
    id:'q-transparencia-peticion-01', moduleId:'m2', skillIds:['pqrsf','transparencia','terminos'], type:'single', difficulty:2,
    stem:'Como regla especial de la Ley 1755, ¿en qué término deben resolverse las peticiones de documentos e información?',
    options:[
      {id:'a',text:'Diez días.',rationale:'La Ley 1755 prevé diez días para peticiones de documentos e información, salvo regla especial aplicable.'},
      {id:'b',text:'Quince días en todos los casos sin excepción.',rationale:'Quince días es la regla general, pero documentos e información tienen término especial.'},
      {id:'c',text:'Treinta días.',rationale:'Treinta días corresponde, como regla, a consultas.'}
    ], correctOptionId:'a', explanation:'Para resolver PJS conviene distinguir la regla general de 15 días de los términos especiales: 10 días para documentos/información y 30 para consultas.', sourceIds:['ley-1755-2015'], verifiedAt
  },
  {
    id:'q-transparencia-peticion-02', moduleId:'m2', skillIds:['transparencia','reserva-informacion'], type:'pjs', difficulty:3,
    case:'Un ciudadano solicita un documento público que contiene una sección amparada por una reserva legal, pero el resto puede divulgarse sin afectar el bien protegido.',
    stem:'¿Cuál es la respuesta más adecuada?',
    options:[
      {id:'a',text:'Entregar, cuando jurídicamente proceda, una versión pública que reserve únicamente la sección protegida.',rationale:'La transparencia favorece acceso al resto del documento cuando la reserva es parcial.'},
      {id:'b',text:'Negar automáticamente todo el documento porque una sola parte es reservada.',rationale:'Una reserva parcial no necesariamente justifica ocultar la totalidad.'},
      {id:'c',text:'Entregar todo el documento porque la máxima publicidad elimina cualquier reserva.',rationale:'La máxima publicidad coexiste con reservas constitucionales o legales.'}
    ], correctOptionId:'a', explanation:'La Ley 1712 permite separar información reservada o clasificada y suministrar una versión pública cuando sea viable.', sourceIds:['ley-1712-2014','ley-1755-2015'], verifiedAt
  },
  {
    id:'q-mapa-empleo-01', moduleId:'m3', skillIds:['perfil-empleo','cumplimiento-obligaciones'], type:'single', difficulty:1,
    stem:'¿En qué proceso y subprocesos ubica el MERF a CT-CR-3007?',
    options:[
      {id:'a',text:'Cumplimiento de Obligaciones Tributarias; Administración de Cartera y Recaudo-Devoluciones.',rationale:'Es la ubicación funcional expresamente señalada por la ficha.'},
      {id:'b',text:'Gestión Aduanera; Fiscalización Aduanera y Operación Logística.',rationale:'No corresponde a CT-CR-3007.'},
      {id:'c',text:'Gestión Jurídica; Defensa Judicial y Cobro Judicial.',rationale:'No es la ubicación definida por el MERF.'}
    ], correctOptionId:'a', explanation:'La ficha concentra el empleo en Cumplimiento de Obligaciones Tributarias y los subprocesos Administración de Cartera y Recaudo-Devoluciones.', sourceIds:['merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-mapa-empleo-02', moduleId:'m3', skillIds:['perfil-empleo','competencia'], type:'pjs', difficulty:2,
    case:'Un caso de estudio mezcla una discusión de clasificación arancelaria avanzada con una inconsistencia en el estado de cuenta y una obligación exigible en cartera.',
    stem:'¿Qué elemento se relaciona directamente con las funciones de CT-CR-3007?',
    options:[
      {id:'a',text:'La depuración de la inconsistencia y la realidad/exigibilidad de la obligación en el estado de cuenta.',rationale:'El MERF asigna expresamente esa función al empleo.'},
      {id:'b',text:'Determinar la subpartida arancelaria como función principal del empleo.',rationale:'No forma parte del núcleo funcional asignado a esta ficha.'},
      {id:'c',text:'Resolver exclusivamente controversias de valoración aduanera.',rationale:'No es una función esencial de CT-CR-3007.'}
    ], correctOptionId:'a', explanation:'En un caso mixto debes volver al proceso, subproceso y funciones del empleo para reconocer qué actuación corresponde al perfil.', sourceIds:['merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-formal-sustancial-01', moduleId:'m5', skillIds:['obligacion-tributaria','obligaciones-formales'], type:'single', difficulty:1,
    stem:'¿Cuál descripción corresponde mejor a la obligación tributaria sustancial?',
    options:[
      {id:'a',text:'Surge al realizarse el presupuesto legal generador y tiene por objeto el pago del tributo.',rationale:'Es la regla general del artículo 1 del Estatuto Tributario.'},
      {id:'b',text:'Consiste únicamente en conservar documentos y atender requerimientos.',rationale:'Esos son ejemplos de deberes formales, no la definición de obligación sustancial.'},
      {id:'c',text:'Nace únicamente cuando la DIAN expide mandamiento de pago.',rationale:'El cobro ocurre después de que existe una obligación exigible.'}
    ], correctOptionId:'a', explanation:'Separar obligación sustancial de deberes formales ayuda a clasificar correctamente el incumplimiento y la respuesta institucional.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-formal-sustancial-02', moduleId:'m5', skillIds:['obligaciones-formales','control-extensivo'], type:'pjs', difficulty:2,
    case:'Una persona estaba obligada a presentar una declaración y no lo hizo. Aún debes verificar la determinación de cualquier valor a cargo.',
    stem:'¿Cuál es la lectura inicial más precisa?',
    options:[
      {id:'a',text:'Existe, como mínimo, un incumplimiento formal de presentación que debe gestionarse según la norma y el procedimiento aplicable.',rationale:'No presentar una declaración exigida constituye un incumplimiento formal, sin prejuzgar automáticamente el monto sustancial.'},
      {id:'b',text:'Debe asumirse que no existe ningún incumplimiento hasta que haya pago.',rationale:'La obligación formal de declarar puede incumplirse independientemente del pago.'},
      {id:'c',text:'Debe iniciarse remate de bienes de inmediato.',rationale:'Eso salta determinación, exigibilidad y etapas del cobro.'}
    ], correctOptionId:'a', explanation:'Control extensivo exige identificar primero qué obligación formal o sustancial está incumplida y aplicar la ruta correspondiente.', sourceIds:['estatuto-tributario','proc-control-extensivo-0382'], verifiedAt
  },
  {
    id:'q-correccion-dato-01', moduleId:'m6', skillIds:['correccion-inconsistencias','declaraciones'], type:'pjs', difficulty:2,
    case:'Una declaración presenta un error puramente informativo que no modifica el impuesto a cargo ni el saldo a favor. El procedimiento institucional contempla una ruta de corrección de inconsistencias para ese tipo de datos.',
    stem:'¿Qué debe hacerse primero?',
    options:[
      {id:'a',text:'Clasificar el error y verificar si encaja en la ruta específica de corrección de inconsistencias.',rationale:'La naturaleza y efecto del dato determinan la ruta procedimental.'},
      {id:'b',text:'Modificar directamente el impuesto a cargo para que el sistema acepte la corrección.',rationale:'Un error informativo no autoriza cambiar la determinación del tributo.'},
      {id:'c',text:'Trasladarlo automáticamente a cobro coactivo.',rationale:'La inconsistencia informativa debe depurarse antes de inferir una obligación exigible.'}
    ], correctOptionId:'a', explanation:'La DIAN diferencia correcciones informativas de modificaciones que inciden en la determinación tributaria; el primer paso es clasificar correctamente el hallazgo.', sourceIds:['proc-correccion-inconsistencias-0033','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-correccion-dato-02', moduleId:'m6', skillIds:['correccion-inconsistencias','estado-cuenta'], type:'pjs', difficulty:3,
    case:'Al depurar el estado de cuenta detectas que el cambio solicitado alteraría el valor del impuesto determinado y no solo un dato informativo.',
    stem:'¿Cuál enfoque es más adecuado?',
    options:[
      {id:'a',text:'Verificar la regla y el procedimiento de corrección de la declaración aplicable, en vez de tratarlo como simple ajuste informativo.',rationale:'El efecto sobre la determinación tributaria cambia la ruta jurídica.'},
      {id:'b',text:'Usar siempre la misma ruta operativa de inconsistencias porque todos los datos pertenecen a una declaración.',rationale:'No todos los errores tienen el mismo efecto ni procedimiento.'},
      {id:'c',text:'Eliminar el registro anterior sin dejar trazabilidad.',rationale:'Además de improcedente, comprometería calidad y trazabilidad de la información.'}
    ], correctOptionId:'a', explanation:'El criterio decisivo no es solo dónde aparece el dato, sino si la modificación altera la obligación determinada y qué norma regula su corrección.', sourceIds:['proc-correccion-inconsistencias-0033','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-origen-credito-01', moduleId:'m15', skillIds:['devoluciones','saldo-favor','pago-exceso','pago-no-debido'], type:'single', difficulty:2,
    stem:'¿Por qué debe identificarse primero el origen del crédito antes de tramitar una devolución?',
    options:[
      {id:'a',text:'Porque saldo a favor, pago en exceso y pago de lo no debido pueden tener presupuestos, términos y rutas distintas.',rationale:'La clasificación inicial determina qué reglas deben aplicarse.'},
      {id:'b',text:'Porque todos tienen exactamente el mismo término, pero diferente nombre.',rationale:'No existe una regla temporal única para todos esos orígenes.'},
      {id:'c',text:'Porque solo los saldos a favor pueden ser objeto de cualquier devolución.',rationale:'También existen procedimientos para pagos en exceso o de lo no debido, entre otros supuestos.'}
    ], correctOptionId:'a', explanation:'Clasificar correctamente el origen evita trasladar requisitos o términos propios de un trámite a otro.', sourceIds:['estatuto-tributario','decreto-1625-2016','proc-pagos-exceso-0128'], verifiedAt
  },
  {
    id:'q-origen-credito-02', moduleId:'m15', skillIds:['devoluciones','clasificacion'], type:'pjs', difficulty:2,
    case:'Un contribuyente pagó una suma que no estaba jurídicamente obligado a pagar. No estás frente a un saldo a favor liquidado en una declaración.',
    stem:'¿Cómo debe clasificarse inicialmente el caso?',
    options:[
      {id:'a',text:'Como posible pago de lo no debido, sujeto a verificar sus presupuestos y procedimiento.',rationale:'La ausencia de obligación jurídica diferencia este supuesto del saldo a favor declarado.'},
      {id:'b',text:'Como saldo a favor por definición.',rationale:'Un pago no debido no se convierte automáticamente en saldo a favor de una declaración.'},
      {id:'c',text:'Como medida cautelar a favor del contribuyente.',rationale:'Las medidas cautelares pertenecen a otra institución jurídica.'}
    ], correctOptionId:'a', explanation:'El origen del crédito es el primer filtro. Solo después se revisan oportunidad, requisitos, compensación y decisión.', sourceIds:['decreto-1625-2016','proc-pagos-exceso-0128'], verifiedAt
  },
  {
    id:'q-termino-devolucion-01', moduleId:'m15', skillIds:['devoluciones','terminos','saldo-favor'], type:'single', difficulty:2,
    stem:'Como regla general del artículo 854 del Estatuto Tributario, ¿dentro de qué término debe solicitarse la devolución de saldos a favor?',
    options:[
      {id:'a',text:'Dos años después de la fecha de vencimiento del término para declarar, sin perjuicio de reglas especiales.',rationale:'Es la regla general prevista por el artículo 854 para saldos a favor.'},
      {id:'b',text:'Cinco años desde cualquier pago, sin importar el origen del crédito.',rationale:'Traslada una lógica temporal distinta y la convierte indebidamente en regla universal.'},
      {id:'c',text:'Diez días desde la presentación de la declaración.',rationale:'Ese no es el término general de oportunidad del artículo 854.'}
    ], correctOptionId:'a', explanation:'El término de dos años es relevante para saldos a favor, pero no debe extrapolarse automáticamente a todos los tipos de devolución.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-termino-devolucion-02', moduleId:'m15', skillIds:['devoluciones','terminos','pago-exceso'], type:'pjs', difficulty:3,
    case:'Un aspirante aplica automáticamente el término de dos años del artículo 854 a una solicitud fundada en pago en exceso, sin revisar la regulación específica de ese origen.',
    stem:'¿Cuál es el error de razonamiento?',
    options:[
      {id:'a',text:'Convertir una regla aplicable a saldos a favor en un término universal para cualquier devolución.',rationale:'La oportunidad depende del origen y de la regulación específica.'},
      {id:'b',text:'Verificar el origen del crédito antes de contar términos.',rationale:'Eso sería precisamente lo correcto.'},
      {id:'c',text:'Consultar el Decreto 1625 y el procedimiento DIAN correspondiente.',rationale:'Consultar las normas específicas es una actuación adecuada.'}
    ], correctOptionId:'a', explanation:'En PJS, un distractor común consiste en tomar un término verdadero y aplicarlo al supuesto equivocado.', sourceIds:['estatuto-tributario','decreto-1625-2016','proc-pagos-exceso-0128'], verifiedAt
  },
  {
    id:'q-ruta-devolucion-01', moduleId:'m15', skillIds:['devoluciones','rutas-especiales'], type:'single', difficulty:2,
    stem:'¿Qué conclusión es correcta al comparar los procedimientos DIAN de Recaudo-Devoluciones?',
    options:[
      {id:'a',text:'Existen rutas diferenciadas según el origen y tipo de devolución o compensación.',rationale:'El Listado Maestro contiene procedimientos separados para SIE, trámite manual, IVA/retención, pagos en exceso y sentencias, entre otros.'},
      {id:'b',text:'Toda devolución utiliza exactamente el mismo procedimiento y los mismos soportes.',rationale:'La DIAN documenta procedimientos diferenciados.'},
      {id:'c',text:'Las sentencias judiciales nunca pueden relacionarse con compensación de obligaciones administradas por la DIAN.',rationale:'Existe un procedimiento específico de compensación por sentencias y conciliaciones judiciales.'}
    ], correctOptionId:'a', explanation:'Reconocer la familia de procedimientos evita aplicar mecánicamente una ruta diseñada para otro supuesto.', sourceIds:['proc-devoluciones-sie-0124','proc-devoluciones-manual-0125','proc-iva-retencion-0126','proc-pagos-exceso-0128','proc-sentencias-0127'], verifiedAt
  },
  {
    id:'q-ruta-devolucion-02', moduleId:'m15', skillIds:['devoluciones','rutas-especiales'], type:'pjs', difficulty:3,
    case:'Recibes un caso de compensación asociado a una sentencia judicial y, sin clasificarlo, pretendes tramitarlo como devolución ordinaria de saldo a favor de renta por SIE.',
    stem:'¿Qué debes hacer?',
    options:[
      {id:'a',text:'Identificar la naturaleza del caso y revisar el procedimiento específico para sentencias y conciliaciones.',rationale:'La clasificación del origen determina la ruta institucional.'},
      {id:'b',text:'Mantener el flujo de renta porque todos los créditos contra la DIAN son equivalentes.',rationale:'Los procedimientos documentados no son intercambiables.'},
      {id:'c',text:'Enviar el asunto directamente a remate.',rationale:'El remate pertenece al cobro coactivo sobre bienes y no resuelve una compensación por sentencia.'}
    ], correctOptionId:'a', explanation:'La PJS puede medir si identificas el procedimiento correcto antes de ejecutar una actuación conocida pero ajena al supuesto.', sourceIds:['proc-sentencias-0127','proc-devoluciones-sie-0124'], verifiedAt
  },
  {
    id:'q-comp-previa-01', moduleId:'m16', skillIds:['devoluciones','compensacion-previa'], type:'single', difficulty:2,
    stem:'¿Qué principio operativo expresa el artículo 861 del Estatuto Tributario dentro de una devolución?',
    options:[
      {id:'a',text:'Antes de devolver, deben compensarse las deudas y obligaciones vencidas a cargo del contribuyente en los términos de la norma.',rationale:'La compensación previa puede reducir el valor efectivamente devuelto.'},
      {id:'b',text:'Toda solicitud debe devolverse íntegramente sin revisar obligaciones pendientes.',rationale:'Ignora la compensación previa prevista legalmente.'},
      {id:'c',text:'La compensación solo existe después del remate de bienes.',rationale:'Es una figura diferente y puede operar dentro del trámite de devolución.'}
    ], correctOptionId:'a', explanation:'La devolución no se analiza de manera aislada: la existencia de obligaciones compensables puede modificar el valor final a entregar.', sourceIds:['estatuto-tributario','proc-certificacion-obligaciones-0328'], verifiedAt
  },
  {
    id:'q-comp-previa-02', moduleId:'m16', skillIds:['devoluciones','compensacion-previa','estado-cuenta'], type:'pjs', difficulty:3,
    case:'Una solicitud cumple los requisitos para devolver $12 millones, pero la certificación de obligaciones muestra una deuda vencida compensable de $4 millones del mismo contribuyente.',
    stem:'¿Cuál razonamiento es el más adecuado?',
    options:[
      {id:'a',text:'Analizar y efectuar la compensación que legalmente proceda antes de determinar el valor neto a devolver.',rationale:'La certificación de obligaciones sirve precisamente para establecer incidencias sobre el valor de devolución.'},
      {id:'b',text:'Ignorar la deuda porque la solicitud de devolución ya fue presentada.',rationale:'La presentación no elimina la obligación de verificar compensación previa.'},
      {id:'c',text:'Negar automáticamente toda la devolución solo porque existe cualquier deuda.',rationale:'La existencia de una deuda compensable no equivale por sí sola a negar integralmente el crédito reconocido.'}
    ], correctOptionId:'a', explanation:'La actuación correcta requiere cruzar el crédito con las obligaciones compensables y reflejar coherentemente el resultado en la decisión.', sourceIds:['estatuto-tributario','proc-certificacion-obligaciones-0328','proc-iva-retencion-0126'], verifiedAt
  },
  {
    id:'q-calidad-acto-dev-01', moduleId:'m16', skillIds:['devoluciones','acto-administrativo','calidad-expediente'], type:'pjs', difficulty:3,
    case:'El análisis técnico reconoce un valor a devolver, pero el proyecto de acto administrativo contiene una cifra distinta y una causal que no aparece soportada en el expediente.',
    stem:'¿Qué debe hacerse antes de aprobar el acto?',
    options:[
      {id:'a',text:'Conciliar valores, causal y soportes hasta que la decisión sea coherente con el expediente.',rationale:'La trazabilidad y calidad exigen que el acto refleje el análisis y los soportes reales.'},
      {id:'b',text:'Firmar el acto y corregirlo internamente después si el contribuyente reclama.',rationale:'No debe emitirse una decisión inconsistente pudiendo detectarse el error antes.'},
      {id:'c',text:'Eliminar del expediente los soportes que contradicen el proyecto.',rationale:'Eso vulneraría trazabilidad, integridad documental y legalidad.'}
    ], correctOptionId:'a', explanation:'El acto administrativo debe expresar una decisión respaldada por el expediente; la calidad incluye coherencia entre análisis, valores, causales y soportes.', sourceIds:['proc-iva-retencion-0126','proc-devoluciones-manual-0125'], verifiedAt
  },
  {
    id:'q-calidad-acto-dev-02', moduleId:'m16', skillIds:['devoluciones','acto-administrativo','trazabilidad'], type:'pjs', difficulty:3,
    case:'Durante la revisión final detectas que una causal de inadmisión fue seleccionada por plantilla, pero los hechos del expediente no la configuran.',
    stem:'¿Cuál es la actuación más adecuada?',
    options:[
      {id:'a',text:'Corregir el proyecto y utilizar únicamente la causal realmente soportada por hechos y norma, si existe.',rationale:'La decisión debe responder a circunstancias verificadas, no a una plantilla.'},
      {id:'b',text:'Mantener la causal porque ya aparece en el documento generado por el sistema.',rationale:'El sistema no sustituye la validación jurídica y fáctica.'},
      {id:'c',text:'Agregar todas las causales posibles para cubrir cualquier escenario.',rationale:'Incluir causales no configuradas debilita la motivación y la coherencia del acto.'}
    ], correctOptionId:'a', explanation:'Los procedimientos institucionales incorporan verificaciones y causales concretas; automatización o plantillas no eliminan el deber de validar el expediente.', sourceIds:['proc-iva-retencion-0126','proc-devoluciones-manual-0125'], verifiedAt
  }
  ,{
    id:'q-acceso-priv-01', moduleId:'m17', skillIds:['seguridad-informacion','control-acceso','permisos'], type:'pjs', difficulty:2,
    case:'Un funcionario solicita privilegios de administración sobre un sistema de cartera “por si llega a necesitarlos”, aunque sus funciones actuales solo requieren consulta.',
    stem:'¿Qué decisión se ajusta mejor a los controles de seguridad?',
    options:[
      {id:'a',text:'Autorizar únicamente los privilegios necesarios para su función y mantener control sobre accesos elevados.',rationale:'Los privilegios deben responder a competencia y necesidad, no a conveniencia futura.'},
      {id:'b',text:'Entregar acceso administrador porque simplifica solicitudes posteriores.',rationale:'Aumentar privilegios sin necesidad amplía innecesariamente el riesgo.'},
      {id:'c',text:'Compartir temporalmente la cuenta de otro administrador.',rationale:'Compartir credenciales destruye trazabilidad y control individual.'}
    ], correctOptionId:'a', explanation:'El manual de seguridad DIAN exige restringir y autorizar los accesos privilegiados en función de la competencia y mantenerlos actualizados.', sourceIds:['manual-seguridad-dian','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-acceso-priv-02', moduleId:'m17', skillIds:['seguridad-informacion','control-acceso','trazabilidad'], type:'pjs', difficulty:3,
    case:'Una persona cambia de función y ya no necesita un privilegio especial sobre el sistema de recaudo. El acceso sigue activo porque “nunca ha causado problemas”.',
    stem:'¿Qué corresponde hacer?',
    options:[
      {id:'a',text:'Retirar o ajustar oportunamente el privilegio que dejó de estar justificado.',rationale:'Los privilegios deben mantenerse alineados con la necesidad y deshabilitarse cuando cesa.'},
      {id:'b',text:'Conservarlo indefinidamente mientras el usuario sea empleado de la DIAN.',rationale:'La pertenencia a la entidad no justifica todos los niveles de acceso.'},
      {id:'c',text:'Mantenerlo oculto del inventario para evitar trámites de modificación.',rationale:'Eso reduce control y trazabilidad.'}
    ], correctOptionId:'a', explanation:'La gestión de accesos no termina al otorgar un permiso: también exige revisión, actualización y retiro cuando deja de ser necesario.', sourceIds:['manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-cia-01', moduleId:'m17', skillIds:['seguridad-informacion','calidad-datos'], type:'single', difficulty:1,
    stem:'En seguridad de la información, ¿qué significa proteger la integridad de los datos?',
    options:[
      {id:'a',text:'Evitar alteraciones no autorizadas y conservar exactitud y completitud de la información.',rationale:'La integridad se relaciona con la corrección y no alteración indebida de la información.'},
      {id:'b',text:'Garantizar que absolutamente toda la información sea pública.',rationale:'Eso confunde integridad con publicidad y además ignora reservas y controles de acceso.'},
      {id:'c',text:'Mantener los sistemas apagados para que nadie los modifique.',rationale:'La seguridad también debe preservar disponibilidad para usuarios autorizados.'}
    ], correctOptionId:'a', explanation:'Confidencialidad, integridad y disponibilidad son dimensiones distintas y complementarias de protección de la información.', sourceIds:['manual-seguridad-dian','modelo-seguridad-dian'], verifiedAt
  },
  {
    id:'q-cia-02', moduleId:'m17', skillIds:['seguridad-informacion','disponibilidad','confidencialidad'], type:'pjs', difficulty:2,
    case:'Para impedir filtraciones, un equipo propone bloquear permanentemente el acceso al sistema de cartera incluso a los funcionarios autorizados que deben gestionar expedientes.',
    stem:'¿Por qué la solución es inadecuada?',
    options:[
      {id:'a',text:'Porque protege confidencialidad sacrificando innecesariamente disponibilidad para usuarios autorizados.',rationale:'La seguridad busca equilibrar dimensiones, no eliminar la operación legítima.'},
      {id:'b',text:'Porque todo funcionario debería tener acceso sin autenticación.',rationale:'Eso comprometería confidencialidad y control.'},
      {id:'c',text:'Porque la disponibilidad solo importa para servicios externos al ciudadano.',rationale:'También importa para los procesos internos que requieren acceso oportuno.'}
    ], correctOptionId:'a', explanation:'Un control de seguridad debe proteger la información sin impedir de manera injustificada su disponibilidad para las funciones autorizadas.', sourceIds:['manual-seguridad-dian','modelo-seguridad-dian'], verifiedAt
  },
  {
    id:'q-cambio-sistema-01', moduleId:'m17', skillIds:['sistemas-informacion','gestion-cambios'], type:'pjs', difficulty:2,
    case:'Un ajuste en el sistema de cartera parece sencillo y un usuario propone aplicarlo directamente en producción sin validación porque “solo cambia un campo”.',
    stem:'¿Qué criterio debe prevalecer?',
    options:[
      {id:'a',text:'Aplicar el cambio conforme a políticas, procedimientos, estándares y controles institucionales.',rationale:'La función del empleo exige que creación, modificación y mantenimiento respeten el marco institucional.'},
      {id:'b',text:'Modificar directamente si el usuario conoce bien la pantalla.',rationale:'El conocimiento funcional no reemplaza controles de cambio, autorización y trazabilidad.'},
      {id:'c',text:'Evitar cualquier cambio futuro para eliminar el riesgo.',rationale:'La gestión segura permite cambios controlados; no implica inmovilizar los sistemas.'}
    ], correctOptionId:'a', explanation:'El MERF vincula la gestión de sistemas corporativos con políticas, planes, procedimientos y estándares institucionales vigentes.', sourceIds:['merf-ct-cr-3007','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-cambio-sistema-02', moduleId:'m17', skillIds:['sistemas-informacion','trazabilidad','calidad-datos'], type:'pjs', difficulty:3,
    case:'Después de una modificación, varios saldos aparecen distintos. No existe registro claro de quién hizo el cambio ni de la versión previa.',
    stem:'¿Qué debilidad se evidencia principalmente?',
    options:[
      {id:'a',text:'Falta de trazabilidad y control de cambios sobre información crítica.',rationale:'Sin registro de autor, motivo y estado previo se dificulta verificar y revertir alteraciones.'},
      {id:'b',text:'Exceso de publicidad de la información.',rationale:'El problema descrito no es de acceso público sino de control y reconstrucción del cambio.'},
      {id:'c',text:'Uso insuficiente de medidas cautelares.',rationale:'Las cautelares no resuelven la integridad técnica del sistema.'}
    ], correctOptionId:'a', explanation:'La gestión profesional del sistema requiere evidencia de cambios y capacidad de reconstruir qué ocurrió sobre los datos.', sourceIds:['manual-seguridad-dian','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-basicas-01', moduleId:'m18', skillIds:['comportamentales-basicas','conductas-observables'], type:'single', difficulty:1,
    stem:'¿Cuál conjunto corresponde a las seis competencias comportamentales básicas del Diccionario DIAN?',
    options:[
      {id:'a',text:'Adaptabilidad, Comportamiento ético, Comunicación efectiva, Orientación al logro, Orientación al usuario y al ciudadano y Trabajo en equipo.',rationale:'Es el conjunto básico definido por la Resolución 65 de 2024.'},
      {id:'b',text:'Liderazgo militar, negociación comercial, creatividad artística, ventas, logística y programación.',rationale:'No corresponde al diccionario institucional.'},
      {id:'c',text:'Solo Honestidad, Respeto, Compromiso, Diligencia y Justicia.',rationale:'Esos son valores del Código de Integridad, no el conjunto de competencias comportamentales básicas.'}
    ], correctOptionId:'a', explanation:'Conviene separar competencias comportamentales de valores de integridad: se relacionan, pero son instrumentos distintos.', sourceIds:['res-65-2024'], verifiedAt
  },
  {
    id:'q-basicas-02', moduleId:'m18', skillIds:['comportamentales-basicas','orientacion-usuario'], type:'pjs', difficulty:2,
    case:'Un ciudadano llega confundido por un trámite. El servidor escucha, adapta la explicación al nivel de comprensión del usuario y verifica que haya entendido los pasos sin prometer resultados que no controla.',
    stem:'¿Qué competencia básica se evidencia de forma más directa?',
    options:[
      {id:'a',text:'Orientación al usuario y al ciudadano.',rationale:'La conducta se centra en comprender la necesidad y facilitar una atención clara dentro del marco institucional.'},
      {id:'b',text:'Medidas cautelares.',rationale:'Es una competencia funcional de cartera, no una conducta comportamental básica.'},
      {id:'c',text:'Procesos concursales.',rationale:'No describe el comportamiento planteado.'}
    ], correctOptionId:'a', explanation:'Las competencias se reconocen mejor mediante conductas observables que mediante definiciones memorizadas.', sourceIds:['res-65-2024'], verifiedAt
  },
  {
    id:'q-basica-especifica-01', moduleId:'m18', skillIds:['comportamentales-basicas','comportamentales-especificas','niveles'], type:'single', difficulty:2,
    stem:'¿Qué distingue al perfil comportamental específico de CT-CR-3007 frente al piso básico?',
    options:[
      {id:'a',text:'La ficha exige niveles concretos superiores para Comportamiento ético, Adaptabilidad, Comunicación efectiva y Trabajo en equipo.',rationale:'CT-CR-3007 fija Ético 4 y las otras tres en nivel 3.'},
      {id:'b',text:'Elimina todas las competencias básicas y las reemplaza por conocimientos tributarios.',rationale:'Las competencias básicas siguen aplicando; la ficha añade niveles específicos.'},
      {id:'c',text:'Convierte Honestidad en una competencia técnica de nivel 5.',rationale:'No existe esa configuración en la ficha.'}
    ], correctOptionId:'a', explanation:'El MERF combina competencias básicas con exigencias específicas de nivel para determinadas competencias del empleo.', sourceIds:['merf-ct-cr-3007','res-65-2024'], verifiedAt
  },
  {
    id:'q-basica-especifica-02', moduleId:'m18', skillIds:['comportamentales-especificas','niveles'], type:'pjs', difficulty:2,
    case:'Dos empleos comparten la competencia “Comunicación efectiva”, pero uno exige nivel 1 y CT-CR-3007 exige nivel 3.',
    stem:'¿Qué conclusión es correcta?',
    options:[
      {id:'a',text:'El mismo nombre de competencia puede implicar conductas observables distintas según el nivel exigido.',rationale:'El diccionario organiza niveles de desarrollo y la ficha fija cuál requiere el empleo.'},
      {id:'b',text:'El nivel no importa porque el nombre de la competencia es suficiente.',rationale:'Ignora precisamente la graduación definida por el diccionario y el MERF.'},
      {id:'c',text:'Nivel 3 significa responder siempre en el extremo máximo de una escala Likert.',rationale:'El nivel describe desarrollo conductual; no es una instrucción para marcar respuestas.'}
    ], correctOptionId:'a', explanation:'Para prepararte debes leer la conducta esperada en el nivel concreto, no solo reconocer el nombre de la competencia.', sourceIds:['merf-ct-cr-3007','res-65-2024'], verifiedAt
  },
  {
    id:'q-etico-n4-01', moduleId:'m19', skillIds:['comportamiento-etico','nivel-4'], type:'single', difficulty:2,
    stem:'¿Qué caracteriza mejor el nivel 4 de Comportamiento ético requerido por CT-CR-3007?',
    options:[
      {id:'a',text:'Además de actuar íntegramente, promueve prácticas basadas en valores y puede convertirse en referente organizacional.',rationale:'El nivel 4 representa un desarrollo que trasciende el cumplimiento individual.'},
      {id:'b',text:'Cumplir únicamente cuando existe supervisión directa.',rationale:'Eso contradice el sentido de comportamiento ético.'},
      {id:'c',text:'Priorizar metas numéricas aunque se deban omitir controles.',rationale:'El logro no justifica abandonar integridad o legalidad.'}
    ], correctOptionId:'a', explanation:'La Resolución 65 describe en el nivel 4 una conducta que fomenta estrategias y prácticas basadas en valores institucionales y sirve como referencia de integridad.', sourceIds:['res-65-2024','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-etico-n4-02', moduleId:'m19', skillIds:['comportamiento-etico','nivel-4','integridad'], type:'pjs', difficulty:3,
    case:'Un equipo normaliza un atajo que omite un control porque “siempre se ha hecho así”. Un Gestor II identifica el riesgo.',
    stem:'¿Qué conducta refleja mejor Comportamiento ético nivel 4?',
    options:[
      {id:'a',text:'Rechazar el atajo, explicar el riesgo y promover una práctica de trabajo alineada con valores y controles institucionales.',rationale:'No se limita a proteger su actuación individual; contribuye a elevar el estándar del equipo.'},
      {id:'b',text:'Evitar usar personalmente el atajo pero callar para no incomodar al grupo.',rationale:'Es una respuesta más pasiva y no refleja la dimensión de promoción esperada en el nivel alto.'},
      {id:'c',text:'Usarlo mientras no exista una queja ciudadana.',rationale:'La ausencia de queja no legitima una práctica contraria a los controles.'}
    ], correctOptionId:'a', explanation:'El nivel 4 implica contribuir activamente a una cultura de integridad, no únicamente evitar una conducta impropia propia.', sourceIds:['res-65-2024','codigo-integridad-dian'], verifiedAt
  },
  {
    id:'q-nivel3-02', moduleId:'m19', skillIds:['comunicacion-efectiva','trabajo-equipo','nivel-3'], type:'pjs', difficulty:3,
    case:'Debes comunicar un cambio complejo a un equipo con perfiles distintos y luego coordinar la implementación conjunta.',
    stem:'¿Qué actuación refleja mejor las competencias nivel 3 requeridas?',
    options:[
      {id:'a',text:'Escoger métodos de comunicación adecuados a los interlocutores, verificar comprensión y promover colaboración valorando aportes del equipo.',rationale:'Integra conductas observables de Comunicación efectiva y Trabajo en equipo nivel 3.'},
      {id:'b',text:'Enviar el mismo mensaje técnico sin contexto y asumir que todos lo interpretarán igual.',rationale:'No adapta el método ni considera barreras o impacto.'},
      {id:'c',text:'Tomar todas las decisiones solo para evitar discusiones.',rationale:'Debilita la colaboración y el aprovechamiento de aportes del equipo.'}
    ], correctOptionId:'a', explanation:'Nivel 3 exige comunicación intencional y colaboración activa, no solo transmitir información o dividir tareas.', sourceIds:['res-65-2024','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-likert-consistencia-01', moduleId:'m19', skillIds:['comportamentales','likert','consistencia'], type:'single', difficulty:2,
    stem:'¿Qué elemento de diseño exige la especificación técnica de DIAN 2676 para las afirmaciones comportamentales?',
    options:[
      {id:'a',text:'Combinar afirmaciones directas e inversas, con al menos 30% de clave inversa.',rationale:'La especificación establece esa proporción mínima como parte del diseño.'},
      {id:'b',text:'Que todas las afirmaciones estén redactadas en sentido positivo.',rationale:'El documento exige precisamente incluir dirección inversa.'},
      {id:'c',text:'Que todas tengan una única respuesta jurídicamente correcta.',rationale:'Son instrumentos de autorreporte, no PJS funcional.'}
    ], correctOptionId:'a', explanation:'La direccionalidad directa/inversa ayuda a controlar patrones simples y se complementa con análisis de consistencia y deseabilidad social.', sourceIds:['cnsc-2676-especificaciones-pruebas'], verifiedAt
  },
  {
    id:'q-likert-consistencia-02', moduleId:'m19', skillIds:['comportamentales','likert','consistencia'], type:'pjs', difficulty:2,
    case:'Una afirmación dice “Me adapto con facilidad cuando cambian los procedimientos” y otra, en sentido inverso, plantea “Cuando cambian las reglas prefiero seguir trabajando exactamente como antes”.',
    stem:'¿Cómo conviene abordarlas?',
    options:[
      {id:'a',text:'Leer la dirección de cada afirmación y responder según la conducta real, procurando consistencia conceptual.',rationale:'Las afirmaciones inversas requieren comprender qué conducta expresan, no repetir mecánicamente una posición de la escala.'},
      {id:'b',text:'Marcar siempre la primera opción visible sin importar el contenido.',rationale:'Eso produce un patrón mecánico ajeno al constructo medido.'},
      {id:'c',text:'Buscar una clave jurídica en el Estatuto Tributario.',rationale:'No es una pregunta funcional de norma tributaria.'}
    ], correctOptionId:'a', explanation:'En Likert no se trata de hallar la “respuesta legal”, sino de comprender la afirmación y responder de forma auténtica y consistente.', sourceIds:['cnsc-2676-especificaciones-pruebas','res-65-2024'], verifiedAt
  },
  {
    id:'q-valores-dian-01', moduleId:'m20', skillIds:['integridad','valores-dian'], type:'single', difficulty:1,
    stem:'¿Cuáles son los cinco valores destacados por el Código de Integridad DIAN?',
    options:[
      {id:'a',text:'Honestidad, respeto, compromiso, diligencia y justicia.',rationale:'Son los cinco valores institucionales del código.'},
      {id:'b',text:'Rentabilidad, competitividad, ventas, crecimiento y exclusividad.',rationale:'No corresponden al Código de Integridad del servicio público DIAN.'},
      {id:'c',text:'Cobro, recaudo, fiscalización, aduanas y devoluciones.',rationale:'Son ámbitos funcionales, no valores.'}
    ], correctOptionId:'a', explanation:'Los valores funcionan como criterios de conducta y deben distinguirse de competencias técnicas o procesos institucionales.', sourceIds:['codigo-integridad-dian'], verifiedAt
  },
  {
    id:'q-valores-dian-02', moduleId:'m20', skillIds:['integridad','justicia','diligencia'], type:'pjs', difficulty:2,
    case:'Un servidor tiene alta carga de trabajo. Para avanzar más rápido decide omitir la revisión de soportes de algunos ciudadanos escogidos al azar.',
    stem:'¿Qué combinación de valores resulta especialmente comprometida?',
    options:[
      {id:'a',text:'Diligencia y justicia.',rationale:'La falta de cuidado compromete diligencia y el trato arbitrario compromete justicia/imparcialidad.'},
      {id:'b',text:'Compromiso y respeto únicamente, porque la calidad no forma parte de la integridad.',rationale:'La diligencia exige cuidado y calidad en el cumplimiento de deberes.'},
      {id:'c',text:'Ninguno, porque reducir tiempos siempre es prioritario.',rationale:'La eficiencia no legitima decisiones arbitrarias ni negligentes.'}
    ], correctOptionId:'a', explanation:'El Código de Integridad no opone resultados a valores: diligencia exige calidad y justicia exige decisiones imparciales y objetivas.', sourceIds:['codigo-integridad-dian'], verifiedAt
  },
  {
    id:'q-integridad-presion-01', moduleId:'m20', skillIds:['integridad','dilemas-eticos','reserva-informacion'], type:'pjs', difficulty:3,
    case:'Un superior te pide por mensajería informal enviar datos tributarios a una persona externa “porque el asunto es urgente”. No existe autorización ni competencia identificada para ese acceso.',
    stem:'¿Cuál es la mejor actuación?',
    options:[
      {id:'a',text:'No entregar la información por esa vía; verificar autorización, competencia y canal institucional, y escalar/documentar si corresponde.',rationale:'La urgencia no elimina controles de acceso, reserva ni integridad.'},
      {id:'b',text:'Enviarla porque una instrucción jerárquica siempre sustituye los controles de seguridad.',rationale:'Las instrucciones también están sometidas a legalidad y políticas de seguridad.'},
      {id:'c',text:'Publicarla para que todos tengan el mismo acceso y evitar trato desigual.',rationale:'La igualdad no convierte información protegida en pública.'}
    ], correctOptionId:'a', explanation:'Integridad exige cumplir el objetivo institucional sin sacrificar reserva, autorización y seguridad de la información.', sourceIds:['codigo-integridad-dian','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-integridad-presion-02', moduleId:'m20', skillIds:['integridad','dilemas-eticos','honestidad'], type:'pjs', difficulty:3,
    case:'Un compañero propone alterar retrospectivamente un registro para que un indicador mensual parezca cumplido. Asegura que el trámite real “casi estaba terminado”.',
    stem:'¿Qué actuación se ajusta mejor al Código de Integridad?',
    options:[
      {id:'a',text:'Rechazar la alteración, preservar la trazabilidad y reportar/gestionar el hecho por los canales correspondientes.',rationale:'Honestidad y diligencia exigen información veraz y trazable.'},
      {id:'b',text:'Modificar el registro si la meta institucional es importante.',rationale:'Una meta no justifica falsificar la evidencia.'},
      {id:'c',text:'Cambiarlo solo si nadie externo puede verlo.',rationale:'La integridad aplica también a los registros internos.'}
    ], correctOptionId:'a', explanation:'La presión por resultados no transforma un registro inexacto en aceptable; la información institucional debe conservar verdad y trazabilidad.', sourceIds:['codigo-integridad-dian','manual-seguridad-dian'], verifiedAt
  },
  {
    id:'q-metodo-cera-01', moduleId:'m21', skillIds:['pjs','estrategia-examen','razonamiento'], type:'single', difficulty:1,
    stem:'En el método didáctico C-E-R-A de Umbral, ¿qué significan las cuatro letras?',
    options:[
      {id:'a',text:'Competencia, Etapa, Regla y Actuación.',rationale:'Son los cuatro filtros usados por Umbral para estructurar el razonamiento situacional.'},
      {id:'b',text:'Cartera, Embargo, Remate y Avalúo.',rationale:'Son conceptos del cobro, pero no el método didáctico.'},
      {id:'c',text:'Consulta, Evaluación, Recurso y Archivo.',rationale:'No corresponde al método definido.'}
    ], correctOptionId:'a', explanation:'C-E-R-A no es una metodología oficial CNSC; es una herramienta pedagógica de Umbral para aplicar el formato PJS al contenido del empleo.', sourceIds:['cnsc-2676-especificaciones-pruebas','merf-ct-cr-3007'], verifiedAt
  },
  {
    id:'q-metodo-cera-02', moduleId:'m21', skillIds:['pjs','estrategia-examen','razonamiento'], type:'pjs', difficulty:3,
    case:'En una pregunta reconoces que el “remate” es una figura real del cobro, pero el caso apenas informa que se identificó un bien y todavía no se han surtido actuaciones intermedias necesarias.',
    stem:'¿Qué filtro C-E-R-A evita principalmente caer en el distractor?',
    options:[
      {id:'a',text:'Etapa: verificar en qué momento real del procedimiento se encuentra el expediente.',rationale:'Una figura jurídicamente existente puede ser incorrecta si corresponde a un momento posterior.'},
      {id:'b',text:'Actuación: escoger la opción con el verbo más fuerte.',rationale:'La intensidad del verbo no determina corrección jurídica.'},
      {id:'c',text:'Regla: ignorar los hechos y recordar únicamente el nombre de la institución.',rationale:'La regla debe aplicarse a los hechos, no reemplazarlos.'}
    ], correctOptionId:'a', explanation:'En PJS, muchos distractores son verdaderos en abstracto pero incorrectos en la etapa descrita.', sourceIds:['cnsc-2676-especificaciones-pruebas','proc-remate-0391','proc-avaluo-0389'], verifiedAt
  },
  {
    id:'q-distractor-01', moduleId:'m21', skillIds:['pjs','distractores','razonamiento'], type:'pjs', difficulty:3,
    case:'Una opción propone entregar información reservada “para cumplir con mayor rapidez el término de respuesta”. El término de respuesta sí es real.',
    stem:'¿Qué tipo de distractor representa mejor?',
    options:[
      {id:'a',text:'Atajo por eficiencia: usa una finalidad válida para sacrificar una garantía o límite jurídico.',rationale:'Cumplir el término no permite ignorar una reserva legal.'},
      {id:'b',text:'Opción correcta porque toda actuación más rápida es preferible.',rationale:'La eficiencia opera dentro de legalidad y garantías.'},
      {id:'c',text:'Error exclusivamente aritmético.',rationale:'El problema es normativo/procedimental, no de cálculo.'}
    ], correctOptionId:'a', explanation:'Reconocer la lógica del distractor permite descartar opciones que contienen una verdad parcial pero la aplican sacrificando otra regla decisiva.', sourceIds:['cnsc-2676-especificaciones-pruebas','ley-1712-2014'], verifiedAt
  },
  {
    id:'q-distractor-02', moduleId:'m21', skillIds:['pjs','distractores','razonamiento'], type:'pjs', difficulty:3,
    case:'El caso no indica que el mandamiento de pago haya sido notificado. Una opción afirma que, “como ya fue notificado”, debe contarse un efecto jurídico desde esa fecha inventada.',
    stem:'¿Cuál es el defecto principal de esa opción?',
    options:[
      {id:'a',text:'Introduce un hecho que el caso no suministra.',rationale:'Una respuesta no puede completar el expediente con supuestos favorables a su conclusión.'},
      {id:'b',text:'Usa una institución jurídica demasiado conocida.',rationale:'Que una institución sea conocida no la vuelve incorrecta.'},
      {id:'c',text:'Tiene una redacción extensa.',rationale:'La longitud no determina su validez.'}
    ], correctOptionId:'a', explanation:'Una PJS exige razonar con los hechos dados. Inventar notificación, ejecutoria, pago o garantía puede cambiar artificialmente la respuesta.', sourceIds:['cnsc-2676-especificaciones-pruebas','proc-mandamiento-0270'], verifiedAt
  },
  {
    id:'q-cuaderno-error-01', moduleId:'m22', skillIds:['practica-adaptativa','errores','metacognicion'], type:'single', difficulty:1,
    stem:'Después de fallar una pregunta, ¿qué registro es más útil para una práctica adaptativa posterior?',
    options:[
      {id:'a',text:'Tipo de error, regla que faltó, por qué el distractor parecía plausible y fuente que resuelve la duda.',rationale:'Ese registro permite convertir el fallo en una señal accionable para el siguiente repaso.'},
      {id:'b',text:'Solo una captura de pantalla de la letra correcta.',rationale:'La letra no explica el modelo mental que produjo el error.'},
      {id:'c',text:'Eliminar la pregunta para no volver a verla.',rationale:'Evitar el error impide comprobar si el aprendizaje se consolidó.'}
    ], correctOptionId:'a', explanation:'Umbral usa el cuaderno de errores como mecanismo pedagógico: clasificar la causa del fallo permite seleccionar mejor la práctica posterior.', sourceIds:['learning-science-dunlosky-2013'], verifiedAt
  },
  {
    id:'q-cuaderno-error-02', moduleId:'m22', skillIds:['practica-adaptativa','errores','razonamiento'], type:'pjs', difficulty:2,
    case:'Fallaste una pregunta de cobro porque confundiste avalúo del bien con liquidación del crédito. Ya leíste la explicación.',
    stem:'¿Qué siguiente paso aporta más al aprendizaje?',
    options:[
      {id:'a',text:'Registrar la confusión conceptual y resolver más adelante un caso distinto que obligue a separar valor del bien y valor de la deuda.',rationale:'Combina explicación con práctica de recuperación en un contexto nuevo.'},
      {id:'b',text:'Memorizar que la respuesta anterior era la opción B sin revisar la diferencia conceptual.',rationale:'La letra no se transfiere a un caso nuevo.'},
      {id:'c',text:'Marcar la habilidad como dominada porque ya viste la solución.',rationale:'Ver la solución no demuestra recuperación independiente posterior.'}
    ], correctOptionId:'a', explanation:'El objetivo no es recordar la pregunta original, sino corregir la regla mental que produjo el error y comprobarla en otra situación.', sourceIds:['learning-science-dunlosky-2013','proc-avaluo-0389','proc-liquidacion-credito-0390'], verifiedAt
  },
  {
    id:'q-repaso-espaciado-01', moduleId:'m22', skillIds:['practica-adaptativa','repaso-espaciado','dominio'], type:'single', difficulty:1,
    stem:'¿Qué dos técnicas recibieron una valoración de alta utilidad en la revisión de Dunlosky y colaboradores usada para el diseño pedagógico de Umbral?',
    options:[
      {id:'a',text:'Pruebas de práctica y práctica distribuida.',rationale:'La revisión las calificó como técnicas de alta utilidad en múltiples condiciones.'},
      {id:'b',text:'Relectura y subrayado como únicas estrategias.',rationale:'La revisión las valoró con menor utilidad general que las pruebas de práctica y la distribución.'},
      {id:'c',text:'Memorizar respuestas inmediatamente antes del examen.',rationale:'No corresponde a las técnicas destacadas en la revisión.'}
    ], correctOptionId:'a', explanation:'La aplicación usa esta evidencia para favorecer recuperación activa y repaso distribuido; es una fuente pedagógica, no normativa de CNSC.', sourceIds:['learning-science-dunlosky-2013'], verifiedAt
  },
  {
    id:'q-repaso-espaciado-02', moduleId:'m22', skillIds:['practica-adaptativa','repaso-espaciado','dominio'], type:'pjs', difficulty:2,
    case:'Respondes correctamente una pregunta segundos después de leer la explicación por primera vez.',
    stem:'¿Por qué Umbral no debería interpretar ese único acierto como dominio estable?',
    options:[
      {id:'a',text:'Porque conviene comprobar recuperación en una sesión posterior y no solo rendimiento inmediato con la información fresca.',rationale:'La práctica distribuida busca confirmar que la regla puede recuperarse tras un intervalo.'},
      {id:'b',text:'Porque toda respuesta correcta debe contarse como incorrecta la primera vez.',rationale:'El acierto sí aporta evidencia, pero no suficiente para afirmar dominio estable.'},
      {id:'c',text:'Porque solo la lectura pasiva puede producir dominio.',rationale:'La evidencia pedagógica favorece pruebas de práctica y distribución.'}
    ], correctOptionId:'a', explanation:'La regla de dominio de Umbral es deliberadamente conservadora: combina rendimiento con confirmación posterior.', sourceIds:['learning-science-dunlosky-2013'], verifiedAt
  },
  {
    id:'q-simulacro-modo-01', moduleId:'m23', skillIds:['simulacros','estrategia-examen'], type:'single', difficulty:1,
    stem:'¿Qué diferencia debe conservar Umbral entre modo aprendizaje y modo simulacro?',
    options:[
      {id:'a',text:'Aprendizaje puede dar feedback y fuentes tras el intento; simulacro reserva explicaciones hasta finalizar.',rationale:'Separar funciones permite aprender con corrección inmediata y medir luego desempeño sin ayudas.'},
      {id:'b',text:'Ambos deben mostrar la respuesta correcta antes de que el usuario elija.',rationale:'Eso impediría evaluar recuperación o decisión independiente.'},
      {id:'c',text:'El simulacro debe permitir consultar la fuente de cada pregunta antes de responder.',rationale:'Eso convertiría la medición en una sesión guiada de estudio.'}
    ], correctOptionId:'a', explanation:'El simulacro mide transferencia y mezcla de habilidades; el modo aprendizaje está diseñado para corregir y construir modelos mentales.', sourceIds:['cnsc-2676-especificaciones-pruebas','learning-science-dunlosky-2013'], verifiedAt
  },
  {
    id:'q-simulacro-modo-02', moduleId:'m23', skillIds:['simulacros','estrategia-examen'], type:'pjs', difficulty:2,
    case:'Un estudiante hace simulacros completos todos los días, revisa únicamente el porcentaje final y nunca estudia las explicaciones ni vuelve sobre sus debilidades.',
    stem:'¿Cuál ajuste es más útil?',
    options:[
      {id:'a',text:'Alternar aprendizaje/práctica enfocada con simulacros periódicos y revisar los errores entre mediciones.',rationale:'El simulacro identifica brechas; la práctica posterior es la que permite intervenirlas.'},
      {id:'b',text:'Aumentar todavía más los simulacros y evitar revisar errores para no memorizar.',rationale:'Repetir medición sin retroalimentación no corrige las causas del fallo.'},
      {id:'c',text:'Abandonar toda práctica de recuperación y limitarse a releer el material.',rationale:'La evidencia pedagógica favorece pruebas de práctica, no solo relectura.'}
    ], correctOptionId:'a', explanation:'Medición y aprendizaje cumplen funciones diferentes; el mejor ciclo usa el resultado para decidir qué estudiar y practicar después.', sourceIds:['learning-science-dunlosky-2013'], verifiedAt
  },
  {
    id:'q-postmortem-01', moduleId:'m23', skillIds:['simulacros','analisis-errores','dominio'], type:'pjs', difficulty:2,
    case:'Obtienes 72% en dos simulacros. En el primero fallaste casi todo por desconocer devoluciones; en el segundo conocías la norma, pero perdiste puntos por leer mal fechas y etapas.',
    stem:'¿Por qué el mismo porcentaje no debería producir el mismo plan de estudio?',
    options:[
      {id:'a',text:'Porque el patrón de error revela necesidades diferentes: contenido en un caso y técnica de lectura/razonamiento en el otro.',rationale:'El porcentaje global oculta la causa de los fallos.'},
      {id:'b',text:'Porque el puntaje nunca debe utilizarse para nada.',rationale:'El puntaje es útil como indicador, pero necesita descomponerse para orientar acciones.'},
      {id:'c',text:'Porque todos los errores deben tratarse únicamente con más lectura.',rationale:'Errores de etapa o lectura pueden requerir práctica situacional, no solo contenido adicional.'}
    ], correctOptionId:'a', explanation:'El postmortem convierte una nota agregada en decisiones concretas: módulo, habilidad, tipo de distractor y causa del error.', sourceIds:['learning-science-dunlosky-2013','cnsc-2676-especificaciones-pruebas'], verifiedAt
  },
  {
    id:'q-postmortem-02', moduleId:'m23', skillIds:['simulacros','analisis-errores','dominio'], type:'pjs', difficulty:3,
    case:'En un simulacro respondiste correctamente varias preguntas, pero al revisarlas reconoces que elegiste por intuición y no podrías explicar la regla aplicada.',
    stem:'¿Cómo conviene clasificarlas para el plan siguiente?',
    options:[
      {id:'a',text:'Como aciertos frágiles que merecen verificación posterior, no como evidencia automática de dominio.',rationale:'La respuesta correcta puede ocultar azar o reconocimiento superficial.'},
      {id:'b',text:'Como habilidades dominadas de forma definitiva porque el sistema marcó verde.',rationale:'El resultado binario no informa por sí solo la solidez del razonamiento.'},
      {id:'c',text:'Como errores obligatorios y restarles puntos retroactivamente.',rationale:'El puntaje del simulacro no debe alterarse; lo que cambia es la interpretación pedagógica.'}
    ], correctOptionId:'a', explanation:'El análisis posterior debe distinguir conocimiento estable de aciertos inseguros para decidir qué recuperar nuevamente.', sourceIds:['learning-science-dunlosky-2013'], verifiedAt
  }


  ,{
    id:'q-ear-indice-01', moduleId:'m7', skillIds:['ear','recaudo','indice-consignacion'], type:'pjs', difficulty:2,
    case:'Una EAR recibió correctamente pagos y transmitió la información sin inconsistencias, pero trasladó los recursos a la cuenta correspondiente después de la oportunidad aplicable.',
    stem:'¿Qué dimensión del servicio debe analizarse primero?',
    options:[
      {id:'a',text:'La consignación de los recursos recaudados y su oportunidad.',rationale:'El hecho problemático es el traslado tardío del dinero, no la recepción ni la calidad del archivo.'},
      {id:'b',text:'La exactitud del NIT escrito por el contribuyente.',rationale:'El caso no reporta un error de verificación del documento.'},
      {id:'c',text:'La existencia de un proceso concursal del contribuyente.',rationale:'No hay un hecho concursal y ese tema no explica el incumplimiento de la EAR.'}
    ], correctOptionId:'a', explanation:'En EAR conviene separar recepción, transmisión de información y consignación. El índice de consignación se relaciona con el tiempo durante el cual la entidad puede conservar los recursos recaudados.', sourceIds:['proc-indice-consignacion-0029','res-227-2025'], verifiedAt
  },
  {
    id:'q-ear-indice-02', moduleId:'m7', skillIds:['ear','recaudo','calidad-datos'], type:'pjs', difficulty:3,
    case:'En una revisión aparecen dos novedades: varios archivos fueron transmitidos tarde y, por separado, se detecta una consignación extemporánea de recursos.',
    stem:'¿Cuál enfoque es más correcto?',
    options:[
      {id:'a',text:'Clasificar cada incumplimiento según la obligación afectada y aplicar el procedimiento que corresponda a cada conducta.',rationale:'Transmisión y consignación son obligaciones diferenciables; la consecuencia debe partir de la conducta probada.'},
      {id:'b',text:'Tratar ambas novedades como un único error de digitación porque pertenecen a la misma EAR.',rationale:'Compartir sujeto no vuelve idénticas las conductas.'},
      {id:'c',text:'Ignorar la transmisión tardía si el dinero finalmente llegó.',rationale:'La oportunidad de la información también forma parte del control del servicio de recaudo.'}
    ], correctOptionId:'a', explanation:'La auditoría no debe colapsar hechos diferentes en una sola etiqueta. Identifica obligación, evidencia y consecuencia para cada novedad.', sourceIds:['proc-indice-consignacion-0029','proc-recepcion-ear-0031','proc-sanciones-ear-0030'], verifiedAt
  },
  {
    id:'q-persuasivo-naturaleza-01', moduleId:'m10', skillIds:['cobro-persuasivo','competencia','cobro-coactivo'], type:'pjs', difficulty:2,
    case:'Un funcionario llamó al deudor, le informó las obligaciones pendientes y le explicó alternativas para normalizar voluntariamente la cartera. Aún no se ha expedido mandamiento de pago.',
    stem:'¿Cómo debe caracterizarse esa gestión?',
    options:[
      {id:'a',text:'Como gestión persuasiva previa orientada al pago voluntario, no como inicio automático de la ejecución coactiva.',rationale:'La gestión descrita busca normalización voluntaria y no contiene el acto que estructura el cobro coactivo.'},
      {id:'b',text:'Como remate de bienes porque ya existe contacto con el deudor.',rationale:'El contacto no equivale a ejecución sobre activos.'},
      {id:'c',text:'Como decisión que extingue la obligación por haber sido comunicada.',rationale:'Informar la deuda no la extingue.'}
    ], correctOptionId:'a', explanation:'La DIAN ha reiterado que el cobro persuasivo es una instancia previa para promover pago voluntario; no es, por sí solo, ejercicio de ejecución coactiva.', sourceIds:['concepto-cobro-persuasivo-4229-2026','proc-inicio-cobro-0269'], verifiedAt
  },
  {
    id:'q-persuasivo-naturaleza-02', moduleId:'m10', skillIds:['cobro-persuasivo','medidas-cautelares','razonamiento'], type:'pjs', difficulty:4,
    case:'Una opción de respuesta afirma: “Como todavía se está realizando cobro persuasivo, jurídicamente es imposible que exista cualquier medida preventiva relacionada con la deuda”.',
    stem:'¿Qué problema tiene esa afirmación?',
    options:[
      {id:'a',text:'Confunde la naturaleza no coactiva del contacto persuasivo con las reglas propias de oportunidad de las medidas preventivas.',rationale:'El Estatuto Tributario regula medidas preventivas con oportunidad propia; la conclusión absoluta no se sigue de la mera existencia de gestión persuasiva.'},
      {id:'b',text:'Es correcta porque ninguna medida puede adoptarse antes del remate.',rationale:'Las medidas preventivas aparecen mucho antes del remate.'},
      {id:'c',text:'Es incorrecta únicamente porque toda llamada persuasiva equivale a mandamiento de pago.',rationale:'Precisamente la llamada persuasiva no equivale al mandamiento.'}
    ], correctOptionId:'a', explanation:'Distingue instituciones: que el persuasivo no sea ejecución no autoriza a inventar una prohibición absoluta sobre medidas que tienen regulación propia.', sourceIds:['concepto-cobro-persuasivo-4229-2026','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-excepciones-mapa-01', moduleId:'m12', skillIds:['cobro-coactivo','excepciones','pago'], type:'pjs', difficulty:2,
    case:'Después de notificarse el mandamiento, el deudor aporta soporte idóneo de que la obligación incluida en él había sido pagada efectivamente antes de la actuación de cobro.',
    stem:'¿Qué defensa del artículo 831 se relaciona directamente con ese hecho?',
    options:[
      {id:'a',text:'Pago efectivo.',rationale:'El hecho central es la satisfacción de la obligación.'},
      {id:'b',text:'Falta de competencia territorial por el solo hecho del pago.',rationale:'El pago no prueba incompetencia.'},
      {id:'c',text:'Interposición de demanda contenciosa.',rationale:'No se informa demanda alguna.'}
    ], correctOptionId:'a', explanation:'En una PJS debes mapear el hecho probado a la excepción concreta. Si existe pago efectivo, esa es la defensa que corresponde analizar.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-excepciones-mapa-02', moduleId:'m12', skillIds:['cobro-coactivo','excepciones','prescripcion'], type:'pjs', difficulty:3,
    case:'El expediente muestra que transcurrió el término de prescripción de la acción de cobro y no aparece un hecho capaz de evitar el efecto alegado por el deudor.',
    stem:'¿Cuál excepción encaja con el supuesto?',
    options:[
      {id:'a',text:'Prescripción de la acción de cobro.',rationale:'Es una de las excepciones expresamente previstas contra el mandamiento.'},
      {id:'b',text:'Error de verificación de una EAR.',rationale:'Es una institución ajena al hecho planteado.'},
      {id:'c',text:'Inadmisión de una devolución.',rationale:'El caso pertenece a cobro, no a devolución.'}
    ], correctOptionId:'a', explanation:'La clave es reconstruir primero la cronología y luego clasificar jurídicamente el hecho como prescripción cuando se cumplen sus presupuestos.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-excepciones-mapa-03', moduleId:'m12', skillIds:['cobro-coactivo','excepciones','deudor-solidario'], type:'pjs', difficulty:4,
    case:'Un mandamiento vincula a una persona como deudora solidaria. La persona sostiene, con soportes, que no tiene esa calidad y que además el monto que se le atribuye fue tasado indebidamente.',
    stem:'¿Qué lectura es más adecuada?',
    options:[
      {id:'a',text:'El artículo 831 contempla defensas adicionales para el deudor solidario relacionadas con su calidad y con la tasación del monto.',rationale:'El parágrafo incorpora esas defensas específicas.'},
      {id:'b',text:'Un deudor solidario nunca puede formular ninguna excepción.',rationale:'La norma contempla expresamente defensas en este escenario.'},
      {id:'c',text:'La única actuación posible es discutir el índice de consignación de una EAR.',rationale:'Ese tema no corresponde a la defensa planteada.'}
    ], correctOptionId:'a', explanation:'No reduzcas todas las defensas al catálogo general: la vinculación de deudores solidarios tiene reglas adicionales que deben ser reconocidas en el caso.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-recursos-cobro-01', moduleId:'m12', skillIds:['cobro-coactivo','recursos','debido-proceso'], type:'pjs', difficulty:3,
    case:'Durante el cobro se profiere una actuación puramente de trámite. El interesado afirma que contra cualquier actuación administrativa debe existir siempre un recurso ordinario.',
    stem:'¿Cuál respuesta se ajusta mejor al procedimiento?',
    options:[
      {id:'a',text:'Verificar la regla especial del cobro: las actuaciones de trámite no tienen recurso salvo previsión expresa para actuaciones definitivas.',rationale:'El artículo 833-1 contiene una regla especial sobre recursos.'},
      {id:'b',text:'Conceder automáticamente reposición y apelación contra toda actuación.',rationale:'No existe una regla general que autorice esos recursos indiscriminadamente en cobro.'},
      {id:'c',text:'Negar cualquier mecanismo incluso frente a decisiones para las que la ley sí prevé recurso.',rationale:'La regla tampoco permite desconocer recursos expresamente establecidos.'}
    ], correctOptionId:'a', explanation:'La pregunta correcta no es “¿existen recursos en abstracto?”, sino “¿qué naturaleza tiene esta actuación y qué prevé expresamente el procedimiento especial?”.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-recursos-cobro-02', moduleId:'m12', skillIds:['cobro-coactivo','irregularidades','debido-proceso'], type:'pjs', difficulty:4,
    case:'Antes de aprobar el remate se detecta una irregularidad procesal subsanable que afectaría la trazabilidad de una actuación previa.',
    stem:'¿Qué enfoque es más consistente con las reglas del procedimiento?',
    options:[
      {id:'a',text:'Subsanar oportunamente la irregularidad antes de la actuación que aprueba el remate, preservando el debido proceso.',rationale:'El Estatuto contempla la subsanación de irregularidades procesales antes de ese hito.'},
      {id:'b',text:'Ignorarla porque cualquier defecto queda saneado automáticamente por avanzar de etapa.',rationale:'Avanzar no sustituye la obligación de corregir una irregularidad relevante.'},
      {id:'c',text:'Reiniciar siempre todo el proceso desde cero sin analizar el defecto.',rationale:'La respuesta automática puede ser desproporcionada; primero se identifica y subsana lo que corresponda.'}
    ], correctOptionId:'a', explanation:'El procedimiento busca continuidad con garantías: detectar el defecto, corregirlo cuando sea subsanable y evitar que contamine actuaciones posteriores.', sourceIds:['estatuto-tributario'], verifiedAt
  },
  {
    id:'q-concursal-inicio-01', moduleId:'m14', skillIds:['procesos-concursales','calidad-datos','credito-fiscal'], type:'pjs', difficulty:3,
    case:'La DIAN recibe noticia de la apertura de un proceso concursal. Al preparar la acreencia encuentra pagos sin aplicar y diferencias entre declaraciones y saldos del aplicativo.',
    stem:'¿Qué debe priorizar antes de sostener una cifra en el proceso colectivo?',
    options:[
      {id:'a',text:'Depurar y corregir las inconsistencias mediante los procedimientos aplicables para intervenir con información veraz.',rationale:'PR-COT-0431 exige información confiable y remite a corrección/actualización cuando encuentra desajustes.'},
      {id:'b',text:'Presentar inmediatamente el saldo bruto del sistema y corregirlo solo después de que termine el concurso.',rationale:'Una acreencia incorrecta puede perjudicar la intervención y no cumple el objetivo del procedimiento.'},
      {id:'c',text:'Eliminar todas las obligaciones porque el concurso extingue automáticamente la deuda fiscal.',rationale:'La apertura concursal no implica extinción automática.'}
    ], correctOptionId:'a', explanation:'La defensa del crédito fiscal comienza con calidad de información. PR-COT-0431 ordena atender desajustes de saldos, declaraciones, pagos o aplicativos antes de sostener la acreencia.', sourceIds:['proc-inicio-concursales-0431','proc-correccion-inconsistencias-0033'], verifiedAt
  },
  {
    id:'q-concursal-inicio-02', moduleId:'m14', skillIds:['procesos-concursales','terceros-responsables','credito-fiscal'], type:'pjs', difficulty:4,
    case:'Durante la preparación para intervenir en un concurso se identifican terceros que podrían responder solidaria o subsidiariamente por determinadas obligaciones.',
    stem:'¿Qué actuación conceptual es más adecuada?',
    options:[
      {id:'a',text:'Identificar y documentar esos terceros y gestionar la actuación de cobro que corresponda, sin perder el seguimiento del proceso concursal.',rationale:'El procedimiento de inicio concursal ordena revisar responsables adicionales y actuar de acuerdo con la normativa.'},
      {id:'b',text:'Ignorar a cualquier tercero porque la apertura del concurso impide analizar responsabilidades diferentes al deudor principal.',rationale:'La existencia del proceso colectivo no elimina el deber de analizar responsables cuando la ley lo permite.'},
      {id:'c',text:'Declararlos responsables automáticamente sin soporte ni procedimiento.',rationale:'La responsabilidad requiere fundamento y actuación con debido proceso.'}
    ], correctOptionId:'a', explanation:'La actuación correcta combina defensa del crédito fiscal, identificación de responsables y debido proceso; ni omite terceros ni los vincula automáticamente.', sourceIds:['proc-inicio-concursales-0431','ley-1116-2006'], verifiedAt
  },
  {
    id:'q-dev-terminos-matriz-01', moduleId:'m16', skillIds:['devoluciones','terminos','devolucion-automatica'], type:'pjs', difficulty:2,
    case:'Una solicitud de saldo a favor cumple los presupuestos para el procedimiento de devolución automática informado por la DIAN.',
    stem:'¿Qué término debe reconocer el estudiante como referencia de esa ruta específica?',
    options:[
      {id:'a',text:'15 días.',rationale:'La DIAN informa 15 días para la devolución automática cuando se cumplen sus requisitos.'},
      {id:'b',text:'50 días en todos los casos sin excepción.',rationale:'Cincuenta días es una regla general para otros escenarios, no elimina el término especial.'},
      {id:'c',text:'Dos años para que la DIAN efectúe el pago.',rationale:'Dos años puede relacionarse con oportunidad de solicitar en ciertos saldos, no con este término administrativo.'}
    ], correctOptionId:'a', explanation:'Los términos deben asociarse a la ruta concreta. “Devolución automática” activa una referencia distinta de la regla general de 50 días.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-dev-terminos-matriz-02', moduleId:'m16', skillIds:['devoluciones','terminos','garantia'], type:'pjs', difficulty:3,
    case:'La solicitud fue presentada oportunamente y en debida forma y corresponde al supuesto legal de devolución respaldada con garantía.',
    stem:'¿Qué término especial informa la DIAN para esa ruta?',
    options:[
      {id:'a',text:'20 días.',rationale:'La información oficial distingue el término de 20 días para solicitudes con garantía en el supuesto regulado.'},
      {id:'b',text:'15 días porque toda garantía equivale a devolución automática.',rationale:'Garantía y devolución automática son rutas distintas.'},
      {id:'c',text:'Cinco años porque ese es siempre el término para devolver.',rationale:'Cinco años puede aparecer en oportunidad de ciertas solicitudes por pagos en exceso/no debido, no como término general de devolución de esta ruta.'}
    ], correctOptionId:'a', explanation:'En devoluciones, una de las habilidades centrales es no intercambiar plazos pertenecientes a instituciones distintas.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt
  },
  {
    id:'q-dev-terminos-matriz-03', moduleId:'m16', skillIds:['devoluciones','terminos','clasificacion'], type:'pjs', difficulty:4,
    case:'Una persona memoriza “dos años” como respuesta universal para cualquier solicitud de devolución, incluidos pagos en exceso y pagos de lo no debido.',
    stem:'¿Qué corrección metodológica debe hacer?',
    options:[
      {id:'a',text:'Identificar primero el origen del crédito y la ruta normativa antes de contar cualquier término.',rationale:'La DIAN informa oportunidades diferentes según se trate de saldo a favor, pago en exceso, no debido u otras rutas.'},
      {id:'b',text:'Mantener la regla de dos años porque toda devolución nace de una declaración con saldo a favor.',rationale:'Existen devoluciones que no nacen de un saldo a favor declarado.'},
      {id:'c',text:'Usar siempre cincuenta días, incluso para decidir si la solicitud fue presentada oportunamente.',rationale:'El término de la administración para devolver no sustituye el término del solicitante para pedir.'}
    ], correctOptionId:'a', explanation:'Clasifica antes de contar. El origen del crédito define la norma, la oportunidad, requisitos y en ocasiones la ruta operativa aplicable.', sourceIds:['dian-devoluciones-servicio-2026','proc-pagos-exceso-0128','estatuto-tributario'], verifiedAt
  }

  ,{
    id:'q-normalizacion-of-01', moduleId:'m6', skillIds:['normalizacion-saldos','estado-cuenta'], type:'pjs', difficulty:3,
    case:'El SI de Obligación Financiera muestra una deuda vencida. En el expediente aparece un pago válido que todavía no se refleja correctamente en el saldo.',
    stem:'¿Qué actuación debe priorizarse?',
    options:[
      {id:'a',text:'Iniciar cobro por el saldo visible sin revisar el soporte.',rationale:'Cobrar una cifra no depurada puede producir actuaciones sobre una obligación irreal o mal cuantificada.'},
      {id:'b',text:'Normalizar/actualizar el saldo mediante la ruta aplicable y conservar evidencia del ajuste.',rationale:'PR-COT-0372 busca que la Obligación Financiera refleje el saldo real y exige trazabilidad de la gestión.'},
      {id:'c',text:'Eliminar manualmente la obligación sin acto, soporte ni registro.',rationale:'La normalización no autoriza borrar información sin fundamento ni trazabilidad.'}
    ], correctOptionId:'b', explanation:'La calidad del estado de cuenta es previa a una decisión de cobro. El dato debe corresponder a la obligación real y la corrección debe quedar soportada.', sourceIds:['proc-normalizacion-obligacion-0372','proc-correccion-inconsistencias-0033'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-normalizacion-of-02', moduleId:'m6', skillIds:['normalizacion-saldos','prescripcion','trazabilidad'], type:'pjs', difficulty:4,
    case:'Una obligación ya tiene una resolución de prescripción generada en el aplicativo institucional, pero el SI de Obligación Financiera todavía no refleja ese efecto.',
    stem:'¿Qué enfoque coincide con PR-COT-0372?',
    options:[
      {id:'a',text:'Generar otra resolución de prescripción idéntica para que existan dos actos.',rationale:'El procedimiento indica procurar que el acto ya expedido afecte la Obligación Financiera, no duplicarlo.'},
      {id:'b',text:'Gestionar que el acto existente produzca el ajuste correspondiente en la Obligación Financiera.',rationale:'Esa es la lógica de normalización cuando ya existe el acto que define el efecto jurídico.'},
      {id:'c',text:'Ignorar la resolución porque el sistema siempre prevalece sobre el acto administrativo.',rationale:'El sistema debe reflejar la realidad jurídica, no sustituirla.'}
    ], correctOptionId:'b', explanation:'Normalizar es hacer coherente el sistema con la situación jurídica existente. Duplicar actos no mejora la calidad del dato y puede crear contradicciones.', sourceIds:['proc-normalizacion-obligacion-0372'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-normalizacion-of-03', moduleId:'m6', skillIds:['normalizacion-saldos','calidad-datos'], type:'pjs', difficulty:3,
    case:'Al revisar una obligación seleccionada para normalización, el funcionario encuentra que el mismo NIT tiene otras obligaciones cargadas en el sistema que podrían estar relacionadas con el ajuste.',
    stem:'¿Qué exige el procedimiento como criterio de revisión?',
    options:[
      {id:'a',text:'Revisar únicamente la obligación que originó la alerta.',rationale:'PR-COT-0372 exige una revisión integral de las obligaciones del NIT cargadas para estos casos.'},
      {id:'b',text:'Revisar el ciento por ciento de las obligaciones del NIT cargadas en el SI de Normalización.',rationale:'La revisión integral evita dejar efectos inconsistentes dentro del mismo estado de cuenta.'},
      {id:'c',text:'Cerrar el caso sin revisar saldos porque la normalización es automática.',rationale:'El procedimiento requiere análisis y evidencia de la gestión.'}
    ], correctOptionId:'b', explanation:'La normalización persigue consistencia integral. Corregir un renglón mientras otros relacionados permanecen errados puede mantener una cartera distorsionada.', sourceIds:['proc-normalizacion-obligacion-0372'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-normalizacion-of-04', moduleId:'m6', skillIds:['normalizacion-saldos','depositos-judiciales','competencia'], type:'pjs', difficulty:4,
    case:'Durante la normalización de saldos se identifica un depósito judicial asociado al expediente de cobro.',
    stem:'¿Cuál es la respuesta funcional más adecuada?',
    options:[
      {id:'a',text:'Aplicarlo directamente desde normalización sin coordinar con el responsable del cobro.',rationale:'PR-COT-0372 remite la gestión del depósito al procedimiento específico y al responsable del proceso de cobro.'},
      {id:'b',text:'Devolver el expediente al responsable del cobro para gestionar el depósito por PR-COT-0275.',rationale:'El procedimiento establece esa interacción cuando se conoce la existencia de un depósito judicial.'},
      {id:'c',text:'Eliminar el depósito del expediente porque no hace parte del saldo.',rationale:'El depósito puede afectar el resultado del cobro y debe gestionarse con trazabilidad.'}
    ], correctOptionId:'b', explanation:'Una buena respuesta PJS respeta fronteras de procedimiento: detectar el depósito no significa asumir una competencia distinta; significa activar la ruta correcta.', sourceIds:['proc-normalizacion-obligacion-0372','proc-depositos-0275'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-ear-conciliacion-01', moduleId:'m7', skillIds:['ear','conciliacion','recaudo'], type:'pjs', difficulty:3,
    case:'El informe diario de una EAR reporta un valor de recaudo que no coincide con el informe de consignaciones al Tesoro Nacional.',
    stem:'¿Cuál es la primera actuación más consistente?',
    options:[
      {id:'a',text:'Imponer inmediatamente la sanción máxima sin verificar la diferencia.',rationale:'Una diferencia detectada debe conciliarse y soportarse antes de atribuir una conducta sancionable.'},
      {id:'b',text:'Conciliar los insumos, identificar la diferencia y solicitar la corrección o explicación que corresponda.',rationale:'PR-COT-0373 existe precisamente para contrastar reportes y gestionar diferencias.'},
      {id:'c',text:'Dar por correcto siempre el informe de la EAR porque es el primer dato recibido.',rationale:'El informe diario es un insumo preliminar y debe contrastarse con otros reportes.'}
    ], correctOptionId:'b', explanation:'El control EAR combina dinero e información. La conciliación permite establecer si la diferencia es explicable, corregible o evidencia un incumplimiento.', sourceIds:['proc-conciliacion-ear-0373','proc-auditoria-ear-0032'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-ear-conciliacion-02', moduleId:'m7', skillIds:['ear','indice-consignacion','conciliacion'], type:'pjs', difficulty:3,
    case:'La DIAN comunica a una EAR una diferencia de información y solicita su corrección. El procedimiento de conciliación remite al índice de consignación como referencia temporal para la corrección.',
    stem:'¿Qué debe controlar el Gestor?',
    options:[
      {id:'a',text:'Que la corrección y sus soportes se produzcan dentro de la oportunidad prevista por el procedimiento.',rationale:'La conciliación incorpora el índice de consignación como parámetro de oportunidad para determinadas correcciones.'},
      {id:'b',text:'Que la EAR espere indefinidamente hasta el cierre anual.',rationale:'La oportunidad hace parte del control y no puede dejarse abierta sin límite.'},
      {id:'c',text:'Que la diferencia se borre sin conservar evidencia.',rationale:'La corrección debe ser trazable y soportada.'}
    ], correctOptionId:'a', explanation:'En EAR, oportunidad y evidencia son dimensiones separadas pero acumulativas: una corrección correcta fuera del término puede seguir siendo relevante para control.', sourceIds:['proc-conciliacion-ear-0373','proc-indice-consignacion-0029'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-ear-conciliacion-03', moduleId:'m7', skillIds:['ear','recaudo','informacion'], type:'single', difficulty:2,
    stem:'¿Por qué el informe diario de recaudo no debe tomarse como verdad definitiva sin conciliación?',
    options:[
      {id:'a',text:'Porque es un reporte preliminar que puede ser modificado y debe contrastarse con consignaciones y demás insumos.',rationale:'La regulación y el procedimiento de conciliación lo tratan como información preliminar susceptible de ajuste.'},
      {id:'b',text:'Porque las EAR no están autorizadas para reportar información.',rationale:'Precisamente una de sus obligaciones es transmitir información de recaudo.'},
      {id:'c',text:'Porque la DIAN solo controla documentos físicos y no valores recaudados.',rationale:'El control incluye información y traslado de recursos.'}
    ], correctOptionId:'a', explanation:'El dato preliminar es útil, pero el control robusto nace de su contraste con consignaciones y reportes detallados.', sourceIds:['proc-conciliacion-ear-0373'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-ear-conciliacion-04', moduleId:'m7', skillIds:['ear','sanciones','debido-proceso'], type:'pjs', difficulty:4,
    case:'Después de la conciliación, la diferencia persiste y los soportes muestran que la EAR incumplió una obligación regulada.',
    stem:'¿Qué sigue conceptualmente?',
    options:[
      {id:'a',text:'Evaluar la conducta bajo el procedimiento sancionatorio aplicable, con soporte y debido proceso.',rationale:'La conciliación aporta evidencia; la sanción requiere su propio análisis y procedimiento.'},
      {id:'b',text:'Modificar retrospectivamente el informe para que no exista diferencia.',rationale:'Eso destruiría la trazabilidad y ocultaría el posible incumplimiento.'},
      {id:'c',text:'Cerrar el caso porque toda diferencia queda saneada al ser detectada.',rationale:'Detectar no equivale a corregir ni extinguir una responsabilidad.'}
    ], correctOptionId:'a', explanation:'Conciliación y sanción son etapas funcionalmente distintas: una identifica y documenta; la otra determina consecuencias cuando la conducta encaja en el régimen aplicable.', sourceIds:['proc-conciliacion-ear-0373','proc-sanciones-ear-0030'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-control-seguimiento-01', moduleId:'m8', skillIds:['control-extensivo','seguimiento'], type:'pjs', difficulty:2,
    case:'Una campaña masiva envió 25.000 comunicaciones. El equipo informa que “fue exitosa” únicamente porque todos los mensajes salieron del sistema.',
    stem:'¿Qué falta para evaluar realmente su efectividad?',
    options:[
      {id:'a',text:'Medir el comportamiento posterior de los seleccionados frente al objetivo de la acción.',rationale:'PR-COT-0382 exige seguimiento del cumplimiento y un informe de efectividad, no solo evidencia de envío.'},
      {id:'b',text:'Nada; el número de mensajes enviados es la única métrica válida.',rationale:'La ejecución no prueba que haya cambiado el cumplimiento.'},
      {id:'c',text:'Repetir exactamente la misma campaña sin revisar resultados.',rationale:'La evidencia de resultados debe alimentar decisiones posteriores.'}
    ], correctOptionId:'a', explanation:'Actividad, producto y resultado no son equivalentes. Una campaña puede ejecutarse perfectamente y tener bajo efecto sobre el cumplimiento.', sourceIds:['proc-control-extensivo-0382'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-control-seguimiento-02', moduleId:'m8', skillIds:['control-extensivo','calidad-datos'], type:'pjs', difficulty:3,
    case:'Antes del envío masivo, el área detecta que la base contiene NIT duplicados y contribuyentes que ya corrigieron su obligación.',
    stem:'¿Qué decisión es más adecuada?',
    options:[
      {id:'a',text:'Enviar de inmediato para no retrasar el cronograma.',rationale:'Una base no validada puede generar requerimientos improcedentes y distorsionar la medición.'},
      {id:'b',text:'Validar y depurar la base y el mensaje antes del envío.',rationale:'PR-COT-0382 contempla validación de información y del texto antes de ejecutar la acción.'},
      {id:'c',text:'Eliminar toda la población objetivo y cerrar la campaña.',rationale:'La existencia de inconsistencias exige depuración, no abandonar necesariamente el control.'}
    ], correctOptionId:'b', explanation:'En control extensivo la calidad de la selección es parte del control. Un mensaje correcto enviado a una población incorrecta sigue siendo una mala gestión.', sourceIds:['proc-control-extensivo-0382'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-control-seguimiento-03', moduleId:'m8', skillIds:['control-extensivo','efectividad'], type:'single', difficulty:2,
    stem:'¿Cuál de los siguientes datos refleja mejor un resultado de cumplimiento después de una acción masiva?',
    options:[
      {id:'a',text:'Número de correos generados por el sistema.',rationale:'Es un dato de actividad, no necesariamente un resultado de cumplimiento.'},
      {id:'b',text:'Número de seleccionados que presentaron/corrigieron declaraciones o pagaron después de la acción.',rationale:'Es una evidencia directa del comportamiento que el control buscaba modificar.'},
      {id:'c',text:'Cantidad de funcionarios que asistieron a una reunión interna.',rationale:'Puede ser un insumo de gestión, pero no mide el cumplimiento de los seleccionados.'}
    ], correctOptionId:'b', explanation:'El seguimiento debe conectar el objetivo de la acción con cambios observables en obligaciones de los seleccionados.', sourceIds:['proc-control-extensivo-0382'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-control-seguimiento-04', moduleId:'m8', skillIds:['control-extensivo','informes'], type:'pjs', difficulty:3,
    case:'La acción de gestión masiva fue aprobada dentro de un programa o campaña de control y ya existe el informe final de ejecución y efectividad.',
    stem:'¿Qué debe ocurrir con sus resultados según el flujo institucional?',
    options:[
      {id:'a',text:'Remitirse a la instancia/representante previsto para el programa o campaña, preservando el informe y su trazabilidad.',rationale:'PR-COT-0382 prevé el envío de resultados de las acciones aprobadas a la instancia correspondiente.'},
      {id:'b',text:'Eliminar el informe después de calcular el indicador.',rationale:'Los resultados deben conservarse y servir al seguimiento institucional.'},
      {id:'c',text:'Publicarse automáticamente como sanción individual contra todos los seleccionados.',rationale:'Una acción masiva de control no equivale a una sanción automática.'}
    ], correctOptionId:'a', explanation:'La gestión masiva termina con medición, reporte y retroalimentación institucional, no con el simple envío de comunicaciones.', sourceIds:['proc-control-extensivo-0382'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cartera-real-01', moduleId:'m9', skillIds:['cartera','normalizacion-saldos'], type:'pjs', difficulty:3,
    case:'La cartera reporta $500 millones, pero $120 millones corresponden a saldos irreales generados por inconsistencias históricas de información.',
    stem:'¿Por qué debe normalizarse antes de fijar prioridades de recuperación?',
    options:[
      {id:'a',text:'Porque la gestión de cartera debe partir de obligaciones reales y la cifra inflada distorsiona metas y decisiones.',rationale:'La normalización busca precisamente depurar saldos irreales y permitir una cartera confiable.'},
      {id:'b',text:'Porque toda inconsistencia extingue automáticamente la obligación.',rationale:'Una inconsistencia puede requerir corrección sin implicar extinción.'},
      {id:'c',text:'Porque la DIAN no puede conservar ningún registro histórico.',rationale:'La depuración exige trazabilidad, no borrar la historia.'}
    ], correctOptionId:'a', explanation:'La calidad de cartera no es cosmética. Una cifra falsa cambia priorización, carga de trabajo y lectura de resultados institucionales.', sourceIds:['proc-normalizacion-obligacion-0372'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cartera-real-02', moduleId:'m9', skillIds:['cartera','extincion','prescripcion'], type:'pjs', difficulty:3,
    case:'Un funcionario propone “normalizar” una obligación prescribiéndola únicamente en el sistema, sin acto ni fundamento jurídico.',
    stem:'¿Cuál es el error principal?',
    options:[
      {id:'a',text:'Confundir un ajuste de información con una forma o efecto jurídico que requiere el procedimiento y soporte correspondiente.',rationale:'La normalización refleja la realidad; no crea por sí sola la prescripción.'},
      {id:'b',text:'Usar un sistema informático, porque toda actuación debe hacerse en papel.',rationale:'Los sistemas son parte de la operación institucional; el problema es el fundamento, no el medio electrónico.'},
      {id:'c',text:'Revisar la prescripción antes del cobro.',rationale:'Verificar prescripción es correcto; lo incorrecto es simular su efecto sin soporte jurídico.'}
    ], correctOptionId:'a', explanation:'El sistema registra efectos jurídicos y operativos, pero no sustituye los presupuestos que hacen procedente una decisión.', sourceIds:['proc-normalizacion-obligacion-0372','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cartera-real-03', moduleId:'m9', skillIds:['cartera','extincion','estado-cuenta'], type:'pjs', difficulty:4,
    case:'Una obligación aparece con saldo cero. No hay claridad sobre si fue pagada, compensada, remitida o afectada por un acto.',
    stem:'¿Qué debe hacerse antes de cerrar definitivamente el expediente?',
    options:[
      {id:'a',text:'Identificar la causa jurídica y documental del saldo cero y verificar que el expediente la soporte.',rationale:'PR-COT-0330 busca determinar cómo se extinguió la obligación y no permite tratar el dato aislado como suficiente.'},
      {id:'b',text:'Cerrar siempre porque cero en pantalla prueba cualquier forma de extinción.',rationale:'El mismo resultado numérico puede provenir de causas distintas, incluso errores.'},
      {id:'c',text:'Restaurar la deuda automáticamente para evitar riesgos.',rationale:'Tampoco puede crearse una obligación sin fundamento; primero se reconstruye la realidad.'}
    ], correctOptionId:'a', explanation:'La trazabilidad responde “por qué ya no se cobra”, no solo “cuánto muestra el sistema”.', sourceIds:['proc-extincion-0330','proc-normalizacion-obligacion-0372'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cartera-real-04', moduleId:'m9', skillIds:['cartera','remision','prescripcion'], type:'single', difficulty:3,
    stem:'¿Cuál afirmación evita confundir remisión con prescripción?',
    options:[
      {id:'a',text:'Ambas borran datos por decisión informática y son exactamente la misma institución.',rationale:'Tienen fundamentos y requisitos jurídicos distintos.'},
      {id:'b',text:'La prescripción se relaciona con el término de la acción de cobro; la remisión es una forma de depuración/extinción bajo presupuestos legales propios.',rationale:'Distingue correctamente la lógica jurídica de cada institución.'},
      {id:'c',text:'La remisión solo existe cuando hay un proceso concursal.',rationale:'No es una condición general de la remisión tributaria.'}
    ], correctOptionId:'b', explanation:'En PJS, dos rutas pueden producir que una obligación deje de cobrarse, pero la causa determina competencia, soporte y acto aplicable.', sourceIds:['estatuto-tributario','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-penalizable-01', moduleId:'m10', skillIds:['cobro-persuasivo','penalizable','compensacion'], type:'pjs', difficulty:4,
    case:'Una obligación de retención aparece impaga, pero existe una solicitud de compensación pendiente de resolver que podría cubrirla.',
    stem:'¿Qué debe hacer el Gestor antes de tratarla como denunciable?',
    options:[
      {id:'a',text:'Verificar la situación de la solicitud y aplicar los criterios del procedimiento penalizable antes de escalar.',rationale:'PR-COT-0346 incluye solicitudes de compensación pendientes entre los factores que deben revisarse antes de concluir que procede la denuncia.'},
      {id:'b',text:'Remitirla automáticamente a denuncia sin revisar la compensación.',rationale:'Omitir esa verificación puede desconocer una condición relevante de la obligación.'},
      {id:'c',text:'Cancelar definitivamente la obligación solo porque se presentó la solicitud.',rationale:'Una solicitud pendiente no equivale a una compensación ya decidida.'}
    ], correctOptionId:'a', explanation:'La ruta penalizable exige un filtro previo. Ni se denuncia mecánicamente ni se extingue la obligación por la mera existencia de una solicitud.', sourceIds:['proc-persuasivo-penalizable-0346'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-penalizable-02', moduleId:'m10', skillIds:['cobro-persuasivo','facilidades','penalizable'], type:'pjs', difficulty:4,
    case:'El agente retenedor tiene una facilidad de pago vigente sobre la obligación y no ha sido declarada incumplida.',
    stem:'¿Cómo debe analizarse antes de una eventual remisión penalizable?',
    options:[
      {id:'a',text:'Como si la facilidad no existiera, porque nunca afecta el análisis penalizable.',rationale:'PR-COT-0346 exige considerar la existencia de una facilidad vigente no incumplida.'},
      {id:'b',text:'Verificar la vigencia y estado de la facilidad antes de decidir si procede continuar la ruta penalizable.',rationale:'El procedimiento incorpora esta situación dentro de los criterios previos.'},
      {id:'c',text:'Declarar incumplida la facilidad solo para habilitar la denuncia.',rationale:'El incumplimiento debe responder a sus propios presupuestos, no fabricarse como atajo.'}
    ], correctOptionId:'b', explanation:'Una PJS fuerte suele cruzar procedimientos. Aquí no basta conocer la omisión: también hay que reconocer el efecto de una facilidad de pago aún vigente.', sourceIds:['proc-persuasivo-penalizable-0346','proc-facilidades-0272'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-penalizable-03', moduleId:'m10', skillIds:['agente-retenedor','penalizable','extincion'], type:'pjs', difficulty:4,
    case:'Después de iniciado un proceso penal por omisión, el agente extingue la obligación mediante pago o compensación e incluye los intereses exigibles.',
    stem:'¿Qué lectura es más completa?',
    options:[
      {id:'a',text:'El pago puede producir efectos dentro del proceso penal según el artículo 402, sin eliminar automáticamente sanciones administrativas.',rationale:'La doctrina DIAN recoge expresamente esa separación de consecuencias.'},
      {id:'b',text:'El pago borra retroactivamente cualquier actuación administrativa o penal sin excepción.',rationale:'La norma no convierte el pago en una inexistencia histórica de toda consecuencia.'},
      {id:'c',text:'El pago nunca produce ningún efecto en la ruta penal.',rationale:'El artículo 402 prevé efectos cuando se extinguen las sumas e intereses en las condiciones legales.'}
    ], correctOptionId:'a', explanation:'Diferencia planos: extinción tributaria, efectos penales y sanciones administrativas pueden relacionarse, pero no son la misma consecuencia.', sourceIds:['concepto-omision-20039-2025','proc-persuasivo-penalizable-0346'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-penalizable-04', moduleId:'m10', skillIds:['cobro-persuasivo','trazabilidad','penalizable'], type:'pjs', difficulty:3,
    case:'Tras revisar la obligación, el funcionario concluye que no procede expedir el oficio persuasivo penalizable por una causal documentada.',
    stem:'¿Qué conducta es correcta?',
    options:[
      {id:'a',text:'Registrar la revisión y la causal que impide continuar, conservando los antecedentes en el expediente.',rationale:'PR-COT-0346 exige documentar el resultado de la revisión y soportar la decisión.'},
      {id:'b',text:'No dejar ninguna evidencia porque no se expidió oficio.',rationale:'La decisión de no continuar también necesita trazabilidad.'},
      {id:'c',text:'Expedir el oficio de todas formas para “prevenir” al contribuyente.',rationale:'Si la ruta no procede, forzar la actuación contradice el filtro previsto por el procedimiento.'}
    ], correctOptionId:'a', explanation:'La trazabilidad no solo prueba lo que hiciste; también prueba por qué decidiste no hacer una actuación.', sourceIds:['proc-persuasivo-penalizable-0346'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-deposito-01', moduleId:'m13', skillIds:['depositos-judiciales','cobro-coactivo'], type:'single', difficulty:2,
    stem:'Según PR-COT-0275, ¿cuál conjunto describe actuaciones propias sobre depósitos judiciales a favor de la DIAN?',
    options:[
      {id:'a',text:'Aplicación, conversión, fraccionamiento o endoso.',rationale:'Son resultados expresamente contemplados por el procedimiento.'},
      {id:'b',text:'Solo destrucción o archivo.',rationale:'No corresponden al objetivo del procedimiento.'},
      {id:'c',text:'Únicamente avalúo y secuestro.',rationale:'Esas actuaciones recaen sobre bienes y pertenecen a otros procedimientos.'}
    ], correctOptionId:'a', explanation:'El depósito judicial ya es un valor constituido dentro del proceso; su gestión exige definir qué operación corresponde y documentarla.', sourceIds:['proc-depositos-0275'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-deposito-02', moduleId:'m13', skillIds:['depositos-judiciales','remate'], type:'pjs', difficulty:3,
    case:'En un remate varios postores constituyeron depósitos, pero solo uno resultó favorecido.',
    stem:'¿Qué tratamiento prevé el procedimiento para los depósitos de los postores no favorecidos?',
    options:[
      {id:'a',text:'Endosarlos de manera inmediata, previa relación en el acta de remate, conforme al procedimiento.',rationale:'PR-COT-0275 establece esta actuación para postores no favorecidos.'},
      {id:'b',text:'Aplicarlos a deudas tributarias de esos postores sin autorización.',rationale:'El depósito no puede convertirse en un mecanismo genérico para pagar obligaciones de terceros.'},
      {id:'c',text:'Retenerlos indefinidamente como garantía de futuros remates.',rationale:'La actuación tiene una salida específica y no justifica una retención indeterminada.'}
    ], correctOptionId:'a', explanation:'La gestión del depósito depende de su causa y beneficiario. En remate, la suerte de los depósitos de quienes no ganaron está expresamente regulada.', sourceIds:['proc-depositos-0275','proc-remate-0391'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-deposito-03', moduleId:'m13', skillIds:['depositos-judiciales','trazabilidad'], type:'pjs', difficulty:3,
    case:'El expediente físico contiene un folio nuevo sobre un depósito judicial, pero el expediente en SIPAC no refleja ese consecutivo.',
    stem:'¿Qué principio operativo debe aplicarse?',
    options:[
      {id:'a',text:'Mantener ambos expedientes desalineados porque uno es físico y otro digital.',rationale:'PR-COT-0275 exige coincidencia de folios y consecutivos y gestión de la novedad en el aplicativo.'},
      {id:'b',text:'Gestionar la actualización para que el expediente físico y el registro en SIPAC conserven trazabilidad equivalente.',rationale:'La consistencia entre soportes evita pérdida de evidencia y errores en el proceso.'},
      {id:'c',text:'Eliminar el folio físico para ocultar la diferencia.',rationale:'La solución no puede ser destruir evidencia.'}
    ], correctOptionId:'b', explanation:'La trazabilidad de un proceso de cobro depende tanto del acto como de su registro coherente en los expedientes institucionales.', sourceIds:['proc-depositos-0275'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-deposito-04', moduleId:'m13', skillIds:['depositos-judiciales','competencia'], type:'pjs', difficulty:4,
    case:'Existe un depósito judicial a favor de la DIAN y un servidor propone usarlo para cancelar la obligación de un tercero no vinculado al depósito.',
    stem:'¿Qué debe responderse?',
    options:[
      {id:'a',text:'No procede: PR-COT-0275 prohíbe usar depósitos judiciales para cancelar obligaciones de terceros.',rationale:'El depósito tiene una destinación y relación procesal específica.'},
      {id:'b',text:'Procede siempre que el tercero tenga NIT activo.',rationale:'La existencia de NIT no habilita alterar la destinación del depósito.'},
      {id:'c',text:'Procede si la obligación del tercero es mayor que el depósito.',rationale:'El monto tampoco crea competencia para usar recursos ajenos a su causa.'}
    ], correctOptionId:'a', explanation:'No todo recurso disponible puede aplicarse a cualquier obligación. La legalidad de la destinación es parte del control.', sourceIds:['proc-depositos-0275'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-judicial-01', moduleId:'m14', skillIds:['liquidacion-judicial','credito-fiscal'], type:'pjs', difficulty:3,
    case:'La DIAN detecta la apertura de un proceso de liquidación judicial de un contribuyente con obligaciones fiscales pendientes.',
    stem:'¿Cuál es la respuesta institucional correcta?',
    options:[
      {id:'a',text:'Intervenir en el proceso colectivo para defender la acreencia fiscal y coordinar las actuaciones de cartera.',rationale:'Ese es el objetivo de PR-COT-0368.'},
      {id:'b',text:'Ignorar el proceso y continuar como si no existiera.',rationale:'La liquidación cambia el escenario de defensa y exige intervención oportuna.'},
      {id:'c',text:'Dar por pagadas todas las obligaciones por el solo hecho de la apertura.',rationale:'La apertura no equivale a extinción.'}
    ], correctOptionId:'a', explanation:'El concurso no hace desaparecer el crédito: transforma la forma en que debe ser defendido y satisfecho.', sourceIds:['proc-liquidacion-judicial-0368','ley-1116-2006'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-judicial-02', moduleId:'m14', skillIds:['liquidacion-judicial','terceros-responsables'], type:'pjs', difficulty:4,
    case:'Al revisar la liquidación judicial se identifican posibles deudores solidarios o subsidiarios relacionados con ciertas obligaciones fiscales.',
    stem:'¿Qué prevé el procedimiento?',
    options:[
      {id:'a',text:'Identificarlos y solicitar el inicio del cobro que corresponda, respetando los presupuestos de responsabilidad.',rationale:'PR-COT-0368 incluye expresamente esta revisión dentro de sus condiciones generales.'},
      {id:'b',text:'Declararlos responsables sin actuación ni soporte.',rationale:'La identificación no elimina el debido proceso.'},
      {id:'c',text:'Ignorarlos porque la liquidación extingue toda posible responsabilidad de terceros.',rationale:'El procedimiento exige precisamente revisar esas responsabilidades.'}
    ], correctOptionId:'a', explanation:'La defensa del crédito fiscal puede involucrar el proceso concursal y otras responsabilidades legalmente procedentes; ninguna autoriza saltarse el debido proceso.', sourceIds:['proc-liquidacion-judicial-0368'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-judicial-03', moduleId:'m14', skillIds:['liquidacion-judicial','calidad-datos'], type:'pjs', difficulty:3,
    case:'Antes de presentar la acreencia en la liquidación judicial se detecta una inconsistencia entre el recibo de pago y el aplicativo de cobro.',
    stem:'¿Qué orden de actuación es correcto?',
    options:[
      {id:'a',text:'Corregir o reprocesar por la ruta institucional y después sostener la cifra depurada en el proceso.',rationale:'PR-COT-0368 remite expresamente a actualización/corrección cuando encuentra desajustes.'},
      {id:'b',text:'Presentar el saldo inconsistente porque en concursos la calidad del dato es secundaria.',rationale:'La defensa del crédito exige una acreencia verificable.'},
      {id:'c',text:'Eliminar la obligación sin determinar si el pago la extinguió.',rationale:'Primero debe reconstruirse la realidad jurídica y contable.'}
    ], correctOptionId:'a', explanation:'Procesos concursales y calidad de información están conectados: un crédito mal cuantificado puede perjudicar reconocimiento, objeciones y pago.', sourceIds:['proc-liquidacion-judicial-0368','proc-correccion-inconsistencias-0033'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-judicial-04', moduleId:'m14', skillIds:['liquidacion-judicial','adjudicacion','extincion'], type:'single', difficulty:3,
    stem:'¿Hacia qué rutas puede conducir el cierre operativo de PR-COT-0368 según su alcance?',
    options:[
      {id:'a',text:'Adjudicación de bienes o extinción de obligaciones, según el resultado del proceso.',rationale:'El procedimiento termina enviando el expediente a PR-COT-0369 o PR-COT-0330.'},
      {id:'b',text:'Únicamente a una nueva declaración tributaria.',rationale:'No es el desenlace operativo del procedimiento de liquidación judicial.'},
      {id:'c',text:'Siempre a una sanción EAR.',rationale:'Las EAR pertenecen a otro subproceso y problemática.'}
    ], correctOptionId:'a', explanation:'La salida refleja dos posibilidades: satisfacción mediante adjudicación o cierre/extinción conforme a la situación final de la acreencia.', sourceIds:['proc-liquidacion-judicial-0368','proc-adjudicacion-0369','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-adjudicacion-01', moduleId:'m14', skillIds:['adjudicacion','inventario','credito-fiscal'], type:'pjs', difficulty:4,
    case:'En un acuerdo de adjudicación, el inventario valorado parece omitir un activo relevante del deudor y contiene gastos cuya pertinencia no está clara.',
    stem:'¿Qué debe hacer la representación de la DIAN?',
    options:[
      {id:'a',text:'Revisar inventario y gastos y formular objeciones motivadas si afectan la defensa del crédito fiscal.',rationale:'PR-COT-0369 ordena verificar inventario, obligaciones y gastos y contempla objeciones dentro del término legal.'},
      {id:'b',text:'Aceptar cualquier inventario porque el liquidador nunca puede ser controvertido.',rationale:'El procedimiento contempla expresamente revisión y objeciones.'},
      {id:'c',text:'Embargar directamente al liquidador por la diferencia.',rationale:'La controversia se atiende mediante los mecanismos del proceso concursal.'}
    ], correctOptionId:'a', explanation:'En adjudicación, la defensa activa del crédito fiscal incluye verificar la masa patrimonial y reaccionar oportunamente ante inconsistencias relevantes.', sourceIds:['proc-adjudicacion-0369'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-adjudicacion-02', moduleId:'m14', skillIds:['adjudicacion','objeciones','prelacion'], type:'pjs', difficulty:4,
    case:'Un tercero formula una objeción que, si prospera, reduciría la prelación reconocida al crédito fiscal de la DIAN.',
    stem:'¿Cuál actuación corresponde?',
    options:[
      {id:'a',text:'Responder la objeción con argumentos y pruebas y participar en las instancias de conciliación o audiencia previstas.',rationale:'PR-COT-0369 contempla responder objeciones que afecten el crédito fiscal y su prelación.'},
      {id:'b',text:'No responder porque solo la DIAN puede objetar, nunca ser objeto de una objeción.',rationale:'El procedimiento contempla ambas situaciones.'},
      {id:'c',text:'Cambiar unilateralmente la prelación en el sistema interno.',rationale:'La prelación dentro del proceso se defiende por las vías procesales, no mediante un ajuste interno.'}
    ], correctOptionId:'a', explanation:'El Gestor debe reconocer el momento procesal: cuando la afectación está dentro del concurso, la defensa debe darse dentro de ese concurso.', sourceIds:['proc-adjudicacion-0369','ley-1116-2006'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-adjudicacion-03', moduleId:'m14', skillIds:['adjudicacion','bienes','costo-beneficio'], type:'pjs', difficulty:3,
    case:'Se propone adjudicar a la DIAN un bien mueble difícil de comercializar y con costos de conservación elevados.',
    stem:'¿Qué debe ocurrir antes de aceptar la adjudicación como favorable?',
    options:[
      {id:'a',text:'Solicitar/verificar el concepto técnico de viabilidad, incluida comerciabilidad y costo-beneficio.',rationale:'PR-COT-0369 incorpora conceptos de viabilidad para los bienes objeto de adjudicación.'},
      {id:'b',text:'Aceptar cualquier bien porque su valor nominal siempre equivale a recuperación efectiva.',rationale:'Valor nominal y utilidad real pueden diferir por titularidad, mercado y costos.'},
      {id:'c',text:'Convertir el bien en efectivo mediante una anotación contable sin recibirlo.',rationale:'La recepción/adjudicación requiere actuaciones reales y soporte.'}
    ], correctOptionId:'a', explanation:'La administración responsable del crédito también analiza si el activo realmente sirve para recuperar valor y si su recepción es jurídicamente viable.', sourceIds:['proc-adjudicacion-0369'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-adjudicacion-04', moduleId:'m14', skillIds:['adjudicacion','extincion'], type:'pjs', difficulty:3,
    case:'La adjudicación quedó perfeccionada y se determinó el valor con el que se satisface la acreencia fiscal.',
    stem:'¿Cuál es el paso conceptual posterior?',
    options:[
      {id:'a',text:'Reflejar el efecto sobre la obligación y continuar hacia su extinción o saldo remanente conforme al procedimiento.',rationale:'PR-COT-0369 finaliza con envío a PR-COT-0330 para reflejar el efecto de la adjudicación.'},
      {id:'b',text:'Mantener la deuda íntegra sin registrar la adjudicación.',rationale:'Eso duplicaría la acreencia y desconocería el pago/efecto producido.'},
      {id:'c',text:'Eliminar todo el expediente y la evidencia de la adjudicación.',rationale:'El cierre exige conservar soporte y trazabilidad.'}
    ], correctOptionId:'a', explanation:'El final de la adjudicación debe conectarse con el estado real de la obligación. El bien recibido no es un evento aislado del estado de cuenta.', sourceIds:['proc-adjudicacion-0369','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-forzosa-01', moduleId:'m14', skillIds:['liquidacion-forzosa','credito-fiscal'], type:'pjs', difficulty:3,
    case:'La DIAN recibe un expediente para intervenir en la liquidación forzosa administrativa de una entidad.',
    stem:'¿Cuál es la primera pieza sustancial de la intervención según PR-COT-0430?',
    options:[
      {id:'a',text:'Elaborar y presentar oportunamente el memorial de reclamaciones con las obligaciones ciertas y contingentes soportadas.',rationale:'El alcance del procedimiento inicia con la presentación de reclamaciones.'},
      {id:'b',text:'Esperar hasta la terminación de la entidad para informar la deuda.',rationale:'La defensa del crédito exige reclamar dentro de la oportunidad del proceso.'},
      {id:'c',text:'Expedir un mandamiento de pago contra el liquidador por todas las obligaciones.',rationale:'La reclamación dentro del proceso liquidatorio tiene su propia vía.'}
    ], correctOptionId:'a', explanation:'La oportunidad de la reclamación es decisiva: el crédito debe entrar al proceso con soporte suficiente desde el inicio.', sourceIds:['proc-liquidacion-forzosa-0430'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-forzosa-02', moduleId:'m14', skillIds:['liquidacion-forzosa','recursos','debido-proceso'], type:'pjs', difficulty:4,
    case:'El liquidador profiere un acto que podría vulnerar la posición del crédito fiscal.',
    stem:'¿Qué debe hacer el representante DIAN?',
    options:[
      {id:'a',text:'Verificar el acto y recurrir u objetar por los mecanismos aplicables cuando exista afectación y procedencia.',rationale:'PR-COT-0430 contempla verificar y recurrir actos del liquidador y objetar actuaciones que afecten el crédito.'},
      {id:'b',text:'Modificar el acto directamente desde un sistema DIAN.',rationale:'La DIAN no sustituye unilateralmente al liquidador; debe usar los mecanismos del proceso.'},
      {id:'c',text:'No reaccionar porque en una liquidación administrativa no existe derecho de defensa del acreedor público.',rationale:'La defensa del crédito es precisamente el objetivo del procedimiento.'}
    ], correctOptionId:'a', explanation:'La intervención efectiva combina vigilancia y reacción oportuna dentro del marco procesal de la liquidación.', sourceIds:['proc-liquidacion-forzosa-0430'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-forzosa-03', moduleId:'m14', skillIds:['liquidacion-forzosa','seguimiento'], type:'pjs', difficulty:3,
    case:'Dentro de la liquidación existe un plan de pago reconocido para acreencias fiscales y una reserva asociada a una contingencia pendiente.',
    stem:'¿Cuál es la conducta más adecuada?',
    options:[
      {id:'a',text:'Hacer seguimiento al plan y a la reserva, verificando que los eventos de pago se reflejen en la acreencia.',rationale:'PR-COT-0430 contempla seguimiento a planes de pago y gestión de reservas para contingencias.'},
      {id:'b',text:'Cerrar el expediente desde que se anuncia el plan, aunque no se haya pagado.',rationale:'Un plan no equivale a extinción consumada.'},
      {id:'c',text:'Duplicar el valor de la deuda para cubrir el riesgo de incumplimiento.',rationale:'El riesgo no autoriza alterar arbitrariamente la acreencia.'}
    ], correctOptionId:'a', explanation:'El seguimiento conecta lo acordado con lo efectivamente pagado y evita cerrar antes de que el crédito haya sido satisfecho o legalmente extinguido.', sourceIds:['proc-liquidacion-forzosa-0430','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-liquidacion-forzosa-04', moduleId:'m14', skillIds:['liquidacion-forzosa','extincion'], type:'pjs', difficulty:3,
    case:'El proceso termina, la entidad deja de existir y las obligaciones fiscales han sido pagadas o se define su situación final conforme al proceso.',
    stem:'¿Qué conexión procedimental debe asegurarse?',
    options:[
      {id:'a',text:'Continuar hacia la extinción de obligaciones para reflejar correctamente el cierre de la acreencia.',rationale:'El alcance de PR-COT-0430 termina enlazando con PR-COT-0330 cuando se configuran sus presupuestos.'},
      {id:'b',text:'Mantener indefinidamente todas las obligaciones como cartera vigente.',rationale:'Eso desconocería el resultado del proceso y distorsionaría el estado de cuenta.'},
      {id:'c',text:'Borrar el NIT y toda la historia documental.',rationale:'La terminación jurídica no elimina los deberes de archivo y trazabilidad.'}
    ], correctOptionId:'a', explanation:'Cerrar bien un proceso concursal también significa que los sistemas y el expediente cuenten la misma historia final.', sourceIds:['proc-liquidacion-forzosa-0430','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-verificacion-investigacion-01', moduleId:'m16', skillIds:['devoluciones','verificacion','investigacion-previa'], type:'pjs', difficulty:3,
    case:'Durante la verificación de una solicitud de devolución aparecen indicios de que algunas retenciones que soportan el saldo podrían no existir.',
    stem:'¿Qué lectura es correcta?',
    options:[
      {id:'a',text:'La verificación puede justificar remisión a fiscalización para la investigación prevista en el artículo 857-1, si concurren sus presupuestos.',rationale:'La doctrina DIAN distingue ambos controles y explica cómo la verificación puede anteceder a la investigación.'},
      {id:'b',text:'La verificación debe ignorar cualquier inconsistencia porque solo fiscalización puede mirar soportes.',rationale:'La verificación busca precisamente comprobar los elementos que sustentan la devolución.'},
      {id:'c',text:'Toda solicitud activa automáticamente una investigación previa de 90 días.',rationale:'La investigación previa depende de supuestos legales; no es automática para todas las solicitudes.'}
    ], correctOptionId:'a', explanation:'Primero se verifica la solicitud. Si de esa revisión surgen hechos relevantes, puede activarse el procedimiento de fiscalización correspondiente.', sourceIds:['concepto-devoluciones-16116-2025','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-verificacion-investigacion-02', moduleId:'m16', skillIds:['devoluciones','rechazo','inadmisión'], type:'single', difficulty:3,
    stem:'¿Cuál situación aparece entre las causales de rechazo definitivo informadas por la DIAN con fundamento en el artículo 857 del Estatuto Tributario?',
    options:[
      {id:'a',text:'Solicitud presentada extemporáneamente.',rationale:'La extemporaneidad figura como causal de rechazo definitivo.'},
      {id:'b',text:'Cualquier error tipográfico, sin posibilidad de subsanación.',rationale:'No todo defecto formal se convierte automáticamente en rechazo definitivo.'},
      {id:'c',text:'Que el funcionario necesite revisar un soporte.',rationale:'La necesidad de verificación no constituye por sí sola causal de rechazo.'}
    ], correctOptionId:'a', explanation:'Una habilidad clave es distinguir causales de rechazo definitivo de defectos que pueden conducir a inadmisión o requerir otra actuación.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-verificacion-investigacion-03', moduleId:'m16', skillIds:['devoluciones','compensacion-previa'], type:'pjs', difficulty:3,
    case:'La devolución es procedente y existen deudas tributarias vencidas del mismo contribuyente, pero la solicitud no indicó expresamente cuáles compensar.',
    stem:'¿Qué regla debe aplicar la DIAN?',
    options:[
      {id:'a',text:'Efectuar de oficio la compensación cuando corresponda, conforme al artículo 861, antes de devolver el remanente.',rationale:'La información oficial DIAN señala la compensación de oficio cuando el solicitante no relaciona las deudas.'},
      {id:'b',text:'Ignorar siempre las deudas porque no fueron escritas en el formulario.',rationale:'La compensación previa no depende únicamente de que el solicitante las enumere.'},
      {id:'c',text:'Rechazar toda la solicitud solo por no listar las deudas.',rationale:'La existencia de deudas activa la regla de compensación previa; no implica automáticamente rechazo total.'}
    ], correctOptionId:'a', explanation:'El valor finalmente entregado puede ser menor que el solicitado porque la devolución se cruza previamente con obligaciones vencidas cuando la norma lo exige.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-verificacion-investigacion-04', moduleId:'m16', skillIds:['devoluciones','terminos','rechazo'], type:'single', difficulty:3,
    stem:'Según la información oficial de trámites DIAN, ¿qué término se informa para proferir la resolución de rechazo definitivo en el supuesto allí descrito?',
    options:[
      {id:'a',text:'30 días siguientes a la presentación de la solicitud o del recurso contra el auto de inadmisión, según el caso.',rationale:'Es el término informado por la DIAN para esa providencia en la ruta descrita.'},
      {id:'b',text:'Siempre 5 años.',rationale:'Cinco años se relaciona con la oportunidad de ciertas solicitudes por pago en exceso/no debido, no con esta decisión administrativa.'},
      {id:'c',text:'Siempre 15 días.',rationale:'Quince días corresponde a la referencia de devolución automática, no a esta resolución de rechazo.'}
    ], correctOptionId:'a', explanation:'No memorices números aislados. Relaciona siempre el término con la actuación: solicitud, devolución, garantía, investigación, inadmisión o rechazo.', sourceIds:['dian-devoluciones-servicio-2026'], verifiedAt:'2026-09-13'
  }

  ,{
    id:'q-mipg-v6-01', moduleId:'m2', skillIds:['mipg','valor-publico'], type:'pjs', difficulty:2,
    case:'Una dependencia cumple formalmente sus actividades, pero no revisa si estas solucionan necesidades ciudadanas ni si los resultados institucionales mejoran.',
    stem:'¿Qué lectura se ajusta mejor a la lógica de MIPG?',
    options:[
      {id:'a',text:'La gestión pública debe conectarse con resultados, generación de valor público y mejora continua, no limitarse a ejecutar actividades.',rationale:'MIPG articula la gestión institucional alrededor de resultados y valor público.'},
      {id:'b',text:'Basta con demostrar que cada funcionario estuvo ocupado durante la jornada.',rationale:'La actividad por sí sola no demuestra resultado ni valor público.'},
      {id:'c',text:'MIPG sustituye todos los procedimientos legales por indicadores de desempeño.',rationale:'El modelo no desplaza la legalidad ni los procedimientos especiales.'}
    ], correctOptionId:'a', explanation:'MIPG ayuda a conectar capacidades, ejecución, relación con ciudadanía, aprendizaje y control con resultados institucionales. No reemplaza las reglas jurídicas aplicables.', sourceIds:['mipg'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-mipg-v6-02', moduleId:'m2', skillIds:['mipg','seguimiento'], type:'single', difficulty:2,
    stem:'Según el Manual MIPG versión 6.1 de febrero de 2026, ¿cuál es la séptima dimensión del modelo?',
    options:[
      {id:'a',text:'Control Interno.',rationale:'Es la séptima dimensión de la versión 6.1 y desarrolla el MECI.'},
      {id:'b',text:'Relación Estado–Ciudadanías.',rationale:'Forma parte de la organización posterior de seis dimensiones, no es la séptima del manual 6.1.'},
      {id:'c',text:'Seguimiento, Evaluación y Control Integral.',rationale:'Es denominación asociada a la reorganización del MIPG posterior al corte.'}
    ], correctOptionId:'a', explanation:'Manual MIPG 6.1 (febrero de 2026): siete dimensiones; séptima Control Interno. La versión 7 (agosto) reorganiza el modelo en seis dimensiones, pero es posterior al corte GOA del 19/06/2026.', sourceIds:['mipg-manual-6-1-2026','mipg-manual-v7-2026'], verifiedAt:'2026-10-12'
  },
  {
    id:'q-mipg-v6-03', moduleId:'m2', skillIds:['mipg','procedimiento'], type:'pjs', difficulty:3,
    case:'Un funcionario propone omitir una verificación obligatoria de un trámite tributario porque considera que así mejora el indicador de oportunidad de la dependencia.',
    stem:'¿Cuál es la respuesta más adecuada?',
    options:[
      {id:'a',text:'Rechazar la propuesta: la mejora de gestión debe lograrse respetando competencia, legalidad y procedimiento aplicable.',rationale:'MIPG no habilita sacrificar controles legales para mejorar un indicador.'},
      {id:'b',text:'Aceptar siempre que el promedio de atención mensual mejore.',rationale:'Un indicador no legitima incumplir un deber procedimental.'},
      {id:'c',text:'Aceptar si el contribuyente manifiesta verbalmente que no presentará reclamación.',rationale:'La voluntad del usuario no elimina controles o competencias obligatorias.'}
    ], correctOptionId:'a', explanation:'La eficiencia pública se persigue dentro del marco jurídico. En PJS, “más rápido” no es sinónimo de “correcto” si la alternativa elimina una actuación exigida.', sourceIds:['mipg','cpaca'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-mipg-v6-04', moduleId:'m2', skillIds:['mipg','gestion-conocimiento'], type:'pjs', difficulty:2,
    case:'La misma inconsistencia en el estado de cuenta aparece de forma repetida en varias seccionales. Cada equipo la corrige de forma aislada, pero nadie documenta la causa ni comparte el aprendizaje.',
    stem:'¿Qué mejora es más coherente con MIPG?',
    options:[
      {id:'a',text:'Además de corregir los casos, capturar el aprendizaje, analizar la causa y compartir una práctica institucional verificable.',rationale:'Conecta gestión del conocimiento con fortalecimiento y mejora continua.'},
      {id:'b',text:'Evitar documentar el problema para que no afecte los indicadores.',rationale:'Ocultar información impide aprender y debilita el control.'},
      {id:'c',text:'Dejar de corregir casos hasta que exista una reforma legal.',rationale:'La mejora sistémica no sustituye la atención de obligaciones concretas.'}
    ], correctOptionId:'a', explanation:'MIPG incorpora gestión del conocimiento, innovación y memoria pública precisamente para evitar que la organización repita errores sin aprender de ellos.', sourceIds:['mipg','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-access-lifecycle-01', moduleId:'m17', skillIds:['control-acceso','permisos'], type:'pjs', difficulty:3,
    case:'Un contratista terminó su vínculo hace dos semanas, pero su cuenta institucional y varios roles en aplicaciones siguen activos porque “puede que vuelva”.',
    stem:'¿Cuál es la actuación correcta desde gestión de accesos?',
    options:[
      {id:'a',text:'Gestionar oportunamente la inactivación o ajuste de cuentas y roles conforme al procedimiento y dejar trazabilidad.',rationale:'La auditoría DIAN identifica como riesgo mantener cuentas activas de personas sin relación o necesidad vigente.'},
      {id:'b',text:'Conservar todos los accesos indefinidamente para facilitar una eventual recontratación.',rationale:'Mantener privilegios sin necesidad vigente aumenta exposición y debilita control.'},
      {id:'c',text:'Compartir la cuenta con otro contratista para no perder la configuración.',rationale:'Compartir identidad destruye trazabilidad y control individual.'}
    ], correctOptionId:'a', explanation:'El acceso debe acompañar la necesidad funcional y su vigencia. Terminado el vínculo o desaparecida la necesidad, procede ajustar o inactivar mediante el flujo autorizado.', sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-access-lifecycle-02', moduleId:'m17', skillIds:['control-acceso','privilegios'], type:'pjs', difficulty:4,
    case:'Un servidor necesita consultar saldos, pero solicita adicionalmente un rol administrador “por si en algún momento tiene que corregir algo”.',
    stem:'¿Qué decisión protege mejor la información?',
    options:[
      {id:'a',text:'Asignar únicamente los permisos requeridos por la función actual y tramitar privilegios adicionales solo cuando exista necesidad y autorización.',rationale:'Aplica mínimo privilegio, control de accesos privilegiados y trazabilidad.'},
      {id:'b',text:'Asignar administrador porque reduce tiempos futuros.',rationale:'La comodidad futura no justifica ampliar privilegios sin necesidad.'},
      {id:'c',text:'Entregar temporalmente las credenciales de un administrador existente.',rationale:'Compartir credenciales elimina responsabilidad individual y vulnera controles.'}
    ], correctOptionId:'a', explanation:'La auditoría institucional evaluó específicamente accesos privilegiados. Un permiso debe corresponder a función, necesidad y autorización, no a conveniencia hipotética.', sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-access-lifecycle-03', moduleId:'m17', skillIds:['trazabilidad','seguridad-informacion'], type:'pjs', difficulty:3,
    case:'Para acelerar una corrección, dos funcionarios proponen usar un mismo usuario genérico en producción y registrar después quién realizó cada cambio en una hoja de cálculo.',
    stem:'¿Cuál es el principal problema?',
    options:[
      {id:'a',text:'La identidad compartida debilita la trazabilidad y la atribución directa de actuaciones en el sistema.',rationale:'El control de accesos busca asociar acciones a identidades y permisos verificables.'},
      {id:'b',text:'Ninguno, siempre que la hoja de cálculo tenga colores distintos.',rationale:'Un registro paralelo no sustituye la identificación y trazabilidad del sistema.'},
      {id:'c',text:'Solo sería problema si el cambio tuviera impacto presupuestal.',rationale:'La seguridad y trazabilidad aplican a los activos de información independientemente de ese criterio.'}
    ], correctOptionId:'a', explanation:'La trazabilidad debe preservarse desde el propio esquema de acceso. La auditoría DIAN incluso reportó riesgos asociados a usuarios de prueba y gestión de identidades.', sourceIds:['auditoria-accesos-dian-2025'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-access-lifecycle-04', moduleId:'m17', skillIds:['seguridad-informacion','terceros'], type:'pjs', difficulty:3,
    case:'Un proveedor externo requiere acceso temporal a una solución que soporta un proceso misional para resolver un incidente técnico.',
    stem:'¿Qué enfoque es más adecuado?',
    options:[
      {id:'a',text:'Autorizar únicamente el acceso necesario, con vigencia, controles y trazabilidad definidos, y retirarlo al terminar la necesidad.',rationale:'La auditoría incluye expresamente accesos de terceros y su control.'},
      {id:'b',text:'Crear una cuenta permanente sin fecha de revisión porque el proveedor podría necesitarla otra vez.',rationale:'La eventual necesidad futura no justifica exposición permanente.'},
      {id:'c',text:'Permitir que use las credenciales personales del funcionario que reportó el incidente.',rationale:'Compartir credenciales vulnera autenticidad y responsabilidad individual.'}
    ], correctOptionId:'a', explanation:'Los terceros también deben ingresar mediante un esquema controlado. Necesidad, alcance, temporalidad y trazabilidad siguen siendo esenciales.', sourceIds:['auditoria-accesos-dian-2025','manual-seguridad-dian'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-function-publica-01', moduleId:'m1', skillIds:['funcion-publica','principios'], type:'pjs', difficulty:2,
    case:'Dos solicitudes equivalentes llegan a una dependencia. Un funcionario propone tramitar primero la de un conocido, aunque fue presentada después y no existe criterio legal de prioridad.',
    stem:'¿Qué principio de la función administrativa resulta especialmente comprometido?',
    options:[
      {id:'a',text:'Imparcialidad.',rationale:'La actuación administrativa debe evitar preferencias personales y aplicar criterios objetivos.'},
      {id:'b',text:'Publicidad entendida como publicar datos reservados.',rationale:'La publicidad no exige revelar información protegida ni explica el favoritismo.'},
      {id:'c',text:'Descentralización territorial.',rationale:'No es el problema planteado en el caso.'}
    ], correctOptionId:'a', explanation:'El artículo 209 constitucional ordena desarrollar la función administrativa con principios como igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.', sourceIds:['constitucion-politica'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-function-publica-02', moduleId:'m1', skillIds:['funcion-publica','celeridad','legalidad'], type:'pjs', difficulty:3,
    case:'Para cerrar más casos por día, un equipo propone eliminar una revisión obligatoria del expediente que evita decisiones sobre información incompleta.',
    stem:'¿Qué interpretación es correcta?',
    options:[
      {id:'a',text:'La celeridad debe armonizarse con legalidad, debido proceso y eficacia; no autoriza suprimir una actuación obligatoria.',rationale:'Los principios administrativos se aplican de manera articulada.'},
      {id:'b',text:'La celeridad siempre prevalece sobre cualquier otra regla.',rationale:'Ningún principio habilita ignorar competencias o trámites legalmente exigidos.'},
      {id:'c',text:'La revisión puede omitirse si el equipo tiene mucha experiencia.',rationale:'La experiencia no elimina un requisito obligatorio.'}
    ], correctOptionId:'a', explanation:'En PJS, una opción que parece eficiente puede ser incorrecta si logra velocidad sacrificando legalidad o calidad de la decisión.', sourceIds:['constitucion-politica','cpaca'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-function-publica-03', moduleId:'m1', skillIds:['derechos-fundamentales','funcion-publica'], type:'pjs', difficulty:2,
    case:'Un ciudadano formula una actuación ante la administración y recibe una decisión que afecta sus intereses sin posibilidad de conocer los fundamentos ni ejercer las garantías previstas.',
    stem:'¿Qué eje constitucional debe activar primero el análisis?',
    options:[
      {id:'a',text:'Debido proceso en las actuaciones administrativas.',rationale:'Las garantías del debido proceso también se proyectan sobre las actuaciones administrativas.'},
      {id:'b',text:'Libertad de cultos como regla principal del caso.',rationale:'No corresponde al problema descrito.'},
      {id:'c',text:'Autonomía territorial como única garantía aplicable.',rationale:'No explica la falta de garantías en la actuación.'}
    ], correctOptionId:'a', explanation:'Antes de buscar una regla sectorial, identifica el derecho o principio que estructura la actuación. El debido proceso es una garantía transversal en decisiones administrativas.', sourceIds:['constitucion-politica','cpaca'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dian-estructura-01', moduleId:'m3', skillIds:['dian','estructura'], type:'pjs', difficulty:2,
    case:'Alguien afirma que una función solo podría ejecutarse en el Nivel Central porque la ficha CT-CR-3007 pertenece a un proceso misional nacional.',
    stem:'¿Qué dato del MERF corrige esa afirmación?',
    options:[
      {id:'a',text:'La ficha indica aplicación en Niveles Central y Seccional.',rationale:'El propio MERF define ese alcance de aplicación.'},
      {id:'b',text:'La ficha únicamente puede aplicarse en aduanas fronterizas.',rationale:'Ese límite no aparece en la ficha.'},
      {id:'c',text:'La ficha está reservada a la Dirección General.',rationale:'El MERF no establece esa restricción.'}
    ], correctOptionId:'a', explanation:'Para interpretar el empleo, el MERF es la fuente directa: CT-CR-3007 tiene aplicación en Niveles Central y Seccional.', sourceIds:['merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dian-estructura-02', moduleId:'m3', skillIds:['dian','proceso-misional'], type:'single', difficulty:2,
    stem:'¿En qué proceso misional ubica el MERF al empleo CT-CR-3007?',
    options:[
      {id:'a',text:'Cumplimiento de Obligaciones Tributarias.',rationale:'Es el proceso señalado expresamente en la ficha.'},
      {id:'b',text:'Gestión Jurídica exclusivamente.',rationale:'No corresponde al proceso indicado para la ficha.'},
      {id:'c',text:'Gestión de Recursos Físicos exclusivamente.',rationale:'No es el proceso misional asignado.'}
    ], correctOptionId:'a', explanation:'La ubicación del empleo explica por qué cartera, recaudo, devoluciones y control extensivo son el centro del currículo.', sourceIds:['merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dian-estructura-03', moduleId:'m3', skillIds:['taci','dian'], type:'pjs', difficulty:2,
    case:'En una sesión de estudio aparecen tres bloques: tributario, aduanero y cambiario. El aspirante concluye que debe estudiar los tres con idéntica profundidad especializada.',
    stem:'¿Cuál estrategia se alinea mejor con CT-CR-3007?',
    options:[
      {id:'a',text:'Comprender el sistema TACI de forma transversal, pero profundizar primero en los subprocesos y competencias expresamente asignados al empleo.',rationale:'El MERF combina una competencia básica TACI con competencias específicas de cartera y recaudo-devoluciones.'},
      {id:'b',text:'Dedicar la mayor parte del tiempo a clasificación arancelaria avanzada.',rationale:'No es competencia funcional específica de esta ficha.'},
      {id:'c',text:'Ignorar por completo cualquier noción aduanera o cambiaria.',rationale:'El MERF sí incluye introducción al sistema TACI como conocimiento básico.'}
    ], correctOptionId:'a', explanation:'La preparación debe distinguir amplitud básica de profundidad funcional. TACI da contexto, pero CT-CR-3007 exige especial dominio de cartera y Recaudo-Devoluciones.', sourceIds:['merf-ct-cr-3007','decreto-1742-2020'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cpaca-aplicacion-01', moduleId:'m4', skillIds:['procedimiento-administrativo','norma-especial'], type:'pjs', difficulty:3,
    case:'Un trámite tributario tiene una regla especial expresa sobre una actuación y, al mismo tiempo, existe una regla general del procedimiento administrativo.',
    stem:'¿Qué enfoque debe seguirse?',
    options:[
      {id:'a',text:'Aplicar primero la regulación especial y acudir a la general cuando corresponda de manera compatible y supletoria.',rationale:'La existencia de un procedimiento especial impide desplazarlo automáticamente por la regla general.'},
      {id:'b',text:'Ignorar siempre la regulación tributaria y usar solo CPACA.',rationale:'La norma general no sustituye sin más la regulación especial.'},
      {id:'c',text:'Elegir libremente la regla que resulte más cómoda para el funcionario.',rationale:'La selección normativa no depende de conveniencia personal.'}
    ], correctOptionId:'a', explanation:'Una técnica clave para PJS es identificar primero si existe norma especial. El CPACA estructura la actuación administrativa, pero no borra procedimientos sectoriales especiales.', sourceIds:['cpaca','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cpaca-aplicacion-02', moduleId:'m4', skillIds:['competencia','procedimiento-administrativo'], type:'pjs', difficulty:3,
    case:'Un servidor identifica la solución jurídica de un caso, pero la decisión corresponde a otra autoridad o funcionario según la distribución de competencias.',
    stem:'¿Qué debe hacer?',
    options:[
      {id:'a',text:'Respetar la competencia y canalizar la actuación por la autoridad habilitada, dejando la trazabilidad que corresponda.',rationale:'Una decisión correcta en el fondo también debe provenir de autoridad competente.'},
      {id:'b',text:'Firmar la decisión porque ya conoce la respuesta jurídica.',rationale:'Conocer la materia no sustituye la competencia.'},
      {id:'c',text:'Pedir al interesado que acepte por escrito que cualquier funcionario decida.',rationale:'La competencia no se crea por consentimiento del administrado.'}
    ], correctOptionId:'a', explanation:'En juicio situacional, competencia es un filtro previo. No basta escoger una figura jurídica válida si quien actúa carece de habilitación.', sourceIds:['cpaca'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-cpaca-aplicacion-03', moduleId:'m4', skillIds:['motivacion','debido-proceso'], type:'pjs', difficulty:3,
    case:'Un expediente tiene dos soportes contradictorios. Para ahorrar tiempo se propone decidir usando solo el que favorece la conclusión inicial del funcionario, sin explicar por qué se descarta el otro.',
    stem:'¿Qué alternativa es más adecuada?',
    options:[
      {id:'a',text:'Valorar los elementos relevantes y motivar la decisión de forma que pueda entenderse el razonamiento administrativo.',rationale:'La decisión debe apoyarse en el expediente y permitir control y contradicción.'},
      {id:'b',text:'Escoger el documento más conveniente sin dejar explicación.',rationale:'La ausencia de motivación y valoración debilita debido proceso y control.'},
      {id:'c',text:'Eliminar del expediente el soporte contradictorio.',rationale:'Alterar el expediente vulnera integridad documental y debido proceso.'}
    ], correctOptionId:'a', explanation:'La calidad de una decisión no depende solo del resultado; importan competencia, soporte, motivación y respeto por las garantías de la actuación.', sourceIds:['cpaca','ley-594-2000'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-obligacion-aplicada-01', moduleId:'m5', skillIds:['obligacion-tributaria','formal-sustancial'], type:'pjs', difficulty:2,
    case:'Un contribuyente pagó el valor del impuesto, pero omitió una obligación formal exigible asociada a su deber tributario.',
    stem:'¿Cuál análisis es correcto?',
    options:[
      {id:'a',text:'El pago de la obligación sustancial no convierte automáticamente en inexistente cualquier obligación formal incumplida.',rationale:'Las obligaciones formales y sustanciales se distinguen y pueden generar consecuencias diferentes.'},
      {id:'b',text:'Todo deber formal desaparece desde que existe cualquier pago.',rationale:'Confunde categorías distintas de obligaciones.'},
      {id:'c',text:'Las obligaciones formales solo existen para funcionarios públicos.',rationale:'Pueden recaer sobre contribuyentes, responsables, agentes y otros obligados definidos por la ley.'}
    ], correctOptionId:'a', explanation:'Control extensivo exige precisamente reconocer incumplimientos formales y sustanciales sin tratarlos como si fueran la misma cosa.', sourceIds:['estatuto-tributario','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-obligacion-aplicada-02', moduleId:'m5', skillIds:['retencion','sujetos'], type:'pjs', difficulty:3,
    case:'Una empresa actúa como agente de retención. El análisis se concentra únicamente en su impuesto propio y omite revisar valores retenidos a terceros que debía declarar y consignar.',
    stem:'¿Qué error conceptual existe?',
    options:[
      {id:'a',text:'Confundir la obligación tributaria propia con deberes que surgen por actuar como agente retenedor.',rationale:'El rol de agente genera deberes específicos sobre valores retenidos.'},
      {id:'b',text:'Considerar que existen obligaciones tributarias administradas por la DIAN.',rationale:'Eso no es el error.'},
      {id:'c',text:'Revisar el cumplimiento de un agente retenedor.',rationale:'Esa revisión se conecta directamente con funciones del empleo.'}
    ], correctOptionId:'a', explanation:'CT-CR-3007 menciona expresamente control del cumplimiento de autorretenedores, grandes contribuyentes y agentes retenedores de IVA. Debes reconocer el rol jurídico detrás de cada obligación.', sourceIds:['estatuto-tributario','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-obligacion-aplicada-03', moduleId:'m5', skillIds:['teoria-imposicion','legalidad'], type:'pjs', difficulty:2,
    case:'Para mejorar el recaudo, un equipo plantea exigir a un grupo de ciudadanos un pago que no está previsto por una obligación creada conforme al marco jurídico aplicable.',
    stem:'¿Cuál es el problema principal?',
    options:[
      {id:'a',text:'La gestión de recaudo no puede crear por sí sola obligaciones tributarias al margen del principio de legalidad.',rationale:'La administración gestiona obligaciones definidas por el ordenamiento; no inventa tributos mediante práctica operativa.'},
      {id:'b',text:'Ninguno si el objetivo fiscal es importante.',rationale:'La finalidad recaudatoria no sustituye la habilitación normativa.'},
      {id:'c',text:'Solo sería problema si el pago se hiciera en efectivo.',rationale:'El medio de pago no resuelve la ausencia de fundamento jurídico.'}
    ], correctOptionId:'a', explanation:'La teoría de la imposición debe conectarse con legalidad: identificar quién, por qué hecho y bajo qué norma existe una obligación es anterior a exigir su cumplimiento.', sourceIds:['constitucion-politica','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-inicio-coactivo-aplicado-01', moduleId:'m11', skillIds:['cobro-coactivo','exigibilidad'], type:'pjs', difficulty:3,
    case:'Se propone expedir mandamiento de pago respecto de una obligación cuya exigibilidad aún no está jurídicamente consolidada.',
    stem:'¿Qué debe verificarse antes de avanzar?',
    options:[
      {id:'a',text:'Que exista título y obligación exigible que permita iniciar válidamente el cobro coactivo.',rationale:'El cobro forzoso exige presupuesto ejecutivo; no basta una expectativa de deuda.'},
      {id:'b',text:'Que el funcionario considere probable que la obligación exista en el futuro.',rationale:'La probabilidad futura no reemplaza exigibilidad.'},
      {id:'c',text:'Que haya un bien embargable, aunque todavía no exista obligación exigible.',rationale:'La existencia de bienes no crea el título ni la exigibilidad.'}
    ], correctOptionId:'a', explanation:'Antes del mandamiento, separa tres preguntas: ¿qué obligación existe?, ¿es exigible?, ¿qué título permite cobrarla? Saltarse ese filtro contamina todo el procedimiento.', sourceIds:['estatuto-tributario','proc-inicio-cobro-0269'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-inicio-coactivo-aplicado-02', moduleId:'m11', skillIds:['mandamiento-pago','notificacion'], type:'pjs', difficulty:3,
    case:'El mandamiento de pago fue expedido, pero el expediente no demuestra que se haya surtido su notificación conforme al procedimiento.',
    stem:'¿Cuál es la decisión más prudente?',
    options:[
      {id:'a',text:'Verificar y surtir correctamente la notificación antes de tratar como agotada la oportunidad de defensa del deudor.',rationale:'La notificación activa efectos procesales y permite ejercer las garantías correspondientes.'},
      {id:'b',text:'Asumir que el deudor lo conoció porque tiene correo electrónico.',rationale:'El conocimiento supuesto no sustituye la notificación procedente.'},
      {id:'c',text:'Pasar directamente al remate para evitar retrasos.',rationale:'Saltar etapas desconoce el procedimiento y el derecho de defensa.'}
    ], correctOptionId:'a', explanation:'En cobro coactivo la secuencia importa. Una actuación válida no produce automáticamente todos sus efectos si no se ha cumplido la notificación que exige el procedimiento.', sourceIds:['estatuto-tributario','proc-mandamiento-0270'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-inicio-coactivo-aplicado-03', moduleId:'m11', skillIds:['mandamiento-pago','excepciones'], type:'single', difficulty:3,
    stem:'Después de la notificación del mandamiento de pago, ¿qué término establece el Estatuto Tributario para pagar o proponer por escrito las excepciones contempladas?',
    options:[
      {id:'a',text:'Quince (15) días.',rationale:'Es el término previsto en el artículo 830 del Estatuto Tributario.'},
      {id:'b',text:'Cinco (5) años.',rationale:'Ese horizonte aparece en otras instituciones, como prescripción, no es este término procesal.'},
      {id:'c',text:'Noventa (90) días.',rationale:'No corresponde al término para pagar o excepcionar el mandamiento.'}
    ], correctOptionId:'a', explanation:'Relaciona siempre el número con la actuación. Quince días se vinculan a la oportunidad posterior a la notificación del mandamiento para pagar o formular excepciones.', sourceIds:['estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-inicio-coactivo-aplicado-04', moduleId:'m11', skillIds:['cobro-coactivo','cronologia'], type:'pjs', difficulty:4,
    case:'En un caso aparecen estas actuaciones: identificación del título, verificación de exigibilidad, expedición del mandamiento, notificación y posteriormente análisis de excepciones.',
    stem:'¿Qué técnica reduce mejor el riesgo de escoger una respuesta incorrecta?',
    options:[
      {id:'a',text:'Ordenar cronológicamente las actuaciones y ubicar exactamente en cuál etapa se encuentra el expediente antes de escoger la figura jurídica.',rationale:'La misma figura puede ser correcta en otro momento y falsa como respuesta para la etapa actual.'},
      {id:'b',text:'Elegir siempre la actuación más coercitiva.',rationale:'La intensidad de la medida no reemplaza la procedencia jurídica.'},
      {id:'c',text:'Ignorar fechas y notificaciones porque solo importa el valor de la deuda.',rationale:'Términos y notificaciones condicionan defensa, prescripción y secuencia procesal.'}
    ], correctOptionId:'a', explanation:'Cobro coactivo es especialmente sensible a cronología. Umbral entrena primero etapa, luego competencia, luego actuación.', sourceIds:['estatuto-tributario','proc-mandamiento-0270','cnsc-2676-especificaciones-pruebas'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dev-fundamentos-aplicado-01', moduleId:'m15', skillIds:['saldo-favor','pago-exceso'], type:'pjs', difficulty:2,
    case:'Una declaración arroja un resultado a favor del contribuyente derivado de la determinación del impuesto. En otro caso, una persona pagó dos veces una obligación que solo debía cancelar una vez.',
    stem:'¿Cómo deben distinguirse los casos?',
    options:[
      {id:'a',text:'El primero corresponde conceptualmente a saldo a favor; el segundo puede configurar pago en exceso.',rationale:'Las figuras tienen origen diferente aunque ambas puedan llevar a recuperar valores.'},
      {id:'b',text:'Ambos son necesariamente pago de lo no debido.',rationale:'En ambos existe una relación tributaria de fondo; el origen del valor recuperable es distinto.'},
      {id:'c',text:'Ambos son sanciones a favor del contribuyente.',rationale:'No son sanciones; son situaciones de saldo o pago recuperable bajo reglas específicas.'}
    ], correctOptionId:'a', explanation:'Antes de buscar término o formulario, clasifica el origen del valor: saldo declarado, pago superior a lo debido o pago sin obligación jurídica.', sourceIds:['estatuto-tributario','dian-devoluciones-servicio-2026'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dev-fundamentos-aplicado-02', moduleId:'m15', skillIds:['pago-no-debido','clasificacion'], type:'pjs', difficulty:3,
    case:'Una persona efectuó un pago a la administración, pero al revisar el caso se establece que no existía obligación jurídica que justificara ese pago.',
    stem:'¿Qué figura debe analizar primero?',
    options:[
      {id:'a',text:'Pago de lo no debido.',rationale:'La característica central es la inexistencia de obligación que justificara el pago.'},
      {id:'b',text:'Saldo a favor originado necesariamente en declaración.',rationale:'El caso no indica que el valor provenga de una liquidación a favor en una declaración.'},
      {id:'c',text:'Medida cautelar.',rationale:'No se trata de asegurar el cobro sino de clasificar un pago sin causa jurídica debida.'}
    ], correctOptionId:'a', explanation:'La etiqueta jurídica depende del origen. En un PJS, identificar correctamente la figura precede a aplicar oportunidad, requisitos y procedimiento.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dev-fundamentos-aplicado-03', moduleId:'m15', skillIds:['compensacion','devolucion'], type:'pjs', difficulty:3,
    case:'Un contribuyente tiene un saldo susceptible de devolución y, al mismo tiempo, obligaciones tributarias vencidas a su cargo.',
    stem:'¿Qué concepto debe considerarse antes de asumir que todo el saldo se entregará en dinero?',
    options:[
      {id:'a',text:'La compensación con obligaciones a cargo cuando legalmente corresponda.',rationale:'Devolución y compensación están conectadas; la existencia de deudas puede afectar el valor finalmente entregado.'},
      {id:'b',text:'El remate de bienes como requisito general de toda devolución.',rationale:'El remate pertenece al cobro sobre bienes, no es requisito general de devolución.'},
      {id:'c',text:'La prescripción de la acción de cobro como única salida posible.',rationale:'La existencia de un saldo a favor no implica prescripción de las deudas.'}
    ], correctOptionId:'a', explanation:'Una devolución procedente no significa necesariamente transferencia íntegra al solicitante. Primero deben considerarse las reglas de compensación aplicables.', sourceIds:['estatuto-tributario','dian-devoluciones-servicio-2026'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-dev-fundamentos-aplicado-04', moduleId:'m15', skillIds:['devoluciones','clasificacion'], type:'pjs', difficulty:4,
    case:'Un aspirante memoriza que “toda devolución tiene el mismo término y los mismos requisitos” y usa esa regla para responder cualquier caso.',
    stem:'¿Cuál es el problema de esa estrategia?',
    options:[
      {id:'a',text:'El procedimiento depende del origen del valor, tipo de solicitud y condiciones especiales; primero debe clasificarse la ruta aplicable.',rationale:'La información oficial DIAN distingue saldos a favor, pagos en exceso/no debido y diferentes rutas con términos y requisitos propios.'},
      {id:'b',text:'Ninguno: una única regla temporal sirve para todas las devoluciones.',rationale:'La DIAN publica rutas y términos diferenciados.'},
      {id:'c',text:'Solo falla cuando el solicitante es una entidad pública.',rationale:'La necesidad de clasificar la ruta no depende de esa condición.'}
    ], correctOptionId:'a', explanation:'En devoluciones, la clasificación correcta evita trasladar reglas de una ruta a otra. Primero origen y supuesto; después oportunidad, requisitos, término y decisión.', sourceIds:['dian-devoluciones-servicio-2026','estatuto-tributario'], verifiedAt:'2026-09-13'
  }

  ,{
    id:'q-core-m6-01', moduleId:'m6', skillIds:['estado-cuenta','normalizacion-saldos'], type:'pjs', difficulty:3,
    case:'El sistema muestra una obligación vencida, pero el expediente contiene un recibo de pago que no aparece correctamente reflejado en la obligación financiera.',
    stem:'¿Qué actuación es más adecuada antes de enviar el caso a cobro?',
    options:[
      {id:'a',text:'Conciliar y normalizar la información con soporte verificable para determinar el saldo real y exigible.',rationale:'La gestión de cartera parte de información depurada; PR-COT-0372 busca establecer el saldo real antes de tratarlo como obligación cobrable.'},
      {id:'b',text:'Cobrar el valor que muestre el sistema sin revisar el soporte.',rationale:'El dato del aplicativo no debe prevalecer ciegamente sobre evidencia válida pendiente de reflejar.'},
      {id:'c',text:'Eliminar manualmente la obligación sin dejar rastro del ajuste.',rationale:'La corrección requiere procedimiento y trazabilidad.'}
    ], correctOptionId:'a', explanation:'El estado de cuenta es una representación de la realidad fiscal, no una realidad autónoma. Si existe un soporte que puede cambiar el saldo, primero se verifica y normaliza.', sourceIds:['proc-normalizacion-obligacion-0372','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m6-02', moduleId:'m6', skillIds:['certificacion-obligaciones','estado-cuenta'], type:'pjs', difficulty:3,
    case:'Otra actuación institucional necesita certificar si una obligación sustancial se encuentra cumplida. El aplicativo presenta una inconsistencia aún no aclarada.',
    stem:'¿Qué criterio debe guiar la certificación?',
    options:[
      {id:'a',text:'Verificar la realidad de la obligación y corregir o canalizar la inconsistencia antes de certificar una conclusión que dependa de ella.',rationale:'PR-COT-0328 conecta certificación con verificación de información y procedimientos de corrección cuando existen inconsistencias.'},
      {id:'b',text:'Certificar automáticamente lo que muestre la primera pantalla consultada.',rationale:'La certificación debe apoyarse en información confiable y verificable.'},
      {id:'c',text:'Negarse siempre a certificar cualquier obligación registrada en sistemas electrónicos.',rationale:'Los sistemas son parte de la operación institucional; el problema es la inconsistencia no resuelta, no el medio electrónico.'}
    ], correctOptionId:'a', explanation:'Certificar implica asumir responsabilidad sobre la información que alimentará otra decisión. Si existe una inconsistencia material, debe tratarse antes de afirmar cumplimiento o incumplimiento.', sourceIds:['proc-certificacion-obligaciones-0328','proc-normalizacion-obligacion-0372'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m6-03', moduleId:'m6', skillIds:['calidad-datos','trazabilidad'], type:'pjs', difficulty:3,
    case:'Se descubre que varios pagos fueron reprocesados con un criterio incorrecto. Un funcionario propone corregir solo el saldo final sin conservar evidencia del cambio.',
    stem:'¿Qué respuesta es más adecuada?',
    options:[
      {id:'a',text:'Aplicar el procedimiento de corrección correspondiente y conservar trazabilidad de origen, ajuste y resultado.',rationale:'La función del empleo exige calidad y unificación de información, no solo producir un número final.'},
      {id:'b',text:'Cambiar el saldo directamente porque lo único importante es que quede en cero.',rationale:'Un saldo correcto sin soporte ni trazabilidad puede producir nuevos errores y problemas de control.'},
      {id:'c',text:'Crear un usuario genérico para hacer todos los ajustes más rápido.',rationale:'Además de no resolver el origen, compromete trazabilidad de accesos.'}
    ], correctOptionId:'a', explanation:'La calidad del estado de cuenta requiere que el dato corregido pueda explicarse y auditarse. Exactitud y trazabilidad van juntas.', sourceIds:['merf-ct-cr-3007','proc-normalizacion-obligacion-0372','manual-seguridad-dian'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m7-01', moduleId:'m7', skillIds:['ear','consignacion','transmision'], type:'pjs', difficulty:3,
    case:'Una EAR transmitió a tiempo la información de recaudo, pero consignó los recursos fuera de la oportunidad aplicable.',
    stem:'¿Cuál análisis es correcto?',
    options:[
      {id:'a',text:'Debe distinguirse el cumplimiento de transmisión del cumplimiento de consignación; una transmisión oportuna no sanea por sí sola la consignación tardía.',rationale:'Son obligaciones operativas distintas dentro del esquema de recaudo.'},
      {id:'b',text:'Si transmitió a tiempo, cualquier retraso en consignar queda automáticamente subsanado.',rationale:'Confunde dos dimensiones diferentes del servicio.'},
      {id:'c',text:'La consignación nunca es objeto de control de las EAR.',rationale:'La oportunidad de consignación es precisamente uno de los aspectos regulados y monitoreados.'}
    ], correctOptionId:'a', explanation:'En EAR, identifica exactamente qué obligación falló: recepción, transmisión, calidad de información o consignación de recursos. Un distractor puede mezclar consecuencias entre ellas.', sourceIds:['proc-indice-consignacion-0029','res-227-2025'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m7-02', moduleId:'m7', skillIds:['ear','conciliacion'], type:'pjs', difficulty:4,
    case:'El reporte de una EAR indica un valor recaudado, pero la conciliación con consignaciones evidencia una diferencia material.',
    stem:'¿Cuál es la respuesta institucional más adecuada?',
    options:[
      {id:'a',text:'Conciliar las fuentes, identificar el origen de la diferencia y gestionar la inconsistencia conforme al procedimiento antes de cerrar el control.',rationale:'PR-COT-0373 existe para contrastar información reportada, recaudo y consignaciones y gestionar diferencias.'},
      {id:'b',text:'Escoger el valor más alto para evitar riesgos y dar por terminado el caso.',rationale:'La prudencia no autoriza inventar el dato correcto.'},
      {id:'c',text:'Eliminar ambos registros y pedir que la EAR empiece de cero.',rationale:'Destruye trazabilidad y no constituye una conciliación controlada.'}
    ], correctOptionId:'a', explanation:'Conciliar no es promediar ni elegir una cifra conveniente: es explicar por qué las fuentes no coinciden y llevarlas a una información soportada.', sourceIds:['proc-conciliacion-ear-0373'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m7-03', moduleId:'m7', skillIds:['ear','sanciones','debido-proceso'], type:'pjs', difficulty:4,
    case:'Una auditoría identifica un posible incumplimiento sancionable de una EAR. El equipo tiene evidencia inicial, pero aún debe precisar la conducta y la regla aplicable.',
    stem:'¿Qué actuación es más sólida?',
    options:[
      {id:'a',text:'Determinar con precisión el incumplimiento, soportarlo y seguir el procedimiento sancionatorio correspondiente con garantías de defensa.',rationale:'La existencia de un hallazgo no elimina la necesidad de tipificar la conducta y respetar procedimiento.'},
      {id:'b',text:'Imponer cualquier sanción disponible para enviar un mensaje preventivo.',rationale:'La sanción exige fundamento y correspondencia con la conducta.'},
      {id:'c',text:'Archivar siempre porque una EAR es un tercero privado.',rationale:'Las EAR están sujetas a obligaciones, seguimiento y régimen sancionatorio.'}
    ], correctOptionId:'a', explanation:'En PJS sancionatorio, la opción más severa no es necesariamente la correcta. Primero identifica obligación, hecho, competencia, procedimiento y defensa.', sourceIds:['proc-sanciones-ear-0030','res-227-2025'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m8-01', moduleId:'m8', skillIds:['control-extensivo','campanas'], type:'pjs', difficulty:3,
    case:'La DIAN detecta miles de obligados con un mismo patrón de incumplimiento formal susceptible de gestión masiva.',
    stem:'¿Qué herramienta se alinea mejor con la función de control extensivo de CT-CR-3007?',
    options:[
      {id:'a',text:'Diseñar una campaña de amplia cobertura, segmentada y trazable, que incentive o requiera el cumplimiento según lineamientos vigentes.',rationale:'El MERF y el procedimiento de control extensivo contemplan gestión masiva de incumplimientos.'},
      {id:'b',text:'Abrir de inmediato un proceso coactivo idéntico contra cada persona sin verificar obligación ni etapa.',rationale:'Control extensivo y cobro coactivo tienen finalidades y presupuestos diferentes.'},
      {id:'c',text:'No actuar porque los incumplimientos masivos no pueden gestionarse institucionalmente.',rationale:'Precisamente el control extensivo busca cobertura amplia.'}
    ], correctOptionId:'a', explanation:'Control extensivo explota la capacidad de segmentar y gestionar poblaciones de obligados. No debe confundirse con una actuación individual de cobro forzoso.', sourceIds:['proc-control-extensivo-0382','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m8-02', moduleId:'m8', skillIds:['control-extensivo','seguimiento'], type:'pjs', difficulty:3,
    case:'Una campaña masiva envió comunicaciones a 40.000 obligados, pero el equipo solo reporta cuántos mensajes fueron enviados y no verifica cambios en cumplimiento.',
    stem:'¿Qué falta para evaluar correctamente la gestión?',
    options:[
      {id:'a',text:'Hacer seguimiento al resultado y medir si la intervención produjo regularización, respuesta o escalamiento según el objetivo.',rationale:'Volumen de comunicaciones no equivale por sí solo a efectividad.'},
      {id:'b',text:'Nada: el número de mensajes enviados es suficiente para demostrar cumplimiento tributario.',rationale:'Mide actividad, no resultado.'},
      {id:'c',text:'Eliminar los registros de quienes no respondieron.',rationale:'Eso impediría seguimiento y trazabilidad.'}
    ], correctOptionId:'a', explanation:'Una campaña necesita ciclo de seguimiento: selección, intervención, respuesta y resultado. Umbral distingue métricas de actividad de evidencia de cumplimiento.', sourceIds:['proc-control-extensivo-0382','informe-gestion-dian-2025'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m8-03', moduleId:'m8', skillIds:['control-extensivo','obligaciones-formales'], type:'pjs', difficulty:4,
    case:'Una persona presentó oportunamente una declaración, pero existe evidencia de una obligación sustancial pendiente. Otra no presenta una declaración obligatoria, aunque afirma que no tiene saldo a pagar.',
    stem:'¿Qué debe reconocer el gestor?',
    options:[
      {id:'a',text:'Son incumplimientos de naturaleza distinta; control extensivo debe identificar si el deber afectado es formal, sustancial o ambos antes de definir la gestión.',rationale:'La estrategia depende de la obligación realmente incumplida.'},
      {id:'b',text:'Ambos casos son idénticos porque toda obligación tributaria es únicamente de pago.',rationale:'Desconoce la distinción formal/sustancial.'},
      {id:'c',text:'Ningún caso puede gestionarse masivamente.',rationale:'El control extensivo precisamente contempla obligaciones formales y sustanciales.'}
    ], correctOptionId:'a', explanation:'Clasificar correctamente el incumplimiento evita usar requerimientos, mensajes o consecuencias correspondientes a otra obligación.', sourceIds:['merf-ct-cr-3007','estatuto-tributario','proc-control-extensivo-0382'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m9-01', moduleId:'m9', skillIds:['cartera','realidad-obligacion'], type:'pjs', difficulty:4,
    case:'Un registro aparece como cartera por $12 millones, pero al conciliar declaraciones, pagos y actos se establece que el saldo real exigible es $7 millones.',
    stem:'¿Qué valor debe orientar la gestión de cobro?',
    options:[
      {id:'a',text:'El saldo real y exigible debidamente normalizado y soportado.',rationale:'La función del empleo exige depurar realidad y exigibilidad de la obligación.'},
      {id:'b',text:'Siempre el valor más alto que haya aparecido históricamente en el sistema.',rationale:'Cobrar un valor no debido contradice la depuración de cartera.'},
      {id:'c',text:'Cero, porque cualquier inconsistencia elimina toda la obligación.',rationale:'Una inconsistencia puede cambiar el saldo, pero no extingue automáticamente la deuda real.'}
    ], correctOptionId:'a', explanation:'La cartera debe representar una obligación real, cuantificada y exigible. Normalizar puede reducir, aumentar o confirmar el saldo, pero no consiste en elegir arbitrariamente.', sourceIds:['proc-normalizacion-obligacion-0372','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m9-02', moduleId:'m9', skillIds:['prescripcion','cartera'], type:'pjs', difficulty:4,
    case:'Al revisar una obligación, el gestor advierte que podría haberse configurado prescripción de la acción de cobro y el expediente requiere reconstruir fechas y eventos interruptivos o suspensivos.',
    stem:'¿Qué debe hacer antes de continuar ejecutando?',
    options:[
      {id:'a',text:'Reconstruir la cronología y aplicar las reglas de prescripción, interrupción y suspensión para determinar si la acción sigue vigente.',rationale:'La prescripción depende de fechas y hechos jurídicos; no se resuelve por intuición.'},
      {id:'b',text:'Ignorar el tiempo transcurrido si el saldo aún aparece en el aplicativo.',rationale:'El registro contable no elimina el análisis jurídico de prescripción.'},
      {id:'c',text:'Declarar prescrita toda obligación con más de un año.',rationale:'No corresponde al término legal ni considera eventos que afectan su cómputo.'}
    ], correctOptionId:'a', explanation:'Prescripción es una de las materias donde la línea de tiempo manda. Fecha de inicio, notificaciones, facilidades y otros eventos pueden alterar el cómputo.', sourceIds:['estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m9-03', moduleId:'m9', skillIds:['remision','prescripcion','extincion'], type:'pjs', difficulty:3,
    case:'Un compañero usa como sinónimos “pago”, “prescripción” y “remisión” porque los tres pueden sacar una obligación de cartera cobrable.',
    stem:'¿Qué corrección conceptual corresponde?',
    options:[
      {id:'a',text:'Son formas o causas jurídicas distintas con presupuestos propios; el resultado operativo puede parecer similar, pero no deben confundirse.',rationale:'La extinción o cierre de una obligación debe reflejar la causa jurídica real.'},
      {id:'b',text:'Son exactamente la misma figura con tres nombres.',rationale:'Tienen fundamento, presupuestos y efectos procedimentales diferentes.'},
      {id:'c',text:'Ninguna puede afectar el estado de cuenta.',rationale:'La situación final de la obligación debe reflejarse correctamente en los sistemas y expediente.'}
    ], correctOptionId:'a', explanation:'Una buena depuración no solo busca “saldo cero”: identifica la razón jurídica por la cual la obligación se pagó, prescribió, remitió o terminó de otra forma.', sourceIds:['estatuto-tributario','proc-extincion-0330'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m10-01', moduleId:'m10', skillIds:['cobro-persuasivo','normalizacion'], type:'pjs', difficulty:3,
    case:'Durante gestión persuasiva el contribuyente responde, reconoce la deuda y manifiesta intención de normalizarla.',
    stem:'¿Cuál objetivo caracteriza mejor esta etapa?',
    options:[
      {id:'a',text:'Promover el cumplimiento y normalización voluntaria antes o al margen de la ejecución forzosa que corresponda.',rationale:'La naturaleza del persuasivo es obtener pago voluntario mediante gestión de cobro no coactiva.'},
      {id:'b',text:'Rematar inmediatamente bienes sin procedimiento coactivo.',rationale:'El remate exige otras etapas y presupuestos.'},
      {id:'c',text:'Condonar la obligación por el solo hecho de responder.',rationale:'La voluntad de pago no extingue la obligación.'}
    ], correctOptionId:'a', explanation:'Persuadir no es ejecutar. Su finalidad es lograr normalización voluntaria, sin confundirlo con las actuaciones coercitivas del proceso administrativo de cobro.', sourceIds:['concepto-cobro-persuasivo-4229-2026','merf-ct-cr-3007'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m10-02', moduleId:'m10', skillIds:['facilidad-pago','incumplimiento'], type:'pjs', difficulty:4,
    case:'Un deudor tiene una facilidad de pago vigente, pero deja de cumplir las cuotas en las condiciones pactadas.',
    stem:'¿Qué enfoque debe seguir el gestor?',
    options:[
      {id:'a',text:'Verificar el incumplimiento y aplicar las consecuencias previstas por la normativa y el acto que concedió la facilidad, preservando soporte y trazabilidad.',rationale:'La facilidad no extingue la obligación; su incumplimiento tiene tratamiento reglado.'},
      {id:'b',text:'Considerar automáticamente pagada toda la deuda desde que se concedió la facilidad.',rationale:'La facilidad organiza el pago, no equivale a pago total.'},
      {id:'c',text:'Borrar el acuerdo del expediente y comenzar como si nunca hubiera existido.',rationale:'La historia de la obligación y la facilidad debe conservarse.'}
    ], correctOptionId:'a', explanation:'Distingue concesión de facilidad, cumplimiento y extinción. La obligación solo se refleja como satisfecha en la medida en que ocurren los eventos jurídicos y pagos correspondientes.', sourceIds:['estatuto-tributario','proc-facilidades-0272'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m10-03', moduleId:'m10', skillIds:['persuasivo-penalizable','verificacion'], type:'pjs', difficulty:4,
    case:'Un sistema alerta sobre un agente retenedor que podría haber omitido consignar valores retenidos. La información inicial presenta diferencias entre periodos y pagos.',
    stem:'¿Qué actuación debe preceder una eventual remisión por la conducta penalizable?',
    options:[
      {id:'a',text:'Verificar y depurar la obligación, pagos y condiciones del caso para establecer con soporte si persiste la omisión relevante.',rationale:'PR-COT-0346 contempla verificaciones previas dentro de la gestión persuasiva penalizable.'},
      {id:'b',text:'Presentar denuncia automáticamente por cualquier alerta sin validar la información.',rationale:'Una alerta es punto de partida, no sustituto de la verificación.'},
      {id:'c',text:'Eliminar la obligación del sistema para evitar un proceso penal.',rationale:'Eso comprometería integridad de la información y no resuelve la obligación.'}
    ], correctOptionId:'a', explanation:'En una materia de alta consecuencia, la calidad de la información es aún más crítica. Primero se determina la realidad de la obligación y el supuesto aplicable.', sourceIds:['proc-persuasivo-penalizable-0346','concepto-omision-20039-2025'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m12-01', moduleId:'m12', skillIds:['excepciones','pago'], type:'pjs', difficulty:3,
    case:'El deudor fue notificado del mandamiento y dentro de la oportunidad aporta soporte idóneo de que la obligación fue pagada.',
    stem:'¿Qué figura debe analizarse dentro de su defensa?',
    options:[
      {id:'a',text:'La excepción de pago efectivo.',rationale:'El pago efectivo figura entre las excepciones al mandamiento.'},
      {id:'b',text:'El avalúo del bien.',rationale:'Avalúo pertenece a una etapa de ejecución sobre bienes y no resuelve este hecho defensivo.'},
      {id:'c',text:'La adjudicación concursal.',rationale:'No corresponde al supuesto presentado.'}
    ], correctOptionId:'a', explanation:'Los distractores suelen ser figuras reales pero ubicadas en otra etapa. Aquí el hecho relevante es pago previo y la defensa se analiza dentro del catálogo de excepciones.', sourceIds:['estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m12-02', moduleId:'m12', skillIds:['excepciones','decision'], type:'pjs', difficulty:4,
    case:'El deudor propone oportunamente excepciones contra el mandamiento. El funcionario considera que probablemente no prosperarán y quiere continuar inmediatamente con la ejecución.',
    stem:'¿Qué debe hacer?',
    options:[
      {id:'a',text:'Tramitar y decidir las excepciones conforme al procedimiento antes de continuar como si no existieran.',rationale:'La oportunidad de defensa no puede vaciarse porque el funcionario anticipe el resultado.'},
      {id:'b',text:'Ignorarlas y rematar porque la DIAN ya expidió mandamiento.',rationale:'El procedimiento reconoce una etapa específica para excepciones.'},
      {id:'c',text:'Borrarlas del expediente y pedir que se presenten después del remate.',rationale:'Alteraría el expediente y eliminaría la defensa en su oportunidad.'}
    ], correctOptionId:'a', explanation:'La procedencia de una excepción se decide, no se presume. Debido proceso exige tramitar la defensa presentada oportunamente.', sourceIds:['estatuto-tributario','cpaca'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m12-03', moduleId:'m12', skillIds:['actos-tramite','recursos'], type:'pjs', difficulty:4,
    case:'Dentro del cobro se profiere una actuación meramente de trámite. El interesado pretende interponer un recurso sin que exista norma que lo autorice para esa actuación.',
    stem:'¿Qué regla general del procedimiento de cobro debe recordarse?',
    options:[
      {id:'a',text:'Las actuaciones de trámite no tienen recurso salvo que la ley lo prevea expresamente para una actuación definitiva o específica.',rationale:'El Estatuto contiene una regla especial sobre recursos dentro del procedimiento administrativo de cobro.'},
      {id:'b',text:'Toda actuación, incluso un impulso interno, tiene siempre apelación y reposición.',rationale:'No corresponde a la regla especial del cobro.'},
      {id:'c',text:'Nunca existe recurso contra ninguna decisión de cobro.',rationale:'También es falso; hay actuaciones definitivas con recursos expresamente previstos.'}
    ], correctOptionId:'a', explanation:'No respondas “siempre hay recurso” ni “nunca hay recurso”. Identifica qué acto es, si es de trámite o definitivo y qué habilitación especial existe.', sourceIds:['estatuto-tributario'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m13-01', moduleId:'m13', skillIds:['medidas-cautelares','proporcionalidad'], type:'pjs', difficulty:4,
    case:'Para asegurar una obligación relativamente baja se propone afectar indiscriminadamente todos los activos conocidos del deudor sin revisar límites, suficiencia ni necesidad.',
    stem:'¿Cuál es el enfoque correcto?',
    options:[
      {id:'a',text:'Aplicar la medida dentro de los límites y criterios legales, buscando asegurar el crédito sin exceder injustificadamente lo necesario.',rationale:'La cautela tiene finalidad de aseguramiento y está sometida a reglas y límites.'},
      {id:'b',text:'Embargar todo siempre, porque una medida más amplia nunca puede ser cuestionada.',rationale:'La existencia de la deuda no elimina límites legales.'},
      {id:'c',text:'No adoptar jamás medidas cautelares en materia tributaria.',rationale:'El Estatuto y los procedimientos DIAN contemplan medidas cautelares.'}
    ], correctOptionId:'a', explanation:'La medida cautelar no es un castigo; es un mecanismo de aseguramiento. Debes relacionar finalidad, oportunidad, bien y límites.', sourceIds:['estatuto-tributario','proc-medidas-0327'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m13-02', moduleId:'m13', skillIds:['secuestro','costo-beneficio'], type:'pjs', difficulty:4,
    case:'Existe un bien embargado, pero el análisis previo concluye que practicar el secuestro generaría costos desproporcionados frente a la recuperación probable.',
    stem:'¿Qué enseña PR-COT-0388 para este tipo de situación?',
    options:[
      {id:'a',text:'El costo-beneficio debe analizarse antes de practicar el secuestro y puede conducir a no continuarlo respecto del bien, con las actuaciones procedentes.',rationale:'El procedimiento incorpora expresamente este análisis antes de la diligencia.'},
      {id:'b',text:'Todo embargo obliga siempre a secuestrar sin evaluar utilidad.',rationale:'Desconoce el análisis previsto por el procedimiento.'},
      {id:'c',text:'El bien debe adjudicarse automáticamente a la DIAN sin secuestro ni avalúo.',rationale:'Salta etapas y figuras distintas.'}
    ], correctOptionId:'a', explanation:'La ejecución sobre bienes también exige gestión eficiente. Una actuación jurídicamente posible puede no ser razonable si el procedimiento ordena analizar su costo-beneficio.', sourceIds:['proc-secuestro-0388'], verifiedAt:'2026-09-13'
  },
  {
    id:'q-core-m13-03', moduleId:'m13', skillIds:['levantamiento-medidas','extincion'], type:'pjs', difficulty:3,
    case:'La obligación asegurada mediante una medida cautelar se extingue totalmente por pago y el expediente lo tiene plenamente acreditado.',
    stem:'¿Qué debe revisarse respecto de la medida?',
    options:[
      {id:'a',text:'La procedencia de su levantamiento conforme al procedimiento y la actualización coherente del expediente y sistemas.',rationale:'La cautela sirve a una obligación; extinguida esta, debe gestionarse su levantamiento cuando corresponda.'},
      {id:'b',text:'Mantenerla indefinidamente como prevención frente a deudas futuras no existentes.',rationale:'La medida no debe sobrevivir sin fundamento a la obligación que aseguraba.'},
      {id:'c',text:'Convertirla automáticamente en una sanción.',rationale:'Medida cautelar y sanción son figuras distintas.'}
    ], correctOptionId:'a', explanation:'La terminación correcta también es parte del procedimiento: obligación, medida y sistemas deben quedar coherentes con la nueva realidad jurídica.', sourceIds:['proc-levantamiento-medidas-0345','proc-extincion-0330'], verifiedAt:'2026-09-13'
  }

]
