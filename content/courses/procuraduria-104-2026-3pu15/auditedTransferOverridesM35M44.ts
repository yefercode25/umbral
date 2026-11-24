import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM35M44: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m35": [
    {
      "caseText": "En una investigación por alteración de inventarios, la única relación de un servidor con el evento consiste en que su perfil permitía modificar la tabla. Los registros de auditoría no identifican la sesión que ejecutó la operación y hay otros operadores habilitados. El coordinador propone exigir al servidor que pruebe que estaba ausente y archivar cualquier diligencia adicional por economía procesal.",
      "stem": "¿Qué actuación respeta la carga estatal y permite aclarar la atribución personal?",
      "correct": {
        "text": "Contrastar registros, turnos y sesiones alternativas, buscar también evidencia de descargo y no atribuir ejecución por el permiso técnico.",
        "reason": "La capacidad técnica no acredita ejecución; arts. 147 y 148 obligan al Estado a investigar."
      },
      "other": [
        {
          "text": "Solicitar una explicación al servidor y tomar su silencio como prueba suficiente de autoría.",
          "reason": "El silencio no satisface la carga estatal."
        },
        {
          "text": "Mantener únicamente el listado de permisos porque acredita quién realizó cualquier cambio posterior.",
          "reason": "Un permiso identifica una capacidad, no un evento."
        }
      ],
      "explanation": "Fundamento: CGD, 147–150, 160 y 222. La capacidad técnica no acredita ejecución; arts. 147 y 148 obligan al Estado a investigar. Primera alternativa incorrecta: El silencio no satisface la carga estatal. Segunda alternativa incorrecta: Un permiso identifica una capacidad, no un evento.",
      "difficulty": 4
    },
    {
      "caseText": "El instructor obtuvo declaraciones que comprometen a un servidor y una copia de seguridad que contradice la hora señalada. La copia tiene origen institucional y su autenticidad puede verificarse. El proyecto de evaluación omite ese soporte por considerarlo inconveniente para la hipótesis principal. El término permite diligencias adicionales y la defensa solicita un contraste de las fuentes.",
      "stem": "¿Cómo debe proceder el instructor antes de emitir una conclusión sobre los hechos?",
      "correct": {
        "text": "Incorporar y contrastar la copia, verificar tiempos y método y explicar su incidencia junto a las declaraciones, con igualdad de rigor.",
        "reason": "La investigación integral exige examinar cargo y descargo y resolver contradicciones razonadamente."
      },
      "other": [
        {
          "text": "Mantener las declaraciones sin analizar la copia porque una prueba favorable debe ser aportada por la defensa.",
          "reason": "La carga no se desplaza al investigado."
        },
        {
          "text": "Archivar automáticamente por existir una contradicción, sin examinar si las fuentes pueden reconciliarse.",
          "reason": "La contradicción requiere análisis; no determina automáticamente el archivo."
        }
      ],
      "explanation": "Fundamento: CGD, 147–150, 160 y 222. La investigación integral exige examinar cargo y descargo y resolver contradicciones razonadamente. Primera alternativa incorrecta: La carga no se desplaza al investigado. Segunda alternativa incorrecta: La contradicción requiere análisis; no determina automáticamente el archivo.",
      "difficulty": 5
    }
  ],
  "pgn-m36": [
    {
      "caseText": "La defensa solicita una bitácora de autenticación de la hora exacta en que se modificó un expediente. También pide duplicados de veinte reportes ya incorporados, obtenidos de la misma tabla y sin campos nuevos. La oficina propone negar todo por volumen, aunque la bitácora podría aclarar el uso de una cuenta compartida y aún no ha sido obtenida ni contrastada.",
      "stem": "¿Cómo debe resolver la autoridad cada solicitud de prueba sin tratarlas como un paquete indivisible?",
      "correct": {
        "text": "Evaluar por separado la pertinencia, conducencia y utilidad; decretar la bitácora si satisface los requisitos y motivar la eventual negativa de duplicados superfluos.",
        "reason": "Art. 151 permite aportar y pedir pruebas, pero exige diferenciar su mérito y legalidad."
      },
      "other": [
        {
          "text": "Negar todo por la cantidad de documentos solicitados y dejar al defensor la carga de conseguir la bitácora.",
          "reason": "El volumen no demuestra que una prueba relevante sea superflua."
        },
        {
          "text": "Decretar todos los duplicados sin análisis porque cualquier solicitud de parte es obligatoria.",
          "reason": "La solicitud no obliga a practicar medios inútiles o inconducentes."
        }
      ],
      "explanation": "Fundamento: CGD, 149–151, 133–134; Ley 1581 de 2012. Art. 151 permite aportar y pedir pruebas, pero exige diferenciar su mérito y legalidad. Primera alternativa incorrecta: El volumen no demuestra que una prueba relevante sea superflua. Segunda alternativa incorrecta: La solicitud no obliga a practicar medios inútiles o inconducentes.",
      "difficulty": 4
    },
    {
      "caseText": "Para reconstruir una modificación puntual de un registro, una oficina solicita a sistemas exportar correos de diez años de todos los funcionarios, incluidas conversaciones ajenas al asunto. Se conoce el intervalo del evento y existen logs del aplicativo y de identidad que pueden pedirse por período y usuario. La jefatura afirma que ampliar la recolección siempre mejora la prueba.",
      "stem": "¿Qué diseño de solicitud probatoria reduce exposición innecesaria sin sacrificar el esclarecimiento?",
      "correct": {
        "text": "Delimitar la solicitud a fuentes, usuarios, períodos y campos justificados por el hecho, comprobar habilitación y ampliar solo cuando la evidencia lo haga necesario.",
        "reason": "La utilidad y pertinencia requieren una pregunta concreta; la protección de datos impone finalidad y controles."
      },
      "other": [
        {
          "text": "Recolectar todas las comunicaciones primero y determinar su relevancia después de entregarlas a todo el equipo.",
          "reason": "Recolectar indiscriminadamente no acredita mayor aporte ni legalidad."
        },
        {
          "text": "Descartar el uso de registros electrónicos por la presencia de datos personales, aunque exista una vía legal de acceso delimitada.",
          "reason": "La protección de datos no impide todo tratamiento legal y proporcionado."
        }
      ],
      "explanation": "Fundamento: CGD, 149–151, 133–134; Ley 1581 de 2012. La utilidad y pertinencia requieren una pregunta concreta; la protección de datos impone finalidad y controles. Primera alternativa incorrecta: Recolectar indiscriminadamente no acredita mayor aporte ni legalidad. Segunda alternativa incorrecta: La protección de datos no impide todo tratamiento legal y proporcionado.",
      "difficulty": 5
    }
  ],
  "pgn-m37": [
    {
      "caseText": "Un tercero remite una grabación de conversaciones privadas cuya forma de obtención no está explicada. El archivo conserva un hash estable y el contenido parece relacionarse con una actuación disciplinaria. La oficina propone incorporarlo como fundamento decisivo sin revisar la autorización ni permitir contradicción, porque el técnico afirma que no observa cortes en el audio.",
      "stem": "¿Qué verificación debe anteceder a cualquier uso probatorio de la grabación?",
      "correct": {
        "text": "Examinar obtención y derechos comprometidos, aplicar legalidad e inexistencia cuando corresponda y garantizar contradicción antes de valorar.",
        "reason": "La integridad técnica no demuestra legalidad; el art. 158 regula las consecuencias de vulneraciones sustanciales."
      },
      "other": [
        {
          "text": "Incorporar la grabación como prueba principal tras verificar la estabilidad del hash y permitir que la defensa discuta exclusivamente su contenido.",
          "reason": "El hash no acredita autorización ni derechos."
        },
        {
          "text": "Devolver la grabación al tercero y eliminar su copia institucional debido a la duda sobre obtención, sin registrar la decisión ni su fundamento.",
          "reason": "La recepción y el tratamiento jurídico deben quedar documentados."
        }
      ],
      "explanation": "Fundamento: CGD, 147, 151, 157–158, Constitución art. 29. La integridad técnica no demuestra legalidad; el art. 158 regula las consecuencias de vulneraciones sustanciales. Primera alternativa incorrecta: El hash no acredita autorización ni derechos. Segunda alternativa incorrecta: La recepción y el tratamiento jurídico deben quedar documentados.",
      "difficulty": 4
    },
    {
      "caseText": "Tras notificar la apertura de investigación, el defensor pide examinar un archivo que contiene los datos utilizados en un informe técnico. El despacho dispone del original y de una copia controlada y no identifica una restricción que impida su consulta bajo las garantías del expediente. El funcionario le ofrece solamente leer las conclusiones al terminar la instrucción, antes de remitir los cargos.",
      "stem": "¿Qué actuación permite ejercer contradicción desde el momento que prevé el CGD?",
      "correct": {
        "text": "Tramitar acceso y contradicción desde la notificación de apertura conforme al art. 157, conservando el original y resolviendo solicitudes oportunamente.",
        "reason": "La contradicción tiene oportunidad propia y no se satisface necesariamente con acceso tardío."
      },
      "other": [
        {
          "text": "Posponer el acceso a los datos hasta el juzgamiento, porque la defensa podrá solicitar entonces las pruebas que contradigan el informe técnico.",
          "reason": "El artículo 157 no limita el contradictorio al juzgamiento."
        },
        {
          "text": "Entregar el archivo original para que el defensor ejecute sus análisis directamente sobre él, sin registrar las modificaciones que produzcan las herramientas.",
          "reason": "La defensa no exige alterar el soporte original."
        }
      ],
      "explanation": "Fundamento: CGD, 147, 151, 157–158, Constitución art. 29. La contradicción tiene oportunidad propia y no se satisface necesariamente con acceso tardío. Primera alternativa incorrecta: El artículo 157 no limita el contradictorio al juzgamiento. Segunda alternativa incorrecta: La defensa no exige alterar el soporte original.",
      "difficulty": 5
    }
  ],
  "pgn-m38": [
    {
      "caseText": "Una investigación intenta relacionar el inicio de sesión con un cambio de estado documental. El log del servidor registra 15:00 UTC y la estación del funcionario registra 10:00 con zona UTC−5. El reloj de la estación no tiene constancia reciente de sincronización y ambos sistemas registran eventos de naturaleza distinta. La oficina propone contar dos operaciones separadas por cinco horas.",
      "stem": "¿Qué paso debe incorporarse al plan probatorio antes de atribuir dos eventos distintos?",
      "correct": {
        "text": "Normalizar zonas horarias en una copia, verificar desfase y semántica de los registros y contrastar identificadores antes de concluir si se trata del mismo evento.",
        "reason": "La diferencia de zona no acredita diferencia de instante; la sincronización y el tipo de evento también importan."
      },
      "other": [
        {
          "text": "Promediar 15:00 y 10:00 para fijar una hora probable de ejecución sin consultar configuración.",
          "reason": "El promedio no corrige zona ni desfase."
        },
        {
          "text": "Tratar el registro del servidor como verdadero y eliminar el de la estación sin documentar la discrepancia.",
          "reason": "Eliminar evidencia impide contrastar hipótesis."
        }
      ],
      "explanation": "Fundamento: CGD, 148, 150–151, 155–156; Ley 527 arts. 9–12. La diferencia de zona no acredita diferencia de instante; la sincronización y el tipo de evento también importan. Primera alternativa incorrecta: El promedio no corrige zona ni desfase. Segunda alternativa incorrecta: Eliminar evidencia impide contrastar hipótesis.",
      "difficulty": 4
    },
    {
      "caseText": "El plan de investigación incluye entrevistas previstas para el mes siguiente, pero el proveedor informa que las trazas de acceso se sobrescriben automáticamente después de siete días. La autoridad aún puede solicitar su preservación legal y un organismo estatal puede prestar apoyo técnico. El profesional considera esperar a terminar entrevistas para saber cuáles registros pedir, aunque los datos podrían desaparecer.",
      "stem": "¿Qué ajuste del plan conserva evidencia potencialmente relevante con respeto a la competencia?",
      "correct": {
        "text": "Priorizar preservación acotada y autorizada de las trazas, solicitar apoyo técnico por la autoridad competente y mantener las entrevistas como fuentes de contraste.",
        "reason": "Arts. 155 y 156 permiten asegurar evidencia y pedir apoyo dentro de competencia y garantías."
      },
      "other": [
        {
          "text": "Esperar a que todas las entrevistas terminen porque el orden inicial del plan no debe cambiar.",
          "reason": "El plan debe ajustarse al riesgo real de pérdida."
        },
        {
          "text": "Acceder por cuenta propia a sistemas ajenos y descargar todos sus registros sin autorización porque existe riesgo de pérdida.",
          "reason": "La urgencia no otorga facultades de acceso no autorizadas."
        }
      ],
      "explanation": "Fundamento: CGD, 148, 150–151, 155–156; Ley 527 arts. 9–12. Arts. 155 y 156 permiten asegurar evidencia y pedir apoyo dentro de competencia y garantías. Primera alternativa incorrecta: El plan debe ajustarse al riesgo real de pérdida. Segunda alternativa incorrecta: La urgencia no otorga facultades de acceso no autorizadas.",
      "difficulty": 5
    }
  ],
  "pgn-m39": [
    {
      "caseText": "Cinco informes de distintas dependencias reproducen textualmente una acusación tomada del mismo correo inicial. Ninguno de sus autores observó directamente los hechos ni consultó registros independientes. El funcionario cuenta cinco corroboraciones y considera acreditada la autoría, aunque el correo no identifica a su informante y existen turnos de trabajo todavía sin examinar.",
      "stem": "¿Cómo debe valorarse el conjunto sin confundir número de documentos e independencia probatoria?",
      "correct": {
        "text": "Identificar la fuente común y su alcance, valorar cada documento sin multiplicar artificialmente el indicador y contrastar registros independientes antes de inferir autoría.",
        "reason": "Arts. 159 y 196–199 exigen apreciar pruebas conjuntamente y acreditar indicadores."
      },
      "other": [
        {
          "text": "Contar cada informe como un indicio autónomo porque fue firmado por una dependencia diferente.",
          "reason": "La firma de varios informes no crea observaciones independientes."
        },
        {
          "text": "Excluir todos los documentos por duplicación sin examinar el origen ni su posible utilidad para orientar diligencias.",
          "reason": "La duplicación no elimina automáticamente toda utilidad de la fuente original."
        }
      ],
      "explanation": "Fundamento: CGD, 149, 159–160, 160A, 196–199. Arts. 159 y 196–199 exigen apreciar pruebas conjuntamente y acreditar indicadores. Primera alternativa incorrecta: La firma de varios informes no crea observaciones independientes. Segunda alternativa incorrecta: La duplicación no elimina automáticamente toda utilidad de la fuente original.",
      "difficulty": 4
    },
    {
      "caseText": "En una actuación por posible acoso sexual laboral, el expediente describe una relación jerárquica directa y condiciones de vulnerabilidad de la persona denunciante. Una propuesta de valoración descarta su relato únicamente porque continuó asistiendo al trabajo después de los hechos; otra propone declarar responsabilidad sin examinar evidencia adicional por la posición de poder del investigado.",
      "stem": "¿Qué método corresponde al enfoque diferencial sin sustituir el estándar de prueba disciplinaria?",
      "correct": {
        "text": "Aplicar perspectiva diferencial del art. 160A, examinar contexto y relaciones de poder sin estereotipos y conservar contradicción y estándar sancionatorio.",
        "reason": "El art. 160A exige perspectiva diferencial e interseccional y el art. 160 conserva el estándar sancionatorio."
      },
      "other": [
        {
          "text": "Valorar la asistencia posterior al trabajo como criterio principal para descartar el relato, pues permite evaluar de modo uniforme la conducta posterior.",
          "reason": "La conducta posterior no autoriza un estereotipo concluyente."
        },
        {
          "text": "Dar prevalencia concluyente al relato por la relación de poder acreditada, dejando para la graduación de sanción la valoración de las demás pruebas.",
          "reason": "La relación de poder es un factor de análisis, no una presunción automática de culpa."
        }
      ],
      "explanation": "Fundamento: CGD, 149, 159–160, 160A, 196–199. El art. 160A exige perspectiva diferencial e interseccional y el art. 160 conserva el estándar sancionatorio. Primera alternativa incorrecta: La conducta posterior no autoriza un estereotipo concluyente. Segunda alternativa incorrecta: La relación de poder es un factor de análisis, no una presunción automática de culpa.",
      "difficulty": 5
    }
  ],
  "pgn-m40": [
    {
      "caseText": "Una queja incorpora una captura de conversación y una copia de un acta institucional. El denunciante afirma que las dos prueban la responsabilidad de un servidor. El equipo dispone del expediente de origen y puede comprobar el contexto de la conversación, pero propone rechazar la copia por no ser original y aceptar la captura como prueba plena de autoría porque muestra un nombre visible.",
      "stem": "¿Qué valoración inicial diferencia admisibilidad, autenticidad y fuerza demostrativa?",
      "correct": {
        "text": "Admitir y valorar lo procedente conforme al CGD, verificar autenticidad cuando exista duda y contrastar origen y contexto de la captura sin atribuir responsabilidad por el nombre visible.",
        "reason": "Arts. 187–191 y Ley 527 permiten documentos y mensajes de datos, sujetos a valoración."
      },
      "other": [
        {
          "text": "Excluir toda copia documental y tomar la captura como original por estar almacenada en un archivo de imagen.",
          "reason": "El formato no determina por sí solo autenticidad ni mérito."
        },
        {
          "text": "Dar por acreditados los hechos por la sola queja y sus anexos sin apreciar individualmente el alcance de cada uno.",
          "reason": "La noticia no prueba por sí sola los hechos o responsabilidad."
        }
      ],
      "explanation": "Fundamento: CGD, 187–195; Ley 527 arts. 8–12. Arts. 187–191 y Ley 527 permiten documentos y mensajes de datos, sujetos a valoración. Primera alternativa incorrecta: El formato no determina por sí solo autenticidad ni mérito. Segunda alternativa incorrecta: La noticia no prueba por sí sola los hechos o responsabilidad.",
      "difficulty": 4
    },
    {
      "caseText": "Una entidad aporta un informe bajo juramento que explica el origen de datos registrados en su sistema de correspondencia. El defensor solicita aclarar el significado de una columna y presenta objeción por error grave como si fuera un dictamen pericial. La autoridad confirma que el producto es un informe de archivos bajo los arts. 193 y 194, no una peritación decretada.",
      "stem": "¿Qué trámite de contradicción corresponde a este tipo de informe documental?",
      "correct": {
        "text": "Dar traslado de tres días para aclaraciones o complementación según art. 195, sin tramitar objeción por error grave.",
        "reason": "El art. 195 regula un traslado específico y excluye objeción por error grave."
      },
      "other": [
        {
          "text": "Tramitar objeción por error grave y designar otro perito si es necesario, porque los datos del informe requieren interpretación de carácter técnico.",
          "reason": "La peritación tiene un trámite distinto en el art. 180."
        },
        {
          "text": "Negar la solicitud de aclaración por tratarse de datos oficiales presumidos auténticos, dejando su interpretación para el fallo de la autoridad competente.",
          "reason": "La presunción de autenticidad no elimina contradicción ni examen del alcance."
        }
      ],
      "explanation": "Fundamento: CGD, 187–195; Ley 527 arts. 8–12. El art. 195 regula un traslado específico y excluye objeción por error grave. Primera alternativa incorrecta: La peritación tiene un trámite distinto en el art. 180. Segunda alternativa incorrecta: La presunción de autenticidad no elimina contradicción ni examen del alcance.",
      "difficulty": 5
    }
  ],
  "pgn-m41": [
    {
      "caseText": "Un testigo afirma con seguridad que vio al investigado realizar una operación en una dependencia. Declara que se encontraba al otro extremo del salón, que solo observó una pantalla por pocos segundos y que no pudo leer el identificador de la cuenta. Una bitácora indica una hora distinta. El funcionario propone dar prioridad absoluta al relato por la firmeza con que fue presentado.",
      "stem": "¿Qué análisis permite apreciar racionalmente el testimonio sin descartarlo por intuición?",
      "correct": {
        "text": "Examinar percepción, distancia, tiempo y contenido observado, distinguir inferencia de observación directa y contrastar el relato con la bitácora y otras fuentes.",
        "reason": "El art. 176 exige valorar condiciones de percepción y el conjunto probatorio."
      },
      "other": [
        {
          "text": "Aceptar la identificación por la seguridad subjetiva del testigo y descartar los registros discordantes.",
          "reason": "La convicción subjetiva no prueba exactitud."
        },
        {
          "text": "Eliminar todo el relato por existir una discrepancia horaria, sin analizar su origen ni alcance.",
          "reason": "La discrepancia merece análisis, no descarte automático."
        }
      ],
      "explanation": "Fundamento: CGD, 161–176; Constitución art. 33. El art. 176 exige valorar condiciones de percepción y el conjunto probatorio. Primera alternativa incorrecta: La convicción subjetiva no prueba exactitud. Segunda alternativa incorrecta: La discrepancia merece análisis, no descarte automático.",
      "difficulty": 4
    },
    {
      "caseText": "Un testigo citado no asiste a la diligencia y aporta dos días después una justificación verificable de hospitalización. La secretaría prepara una multa automática sin resolver la justificación y sin indicar recurso. El expediente no contiene ninguna decisión previa sobre renuencia ni información que contradiga la causa de inasistencia presentada dentro del plazo.",
      "stem": "¿Qué revisión debe efectuar la autoridad antes de imponer una consecuencia por renuencia?",
      "correct": {
        "text": "Examinar la justificación oportuna y aplicar art. 165, con decisión motivada y reposición si procede multa, respetando excepciones legales.",
        "reason": "El art. 165 condiciona la consecuencia a falta de justificación y contempla recurso."
      },
      "other": [
        {
          "text": "Imponer multa por la inasistencia y considerar la hospitalización al graduar su cuantía, porque la citación obligaba a comparecer en la fecha fijada.",
          "reason": "La ausencia no basta para ignorar una explicación oportuna."
        },
        {
          "text": "Abstenerse de evaluar renuencia porque el deber de declarar no admite ninguna consecuencia sancionatoria cuando el testigo aporta una explicación posterior.",
          "reason": "El CGD sí prevé una consecuencia bajo requisitos."
        }
      ],
      "explanation": "Fundamento: CGD, 161–176; Constitución art. 33. El art. 165 condiciona la consecuencia a falta de justificación y contempla recurso. Primera alternativa incorrecta: La ausencia no basta para ignorar una explicación oportuna. Segunda alternativa incorrecta: El CGD sí prevé una consecuencia bajo requisitos.",
      "difficulty": 5
    }
  ],
  "pgn-m42": [
    {
      "caseText": "Un perito informático concluye que un servidor actuó dolosamente porque la cuenta que aparece en el registro coincide con su nombre. No examina credenciales compartidas ni explica la configuración de auditoría. El dictamen identifica el archivo revisado, pero omite metodología y el funcionario considera suficiente la experiencia profesional del experto para adoptar la conclusión jurídica.",
      "stem": "¿Qué control corresponde antes de aceptar el dictamen como soporte de una decisión?",
      "correct": {
        "text": "Exigir cumplimiento del encargo y explicación metodológica, separar hallazgo técnico de juicio de responsabilidad prohibido y garantizar el trámite de contradicción y valoración conjunta.",
        "reason": "Arts. 179, 180 y 182 obligan a controlar alcance, método y contradicción."
      },
      "other": [
        {
          "text": "Aceptar el dolo declarado por el experto porque su título profesional reemplaza el razonamiento jurídico.",
          "reason": "El perito no puede emitir juicio de responsabilidad."
        },
        {
          "text": "Desechar sin evaluación todo dato técnico del dictamen por contener una conclusión excedida, sin tramitar su corrección.",
          "reason": "La autoridad debe examinar cumplimiento y adoptar la decisión procesal procedente."
        }
      ],
      "explanation": "Fundamento: CGD, 177–184, 193–195. Arts. 179, 180 y 182 obligan a controlar alcance, método y contradicción. Primera alternativa incorrecta: El perito no puede emitir juicio de responsabilidad. Segunda alternativa incorrecta: La autoridad debe examinar cumplimiento y adoptar la decisión procesal procedente.",
      "difficulty": 4
    },
    {
      "caseText": "Después del traslado inicial de un dictamen, el defensor descubre un posible error grave: el experto interpretó datos en UTC como hora local. Presenta escrito motivado con los registros de configuración antes de que se corra traslado para alegatos de conclusión. El despacho pretende rechazarlo automáticamente porque ya vencieron los tres días destinados a solicitar aclaración inicial.",
      "stem": "¿Qué oportunidad debe verificarse para tramitar la objeción presentada?",
      "correct": {
        "text": "Examinar la objeción por error grave antes del traslado de alegatos de conclusión y resolver motivadamente su trámite conforme al art. 180.",
        "reason": "El artículo 180 diferencia traslado inicial y oportunidad para objetar por error grave."
      },
      "other": [
        {
          "text": "Rechazar la objeción por haber vencido el traslado de tres días del dictamen, aplicando a ambos mecanismos la misma oportunidad de contradicción.",
          "reason": "Los plazos de aclaración y objeción no son intercambiables."
        },
        {
          "text": "Aceptar el error alegado como probado por la diferencia de zonas horarias y adoptar las consecuencias contra el perito sin examinar sus explicaciones.",
          "reason": "La objeción requiere evaluación y decisión conforme a ley."
        }
      ],
      "explanation": "Fundamento: CGD, 177–184, 193–195. El artículo 180 diferencia traslado inicial y oportunidad para objetar por error grave. Primera alternativa incorrecta: Los plazos de aclaración y objeción no son intercambiables. Segunda alternativa incorrecta: La objeción requiere evaluación y decisión conforme a ley.",
      "difficulty": 5
    }
  ],
  "pgn-m43": [
    {
      "caseText": "La autoridad disciplinaria recibe información de que Fiscalía descubrió elementos materiales con la presentación del escrito de acusación, pero aún no se han introducido ni controvertido en juicio penal. Son relevantes para la investigación administrativa. El equipo propone esperar una sentencia penal firme, mientras otro funcionario desea tratarlos de inmediato como pruebas incontrovertibles.",
      "stem": "¿Cuál ruta distingue los elementos descubiertos de las pruebas penales ya practicadas?",
      "correct": {
        "text": "Trasladar los elementos descubiertos conforme al art. 154, sin calificarlos como prueba penal practicada, y garantizar contradicción disciplinaria.",
        "reason": "El art. 154 contempla expresamente ese traslado y exige contradicción disciplinaria."
      },
      "other": [
        {
          "text": "Esperar la sentencia penal ejecutoriada, porque los elementos que aún no se han practicado en juicio carecen de una vía de traslado disciplinario.",
          "reason": "La norma no condiciona todo traslado a sentencia firme."
        },
        {
          "text": "Incorporarlos como elementos ya controvertidos debido al descubrimiento de Fiscalía, dejando únicamente para la defensa el debate sobre su peso en la decisión.",
          "reason": "El descubrimiento no equivale a prueba penal practicada."
        }
      ],
      "explanation": "Fundamento: CGD, 154, 157, 185–186. El art. 154 contempla expresamente ese traslado y exige contradicción disciplinaria. Primera alternativa incorrecta: La norma no condiciona todo traslado a sentencia firme. Segunda alternativa incorrecta: El descubrimiento no equivale a prueba penal practicada.",
      "difficulty": 4
    },
    {
      "caseText": "Un despacho necesita registros que permanecen en una investigación penal en curso y todavía no han sido descubiertos. El profesional de apoyo conoce al custodio técnico de la Fiscalía y sugiere pedirle directamente una copia completa por correo, sin intervención del fiscal del caso. La documentación puede revelar diligencias pendientes y afectar la reserva de la investigación penal.",
      "stem": "¿Qué trámite permite solicitar la información respetando la investigación penal y la competencia?",
      "correct": {
        "text": "Canalizar la solicitud al fiscal del caso por autoridad disciplinaria, para que evalúe qué información o elementos puede entregar sin afectar la investigación.",
        "reason": "El inciso correspondiente del art. 154 prevé solicitud al fiscal y evaluación del riesgo."
      },
      "other": [
        {
          "text": "Solicitar al custodio cualquier archivo por vía informal porque el interés disciplinario prevalece automáticamente.",
          "reason": "El contacto técnico no sustituye la autoridad habilitada."
        },
        {
          "text": "Desistir de toda solicitud hasta la terminación penal, aunque el art. 154 permita evaluación por el fiscal.",
          "reason": "La existencia de investigación penal no impide toda solicitud legal."
        }
      ],
      "explanation": "Fundamento: CGD, 154, 157, 185–186. El inciso correspondiente del art. 154 prevé solicitud al fiscal y evaluación del riesgo. Primera alternativa incorrecta: El contacto técnico no sustituye la autoridad habilitada. Segunda alternativa incorrecta: La existencia de investigación penal no impide toda solicitud legal.",
      "difficulty": 5
    }
  ],
  "pgn-m44": [
    {
      "caseText": "Un profesional recibe una exportación de logs de un aplicativo. Abre el CSV en Excel, cambia formatos de fecha, ordena filas y guarda el resultado sobre el archivo recibido. Después necesita explicar el análisis al instructor y al defensor. El custodio todavía conserva la exportación original y puede remitirla por un canal autorizado con constancia de origen y entrega.",
      "stem": "¿Qué procedimiento permite reconstruir la trazabilidad sin confundir fuente y archivo analítico?",
      "correct": {
        "text": "Obtener y preservar la exportación original con constancias y verificación de integridad; trabajar en copia y registrar las transformaciones, comparaciones y limitaciones del archivo sobrescrito.",
        "reason": "La integridad debe verificarse respecto de un soporte identificado y las transformaciones deben poder reconstruirse."
      },
      "other": [
        {
          "text": "Calcular un hash del Excel modificado y certificar que es el original porque conserva información visible semejante.",
          "reason": "El hash posterior no demuestra identidad con la exportación anterior."
        },
        {
          "text": "Borrar toda referencia a la primera manipulación y sustituir silenciosamente el archivo por la nueva exportación.",
          "reason": "Ocultar la incidencia impide valorar la trazabilidad."
        }
      ],
      "explanation": "Fundamento: CGD, 155, 179, 185, 200–201; Ley 527 arts. 8–12. La integridad debe verificarse respecto de un soporte identificado y las transformaciones deben poder reconstruirse. Primera alternativa incorrecta: El hash posterior no demuestra identidad con la exportación anterior. Segunda alternativa incorrecta: Ocultar la incidencia impide valorar la trazabilidad.",
      "difficulty": 4
    },
    {
      "caseText": "Dos copias de una exportación institucional tienen la misma huella SHA-256. El informe afirma que por ello se conoce quién modificó un registro del sistema y que la obtención fue legal. El archivo registra una cuenta compartida y no existe todavía información sobre autorización de acceso, custodio original o sincronización de relojes. La defensa cuestiona el alcance de la conclusión.",
      "stem": "¿Qué conclusión técnica se sostiene realmente con la comparación de huellas?",
      "correct": {
        "text": "La coincidencia sustenta identidad binaria de las copias; origen, autoría, legalidad y significado necesitan verificaciones independientes.",
        "reason": "El hash verifica identidad del contenido comparado, no todos los atributos probatorios."
      },
      "other": [
        {
          "text": "Considerar que la huella coincidente autentica la cuenta registrada como autora personal y acredita que los archivos se obtuvieron por un medio legalmente autorizado.",
          "reason": "La huella no acredita autorización ni identidad humana."
        },
        {
          "text": "Descartar la comparación de huellas como evidencia de integridad porque no permite identificar al operador ni determinar la legalidad de la adquisición.",
          "reason": "La verificación de integridad sí tiene valor técnico específico."
        }
      ],
      "explanation": "Fundamento: CGD, 155, 179, 185, 200–201; Ley 527 arts. 8–12. El hash verifica identidad del contenido comparado, no todos los atributos probatorios. Primera alternativa incorrecta: La huella no acredita autorización ni identidad humana. Segunda alternativa incorrecta: La verificación de integridad sí tiene valor técnico específico.",
      "difficulty": 5
    }
  ]
}
