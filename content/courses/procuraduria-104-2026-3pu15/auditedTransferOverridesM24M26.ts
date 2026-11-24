import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM24M26: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m24": [
    {
      "caseText": "En una revisión de la PGN se analizan dos conductas independientes sujetas al art. 33 vigente, sin aplicación de la regla especial del art. 52. La primera es instantánea y se consumó el 10 de enero de 2024; la segunda es omisiva y el deber de actuar cesó el 20 de junio de 2024. La queja ingresó en octubre de 2025. No se ha notificado fallo de primera instancia. El informe usa una sola fecha para ambos hechos.",
      "stem": "¿Qué cronología corresponde reconstruir antes de recomendar una decisión por prescripción?",
      "correct": {
        "text": "Calcular separadamente los cinco años desde enero y junio de 2024, respectivamente, y verificar hitos interruptivos y reglas aplicables a cada conducta.",
        "reason": "Cada conducta tiene su propio supuesto de inicio; la fecha de queja no sustituye el hecho legalmente relevante."
      },
      "other": [
        {
          "text": "Contar cinco años para las dos conductas desde octubre de 2025 porque entonces recibió noticia la autoridad.",
          "reason": "La noticia no define el inicio en estos supuestos del art. 33."
        },
        {
          "text": "Tomar enero de 2024 como fecha inicial de ambas, por pertenecer al mismo expediente.",
          "reason": "Compartir expediente no unifica los términos de conductas diferentes."
        }
      ],
      "explanation": "Art. 33 CGD, modificado por art. 7 Ley 2094: consumación para instantáneas y cese del deber para omisivas; verificar por separado.",
      "difficulty": 4
    },
    {
      "caseText": "Un expediente por una conducta instantánea consumada el 10 de enero de 2024 se rige por la regla general vigente de cinco años, sin particularidades de transición ni del art. 52. El fallo de primera instancia se firmó el 1 de diciembre de 2028 y se notificó el 5 de diciembre. Se interpuso recurso y la segunda instancia se firmó en noviembre de 2030, pero su notificación ocurrió el 12 de diciembre de 2030. El cuadro institucional solo registra las firmas.",
      "stem": "¿Qué dato determina si la segunda instancia se notificó dentro del límite posterior a la interrupción?",
      "correct": {
        "text": "La notificación del 5 de diciembre de 2028 inicia el control de dos años; la notificación del 12 de diciembre de 2030 supera ese intervalo, por lo que corresponde examinar y declarar la prescripción conforme a la regla dada.",
        "reason": "La norma vincula interrupción y control posterior a las notificaciones, no solo a la firma."
      },
      "other": [
        {
          "text": "La firma de noviembre de 2030 basta para descartar prescripción, aunque la notificación sea posterior.",
          "reason": "Una decisión firmada no acredita su notificación dentro del plazo."
        },
        {
          "text": "El recurso reinicia siempre un término completo de cinco años desde su presentación.",
          "reason": "El recurso no crea un nuevo período general de cinco años."
        }
      ],
      "explanation": "Art. 33 CGD: la notificación de primera instancia interrumpe; si pasan dos años sin notificar segunda instancia, prescribe en el supuesto general descrito.",
      "difficulty": 5
    }
  ],
  "pgn-m25": [
    {
      "caseText": "Una ciudadana denuncia abuso de autoridad porque una servidora le pidió completar un documento exigido para un trámite. El correo original contiene el requerimiento, su fundamento normativo y el plazo de subsanación. La denuncia no aporta otro hecho concreto; la oficina verifica la disposición vigente y comprueba que el requerimiento se ajusta a ella. Se pretende abrir investigación solo por la insistencia de la ciudadana.",
      "stem": "¿Qué actuación inicial debe valorarse cuando los únicos hechos verificados son manifiestamente ajenos a una falta disciplinaria?",
      "correct": {
        "text": "Motivar la decisión inhibitoria conforme al art. 209 si concurre el supuesto legal, sin convertir una inconformidad con un trámite válido en imputación.",
        "reason": "La relevancia disciplinaria se examina objetivamente; el supuesto manifiesto permite valorar inhibición."
      },
      "other": [
        {
          "text": "Abrir indagación previa para identificar a la servidora, aunque su identidad y el hecho estén establecidos.",
          "reason": "No existe duda de identidad que habilite indagación previa."
        },
        {
          "text": "Abrir investigación por la intensidad de la inconformidad y esperar a que la servidora demuestre su inocencia.",
          "reason": "La inconformidad no sustituye relevancia ni traslada la carga probatoria."
        }
      ],
      "explanation": "CGD arts. 86, 208, 209 y 211: distinguir noticia, mérito inicial, identificación y actuación procedente.",
      "difficulty": 4
    },
    {
      "caseText": "Después de una denuncia genérica sobre supuesto abuso, se recibe un informe independiente de auditoría. Describe tres alteraciones concretas de registros, señala fechas y adjunta originales y extractos de bitácora. La cuenta técnica era compartida; todavía no se sabe quién ejecutó los cambios. La jefatura pide mantener la evaluación anterior porque el primer escrito no aportaba elementos suficientes y ya fue objeto de decisión inhibitoria.",
      "stem": "¿Cómo debe tratarse el informe independiente a la luz del nuevo grado de información disponible?",
      "correct": {
        "text": "Evaluar la nueva noticia, su credibilidad, relevancia y competencia; si se mantienen los presupuestos y la duda sobre identidad, disponer indagación previa por la autoridad habilitada.",
        "reason": "La nueva fuente exige evaluación propia; no prueba autoría individual por sí sola."
      },
      "other": [
        {
          "text": "Ignorar el nuevo soporte porque toda inhibición impide examinar información posterior independiente.",
          "reason": "Una decisión sobre una queja inconcreta no elimina el deber de evaluar hechos verificables nuevos."
        },
        {
          "text": "Formular cargos a los administradores del sistema porque el informe identifica la cuenta técnica utilizada.",
          "reason": "Una cuenta compartida y una noticia no acreditan requisitos para cargos."
        }
      ],
      "explanation": "CGD arts. 86, 208, 209 y 211: el nuevo soporte puede modificar la evaluación y la ruta procesal, sin anticipar responsabilidad.",
      "difficulty": 5
    }
  ],
  "pgn-m26": [
    {
      "caseText": "En una indagación previa ordinaria iniciada hace dos meses, la autoridad examina la alteración de un documento público desde una cuenta compartida. Se obtiene una bitácora individualizada, un registro de asignación de credenciales y una declaración que, contrastados entre sí, permiten identificar al posible autor. La jefatura propone esperar cuatro meses más para usar todo el término disponible antes de adoptar cualquier decisión.",
      "stem": "¿Qué actuación corresponde cuando el medio probatorio ya permite individualizar al posible autor y procede investigar?",
      "correct": {
        "text": "Emitir inmediatamente el auto de apertura de investigación por la autoridad competente, documentando el fundamento y reservando la valoración de responsabilidad para las etapas siguientes.",
        "reason": "El art. 208 exige apertura inmediata una vez satisfecha la identificación y el presupuesto de investigación."
      },
      "other": [
        {
          "text": "Mantener la indagación hasta completar seis meses porque el término es obligatorio en todos los casos.",
          "reason": "Los seis meses son límite de duración, no espera obligatoria."
        },
        {
          "text": "Formular cargos inmediatamente porque identificar al posible autor equivale a probar responsabilidad.",
          "reason": "La identificación no acredita por sí sola el estándar de formulación de cargos."
        }
      ],
      "explanation": "CGD art. 208 modificado por Ley 2094: el soporte de identificación conduce a la apertura, no al agotamiento artificial del plazo ni a cargos automáticos.",
      "difficulty": 4
    },
    {
      "caseText": "Una indagación previa ordinaria por posibles alteraciones de inventario llega al término de seis meses sin identificar al operador. Se practicaron los medios de prueba disponibles y no se trata de violaciones a derechos humanos ni DIH. El equipo solicita ampliar otros seis meses únicamente por la complejidad de las bitácoras. El informe de cierre acredita la duda persistente y enumera las diligencias efectivamente practicadas.",
      "stem": "¿Cuál decisión corresponde al escenario descrito, sin extender una excepción a un supuesto ordinario?",
      "correct": {
        "text": "Ordenar el archivo conforme al art. 208, parágrafo, y registrar sus fundamentos y efectos; no aplicar por analogía la extensión especial de derechos humanos o DIH.",
        "reason": "El archivo corresponde a la ausencia de identificación en este supuesto; el parágrafo no produce cosa juzgada material."
      },
      "other": [
        {
          "text": "Prorrogar seis meses por cualquier dificultad técnica, sin necesidad de una habilitación legal.",
          "reason": "La dificultad técnica no activa automáticamente la excepción del art. 208."
        },
        {
          "text": "Abrir investigación contra todos los servidores con acceso para evitar archivar al vencimiento.",
          "reason": "La presión temporal no sustituye el presupuesto de identificación."
        }
      ],
      "explanation": "CGD art. 208: seis meses en general, extensión especial para DDHH/DIH, archivo en el supuesto del parágrafo sin cosa juzgada material.",
      "difficulty": 5
    }
  ]
}
