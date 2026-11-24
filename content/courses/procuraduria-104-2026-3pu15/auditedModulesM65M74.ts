import type { LessonBlock } from '../../../src/types/course'

const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  "pgn-m65": {
    "1": [
      {
        "type": "comparison",
        "title": "Estructura semántica frente a formato visual",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Estilos",
            "Título 1, 2 y 3 representan jerarquía; negrita manual no crea estructura de navegación."
          ],
          [
            "Tabla de contenido",
            "Generar desde títulos y actualizar campos antes de emitir."
          ],
          [
            "Saltos",
            "Salto de página o sección según propósito; sección permite cambiar orientación y encabezados."
          ],
          [
            "Referencias",
            "Usar títulos de tablas, referencias cruzadas y campos en vez de numeración manual."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Estructura semántica frente a formato visual",
        "text": "En un informe de 60 páginas, aplicar estilos de título y actualizar el índice permite reorganizar secciones sin recalcular cada página manualmente."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Revisión, comparación y versión de entrega",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Control de cambios",
            "Registra inserciones y supresiones; ocultar marcas no acepta cambios."
          ],
          [
            "Comentarios",
            "Discusión separada de la edición; resolver/eliminar en copia final según autorización."
          ],
          [
            "Comparar",
            "Contrastar dos versiones cuando no existe historial de cambios disponible."
          ],
          [
            "Inspector",
            "Revisar información oculta en una copia, no destruir el expediente ni el historial original."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Revisión, comparación y versión de entrega",
        "text": "Si se envía un documento en modo Sin marcas, las revisiones pueden seguir presentes: verificar aceptación/rechazo y comentarios antes de compartir."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Accesibilidad y formatos institucionales",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Jerarquía",
            "Orden lógico de títulos sin usar niveles solo por apariencia."
          ],
          [
            "Tablas",
            "Encabezados identificables, estructura simple y evitar celdas combinadas innecesarias."
          ],
          [
            "Imágenes",
            "Texto alternativo informativo cuando corresponde; marcar decorativas como tales."
          ],
          [
            "Entrega",
            "Comprobar accesibilidad, campos, vínculos, numeración y PDF exportado; conservar versión oficial según gestión documental."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Accesibilidad y formatos institucionales",
        "text": "Una tabla de resultados con encabezados repetidos y texto alternativo para un gráfico permite comprender el informe sin depender solo de su apariencia."
      }
    ]
  },
  "pgn-m66": {
    "1": [
      {
        "type": "comparison",
        "title": "Modelo tabular, claves y tipos",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Unidad",
            "Una fila por observación; separar personas, expedientes y actuaciones."
          ],
          [
            "Identificadores",
            "Conservar ceros iniciales como texto; no convertir cédulas o radicados a cantidades."
          ],
          [
            "Fechas",
            "Validar tipo y formato regional; texto visible no equivale a fecha calculable."
          ],
          [
            "Validación",
            "Listas y restricciones ayudan a prevenir errores; auditar importaciones y duplicados según clave."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Modelo tabular, claves y tipos",
        "text": "Un expediente con tres actuaciones requiere tres registros de actuación, pero sigue siendo un expediente único."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Fórmulas y referencias reproducibles",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Relativa A2",
            "Se desplaza al copiar."
          ],
          [
            "Absoluta $F$1",
            "Fija fila y columna; útil para tasa o parámetro común."
          ],
          [
            "Mixta $A2 / A$2",
            "Fija solo columna o fila."
          ],
          [
            "Criterios",
            "SUMAR.SI.CONJUNTO suma; CONTAR.SI.CONJUNTO cuenta filas que cumplen todos los criterios. Los rangos deben ser compatibles."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Fórmulas y referencias reproducibles",
        "text": "Si B2 contiene 100 y F1 contiene 0,19, =B2*$F$1 da 19; al copiar hacia abajo cambia B2 pero no F1."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Filtros, subtotales y tablas dinámicas",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "SUMA",
            "No excluye filas por estar filtradas u ocultas."
          ],
          [
            "SUBTOTALES(9;B2:B10)",
            "Excluye filtradas, incluye ocultas manualmente."
          ],
          [
            "SUBTOTALES(109;B2:B10)",
            "Excluye filtradas y ocultas manualmente."
          ],
          [
            "Tabla dinámica",
            "Verificar rango, actualización, agregación, tipos y regresar al detalle; no corrige calidad de origen."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Filtros, subtotales y tablas dinámicas",
        "text": "Si B2:B5 contiene 10,20,30,40; 20 está filtrado y 30 oculto manualmente: SUMA=100, SUBTOTALES(9)=80 y SUBTOTALES(109)=50."
      }
    ]
  },
  "pgn-m67": {
    "1": [
      {
        "type": "comparison",
        "title": "Población, conjuntos y denominadores",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Población",
            "Conjunto objetivo; muestra es subconjunto observado."
          ],
          [
            "Unión",
            "A o B incluye elementos de ambos sin contar intersección dos veces."
          ],
          [
            "Intersección",
            "A y B simultáneamente."
          ],
          [
            "Complemento",
            "Elementos del universo que no pertenecen al conjunto."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Población, conjuntos y denominadores",
        "text": "De 100 expedientes, 40 tienen alerta A, 30 alerta B y 10 ambas: unión 60, solo A 30, solo B 20, ninguna 40."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Medidas descriptivas y valores extremos",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Media",
            "Suma dividida por cantidad de observaciones."
          ],
          [
            "Mediana",
            "Valor central ordenado; promedio de centrales si cantidad par."
          ],
          [
            "Dispersión",
            "Rango máximo menos mínimo; desviación estándar mide dispersión en unidades originales."
          ],
          [
            "Faltantes",
            "Distinguir cero de ausencia y justificar tratamiento; no imputar sin documentar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Medidas descriptivas y valores extremos",
        "text": "Tiempos 2, 3, 3, 4 y 28 días: media 8, mediana 3 y rango 26; el extremo requiere análisis."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Tasas, probabilidad y sesgos",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Tasa/proporción",
            "Numerador dividido por población comparable; expresar período y unidad."
          ],
          [
            "Probabilidad condicional",
            "P(A dado B) = intersección A y B / B si B no vacío."
          ],
          [
            "Muestreo",
            "Conveniencia y no respuesta pueden sesgar conclusiones."
          ],
          [
            "Correlación",
            "No acredita causalidad; examinar variables de confusión y cambios de medición."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Tasas, probabilidad y sesgos",
        "text": "20 quejas de 2.000 casos equivalen a 1 %; 20 de 100 equivalen a 20 %. No confundir diferencia de tasas con causalidad."
      }
    ]
  },
  "pgn-m68": {
    "1": [
      {
        "type": "comparison",
        "title": "Pregunta, hipótesis y diseño",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Pregunta",
            "Delimitar hecho, período, unidad y resultado verificable."
          ],
          [
            "Hipótesis",
            "Explicación provisional contrastable; plantear alternativa razonable."
          ],
          [
            "Variables",
            "Definir operacionalmente qué mide cada dato y posibles confusores."
          ],
          [
            "Diseño",
            "Seleccionar fuentes, criterios, procedimiento, límites y autorización antes de recolectar."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Pregunta, hipótesis y diseño",
        "text": "Para estudiar retrasos, distinguir fecha de recepción, vencimiento, asignación y respuesta, no partir de una acusación."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Fuentes y triangulación",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Primaria",
            "Información directa del fenómeno según la pregunta; puede contener errores."
          ],
          [
            "Secundaria",
            "Resume o analiza otras fuentes; identificar dependencia."
          ],
          [
            "Triangulación",
            "Contrastar perspectivas o métodos con independencia suficiente."
          ],
          [
            "Calidad",
            "Valorar procedencia, oportunidad, consistencia, método y limitaciones."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Fuentes y triangulación",
        "text": "Tres informes que copian un solo correo son tres documentos, no tres observaciones independientes."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Sesgos y actualización de hipótesis",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Confirmación",
            "Buscar también evidencia que pueda refutar la explicación inicial."
          ],
          [
            "Selección",
            "Documentar universo y exclusiones; evitar muestras elegidas por resultado."
          ],
          [
            "Confusión",
            "Examinar factores alternativos antes de atribuir efectos."
          ],
          [
            "Bitácora",
            "Registrar cambios de hipótesis, evidencias adversas y motivo de conclusión."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Sesgos y actualización de hipótesis",
        "text": "Si una contingencia técnica coincide con los retrasos, comparar períodos y grupos afectados antes de afirmar una causa personal."
      }
    ]
  },
  "pgn-m69": {
    "1": [
      {
        "type": "comparison",
        "title": "Dato, hecho, inferencia y conclusión",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Dato",
            "Valor registrado por una fuente con significado y fecha."
          ],
          [
            "Hecho acreditado",
            "Proposición sustentada por medios y alcance verificables."
          ],
          [
            "Inferencia",
            "Relación razonada entre evidencia e hipótesis, con alternativas."
          ],
          [
            "Conclusión",
            "Respuesta delimitada a pregunta; separar certeza, incertidumbre y recomendación."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Dato, hecho, inferencia y conclusión",
        "text": "Una cuenta aparece en el log: es un dato; atribuir el acto a su titular requiere evidencia adicional."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Conciliación entre sistemas",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Semántica",
            "Definir estados, identificadores y reglas de transición."
          ],
          [
            "Tiempo",
            "Comparar fechas de evento y extracción, zona horaria y actualización."
          ],
          [
            "Clave",
            "Verificar cardinalidad y correspondencias; no unir por nombres ambiguos."
          ],
          [
            "Diferencia",
            "Clasificar como temporal, semántica, técnica o material; mantener pendientes explícitos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Conciliación entre sistemas",
        "text": "Cerrado en radicación puede significar respuesta enviada; activo en archivo puede significar que aún no se incorporó constancia."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Síntesis y lógica de decisiones",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Premisas",
            "Identificar regla y hechos expresos; no agregar supuestos."
          ],
          [
            "Necesaria vs suficiente",
            "Una condición requerida no garantiza resultado por sí sola."
          ],
          [
            "Contraste",
            "Buscar un contraejemplo y hechos que cambiarían la conclusión."
          ],
          [
            "Matriz",
            "Afirmación, fuente, fecha, alcance, contradicción, acción y responsable."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Síntesis y lógica de decisiones",
        "text": "Si toda sanción requiere prueba de responsabilidad, no se sigue que toda prueba de responsabilidad autorice sancionar sin procedimiento."
      }
    ]
  },
  "pgn-m70": {
    "1": [
      {
        "type": "comparison",
        "title": "Responsabilidad con la Organización · B",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Nivel B",
            "Alinear trabajo con objetivos institucionales y buscar mejora de procesos."
          ],
          [
            "Evidencia",
            "Relacionar tarea con propósito, identificar riesgo y proponer mejora viable."
          ],
          [
            "Límite",
            "No confundir compromiso con obediencia a una instrucción irregular."
          ],
          [
            "Práctica",
            "Documentar obstáculos y promover mejoras por canales competentes."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Responsabilidad con la Organización · B",
        "text": "Además de corregir un informe, proponer una verificación que reduzca errores recurrentes y medir su efecto."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Organización del Trabajo · B",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Horizonte",
            "Programar actividades a mediano plazo considerando recursos y tiempo."
          ],
          [
            "Metas",
            "Traducir objetivos del área o equipo en entregables y secuencia."
          ],
          [
            "Escenarios",
            "Anticipar cambios de carga, vencimientos y dependencias."
          ],
          [
            "Seguimiento",
            "Ajustar prioridades, comunicar restricciones y proteger controles de calidad."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Organización del Trabajo · B",
        "text": "Un calendario mensual con hitos legales, dependencias y responsables ayuda a anticipar cuellos de botella, no solo a ordenar tareas diarias."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Conductas observables y autoevaluación",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Evidencia real",
            "Recordar una situación, acción concreta y resultado, no solo intención."
          ],
          [
            "Prioridad",
            "Distinguir urgencia legal, importancia institucional y dependencia."
          ],
          [
            "Comunicación",
            "Alertar oportunamente cuando capacidad y plazo no coinciden."
          ],
          [
            "Reflexión",
            "Identificar qué mejorar y qué conducta sostener; los casos de Umbral son pedagógicos, no baremos psicométricos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Conductas observables y autoevaluación",
        "text": "Cuando dos entregas compiten, acordar prioridades y planificar revisión; no prometer ambas sin capacidad comprobada."
      }
    ]
  },
  "pgn-m71": {
    "1": [
      {
        "type": "comparison",
        "title": "Investigación · B",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Alcance",
            "Diseñar y desarrollar estudios colaborativos para apoyar funcionamiento y mejora institucional."
          ],
          [
            "Método",
            "Explorar y adaptar métodos pertinentes a la pregunta."
          ],
          [
            "Colaboración",
            "Considerar cooperación con instituciones educativas reconocidas por canales autorizados."
          ],
          [
            "Producto",
            "Estudio, protocolo o propuesta de mejora sustentada; no mera acumulación de datos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Investigación · B",
        "text": "Proponer un estudio conjunto de errores de radicación, con diseño, responsabilidades y criterios de evaluación, expresa más que recopilar archivos."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Pensamiento Conceptual · A",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Complejidad",
            "Integrar factores heterogéneos para explicar problemas difíciles."
          ],
          [
            "Rigor",
            "Distinguir conceptos, relaciones, supuestos y límites técnicos."
          ],
          [
            "Directrices",
            "Formular orientaciones claras que permitan comprender y atender el problema."
          ],
          [
            "Competencia",
            "Proponer lineamientos por canal institucional sin sustituir autoridad decisoria."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Pensamiento Conceptual · A",
        "text": "Explicar un fallo que combina identidad digital, procedimiento, datos y asignación de funciones y proponer criterios de revisión claros."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "De la investigación a la explicación",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Diagnóstico",
            "Formular preguntas y buscar patrones con evidencia suficiente."
          ],
          [
            "Contraste",
            "Examinar casos que contradicen el patrón."
          ],
          [
            "Síntesis",
            "Construir modelo explicativo comprensible para otras áreas."
          ],
          [
            "Transferencia",
            "Derivar criterios de revisión y comprobar si funcionan en un caso diferente."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: De la investigación a la explicación",
        "text": "Si un error común se concentra en una versión del sistema, estudiar también casos sin error en esa versión antes de formular directrices."
      }
    ]
  },
  "pgn-m72": {
    "1": [
      {
        "type": "comparison",
        "title": "Orientación a Resultados · A",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Metas",
            "Establecer objetivos exigentes alineados con misión, no solo alcanzar una cifra existente."
          ],
          [
            "Recursos y tiempo",
            "Organizar y comprometer capacidad por conductos autorizados para elevar resultados."
          ],
          [
            "Evidencia",
            "Indicadores de calidad, oportunidad y resultado real."
          ],
          [
            "Sostenibilidad",
            "No confundir meta ambiciosa con promesa inviable o presión para alterar registros."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Orientación a Resultados · A",
        "text": "Proponer reducir atrasos con meta medible, recursos autorizados y controles de calidad, no cambiar el denominador."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Cumplimiento de Parámetros · B",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Procesos",
            "Aplicar criterios y normas internas/externas en distintos procesos organizacionales."
          ],
          [
            "Equipo",
            "Alinear objetivos de trabajo con procedimientos definidos."
          ],
          [
            "Excepciones",
            "Consultar regla, competencia y autorización; registrar decisión."
          ],
          [
            "Calidad",
            "Comprobar requisitos antes de declarar un producto completo."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Cumplimiento de Parámetros · B",
        "text": "Una meta de cierre no permite omitir notificaciones o verificaciones exigibles."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Integrar desempeño y parámetros",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Resultado",
            "Definir logro verificable y su relación con misión."
          ],
          [
            "Estándar",
            "Identificar plazo, calidad, seguridad y requisitos legales."
          ],
          [
            "Desviación",
            "Informar datos reales, causa y alternativas."
          ],
          [
            "Mejora",
            "Evaluar desempeño después de cambios y mantener el control que protege derechos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Integrar desempeño y parámetros",
        "text": "Si una validación retrasa entregas, revisar el flujo y recursos sin eliminar un requisito obligatorio."
      }
    ]
  },
  "pgn-m73": {
    "1": [
      {
        "type": "comparison",
        "title": "Distinguir conocimiento y autodescripción",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Caso de aprendizaje",
            "Permite discutir conductas y consecuencias con retroalimentación."
          ],
          [
            "Autoinforme",
            "Si la prueba lo utiliza, responder según conducta habitual y las instrucciones de la escala."
          ],
          [
            "Niveles A/B",
            "Son niveles de la competencia del diccionario, no letras de respuesta del examen."
          ],
          [
            "Límite",
            "No asumir formato, escala, ponderación interna o algoritmo sin guía oficial específica."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Distinguir conocimiento y autodescripción",
        "text": "Reconocer la conducta que representa mejora institucional no significa seleccionar automáticamente la opción A en una prueba real."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Lectura literal y afirmaciones inversas",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Dirección",
            "Identificar qué conducta expresa realmente la afirmación."
          ],
          [
            "Negación",
            "Leer negaciones y cuantificadores; no responder por una palabra clave."
          ],
          [
            "Contexto",
            "Distinguir situación habitual de excepción."
          ],
          [
            "Honestidad",
            "No fabricar respuestas socialmente deseables ni patrones de extremos."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Lectura literal y afirmaciones inversas",
        "text": "«Evito comunicar errores» describe ocultamiento; no reinterpretar la frase como cooperación solo por mencionar al equipo."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Reflexión sobre conductas reales",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Situación",
            "Recordar un ejemplo laboral concreto."
          ],
          [
            "Acción",
            "Qué hizo, qué alternativas tenía y qué reglas respetó."
          ],
          [
            "Resultado",
            "Efecto verificable y aprendizaje."
          ],
          [
            "Consistencia",
            "Reconocer fortalezas y aspectos de mejora; no convertir retroalimentación didáctica en diagnóstico psicológico."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Reflexión sobre conductas reales",
        "text": "Practicar con ejemplos propios ayuda a comprender el nivel requerido; los puntajes de Umbral no predicen un resultado oficial."
      }
    ]
  },
  "pgn-m74": {
    "1": [
      {
        "type": "comparison",
        "title": "C-E-P-P-A: competencia, etapa, problema",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Competencia",
            "Identificar autoridad y alcance; apoyo no equivale a decisión."
          ],
          [
            "Etapa",
            "Ubicar hito y régimen aplicable; no saltar actuaciones."
          ],
          [
            "Problema",
            "Definir qué pregunta debe resolverse ahora, no todo el expediente."
          ],
          [
            "Control",
            "Distinguir especialidad normativa y términos generales."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: C-E-P-P-A: competencia, etapa, problema",
        "text": "Una queja con posible autor no individualizado requiere evaluar la ruta inicial; no elegir cargos por ser una figura conocida."
      }
    ],
    "2": [
      {
        "type": "comparison",
        "title": "Prueba y actuación: estándar y secuencia",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Prueba",
            "Identificar hecho, fuente, alcance, faltante y contradicción."
          ],
          [
            "Estándar",
            "Diferenciar noticia, apertura, cargos y certeza de sanción."
          ],
          [
            "Actuación",
            "Seleccionar decisión proporcional y jurídicamente oportuna."
          ],
          [
            "Verificación",
            "Preguntar qué hecho cambiaría la ruta y qué opción omite una garantía."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Prueba y actuación: estándar y secuencia",
        "text": "Si durante indagación se individualiza al posible autor y procede investigar, cambia la actuación; no esperar por rutina."
      }
    ],
    "3": [
      {
        "type": "comparison",
        "title": "Casos integrales y estrategia de revisión",
        "columns": [
          "Concepto o control",
          "Aplicación profesional"
        ],
        "rows": [
          [
            "Lectura",
            "Identificar encargo y datos decisivos antes de comparar opciones."
          ],
          [
            "Descarte",
            "Buscar error de competencia, etapa, prueba, plazo o inferencia en cada distractor."
          ],
          [
            "Tiempo",
            "Resolver primero lo sustentable y revisar dudas según reglas de aplicación."
          ],
          [
            "Cierre",
            "No inventar hechos ausentes; si hay incertidumbre, elegir actuación que resuelva el vacío dentro de la ley."
          ]
        ]
      },
      {
        "type": "example",
        "title": "Aplicación: Casos integrales y estrategia de revisión",
        "text": "En un caso mixto de petición y reserva, clasificar solicitud, autoridad, régimen y posibilidad de acceso parcial antes de elegir respuesta."
      }
    ]
  }
}
const sources: Record<string, string[]> = {
  "pgn-m65": [
    "pgn-convocatoria-104-v4",
    "ley-594-2000",
    "office-word-track-changes",
    "office-word-headings",
    "office-word-accessibility"
  ],
  "pgn-m66": [
    "pgn-convocatoria-104-v4",
    "office-excel-subtotals",
    "office-excel-sumifs",
    "office-excel-countifs"
  ],
  "pgn-m67": [
    "pgn-convocatoria-104-v4",
    "pgn-sgc"
  ],
  "pgn-m68": [
    "pgn-convocatoria-104-v4",
    "pgn-guia-investigacion",
    "ley-1952-2019"
  ],
  "pgn-m69": [
    "pgn-convocatoria-104-v4",
    "pgn-manual-calidad",
    "ley-1952-2019"
  ],
  "pgn-m70": [
    "pgn-convocatoria-104-v4",
    "pgn-diccionario-competencias"
  ],
  "pgn-m71": [
    "pgn-convocatoria-104-v4",
    "pgn-diccionario-competencias"
  ],
  "pgn-m72": [
    "pgn-convocatoria-104-v4",
    "pgn-diccionario-competencias"
  ],
  "pgn-m73": [
    "pgn-convocatoria-104-v4",
    "pgn-diccionario-competencias",
    "pgn-res-076-2026",
    "pgn-res-212-2026"
  ],
  "pgn-m74": [
    "ley-1952-2019",
    "pgn-guia-disciplinaria",
    "pgn-convocatoria-104-v4",
    "ley-1755-2015"
  ]
}
export function auditedModuleBlocksM65M74(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] { return blocks[moduleId]?.[lessonOrder] ?? [] }
export function auditedModuleSourcesM65M74(moduleId: string): string[] { return sources[moduleId] ?? [] }
