import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM55M64: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m55": [
    {
      "caseText": "Un municipio de 22.000 habitantes aprueba su plan de desarrollo cuatrienal e incluye un proyecto de expansión urbana. La oficina afirma que el acuerdo del plan modifica automáticamente el uso del suelo. El expediente contiene el EOT anterior, pero no acredita revisión de determinantes, concertación ambiental ni modificación formal del instrumento. La Procuraduría recibe una solicitud de vigilancia preventiva.",
      "stem": "¿Qué debe comprobar la PGN para diferenciar la decisión del plan de desarrollo de una modificación jurídicamente válida del ordenamiento?",
      "correct": {
        "text": "Distinguir plan de desarrollo y EOT, verificar instrumento vigente, procedimiento, determinantes y autoridad competente.",
        "reason": "Los instrumentos tienen objetos y procedimientos diferentes."
      },
      "other": [
        {
          "text": "Aceptar la expansión porque todo plan aprobado modifica el suelo.",
          "reason": "El plan de desarrollo no sustituye el ordenamiento."
        },
        {
          "text": "Exigir POT de ciudad mayor sin verificar población ni excepciones.",
          "reason": "La categoría depende de la ley y sus excepciones."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 287–288, 311 y 313; Ley 388 arts. 9–10, 24 y 30–35; Ley 2294 art. 32. Los instrumentos tienen objetos y procedimientos diferentes. Primera alternativa incorrecta: El plan de desarrollo no sustituye el ordenamiento. Segunda alternativa incorrecta: La categoría depende de la ley y sus excepciones.",
      "difficulty": 4
    },
    {
      "caseText": "Una alcaldía propone habilitar suelo de expansión. Una determinante ambiental vigente restringe parte del área; las capas digitales tienen sistemas de coordenadas diferentes. El informe no contiene metadatos ni fecha de los planos. El operador preventivo debe explicar la discrepancia sin decidir por sí mismo el destino de los predios ni atribuir una infracción al servidor.",
      "stem": "¿Cómo contrastar la determinante ambiental y las fuentes cartográficas sin sustituir a las autoridades competentes?",
      "correct": {
        "text": "Verificar determinante y acto vigente, normalizar coordenadas y solicitar aclaración a las autoridades competentes.",
        "reason": "El art. 10 establece jerarquía en ámbitos competenciales."
      },
      "other": [
        {
          "text": "Preferir la capa municipal reciente y resolver la discrepancia por la fecha de actualización.",
          "reason": "La actualidad de un mapa no resuelve jerarquía."
        },
        {
          "text": "Clasificar desde PGN el polígono como suelo protegido y requerir su incorporación al instrumento territorial.",
          "reason": "La competencia de ordenamiento no se transfiere al operador."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 287–288, 311 y 313; Ley 388 arts. 9–10, 24 y 30–35; Ley 2294 art. 32. El art. 10 establece jerarquía en ámbitos competenciales. Primera alternativa incorrecta: La actualidad de un mapa no resuelve jerarquía. Segunda alternativa incorrecta: La competencia de ordenamiento no se transfiere al operador.",
      "difficulty": 5
    }
  ],
  "pgn-m56": [
    {
      "caseText": "Una procuraduría revisa el MIPG de un municipio y prepara un diagnóstico de su gestión interna. Un consultor utiliza idéntica lista de obligaciones para ambas entidades y no consulta el artículo sobre ámbito de aplicación. El equipo posee el SGC institucional y el modelo MIPGN, pero se propone omitirlos porque las dos instituciones administran recursos públicos y pertenecen al Estado.",
      "stem": "¿Cómo distinguir las obligaciones de gestión y control interno aplicables al municipio y al organismo de control?",
      "correct": {
        "text": "Distinguir MIPG ejecutivo, control interno y políticas aplicables a organismos de control; consultar el MIPGN institucional.",
        "reason": "El Decreto 1499 distingue ámbitos y aplicabilidad."
      },
      "other": [
        {
          "text": "Imponer a PGN el modelo ejecutivo por ser entidad nacional que administra recursos públicos.",
          "reason": "Ser nacional no equivale a integrar la Rama Ejecutiva."
        },
        {
          "text": "Excluir a PGN de control interno por su autonomía y régimen institucional.",
          "reason": "La política de control interno sí corresponde a órganos de control."
        }
      ],
      "explanation": "Fundamento: Decreto 1499/2017 art. 2.2.22.3.4; Ley 87/1993; SGC PGN. El Decreto 1499 distingue ámbitos y aplicabilidad. Primera alternativa incorrecta: Ser nacional no equivale a integrar la Rama Ejecutiva. Segunda alternativa incorrecta: La política de control interno sí corresponde a órganos de control.",
      "difficulty": 4
    },
    {
      "caseText": "El tablero mensual identifica 25 peticiones cuyo término vence en el período. Diez fueron respondidas oportunamente dentro de ese universo y ocho respuestas adicionales corresponden a solicitudes exigibles el próximo mes. La ficha define oportunidad sobre las 25 peticiones exigibles. La coordinación reporta 100 % porque todas las respuestas tramitadas fueron oportunas y propone cerrar el seguimiento.",
      "stem": "¿Qué porcentaje de oportunidad corresponde a la población definida en la ficha y cómo deben tratarse las respuestas de otro período?",
      "correct": {
        "text": "10/25 = 40 %; separar las ocho respuestas de otro período y verificar los quince restantes.",
        "reason": "La ficha establece numerador y denominador."
      },
      "other": [
        {
          "text": "18/25 = 72 %, incluyendo respuestas de otros períodos.",
          "reason": "Incluye respuestas fuera de la población definida."
        },
        {
          "text": "18/18 = 100 %, excluyendo las peticiones pendientes del universo definido por la ficha.",
          "reason": "Excluir pendientes distorsiona el indicador."
        }
      ],
      "explanation": "Fundamento: Decreto 1499/2017 art. 2.2.22.3.4; Ley 87/1993; SGC PGN. La ficha establece numerador y denominador. Primera alternativa incorrecta: Incluye respuestas fuera de la población definida. Segunda alternativa incorrecta: Excluir pendientes distorsiona el indicador.",
      "difficulty": 5
    }
  ],
  "pgn-m57": [
    {
      "caseText": "Cada semana se registran solicitudes duplicadas porque dos operadores pueden crear simultáneamente la misma entrada. La oficina elimina duplicados de forma manual y cierra la acción de mejora cada vez. El aplicativo conserva información para analizar concurrencia y existe un ambiente de pruebas autorizado. El equipo no ha evaluado causa, validación de unicidad ni recurrencia después de los ajustes.",
      "stem": "¿Qué acción permite corregir las duplicidades y comprobar que el control implementado evita su recurrencia?",
      "correct": {
        "text": "Corregir con trazabilidad, analizar causa, implantar control validado y medir recurrencia.",
        "reason": "La acción correctiva aborda causa y verifica eficacia."
      },
      "other": [
        {
          "text": "Continuar borrando duplicados y cerrar por cada corrección.",
          "reason": "La recurrencia muestra que la causa puede persistir."
        },
        {
          "text": "Bloquear todas las radicaciones sin valorar alternativas.",
          "reason": "Un control debe ser proporcional y preservar servicio."
        }
      ],
      "explanation": "Fundamento: SGC PGN; Resolución 329/2021; PHVA. La acción correctiva aborda causa y verifica eficacia. Primera alternativa incorrecta: La recurrencia muestra que la causa puede persistir. Segunda alternativa incorrecta: Un control debe ser proporcional y preservar servicio.",
      "difficulty": 4
    },
    {
      "caseText": "Una auditoría comprueba que el equipo usó una guía descargada meses atrás. En el repositorio hay una versión aprobada antes de la actuación, con cambios de revisión. La jefatura considera suficiente que la guía antigua esté firmada. No se acredita transición que permita su uso y se conservan las dos versiones y los registros de los documentos producidos durante el período.",
      "stem": "¿Qué verificación documental permite determinar la no conformidad y corregir el acceso a versiones obsoletas?",
      "correct": {
        "text": "Verificar vigencia temporal, comparar requisito y evidencia, y corregir acceso a documentos obsoletos.",
        "reason": "Vigencia y aplicabilidad temporal requieren comprobación."
      },
      "other": [
        {
          "text": "Aceptar toda guía firmada como vigente indefinidamente.",
          "reason": "La firma no implica vigencia indefinida."
        },
        {
          "text": "Destruir la versión anterior y alterar los registros históricos.",
          "reason": "Debe preservarse historial y no alterar actuaciones."
        }
      ],
      "explanation": "Fundamento: SGC PGN; Resolución 329/2021; PHVA. Vigencia y aplicabilidad temporal requieren comprobación. Primera alternativa incorrecta: La firma no implica vigencia indefinida. Segunda alternativa incorrecta: Debe preservarse historial y no alterar actuaciones.",
      "difficulty": 5
    }
  ],
  "pgn-m58": [
    {
      "caseText": "Al terminar un trámite, la oficina genera una lista de archivos distribuidos entre correos, carpetas y radicación. Declara cerrado el expediente sin incorporar documentos al SGDEA, sin metadatos ni índice firmado. La serie está identificada en CCD y TRD y los soportes originales permanecen disponibles. El encargado propone conservar solo enlaces que permiten ver los archivos actuales.",
      "stem": "¿Qué actuación permite conformar y cerrar el expediente electrónico conforme al instrumento archivístico aplicable?",
      "correct": {
        "text": "Conformar el expediente en SGDEA, comprobar relaciones, orden y metadatos, y firmar el índice al cierre.",
        "reason": "El Acuerdo 001 regula conformación, índice y cierre."
      },
      "other": [
        {
          "text": "Cerrar con enlaces actuales a archivos y considerar cumplida la incorporación al SGDEA.",
          "reason": "Visualizar no equivale a gestionar archivísticamente."
        },
        {
          "text": "Imprimir los soportes para formar un expediente físico y eliminar las fuentes electrónicas, sin verificar la disposición prevista en los instrumentos archivísticos aplicables.",
          "reason": "Eliminar exige disposición autorizada."
        }
      ],
      "explanation": "Fundamento: Ley 594/2000 arts. 21–26; Acuerdo AGN 001/2024; Ley 527 arts. 8–12. El Acuerdo 001 regula conformación, índice y cierre. Primera alternativa incorrecta: Visualizar no equivale a gestionar archivísticamente. Segunda alternativa incorrecta: Eliminar exige disposición autorizada.",
      "difficulty": 4
    },
    {
      "caseText": "Un informe existe como borrador por correo, versión aprobada e incorporada al expediente y copia descargada después con fecha de modificación posterior. El profesional debe citar el documento que sustentó una decisión. Los tres archivos tienen nombres similares y el despacho dispone del índice y registros de aprobación, pero propone escoger la copia con fecha de sistema más reciente.",
      "stem": "¿Cómo identificar la versión documental que realmente sustentó la decisión sin confundir fecha de descarga con aprobación?",
      "correct": {
        "text": "Contrastar radicación, aprobación e índice; citar versión incorporada y preservar historial.",
        "reason": "La trazabilidad acredita versión usada en la actuación."
      },
      "other": [
        {
          "text": "Elegir la fecha de modificación más reciente.",
          "reason": "La fecha de descarga no prueba aprobación."
        },
        {
          "text": "Renombrar las tres con el mismo nombre y usarlas indistintamente.",
          "reason": "Confundir versiones impide reconstruir la decisión."
        }
      ],
      "explanation": "Fundamento: Ley 594/2000 arts. 21–26; Acuerdo AGN 001/2024; Ley 527 arts. 8–12. La trazabilidad acredita versión usada en la actuación. Primera alternativa incorrecta: La fecha de descarga no prueba aprobación. Segunda alternativa incorrecta: Confundir versiones impide reconstruir la decisión.",
      "difficulty": 5
    }
  ],
  "pgn-m59": [
    {
      "caseText": "Un escrito solicita copias de documentos públicos y un concepto general sobre una norma de competencia de la entidad. La ventanilla registra todo como consulta y asigna treinta días. Los documentos están disponibles, no presentan reserva y ambos componentes pueden separarse. La dependencia conoce el radicado y está en condiciones de controlar los términos individuales sin retrasar la respuesta documental.",
      "stem": "¿Cómo clasificar y responder los componentes de la petición sin aplicar un término único a solicitudes de distinta naturaleza?",
      "correct": {
        "text": "Diez días para documentos y treinta para consulta, salvo regla especial; responder de fondo y conservar constancias.",
        "reason": "El art. 14 diferencia términos según objeto."
      },
      "other": [
        {
          "text": "Asignar treinta días a todo el escrito porque la consulta requiere el mayor plazo y los demás componentes pueden esperar la respuesta conjunta.",
          "reason": "La consulta no transforma la solicitud de copias."
        },
        {
          "text": "Asignar quince días a todo por tratarse de derecho de petición.",
          "reason": "El término general no desplaza los específicos."
        }
      ],
      "explanation": "Fundamento: Ley 1755 arts. 14, 20–21, 25–26; Ley 1712; CGD arts. 193–195; perfil 104. El art. 14 diferencia términos según objeto. Primera alternativa incorrecta: La consulta no transforma la solicitud de copias. Segunda alternativa incorrecta: El término general no desplaza los específicos.",
      "difficulty": 4
    },
    {
      "caseText": "Una oficina recibe por escrito una petición ajena a sus atribuciones. Identifica al competente el segundo día y conserva anexos y datos de contacto. El responsable desea esperar quince días y pedir al ciudadano que radique nuevamente, aunque puede remitir la petición por un canal institucional seguro. La otra autoridad confirma que dispone de un canal formal para recibir el expediente.",
      "stem": "¿Qué trámite de información y remisión debe surtir la autoridad incompetente conforme al artículo 21?",
      "correct": {
        "text": "Informar y remitir en cinco días, copiar el oficio al interesado y contar desde el día siguiente a recepción competente.",
        "reason": "La remisión por competencia tiene regla propia."
      },
      "other": [
        {
          "text": "Esperar quince días para informar incompetencia y solicitar una nueva radicación.",
          "reason": "No debe imponerse reiniciar el trámite al ciudadano."
        },
        {
          "text": "Resolver la solicitud de fondo dentro de los cinco días porque ya se identificó el órgano competente y la remisión podría retrasar la respuesta.",
          "reason": "Recepción no crea competencia sustancial."
        }
      ],
      "explanation": "Fundamento: Ley 1755 arts. 14, 20–21, 25–26; Ley 1712; CGD arts. 193–195; perfil 104. La remisión por competencia tiene regla propia. Primera alternativa incorrecta: No debe imponerse reiniciar el trámite al ciudadano. Segunda alternativa incorrecta: Recepción no crea competencia sustancial.",
      "difficulty": 5
    }
  ],
  "pgn-m60": [
    {
      "caseText": "La cuenta de un servidor retirado hace dos semanas sigue activa y registra una consulta posterior al retiro. Hay sesiones persistentes y varias personas conocían credenciales de una cuenta funcional asociada. El jefe exige borrar la cuenta y su historial y atribuir la consulta al exservidor por el nombre de usuario. El equipo puede revocar accesos sin eliminar los registros de auditoría.",
      "stem": "¿Qué actuación permite contener el acceso de la cuenta retirada y preservar evidencia sin atribuir automáticamente la consulta?",
      "correct": {
        "text": "Revocar accesos y sesiones según autorización, preservar logs y configuración, y correlacionar fuentes antes de atribuir.",
        "reason": "Es posible contener el riesgo conservando trazabilidad."
      },
      "other": [
        {
          "text": "Eliminar la cuenta y su historial; atribuir por nombre de usuario.",
          "reason": "El borrado pierde evidencia y la cuenta no acredita autoría."
        },
        {
          "text": "Mantener la cuenta y todas sus sesiones activas hasta finalizar la investigación, evitando cualquier cambio de permisos aunque existan medidas de preservación y contención.",
          "reason": "La preservación no exige mantener privilegios activos."
        }
      ],
      "explanation": "Fundamento: Ley 1581 arts. 4, 17–18; MSPI Resolución 02277/2025; MRAE v3. Es posible contener el riesgo conservando trazabilidad. Primera alternativa incorrecta: El borrado pierde evidencia y la cuenta no acredita autoría. Segunda alternativa incorrecta: La preservación no exige mantener privilegios activos.",
      "difficulty": 4
    },
    {
      "caseText": "Una base presenta identificadores con formato válido, pero personas duplicadas y datos de contacto distintos de la fuente autorizada. El archivo se guardó ayer a partir de una extracción de hace seis meses. El responsable declara alta calidad porque las celdas cumplen el formato. La oficina dispone de identificadores únicos, fecha de extracción y fuente de referencia para verificar los registros.",
      "stem": "¿Qué dimensiones de calidad deben comprobarse antes de aceptar la base como fuente confiable del informe?",
      "correct": {
        "text": "Unicidad, exactitud, consistencia y actualidad real, además de validez y completitud.",
        "reason": "Las dimensiones de calidad son distintas."
      },
      "other": [
        {
          "text": "Aceptar por formato válido y fecha reciente del archivo.",
          "reason": "Fecha del archivo y formato no acreditan exactitud."
        },
        {
          "text": "Eliminar duplicados por nombre sin verificar identidad.",
          "reason": "Depurar por nombre puede eliminar registros legítimos."
        }
      ],
      "explanation": "Fundamento: Ley 1581 arts. 4, 17–18; MSPI Resolución 02277/2025; MRAE v3. Las dimensiones de calidad son distintas. Primera alternativa incorrecta: Fecha del archivo y formato no acreditan exactitud. Segunda alternativa incorrecta: Depurar por nombre puede eliminar registros legítimos.",
      "difficulty": 5
    }
  ],
  "pgn-m61": [
    {
      "caseText": "Un registro muestra la IP pública de una sede con doscientas personas. La red utiliza NAT y se conservan hora y puerto de origen, pero no se revisaron las traducciones, DHCP ni sesión de la aplicación. El coordinador atribuye el hecho al responsable administrativo de la conexión. Existe una vía autorizada para solicitar los registros complementarios antes de que expire su retención.",
      "stem": "¿Qué correlación de fuentes permite aproximarse al origen del evento cuando varias personas comparten una dirección IP?",
      "correct": {
        "text": "Cruzar hora, puerto, NAT, equipo, sesión y autenticación; expresar límites y posibles operadores.",
        "reason": "La identificación requiere correlación de varias fuentes."
      },
      "other": [
        {
          "text": "Atribuir al titular administrativo porque la IP identifica a la persona.",
          "reason": "NAT comparte una dirección entre múltiples equipos."
        },
        {
          "text": "Descartar toda evidencia de red por ser IP compartida.",
          "reason": "La IP aporta contexto, aunque no autoría por sí sola."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147 y 159; NIST SP 800-92. La identificación requiere correlación de varias fuentes. Primera alternativa incorrecta: NAT comparte una dirección entre múltiples equipos. Segunda alternativa incorrecta: La IP aporta contexto, aunque no autoría por sí sola.",
      "difficulty": 4
    },
    {
      "caseText": "Un cambio aparece a 15:20 UTC y una autenticación a 10:20 UTC−5. El reloj local estaba adelantado dos minutos según fuente verificable. Los eventos tienen identificadores distintos y aún no se relacionó sesión con modificación. El informe propone tratarlos como la misma acción por coincidencia de horas convertidas. Se conservan los valores originales y la configuración temporal.",
      "stem": "¿Cómo normalizar y valorar los registros sin confundir coincidencia temporal nominal con identidad de eventos?",
      "correct": {
        "text": "Normalizar zonas y desfases, registrar incertidumbre, preservar originales y contrastar identificadores y tipos de evento.",
        "reason": "La coincidencia nominal no demuestra mismo evento."
      },
      "other": [
        {
          "text": "Equiparar eventos por coincidencia de hora nominal sin contrastar identificadores.",
          "reason": "Autenticación y cambio son eventos distintos."
        },
        {
          "text": "Promediar las marcas sin corregir ni documentar el desfase conocido en los relojes.",
          "reason": "Promediar no corrige errores de reloj."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147 y 159; NIST SP 800-92. La coincidencia nominal no demuestra mismo evento. Primera alternativa incorrecta: Autenticación y cambio son eventos distintos. Segunda alternativa incorrecta: Promediar no corrige errores de reloj.",
      "difficulty": 5
    }
  ],
  "pgn-m62": [
    {
      "caseText": "Una base contiene tres expedientes y seis actuaciones asociadas. Una consulta JOIN devuelve seis filas porque cada expediente tiene varias actuaciones. El analista presenta seis expedientes investigados y calcula tasas sobre ese total. El esquema y las claves están disponibles y la ficha define expediente único como unidad. Las actuaciones deben mantenerse para otro indicador de actividad.",
      "stem": "¿Cómo calcular el número de expedientes únicos sin confundirlo con las filas producidas por la unión de tablas?",
      "correct": {
        "text": "Contar identificadores distintos de expediente y mantener seis actuaciones por separado; documentar cardinalidad.",
        "reason": "La unión uno a muchos multiplica filas; la unidad define el conteo."
      },
      "other": [
        {
          "text": "Contar las seis filas como expedientes porque son combinaciones válidas.",
          "reason": "Una fila de unión no equivale a expediente único."
        },
        {
          "text": "Eliminar actuaciones de la fuente hasta igualar los totales.",
          "reason": "La métrica no requiere modificar fuentes originales."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147–159; NIST SP 800-86. La unión uno a muchos multiplica filas; la unidad define el conteo. Primera alternativa incorrecta: Una fila de unión no equivale a expediente único. Segunda alternativa incorrecta: La métrica no requiere modificar fuentes originales.",
      "difficulty": 4
    },
    {
      "caseText": "updated_by contiene app_service en todos los cambios. El motor registra la cuenta técnica; la aplicación conserva solicitudes y sesiones. Un proceso programado modifica estados de noche. La oficina propone atribuir todas las operaciones al administrador de base de datos sin revisar arquitectura, automatismos ni permisos. Los registros de aplicación pueden solicitarse por vía autorizada.",
      "stem": "¿Qué fuentes deben contrastarse para distinguir la cuenta técnica, una operación automatizada y una solicitud de usuario?",
      "correct": {
        "text": "Contrastar motor, historial, sesiones, solicitudes, tareas y permisos; precisar el alcance de la cuenta técnica.",
        "reason": "Una conexión técnica puede representar múltiples acciones."
      },
      "other": [
        {
          "text": "Atribuir los cambios al administrador del motor por gestionar la cuenta técnica.",
          "reason": "Administrar el motor no acredita ejecución de cada cambio."
        },
        {
          "text": "Descartar los registros del motor y las auditorías automatizadas porque no incluyen nombres individuales, y utilizar únicamente las declaraciones de los usuarios del sistema.",
          "reason": "Los registros aportan evidencia aun sin identidad personal directa."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 9–12; CGD arts. 147–159; NIST SP 800-86. Una conexión técnica puede representar múltiples acciones. Primera alternativa incorrecta: Administrar el motor no acredita ejecución de cada cambio. Segunda alternativa incorrecta: Los registros aportan evidencia aun sin identidad personal directa.",
      "difficulty": 5
    }
  ],
  "pgn-m63": [
    {
      "caseText": "Se aporta correo reenviado como texto con nombre de servidor y fecha visible. El original está en el buzón institucional, pero no se obtuvieron cabeceras completas ni trazas de entrega. El instructor propone considerar el texto como prueba definitiva de autoría y cronología. El custodio puede entregar una exportación autorizada y conservar los anexos originales disponibles.",
      "stem": "¿Qué adquisición permite verificar mejor origen, entrega y contexto del correo sin asumir autoría por el texto visible?",
      "correct": {
        "text": "Preservar mensaje original, anexos, cabeceras y trazas del servidor; documentar los límites de identidad y cronología.",
        "reason": "El original y las trazas aportan contexto potencialmente perdido."
      },
      "other": [
        {
          "text": "Usar el texto reenviado porque fecha y remitente visibles preservan los metadatos.",
          "reason": "El reenvío no preserva necesariamente encabezados."
        },
        {
          "text": "Excluir el correo porque el reenvío puede modificar su presentación y su contenido.",
          "reason": "Ley 527 admite mensajes de datos sujetos a valoración."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 7–12 y 28; RFC 5322, 6376, 8601, 7208 y 9989. El original y las trazas aportan contexto potencialmente perdido. Primera alternativa incorrecta: El reenvío no preserva necesariamente encabezados. Segunda alternativa incorrecta: Ley 527 admite mensajes de datos sujetos a valoración.",
      "difficulty": 4
    },
    {
      "caseText": "Una cabecera contiene DKIM válido para dominio institucional y resultado agregado por servidor receptor confiable. El analista concluye que el titular del buzón redactó personalmente el correo y que no hubo acceso delegado. No se consultaron permisos, registros de identidad ni eventos de envío. Se conoce el dominio firmante y qué partes del mensaje cubre la firma.",
      "stem": "¿Cuál es el alcance de la autenticación DKIM y qué verificaciones adicionales requiere la atribución a una persona?",
      "correct": {
        "text": "DKIM autentica el dominio firmante y partes cubiertas; contrastar envío, identidad y delegación para atribuir autoría humana.",
        "reason": "DKIM es autenticación de dominio, no de autor humano."
      },
      "other": [
        {
          "text": "Tratar DKIM válido como prueba de autoría personal del titular del buzón.",
          "reason": "Dominio y persona son distintos."
        },
        {
          "text": "Descartar el resultado de autenticación del dominio por no acreditar la identidad personal, sin considerarlo siquiera para examinar la integridad de las partes firmadas.",
          "reason": "La autenticación tiene valor técnico específico."
        }
      ],
      "explanation": "Fundamento: Ley 527 arts. 7–12 y 28; RFC 5322, 6376, 8601, 7208 y 9989. DKIM es autenticación de dominio, no de autor humano. Primera alternativa incorrecta: Dominio y persona son distintos. Segunda alternativa incorrecta: La autenticación tiene valor técnico específico.",
      "difficulty": 5
    }
  ],
  "pgn-m64": [
    {
      "caseText": "Los registros permiten establecer que una cuenta ejecutó una modificación a cierta hora. No hay datos de sesión para el período y existe acceso delegado. El profesional redacta que el titular actuó intencionalmente y propone sanción, aunque el encargo solo pide identificar eventos y soportes. Se conserva el material original y se puede señalar qué fuentes adicionales permitirían contrastar la atribución.",
      "stem": "¿Cómo reformular la conclusión técnica para conservar el hallazgo sin atribuir intención ni responsabilidad que no están demostradas?",
      "correct": {
        "text": "Describir operación registrada, fuentes y límites de identificación, proponer contraste y reservar valoración jurídica a competente.",
        "reason": "El informe distingue observación, inferencia y límite."
      },
      "other": [
        {
          "text": "Mantener intencionalidad porque el nombre de cuenta demuestra persona y propósito.",
          "reason": "Cuenta no demuestra intención o identidad humana."
        },
        {
          "text": "Eliminar el hallazgo porque no identifica físicamente al operador.",
          "reason": "El hallazgo sigue siendo útil para orientar diligencias."
        }
      ],
      "explanation": "Fundamento: Perfil 104; CGD arts. 159, 177–184, 193–195; Ley 527; NIST SP 800-86. El informe distingue observación, inferencia y límite. Primera alternativa incorrecta: Cuenta no demuestra intención o identidad humana. Segunda alternativa incorrecta: El hallazgo sigue siendo útil para orientar diligencias.",
      "difficulty": 4
    },
    {
      "caseText": "Un colega intenta reproducir un informe de 48 registros anómalos. Faltan consulta, versión de herramienta, criterio y export original; se descubre que un filtro pudo excluir filas legítimas. El analista puede recuperar fuente autorizada y secuencia de trabajo. La dirección pide cambiar la cifra sin constancia para evitar que el informe anterior sea cuestionado en el expediente.",
      "stem": "¿Qué procedimiento permite reproducir el cálculo y corregir el informe manteniendo historial y trazabilidad?",
      "correct": {
        "text": "Preservar fuentes, recuperar consulta, reproducir en copia, conciliar recuentos y documentar corrección y versiones.",
        "reason": "Reproducibilidad exige fuentes, parámetros y control de cambios."
      },
      "other": [
        {
          "text": "Sustituir el resultado y retirar la versión previa para evitar cifras contradictorias.",
          "reason": "Ocultar versiones elimina trazabilidad."
        },
        {
          "text": "Mantener 48 para no alterar el informe, aun comprobado el error metodológico.",
          "reason": "Una corrección documentada mejora el soporte."
        }
      ],
      "explanation": "Fundamento: Perfil 104; CGD arts. 159, 177–184, 193–195; Ley 527; NIST SP 800-86. Reproducibilidad exige fuentes, parámetros y control de cambios. Primera alternativa incorrecta: Ocultar versiones elimina trazabilidad. Segunda alternativa incorrecta: Una corrección documentada mejora el soporte.",
      "difficulty": 5
    }
  ]
}
