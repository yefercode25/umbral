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
