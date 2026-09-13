export type SupportGraphic = {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

const graphicsCatalog = {
  courseMap: {
    id: 'course-map',
    eyebrow: 'Mapa general',
    title: 'Mapa del curso DIAN 2676 · Gestor II',
    description:
      'Resume el recorrido completo del curso para orientar el estudio antes de entrar al detalle de los módulos.',
    image: '/media/lesson-support/course-map.webp',
    alt: 'Infografía con el mapa del curso DIAN 2676 Gestor II y sus bloques temáticos.',
  },
  mipg: {
    id: 'mipg-dimensions',
    eyebrow: 'Gestión pública',
    title: 'MIPG vigente en seis dimensiones',
    description:
      'Sintetiza la lógica de articulación del modelo para ubicar personas, planeación, resultados, información y control en una sola vista.',
    image: '/media/lesson-support/mipg-dimensions.webp',
    alt: 'Infografía sobre MIPG vigente y sus seis dimensiones.',
  },
  cpaca: {
    id: 'cpaca-route',
    eyebrow: 'Ruta procedimental',
    title: 'Ruta básica de la actuación administrativa',
    description:
      'Ayuda a visualizar hechos, competencia, trámite, publicidad y ejecutoriedad sin confundir etapas ni efectos jurídicos.',
    image: '/media/lesson-support/cpaca-route.webp',
    alt: 'Infografía con la ruta básica de la actuación administrativa bajo CPACA.',
  },
  administrativeActStages: {
    id: 'administrative-act-stages',
    eyebrow: 'Guía rápida',
    title: 'Notificación, recursos, firmeza y ejecutoriedad',
    description:
      'Ordena las cinco etapas clave del acto administrativo y evita confusiones frecuentes entre publicar, notificar, decidir y ejecutar.',
    image: '/media/lesson-support/administrative-act-stages.webp',
    alt: 'Infografía sobre decisión, notificación, recursos, firmeza y ejecutoriedad del acto administrativo.',
  },
  dianStructure: {
    id: 'dian-structure-levels',
    eyebrow: 'Apoyo de estudio',
    title: 'Estructura DIAN y niveles de gestión',
    description:
      'Resume misión, nivel central, nivel local y nivel delegado para ubicar competencias, articulación y servicio al ciudadano.',
    image: '/media/lesson-support/dian-structure-levels.webp',
    alt: 'Infografía con la estructura DIAN, sus niveles de gestión y la misión institucional.',
  },
  taxTheory: {
    id: 'tax-imposition-theory',
    eyebrow: 'Fundamento tributario',
    title: 'Teoría de la imposición y elementos del tributo',
    description:
      'Conecta hecho generador, sujeto activo, sujeto pasivo, base gravable y tarifa en una sola lectura visual.',
    image: '/media/lesson-support/tax-imposition-theory.webp',
    alt: 'Infografía sobre teoría de la imposición y los elementos del tributo.',
  },
  accountChecklist: {
    id: 'account-checklist',
    eyebrow: 'Lectura técnica',
    title: 'Checklist de estado de cuenta',
    description:
      'Resume obligación, pago, saldo, exigibilidad, trazabilidad y acción para revisar primero la realidad antes de actuar.',
    image: '/media/lesson-support/account-checklist.webp',
    alt: 'Infografía checklist para lectura del estado de cuenta.',
  },
  earCycle: {
    id: 'ear-cycle',
    eyebrow: 'Recaudo y control',
    title: 'Ciclo EAR',
    description:
      'Sintetiza autorización, operación, conciliación y control para diferenciar el flujo del recaudo de la sanción eventual.',
    image: '/media/lesson-support/ear-cycle.webp',
    alt: 'Infografía del ciclo EAR con autorización, operación, conciliación y control.',
  },
  extensiveControl: {
    id: 'extensive-control',
    eyebrow: 'Control extensivo',
    title: 'Del dato al cumplimiento',
    description:
      'Ordena la lógica de selección, cruce, verificación, requerimiento y regularización para estudiar campañas masivas con criterio.',
    image: '/media/lesson-support/extensive-control.webp',
    alt: 'Infografía sobre el flujo del control extensivo desde los datos hasta la regularización.',
  },
  persuasiveVsCoactive: {
    id: 'persuasive-vs-coactive',
    eyebrow: 'Comparación operativa',
    title: 'Cobro persuasivo vs. cobro coactivo',
    description:
      'Aclara las diferencias de propósito, poder jurídico y soportes entre la gestión persuasiva y el trámite coactivo.',
    image: '/media/lesson-support/persuasive-vs-coactive.webp',
    alt: 'Infografía comparativa entre cobro persuasivo y cobro coactivo.',
  },
  paymentFacilities: {
    id: 'payment-facilities-guarantees',
    eyebrow: 'Facilidades y garantías',
    title: 'Facilidades de pago y tipos de garantías',
    description:
      'Muestra el proceso paso a paso desde la solicitud hasta el cumplimiento y resume las garantías que respaldan la deuda.',
    image: '/media/lesson-support/payment-facilities-guarantees.webp',
    alt: 'Infografía sobre facilidades de pago y tipos de garantías aplicables.',
  },
  coactiveRoute: {
    id: 'coactive-route',
    eyebrow: 'Secuencia funcional',
    title: 'Ruta general del cobro coactivo',
    description:
      'Refuerza la secuencia de exigibilidad, título, mandamiento, notificación, medidas y cierre.',
    image: '/media/lesson-support/coactive-route.webp',
    alt: 'Infografía con la ruta general del cobro coactivo.',
  },
  precautionaryMeasures: {
    id: 'precautionary-measures',
    eyebrow: 'Ruta de estudio',
    title: 'Medidas cautelares',
    description:
      'Sintetiza finalidad, tipos, verificación, ejecución y control, con ejemplos frecuentes para no perder el marco legal.',
    image: '/media/lesson-support/precautionary-measures.webp',
    alt: 'Infografía sobre medidas cautelares, ejemplos y criterios de proporcionalidad, soporte y legalidad.',
  },
  concursalCreditRoute: {
    id: 'concursal-credit-route',
    eyebrow: 'Proceso colectivo',
    title: 'Ruta del crédito fiscal en concurso',
    description:
      'Ubica la depuración, presentación, reconocimiento y seguimiento del crédito cuando la DIAN actúa en escenario concursal.',
    image: '/media/lesson-support/concursal-credit-route.webp',
    alt: 'Infografía con la ruta del crédito fiscal en concurso.',
  },
  refundsRoute: {
    id: 'refunds-route',
    eyebrow: 'Devoluciones y compensaciones',
    title: 'Ruta de aprendizaje del procedimiento de devolución',
    description:
      'Condensa la secuencia de solicitud, revisión, validación, investigación previa, decisión y resultado para estudiar el trámite completo.',
    image: '/media/lesson-support/refunds-route-v2.webp',
    alt: 'Infografía con la ruta de aprendizaje del procedimiento de devolución y compensación.',
  },
  documentManagement: {
    id: 'document-management-traceability',
    eyebrow: 'Gestión documental',
    title: 'Gestión documental y trazabilidad',
    description:
      'Aterriza el valor del expediente, el soporte y la trazabilidad para mantener control documental en la operación.',
    image: '/media/lesson-support/document-management-traceability.webp',
    alt: 'Infografía sobre gestión documental y trazabilidad institucional.',
  },
  pjsMethod: {
    id: 'pjs-method',
    eyebrow: 'Método de decisión',
    title: 'Cómo resolver una PJS',
    description:
      'Refuerza el método hecho → competencia → norma → soporte → decisión y los errores comunes.',
    image: '/media/lesson-support/pjs-method.webp',
    alt: 'Infografía guía sobre cómo resolver una pregunta de juicio situacional PJS.',
  },
  dataDecision: {
    id: 'data-decision-foundations',
    eyebrow: 'Razonamiento cuantitativo',
    title: 'Datos para decidir mejor',
    description:
      'Conecta muestra, sesgo, cuantificadores y conteo para analizar información con más criterio en el bloque transversal.',
    image: '/media/lesson-support/data-decision-foundations.webp',
    alt: 'Infografía sobre muestra, sesgo, cuantificadores y conteo para apoyar el análisis de datos.',
  },
} satisfies Record<string, SupportGraphic>

const lessonGraphicMap: Record<string, SupportGraphic> = {
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
}

export function getLessonSupportGraphic(lessonId: string) {
  return lessonGraphicMap[lessonId] ?? null
}
