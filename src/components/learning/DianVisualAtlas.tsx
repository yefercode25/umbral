import { useState } from 'react'
import { ArrowRight, BarChart3, Clock3, Compass, Eye, GitCompareArrows, Layers, Network, Scale, ShieldAlert, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianVisualAtlasCatalog, type DianGraphicCatalogItem } from '../../lib/supportGraphics'
import { LessonSupportGraphic } from './LessonSupportGraphic'
import styles from './DianVisualAtlas.module.css'

type AtlasTab = 'concept-map' | 'charts' | 'comparisons' | 'gallery'

type ConceptNode = {
  id: string
  step: string
  code: string
  title: string
  subtitle: string
  norm: string
  color: 'teal' | 'blue' | 'green' | 'gold' | 'purple' | 'orange'
  summary: string
  inputs: string[]
  outputs: string[]
  keyTerms: string[]
  pjsTrap: string
  graphicId: string
  moduleLink: string
}

const conceptNodes: ConceptNode[] = [
  {
    id: 'n1',
    step: 'NODO 01 · ORIGEN Y DETERMINACIÓN',
    code: 'M5–M6',
    title: 'Obligación Tributaria y Declaración',
    subtitle: 'Del hecho generador al saldo exigible en cuenta corriente',
    norm: 'Art. 338 CP · Arts. 1, 580, 580-1, 588, 589 y 714 ET',
    color: 'teal',
    summary:
      'La obligación sustancial nace al realizarse el hecho generador (Art. 1 ET) y se cuantifica en la liquidación privada o en liquidación oficial en firme. Toda actuación posterior de recaudo, devolución o cobro exige verificar primero si la declaración es válida y eficaz.',
    inputs: ['Realización del hecho generador (Renta, IVA, Retención, Consumo)', 'Inscripción y responsabilidades activas en el RUT'],
    outputs: ['Liquidación privada con saldo a pagar o saldo a favor', 'Título ejecutivo potencial (Art. 828 num. 1 ET)'],
    keyTerms: ['Firmeza general: 3 años (Art. 714 ET)', 'Corrección aumenta impuesto: 2 años (Art. 588 ET)', 'Corrección disminuye: 1 año (Art. 589 ET)'],
    pjsTrap: 'No confundir declaración no presentada (Art. 580 ET, requiere auto declarativo) con declaración de retención ineficaz sin pago total (Art. 580-1 ET, opera por ministerio de la ley salvo excepciones).',
    graphicId: 'tax-imposition-theory',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m6',
  },
  {
    id: 'n2',
    step: 'NODO 02 · RECAUDO E IMPUTACIÓN',
    code: 'M6–M7',
    title: 'Recaudo en EAR e Imputación Art. 804 ET',
    subtitle: 'Conciliación bancaria, recibos 490 y pago proporcional',
    norm: 'Arts. 674–678, 800, 801, 803 y 804 Estatuto Tributario',
    color: 'blue',
    summary:
      'Las Entidades Autorizadas para Recaudar (EAR) reciben declaraciones y pagos, trasladan los recursos al Tesoro y reportan cintas magnéticas. Todo pago parcial sobre una obligación se imputa proporcionalmente entre impuesto, sanciones e intereses (Art. 804 ET).',
    inputs: ['Recibos Oficiales de Pago en Bancos (Formulario 490)', 'Reportes magnéticos y consignaciones de las EAR'],
    outputs: ['Extinción total o parcial de la deuda en el estado de cuenta', 'Detección de inconsistencias o rezagos por conciliar'],
    keyTerms: ['Fecha de pago: día de recepción en la EAR (Art. 803 ET)', 'Imputación proporcional: Capital + Sanción + Interés (Art. 804 ET)', 'Sanciones a EAR: Arts. 674 a 678 ET'],
    pjsTrap: 'El pago parcial NUNCA se imputa primero solo a intereses ni primero solo a capital: desde la Ley 1066/2006 se distribuye en la misma proporción que pesa cada concepto en la deuda total.',
    graphicId: 'account-checklist',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m7',
  },
  {
    id: 'n3',
    step: 'NODO 03 · GESTIÓN TEMPRANA Y PLAZOS',
    code: 'M8 y M10',
    title: 'Control Extensivo, Persuasivo y Facilidades',
    subtitle: 'Normalización voluntaria y acuerdos de pago garantizados',
    norm: 'Arts. 631, 640, 715, 814, 814-1 a 814-3 y 841 ET',
    color: 'green',
    summary:
      'Mediante cruces de exógena y facturación se gestionan omisos, inexactos y morosos. En cartera exigible, la etapa persuasiva busca pago voluntario o facilidad de pago (Art. 814 ET) hasta por 5 años mediante resolución motivada.',
    inputs: ['Cruces de información exógena y estados de cuenta depurados', 'Solicitud de facilidad de pago con relación de bienes o garantía'],
    outputs: ['Pago voluntario o resolución de facilidad de pago (Art. 814 ET)', 'Suspensión del cobro coactivo y levantamiento de medidas (Art. 841 ET)'],
    keyTerms: ['Hasta 1 año: relación de bienes sin garantía real', 'Más de 1 y hasta 5 años: garantía real, bancaria, póliza o personal', 'Reposición por incumplimiento: 5 días (Art. 814-3 ET)'],
    pjsTrap: 'Las llamadas, correos o invitaciones de cobro persuasivo NO interrumpen la prescripción de 5 años; solo la interrumpe el otorgamiento de la facilidad de pago o la notificación del mandamiento.',
    graphicId: 'payment-facilities-guarantees',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m10',
  },
  {
    id: 'n4',
    step: 'NODO 04 · FILTRO DE EXIGIBILIDAD',
    code: 'M9 y M11',
    title: 'Exigibilidad, Título Ejecutivo y Prescripción',
    subtitle: 'Verificación de firmeza y vigencia de los 5 años antes de ejecutar',
    norm: 'Arts. 817, 818, 819, 828 y 829 Estatuto Tributario',
    color: 'gold',
    summary:
      'Para iniciar o mantener el cobro coactivo debe existir un título ejecutivo en firme (Art. 828 y 829 ET) cuya acción de cobro no haya prescrito en 5 años (Art. 817 ET). Es crucial distinguir si el término se interrumpió (reinicia a cero) o se suspendió (pausa el reloj).',
    inputs: ['Liquidación privada, liquidación oficial, resolución sanción o garantía', 'Constancia de notificación y ejecutoria en el expediente'],
    outputs: ['Título ejecutivo claro, expreso y actualmente exigible', 'Declaratoria de prescripción de oficio o a solicitud de parte'],
    keyTerms: ['Término de prescripción: 5 años (Art. 817 ET)', '4 causales de interrupción: reinician conteo (Art. 818 ET)', '3 causales de suspensión: pausan conteo (Art. 818 ET)'],
    pjsTrap: 'Según el Art. 819 ET, lo pagado voluntariamente para satisfacer una obligación ya prescrita es válido y NO admite devolución por pago de lo no debido, aunque el deudor ignorara la prescripción.',
    graphicId: 'prescription-interruption-suspension',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m9',
  },
  {
    id: 'n5',
    step: 'NODO 05 · EJECUCIÓN FORZOSA',
    code: 'M11–M13',
    title: 'Cobro Coactivo, Excepciones y Medidas Cautelares',
    subtitle: 'Mandamiento de pago, defensa taxativa y límite de embargos',
    norm: 'Arts. 823 a 843-2 Estatuto Tributario',
    color: 'purple',
    summary:
      'Librado y notificado el mandamiento de pago (Art. 826 ET), el deudor tiene 15 días hábiles para pagar o proponer las 7 excepciones taxativas (Art. 831 ET). La DIAN decide en 1 mes (Art. 832) y puede decretar embargos hasta por el doble de la deuda más intereses (Art. 838 ET).',
    inputs: ['Mandamiento de pago notificado personalmente o por correo/electrónico', 'Escrito de excepciones radicado dentro de los 15 días hábiles'],
    outputs: ['Resolución que falla excepciones (1 mes) u orden de ejecución (Art. 836 ET)', 'Embargo, secuestro, liquidación del crédito, avalúo y remate'],
    keyTerms: ['15 días hábiles: pagar o excepcionar (Art. 830 ET)', '1 mes: decidir excepciones (Art. 832) y 1 mes reposición (Art. 834)', 'Tope embargo: 2× deuda + intereses (Art. 838 ET)'],
    pjsTrap: 'En el proceso de cobro coactivo está prohibido debatir cuestiones de fondo que debieron discutirse en la etapa de determinación del impuesto (Art. 829-1 ET). Además, la demanda judicial solo suspende el remate, no el proceso ni los embargos (Art. 835 ET).',
    graphicId: 'coactive-exceptions-defense',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m12',
  },
  {
    id: 'n6',
    step: 'NODO 06 · ESCENARIOS ESPECIALES Y SALDOS',
    code: 'M14–M16',
    title: 'Concursal (Ley 1116) y Devoluciones / Compensaciones',
    subtitle: 'Insolvencia empresarial y trámite de saldos a favor',
    norm: 'Ley 1116 de 2006 · Arts. 815, 845 y 850 a 865 ET',
    color: 'orange',
    summary:
      'Si el deudor es admitido a reorganización o liquidación (Ley 1116), se suspende el coactivo para deudas anteriores al inicio (se presentan al concurso como primera clase fiscal), pero los impuestos causados después se cobran como gastos de administración (Art. 71). En saldos a favor, primero se compensa deuda exigible (Art. 861 ET) y luego se devuelve en 50 días (20 días con garantía).',
    inputs: ['Auto de admisión concursal (Ley 1116) o solicitud de devolución/compensación', 'Verificación formal (15d), cruces y auditoría de cuenta corriente'],
    outputs: ['Reconocimiento del crédito fiscal concursal o cobro de gastos de administración', 'Resolución de compensación/devolución (50d/20d), inadmisión (1m) o rechazo'],
    keyTerms: ['Solicitud saldo a favor: 2 años desde vencimiento (Art. 854 ET)', 'Devolución ordinaria: 50d · Con garantía: 20d (Arts. 855 y 860 ET)', 'Investigación previa suspende hasta 90 días (Art. 857-1 ET)'],
    pjsTrap: 'Nunca gires dinero en una devolución sin antes compensar de oficio todas las deudas exigibles que el mismo contribuyente tenga en su estado de cuenta (Art. 861 ET).',
    graphicId: 'refunds-route',
    moduleLink: '/courses/dian-2676-gestor-ii/module/m16',
  },
]

