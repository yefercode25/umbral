import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM45M54: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m45": [
    {
      "caseText": "Una procuraduría territorial conoce un riesgo de interrupción del transporte escolar antes de comenzar clases. El municipio no ha definido una solución, pero todavía tiene alternativas legales disponibles. El informe señala población rural afectada, fechas de inicio y cobertura. Un equipo propone seleccionar directamente un prestador para resolver la situación; otro considera que no puede actuar mientras no exista un daño consumado.",
      "stem": "¿Qué actuación preventiva es jurídicamente adecuada en el escenario descrito?",
      "correct": {
        "text": "Advertir y documentar el riesgo, requerir a la entidad información sobre sus alternativas y hacer seguimiento a la continuidad del servicio, sin escoger el contratista.",
        "reason": "El escenario de anticipación permite actuar antes del daño, respetando autonomía y competencia."
      },
      "other": [
        {
          "text": "Definir desde la PGN el contratista y las condiciones del servicio, porque la garantía del derecho traslada la competencia de contratación.",
          "reason": "La finalidad preventiva no habilita coadministración ni selección de contratistas."
        },
        {
          "text": "Esperar a que se interrumpan las clases para iniciar únicamente una actuación disciplinaria.",
          "reason": "La prevención no requiere una falta consumada."
        }
      ],
      "explanation": "Fundamento: Constitución art. 277; Decreto Ley 262 art. 24; Resolución PGN 132/2014 arts. 3–11. El escenario de anticipación permite actuar antes del daño, respetando autonomía y competencia. Primera alternativa incorrecta: La finalidad preventiva no habilita coadministración ni selección de contratistas. Segunda alternativa incorrecta: La prevención no requiere una falta consumada.",
      "difficulty": 4
    },
    {
      "caseText": "La interrupción de un servicio de salud ya afectó a usuarios de una localidad. Se documentan retrasos y se conoce un plan de continuidad que aún no ha sido aplicado. El operador recibe información sobre el riesgo de repetición durante la semana siguiente. La oficina propone cerrar la actuación preventiva porque el hecho dejó de ser futuro y remitir todos los casos sin seguimiento adicional.",
      "stem": "¿Cómo cambia la actuación al comprobar que el riesgo se materializó?",
      "correct": {
        "text": "Activar seguimiento de mitigación o restitución, verificar continuidad y reducción del daño, y canalizar separadamente posibles noticias disciplinarias.",
        "reason": "La Resolución 132 incluye hechos ya ocurridos en el escenario de mitigación y restitución."
      },
      "other": [
        {
          "text": "Cerrar la prevención y trasladar los hechos a disciplina, dejando pendiente el seguimiento.",
          "reason": "El daño materializado no elimina la función preventiva."
        },
        {
          "text": "Asumir temporalmente la organización de citas y la ejecución del plan de continuidad para asegurar que el prestador cumpla las medidas de mitigación.",
          "reason": "El seguimiento no transfiere gestión operativa a la PGN."
        }
      ],
      "explanation": "Fundamento: Constitución art. 277; Decreto Ley 262 art. 24; Resolución PGN 132/2014 arts. 3–11. La Resolución 132 incluye hechos ya ocurridos en el escenario de mitigación y restitución. Primera alternativa incorrecta: El daño materializado no elimina la función preventiva. Segunda alternativa incorrecta: El seguimiento no transfiere gestión operativa a la PGN.",
      "difficulty": 5
    }
  ],
  "pgn-m46": [
    {
      "caseText": "Dos dependencias de la PGN reciben reportes sobre la misma interrupción de un servicio público. Ambas tienen competencia conforme a las reglas aplicables, no existe asignación simultánea ni especial y una asumió formalmente el conocimiento primero. Las oficinas preparan requerimientos diferentes para el mismo responsable y cada una planea mantener un expediente autónomo sin coordinación.",
      "stem": "¿Qué mecanismo debe orientar el reparto y el trabajo conjunto en este supuesto?",
      "correct": {
        "text": "Aplicar el factor de primacía, remitir al despacho que asumió primero y coordinar el aporte de las demás dependencias conforme a las reglas del SIP.",
        "reason": "Los arts. 15 y 17 permiten evitar duplicidades y articular el trabajo."
      },
      "other": [
        {
          "text": "Asignar el asunto a la oficina que tenga más funcionarios aunque no sea la que asumió primero, sin decisión competente.",
          "reason": "La capacidad operativa no sustituye la regla aplicable de competencia."
        },
        {
          "text": "Mantener dos actuaciones independientes y duplicar requerimientos para demostrar mayor cobertura institucional.",
          "reason": "La duplicación no constituye coordinación."
        }
      ],
      "explanation": "Fundamento: Resolución PGN 132/2014 arts. 4, 9, 12–24. Los arts. 15 y 17 permiten evitar duplicidades y articular el trabajo. Primera alternativa incorrecta: La capacidad operativa no sustituye la regla aplicable de competencia. Segunda alternativa incorrecta: La duplicación no constituye coordinación.",
      "difficulty": 4
    },
    {
      "caseText": "Una oficina preventiva reporta veinte oficios enviados y diez reuniones realizadas sobre barreras de acceso a un servicio. No registra población afectada, línea base, medidas adoptadas por la entidad ni evidencia de reducción del riesgo. La dirección propone declarar cumplimiento total del objetivo porque se ejecutaron todas las tareas del cronograma, aunque persisten reportes ciudadanos.",
      "stem": "¿Cómo debe modificarse la medición para evaluar resultados y no solo actividad?",
      "correct": {
        "text": "Conservar los productos realizados, definir indicadores de resultado y riesgo residual, contrastar respuestas y medidas verificadas y registrar limitaciones de la evidencia.",
        "reason": "El art. 24 exige medición coherente con la gestión preventiva; productos y resultados son distintos."
      },
      "other": [
        {
          "text": "Usar el número de oficios como único indicador de eficacia porque es el dato más fácil de auditar.",
          "reason": "Un volumen de actividad no demuestra reducción de riesgo."
        },
        {
          "text": "Descartar las reuniones y oficios como datos inútiles, y declarar fracaso por los reportes sin verificar su alcance.",
          "reason": "Los productos aportan información, pero no bastan para afirmar el resultado."
        }
      ],
      "explanation": "Fundamento: Resolución PGN 132/2014 arts. 4, 9, 12–24. El art. 24 exige medición coherente con la gestión preventiva; productos y resultados son distintos. Primera alternativa incorrecta: Un volumen de actividad no demuestra reducción de riesgo. Segunda alternativa incorrecta: Los productos aportan información, pero no bastan para afirmar el resultado.",
      "difficulty": 5
    }
  ],
  "pgn-m47": [
    {
      "caseText": "Un municipio informa que alcanzó 120 atenciones de un programa dirigido a 200 personas elegibles. La base contiene 80 identificadores únicos, porque varios beneficiarios asistieron en más de una ocasión. La ficha del indicador define cobertura como personas únicas atendidas respecto de la población objetivo. El informe oficial calcula 60 % y lo usa para afirmar que se cumplió la meta de cobertura.",
      "stem": "¿Qué corrección corresponde efectuar al indicador y a su interpretación?",
      "correct": {
        "text": "Calcular cobertura de 40 % (80/200), mantener 120 atenciones como actividad y verificar la meta y calidad de datos.",
        "reason": "La definición fija numerador y denominador; 80 de 200 equivale a 40 %."
      },
      "other": [
        {
          "text": "Mantener 60 % como cobertura porque las atenciones repetidas consumen recursos y reflejan el volumen de actividad que realizó el programa institucional.",
          "reason": "Actividad y cobertura no son equivalentes."
        },
        {
          "text": "Calcular cobertura como 80/120, utilizando las atenciones realizadas como denominador.",
          "reason": "El denominador legal o metodológico es la población objetivo definida."
        }
      ],
      "explanation": "Fundamento: Resolución PGN 132/2014 arts. 10 y 24; Decreto 1499/2017; Constitución art. 209. La definición fija numerador y denominador; 80 de 200 equivale a 40 %. Primera alternativa incorrecta: Actividad y cobertura no son equivalentes. Segunda alternativa incorrecta: El denominador legal o metodológico es la población objetivo definida.",
      "difficulty": 4
    },
    {
      "caseText": "La entidad reporta más casos de vulneración después de habilitar un canal digital de denuncias. A la vez, aumentó la cobertura territorial del servicio y cambió la definición del indicador respecto del año anterior. El analista propone afirmar que la política causó un aumento de vulneraciones, sin examinar si el nuevo canal mejoró la detección ni verificar series comparables.",
      "stem": "¿Qué análisis permite formular una conclusión de control de gestión sustentable?",
      "correct": {
        "text": "Validar definiciones y comparabilidad, examinar cambios de reporte y cobertura, contrastar fuentes independientes y separar asociación temporal de causalidad.",
        "reason": "La serie cambió de medición y contexto; se requiere validar antes de inferir causa."
      },
      "other": [
        {
          "text": "Atribuir todos los nuevos casos a la política porque aparecieron después de su implementación.",
          "reason": "La precedencia temporal no demuestra causalidad."
        },
        {
          "text": "Declarar éxito sin verificar resultados porque se habilitó un canal adicional de atención.",
          "reason": "El producto digital no acredita por sí solo garantía efectiva de derechos."
        }
      ],
      "explanation": "Fundamento: Resolución PGN 132/2014 arts. 10 y 24; Decreto 1499/2017; Constitución art. 209. La serie cambió de medición y contexto; se requiere validar antes de inferir causa. Primera alternativa incorrecta: La precedencia temporal no demuestra causalidad. Segunda alternativa incorrecta: El producto digital no acredita por sí solo garantía efectiva de derechos.",
      "difficulty": 5
    }
  ],
  "pgn-m48": [
    {
      "caseText": "En un proceso contencioso administrativo se discute una decisión que puede afectar recursos públicos. El agente del Ministerio Público solicita un informe técnico para evaluar una medida cautelar. El profesional de apoyo identifica soportes relevantes, pero su jefe propone emitir desde la oficina una orden directa a la entidad demandada para ejecutar la medida antes de que el juez resuelva.",
      "stem": "¿Qué actuación respeta el objeto de la intervención y la autoridad que decide?",
      "correct": {
        "text": "Sustentar la solicitud del agente habilitado ante el juez, quien conserva la competencia para decidir la medida cautelar.",
        "reason": "La intervención permite defender intereses públicos mediante actuaciones legalmente habilitadas, no sustituir al juez."
      },
      "other": [
        {
          "text": "Expedir una orden cautelar temporal desde la oficina y comunicarla después al juez.",
          "reason": "El interés público no transfiere la potestad judicial."
        },
        {
          "text": "Limitarse a remitir documentos sin concepto, para no invadir la competencia judicial.",
          "reason": "La autonomía judicial no excluye la intervención legal."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 118, 277.7 y 278; Decreto Ley 262/2000; CPACA art. 303. La intervención permite defender intereses públicos mediante actuaciones legalmente habilitadas, no sustituir al juez. Primera alternativa incorrecta: El interés público no transfiere la potestad judicial. Segunda alternativa incorrecta: La autonomía judicial no excluye la intervención legal.",
      "difficulty": 4
    },
    {
      "caseText": "Durante una intervención judicial, un informe técnico identifica una inconsistencia en registros institucionales que también podría tener relevancia disciplinaria. El agente debe presentar su concepto dentro de un término próximo. Un compañero propone suspender unilateralmente el trámite judicial hasta finalizar una investigación interna; otro desea ignorar el hallazgo porque no fue el objeto inicial del informe.",
      "stem": "¿Cómo deben tratarse los objetos misionales concurrentes?",
      "correct": {
        "text": "Documentar el hallazgo, sustentar la intervención y canalizar la noticia disciplinaria al competente, sin suspender unilateralmente el proceso judicial.",
        "reason": "La autonomía de funciones permite tratar hechos comunes en rutas distintas, con garantías y competencia."
      },
      "other": [
        {
          "text": "Solicitar que la PGN suspenda directamente el proceso judicial mientras el despacho disciplinario comprueba la inconsistencia y decide si procede abrir otra actuación.",
          "reason": "La oficina no controla unilateralmente el término judicial."
        },
        {
          "text": "Excluir la inconsistencia del concepto y no canalizarla por otra vía, porque el objeto inicial de la intervención no comprendía posibles faltas disciplinarias.",
          "reason": "Separar objetos no obliga a ocultar información relevante."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 118, 277.7 y 278; Decreto Ley 262/2000; CPACA art. 303. La autonomía de funciones permite tratar hechos comunes en rutas distintas, con garantías y competencia. Primera alternativa incorrecta: La oficina no controla unilateralmente el término judicial. Segunda alternativa incorrecta: Separar objetos no obliga a ocultar información relevante.",
      "difficulty": 5
    }
  ],
  "pgn-m49": [
    {
      "caseText": "Una persona con discapacidad auditiva acude a una oficina de atención para formular una queja. Manifiesta que prefiere comunicarse por escrito y solicita confirmar la información radicada. La oficina solo ofrece conversación oral y le pide volver con un familiar, aunque dispone de un canal escrito accesible y puede entregar constancia de radicación sin intervención de terceros.",
      "stem": "¿Cuál ajuste respeta autonomía, accesibilidad y derecho de petición?",
      "correct": {
        "text": "Habilitar el canal escrito preferido, confirmar comprensión y radicación, ofrecer ajustes adicionales si se necesitan y proteger la información de la persona.",
        "reason": "La igualdad material y la Ley 1618 exigen remover barreras, respetando autonomía."
      },
      "other": [
        {
          "text": "Exigir que un familiar interprete toda la queja porque la atención presencial debe conservar el mismo procedimiento oral.",
          "reason": "La compañía de un familiar no es requisito general para ejercer derechos."
        },
        {
          "text": "Recibir datos sin permitir confirmar el contenido, porque brindar un ajuste sería trato desigual frente a otros usuarios.",
          "reason": "La atención idéntica ante barreras distintas puede impedir acceso efectivo."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 13 y 23; Leyes 1618/2013, 1755/2015, 1581/2012 y 2365/2024. La igualdad material y la Ley 1618 exigen remover barreras, respetando autonomía. Primera alternativa incorrecta: La compañía de un familiar no es requisito general para ejercer derechos. Segunda alternativa incorrecta: La atención idéntica ante barreras distintas puede impedir acceso efectivo.",
      "difficulty": 4
    },
    {
      "caseText": "Una dependencia recibe reportes de personas afectadas por violencia y construye un tablero de seguimiento para coordinar atención. La tabla contiene nombres, diagnósticos, domicilios y detalles del relato, aunque el equipo externo solo necesita cifras por zona y estado de gestión. La jefatura propone compartir el archivo íntegro mediante un enlace abierto para acelerar la coordinación institucional.",
      "stem": "¿Qué diseño conserva utilidad del seguimiento y protección de información sensible?",
      "correct": {
        "text": "Compartir indicadores agregados o datos estrictamente necesarios por canales autorizados, separar identificadores y controlar accesos, conservando la fuente protegida.",
        "reason": "La finalidad, necesidad y seguridad del tratamiento exigen limitar la divulgación."
      },
      "other": [
        {
          "text": "Publicar la tabla completa porque la coordinación entre instituciones convierte toda información personal en pública.",
          "reason": "La finalidad pública no elimina los límites de protección de datos."
        },
        {
          "text": "Eliminar todos los registros y suspender el seguimiento porque existen datos sensibles en el expediente.",
          "reason": "Los datos pueden tratarse legalmente con salvaguardas; no exige abandonar la atención."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 13 y 23; Leyes 1618/2013, 1755/2015, 1581/2012 y 2365/2024. La finalidad, necesidad y seguridad del tratamiento exigen limitar la divulgación. Primera alternativa incorrecta: La finalidad pública no elimina los límites de protección de datos. Segunda alternativa incorrecta: Los datos pueden tratarse legalmente con salvaguardas; no exige abandonar la atención.",
      "difficulty": 5
    }
  ],
  "pgn-m50": [
    {
      "caseText": "Una entidad sometida al estatuto general requiere contratar un suministro por 35 SMMLV. Su menor cuantía aplicable es 280 SMMLV y no se ha identificado causal especial ni otra regla que habilite contratación directa. La oficina desea tramitar mínima cuantía para reducir tiempos, a pesar de que los estudios reflejan el valor íntegro de la necesidad y no justifican dividirla.",
      "stem": "¿Qué recomendación respeta el umbral y la selección conforme al régimen aplicable?",
      "correct": {
        "text": "El límite de mínima cuantía es 28 SMMLV; descartarla y determinar la modalidad por objeto y demás presupuestos legales.",
        "reason": "El umbral es 10 % de menor cuantía: 28 SMMLV en este ejemplo."
      },
      "other": [
        {
          "text": "Aplicar mínima cuantía porque 35 SMMLV no supera la menor cuantía de 280 SMMLV.",
          "reason": "Menor cuantía y mínima cuantía no son equivalentes."
        },
        {
          "text": "Dividir la necesidad en adquisiciones inferiores a 28 SMMLV, aun sin independencia objetiva de los objetos, para completar la selección dentro del plazo previsto.",
          "reason": "La división artificial no modifica legítimamente el régimen aplicable."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 23–26, 40–43; Ley 1150/2007 art. 2; Decreto 1082/2015. El umbral es 10 % de menor cuantía: 28 SMMLV en este ejemplo. Primera alternativa incorrecta: Menor cuantía y mínima cuantía no son equivalentes. Segunda alternativa incorrecta: La división artificial no modifica legítimamente el régimen aplicable.",
      "difficulty": 4
    },
    {
      "caseText": "Una oficina solicita iniciar un servicio antes de formalizar el contrato y verificar los requisitos de ejecución. La necesidad era conocida desde el comienzo de la vigencia; ahora resta poco tiempo para contratar. No se acreditan hechos constitutivos de urgencia manifiesta ni otra excepción legal. Se propone fechar retrospectivamente el documento y el acta de inicio para evitar una observación de control.",
      "stem": "¿Cuál actuación protege la legalidad contractual y la trazabilidad documental?",
      "correct": {
        "text": "Cumplir requisitos antes de iniciar, registrar la situación real y evaluar opciones legales sin retroactividad ficticia ni urgencia no acreditada.",
        "reason": "La planeación y requisitos de ejecución no se eliminan por conveniencia administrativa."
      },
      "other": [
        {
          "text": "Autorizar el inicio del servicio por la necesidad institucional y dejar la formalización con fecha anterior para cuando se completen los requisitos pendientes.",
          "reason": "La fecha ficticia no subsana la actuación ni preserva trazabilidad."
        },
        {
          "text": "Declarar urgencia manifiesta por la demora administrativa y la proximidad del cierre presupuestal.",
          "reason": "La urgencia manifiesta exige presupuestos de los arts. 42–43."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 23–26, 40–43; Ley 1150/2007 art. 2; Decreto 1082/2015. La planeación y requisitos de ejecución no se eliminan por conveniencia administrativa. Primera alternativa incorrecta: La fecha ficticia no subsana la actuación ni preserva trazabilidad. Segunda alternativa incorrecta: La urgencia manifiesta exige presupuestos de los arts. 42–43.",
      "difficulty": 5
    }
  ],
  "pgn-m51": [
    {
      "caseText": "En una selección sometida al régimen general, una oferta omite el documento que acredita experiencia exigida sin puntaje. El proponente sostiene que la experiencia existía antes del cierre y puede aportar constancia válida. Otro oferente pide acreditar con un contrato terminado después del cierre la experiencia que no tenía al presentar la oferta. La entidad propone aceptar ambos para ampliar competencia.",
      "stem": "¿Cómo distinguir subsanación documental de adquisición posterior de un requisito?",
      "correct": {
        "text": "Permitir la subsanación procedente de experiencia existente al cierre dentro del plazo aplicable, sin admitir circunstancias adquiridas después de ese hito.",
        "reason": "El art. 5 diferencia prueba omitida y circunstancia surgida después del cierre."
      },
      "other": [
        {
          "text": "Aceptar ambos porque la experiencia es un requisito no puntuable y todo requisito de esa clase puede adquirirse posteriormente.",
          "reason": "La subsanación no crea requisitos inexistentes al cierre."
        },
        {
          "text": "Rechazar ambos de plano porque cualquier documento omitido en la oferta es insubsanable.",
          "reason": "No toda ausencia documental es causal automática de rechazo."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 24–25; Ley 1150/2007 art. 5; Decreto 1082/2015. El art. 5 diferencia prueba omitida y circunstancia surgida después del cierre. Primera alternativa incorrecta: La subsanación no crea requisitos inexistentes al cierre. Segunda alternativa incorrecta: No toda ausencia documental es causal automática de rechazo.",
      "difficulty": 4
    },
    {
      "caseText": "En un proceso de mínima cuantía, la oferta A tiene el precio más bajo, pero no acredita una condición habilitante y el documento omitido puede ser subsanable. La oferta B tiene precio superior y acredita las condiciones. La invitación fijó un plazo para subsanación conforme al procedimiento. El evaluador propone aceptar inmediatamente B sin solicitar el soporte a A, aunque el plazo no ha vencido.",
      "stem": "¿Qué procedimiento debe verificarse para mantener selección objetiva y debido trámite?",
      "correct": {
        "text": "Examinar la oferta de menor precio, requerir la subsanación legalmente procedente en la oportunidad prevista y revisar la siguiente solo si la primera no cumple finalmente.",
        "reason": "El régimen de mínima cuantía combina menor precio y cumplimiento de condiciones, con subsanación cuando procede."
      },
      "other": [
        {
          "text": "Aceptar B de inmediato porque la falta de un documento siempre impide verificar la oferta de menor precio.",
          "reason": "Omitir el trámite puede afectar igualdad y selección objetiva."
        },
        {
          "text": "Aceptar A sin comprobar requisitos porque en mínima cuantía el precio elimina cualquier condición de participación.",
          "reason": "El precio no sustituye los requisitos exigibles."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 24–25; Ley 1150/2007 art. 5; Decreto 1082/2015. El régimen de mínima cuantía combina menor precio y cumplimiento de condiciones, con subsanación cuando procede. Primera alternativa incorrecta: Omitir el trámite puede afectar igualdad y selección objetiva. Segunda alternativa incorrecta: El precio no sustituye los requisitos exigibles.",
      "difficulty": 5
    }
  ],
  "pgn-m52": [
    {
      "caseText": "Una entidad contrató interventoría exclusivamente técnica para una obra y asignó a un supervisor interno el seguimiento administrativo, financiero y jurídico. El contrato delimita las tareas. Aparece una diferencia entre cantidades ejecutadas y valores facturados, y ambos responsables sostienen que el otro debe verificarla por completo. La entidad no ha consolidado los informes ni revisado la supervisión del contrato de interventoría.",
      "stem": "¿Qué actuación respeta la distribución de vigilancia y permite verificar el pago?",
      "correct": {
        "text": "Coordinar verificación técnica, financiera y administrativa según los alcances asignados, y mantener supervisión del contrato de interventoría por la entidad.",
        "reason": "El art. 83 permite distribución expresa y exige supervisión del contrato de interventoría."
      },
      "other": [
        {
          "text": "Atribuir al interventor técnico todas las verificaciones del pago, incluidas las financieras.",
          "reason": "El alcance técnico no transfiere automáticamente todas las funciones."
        },
        {
          "text": "Duplicar verificaciones y aceptar la certificación del primero que firme, sin aplicar la distribución contractual.",
          "reason": "La firma aislada no acredita la verificación coordinada."
        }
      ],
      "explanation": "Fundamento: Ley 1474/2011 arts. 83–86; Ley 80/1993 art. 40; Ley 1150/2007 art. 17. El art. 83 permite distribución expresa y exige supervisión del contrato de interventoría. Primera alternativa incorrecta: El alcance técnico no transfiere automáticamente todas las funciones. Segunda alternativa incorrecta: La firma aislada no acredita la verificación coordinada.",
      "difficulty": 4
    },
    {
      "caseText": "Un contrato de suministro sometido a la regla general del artículo 40 tiene valor inicial de 100 SMMLV. Ya se adicionaron 45 SMMLV, expresados conforme al cálculo aplicable. La entidad requiere otra adición de 10 SMMLV y no se acredita una excepción legal. El responsable propone aprobarla porque cada adición individual está por debajo del 50 % y el contrato aún está vigente.",
      "stem": "¿Qué control aritmético y jurídico debe realizarse antes de recomendar la modificación?",
      "correct": {
        "text": "Comparar adiciones acumuladas de 55 SMMLV con el límite general de 50 SMMLV, verificar régimen y descartar la modificación propuesta en esas condiciones.",
        "reason": "El límite general se calcula respecto del valor inicial, no de cada adición ni del nuevo total."
      },
      "other": [
        {
          "text": "Aprobarla porque la última adición es solo 10 % del valor inicial y cada acto se analiza de forma aislada.",
          "reason": "Dividir modificaciones no evita el límite acumulado."
        },
        {
          "text": "Recalcular el límite sobre el valor ya adicionado de 145 SMMLV para permitir nuevas adiciones.",
          "reason": "El valor modificado no reemplaza la base inicial legal."
        }
      ],
      "explanation": "Fundamento: Ley 1474/2011 arts. 83–86; Ley 80/1993 art. 40; Ley 1150/2007 art. 17. El límite general se calcula respecto del valor inicial, no de cada adición ni del nuevo total. Primera alternativa incorrecta: Dividir modificaciones no evita el límite acumulado. Segunda alternativa incorrecta: El valor modificado no reemplaza la base inicial legal.",
      "difficulty": 5
    }
  ],
  "pgn-m53": [
    {
      "caseText": "En un proceso contractual, un evaluador conoce que su cónyuge tiene interés económico directo en uno de los proponentes. No se ha verificado si la empresa se encuentra incursa en una causal de inhabilidad propia. El evaluador ya hizo su declaración anual de intereses y propone terminar el informe sin manifestar impedimento, dado que la adjudicación será firmada por otra persona.",
      "stem": "¿Qué tratamiento diferencia el conflicto del evaluador y la situación jurídica del oferente?",
      "correct": {
        "text": "Manifestar y tramitar el impedimento por la causal aplicable antes de continuar cuando corresponda, y verificar separadamente si existe inhabilidad legal del proponente.",
        "reason": "La imparcialidad del evaluador y la elegibilidad del proponente son cuestiones distintas."
      },
      "other": [
        {
          "text": "Excluir inmediatamente al oferente por el conflicto del evaluador, sin examinar la causal contractual ni el trámite.",
          "reason": "El impedimento no crea por sí solo una causal de exclusión del oferente."
        },
        {
          "text": "Continuar la evaluación y mencionar el interés al final porque otro funcionario suscribe la adjudicación.",
          "reason": "La participación en evaluación puede comprometer imparcialidad aunque no se firme el acto."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 8–9; CPACA arts. 11–12; CGD art. 44. La imparcialidad del evaluador y la elegibilidad del proponente son cuestiones distintas. Primera alternativa incorrecta: El impedimento no crea por sí solo una causal de exclusión del oferente. Segunda alternativa incorrecta: La participación en evaluación puede comprometer imparcialidad aunque no se firme el acto.",
      "difficulty": 4
    },
    {
      "caseText": "Un contratista individual, durante la ejecución, incurre en una inhabilidad sobreviniente sometida a la regla general del artículo 9 de la Ley 80. No concurre una excepción especial y existe posibilidad de ceder el contrato a un tercero habilitado, previa aprobación de la entidad. El responsable propone continuar hasta liquidación porque al celebrar el contrato no existía la restricción.",
      "stem": "¿Qué actuación debe examinar la entidad frente a la causal sobreviniente acreditada?",
      "correct": {
        "text": "Examinar cesión a tercero habilitado previa autorización escrita de la entidad o renuncia a la ejecución, conforme al art. 9.",
        "reason": "El art. 9 regula expresamente la inhabilidad surgida durante la ejecución."
      },
      "other": [
        {
          "text": "Permitir que continúe hasta la liquidación porque al celebrar el contrato no existía la inhabilidad, dejando su efecto para futuros procesos de selección.",
          "reason": "La inexistencia inicial de causal no neutraliza la sobreviniente."
        },
        {
          "text": "Aprobar verbalmente la cesión para asegurar continuidad y revisar posteriormente si el tercero cumple requisitos y si se obtuvo autorización escrita de la entidad.",
          "reason": "La cesión requiere autorización escrita y verificación jurídica."
        }
      ],
      "explanation": "Fundamento: Ley 80/1993 arts. 8–9; CPACA arts. 11–12; CGD art. 44. El art. 9 regula expresamente la inhabilidad surgida durante la ejecución. Primera alternativa incorrecta: La inexistencia inicial de causal no neutraliza la sobreviniente. Segunda alternativa incorrecta: La cesión requiere autorización escrita y verificación jurídica.",
      "difficulty": 5
    }
  ],
  "pgn-m54": [
    {
      "caseText": "Una entidad muestra como único soporte de su estrategia anticorrupción un Plan Anticorrupción y de Atención al Ciudadano elaborado años atrás. La revisión no acredita análisis del Programa de Transparencia y Ética Pública, ni del anexo técnico o plazos de transición aplicables. La oficina afirma que basta cambiar el título del archivo y publicarlo, sin revisar riesgos, responsables ni controles.",
      "stem": "¿Qué verificación corresponde efectuar antes de concluir cumplimiento del régimen de transparencia?",
      "correct": {
        "text": "Contrastar el programa existente con el art. 73 modificado, Decreto 1122, anexo vigente y transición aplicable; verificar contenido, responsables, controles y publicación.",
        "reason": "El PTEP tiene marco y metodología propios; es necesario verificar el régimen concreto."
      },
      "other": [
        {
          "text": "Dar cumplimiento por el solo cambio de nombre del documento, porque PAAC y PTEP siempre tienen idéntico alcance.",
          "reason": "El título no demuestra implementación de contenidos ni controles."
        },
        {
          "text": "Declarar incumplimiento automáticamente sin verificar obligaciones, excepciones ni plazos aplicables a la entidad.",
          "reason": "La evaluación debe considerar condiciones y transición aplicables."
        }
      ],
      "explanation": "Fundamento: Ley 1474/2011 art. 73 modificado por Ley 2195/2022 art. 31; Decreto 1122/2024; Ley 1712/2014. El PTEP tiene marco y metodología propios; es necesario verificar el régimen concreto. Primera alternativa incorrecta: El título no demuestra implementación de contenidos ni controles. Segunda alternativa incorrecta: La evaluación debe considerar condiciones y transición aplicables.",
      "difficulty": 4
    },
    {
      "caseText": "Un tablero de SECOP muestra quince filas asociadas a un proveedor durante un trimestre. Al examinar los identificadores se observa que diez filas son modificaciones de dos contratos y las restantes corresponden a procesos distintos. El analista propone publicar una alerta de concentración como prueba de corrupción, sin validar el conteo ni comparar objetos, mercado o cuantías de los contratos.",
      "stem": "¿Cómo debe tratarse el patrón antes de recomendar una actuación preventiva o disciplinaria?",
      "correct": {
        "text": "Depurar por identificador y unidad, separar modificaciones, contrastar mercado y soportes, y presentar el patrón como señal sin atribuir responsabilidad.",
        "reason": "La calidad del dato y contexto condicionan la interpretación; riesgo no equivale a responsabilidad."
      },
      "other": [
        {
          "text": "Contar cada modificación como contrato independiente y concluir corrupción por concentración.",
          "reason": "La duplicación distorsiona la concentración y no prueba una falta."
        },
        {
          "text": "Abstenerse de analizar la concentración por proveedor porque las modificaciones impiden tratar cualquier registro de SECOP como información útil para una actuación preventiva.",
          "reason": "La existencia de limitaciones exige verificación, no abandonar el análisis."
        }
      ],
      "explanation": "Fundamento: Ley 1474/2011 art. 73 modificado por Ley 2195/2022 art. 31; Decreto 1122/2024; Ley 1712/2014. La calidad del dato y contexto condicionan la interpretación; riesgo no equivale a responsabilidad. Primera alternativa incorrecta: La duplicación distorsiona la concentración y no prueba una falta. Segunda alternativa incorrecta: La existencia de limitaciones exige verificación, no abandonar el análisis.",
      "difficulty": 5
    }
  ]
}
