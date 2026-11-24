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
        "text": "Contar dos años desde la notificación del 5 de diciembre de 2028; la del 12 de diciembre de 2030 es extemporánea y procede declarar prescripción.",
        "reason": "El art. 33 toma la notificación de primera instancia como interrupción y exige notificar segunda instancia dentro de dos años en el supuesto dado."
      },
      "other": [
        {
          "text": "Tomar la firma de noviembre de 2030 como acto que satisface el límite de dos años, aunque su notificación se produzca después del vencimiento.",
          "reason": "La firma dentro del intervalo no acredita que la providencia se haya notificado oportunamente."
        },
        {
          "text": "Contar un nuevo término de cinco años desde la presentación del recurso, considerando que la impugnación reabre el plazo ordinario para decidir y notificar.",
          "reason": "El recurso no crea un nuevo período general de cinco años; debe aplicarse el límite posterior a la interrupción."
        }
      ],
      "explanation": "El art. 33 toma la notificación de primera instancia como interrupción y exige notificar segunda instancia dentro de dos años en el supuesto dado. La firma dentro del intervalo no acredita que la providencia se haya notificado oportunamente. El recurso no crea un nuevo período general de cinco años; debe aplicarse el límite posterior a la interrupción.",
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
        "text": "Evaluar la credibilidad, relevancia y competencia frente al informe nuevo; si persiste duda de identificación y procede investigar, disponer indagación previa.",
        "reason": "Arts. 86 y 208–211: la información independiente merece evaluación propia y la duda sobre autoría activa la ruta de indagación si procede."
      },
      "other": [
        {
          "text": "Mantener la decisión inhibitoria hasta que el informe individualice plenamente al responsable, porque cualquier actuación posterior requiere que se desvirtúe primero la evaluación inicial.",
          "reason": "La inhibición sobre el escrito inconcreto no impide examinar una noticia posterior sustentada; no se exige autor identificado para indagación."
        },
        {
          "text": "Abrir investigación contra los administradores registrados como titulares de la cuenta compartida y resolver quién realizó cada modificación después de vincularlos formalmente.",
          "reason": "La titularidad de cuenta técnica compartida no individualiza automáticamente al operador ni demuestra presupuesto para abrir contra todos los administradores."
        }
      ],
      "explanation": "Arts. 86 y 208–211: la información independiente merece evaluación propia y la duda sobre autoría activa la ruta de indagación si procede. La inhibición sobre el escrito inconcreto no impide examinar una noticia posterior sustentada; no se exige autor identificado para indagación. La titularidad de cuenta técnica compartida no individualiza automáticamente al operador ni demuestra presupuesto para abrir contra todos los administradores.",
      "difficulty": 5
    }
  ],
  "pgn-m26": [
    {
      "caseText": "En una indagación previa ordinaria iniciada hace dos meses, la autoridad examina la alteración de un documento público desde una cuenta compartida. Se obtiene una bitácora individualizada, un registro de asignación de credenciales y una declaración que, contrastados entre sí, permiten identificar al posible autor. La jefatura propone esperar cuatro meses más para usar todo el término disponible antes de adoptar cualquier decisión.",
      "stem": "¿Qué actuación corresponde cuando el medio probatorio ya permite individualizar al posible autor y procede investigar?",
      "correct": {
        "text": "Abrir inmediatamente investigación por autoridad competente, motivando la identificación del posible autor y dejando la responsabilidad para la evaluación posterior.",
        "reason": "El art. 208 ordena apertura inmediata cuando se identifica o individualiza al posible autor y procede investigar."
      },
      "other": [
        {
          "text": "Continuar la indagación hasta completar seis meses para consolidar elementos sobre responsabilidad, pues la identificación no permite finalizar anticipadamente esa fase.",
          "reason": "El plazo de seis meses es máximo; no es una espera obligatoria una vez satisfecho el objeto de la indagación."
        },
        {
          "text": "Cerrar la indagación con formulación directa de cargos, considerando que las tres fuentes coincidentes sustituyen las diligencias de la etapa investigativa posterior.",
          "reason": "La identificación no satisface automáticamente el estándar del art. 222 ni permite omitir la investigación."
        }
      ],
      "explanation": "El art. 208 ordena apertura inmediata cuando se identifica o individualiza al posible autor y procede investigar. El plazo de seis meses es máximo; no es una espera obligatoria una vez satisfecho el objeto de la indagación. La identificación no satisface automáticamente el estándar del art. 222 ni permite omitir la investigación.",
      "difficulty": 4
    },
    {
      "caseText": "Una indagación previa ordinaria por posibles alteraciones de inventario llega al término de seis meses sin identificar al operador. Se practicaron los medios de prueba disponibles y no se trata de violaciones a derechos humanos ni DIH. El equipo solicita ampliar otros seis meses únicamente por la complejidad de las bitácoras. El informe de cierre acredita la duda persistente y enumera las diligencias efectivamente practicadas.",
      "stem": "¿Cuál decisión corresponde al escenario descrito, sin extender una excepción a un supuesto ordinario?",
      "correct": {
        "text": "Archivar motivadamente según el parágrafo del artículo 208, sin cosa juzgada material, al agotarse el plazo sin individualizar al posible autor.",
        "reason": "El art. 208 establece archivo sin cosa juzgada material cuando no se logra identificar al posible autor en el supuesto descrito."
      },
      "other": [
        {
          "text": "Extender seis meses adicionales mediante motivación técnica, considerando que la complejidad de los registros permite aplicar la regla especial aunque no exista supuesto DDHH o DIH.",
          "reason": "La extensión especial corresponde a violaciones de DDHH o DIH; la complejidad informática no habilita su uso por analogía."
        },
        {
          "text": "Abrir investigación contra el grupo de servidores con acceso y completar después su individualización, para conservar la posibilidad de practicar nuevas pruebas.",
          "reason": "La apertura exige individualización del posible autor conforme al art. 211; la presión del vencimiento no sustituye esa condición."
        }
      ],
      "explanation": "El art. 208 establece archivo sin cosa juzgada material cuando no se logra identificar al posible autor en el supuesto descrito. La extensión especial corresponde a violaciones de DDHH o DIH; la complejidad informática no habilita su uso por analogía. La apertura exige individualización del posible autor conforme al art. 211; la presión del vencimiento no sustituye esa condición.",
      "difficulty": 5
    }
  ]
}