const modalityWeights = [
  {
    id: 'ingreso-sin-exp',
    label: 'Ingreso sin experiencia (ej. Gestor II CT-CR-3007)',
    note: 'Tabla GOA 4.2 para empleos de ingreso que no exigen experiencia (sin prueba de Valoración de Antecedentes).',
    bars: [
      { name: 'Competencias Funcionales (PJS · 3 opciones)', weight: 70, character: 'Eliminatoria', minScore: '70.00 / 100', color: '#3d8600' },
      { name: 'Competencias Comportamentales (Likert · 4 niveles)', weight: 20, character: 'Clasificatoria', minScore: 'No aplica', color: '#117db2' },
      { name: 'Prueba de Integridad (Likert · 4 niveles)', weight: 10, character: 'Clasificatoria', minScore: 'No aplica', color: '#8b49bb' },
    ],
  },
  {
    id: 'ingreso-con-exp',
    label: 'Ingreso con experiencia',
    note: 'Tabla GOA 4.2 para empleos de ingreso que exigen experiencia e incluyen Valoración de Antecedentes.',
    bars: [
      { name: 'Competencias Funcionales (PJS · 3 opciones)', weight: 65, character: 'Eliminatoria', minScore: '70.00 / 100', color: '#3d8600' },
      { name: 'Competencias Comportamentales (Likert · 4 niveles)', weight: 15, character: 'Clasificatoria', minScore: 'No aplica', color: '#117db2' },
      { name: 'Prueba de Integridad (Likert · 4 niveles)', weight: 10, character: 'Clasificatoria', minScore: 'No aplica', color: '#8b49bb' },
      { name: 'Valoración de Antecedentes (Estudios y Exp.)', weight: 10, character: 'Clasificatoria', minScore: 'No aplica', color: '#e5a000' },
    ],
  },
  {
    id: 'ascenso',
    label: 'Modalidad Ascenso',
    note: 'Tabla GOA 4.2 para servidores con derechos de carrera que participan en modalidad de ascenso.',
    bars: [
      { name: 'Competencias Funcionales (PJS · 3 opciones)', weight: 60, character: 'Eliminatoria', minScore: '70.00 / 100', color: '#3d8600' },
      { name: 'Competencias Comportamentales (Likert · 4 niveles)', weight: 15, character: 'Clasificatoria', minScore: 'No aplica', color: '#117db2' },
      { name: 'Valoración de Antecedentes', weight: 15, character: 'Clasificatoria', minScore: 'No aplica', color: '#e5a000' },
      { name: 'Prueba de Integridad (Likert · 4 niveles)', weight: 10, character: 'Clasificatoria', minScore: 'No aplica', color: '#8b49bb' },
    ],
  },
] as const

