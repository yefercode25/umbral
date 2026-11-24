import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM18M20: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m18": [
    {
      "caseText": "Una veeduría pide una matriz de vigilancia preventiva con valores contractuales divulgables y teléfonos privados. El archivo Excel tiene columnas ocultas, y la dependencia propone enviar la hoja tal como está, porque en pantalla no aparecen los teléfonos. No existe otra restricción legal sobre los valores solicitados.",
      "stem": "¿Qué acción permite responder sin exponer datos de terceros ni destruir los soportes originales?",
      "correct": {
        "text": "Crear una versión pública separada, retirar de forma efectiva los campos protegidos, verificar el archivo exportado y motivar las exclusiones, conservando el original bajo control.",
        "reason": "Ley 1712, arts. 18, 21 y 28: justificar la restricción y permitir divulgación parcial de lo separable; Ley 1581: proteger el tratamiento de datos personales."
      },
      "other": [
        {
          "text": "Enviar la hoja con columnas ocultas y protegerla contra edición, pues la restricción visual basta para impedir acceso.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Rechazar la totalidad de los valores contractuales por estar en el mismo archivo que los teléfonos.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "Ley 1712, arts. 18, 21 y 28: justificar la restricción y permitir divulgación parcial de lo separable; Ley 1581: proteger el tratamiento de datos personales.",
      "difficulty": 4
    },
    {
      "caseText": "Un ciudadano ajeno al proceso solicita la totalidad de una investigación disciplinaria en curso, mientras el defensor reconocido pide consultar los mismos documentos para ejercer contradicción. La oficina usa una sola plantilla de respuesta y pretende aplicar a ambos exactamente la misma restricción.",
      "stem": "¿Qué hecho debe cambiar el análisis de acceso en cada solicitud sin prejuzgar responsabilidad?",
      "correct": {
        "text": "Diferenciar la calidad de cada solicitante y la fase procesal; aplicar la reserva especial y las garantías de acceso de sujetos procesales, motivando cualquier negativa externa.",
        "reason": "CGD, art. 115: la reserva de la actuación no desconoce los derechos de los sujetos procesales. No confundir publicidad general con acceso para ejercer defensa."
      },
      "other": [
        {
          "text": "Entregar a ambos todo el expediente porque una investigación de la PGN siempre es información de acceso irrestricto.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Negar a ambos hasta el fallo ejecutoriado, incluso al defensor reconocido, por tratarse de una investigación en trámite.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "CGD, art. 115: la reserva de la actuación no desconoce los derechos de los sujetos procesales. No confundir publicidad general con acceso para ejercer defensa.",
      "difficulty": 5
    }
  ],
  "pgn-m19": [
    {
      "caseText": "Un equipo de instrucción de la PGN encuentra actas y testimonios contradictorios. La jefatura solicita pasar directamente a un proyecto de sanción porque el plazo de investigación está próximo a vencer; todavía no se ha adoptado decisión de evaluación ni se ha dado el trámite de juzgamiento.",
      "stem": "¿Cuál actuación distingue la etapa de instrucción y la decisión que le corresponde a la autoridad competente?",
      "correct": {
        "text": "Completar las verificaciones procedentes dentro del término legal y evaluar el mérito de la investigación según el CGD, sin sustituir el juzgamiento por una sanción anticipada.",
        "reason": "CGD, arts. 12, 160 y 222: etapa, competencia y estándares probatorios cumplen funciones diferentes; el vencimiento próximo no autoriza saltar garantías."
      },
      "other": [
        {
          "text": "Proyectar el fallo sancionatorio para que el investigado pueda controvertirlo después mediante recursos.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Enviar el expediente al juzgador sin la decisión de evaluación exigible, dejando que este reconstruya la investigación.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "CGD, arts. 12, 160 y 222: etapa, competencia y estándares probatorios cumplen funciones diferentes; el vencimiento próximo no autoriza saltar garantías.",
      "difficulty": 4
    },
    {
      "caseText": "La revisión de un expediente detecta un error de digitación en el índice, pero el acto original y su notificación son correctos. En cambio, otra diligencia no fue puesta en conocimiento del sujeto procesal en la oportunidad exigible. La oficina propone invalidar todo por igual, sin comprobar los efectos de cada defecto.",
      "stem": "¿Cómo debe diferenciarse la incidencia procesal de los dos hallazgos antes de proponer una medida?",
      "correct": {
        "text": "Corregir trazablemente el índice y analizar por separado la afectación de contradicción, causal de nulidad y remedio legal que corresponda ante la autoridad competente.",
        "reason": "CGD: el análisis de nulidad requiere verificar causal y afectación de garantías, no equiparar un error de registro con un defecto sustancial del procedimiento."
      },
      "other": [
        {
          "text": "Anular ambas actuaciones automáticamente porque cualquier discordancia documental afecta la totalidad del procedimiento.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Corregir el índice y mantener la segunda diligencia sin revisión, porque el documento existe y la verdad material elimina la contradicción.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "CGD: el análisis de nulidad requiere verificar causal y afectación de garantías, no equiparar un error de registro con un defecto sustancial del procedimiento.",
      "difficulty": 5
    }
  ],
  "pgn-m20": [
    {
      "caseText": "Una investigación encuentra una eliminación de registros de un aplicativo institucional durante una contingencia. El log muestra una cuenta compartida y el informe de soporte registra una falla de almacenamiento. El coordinador pide imputar la conducta al administrador por su cargo, aunque no se ha individualizado al operador ni verificado la justificación.",
      "stem": "¿Cuál actuación respeta la investigación integral y evita atribuir responsabilidad objetiva al servidor?",
      "correct": {
        "text": "Contrastar registros, usuarios, instrucciones y elementos de descargo; precisar conducta, deber funcional y eventual culpabilidad antes de proponer la decisión propia de la fase.",
        "reason": "CGD, arts. 9, 10, 13 y 14: afectación injustificada del deber y culpabilidad no se deducen automáticamente del resultado; investigar también las hipótesis exculpatorias."
      },
      "other": [
        {
          "text": "Atribuir el hecho al administrador por su rol y dejar para el juzgamiento la comprobación de quién operó.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Archivar exclusivamente por la existencia de una falla técnica, sin comprobar su relación con la conducta investigada.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "CGD, arts. 9, 10, 13 y 14: afectación injustificada del deber y culpabilidad no se deducen automáticamente del resultado; investigar también las hipótesis exculpatorias.",
      "difficulty": 4
    },
    {
      "caseText": "En una investigación sobre un registro alterado se individualiza posteriormente al usuario que ejecutó la operación. Aparece además una orden de contingencia cuya autenticidad y alcance deben contrastarse. Un funcionario interpreta que la identificación técnica basta para demostrar dolo; otro considera que toda orden de un superior excluye responsabilidad.",
      "stem": "¿Qué cambia con la nueva evidencia y qué elementos aún deben probarse antes de concluir responsabilidad?",
      "correct": {
        "text": "Revisar la atribución del acto, contrastar la orden y su alcance legal, verificar deber funcional, ilicitud sustancial y culpabilidad; mantener la valoración de cargo y descargo.",
        "reason": "CGD, arts. 9, 10, 13 y 160: individualización, justificación y culpabilidad se analizan separadamente; la sanción exige certeza."
      },
      "other": [
        {
          "text": "Tomar la identificación del usuario como prueba suficiente de dolo y descartar la orden por ser posterior al informe inicial.",
          "reason": "La alternativa adelanta una conclusión o desconoce un requisito específico del supuesto descrito."
        },
        {
          "text": "Considerar la orden una exoneración automática sin verificar su legalidad, contenido ni relación con la operación.",
          "reason": "La alternativa omite la valoración de los elementos relevantes o restringe garantías sin fundamento suficiente."
        }
      ],
      "explanation": "CGD, arts. 9, 10, 13 y 160: individualización, justificación y culpabilidad se analizan separadamente; la sanción exige certeza.",
      "difficulty": 5
    }
  ]
}
