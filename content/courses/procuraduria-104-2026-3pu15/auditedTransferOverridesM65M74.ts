import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM65M74: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m65": [
    {
      "caseText": "Un informe de 60 páginas tiene títulos escritos con negrita manual, numeración de apartados digitada y un índice elaborado a mano. Tras insertar una sección, las referencias de página dejan de coincidir. La dependencia debe mantener el contenido aprobado y entregar una nueva versión accesible, con navegación funcional y trazabilidad del trabajo. El archivo fuente permanece archivado.",
      "stem": "¿Qué intervención mejora estructura y actualización sin alterar el contenido sustancial aprobado?",
      "correct": {
        "text": "Aplicar estilos jerárquicos, numeración y campos cuando corresponda, generar y actualizar el índice y comprobar referencias y accesibilidad en copia controlada.",
        "reason": "La estructura semántica permite navegación y actualización reproducible."
      },
      "other": [
        {
          "text": "Editar a mano los números del índice y agregar espacios para conservar la apariencia.",
          "reason": "La edición manual no resuelve dependencia entre títulos y páginas."
        },
        {
          "text": "Convertir cada página en una imagen para fijar el diseño y conservar la numeración.",
          "reason": "Las imágenes de páginas dificultan navegación, búsqueda y accesibilidad."
        }
      ],
      "explanation": "Fundamento: Microsoft Word: estilos, revisión y accesibilidad; Ley 594/2000; perfil 104. La estructura semántica permite navegación y actualización reproducible. Primera alternativa incorrecta: La edición manual no resuelve dependencia entre títulos y páginas. Segunda alternativa incorrecta: Las imágenes de páginas dificultan navegación, búsqueda y accesibilidad.",
      "difficulty": 4
    },
    {
      "caseText": "Un proyecto de oficio fue revisado por tres funcionarios mediante Control de cambios. El responsable elige Sin marcas y observa un texto limpio, pero el archivo conserva eliminaciones propuestas y comentarios con información personal. Debe entregar una versión definitiva al destinatario externo y conservar internamente la versión de trabajo según las reglas documentales. La autoridad ya aprobó qué modificaciones aceptar.",
      "stem": "¿Qué procedimiento distingue ocultar marcas de preparar una versión definitiva segura?",
      "correct": {
        "text": "Guardar copia de entrega, aceptar o rechazar revisiones según aprobación, revisar comentarios e información oculta y comprobar la versión final; conservar el historial interno conforme al régimen.",
        "reason": "La vista de marcas no elimina información subyacente y la decisión debe respetar aprobación."
      },
      "other": [
        {
          "text": "Enviar el documento en modo Sin marcas porque desactiva y elimina todas las revisiones.",
          "reason": "Sin marcas cambia presentación, no contenido de revisión."
        },
        {
          "text": "Aceptar toda modificación sin revisar y borrar las copias de trabajo para impedir que se vean.",
          "reason": "Aceptar indiscriminadamente y borrar historial compromete integridad y trazabilidad."
        }
      ],
      "explanation": "Fundamento: Microsoft Word: estilos, revisión y accesibilidad; Ley 594/2000; perfil 104. La vista de marcas no elimina información subyacente y la decisión debe respetar aprobación. Primera alternativa incorrecta: Sin marcas cambia presentación, no contenido de revisión. Segunda alternativa incorrecta: Aceptar indiscriminadamente y borrar historial compromete integridad y trazabilidad.",
      "difficulty": 5
    }
  ],
  "pgn-m66": [
    {
      "caseText": "Una hoja contiene cuatro montos numéricos: 10, 20, 30 y 40 en B2:B5. Un filtro oculta la fila del valor 20 y el operador oculta manualmente la del valor 30. La dirección necesita el total de las filas visibles sin eliminar registros. El archivo conserva los cuatro montos y no contiene subtotales anidados, errores ni otras filas en el rango analizado.",
      "stem": "¿Qué fórmula devuelve el total de las filas visibles y cuál es su resultado en el supuesto descrito?",
      "correct": {
        "text": "SUBTOTALES(109;B2:B5) devuelve 50; excluye filtradas y ocultas manualmente.",
        "reason": "109 suma solo filas no filtradas ni ocultas manualmente."
      },
      "other": [
        {
          "text": "SUBTOTALES(9;B2:B5) devuelve 50 porque excluye cualquier fila oculta.",
          "reason": "9 incluye la fila de 30 oculta manualmente y devuelve 80."
        },
        {
          "text": "SUMA(B2:B5) devuelve 50 porque el filtro modifica el rango efectivo.",
          "reason": "SUMA incluye los cuatro valores y devuelve 100."
        }
      ],
      "explanation": "Fundamento: Microsoft Excel: referencias, SUBTOTALES, SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO; perfil 104. 109 suma solo filas no filtradas ni ocultas manualmente. Primera alternativa incorrecta: 9 incluye la fila de 30 oculta manualmente y devuelve 80. Segunda alternativa incorrecta: SUMA incluye los cuatro valores y devuelve 100.",
      "difficulty": 4
    },
    {
      "caseText": "En una matriz, B2:B4 contiene 100, 200 y 300; F1 contiene 0,19. La fórmula C2 = B2*F1 se copia hacia abajo y C3 y C4 quedan en cero porque F2 y F3 están vacías. El analista debe calcular el valor usando la misma tasa en todas las filas sin modificar las fuentes. El libro contiene además una columna de regional y otra de estado para obtener agregaciones posteriores.",
      "stem": "¿Qué referencia y control permiten copiar la fórmula correctamente sin fijar los importes de cada fila?",
      "correct": {
        "text": "Usar =B2*$F$1 y copiar: 19, 38 y 57; verificar tipos y rangos de criterios para agregaciones.",
        "reason": "La referencia absoluta fija la tasa y la relativa recorre importes."
      },
      "other": [
        {
          "text": "Usar =$B$2*F1 y copiar porque fijar el primer importe conserva la tasa.",
          "reason": "Fija el dato variable y deja desplazar la tasa."
        },
        {
          "text": "Escribir 19, 38 y 57 manualmente y retirar la fórmula para evitar cambios.",
          "reason": "Valores manuales pierden actualización y reproducibilidad."
        }
      ],
      "explanation": "Fundamento: Microsoft Excel: referencias, SUBTOTALES, SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO; perfil 104. La referencia absoluta fija la tasa y la relativa recorre importes. Primera alternativa incorrecta: Fija el dato variable y deja desplazar la tasa. Segunda alternativa incorrecta: Valores manuales pierden actualización y reproducibilidad.",
      "difficulty": 5
    }
  ],
  "pgn-m67": [
    {
      "caseText": "Un universo de 100 expedientes presenta 40 con alerta de vencimiento A y 30 con alerta documental B. Diez expedientes pertenecen simultáneamente a ambos grupos. El tablero debe informar cuántos expedientes únicos tienen al menos una alerta y cuántos no tienen ninguna. El equipo dispone de identificadores únicos y los dos conjuntos se refieren al mismo período y universo.",
      "stem": "¿Cuál cálculo respeta la intersección y evita duplicar expedientes con dos alertas?",
      "correct": {
        "text": "40+30−10=60 con alguna alerta; 40 sin ninguna.",
        "reason": "La unión resta una vez la intersección contada dos veces."
      },
      "other": [
        {
          "text": "40+30=70 con alguna alerta; 30 sin ninguna.",
          "reason": "Duplica los diez expedientes de ambos conjuntos."
        },
        {
          "text": "40−30=10 con alguna alerta; 90 sin ninguna.",
          "reason": "La diferencia entre tamaños no calcula la unión."
        }
      ],
      "explanation": "Fundamento: Estadística descriptiva y metodología de indicadores; perfil 104; SGC PGN. La unión resta una vez la intersección contada dos veces. Primera alternativa incorrecta: Duplica los diez expedientes de ambos conjuntos. Segunda alternativa incorrecta: La diferencia entre tamaños no calcula la unión.",
      "difficulty": 4
    },
    {
      "caseText": "Cinco actuaciones cerradas tardaron 2, 3, 3, 4 y 28 días. La jefatura solicita una medida de tiempo típico y otra que evidencie la dispersión. El caso de 28 días corresponde a un registro legítimo que no debe eliminarse sin justificación. Los datos son comparables, completos y se refieren al mismo procedimiento. El informe debe evitar concluir que todos los casos tardan lo mismo.",
      "stem": "¿Qué resumen numérico representa la distribución y conserva el valor atípico en el análisis?",
      "correct": {
        "text": "Media 8 días, mediana 3 y rango 26; examinar el extremo y explicar diferencia entre media y mediana.",
        "reason": "La media es 40/5, la mediana es el tercero ordenado y el rango es 28−2."
      },
      "other": [
        {
          "text": "Media 3, mediana 8 y rango 28; eliminar el extremo del informe.",
          "reason": "Intercambia medidas y confunde máximo con rango."
        },
        {
          "text": "Media 8 y mediana 8 porque todo promedio expresa el tiempo central.",
          "reason": "La mediana no tiene que coincidir con la media."
        }
      ],
      "explanation": "Fundamento: Estadística descriptiva y metodología de indicadores; perfil 104; SGC PGN. La media es 40/5, la mediana es el tercero ordenado y el rango es 28−2. Primera alternativa incorrecta: Intercambia medidas y confunde máximo con rango. Segunda alternativa incorrecta: La mediana no tiene que coincidir con la media.",
      "difficulty": 5
    }
  ],
  "pgn-m68": [
    {
      "caseText": "Una investigación interna comienza con la hipótesis de que un servidor produjo retrasos al asignar expedientes. Los primeros informes coinciden, pero ambos se derivan del mismo listado elaborado por una oficina. Existe un registro independiente de caídas del aplicativo y una bitácora de asignaciones todavía sin revisar. El equipo propone finalizar la búsqueda porque ya tiene dos documentos concordantes.",
      "stem": "¿Cómo debe modificarse el diseño para contrastar hipótesis y controlar la dependencia entre fuentes?",
      "correct": {
        "text": "Mantener hipótesis provisional, identificar origen común, contrastar bitácora y contingencia independientes y buscar información favorable y desfavorable.",
        "reason": "La triangulación exige independencia y contraste de explicaciones alternativas."
      },
      "other": [
        {
          "text": "Cerrar la búsqueda porque dos informes coincidentes prueban que existe corroboración independiente.",
          "reason": "Repetir datos de un listado no añade una observación independiente."
        },
        {
          "text": "Reemplazar la hipótesis por una falla del aplicativo sin revisar las nuevas fuentes.",
          "reason": "Cambiar una hipótesis sin verificarla reproduce el sesgo inicial."
        }
      ],
      "explanation": "Fundamento: CGD arts. 13, 147–151 y 159; guía PGN de investigación; metodología aplicada. La triangulación exige independencia y contraste de explicaciones alternativas. Primera alternativa incorrecta: Repetir datos de un listado no añade una observación independiente. Segunda alternativa incorrecta: Cambiar una hipótesis sin verificarla reproduce el sesgo inicial.",
      "difficulty": 4
    },
    {
      "caseText": "Una dependencia estudia errores de radicación usando solo los expedientes que ya tuvieron queja ciudadana. Encuentra que muchos contienen inconsistencias y quiere extrapolar el porcentaje a todos los expedientes del año. El universo completo está disponible y permite una muestra con criterios transparentes. No se ha examinado si los expedientes sin queja tienen características distintas ni si el canal de reporte cambió.",
      "stem": "¿Qué ajuste mejora la validez del estudio sin confundir una muestra de riesgo con toda la población?",
      "correct": {
        "text": "Definir universo y selección, distinguir muestra dirigida de estimación representativa, incluir casos sin queja mediante diseño adecuado y declarar sesgos.",
        "reason": "El diseño y la selección condicionan el alcance de generalización."
      },
      "other": [
        {
          "text": "Extrapolar directamente porque las quejas son la fuente más relevante y por eso representan a toda la población.",
          "reason": "Una muestra dirigida no estima necesariamente prevalencia poblacional."
        },
        {
          "text": "Eliminar los expedientes con queja y analizar solo los que no tienen reportes.",
          "reason": "Excluir el otro grupo también sesga el resultado."
        }
      ],
      "explanation": "Fundamento: CGD arts. 13, 147–151 y 159; guía PGN de investigación; metodología aplicada. El diseño y la selección condicionan el alcance de generalización. Primera alternativa incorrecta: Una muestra dirigida no estima necesariamente prevalencia poblacional. Segunda alternativa incorrecta: Excluir el otro grupo también sesga el resultado.",
      "difficulty": 5
    }
  ],
  "pgn-m69": [
    {
      "caseText": "El sistema de correspondencia marca un trámite como cerrado el día del envío de la respuesta. El sistema de archivo conserva estado activo hasta incorporar constancia y cerrar el índice. Las dos fuentes se consultan el mismo día y tienen el mismo identificador. El informe inicial trata la diferencia como manipulación deliberada, aunque no ha revisado las reglas de transición ni el estado de la constancia.",
      "stem": "¿Qué análisis permite resolver la aparente contradicción antes de afirmar una irregularidad material?",
      "correct": {
        "text": "Reconstruir significado de estados, fechas y constancias, verificar transición de ambos sistemas y documentar si la diferencia es explicable o permanece abierta.",
        "reason": "Dos estados pueden representar hitos distintos del mismo trámite."
      },
      "other": [
        {
          "text": "Elegir el estado cerrado porque fue actualizado primero y por tanto prevalece jurídicamente.",
          "reason": "El orden temporal no determina significado ni prevalencia."
        },
        {
          "text": "Declarar falsedad de una fuente por el solo desacuerdo entre sus etiquetas.",
          "reason": "Una diferencia semántica no demuestra falsedad."
        }
      ],
      "explanation": "Fundamento: CGD arts. 148, 159; perfil 104; SGC PGN. Dos estados pueden representar hitos distintos del mismo trámite. Primera alternativa incorrecta: El orden temporal no determina significado ni prevalencia. Segunda alternativa incorrecta: Una diferencia semántica no demuestra falsedad.",
      "difficulty": 4
    },
    {
      "caseText": "Un informe dice que todo expediente listo para decisión debe tener índice completo. El equipo encuentra un índice completo y deduce que el expediente necesariamente está listo, aunque falta verificar una notificación relevante y una solicitud de prueba pendiente. La regla institucional no establece que el índice sea el único requisito. Se necesita elaborar una síntesis para el funcionario competente.",
      "stem": "¿Qué error lógico debe corregirse al aplicar la condición establecida para pasar a decisión?",
      "correct": {
        "text": "Confundir condición necesaria con suficiente; verificar los demás requisitos y documentar que índice completo no basta para decidir.",
        "reason": "La existencia de un requisito necesario no satisface por sí sola otros presupuestos."
      },
      "other": [
        {
          "text": "Concluir que el índice no tiene ninguna importancia porque existen requisitos adicionales.",
          "reason": "Que no baste no significa que sea irrelevante."
        },
        {
          "text": "Dar por listo el expediente ya que cumplir una condición necesaria acredita automáticamente todas las demás.",
          "reason": "La inferencia afirma indebidamente la suficiencia."
        }
      ],
      "explanation": "Fundamento: CGD arts. 148, 159; perfil 104; SGC PGN. La existencia de un requisito necesario no satisface por sí sola otros presupuestos. Primera alternativa incorrecta: Que no baste no significa que sea irrelevante. Segunda alternativa incorrecta: La inferencia afirma indebidamente la suficiencia.",
      "difficulty": 5
    }
  ],
  "pgn-m70": [
    {
      "caseText": "Una dependencia tiene seis entregables en las próximas tres semanas, dos con vencimiento legal fijo y cuatro que dependen de datos de otras oficinas. El equipo disponible no alcanza a completar todo simultáneamente con calidad. El profesional ya identificó dependencias y tiempos estimados. La coordinación pide una propuesta de organización que permita anticipar retrasos y mantener los objetivos del área.",
      "stem": "¿Qué actuación ilustra Organización del Trabajo B en este ejercicio de aprendizaje?",
      "correct": {
        "text": "Programar entregables según plazo, recursos y dependencias, prever escenarios de atraso y acordar prioridades y seguimiento con la coordinación.",
        "reason": "El nivel B incluye programación de mediano plazo y previsión de escenarios."
      },
      "other": [
        {
          "text": "Resolver las tareas en orden de llegada y avisar solo cuando un plazo se haya vencido.",
          "reason": "Reacciona tarde y no anticipa restricciones."
        },
        {
          "text": "Completar primero todos los productos fáciles para maximizar número de entregas, sin considerar vencimientos.",
          "reason": "Cantidad de productos no sustituye prioridades ni objetivos."
        }
      ],
      "explanation": "Fundamento: Diccionario de competencias PGN, páginas 7 y 28 del PDF; perfil 104. El nivel B incluye programación de mediano plazo y previsión de escenarios. Primera alternativa incorrecta: Reacciona tarde y no anticipa restricciones. Segunda alternativa incorrecta: Cantidad de productos no sustituye prioridades ni objetivos.",
      "difficulty": 4
    },
    {
      "caseText": "En la revisión mensual se descubre que tres oficinas repiten un error al consolidar datos. El profesional puede corregir su propio reporte, pero también conoce una regla de validación que podría beneficiar a todo el proceso. La jefatura solicita propuestas viables y la implementación requiere autorización y prueba. El tiempo disponible permite documentar el patrón sin afectar la entrega inmediata.",
      "stem": "¿Qué conducta representa mejor Responsabilidad con la Organización B en el caso didáctico?",
      "correct": {
        "text": "Corregir el reporte, documentar la causa común y proponer una mejora validable alineada con los objetivos institucionales.",
        "reason": "El nivel B incorpora compromiso con objetivos y mejora continua."
      },
      "other": [
        {
          "text": "Corregir solo su reporte y omitir el patrón porque otros procesos no son de su responsabilidad inmediata.",
          "reason": "Soluciona el caso propio pero desaprovecha una mejora institucional pertinente."
        },
        {
          "text": "Modificar unilateralmente todos los sistemas para imponer su solución sin autorización.",
          "reason": "Proponer una mejora no habilita intervenir sin competencia."
        }
      ],
      "explanation": "Fundamento: Diccionario de competencias PGN, páginas 7 y 28 del PDF; perfil 104. El nivel B incorpora compromiso con objetivos y mejora continua. Primera alternativa incorrecta: Soluciona el caso propio pero desaprovecha una mejora institucional pertinente. Segunda alternativa incorrecta: Proponer una mejora no habilita intervenir sin competencia.",
      "difficulty": 5
    }
  ],
  "pgn-m71": [
    {
      "caseText": "Tres oficinas reportan errores recurrentes en la clasificación de expedientes. Cada una utiliza una metodología distinta y no existe una comparación institucional. El profesional tiene acceso a datos anonimizados y un canal formal para proponer un estudio conjunto con especialistas de la entidad y explorar colaboración académica autorizada. La dirección pide una propuesta que sirva para mejorar el proceso.",
      "stem": "¿Qué actuación ilustra Investigación B más allá de recopilar información para un caso individual?",
      "correct": {
        "text": "Diseñar un estudio colaborativo, comparar métodos, definir criterios y responsabilidades y proponer mejoras y cooperación especializada por vías autorizadas.",
        "reason": "El nivel B enfatiza estudios conjuntos y métodos que apoyen mejora institucional."
      },
      "other": [
        {
          "text": "Consolidar únicamente los reportes disponibles y entregar un listado sin pregunta ni método.",
          "reason": "El listado no constituye un diseño de investigación."
        },
        {
          "text": "Encargar todo el estudio a un tercero sin definir alcance, autorizaciones ni uso de información.",
          "reason": "Cooperación no elimina responsabilidad ni controles de acceso."
        }
      ],
      "explanation": "Fundamento: Diccionario PGN, páginas 25 y 35 del PDF; perfil 104. El nivel B enfatiza estudios conjuntos y métodos que apoyen mejora institucional. Primera alternativa incorrecta: El listado no constituye un diseño de investigación. Segunda alternativa incorrecta: Cooperación no elimina responsabilidad ni controles de acceso.",
      "difficulty": 4
    },
    {
      "caseText": "Un problema institucional combina cuentas compartidas, estados documentales incompatibles y procedimientos de aprobación diferentes. El equipo entiende los elementos por separado, pero la dirección necesita un concepto que explique su interacción y oriente futuras revisiones. Existen diagramas de procesos y fuentes contrastadas; aún deben declararse límites en la identificación personal de algunos eventos.",
      "stem": "¿Qué producto evidencia Pensamiento Conceptual A en este escenario de alta complejidad?",
      "correct": {
        "text": "Construir explicación integrada y rigurosa de relaciones, límites y causas plausibles, y formular directrices claras de revisión para consideración competente.",
        "reason": "El nivel A exige explicación compleja y lineamientos comprensibles."
      },
      "other": [
        {
          "text": "Entregar un glosario independiente de cada término sin explicar cómo interactúan en el problema.",
          "reason": "Definiciones aisladas no explican relaciones."
        },
        {
          "text": "Atribuir toda la situación a una causa única sin contrastar las fuentes heterogéneas.",
          "reason": "Una simplificación sin soporte contradice el rigor."
        }
      ],
      "explanation": "Fundamento: Diccionario PGN, páginas 25 y 35 del PDF; perfil 104. El nivel A exige explicación compleja y lineamientos comprensibles. Primera alternativa incorrecta: Definiciones aisladas no explican relaciones. Segunda alternativa incorrecta: Una simplificación sin soporte contradice el rigor.",
      "difficulty": 5
    }
  ],
  "pgn-m72": [
    {
      "caseText": "Una oficina cumple desde hace meses una meta de oportunidad del 70 %, pero el análisis muestra que puede alcanzar un nivel mayor mediante redistribución autorizada de carga y automatización de verificaciones repetitivas. La dirección pide una propuesta con metas desafiantes, tiempo y recursos estimados, sin disminuir la calidad ni alterar el universo medido. La ficha del indicador permanece estable.",
      "stem": "¿Qué actuación ilustra Orientación a Resultados A en este caso de aprendizaje?",
      "correct": {
        "text": "Proponer una meta superior realista y alineada con misión, estimar recursos y tiempos, obtener autorización y evaluar resultados con la misma ficha y controles.",
        "reason": "El nivel A supera metas mediante planificación de recursos y acciones legítimas."
      },
      "other": [
        {
          "text": "Mantener la meta existente sin analizar oportunidades de mejora porque ya se cumple.",
          "reason": "No aprovecha capacidad de mejorar resultados institucionales."
        },
        {
          "text": "Elevar la meta y excluir casos complejos del denominador para garantizar el porcentaje.",
          "reason": "Modificar el universo sin fundamento falsea comparabilidad."
        }
      ],
      "explanation": "Fundamento: Diccionario PGN, páginas 12 y 29 del PDF; perfil 104. El nivel A supera metas mediante planificación de recursos y acciones legítimas. Primera alternativa incorrecta: No aprovecha capacidad de mejorar resultados institucionales. Segunda alternativa incorrecta: Modificar el universo sin fundamento falsea comparabilidad.",
      "difficulty": 4
    },
    {
      "caseText": "Un equipo recibe una meta de 50 cierres al mes, pero el procedimiento exige comprobar notificación y anexos antes de cambiar el estado. Ocho expedientes aún tienen controles pendientes. El supervisor solicita marcarlos como cerrados y completar los soportes después. El profesional puede informar el avance real y proponer ajustes de asignación dentro de los procedimientos vigentes.",
      "stem": "¿Qué conducta expresa Cumplimiento de Parámetros B sin abandonar el objetivo del equipo?",
      "correct": {
        "text": "Mantener criterios de cierre, informar brecha real y alinear redistribución y objetivos del equipo con procedimientos y controles exigidos.",
        "reason": "El nivel B aplica criterios de procesos y alinea objetivos con procedimientos."
      },
      "other": [
        {
          "text": "Registrar los ocho como cerrados y revisar soportes después para cumplir la meta.",
          "reason": "El resultado aparente vulnera el parámetro."
        },
        {
          "text": "Dejar de medir cierres y renunciar a toda acción de mejora mientras existan expedientes pendientes.",
          "reason": "Respetar parámetros no exige renunciar a mejorar desempeño."
        }
      ],
      "explanation": "Fundamento: Diccionario PGN, páginas 12 y 29 del PDF; perfil 104. El nivel B aplica criterios de procesos y alinea objetivos con procedimientos. Primera alternativa incorrecta: El resultado aparente vulnera el parámetro. Segunda alternativa incorrecta: Respetar parámetros no exige renunciar a mejorar desempeño.",
      "difficulty": 5
    }
  ],
  "pgn-m73": [
    {
      "caseText": "Una persona que prepara la convocatoria estudia un caso didáctico donde debe identificar la conducta que mejor representa una competencia. Luego encuentra un ejemplo de autodescripción con una escala de frecuencia. Propone responder siempre según la conducta que considera ideal, aunque no coincida con su experiencia habitual. Todavía no dispone de la guía específica de aplicación de la prueba real.",
      "stem": "¿Qué distinción debe mantener entre reconocer una conducta y responder una eventual escala de autoinforme?",
      "correct": {
        "text": "Usar el caso para comprender la competencia y responder cualquier autoinforme honestamente según su conducta habitual e instrucciones, sin asumir formato oficial.",
        "reason": "El caso y la autodescripción tienen objetivos distintos."
      },
      "other": [
        {
          "text": "Marcar siempre la frecuencia máxima de cualquier conducta que parezca deseable.",
          "reason": "Una estrategia de imagen ideal no refleja necesariamente conducta real."
        },
        {
          "text": "Elegir la letra A en toda respuesta porque el nivel A es el máximo del diccionario.",
          "reason": "Nivel de competencia no equivale a posición de opción."
        }
      ],
      "explanation": "Fundamento: Perfil 104 y diccionario PGN; ejercicios didácticos, no modelo psicométrico oficial. El caso y la autodescripción tienen objetivos distintos. Primera alternativa incorrecta: Una estrategia de imagen ideal no refleja necesariamente conducta real. Segunda alternativa incorrecta: Nivel de competencia no equivale a posición de opción.",
      "difficulty": 4
    },
    {
      "caseText": "En una actividad de reflexión aparece la afirmación «cuando detecto un error prefiero no informarlo si el equipo puede quedar mal». La persona cree que debe valorarla positivamente porque contiene una referencia a su equipo. Otra afirmación expresa que comunica desviaciones oportunamente. El ejercicio no establece que esas dos frases tengan una equivalencia psicométrica ni una puntuación oficial.",
      "stem": "¿Cómo debe interpretarse la primera afirmación antes de contestar según las instrucciones del ejercicio?",
      "correct": {
        "text": "Leer la conducta literal de ocultar el error y distinguirla de responsabilidad y comunicación de riesgos, sin inventar una clave de puntuación.",
        "reason": "La dirección depende de la conducta descrita y no de una palabra positiva."
      },
      "other": [
        {
          "text": "Interpretarla como colaboración positiva porque protege la imagen del grupo.",
          "reason": "Confunde lealtad con ocultamiento de un riesgo."
        },
        {
          "text": "Elegir automáticamente el extremo contrario en toda afirmación que contenga una negación.",
          "reason": "La negación no determina por sí sola una respuesta de frecuencia."
        }
      ],
      "explanation": "Fundamento: Perfil 104 y diccionario PGN; ejercicios didácticos, no modelo psicométrico oficial. La dirección depende de la conducta descrita y no de una palabra positiva. Primera alternativa incorrecta: Confunde lealtad con ocultamiento de un riesgo. Segunda alternativa incorrecta: La negación no determina por sí sola una respuesta de frecuencia.",
      "difficulty": 5
    }
  ],
  "pgn-m74": [
    {
      "caseText": "La PGN recibe una noticia documentada sobre una alteración de datos institucionales. Los registros identifican una cuenta compartida y no permiten individualizar al posible autor. Hay un deber funcional potencialmente comprometido y el despacho tiene competencia para evaluar la noticia. La jefatura pide formular cargos inmediatamente, aunque no existe auto de investigación ni prueba que comprometa a una persona concreta.",
      "stem": "¿Qué ruta resulta de aplicar competencia, etapa, problema, prueba y actuación al supuesto descrito?",
      "correct": {
        "text": "Evaluar mérito y competencia, identificar duda de individualización y considerar indagación previa del art. 208, sin formular cargos anticipados.",
        "reason": "La etapa y el vacío de identidad determinan la ruta inicial."
      },
      "other": [
        {
          "text": "Formular cargos a todos los titulares de acceso por tratarse de un hecho documentado.",
          "reason": "Noticia y cuenta compartida no satisfacen requisitos de cargos."
        },
        {
          "text": "Archivar automáticamente toda noticia cuando no se conoce la identidad personal.",
          "reason": "La duda de identidad puede habilitar indagación previa."
        }
      ],
      "explanation": "Fundamento: CGD arts. 208–211, 220–225; perfil 104; método didáctico propio de Umbral. La etapa y el vacío de identidad determinan la ruta inicial. Primera alternativa incorrecta: Noticia y cuenta compartida no satisfacen requisitos de cargos. Segunda alternativa incorrecta: La duda de identidad puede habilitar indagación previa.",
      "difficulty": 4
    },
    {
      "caseText": "Una investigación ya tiene individualizado al posible autor y se han recaudado todas las pruebas ordenadas. Existe evidencia de cargo y una explicación de descargo pendiente de valoración. No se ha expedido auto de cierre ni surtido traslado para alegatos precalificatorios. El profesional prepara un calendario de actuaciones y recibe la instrucción de remitir inmediatamente el expediente al juzgador para ahorrar tiempo.",
      "stem": "¿Qué secuencia preserva los estándares de evaluación y las oportunidades procesales antes de la remisión?",
      "correct": {
        "text": "Cerrar cuando proceda, surtir traslado de diez días, valorar pruebas y alegatos, decidir archivo o cargos y solo remitir tras notificaciones si hay pliego.",
        "reason": "Los arts. 220–225 diferencian cierre, alegatos, evaluación y remisión."
      },
      "other": [
        {
          "text": "Remitir al juzgador antes del cierre para que determine si formula cargos.",
          "reason": "El juzgador no sustituye evaluación del instructor."
        },
        {
          "text": "Formular cargos por existir prueba de cargo y omitir traslado porque aún habrá defensa en juicio.",
          "reason": "La defensa posterior no reemplaza el traslado previo."
        }
      ],
      "explanation": "Fundamento: CGD arts. 208–211, 220–225; perfil 104; método didáctico propio de Umbral. Los arts. 220–225 diferencian cierre, alegatos, evaluación y remisión. Primera alternativa incorrecta: El juzgador no sustituye evaluación del instructor. Segunda alternativa incorrecta: La defensa posterior no reemplaza el traslado previo.",
      "difficulty": 5
    }
  ]
}
