import type { LessonBlock } from '../../../src/types/course'

/** Auditoría integral de la instrucción disciplinaria: M27–M34. */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m27": {
    "1": [
      {
        "type": "comparison",
        "title": "Apertura y delimitación de la investigación",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Presupuesto (211)",
            "Identificación del posible autor a partir de una fuente con mérito; no exige certeza de responsabilidad."
          ],
          [
            "Objeto (212)",
            "Verificar el hecho, su relevancia disciplinaria y posibles exclusiones; limitarse a hechos de origen y conexos."
          ],
          [
            "Auto (215)",
            "Identificar posibles autores, describir hechos concretos, ordenar pruebas y recabar antecedentes, vinculación, remuneración y dirección; informar beneficios de confesión/aceptación y ordenar comunicaciones."
          ],
          [
            "Aviso (216)",
            "Controlar la coordinación con control disciplinario interno y el poder preferente; evitar duplicar actuaciones por los mismos hechos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Apertura y delimitación de la investigación",
        "text": "Un auto que identifica a un servidor, pero omite describir el hecho y solo reproduce la calificación del denunciante, no ofrece una delimitación suficiente del objeto de investigación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Términos y medidas durante la investigación",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Regla general (213)",
            "Seis meses desde el auto de apertura; no desde la queja ni desde una notificación posterior."
          ],
          [
            "Prórroga ordinaria especial",
            "Hasta otros seis meses si la actuación abarca varias faltas o dos o más servidores o particulares en ejercicio de función pública."
          ],
          [
            "DDHH/DIH",
            "Límite de dieciocho meses según art. 213; comprobar además la regla adicional de pruebas relevantes."
          ],
          [
            "Pruebas decisivas pendientes",
            "Hasta tres meses adicionales conforme al último inciso; si al agotarlos no hay soporte para cargos, archivo definitivo."
          ],
          [
            "Suspensión provisional (217)",
            "Medida motivada, no sanción: durante investigación o juicio por faltas graves/gravísimas y con serios elementos de interferencia, continuidad o reiteración; controlar término, consulta y reintegro."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Términos y medidas durante la investigación",
        "text": "No se prorroga por acumulación de trabajo ni se suspende al servidor por el solo inicio de investigación. El art. 217 fija inicialmente tres meses de suspensión, con posible prórroga por igual período y otros tres meses después del fallo de primera o única instancia, bajo los presupuestos legales; las decisiones de suspensión y prórroga están sujetas a consulta, sin perjuicio de cumplimiento inmediato."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Plan de prueba con hipótesis rivales",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hecho",
            "Precisar qué registro cambió, cuándo y en qué contexto funcional."
          ],
          [
            "Cargo",
            "Contrastar registro de acceso, orden de operación y atribución personal."
          ],
          [
            "Descargo",
            "Buscar automatismos, permisos compartidos, contingencias, instrucciones y explicaciones alternativas."
          ],
          [
            "Resultado",
            "Registrar fuente, método, pertinencia, limitaciones, decisiones pendientes y término de investigación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Plan de prueba con hipótesis rivales",
        "text": "Si una bitácora nueva contradice la hora atribuida al investigado, el plan debe actualizarse; conservar ambas fuentes y explicar qué hipótesis se debilita."
      }
    ]
  },
  "pgn-m28": {
    "1": [
      {
        "type": "comparison",
        "title": "Participantes: facultades según su calidad",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Investigado y defensor",
            "Son sujetos procesales con facultades de intervención, acceso, contradicción y recursos legales."
          ],
          [
            "Víctimas",
            "El art. 109 reconoce calidad procesal a víctimas de infracciones a DDHH/DIH y acoso laboral; revisar jurisprudencia y supuesto concreto."
          ],
          [
            "Ministerio Público y PGN",
            "Intervienen en los supuestos especiales que define el art. 109; no son idénticos a cualquier ciudadano."
          ],
          [
            "Quejoso ordinario",
            "No es sujeto procesal por regla general; puede presentar/ampliar queja, aportar pruebas y recurrir archivo y fallo absolutorio. Para esos efectos puede conocer el expediente en secretaría del despacho que profirió la decisión (art. 110)."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Participantes: facultades según su calidad",
        "text": "No se debe entregar un expediente reservado al quejoso ordinario bajo la misma regla que al defensor reconocido; tampoco se deben desconocer las facultades expresamente previstas para el quejoso."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Versión libre, testimonio y confesión",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Versión libre",
            "Medio voluntario de defensa del disciplinable; puede rendirse hasta antes del traslado de alegatos previos al fallo de primera o única instancia (art. 112), sin obligación de declarar contra sí mismo."
          ],
          [
            "Silencio",
            "No es confesión, ni indicio autónomo de responsabilidad; se mantiene la carga probatoria estatal."
          ],
          [
            "Testimonio",
            "Diligencia de un tercero con reglas propias, excepciones y garantías; no sustituye la versión libre del investigado."
          ],
          [
            "Confesión/aceptación",
            "Art. 161: ante autoridad competente, comisionado o designado; con defensor, información de derechos y manifestación libre, consciente e informada. Art. 162: en investigación, hasta antes de ejecutoria del cierre; en juicio, hasta antes de ejecutoria del traslado para alegatos de conclusión."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Versión libre, testimonio y confesión",
        "text": "Una frase de un investigado en un correo de trabajo no se convierte por sí sola en confesión formal. Si procede el art. 162, en investigación la rebaja de inhabilidad, suspensión o multa es hasta la mitad; en juicio, una tercera parte. No aplica a faltas gravísimas del art. 52; la aceptación parcial exige examinar ruptura de unidad procesal. En instrucción el acta equivalente al pliego debe elaborarse dentro de diez días improrrogables y el juzgador falla en cuarenta y cinco días desde recibo; en juicio, decisión dentro de quince días."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Contradicción que sea realmente posible",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Acceso",
            "Identificar calidad procesal y reserva aplicable (115); preservar registro de consulta y copias."
          ],
          [
            "Solicitud de prueba",
            "Resolver pertinencia, conducencia, utilidad y legalidad; explicar la negativa y el recurso que proceda."
          ],
          [
            "Novedad técnica",
            "Poner en conocimiento la prueba en la oportunidad legal, con elementos suficientes para examinar método y fuente."
          ],
          [
            "Defensa material/técnica",
            "Permitir intervención y representación en los términos legales sin exigir autoincriminación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Contradicción que sea realmente posible",
        "text": "Un informe técnico entregado sin anexos puede impedir contradicción útil si sus conclusiones dependen de datos no accesibles al defensor."
      }
    ]
  },
  "pgn-m29": {
    "1": [
      {
        "type": "comparison",
        "title": "Dos eventos habilitan el cierre",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Prueba recaudada",
            "Cuando se han recaudado las pruebas ordenadas, el cierre puede proceder aunque no se haya agotado el término."
          ],
          [
            "Término vencido",
            "También habilita el cierre, sin perjuicio de extensiones legalmente procedentes y oportunamente controladas."
          ],
          [
            "Auto de sustanciación",
            "El cierre ordena el traslado para alegatos previos a la evaluación."
          ],
          [
            "No es decisión final",
            "Cerrar no significa archivar, formular cargos ni declarar responsable."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Dos eventos habilitan el cierre",
        "text": "El inventario debe distinguir pruebas decretadas y practicadas, pendientes y jurídicamente descartadas, no registrar simplemente un porcentaje de avance."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Diez días para alegatos precalificatorios",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 220",
            "Traslado de diez días para alegatos de los sujetos procesales antes de evaluar."
          ],
          [
            "Finalidad",
            "Discutir pruebas, hipótesis, garantías y argumentos de descargo antes de la decisión del instructor."
          ],
          [
            "Cómputo",
            "Aplicar el trámite de notificación del art. 123 al cierre y traslado (comunicación y eventual estado); verificar constancias y calendario aplicable, no contar desde el borrador ni confundir expedición con notificación."
          ],
          [
            "Evaluación (221)",
            "Solo surtida esta etapa, analizar integralmente y adoptar decisión motivada."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Diez días para alegatos precalificatorios",
        "text": "Si se firma el cierre un viernes y todavía no se ha surtido el traslado, no se pueden dar por vencidos diez días desde la firma."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Matriz de evaluación después del traslado",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hecho y norma",
            "Indicar conducta, fuente, posible deber y presupuestos aplicables."
          ],
          [
            "Prueba",
            "Relacionar elementos de cargo y descargo y su alcance real."
          ],
          [
            "Alegato",
            "Identificar argumento relevante, evidencia que invoca y respuesta razonada."
          ],
          [
            "Salida",
            "Archivo o cargos según estándar y causal; documentar notificación y recurso cuando proceda."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Matriz de evaluación después del traslado",
        "text": "El silencio de un sujeto procesal durante el traslado no suple una prueba que falte para cargos."
      }
    ]
  },
  "pgn-m30": {
    "1": [
      {
        "type": "comparison",
        "title": "Tres estándares que no se intercambian",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Apertura (211)",
            "Identificación del posible autor de una falta a partir de noticia con mérito."
          ],
          [
            "Cargos (222)",
            "Demostración objetiva de la falta y prueba que comprometa al disciplinado; no es todavía declaración de culpabilidad definitiva."
          ],
          [
            "Fallo sancionatorio (160)",
            "Certeza de falta y responsabilidad. No trasladar el estándar de cargos a la sanción."
          ],
          [
            "Archivo (90, 213, 224)",
            "Procede por los supuestos legales de terminación o falta de prueba en las condiciones del término; motivar y controlar recursos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tres estándares que no se intercambian",
        "text": "Una cuenta compartida que únicamente revela oportunidad técnica puede no comprometer personalmente al disciplinado con la conducta exigida para cargos."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Cómo construir un pliego verificable",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Identidad y función",
            "Individualizar persona y cargo/función en época de hechos."
          ],
          [
            "Conducta y norma",
            "Precisar tiempo, modo y lugar, norma y concepto de violación."
          ],
          [
            "Análisis",
            "Explicar ilicitud sustancial, culpabilidad, pruebas de cada cargo y criterios de gravedad."
          ],
          [
            "Argumentos",
            "Responder los planteamientos relevantes de sujetos procesales y documentar soporte."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cómo construir un pliego verificable",
        "text": "El art. 223 no se satisface copiando una lista de normas y una conclusión general sobre un conjunto de personas."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Archivo definitivo y alcance",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Terminación (90)",
            "Cuando aparezca plenamente demostrado un supuesto legal: inexistencia del hecho, atipicidad, falta de autoría, exclusión o imposibilidad de iniciar/proseguir."
          ],
          [
            "Término (213)",
            "Al agotarse la extensión probatoria aplicable sin evidencia para cargos, archivo definitivo."
          ],
          [
            "Efecto (224)",
            "El archivo definitivo del art. 224 hace tránsito a cosa juzgada; si no fue posible identificar e individualizar al presunto autor, el efecto es formal. Distinguir el archivo de indagación del art. 208, sin cosa juzgada material."
          ],
          [
            "Comunicación y recurso",
            "El archivo debe ser notificado/comunicado conforme al régimen, incluida la facultad del quejoso de recurrir."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Archivo definitivo y alcance",
        "text": "Si un nuevo documento demuestra que el investigado no realizó la conducta, no se deben formular cargos solo para trasladar la decisión a otra autoridad."
      }
    ]
  },
  "pgn-m31": {
    "1": [
      {
        "type": "comparison",
        "title": "Modalidad de notificación según la decisión",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Personal (121)",
            "Apertura de investigación, vinculación, cargos y su variación, fallos de instancia."
          ],
          [
            "Electrónica (122)",
            "Para decisiones personales, verificar aceptación previa escrita, constancia y condiciones jurisprudenciales que aseguran conocimiento efectivo."
          ],
          [
            "Estado, estrados, edicto y conducta concluyente",
            "Aplicar arts. 120 y siguientes según acto y supuesto, no usar un correo interno como sustituto universal."
          ],
          [
            "Comunicación (129)",
            "Distinguir comunicación al quejoso del acto de notificación al sujeto procesal; documentar oportunidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Modalidad de notificación según la decisión",
        "text": "El envío de un mensaje a una dirección sin verificar aceptación o regla supletoria no acredita por sí solo una notificación personal electrónica válida."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Recursos: misma prueba, distinta etapa",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Reposición (133)",
            "Negativa de prueba en investigación, negativa de copias, decisión de solicitud de nulidad y demás casos enumerados."
          ],
          [
            "Apelación (134)",
            "Negativa de pruebas en juicio, archivo, fallo de primera instancia y otros supuestos enumerados; verificar efecto aplicable."
          ],
          [
            "Queja",
            "Procede frente al rechazo de apelación en los términos del CGD; no confundir con la noticia disciplinaria ciudadana."
          ],
          [
            "Sin recurso",
            "Actos de simple trámite y pliego de cargos (222); no crear recursos por conveniencia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Recursos: misma prueba, distinta etapa",
        "text": "La negativa de una prueba durante investigación y la negativa en juicio no se impugnan automáticamente por el mismo recurso."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Oportunidad, sustentación y constancias",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Regla (131)",
            "Reposición y apelación: regla general desde expedición hasta cinco días posteriores a notificación (131). Excepción: apelación del fallo de primera instancia en juicio ordinario, por escrito y sustentada dentro de diez días siguientes a notificación (225G)."
          ],
          [
            "Estrados",
            "Interponer y sustentar durante la sesión en la que se emite la decisión impugnable."
          ],
          [
            "Sustentación (132)",
            "Exponer razones dentro del término; si falta o es indebida se declara desierto conforme a la norma."
          ],
          [
            "Pliego (225)",
            "Notificación personal al disciplinado o defensor; si no comparecen dentro de cinco días desde el día siguiente a la entrega de la comunicación en última dirección y correo electrónico, designar defensor público o estudiante de consultorio jurídico conforme al art. 225. Completadas las notificaciones, remisión en tres días improrrogables."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Oportunidad, sustentación y constancias",
        "text": "Registrar por separado expedición, comunicación, notificación válida, recurso, sustentación y ejecutoria; el estado del sistema no reemplaza constancias."
      }
    ]
  },
  "pgn-m32": {
    "1": [
      {
        "type": "comparison",
        "title": "Causales legales de nulidad",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Competencia",
            "Falta de competencia del funcionario para emitir fallo, según art. 202."
          ],
          [
            "Defensa",
            "Vulneración del derecho de defensa del investigado."
          ],
          [
            "Debido proceso",
            "Irregularidad sustancial que afecte garantías del procedimiento."
          ],
          [
            "Error material",
            "No equivale necesariamente a una causal; examinar soporte, finalidad, trascendencia y corrección."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Causales legales de nulidad",
        "text": "Una errata en el índice con acto y constancia auténticos no se equipara a privar al investigado de una oportunidad procesal necesaria."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Principios antes de declarar nulidad",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Finalidad",
            "No invalidar un acto que cumplió su finalidad sin afectar defensa."
          ],
          [
            "Trascendencia",
            "Identificar cómo se afectó la garantía o estructura fundamental de instrucción y juicio."
          ],
          [
            "Convalidación",
            "Evaluar consentimiento y límites constitucionales; no presumir saneamiento por silencio."
          ],
          [
            "Subsidiariedad",
            "Declarar nulidad cuando no exista otro remedio procesal para subsanar la irregularidad sustancial."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Principios antes de declarar nulidad",
        "text": "La nulidad no debe usarse para sancionar errores menores ni para disimular una vulneración real de defensa."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Efectos y ruta de decisión",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Oficiosa (204)",
            "El funcionario competente declara de oficio cuando advierta causal; contra esa providencia no procede recurso."
          ],
          [
            "Solicitud",
            "Art. 206: solicitud antes del traslado de alegatos de conclusión, con causal concreta y fundamentos. Art. 207: resolver en cinco días desde recibo o en la misma audiencia si allí se presenta."
          ],
          [
            "Reposición (133)",
            "Procede contra decisión que resuelve solicitud de nulidad; distinguir de declaratoria oficiosa."
          ],
          [
            "Alcance (205)",
            "Reponer desde la actuación afectada en lo pertinente; preservar pruebas allegadas/practicadas legalmente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Efectos y ruta de decisión",
        "text": "Una matriz de nulidad debe relacionar acto, causal, garantía, remedio alternativo, alcance y actuaciones válidas conservables."
      }
    ]
  },
  "pgn-m33": {
    "1": [
      {
        "type": "comparison",
        "title": "Comisión probatoria: quién, qué y cuándo",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 152",
            "Funcionario competente puede comisionar a servidor de la entidad; fuera de sede se puede acudir a personerías."
          ],
          [
            "Regla PGN",
            "Procurador General puede comisionar a cualquier funcionario; demás servidores PGN solo fuera de sede, salvo comisionado de su dependencia."
          ],
          [
            "Objeto y término",
            "La decisión delimita diligencias y duración; se remiten las copias necesarias, también electrónicamente."
          ],
          [
            "No equivale a reparto",
            "El encargo probatorio no transfiere competencia general de instrucción o fallo."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Comisión probatoria: quién, qué y cuándo",
        "text": "Una comisión para recibir testimonio no habilita por sí misma a resolver el archivo de la investigación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Prueba que surge durante una comisión",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Conexión directa",
            "El comisionado practica las pruebas que surjan directamente del objeto de la comisión, salvo prohibición expresa."
          ],
          [
            "Nueva línea ajena",
            "Informar al comitente y solicitar instrucción o decisión competente, sin ampliar arbitrariamente el objeto."
          ],
          [
            "Término vencido",
            "Solicitar ampliación; concesión y comunicación por medio eficaz con constancia."
          ],
          [
            "Garantías",
            "Aplicar reglas del medio probatorio, intervención y contradicción; documentar toda novedad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Prueba que surge durante una comisión",
        "text": "Si de un testimonio surge directamente un documento relevante, primero verificar la prohibición expresa y el término. No hay regla de remisión obligatoria para toda prueba derivada."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Retorno íntegro de la diligencia",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Acta",
            "Fecha, lugar, personas, objeto, desarrollo, incidencias y firmas o constancias aplicables."
          ],
          [
            "Anexos",
            "Identificación, origen, relación con diligencia, integridad y condiciones de transferencia."
          ],
          [
            "Novedades",
            "Señalar prueba directamente derivada, solicitud de ampliación o asunto ajeno que requiere decisión."
          ],
          [
            "Entrega",
            "Remitir resultado al comitente por canal autorizado y documentar recibo; no resolver el mérito del proceso."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Retorno íntegro de la diligencia",
        "text": "En evidencia digital conservar la fuente y una copia de trabajo verificable; una captura aislada sin origen no permite reconstruir el acto de obtención."
      }
    ]
  },
  "pgn-m34": {
    "1": [
      {
        "type": "comparison",
        "title": "Separación funcional y entrega",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 12",
            "Instructor y juzgador deben ser funcionarios distintos, independientes, imparciales y competentes."
          ],
          [
            "Instructor",
            "Investiga, evalúa y formula cargos o archiva; no impone sanción desde la instrucción."
          ],
          [
            "Remisión (225)",
            "Luego de cumplir notificaciones del pliego, remitir en tres días improrrogables al juzgador."
          ],
          [
            "Juzgador (225A)",
            "Define motivadamente juicio ordinario o verbal según supuestos legales; no hay recurso contra esa decisión."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Separación funcional y entrega",
        "text": "Asignar un cambio de nombre al mismo funcionario no cumple la separación funcional. Un informe de apoyo tampoco reemplaza el juicio independiente."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Qué puede cambiar en el juicio",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Error de calificación (225D)",
            "En el juicio ordinario, vencidos los descargos, el juzgador puede devolver motivadamente al instructor para nueva calificación dentro de quince días."
          ],
          [
            "Si cambia la calificación",
            "Notificar como pliego y remitir de nuevo; el juzgador decide la ruta del art. 225A."
          ],
          [
            "Si no cambia",
            "Instructor devuelve motivadamente; el juzgador puede declarar nulidad del pliego conforme al régimen."
          ],
          [
            "Prueba sobreviniente",
            "Agotada etapa probatoria, el juzgador puede variar cargos por prueba sobreviniente en el supuesto legal. La variación se notifica como pliego y se conceden diez días para descargos y pruebas; el período probatorio no supera dos meses (225D)."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Qué puede cambiar en el juicio",
        "text": "No enseñar la regla absoluta de que el juzgador jamás puede intervenir en la variación: el art. 225D distingue el error de calificación de la prueba sobreviniente."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Naturaleza de la PGN y control judicial",
        "columns": [
          "Control normativo",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "C-030 de 2023",
            "La Corte declaró inconstitucional atribuir carácter jurisdiccional a la función disciplinaria de la PGN; su naturaleza es administrativa."
          ],
          [
            "Elección popular",
            "Para destitución, suspensión e inhabilidad de servidores elegidos popularmente, revisar el régimen judicial especial derivado de C-030 y las normas y decisiones vigentes."
          ],
          [
            "Separación interna",
            "No equivale a transformar el juzgador administrativo en juez de la República."
          ],
          [
            "Apoyo 3PU-15",
            "Entregar expediente íntegro, pruebas de cargo y descargo, índice, estado de notificaciones y límites de análisis; no asumir atribuciones decisorias."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Naturaleza de la PGN y control judicial",
        "text": "El control judicial especial no debe confundirse con los recursos ordinarios internos ni extenderse automáticamente a todo servidor de carrera."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m27": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-investigacion",
    "pgn-guia-pruebas"
  ],
  "pgn-m28": [
    "ley-1952-2019",
    "ley-2094-2021",
    "constitucion",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m29": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-investigacion"
  ],
  "pgn-m30": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-investigacion",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m31": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m32": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria"
  ],
  "pgn-m33": [
    "ley-1952-2019",
    "pgn-guia-disciplinaria",
    "pgn-guia-pruebas"
  ],
  "pgn-m34": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-disciplinaria",
    "cc-c030-2023"
  ]
}
export function auditedModuleBlocksM27M34(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM27M34(moduleId: string): string[] { return sources[moduleId] ?? [] }
