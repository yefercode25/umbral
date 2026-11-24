import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m75": {
    "1": [
      {
        "type": "comparison",
        "title": "Especialidad condicional y núcleo común",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Núcleo común",
            "Instrucción, prueba, prevención y gestión institucional."
          ],
          [
            "Economía y Hacienda Pública",
            "Profundización condicionada a las funciones y orientaciones oficiales aplicables."
          ],
          [
            "Prioridad",
            "No inferir ponderaciones ni obligatoriedad universal de una lista de conocimientos adicionales."
          ],
          [
            "Transferencia",
            "Usar información financiera para formular preguntas, no sustituir autoridades tributarias o fiscales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Especialidad condicional y núcleo común",
        "text": "Una actuación sobre pagos requiere entender presupuesto, aunque esto no convierte todos los empleos del concurso en cargos de Hacienda."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Hacienda pública y política económica",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Ingresos",
            "Recursos tributarios, no tributarios y de capital según clasificación aplicable."
          ],
          [
            "Gasto",
            "Funcionamiento, inversión y servicio de deuda en el régimen presupuestal correspondiente."
          ],
          [
            "Política fiscal",
            "Decisiones de ingresos, gasto y financiación; distinguir de política monetaria."
          ],
          [
            "Control",
            "Contrastar finalidad, apropiación, fuente y ejecución con normas y soportes."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Hacienda pública y política económica",
        "text": "Una inversión puede estar financiada con ingresos corrientes o recursos de capital; comprobar restricciones de la fuente antes de evaluar uso."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Lectura del riesgo financiero",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Nominal",
            "Valor monetario sin ajuste de poder adquisitivo."
          ],
          [
            "Real",
            "Valor ajustado por índice de precios pertinente; no equiparar crecimiento nominal y real."
          ],
          [
            "Stock/flujo",
            "Deuda a una fecha frente a ingresos o gastos de un período."
          ],
          [
            "Competencia",
            "Describir riesgos y remitir a autoridad competente cuando corresponda."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Lectura del riesgo financiero",
        "text": "Con inflación de 10 % y gasto nominal que crece 10 %, el gasto real es aproximadamente constante si el deflactor es apropiado."
      }
    ]
  },
  "pgn-m76": {
    "1": [
      {
        "type": "comparison",
        "title": "Obligación tributaria y deberes formales",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Sustancial",
            "Pago del tributo cuando se realiza el presupuesto legal generador (ET art. 1)."
          ],
          [
            "Formal",
            "Declarar, informar o cumplir otros deberes según régimen; no equivale necesariamente a impuesto a pagar."
          ],
          [
            "Elementos",
            "Sujeto activo/pasivo, hecho generador, base y tarifa conforme a norma aplicable."
          ],
          [
            "Principios",
            "Legalidad, equidad, eficiencia, progresividad y no retroactividad en términos constitucionales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Obligación tributaria y deberes formales",
        "text": "Una declaración con saldo cero puede seguir siendo exigible si la norma impone el deber formal."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Ingresos y regulación económica",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Tributos",
            "Distinguir impuestos, tasas y contribuciones según fundamento y régimen."
          ],
          [
            "Elasticidad",
            "Respuesta de una variable ante otra; no confundir cambio de recaudo con cambio de tarifa."
          ],
          [
            "Mercado",
            "Precios, oferta, demanda, competencia y fallas de mercado."
          ],
          [
            "Financiación",
            "Separar ingresos, endeudamiento y costos financieros; verificar reglas específicas."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Ingresos y regulación económica",
        "text": "Un recaudo menor puede asociarse a reducción de base, exenciones, estacionalidad o problemas de gestión; requiere contraste."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Control sin atribución automática",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Conciliación",
            "Comparar declaración, liquidación, recaudo y saldo según fecha y concepto."
          ],
          [
            "Indicador",
            "Usar población, período y denominador comparables."
          ],
          [
            "Hipótesis",
            "Examinar cambios normativos, económicos y operativos."
          ],
          [
            "Competencia",
            "El operador PGN no reemplaza a la autoridad tributaria ni presume falta por una anomalía."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Control sin atribución automática",
        "text": "Una caída de recaudo obliga a examinar composición y condiciones del período, no prueba por sí sola corrupción."
      }
    ]
  },
  "pgn-m77": {
    "1": [
      {
        "type": "comparison",
        "title": "Momentos de la ejecución presupuestal",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Apropiación",
            "Autorización máxima de gasto bajo condiciones del presupuesto."
          ],
          [
            "CDP",
            "Acredita disponibilidad de apropiación antes de asumir compromisos."
          ],
          [
            "Registro presupuestal",
            "Afecta recursos al compromiso, con valor y plazo según régimen."
          ],
          [
            "Obligación/pago",
            "Obligación por cumplimiento y reconocimiento aplicable; pago extingue la obligación según trámite."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Momentos de la ejecución presupuestal",
        "text": "Apropiación 100, compromisos 80, obligaciones 50 y pagos 35: son indicadores distintos, no cuatro saldos equivalentes."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Contabilidad pública y devengo",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Devengo",
            "Reconocer hechos económicos cuando ocurren según criterios, no exclusivamente al cobrar o pagar."
          ],
          [
            "Activo/pasivo",
            "Recursos controlados y obligaciones presentes según marco aplicable."
          ],
          [
            "Ingreso/gasto",
            "Elementos de desempeño financiero, distintos de recaudo y pago presupuestal."
          ],
          [
            "Conciliación",
            "Revisar cortes, documentos, cuentas y diferencias de reconocimiento."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Contabilidad pública y devengo",
        "text": "Una prestación recibida y reconocida puede generar un pasivo aunque el pago ocurra en el siguiente período."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cierre y lectura de soportes",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Reserva presupuestal",
            "En régimen nacional, compromiso legalmente contraído pendiente de cumplimiento al cierre según art. 89."
          ],
          [
            "Cuenta por pagar",
            "Obligación por anticipos pactados o bienes/servicios entregados, según régimen y requisitos."
          ],
          [
            "Control",
            "Verificar CDP, RP, contrato, recibo, obligación, pago y fechas; aplicar régimen territorial si corresponde."
          ],
          [
            "Límite",
            "Una diferencia es señal de conciliación, no prueba de detrimento."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cierre y lectura de soportes",
        "text": "Un compromiso de 80 con obligaciones por 50 no convierte automáticamente 30 en dinero perdido."
      }
    ]
  },
  "pgn-m78": {
    "1": [
      {
        "type": "comparison",
        "title": "Régimen especial y poder preferente",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Militares",
            "Identificar destinatarios del Código Disciplinario Militar y regla temporal aplicable."
          ],
          [
            "Policía",
            "Estatuto Disciplinario Policial; revisar destinatario y competencia específica."
          ],
          [
            "PGN",
            "Poder disciplinario preferente conforme a Constitución y normas aplicables; no confundir con competencia automática del profesional."
          ],
          [
            "Integración",
            "Verificar norma especial y remisiones antes de aplicar supletoriamente el CGD."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Régimen especial y poder preferente",
        "text": "Un servidor civil adscrito a una institución militar no adquiere automáticamente el mismo régimen disciplinario de un militar por trabajar allí."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Derechos humanos y DIH",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "DDHH",
            "Protección en paz y conflicto armado, con reglas específicas de limitación y garantías."
          ],
          [
            "DIH",
            "Aplicable cuando existe conflicto armado; protege a quienes no participan o dejaron de participar."
          ],
          [
            "Coexistencia",
            "La aplicación del DIH no elimina automáticamente el derecho de los derechos humanos."
          ],
          [
            "Contexto",
            "Determinar hechos y régimen aplicable; no calificar todo episodio de violencia como conflicto armado."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Derechos humanos y DIH",
        "text": "Una actuación administrativa ordinaria de policía exige analizar derechos humanos y normas internas; no aplicar automáticamente DIH."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Control institucional y registros sensibles",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Inventarios",
            "Verificar autorización, responsables, registros de entrega y devolución y trazabilidad de bienes controlados."
          ],
          [
            "Garantías",
            "Preservar documentación y derechos de víctimas e investigados; evitar exposición de datos sensibles."
          ],
          [
            "Acceso",
            "Compartir por canales autorizados según necesidad y reserva legal."
          ],
          [
            "Alcance",
            "Remitir hallazgos a competente; distinguir responsabilidad disciplinaria, penal y fiscal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Control institucional y registros sensibles",
        "text": "Una diferencia de inventario exige conciliación documental y verificación de custodios, no inferencia automática de responsabilidad."
      }
    ]
  },
  "pgn-m79": {
    "1": [
      {
        "type": "comparison",
        "title": "Jerarquía y vigencia de fuentes",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Convocatoria",
            "Identificar empleo, código, grado, versión y acto que aprueba o modifica."
          ],
          [
            "Guía de pruebas",
            "Cuando exista, contrastar alcance específico y reglas de aplicación."
          ],
          [
            "Manual",
            "Verificar versión y ficha del empleo; no sustituir convocatoria específica por resumen general."
          ],
          [
            "Inferencia",
            "Separar contenidos explícitos, complementarios y condicionales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Jerarquía y vigencia de fuentes",
        "text": "Una resolución que modifica varias convocatorias no permite inferir el número de vacantes de una sola sin consultar su formato actualizado."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Matriz de cobertura y actualización",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Fuente",
            "Registrar enlace, acto, versión, fecha y sección."
          ],
          [
            "Cobertura",
            "Relacionar requisito con módulo, lección y ejercicio."
          ],
          [
            "Brecha",
            "Identificar requisito sin evidencia o tema inferido sin respaldo directo."
          ],
          [
            "Cambio",
            "Registrar prioridad y motivo sin declarar oficial lo que es pedagógico."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Matriz de cobertura y actualización",
        "text": "Si aparece una guía que añade un eje, mapearlo a lecciones y pruebas antes de modificar el plan."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Versionado y progreso",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "ID",
            "Mantener identificadores estables cuando el objetivo evaluado sea equivalente."
          ],
          [
            "Cambio sustancial",
            "Versionar contenido y distinguir resultados anteriores si cambia el constructo evaluado."
          ],
          [
            "Regresión",
            "Verificar preguntas, recursos visuales, fuentes, aplicación y persistencia."
          ],
          [
            "Comunicación",
            "Indicar alcance de la actualización y pendientes, no prometer cobertura completa del examen."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Versionado y progreso",
        "text": "Una pregunta con clave conservada puede cambiar sustancialmente; revisar si el historial aún representa la misma habilidad."
      }
    ]
  },
  "pgn-m80": {
    "1": [
      {
        "type": "comparison",
        "title": "Arquitectura y valor público",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Negocio",
            "Servicios, capacidades, procesos y objetivos institucionales."
          ],
          [
            "Información",
            "Fuentes maestras, modelos, calidad, propietarios e intercambio."
          ],
          [
            "Aplicaciones",
            "Responsabilidades, interfaces, dependencias y reglas de negocio."
          ],
          [
            "Tecnología",
            "Infraestructura, comunicaciones y servicios; seguridad transversal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Arquitectura y valor público",
        "text": "Un trámite digital requiere integrar proceso, datos, aplicativo, identidad y operación; no basta comprar un servidor."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Integración e interoperabilidad",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "API",
            "Contrato de interfaz, versión, permisos, esquema y códigos de respuesta."
          ],
          [
            "Síncrono/asíncrono",
            "Respuesta inmediata frente a mensajes diferidos; evaluar latencia y consistencia."
          ],
          [
            "Idempotencia",
            "Reintentos no deben duplicar efectos cuando el diseño lo exige."
          ],
          [
            "Observabilidad",
            "Relacionar solicitudes, colas, errores y dependencias mediante identificadores."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Integración e interoperabilidad",
        "text": "Un mensaje reintentado puede crear duplicados si no se implementa deduplicación por identificador de operación."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Disponibilidad y diagnóstico",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Mapa",
            "Componentes, flujos, límites de confianza y responsables."
          ],
          [
            "Dependencia",
            "Identificar puntos únicos de falla y degradación parcial."
          ],
          [
            "Prueba",
            "Examinar datos, permisos, integración y presentación antes de cambiar producción."
          ],
          [
            "Impacto",
            "Relacionar falla con servicio, usuarios, derechos y continuidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Disponibilidad y diagnóstico",
        "text": "Una API devuelve datos correctos, pero el frontend no los muestra por filtro: la base no es necesariamente la causa."
      }
    ]
  },
  "pgn-m81": {
    "1": [
      {
        "type": "comparison",
        "title": "Capas, protocolos y direccionamiento",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "IP",
            "Direccionamiento y encaminamiento entre redes."
          ],
          [
            "TCP",
            "Transporte orientado a conexión y flujo confiable de bytes; no garantiza identidad humana."
          ],
          [
            "UDP",
            "Datagramas sin garantía de entrega u orden propia del protocolo."
          ],
          [
            "DNS",
            "Resolución de nombres y registros; distinguir caché, servidor y respuesta."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Capas, protocolos y direccionamiento",
        "text": "Un nombre que resuelve correctamente no garantiza que el servicio web esté disponible; verificar conexión y aplicación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Segmentación, NAT y VPN",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Subred",
            "CIDR indica bits de prefijo; /24 IPv4 contiene 256 direcciones totales, normalmente 254 utilizables en LAN tradicional."
          ],
          [
            "NAT",
            "Traduce direcciones y, según tipo, puertos; conservar registros temporales."
          ],
          [
            "VPN",
            "Túnel protegido entre extremos conforme a configuración; no garantiza legitimidad de toda actividad."
          ],
          [
            "Proxy",
            "Puede representar múltiples clientes; interpretar encabezados solo según frontera de confianza."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Segmentación, NAT y VPN",
        "text": "Un /26 tiene 64 direcciones totales y normalmente 62 utilizables; no confundir capacidad de subred con cantidad de usuarios."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Diagnóstico y evidencia de comunicaciones",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Resolución",
            "Comprobar DNS y resultado según red de origen."
          ],
          [
            "Conectividad",
            "Separar alcance IP, transporte, TLS y respuesta de aplicación."
          ],
          [
            "Correlación",
            "Fecha, zona, puerto, sesión, NAT/VPN y logs de extremo."
          ],
          [
            "Alcance",
            "Una conexión prueba comunicación técnica según fuente, no intención ni identidad personal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Diagnóstico y evidencia de comunicaciones",
        "text": "Un HTTP 403 puede indicar falta de autorización en la aplicación, aunque DNS y TCP funcionen."
      }
    ]
  },
  "pgn-m82": {
    "1": [
      {
        "type": "comparison",
        "title": "Riesgo, controles y CSF 2.0",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Activo",
            "Información, servicio o recurso cuyo valor debe protegerse."
          ],
          [
            "Amenaza/vulnerabilidad",
            "Posible causa de daño y debilidad susceptible de aprovechamiento."
          ],
          [
            "Riesgo",
            "Evaluar posibilidad y consecuencias en contexto; residual después de controles."
          ],
          [
            "CSF 2.0",
            "Govern, Identify, Protect, Detect, Respond, Recover; marco técnico, no obligación procesal colombiana."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Riesgo, controles y CSF 2.0",
        "text": "Una cuenta con privilegios excesivos es una debilidad; un acceso indebido comprobado es un incidente con impacto que debe evaluarse."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Respuesta a incidentes: SP 800-61r3",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Preparación",
            "Gobernanza, inventario, roles, comunicación y controles antes del incidente."
          ],
          [
            "Detección",
            "Validar señal, alcance y severidad, sin exigir autoría definitiva."
          ],
          [
            "Respuesta",
            "Contener de forma autorizada y proporcional, preservar evidencia y coordinar."
          ],
          [
            "Recuperación",
            "Restaurar servicios de forma segura, verificar eficacia y aprender; documentar decisiones."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Respuesta a incidentes: SP 800-61r3",
        "text": "Revocar sesiones comprometidas y preservar eventos puede contener el riesgo sin borrar la trazabilidad de la cuenta."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Continuidad, privacidad y recuperación",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "RTO",
            "Objetivo de tiempo máximo de recuperación según diseño de continuidad."
          ],
          [
            "RPO",
            "Objetivo de pérdida de datos tolerable expresado en tiempo."
          ],
          [
            "Respaldo",
            "Copia protegida y restauración probada; no equivale a continuidad garantizada."
          ],
          [
            "Notificación",
            "Evaluar ruta institucional y obligaciones legales aplicables de protección de datos; no divulgar información sensible indiscriminadamente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Continuidad, privacidad y recuperación",
        "text": "RPO de 15 minutos y RTO de dos horas son objetivos diferentes: pérdida de datos y tiempo de restablecimiento."
      }
    ]
  },
  "pgn-m83": {
    "1": [
      {
        "type": "comparison",
        "title": "Ciclo de vida y trazabilidad de requisitos",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Requisito",
            "Necesidad verificable, criterios de aceptación y autorización."
          ],
          [
            "Diseño",
            "Decisiones, arquitectura, riesgos y controles."
          ],
          [
            "Implementación",
            "Código, dependencias, revisión y versionado."
          ],
          [
            "Entrega",
            "Artefacto, pruebas, aprobaciones, configuración y despliegue correlacionados."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Ciclo de vida y trazabilidad de requisitos",
        "text": "Un commit aprobado no demuestra que ese mismo código fue desplegado: verificar artefacto y registro de pipeline."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Pruebas y desarrollo seguro",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Unitarias",
            "Comportamiento de componente aislado."
          ],
          [
            "Integración",
            "Interacciones entre servicios, base y dependencias."
          ],
          [
            "Aceptación/regresión",
            "Criterios de negocio y conservación de comportamientos previos."
          ],
          [
            "SSDF",
            "Preparar organización, proteger software, producir software seguro y responder a vulnerabilidades."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Pruebas y desarrollo seguro",
        "text": "Una prueba unitaria exitosa no verifica por sí sola permisos ni comportamiento real de una integración."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cambios, despliegue y reversión",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Identidad",
            "Commit, firma cuando aplique, artefacto y huella, versión y configuración."
          ],
          [
            "Aprobación",
            "Separación de funciones, evidencia de revisión y autorización de cambio."
          ],
          [
            "Rollback",
            "Plan probado; evaluar migraciones y compatibilidad antes de revertir."
          ],
          [
            "Incidencia",
            "Preservar evidencia, contener y reconstruir cambio; no atribuir autoría por último commit."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cambios, despliegue y reversión",
        "text": "Revertir código sin evaluar una migración incompatible puede agravar una falla; ensayar restauración controlada."
      }
    ]
  },
  "pgn-m84": {
    "1": [
      {
        "type": "comparison",
        "title": "Modelo relacional e integridad",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "PK",
            "Identificador único de una fila; no necesariamente identidad de negocio por sí sola."
          ],
          [
            "FK",
            "Referencia a clave de otra relación; controla ciertas inconsistencias."
          ],
          [
            "Normalización",
            "Reducir redundancia y anomalías según dependencias funcionales; evaluar diseño."
          ],
          [
            "Restricciones",
            "NOT NULL, UNIQUE y CHECK según regla; integridad formal no garantiza exactitud real."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Modelo relacional e integridad",
        "text": "Una FK válida hacia una persona no prueba que esa persona sea la correcta para el expediente."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Transacciones y concurrencia",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Atomicidad",
            "Todo o nada respecto de la transacción."
          ],
          [
            "Consistencia",
            "Preservar invariantes y restricciones declaradas con lógica correcta."
          ],
          [
            "Aislamiento",
            "Regular interacción concurrente según nivel; evitar anomalías mediante diseño."
          ],
          [
            "Durabilidad",
            "Cambios confirmados permanecen según garantías del motor; respaldos siguen siendo necesarios."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Transacciones y concurrencia",
        "text": "Un traslado entre cuentas que debita sin acreditar ante un error exige una transacción atómica o mecanismo equivalente."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Auditoría, respaldo y gobierno",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Auditoría",
            "Qué evento, actor lógico, objeto y resultado se registran; verificar cobertura."
          ],
          [
            "Backup",
            "Recuperación de estados; prueba de restauración y retención."
          ],
          [
            "Roles",
            "Dueño funcional, custodio técnico, autorización y mínimo privilegio."
          ],
          [
            "Calidad",
            "Reglas, linaje, correcciones trazables y conciliación con fuentes autorizadas."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Auditoría, respaldo y gobierno",
        "text": "Un respaldo diario permite acotar un cambio a un intervalo, no identificar automáticamente su autor."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m75": [
    "pgn-convocatoria-104-v4",
    "constitucion",
    "decreto-111-1996",
    "cgn-marco-gobierno"
  ],
  "pgn-m76": [
    "constitucion",
    "estatuto-tributario-decreto-624",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m77": [
    "decreto-111-1996",
    "cgn-marco-gobierno",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m78": [
    "constitucion",
    "ley-1862-2017",
    "ley-2196-2022",
    "cicr-ddhh-dih",
    "pgn-buenas-practicas-ddhh",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m79": [
    "pgn-convocatoria-104-v4",
    "pgn-res-076-2026",
    "pgn-res-108-2026",
    "pgn-res-133-2026",
    "pgn-res-212-2026",
    "pgn-res-243-2026",
    "pgn-concurso-2026"
  ],
  "pgn-m80": [
    "mintic-mrae-v3",
    "pgn-convocatoria-104-v4",
    "mintic-mspi-2025"
  ],
  "pgn-m81": [
    "mintic-mspi-2025",
    "nist-sp-800-92",
    "rfc-9293",
    "rfc-1034",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m82": [
    "mintic-mspi-2025",
    "nist-csf-2",
    "nist-sp-800-61-r3",
    "ley-1581-2012",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m83": [
    "mintic-mrae-v3",
    "mintic-mspi-2025",
    "nist-sp-800-218",
    "pgn-convocatoria-104-v4"
  ],
  "pgn-m84": [
    "mintic-mrae-v3",
    "mintic-mspi-2025",
    "ley-1581-2012",
    "nist-sp-800-86",
    "pgn-convocatoria-104-v4"
  ]
}
export function auditedModuleBlocksM75M84(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM75M84(moduleId: string): string[] { return sources[moduleId] ?? [] }
