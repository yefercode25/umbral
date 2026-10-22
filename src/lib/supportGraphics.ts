export type SupportGraphic = {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

export type DianGraphicCatalogItem = SupportGraphic & {
  moduleId: string
  moduleCode: string
  category: 'Fundamentos y GOA' | 'Tributo y Recaudo' | 'Núcleo Cartera y Cobro' | 'Devoluciones' | 'Sistemas, Ética y PJS' | 'Transversal y Datos'
  lessonPath: string
}

const graphicsCatalog = {
  courseMap: {
    id: 'course-map',
    eyebrow: 'Mapa general',
    title: 'Mapa del curso DIAN 2676 · Gestor II',
    description:
      'Resume el recorrido completo de las 9 secciones y 29 módulos del curso para orientar el estudio antes de entrar al detalle.',
    image: '/media/lesson-support/course-map.webp',
    alt: 'Infografía con el mapa del curso DIAN 2676 Gestor II y sus bloques temáticos.',
  },
  goaExamBlueprint: {
    id: 'goa-2676-exam-blueprint',
    eyebrow: 'GOA 19/10/2026 · Reglas oficiales',
    title: 'Arquitectura oficial del examen DIAN 2676 · Gestor II',
    description:
      'Sintetiza el corte normativo inclusivo (19/06/2026), tablas de ponderación por modalidad, umbral funcional 70.00 (PJS 3 opciones), escala Likert de 4 niveles y jornada de 5 horas del 08/11/2026.',
    image: '/media/lesson-support/goa-2676-exam-blueprint.webp',
    alt: 'Infografía sobre la Guía de Orientación al Aspirante DIAN 2676 del 19 de octubre de 2026.',
  },
  mipg: {
    id: 'mipg-dimensions',
    eyebrow: 'MIPG · contraste por corte GOA',
    title: 'MIPG en la prueba DIAN: Manual 6.1 (7 dimensiones) vs. Versión 7 (6 dimensiones)',
    description:
      'Contrasta visualmente el Manual Operativo v6.1 de siete dimensiones (vigente al corte del 19/06/2026 de la GOA) frente a la actualización Versión 7 de seis dimensiones publicada en agosto de 2026.',
    image: '/media/lesson-support/mipg-dimensions.webp',
    alt: 'Infografía comparativa entre MIPG Manual 6.1 de siete dimensiones (vigente al corte de junio de 2026) y Versión 7 de seis dimensiones (agosto de 2026).',
  },
  cpaca: {
    id: 'cpaca-route',
    eyebrow: 'Ruta procedimental',
    title: 'Ruta básica de la actuación administrativa y PQRSD',
    description:
      'Visualiza inicio, competencia, términos de derecho de petición (15d, 10d, 30d), trámite, publicidad, recursos y ejecutoriedad bajo CPACA.',
    image: '/media/lesson-support/cpaca-route.webp',
    alt: 'Infografía con la ruta básica de la actuación administrativa bajo CPACA.',
  },
  administrativeActStages: {
    id: 'administrative-act-stages',
    eyebrow: 'Guía rápida',
    title: 'Notificación, recursos, firmeza y ejecutoriedad del acto',
    description:
      'Ordena las cinco etapas clave del acto administrativo más la pérdida de fuerza ejecutoria (Art. 91 CPACA) y evita confusiones entre publicar, notificar, decidir y ejecutar.',
    image: '/media/lesson-support/administrative-act-stages.webp',
    alt: 'Infografía sobre decisión, notificación, recursos, firmeza y ejecutoriedad del acto administrativo.',
  },
  dianStructure: {
    id: 'dian-structure-levels',
    eyebrow: 'Apoyo de estudio',
    title: 'Estructura DIAN y niveles de gestión (Decreto 1742/2020)',
    description:
      'Resume misión TACI, nivel central (Dirección General y Subdirecciones de Impuestos), nivel local (Seccionales) y nivel delegado para ubicar competencias.',
    image: '/media/lesson-support/dian-structure-levels.webp',
    alt: 'Infografía con la estructura DIAN, sus niveles de gestión y la misión institucional.',
  },
  ley2586Aduanas: {
    id: 'ley-2586-aduanas-transicion',
    eyebrow: 'Actualización normativa · Complemento M3',
    title: 'Ley 2586 de 2026: Régimen sancionatorio aduanero y transición',
    description:
      'Ubica la Ley 2586 del 19/06/2026 dentro del corte inclusivo de la GOA, la sustitución del Decreto Ley 920/2023, gradualidad, transición (Art. 112) y su distinción frente al cobro tributario ET.',
    image: '/media/lesson-support/ley-2586-aduanas-transicion.webp',
    alt: 'Infografía sobre la Ley 2586 de 2026 de régimen sancionatorio aduanero y su regla de transición.',
  },
  taxTheory: {
    id: 'tax-imposition-theory',
    eyebrow: 'Fundamento tributario',
    title: 'Teoría de la imposición y 5 elementos del tributo (Art. 338 CP)',
    description:
      'Conecta sujeto activo, sujeto pasivo, hecho generador, base gravable y tarifa con la distinción entre obligación sustancial (pagar) y obligaciones formales.',
    image: '/media/lesson-support/tax-imposition-theory.webp',
    alt: 'Infografía sobre teoría de la imposición y los elementos del tributo.',
  },
  accountChecklist: {
    id: 'account-checklist',
    eyebrow: 'Lectura técnica',
    title: 'Checklist de estado de cuenta e imputación proporcional (Art. 804 ET)',
    description:
      'Resume titularidad, período, firmeza, recibos 490, regla de imputación proporcional (impuesto, sanción e intereses) y depuración previa al cobro.',
    image: '/media/lesson-support/account-checklist.webp',
    alt: 'Infografía checklist para lectura del estado de cuenta e imputación Art. 804 ET.',
  },
  earCycle: {
    id: 'ear-cycle',
    eyebrow: 'Recaudo y control',
    title: 'Ciclo operativo y sancionatorio de las EAR (Arts. 801 y 674–678 ET)',
    description:
      'Sintetiza autorización, recepción en ventanilla/canal, consignación al Tesoro, entrega de archivos magnéticos, conciliación y sanciones específicas a los bancos recaudadores.',
    image: '/media/lesson-support/ear-cycle.webp',
    alt: 'Infografía del ciclo EAR con autorización, operación, conciliación y régimen sancionatorio.',
  },
  extensiveControl: {
    id: 'extensive-control',
    eyebrow: 'Control extensivo',
    title: 'Del dato al cumplimiento: flujo del control extensivo',
    description:
      'Ordena la lógica de cruces de exógena/facturación, segmentación de omisos/inexactos/morosos, depuración, requerimiento persuasivo y regularización o traslado.',
    image: '/media/lesson-support/extensive-control.webp',
    alt: 'Infografía sobre el flujo del control extensivo desde los datos hasta la regularización.',
  },
  prescriptionRoute: {
    id: 'prescription-interruption-suspension',
    eyebrow: 'Núcleo CT-CR-3007 · Cartera',
    title: 'Prescripción de la acción de cobro (5 años): inicio, interrupción y suspensión',
    description:
      'Contrasta los 4 eventos de inicio del conteo de 5 años (Art. 817 ET), las 4 causales de interrupción que reinician el reloj a cero (Art. 818) y las 3 causales de suspensión, más el pago válido de deuda prescrita (Art. 819).',
    image: '/media/lesson-support/prescription-interruption-suspension.webp',
    alt: 'Infografía comparativa sobre prescripción de la acción de cobro, interrupción y suspensión (Arts. 817 a 819 ET).',
  },
  persuasiveVsCoactive: {
    id: 'persuasive-vs-coactive',
    eyebrow: 'Comparación operativa',
    title: 'Cobro persuasivo vs. cobro coactivo',
    description:
      'Aclara las diferencias de propósito, título ejecutivo exigible, actos, recursos y efecto sobre la prescripción entre la etapa persuasiva y el cobro coactivo.',
    image: '/media/lesson-support/persuasive-vs-coactive.webp',
    alt: 'Infografía comparativa entre cobro persuasivo y cobro coactivo.',
  },
  paymentFacilities: {
    id: 'payment-facilities-guarantees',
    eyebrow: 'Facilidades y garantías',
    title: 'Facilidades de pago (Art. 814 ET), garantías e incumplimiento',
    description:
      'Muestra plazos (hasta 1 año con relación de bienes vs. más de 1 a 5 años con garantía real/bancaria/póliza), suspensión del coactivo (Art. 841) y declaratoria de incumplimiento (Art. 814-3).',
    image: '/media/lesson-support/payment-facilities-guarantees.webp',
    alt: 'Infografía sobre facilidades de pago y tipos de garantías aplicables.',
  },
  coactiveRoute: {
    id: 'coactive-route',
    eyebrow: 'Secuencia funcional',
    title: 'Ruta general del cobro coactivo (Arts. 823–843-2 ET)',
    description:
      'Refuerza la secuencia de exigibilidad, título ejecutivo (Art. 828), mandamiento de pago (Art. 826), notificación, término de 15 días hábiles, decisión en 1 mes y orden de ejecución.',
    image: '/media/lesson-support/coactive-route.webp',
    alt: 'Infografía con la ruta general del cobro coactivo.',
  },
  coactiveExceptions: {
    id: 'coactive-exceptions-defense',
    eyebrow: 'Defensa y decisión en coactivo',
    title: 'Las 7 excepciones contra el mandamiento (Art. 831 ET) y su trámite',
    description:
      'Detalla las 7 excepciones taxativas del deudor, las 2 adicionales del solidario/garante, el plazo de 15 días hábiles, decisión en 1 mes, reposición en 1 mes y control judicial (Art. 835 ET).',
    image: '/media/lesson-support/coactive-exceptions-defense.webp',
    alt: 'Infografía sobre las excepciones al mandamiento de pago y su trámite en cobro coactivo.',
  },
  precautionaryMeasures: {
    id: 'precautionary-measures',
    eyebrow: 'Ruta de estudio',
    title: 'Medidas cautelares y límite de embargo (Arts. 837–841 ET)',
    description:
      'Sintetiza oportunidad previa o coactiva, límite del doble de deuda más intereses (Art. 838 ET), límite inembargable en ahorros (Art. 837-1), registro, secuestro y causales de levantamiento.',
    image: '/media/lesson-support/precautionary-measures.webp',
    alt: 'Infografía sobre medidas cautelares, límite del doble de la deuda y causales de levantamiento.',
  },
  concursalCreditRoute: {
    id: 'concursal-credit-route',
    eyebrow: 'Proceso colectivo',
    title: 'Ruta del crédito fiscal en concurso e insolvencia (Ley 1116/2006)',
    description:
      'Ubica la suspensión del coactivo al inicio concursal, separación entre deudas pre-inicio (graduables) y post-inicio (gastos de administración Art. 71), presentación y objeciones.',
    image: '/media/lesson-support/concursal-credit-route.webp',
    alt: 'Infografía con la ruta del crédito fiscal en concurso.',
  },
  refundsSaldosMatrix: {
    id: 'refunds-saldos-inadmision-matrix',
    eyebrow: 'Fundamentos de devoluciones',
    title: 'Saldo a favor vs. pago en exceso/no debido e inadmisión vs. rechazo',
    description:
      'Compara el plazo de solicitud (2 años saldo a favor Art. 854 vs. 5 años pago en exceso/no debido) y diferencia causales de inadmisión subsanable (Art. 858) frente a rechazo definitivo (Art. 857).',
    image: '/media/lesson-support/refunds-saldos-inadmision-matrix.webp',
    alt: 'Infografía comparativa de saldos a favor, pago en exceso, inadmisión y rechazo en devoluciones.',
  },
  refundsRoute: {
    id: 'refunds-route',
    eyebrow: 'Devoluciones y compensaciones',
    title: 'Ruta del procedimiento de devolución y compensación (Arts. 850–865 ET)',
    description:
      'Condensa solicitud, revisión formal, inadmisión (1 mes), investigación previa (suspensión hasta 90d Art. 857-1), términos de 50d/20d con garantía y prelación de compensación (Art. 861).',
    image: '/media/lesson-support/refunds-route-v2.webp',
    alt: 'Infografía con la ruta de aprendizaje del procedimiento de devolución y compensación.',
  },
  documentManagement: {
    id: 'document-management-traceability',
    eyebrow: 'Gestión documental',
    title: 'Gestión documental, expediente y trazabilidad (Ley 594/2000)',
    description:
      'Aterriza radicación, conformación cronológica del expediente, TRD, reserva tributaria (Art. 583 ET), constancias de notificación y valor probatorio.',
    image: '/media/lesson-support/document-management-traceability.webp',
    alt: 'Infografía sobre gestión documental y trazabilidad institucional.',
  },
  dianSystemsSecurity: {
    id: 'dian-systems-security-traceability',
    eyebrow: 'Sistemas y calidad de datos',
    title: 'Sistemas de información, accesos, reserva (Art. 583 ET) y trazabilidad',
    description:
      'Conecta reserva tributaria, principio de mínimo privilegio, bitácoras de auditoría, prohibición de ajustes sin soporte documental y gobierno de datos en cartera y recaudo.',
    image: '/media/lesson-support/dian-systems-security-traceability.webp',
    alt: 'Infografía sobre sistemas de información, seguridad de accesos y reserva tributaria en la DIAN.',
  },
  dianCompetenciesMerf: {
    id: 'dian-competencies-integrity-merf',
    eyebrow: 'Comportamentales e integridad',
    title: 'Competencias MERF CT-CR-3007 (Niveles 3–4), ética y escala Likert',
    description:
      'Integra las 6 competencias básicas DIAN, las específicas niveles 3 y 4 (Adaptabilidad, Comedimiento, Trabajo en Equipo, Solución de Problemas), valores públicos y el autoinforme Likert de 4 niveles.',
    image: '/media/lesson-support/dian-competencies-integrity-merf.webp',
    alt: 'Infografía sobre competencias comportamentales MERF CT-CR-3007, integridad y escala Likert de 4 niveles.',
  },
  pjsMethod: {
    id: 'pjs-method',
    eyebrow: 'Método de decisión',
    title: 'Cómo resolver una PJS en 5 pasos (GOA 4.4)',
    description:
      'Refuerza el método Hecho y Etapa → Competencia → Norma y Corte (19/06/2026) → Soporte en Expediente → Descarte de Distractores en preguntas de tres opciones.',
    image: '/media/lesson-support/pjs-method.webp',
    alt: 'Infografía guía sobre cómo resolver una pregunta de juicio situacional PJS.',
  },
  excelLogicQuantitative: {
    id: 'excel-logic-quantitative-toolkit',
    eyebrow: 'Herramientas transversales',
    title: 'Excel aplicado a cartera, lógica proposicional y conjuntos',
    description:
      'Resume referencias absolutas ($A$1), SUMAR.SI.CONJUNTO, BUSCARV/BUSCARX con coincidencia exacta (0), inclusión-exclusión de conjuntos y variaciones porcentuales.',
    image: '/media/lesson-support/excel-logic-quantitative-toolkit.webp',
    alt: 'Infografía sobre Excel tributario, funciones condicionales, lógica y conjuntos.',
  },
  dataDecision: {
    id: 'data-decision-foundations',
    eyebrow: 'Razonamiento cuantitativo',
    title: 'Datos para decidir mejor: estadística, sesgo y probabilidad condicional',
    description:
      'Conecta muestra, sesgo, mediana vs. promedio ponderado, cuantificadores, conteo por conjuntos y probabilidad condicional P(A|B) en gestión pública.',
    image: '/media/lesson-support/data-decision-foundations.webp',
    alt: 'Infografía sobre muestra, sesgo, cuantificadores y conteo para apoyar el análisis de datos.',
  },

  procuraduriaCourseRoute: {
    id: 'procuraduria-course-route',
    eyebrow: 'Ruta integral',
    title: 'Ruta de estudio · Procuraduría 104-2026',
    description:
      'Ubica la progresión del curso desde fundamentos jurídicos hasta instrucción, prueba, prevención, práctica y refuerzo profesional.',
    image: '/media/lesson-support/procuraduria-course-route.webp',
    alt: 'Infografía con la ruta de estudio del curso Procuraduría 104-2026 para Profesional Universitario 3PU-15.',
  },
  colombianState: {
    id: 'colombian-state-public-function',
    eyebrow: 'Fundamentos institucionales',
    title: 'Estado colombiano, función pública y organización territorial',
    description:
      'Conecta Estado Social de Derecho, ramas del poder, función administrativa, servidor público y organización territorial para leer casos desde la competencia.',
    image: '/media/lesson-support/colombian-state-public-function.webp',
    alt: 'Infografía sobre Estado colombiano, función pública y organización territorial.',
  },
  procuraduriaStructure: {
    id: 'procuraduria-structure-competence',
    eyebrow: 'Mapa institucional',
    title: 'Procuraduría General de la Nación · estructura, funciones y competencia',
    description:
      'Resume Ministerio Público, funciones misionales, niveles de actuación y los filtros básicos para verificar competencia antes de actuar.',
    image: '/media/lesson-support/procuraduria-structure-competence.webp',
    alt: 'Infografía sobre estructura, funciones y competencia de la Procuraduría General de la Nación.',
  },
  cpacaPetition: {
    id: 'cpaca-petition-route',
    eyebrow: 'Actuación administrativa',
    title: 'CPACA y derecho de petición',
    description:
      'Ordena la actuación administrativa desde su inicio hasta firmeza y resume las principales rutas de petición y respuesta ciudadana.',
    image: '/media/lesson-support/cpaca-petition-route.webp',
    alt: 'Infografía sobre actuación administrativa, CPACA y derecho de petición.',
  },
  disciplinaryProcess: {
    id: 'disciplinary-process-route',
    eyebrow: 'Ruta procesal',
    title: 'Ruta del proceso disciplinario',
    description:
      'Visualiza el tránsito desde la noticia disciplinaria y evaluación inicial hasta prueba, cierre, archivo o cargos y traslado a juzgamiento.',
    image: '/media/lesson-support/disciplinary-process-route.webp',
    alt: 'Infografía con la ruta general del proceso disciplinario en etapa de instrucción.',
  },
  disciplinaryEvidence: {
    id: 'disciplinary-evidence-guide',
    eyebrow: 'Derecho probatorio',
    title: 'Qué probar, con qué y cómo valorarlo',
    description:
      'Integra hecho, hipótesis, necesidad probatoria, pertinencia, conducencia, utilidad, legalidad, contradicción, valoración y decisión.',
    image: '/media/lesson-support/disciplinary-evidence-guide.webp',
    alt: 'Infografía de derecho probatorio disciplinario y medios de prueba.',
  },
  preventiveControl: {
    id: 'preventive-control-intervention',
    eyebrow: 'Función misional',
    title: 'Función preventiva, control de gestión e intervención',
    description:
      'Diferencia prevención, seguimiento, alertas, mejora e intervención para proteger legalidad, derechos e interés general.',
    image: '/media/lesson-support/preventive-control-intervention.webp',
    alt: 'Infografía sobre función preventiva, control de gestión e intervención de la Procuraduría.',
  },
  contractingIntegrityTerritory: {
    id: 'contracting-integrity-territory',
    eyebrow: 'Gestión pública aplicada',
    title: 'Contratación, integridad y ordenamiento territorial',
    description:
      'Agrupa ciclo contractual, integridad y anticorrupción, competencias territoriales y criterios de revisión para casos prácticos.',
    image: '/media/lesson-support/contracting-integrity-territory.webp',
    alt: 'Infografía sobre contratación estatal, integridad, anticorrupción y ordenamiento territorial.',
  },
  systemsEvidence: {
    id: 'systems-disciplinary-evidence',
    eyebrow: 'Ruta profesional',
    title: 'Ingeniería de Sistemas aplicada al proceso disciplinario',
    description:
      'Conecta logs, autenticación, bases de datos, correo, metadatos, hash, preservación e informe técnico con los límites de la inferencia jurídica.',
    image: '/media/lesson-support/systems-disciplinary-evidence.webp',
    alt: 'Infografía sobre Ingeniería de Sistemas, evidencia digital y trazabilidad aplicada al proceso disciplinario.',
  },
} satisfies Record<string, SupportGraphic>

const moduleGraphicMap: Record<string, SupportGraphic> = {
  m0: graphicsCatalog.goaExamBlueprint,
  m1: graphicsCatalog.colombianState,
  m2: graphicsCatalog.mipg,
  m3: graphicsCatalog.dianStructure,
  m4: graphicsCatalog.cpaca,
  m5: graphicsCatalog.taxTheory,
  m6: graphicsCatalog.accountChecklist,
  m7: graphicsCatalog.earCycle,
  m8: graphicsCatalog.extensiveControl,
  m9: graphicsCatalog.prescriptionRoute,
  m10: graphicsCatalog.paymentFacilities,
  m11: graphicsCatalog.coactiveRoute,
  m12: graphicsCatalog.coactiveExceptions,
  m13: graphicsCatalog.precautionaryMeasures,
  m14: graphicsCatalog.concursalCreditRoute,
  m15: graphicsCatalog.refundsSaldosMatrix,
  m16: graphicsCatalog.refundsRoute,
  m17: graphicsCatalog.dianSystemsSecurity,
  m18: graphicsCatalog.dianCompetenciesMerf,
  m19: graphicsCatalog.dianCompetenciesMerf,
  m20: graphicsCatalog.dianCompetenciesMerf,
  m21: graphicsCatalog.pjsMethod,
  m22: graphicsCatalog.pjsMethod,
  m23: graphicsCatalog.goaExamBlueprint,
  m24: graphicsCatalog.excelLogicQuantitative,
  m25: graphicsCatalog.excelLogicQuantitative,
  m26: graphicsCatalog.dataDecision,
  m27: graphicsCatalog.excelLogicQuantitative,
  m28: graphicsCatalog.dataDecision,
}

const lessonGraphicMap: Record<string, SupportGraphic> = {
  // Procuraduría mappings (intact)
  'pgn-m0-l1': graphicsCatalog.procuraduriaCourseRoute,
  'pgn-m5-l1': graphicsCatalog.colombianState,
  'pgn-m10-l1': graphicsCatalog.procuraduriaStructure,
  'pgn-m16-l1': graphicsCatalog.cpacaPetition,
  'pgn-m25-l1': graphicsCatalog.disciplinaryProcess,
  'pgn-m35-l1': graphicsCatalog.disciplinaryEvidence,
  'pgn-m45-l1': graphicsCatalog.preventiveControl,
  'pgn-m50-l1': graphicsCatalog.contractingIntegrityTerritory,
  'pgn-m55-l1': graphicsCatalog.contractingIntegrityTerritory,
  'pgn-m60-l1': graphicsCatalog.systemsEvidence,
  'pgn-m80-l1': graphicsCatalog.systemsEvidence,

  // Original DIAN lesson mappings (preserved)
  'm0-l3': graphicsCatalog.courseMap,
  'm2-l6': graphicsCatalog.mipg,
  'm2-l8': graphicsCatalog.documentManagement,
  'm3-l5': graphicsCatalog.dianStructure,
  'm4-l7': graphicsCatalog.cpaca,
  'm4-l11': graphicsCatalog.administrativeActStages,
  'm5-l6': graphicsCatalog.taxTheory,
  'm6-l1': graphicsCatalog.accountChecklist,
  'm7-l9': graphicsCatalog.earCycle,
  'm8-l1': graphicsCatalog.extensiveControl,
  'm10-l6': graphicsCatalog.persuasiveVsCoactive,
  'm10-l9': graphicsCatalog.paymentFacilities,
  'm11-l1': graphicsCatalog.coactiveRoute,
  'm13-l1': graphicsCatalog.precautionaryMeasures,
  'm14-l1': graphicsCatalog.concursalCreditRoute,
  'm16-l1': graphicsCatalog.refundsRoute,
  'm21-l3': graphicsCatalog.pjsMethod,
  'm26-l7': graphicsCatalog.dataDecision,

  // Extended DIAN lesson mappings across all 29 modules (master, GOA, clinics, dossiers, Ley 2586)
  'm0-master-2026': graphicsCatalog.courseMap,
  'm0-l1': graphicsCatalog.courseMap,
  'm0-goa-2026': graphicsCatalog.goaExamBlueprint,
  'm0-advanced-2026': graphicsCatalog.goaExamBlueprint,
  'm1-master-2026': graphicsCatalog.colombianState,
  'm1-l1': graphicsCatalog.colombianState,
  'm2-master-2026': graphicsCatalog.mipg,
  'm2-practico-2026-mipg-corte': graphicsCatalog.mipg,
  'm2-practico-2026-archivo-trd': graphicsCatalog.documentManagement,
  'm3-master-2026': graphicsCatalog.dianStructure,
  'm3-l1': graphicsCatalog.dianStructure,
  'm3-ley-2586-2026': graphicsCatalog.ley2586Aduanas,
  'm4-master-2026': graphicsCatalog.cpaca,
  'm4-l1': graphicsCatalog.cpaca,
  'm4-advanced-2026': graphicsCatalog.administrativeActStages,
  'm5-master-2026': graphicsCatalog.taxTheory,
  'm5-l1': graphicsCatalog.taxTheory,
  'm6-master-2026': graphicsCatalog.accountChecklist,
  'm6-dossier-2026': graphicsCatalog.accountChecklist,
  'm7-master-2026': graphicsCatalog.earCycle,
  'm7-l1': graphicsCatalog.earCycle,
  'm7-dossier-2026': graphicsCatalog.earCycle,
  'm8-master-2026': graphicsCatalog.extensiveControl,
  'm8-dossier-2026': graphicsCatalog.extensiveControl,
  'm9-master-2026': graphicsCatalog.prescriptionRoute,
  'm9-l1': graphicsCatalog.prescriptionRoute,
  'm9-dossier-2026': graphicsCatalog.prescriptionRoute,
  'm9-clinic-2026': graphicsCatalog.prescriptionRoute,
  'm10-master-2026': graphicsCatalog.persuasiveVsCoactive,
  'm10-l1': graphicsCatalog.persuasiveVsCoactive,
  'm10-dossier-2026': graphicsCatalog.paymentFacilities,
  'm10-clinic-2026': graphicsCatalog.paymentFacilities,
  'm11-master-2026': graphicsCatalog.coactiveRoute,
  'm11-dossier-2026': graphicsCatalog.coactiveRoute,
  'm11-clinic-2026': graphicsCatalog.coactiveRoute,
  'm12-master-2026': graphicsCatalog.coactiveExceptions,
  'm12-l1': graphicsCatalog.coactiveExceptions,
  'm12-dossier-2026': graphicsCatalog.coactiveExceptions,
  'm12-clinic-2026': graphicsCatalog.coactiveExceptions,
  'm13-master-2026': graphicsCatalog.precautionaryMeasures,
  'm13-dossier-2026': graphicsCatalog.precautionaryMeasures,
  'm13-clinic-2026': graphicsCatalog.precautionaryMeasures,
  'm14-master-2026': graphicsCatalog.concursalCreditRoute,
  'm14-dossier-2026': graphicsCatalog.concursalCreditRoute,
  'm14-clinic-2026': graphicsCatalog.concursalCreditRoute,
  'm15-master-2026': graphicsCatalog.refundsSaldosMatrix,
  'm15-l1': graphicsCatalog.refundsSaldosMatrix,
  'm15-dossier-2026': graphicsCatalog.refundsSaldosMatrix,
  'm15-clinic-2026': graphicsCatalog.refundsSaldosMatrix,
  'm16-master-2026': graphicsCatalog.refundsRoute,
  'm16-dossier-2026': graphicsCatalog.refundsRoute,
  'm16-clinic-2026': graphicsCatalog.refundsRoute,
  'm17-master-2026': graphicsCatalog.dianSystemsSecurity,
  'm17-l1': graphicsCatalog.dianSystemsSecurity,
  'm17-dossier-2026': graphicsCatalog.dianSystemsSecurity,
  'm17-clinic-2026': graphicsCatalog.dianSystemsSecurity,
  'm18-master-2026': graphicsCatalog.dianCompetenciesMerf,
  'm18-l1': graphicsCatalog.dianCompetenciesMerf,
  'm19-master-2026': graphicsCatalog.dianCompetenciesMerf,
  'm19-l1': graphicsCatalog.dianCompetenciesMerf,
  'm20-master-2026': graphicsCatalog.dianCompetenciesMerf,
  'm20-l1': graphicsCatalog.dianCompetenciesMerf,
  'm21-master-2026': graphicsCatalog.pjsMethod,
  'm21-l1': graphicsCatalog.pjsMethod,
  'm22-master-2026': graphicsCatalog.pjsMethod,
  'm23-master-2026': graphicsCatalog.goaExamBlueprint,
  'm23-l1': graphicsCatalog.goaExamBlueprint,
  'm24-master-2026': graphicsCatalog.excelLogicQuantitative,
  'm24-l1': graphicsCatalog.excelLogicQuantitative,
  'm25-master-2026': graphicsCatalog.excelLogicQuantitative,
  'm25-l1': graphicsCatalog.excelLogicQuantitative,
  'm26-master-2026': graphicsCatalog.dataDecision,
  'm26-l1': graphicsCatalog.dataDecision,
  'm27-master-2026': graphicsCatalog.excelLogicQuantitative,
  'm27-l1': graphicsCatalog.excelLogicQuantitative,
  'm28-master-2026': graphicsCatalog.dataDecision,
  'm28-l1': graphicsCatalog.dataDecision,
}

export function getLessonSupportGraphic(lessonId: string): SupportGraphic | null {
  if (lessonGraphicMap[lessonId]) return lessonGraphicMap[lessonId]!
  const modulePrefix = lessonId.match(/^(m\d+)-/)?.[1]
  if (modulePrefix && moduleGraphicMap[modulePrefix]) {
    return moduleGraphicMap[modulePrefix]!
  }
  return null
}

export function getModuleSupportGraphic(moduleId: string): SupportGraphic | null {
  return moduleGraphicMap[moduleId] ?? null
}

export const dianVisualAtlasCatalog: DianGraphicCatalogItem[] = [
  { ...graphicsCatalog.courseMap, moduleId: 'm0', moduleCode: 'M0', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m0-l3' },
  { ...graphicsCatalog.goaExamBlueprint, moduleId: 'm0', moduleCode: 'M0 · GOA', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m0-goa-2026' },
  { ...graphicsCatalog.colombianState, moduleId: 'm1', moduleCode: 'M1', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m1-master-2026' },
  { ...graphicsCatalog.mipg, moduleId: 'm2', moduleCode: 'M2 · MIPG', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m2-l6' },
  { ...graphicsCatalog.documentManagement, moduleId: 'm2', moduleCode: 'M2 · Archivo', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m2-l8' },
  { ...graphicsCatalog.dianStructure, moduleId: 'm3', moduleCode: 'M3 · DIAN', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m3-l5' },
  { ...graphicsCatalog.ley2586Aduanas, moduleId: 'm3', moduleCode: 'M3 · Ley 2586', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m3-ley-2586-2026' },
  { ...graphicsCatalog.cpaca, moduleId: 'm4', moduleCode: 'M4 · CPACA', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m4-l7' },
  { ...graphicsCatalog.administrativeActStages, moduleId: 'm4', moduleCode: 'M4 · Acto', category: 'Fundamentos y GOA', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m4-l11' },
  { ...graphicsCatalog.taxTheory, moduleId: 'm5', moduleCode: 'M5', category: 'Tributo y Recaudo', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m5-l6' },
  { ...graphicsCatalog.accountChecklist, moduleId: 'm6', moduleCode: 'M6', category: 'Tributo y Recaudo', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m6-l1' },
  { ...graphicsCatalog.earCycle, moduleId: 'm7', moduleCode: 'M7 · EAR', category: 'Tributo y Recaudo', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m7-l9' },
  { ...graphicsCatalog.extensiveControl, moduleId: 'm8', moduleCode: 'M8', category: 'Tributo y Recaudo', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m8-l1' },
  { ...graphicsCatalog.prescriptionRoute, moduleId: 'm9', moduleCode: 'M9 · Prescripción', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m9-master-2026' },
  { ...graphicsCatalog.persuasiveVsCoactive, moduleId: 'm10', moduleCode: 'M10 · Persuasivo', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m10-l6' },
  { ...graphicsCatalog.paymentFacilities, moduleId: 'm10', moduleCode: 'M10 · Facilidades', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m10-l9' },
  { ...graphicsCatalog.coactiveRoute, moduleId: 'm11', moduleCode: 'M11 · Coactivo I', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m11-l1' },
  { ...graphicsCatalog.coactiveExceptions, moduleId: 'm12', moduleCode: 'M12 · Coactivo II', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m12-master-2026' },
  { ...graphicsCatalog.precautionaryMeasures, moduleId: 'm13', moduleCode: 'M13 · Embargos', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m13-l1' },
  { ...graphicsCatalog.concursalCreditRoute, moduleId: 'm14', moduleCode: 'M14 · Concursal', category: 'Núcleo Cartera y Cobro', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m14-l1' },
  { ...graphicsCatalog.refundsSaldosMatrix, moduleId: 'm15', moduleCode: 'M15 · Saldos', category: 'Devoluciones', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m15-master-2026' },
  { ...graphicsCatalog.refundsRoute, moduleId: 'm16', moduleCode: 'M16 · Trámite', category: 'Devoluciones', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m16-l1' },
  { ...graphicsCatalog.dianSystemsSecurity, moduleId: 'm17', moduleCode: 'M17 · Sistemas', category: 'Sistemas, Ética y PJS', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m17-master-2026' },
  { ...graphicsCatalog.dianCompetenciesMerf, moduleId: 'm19', moduleCode: 'M18–M20 · MERF', category: 'Sistemas, Ética y PJS', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m19-master-2026' },
  { ...graphicsCatalog.pjsMethod, moduleId: 'm21', moduleCode: 'M21–M23 · PJS', category: 'Sistemas, Ética y PJS', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m21-l3' },
  { ...graphicsCatalog.excelLogicQuantitative, moduleId: 'm25', moduleCode: 'M24–M27 · Excel/Lógica', category: 'Transversal y Datos', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m25-master-2026' },
  { ...graphicsCatalog.dataDecision, moduleId: 'm26', moduleCode: 'M26–M28 · Datos/Prob.', category: 'Transversal y Datos', lessonPath: '/courses/dian-2676-gestor-ii/lesson/m26-l7' },
]
