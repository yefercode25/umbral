import type { LessonBlock } from '../../../src/types/course'

/** Auditoría de derecho probatorio y evidencia: M35–M44. */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m35": {
    "1": [
      {
        "type": "comparison",
        "title": "Carga de la prueba y verdad real",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Necesidad (147)",
            "Las decisiones interlocutorias y el fallo requieren pruebas producidas y aportadas legalmente."
          ],
          [
            "Carga estatal",
            "El Estado debe acreditar los presupuestos de la decisión; el investigado no tiene que demostrar su inocencia."
          ],
          [
            "Imparcialidad (148)",
            "Buscar con igual rigor prueba favorable y desfavorable; se pueden decretar pruebas de oficio."
          ],
          [
            "Libertad (150)",
            "Usar medios reconocidos legalmente sin desconocer formalidades ni derechos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Carga de la prueba y verdad real",
        "text": "Un usuario autorizado pudo modificar una base de datos, pero esa capacidad no demuestra que ejecutó la operación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Estándar por etapa y pregunta probatoria",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Apertura",
            "Identificar al posible autor de una falta en los términos del CGD; no exige certeza."
          ],
          [
            "Cargos (222)",
            "Demostración objetiva de falta y prueba que comprometa la responsabilidad."
          ],
          [
            "Sanción (160)",
            "Certeza sobre falta y responsabilidad; la duda razonable favorece al disciplinable."
          ],
          [
            "Hipótesis alternativas",
            "Examinar atribución, deber, ilicitud, culpabilidad y posibles exclusiones."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Estándar por etapa y pregunta probatoria",
        "text": "Una bitácora que solo identifica una cuenta compartida puede justificar nuevas diligencias, no una sanción por sí sola."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Matriz de suficiencia y descargo",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hecho",
            "Identificar acción, omisión, tiempo y deber funcional."
          ],
          [
            "Soporte de cargo",
            "Explicar alcance real y relación con el posible autor."
          ],
          [
            "Soporte de descargo",
            "Registrar contingencias, órdenes, accesos alternativos y pruebas contradictorias."
          ],
          [
            "Vacío",
            "Indicar diligencia pertinente y posible efecto sobre la decisión."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Matriz de suficiencia y descargo",
        "text": "Si una prueba de descargo cambia la hora de la operación, actualizar la hipótesis sin ocultar el soporte anterior."
      }
    ]
  },
  "pgn-m36": {
    "1": [
      {
        "type": "comparison",
        "title": "Tres filtros que no deben confundirse",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Pertinencia",
            "Conexión con el hecho que necesita demostrarse."
          ],
          [
            "Conducencia",
            "Idoneidad jurídica del medio para acreditar ese hecho; respetar requisitos del medio."
          ],
          [
            "Utilidad",
            "Aporte concreto al esclarecimiento, evitando pruebas superfluas."
          ],
          [
            "Legalidad",
            "Un medio pertinente no habilita obtención contraria a derechos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tres filtros que no deben confundirse",
        "text": "Un registro de acceso puede ser pertinente para una sesión, pero no necesariamente suficiente para acreditar la intención del usuario."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Decisión motivada de decreto o negativa",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Solicitud",
            "Identificar sujeto procesal, hecho, medio y aporte esperado."
          ],
          [
            "Negativa (151)",
            "Diferenciar impertinencia, inconducencia o carácter superfluo; no atender pruebas practicadas ilegalmente."
          ],
          [
            "Recurso",
            "Reposición en investigación y apelación frente a negativa en juicio, según arts. 133 y 134."
          ],
          [
            "Proporcionalidad",
            "Delimitar datos personales, período, campos y accesos necesarios; mantener trazabilidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Decisión motivada de decreto o negativa",
        "text": "Solicitar diez años de correos de toda una oficina para un evento de una hora exige justificar alcance; una extracción acotada puede ser más útil."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Prueba redundante frente a corroboración",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Repetición",
            "Copias de una misma fuente no crean independencia."
          ],
          [
            "Corroboración",
            "Buscar otra fuente que observe el hecho de manera autónoma."
          ],
          [
            "Nueva premisa",
            "Revisar pertinencia cuando cambie fecha o posible autor."
          ],
          [
            "Control de negativa",
            "Explicar por qué no aporta y cuál recurso corresponde, sin calificar anticipadamente al solicitante."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Prueba redundante frente a corroboración",
        "text": "Si dos reportes provienen de la misma tabla, solicitar un registro independiente de autenticación puede tener mayor aporte que un tercer reporte idéntico."
      }
    ]
  },
  "pgn-m37": {
    "1": [
      {
        "type": "comparison",
        "title": "Autenticidad, licitud y existencia procesal",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Autenticidad",
            "Identificar origen o autor; no confundir con veracidad de todo su contenido."
          ],
          [
            "Integridad",
            "Comprobar conservación de datos."
          ],
          [
            "Legalidad",
            "Examinar competencia, autorización y forma de obtención."
          ],
          [
            "Inexistencia (158)",
            "Prueba obtenida sin formalidades sustanciales o vulnerando derechos fundamentales del investigado se tiene como inexistente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Autenticidad, licitud y existencia procesal",
        "text": "Una grabación íntegra no se vuelve legal únicamente porque su archivo no fue modificado."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Contradicción desde el hito legal",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 157",
            "Los sujetos procesales pueden controvertir desde notificación de apertura de investigación o vinculación."
          ],
          [
            "Objeto",
            "Examinar fuente, metodología, significado y límites."
          ],
          [
            "Reserva",
            "Aplicar régimen especial; no utilizarla para negar indiscriminadamente defensa."
          ],
          [
            "Constancia",
            "Registrar acceso, solicitudes, decisiones y recursos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Contradicción desde el hito legal",
        "text": "Entregar únicamente la conclusión de una extracción y ocultar los datos indispensables puede afectar una contradicción real."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Tratamiento de una fuente cuestionada",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Recepción",
            "Registrar aporte y custodiar bajo acceso autorizado; no difundir."
          ],
          [
            "Examen",
            "Identificar cómo se obtuvo, formalidad sustancial y derecho comprometido."
          ],
          [
            "Decisión",
            "Aplicar art. 158 cuando corresponda; no fundamentar la decisión en prueba inexistente."
          ],
          [
            "Restante acervo",
            "Valorar independientemente prueba legal y determinar efectos procesales concretos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tratamiento de una fuente cuestionada",
        "text": "Una duda de autenticidad amerita verificación; una violación acreditada de derechos exige examinar el efecto jurídico, no solo calcular un hash."
      }
    ]
  },
  "pgn-m38": {
    "1": [
      {
        "type": "comparison",
        "title": "Del hecho a la diligencia",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hipótesis",
            "Redactar una proposición verificable, no una conclusión de culpa."
          ],
          [
            "Pregunta",
            "Precisar qué falta probar y qué dato podría refutar la hipótesis."
          ],
          [
            "Fuente",
            "Identificar custodio, origen, disponibilidad y riesgo de pérdida."
          ],
          [
            "Diligencia",
            "Seleccionar medio y alcance, autoridad y resultado esperado."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Del hecho a la diligencia",
        "text": "La afirmación «el usuario alteró un dato» se descompone en evento, identidad, autorización, deber y contexto."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Priorizar preservación y apoyo técnico",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Aseguramiento (155)",
            "Solicitar medidas mediante autoridad habilitada y con garantías; no asumir facultades de policía judicial por el cargo técnico."
          ],
          [
            "Apoyo (156)",
            "Solicitar colaboración técnica a organismos estatales por autoridad que conoce de la actuación."
          ],
          [
            "Dependencias",
            "Preservar fuentes volátiles antes de operaciones analíticas; documentar acceso."
          ],
          [
            "Plan vivo",
            "Actualizar hipótesis y cronología cuando surja un soporte nuevo."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Priorizar preservación y apoyo técnico",
        "text": "Si un sistema sobrescribe registros semanalmente, priorizar su preservación autorizada antes de pedir reportes derivados."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cronología reproducible: UTC y hora local",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "UTC",
            "Un evento a 15:00 UTC equivale a 10:00 en Colombia (UTC−5)."
          ],
          [
            "Hora de origen",
            "Registrar zona, formato, precisión y eventual desfase del reloj."
          ],
          [
            "Normalización",
            "Crear columna calculada en copia de trabajo; conservar fecha y hora originales."
          ],
          [
            "Incertidumbre",
            "Si un reloj estaba adelantado, documentar estimación y margen, no inventar exactitud."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cronología reproducible: UTC y hora local",
        "text": "Dos logs de 15:00 UTC y 10:00 UTC−5 pueden representar el mismo instante, pero aún debe verificarse sincronización y semántica del evento."
      }
    ]
  },
  "pgn-m39": {
    "1": [
      {
        "type": "comparison",
        "title": "Sana crítica y motivación",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Lógica",
            "La conclusión debe seguir de premisas acreditadas."
          ],
          [
            "Experiencia",
            "Evitar estereotipos y generalizaciones; explicar la máxima usada."
          ],
          [
            "Conocimiento técnico",
            "Verificar alcance, método y limitaciones de las fuentes expertas."
          ],
          [
            "Art. 159",
            "Apreciar el conjunto y explicar razonadamente el mérito probatorio."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Sana crítica y motivación",
        "text": "Cinco reportes que repiten el mismo dato no equivalen a cinco observaciones independientes."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Indicios: hecho indicador e inferencia",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 196",
            "Inferencia lógica desde un hecho indicador hacia otro hecho."
          ],
          [
            "Art. 197",
            "El hecho indicador es indivisible; no fragmentarlo para multiplicar indicios."
          ],
          [
            "Art. 198",
            "El hecho indicador debe estar probado."
          ],
          [
            "Art. 199",
            "Examinar gravedad, concordancia, convergencia y relación con los medios de prueba."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Indicios: hecho indicador e inferencia",
        "text": "Tener una credencial es un hecho posible; para inferir autoría se necesita demostrar el indicador y contrastar otras personas o automatismos que podían utilizarla."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Enfoque diferencial y estándar sancionatorio",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 160A (Ley 2365/2024)",
            "En casos del art. 53.5 aplicar enfoque diferencial e interseccional en valoración."
          ],
          [
            "Factores",
            "Examinar relaciones de poder, antecedentes previstos por la norma, vulnerabilidades y protección constitucional."
          ],
          [
            "Protección",
            "La PGN debe evaluar que decreto y práctica de pruebas no afecten derechos de la víctima ni principios del art. 114."
          ],
          [
            "Art. 160",
            "El enfoque no elimina la necesidad de prueba legal, defensa ni certeza para sancionar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Enfoque diferencial y estándar sancionatorio",
        "text": "No descartar un relato por una expectativa estereotipada sobre cómo debía reaccionar la persona; evaluar contexto y soportes sin prejuzgar."
      }
    ]
  },
  "pgn-m40": {
    "1": [
      {
        "type": "comparison",
        "title": "Documento, copia y noticia disciplinaria",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 187",
            "Queja o informe de noticia no prueba por sí solo hechos o responsabilidad; sus anexos se valoran por sana crítica."
          ],
          [
            "Art. 188",
            "Se admiten originales y copias; verificar autenticidad cuando sea necesario."
          ],
          [
            "Art. 191",
            "Presunción de autenticidad de documentos e informes requeridos; duda puede exigir examen técnico."
          ],
          [
            "Alcance",
            "Autenticidad no equivale a exactitud de todo lo declarado ni prueba de responsabilidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Documento, copia y noticia disciplinaria",
        "text": "Una copia de un acta no debe rechazarse solo por ser copia; si hay duda concreta, examinar origen y autenticidad."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Mensajes de datos y valor demostrativo",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Ley 527 art. 8",
            "Originalidad funcional: garantía confiable de integridad y posibilidad de presentación cuando se requiera."
          ],
          [
            "Art. 9",
            "Integridad: información completa e inalterada, salvo cambios inherentes admitidos."
          ],
          [
            "Arts. 10–11",
            "No negar admisibilidad por formato electrónico; valorar confiabilidad de generación, archivo, comunicación, integridad e identificación del iniciador."
          ],
          [
            "Art. 12",
            "Conservar accesibilidad, formato fiel y datos disponibles de origen, destino, fecha y hora."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Mensajes de datos y valor demostrativo",
        "text": "Una captura puede ser admisible y útil; para atribuir autoría o fecha puede requerirse contexto, exportación original o corroboración."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Documento reservado e informe técnico",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 192",
            "Incorporar documentos reservados en cuaderno separado, conservando reserva; los sujetos procesales pueden consultarlos, pero no se expiden copias."
          ],
          [
            "Arts. 193–194",
            "Informe de datos registrados en libros o archivos, motivado, bajo juramento y con origen de datos explicado."
          ],
          [
            "Art. 195",
            "Traslado de tres días para aclaración/complementación; no procede objeción por error grave contra el informe."
          ],
          [
            "Art. 190",
            "Ante tacha de falsedad en otro proceso, pedir copia autenticada u original cuando sea necesario y seguir trámite legal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Documento reservado e informe técnico",
        "text": "No confundir un informe que certifica datos existentes en un archivo con un dictamen pericial que desarrolla un examen especializado."
      }
    ]
  },
  "pgn-m41": {
    "1": [
      {
        "type": "comparison",
        "title": "Deber de testimoniar y excepciones",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 164",
            "Testimonio bajo juramento, salvo excepciones constitucionales y legales."
          ],
          [
            "Art. 166 y Constitución 33",
            "Informar garantías contra autoincriminación y declaraciones contra familiares protegidos."
          ],
          [
            "Art. 167",
            "Respetar secreto profesional y demás supuestos legales."
          ],
          [
            "Menores",
            "Recepción ante defensor o comisario de familia conforme al art. 164 y jurisprudencia; no enseñar el límite de siete años declarado inexequible."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Deber de testimoniar y excepciones",
        "text": "Un testigo no pierde el secreto profesional por el solo hecho de ser citado por la autoridad."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Práctica y valoración del testimonio",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Arts. 168 y 175",
            "Amonestación, identificación, relato libre, preguntas pertinentes y participación de sujetos procesales."
          ],
          [
            "Art. 176",
            "Evaluar condiciones de percepción, tiempo, modo, lugar y particularidades del relato."
          ],
          [
            "Conocimiento",
            "Distinguir lo observado directamente de lo oído a terceros."
          ],
          [
            "Contraste",
            "Examinar contradicciones centrales con fuentes independientes; confianza subjetiva no garantiza exactitud."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Práctica y valoración del testimonio",
        "text": "Un relato seguro sobre un evento visto a distancia debe contrastarse con iluminación, ubicación y registros objetivos."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Confesión, silencio y renuencia",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Confesión (161–163)",
            "Asistencia de defensor, información de garantías, voluntariedad y oportunidad; valorar según sana crítica."
          ],
          [
            "Versión libre",
            "Ejercicio de defensa; silencio no constituye confesión."
          ],
          [
            "Renuencia (165)",
            "Multa hasta 50 salarios mínimos diarios vigentes en época del hecho si no justifica inasistencia en tres días; decisión motivada con reposición."
          ],
          [
            "Límites",
            "Exentos no se someten a esa medida; conducción en PGN solo en urgencia para evitar pérdida de prueba, sin privación de libertad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Confesión, silencio y renuencia",
        "text": "Una inasistencia justificada oportunamente no debe tratarse igual que renuencia sin justificación; verificar el procedimiento del art. 165."
      }
    ]
  },
  "pgn-m42": {
    "1": [
      {
        "type": "comparison",
        "title": "Qué debe contener un dictamen",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Arts. 177 y 179",
            "Conocimiento y experiencia acreditados, posesión, dictamen motivado y juramento."
          ],
          [
            "Método",
            "Explicar materiales, operaciones, fundamento y limitaciones del examen."
          ],
          [
            "Independencia (178)",
            "Impedimentos y recusaciones; decisión sin recurso en el supuesto legal."
          ],
          [
            "Límite (179)",
            "El perito no puede emitir juicio de responsabilidad disciplinaria."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Qué debe contener un dictamen",
        "text": "Un informe experto puede determinar qué cuenta ejecutó un cambio, pero no declarar jurídicamente que un servidor actuó dolosamente."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Contradicción pericial: términos y decisiones",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 180",
            "Revisar cumplimiento del encargo; devolver para corregir si falta; traslado común de tres días mediante decisión notificada por estado."
          ],
          [
            "Aclaración/adición",
            "Hasta cinco días para responder si se decreta, prorrogable una vez; reposición contra negativa."
          ],
          [
            "Error grave",
            "Objeción motivada antes del traslado para alegatos de conclusión; se resuelve primero si concurre con aclaración."
          ],
          [
            "Nuevo perito",
            "Si se acepta objeción, nuevo dictamen inobjetable pero aclarable/complementable; reposición contra negativa de objeción."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Contradicción pericial: términos y decisiones",
        "text": "La aclaración de un parámetro y la objeción por error grave son mecanismos distintos; no limitar ambos automáticamente a tres días."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Valoración y comparación de dictámenes",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 182",
            "Solidez, precisión, fundamento, idoneidad y conjunto de pruebas."
          ],
          [
            "Segundo dictamen",
            "Se aprecia conjuntamente con el primero, salvo objeción por error grave que prospere."
          ],
          [
            "Art. 181",
            "Puede ordenarse comparecencia a audiencia para explicar el dictamen."
          ],
          [
            "Informe técnico (195)",
            "Tres días para aclaraciones/complementos; no objeción por error grave, a diferencia de peritación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Valoración y comparación de dictámenes",
        "text": "Si dos expertos usan distintas zonas horarias, pedir fundamento y contrastar metodología; no escoger automáticamente el dictamen más reciente."
      }
    ]
  },
  "pgn-m43": {
    "1": [
      {
        "type": "comparison",
        "title": "Inspección disciplinaria: objeto y constancias",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 185",
            "Verificar hechos o individualizar autores mediante inspección de cosas, lugares, bienes u otros efectos materiales."
          ],
          [
            "Art. 186",
            "Providencia con objeto y lugar; informar fecha y hora al disciplinable."
          ],
          [
            "Acta",
            "Describir hallazgos y manifestaciones; testimonios útiles recibidos en formulario separado."
          ],
          [
            "Ampliación y apoyo",
            "Puede ampliarse objeto durante diligencia; designar perito en supuestos legales y admitir opinión técnica autorizada."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Inspección disciplinaria: objeto y constancias",
        "text": "Una inspección de archivo digital debe distinguir lo observado, las operaciones realizadas y las explicaciones de quienes intervinieron."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Tres vías de prueba trasladada (154)",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Prueba practicada válidamente",
            "Trasladar mediante copia autorizada por funcionario, desde actuación judicial o administrativa nacional o extranjera."
          ],
          [
            "Elementos de Fiscalía descubiertos",
            "Los descubiertos con escrito de acusación pueden trasladarse aunque no sean prueba penal introducida en juicio; deben someterse a contradicción en disciplina."
          ],
          [
            "Elementos no descubiertos o investigación penal en curso",
            "Solicitar al fiscal del caso; este determina qué entrega sin afectar la investigación penal."
          ],
          [
            "Valoración",
            "Aplicar CGD; no importar conclusiones jurídicas del proceso de origen como si fueran propias."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tres vías de prueba trasladada (154)",
        "text": "Un elemento descubierto por Fiscalía no debe llamarse automáticamente prueba penal ya practicada, pero el art. 154 contempla su traslado condicionado."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Matriz de ingreso desde otro expediente",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Identificación",
            "Proceso y autoridad de origen, medio y estado procesal."
          ],
          [
            "Autorización",
            "Copia autorizada o solicitud al fiscal según supuesto legal."
          ],
          [
            "Contradicción",
            "Registrar oportunidad y constancias de puesta en conocimiento."
          ],
          [
            "Mérito",
            "Identificar qué hecho demuestra y qué debe verificarse en disciplina."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Matriz de ingreso desde otro expediente",
        "text": "Una sentencia externa puede aportar contexto; su resumen no reemplaza la valoración de los medios incorporados legalmente."
      }
    ]
  },
  "pgn-m44": {
    "1": [
      {
        "type": "comparison",
        "title": "Preservar identidad, integridad y trazabilidad",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Fuente",
            "Identificar origen, responsable, dispositivo o sistema, alcance y autorización."
          ],
          [
            "Adquisición",
            "Registrar fecha, zona, herramienta, procedimiento y limitaciones; evitar modificar fuente cuando sea posible."
          ],
          [
            "Hash",
            "SHA-256 de original/export y copia permite comprobar coincidencia binaria; no demuestra identidad del autor ni legalidad."
          ],
          [
            "Custodia",
            "Registrar entregas, responsables, almacenamiento, accesos y cambios; art. 185 exige procedimientos de cadena de custodia para elementos útiles de inspección."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Preservar identidad, integridad y trazabilidad",
        "text": "Dos archivos con SHA-256 igual ofrecen evidencia muy fuerte de identidad binaria; no prueban que la fuente original fuera veraz."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Separar soporte original y copia analítica",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Export original",
            "Conservarlo sin sobrescritura, con inventario y huella cuando corresponda."
          ],
          [
            "Copia de trabajo",
            "Ordenar, filtrar, normalizar y calcular en un archivo separado."
          ],
          [
            "Transformaciones",
            "Registrar versión, fórmulas, zona horaria, filtros, recuentos antes/después y herramienta."
          ],
          [
            "Resultado",
            "Entregar informe con trazabilidad a filas o eventos originales; limitar accesos a datos protegidos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Separar soporte original y copia analítica",
        "text": "Un CSV abierto y guardado en Excel puede cambiar fechas, separadores o codificación; mantener la exportación inicial y documentar conversiones."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Competencia y explicación de límites",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Arts. 155, 200–201",
            "Aseguramiento con habilitación y garantías; el art. 200 reserva ejercicio de policía judicial al Procurador General en los términos legales."
          ],
          [
            "Art. 179",
            "El perito recoge, asegura, registra y documenta evidencia; no declara responsabilidad."
          ],
          [
            "Ley 527",
            "Valorar confiabilidad del método, integridad e identificación del iniciador, no solo existencia del archivo."
          ],
          [
            "Ruptura o vacío",
            "Documentar el incidente, evaluar qué puede verificarse y su efecto jurídico; no ocultarlo ni declarar automáticamente nulidad de todo el expediente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Competencia y explicación de límites",
        "text": "Si se pierde un registro de entrega, reconstruir soportes verificables sin fabricar firmas ni fechas; informar el límite a la autoridad."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m35": [
    "ley-1952-2019",
    "pgn-guia-pruebas"
  ],
  "pgn-m36": [
    "ley-1952-2019",
    "pgn-guia-pruebas",
    "ley-1581-2012"
  ],
  "pgn-m37": [
    "ley-1952-2019",
    "constitucion",
    "pgn-guia-pruebas"
  ],
  "pgn-m38": [
    "ley-1952-2019",
    "pgn-guia-investigacion",
    "pgn-guia-pruebas",
    "ley-527-1999"
  ],
  "pgn-m39": [
    "ley-1952-2019",
    "pgn-guia-pruebas",
    "ley-2365-2024"
  ],
  "pgn-m40": [
    "ley-1952-2019",
    "pgn-guia-pruebas",
    "ley-527-1999"
  ],
  "pgn-m41": [
    "ley-1952-2019",
    "ley-2094-2021",
    "constitucion",
    "pgn-guia-pruebas"
  ],
  "pgn-m42": [
    "ley-1952-2019",
    "pgn-guia-pruebas"
  ],
  "pgn-m43": [
    "ley-1952-2019",
    "pgn-guia-pruebas"
  ],
  "pgn-m44": [
    "ley-1952-2019",
    "ley-2094-2021",
    "pgn-guia-pruebas",
    "ley-527-1999",
    "agn-acuerdo-001-2024"
  ]
}
export function auditedModuleBlocksM35M44(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM35M44(moduleId: string): string[] { return sources[moduleId] ?? [] }
