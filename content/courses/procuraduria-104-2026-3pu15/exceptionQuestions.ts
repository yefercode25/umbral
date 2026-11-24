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
    ]
  },
  {
    "moduleId": "pgn-m24",
    "title": "Extinción frente a retiro o desistimiento",
    "article": "Arts. 32, 35, 89 y 90",
    "rule": "La muerte del disciplinable extingue la acción respecto de esa persona; la muerte del sancionado extingue la sanción. El retiro del cargo y el desistimiento de quien se queja no son equivalentes a fallecimiento. La actuación puede seguir contra quien ya no ejerce función pública. En expedientes con varios investigados debe delimitarse el alcance personal de la decisión.",
    "contrast": [
      "Retiro o desistimiento: comprobar el mérito y continuar si procede.",
      "Muerte acreditada: aplicar la extinción correspondiente a la persona y etapa; no extenderla a terceros."
    ]
  },
  {
    "moduleId": "pgn-m24",
    "title": "Renuncia y prescripción de la sanción",
    "article": "Arts. 33, 34 y 36",
    "rule": "La renuncia a la prescripción de la acción es decisión del disciplinable, mediante solicitud personal. La continuación queda limitada a dos años desde esa presentación; vencidos sin fallo expedido y ejecutoriado, procede declarar prescripción. Diferenciar ese límite de la prescripción de la sanción, que se cuenta desde la ejecutoria del fallo.",
    "contrast": [
      "Renuncia personal a la prescripción: ventana especial de dos años, no un nuevo período ordinario de cinco.",
      "Sanción ejecutoriada: término propio de cinco años, distinto de la prescripción de la acción."
    ]
  },
  {
    "moduleId": "pgn-m23",
    "title": "Impedimento o recusación durante la instrucción",
    "article": "Arts. 104–107",
    "rule": "La autoridad disciplinaria debe expresar inmediatamente el impedimento cuando detecte una causal, mediante escrito motivado y pruebas si es posible. El superior resuelve en tres días desde recepción. Frente a recusación, el servidor manifiesta aceptación o rechazo dentro de dos días y sigue la remisión. La actuación se suspende desde la manifestación o presentación hasta la decisión. No confundir el trámite con el régimen general del CPACA.",
    "contrast": [
      "Impedimento: manifestación propia, remisión inmediata al superior.",
      "Recusación: solicitud de sujeto procesal con fundamento y prueba; suspensión desde presentación."
    ]
  },
  {
    "moduleId": "pgn-m27",
    "title": "Ruptura de la unidad procesal",
    "article": "Arts. 162 y 214",
    "rule": "El art. 214 prevé separación de actuaciones cuando concurren sus supuestos: identificación parcial de intervinientes, fuero que cambia competencia, nulidad parcial, aparición en juzgamiento de otra falta o persona y confesión en los eventos legales. La ruptura no produce por sí sola nulidad si preserva garantías. Una confesión parcial exige atender también el art. 162.",
    "contrast": [
      "Identificación de algunos intervinientes: puede separarse sin cerrar la ruta respecto de los no identificados.",
      "Otra conducta o persona advertida por prueba sobreviniente en juicio: copias para nueva acción separada; no ampliar informalmente el juicio."
    ]
  },
  {
    "moduleId": "pgn-m22",
    "title": "Fuerza mayor, caso fortuito y error",
    "article": "Arts. 9, 10, 31 y 90",
    "rule": "La fuerza mayor y el caso fortuito son causales de exclusión, pero su invocación exige verificar la relación entre el evento y el deber incumplido. El art. 31 también contempla error invencible y diferencia el error de hecho vencible (culpa si la falta admite esa modalidad) del error de derecho vencible. Si se demuestra plenamente una causal de exclusión, el art. 90 permite terminar motivadamente la actuación.",
    "contrast": [
      "Imposibilidad acreditada de cumplir: valorar causal y relación con el deber específico.",
      "Evento extraordinario con alternativa real y accesible: investigar exigibilidad y cuidado; no presumir responsabilidad ni exclusión."
    ]
  },
  {
    "moduleId": "pgn-m33",
    "title": "Práctica excepcional de pruebas",
    "article": "Arts. 118, 152–154",
    "rule": "Diligencias virtuales en lugar diferente al del conductor del proceso requieren control material por otro servidor público en el lugar de evacuación y constancia en acta (art. 118). En territorio extranjero rigen las normas aplicables; el art. 153 contempla autorización del Procurador General para traslado, atendiendo naturaleza y urgencia, con avisos diplomáticos previos. La prueba trasladada desde otra actuación tiene su propia vía del art. 154.",
    "contrast": [
      "Diligencia virtual en otra sede: control material local y constancia.",
      "Diligencia presencial extranjera: verificar régimen, autorización y avisos previos; traslado de prueba existente es figura diferente."
    ]
  },
  {
    "moduleId": "pgn-m43",
    "title": "Elementos penales descubiertos y no descubiertos",
    "article": "Arts. 154 y 157–159",
    "rule": "Distinguir prueba válidamente practicada trasladable mediante copia autorizada, elementos materiales descubiertos por Fiscalía con la acusación (aunque aún no sean prueba en juicio penal) y elementos no descubiertos o información de investigación en curso. Para estos últimos, solicitar al fiscal del caso, quien evalúa qué puede suministrar sin comprometer la investigación. El traslado exige garantías de contradicción y apreciación conforme al CGD.",
    "contrast": [
      "Elementos descubiertos con acusación: pueden trasladarse y someterse a contradicción disciplinaria.",
      "Elementos no descubiertos: solicitud al fiscal y evaluación de entrega; no exigencia indiscriminada."
    ]
  },
  {
    "moduleId": "pgn-m42",
    "title": "Peritos discrepantes y recusación",
    "article": "Arts. 178–180",
    "rule": "Si varios peritos designados discrepan tras su trabajo conjunto, cada uno emite dictamen separado (art. 179), sin decidir responsabilidad. La recusación del perito debe motivarse y formularse desde su posesión hasta antes del vencimiento del plazo para emitir dictamen; el art. 178 regula reemplazo y decisión sin recurso. No es el mismo trámite que la objeción por error grave del dictamen.",
    "contrast": [
      "Discrepancia técnica: dictámenes separados, revisión del método y contradicción.",
      "Causal de recusación durante el plazo: resolver por art. 178, no esperar objeción posterior."
    ]
  }
]
export function exceptionLessonBlocks(moduleId: string): LessonBlock[] {
  return lessons.filter(l => l.moduleId === moduleId).flatMap(l => [
    { type: 'article' as const, title: l.title, article: l.article, text: l.rule, sourceId: 'ley-1952-2019' },
    { type: 'comparison' as const, title: 'Cambio de supuesto · ' + l.title, columns: ['Supuesto y decisión'], rows: l.contrast.map(text => [text]) },
  ])
}