const legalTermBars = [
  { term: '5 días hábiles', pct: 12, scope: 'CPACA / Coactivo / GOA', detail: 'Remitir petición por falta de competencia (Art. 21 CPACA) · Recurso de reposición contra resolución que declara incumplida una facilidad de pago (Art. 814-3 ET) · Reclamación resultados CNSC.', color: '#167c80' },
  { term: '10 días hábiles', pct: 20, scope: 'Petición / Citación / CPACA', detail: 'Responder petición de documentos/información (Ley 1755) · Citación para notificar personalmente el mandamiento de pago (Art. 826 ET) · Interponer recursos de ley en vía general CPACA (Art. 76).', color: '#117db2' },
  { term: '15 días hábiles', pct: 28, scope: 'Excepciones Coactivo / PQRSD', detail: 'Pagar o proponer excepciones tras notificación del mandamiento de pago (Art. 830 ET) · Responder derecho de petición general (Ley 1755) · Devolución automática (Art. 855 par. 5 ET).', color: '#3d8600' },
  { term: '20 días hábiles', pct: 36, scope: 'Devolución con Garantía', detail: 'Término para resolver solicitud de devolución cuando se presenta con garantía bancaria o de compañía de seguros por 2 años (Art. 860 ET).', color: '#58cc02' },
  { term: '30 días hábiles', pct: 44, scope: 'Consultas CPACA', detail: 'Término legal para responder peticiones de consulta sobre materias a cargo de la autoridad (Art. 14 Ley 1755 de 2015).', color: '#0d9488' },
  { term: '1 mes calendario', pct: 52, scope: 'Fallo Excepciones / Inadmisión', detail: 'Decidir las excepciones propuestas contra el mandamiento (Art. 832 ET) · Interponer y decidir reposición contra fallo de excepciones (Art. 834 ET) · Radicar nueva solicitud subsanando auto inadmisorio de devolución (Art. 858 ET).', color: '#e5a000' },
  { term: '50 días hábiles', pct: 62, scope: 'Devolución Ordinaria', detail: 'Término general de la DIAN para devolver o compensar saldos a favor tras solicitud presentada en debida forma (Art. 855 ET).', color: '#cc6600' },
  { term: '2 meses', pct: 70, scope: 'Recurso Reconsideración ET', detail: 'Término especial tributario para interponer Recurso de Reconsideración contra liquidaciones oficiales, resoluciones sanción o rechazo definitivo de devolución (Art. 720 ET).', color: '#8b49bb' },
  { term: '90 días hábiles', pct: 78, scope: 'Suspensión Investigación Previa', detail: 'Plazo máximo de suspensión del término de devolución/compensación cuando se abre investigación previa por indicios de inexactitud (Art. 857-1 ET).', color: '#b92637' },
  { term: '1 año vs. 5 años', pct: 86, scope: 'Facilidades de Pago (Art. 814)', detail: 'Hasta 1 año puede concederse con relación de bienes sin garantía real; de más de 1 año y hasta máximo 5 años exige garantía real, bancaria, póliza o personal (Art. 814 ET).', color: '#117db2' },
  { term: '2 años', pct: 92, scope: 'Solicitud Saldo a Favor', detail: 'Plazo límite para radicar la solicitud de devolución o compensación de saldos a favor en declaraciones, contados desde el vencimiento del plazo para declarar (Art. 854 ET).', color: '#3d8600' },
  { term: '5 años', pct: 100, scope: 'Prescripción Cobro / Ejecutoria', detail: 'Término de prescripción de la acción de cobro tributario (Art. 817 ET) · Pérdida de fuerza ejecutoria del acto administrativo (Art. 91 CPACA) · Solicitud de devolución de pago en exceso o de lo no debido.', color: '#9e1c2b' },
] as const

