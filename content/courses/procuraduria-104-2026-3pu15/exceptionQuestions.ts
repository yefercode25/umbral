import type { LessonBlock, Question } from '../../../src/types/course'
import { procuraduriaModuleBlueprints } from './blueprints'

/** Casos límite independientes: no reutilizan claves de ejercicios históricos.
 * Fuente de contraste: CGD consolidado en el Normograma PGN, revisión 23/11/2026.
 * Son supuestos didácticos, no reactivos oficiales. Cada pareja cambia el presupuesto.
 */
const scenarios: Omit<Question, 'skillIds'>[] = [
  {
    "id": "pgn-exception-reconstruccion-1",
    "moduleId": "pgn-m58",
    "relatedModuleIds": [
      "pgn-m19",
      "pgn-m40",
      "pgn-m44",
      "pgn-m58",
      "pgn-m63"
    ],
    "scenarioId": "pgn-exception-reconstruccion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un incendio destruye el archivo físico de una investigación disciplinaria en curso. El defensor conserva el auto de apertura y constancias de notificación; una entidad requerida tiene copias autorizadas de sus respuestas, y el respaldo institucional conserva parte de las diligencias. El equipo dispone de inventario previo y puede identificar documentos faltantes. Se discute si debe iniciar otro proceso.",
    "stem": "¿Qué actuación corresponde antes de decidir que la actuación debe reiniciarse?",
    "options": [
      {
        "id": "a",
        "text": "Abrir una investigación nueva, incorporar las copias como antecedentes y contar el término desde la nueva apertura.",
        "rationale": "El art. 119 da prioridad a reconstruir; un nuevo auto no reinicia automáticamente los límites temporales."
      },
      {
        "id": "b",
        "text": "Reconstruir el expediente con copias recuperadas y colaboración de sujetos y entidades; verificar integridad y faltantes.",
        "rationale": "La recuperación de piezas y su cotejo permiten reconstrucción y control de garantías."
      },
      {
        "id": "c",
        "text": "Restaurar el respaldo informático y tomar su inventario como expediente completo, dejando los documentos externos para el juzgamiento.",
        "rationale": "El respaldo es parcial; restaurarlo no acredita la reconstrucción íntegra."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Art. 119. La recuperación de piezas y su cotejo permiten reconstrucción y control de garantías. El art. 119 da prioridad a reconstruir; un nuevo auto no reinicia automáticamente los límites temporales. El respaldo es parcial; restaurarlo no acredita la reconstrucción íntegra.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-reconstruccion-2",
    "moduleId": "pgn-m58",
    "relatedModuleIds": [
      "pgn-m19",
      "pgn-m40",
      "pgn-m44",
      "pgn-m58",
      "pgn-m63"
    ],
    "scenarioId": "pgn-exception-reconstruccion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una inundación y un fallo de almacenamiento destruyen todas las copias de una investigación aún abierta. El despacho documentó las consultas a sujetos procesales, custodios y entidades oficiales, pero no pudo recuperar las decisiones ni las diligencias esenciales. No existe declaración de prescripción ni otra causal de extinción acreditada. La autoridad debe definir el paso procesal.",
    "stem": "Si la reconstrucción resultó materialmente imposible, ¿qué regla especial procede?",
    "options": [
      {
        "id": "a",
        "text": "Archivar por insuficiencia de prueba, sin examinar nuevamente la procedencia de la actuación disciplinaria original.",
        "rationale": "La destrucción del expediente no es por sí misma causal de archivo definitivo."
      },
      {
        "id": "b",
        "text": "Continuar en la etapa anotada en el registro de gestión y sustituir las decisiones perdidas por certificaciones administrativas.",
        "rationale": "Una anotación de gestión no reemplaza decisiones procesales ni sus garantías."
      },
      {
        "id": "c",
        "text": "Reiniciar de oficio la actuación y comprobar sus presupuestos, los límites temporales aplicables y el ejercicio de defensa.",
        "rationale": "El art. 119 ordena reiniciar de oficio cuando no sea posible reconstruir; el reinicio no elimina las demás condiciones legales."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Art. 119. El art. 119 ordena reiniciar de oficio cuando no sea posible reconstruir; el reinicio no elimina las demás condiciones legales. La destrucción del expediente no es por sí misma causal de archivo definitivo. Una anotación de gestión no reemplaza decisiones procesales ni sus garantías.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-extincion-1",
    "moduleId": "pgn-m24",
    "relatedModuleIds": [
      "pgn-m21",
      "pgn-m24",
      "pgn-m25",
      "pgn-m30"
    ],
    "scenarioId": "pgn-exception-extincion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Se investiga a dos servidores por un mismo trámite. Uno presenta renuncia aceptada y deja la entidad; respecto del otro se recibe registro civil auténtico de defunción. El quejoso desiste porque la administración corrigió el problema. El despacho aún no ha evaluado el mérito de la actuación contra el servidor retirado.",
    "stem": "¿Qué tratamiento diferencia correctamente los hechos ocurridos?",
    "options": [
      {
        "id": "a",
        "text": "Extinguir la acción respecto del fallecido y evaluar la continuidad contra el retirado, pese al desistimiento del quejoso.",
        "rationale": "Arts. 32 y 89: la muerte extingue la acción; retiro y desistimiento no lo hacen."
      },
      {
        "id": "b",
        "text": "Archivar la actuación contra ambos porque ya no ejercen el cargo y la corrección administrativa satisfizo la queja.",
        "rationale": "La corrección o falta de vínculo laboral no configura esas causales de extinción."
      },
      {
        "id": "c",
        "text": "Conservar las dos vinculaciones hasta el fallo, pues solo entonces puede decidirse el efecto del retiro y del fallecimiento.",
        "rationale": "Acreditada la muerte, corresponde aplicar la terminación personal sin esperar el fallo."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 32, 35, 89 y 90. Arts. 32 y 89: la muerte extingue la acción; retiro y desistimiento no lo hacen. La corrección o falta de vínculo laboral no configura esas causales de extinción. Acreditada la muerte, corresponde aplicar la terminación personal sin esperar el fallo.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-extincion-2",
    "moduleId": "pgn-m24",
    "relatedModuleIds": [
      "pgn-m21",
      "pgn-m24",
      "pgn-m25",
      "pgn-m30"
    ],
    "scenarioId": "pgn-exception-extincion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un servidor sancionado fallece cuando aún falta ejecutar parte de la sanción. En otro expediente independiente, un exservidor investigado vive y recibe una oferta de reparación del perjuicio. El área de registro propone cerrar ambos con una misma causal de extinción por haber desaparecido el vínculo laboral.",
    "stem": "¿Qué diferencia debe reflejarse en el proyecto de decisiones?",
    "options": [
      {
        "id": "a",
        "text": "Extinguir la acción en ambos expedientes porque la desvinculación impide el ejercicio de la potestad disciplinaria.",
        "rationale": "La desvinculación no impide ejercer la acción por conductas del servidor."
      },
      {
        "id": "b",
        "text": "Aplicar la extinción de la sanción por muerte del sancionado; el retiro del segundo no extingue su acción.",
        "rationale": "Los arts. 35 y 89 diferencian muerte del sancionado y retiro del investigado."
      },
      {
        "id": "c",
        "text": "Mantener ambas actuaciones hasta cumplir los términos de prescripción, dado que la muerte solo afecta la ejecución material.",
        "rationale": "La muerte es causal expresa de extinción de la sanción y no exige esperar prescripción."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Arts. 32, 35, 89 y 90. Los arts. 35 y 89 diferencian muerte del sancionado y retiro del investigado. La desvinculación no impide ejercer la acción por conductas del servidor. La muerte es causal expresa de extinción de la sanción y no exige esperar prescripción.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-renuncia-prescripcion-1",
    "moduleId": "pgn-m24",
    "relatedModuleIds": [
      "pgn-m20",
      "pgn-m24",
      "pgn-m30",
      "pgn-m31"
    ],
    "scenarioId": "pgn-exception-renuncia-prescripcion",
    "type": "pjs",
    "difficulty": 5,
    "case": "En una actuación ordinaria la prescripción de la acción se configura y el disciplinable presenta personalmente una solicitud válida de renuncia para obtener una decisión de fondo. Transcurren más de dos años desde esa solicitud. El fallo de primera instancia fue expedido antes del vencimiento, pero no está ejecutoriado y el proceso sigue pendiente.",
    "stem": "¿Cuál es el efecto del vencimiento de la ventana especial de renuncia?",
    "options": [
      {
        "id": "a",
        "text": "Continuar hasta ejecutar el fallo porque la expedición de primera instancia basta para agotar la condición temporal de la renuncia.",
        "rationale": "El art. 34 requiere conjuntamente fallo proferido y ejecutoriado dentro del límite."
      },
      {
        "id": "b",
        "text": "Aplicar un nuevo término general de cinco años desde la solicitud, al entender que la renuncia interrumpe la prescripción ordinaria.",
        "rationale": "No se reinicia el plazo ordinario del art. 33 mediante esta renuncia."
      },
      {
        "id": "c",
        "text": "Declarar la prescripción: transcurrieron dos años desde la solicitud personal sin que el fallo estuviera proferido y ejecutoriado.",
        "rationale": "El límite especial de dos años obliga a declarar la prescripción en el supuesto descrito."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Arts. 33, 34 y 36. El límite especial de dos años obliga a declarar la prescripción en el supuesto descrito. El art. 34 requiere conjuntamente fallo proferido y ejecutoriado dentro del límite. No se reinicia el plazo ordinario del art. 33 mediante esta renuncia.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-renuncia-prescripcion-2",
    "moduleId": "pgn-m24",
    "relatedModuleIds": [
      "pgn-m20",
      "pgn-m24",
      "pgn-m30",
      "pgn-m31"
    ],
    "scenarioId": "pgn-exception-renuncia-prescripcion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un expediente contiene decisión sancionatoria ejecutoriada el 15 de abril de 2021. El registro demuestra que la sanción aún no fue ejecutada y que no existe regla especial que altere el término. Al revisar el asunto el 20 de abril de 2026, el funcionario utiliza como fecha inicial la notificación del fallo de primera instancia, que ocurrió meses antes de la ejecutoria.",
    "stem": "¿Qué referencia temporal corresponde para examinar la prescripción de la sanción?",
    "options": [
      {
        "id": "a",
        "text": "Contar cinco años desde la ejecutoria del fallo y verificar el vencimiento ocurrido en abril de 2026.",
        "rationale": "El art. 36 usa la ejecutoria como punto de partida de cinco años."
      },
      {
        "id": "b",
        "text": "Contar cinco años desde el hecho investigado porque allí comenzó el ejercicio de la potestad sancionadora.",
        "rationale": "La fecha de la conducta es relevante para la acción, no para el término de ejecución de la sanción."
      },
      {
        "id": "c",
        "text": "Contar dos años desde la notificación del fallo inicial, aplicando la regla de interrupción de la acción disciplinaria.",
        "rationale": "El término posterior a la interrupción del art. 33 se refiere a la acción, no al art. 36."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 33, 34 y 36. El art. 36 usa la ejecutoria como punto de partida de cinco años. La fecha de la conducta es relevante para la acción, no para el término de ejecución de la sanción. El término posterior a la interrupción del art. 33 se refiere a la acción, no al art. 36.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-recusacion-1",
    "moduleId": "pgn-m23",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m23",
      "pgn-m27",
      "pgn-m32"
    ],
    "scenarioId": "pgn-exception-recusacion",
    "type": "pjs",
    "difficulty": 5,
    "case": "Después de ordenar una investigación, la funcionaria instructora advierte que asesoró a un sujeto procesal específicamente sobre los mismos hechos. Tiene programada una decisión de mérito para el día siguiente y reconoce que concurre una causal del artículo 104. La oficina plantea emitirla primero para evitar retrasos y luego comunicar su impedimento.",
    "stem": "¿Cómo procede la autoridad una vez reconocida la causal?",
    "options": [
      {
        "id": "a",
        "text": "Emitir la decisión pendiente y presentar el impedimento después, porque la asignación original conserva plena eficacia hasta el pronunciamiento superior.",
        "rationale": "El art. 107 ordena suspender desde la manifestación; no procede diferir una causal advertida."
      },
      {
        "id": "b",
        "text": "Manifestar el impedimento de inmediato, remitir al superior y suspender la actuación hasta que se decida.",
        "rationale": "Arts. 105 y 107: escrito con fundamento y remisión al superior, suspensión durante el trámite."
      },
      {
        "id": "c",
        "text": "Comunicar la circunstancia a los sujetos procesales y continuar si ninguno presenta recusación en el plazo que fije la oficina.",
        "rationale": "El impedimento es deber propio de la autoridad y no depende de que los sujetos lo soliciten."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Arts. 104–107. Arts. 105 y 107: escrito con fundamento y remisión al superior, suspensión durante el trámite. El art. 107 ordena suspender desde la manifestación; no procede diferir una causal advertida. El impedimento es deber propio de la autoridad y no depende de que los sujetos lo soliciten.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-recusacion-2",
    "moduleId": "pgn-m23",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m23",
      "pgn-m27",
      "pgn-m32"
    ],
    "scenarioId": "pgn-exception-recusacion",
    "type": "pjs",
    "difficulty": 5,
    "case": "El defensor presenta recusación motivada y aporta documentos sobre un interés directo del instructor. El instructor considera que el interés no se configura y prepara un rechazo definitivo firmado por él mismo. Un profesional de apoyo debe verificar el trámite y el efecto de la presentación sobre la actuación.",
    "stem": "¿Cuál es la ruta especial del CGD ante una recusación no aceptada?",
    "options": [
      {
        "id": "a",
        "text": "Resolver definitivamente la recusación por el propio instructor y reanudar las diligencias desde la comunicación del rechazo al defensor.",
        "rationale": "El recusado se pronuncia sobre aceptación, pero no sustituye el trámite superior del art. 107."
      },
      {
        "id": "b",
        "text": "Remitir al superior solo si se acepta la causal y conservar el término ordinario de la investigación durante la revisión.",
        "rationale": "El trámite no queda condicionado a aceptar la causal; la suspensión nace con la recusación."
      },
      {
        "id": "c",
        "text": "Manifestar aceptación o rechazo dentro de dos días, seguir el trámite ante el superior y mantener la actuación suspendida hasta decisión.",
        "rationale": "El art. 107 fija la manifestación en dos días, remisión y suspensión hasta decisión."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Arts. 104–107. El art. 107 fija la manifestación en dos días, remisión y suspensión hasta decisión. El recusado se pronuncia sobre aceptación, pero no sustituye el trámite superior del art. 107. El trámite no queda condicionado a aceptar la causal; la suspensión nace con la recusación.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-ruptura-1",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m25",
      "pgn-m26",
      "pgn-m27",
      "pgn-m28",
      "pgn-m34"
    ],
    "scenarioId": "pgn-exception-ruptura",
    "type": "pjs",
    "difficulty": 5,
    "case": "En una investigación se acredita que participaron varias personas en un procedimiento, pero solo se identifica a dos servidores. La evidencia permite avanzar respecto de los identificados y exige diligencias adicionales para individualizar a los otros intervinientes. El despacho analiza si debe detener toda decisión hasta descubrir los nombres restantes.",
    "stem": "¿Qué alternativa contempla el CGD para evitar que la identificación parcial paralice la actuación?",
    "options": [
      {
        "id": "a",
        "text": "Separar la actuación respecto de los identificados cuando proceda, sin perjuicio de una eventual unificación posterior y preservando garantías.",
        "rationale": "Art. 214 literal a: permite ruptura y eventual reunificación."
      },
      {
        "id": "b",
        "text": "Mantener necesariamente un único expediente hasta individualizar a todos, porque la conexidad excluye la separación de actuaciones.",
        "rationale": "La conexidad no impide ruptura en el supuesto legal."
      },
      {
        "id": "c",
        "text": "Archivar la investigación respecto de quienes no se identificaron y considerar cerrada definitivamente cualquier averiguación sobre su posible participación.",
        "rationale": "La identificación incompleta no autoriza dar por extinguida toda actuación futura respecto de esas personas."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 162 y 214. Art. 214 literal a: permite ruptura y eventual reunificación. La conexidad no impide ruptura en el supuesto legal. La identificación incompleta no autoriza dar por extinguida toda actuación futura respecto de esas personas.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-ruptura-2",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m25",
      "pgn-m26",
      "pgn-m27",
      "pgn-m28",
      "pgn-m34"
    ],
    "scenarioId": "pgn-exception-ruptura",
    "type": "pjs",
    "difficulty": 5,
    "case": "En la etapa de juzgamiento de una falta contractual aparece un registro nuevo que revela otra conducta presuntamente disciplinaria de un tercero que no fue vinculado. El documento no cambia la calificación de los cargos originales, sino que aporta hechos distintos. El juzgador considera incluir al tercero en la sentencia para ahorrar trámites.",
    "stem": "¿Cómo se tramita el hallazgo sin ampliar de hecho el objeto del juicio?",
    "options": [
      {
        "id": "a",
        "text": "Variar el pliego de cargos del proceso actual para incluir directamente a la persona nueva y decidir su responsabilidad en el mismo fallo.",
        "rationale": "La variación de cargos no sustituye la vinculación e instrucción de una persona nueva por hechos distintos."
      },
      {
        "id": "b",
        "text": "Expedir copias de las pruebas pertinentes para iniciar la nueva acción en expediente separado, manteniendo las garantías del juicio original.",
        "rationale": "Art. 214 literal d: el hallazgo en juzgamiento activa separación de la nueva acción."
      },
      {
        "id": "c",
        "text": "Devolver el expediente original íntegro al instructor y suspender el juzgamiento hasta que la nueva persona reciba un pliego conjunto.",
        "rationale": "La norma no exige devolver y detener íntegramente el proceso original por ese hecho."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Arts. 162 y 214. Art. 214 literal d: el hallazgo en juzgamiento activa separación de la nueva acción. La variación de cargos no sustituye la vinculación e instrucción de una persona nueva por hechos distintos. La norma no exige devolver y detener íntegramente el proceso original por ese hecho.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-fuerza-mayor-1",
    "moduleId": "pgn-m22",
    "relatedModuleIds": [
      "pgn-m8",
      "pgn-m20",
      "pgn-m22",
      "pgn-m25",
      "pgn-m35"
    ],
    "scenarioId": "pgn-exception-fuerza-mayor",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un servidor debe custodiar un expediente y ejecutar un traslado urgente. Una emergencia natural imprevisible destruye el único acceso físico a la sede, las comunicaciones quedan indisponibles y el plan de contingencia no ofrece medios alternativos utilizables. La evidencia acredita que adoptó los controles exigibles antes del evento y que el incumplimiento investigado obedeció exclusivamente a esa imposibilidad.",
    "stem": "Si se acredita plenamente la causal de exclusión, ¿qué decisión permite adoptar el CGD?",
    "options": [
      {
        "id": "a",
        "text": "Formular cargos por el resultado objetivo y reservar toda valoración de fuerza mayor para la graduación de la eventual sanción.",
        "rationale": "Una causal plenamente acreditada excluye responsabilidad; no es solo un criterio de graduación."
      },
      {
        "id": "b",
        "text": "Mantener la investigación hasta su término máximo, porque una emergencia solo puede valorarse después del cierre de la instrucción.",
        "rationale": "El art. 90 permite terminar en cualquier etapa si se acredita el supuesto."
      },
      {
        "id": "c",
        "text": "Declarar motivadamente la terminación y archivar, al estar plenamente demostrada la causal de exclusión de responsabilidad.",
        "rationale": "Arts. 31 y 90: la causal acreditada permite archivo definitivo motivado."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Arts. 9, 10, 31 y 90. Arts. 31 y 90: la causal acreditada permite archivo definitivo motivado. Una causal plenamente acreditada excluye responsabilidad; no es solo un criterio de graduación. El art. 90 permite terminar en cualquier etapa si se acredita el supuesto.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-fuerza-mayor-2",
    "moduleId": "pgn-m22",
    "relatedModuleIds": [
      "pgn-m8",
      "pgn-m20",
      "pgn-m22",
      "pgn-m25",
      "pgn-m35"
    ],
    "scenarioId": "pgn-exception-fuerza-mayor",
    "type": "pjs",
    "difficulty": 5,
    "case": "Tras una interrupción del sistema principal, un servidor omite reportar un incidente. El protocolo alterno por teléfono estaba vigente, el equipo tenía acceso operativo y otros funcionarios lo usaron. El servidor invoca caso fortuito por la caída de la plataforma; aún se debe determinar si su deber concreto exigía ese canal y qué circunstancias afectaron su actuación.",
    "stem": "¿Qué debe comprobarse antes de decidir sobre la exclusión de responsabilidad?",
    "options": [
      {
        "id": "a",
        "text": "Determinar el deber concreto, la disponibilidad real del canal alterno y la incidencia del evento en la posibilidad de actuar.",
        "rationale": "La exclusión depende del evento y su efecto real sobre el cumplimiento; también se examina culpabilidad."
      },
      {
        "id": "b",
        "text": "Aceptar la caída del sistema como causal suficiente, dado que el canal principal estaba definido en el procedimiento institucional.",
        "rationale": "La indisponibilidad del canal principal no acredita por sí sola imposibilidad de cumplir."
      },
      {
        "id": "c",
        "text": "Calificar culpa gravísima por la existencia del protocolo alterno, dejando para después la comprobación de su exigibilidad individual.",
        "rationale": "La disponibilidad general no demuestra automáticamente culpabilidad ni su grado."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 9, 10, 31 y 90. La exclusión depende del evento y su efecto real sobre el cumplimiento; también se examina culpabilidad. La indisponibilidad del canal principal no acredita por sí sola imposibilidad de cumplir. La disponibilidad general no demuestra automáticamente culpabilidad ni su grado.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-exterior-1",
    "moduleId": "pgn-m33",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m33",
      "pgn-m36",
      "pgn-m43",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-exterior",
    "type": "pjs",
    "difficulty": 5,
    "case": "La autoridad de instrucción necesita practicar una diligencia presencial urgente en otro país para verificar un soporte que no puede obtenerse por copia. El profesional prepara el traslado y conoce la sede diplomática. La diligencia no se ha autorizado y no se ha efectuado ningún aviso al Ministerio de Relaciones Exteriores ni a la representación diplomática.",
    "stem": "¿Qué procedimiento específico debe examinar antes del desplazamiento?",
    "options": [
      {
        "id": "a",
        "text": "Usar una comisión ordinaria interna y comunicar el resultado a la representación diplomática después de practicar la diligencia.",
        "rationale": "El procedimiento interno no reemplaza las condiciones del art. 153."
      },
      {
        "id": "b",
        "text": "Aplicar las normas de práctica en el extranjero y tramitar autorización del Procurador General con los avisos previos del art. 153.",
        "rationale": "La autorización de traslado y avisos previos responden a la naturaleza y urgencia de la actuación."
      },
      {
        "id": "c",
        "text": "Solicitar autorización al custodio del soporte y asumir que ese permiso basta para practicar prueba disciplinaria en territorio extranjero.",
        "rationale": "El permiso del custodio no sustituye las normas y autorizaciones institucionales."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Arts. 118, 152–154. La autorización de traslado y avisos previos responden a la naturaleza y urgencia de la actuación. El procedimiento interno no reemplaza las condiciones del art. 153. El permiso del custodio no sustituye las normas y autorizaciones institucionales.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-exterior-2",
    "moduleId": "pgn-m33",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m33",
      "pgn-m36",
      "pgn-m43",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-exterior",
    "type": "pjs",
    "difficulty": 5,
    "case": "Se decreta una diligencia virtual en una sede regional diferente de aquella desde la cual dirige el instructor. Un funcionario propone que el testigo se conecte solo, sin servidor público que controle materialmente el desarrollo en el lugar de evacuación. El expediente tendría grabación completa, pero el acta no incluiría constancia del control.",
    "stem": "¿Qué requisito especial debe incorporarse para esta forma de evacuación?",
    "options": [
      {
        "id": "a",
        "text": "Conservar la grabación y certificar la identidad desde la sede del instructor, sustituyendo con ello el control material en la otra sede.",
        "rationale": "La grabación no sustituye el requisito específico del art. 118."
      },
      {
        "id": "b",
        "text": "Encargar el control local a cualquier asistente del testigo y agregar al expediente un certificado de funcionamiento de la plataforma.",
        "rationale": "El código exige otro servidor público, no cualquier acompañante."
      },
      {
        "id": "c",
        "text": "Asegurar control material por otro servidor público en el lugar de evacuación y dejar constancia expresa en el acta.",
        "rationale": "El art. 118 autoriza medios virtuales con ese control y constancia."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Arts. 118, 152–154. El art. 118 autoriza medios virtuales con ese control y constancia. La grabación no sustituye el requisito específico del art. 118. El código exige otro servidor público, no cualquier acompañante.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-traslado-penal-1",
    "moduleId": "pgn-m43",
    "relatedModuleIds": [
      "pgn-m35",
      "pgn-m37",
      "pgn-m40",
      "pgn-m43"
    ],
    "scenarioId": "pgn-exception-traslado-penal",
    "type": "pjs",
    "difficulty": 5,
    "case": "En un proceso penal la Fiscalía descubrió registros electrónicos al presentar el escrito de acusación. Los registros todavía no se introdujeron ni controvirtieron en el juicio penal. El instructor disciplinario requiere esos elementos por un hecho relacionado y dispone de un canal autorizado para su traslado. La defensa solicita conocerlos y controvertirlos.",
    "stem": "¿Qué tratamiento prevé la regla especial para esos elementos materiales?",
    "options": [
      {
        "id": "a",
        "text": "Trasladarlos como elementos materiales y garantizar su contradicción disciplinaria, sin atribuirles automáticamente mérito de prueba penal practicada.",
        "rationale": "Art. 154 permite este traslado aunque no hayan adquirido calidad de prueba penal; exige contradicción disciplinaria."
      },
      {
        "id": "b",
        "text": "Esperar la sentencia penal ejecutoriada, pues únicamente las pruebas valoradas en un fallo pueden utilizarse en otro régimen.",
        "rationale": "La ley no exige sentencia penal previa para el supuesto de elementos descubiertos."
      },
      {
        "id": "c",
        "text": "Incorporarlos como prueba judicial plenamente controvertida y limitar la defensa a discutir la interpretación jurídica de su contenido.",
        "rationale": "El descubrimiento no equivale a práctica y contradicción en juicio."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 154 y 157–159. Art. 154 permite este traslado aunque no hayan adquirido calidad de prueba penal; exige contradicción disciplinaria. La ley no exige sentencia penal previa para el supuesto de elementos descubiertos. El descubrimiento no equivale a práctica y contradicción en juicio.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-traslado-penal-2",
    "moduleId": "pgn-m43",
    "relatedModuleIds": [
      "pgn-m35",
      "pgn-m37",
      "pgn-m40",
      "pgn-m43"
    ],
    "scenarioId": "pgn-exception-traslado-penal",
    "type": "pjs",
    "difficulty": 5,
    "case": "La investigación penal sigue reservada y la Fiscalía aún no ha descubierto una copia de un registro de auditoría. La Procuraduría requiere información que puede ser decisiva en una actuación disciplinaria. Un funcionario de apoyo propone pedir directamente al técnico de Fiscalía que envíe todos los archivos, sin informar al fiscal responsable.",
    "stem": "¿Cómo debe tramitarse la obtención del material que aún no fue descubierto?",
    "options": [
      {
        "id": "a",
        "text": "Pedirlo al técnico custodio mediante oficio institucional, porque la existencia de una actuación disciplinaria desplaza la reserva penal.",
        "rationale": "La solicitud especial no se dirige a cualquier custodio ni suprime la evaluación de reserva."
      },
      {
        "id": "b",
        "text": "Solicitar al fiscal del caso, quien determinará qué información puede entregar sin perjudicar la investigación penal.",
        "rationale": "Art. 154 atribuye al fiscal la evaluación de lo que puede suministrar sin afectar el proceso."
      },
      {
        "id": "c",
        "text": "Esperar obligatoriamente el fallo penal, incluso si el fiscal puede autorizar entrega parcial sin comprometer sus diligencias.",
        "rationale": "La ley permite solicitar antes del fallo y evaluar la entrega."
      }
    ],
    "correctOptionId": "b",
    "explanation": "CGD, Arts. 154 y 157–159. Art. 154 atribuye al fiscal la evaluación de lo que puede suministrar sin afectar el proceso. La solicitud especial no se dirige a cualquier custodio ni suprime la evaluación de reserva. La ley permite solicitar antes del fallo y evaluar la entrega.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peritos-1",
    "moduleId": "pgn-m42",
    "relatedModuleIds": [
      "pgn-m36",
      "pgn-m39",
      "pgn-m42",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-peritos",
    "type": "pjs",
    "difficulty": 5,
    "case": "Dos peritos designados practican conjuntamente las diligencias sobre una imagen forense. Ambos acreditan experiencia, pero uno considera confiable el método de interpretación de marcas de tiempo y el otro advierte limitaciones documentadas. Ninguno ha rendido dictamen y el instructor propone obligarlos a firmar un único texto consensuado.",
    "stem": "¿Qué salida respeta las reglas del dictamen ante una discrepancia real?",
    "options": [
      {
        "id": "a",
        "text": "Exigir una conclusión conjunta y designar al perito de mayor antigüedad para dirimir las diferencias metodológicas en el documento final.",
        "rationale": "El art. 179 no obliga al consenso ni atribuye primacía por antigüedad."
      },
      {
        "id": "b",
        "text": "Retirar ambos conceptos y nombrar un tercer perito, dado que una discrepancia vuelve ineficaz cualquier examen practicado conjuntamente.",
        "rationale": "La discrepancia no obliga automáticamente a reemplazar ambos expertos."
      },
      {
        "id": "c",
        "text": "Recibir dictámenes separados, con sus fundamentos y métodos, y tramitar su valoración y contradicción conforme al régimen aplicable.",
        "rationale": "El art. 179 dispone dictámenes separados si discrepan."
      }
    ],
    "correctOptionId": "c",
    "explanation": "CGD, Arts. 178–180. El art. 179 dispone dictámenes separados si discrepan. El art. 179 no obliga al consenso ni atribuye primacía por antigüedad. La discrepancia no obliga automáticamente a reemplazar ambos expertos.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peritos-2",
    "moduleId": "pgn-m42",
    "relatedModuleIds": [
      "pgn-m36",
      "pgn-m39",
      "pgn-m42",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-peritos",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un defensor acredita que el perito designado tiene una causal de recusación. Presenta escrito motivado después de la posesión y antes de vencer el plazo otorgado para rendir el dictamen. El perito no acepta la causal. La secretaría considera tramitarlo como futura objeción por error grave, una vez entregado el dictamen.",
    "stem": "¿Qué trámite corresponde a la circunstancia alegada en este momento?",
    "options": [
      {
        "id": "a",
        "text": "Resolver la recusación conforme al art. 178 y designar nuevo perito si se declara probada; esa decisión no admite recurso.",
        "rationale": "Se cumple la oportunidad del art. 178; el competente resuelve y reemplaza si procede, sin recurso."
      },
      {
        "id": "b",
        "text": "Esperar la entrega y tramitar la objeción por error grave, porque la causal solo puede examinarse junto al contenido técnico.",
        "rationale": "La recusación se refiere a imparcialidad del perito y es distinta de objeción al contenido técnico."
      },
      {
        "id": "c",
        "text": "Aplicar el procedimiento de recusación del instructor, remitiendo el expediente al superior para resolver la imparcialidad del perito.",
        "rationale": "El art. 178 tiene trámite propio para peritos, no el art. 107 del operador."
      }
    ],
    "correctOptionId": "a",
    "explanation": "CGD, Arts. 178–180. Se cumple la oportunidad del art. 178; el competente resuelve y reemplaza si procede, sin recurso. La recusación se refiere a imparcialidad del perito y es distinta de objeción al contenido técnico. El art. 178 tiene trámite propio para peritos, no el art. 107 del operador.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peticion-incompleta-1",
    "moduleId": "pgn-m17",
    "relatedModuleIds": [
      "pgn-m16",
      "pgn-m17",
      "pgn-m59"
    ],
    "scenarioId": "pgn-exception-peticion-incompleta",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una dependencia de la PGN recibe una petición general. Han transcurrido cinco días hábiles del término ordinario cuando requiere oportunamente una gestión indispensable que corresponde al ciudadano. Este completa el requerimiento dentro del mes concedido. El sistema registra diez días hábiles pendientes del plazo original.",
    "stem": "¿Qué debe registrar el sistema al recibir la información faltante?",
    "options": [
      {
        "id": "a",
        "text": "Reactivar los diez días hábiles pendientes desde el día siguiente al aporte, manteniendo la trazabilidad del requerimiento.",
        "rationale": "La ley ordena reactivar el término y conservar el tiempo restante; no crea un nuevo plazo completo."
      },
      {
        "id": "b",
        "text": "Comenzar un nuevo plazo de quince días hábiles desde el día siguiente, porque se completó la solicitud inicialmente presentada.",
        "rationale": "La subsanación no constituye nueva radicación ni reinicia el plazo ordinario íntegro."
      },
      {
        "id": "c",
        "text": "Mantener el término suspendido hasta que el jefe de dependencia expida un acto formal que admita nuevamente la petición.",
        "rationale": "La reactivación se produce por el aporte, no por una providencia posterior."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 1755/2015, art. 17; Resolución PGN 330/2021, art. 19. La ley ordena reactivar el término y conservar el tiempo restante; no crea un nuevo plazo completo. La subsanación no constituye nueva radicación ni reinicia el plazo ordinario íntegro. La reactivación se produce por el aporte, no por una providencia posterior.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peticion-incompleta-2",
    "moduleId": "pgn-m17",
    "relatedModuleIds": [
      "pgn-m16",
      "pgn-m17",
      "pgn-m59"
    ],
    "scenarioId": "pgn-exception-peticion-incompleta",
    "type": "pjs",
    "difficulty": 5,
    "case": "El ciudadano no atiende un requerimiento necesario y oportuno de una dependencia de la PGN. Vence el mes concedido y no solicitó prórroga. No existe otra obligación legal de continuar la actuación de oficio. La plataforma propone marcar la petición automáticamente como negada y comunicar el estado por una alerta general.",
    "stem": "¿Qué decisión corresponde según el reglamento interno de la PGN?",
    "options": [
      {
        "id": "a",
        "text": "Cerrar el registro mediante una respuesta negativa de fondo, comunicada al ciudadano dentro del término ordinario de petición que quedaba pendiente.",
        "rationale": "El archivo por desistimiento es distinto de resolver desfavorablemente el objeto de la petición."
      },
      {
        "id": "b",
        "text": "El jefe competente expide acto motivado de desistimiento y archivo dentro de cinco días hábiles, con notificación personal y reposición.",
        "rationale": "El art. 19 fija autoridad, plazo interno, forma de decisión, notificación y recurso de reposición."
      },
      {
        "id": "c",
        "text": "Archivar automáticamente al vencer el mes y permitir que el ciudadano impugne la alerta mediante el recurso ordinario de apelación.",
        "rationale": "Una alerta informática no sustituye el acto administrativo ni crea un recurso de apelación."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 1755/2015, art. 17; Resolución PGN 330/2021, art. 19. El art. 19 fija autoridad, plazo interno, forma de decisión, notificación y recurso de reposición. El archivo por desistimiento es distinto de resolver desfavorablemente el objeto de la petición. Una alerta informática no sustituye el acto administrativo ni crea un recurso de apelación.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peticion-reiterada-1",
    "moduleId": "pgn-m17",
    "relatedModuleIds": [
      "pgn-m17",
      "pgn-m18",
      "pgn-m49"
    ],
    "scenarioId": "pgn-exception-peticion-reiterada",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un ciudadano presenta nuevamente una solicitud de certificación cuya primera respuesta fue negativa exclusivamente porque no acreditó un requisito legal. Esta vez aporta el documento idóneo que satisface dicho requisito y mantiene el mismo objeto. El sistema identifica similitud textual de 98 % y propone enviar la respuesta anterior.",
    "stem": "¿Cómo debe proceder la dependencia que revisa la nueva solicitud?",
    "options": [
      {
        "id": "a",
        "text": "Remitir al acto previo y exigir que el ciudadano interponga reposición contra esa decisión para examinar los documentos nuevos.",
        "rationale": "La nueva solicitud subsanada tiene trámite propio; no exige recurrir la respuesta anterior."
      },
      {
        "id": "b",
        "text": "Tramitar una petición repetida mediante copia de la respuesta anterior, pues el objeto no cambió aunque se adjuntara otro soporte.",
        "rationale": "La coincidencia del objeto no neutraliza la excepción legal por subsanación."
      },
      {
        "id": "c",
        "text": "Resolver de fondo la nueva petición porque subsanó el requisito que motivó la negativa previa, sin depender de la similitud textual.",
        "rationale": "El art. 19 y el reglamento de la PGN obligan a responder de fondo cuando se subsana."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 1755/2015, art. 19; Resolución PGN 330/2021, art. 17. El art. 19 y el reglamento de la PGN obligan a responder de fondo cuando se subsana. La nueva solicitud subsanada tiene trámite propio; no exige recurrir la respuesta anterior. La coincidencia del objeto no neutraliza la excepción legal por subsanación.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-peticion-reiterada-2",
    "moduleId": "pgn-m17",
    "relatedModuleIds": [
      "pgn-m17",
      "pgn-m18",
      "pgn-m49"
    ],
    "scenarioId": "pgn-exception-peticion-reiterada",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una persona presenta por tercera vez una consulta idéntica que fue contestada de fondo, completa y motivadamente. No aporta hechos distintos ni se trata de derechos imprescriptibles o requisitos subsanados. La oficina conserva constancia de la respuesta anterior y el contenido exacto de las tres solicitudes.",
    "stem": "¿Qué actuación permite atender la reiteración conforme a la norma interna?",
    "options": [
      {
        "id": "a",
        "text": "Remitirse a la respuesta anterior, verificar que cubra el objeto íntegro y ponerla nuevamente en conocimiento de la persona.",
        "rationale": "La remisión está permitida en este supuesto y debe comunicarse efectivamente la respuesta previa."
      },
      {
        "id": "b",
        "text": "Archivar mediante desistimiento tácito, porque la reiteración demuestra que el ciudadano no acepta la contestación anteriormente remitida.",
        "rationale": "La insistencia no es incumplimiento de un requerimiento ni configura desistimiento tácito."
      },
      {
        "id": "c",
        "text": "Rechazar el escrito como irrespetuoso por su repetición, notificando la decisión que niega un nuevo examen del mismo objeto.",
        "rationale": "Repetir una solicitud no la convierte por sí mismo en una petición irrespetuosa."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 1755/2015, art. 19; Resolución PGN 330/2021, art. 17. La remisión está permitida en este supuesto y debe comunicarse efectivamente la respuesta previa. La insistencia no es incumplimiento de un requerimiento ni configura desistimiento tácito. Repetir una solicitud no la convierte por sí mismo en una petición irrespetuosa.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-insistencia-reserva-1",
    "moduleId": "pgn-m18",
    "relatedModuleIds": [
      "pgn-m17",
      "pgn-m18",
      "pgn-m40",
      "pgn-m49"
    ],
    "scenarioId": "pgn-exception-insistencia-reserva",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una dependencia nacional de la PGN rechaza motivadamente entregar determinadas piezas bajo reserva legal y entrega las demás. Cinco días después de notificarse, el ciudadano presenta escrito sustentado de insistencia. El material está custodiado en una sede regional identificada y no existe una regla especial que desplace el artículo 26.",
    "stem": "¿Cuál es el trámite que corresponde a la insistencia presentada?",
    "options": [
      {
        "id": "a",
        "text": "Resolver como reposición por la dependencia que negó el acceso, porque toda decisión administrativa negativa admite revisión por la misma autoridad.",
        "rationale": "La negativa fundada en reserva tiene un mecanismo específico distinto de la reposición ordinaria."
      },
      {
        "id": "b",
        "text": "Remitir al tribunal administrativo con jurisdicción donde están los documentos, para decisión en única instancia sobre la reserva invocada.",
        "rationale": "El art. 26 asigna la decisión al tribunal por tratarse de autoridad nacional y ubicación documental."
      },
      {
        "id": "c",
        "text": "Enviar al juez administrativo del domicilio del solicitante, porque el acceso a información se resuelve según la residencia de quien insiste.",
        "rationale": "El domicilio del peticionario no determina la competencia judicial en este supuesto."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 1755/2015, arts. 25–27; Resolución PGN 330/2021, art. 33. El art. 26 asigna la decisión al tribunal por tratarse de autoridad nacional y ubicación documental. La negativa fundada en reserva tiene un mecanismo específico distinto de la reposición ordinaria. El domicilio del peticionario no determina la competencia judicial en este supuesto.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021",
      "ley-1712-2014"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-insistencia-reserva-2",
    "moduleId": "pgn-m18",
    "relatedModuleIds": [
      "pgn-m17",
      "pgn-m18",
      "pgn-m40",
      "pgn-m49"
    ],
    "scenarioId": "pgn-exception-insistencia-reserva",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una autoridad administrativa con competencia legal para investigar solicita documentos sometidos a reserva, necesarios para una diligencia expresamente identificada. Acredita la actuación y su competencia. No solicita publicar los archivos ni entregarlos a terceros. El custodio considera que la reserva debe impedir cualquier transmisión institucional.",
    "stem": "¿Qué distinción jurídica debe aplicar el custodio?",
    "options": [
      {
        "id": "a",
        "text": "Exigir autorización de cada titular antes de entregar los documentos, aunque exista competencia legal acreditada para la diligencia solicitada.",
        "rationale": "El art. 27 impide oponer la reserva a autoridades competentes en ejercicio de sus funciones."
      },
      {
        "id": "b",
        "text": "Declarar levantada la reserva para todas las personas, porque la petición de una autoridad competente transforma el material en información pública.",
        "rationale": "La excepción de acceso no convierte el documento reservado en información libremente divulgable."
      },
      {
        "id": "c",
        "text": "Suministrar por canal autorizado lo necesario para la función acreditada y preservar la reserva, que también deberá asegurar la autoridad receptora.",
        "rationale": "El acceso funcional es específico y obliga al destinatario a mantener la reserva."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 1755/2015, arts. 25–27; Resolución PGN 330/2021, art. 33. El acceso funcional es específico y obliga al destinatario a mantener la reserva. El art. 27 impide oponer la reserva a autoridades competentes en ejercicio de sus funciones. La excepción de acceso no convierte el documento reservado en información libremente divulgable.",
    "sourceIds": [
      "ley-1755-2015",
      "pgn-res-330-2021",
      "ley-1712-2014"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-correccion-acto-1",
    "moduleId": "pgn-m15",
    "relatedModuleIds": [
      "pgn-m15",
      "pgn-m16",
      "pgn-m30"
    ],
    "scenarioId": "pgn-exception-correccion-acto",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una autoridad expide y notifica un acto que reconoce una situación jurídica. En el encabezado aparece una fecha de radicación con dos dígitos transpuestos; las demás piezas, la motivación y la parte resolutiva identifican inequívocamente el trámite. No se altera el destinatario, el contenido ni la decisión.",
    "stem": "¿Cómo se corrige el dato equivocado sin reabrir indebidamente los términos?",
    "options": [
      {
        "id": "a",
        "text": "Revocar el acto y expedir otro con la fecha correcta, iniciando nuevamente los términos de impugnación y control judicial correspondientes.",
        "rationale": "La revocatoria no es necesaria para un error de digitación que carece de efecto material."
      },
      {
        "id": "b",
        "text": "Modificar la fecha en el archivo original sin conservar la versión notificada, pues el error carece de incidencia en el fondo.",
        "rationale": "El deber de trazabilidad y comunicación subsiste aunque el error sea puramente formal."
      },
      {
        "id": "c",
        "text": "Corregir formalmente la fecha y notificar o comunicar la corrección a los interesados, sin cambiar el sentido material ni revivir términos.",
        "rationale": "El art. 45 permite esa corrección sin reabrir los términos para demandar."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CPACA, arts. 41 y 45. El art. 45 permite esa corrección sin reabrir los términos para demandar. La revocatoria no es necesaria para un error de digitación que carece de efecto material. El deber de trazabilidad y comunicación subsiste aunque el error sea puramente formal.",
    "sourceIds": [
      "cpaca"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-correccion-acto-2",
    "moduleId": "pgn-m15",
    "relatedModuleIds": [
      "pgn-m15",
      "pgn-m16",
      "pgn-m30"
    ],
    "scenarioId": "pgn-exception-correccion-acto",
    "type": "pjs",
    "difficulty": 5,
    "case": "Después de notificado un acto favorable que reconoce una suma específica, una nueva revisión de fondo concluye que la autoridad debió usar otra regla de liquidación. No hay error de suma o transcripción: se pretende reducir el monto reconocido mediante una interpretación jurídica diferente, sin el consentimiento del titular.",
    "stem": "¿Qué límite tiene la autoridad si intenta usar la corrección de errores formales?",
    "options": [
      {
        "id": "a",
        "text": "No puede reducir el reconocimiento con el art. 45; debe examinar la vía de modificación, revocación o control judicial legalmente procedente.",
        "rationale": "Cambiar el fundamento y el monto reconocido altera el sentido material y excede el art. 45."
      },
      {
        "id": "b",
        "text": "Puede sustituir la cifra mediante corrección aritmética, siempre que explique la nueva interpretación en los considerandos del acto que corrige.",
        "rationale": "Una discrepancia jurídica no se convierte en error aritmético por expresarse en una cifra."
      },
      {
        "id": "c",
        "text": "Puede corregir el acto antes de que se venza el término de demanda, porque hasta entonces no produce efectos jurídicos consolidados.",
        "rationale": "La eficacia del acto y la posibilidad de demandarlo son cuestiones diferentes."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CPACA, arts. 41 y 45. Cambiar el fundamento y el monto reconocido altera el sentido material y excede el art. 45. Una discrepancia jurídica no se convierte en error aritmético por expresarse en una cifra. La eficacia del acto y la posibilidad de demandarlo son cuestiones diferentes.",
    "sourceIds": [
      "cpaca"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-conflicto-administrativo-1",
    "moduleId": "pgn-m16",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m16",
      "pgn-m17"
    ],
    "scenarioId": "pgn-exception-conflicto-administrativo",
    "type": "pjs",
    "difficulty": 5,
    "case": "Dos autoridades municipales de un mismo departamento rechazan sucesivamente la competencia para decidir una actuación administrativa general. La segunda devuelve el expediente y propone repetir la remisión al municipio inicial. No hay procedimiento especial aplicable y el ciudadano espera respuesta a su petición.",
    "stem": "¿Qué trámite evita una cadena indefinida de remisiones?",
    "options": [
      {
        "id": "a",
        "text": "Solicitar a la Procuraduría Regional que defina directamente cuál de las dos autoridades debe resolver y ordene el trámite de fondo.",
        "rationale": "La función de vigilancia de la PGN no equivale a competencia para dirimir este conflicto."
      },
      {
        "id": "b",
        "text": "Remitir inmediatamente la actuación al tribunal administrativo correspondiente para resolver el conflicto negativo, suspendiendo los términos del artículo 14 mientras se decide.",
        "rationale": "El art. 39 asigna el conflicto territorial descrito al tribunal y suspende términos de petición."
      },
      {
        "id": "c",
        "text": "Remitir a la Sala de Consulta y Servicio Civil del Consejo de Estado, porque cualquier conflicto entre dos entidades es de orden nacional.",
        "rationale": "La Sala conoce los supuestos nacionales, mixtos o territoriales de distintos departamentos."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CPACA, art. 39, modificado por Ley 2080/2021. El art. 39 asigna el conflicto territorial descrito al tribunal y suspende términos de petición. La función de vigilancia de la PGN no equivale a competencia para dirimir este conflicto. La Sala conoce los supuestos nacionales, mixtos o territoriales de distintos departamentos.",
    "sourceIds": [
      "cpaca"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-conflicto-administrativo-2",
    "moduleId": "pgn-m16",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m16",
      "pgn-m17"
    ],
    "scenarioId": "pgn-exception-conflicto-administrativo",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una autoridad nacional y una autoridad departamental afirman simultáneamente tener competencia para resolver la misma actuación administrativa general. Ambas proyectan actos definitivos incompatibles. El solicitante pide que se determine cuál debe conocer el asunto y aún corre el término de respuesta del artículo 14.",
    "stem": "¿Qué órgano y efecto temporal corresponden al conflicto positivo descrito?",
    "options": [
      {
        "id": "a",
        "text": "El tribunal administrativo del departamento decide la competencia por estar allí el expediente y continúa el término de respuesta de la entidad nacional.",
        "rationale": "La presencia de una autoridad nacional hace aplicable la competencia especial de la Sala."
      },
      {
        "id": "b",
        "text": "La autoridad que recibió primero decide de fondo y comunica su acto a la segunda, pues la prioridad de radicación define competencia.",
        "rationale": "La primera radicación no sustituye las reglas legales de competencia administrativa."
      },
      {
        "id": "c",
        "text": "La Sala de Consulta y Servicio Civil decide el conflicto mixto; durante el trámite se suspenden los términos de petición del artículo 14.",
        "rationale": "El art. 39 cubre conflictos positivos y mixtos; dispone la suspensión indicada."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CPACA, art. 39, modificado por Ley 2080/2021. El art. 39 cubre conflictos positivos y mixtos; dispone la suspensión indicada. La presencia de una autoridad nacional hace aplicable la competencia especial de la Sala. La primera radicación no sustituye las reglas legales de competencia administrativa.",
    "sourceIds": [
      "cpaca"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-terminacion-caducidad-1",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m50",
      "pgn-m52",
      "pgn-m53"
    ],
    "scenarioId": "pgn-exception-terminacion-caducidad",
    "type": "pjs",
    "difficulty": 5,
    "case": "Fallece el contratista persona natural que ejecutaba una obra pública con cláusulas excepcionales aplicables. La entidad conserva los avances certificados; el garante manifiesta disposición y capacidad para continuar la ejecución. No hay incumplimiento imputable demostrado. El supervisor considera que debe declararse caducidad por la interrupción.",
    "stem": "¿Qué figura debe analizar la autoridad contractual ante esos hechos?",
    "options": [
      {
        "id": "a",
        "text": "Examinar la terminación unilateral motivada por muerte y la posibilidad de continuar con el garante, sin presumir caducidad ni incumplimiento.",
        "rationale": "El art. 17 prevé muerte y permite continuidad con garante en ese supuesto; no es sanción automática."
      },
      {
        "id": "b",
        "text": "Declarar caducidad por imposibilidad de que el contratista original termine la obra y permitir después que el garante discuta su procedencia.",
        "rationale": "La muerte no demuestra por sí misma incumplimiento grave imputable que configure la caducidad."
      },
      {
        "id": "c",
        "text": "Mantener automáticamente el contrato con los herederos, pues la sucesión transfiere la posición contractual sin decisión de la entidad estatal.",
        "rationale": "No cabe sustituir automáticamente al contratista mediante la sucesión sin examinar el régimen contractual."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 80/1993, arts. 14, 17 y 18. El art. 17 prevé muerte y permite continuidad con garante en ese supuesto; no es sanción automática. La muerte no demuestra por sí misma incumplimiento grave imputable que configure la caducidad. No cabe sustituir automáticamente al contratista mediante la sucesión sin examinar el régimen contractual.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-terminacion-caducidad-2",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m50",
      "pgn-m52",
      "pgn-m53"
    ],
    "scenarioId": "pgn-exception-terminacion-caducidad",
    "type": "pjs",
    "difficulty": 5,
    "case": "En un contrato de obra con cláusula de caducidad aplicable se documenta un incumplimiento atribuible al contratista que afecta gravemente la ejecución y puede paralizar el objeto. La entidad cuenta con informe de interventoría, soportes y alternativas de continuidad; todavía no ha oído al contratista ni al garante.",
    "stem": "¿Qué actuación distingue la potestad contractual de una sanción automática por alerta?",
    "options": [
      {
        "id": "a",
        "text": "Dar por terminado el contrato mediante acta de supervisión, ordenar el pago al garante y remitir después las pruebas para revisión jurídica.",
        "rationale": "El supervisor informa y soporta; no sustituye la autoridad ni el procedimiento de decisión."
      },
      {
        "id": "b",
        "text": "Tramitar el debido proceso para decidir motivadamente la caducidad y, si procede, disponer liquidación y continuidad conforme a la ley.",
        "rationale": "El art. 18 exige presupuestos materiales y acto motivado; el debido proceso debe garantizarse."
      },
      {
        "id": "c",
        "text": "Aplicar terminación unilateral por exigencias del servicio sin valorar el incumplimiento, para evitar examinar las garantías del contratista y garante.",
        "rationale": "La terminación del art. 17 no sustituye la valoración del supuesto específico de caducidad."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 80/1993, arts. 14, 17 y 18. El art. 18 exige presupuestos materiales y acto motivado; el debido proceso debe garantizarse. El supervisor informa y soporta; no sustituye la autoridad ni el procedimiento de decisión. La terminación del art. 17 no sustituye la valoración del supuesto específico de caducidad.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-modificacion-20-1",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m50",
      "pgn-m51",
      "pgn-m52"
    ],
    "scenarioId": "pgn-exception-modificacion-20",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una entidad, ante necesidad acreditada de evitar afectación grave del servicio y ausencia de acuerdo, modifica unilateralmente un contrato de obra en el marco de la cláusula legalmente aplicable. El valor inicial es de mil millones y la variación es de doscientos millones. El contratista manifiesta que no desea continuar.",
    "stem": "¿Qué efecto específico produce ese porcentaje conforme al artículo 16?",
    "options": [
      {
        "id": "a",
        "text": "El contratista debe continuar porque la modificación permanece dentro del límite general de adiciones del cincuenta por ciento del valor inicial.",
        "rationale": "El límite general de adiciones no elimina el derecho previsto en el art. 16."
      },
      {
        "id": "b",
        "text": "La entidad puede aceptar la renuncia solamente si la modificación supera, y no simplemente alcanza, el veinte por ciento del valor inicial.",
        "rationale": "La norma incluye modificaciones iguales al veinte por ciento, no solo superiores."
      },
      {
        "id": "c",
        "text": "El contratista puede renunciar a continuar; corresponde ordenar liquidación y adoptar medidas inmediatas para garantizar la terminación del objeto.",
        "rationale": "El supuesto alcanza exactamente el umbral del art. 16 y activa sus consecuencias si renuncia."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 80/1993, arts. 14, 16 y 40. El supuesto alcanza exactamente el umbral del art. 16 y activa sus consecuencias si renuncia. El límite general de adiciones no elimina el derecho previsto en el art. 16. La norma incluye modificaciones iguales al veinte por ciento, no solo superiores.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-modificacion-20-2",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m50",
      "pgn-m51",
      "pgn-m52"
    ],
    "scenarioId": "pgn-exception-modificacion-20",
    "type": "pjs",
    "difficulty": 5,
    "case": "En otro contrato de obra, la modificación unilateral está motivada, se agotó el intento de acuerdo y la variación equivale al quince por ciento del valor inicial. El contratista invoca exclusivamente el umbral del artículo 16 para exigir que se liquide el contrato. No se acreditan otras causales ni modificaciones previas.",
    "stem": "¿Qué debe concluirse respecto de la causal invocada, sin prejuzgar otros derechos?",
    "options": [
      {
        "id": "a",
        "text": "El porcentaje no activa por sí solo el derecho específico a renunciar del art. 16; deben examinarse separadamente otros derechos que procedan.",
        "rationale": "El umbral legal es veinte por ciento o más; la conclusión se limita a ese fundamento."
      },
      {
        "id": "b",
        "text": "La renuncia es obligatoria desde cualquier modificación unilateral, pues el contratista no prestó consentimiento al cambio en el objeto inicial.",
        "rationale": "La modificación unilateral legalmente habilitada no genera automáticamente el derecho específico de renuncia."
      },
      {
        "id": "c",
        "text": "La entidad debe liquidar si la modificación supera el diez por ciento del contrato, aunque conserve la continuidad del servicio público.",
        "rationale": "El artículo 16 no establece un umbral del diez por ciento para esa consecuencia."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 80/1993, arts. 14, 16 y 40. El umbral legal es veinte por ciento o más; la conclusión se limita a ese fundamento. La modificación unilateral legalmente habilitada no genera automáticamente el derecho específico de renuncia. El artículo 16 no establece un umbral del diez por ciento para esa consecuencia.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-siniestro-garantia-1",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m22",
      "pgn-m45",
      "pgn-m52",
      "pgn-m58"
    ],
    "scenarioId": "pgn-exception-siniestro-garantia",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un incendio destruye equipos que un proveedor debía entregar a la PGN y que todavía estaban bajo su custodia. La causa no se ha establecido; existen una póliza de cumplimiento y un seguro de bienes con coberturas distintas. El supervisor recibe un informe preliminar y el área de compras pide declarar incumplimiento y cobrar de inmediato toda la póliza.",
    "stem": "¿Qué actuación debe preceder a una decisión sobre incumplimiento y garantía?",
    "options": [
      {
        "id": "a",
        "text": "Hacer efectiva la totalidad de la póliza de cumplimiento por el valor de los equipos destruidos y verificar la causa al liquidar el contrato.",
        "rationale": "El evento físico no acredita por sí solo incumplimiento imputable, cobertura ni cuantía de la garantía."
      },
      {
        "id": "b",
        "text": "Verificar causa, obligaciones, asignación de riesgos y amparos; si procede trámite de incumplimiento, citar al contratista y al garante.",
        "rationale": "La Ley 1474 y el Decreto 1082 exigen distinguir los presupuestos y respetar el procedimiento aplicable."
      },
      {
        "id": "c",
        "text": "Aplicar exclusivamente el seguro de bienes sin revisar la obligación de entrega ni informar a la autoridad contractual del posible incumplimiento.",
        "rationale": "La existencia de un seguro patrimonial no excluye automáticamente el análisis de obligaciones contractuales."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 1474/2011, art. 86; Decreto 1082/2015, art. 2.2.1.2.3.1.19; Manual PGN, secciones 4.9 y 5.3. La Ley 1474 y el Decreto 1082 exigen distinguir los presupuestos y respetar el procedimiento aplicable. El evento físico no acredita por sí solo incumplimiento imputable, cobertura ni cuantía de la garantía. La existencia de un seguro patrimonial no excluye automáticamente el análisis de obligaciones contractuales.",
    "sourceIds": [
      "ley-1474-2011",
      "decreto-1082-2015",
      "pgn-res-379-2024"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-siniestro-garantia-2",
    "moduleId": "pgn-m52",
    "relatedModuleIds": [
      "pgn-m22",
      "pgn-m45",
      "pgn-m52",
      "pgn-m58"
    ],
    "scenarioId": "pgn-exception-siniestro-garantia",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un equipo tecnológico fue recibido a satisfacción, pagado y puesto en servicio. Ocho meses después presenta una falla de fabricación acreditada mediante diagnóstico; el amparo de calidad y correcto funcionamiento sigue vigente. No hay mora en la entrega ni daños causados por terceros. La oficina propone considerar extemporánea toda reclamación por haber finalizado la ejecución.",
    "stem": "¿Qué garantía debe examinarse prioritariamente para este supuesto posterior al recibo?",
    "options": [
      {
        "id": "a",
        "text": "El amparo de cumplimiento por retraso en entrega, pues cualquier falla posterior transforma retroactivamente el recibo a satisfacción en mora contractual.",
        "rationale": "La falla de calidad posterior no convierte automáticamente una entrega oportuna en mora."
      },
      {
        "id": "b",
        "text": "El seguro de responsabilidad civil extracontractual, dado que el daño se manifestó una vez finalizada la etapa de ejecución del contrato.",
        "rationale": "La responsabilidad extracontractual no es el amparo específico de calidad del bien recibido."
      },
      {
        "id": "c",
        "text": "El amparo postcontractual de calidad y correcto funcionamiento vigente, comprobando alcance, causa, perjuicio y procedimiento de reclamación correspondiente.",
        "rationale": "El manual PGN distingue los amparos postcontractuales y sus presupuestos de aplicación."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 1474/2011, art. 86; Decreto 1082/2015, art. 2.2.1.2.3.1.19; Manual PGN, secciones 4.9 y 5.3. El manual PGN distingue los amparos postcontractuales y sus presupuestos de aplicación. La falla de calidad posterior no convierte automáticamente una entrega oportuna en mora. La responsabilidad extracontractual no es el amparo específico de calidad del bien recibido.",
    "sourceIds": [
      "ley-1474-2011",
      "decreto-1082-2015",
      "pgn-res-379-2024"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-urgencia-control-1",
    "moduleId": "pgn-m51",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m50",
      "pgn-m51",
      "pgn-m52",
      "pgn-m54"
    ],
    "scenarioId": "pgn-exception-urgencia-control",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una entidad territorial declara motivadamente urgencia manifiesta para garantizar un servicio afectado por una calamidad y celebra los contratos indispensables. Conserva acto, antecedentes técnicos, pruebas y contratos suscritos. El secretario propone esperar al cierre de la ejecución para enviar un único informe consolidado al organismo de control fiscal.",
    "stem": "¿Cuándo y con qué soporte procede el control especial de la contratación de urgencia?",
    "options": [
      {
        "id": "a",
        "text": "Remitir inmediatamente después de celebrados los contratos el acto de urgencia, contratos, antecedentes y pruebas al organismo de control fiscal competente.",
        "rationale": "El art. 43 establece remisión posterior inmediata a la celebración y documentación específica."
      },
      {
        "id": "b",
        "text": "Remitir después de liquidar los contratos, cuando sea posible establecer el valor ejecutado definitivo y medir la suficiencia de las obras.",
        "rationale": "El cierre o liquidación no es el momento legal de esa remisión especial."
      },
      {
        "id": "c",
        "text": "Solicitar primero autorización de la Procuraduría para enviar los documentos al organismo fiscal, porque la urgencia implica vigilancia disciplinaria preferente.",
        "rationale": "El control fiscal del art. 43 no depende de autorización previa de la PGN."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 80/1993, arts. 42–43. El art. 43 establece remisión posterior inmediata a la celebración y documentación específica. El cierre o liquidación no es el momento legal de esa remisión especial. El control fiscal del art. 43 no depende de autorización previa de la PGN.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-urgencia-control-2",
    "moduleId": "pgn-m51",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m50",
      "pgn-m51",
      "pgn-m52",
      "pgn-m54"
    ],
    "scenarioId": "pgn-exception-urgencia-control",
    "type": "pjs",
    "difficulty": 5,
    "case": "El órgano de control fiscal recibe el expediente completo de una contratación de urgencia y encuentra indicios de que la situación declarada era previsible y no impedía acudir al procedimiento ordinario. No ha transcurrido el plazo de dos meses para su pronunciamiento. La entidad afirma que el órgano fiscal debe sancionar disciplinariamente al ordenador del gasto de inmediato.",
    "stem": "¿Cómo se diferencian el control de urgencia y la eventual actuación disciplinaria?",
    "options": [
      {
        "id": "a",
        "text": "El órgano fiscal impone la sanción disciplinaria dentro de dos meses y remite copia a la Procuraduría para registrar sus efectos.",
        "rationale": "Los dos meses corresponden al pronunciamiento fiscal, no al fallo de responsabilidad disciplinaria."
      },
      {
        "id": "b",
        "text": "El órgano fiscal se pronuncia sobre las circunstancias y, si procede, solicita investigación disciplinaria al competente y remite otras acciones pertinentes.",
        "rationale": "El art. 43 distingue pronunciamiento, solicitud de investigación y remisiones según competencia."
      },
      {
        "id": "c",
        "text": "La Procuraduría sustituye el pronunciamiento fiscal desde que aparecen indicios, porque el posible uso indebido elimina las competencias del control fiscal.",
        "rationale": "La concurrencia de controles no transfiere automáticamente sus funciones a la PGN."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 80/1993, arts. 42–43. El art. 43 distingue pronunciamiento, solicitud de investigación y remisiones según competencia. Los dos meses corresponden al pronunciamiento fiscal, no al fallo de responsabilidad disciplinaria. La concurrencia de controles no transfiere automáticamente sus funciones a la PGN.",
    "sourceIds": [
      "ley-80-1993"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-suspension-provisional-1",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m27",
      "pgn-m30",
      "pgn-m31"
    ],
    "scenarioId": "pgn-exception-suspension-provisional",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un instructor competente investiga una falta calificada provisionalmente como grave. Hay registros independientes de que el servidor continúa usando sus atribuciones para interferir en la conservación de documentos. Se acredita riesgo serio y la autoridad adopta motivadamente la suspensión provisional. La secretaría consulta al superior y pregunta si debe esperar su respuesta para ejecutar la medida.",
    "stem": "¿Cuál es el efecto de la consulta sobre la ejecución de la suspensión provisional?",
    "options": [
      {
        "id": "a",
        "text": "Diferir la ejecución hasta que el superior confirme la medida, pues una consulta pendiente impide la eficacia de cualquier auto interlocutorio.",
        "rationale": "El art. 217 establece expresamente cumplimiento inmediato pese a la consulta."
      },
      {
        "id": "b",
        "text": "Cumplir inmediatamente la suspensión y tramitar la consulta, sin tratar la medida cautelar como una declaración definitiva de responsabilidad.",
        "rationale": "La medida tiene finalidad cautelar y su control no suspende automáticamente la ejecución."
      },
      {
        "id": "c",
        "text": "Ejecutar la suspensión y sustituir la consulta por reposición si el servidor manifiesta desacuerdo dentro del plazo de impugnación.",
        "rationale": "La reposición no reemplaza el grado de consulta legalmente previsto."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 217–218. La medida tiene finalidad cautelar y su control no suspende automáticamente la ejecución. El art. 217 establece expresamente cumplimiento inmediato pese a la consulta. La reposición no reemplaza el grado de consulta legalmente previsto.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-suspension-provisional-2",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m27",
      "pgn-m30",
      "pgn-m31"
    ],
    "scenarioId": "pgn-exception-suspension-provisional",
    "type": "pjs",
    "difficulty": 5,
    "case": "Dos meses después de decretarse una suspensión provisional, el despacho verifica que desaparecieron todos los motivos que la justificaban: se preservaron los soportes y el investigado ya no puede interferir ni continuar o reiterar la conducta. La investigación sigue pendiente y no existe fallo. La oficina quiere mantener la medida hasta agotar los tres meses iniciales.",
    "stem": "¿Qué corresponde hacer respecto de la medida si sus motivos desaparecieron?",
    "options": [
      {
        "id": "a",
        "text": "Mantenerla hasta el vencimiento del término inicial, dejando que la decisión de prórroga determine si subsiste alguna razón para su continuidad.",
        "rationale": "La duración máxima no sustituye la necesidad actual de la medida cautelar."
      },
      {
        "id": "b",
        "text": "Solicitar que el investigado renuncie a impugnar las futuras decisiones para poder levantar anticipadamente la suspensión sin afectar el trámite.",
        "rationale": "La revocatoria no está condicionada a renunciar a garantías procesales."
      },
      {
        "id": "c",
        "text": "Revocarla por la autoridad habilitada, sin esperar al plazo inicial; continuar el proceso y examinar separadamente los efectos del reintegro.",
        "rationale": "El art. 217 exige revocación cuando desaparecen los motivos; el art. 218 regula efectos específicos."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, arts. 217–218. El art. 217 exige revocación cuando desaparecen los motivos; el art. 218 regula efectos específicos. La duración máxima no sustituye la necesidad actual de la medida cautelar. La revocatoria no está condicionada a renunciar a garantías procesales.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-conflicto-disciplinario-1",
    "moduleId": "pgn-m13",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m16",
      "pgn-m23",
      "pgn-m27"
    ],
    "scenarioId": "pgn-exception-conflicto-disciplinario",
    "type": "pjs",
    "difficulty": 5,
    "case": "Dos funcionarios disciplinarios del mismo nivel de la PGN tienen un superior común inmediato. El primero, mediante decisión motivada, remite una actuación al segundo por considerarse incompetente. El segundo también considera que no le corresponde y propone devolverla sin más. El expediente está en investigación y no hay regla especial distinta del artículo 99.",
    "stem": "¿A quién debe remitirse el conflicto para impedir devoluciones sucesivas?",
    "options": [
      {
        "id": "a",
        "text": "Remitir la actuación al superior común inmediato para que dirima la competencia, exponiendo las razones de la discrepancia entre funcionarios.",
        "rationale": "El art. 99 establece el superior común inmediato en este supuesto especial."
      },
      {
        "id": "b",
        "text": "Remitirla al tribunal administrativo de la sede donde ocurrieron los hechos, aplicando el procedimiento general de conflictos administrativos territoriales.",
        "rationale": "El CPACA general no desplaza el procedimiento disciplinario que regula este conflicto."
      },
      {
        "id": "c",
        "text": "Devolverla al primer funcionario para que continúe por prevención hasta que alguna de las partes interponga un recurso sobre competencia.",
        "rationale": "La prevención no permite ignorar el trámite legal una vez suscitado el conflicto."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, art. 99. El art. 99 establece el superior común inmediato en este supuesto especial. El CPACA general no desplaza el procedimiento disciplinario que regula este conflicto. La prevención no permite ignorar el trámite legal una vez suscitado el conflicto.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-conflicto-disciplinario-2",
    "moduleId": "pgn-m13",
    "relatedModuleIds": [
      "pgn-m13",
      "pgn-m16",
      "pgn-m23",
      "pgn-m27"
    ],
    "scenarioId": "pgn-exception-conflicto-disciplinario",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un funcionario de nivel inferior recibe de su superior una actuación disciplinaria y considera, con razones jurídicas documentadas, que corresponde al despacho superior. El expediente conserva las decisiones de asignación. Un compañero recomienda promover conflicto negativo formal contra el superior para obligar a un tercero a decidir.",
    "stem": "¿Qué vía prevé el artículo 99 para la discrepancia del inferior con su superior?",
    "options": [
      {
        "id": "a",
        "text": "Promover conflicto negativo ante el superior común de ambos niveles, mediante el mismo procedimiento usado cuando dos funcionarios pares rechazan competencia.",
        "rationale": "La ley excluye la promoción de conflicto del inferior frente al superior."
      },
      {
        "id": "b",
        "text": "Exponer las razones al superior para que resuelva de plano lo pertinente, sin promover conflicto de competencia contra él.",
        "rationale": "El art. 99 permite exponer razones y atribuye al superior la resolución de plano."
      },
      {
        "id": "c",
        "text": "Solicitar una decisión del tribunal administrativo, pues la diferencia jerárquica impide aplicar la competencia interna de los órganos disciplinarios.",
        "rationale": "La existencia de jerarquía no convierte el conflicto especial en uno general del CPACA."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, art. 99. El art. 99 permite exponer razones y atribuye al superior la resolución de plano. La ley excluye la promoción de conflicto del inferior frente al superior. La existencia de jerarquía no convierte el conflicto especial en uno general del CPACA.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-terminos-especiales-1",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m24",
      "pgn-m26",
      "pgn-m27",
      "pgn-m29"
    ],
    "scenarioId": "pgn-exception-terminos-especiales",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una investigación ordinaria se inició contra un único servidor por una única falta. Al acercarse el sexto mes, queda pendiente un dictamen que el despacho ha justificado como capaz de modificar su situación jurídica. No existe pluralidad de faltas ni de disciplinables y no se investiga una infracción al DIDH o al DIH.",
    "stem": "¿Qué extensión puede examinarse por la prueba pendiente descrita?",
    "options": [
      {
        "id": "a",
        "text": "Prorrogar hasta otros seis meses por complejidad técnica, considerando que todo dictamen pendiente configura pluralidad de actuaciones de investigación.",
        "rationale": "La complejidad por sí sola no configura la pluralidad exigida para la prórroga ordinaria."
      },
      {
        "id": "b",
        "text": "Aplicar el término especial de dieciocho meses porque el uso de prueba técnica compromete el derecho fundamental al debido proceso.",
        "rationale": "La regla especial DIDH/DIH no se activa por cualquier mención al debido proceso."
      },
      {
        "id": "c",
        "text": "Evaluar la extensión de hasta tres meses adicionales por prueba capaz de modificar la situación jurídica, motivando su necesidad.",
        "rationale": "El inciso final del art. 213 contempla esa extensión probatoria específica."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, art. 213. El inciso final del art. 213 contempla esa extensión probatoria específica. La complejidad por sí sola no configura la pluralidad exigida para la prórroga ordinaria. La regla especial DIDH/DIH no se activa por cualquier mención al debido proceso.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-terminos-especiales-2",
    "moduleId": "pgn-m27",
    "relatedModuleIds": [
      "pgn-m24",
      "pgn-m26",
      "pgn-m27",
      "pgn-m29"
    ],
    "scenarioId": "pgn-exception-terminos-especiales",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una investigación por dos faltas contra dos disciplinables agotó el término ordinario y su prórroga válidamente concedida. También se agotaron los tres meses adicionales por una prueba potencialmente decisiva. La prueba fue practicada, pero el conjunto disponible no permite formular cargos. No existe otro supuesto especial aplicable.",
    "stem": "¿Qué decisión corresponde al agotarse el término adicional sin prueba suficiente para cargos?",
    "options": [
      {
        "id": "a",
        "text": "Proyectar el archivo definitivo motivado conforme al artículo 213, dejando constancia del agotamiento del término y de la insuficiencia probatoria para formular cargos.",
        "rationale": "La norma dispone archivo si vencido el término adicional no surge prueba para cargos."
      },
      {
        "id": "b",
        "text": "Abrir una nueva investigación por los mismos hechos para recuperar el término inicial, conservando las actuaciones del expediente anterior como antecedentes.",
        "rationale": "Un nuevo expediente no permite eludir los límites del procedimiento ni la seguridad jurídica."
      },
      {
        "id": "c",
        "text": "Formular cargos para que el juzgador disponga de una nueva fase probatoria y determine si puede completarse la evidencia faltante.",
        "rationale": "Formular cargos requiere el estándar del art. 222; no es mecanismo para suplir su ausencia."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: CGD, art. 213. La norma dispone archivo si vencido el término adicional no surge prueba para cargos. Un nuevo expediente no permite eludir los límites del procedimiento ni la seguridad jurídica. Formular cargos requiere el estándar del art. 222; no es mecanismo para suplir su ausencia.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-testigo-no-disponible-1",
    "moduleId": "pgn-m41",
    "relatedModuleIds": [
      "pgn-m35",
      "pgn-m37",
      "pgn-m39",
      "pgn-m41",
      "pgn-m43"
    ],
    "scenarioId": "pgn-exception-testigo-no-disponible",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un testigo rindió declaración formal dentro de la investigación con observancia de las garantías aplicables y el defensor formuló preguntas. La grabación y el acta están íntegras. Meses después el testigo fallece, antes de que se evalúe el mérito de la investigación. Existen otros documentos pertinentes que permiten contrastar lo narrado.",
    "stem": "¿Qué efecto produce el fallecimiento posterior sobre la declaración ya practicada?",
    "options": [
      {
        "id": "a",
        "text": "Excluir la declaración porque la imposibilidad de convocar nuevamente al testigo elimina la contradicción ya realizada durante su práctica original.",
        "rationale": "La muerte posterior no invalida por sí misma una contradicción que ya tuvo lugar."
      },
      {
        "id": "b",
        "text": "Valorar el testimonio legalmente practicado y contradicho junto con las demás pruebas, dejando constancia del fallecimiento y de los límites de una eventual ampliación.",
        "rationale": "La valoración conjunta permite considerar la declaración con su contexto y límites."
      },
      {
        "id": "c",
        "text": "Conferir valor concluyente a la declaración por haber fallecido el testigo, sin necesidad de examinar consistencia o fuentes de corroboración.",
        "rationale": "La imposibilidad de ampliar no convierte la declaración en prueba concluyente."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: CGD, arts. 147, 154, 157–159. La valoración conjunta permite considerar la declaración con su contexto y límites. La muerte posterior no invalida por sí misma una contradicción que ya tuvo lugar. La imposibilidad de ampliar no convierte la declaración en prueba concluyente.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-testigo-no-disponible-2",
    "moduleId": "pgn-m41",
    "relatedModuleIds": [
      "pgn-m35",
      "pgn-m37",
      "pgn-m39",
      "pgn-m41",
      "pgn-m43"
    ],
    "scenarioId": "pgn-exception-testigo-no-disponible",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un investigador recibe de un tercero una grabación de una conversación informal con una persona que falleció antes de ser citada. El archivo tiene origen identificado, pero no fue obtenido como testimonio procesal, no existe juramento ni interrogatorio y la defensa no pudo hacer preguntas al fallecido. Hay posibles fuentes documentales independientes.",
    "stem": "¿Cómo debe tratarse la grabación sin fingir una garantía que no ocurrió?",
    "options": [
      {
        "id": "a",
        "text": "Incorporarla como testimonio formal completo, dado que la muerte vuelve innecesarios los requisitos que normalmente se exigen al declarar ante autoridad.",
        "rationale": "Una conversación informal no adquiere calidad de testimonio formal por el fallecimiento."
      },
      {
        "id": "b",
        "text": "Excluir todo archivo y todo documento relacionado únicamente por la muerte, sin analizar la naturaleza de los soportes ni su obtención.",
        "rationale": "La muerte no determina por sí sola la exclusión de todas las fuentes relacionadas."
      },
      {
        "id": "c",
        "text": "Examinar la naturaleza y legalidad de la grabación, permitir contradicción sobre el soporte, explicitar la imposibilidad de interrogar al fallecido y buscar corroboración independiente.",
        "rationale": "La valoración exige identificar el medio real y no afirmar una contradicción que no existió."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: CGD, arts. 147, 154, 157–159. La valoración exige identificar el medio real y no afirmar una contradicción que no existió. Una conversación informal no adquiere calidad de testimonio formal por el fallecimiento. La muerte no determina por sí sola la exclusión de todas las fuentes relacionadas.",
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-prevencion-emergencia-1",
    "moduleId": "pgn-m45",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m46",
      "pgn-m48",
      "pgn-m49",
      "pgn-m52"
    ],
    "scenarioId": "pgn-exception-prevencion-emergencia",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un municipio enfrenta una interrupción prolongada de agua potable que afecta a hogares vulnerables. La PGN recibe alertas verificables de que los planes de contingencia no se están ejecutando. La autoridad municipal tiene competencias y recursos para actuar; el profesional de apoyo dispone de indicadores, reportes sanitarios y contactos de organismos de control.",
    "stem": "¿Qué respuesta preventiva permite atender el riesgo sin asumir la administración del servicio?",
    "options": [
      {
        "id": "a",
        "text": "Activar seguimiento de mitigación, requerir medidas a responsables, coordinar remisiones pertinentes y verificar resultados con indicadores de cobertura, plazos y atención diferencial.",
        "rationale": "La prevención puede actuar ante afectación actual y exigir respuesta dentro de competencias."
      },
      {
        "id": "b",
        "text": "Diseñar y ordenar directamente las rutas de abastecimiento y seleccionar proveedores temporales, porque la urgencia permite asumir funciones del municipio.",
        "rationale": "La urgencia no transfiere las atribuciones administrativas y contractuales al profesional PGN."
      },
      {
        "id": "c",
        "text": "Limitarse a remitir la noticia disciplinaria y esperar una decisión sancionatoria antes de efectuar seguimiento a las medidas de contingencia.",
        "rationale": "La eventual disciplina no impide una actuación preventiva paralela de mitigación."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Constitución, art. 277; Resolución PGN 132/2014; CGD, art. 219. La prevención puede actuar ante afectación actual y exigir respuesta dentro de competencias. La urgencia no transfiere las atribuciones administrativas y contractuales al profesional PGN. La eventual disciplina no impide una actuación preventiva paralela de mitigación.",
    "sourceIds": [
      "constitucion",
      "pgn-res-132-2014",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-prevencion-emergencia-2",
    "moduleId": "pgn-m45",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m46",
      "pgn-m48",
      "pgn-m49",
      "pgn-m52"
    ],
    "scenarioId": "pgn-exception-prevencion-emergencia",
    "type": "pjs",
    "difficulty": 5,
    "case": "En diligencias disciplinarias a cargo de la PGN aparecen elementos que permiten inferir que la ejecución de un contrato vulnera el ordenamiento y puede causar perjuicio patrimonial. El contrato continúa activo. La autoridad disciplinaria estudia una actuación inmediata, pero el profesional sostiene que debe declarar por sí mismo la nulidad del contrato.",
    "stem": "¿Qué facultad específica corresponde examinar en este supuesto disciplinario?",
    "options": [
      {
        "id": "a",
        "text": "Declarar de oficio la nulidad contractual mediante el auto disciplinario, y ordenar directamente al supervisor liquidar el negocio jurídico.",
        "rationale": "El art. 219 no atribuye una potestad general de anular contratos."
      },
      {
        "id": "b",
        "text": "Solicitar la suspensión de la ejecución en los términos del artículo 219, motivando el riesgo y respetando las competencias correspondientes.",
        "rationale": "La regla permite solicitar suspensión durante diligencias disciplinarias para evitar efectos y perjuicios."
      },
      {
        "id": "c",
        "text": "Esperar a que se profiera fallo sancionatorio ejecutoriado, pues antes de esa decisión no puede solicitarse ninguna medida sobre el contrato.",
        "rationale": "La facultad no exige una declaración definitiva de responsabilidad disciplinaria."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Constitución, art. 277; Resolución PGN 132/2014; CGD, art. 219. La regla permite solicitar suspensión durante diligencias disciplinarias para evitar efectos y perjuicios. El art. 219 no atribuye una potestad general de anular contratos. La facultad no exige una declaración definitiva de responsabilidad disciplinaria.",
    "sourceIds": [
      "constitucion",
      "pgn-res-132-2014",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-bienes-fiscal-1",
    "moduleId": "pgn-m56",
    "relatedModuleIds": [
      "pgn-m22",
      "pgn-m45",
      "pgn-m54",
      "pgn-m56"
    ],
    "scenarioId": "pgn-exception-bienes-fiscal",
    "type": "pjs",
    "difficulty": 5,
    "case": "Desaparece un portátil institucional asignado a un servidor para su trabajo. El inventario acredita la entrega, pero no se ha esclarecido quién autorizaba la disposición de bienes ni si el usuario ejercía actos propios de gestión fiscal. Existe una posible infracción de deberes de custodia y una alerta remitida a los organismos de control.",
    "stem": "¿Qué análisis permite separar las eventuales responsabilidades por la pérdida?",
    "options": [
      {
        "id": "a",
        "text": "Concluir responsabilidad fiscal del usuario por figurar como custodio, dejando la comprobación de sus atribuciones sobre bienes para la ejecución del fallo.",
        "rationale": "La asignación material no acredita por sí sola el ejercicio de gestión fiscal."
      },
      {
        "id": "b",
        "text": "Tramitar únicamente la investigación disciplinaria, pues los bienes de uso administrativo no pueden generar responsabilidad fiscal aunque exista gestión fiscal.",
        "rationale": "La naturaleza administrativa del bien no excluye responsabilidad fiscal si concurren los requisitos legales."
      },
      {
        "id": "c",
        "text": "Verificar daño, funciones de gestión fiscal, relación directa y demás presupuestos fiscales; examinar separadamente deber de custodia, conducta y culpabilidad disciplinaria.",
        "rationale": "El art. 7 exige relación directa con actos propios de gestión fiscal; los regímenes tienen presupuestos distintos."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 610/2000, arts. 5, 7 y 16; CGD, arts. 9–10. El art. 7 exige relación directa con actos propios de gestión fiscal; los regímenes tienen presupuestos distintos. La asignación material no acredita por sí sola el ejercicio de gestión fiscal. La naturaleza administrativa del bien no excluye responsabilidad fiscal si concurren los requisitos legales.",
    "sourceIds": [
      "ley-610-2000",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-bienes-fiscal-2",
    "moduleId": "pgn-m56",
    "relatedModuleIds": [
      "pgn-m22",
      "pgn-m45",
      "pgn-m54",
      "pgn-m56"
    ],
    "scenarioId": "pgn-exception-bienes-fiscal",
    "type": "pjs",
    "difficulty": 5,
    "case": "En un proceso fiscal por pérdida de bienes, se acredita mediante soportes que el daño investigado fue resarcido totalmente. Paralelamente, la PGN instruye una actuación por posible incumplimiento sustancial de deberes de custodia. La defensa solicita cerrar ambas actuaciones alegando que ya no existe saldo económico por recuperar.",
    "stem": "¿Qué consecuencia debe diferenciarse entre las dos actuaciones?",
    "options": [
      {
        "id": "a",
        "text": "Aplicar el archivo fiscal si se verifica el resarcimiento total y evaluar autónomamente los presupuestos de responsabilidad en la actuación disciplinaria.",
        "rationale": "El art. 16 contempla archivo fiscal por resarcimiento total; la disciplina protege deberes funcionales."
      },
      {
        "id": "b",
        "text": "Archivar ambas por desaparición del perjuicio económico, porque el daño patrimonial es requisito necesario de cualquier falta disciplinaria relacionada con bienes.",
        "rationale": "La ilicitud disciplinaria no requiere necesariamente un daño patrimonial subsistente."
      },
      {
        "id": "c",
        "text": "Continuar el proceso fiscal para imponer una consecuencia punitiva por el hecho original, dejando el resarcimiento como criterio de graduación.",
        "rationale": "El proceso fiscal tiene finalidad resarcitoria y la regla específica de archivo no se sustituye por castigo."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 610/2000, arts. 5, 7 y 16; CGD, arts. 9–10. El art. 16 contempla archivo fiscal por resarcimiento total; la disciplina protege deberes funcionales. La ilicitud disciplinaria no requiere necesariamente un daño patrimonial subsistente. El proceso fiscal tiene finalidad resarcitoria y la regla específica de archivo no se sustituye por castigo.",
    "sourceIds": [
      "ley-610-2000",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-control-interno-1",
    "moduleId": "pgn-m57",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m56",
      "pgn-m57"
    ],
    "scenarioId": "pgn-exception-control-interno",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una auditoría interna identifica pagos tramitados sin un soporte obligatorio. La gerencia propone que el jefe de control interno refrende cada pago futuro para asegurar que no se repita. El responsable financiero mantiene sus atribuciones y existe capacidad para incorporar una verificación previa en el propio proceso de pagos.",
    "stem": "¿Qué diseño preserva la independencia del evaluador y fortalece el proceso?",
    "options": [
      {
        "id": "a",
        "text": "Asignar al auditor interno la refrendación de cada pago mientras se normaliza la operación, con evaluación posterior a cargo de su oficina.",
        "rationale": "La refrendación por el auditor está prohibida por el parágrafo del art. 12."
      },
      {
        "id": "b",
        "text": "Implementar controles operativos a cargo de responsables del proceso y mantener a control interno en evaluación independiente, recomendación y seguimiento de la eficacia.",
        "rationale": "La administración aplica los controles; el evaluador conserva independencia para verificar su funcionamiento."
      },
      {
        "id": "c",
        "text": "Asignar al auditor interno la aprobación de los soportes y al área financiera únicamente el registro posterior de las decisiones adoptadas.",
        "rationale": "Cambiar el nombre de la autorización no elimina la participación indebida del auditor."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Ley 87/1993, arts. 6 y 12. La administración aplica los controles; el evaluador conserva independencia para verificar su funcionamiento. La refrendación por el auditor está prohibida por el parágrafo del art. 12. Cambiar el nombre de la autorización no elimina la participación indebida del auditor.",
    "sourceIds": [
      "ley-87-1993",
      "pgn-manual-calidad"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-control-interno-2",
    "moduleId": "pgn-m57",
    "relatedModuleIds": [
      "pgn-m45",
      "pgn-m56",
      "pgn-m57"
    ],
    "scenarioId": "pgn-exception-control-interno",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un hallazgo por expedientes incompletos se cerró después de anexar los documentos faltantes. En el siguiente trimestre aparecen deficiencias iguales en trámites diferentes, pese a que todos los responsables recibieron una circular de recordatorio. El proceso no cuenta con verificación de campos obligatorios ni evaluación de eficacia del control.",
    "stem": "¿Qué actuación de mejora corresponde ante la reiteración del hallazgo?",
    "options": [
      {
        "id": "a",
        "text": "Cerrar nuevamente cada caso con la carga de documentos, manteniendo la circular como evidencia suficiente de acción correctiva institucional ejecutada.",
        "rationale": "Completar documentos corrige el efecto, no acredita eliminación de la causa."
      },
      {
        "id": "b",
        "text": "Aumentar la frecuencia del informe de control sin modificar el procedimiento, porque detectar más expedientes incompletos demuestra eficacia preventiva.",
        "rationale": "La detección más frecuente no demuestra que el riesgo esté siendo prevenido."
      },
      {
        "id": "c",
        "text": "Identificar la causa, ajustar controles del proceso, asignar responsables y medir si la recurrencia disminuye después de implementar la acción.",
        "rationale": "La acción correctiva exige tratar causas y comprobar eficacia con evidencia posterior."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 87/1993, arts. 6 y 12. La acción correctiva exige tratar causas y comprobar eficacia con evidencia posterior. Completar documentos corrige el efecto, no acredita eliminación de la causa. La detección más frecuente no demuestra que el riesgo esté siendo prevenido.",
    "sourceIds": [
      "ley-87-1993",
      "pgn-manual-calidad"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-evidencia-inaccesible-1",
    "moduleId": "pgn-m44",
    "relatedModuleIds": [
      "pgn-m37",
      "pgn-m38",
      "pgn-m44",
      "pgn-m62",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-evidencia-inaccesible",
    "type": "pjs",
    "difficulty": 5,
    "case": "Se obtiene un respaldo cuya huella coincide con la registrada por el custodio en la fecha de adquisición. Al restaurarlo en un entorno de pruebas, el motor informa corrupción interna de una tabla que contiene datos relevantes. Existen copias anteriores y registros transaccionales parciales. El informe preliminar afirma que el hash garantiza que todos los datos son recuperables.",
    "stem": "¿Qué conclusión y actuación distinguen integridad binaria de recuperabilidad?",
    "options": [
      {
        "id": "a",
        "text": "Registrar la coincidencia de bytes respecto de la referencia, preservar la copia, probar recuperación aislada, buscar fuentes alternativas y documentar datos inaccesibles.",
        "rationale": "La huella coincide con bytes de referencia, pero no verifica estructura ni capacidad de restauración."
      },
      {
        "id": "b",
        "text": "Declarar que la corrupción es posterior a la adquisición y atribuirla al custodio, dado que una huella coincidente garantiza datos internos válidos.",
        "rationale": "Un archivo puede estar ya corrupto cuando se calculó la huella; no demuestra autoría ni momento."
      },
      {
        "id": "c",
        "text": "Certificar recuperación completa de la tabla a partir de la coincidencia de hash, dejando la restauración para cuando se requiera consultar registros.",
        "rationale": "La recuperabilidad requiere comprobar efectivamente el acceso y consistencia de los datos."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: NIST SP 800-86; Ley 527/1999, arts. 9–12. La huella coincide con bytes de referencia, pero no verifica estructura ni capacidad de restauración. Un archivo puede estar ya corrupto cuando se calculó la huella; no demuestra autoría ni momento. La recuperabilidad requiere comprobar efectivamente el acceso y consistencia de los datos.",
    "sourceIds": [
      "nist-sp-800-86",
      "ley-527-1999",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-evidencia-inaccesible-2",
    "moduleId": "pgn-m44",
    "relatedModuleIds": [
      "pgn-m37",
      "pgn-m38",
      "pgn-m44",
      "pgn-m62",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-evidencia-inaccesible",
    "type": "pjs",
    "difficulty": 5,
    "case": "Durante una diligencia autorizada se obtiene un contenedor cifrado del sistema institucional. El custodio entrega la copia, pero no dispone de la clave en ese momento. El archivo y su huella pueden preservarse; existe una ruta institucional para solicitar acceso y otras fuentes de información disponibles. El despacho pide certificar que el contenedor no incluye registros relevantes.",
    "stem": "¿Qué respuesta técnica refleja el alcance real del examen?",
    "options": [
      {
        "id": "a",
        "text": "Certificar ausencia de registros relevantes porque la herramienta de análisis no pudo leer el contenido y no produjo resultados al consultar.",
        "rationale": "No poder leer el contenido no significa que el contenido esté vacío o sea irrelevante."
      },
      {
        "id": "b",
        "text": "Preservar el contenedor y huella, gestionar acceso autorizado, contrastar fuentes disponibles y declarar que el contenido aún no pudo examinarse.",
        "rationale": "La preservación y documentación permiten mantener la fuente y gestionar acceso dentro de la autorización."
      },
      {
        "id": "c",
        "text": "Transformar el contenedor original a otro formato para facilitar su apertura y sustituir el soporte preservado por la nueva versión resultante.",
        "rationale": "Modificar el original sin preservar su versión inicial compromete trazabilidad y reproducibilidad."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: NIST SP 800-86; Ley 527/1999, arts. 9–12. La preservación y documentación permiten mantener la fuente y gestionar acceso dentro de la autorización. No poder leer el contenido no significa que el contenido esté vacío o sea irrelevante. Modificar el original sin preservar su versión inicial compromete trazabilidad y reproducibilidad.",
    "sourceIds": [
      "nist-sp-800-86",
      "ley-527-1999",
      "ley-1952-2019"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-firma-terceros-1",
    "moduleId": "pgn-m63",
    "relatedModuleIds": [
      "pgn-m40",
      "pgn-m44",
      "pgn-m60",
      "pgn-m61",
      "pgn-m63",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-firma-terceros",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un PDF firmado digitalmente hace dos años fue incorporado al expediente. El certificado aparece vencido al consultarlo hoy; existe un sello temporal verificable y documentación histórica de la cadena y estado de revocación. El archivo conserva la firma original. Un analista propone declarar falso el PDF únicamente por la fecha actual de vencimiento.",
    "stem": "¿Qué comprobación corresponde antes de concluir sobre la validez de la firma?",
    "options": [
      {
        "id": "a",
        "text": "Rechazar la firma por la expiración actual del certificado y pedir al firmante que vuelva a firmar el PDF para darle validez retrospectiva.",
        "rationale": "La expiración actual no determina automáticamente el estado del certificado en el momento de firma."
      },
      {
        "id": "b",
        "text": "Aceptar el PDF como auténtico por contener un sello temporal, sin validar la integridad, la cadena ni el estado del certificado al firmar.",
        "rationale": "El sello temporal es un elemento que también debe verificarse y no sustituye los demás controles."
      },
      {
        "id": "c",
        "text": "Verificar integridad, sello temporal, cadena y estado histórico de revocación del certificado conforme a la política aplicable, dejando constancia de evidencias y límites.",
        "rationale": "La validación histórica distingue fecha de análisis de fecha de firma con evidencia confiable."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Ley 527/1999, arts. 7–12, 28 y 35; NIST SP 800-92. La validación histórica distingue fecha de análisis de fecha de firma con evidencia confiable. La expiración actual no determina automáticamente el estado del certificado en el momento de firma. El sello temporal es un elemento que también debe verificarse y no sustituye los demás controles.",
    "sourceIds": [
      "ley-527-1999",
      "nist-sp-800-92",
      "nist-sp-800-86"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-firma-terceros-2",
    "moduleId": "pgn-m63",
    "relatedModuleIds": [
      "pgn-m40",
      "pgn-m44",
      "pgn-m60",
      "pgn-m61",
      "pgn-m63",
      "pgn-m64"
    ],
    "scenarioId": "pgn-exception-firma-terceros",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un proveedor de software en la nube entrega registros con hora UTC y retención de treinta días. La entidad conserva eventos locales expresados en hora de Colombia y registros de solicitudes del mismo sistema. Un intervalo está fuera de retención del proveedor. El analista interpreta la falta de eventos como prueba de que no ocurrió actividad en ese intervalo.",
    "stem": "¿Qué tratamiento permite correlacionar los registros sin confundir ausencia de evidencia y ausencia de actividad?",
    "options": [
      {
        "id": "a",
        "text": "Normalizar las marcas temporales, verificar retención y alcance de exportación, correlacionar identificadores y declarar el intervalo sin cobertura del proveedor.",
        "rationale": "La normalización y cobertura deben verificarse antes de interpretar vacíos o asociar eventos."
      },
      {
        "id": "b",
        "text": "Convertir los registros locales a UTC y asumir que la ausencia del evento externo confirma que la solicitud nunca llegó al servicio.",
        "rationale": "La conversión temporal no recupera registros que ya no están disponibles por retención."
      },
      {
        "id": "c",
        "text": "Usar únicamente la fuente del proveedor por ser externa e independiente, descartando todos los registros locales cuya zona horaria sea diferente.",
        "rationale": "Una diferencia de zona horaria es tratable y no invalida por sí sola una fuente local."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Ley 527/1999, arts. 7–12, 28 y 35; NIST SP 800-92. La normalización y cobertura deben verificarse antes de interpretar vacíos o asociar eventos. La conversión temporal no recupera registros que ya no están disponibles por retención. Una diferencia de zona horaria es tratable y no invalida por sí sola una fuente local.",
    "sourceIds": [
      "ley-527-1999",
      "nist-sp-800-92",
      "nist-sp-800-86"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-excel-cruces-1",
    "moduleId": "pgn-m66",
    "relatedModuleIds": [
      "pgn-m60",
      "pgn-m62",
      "pgn-m66",
      "pgn-m67"
    ],
    "scenarioId": "pgn-exception-excel-cruces",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una tabla contiene una fila por expediente y un valor de 100 millones para el expediente A. La tabla de actuaciones contiene tres filas válidas asociadas a A. En Power Query se combinan ambas por expediente y se expanden las tres coincidencias. El tablero suma la columna original de valor y presenta 300 millones para A.",
    "stem": "¿Qué corrección conserva las actuaciones sin multiplicar el valor del expediente?",
    "options": [
      {
        "id": "a",
        "text": "Eliminar dos actuaciones duplicadas por identificador de expediente y conservar la restante para que la suma vuelva a cien millones.",
        "rationale": "Las tres actuaciones son legítimas y no deben eliminarse solo por compartir identificador."
      },
      {
        "id": "b",
        "text": "Mantener la granularidad de actuaciones y calcular importes desde la tabla de expedientes o una agregación que no duplique su valor.",
        "rationale": "La expansión uno a varios replica el importe; el cálculo debe respetar la unidad de análisis."
      },
      {
        "id": "c",
        "text": "Dividir todos los importes de la tabla resultante entre tres, aplicando ese factor a expedientes con cualquier número de actuaciones.",
        "rationale": "El factor tres es particular de A y no corrige cardinalidades diferentes."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Microsoft Learn, Power Query: combinación y tipos de datos. La expansión uno a varios replica el importe; el cálculo debe respetar la unidad de análisis. Las tres actuaciones son legítimas y no deben eliminarse solo por compartir identificador. El factor tres es particular de A y no corrige cardinalidades diferentes.",
    "sourceIds": [
      "office-power-query-merge",
      "office-power-query-types"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-excel-cruces-2",
    "moduleId": "pgn-m66",
    "relatedModuleIds": [
      "pgn-m60",
      "pgn-m62",
      "pgn-m66",
      "pgn-m67"
    ],
    "scenarioId": "pgn-exception-excel-cruces",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un archivo CSV estadounidense registra la fecha 03/04/2026 con formato mes/día/año. Un libro institucional usa día/mes/año. Al importar con configuración regional colombiana, el valor aparece como 3 de abril sin error de conversión. Se necesita calcular vencimientos y se conserva el texto original del CSV y su especificación de formato.",
    "stem": "¿Cómo corregir la interpretación antes de calcular los términos?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el formato visual de la fecha ya convertida a mes/día/año, confiando en que Excel ajustará el significado de la fecha almacenada.",
        "rationale": "Cambiar formato de pantalla no modifica necesariamente el valor de fecha ya interpretado."
      },
      {
        "id": "b",
        "text": "Mantener la fecha importada porque ambos números son válidos y el motor no produjo un error que indique una conversión incorrecta.",
        "rationale": "Una conversión válida sintácticamente puede representar una fecha distinta de la fuente."
      },
      {
        "id": "c",
        "text": "Reimportar el texto original con la configuración regional estadounidense, verificar que la fecha corresponda al 4 de marzo y documentar la conversión aplicada.",
        "rationale": "El formato conocido permite interpretar correctamente el dato y conservar trazabilidad."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Microsoft Learn, Power Query: combinación y tipos de datos. El formato conocido permite interpretar correctamente el dato y conservar trazabilidad. Cambiar formato de pantalla no modifica necesariamente el valor de fecha ya interpretado. Una conversión válida sintácticamente puede representar una fecha distinta de la fuente.",
    "sourceIds": [
      "office-power-query-merge",
      "office-power-query-types"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-datos-denominadores-1",
    "moduleId": "pgn-m67",
    "relatedModuleIds": [
      "pgn-m66",
      "pgn-m67",
      "pgn-m68",
      "pgn-m69"
    ],
    "scenarioId": "pgn-exception-datos-denominadores",
    "type": "pjs",
    "difficulty": 5,
    "case": "La sede A resolvió oportunamente 90 de 100 solicitudes y la sede B, 5 de 10. Ambas usan la misma definición y las poblaciones no se superponen. El informe calcula el promedio simple de 90 % y 50 % y anuncia un cumplimiento global de 70 %. Se requiere informar la proporción sobre todas las solicitudes.",
    "stem": "¿Qué cálculo representa el cumplimiento global del conjunto descrito?",
    "options": [
      {
        "id": "a",
        "text": "Sumar los numeradores y denominadores compatibles: 95 respuestas oportunas de 110 solicitudes, aproximadamente 86,36 %, informando también los resultados por sede.",
        "rationale": "El denominador global es 110 y el numerador compatible es 95."
      },
      {
        "id": "b",
        "text": "Promediar 90 % y 50 % para obtener 70 %, porque ambas sedes deben tener el mismo peso como unidades organizacionales.",
        "rationale": "El promedio simple describe una media entre sedes, no la proporción de solicitudes global."
      },
      {
        "id": "c",
        "text": "Dividir las 95 respuestas oportunas entre las 100 solicitudes de la sede mayor, porque esta representa la mayor parte de la población.",
        "rationale": "Excluir el denominador de B mientras se incluye su numerador distorsiona la proporción."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Método estadístico descriptivo; Microsoft Excel y Power Query. El denominador global es 110 y el numerador compatible es 95. El promedio simple describe una media entre sedes, no la proporción de solicitudes global. Excluir el denominador de B mientras se incluye su numerador distorsiona la proporción.",
    "sourceIds": [
      "office-excel-sumifs",
      "office-power-query-types"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-datos-denominadores-2",
    "moduleId": "pgn-m67",
    "relatedModuleIds": [
      "pgn-m66",
      "pgn-m67",
      "pgn-m68",
      "pgn-m69"
    ],
    "scenarioId": "pgn-exception-datos-denominadores",
    "type": "pjs",
    "difficulty": 5,
    "case": "Un informe sobre tiempos de respuesta registra 80 expedientes con tiempo medido y 20 sin dato por una falla del sistema. El analista reemplaza los veinte vacíos con cero días y obtiene una media inferior a la anterior. No existe evidencia de que esos expedientes se hayan resuelto el mismo día ni de que los faltantes sean aleatorios.",
    "stem": "¿Cómo informar el resultado sin convertir valores desconocidos en respuestas instantáneas?",
    "options": [
      {
        "id": "a",
        "text": "Imputar cero en los faltantes para mantener el denominador de cien y declarar que todos los expedientes están representados en la media.",
        "rationale": "Cero es un valor observado o imputado bajo una hipótesis, no un dato desconocido."
      },
      {
        "id": "b",
        "text": "Calcular la media observada sobre los 80 casos, informar cobertura y faltantes, y revisar su posible sesgo antes de generalizar.",
        "rationale": "El cálculo sobre casos observados debe acompañarse de cobertura y limitaciones de representatividad."
      },
      {
        "id": "c",
        "text": "Eliminar de la base original los veinte registros sin dato y publicar el resultado de los casos completos como promedio de toda la población.",
        "rationale": "Eliminar registros oculta el faltante y no justifica generalizar el resultado."
      }
    ],
    "correctOptionId": "b",
    "explanation": "Fundamento: Método estadístico descriptivo; Microsoft Excel y Power Query. El cálculo sobre casos observados debe acompañarse de cobertura y limitaciones de representatividad. Cero es un valor observado o imputado bajo una hipótesis, no un dato desconocido. Eliminar registros oculta el faltante y no justifica generalizar el resultado.",
    "sourceIds": [
      "office-excel-sumifs",
      "office-power-query-types"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-dilemas-competencias-1",
    "moduleId": "pgn-m72",
    "relatedModuleIds": [
      "pgn-m70",
      "pgn-m71",
      "pgn-m72",
      "pgn-m73"
    ],
    "scenarioId": "pgn-exception-dilemas-competencias",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una coordinación necesita un informe de resultados antes de una reunión. La mayoría de las cifras está validada, pero dos indicadores requieren cotejo con otra dependencia y el procedimiento exige revisión antes de publicación. Existe posibilidad de entregar un avance interno claramente identificado y acordar una fecha breve para el informe definitivo. El equipo dispone de apoyo temporal.",
    "stem": "¿Qué conducta integra mejor orientación a resultados y cumplimiento de parámetros en este ejercicio formativo?",
    "options": [
      {
        "id": "a",
        "text": "Concentrar recursos en terminar el informe definitivo y pedir aplazar la reunión, evitando entregar cualquier avance hasta concluir todas las verificaciones.",
        "rationale": "Aplazar puede ser razonable, pero no aprovecha la alternativa permitida para atender la necesidad inmediata."
      },
      {
        "id": "b",
        "text": "Entregar un avance interno con cifras validadas y mantener la programación inicial de revisiones, esperando que la otra dependencia responda por su canal habitual.",
        "rationale": "El avance es útil, pero mantener sin ajuste la programación no aborda el riesgo de demora."
      },
      {
        "id": "c",
        "text": "Acordar un avance interno verificable, reorganizar recursos disponibles y coordinar el cotejo pendiente con responsables y plazo para la entrega definitiva conforme al procedimiento.",
        "rationale": "Combina entrega útil, gestión proactiva de recursos, coordinación y cumplimiento de controles."
      }
    ],
    "correctOptionId": "c",
    "explanation": "Fundamento: Diccionario de competencias PGN: Orientación a Resultados A y Cumplimiento de Parámetros B. Combina entrega útil, gestión proactiva de recursos, coordinación y cumplimiento de controles. Aplazar puede ser razonable, pero no aprovecha la alternativa permitida para atender la necesidad inmediata. El avance es útil, pero mantener sin ajuste la programación no aborda el riesgo de demora.",
    "sourceIds": [
      "pgn-diccionario-competencias",
      "pgn-convocatoria-104-v4"
    ],
    "verifiedAt": "2026-11-23"
  },
  {
    "id": "pgn-exception-dilemas-competencias-2",
    "moduleId": "pgn-m72",
    "relatedModuleIds": [
      "pgn-m70",
      "pgn-m71",
      "pgn-m72",
      "pgn-m73"
    ],
    "scenarioId": "pgn-exception-dilemas-competencias",
    "type": "pjs",
    "difficulty": 5,
    "case": "Una oficina supera su meta de número de expedientes revisados, pero una muestra revela que los tiempos de revisión bajaron a costa de omitir comprobaciones que luego generan reprocesos. La coordinación solicita mantener la productividad. El profesional puede analizar causas, proponer ajustes de flujo y acordar indicadores de calidad sin reducir el objetivo institucional.",
    "stem": "¿Qué conducta desarrolla mejor un resultado sostenible dentro de parámetros?",
    "options": [
      {
        "id": "a",
        "text": "Analizar causas y reprocesos, acordar mejoras del flujo y medir productividad y calidad para sostener metas exigentes sin omitir controles.",
        "rationale": "Integra meta, calidad, recursos y mejora verificable, sin sacrificar parámetros."
      },
      {
        "id": "b",
        "text": "Reforzar la revisión de calidad mediante una segunda revisión de todos los expedientes, manteniendo el flujo y los recursos actuales sin evaluar capacidad.",
        "rationale": "Una segunda revisión puede ayudar, pero no analiza causa ni capacidad y puede aumentar reproceso."
      },
      {
        "id": "c",
        "text": "Mantener el indicador de volumen y añadir un reporte de errores separado, dejando los cambios del proceso para la evaluación anual.",
        "rationale": "Reportar errores mejora visibilidad, pero posterga una acción de mejora disponible ahora."
      }
    ],
    "correctOptionId": "a",
    "explanation": "Fundamento: Diccionario de competencias PGN: Orientación a Resultados A y Cumplimiento de Parámetros B. Integra meta, calidad, recursos y mejora verificable, sin sacrificar parámetros. Una segunda revisión puede ayudar, pero no analiza causa ni capacidad y puede aumentar reproceso. Reportar errores mejora visibilidad, pero posterga una acción de mejora disponible ahora.",
    "sourceIds": [
      "pgn-diccionario-competencias",
      "pgn-convocatoria-104-v4"
    ],
    "verifiedAt": "2026-11-23"
  }
]

export const procuraduriaExceptionQuestions: Question[] = scenarios.map(q => {
  const blueprint = procuraduriaModuleBlueprints.find(bp => bp.id === q.moduleId)
  if (!blueprint) throw new Error('Caso límite sin módulo: ' + q.id)
  return { ...q, skillIds: blueprint.skillIds }
})

const lessons = [
  {
    "moduleId": "pgn-m58",
    "title": "Pérdida o destrucción del expediente",
    "article": "Art. 119",
    "rule": "La pérdida de un expediente en curso activa su reconstrucción por la autoridad competente. Debe recuperar copias, consultar a sujetos procesales y entidades que recibieron actuaciones; solo si no es posible reconstruirlo corresponde reiniciar de oficio. El daño material no equivale a archivo, ni restablece automáticamente los plazos legales. Distinguir recuperación de datos, reconstrucción procesal y valoración de cada soporte.",
    "contrast": [
      "Si existen copias verificables, reconstruir y controlar completitud y defensa.",
      "Si no es posible reconstruir tras diligencias suficientes, reiniciar de oficio y verificar procedencia, términos y garantías."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m24",
    "title": "Extinción frente a retiro o desistimiento",
    "article": "Arts. 32, 35, 89 y 90",
    "rule": "La muerte del disciplinable extingue la acción respecto de esa persona; la muerte del sancionado extingue la sanción. El retiro del cargo y el desistimiento de quien se queja no son equivalentes a fallecimiento. La actuación puede seguir contra quien ya no ejerce función pública. En expedientes con varios investigados debe delimitarse el alcance personal de la decisión.",
    "contrast": [
      "Retiro o desistimiento: comprobar el mérito y continuar si procede.",
      "Muerte acreditada: aplicar la extinción correspondiente a la persona y etapa; no extenderla a terceros."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m24",
    "title": "Renuncia y prescripción de la sanción",
    "article": "Arts. 33, 34 y 36",
    "rule": "La renuncia a la prescripción de la acción es decisión del disciplinable, mediante solicitud personal. La continuación queda limitada a dos años desde esa presentación; vencidos sin fallo expedido y ejecutoriado, procede declarar prescripción. Diferenciar ese límite de la prescripción de la sanción, que se cuenta desde la ejecutoria del fallo.",
    "contrast": [
      "Renuncia personal a la prescripción: ventana especial de dos años, no un nuevo período ordinario de cinco.",
      "Sanción ejecutoriada: término propio de cinco años, distinto de la prescripción de la acción."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m23",
    "title": "Impedimento o recusación durante la instrucción",
    "article": "Arts. 104–107",
    "rule": "La autoridad disciplinaria debe expresar inmediatamente el impedimento cuando detecte una causal, mediante escrito motivado y pruebas si es posible. El superior resuelve en tres días desde recepción. Frente a recusación, el servidor manifiesta aceptación o rechazo dentro de dos días y sigue la remisión. La actuación se suspende desde la manifestación o presentación hasta la decisión. No confundir el trámite con el régimen general del CPACA.",
    "contrast": [
      "Impedimento: manifestación propia, remisión inmediata al superior.",
      "Recusación: solicitud de sujeto procesal con fundamento y prueba; suspensión desde presentación."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m27",
    "title": "Ruptura de la unidad procesal",
    "article": "Arts. 162 y 214",
    "rule": "El art. 214 prevé separación de actuaciones cuando concurren sus supuestos: identificación parcial de intervinientes, fuero que cambia competencia, nulidad parcial, aparición en juzgamiento de otra falta o persona y confesión en los eventos legales. La ruptura no produce por sí sola nulidad si preserva garantías. Una confesión parcial exige atender también el art. 162.",
    "contrast": [
      "Identificación de algunos intervinientes: puede separarse sin cerrar la ruta respecto de los no identificados.",
      "Otra conducta o persona advertida por prueba sobreviniente en juicio: copias para nueva acción separada; no ampliar informalmente el juicio."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m22",
    "title": "Fuerza mayor, caso fortuito y error",
    "article": "Arts. 9, 10, 31 y 90",
    "rule": "La fuerza mayor y el caso fortuito son causales de exclusión, pero su invocación exige verificar la relación entre el evento y el deber incumplido. El art. 31 también contempla error invencible y diferencia el error de hecho vencible (culpa si la falta admite esa modalidad) del error de derecho vencible. Si se demuestra plenamente una causal de exclusión, el art. 90 permite terminar motivadamente la actuación.",
    "contrast": [
      "Imposibilidad acreditada de cumplir: valorar causal y relación con el deber específico.",
      "Evento extraordinario con alternativa real y accesible: investigar exigibilidad y cuidado; no presumir responsabilidad ni exclusión."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m33",
    "title": "Práctica excepcional de pruebas",
    "article": "Arts. 118, 152–154",
    "rule": "Diligencias virtuales en lugar diferente al del conductor del proceso requieren control material por otro servidor público en el lugar de evacuación y constancia en acta (art. 118). En territorio extranjero rigen las normas aplicables; el art. 153 contempla autorización del Procurador General para traslado, atendiendo naturaleza y urgencia, con avisos diplomáticos previos. La prueba trasladada desde otra actuación tiene su propia vía del art. 154.",
    "contrast": [
      "Diligencia virtual en otra sede: control material local y constancia.",
      "Diligencia presencial extranjera: verificar régimen, autorización y avisos previos; traslado de prueba existente es figura diferente."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m43",
    "title": "Elementos penales descubiertos y no descubiertos",
    "article": "Arts. 154 y 157–159",
    "rule": "Distinguir prueba válidamente practicada trasladable mediante copia autorizada, elementos materiales descubiertos por Fiscalía con la acusación (aunque aún no sean prueba en juicio penal) y elementos no descubiertos o información de investigación en curso. Para estos últimos, solicitar al fiscal del caso, quien evalúa qué puede suministrar sin comprometer la investigación. El traslado exige garantías de contradicción y apreciación conforme al CGD.",
    "contrast": [
      "Elementos descubiertos con acusación: pueden trasladarse y someterse a contradicción disciplinaria.",
      "Elementos no descubiertos: solicitud al fiscal y evaluación de entrega; no exigencia indiscriminada."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m42",
    "title": "Peritos discrepantes y recusación",
    "article": "Arts. 178–180",
    "rule": "Si varios peritos designados discrepan tras su trabajo conjunto, cada uno emite dictamen separado (art. 179), sin decidir responsabilidad. La recusación del perito debe motivarse y formularse desde su posesión hasta antes del vencimiento del plazo para emitir dictamen; el art. 178 regula reemplazo y decisión sin recurso. No es el mismo trámite que la objeción por error grave del dictamen.",
    "contrast": [
      "Discrepancia técnica: dictámenes separados, revisión del método y contradicción.",
      "Causal de recusación durante el plazo: resolver por art. 178, no esperar objeción posterior."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m17",
    "title": "Peticiones incompletas y desistimiento tácito",
    "article": "Ley 1755/2015, art. 17; Resolución PGN 330/2021, art. 19",
    "rule": "Distinguir la solicitud incompleta de una decisión desfavorable. Si falta una gestión indispensable a cargo del ciudadano, requerir dentro de diez días de la radicación, dar hasta un mes y admitir la prórroga oportuna hasta por igual término. Al completarse, el plazo de respuesta se reactiva al día siguiente; no empieza de cero. En la PGN, vencido el requerimiento sin cumplimiento ni prórroga, el jefe de dependencia suscribe el acto motivado de desistimiento dentro de los primeros cinco días hábiles, con notificación personal y reposición.",
    "contrast": [
      "Documento aportado: reactivar el plazo pendiente desde el día siguiente.",
      "Requerimiento incumplido: verificar vencimiento y prórroga; acto motivado de desistimiento, no rechazo de fondo."
    ],
    "sourceId": "ley-1755-2015"
  },
  {
    "moduleId": "pgn-m17",
    "title": "Peticiones reiterativas y subsanación",
    "article": "Ley 1755/2015, art. 19; Resolución PGN 330/2021, art. 17",
    "rule": "La identidad del asunto no basta para tratar una petición como repetida: verificar respuesta previa de fondo y excepciones. Si se negó por falta de requisitos y la nueva solicitud los satisface, debe resolverse de fondo; tampoco se utiliza la remisión automática frente a derechos imprescriptibles. Si realmente es reiterativa, la PGN vuelve a poner en conocimiento del ciudadano la respuesta anterior.",
    "contrast": [
      "Misma petición ya resuelta de fondo, sin excepción: remisión a la respuesta anterior.",
      "Nueva petición con requisitos antes faltantes: pronunciamiento de fondo."
    ],
    "sourceId": "ley-1755-2015"
  },
  {
    "moduleId": "pgn-m18",
    "title": "Insistencia por reserva y acceso entre autoridades",
    "article": "Ley 1755/2015, arts. 25–27; Resolución PGN 330/2021, art. 33",
    "rule": "Ante negativa de información por reserva legal, identificar norma y piezas restringidas; entregar lo separable. La insistencia escrita y sustentada se formula en la notificación o dentro de diez días. Contra la negativa por reserva no operan los recursos ordinarios. En el supuesto de una autoridad nacional, decide en única instancia el tribunal administrativo con jurisdicción donde están los documentos. La reserva no se opone a autoridades legalmente competentes que requieren la información para sus funciones, que deben conservarla.",
    "contrast": [
      "Ciudadano insiste frente a reserva: remisión judicial según art. 26.",
      "Autoridad competente solicita para su función: acceso con deber de mantener reserva, sin habilitar difusión pública."
    ],
    "sourceId": "ley-1755-2015"
  },
  {
    "moduleId": "pgn-m15",
    "title": "Corrección formal y cambio material del acto",
    "article": "CPACA, arts. 41 y 45",
    "rule": "Antes de expedir el acto, la autoridad corrige irregularidades de la actuación para ajustarla a derecho. Una vez expedido, el art. 45 permite corregir errores puramente formales sin alterar la decisión material ni revivir términos de demanda. Comunicar o notificar la corrección según corresponda. Cuando el cambio altera derechos o el sentido de la decisión, utilizar la figura legal procedente, no una fe de erratas.",
    "contrast": [
      "Error de digitación acreditado sin impacto material: corrección formal y comunicación.",
      "Cambio de beneficiario, monto reconocido o contenido sustancial: examinar la vía legal, no art. 45."
    ],
    "sourceId": "cpaca"
  },
  {
    "moduleId": "pgn-m16",
    "title": "Conflicto administrativo positivo o negativo",
    "article": "CPACA, art. 39, modificado por Ley 2080/2021",
    "rule": "En actuaciones administrativas generales, si dos autoridades rechazan competencia o ambas la reclaman, aplicar el art. 39; no confundir con conflicto disciplinario especial. La Sala de Consulta y Servicio Civil conoce conflictos nacionales, mixtos o entre territoriales de distintos departamentos; el tribunal administrativo correspondiente conoce los territoriales previstos en la norma. El término de petición del art. 14 queda suspendido durante el conflicto; la decisión de competencia no admite recurso.",
    "contrast": [
      "Dos autoridades municipales del mismo departamento: tribunal administrativo correspondiente.",
      "Autoridades nacional y territorial: Sala de Consulta y Servicio Civil; suspensión de términos del art. 14."
    ],
    "sourceId": "cpaca"
  },
  {
    "moduleId": "pgn-m52",
    "title": "Terminación unilateral, muerte y caducidad",
    "article": "Ley 80/1993, arts. 14, 17 y 18",
    "rule": "En contratos con cláusulas excepcionales legalmente aplicables, la muerte del contratista persona natural es causal de terminación anticipada motivada, con posibilidad legal de continuar con el garante en el supuesto del art. 17. No equivale a caducidad. Esta exige incumplimiento que afecte grave y directamente la ejecución y pueda conducir a su paralización, con decisión motivada y debido proceso. Examinar alternativas de continuidad y atribución antes de concluir responsabilidad disciplinaria.",
    "contrast": [
      "Muerte acreditada: analizar terminación y posible continuación con garante.",
      "Incumplimiento grave con riesgo de paralización: examinar caducidad, garantías y debido proceso."
    ],
    "sourceId": "ley-80-1993"
  },
  {
    "moduleId": "pgn-m52",
    "title": "Modificación unilateral y umbral del 20 %",
    "article": "Ley 80/1993, arts. 14, 16 y 40",
    "rule": "La modificación unilateral, en contratos legalmente habilitados, procede por necesidad de evitar paralización o afectación grave del servicio cuando no se logra acuerdo. Si modifica el valor en 20 % o más del inicial, el contratista puede renunciar a continuar; en ese caso se ordena liquidar y garantizar la terminación del objeto. No confundir este umbral con el límite general acumulado de adiciones del art. 40.",
    "contrast": [
      "Variación de 15 %: el umbral del art. 16 no se cumple por ese solo hecho.",
      "Variación de 20 % o más: derecho a renunciar a continuar, con las consecuencias del art. 16."
    ],
    "sourceId": "ley-80-1993"
  },
  {
    "moduleId": "pgn-m52",
    "title": "Siniestro, cobertura de garantías y responsabilidad",
    "article": "Ley 1474/2011, art. 86; Decreto 1082/2015, art. 2.2.1.2.3.1.19; Manual PGN, secciones 4.9 y 5.3",
    "rule": "Un incendio o daño físico no implica automáticamente incumplimiento imputable ni cobertura de cualquier póliza. Identificar custodia, riesgo contractual, causa, amparo, vigencia, perjuicio y deber de informar. En procedimiento de incumplimiento con póliza de cumplimiento, citar al contratista y garante y decidir con debido proceso. Diferenciar seguro de bienes de amparo de cumplimiento y de calidad posterior a la recepción. En suspensión/reinicio de contratos PGN se controlan garantías conforme al manual.",
    "contrast": [
      "Bien destruido durante ejecución: preservar soportes, determinar obligaciones y cobertura antes de imputar incumplimiento.",
      "Falla posterior al recibo a satisfacción: examinar amparo de calidad, vigencia e imputabilidad; no confundir con mora en entrega."
    ],
    "sourceId": "ley-1474-2011"
  },
  {
    "moduleId": "pgn-m51",
    "title": "Urgencia manifiesta y control posterior",
    "article": "Ley 80/1993, arts. 42–43",
    "rule": "La urgencia manifiesta requiere supuesto legal y acto motivado. Celebrados los contratos, remitir inmediatamente contratos, acto declarativo, antecedentes y pruebas al órgano de control fiscal correspondiente. Este se pronuncia dentro de dos meses sobre hechos y circunstancias de la declaración; si procede solicita investigación disciplinaria y remite otras acciones a competentes. No es autorización fiscal previa ni sanción disciplinaria automática.",
    "contrast": [
      "Contrato celebrado por urgencia: remisión inmediata del expediente al control fiscal.",
      "Hallazgo fiscal sobre uso indebido: posible solicitud de investigación y traslado, no fallo disciplinario anticipado."
    ],
    "sourceId": "ley-80-1993"
  },
  {
    "moduleId": "pgn-m27",
    "title": "Suspensión provisional y desaparición del riesgo",
    "article": "CGD, arts. 217–218",
    "rule": "En investigación o juzgamiento por faltas graves o gravísimas, la autoridad puede suspender motivadamente al servidor sin remuneración si existen elementos serios de riesgo de interferencia, continuación o reiteración. Tres meses prorrogables hasta otro tanto; otros tres tras fallo de primera o única instancia. Auto y prórrogas sujetos a consulta sin perjuicio de cumplimiento inmediato. Revocar cuando desaparezcan los motivos; distinguir reintegro y remuneraciones en los supuestos del art. 218.",
    "contrast": [
      "Riesgo serio acreditado: evaluar medida motivada y consulta, sin anticipar responsabilidad.",
      "Motivos desaparecidos: revocar; no mantener la medida hasta el término por simple inercia."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m13",
    "title": "Conflicto disciplinario y relación jerárquica",
    "article": "CGD, art. 99",
    "rule": "El conflicto especial se tramita con el funcionario que recibe la actuación y, si no acepta competencia, ante el superior común inmediato. El inferior no puede promover conflicto al superior, pero puede exponer sus razones para que este resuelva de plano. No trasladar automáticamente la regla del art. 39 CPACA al proceso disciplinario.",
    "contrast": [
      "Dos funcionarios del mismo nivel rechazan competencia: superior común inmediato.",
      "Inferior discrepa del superior: expone razones, sin promover conflicto contra este."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m27",
    "title": "Términos de investigación y prueba decisiva pendiente",
    "article": "CGD, art. 213",
    "rule": "Investigación ordinaria de seis meses; posible prórroga hasta otro tanto por varias faltas o dos o más disciplinables en la misma actuación. En infracciones al DIDH o DIH, límite de dieciocho meses. Si faltan pruebas que pueden modificar la situación jurídica, el art. 213 permite hasta tres meses adicionales; verificar requisitos, motivación y prescripción. Si vencido ese término no surge prueba que permita formular cargos, procede archivo definitivo.",
    "contrast": [
      "Pluralidad real de faltas o disciplinables: examinar prórroga ordinaria motivada.",
      "Prueba decisiva pendiente: evaluar la extensión adicional específica, no una prórroga genérica por carga laboral."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m41",
    "title": "Fallecimiento del testigo y contradicción imposible",
    "article": "CGD, arts. 147, 154, 157–159",
    "rule": "La muerte de un testigo no anula automáticamente una declaración válidamente practicada y controvertida. Distinguir esa prueba de una manifestación informal no recibida como testimonio ni sometida a contradicción. Preservar documentos, evaluar naturaleza, legalidad, oportunidad de contradicción y corroboración; no convertir una entrevista privada en testimonio procesal por la sola imposibilidad de repetirla.",
    "contrast": [
      "Testimonio practicado legalmente y controvertido antes del fallecimiento: valorar junto a las demás pruebas.",
      "Relato informal sin contradicción: examinar naturaleza, admisibilidad y límites, buscar corroboración."
    ],
    "sourceId": "ley-1952-2019"
  },
  {
    "moduleId": "pgn-m45",
    "title": "Mitigación de emergencia y solicitud de suspensión",
    "article": "Constitución, art. 277; Resolución PGN 132/2014; CGD, art. 219",
    "rule": "La prevención distingue anticipación, mitigación/restitución y orientación. Ante amenaza actual, requerir actuación de responsables, verificar respuesta y coordinar remisiones sin sustituir gestión. Diferenciar la vigilancia preventiva general de la facultad del art. 219: en diligencias disciplinarias PGN o personerías pueden solicitar suspensión de procedimientos, actos, contratos o ejecución ante indicios legales, sin asumir la competencia decisoria del administrador.",
    "contrast": [
      "Amenaza actual: actuación preventiva de mitigación y seguimiento a competentes.",
      "Diligencia disciplinaria con riesgo legal o patrimonial: examinar solicitud de suspensión del art. 219."
    ],
    "sourceId": "constitucion"
  },
  {
    "moduleId": "pgn-m56",
    "title": "Pérdida de bienes y resarcimiento fiscal",
    "article": "Ley 610/2000, arts. 5, 7 y 16; CGD, arts. 9–10",
    "rule": "La pérdida o daño distinto del desgaste natural de bienes en servicio o no dados de baja requiere relación directa con actos propios de gestión fiscal para derivar responsabilidad fiscal (art. 7). Examinar daño, conducta y nexo; la guarda material no basta para identificar gestor fiscal. Resarcimiento total acreditado permite archivo fiscal según art. 16; no extingue automáticamente una acción disciplinaria autónoma.",
    "contrast": [
      "Pérdida de bien: verificar funciones de gestión fiscal y deberes individuales de custodia.",
      "Resarcimiento total: efecto fiscal específico, sin automatizar el cierre disciplinario."
    ],
    "sourceId": "ley-610-2000"
  },
  {
    "moduleId": "pgn-m57",
    "title": "Independencia de control interno y fallas reiteradas",
    "article": "Ley 87/1993, arts. 6 y 12",
    "rule": "Control interno evalúa y recomienda, no autoriza ni refrenda procedimientos administrativos. La responsabilidad de aplicar controles corresponde también a jefes de dependencias. Diferenciar corregir un hallazgo concreto de eliminar su causa mediante acción correctiva y comprobar eficacia posterior.",
    "contrast": [
      "Control interno detecta riesgo: evaluar, recomendar y seguir; la administración ejecuta controles.",
      "Hallazgo repetido tras corrección: investigar causa, rediseñar control y comprobar eficacia."
    ],
    "sourceId": "ley-87-1993"
  },
  {
    "moduleId": "pgn-m44",
    "title": "Respaldo dañado, cifrado y preservación",
    "article": "NIST SP 800-86; Ley 527/1999, arts. 9–12",
    "rule": "Una copia con hash coincidente no prueba que sus archivos sean recuperables. Preservar el original, verificar restauración en entorno aislado y explorar fuentes independientes. Un contenedor cifrado puede ser preservado sin acceso a su contenido: documentar huella, permisos, limitaciones y gestionar claves por vía autorizada. No equiparar inaccesibilidad, alteración y ausencia de evidencia.",
    "contrast": [
      "Respaldo íntegro pero ilegible: comprobar recuperabilidad y otras fuentes.",
      "Contenedor cifrado: preservar bytes, buscar acceso autorizado y declarar límites."
    ],
    "sourceId": "nist-sp-800-86"
  },
  {
    "moduleId": "pgn-m63",
    "title": "Certificados vencidos, tiempos y servicios de terceros",
    "article": "Ley 527/1999, arts. 7–12, 28 y 35; NIST SP 800-92",
    "rule": "El vencimiento actual de un certificado no prueba que la firma fuese inválida al generarse. Verificar integridad, cadena, estado de revocación, fecha de firma respaldada por fuente confiable y política aplicable; si no hay evidencia histórica suficiente, declarar incertidumbre. En registros de proveedor externo, identificar zona horaria, reloj, ventana de retención, alcance, procedencia y trazabilidad de exportación; no inferir autoría solo por una marca temporal.",
    "contrast": [
      "Certificado expirado hoy: comprobar validez histórica y evidencia temporal.",
      "Logs de tercero: verificar tiempo, cobertura y relación con fuentes internas."
    ],
    "sourceId": "ley-527-1999"
  },
  {
    "moduleId": "pgn-m66",
    "title": "Cruces de tablas, duplicados y fechas ambiguas",
    "article": "Microsoft Learn, Power Query: combinación y tipos de datos",
    "rule": "Antes de combinar tablas, definir unidad de análisis, clave y cardinalidad. Una relación uno a varios puede multiplicar filas al expandir coincidencias y duplicar importes. Duplicados de identificador pueden ser eventos legítimos. Convertir fechas con configuración regional explícita y conservar el valor original para auditoría.",
    "contrast": [
      "Una clave con dos coincidencias: comprobar granularidad y reconciliar totales tras expandir.",
      "Fecha 03/04/2026: verificar formato de origen antes de interpretar mes y día."
    ],
    "sourceId": "office-power-query-merge"
  },
  {
    "moduleId": "pgn-m67",
    "title": "Promedios ponderados y datos ausentes",
    "article": "Método estadístico descriptivo; Microsoft Excel y Power Query",
    "rule": "Para combinar tasas, sumar numeradores y denominadores cuando las poblaciones son compatibles y disjuntas; promedio simple de tasas solo equivale al global con tamaños iguales. No confundir datos faltantes con cero. Reportar cobertura, reglas de exclusión, sensibilidad y límites del resultado.",
    "contrast": [
      "Tasas de grupos de tamaños distintos: ponderar por denominadores.",
      "Datos sin respuesta: cuantificar faltantes, no imputar cero sin justificación."
    ],
    "sourceId": "office-excel-sumifs"
  },
  {
    "moduleId": "pgn-m72",
    "title": "Resultados bajo presión y parámetros institucionales",
    "article": "Diccionario de competencias PGN: Orientación a Resultados A y Cumplimiento de Parámetros B",
    "rule": "Ejercicios formativos, no escala psicométrica. Orientación a resultados de nivel A requiere metas exigentes y administración de recursos; cumplimiento de parámetros B integra criterios y objetivos con procedimientos. Ante presión, buscar alternativas permitidas, acordar prioridades y advertir límites. Distinguir desempeño rápido de resultado sostenible y calidad verificable.",
    "contrast": [
      "Plazo exigente con control pendiente: reorganizar recursos y acordar entrega verificable.",
      "Resultado parcial con incertidumbre: comunicar alcance y gestionar validación, sin ocultar límites."
    ],
    "sourceId": "pgn-diccionario-competencias"
  }
]
export function exceptionLessonSources(moduleId: string): string[] {
  return [...new Set(scenarios.filter(q => q.moduleId === moduleId).flatMap(q => q.sourceIds))]
}

export function exceptionLessonBlocks(moduleId: string): LessonBlock[] {
  return lessons.filter(l => l.moduleId === moduleId).flatMap(l => [
    { type: 'article' as const, title: l.title, article: l.article, text: l.rule, sourceId: l.sourceId },
    { type: 'comparison' as const, title: 'Cambio de supuesto · ' + l.title, columns: ['Supuesto y decisión'], rows: l.contrast.map(text => [text]) },
  ])
}
