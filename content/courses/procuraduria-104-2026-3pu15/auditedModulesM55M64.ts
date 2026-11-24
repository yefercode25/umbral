import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m55": {
    "1": [
      {
        "type": "comparison",
        "title": "Instrumentos y competencias",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Autonomía",
            "Dentro de Constitución y ley; coordinación, concurrencia y subsidiariedad."
          ],
          [
            "POT",
            "Más de 100.000 habitantes."
          ],
          [
            "PBOT",
            "Entre 30.000 y 100.000 habitantes."
          ],
          [
            "EOT",
            "Menos de 30.000 habitantes; verificar excepciones del art. 9."
          ],
          [
            "Plan de desarrollo",
            "Prioridades, inversiones y metas; no reemplaza el instrumento de ordenamiento."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Instrumentos y competencias",
        "text": "Un municipio de 18.000 habitantes generalmente adopta EOT; su plan de desarrollo no modifica por sí solo usos del suelo."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Determinantes y uso del suelo",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Jerarquía",
            "Aplicar art. 10 modificado por Ley 2294 art. 32, en el ámbito competencial correspondiente."
          ],
          [
            "Determinantes",
            "Examinar niveles vigentes: ambiente y riesgo, alimentación, patrimonio, infraestructura y demás supuestos legales."
          ],
          [
            "Clases",
            "Suelo urbano, rural y de expansión; categorías suburbana y protección."
          ],
          [
            "Procedimiento",
            "Concertación ambiental, consulta y participación según art. 24 y reglas especiales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Determinantes y uso del suelo",
        "text": "Una capa municipal no prevalece por ser más reciente sobre una determinante ambiental superior vigente."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cartografía y control preventivo",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Fuente",
            "Acto, plano adoptado, fecha, escala, sistema de referencia."
          ],
          [
            "Contraste",
            "Normalizar coordenadas y verificar geometrías y límites."
          ],
          [
            "Competencia",
            "Identificar autoridad municipal y ambiental; no sustituirlas."
          ],
          [
            "Informe",
            "Distinguir hallazgo geográfico, norma y riesgo."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cartografía y control preventivo",
        "text": "Dos polígonos pueden parecer superpuestos por diferencias de escala o proyección; verificar antes de afirmar infracción."
      }
    ]
  },
  "pgn-m56": {
    "1": [
      {
        "type": "comparison",
        "title": "MIPG y MIPGN",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "MIPG",
            "Rama Ejecutiva nacional y territorial según Decreto 1499."
          ],
          [
            "Órganos de control",
            "Política de control interno Ley 87 y demás políticas en cuanto resulten aplicables."
          ],
          [
            "PGN",
            "SGC articulado con su modelo institucional MIPGN."
          ],
          [
            "Seguimiento",
            "PGN puede vigilar implementación y operación del MIPG sin coadministrar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: MIPG y MIPGN",
        "text": "Una lista de obligaciones de una alcaldía no se aplica automáticamente de forma idéntica a PGN."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Ficha técnica e indicadores",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Definición",
            "Numerador, denominador, unidad, fuente y frecuencia."
          ],
          [
            "Universo",
            "Distinguir recibidas, exigibles, respondidas y vencidas."
          ],
          [
            "Calidad",
            "Validar duplicados, faltantes y corte."
          ],
          [
            "Interpretación",
            "Distinguir oportunidad, cobertura y calidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Ficha técnica e indicadores",
        "text": "Si 10 de 25 peticiones exigibles se responden oportunamente, el indicador definido sobre exigibles es 40 %."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Brechas y mejora",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Línea base",
            "Comparar misma definición y población."
          ],
          [
            "Puntos porcentuales",
            "Diferencia directa entre porcentajes."
          ],
          [
            "Variación relativa",
            "Diferencia dividida por valor inicial, si no es cero."
          ],
          [
            "Seguimiento",
            "Causa, acción, responsable, plazo y eficacia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Brechas y mejora",
        "text": "De 60 % a 75 % hay 15 puntos porcentuales, o 25 % de crecimiento relativo."
      }
    ]
  },
  "pgn-m57": {
    "1": [
      {
        "type": "comparison",
        "title": "PHVA y gestión de procesos",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Planear",
            "Requisitos, riesgos, objetivos, responsables."
          ],
          [
            "Hacer",
            "Ejecutar y registrar evidencia."
          ],
          [
            "Verificar",
            "Medir, comparar y auditar."
          ],
          [
            "Actuar",
            "Corregir causas y revisar eficacia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: PHVA y gestión de procesos",
        "text": "Detectar una desviación en auditoría es verificar; implementar y revisar la mejora requiere actuaciones posteriores."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Corrección y acción correctiva",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Corrección",
            "Resolver no conformidad observada."
          ],
          [
            "Causa",
            "Explicar origen y posible recurrencia."
          ],
          [
            "Acción correctiva",
            "Abordar causa para evitar repetición."
          ],
          [
            "Eficacia",
            "Comprobar resultados tras implementar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Corrección y acción correctiva",
        "text": "Corregir fechas duplicadas no resuelve necesariamente una regla de captura defectuosa."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Documentos y auditoría",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Versión",
            "Consultar edición vigente y aplicable al momento."
          ],
          [
            "Hallazgo",
            "Requisito, evidencia objetiva y desviación."
          ],
          [
            "Riesgo",
            "Incertidumbre sobre objetivos; distinto de incumplimiento observado."
          ],
          [
            "Seguimiento",
            "Responsable, fecha, evidencia y eficacia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Documentos y auditoría",
        "text": "Una copia firmada puede ser histórica; verificar vigencia sin borrar trazabilidad."
      }
    ]
  },
  "pgn-m58": {
    "1": [
      {
        "type": "comparison",
        "title": "Clasificación y retención",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "CCD",
            "Series y subseries según estructura y funciones."
          ],
          [
            "TRD",
            "Tiempos de retención y disposición final por serie."
          ],
          [
            "Orden original",
            "Secuencia y relaciones del trámite; procedencia documental."
          ],
          [
            "Transferencia",
            "Inventario y procedimiento; no borrar por antigüedad arbitraria."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Clasificación y retención",
        "text": "Clasificar por extensión PDF o Word no equivale a organizar expedientes."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Expediente electrónico",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "SGDEA",
            "Incorporar documentos desde inicio hasta cierre según CCD/TRD."
          ],
          [
            "Índice",
            "Relacionar documentos y firmar al cierre conforme al Acuerdo 001."
          ],
          [
            "Metadatos",
            "Identificación, origen, fechas, relaciones, acceso y eventos."
          ],
          [
            "Híbrido/virtual",
            "Vincular componentes; una vista de documentos dispersos no equivale a expediente archivísticamente gestionado."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Expediente electrónico",
        "text": "Una carpeta compartida no acredita por sí sola cierre íntegro ni índice firmado."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Versiones y acceso",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Versión oficial",
            "Radicación, incorporación y aprobación verificables."
          ],
          [
            "Copia pública",
            "Separar de original reservado; no sobrescribir."
          ],
          [
            "Conservación",
            "Accesibilidad, integridad y metadatos a lo largo del tiempo."
          ],
          [
            "Disposición",
            "Aplicar TRD y restricciones antes de eliminar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Versiones y acceso",
        "text": "La fecha más reciente del explorador puede pertenecer a una descarga, no a la versión aprobada."
      }
    ]
  },
  "pgn-m59": {
    "1": [
      {
        "type": "comparison",
        "title": "Clasificación de solicitudes",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "General",
            "15 días salvo norma especial."
          ],
          [
            "Documentos e información",
            "10 días; regla de aceptación y entrega en tres días siguientes si vence sin respuesta, art. 14."
          ],
          [
            "Consulta",
            "30 días en materias a cargo."
          ],
          [
            "Incompetencia",
            "Petición escrita: informar y remitir en cinco días; término desde día siguiente a recepción por competente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Clasificación de solicitudes",
        "text": "Un escrito con solicitud de copias y consulta requiere controlar cada componente por separado."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Respuesta clara y verificable",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Encabezado",
            "Radicado, destinatario y asunto."
          ],
          [
            "Fondo",
            "Responder cada punto, hechos, norma y conclusión."
          ],
          [
            "Reserva",
            "Motivar norma específica y acceso parcial cuando proceda."
          ],
          [
            "Cierre",
            "Firma competente, anexos, envío y versión archivada."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Respuesta clara y verificable",
        "text": "Copiar una norma sin responder la pregunta no garantiza respuesta de fondo."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Informe y revisión",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Encargo",
            "Pregunta, alcance y audiencia."
          ],
          [
            "Método",
            "Fuentes, criterios, transformaciones y límites."
          ],
          [
            "Versión",
            "Revisar comentarios, cambios y metadatos de copia de entrega."
          ],
          [
            "Régimen",
            "Distinguir apoyo, informe de archivo y dictamen; no depende del título."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Informe y revisión",
        "text": "Eliminar comentarios sensibles de la copia de entrega no significa borrar el original institucional."
      }
    ]
  },
  "pgn-m60": {
    "1": [
      {
        "type": "comparison",
        "title": "Calidad y gobierno de datos",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Exactitud",
            "Correspondencia con fuente verificable."
          ],
          [
            "Validez/completitud",
            "Dominio correcto y campos requeridos."
          ],
          [
            "Consistencia/unicidad",
            "Coherencia entre sistemas y ausencia de duplicidad injustificada."
          ],
          [
            "Oportunidad",
            "Actualidad para el propósito; dueño, fuente y frecuencia."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Calidad y gobierno de datos",
        "text": "Un identificador válido puede pertenecer a otra persona: formato no acredita exactitud."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Ciclo de vida de accesos",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Alta",
            "Autorización, identidad individual y mínimo privilegio."
          ],
          [
            "Cambio",
            "Retirar permisos anteriores innecesarios."
          ],
          [
            "Retiro",
            "Revocar accesos y sesiones, preservar registros relevantes."
          ],
          [
            "Controles",
            "MFA, segregación de funciones, revisión y auditoría."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Ciclo de vida de accesos",
        "text": "MFA no sustituye autorización ni impide que un usuario autorizado acumule funciones incompatibles."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Seguridad y privacidad",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "MSPI 2025",
            "Resolución 02277 actualiza anexo de Resolución 500/2021; verificar ámbito."
          ],
          [
            "Confidencialidad",
            "Acceso autorizado y necesario."
          ],
          [
            "Integridad/disponibilidad",
            "Cambios controlados, respaldo y recuperación."
          ],
          [
            "Datos personales",
            "Calidad, acceso restringido, seguridad y confidencialidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Seguridad y privacidad",
        "text": "Una corrección oficial debe conservar autorización, motivo y valor previo según controles aplicables."
      }
    ]
  },
  "pgn-m61": {
    "1": [
      {
        "type": "comparison",
        "title": "Semántica de los logs",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Evento",
            "Autenticación, acción, error o cierre: distinguir significado."
          ],
          [
            "Campos",
            "Hora, zona, sesión, origen, resultado según fuente."
          ],
          [
            "Retención",
            "Rotación, pérdida y cobertura de auditoría."
          ],
          [
            "Ausencia",
            "Puede significar falta de registro, no ausencia del hecho."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Semántica de los logs",
        "text": "Un login exitoso no prueba una modificación posterior; buscar evento de aplicación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Identidad y correlación",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "IP",
            "Dinámica o compartida por NAT, VPN, proxy."
          ],
          [
            "Fuentes",
            "Cruzar hora, puerto disponible, DHCP/NAT, sesión y dispositivo."
          ],
          [
            "Credenciales",
            "MFA, delegación, cuentas de servicio y sesiones persistentes."
          ],
          [
            "Atribución",
            "Explicar inferencia y alternativas; cuenta no equivale a persona."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Identidad y correlación",
        "text": "La IP pública de una sede puede identificar una salida de red, no al operador."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Cronología y preservación",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Zona",
            "Colombia UTC−5; mantener valores originales."
          ],
          [
            "Desfase",
            "Verificar NTP, precisión y saltos de reloj."
          ],
          [
            "Integridad",
            "Extracción, custodio, huella y filtros documentados."
          ],
          [
            "Correlación",
            "Mismo instante no equivale a mismo evento."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cronología y preservación",
        "text": "15:03 UTC y 10:03 UTC−5 coinciden nominalmente; un desfase obliga a declarar incertidumbre."
      }
    ]
  },
  "pgn-m62": {
    "1": [
      {
        "type": "comparison",
        "title": "Estado frente a historial",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Consulta",
            "Estado según fecha, filtros, permisos y aislamiento."
          ],
          [
            "Auditoría",
            "Eventos configurados; comprobar cobertura."
          ],
          [
            "Backups",
            "Estados previos según consistencia y fecha."
          ],
          [
            "Logs transaccionales",
            "Alcance y retención dependen del motor; no presuponer usuario final."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Estado frente a historial",
        "text": "Una fila aprobada hoy no prueba quién la aprobó ni la fecha si falta historial."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "SQL y unidad de análisis",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "PK/FK",
            "Identificar claves y cardinalidad."
          ],
          [
            "JOIN",
            "Uno a muchos multiplica filas; contar identificadores distintos si la unidad es expediente."
          ],
          [
            "NULL",
            "Dato ausente no es cero; COUNT(campo) omite NULL, COUNT(*) cuenta filas."
          ],
          [
            "Reproducibilidad",
            "Consulta autorizada de lectura, fecha, versión, parámetros, recuentos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: SQL y unidad de análisis",
        "text": "Tres expedientes con dos, tres y una actuaciones producen seis filas al unir tablas."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Atribución y reconstrucción",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Cuenta técnica",
            "Puede representar múltiples usuarios de aplicación."
          ],
          [
            "Sesión",
            "Correlacionar solicitud, autenticación y acción."
          ],
          [
            "Automatización",
            "Verificar jobs, triggers y flujos programados."
          ],
          [
            "Preservación",
            "Restaurar copias en entorno aislado autorizado, nunca sobrescribir producción para analizar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Atribución y reconstrucción",
        "text": "updated_by = app_service identifica una cuenta técnica, no al usuario final."
      }
    ]
  },
  "pgn-m63": {
    "1": [
      {
        "type": "comparison",
        "title": "Correo y encabezados",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Original",
            "Preservar formato fiel disponible, anexos y metadatos."
          ],
          [
            "From/Date",
            "Campos declarados; no acreditan identidad o tiempo por sí solos."
          ],
          [
            "Received",
            "Trazas de servidores; examinar saltos confiables y zonas."
          ],
          [
            "Message-ID",
            "Correlación útil, no prueba única de autoría."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Correo y encabezados",
        "text": "Un reenvío como texto puede perder cabeceras originales."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Autenticación de dominio",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "SPF (7208)",
            "Verifica autorización del servidor respecto al dominio evaluado."
          ],
          [
            "DKIM (6376)",
            "Firma de dominio y partes cubiertas del mensaje."
          ],
          [
            "DMARC (9989)",
            "Alineación de dominio de autor con SPF o DKIM válido; RFC 9989 reemplaza 7489 y 9091."
          ],
          [
            "Authentication-Results (8601)",
            "Confiar según infraestructura y frontera de confianza; no equivale a firma personal."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Autenticación de dominio",
        "text": "DKIM válido no prueba que el titular humano redactó el mensaje."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Archivos, firmas y hash",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Huella",
            "Comparación binaria; algoritmo, herramienta y fecha."
          ],
          [
            "Metadatos",
            "Pueden variar por copia, conversión o aplicación."
          ],
          [
            "Firma digital",
            "Verificar firma, certificado y condiciones; imagen de firma no equivale a firma digital."
          ],
          [
            "Diferencia",
            "Hashes distintos significan bytes distintos, no necesariamente falsedad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Archivos, firmas y hash",
        "text": "Dos PDF visualmente iguales pueden diferir por compresión o metadatos."
      }
    ]
  },
  "pgn-m64": {
    "1": [
      {
        "type": "comparison",
        "title": "Informe técnico reproducible",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Encargo",
            "Pregunta, autoridad, alcance, período."
          ],
          [
            "Inventario",
            "Fuente, custodio, formato, adquisición e integridad."
          ],
          [
            "Método",
            "Herramienta y versión, consulta, filtros, zona y parámetros."
          ],
          [
            "Resultado",
            "Observaciones, inferencias, anexos y limitaciones."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Informe técnico reproducible",
        "text": "Otro profesional debe poder localizar cada evento y repetir la transformación autorizada."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Alcance de la conclusión",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Observación",
            "Evento registrado bajo una cuenta según configuración."
          ],
          [
            "Inferencia",
            "Relación entre fuentes y escenarios alternativos."
          ],
          [
            "Límite",
            "Faltantes, reloj, delegación, retención y configuración."
          ],
          [
            "Conclusión",
            "Responder encargo sin declarar dolo, culpa o responsabilidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Alcance de la conclusión",
        "text": "Redactar «el sistema registró la operación bajo la cuenta X» si no hay identificación personal suficiente."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Entrega y contradicción",
        "columns": [
          "Regla o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Anexos",
            "Identificadores, huellas, referencias y acceso autorizado."
          ],
          [
            "Revisión",
            "Reproducir, corregir con historial y conservar originales."
          ],
          [
            "Naturaleza",
            "Informe de archivos y dictamen tienen trámites distintos (193–195 y 177–184)."
          ],
          [
            "Remisión",
            "Entregar a competente con constancia y atender aclaración según régimen."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Entrega y contradicción",
        "text": "Un informe corregido mantiene relación con versión previa y motivo de cambio."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m55": [
    "constitucion",
    "ley-1454-2011",
    "ley-388-1997",
    "ley-2294-2023"
  ],
  "pgn-m56": [
    "decreto-1499-2017",
    "pgn-sgc",
    "pgn-manual-calidad",
    "ley-87-1993"
  ],
  "pgn-m57": [
    "pgn-sgc",
    "pgn-manual-calidad",
    "decreto-1499-2017",
    "pgn-res-329-2021"
  ],
  "pgn-m58": [
    "ley-594-2000",
    "agn-acuerdo-001-2024",
    "pgn-manual-calidad",
    "ley-527-1999"
  ],
  "pgn-m59": [
    "pgn-convocatoria-104-v4",
    "ley-1755-2015",
    "ley-1712-2014",
    "pgn-manual-calidad",
    "ley-1952-2019"
  ],
  "pgn-m60": [
    "pgn-convocatoria-104-v4",
    "pgn-manual-calidad",
    "ley-1581-2012",
    "mintic-mspi-2025",
    "mintic-mrae-v3"
  ],
  "pgn-m61": [
    "ley-527-1999",
    "pgn-guia-pruebas",
    "ley-1581-2012",
    "nist-sp-800-92"
  ],
  "pgn-m62": [
    "pgn-guia-pruebas",
    "ley-527-1999",
    "ley-1952-2019",
    "nist-sp-800-86"
  ],
  "pgn-m63": [
    "ley-527-1999",
    "pgn-guia-pruebas",
    "rfc-5322",
    "rfc-6376",
    "rfc-8601",
    "rfc-7208",
    "rfc-9989",
    "nist-sp-800-86"
  ],
  "pgn-m64": [
    "pgn-convocatoria-104-v4",
    "pgn-guia-pruebas",
    "ley-527-1999",
    "ley-1952-2019",
    "nist-sp-800-86"
  ]
}
export function auditedModuleBlocksM55M64(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM55M64(moduleId: string): string[] { return sources[moduleId] ?? [] }