const comparisonTables = [
  {
    id: 'cobro-triple',
    title: '1. Cobro Persuasivo vs. Cobro Coactivo vs. Proceso Concursal',
    subtitle: 'Cómo cambia la actuación del Gestor II según la etapa de la deuda y la situación jurídica del deudor.',
    columns: ['Criterio Operativo', 'Cobro Persuasivo (M10)', 'Cobro Coactivo (M11–M13)', 'Proceso Concursal · Ley 1116 (M14)'],
    rows: [
      ['Propósito central', 'Obtener pago voluntario, aclaración de cuenta o suscripción de facilidad (Art. 814 ET).', 'Ejecutar forzosamente el crédito fiscal mediante embargo, secuestro y remate (Arts. 823 y ss. ET).', 'Hacer valer el crédito fiscal (primera clase) dentro del proceso universal de reorganización o liquidación.'],
      ['Soporte indispensable', 'Obligación vencida y depurada en el estado de cuenta corriente.', 'Título Ejecutivo en firme (Art. 828 y 829 ET), claro, expreso, exigible y no prescrito.', 'Auto de admisión concursal + liquidación certificada separando deudas pre-inicio y post-inicio.'],
      ['Actuación sobre embargos', 'No decreta remate; puede gestionar garantías para facilidad de pago.', 'Decreta medidas cautelares previas o coactivas hasta por 2× deuda + intereses (Art. 838 ET).', 'Se suspende el coactivo y se prohíben nuevos embargos por deudas causadas ANTES del inicio concursal.'],
      ['Efecto en prescripción (5 años)', 'Las llamadas u oficios persuasivos NO interrumpen la prescripción. Solo la facilidad concedida la interrumpe.', 'La notificación válida del mandamiento de pago interrumpe la prescripción y reinicia los 5 años (Art. 818 ET).', 'Suspende el término de prescripción de la acción de cobro mientras dura el trámite concursal (Art. 818 ET).'],
      ['Regla de oro en PJS', 'Si la deuda está cerca de prescribir, pasa de inmediato a librar y notificar mandamiento.', 'No debatas el fondo del impuesto en coactivo (Art. 829-1 ET); resuelve excepciones en 1 mes.', 'Los impuestos causados DESPUÉS del inicio concursal son gastos de administración (Art. 71): pago preferente y sí admiten coactivo.'],
    ],
  },
  {
    id: 'prescripcion-matrix',
    title: '2. Prescripción (Art. 817 ET): Inicio, Interrupción vs. Suspensión',
    subtitle: 'Diferencia crítica entre reiniciar el conteo de 5 años desde cero (interrupción) y pausar el reloj (suspensión).',
    columns: ['Aspecto Jurídico', 'Inicio del Conteo (Art. 817 ET)', 'Interrupción (Art. 818 Inc. 1 ET)', 'Suspensión (Art. 818 Inc. 2 ET)'],
    rows: [
      ['¿Qué efecto produce en el reloj de 5 años?', 'Activa por primera vez el cómputo de los cinco (5) años de la acción de cobro.', 'Borra todo el tiempo transcurrido y el término de 5 años vuelve a empezar desde cero.', 'Detiene temporalmente el reloj sin borrar el tiempo ya corrido; al cesar la causal, corre el saldo restante.'],
      ['Causales taxativas en el Estatuto Tributario', '1) Vencimiento plazo (oportuna) · 2) Presentación (extemporánea) · 3) Presentación corrección mayor valor · 4) Ejecutoria del acto oficial.', '1) Notificación del mandamiento de pago · 2) Otorgamiento de facilidad de pago · 3) Admisión concordato/acuerdo · 4) Liquidación forzosa administrativa.', '1) Solicitud de revocatoria directa (suspende remate) · 2) Restitución de términos · 3) Demanda judicial contra resolución que falla excepciones.'],
      ['¿Quién la decreta?', 'Se verifica de oficio al depurar cartera o antes de librar mandamiento.', 'Opera por el hecho jurídico válido (ej. notificación efectiva del mandamiento antes de vencer los 5 años).', 'Opera mientras subsiste la causal legal (y durante la vigencia de la facilidad o proceso concursal).'],
      ['¿Qué pasa si el deudor paga una deuda prescrita?', 'Antes de los 5 años es pago de deuda exigible normal.', 'Si se interrumpió a tiempo, la deuda NO estaba prescrita y el pago o cobro es plenamente exigible.', 'Art. 819 ET: Lo pagado para satisfacer una obligación YA prescrita es válido y NO se puede devolver ni repetir, aunque el deudor no lo supiera.'],
    ],
  },
  {
    id: 'devoluciones-matrix',
    title: '3. Devoluciones: Inadmisión vs. Rechazo Definitivo vs. Investigación Previa',
    subtitle: 'Tres decisiones distintas frente a una solicitud de devolución y/o compensación (Arts. 857, 857-1 y 858 ET).',
    columns: ['Dimensión', 'Inadmisión (Art. 858 ET)', 'Rechazo Definitivo (Art. 857 ET)', 'Investigación Previa (Art. 857-1 ET)'],
    rows: [
      ['Naturaleza de la causal', 'Defecto formal o subsanable en la solicitud o en sus requisitos.', 'Impedimento sustancial, temporal o de fondo insubsanable.', 'Indicio de inexactitud, retenciones inexistentes o saldo a favor improcedente.'],
      ['Casos típicos en examen PJS', 'Falta de requisitos formales, declaración tenida por no presentada, error aritmético o saldo pendiente por compensar/imputar.', '1) Solicitud extemporánea (>2 años saldo a favor) · 2) Saldo ya fue objeto de devolución/compensación · 3) Saldo ya fue imputado al período siguiente.', 'Verificación de impuestos descontables, costos o retenciones con terceros o proveedores ficticios/insolventes.'],
      ['Término y efecto procesal', 'Se profiere auto inadmisorio dentro de los 15 días; el solicitante tiene 1 mes para radicar nueva solicitud subsanando.', 'Cierra definitivamente el trámite mediante resolución motivada; no se subsana con simple corrección formal.', 'Suspende el término de 50 días para devolver hasta por un máximo de noventa (90) días hábiles.'],
      ['Actuación procedente del interesado', 'Subsanar y radicar nueva solicitud dentro del mes siguiente (mantiene oportunidad si la inicial fue oportuna).', 'Interponer Recurso de Reconsideración dentro de los 2 meses siguientes (Art. 720 ET).', 'Atender los requerimientos de fiscalización o corregir la declaración si acepta la glosa.'],
    ],
  },
  {
    id: 'mipg-matrix',
    title: '4. MIPG en la Prueba DIAN 2676: Manual 6.1 vs. Versión 7',
    subtitle: 'Cómo responder con seguridad aplicando la regla del corte normativo de la GOA (19 de junio de 2026).',
    columns: ['Eje de Contraste', 'Manual Operativo MIPG v6.1 (Dentro del Corte)', 'Actualización MIPG Versión 7 (Posterior al Corte)'],
    rows: [
      ['Fecha de expedición frente al corte GOA (19/06/2026)', 'Vigente HASTA junio de 2026 (DENTRO del corte normativo inclusivo de la sección 4.3 de la GOA).', 'Publicada en agosto de 2026 (POSTERIOR a la fecha de corte normativo del 19/06/2026).'],
      ['Cantidad total de dimensiones', 'SIETE (7) dimensiones operativas.', 'SEIS (6) dimensiones operativas.'],
      ['Ubicación de Gestión del Conocimiento', 'Es la sexta (6.ª) dimensión independiente: Gestión del Conocimiento y la Innovación.', 'Se integra transversalmente, pasando el esquema general de siete a seis dimensiones.'],
      ['Ubicación de Control Interno (MECI)', 'Es la séptima (7.ª) dimensión operativa del modelo.', 'Pasa a enumerarse como sexta (6.ª) dimensión operativa.'],
      ['Regla de decisión para el aspirante', 'Si el ítem invoca el corte de la convocatoria (19/06/2026) o habla de las 7 dimensiones de MIPG, aplica Manual 6.1.', 'Solo aplica si el texto del caso cita expresamente la reforma de seis dimensiones de agosto de 2026.'],
    ],
  },
  {
    id: 'cpaca-vs-et',
    title: '5. Vía General CPACA vs. Procedimiento Especial Tributario (ET)',
    subtitle: 'La regla especial del Estatuto Tributario prevalece en materia de impuestos; el CPACA aplica de forma general o supletoria.',
    columns: ['Figura Procesal', 'Regla General CPACA (Ley 1437 / Ley 1755)', 'Regla Especial Estatuto Tributario (DIAN)'],
    rows: [
      ['Recursos contra actos definitivos de fondo', 'Reposición y Apelación dentro de los diez (10) días hábiles siguientes a la notificación (Art. 76 CPACA).', 'Recurso de Reconsideración dentro de los dos (2) meses siguientes a la notificación de la liquidación o sanción (Art. 720 ET).'],
      ['Defensa frente al Mandamiento de Pago', 'Excepciones en cobro coactivo general CPACA (Arts. 98–101).', '15 días hábiles para pagar o proponer las 7 excepciones taxativas del Art. 831 ET; se deciden en 1 mes (Art. 832 ET).'],
      ['Recurso contra fallo que rechaza excepciones', 'Reglas generales de control de excepciones.', 'Recurso de Reposición dentro del mes (1 mes) siguiente a la notificación, resuelto en 1 mes (Art. 834 ET).'],
      ['Pérdida de ejecutoriedad / Prescripción de cobro', 'Pérdida de fuerza ejecutoria a los 5 años sin actos para ejecutarlo (Art. 91 num. 3 CPACA).', 'Prescripción de la acción de cobro a los 5 años (Art. 817 ET), con reglas propias de interrupción y suspensión (Art. 818 ET).'],
    ],
  },
] as const

