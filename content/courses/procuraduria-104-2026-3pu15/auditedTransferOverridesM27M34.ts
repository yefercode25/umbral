import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM27M34: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m27": [
    {
      "caseText": "Una procuraduría regional abre investigación el 3 de abril de 2026 contra un servidor por una conducta delimitada. El 25 de septiembre el equipo solicita otros seis meses porque no organizó los anexos a tiempo. No hay otras faltas, otros investigados ni asunto de derechos humanos o DIH. Está pendiente una prueba técnica que podría modificar la situación jurídica y el despacho debe evaluar su necesidad antes de resolver.",
      "stem": "¿Cuál control temporal corresponde al supuesto sin convertir una demora administrativa en una prórroga automática?",
      "correct": {
        "text": "Partir de seis meses desde la apertura y examinar motivadamente la regla adicional de hasta tres meses por prueba capaz de modificar la situación jurídica, sin aplicar la extensión por pluralidad cuando falta su presupuesto.",
        "reason": "El artículo 213 diferencia las extensiones por pluralidad y por prueba relevante pendiente."
      },
      "other": [
        {
          "text": "Conceder otros seis meses desde la petición del equipo porque todo expediente técnico permite duplicar el plazo ordinario.",
          "reason": "La complejidad o atraso no acreditan por sí solos pluralidad."
        },
        {
          "text": "Cerrar inmediatamente y omitir la prueba pendiente, aunque pueda incidir en la decisión y exista una regla legal específica.",
          "reason": "El último inciso del artículo 213 exige valorar las pruebas capaces de alterar la situación jurídica."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 13, 211–217. El artículo 213 diferencia las extensiones por pluralidad y por prueba relevante pendiente. La primera alternativa incorrecta falla porque la complejidad o atraso no acreditan por sí solos pluralidad. La segunda falla porque el último inciso del artículo 213 exige valorar las pruebas capaces de alterar la situación jurídica.",
      "difficulty": 4
    },
    {
      "caseText": "Durante una investigación por modificación de datos se encuentra una segunda operación realizada en otro contrato, sin vínculo fáctico con el hecho de apertura. El primer episodio tiene soportes de cargo y una bitácora de contingencia favorable al investigado. La jefatura propone incorporar el segundo episodio sin delimitación, descartar la bitácora favorable y solicitar una suspensión provisional únicamente porque la conducta denunciada parece grave.",
      "stem": "¿Qué curso permite mantener el objeto de investigación, el deber de imparcialidad y los requisitos de una eventual medida?",
      "correct": {
        "text": "Examinar la conexidad o tramitar separadamente la nueva noticia, incorporar evidencia favorable y desfavorable y evaluar los presupuestos específicos de suspensión provisional sin presumirlos por la gravedad.",
        "reason": "El objeto, la investigación integral y la medida provisional son controles distintos (arts. 13, 212, 217)."
      },
      "other": [
        {
          "text": "Acumular todo episodio del mismo servidor y conservar solo evidencia consistente con la hipótesis de apertura para agilizar la actuación.",
          "reason": "La mera identidad del servidor no demuestra conexidad ni permite omitir descargo."
        },
        {
          "text": "Ordenar suspensión provisional por la calificación preliminar y diferir la comprobación de riesgos de interferencia hasta el fallo.",
          "reason": "La medida requiere elementos serios del riesgo legal, además de la calificación pertinente."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 13, 211–217. El objeto, la investigación integral y la medida provisional son controles distintos (arts. 13, 212, 217). La primera alternativa incorrecta falla porque la mera identidad del servidor no demuestra conexidad ni permite omitir descargo. La segunda falla porque la medida requiere elementos serios del riesgo legal, además de la calificación pertinente.",
      "difficulty": 5
    }
  ],
  "pgn-m28": [
    {
      "caseText": "Un ciudadano que presentó queja ordinaria por supuestas alteraciones de una planilla solicita acceso irrestricto a una investigación disciplinaria en curso. En paralelo, el defensor reconocido del investigado pide consultar la evidencia para controvertirla. El expediente no versa sobre DDHH, DIH ni acoso laboral y contiene información personal de terceros. La oficina pretende negar a ambos por igual hasta el fallo.",
      "stem": "¿Cómo deben diferenciarse las facultades de cada solicitante y la reserva de la actuación?",
      "correct": {
        "text": "Verificar la calidad procesal del defensor y garantizar su acceso conforme al CGD; resolver la petición del quejoso ordinario con las facultades y límites específicos de su condición, motivando las restricciones.",
        "reason": "Los artículos 109, 110 y 115 distinguen intervención procesal, facultades del quejoso y reserva."
      },
      "other": [
        {
          "text": "Reconocer al quejoso todas las facultades del defensor porque ambos tienen interés en el resultado del proceso.",
          "reason": "El interés en un asunto no transforma automáticamente al quejoso en sujeto procesal."
        },
        {
          "text": "Negar a ambos hasta que exista fallo firme porque la reserva siempre prevalece sobre la defensa.",
          "reason": "La reserva no elimina los derechos de defensa de los sujetos procesales."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 15, 109–112, 115, 161–162; Constitución 33. Los artículos 109, 110 y 115 distinguen intervención procesal, facultades del quejoso y reserva. La primera alternativa incorrecta falla porque el interés en un asunto no transforma automáticamente al quejoso en sujeto procesal. La segunda falla porque la reserva no elimina los derechos de defensa de los sujetos procesales.",
      "difficulty": 4
    },
    {
      "caseText": "En versión libre un servidor explica que utilizó una credencial institucional y se abstiene de contestar preguntas sobre una operación. El acta no contiene aceptación expresa de cargos, ni se tramitó una confesión con las garantías legales. Un reporte de auditoría ubica la cuenta, pero hay dudas sobre otros operadores. Se propone considerar el silencio como confesión y aplicar automáticamente un beneficio sancionatorio.",
      "stem": "¿Qué tratamiento corresponde a la versión y a la evidencia técnica disponible?",
      "correct": {
        "text": "Registrar la versión y el silencio sin inferir confesión, continuar la valoración independiente de la evidencia y exigir los requisitos legales si se presenta una confesión o aceptación de cargos.",
        "reason": "La versión libre no es una obligación de autoincriminarse; la confesión formal exige condiciones del art. 161."
      },
      "other": [
        {
          "text": "Reconocer confesión por el silencio parcial y reducir la sanción sin verificar asistencia ni información de derechos.",
          "reason": "El silencio no expresa aceptación libre e informada."
        },
        {
          "text": "Excluir la versión completa del expediente porque el servidor no contestó todas las preguntas y mantener únicamente el reporte técnico.",
          "reason": "La defensa puede ser parcial y debe valorarse junto al acervo, sin omitir sus explicaciones."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 15, 109–112, 115, 161–162; Constitución 33. La versión libre no es una obligación de autoincriminarse; la confesión formal exige condiciones del art. 161. La primera alternativa incorrecta falla porque el silencio no expresa aceptación libre e informada. La segunda falla porque la defensa puede ser parcial y debe valorarse junto al acervo, sin omitir sus explicaciones.",
      "difficulty": 5
    }
  ],
  "pgn-m29": [
    {
      "caseText": "En una investigación se han practicado todas las pruebas ordenadas y resta un mes del plazo inicial. El funcionario decide cerrar mediante auto de sustanciación y la jefatura pide expedir el pliego el mismo día para reducir el tiempo promedio de trámite. El defensor anuncia que presentará argumentos sobre una inconsistencia entre dos documentos. Todavía no se ha surtido el traslado de alegatos.",
      "stem": "¿Qué secuencia permite aprovechar el cierre temprano sin desconocer la defensa?",
      "correct": {
        "text": "Adoptar el cierre cuando proceda, surtir el traslado de diez días y evaluar después las pruebas y los argumentos para decidir motivadamente cargos o archivo.",
        "reason": "El art. 220 permite cierre por recaudo de pruebas, pero exige traslado antes de evaluación."
      },
      "other": [
        {
          "text": "Mantener la investigación abierta hasta completar los seis meses porque el plazo debe agotarse antes de todo cierre.",
          "reason": "El vencimiento es uno de los supuestos, no el único."
        },
        {
          "text": "Formular cargos junto con el cierre y permitir que los alegatos se presenten exclusivamente durante el juzgamiento.",
          "reason": "La defensa posterior no reemplaza los alegatos precalificatorios."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 213, 220–222. El art. 220 permite cierre por recaudo de pruebas, pero exige traslado antes de evaluación. La primera alternativa incorrecta falla porque el vencimiento es uno de los supuestos, no el único. La segunda falla porque la defensa posterior no reemplaza los alegatos precalificatorios.",
      "difficulty": 4
    },
    {
      "caseText": "El expediente contiene auto de cierre y constancia del traslado de diez días ya surtido. El defensor aportó un argumento que relaciona dos anexos existentes y contradice la atribución temporal del hecho. La plantilla del proyecto de cargos incluye el inventario probatorio, pero no estudia ese argumento. El instructor propone enviarlo al juzgador para que este responda todo en su fallo.",
      "stem": "¿Qué debe comprobarse en la evaluación antes de decidir y remitir la actuación?",
      "correct": {
        "text": "Valorar los alegatos junto con las pruebas, explicar la incidencia de la contradicción y aplicar el estándar de cargos o la causal de archivo mediante una decisión motivada.",
        "reason": "El artículo 221 exige evaluación motivada posterior al traslado; art. 223 exige análisis de argumentos."
      },
      "other": [
        {
          "text": "Registrar que hubo traslado y omitir su contenido, pues la oportunidad formal agota el deber del instructor.",
          "reason": "Dar oportunidad formal no releva de examinar argumentos pertinentes."
        },
        {
          "text": "Enviar directamente el expediente al juzgador sin evaluar, porque la contradicción de anexos corresponde únicamente a la etapa de juicio.",
          "reason": "La función de evaluación corresponde al instructor competente."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 213, 220–222. El artículo 221 exige evaluación motivada posterior al traslado; art. 223 exige análisis de argumentos. La primera alternativa incorrecta falla porque dar oportunidad formal no releva de examinar argumentos pertinentes. La segunda falla porque la función de evaluación corresponde al instructor competente.",
      "difficulty": 5
    }
  ],
  "pgn-m30": [
    {
      "caseText": "El instructor termina la etapa de alegatos en un expediente sobre pagos irregulares. Se acredita objetivamente la anomalía, pero el registro de acceso fue compartido, ningún testimonio atribuye la operación al investigado y su firma no aparece en el documento. El plan probatorio y las extensiones legalmente procedentes se agotaron. La jefatura considera formular cargos para que el juzgador determine quién intervino.",
      "stem": "¿Qué decisión corresponde valorar conforme al estándar y al agotamiento del término descrito?",
      "correct": {
        "text": "Motivar el archivo definitivo si no surgió prueba que comprometa la responsabilidad, explicando el alcance de los hallazgos y cumpliendo comunicaciones y recursos aplicables.",
        "reason": "El art. 222 requiere tanto demostración objetiva como prueba que comprometa responsabilidad; art. 213 regula el agotamiento sin soporte."
      },
      "other": [
        {
          "text": "Formular cargos porque la anomalía objetiva satisface por sí sola todo el estándar y la atribución puede dejarse al juzgador.",
          "reason": "La prueba de la anomalía no sustituye el vínculo personal."
        },
        {
          "text": "Declarar responsable al servidor por su posibilidad de acceso, sin necesidad de etapa de juzgamiento.",
          "reason": "El instructor no dicta sanción ni puede presumir responsabilidad objetiva."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 90, 160, 221–225. El art. 222 requiere tanto demostración objetiva como prueba que comprometa responsabilidad; art. 213 regula el agotamiento sin soporte. La primera alternativa incorrecta falla porque la prueba de la anomalía no sustituye el vínculo personal. La segunda falla porque el instructor no dicta sanción ni puede presumir responsabilidad objetiva.",
      "difficulty": 4
    },
    {
      "caseText": "Una investigación cuenta con documentos y testimonios que comprometen a un servidor en dos conductas distintas. El borrador del pliego incluye un solo párrafo de hechos, una lista de artículos y una conclusión común de dolo. El defensor alegó diferencias entre las fechas y el deber funcional de cada episodio. Aún no se ha expedido el pliego y existe tiempo para completar su análisis.",
      "stem": "¿Qué revisión del proyecto exige la individualización de los cargos antes de decidir?",
      "correct": {
        "text": "Precisar cada conducta con circunstancias y norma, analizar separadamente ilicitud, culpabilidad, prueba, gravedad y argumentos relevantes, y formular únicamente los cargos con respaldo legal suficiente.",
        "reason": "El art. 223 exige contenido específico por cargo, incluido análisis de culpabilidad y argumentos."
      },
      "other": [
        {
          "text": "Mantener una acusación global porque los dos hechos corresponden al mismo servidor y las precisiones pueden reservarse al fallo.",
          "reason": "La identidad del autor no unifica los hechos ni sus presupuestos."
        },
        {
          "text": "Eliminar todo análisis de culpabilidad del pliego porque se trata de una cuestión exclusivamente reservada al fallo sancionatorio.",
          "reason": "La imputación provisional debe contener análisis de culpabilidad sin anticipar certeza sancionatoria."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 90, 160, 221–225. El art. 223 exige contenido específico por cargo, incluido análisis de culpabilidad y argumentos. La primera alternativa incorrecta falla porque la identidad del autor no unifica los hechos ni sus presupuestos. La segunda falla porque la imputación provisional debe contener análisis de culpabilidad sin anticipar certeza sancionatoria.",
      "difficulty": 5
    }
  ],
  "pgn-m31": [
    {
      "caseText": "Durante la investigación disciplinaria se niega una solicitud de prueba del defensor; en un expediente diferente, ya en juzgamiento, se niega una prueba semejante. Un gestor de la oficina usa la misma plantilla que indica apelación en ambos casos porque las dos decisiones se refieren a pruebas. Las providencias están debidamente notificadas y el defensor aún puede actuar dentro del término aplicable.",
      "stem": "¿Qué recurso debe identificarse en función de la fase en cada expediente?",
      "correct": {
        "text": "Reposición frente a negativa de prueba en investigación y apelación frente a negativa de prueba en juicio, verificando los demás requisitos y efectos legales.",
        "reason": "Los arts. 133 y 134 distinguen expresamente negativa de pruebas según etapa."
      },
      "other": [
        {
          "text": "Apelación en ambos casos, porque la materia probatoria prevalece sobre la fase de la actuación.",
          "reason": "La naturaleza de la prueba no elimina la distinción de recursos por etapa."
        },
        {
          "text": "Reposición en ambos casos porque toda decisión probatoria es una providencia de simple trámite.",
          "reason": "La negativa de pruebas tiene recursos expresamente previstos; no es simple trámite sin efectos."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 120–136, 222, 225. Los arts. 133 y 134 distinguen expresamente negativa de pruebas según etapa. La primera alternativa incorrecta falla porque la naturaleza de la prueba no elimina la distinción de recursos por etapa. La segunda falla porque la negativa de pruebas tiene recursos expresamente previstos; no es simple trámite sin efectos.",
      "difficulty": 4
    },
    {
      "caseText": "Una oficina remite por correo un auto de apertura que debe notificarse personalmente. El expediente no contiene aceptación previa escrita de notificación electrónica ni diligencia personal o alternativa legal acreditada. La matriz interna marca notificado desde el envío. Después llega una solicitud de defensa y el profesional debe revisar los términos sin equiparar la fecha del mensaje con una notificación válida.",
      "stem": "¿Qué actuación permite establecer correctamente el hito de notificación y proteger el derecho de defensa?",
      "correct": {
        "text": "Verificar las formas legales y condiciones de notificación, incluidas aceptación, constancias y eventual conducta concluyente si se configura; corregir el registro y calcular efectos desde el hito jurídicamente acreditado.",
        "reason": "Arts. 120–122: el cumplimiento de la modalidad aplicable debe acreditarse antes de inferir efectos."
      },
      "other": [
        {
          "text": "Conservar la fecha de envío como notificación válida porque todo correo institucional produce conocimiento jurídico.",
          "reason": "El correo por sí solo no demuestra requisitos legales de notificación."
        },
        {
          "text": "Declarar automáticamente la nulidad de todo el expediente sin analizar si existe una modalidad válida posterior o un remedio procesal.",
          "reason": "La posible irregularidad exige analizar causal, afectación y medios de corrección."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 120–136, 222, 225. Arts. 120–122: el cumplimiento de la modalidad aplicable debe acreditarse antes de inferir efectos. La primera alternativa incorrecta falla porque el correo por sí solo no demuestra requisitos legales de notificación. La segunda falla porque la posible irregularidad exige analizar causal, afectación y medios de corrección.",
      "difficulty": 5
    }
  ],
  "pgn-m32": [
    {
      "caseText": "Un expediente registra una fecha errada en el índice electrónico, pero el auto original y la constancia de notificación acreditan sin contradicción la fecha correcta. En otro episodio, el investigado no tuvo oportunidad de controvertir una prueba decisiva antes de la decisión correspondiente. La oficina propone declarar nulidad desde el inicio de ambos expedientes sin examinar si existe una corrección legal menos extensa.",
      "stem": "¿Cómo debe distinguirse el tratamiento de los dos defectos?",
      "correct": {
        "text": "Corregir trazablemente el dato del índice y estudiar por separado la vulneración de defensa, su trascendencia, causal y remedio procedente, delimitando cualquier nulidad a lo afectado.",
        "reason": "Los arts. 202 y 203 exigen causal, afectación y examen de otros medios de subsanación."
      },
      "other": [
        {
          "text": "Anular ambos expedientes desde su apertura porque cualquier discordancia registrada afecta necesariamente todo el procedimiento.",
          "reason": "La mera errata sin afectación no configura automáticamente una causal."
        },
        {
          "text": "Corregir solo las fechas y mantener la prueba decisiva sin revisión porque el expediente electrónico conserva el documento.",
          "reason": "La existencia del soporte no reemplaza la garantía de contradicción."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 202–207. Los arts. 202 y 203 exigen causal, afectación y examen de otros medios de subsanación. La primera alternativa incorrecta falla porque la mera errata sin afectación no configura automáticamente una causal. La segunda falla porque la existencia del soporte no reemplaza la garantía de contradicción.",
      "difficulty": 4
    },
    {
      "caseText": "En juicio disciplinario el funcionario advierte una irregularidad sustancial que afectó la defensa y concluye motivadamente que no existe otro medio procesal de corregirla. Una prueba documental anterior fue obtenida y practicada legalmente y no está afectada por el defecto. El equipo pretende destruir todos los soportes, incluida dicha prueba, y reiniciar toda la actuación desde la noticia disciplinaria.",
      "stem": "¿Cuál alcance debe examinarse en la decisión de nulidad y reposición de la actuación?",
      "correct": {
        "text": "Delimitar desde qué actuación se produce el defecto y reponer lo necesario, conservando las pruebas legalmente allegadas y practicadas según el art. 205.",
        "reason": "La nulidad se delimita al acto afectado y no invalida automáticamente las pruebas legales anteriores."
      },
      "other": [
        {
          "text": "Invalidar necesariamente toda actuación y desechar todas las pruebas, porque una nulidad sustancial siempre tiene efecto total.",
          "reason": "La extensión indiscriminada desconoce los efectos regulados por el art. 205."
        },
        {
          "text": "Mantener las actuaciones afectadas sin reposición porque conservar una prueba válida sana todas las demás irregularidades.",
          "reason": "Conservar prueba válida no elimina el deber de reponer la actuación afectada."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 202–207. La nulidad se delimita al acto afectado y no invalida automáticamente las pruebas legales anteriores. La primera alternativa incorrecta falla porque la extensión indiscriminada desconoce los efectos regulados por el art. 205. La segunda falla porque conservar prueba válida no elimina el deber de reponer la actuación afectada.",
      "difficulty": 5
    }
  ],
  "pgn-m33": [
    {
      "caseText": "Una procuraduría comisiona a un servidor para recibir un testimonio durante diez días. El testigo identifica y entrega un documento que surge directamente de lo declarado y guarda relación con la misma diligencia. La comisión no contiene prohibición expresa de pruebas derivadas y el término sigue vigente. El profesional considera que debe rechazarlo porque el despacho no menciona ese documento por su nombre.",
      "stem": "¿Qué actuación permite aprovechar la prueba directamente derivada sin asumir competencia general?",
      "correct": {
        "text": "Practicar o incorporar la prueba directamente surgida en los términos del art. 152, respetando sus garantías y documentando el vínculo con la comisión y el resultado al comitente.",
        "reason": "El art. 152 habilita la prueba directamente derivada salvo prohibición expresa; la competencia sigue delimitada."
      },
      "other": [
        {
          "text": "Rechazar cualquier prueba que no esté enumerada textualmente, aun cuando surja directamente del objeto y no exista prohibición expresa.",
          "reason": "La enumeración inicial no excluye la habilitación legal de prueba directamente surgida."
        },
        {
          "text": "Ampliar la comisión a cualquier hecho nuevo y decidir la responsabilidad del investigado al finalizar la diligencia.",
          "reason": "La habilitación probatoria no transfiere las decisiones de mérito."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 149–153, 156. El art. 152 habilita la prueba directamente derivada salvo prohibición expresa; la competencia sigue delimitada. La primera alternativa incorrecta falla porque la enumeración inicial no excluye la habilitación legal de prueba directamente surgida. La segunda falla porque la habilitación probatoria no transfiere las decisiones de mérito.",
      "difficulty": 4
    },
    {
      "caseText": "Un servidor comisionado para una inspección encuentra un documento que parece surgir directamente de la prueba ordenada, pero el plazo de la comisión venció el día anterior. El comitente no ha concedido ampliación y la diligencia restante requiere acceso a un archivo institucional. La oficina propone practicarla con fecha retroactiva y reportarla como realizada dentro del término para evitar una nueva comunicación.",
      "stem": "¿Qué tratamiento del plazo y de la evidencia exige la regla especial?",
      "correct": {
        "text": "Solicitar ampliación al comitente, acreditar su concesión y comunicación por medio eficaz y dejar constancia real de las fechas y de la actuación practicada.",
        "reason": "El art. 152 exige solicitud de ampliación cuando el plazo de comisión se encuentra vencido."
      },
      "other": [
        {
          "text": "Practicar la diligencia inmediatamente y modificar su fecha porque la prueba derivada está permitida de modo general.",
          "reason": "La facultad sobre prueba derivada no habilita alteración de fechas ni ignora el término."
        },
        {
          "text": "Cerrar definitivamente la investigación por vencimiento del plazo de comisión, aunque el proceso principal continúe dentro de su término.",
          "reason": "El vencimiento de una comisión no transfiere facultad de archivo al comisionado."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 149–153, 156. El art. 152 exige solicitud de ampliación cuando el plazo de comisión se encuentra vencido. La primera alternativa incorrecta falla porque la facultad sobre prueba derivada no habilita alteración de fechas ni ignora el término. La segunda falla porque el vencimiento de una comisión no transfiere facultad de archivo al comisionado.",
      "difficulty": 5
    }
  ],
  "pgn-m34": [
    {
      "caseText": "La oficina de instrucción culmina la evaluación y notifica válidamente el pliego a todos los destinatarios. El instructor propone conservar el expediente para dirigir también el juicio porque conoce los hechos y considera que así se evita repetir análisis. La dependencia cuenta con un funcionario de juzgamiento distinto, competente, y los anexos incluyen evidencia favorable que debe conservarse en el expediente.",
      "stem": "¿Qué decisión corresponde después de completar las notificaciones del pliego?",
      "correct": {
        "text": "Remitir el expediente íntegro al juzgador competente dentro de tres días improrrogables, para que ejerza independientemente sus funciones y defina el tipo de juicio según la ley.",
        "reason": "Arts. 12, 225 y 225A: separación efectiva, remisión oportuna e independencia del juzgador."
      },
      "other": [
        {
          "text": "Conservar el expediente y asignar al instructor el juzgamiento con la aprobación de su superior, por economía procesal.",
          "reason": "La eficiencia no sustituye la garantía de funcionarios distintos."
        },
        {
          "text": "Remitir únicamente los documentos de cargo y reservar los de descargo para evitar orientar la valoración independiente.",
          "reason": "La entrega parcial afecta la integridad y la posibilidad de valoración independiente."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 12, 160, 225, 225A, 225D; C-030/2023. Arts. 12, 225 y 225A: separación efectiva, remisión oportuna e independencia del juzgador. La primera alternativa incorrecta falla porque la eficiencia no sustituye la garantía de funcionarios distintos. La segunda falla porque la entrega parcial afecta la integridad y la posibilidad de valoración independiente.",
      "difficulty": 4
    },
    {
      "caseText": "En juicio ordinario, una vez vencida la oportunidad de descargos, el juzgador advierte un error de calificación del pliego basado en los elementos ya conocidos. El asistente propone que el juzgador redacte directamente el cargo corregido sin devolver el expediente, porque su competencia incluye valorar pruebas. No se trata de una variación por prueba sobreviniente agotada la etapa probatoria.",
      "stem": "¿Qué trámite distingue el supuesto de error inicial de calificación de la eventual prueba sobreviniente?",
      "correct": {
        "text": "Devolver motivadamente al instructor para nueva calificación en el plazo máximo de quince días del art. 225D y seguir sus reglas de notificación y remisión, sin confundirlo con la variación por prueba sobreviniente.",
        "reason": "Art. 225D diferencia la devolución por error de calificación de la variación por prueba sobreviniente."
      },
      "other": [
        {
          "text": "Variar directamente el pliego en todo caso porque el juzgador tiene competencia general para reemplazar la instrucción.",
          "reason": "La atribución excepcional no elimina la ruta específica de devolución."
        },
        {
          "text": "Dictar sentencia absolutoria automáticamente ante cualquier error de calificación sin tramitar el mecanismo específico previsto.",
          "reason": "La ley contempla un mecanismo previo al fallo para esta hipótesis."
        }
      ],
      "explanation": "Fundamento: CGD, arts. 12, 160, 225, 225A, 225D; C-030/2023. Art. 225D diferencia la devolución por error de calificación de la variación por prueba sobreviniente. La primera alternativa incorrecta falla porque la atribución excepcional no elimina la ruta específica de devolución. La segunda falla porque la ley contempla un mecanismo previo al fallo para esta hipótesis.",
      "difficulty": 5
    }
  ]
}
