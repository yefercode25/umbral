import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM21M23: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m21": [
    {
      "caseText": "Una procuraduría territorial recibe un informe sobre modificaciones de registros de un contrato. El posible autor era servidor público cuando sucedieron los hechos, pero renunció meses después. También aparece un contratista de soporte que tenía acceso al aplicativo, sin documento que acredite ejercicio de función pública, administración de recursos o supervisión. El reparto requiere precisar la calidad de cada persona antes de decidir.",
      "stem": "¿Cuál análisis permite establecer quién puede quedar sometido al régimen disciplinario?",
      "correct": {
        "text": "Verificar calidad al momento del hecho, supuestos legales del particular, competencia y relevancia disciplinaria de cada conducta.",
        "reason": "Arts. 25, 70 y 89: el retiro no extingue la acción y la condición del particular exige presupuesto legal concreto."
      },
      "other": [
        {
          "text": "Excluir al servidor retirado por terminación del vínculo y examinar al contratista como disciplinable cuando sus credenciales permiten modificar los registros públicos.",
          "reason": "La desvinculación no extingue por sí sola la acción; el acceso al sistema no acredita función pública, gestión de recursos o supervisión."
        },
        {
          "text": "Mantener ambos como disciplinables porque la relación contractual y el acceso a información institucional acreditan por sí solos el ejercicio de funciones públicas.",
          "reason": "El vínculo contractual y acceso técnico no bastan para acreditar la calidad de particular disciplinable."
        }
      ],
      "explanation": "Arts. 25, 70 y 89: el retiro no extingue la acción y la condición del particular exige presupuesto legal concreto. La desvinculación no extingue por sí sola la acción; el acceso al sistema no acredita función pública, gestión de recursos o supervisión. El vínculo contractual y acceso técnico no bastan para acreditar la calidad de particular disciplinable.",
      "difficulty": 4
    },
    {
      "caseText": "Una comunicación anónima atribuye alteraciones de actas a una oficina sin identificar inicialmente al operador. A diferencia de una denuncia genérica, adjunta números de radicado, fechas, copias de actas y un reporte de diferencias verificable. La autoridad todavía desconoce si los documentos son auténticos y quién realizó las modificaciones. El profesional debe orientar el trámite sin presumir culpabilidad.",
      "stem": "¿Qué ruta corresponde valorar ante los nuevos soportes y la falta de identificación del posible autor?",
      "correct": {
        "text": "Evaluar requisitos mínimos y credibilidad de la información, verificar relevancia y competencia y, si procede y persiste duda sobre identificación, adelantar indagación previa.",
        "reason": "La noticia con soporte merece evaluación; la incertidumbre de identificación puede justificar indagación previa según la ley."
      },
      "other": [
        {
          "text": "Inhibirse exclusivamente por el anonimato, sin evaluar los soportes y sus requisitos legales.",
          "reason": "El anonimato no autoriza omitir el examen de las excepciones legales."
        },
        {
          "text": "Iniciar investigación contra todos los usuarios del sistema porque las fechas y radicados acreditan responsabilidad conjunta.",
          "reason": "Los documentos no individualizan al autor ni acreditan responsabilidad colectiva."
        }
      ],
      "explanation": "CGD, arts. 86, 208, 209 y 211: distinguir admisibilidad de la noticia, individualización y apertura de investigación.",
      "difficulty": 5
    }
  ],
  "pgn-m22": [
    {
      "caseText": "Un servidor debía registrar una actuación dentro del plazo institucional. El aplicativo presentó una indisponibilidad acreditada y el registro quedó pendiente. La oficina considera suficiente el incumplimiento formal para recomendar sanción, aunque no ha revisado el protocolo alterno ni el efecto sobre el deber funcional. El informe de soporte indica que la caída afectó varios equipos y que el servicio fue restablecido al día siguiente.",
      "stem": "¿Qué análisis distingue incumplimiento formal, ilicitud sustancial y culpabilidad?",
      "correct": {
        "text": "Precisar el deber y la conducta, comprobar afectación sustancial y justificación, y examinar previsibilidad, alternativas disponibles y modalidad de culpabilidad antes de proponer la decisión de la etapa.",
        "reason": "La irregularidad formal requiere análisis del deber, afectación, justificación y culpabilidad."
      },
      "other": [
        {
          "text": "Considerar acreditada la falta culpable por el solo vencimiento del plazo, aunque no se analice la falla institucional.",
          "reason": "El resultado no acredita por sí solo ilicitud ni culpa."
        },
        {
          "text": "Excluir responsabilidad por la mera existencia de una falla, sin estudiar la relación con el hecho y las opciones de contingencia.",
          "reason": "La contingencia debe verificarse en concreto; no opera como exoneración automática."
        }
      ],
      "explanation": "CGD, arts. 9, 10, 26–31: el examen sustancial y subjetivo es independiente del simple resultado irregular.",
      "difficulty": 4
    },
    {
      "caseText": "En la revisión de una omisión se descubre que existía un protocolo alternativo, comunicado al servidor antes de la falla. Los registros prueban que otras personas lo utilizaron, pero aún no se sabe si el investigado disponía de los permisos necesarios ni si pudo prever el resultado. Un informe técnico afirma que la existencia del protocolo demuestra dolo y propone omitir pruebas sobre sus accesos.",
      "stem": "¿Qué cambia con la aparición del protocolo y qué permanece por demostrar?",
      "correct": {
        "text": "Examinar exigibilidad real del protocolo, acceso, conocimiento, cuidado y previsibilidad; diferenciar dolo y culpa y valorar los elementos de justificación o exclusión.",
        "reason": "El protocolo puede modificar el análisis del deber y cuidado, pero no demuestra por sí mismo voluntad o grado de culpa."
      },
      "other": [
        {
          "text": "Calificar dolo por existir el protocolo, porque su comunicación demuestra voluntad de incumplir.",
          "reason": "Conocer un protocolo no equivale a querer la realización de una falta."
        },
        {
          "text": "Considerar toda negligencia igual a culpa leve y archivar sin analizar el estándar de cuidado exigible.",
          "reason": "La culpa debe clasificarse bajo los criterios legales, no mediante una presunción general."
        }
      ],
      "explanation": "CGD, arts. 28, 29 y 31, con Ley 2094: contrastar modalidad subjetiva y posibles exclusiones mediante hechos verificables.",
      "difficulty": 5
    }
  ],
  "pgn-m23": [
    {
      "caseText": "Un profesional encargado de apoyar el seguimiento preventivo de una contratación descubre que su cónyuge tiene participación económica directa en una empresa interesada en el resultado del asunto. Ya existe un registro anual de intereses, pero no se ha informado esta situación concreta. El superior solicita que termine el concepto técnico antes de apartarse, argumentando que no firmará la decisión final.",
      "stem": "¿Qué actuación distingue el conflicto de interés del simple registro general de información?",
      "correct": {
        "text": "Manifestar el impedimento concreto, exponer la causal y seguir el trámite aplicable sin intervenir indebidamente en el asunto.",
        "reason": "El interés directo obliga a declarar y tramitar el impedimento por la vía aplicable, incluso en funciones de apoyo."
      },
      "other": [
        {
          "text": "Concluir el concepto técnico por no suscribir la decisión definitiva y actualizar luego la declaración de intereses para dejar constancia del vínculo económico.",
          "reason": "No firmar el acto final no excluye participación en gestión o control; el registro anual no sustituye el impedimento concreto."
        },
        {
          "text": "Solicitar a la coordinación una segunda revisión del concepto y mantener la intervención, considerando que el superior puede neutralizar el interés particular mediante aprobación.",
          "reason": "Un control adicional no reemplaza el trámite legal del conflicto ni autoriza continuar cuando corresponde apartarse."
        }
      ],
      "explanation": "El interés directo obliga a declarar y tramitar el impedimento por la vía aplicable, incluso en funciones de apoyo. No firmar el acto final no excluye participación en gestión o control; el registro anual no sustituye el impedimento concreto. Un control adicional no reemplaza el trámite legal del conflicto ni autoriza continuar cuando corresponde apartarse.",
      "difficulty": 4
    },
    {
      "caseText": "Durante la instrucción disciplinaria se presenta una recusación contra el funcionario competente basada en un vínculo que podría configurar una causal legal. La oficina prepara el trámite con una plantilla de impedimentos administrativos del CPACA y propone que el funcionario recusado resuelva el fondo mientras se estudia la solicitud. El expediente contiene el escrito de recusación y los documentos que sustentan el vínculo alegado.",
      "stem": "¿Cómo se debe proceder antes de continuar con una actuación de fondo en el expediente disciplinario?",
      "correct": {
        "text": "Identificar la causal, verificar el trámite especial del CGD y sus efectos, remitir o decidir según competencia y conservar las constancias sin aplicar mecánicamente la plantilla administrativa.",
        "reason": "La recusación en disciplina exige seguir su régimen propio y preservar trazabilidad."
      },
      "other": [
        {
          "text": "Aplicar siempre los plazos del CPACA y permitir que el recusado resuelva el fondo hasta que se confirme su reemplazo.",
          "reason": "El régimen general no sustituye automáticamente el especial ni sus efectos."
        },
        {
          "text": "Trasladar informalmente el expediente a otro profesional y borrar la actuación inicial para evitar dejar registro del conflicto.",
          "reason": "El traslado informal y borrado impiden controlar la competencia y la decisión."
        }
      ],
      "explanation": "CGD, régimen de impedimentos y recusaciones; CPACA arts. 11–12 solo en su ámbito aplicable: la competencia y los efectos del trámite no son discrecionales.",
      "difficulty": 5
    }
  ]
}