export function DianVisualAtlas() {
  const [activeTab, setActiveTab] = useState<AtlasTab>('concept-map')
  const [selectedNodeId, setSelectedNodeId] = useState<string>('n4')
  const [selectedModality, setSelectedModality] = useState<string>('ingreso-sin-exp')
  const [selectedMatrixId, setSelectedMatrixId] = useState<string>('cobro-triple')
  const [galleryCategory, setGalleryCategory] = useState<string>('Todas')
  const [simPayment, setSimPayment] = useState<number>(40)

  const activeNode = conceptNodes.find((n) => n.id === selectedNodeId) ?? conceptNodes[0]!
  const activeNodeGraphic = dianVisualAtlasCatalog.find((g) => g.id === activeNode.graphicId) ?? dianVisualAtlasCatalog[0]!
  const activeModality = modalityWeights.find((m) => m.id === selectedModality) ?? modalityWeights[0]!
  const activeMatrix = comparisonTables.find((m) => m.id === selectedMatrixId) ?? comparisonTables[0]!

  const categories = ['Todas', 'Fundamentos y GOA', 'Tributo y Recaudo', 'Núcleo Cartera y Cobro', 'Devoluciones', 'Sistemas, Ética y PJS', 'Transversal y Datos']
  const filteredGallery: DianGraphicCatalogItem[] = galleryCategory === 'Todas'
    ? dianVisualAtlasCatalog
    : dianVisualAtlasCatalog.filter((item) => item.category === galleryCategory)

  // Art. 804 ET visual example calculation: Deuda total 100M (Capital 60M [60%], Sanción 20M [20%], Intereses 20M [20%])
  const payCapital = Math.round(simPayment * 0.6 * 10) / 10
  const paySanction = Math.round(simPayment * 0.2 * 10) / 10
  const payInterest = Math.round(simPayment * 0.2 * 10) / 10

  return (
    <section className={styles.atlas} aria-label="Atlas visual, mapas conceptuales y comparativas DIAN 2676">
      <header className={styles.banner}>
        <div className={styles.bannerCopy}>
          <span className={styles.kicker}><Sparkles size={15}/> CENTRO VISUAL INTERACTIVO · DIAN 2676</span>
          <h2>Mapas conceptuales, gráficas de términos, comparativas y galería de infografías</h2>
          <p>Explora visualmente la arquitectura del empleo Gestor II (CT-CR-3007): conecta cada etapa del expediente tributario, compara términos legales y amplía cualquiera de las {dianVisualAtlasCatalog.length} láminas de estudio.</p>
        </div>
        <div className={styles.bannerStats}>
          <div><strong>{dianVisualAtlasCatalog.length}</strong><span>Infografías HD</span></div>
          <div><strong>6</strong><span>Nodos de Cartera</span></div>
          <div><strong>12</strong><span>Términos Clave</span></div>
          <div><strong>5</strong><span>Matrices PJS</span></div>
        </div>
      </header>

      <nav className={styles.subTabs} aria-label="Vistas del atlas visual">
        <button type="button" className={activeTab === 'concept-map' ? styles.subTabActive : ''} onClick={() => setActiveTab('concept-map')}>
          <Network size={17}/> Mapa Conceptual Interactivo
        </button>
        <button type="button" className={activeTab === 'charts' ? styles.subTabActive : ''} onClick={() => setActiveTab('charts')}>
          <BarChart3 size={17}/> Gráficas de Términos y Pesos GOA
        </button>
        <button type="button" className={activeTab === 'comparisons' ? styles.subTabActive : ''} onClick={() => setActiveTab('comparisons')}>
          <GitCompareArrows size={17}/> Matrices Comparativas
        </button>
        <button type="button" className={activeTab === 'gallery' ? styles.subTabActive : ''} onClick={() => setActiveTab('gallery')}>
          <Layers size={17}/> Galería de Infografías ({dianVisualAtlasCatalog.length})
        </button>
      </nav>

      {activeTab === 'concept-map' && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.sectionTag}><Compass size={14}/> ECOSISTEMA OPERATIVO CT-CR-3007</span>
              <h3>Mapa Conceptual del Ciclo Tributario, Cartera, Cobro y Devoluciones</h3>
              <p>Toca cualquier nodo del flujo para inspeccionar sus entradas, salidas, plazos perentorios, trampa típica en PJS y su infografía ampliable.</p>
            </div>
          </div>

          <div className={styles.nodeGrid} role="tablist" aria-label="Nodos del mapa conceptual DIAN">
            {conceptNodes.map((node, idx) => {
              const selected = node.id === activeNode.id
              return (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`${styles.nodeButton} ${styles[`node_${node.color}`]} ${selected ? styles.nodeSelected : ''}`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  <div className={styles.nodeTop}>
                    <span className={styles.nodeIndex}>{idx + 1}</span>
                    <span className={styles.nodeCode}>{node.code}</span>
                  </div>
                  <strong>{node.title}</strong>
                  <small>{node.subtitle}</small>
                </button>
              )
            })}
          </div>

          <article className={`${styles.nodeDetail} ${styles[`detail_${activeNode.color}`]}`} aria-live="polite">
            <div className={styles.nodeDetailHeader}>
              <div>
                <span className={styles.nodeStepBadge}>{activeNode.step} · {activeNode.code}</span>
                <h3>{activeNode.title}</h3>
                <p className={styles.nodeNorm}><Scale size={15}/> {activeNode.norm}</p>
              </div>
              <Link to={activeNode.moduleLink} className={styles.goModuleBtn}>
                Estudiar módulo <ArrowRight size={16}/>
              </Link>
            </div>

            <p className={styles.nodeSummary}>{activeNode.summary}</p>

            <div className={styles.ioGrid}>
              <div className={styles.ioBox}>
                <h4>📥 Entradas / Qué activa el nodo</h4>
                <ul>{activeNode.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className={styles.ioBox}>
                <h4>📤 Salidas / Decisión o efecto jurídico</h4>
                <ul>{activeNode.outputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className={styles.ioBox}>
                <h4>⏱️ Términos y reglas clave</h4>
                <ul>{activeNode.keyTerms.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>

            <div className={styles.trapBox}>
              <ShieldAlert size={20}/>
              <div>
                <strong>Cuidado en preguntas PJS (Trampa frecuente):</strong>
                <p>{activeNode.pjsTrap}</p>
              </div>
            </div>

            <div className={styles.embeddedGraphic}>
              <LessonSupportGraphic graphic={activeNodeGraphic} />
            </div>
          </article>
        </div>
      )}

      {activeTab === 'charts' && (
        <div className={styles.panel}>
          <div className={styles.chartCard}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.sectionTag}><BarChart3 size={14}/> GOA CNSC 19/10/2026 · SECCIÓN 4.2</span>
                <h3>Gráfica Interactiva de Ponderaciones y Pruebas por Modalidad</h3>
                <p>Selecciona la modalidad de participación para visualizar el peso porcentual de cada prueba y el umbral eliminatorio funcional de 70.00 puntos.</p>
              </div>
            </div>

            <div className={styles.modalitySwitch}>
              {modalityWeights.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={m.id === activeModality.id ? styles.modalityActive : ''}
                  onClick={() => setSelectedModality(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <p className={styles.chartNote}>{activeModality.note}</p>

            <div className={styles.stackedBar} aria-label="Distribución porcentual de las pruebas">
              {activeModality.bars.map((bar) => (
                <div
                  key={bar.name}
                  className={styles.stackedSegment}
                  style={{ width: `${bar.weight}%`, backgroundColor: bar.color }}
                  title={`${bar.name}: ${bar.weight}%`}
                >
                  <strong>{bar.weight}%</strong>
                </div>
              ))}
            </div>

            <div className={styles.weightCards}>
              {activeModality.bars.map((bar) => (
                <div key={bar.name} className={styles.weightItem} style={{ borderLeftColor: bar.color }}>
                  <div className={styles.weightTop}>
                    <strong>{bar.weight}%</strong>
                    <span className={bar.character === 'Eliminatoria' ? styles.badgeElim : styles.badgeClas}>{bar.character}</span>
                  </div>
                  <h4>{bar.name}</h4>
                  <small>Puntaje mínimo aprobatorio: <b>{bar.minScore}</b></small>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.chartCard}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.sectionTag}><Scale size={14}/> SIMULADOR GRÁFICO · ARTS. 804 Y 838 ET</span>
                <h3>Visualizador de Imputación Proporcional (Art. 804 ET) y Tope de Embargo (Art. 838 ET)</h3>
                <p>En una deuda total de <strong>$100 millones</strong> compuesta por <strong>$60M de Impuesto (60%)</strong>, <strong>$20M de Sanción (20%)</strong> y <strong>$20M de Intereses (20%)</strong>, mueve el control para ver cómo se imputa cualquier abono parcial y cuál es el límite legal de embargo.</p>
              </div>
            </div>

            <div className={styles.imputationControl}>
              <label htmlFor="sim-payment-range">
                <span>Abono parcial del contribuyente en recibo 490:</span>
                <strong>${simPayment} millones ({simPayment}% de la deuda total)</strong>
              </label>
              <input
                id="sim-payment-range"
                type="range"
                min={10}
                max={100}
                step={5}
                value={simPayment}
                onChange={(e) => setSimPayment(Number(e.target.value))}
              />
            </div>

            <div className={styles.imputationGrid}>
              <div className={styles.impCard}>
                <span className={styles.impTag}>Impuesto (60% del peso)</span>
                <strong>Abona ${payCapital} M</strong>
                <small>Saldo restante de capital: ${(60 - payCapital).toFixed(1)} M</small>
                <div className={styles.impTrack}><span style={{ width: `${simPayment}%`, background: '#167c80' }} /></div>
              </div>
              <div className={styles.impCard}>
                <span className={styles.impTag}>Sanciones (20% del peso)</span>
                <strong>Abona ${paySanction} M</strong>
                <small>Saldo restante de sanción: ${(20 - paySanction).toFixed(1)} M</small>
                <div className={styles.impTrack}><span style={{ width: `${simPayment}%`, background: '#e5a000' }} /></div>
              </div>
              <div className={styles.impCard}>
                <span className={styles.impTag}>Intereses (20% del peso)</span>
                <strong>Abona ${payInterest} M</strong>
                <small>Saldo restante de intereses: ${(20 - payInterest).toFixed(1)} M</small>
                <div className={styles.impTrack}><span style={{ width: `${simPayment}%`, background: '#8b49bb' }} /></div>
              </div>
              <div className={styles.impCardHighlight}>
                <span className={styles.impTag}>Límite de Embargo (Art. 838 ET)</span>
                <strong>Máx. ${(100 - simPayment) * 2} M</strong>
                <small>Doble del saldo insoluto (${100 - simPayment} M × 2)</small>
                <div className={styles.impTrack}><span style={{ width: `${100 - simPayment}%`, background: '#b92637' }} /></div>
              </div>
            </div>
          </div>

          <div className={styles.chartCard}>
            <div className={styles.panelHeader}>
              <div>
                <span className={styles.sectionTag}><Clock3 size={14}/> ESCALÍMETRO DE PLAZOS PERENTORIOS</span>
                <h3>Gráfica Comparativa de los 12 Términos Legales más Evaluados en DIAN 2676</h3>
                <p>Compara de un vistazo desde los términos de 5, 10 y 15 días hábiles hasta los plazos de meses y años del Estatuto Tributario y CPACA.</p>
              </div>
            </div>

            <div className={styles.termBars}>
              {legalTermBars.map((item) => (
                <div key={item.term} className={styles.termRow}>
                  <div className={styles.termMeta}>
                    <strong>{item.term}</strong>
                    <span>{item.scope}</span>
                  </div>
                  <div className={styles.termContent}>
                    <div className={styles.termBarTrack}>
                      <div className={styles.termBarFill} style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                    </div>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'comparisons' && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.sectionTag}><GitCompareArrows size={14}/> CONTRASTE NORMATIVO DIRECTO</span>
              <h3>Matrices Comparativas para Descartar Distractores en PJS</h3>
              <p>Las preguntas situacionales suelen mezclar figuras parecidas. Selecciona una matriz para contrastar criterios punto por punto.</p>
            </div>
          </div>

          <div className={styles.matrixTabs}>
            {comparisonTables.map((table) => (
              <button
                key={table.id}
                type="button"
                className={table.id === activeMatrix.id ? styles.matrixTabActive : ''}
                onClick={() => setSelectedMatrixId(table.id)}
              >
                {table.title}
              </button>
            ))}
          </div>

          <div className={styles.matrixBox}>
            <div className={styles.matrixHead}>
              <h4>{activeMatrix.title}</h4>
              <p>{activeMatrix.subtitle}</p>
            </div>
            <div className={styles.tableScroll}>
              <table className={styles.compTable}>
                <thead>
                  <tr>
                    {activeMatrix.columns.map((col) => <th key={col}>{col}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {activeMatrix.rows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={cIdx === 0 ? styles.compRowLabel : ''}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.sectionTag}><Eye size={14}/> GALERÍA DE INFOGRAFÍAS DE ALTA DENSIDAD</span>
              <h3>Las {dianVisualAtlasCatalog.length} Láminas Visuales del Curso DIAN 2676</h3>
              <p>Haz clic en cualquier lámina para abrir el visor con zoom interactivo o saltar directamente a la lección correspondiente.</p>
            </div>
          </div>

          <div className={styles.categoryFilter}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={galleryCategory === cat ? styles.catActive : ''}
                onClick={() => setGalleryCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.galleryStack}>
            {filteredGallery.map((item) => (
              <div key={item.id} className={styles.galleryItem}>
                <div className={styles.galleryItemBar}>
                  <span className={styles.galleryBadge}>{item.moduleCode} · {item.category}</span>
                  <Link to={item.lessonPath} className={styles.galleryLink}>
                    Ir a la lección <ArrowRight size={15}/>
                  </Link>
                </div>
                <LessonSupportGraphic graphic={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
