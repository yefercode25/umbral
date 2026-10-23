import { useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  Calculator,
  CheckCircle2,
  Compass,
  FileSearch,
  Flame,
  GitBranch,
  HelpCircle,
  Layers,
  Lightbulb,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './DianInteractiveWorkout.module.css'

type WorkoutMode = 'dossier-tree' | 'act-inspector' | 'flash-duel' | 'pjs-xray' | 'quant-lab'

/* ============================================================================
 * MODO 1: ÁRBOL DE DECISIÓN DE EXPEDIENTE EN VIVO (SIMULADOR RAMIFICADO)
 * ========================================================================== */
type DossierMissionStep = {
  stepTitle: string
  clockLabel: string
  clockStatus: 'running' | 'interrupted' | 'suspended'
  accountStatus: string
  stageLabel: string
  narrative: string
  question: string
  options: {
    id: string
    label: string
    isOptimal: boolean
    feedback: string
    normRef: string
    validityDelta: number
  }[]
}

type DossierMission = {
  id: string
  badge: string
  title: string
  subtitle: string
  steps: DossierMissionStep[]
}

const dossierMissions: DossierMission[] = [
  {
    id: 'mision-coactivo',
    badge: 'MISIÓN 01 · CARTERA Y COBRO COACTIVO (M6, M9, M11–M13)',
    title: 'Expediente al límite de los 5 años de prescripción',
    subtitle: 'Gestiona una obligación de IVA desde la depuración del estado de cuenta hasta el fallo de excepciones y ajuste de embargo.',
    steps: [
      {
        stepTitle: 'Paso 1 de 4 · Alerta de prescripción y pago no reflejado',
        clockLabel: '4 años y 10 meses corridos (quedan 2 meses)',
        clockStatus: 'running',
        accountStatus: 'Deuda IVA $90M · Recibo 490 por $30M pendiente de conciliar',
        stageLabel: 'Depuración previa a Coactivo',
        narrative:
          'Recibes un expediente de IVA con 4 años y 10 meses desde el vencimiento del plazo para declarar. El contribuyente aporta copia de un Recibo Oficial de Pago en Bancos (490) por $30 millones pagado hace un año, que no aparece imputado por un error de grabación de período en la EAR.',
        question: '¿Cuál es la actuación técnica y jurídicamente procedente como Gestor II?',
        options: [
          {
            id: 'a',
            label: 'Conciliar de inmediato el pago con soporte de la EAR imputándolo proporcionalmente entre impuesto, sanción e intereses (Art. 804 ET) y librar/notificar mandamiento de pago por el saldo real antes de que venzan los 5 años.',
            isOptimal: true,
            feedback: '¡Exacto! Primero depuras la cuenta reconociendo la fecha real del pago en la EAR (Art. 803 ET) bajo imputación proporcional (Art. 804 ET), y aseguras la interrupción oportuna de la prescripción notificando el mandamiento sobre el saldo cierto (Arts. 817 y 818 ET).',
            normRef: 'Arts. 803, 804, 817, 818 y 826 ET',
            validityDelta: 25,
          },
          {
            id: 'b',
            label: 'Enviar tres oficios de cobro persuasivo durante los próximos dos meses esperando a que el banco corrija el recibo por su cuenta.',
            isOptimal: false,
            feedback: 'Riesgo crítico: los oficios persuasivos NO interrumpen la prescripción (Art. 818 ET). Si dejas pasar los 2 meses sin notificar mandamiento de pago ni otorgar facilidad, la obligación prescribirá.',
            normRef: 'Arts. 817 y 818 ET',
            validityDelta: -25,
          },
          {
            id: 'c',
            label: 'Abonar los $30 millones exclusivamente a intereses moratorios y librar mandamiento de pago por los $90 millones originales sin descontar nada.',
            isOptimal: false,
            feedback: 'Incorrecto por partida doble: desde la Ley 1066/2006 el pago se imputa proporcionalmente (Art. 804 ET), nunca solo a intereses, y cobrar una suma ya pagada vulnera la exigibilidad real del título.',
            normRef: 'Art. 804 y 828 ET',
            validityDelta: -20,
          },
        ],
      },
      {
        stepTitle: 'Paso 2 de 4 · Notificación del Mandamiento de Pago',
        clockLabel: '4 años y 11 meses (citación enviada)',
        clockStatus: 'running',
        accountStatus: 'Saldo depurado exigible: $64M (Capital + Sanción + Interés)',
        stageLabel: 'Notificación Art. 826 ET',
        narrative:
          'Libraste el mandamiento de pago por el saldo depurado de $64 millones y enviaste citación a la dirección informada en el RUT para notificación personal. Han transcurrido diez (10) días hábiles sin que el representante legal comparezca.',
        question: '¿Cómo debes proceder para perfeccionar la notificación e interrumpir la prescripción?',
        options: [
          {
            id: 'a',
            label: 'Practicar la notificación por correo (o electrónica según regla especial vigente) enviando copia del mandamiento de pago conforme al artículo 826 del Estatuto Tributario.',
            isOptimal: true,
            feedback: '¡Correcto! Vencidos los 10 días de citación sin comparecencia, el Art. 826 ET habilita la notificación por correo; una vez surtida válidamente, se interrumpe la prescripción (Art. 818 ET) y el término de 5 años se reinicia desde cero.',
            normRef: 'Arts. 818 y 826 ET',
            validityDelta: 25,
          },
          {
            id: 'b',
            label: 'Declarar el desistimiento tácito del proceso coactivo por inasistencia del deudor.',
            isOptimal: false,
            feedback: 'Error conceptual: el cobro coactivo es un proceso ejecutivo de oficio; la no comparecencia del deudor a la citación habilita la notificación subsidiaria, jamás el desistimiento.',
            normRef: 'Art. 826 ET',
            validityDelta: -20,
          },
          {
            id: 'c',
            label: 'Asumir que la simple expedición interna del mandamiento sin notificar ya interrumpió los 5 años de prescripción.',
            isOptimal: false,
            feedback: 'Trampa clásica de examen: el artículo 818 del Estatuto Tributario exige la NOTIFICACIÓN del mandamiento de pago, no su sola firma interna.',
            normRef: 'Art. 818 ET',
            validityDelta: -25,
          },
        ],
      },
      {
        stepTitle: 'Paso 3 de 4 · Excepciones y Límite de Medida Cautelar',
        clockLabel: 'Interrumpido → Nuevo cómputo de 5 años activo',
        clockStatus: 'interrupted',
        accountStatus: 'Saldo $64M · Embargo registrado sobre inmueble avaluado en $260M y cuenta por $190M',
        stageLabel: 'Trámite de Excepciones (Arts. 830–832 y 838 ET)',
        narrative:
          'Al día 12 hábil tras la notificación del mandamiento, el deudor radica escrito proponiendo dos puntos: 1) cuestiona los costos rechazados en la liquidación oficial de hace dos años, y 2) solicita reducir el embargo porque la suma de bienes embargados ($450M) supera ampliamente el límite legal frente a una deuda de $64M más intereses.',
        question: '¿Qué decisión debes proyectar dentro del mes siguiente?',
        options: [
          {
            id: 'a',
            label: 'Rechazar en plazo de 1 mes el debate de fondo sobre costos por prohibición del Art. 829-1 ET, ordenar seguir adelante la ejecución y ajustar/reducir las medidas cautelares al tope máximo del doble de la deuda más intereses (Art. 838 ET).',
            isOptimal: true,
            feedback: '¡Impecable! En cobro coactivo no se reabre el debate de determinación del tributo (Art. 829-1 ET), se decide dentro del mes (Art. 832 ET) y se respeta el límite de embargo del Art. 838 ET (máximo el doble de deuda más intereses).',
            normRef: 'Arts. 829-1, 831, 832 y 838 ET',
            validityDelta: 25,
          },
          {
            id: 'b',
            label: 'Reabrir el estudio contable de las facturas de compra del año gravable para reliquidar el IVA dentro del proceso de cobro coactivo.',
            isOptimal: false,
            feedback: 'Violación del Art. 829-1 ET: en el procedimiento administrativo de cobro no pueden debatirse cuestiones que debieron ser objeto de discusión en la vía gubernativa de determinación.',
            normRef: 'Art. 829-1 ET',
            validityDelta: -20,
          },
          {
            id: 'c',
            label: 'Declarar extemporáneo el escrito porque el plazo para excepcionar era de 5 días hábiles.',
            isOptimal: false,
            feedback: 'Error de término: el deudor cuenta con quince (15) días hábiles siguientes a la notificación del mandamiento para pagar o proponer excepciones (Art. 830 ET); al día 12 estaba en término.',
            normRef: 'Art. 830 ET',
            validityDelta: -20,
          },
        ],
      },
      {
        stepTitle: 'Paso 4 de 4 · Recurso y Demanda Contenciosa',
        clockLabel: 'Suspendido frente a remate si hay demanda admitida',
        clockStatus: 'suspended',
        accountStatus: 'Fallo de excepciones notificado · Orden de seguir adelante la ejecución',
        stageLabel: 'Recursos y Control Judicial (Arts. 834 y 835 ET)',
        narrative:
          'Notificada la resolución que rechazó las excepciones y ordenó seguir adelante la ejecución, el deudor pregunta qué recurso administrativo procede y en qué plazo, y advierte que luego presentará demanda ante la Jurisdicción de lo Contencioso Administrativo.',
        question: '¿Cuál es la regla exacta de contradicción y el efecto de una eventual demanda contenciosa?',
        options: [
          {
            id: 'a',
            label: 'Procede únicamente Recurso de Reposición dentro del mes siguiente (resuelto en 1 mes, Art. 834 ET). Si luego demanda ante el juez contencioso, el proceso coactivo no se suspende, pero no podrá realizarse el remate hasta que haya fallo definitivo (Art. 835 ET).',
            isOptimal: true,
            feedback: '¡Dominio total! El Art. 834 ET prevé reposición dentro del mes siguiente, y el Art. 835 ET establece que la admisión de la demanda no suspende el cobro ni levanta embargos, pero impide realizar la diligencia de remate hasta sentencia definitiva.',
            normRef: 'Arts. 834 y 835 ET',
            validityDelta: 25,
          },
          {
            id: 'b',
            label: 'Procede recurso de apelación en 10 días bajo CPACA y la sola radicación de la demanda obliga a levantar todos los embargos.',
            isOptimal: false,
            feedback: 'Incorrecto: rige la norma especial tributaria (Reposición en 1 mes, Art. 834 ET) y la admisión de la demanda jamás obliga a levantar embargos por sí sola (Art. 835 ET).',
            normRef: 'Arts. 834 y 835 ET',
            validityDelta: -20,
          },
          {
            id: 'c',
            label: 'No procede ningún recurso administrativo y puede rematarse el bien aunque el juez contencioso haya admitido la demanda contra el fallo de excepciones.',
            isOptimal: false,
            feedback: 'Falso: contra el rechazo de excepciones sí procede reposición (Art. 834 ET) y la admisión de la demanda suspende la diligencia de remate (Art. 835 ET).',
            normRef: 'Arts. 834 y 835 ET',
            validityDelta: -25,
          },
        ],
      },
    ],
  },
  {
    id: 'mision-devoluciones',
    badge: 'MISIÓN 02 · DEVOLUCIONES Y COMPENSACIONES (M15–M16)',
    title: 'Saldo a favor con inadmisión, investigación previa y compensación',
    subtitle: 'Resuelve paso a paso una solicitud de devolución aplicando los artículos 854, 855, 857, 857-1, 858, 860 y 861 del Estatuto Tributario.',
    steps: [
      {
        stepTitle: 'Paso 1 de 3 · Filtro de Oportunidad y Defecto Formal',
        clockLabel: 'Solicitud radicada al mes 16 desde el vencimiento para declarar',
        clockStatus: 'running',
        accountStatus: 'Saldo a favor Renta $120M · Falta relación certificada de retenciones',
        stageLabel: 'Revisión Formal (Arts. 854, 857 y 858 ET)',
        narrative:
          'Una sociedad solicita la devolución de un saldo a favor de Renta por $120 millones a los 16 meses del vencimiento del término para declarar. Al revisar los soportes dentro de los primeros 15 días, adviertes que presenta un defecto formal subsanable en la relación de retenciones en la fuente.',
        question: '¿Qué acto debes proferir y qué efecto tiene sobre el plazo de solicitud?',
        options: [
          {
            id: 'a',
            label: 'Proferir Auto Inadmisorio dentro de los 15 días (Art. 858 ET) para que radique nueva solicitud subsanando el requisito dentro del mes (1 mes) siguiente.',
            isOptimal: true,
            feedback: '¡Correcto! La solicitud está dentro de los 2 años de oportunidad (Art. 854 ET) y el defecto es formal, por lo que procede inadmisión (Art. 858 ET) y no rechazo definitivo.',
            normRef: 'Arts. 854 y 858 ET',
            validityDelta: 35,
          },
          {
            id: 'b',
            label: 'Proferir Resolución de Rechazo Definitivo por extemporaneidad (Art. 857 num. 1 ET) porque pasaron más de 12 meses.',
            isOptimal: false,
            feedback: 'Error de término: el plazo general para solicitar devolución o compensación de saldo a favor es de dos (2) años desde el vencimiento del plazo para declarar (Art. 854 ET); a los 16 meses es oportuna.',
            normRef: 'Arts. 854 y 857 ET',
            validityDelta: -25,
          },
          {
            id: 'c',
            label: 'Girar el dinero de inmediato dejando una nota para que aporte la relación de retenciones después del desembolso.',
            isOptimal: false,
            feedback: 'Improcedente: no puede autorizarse devolución sin el cumplimiento de los requisitos formales y la validación previa de soportes.',
            normRef: 'Art. 858 ET',
            validityDelta: -25,
          },
        ],
      },
      {
        stepTitle: 'Paso 2 de 3 · Garantía de 20 Días e Indicio de Inexactitud',
        clockLabel: 'Término con garantía: 20 días hábiles → Solicitud de suspensión',
        clockStatus: 'suspended',
        accountStatus: 'Solicitud subsanada con póliza de seguros (Art. 860 ET) · Alerta de Fiscalización',
        stageLabel: 'Investigación Previa (Arts. 857-1 y 860 ET)',
        narrative:
          'El contribuyente subsanó dentro del mes y presentó póliza de garantía para acogerse al término de 20 días hábiles (Art. 860 ET). Sin embargo, el área de Fiscalización reporta indicios graves de que varias retenciones declaradas provienen de un agente retenedor inexistente.',
        question: '¿Cuál es el mecanismo legal aplicable frente al término de devolución?',
        options: [
          {
            id: 'a',
            label: 'Suspender el término para devolver o compensar hasta por un máximo de noventa (90) días hábiles para que Fiscalización adelante la investigación previa a la devolución (Art. 857-1 ET).',
            isOptimal: true,
            feedback: '¡Exacto! El artículo 857-1 del Estatuto Tributario faculta suspender el término de devolución hasta por 90 días hábiles cuando se verifique alguno de los supuestos de investigación previa.',
            normRef: 'Arts. 857-1 y 860 ET',
            validityDelta: 35,
          },
          {
            id: 'b',
            label: 'Como presentó póliza de garantía (Art. 860 ET), está prohibido suspender el término o verificar las retenciones.',
            isOptimal: false,
            feedback: 'Falso: la garantía reduce el término de 50 a 20 días hábiles, pero no impide activar la suspensión por investigación previa del Art. 857-1 ET ante indicios de fraude o inexactitud.',
            normRef: 'Arts. 857-1 y 860 ET',
            validityDelta: -20,
          },
          {
            id: 'c',
            label: 'Suspender el trámite de manera indefinida por tres años sin emitir acto motivado.',
            isOptimal: false,
            feedback: 'Violación del debido proceso: la suspensión por investigación previa está limitada legalmente a un máximo de 90 días hábiles (Art. 857-1 ET).',
            normRef: 'Art. 857-1 ET',
            validityDelta: -25,
          },
        ],
      },
      {
        stepTitle: 'Paso 3 de 3 · Prelación de Compensación antes del Giro',
        clockLabel: 'Investigación cerrada sin glosa → Decisión final en término',
        clockStatus: 'running',
        accountStatus: 'Saldo a favor validado: $120M · Deuda exigible de Consumo en firme: $45M',
        stageLabel: 'Decisión y Giro (Art. 861 ET)',
        narrative:
          'Terminada la verificación dentro del plazo legal, se confirma la procedencia de los $120 millones de saldo a favor. Al consultar el estado de cuenta integral, encuentras que la misma sociedad tiene una deuda exigible y en firme por Impuesto Nacional al Consumo de $45 millones.',
        question: '¿Cómo debes estructurar la resolución decisoria?',
        options: [
          {
            id: 'a',
            label: 'Compensar primero de oficio los $45 millones de la deuda exigible (Art. 861 ET) y ordenar la devolución únicamente por el excedente de $75 millones.',
            isOptimal: true,
            feedback: '¡Regla de oro cumplida! Según el artículo 861 del Estatuto Tributario, en todos los casos la devolución de saldos a favor se efectuará una vez compensadas las deudas y obligaciones de plazo vencido del contribuyente o responsable.',
            normRef: 'Art. 861 ET',
            validityDelta: 30,
          },
          {
            id: 'b',
            label: 'Girar la totalidad de los $120 millones a la cuenta bancaria del contribuyente y enviarle un correo invitándolo a pagar después los $45 millones.',
            isOptimal: false,
            feedback: 'Error grave: infringe el mandato imperativo de compensación previa del Art. 861 ET y desprotege el recaudo.',
            normRef: 'Art. 861 ET',
            validityDelta: -30,
          },
          {
            id: 'c',
            label: 'Rechazar definitivamente la totalidad de los $120 millones por tener una deuda de $45 millones.',
            isOptimal: false,
            feedback: 'Desproporcionado e ilegal: la existencia de una deuda menor no es causal de rechazo definitivo (Art. 857 ET), sino de compensación parcial previa y devolución del saldo restante (Art. 861 ET).',
            normRef: 'Arts. 857 y 861 ET',
            validityDelta: -20,
          },
        ],
      },
    ],
  },
  {
    id: 'mision-concursal',
    badge: 'MISIÓN 03 · INSOLVENCIA LEY 1116 Y RESERVA (M14 Y M17)',
    title: 'Admisión a reorganización empresarial y gastos de administración',
    subtitle: 'Diferencia el tratamiento de obligaciones anteriores y posteriores al auto de inicio concursal y protege la reserva tributaria.',
    steps: [
      {
        stepTitle: 'Paso 1 de 3 · Efecto del Auto de Admisión a Reorganización',
        clockLabel: 'Prescripción suspendida para créditos concursales (Art. 818 ET)',
        clockStatus: 'suspended',
        accountStatus: 'Renta 2024 (anterior al inicio): $200M · Retención mes actual (posterior al inicio): $18M',
        stageLabel: 'Corte Concursal (Ley 1116/2006 Arts. 20 y 71)',
        narrative:
          'La Superintendencia de Sociedades comunica el auto de admisión de un contribuyente al proceso de reorganización empresarial (Ley 1116 de 2006). En la Seccional cursa cobro coactivo por Renta 2024 (causada antes del inicio) y acaba de vencer una declaración de Retención en la Fuente causada dos meses DESPUÉS de la admisión concursal.',
        question: '¿Cómo debes separar jurídicamente ambas obligaciones?',
        options: [
          {
            id: 'a',
            label: 'Suspender el cobro coactivo de Renta 2024 y remitir el crédito al promotor para su graduación en primera clase fiscal; en cambio, exigir el pago preferente de la Retención posterior como gasto de administración (Art. 71 Ley 1116), que sí admite cobro coactivo.',
            isOptimal: true,
            feedback: '¡Precisión quirúrgica! El Art. 20 de la Ley 1116 prohíbe continuar ejecuciones por deudas anteriores al inicio, mientras que el Art. 71 dispone que las obligaciones causadas con posterioridad al inicio son gastos de administración con preferencia de pago y exigibles coactivamente.',
            normRef: 'Ley 1116/2006 Arts. 20 y 71 · Art. 845 ET',
            validityDelta: 35,
          },
          {
            id: 'b',
            label: 'Continuar el remate de bienes dentro del cobro coactivo por la deuda de Renta 2024 ignorando el auto de la Superintendencia.',
            isOptimal: false,
            feedback: 'Nulidad de pleno derecho (Art. 20 Ley 1116/2006): a partir del inicio del proceso de reorganización no puede continuarse ningún proceso de ejecución o cobro sobre obligaciones causadas antes de dicha fecha.',
            normRef: 'Ley 1116/2006 Art. 20',
            validityDelta: -30,
          },
          {
            id: 'c',
            label: 'Suspender también el cobro de los impuestos y retenciones que se causen durante los próximos años después de la admisión.',
            isOptimal: false,
            feedback: 'Incorrecto: los créditos causados con posterioridad al inicio del proceso son gastos de administración (Art. 71 Ley 1116) y no quedan sometidos a la espera del acuerdo concursal.',
            normRef: 'Ley 1116/2006 Art. 71',
            validityDelta: -20,
          },
        ],
      },
      {
        stepTitle: 'Paso 2 de 3 · Vigilancia del Proyecto de Graduación de Créditos',
        clockLabel: 'En término de traslado del proyecto del promotor',
        clockStatus: 'suspended',
        accountStatus: 'Crédito fiscal certificado $200M · Promotor solo incluyó $110M en cuarta clase',
        stageLabel: 'Objeciones Concursales (Arts. 24 y 29 Ley 1116)',
        narrative:
          'Al revisar el proyecto de calificación y graduación de créditos publicado por el promotor, observas que el crédito fiscal de la DIAN fue graduado por un valor inferior al certificado y ubicado erróneamente en cuarta clase en lugar de primera clase fiscal.',
        question: '¿Qué actuación corresponde dentro del traslado legal?',
        options: [
          {
            id: 'a',
            label: 'Formular oportunamente objeción motivada al proyecto de calificación y graduación de créditos, aportando los títulos ejecutivos y liquidaciones certificadas para exigir su inclusión íntegra en primera clase (Fisco).',
            isOptimal: true,
            feedback: '¡Correcto! La defensa activa del crédito público en sede concursal exige presentar las objeciones dentro del traslado con pleno soporte documental para preservar la prelación legal de primera clase.',
            normRef: 'Ley 1116/2006 Arts. 24–30 · Art. 2495 C.C.',
            validityDelta: 35,
          },
          {
            id: 'b',
            label: 'Dictar una resolución interna de la DIAN anulando el auto del juez del concurso.',
            isOptimal: false,
            feedback: 'Falta de competencia: dentro del proceso concursal la DIAN actúa como acreedor calificado y debe ejercer los mecanismos procesales ante el juez del concurso (objeciones y recursos).',
            normRef: 'Ley 1116/2006 Art. 29',
            validityDelta: -25,
          },
          {
            id: 'c',
            label: 'Guardar silencio porque los créditos fiscales nunca requieren ser presentados ni vigilados en el concurso.',
            isOptimal: false,
            feedback: 'Error grave: omitir la presentación oportuna o no objetar errores de graduación compromete la recuperación efectiva del crédito fiscal.',
            normRef: 'Art. 845 ET y Ley 1116/2006',
            validityDelta: -25,
          },
        ],
      },
      {
        stepTitle: 'Paso 3 de 3 · Solicitud de Tercero sobre Declaraciones Reservadas',
        clockLabel: 'Trámite documental paralelo (M17)',
        clockStatus: 'suspended',
        accountStatus: 'Solicitud externa sin poder ni orden judicial',
        stageLabel: 'Reserva Tributaria (Art. 583 ET)',
        narrative:
          'Un proveedor comercial de la empresa en reorganización envía un correo a tu buzón institucional pidiendo copia íntegra de las declaraciones privadas de renta y anexos de costos de los últimos tres años del deudor, sin adjuntar poder ni autorización.',
        question: '¿Cuál es el manejo legal y ético de la información?',
        options: [
          {
            id: 'a',
            label: 'Negar de manera motivada el suministro de las declaraciones tributarias privadas invocando la reserva legal del artículo 583 del Estatuto Tributario y el artículo 24 del CPACA.',
            isOptimal: true,
            feedback: '¡Exacto! Las declaraciones tributarias están amparadas por reserva legal (Art. 583 ET); solo pueden entregarse al contribuyente, su apoderado debidamente acreditado o autoridades expresamente facultadas por la ley.',
            normRef: 'Art. 583 ET · Art. 24 CPACA',
            validityDelta: 30,
          },
          {
            id: 'b',
            label: 'Enviar las declaraciones por correo porque cuando una empresa entra en Ley 1116 desaparece la reserva tributaria del Estatuto Tributario.',
            isOptimal: false,
            feedback: 'Falso: el proceso concursal hace público el proyecto de graduación de créditos ante el juez, pero no deroga la reserva legal de las declaraciones privadas frente a terceros sin facultad legal (Art. 583 ET).',
            normRef: 'Art. 583 ET',
            validityDelta: -30,
          },
          {
            id: 'c',
            label: 'Consultar el expediente desde el usuario de un compañero de Fiscalización y enviarle capturas de pantalla informales.',
            isOptimal: false,
            feedback: 'Falta gravísima a la seguridad de la información, trazabilidad de accesos y reserva tributaria (M17 y M20).',
            normRef: 'Art. 583 ET · Código de Integridad',
            validityDelta: -35,
          },
        ],
      },
    ],
  },
]

/* ============================================================================
 * MODO 2: INSPECTOR DE ACTOS DIAN (CAZA EL VICIO JURÍDICO)
 * ========================================================================== */
type ActClause = {
  id: string
  heading: string
  text: string
  isFlawed: boolean
  explanation: string
  norm: string
}

type InspectableAct = {
  id: string
  docCode: string
  title: string
  context: string
  clauses: ActClause[]
}

const inspectableActs: InspectableAct[] = [
  {
    id: 'act-1',
    docCode: 'BORRADOR N.° 01 · COBRO COACTIVO',
    title: 'Resolución que decreta Medidas Cautelares y Resuelve Excepciones',
    context: 'Deuda exigible de Renta por $50 millones (incluidos intereses). El deudor propuso excepciones hace 18 días hábiles.',
    clauses: [
      {
        id: 'c1',
        heading: 'CLÁUSULA PRIMERA · Competencia y Oportunidad',
        text: 'El funcionario ejecutor de la División de Cobranzas de la Dirección Seccional es competente para resolver dentro del mes siguiente el escrito de excepciones radicado por el deudor al día 12 hábil de notificado el mandamiento.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: el deudor tenía 15 días hábiles para proponer excepciones (Art. 830 ET) y la DIAN cuenta con 1 mes para decidirlas (Art. 832 ET).',
        norm: 'Arts. 824, 830 y 832 ET',
      },
      {
        id: 'c2',
        heading: 'CLÁUSULA SEGUNDA · Cuantía del Embargo Bancario e Inmobiliario',
        text: 'Con el fin de presionar el pago inmediato, se ordena mantener en firme el embargo simultáneo de cuentas y bienes divisibles por valor total de $240 millones, equivalente a casi cinco veces la deuda más sus intereses.',
        isFlawed: true,
        explanation: '¡VICIO DETECTADO! El artículo 838 del Estatuto Tributario prohíbe que el valor de los bienes embargados exceda del DOBLE de la deuda más sus intereses ($50M × 2 = $100M máximo). Mantener $240M en bienes divisibles viola el límite legal.',
        norm: 'Art. 838 Estatuto Tributario',
      },
      {
        id: 'c3',
        heading: 'CLÁUSULA TERCERA · Recurso Procedente',
        text: 'Contra la presente resolución que rechaza las excepciones y ordena seguir adelante la ejecución procede únicamente el Recurso de Reposición ante el mismo funcionario, dentro del mes siguiente a su notificación.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: cumple fielmente el artículo 834 del Estatuto Tributario (reposición dentro del mes siguiente).',
        norm: 'Art. 834 Estatuto Tributario',
      },
    ],
  },
  {
    id: 'act-2',
    docCode: 'BORRADOR N.° 02 · DEVOLUCIONES Y COMPENSACIONES',
    title: 'Resolución de Devolución de Saldo a Favor en IVA',
    context: 'Exportador solicita oportunamente devolución de $90M de IVA. En su estado de cuenta registra deuda exigible y en firme de Renta por $28M.',
    clauses: [
      {
        id: 'c1',
        heading: 'CLÁUSULA PRIMERA · Verificación de Término de Solicitud',
        text: 'La solicitud fue radicada a los 14 meses del vencimiento del término para declarar, encontrándose dentro del plazo legal de dos (2) años previsto en el artículo 854 del Estatuto Tributario.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: el término para solicitar devolución de saldo a favor es de 2 años desde el vencimiento del plazo para declarar (Art. 854 ET).',
        norm: 'Art. 854 Estatuto Tributario',
      },
      {
        id: 'c2',
        heading: 'CLÁUSULA SEGUNDA · Orden de Giro Directo sin Compensación',
        text: 'Aunque el solicitante registra una obligación exigible y en firme por Renta de $28 millones, se ordena girar la totalidad de los $90 millones a su cuenta bancaria para no mezclar impuestos diferentes.',
        isFlawed: true,
        explanation: '¡VICIO DETECTADO! El artículo 861 del Estatuto Tributario ordena que en TODOS los casos la devolución de saldos a favor se efectuará una vez compensadas las deudas y obligaciones de plazo vencido del contribuyente. Debe compensarse primero Renta ($28M) y devolver solo $62M.',
        norm: 'Art. 861 Estatuto Tributario',
      },
      {
        id: 'c3',
        heading: 'CLÁUSULA TERCERA · Término General de Decisión',
        text: 'Al tramitarse sin garantía especial ni devolución automática, la Administración resuelve dentro del término ordinario de cincuenta (50) días hábiles siguientes a la solicitud en debida forma.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: el término general de devolución es de 50 días hábiles (Art. 855 ET).',
        norm: 'Art. 855 Estatuto Tributario',
      },
    ],
  },
  {
    id: 'act-3',
    docCode: 'BORRADOR N.° 03 · FACILIDADES DE PAGO',
    title: 'Resolución que Concede Facilidad de Pago a Cuatro (4) Años',
    context: 'Contribuyente solicita plazo de 48 meses para pagar $180 millones de impuestos y sanciones vencidas.',
    clauses: [
      {
        id: 'c1',
        heading: 'CLÁUSULA PRIMERA · Efecto sobre el Proceso de Cobro',
        text: 'El otorgamiento de la facilidad de pago mediante la presente resolución interrumpe el término de prescripción (Art. 818 ET) y suspende el procedimiento administrativo de cobro coactivo (Art. 841 ET).',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: los artículos 818 y 841 del Estatuto Tributario disponen expresamente estos efectos.',
        norm: 'Arts. 818 y 841 Estatuto Tributario',
      },
      {
        id: 'c2',
        heading: 'CLÁUSULA SEGUNDA · Exoneración de Garantía por Plazo de 4 Años',
        text: 'Por tratarse de un plazo de cuatro (4) años, se concede la facilidad sin exigir garantía real, bancaria, póliza ni fideicomiso, bastando una carta simple de intención de pago.',
        isFlawed: true,
        explanation: '¡VICIO DETECTADO! Según el artículo 814 del Estatuto Tributario, solo las facilidades hasta de un (1) año pueden concederse sin garantía real/bancaria previa relación de bienes; cuando el plazo supera un (1) año (hasta 5 años), es obligatorio constituir garantía que cubra deuda e intereses.',
        norm: 'Art. 814 Estatuto Tributario',
      },
      {
        id: 'c3',
        heading: 'CLÁUSULA TERCERA · Cláusula Aceleratoria por Incumplimiento',
        text: 'En caso de incumplimiento de cualquiera de las cuotas o de cualquier otra obligación tributaria que surja con posterioridad, se dejará sin efecto la facilidad mediante resolución contra la cual procede reposición en 5 días.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: refleja exactamente el procedimiento de incumplimiento del artículo 814-3 del Estatuto Tributario.',
        norm: 'Art. 814-3 Estatuto Tributario',
      },
    ],
  },
  {
    id: 'act-4',
    docCode: 'BORRADOR N.° 04 · PETICIÓN Y RESERVA TRIBUTARIA',
    title: 'Oficio de Respuesta a Derecho de Petición de Copias',
    context: 'Un ciudadano sin poder solicita copia de las declaraciones de renta de su vecino para usarlas en un litigio comercial privado.',
    clauses: [
      {
        id: 'c1',
        heading: 'CLÁUSULA PRIMERA · Término Legal de Petición de Documentos',
        text: 'La petición de copias y documentos se atiende dentro del plazo especial de diez (10) días hábiles previsto en el artículo 14 de la Ley 1437 de 2011 (sustituido por la Ley 1755 de 2015).',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: las peticiones de documentos e información tienen término de 10 días hábiles.',
        norm: 'Art. 14 CPACA (Ley 1755/2015)',
      },
      {
        id: 'c2',
        heading: 'CLÁUSULA SEGUNDA · Entrega de Declaraciones Privadas a Tercero sin Poder',
        text: 'En virtud del principio de transparencia, se adjunta copia íntegra de las declaraciones privadas de renta y patrimonio del contribuyente solicitado, aunque el peticionario no sea apoderado ni autoridad facultada.',
        isFlawed: true,
        explanation: '¡VICIO DETECTADO! Viola la reserva tributaria del artículo 583 del Estatuto Tributario y el artículo 24 del CPACA: las declaraciones tributarias son reservadas y no pueden entregarse a particulares sin poder o autorización legal.',
        norm: 'Art. 583 ET y Art. 24 CPACA',
      },
      {
        id: 'c3',
        heading: 'CLÁUSULA TERCERA · Motivación del Rechazo por Reserva',
        text: 'Cuando se niegue el acceso a documentos reservados, la decisión debe motivarse citando las disposiciones legales pertinentes e informando el mecanismo de insistencia del artículo 26 del CPACA cuando aplique.',
        isFlawed: false,
        explanation: 'Esta cláusula es CORRECTA: el rechazo por reserva legal exige motivación normativa expresa (Arts. 25 y 26 CPACA).',
        norm: 'Arts. 25 y 26 CPACA',
      },
    ],
  },
]

/* ============================================================================
 * MODO 3: FLASHCARDS 3D Y DUELO DE ASOCIACIÓN RÁPIDA
 * ========================================================================== */
type FlashcardItem = {
  id: string
  category: string
  front: string
  back: string
  norm: string
}

const flashcardDeck: FlashcardItem[] = [
  { id: 'fc-1', category: 'Cartera y Prescripción', front: '¿En cuánto tiempo prescribe la acción de cobro tributario y desde cuándo se cuenta en una declaración oportuna vs. extemporánea?', back: 'Prescribe en 5 años (Art. 817 ET). En declaración oportuna se cuenta desde el vencimiento del plazo para declarar; en extemporánea, desde la fecha de presentación.', norm: 'Art. 817 num. 1 y 2 ET' },
  { id: 'fc-2', category: 'Cartera y Prescripción', front: '¿Cuáles son las 4 causales que INTERRUMPEN la prescripción (reinician los 5 años a cero)?', back: '1) Notificación del mandamiento de pago · 2) Otorgamiento de facilidad de pago · 3) Admisión de solicitud de concordato/acuerdo · 4) Declaratoria oficial de liquidación forzosa.', norm: 'Art. 818 inc. 1 ET' },
  { id: 'fc-3', category: 'Cartera y Prescripción', front: '¿Qué ocurre si un contribuyente paga voluntariamente una obligación que ya estaba prescrita?', back: 'El pago es válido y NO puede ser materia de repetición ni devolución, aunque el deudor haya pagado sin saber que estaba prescrita.', norm: 'Art. 819 ET' },
  { id: 'fc-4', category: 'Estado de Cuenta', front: '¿Cómo se imputa un pago parcial frente a una deuda que tiene impuesto, sanción e intereses?', back: 'Se imputa PROPORCIONALMENTE: en la misma proporción con que participan el impuesto, las sanciones y los intereses dentro del total de la obligación al momento del pago.', norm: 'Art. 804 ET' },
  { id: 'fc-5', category: 'Cobro Coactivo', front: '¿Qué plazo tiene el deudor tras la notificación del mandamiento de pago y qué puede hacer?', back: 'Cuenta con quince (15) días hábiles siguientes a la notificación para: 1) Pagar el monto de la deuda con sus intereses, o 2) Proponer por escrito excepciones taxativas.', norm: 'Art. 830 ET' },
  { id: 'fc-6', category: 'Cobro Coactivo', front: '¿En qué término debe decidir la DIAN las excepciones propuestas y qué recurso procede si las rechaza?', back: 'La DIAN decide en un (1) mes (Art. 832 ET). Si las rechaza y ordena ejecutar, procede únicamente Recurso de Reposición dentro del mes (1 mes) siguiente (resuelto en 1 mes).', norm: 'Arts. 832 y 834 ET' },
  { id: 'fc-7', category: 'Medidas Cautelares', front: '¿Cuál es el límite máximo de valor de los bienes embargados en cobro coactivo?', back: 'El valor de los bienes embargados NO podrá exceder del DOBLE de la deuda más sus intereses (2 × [Deuda + Intereses]).', norm: 'Art. 838 ET' },
  { id: 'fc-8', category: 'Devoluciones', front: '¿Cuáles son los plazos de la DIAN para resolver una devolución (ordinaria, con garantía y automática) y cuánto dura la suspensión por investigación previa?', back: 'Ordinaria: 50 días hábiles (Art. 855) · Con garantía por 2 años: 20 días hábiles (Art. 860) · Automática: 15 días hábiles · Suspensión por investigación previa: máximo 90 días hábiles (Art. 857-1).', norm: 'Arts. 855, 857-1 y 860 ET' },
  { id: 'fc-9', category: 'Devoluciones', front: '¿Cuál es la diferencia clave entre Auto Inadmisorio (Art. 858) y Rechazo Definitivo (Art. 857)?', back: 'La inadmisión ocurre por fallas formales o saldo por compensar y da 1 mes para radicar nueva solicitud subsanada. El rechazo definitivo aplica por extemporaneidad (>2 años), saldo ya devuelto o ya imputado.', norm: 'Arts. 857 y 858 ET' },
  { id: 'fc-10', category: 'Concursal Ley 1116', front: '¿Cómo se tratan en reorganización empresarial (Ley 1116) los impuestos causados ANTES del inicio vs. los causados DESPUÉS?', back: 'Antes del inicio: se suspende el coactivo y se presentan al concurso (1.ª clase fiscal). Después del inicio: son gastos de administración (Art. 71 Ley 1116) con pago preferente y sí admiten coactivo.', norm: 'Ley 1116/2006 Arts. 20 y 71' },
  { id: 'fc-11', category: 'GOA y MIPG', front: '¿Cuál es la fecha de corte normativo de la GOA DIAN 2676 y cómo impacta a MIPG y a la Ley 2586 de 2026?', back: 'Corte inclusivo: normas vigentes expedidas HASTA el 19 de junio de 2026 (GOA 4.3). MIPG al corte tenía 7 dimensiones (Manual 6.1; v7 de 6 dimensiones es de agosto 2026). La Ley 2586 (19/06/2026) sí entra en el corte temporal.', norm: 'GOA 19/10/2026 num. 4.3' },
  { id: 'fc-12', category: 'CPACA y PQRSD', front: '¿Cuáles son los términos de respuesta del derecho de petición (general, documentos/info y consulta) y el plazo para remitir por falta de competencia?', back: 'General: 15 días hábiles · Documentos/información: 10 días hábiles (silencio positivo en 3 días) · Consulta: 30 días hábiles · Remisión al competente: máximo 5 días hábiles (Art. 21 CPACA).', norm: 'Arts. 14 y 21 CPACA (Ley 1755)' },
]

const matchPairs = [
  { id: 'mp-1', left: 'Proponer excepciones al mandamiento (Art. 830 ET)', right: '15 días hábiles siguientes a la notificación' },
  { id: 'mp-2', left: 'Decidir excepciones y recurso de reposición (Arts. 832 y 834 ET)', right: '1 mes para decidir · 1 mes para recurrir' },
  { id: 'mp-3', left: 'Devolución ordinaria vs. Devolución con garantía (Arts. 855 y 860 ET)', right: '50 días hábiles vs. 20 días hábiles' },
  { id: 'mp-4', left: 'Suspensión máxima por investigación previa (Art. 857-1 ET)', right: 'Hasta 90 días hábiles' },
  { id: 'mp-5', left: 'Tope máximo de bienes embargados (Art. 838 ET)', right: 'Doble (2×) de la deuda más sus intereses' },
  { id: 'mp-6', left: 'Solicitar devolución de saldo a favor (Art. 854 ET)', right: '2 años desde el vencimiento para declarar' },
]

/* ============================================================================
 * MODO 4: RAYOS X DE UNA PREGUNTA PJS (DECONSTRUCTOR METODOLÓGICO)
 * ========================================================================== */
const xrayCases = [
  {
    id: 'xray-1',
    title: 'Caso PJS 01 · Embargo, Excepciones y Prohibición del Art. 829-1 ET',
    caseText:
      'En la División de Cobranzas de una Dirección Seccional de la DIAN se notificó por correo el mandamiento de pago contra una sociedad por una Liquidación Oficial de Revisión de Renta que quedó ejecutoriada hace ocho meses. Al décimo día hábil siguiente a la notificación, el representante legal radica un escrito de excepciones solicitando que el funcionario de cobro revise nuevamente las facturas de deducciones rechazadas en la etapa de fiscalización y anule la liquidación oficial.',
    stem: 'Para decidir conforme al Estatuto Tributario y a la competencia del proceso de cobro coactivo, usted debe:',
    lenses: {
      fact: 'Hecho rector y etapa: Mandamiento de pago ya notificado; escrito radicado al día 10 hábil (dentro de los 15 días del Art. 830 ET); el deudor pretende reabrir el debate probatorio de deducciones de una liquidación oficial ya ejecutoriada.',
      competence: 'Competencia (Decreto 1742/2020 y Art. 824 ET): El funcionario de Cobranzas en la Seccional es competente para decidir las excepciones dentro de 1 mes, pero NO tiene competencia funcional para actuar como segunda instancia de Fiscalización/Liquidación.',
      norm: 'Norma especial aplicable (Corte 19/06/2026): Art. 829-1 ET (Prohibición expresa de debatir en cobro coactivo cuestiones que debieron discutirse en vía gubernativa de determinación) + Art. 831 ET (Excepciones taxativas) + Art. 832 ET (Decisión en 1 mes).',
      support: 'Soporte en expediente: Constancia de ejecutoria de la Liquidación Oficial (Art. 829 ET) y fecha de acuse de la notificación del mandamiento de pago.',
    },
    options: [
      {
        letter: 'A',
        text: 'Decidir dentro del mes siguiente rechazando la solicitud de reabrir el debate sobre deducciones por prohibición del artículo 829-1 del Estatuto Tributario y ordenar seguir adelante la ejecución si no se configura ninguna excepción taxativa del artículo 831.',
        isCorrect: true,
        lensAnalysis: 'CLAVE CORRECTA: Respeta el término de 1 mes (Art. 832 ET), aplica la prohibición de debatir el fondo en etapa de cobro (Art. 829-1 ET) y verifica las causales taxativas del Art. 831 ET.',
      },
      {
        letter: 'B',
        text: 'Abrir un período probatorio contable de dos meses dentro del cobro coactivo para auditar nuevamente las facturas de deducciones y modificar el valor de la liquidación oficial.',
        isCorrect: false,
        lensAnalysis: 'DISTRACTOR DE EXCESO DE COMPETENCIA: Infringe directamente el Art. 829-1 ET al reabrir en cobro coactivo un debate propio de la etapa de determinación.',
      },
      {
        letter: 'C',
        text: 'Rechazar de plano el escrito sin emitir resolución motivada alegando que el término para presentar excepciones vencía a los cinco (5) días hábiles.',
        isCorrect: false,
        lensAnalysis: 'DISTRACTOR DE TÉRMINO FALSO Y DEBIDO PROCESO: El plazo para excepcionar es de 15 días hábiles (Art. 830 ET), no de 5 días, y toda excepción oportuna exige resolución motivada en 1 mes (Art. 832 ET).',
      },
    ],
  },
  {
    id: 'xray-2',
    title: 'Caso PJS 02 · Devolución con Garantía, Deuda Exigible y Art. 861 ET',
    caseText:
      'Un contribuyente radica en debida forma una solicitud de devolución de saldo a favor de Renta por $150 millones dentro del año siguiente al vencimiento para declarar, adjuntando póliza de compañía de seguros conforme al artículo 860 del Estatuto Tributario. Al realizar la verificación del estado de cuenta corriente en la Dirección Seccional, usted constata que no existen indicios de inexactitud, pero aparece una obligación exigible y en firme de IVA a cargo del mismo contribuyente por $40 millones.',
    stem: 'Frente a este expediente, la actuación procedente dentro del término especial es:',
    lenses: {
      fact: 'Hecho rector y etapa: Solicitud de devolución oportuna (<2 años) con garantía válida (Art. 860 ET → término de 20 días hábiles), sin alerta de fiscalización, pero con deuda exigible de IVA por $40M en cuenta corriente.',
      competence: 'Competencia: Nivel Local (Dirección Seccional competente para resolver devoluciones y compensaciones en su jurisdicción según Decreto 1742/2020).',
      norm: 'Norma especial aplicable: Art. 860 ET (término de 20 días hábiles con garantía) + Art. 861 ET (obligación imperativa de compensar primero las deudas de plazo vencido antes de devolver el excedente).',
      support: 'Soporte en expediente: Póliza verificada conforme a requisitos del Art. 860 ET + estado de cuenta conciliado que acredita la firmeza y exigibilidad de los $40M de IVA.',
    },
    options: [
      {
        letter: 'A',
        text: 'Resolver dentro de los veinte (20) días hábiles compensando primero de oficio los $40 millones de la deuda exigible de IVA y ordenando la devolución del excedente de $110 millones.',
        isCorrect: true,
        lensAnalysis: 'CLAVE CORRECTA: Aplica simultáneamente el término de 20 días con garantía (Art. 860 ET) y la prelación obligatoria de compensación del Art. 861 ET.',
      },
      {
        letter: 'B',
        text: 'Ordenar el giro total de los $150 millones en veinte (20) días hábiles porque la póliza de seguros impide descontar deudas de otros impuestos como el IVA.',
        isCorrect: false,
        lensAnalysis: 'DISTRACTOR NORMATIVO FALSO: La garantía acelera el término a 20 días (Art. 860 ET), pero jamás deroga la obligación de compensar primero las deudas exigibles del contribuyente (Art. 861 ET).',
      },
      {
        letter: 'C',
        text: 'Proferir resolución de rechazo definitivo (Art. 857 ET) sobre la totalidad de los $150 millones por no estar a paz y salvo en IVA.',
        isCorrect: false,
        lensAnalysis: 'DISTRACTOR DE FIGURA EQUIVOCADA: Tener una deuda exigible menor no es causal de rechazo definitivo (Art. 857 ET); da lugar a compensación previa (Art. 861 ET).',
      },
    ],
  },
]

const FLASH_STORAGE_KEY = 'umbral:dian-flashcards:v1'

function loadFlashMastery(): Record<string, 'mastered' | 'review'> {
  try {
    const raw = localStorage.getItem(FLASH_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, 'mastered' | 'review'>) : {}
  } catch {
    return {}
  }
}

export function DianInteractiveWorkout() {
  const [mode, setMode] = useState<WorkoutMode>('dossier-tree')

  // Mode 1 state: Dossier Tree
  const [missionIdx, setMissionIdx] = useState(0)
  const [stepIdx, setStepIdx] = useState(0)
  const [chosenOptId, setChosenOptId] = useState<string | null>(null)
  const [validityScore, setValidityScore] = useState(100)

  // Mode 2 state: Act Inspector
  const [actIdx, setActIdx] = useState(0)
  const [inspectedClauses, setInspectedClauses] = useState<Record<string, boolean>>({})

  // Mode 3 state: Flashcards & Matching
  const [cardIdx, setCardIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [flashStatus, setFlashStatus] = useState<Record<string, 'mastered' | 'review'>>(loadFlashMastery)
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matchedIds, setMatchedIds] = useState<string[]>([])
  const [matchFeedback, setMatchFeedback] = useState<string>('Selecciona una figura a la izquierda y su término o regla exacta a la derecha.')

  // Mode 4 state: PJS X-Ray
  const [xrayIdx, setXrayIdx] = useState(0)
  const [activeLenses, setActiveLenses] = useState<Record<string, boolean>>({
    fact: true,
    competence: true,
    norm: true,
    support: false,
    distractors: false,
  })

  // Mode 5 state: Quant & Tax Calculator Lab
  const [capInput, setCapInput] = useState(60)
  const [sanInput, setSanInput] = useState(20)
  const [intInput, setIntInput] = useState(20)
  const [payInput, setPayInput] = useState(35)
  const [setA, setSetA] = useState(120)
  const [setB, setSetB] = useState(90)
  const [setInter, setSetInter] = useState(40)

  const currentMission = dossierMissions[missionIdx] ?? dossierMissions[0]!
  const currentStep = currentMission.steps[stepIdx] ?? currentMission.steps[0]!
  const chosenOption = currentStep.options.find((o) => o.id === chosenOptId)

  const currentAct = inspectableActs[actIdx] ?? inspectableActs[0]!
  const currentCard = flashcardDeck[cardIdx] ?? flashcardDeck[0]!
  const currentXray = xrayCases[xrayIdx] ?? xrayCases[0]!

  const totalDebt = Math.max(1, capInput + sanInput + intInput)
  const effectivePay = Math.min(payInput, totalDebt)
  const propCap = Math.round((capInput / totalDebt) * 1000) / 10
  const propSan = Math.round((sanInput / totalDebt) * 1000) / 10
  const propInt = Math.round((100 - propCap - propSan) * 10) / 10
  const abonoCap = Math.round(effectivePay * (capInput / totalDebt) * 100) / 100
  const abonoSan = Math.round(effectivePay * (sanInput / totalDebt) * 100) / 100
  const abonoInt = Math.round((effectivePay - abonoCap - abonoSan) * 100) / 100
  const remainingDebt = Math.max(0, Math.round((totalDebt - effectivePay) * 100) / 100)
  const maxEmbargo = Math.round(remainingDebt * 2 * 100) / 100

  const validInter = Math.min(setInter, setA, setB)
  const onlyA = setA - validInter
  const onlyB = setB - validInter
  const unionAB = setA + setB - validInter
  const probAGivenB = setB > 0 ? Math.round((validInter / setB) * 1000) / 10 : 0

  const shuffledRight = useMemo(
    () => [...matchPairs].sort((a, b) => a.right.localeCompare(b.right, 'es')),
    []
  )

  const markFlashcard = (status: 'mastered' | 'review') => {
    const next = { ...flashStatus, [currentCard.id]: status }
    setFlashStatus(next)
    try {
      localStorage.setItem(FLASH_STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore storage errors
    }
    setFlipped(false)
    setCardIdx((prev) => (prev + 1) % flashcardDeck.length)
  }

  const handleRightMatchClick = (pairId: string) => {
    if (!selectedLeft) {
      setMatchFeedback('Primero elige una figura de la columna izquierda.')
      return
    }
    if (selectedLeft === pairId) {
      if (!matchedIds.includes(pairId)) setMatchedIds((prev) => [...prev, pairId])
      const found = matchPairs.find((p) => p.id === pairId)
      setMatchFeedback(`¡Asociación correcta! ${found?.left} → ${found?.right}.`)
      setSelectedLeft(null)
    } else {
      setMatchFeedback('No coinciden. Revisa el artículo o término e intenta de nuevo.')
    }
  }

  return (
    <div className={`page ${styles.page}`}>
      <div className={styles.topLinks}>
        <Link to="/practice" className={styles.backLink}><ArrowLeft size={16}/> Volver a Práctica</Link>
        <Link to="/library?tab=mapas" className={styles.backLink}><Compass size={16}/> Ir al Atlas Visual</Link>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}><Sparkles size={15}/> GIMNASIO INTERACTIVO DE DECISIÓN · DIAN 2676</span>
          <h1>Entrenamiento Activo de Expedientes, Actos y Términos</h1>
          <p>Cinco laboratorios interactivos para pasar de la lectura pasiva a la toma de decisiones bajo presión: simula expedientes ramificados, audita cláusulas con vicios ocultos, domina términos con flashcards 3D, analiza reactivos con Rayos X y experimenta con fórmulas tributarias.</p>
        </div>
        <div className={styles.heroPills}>
          <div><strong>3</strong><span>Misiones Ramificadas</span></div>
          <div><strong>4</strong><span>Actos por Auditar</span></div>
          <div><strong>12</strong><span>Flashcards + Duelo</span></div>
          <div><strong>100%</strong><span>Interactivo</span></div>
        </div>
      </header>

      <nav className={styles.modeNav} aria-label="Herramientas del gimnasio interactivo">
        <button type="button" className={mode === 'dossier-tree' ? styles.modeActive : ''} onClick={() => setMode('dossier-tree')}>
          <GitBranch size={17}/> 1. Expediente en Vivo
        </button>
        <button type="button" className={mode === 'act-inspector' ? styles.modeActive : ''} onClick={() => setMode('act-inspector')}>
          <FileSearch size={17}/> 2. Caza el Vicio en el Acto
        </button>
        <button type="button" className={mode === 'flash-duel' ? styles.modeActive : ''} onClick={() => setMode('flash-duel')}>
          <Zap size={17}/> 3. Flashcards 3D y Duelo
        </button>
        <button type="button" className={mode === 'pjs-xray' ? styles.modeActive : ''} onClick={() => setMode('pjs-xray')}>
          <Layers size={17}/> 4. Rayos X de Reactivos PJS
        </button>
        <button type="button" className={mode === 'quant-lab' ? styles.modeActive : ''} onClick={() => setMode('quant-lab')}>
          <Calculator size={17}/> 5. Laboratorio Numérico ET
        </button>
      </nav>

      {/* =====================================================================
        * MODO 1: ÁRBOL DE DECISIÓN DE EXPEDIENTE EN VIVO
        * =================================================================== */}
      {mode === 'dossier-tree' && (
        <section className={styles.workspace} aria-label="Simulador ramificado de expediente en vivo">
          <div className={styles.missionBar}>
            {dossierMissions.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                className={idx === missionIdx ? styles.missionBtnActive : styles.missionBtn}
                onClick={() => {
                  setMissionIdx(idx)
                  setStepIdx(0)
                  setChosenOptId(null)
                  setValidityScore(100)
                }}
              >
                <span>Misión {idx + 1}</span>
                <strong>{m.title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.gauges}>
            <div className={`${styles.gaugeCard} ${styles[`clock_${currentStep.clockStatus}`]}`}>
              <span>⏱️ Reloj de Prescripción / Término</span>
              <strong>{currentStep.clockLabel}</strong>
            </div>
            <div className={styles.gaugeCard}>
              <span>💳 Estado de Cuenta y Título</span>
              <strong>{currentStep.accountStatus}</strong>
            </div>
            <div className={styles.gaugeCard}>
              <span>⚖️ Etapa Procesal Actual</span>
              <strong>{currentStep.stageLabel}</strong>
            </div>
            <div className={styles.gaugeCard}>
              <span>🛡️ Blindaje de Validez</span>
              <strong>{Math.max(0, Math.min(100, validityScore))}%</strong>
            </div>
          </div>

          <article className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div>
                <span className={styles.stepBadge}>{currentMission.badge}</span>
                <h2>{currentStep.stepTitle}</h2>
              </div>
              <div className={styles.stepDots}>
                {currentMission.steps.map((s, i) => (
                  <button
                    key={s.stepTitle}
                    type="button"
                    className={i === stepIdx ? styles.dotCurrent : i < stepIdx ? styles.dotDone : styles.dotPending}
                    onClick={() => {
                      setStepIdx(i)
                      setChosenOptId(null)
                    }}
                    aria-label={`Ir al paso ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.narrativeBox}>
              <strong>Hechos del expediente:</strong>
              <p>{currentStep.narrative}</p>
            </div>

            <h3 className={styles.promptTitle}>{currentStep.question}</h3>

            <div className={styles.choiceList}>
              {currentStep.options.map((opt, idx) => {
                const isSelected = chosenOptId === opt.id
                const stateCls = isSelected ? (opt.isOptimal ? styles.choiceOptimal : styles.choiceError) : ''
                return (
                  <button
                    key={opt.id}
                    type="button"
                    className={`${styles.choiceBtn} ${stateCls}`}
                    onClick={() => {
                      setChosenOptId(opt.id)
                      setValidityScore((prev) => Math.max(20, Math.min(100, prev + opt.validityDelta)))
                    }}
                  >
                    <span className={styles.choiceLetter}>{String.fromCharCode(65 + idx)}</span>
                    <span>{opt.label}</span>
                  </button>
                )
              })}
            </div>

            {chosenOption && (
              <div className={`${styles.outcomeBox} ${chosenOption.isOptimal ? styles.outcomeGood : styles.outcomeWarn}`} role="status">
                <div className={styles.outcomeHead}>
                  {chosenOption.isOptimal ? <CheckCircle2 size={20}/> : <AlertTriangle size={20}/>}
                  <strong>{chosenOption.isOptimal ? 'Actuación jurídicamente blindada' : 'Riesgo procesal o vicio detectado'}</strong>
                  <span className={styles.normChip}>{chosenOption.normRef}</span>
                </div>
                <p>{chosenOption.feedback}</p>
                <div className={styles.stepActions}>
                  {stepIdx < currentMission.steps.length - 1 ? (
                    <button
                      type="button"
                      className={styles.nextStepBtn}
                      onClick={() => {
                        setStepIdx((prev) => prev + 1)
                        setChosenOptId(null)
                      }}
                    >
                      Avanzar al Paso {stepIdx + 2} →
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.nextStepBtn}
                      onClick={() => {
                        setMissionIdx((prev) => (prev + 1) % dossierMissions.length)
                        setStepIdx(0)
                        setChosenOptId(null)
                        setValidityScore(100)
                      }}
                    >
                      <RotateCcw size={15}/> Pasar a la siguiente misión
                    </button>
                  )}
                </div>
              </div>
            )}
          </article>
        </section>
      )}

      {/* =====================================================================
        * MODO 2: INSPECTOR DE ACTOS DIAN (CAZA EL VICIO JURÍDICO)
        * =================================================================== */}
      {mode === 'act-inspector' && (
        <section className={styles.workspace} aria-label="Inspector de actos administrativos DIAN">
          <div className={styles.missionBar}>
            {inspectableActs.map((act, idx) => (
              <button
                key={act.id}
                type="button"
                className={idx === actIdx ? styles.missionBtnActive : styles.missionBtn}
                onClick={() => {
                  setActIdx(idx)
                  setInspectedClauses({})
                }}
              >
                <span>{act.docCode}</span>
                <strong>{act.title}</strong>
              </button>
            ))}
          </div>

          <article className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div>
                <span className={styles.stepBadge}>🔍 AUDITORÍA DE LEGALIDAD · HAZ CLIC EN CADA CLÁUSULA PARA DICTAMINARLA</span>
                <h2>{currentAct.title}</h2>
                <p className={styles.subContext}><strong>Contexto del expediente:</strong> {currentAct.context}</p>
              </div>
            </div>

            <div className={styles.clauseList}>
              {currentAct.clauses.map((clause) => {
                const revealed = Boolean(inspectedClauses[clause.id])
                return (
                  <div
                    key={clause.id}
                    className={`${styles.clauseCard} ${revealed ? (clause.isFlawed ? styles.clauseFlawed : styles.clauseValid) : ''}`}
                  >
                    <div className={styles.clauseTop}>
                      <strong>{clause.heading}</strong>
                      <button
                        type="button"
                        className={styles.inspectBtn}
                        onClick={() => setInspectedClauses((prev) => ({ ...prev, [clause.id]: !prev[clause.id] }))}
                      >
                        {revealed ? 'Ocultar dictamen' : '⚖️ Auditar esta cláusula'}
                      </button>
                    </div>
                    <p className={styles.clauseBody}>«{clause.text}»</p>
                    {revealed && (
                      <div className={styles.clauseVerdict}>
                        <div className={styles.verdictTitle}>
                          {clause.isFlawed ? <AlertTriangle size={18}/> : <ShieldCheck size={18}/>}
                          <strong>{clause.isFlawed ? 'CLÁUSULA CON VICIO DE ILEGALIDAD' : 'CLÁUSULA AJUSTADA A DERECHO'}</strong>
                          <span>{clause.norm}</span>
                        </div>
                        <p>{clause.explanation}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </article>
        </section>
      )}

      {/* =====================================================================
        * MODO 3: FLASHCARDS 3D Y DUELO DE ASOCIACIÓN DE TÉRMINOS
        * =================================================================== */}
      {mode === 'flash-duel' && (
        <section className={styles.workspace} aria-label="Flashcards activas y duelo de términos">
          <div className={styles.flashGrid}>
            <article className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div>
                  <span className={styles.stepBadge}>🧠 RECUPERACIÓN ACTIVA · TARJETA {cardIdx + 1} DE {flashcardDeck.length}</span>
                  <h2>Flashcards de Alta Frecuencia ({currentCard.category})</h2>
                </div>
                <span className={styles.normChip}>
                  Dominadas: {Object.values(flashStatus).filter((v) => v === 'mastered').length}/{flashcardDeck.length}
                </span>
              </div>

              <button
                type="button"
                className={`${styles.flashcard} ${flipped ? styles.flashcardFlipped : ''}`}
                onClick={() => setFlipped((f) => !f)}
              >
                <span className={styles.flashSideTag}>{flipped ? 'RESPUESTA Y FUNDAMENTO NORMATIVO' : 'PREGUNTA DE REPASO ACTIVO (TOCA PARA VOLTEAR)'}</span>
                <p className={styles.flashMainText}>{flipped ? currentCard.back : currentCard.front}</p>
                <span className={styles.flashNorm}>{flipped ? `Fuente: ${currentCard.norm}` : '🔄 Haz clic para revelar la regla exacta'}</span>
              </button>

              <div className={styles.flashControls}>
                <button type="button" className={styles.btnReview} onClick={() => markFlashcard('review')}>
                  🔁 Repasar luego
                </button>
                <button type="button" className={styles.btnFlip} onClick={() => setFlipped((f) => !f)}>
                  {flipped ? 'Ver pregunta' : 'Mostrar respuesta'}
                </button>
                <button type="button" className={styles.btnMastered} onClick={() => markFlashcard('mastered')}>
                  ✅ ¡Dominada!
                </button>
              </div>
            </article>

            <article className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div>
                  <span className={styles.stepBadge}><Flame size={14}/> DUELO DE ASOCIACIÓN RÁPIDA ({matchedIds.length}/{matchPairs.length})</span>
                  <h2>Empareja la Figura con su Término Legal</h2>
                </div>
                {matchedIds.length > 0 && (
                  <button
                    type="button"
                    className={styles.inspectBtn}
                    onClick={() => {
                      setMatchedIds([])
                      setSelectedLeft(null)
                      setMatchFeedback('Tablero reiniciado. ¡Empareja los 6 términos!')
                    }}
                  >
                    <RotateCcw size={14}/> Reiniciar
                  </button>
                )}
              </div>

              <p className={styles.matchStatus} role="status">{matchFeedback}</p>

              <div className={styles.matchBoard}>
                <div className={styles.matchCol}>
                  <h4>Actuación o Trámite DIAN</h4>
                  {matchPairs.map((pair) => {
                    const done = matchedIds.includes(pair.id)
                    const active = selectedLeft === pair.id
                    return (
                      <button
                        key={pair.id}
                        type="button"
                        disabled={done}
                        className={`${styles.matchTile} ${active ? styles.matchTileActive : ''} ${done ? styles.matchTileDone : ''}`}
                        onClick={() => setSelectedLeft(pair.id)}
                      >
                        {done ? '✓ ' : ''}{pair.left}
                      </button>
                    )
                  })}
                </div>
                <div className={styles.matchCol}>
                  <h4>Término o Límite Normativo</h4>
                  {shuffledRight.map((pair) => {
                    const done = matchedIds.includes(pair.id)
                    return (
                      <button
                        key={pair.id}
                        type="button"
                        disabled={done}
                        className={`${styles.matchTile} ${done ? styles.matchTileDone : ''}`}
                        onClick={() => handleRightMatchClick(pair.id)}
                      >
                        {done ? '✓ ' : ''}{pair.right}
                      </button>
                    )
                  })}
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =====================================================================
        * MODO 4: RAYOS X DE UNA PREGUNTA PJS
        * =================================================================== */}
      {mode === 'pjs-xray' && (
        <section className={styles.workspace} aria-label="Deconstructor Rayos X de preguntas PJS">
          <div className={styles.missionBar}>
            {xrayCases.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                className={idx === xrayIdx ? styles.missionBtnActive : styles.missionBtn}
                onClick={() => setXrayIdx(idx)}
              >
                <span>Caso PJS {idx + 1}</span>
                <strong>{c.title}</strong>
              </button>
            ))}
          </div>

          <article className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <div>
                <span className={styles.stepBadge}>🔬 DECONSTRUCTOR METODOLÓGICO · ACTIVA O DESACTIVA CADA LENTE</span>
                <h2>{currentXray.title}</h2>
              </div>
            </div>

            <div className={styles.lensBar}>
              {[
                { key: 'fact', label: '1. Hecho y Etapa' },
                { key: 'competence', label: '2. Competencia' },
                { key: 'norm', label: '3. Norma y Corte' },
                { key: 'support', label: '4. Soporte' },
                { key: 'distractors', label: '5. Anatomía de Opciones' },
              ].map((lens) => (
                <button
                  key={lens.key}
                  type="button"
                  aria-pressed={Boolean(activeLenses[lens.key])}
                  className={activeLenses[lens.key] ? styles.lensActive : styles.lensBtn}
                  onClick={() => setActiveLenses((prev) => ({ ...prev, [lens.key]: !prev[lens.key] }))}
                >
                  {activeLenses[lens.key] ? '👁️ ' : '○ '}{lens.label}
                </button>
              ))}
            </div>

            <div className={styles.narrativeBox}>
              <strong>Caso situacional:</strong>
              <p>{currentXray.caseText}</p>
              <p style={{ marginTop: '10px', fontWeight: 900 }}>{currentXray.stem}</p>
            </div>

            <div className={styles.xrayLensesGrid}>
              {activeLenses.fact && (
                <div className={styles.xrayCardTeal}>
                  <strong>🔍 Lente 1 · Hecho Rector y Etapa Procesal</strong>
                  <p>{currentXray.lenses.fact}</p>
                </div>
              )}
              {activeLenses.competence && (
                <div className={styles.xrayCardBlue}>
                  <strong>🏛️ Lente 2 · Filtro de Competencia</strong>
                  <p>{currentXray.lenses.competence}</p>
                </div>
              )}
              {activeLenses.norm && (
                <div className={styles.xrayCardGreen}>
                  <strong>⚖️ Lente 3 · Regla Especial y Corte (19/06/2026)</strong>
                  <p>{currentXray.lenses.norm}</p>
                </div>
              )}
              {activeLenses.support && (
                <div className={styles.xrayCardGold}>
                  <strong>📁 Lente 4 · Soporte Documental Exigido</strong>
                  <p>{currentXray.lenses.support}</p>
                </div>
              )}
            </div>

            <div className={styles.choiceList}>
              {currentXray.options.map((opt) => (
                <div key={opt.letter} className={`${styles.xrayOption} ${activeLenses.distractors ? (opt.isCorrect ? styles.choiceOptimal : styles.choiceError) : ''}`}>
                  <div className={styles.xrayOptMain}>
                    <span className={styles.choiceLetter}>{opt.letter}</span>
                    <span>{opt.text}</span>
                  </div>
                  {activeLenses.distractors && (
                    <p className={styles.xrayOptNote}>
                      <Lightbulb size={15}/> {opt.lensAnalysis}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </article>
        </section>
      )}

      {/* =====================================================================
        * MODO 5: LABORATORIO NUMÉRICO Y CUANTITATIVO ET
        * =================================================================== */}
      {mode === 'quant-lab' && (
        <section className={styles.workspace} aria-label="Laboratorio numérico tributario y de conjuntos">
          <div className={styles.flashGrid}>
            <article className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div>
                  <span className={styles.stepBadge}><Scale size={14}/> ART. 804 Y ART. 838 ESTATUTO TRIBUTARIO</span>
                  <h2>Simulador de Imputación Proporcional y Límite de Embargo</h2>
                </div>
              </div>

              <div className={styles.sliderStack}>
                <label>
                  <span>Impuesto (Capital): <strong>${capInput} M ({propCap}%)</strong></span>
                  <input type="range" min={10} max={200} step={5} value={capInput} onChange={(e) => setCapInput(Number(e.target.value))} />
                </label>
                <label>
                  <span>Sanciones: <strong>${sanInput} M ({propSan}%)</strong></span>
                  <input type="range" min={0} max={100} step={5} value={sanInput} onChange={(e) => setSanInput(Number(e.target.value))} />
                </label>
                <label>
                  <span>Intereses de mora: <strong>${intInput} M ({propInt}%)</strong></span>
                  <input type="range" min={0} max={100} step={5} value={intInput} onChange={(e) => setIntInput(Number(e.target.value))} />
                </label>
                <label>
                  <span>Pago parcial realizado en recibo 490: <strong>${effectivePay} M (de ${totalDebt} M totales)</strong></span>
                  <input type="range" min={5} max={totalDebt} step={5} value={effectivePay} onChange={(e) => setPayInput(Number(e.target.value))} />
                </label>
              </div>

              <div className={styles.quantResultGrid}>
                <div className={styles.quantBox}>
                  <span>Abono a Impuesto ({propCap}%)</span>
                  <strong>${abonoCap} M</strong>
                  <small>Resta: ${(capInput - abonoCap).toFixed(2)} M</small>
                </div>
                <div className={styles.quantBox}>
                  <span>Abono a Sanción ({propSan}%)</span>
                  <strong>${abonoSan} M</strong>
                  <small>Resta: ${(sanInput - abonoSan).toFixed(2)} M</small>
                </div>
                <div className={styles.quantBox}>
                  <span>Abono a Intereses ({propInt}%)</span>
                  <strong>${abonoInt} M</strong>
                  <small>Resta: ${(intInput - abonoInt).toFixed(2)} M</small>
                </div>
                <div className={styles.quantBoxHighlight}>
                  <span>Tope Embargo Saldo (Art. 838)</span>
                  <strong>Máx. ${maxEmbargo} M</strong>
                  <small>2 × Saldo insoluto (${remainingDebt} M)</small>
                </div>
              </div>
            </article>

            <article className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div>
                  <span className={styles.stepBadge}><HelpCircle size={14}/> MÓDULOS M27 Y M28 · LÓGICA DE CONJUNTOS Y PROBABILIDAD</span>
                  <h2>Simulador de Inclusión-Exclusión para Cruces de Cartera</h2>
                </div>
              </div>

              <div className={styles.sliderStack}>
                <label>
                  <span>Deudores en mora de Renta |A|: <strong>{setA} contribuyentes</strong></span>
                  <input type="range" min={30} max={300} step={10} value={setA} onChange={(e) => setSetA(Number(e.target.value))} />
                </label>
                <label>
                  <span>Deudores en mora de IVA |B|: <strong>{setB} contribuyentes</strong></span>
                  <input type="range" min={30} max={300} step={10} value={setB} onChange={(e) => setSetB(Number(e.target.value))} />
                </label>
                <label>
                  <span>En mora simultánea de ambos |A ∩ B|: <strong>{validInter} contribuyentes</strong></span>
                  <input type="range" min={0} max={Math.min(setA, setB)} step={5} value={validInter} onChange={(e) => setSetInter(Number(e.target.value))} />
                </label>
              </div>

              <div className={styles.vennBar} aria-label="Distribución de conjuntos">
                <div style={{ flex: Math.max(1, onlyA), background: '#167c80' }}>Solo Renta: {onlyA}</div>
                <div style={{ flex: Math.max(1, validInter), background: '#3d8600' }}>Ambos: {validInter}</div>
                <div style={{ flex: Math.max(1, onlyB), background: '#117db2' }}>Solo IVA: {onlyB}</div>
              </div>

              <div className={styles.quantResultGrid}>
                <div className={styles.quantBox}>
                  <span>Unión Total |A ∪ B|</span>
                  <strong>{unionAB}</strong>
                  <small>{setA} + {setB} − {validInter}</small>
                </div>
                <div className={styles.quantBox}>
                  <span>Exclusivamente Renta |A − B|</span>
                  <strong>{onlyA}</strong>
                  <small>{setA} − {validInter}</small>
                </div>
                <div className={styles.quantBox}>
                  <span>Exclusivamente IVA |B − A|</span>
                  <strong>{onlyB}</strong>
                  <small>{setB} − {validInter}</small>
                </div>
                <div className={styles.quantBoxHighlight}>
                  <span>Prob. Condicional P(Renta | IVA)</span>
                  <strong>{probAGivenB}%</strong>
                  <small>|A ∩ B| / |B| = {validInter}/{setB}</small>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}
    </div>
  )
}
