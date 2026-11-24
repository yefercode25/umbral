import type { LessonBlock } from '../../../src/types/course'

/** Auditoría M45–M54: prevención, intervención y contratación. */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m45": {
    "1": [
      {
        "type": "comparison",
        "title": "Finalidad, alcance y límites",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Prevención integral",
            "Las funciones misionales incorporan elementos preventivos; la función preventiva conserva objeto propio."
          ],
          [
            "Prevención y control de gestión",
            "Identificar riesgos para derechos y gestión pública y verificar medidas de reducción."
          ],
          [
            "Autonomía",
            "El operador no sustituye las decisiones de la entidad vigilada ni anticipa responsabilidad disciplinaria."
          ],
          [
            "Racionalidad",
            "Escoger una actuación proporcionada, dentro de competencia y con fundamento."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Finalidad, alcance y límites",
        "text": "Una alerta sobre un pliego restrictivo permite pedir justificación y seguimiento; no faculta al operador para adjudicar."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Tres escenarios preventivos",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Anticipación (art. 11.1)",
            "Actuar ante riesgo antes de su materialización."
          ],
          [
            "Mitigación y/o restitución (11.2)",
            "Tras una vulneración, evitar propagación o repetición, mitigar consecuencias y promover restitución."
          ],
          [
            "Orientación (11.3)",
            "Facilitar el ejercicio de derechos ante sujetos vigilados cuando el público solicita orientación."
          ],
          [
            "Clasificación dinámica",
            "Un cambio de hechos puede modificar el escenario y exigir nueva coordinación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tres escenarios preventivos",
        "text": "Si un servicio escolar se interrumpe, el caso no pierde sentido preventivo: se evalúan medidas para evitar agravamiento y restablecer el derecho."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "De la alerta al seguimiento",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Evidencia",
            "Registrar fuente, riesgo, población y efecto probable o materializado."
          ],
          [
            "Actuación",
            "Solicitar información, advertir o recomendar dentro de competencia y procedimientos."
          ],
          [
            "Respuesta",
            "Verificar medidas de la entidad, responsable y plazo."
          ],
          [
            "Cierre",
            "Documentar resultado y riesgo residual; examinar noticia disciplinaria por vía separada cuando corresponda."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: De la alerta al seguimiento",
        "text": "Un oficio contestado no demuestra por sí solo que se eliminó el riesgo; comprobar cambios efectivamente implementados."
      }
    ]
  },
  "pgn-m46": {
    "1": [
      {
        "type": "comparison",
        "title": "SIP: estructura y principios",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Sistema",
            "Integra responsables, reglas, herramientas y coordinación de la prevención."
          ],
          [
            "Flexibilidad y racionalidad",
            "Seleccionar medios razonables según procedimientos y competencia."
          ],
          [
            "Oportunidad y priorización",
            "Atender a tiempo y ponderar magnitud del riesgo y derechos afectados."
          ],
          [
            "Coordinación e integralidad",
            "Articular dependencias y sistemas de información, evitando duplicación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: SIP: estructura y principios",
        "text": "Dos oficinas con información complementaria deben coordinar actuaciones; contar dos expedientes no equivale a mejorar la cobertura."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Competencia y coordinación preventiva",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Territorial y temático",
            "Aplicar criterios de la resolución y actos vigentes de asignación de funciones."
          ],
          [
            "Primacía (art. 15)",
            "Sin asignación simultánea, entre dependencias competentes conoce la que asumió primero, sin perjuicio de reglas especiales."
          ],
          [
            "Actuación conjunta (17)",
            "La oficina competente promueve colaboración con otras dependencias."
          ],
          [
            "Conflicto (16)",
            "Resolver por autoridad habilitada mediante decisión motivada; no abandonar el asunto por discrepancia interna."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Competencia y coordinación preventiva",
        "text": "La especialidad informática de un profesional no define por sí sola competencia territorial ni misional."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Planeación y evaluación verificable",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 22",
            "Articular planes institucionales, plan preventivo y operativo anual."
          ],
          [
            "Art. 23",
            "Aplicar procesos e instrumentos adoptados por el SGC."
          ],
          [
            "Art. 24",
            "Usar indicadores estandarizados y mecanismos de evaluación."
          ],
          [
            "SIM",
            "Registrar actuaciones, responsables, soportes y seguimiento con calidad y acceso autorizado."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Planeación y evaluación verificable",
        "text": "Veinte oficios son productos; una medida verificable de reducción de barreras permite evaluar resultado."
      }
    ]
  },
  "pgn-m47": {
    "1": [
      {
        "type": "comparison",
        "title": "Cadena de valor de la política pública",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Insumo",
            "Recursos, personal, presupuesto y datos disponibles."
          ],
          [
            "Actividad",
            "Acciones realizadas para producir bienes o servicios."
          ],
          [
            "Producto",
            "Bien o servicio entregado, con cobertura y calidad verificables."
          ],
          [
            "Resultado e impacto",
            "Cambios observados en población; atribución causal exige evidencia adicional."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cadena de valor de la política pública",
        "text": "Noventa talleres son productos o actividades según ficha; no acreditan por sí solos reducción de violencia."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Indicadores comparables y verificables",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Cobertura",
            "Beneficiarios únicos / población objetivo; definir período y unidad."
          ],
          [
            "Línea base",
            "Valor inicial comparable con meta y medición posterior."
          ],
          [
            "Calidad",
            "Validar duplicados, faltantes, definición y fuente; distinguir cero de dato ausente."
          ],
          [
            "Eficiencia y eficacia",
            "Relacionar recursos con productos y cumplimiento de objetivos, sin confundir ejecución presupuestal con efecto."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Indicadores comparables y verificables",
        "text": "Si 120 registros corresponden a 80 personas únicas de 200 elegibles, la cobertura es 40 %, no 60 %."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Riesgos, controles y causalidad",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Riesgo",
            "Evento posible con causa y consecuencia descritas."
          ],
          [
            "Control",
            "Medida con responsable, frecuencia, evidencia y capacidad de reducir riesgo."
          ],
          [
            "Residual",
            "Riesgo restante tras evaluar diseño y operación del control."
          ],
          [
            "Interpretación",
            "Comparar períodos, composición poblacional y factores externos antes de atribuir causalidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Riesgos, controles y causalidad",
        "text": "Un aumento de reportes puede reflejar mayor acceso a denuncia, no necesariamente aumento equivalente de hechos."
      }
    ]
  },
  "pgn-m48": {
    "1": [
      {
        "type": "comparison",
        "title": "Intervención: finalidad y autoridad",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 277.7",
            "Intervenir en procesos y ante autoridades cuando sea necesario para proteger orden jurídico, patrimonio público o derechos fundamentales."
          ],
          [
            "Habilitación",
            "Identificar jurisdicción, proceso, etapa y competencia del agente."
          ],
          [
            "Independencia",
            "El juez o autoridad conserva la decisión de fondo."
          ],
          [
            "Distinción",
            "La intervención no es por sí misma investigación disciplinaria ni gestión administrativa."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Intervención: finalidad y autoridad",
        "text": "Un concepto del Ministerio Público puede pedir una medida judicial, pero no equivale a decretarla."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Intervención contencioso-administrativa",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "CPACA art. 303",
            "Ministerio Público puede actuar como demandante o sujeto procesal especial en los términos legales."
          ],
          [
            "Facultades",
            "Examinar atribución para intervenir, solicitar pruebas, formular conceptos o recursos según régimen y etapa."
          ],
          [
            "Soporte",
            "Distinguir expediente judicial, fuentes externas y argumentos institucionales."
          ],
          [
            "Oportunidad",
            "Verificar términos y legitimación específicos, no usar plantillas de otra jurisdicción."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Intervención contencioso-administrativa",
        "text": "El interés público no crea automáticamente legitimación para un recurso que la ley no contempla."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Producto de apoyo al agente",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hechos",
            "Cronología verificable, pretensiones, actuaciones y documentos relevantes."
          ],
          [
            "Problema jurídico",
            "Delimitar norma, competencia y finalidad de intervención."
          ],
          [
            "Propuesta",
            "Argumentar posición con prueba y normas, señalar límites y alternativas."
          ],
          [
            "Remisión",
            "Entregar al agente competente, preservar expediente y no decidir por cuenta propia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Producto de apoyo al agente",
        "text": "El informe de un profesional de sistemas puede explicar registros de un proceso sin sustituir el concepto jurídico del agente."
      }
    ]
  },
  "pgn-m49": {
    "1": [
      {
        "type": "comparison",
        "title": "Igualdad material y ajustes razonables",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Igualdad (art. 13)",
            "Identificar barreras y medidas de protección, sin presumir incapacidad."
          ],
          [
            "Accesibilidad",
            "Eliminar barreras físicas, comunicativas y digitales."
          ],
          [
            "Ajuste razonable",
            "Adaptación necesaria para el caso concreto, respetando autonomía y condiciones legales."
          ],
          [
            "Atención",
            "Consultar preferencia de comunicación y ofrecer alternativas equivalentes."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Igualdad material y ajustes razonables",
        "text": "Una persona sorda puede preferir comunicación escrita, interpretación o un canal accesible; no imponer acompañante familiar."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Atención y protección de datos",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Necesidad",
            "Solicitar solo datos indispensables para la actuación."
          ],
          [
            "Sensibles",
            "Aplicar régimen de tratamiento y acceso restringido, con base legal y finalidad."
          ],
          [
            "No revictimización",
            "Evitar repetir relatos sin necesidad y reducir exposición a personas no autorizadas."
          ],
          [
            "Competencia",
            "Orientar, remitir y activar rutas legales sin prometer decisiones ajenas."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Atención y protección de datos",
        "text": "Un tablero de seguimiento puede mostrar cifras agregadas sin publicar diagnósticos, domicilios o identificadores."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Enfoque diferencial aplicado",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Contexto",
            "Edad, discapacidad, género, pertenencia étnica y otras barreras pertinentes, sin estereotipos."
          ],
          [
            "Interseccionalidad",
            "Considerar concurrencia de barreras y relaciones de poder."
          ],
          [
            "Prioridad",
            "Art. 20 Ley 1755: prioridad para reconocimiento de derecho fundamental cuando evita perjuicio irremediable, con prueba sumaria de titularidad y riesgo; medidas inmediatas ante peligro inminente de vida o integridad por salud o seguridad, y trámite preferencial de peticiones de periodistas para su actividad."
          ],
          [
            "Prueba",
            "En los supuestos del art. 160A CGD, aplicar enfoque especial sin eliminar defensa ni estándar de prueba."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Enfoque diferencial aplicado",
        "text": "Si existe peligro inminente para vida o integridad, verificar medidas inmediatas y ruta competente, no esperar sin más el plazo ordinario."
      }
    ]
  },
  "pgn-m50": {
    "1": [
      {
        "type": "comparison",
        "title": "Ciclo contractual y principios",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Planeación",
            "Justificar necesidad, objeto, recursos, mercado y riesgos."
          ],
          [
            "Selección",
            "Modalidad y reglas según ley, objeto, cuantía y supuestos especiales."
          ],
          [
            "Celebración y ejecución",
            "Verificar perfeccionamiento y requisitos de ejecución, no confundirlos."
          ],
          [
            "Cierre",
            "Recepción, obligaciones pendientes y liquidación cuando proceda; conservar trazabilidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Ciclo contractual y principios",
        "text": "La firma de un acta de inicio no corrige por sí sola ausencia de requisitos legales de ejecución."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Modalidades: no elegir por conveniencia",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Licitación",
            "Regla general salvo modalidad legal diferente."
          ],
          [
            "Selección abreviada",
            "Causales legales como menor cuantía o bienes uniformes, según supuesto."
          ],
          [
            "Concurso de méritos",
            "Selección de consultores o proyectos en los casos legales."
          ],
          [
            "Directa y mínima cuantía",
            "Directa exige causal; mínima cuantía tiene umbral de hasta 10 % de menor cuantía, sin perjuicio de reglas especiales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Modalidades: no elegir por conveniencia",
        "text": "Si la menor cuantía aplicable es 280 SMMLV, el límite aritmético de mínima cuantía es 28 SMMLV; no depende del tiempo disponible."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Perfeccionamiento, ejecución y urgencia",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 41",
            "Acuerdo sobre objeto y contraprestación elevado a escrito, con excepciones legales."
          ],
          [
            "Ejecución",
            "Comprobar requisitos aplicables de garantía, disponibilidad/registro presupuestal y demás condiciones legales."
          ],
          [
            "Urgencia manifiesta (42–43)",
            "Causal excepcional motivada por hechos legales; control correspondiente."
          ],
          [
            "Límite",
            "El retraso de planeación o cierre de vigencia no demuestra por sí solo urgencia manifiesta."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Perfeccionamiento, ejecución y urgencia",
        "text": "Un servicio urgente exige analizar causal concreta; no fabricar documentos retroactivos para aparentar cumplimiento."
      }
    ]
  },
  "pgn-m51": {
    "1": [
      {
        "type": "comparison",
        "title": "Estudios previos y competencia efectiva",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Necesidad y objeto",
            "Definir resultado y alcance verificables, sin diseñar alrededor de un proveedor."
          ],
          [
            "Mercado",
            "Comparar opciones, precios, disponibilidad y capacidad de proveedores."
          ],
          [
            "Requisitos",
            "Relacionar experiencia, capacidad y especificaciones con riesgo y objeto."
          ],
          [
            "Publicidad",
            "Registrar estudios, documentos y cambios en SECOP según régimen."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Estudios previos y competencia efectiva",
        "text": "Una certificación exclusiva puede ser justificable por razones objetivas, pero la falta de justificación exige revisión, no acusación automática."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Habilitación, puntaje y subsanación",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Habilitantes",
            "Verifican requisitos de participación; por regla general no otorgan puntaje, con excepciones legales."
          ],
          [
            "Evaluación",
            "Aplicar factores y fórmulas publicados de la modalidad correspondiente."
          ],
          [
            "Subsanación (art. 5)",
            "Solicitar requisitos no puntuables conforme a términos legales; no permitir acreditar circunstancias surgidas después del cierre."
          ],
          [
            "Excepción",
            "No entrega de garantía de seriedad junto a oferta cuando es exigible no es subsanable; mínima cuantía y subasta tienen reglas de oportunidad especiales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Habilitación, puntaje y subsanación",
        "text": "Un certificado omitido puede acreditar experiencia previa al cierre; un contrato ejecutado después del cierre no crea retroactivamente el requisito."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Mínima cuantía y cambios de reglas",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Criterio",
            "Verificar la oferta de menor precio y cumplimiento de condiciones; si no cumple, revisar siguiente conforme al procedimiento."
          ],
          [
            "Subsanación",
            "Respetar término preclusivo fijado en invitación para cada requerimiento; si no se fija, subsanar hasta antes de finalizar traslado del informe de evaluación (art. 2.2.1.2.1.5.2 del Decreto 1082, modificado por Decreto 1860/2021). No mejorar factores de comparación."
          ],
          [
            "Adendas",
            "En mínima cuantía, adendas a condiciones hasta un día hábil antes de presentación de ofertas, sin perjuicio de adendas posteriores al cronograma en los términos legales. Publicar informe de evaluación al menos un día hábil; oferta y aceptación constituyen contrato."
          ],
          [
            "Control PGN",
            "Examinar motivación y riesgo competitivo sin sustituir evaluación de la entidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Mínima cuantía y cambios de reglas",
        "text": "Una oferta más barata no puede aceptarse automáticamente si incumple condiciones exigibles y no subsana lo procedente."
      }
    ]
  },
  "pgn-m52": {
    "1": [
      {
        "type": "comparison",
        "title": "Supervisión e interventoría: alcance",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Supervisión (83)",
            "Seguimiento técnico, administrativo, financiero, contable y jurídico por la entidad cuando no requiere conocimiento especializado."
          ],
          [
            "Interventoría",
            "Seguimiento técnico contratado cuando se necesita especialización o complejidad/extensión lo justifica; puede incluir otros aspectos según objeto."
          ],
          [
            "Concurrencia",
            "Por regla general no concurren sobre el mismo alcance; si se divide vigilancia, delimitar funciones."
          ],
          [
            "Interventor",
            "Su contrato es supervisado directamente por la entidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Supervisión e interventoría: alcance",
        "text": "Contratar interventoría técnica no libera a la entidad de las demás funciones de vigilancia que no le fueron asignadas."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Certificación y modificaciones",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 84",
            "Solicitar informes y mantener informada a entidad de riesgos e incumplimientos."
          ],
          [
            "Pago",
            "Relacionar obligación, período, evidencia de entrega, calidad y aceptación; factura no basta."
          ],
          [
            "Adición (art. 40 Ley 80)",
            "Regla general: no superar 50 % del valor inicial expresado en SMMLV; verificar excepciones aplicables."
          ],
          [
            "Prórroga",
            "Distinguir ampliación temporal de adición de valor, motivar y tramitar por autoridad competente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Certificación y modificaciones",
        "text": "En un contrato inicial de 100 SMMLV sujeto a la regla general, adiciones acumuladas de 45 y 10 SMMLV exceden el límite de 50."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Incumplimiento y debido proceso",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Hallazgo",
            "Registrar obligación, evidencia, plazo, impacto y comunicaciones."
          ],
          [
            "Art. 86",
            "La entidad competente cita a audiencia con hechos, cláusulas y consecuencias; incluye al garante cuando corresponda."
          ],
          [
            "Decisión",
            "Contratista y garante pueden pronunciarse y aportar prueba; decisión motivada y reposición en audiencia."
          ],
          [
            "Rol",
            "Supervisor informa y sustenta; no impone por sí solo sanción contractual salvo competencia legal atribuida."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Incumplimiento y debido proceso",
        "text": "Un informe de incumplimiento permite iniciar el trámite correspondiente, no reemplaza la audiencia ni la decisión competente."
      }
    ]
  },
  "pgn-m53": {
    "1": [
      {
        "type": "comparison",
        "title": "Restricciones del proponente y del evaluador",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Inhabilidad",
            "Restricción legal para participar o contratar, según causal, sujeto y momento."
          ],
          [
            "Incompatibilidad",
            "Prohibición legal por condición o vínculo en supuesto definido."
          ],
          [
            "Conflicto de interés",
            "Interés particular directo que compromete imparcialidad del servidor; tramitar impedimento."
          ],
          [
            "No analogía",
            "No crear causales por sospecha o cercanía social; comprobar disposición y hechos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Restricciones del proponente y del evaluador",
        "text": "El impedimento de un evaluador no equivale automáticamente a una inhabilidad del proponente; se analizan por separado."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Inhabilidad sobreviniente (art. 9)",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Contratista",
            "Si sobreviene causal, ceder contrato con autorización escrita o renunciar a ejecución si no es posible, conforme a la norma."
          ],
          [
            "Proponente",
            "Se entiende que renuncia a participación y derechos surgidos del proceso."
          ],
          [
            "Consorcio o unión temporal",
            "Miembro afectado cede participación a tercero previa autorización escrita; no entre miembros."
          ],
          [
            "Excepciones",
            "Art. 9 modificado por Ley 2014/2019: si sobreviene la inhabilidad del art. 8.1.j o sanción administrativa por corrupción al contratista, no procede la renuncia prevista en el artículo; revisar la regla especial de cesión y sus condiciones."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Inhabilidad sobreviniente (art. 9)",
        "text": "Una restricción surgida después de celebrar el contrato no se examina como si hubiera existido desde la presentación de oferta."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Conflicto de interés y trámite",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Identificación",
            "Precisar interés, relación y actividad en que interviene el servidor."
          ],
          [
            "CPACA 11–12",
            "Cuando aplique, manifestar impedimento y tramitar ante autoridad competente; respetar suspensión y decisión."
          ],
          [
            "CGD 44",
            "Declarar impedimento si interés particular y directo entra en conflicto con interés general."
          ],
          [
            "Trazabilidad",
            "Registrar declaración, decisión y reasignación; no continuar por conveniencia ni excluir sin causal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Conflicto de interés y trámite",
        "text": "Que otro funcionario firme el acto no elimina necesariamente el conflicto de quien prepara la evaluación."
      }
    ]
  },
  "pgn-m54": {
    "1": [
      {
        "type": "comparison",
        "title": "Del PAAC al Programa de Transparencia y Ética Pública",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Art. 73 modificado",
            "Las entidades obligadas deben implementar PTEP con enfoque de riesgos en los términos legales."
          ],
          [
            "Decreto 1122/2024",
            "Reglamenta el programa y adopta anexo técnico; consultar versión vigente y plazos de transición."
          ],
          [
            "Contenido",
            "Gestión de riesgos de corrupción e integridad, canales de denuncia, transparencia, articulación y controles conforme al anexo."
          ],
          [
            "Publicación",
            "Publicar el programa en sede electrónica en los términos de la Ley 1712; no divulgar datos protegidos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Del PAAC al Programa de Transparencia y Ética Pública",
        "text": "No tratar el antiguo PAAC como nombre y contenido universalmente suficiente; verificar régimen y transición aplicables."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Señal, anomalía y hallazgo",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Señal",
            "Patrón que merece revisión; no acredita conducta."
          ],
          [
            "Anomalía",
            "Desviación comprobada frente a dato o regla de referencia."
          ],
          [
            "Hallazgo",
            "Hecho documentado con criterio, condición y efectos o riesgos, según metodología."
          ],
          [
            "Responsabilidad",
            "Exige régimen, competencia y prueba; una puntuación de riesgo no decide culpabilidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Señal, anomalía y hallazgo",
        "text": "Varias adiciones pueden ser legales o revelar problemas de planeación; examinar objeto, valor, justificación y momento."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "SECOP, controles y análisis reproducible",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Datos",
            "Identificar fuente, fecha de extracción y unidades de registro; deduplicar contratos y modificaciones."
          ],
          [
            "Contraste",
            "Comparar concentración, objeto, modalidad y mercado con documentos del expediente."
          ],
          [
            "Protección",
            "Restringir datos personales y proteger canales y soportes de denuncia según régimen."
          ],
          [
            "Escalamiento",
            "Priorizar revisión, requerir información y remitir posibles hechos por competencia; no publicar etiquetas de culpa."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: SECOP, controles y análisis reproducible",
        "text": "Una tabla con cinco filas del mismo contrato por modificaciones no equivale a cinco contratos adjudicados al proveedor."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m45": [
    "constitucion",
    "decreto-262-2000",
    "pgn-guia-preventiva",
    "pgn-res-132-2014"
  ],
  "pgn-m46": [
    "pgn-guia-preventiva",
    "pgn-sgc",
    "pgn-res-132-2014"
  ],
  "pgn-m47": [
    "pgn-guia-preventiva",
    "pgn-sgc",
    "decreto-1499-2017",
    "pgn-res-132-2014"
  ],
  "pgn-m48": [
    "constitucion",
    "decreto-262-2000",
    "cpaca"
  ],
  "pgn-m49": [
    "constitucion",
    "ley-1618-2013",
    "ley-1755-2015",
    "ley-1581-2012",
    "ley-2365-2024"
  ],
  "pgn-m50": [
    "ley-80-1993",
    "ley-1150-2007",
    "decreto-1082-2015"
  ],
  "pgn-m51": [
    "ley-80-1993",
    "ley-1150-2007",
    "decreto-1082-2015",
    "ley-1474-2011"
  ],
  "pgn-m52": [
    "ley-80-1993",
    "ley-1474-2011",
    "ley-1150-2007",
    "decreto-1082-2015"
  ],
  "pgn-m53": [
    "ley-80-1993",
    "ley-1474-2011",
    "constitucion",
    "cpaca",
    "ley-1952-2019"
  ],
  "pgn-m54": [
    "ley-1474-2011",
    "ley-2195-2022",
    "ley-1712-2014",
    "decreto-1122-2024"
  ]
}
export function auditedModuleBlocksM45M54(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM45M54(moduleId: string): string[] { return sources[moduleId] ?? [] }
