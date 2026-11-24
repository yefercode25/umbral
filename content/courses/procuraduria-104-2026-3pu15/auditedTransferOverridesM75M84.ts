import type { FoundationTransferOverride } from './foundationTransferOverrides'

export const auditedTransferOverridesM75M84: Record<string, [FoundationTransferOverride, FoundationTransferOverride]> = {
  "pgn-m75": [
    {
      "caseText": "Una oficina prepara el plan de estudio para un empleo de la convocatoria 104. El documento de referencia distingue conocimientos generales de conocimientos adicionales de determinadas delegadas. Un compañero sostiene que el título profesional de Ingeniería de Sistemas obliga a descartar por completo los temas de Hacienda, mientras otro propone abandonar el núcleo disciplinario para estudiar solo tributación. No hay guía específica que confirme esos cambios.",
      "stem": "¿Cómo organizar la prioridad de la especialidad sin atribuir al concurso una distribución temática no demostrada?",
      "correct": {
        "text": "Mantener el núcleo común, conservar la ruta financiera como condicional y ajustar su prioridad únicamente con fuentes oficiales aplicables.",
        "reason": "El perfil y la especialidad son referencias distintas; la prioridad requiere evidencia oficial."
      },
      "other": [
        {
          "text": "Excluir toda lectura presupuestal porque la profesión no es Economía.",
          "reason": "La información financiera puede ser relevante transversalmente."
        },
        {
          "text": "Asignar todo el tiempo a Hacienda por aparecer en los conocimientos de una delegada.",
          "reason": "La inclusión condicional no elimina el núcleo común."
        }
      ],
      "explanation": "Fundamento: Perfil 104; Constitución arts. 345–352; Decreto 111/1996. El perfil y la especialidad son referencias distintas; la prioridad requiere evidencia oficial. Las alternativas restantes deben examinarse por sus errores específicos: La información financiera puede ser relevante transversalmente. La inclusión condicional no elimina el núcleo común.",
      "difficulty": 4
    },
    {
      "caseText": "Un reporte institucional informa que el gasto pasó de 100 a 110 unidades monetarias entre dos períodos comparables. El índice de precios aplicable pasó de 100 a 110. La dirección quiere afirmar que la capacidad real de compra aumentó 10 %, aunque no hubo cambios de composición y el informe está destinado a evaluar la evolución del gasto. El equipo dispone de ambos índices y sus fechas de referencia.",
      "stem": "¿Qué interpretación separa crecimiento nominal de variación real bajo el supuesto de un deflactor apropiado?",
      "correct": {
        "text": "El gasto nominal aumentó 10 %, pero el real permanece constante: 110/1,10=100 en unidades del período base.",
        "reason": "El ajuste compara valores con poder adquisitivo equivalente."
      },
      "other": [
        {
          "text": "El gasto real creció 10 % porque la diferencia de valores corrientes es diez.",
          "reason": "Usar cifras corrientes no controla el cambio de precios."
        },
        {
          "text": "El gasto real cayó 10 % porque cualquier inflación reduce el gasto real independientemente del aumento nominal.",
          "reason": "Debe compararse el crecimiento nominal con el deflactor."
        }
      ],
      "explanation": "Fundamento: Perfil 104; Constitución arts. 345–352; Decreto 111/1996. El ajuste compara valores con poder adquisitivo equivalente. Las alternativas restantes deben examinarse por sus errores específicos: Usar cifras corrientes no controla el cambio de precios. Debe compararse el crecimiento nominal con el deflactor.",
      "difficulty": 5
    }
  ],
  "pgn-m76": [
    {
      "caseText": "Un contribuyente presenta una declaración cuyo saldo a pagar es cero. Un profesional de apoyo sostiene que, como no existe impuesto a pagar en ese formulario, ningún deber formal tributario podía resultar exigible. La norma que regula la declaración se encuentra disponible, pero aún no se verificaron sus destinatarios, período ni condiciones. El informe se prepara para orientar una actuación preventiva de la PGN.",
      "stem": "¿Qué distinción jurídica debe hacerse antes de concluir que no existía un deber tributario exigible?",
      "correct": {
        "text": "Distinguir obligación sustancial de pago y deberes formales; comprobar la norma, sujeto y período de la declaración.",
        "reason": "El pago y los deberes formales tienen presupuestos propios."
      },
      "other": [
        {
          "text": "Dar por inexistente toda obligación formal por el saldo cero.",
          "reason": "El saldo no elimina automáticamente un deber de declarar."
        },
        {
          "text": "Presumir una infracción por presentar una declaración sin impuesto a pagar.",
          "reason": "Una declaración en cero no es por sí sola irregular."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 338, 363; Estatuto Tributario art. 1; fundamentos económicos. El pago y los deberes formales tienen presupuestos propios. Las alternativas restantes deben examinarse por sus errores específicos: El saldo no elimina automáticamente un deber de declarar. Una declaración en cero no es por sí sola irregular.",
      "difficulty": 4
    },
    {
      "caseText": "El recaudo de un impuesto disminuyó 15 % respecto del año anterior. Durante el nuevo período cambió la base gravable legal y parte de los pagos pasó a otro mes por un ajuste de calendario. El tablero no separa estos efectos ni registra las gestiones de cobro. Un directivo solicita incluir una conclusión de corrupción antes de revisar las cifras de los contribuyentes y las normas aplicables.",
      "stem": "¿Qué análisis permite interpretar la caída del recaudo y formular hipótesis sin adelantar responsabilidad?",
      "correct": {
        "text": "Contrastar base, tarifa, calendario, población y gestión de cobro; separar efectos y documentar señales que ameriten verificación.",
        "reason": "El recaudo responde a múltiples factores y requiere análisis causal y jurídico."
      },
      "other": [
        {
          "text": "Atribuir la caída íntegramente a corrupción por ser una reducción superior al diez por ciento.",
          "reason": "Una magnitud no establece responsabilidad personal."
        },
        {
          "text": "Omitir el indicador porque no acredita directamente una falta disciplinaria.",
          "reason": "Una alerta puede orientar diligencias aunque no pruebe una falta."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 338, 363; Estatuto Tributario art. 1; fundamentos económicos. El recaudo responde a múltiples factores y requiere análisis causal y jurídico. Las alternativas restantes deben examinarse por sus errores específicos: Una magnitud no establece responsabilidad personal. Una alerta puede orientar diligencias aunque no pruebe una falta.",
      "difficulty": 5
    }
  ],
  "pgn-m77": [
    {
      "caseText": "Una entidad registra apropiación de 100 millones, compromisos de 80, obligaciones de 50 y pagos de 35 al mismo corte. El tablero presenta ejecución de 80 % y afirma que se pagó el mismo porcentaje de la apropiación. La oficina cuenta con soportes de los compromisos y obligaciones y debe elaborar un informe que explique las etapas sin dar por perdido el recurso pendiente de pago.",
      "stem": "¿Qué lectura de ejecución distingue los momentos presupuestales y sus indicadores sobre apropiación?",
      "correct": {
        "text": "Compromisos 80 %, obligaciones 50 % y pagos 35 %; explicar diferencias y revisar soportes y cronología.",
        "reason": "Cada etapa mide un momento distinto del gasto."
      },
      "other": [
        {
          "text": "Reportar 80 % pagado porque compromiso y pago son equivalentes.",
          "reason": "El compromiso no acredita desembolso."
        },
        {
          "text": "Reportar 65 % de pérdida patrimonial porque solo se pagaron 35 millones.",
          "reason": "El saldo no pagado no demuestra pérdida."
        }
      ],
      "explanation": "Fundamento: Decreto 111/1996 arts. 71, 89; Marco Normativo CGN Resolución 533/2015 y modificaciones. Cada etapa mide un momento distinto del gasto. Las alternativas restantes deben examinarse por sus errores específicos: El compromiso no acredita desembolso. El saldo no pagado no demuestra pérdida.",
      "difficulty": 4
    },
    {
      "caseText": "Un contrato cuenta con CDP previo, pero el expediente no acredita el registro presupuestal del compromiso. La oficina sostiene que el CDP reserva definitivamente el dinero a ese contratista y propone tratar ambos documentos como intercambiables. La entidad está sometida al Estatuto Orgánico del Presupuesto nacional y el profesional debe señalar qué soporte falta sin concluir automáticamente responsabilidad del ordenador.",
      "stem": "¿Qué control corresponde según la finalidad diferenciada de CDP y registro presupuestal?",
      "correct": {
        "text": "Verificar el RP exigible y su valor y plazo; distinguir disponibilidad de la afectación del compromiso conforme al art. 71.",
        "reason": "El CDP acredita apropiación disponible y el RP afecta recursos al compromiso."
      },
      "other": [
        {
          "text": "Considerar suficiente el CDP porque acredita el compromiso definitivo con el proveedor.",
          "reason": "Un certificado de disponibilidad no sustituye el registro."
        },
        {
          "text": "Expedir retrospectivamente el RP con una fecha ficticia para completar el expediente.",
          "reason": "La fecha ficticia vulnera trazabilidad y no corrige el hecho histórico."
        }
      ],
      "explanation": "Fundamento: Decreto 111/1996 arts. 71, 89; Marco Normativo CGN Resolución 533/2015 y modificaciones. El CDP acredita apropiación disponible y el RP afecta recursos al compromiso. Las alternativas restantes deben examinarse por sus errores específicos: Un certificado de disponibilidad no sustituye el registro. La fecha ficticia vulnera trazabilidad y no corrige el hecho histórico.",
      "difficulty": 5
    }
  ],
  "pgn-m78": [
    {
      "caseText": "Una noticia disciplinaria involucra a un integrante uniformado de la Policía Nacional y a un funcionario civil que cumple tareas administrativas en la misma dependencia. El equipo propone aplicar idéntico régimen especial a ambos por estar vinculados a la institución. La documentación permite identificar naturaleza del vínculo, funciones, fecha de hechos y posible competencia del despacho, pero aún no se contrastaron las normas de destinatarios.",
      "stem": "¿Qué análisis previo permite determinar el régimen disciplinario aplicable a cada persona sin excluir el poder preferente de PGN?",
      "correct": {
        "text": "Individualizar vínculo y condición, revisar destinatarios y reglas especiales o generales aplicables, y verificar competencia y poder preferente.",
        "reason": "El régimen depende de los destinatarios y la competencia legal."
      },
      "other": [
        {
          "text": "Aplicar el Estatuto Policial a toda persona que trabaje en la dependencia.",
          "reason": "La adscripción institucional no basta para aplicar el mismo estatuto."
        },
        {
          "text": "Excluir cualquier intervención de PGN por existir órganos disciplinarios policiales.",
          "reason": "La competencia policial coexiste con el poder preferente legal."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 217–218, 277; Leyes 1862/2017, 2196/2022; DDHH y DIH. El régimen depende de los destinatarios y la competencia legal. Las alternativas restantes deben examinarse por sus errores específicos: La adscripción institucional no basta para aplicar el mismo estatuto. La competencia policial coexiste con el poder preferente legal.",
      "difficulty": 4
    },
    {
      "caseText": "Una oficina analiza una actuación de autoridad durante una situación de violencia aislada. El informe da por probado que existe conflicto armado solo porque hubo intervención de la Fuerza Pública. No se han examinado las circunstancias ni los criterios de clasificación aplicables. La actuación puede comprometer derechos fundamentales y se requiere establecer el marco jurídico sin formular afirmaciones anticipadas sobre los hechos.",
      "stem": "¿Qué distinción corresponde hacer entre protección de derechos humanos y ámbito de aplicación del DIH?",
      "correct": {
        "text": "Examinar el contexto y criterios jurídicos de conflicto armado antes de aplicar DIH; mantener análisis de derechos humanos y garantías pertinentes.",
        "reason": "Son marcos distintos y complementarios, con ámbitos propios."
      },
      "other": [
        {
          "text": "Aplicar DIH automáticamente en cualquier intervención de Fuerza Pública.",
          "reason": "La intervención estatal no demuestra por sí misma conflicto armado."
        },
        {
          "text": "Descartar los derechos humanos cuando se considera aplicable DIH.",
          "reason": "El DIH no elimina automáticamente la protección de DDHH."
        }
      ],
      "explanation": "Fundamento: Constitución arts. 217–218, 277; Leyes 1862/2017, 2196/2022; DDHH y DIH. Son marcos distintos y complementarios, con ámbitos propios. Las alternativas restantes deben examinarse por sus errores específicos: La intervención estatal no demuestra por sí misma conflicto armado. El DIH no elimina automáticamente la protección de DDHH.",
      "difficulty": 5
    }
  ],
  "pgn-m79": [
    {
      "caseText": "Se publica un acto que modifica varios formatos de convocatoria, incluida la número 104. El anuncio informa un total agregado de nuevos empleos para todas las convocatorias relacionadas. El equipo quiere asignar ese total completo al código 3PU-15 y actualizar la cantidad de vacantes de Umbral sin descargar el formato individual. La versión previa del curso y el acto nuevo permanecen disponibles.",
      "stem": "¿Qué control de fuentes debe preceder a la actualización del número de vacantes y del perfil de estudio?",
      "correct": {
        "text": "Consultar el formato individual actualizado y su acto modificatorio, distinguir total agregado de vacantes específicas y registrar versión y fecha.",
        "reason": "El agregado de convocatorias no identifica la cantidad particular."
      },
      "other": [
        {
          "text": "Asignar todos los nuevos empleos del acto a la convocatoria 104 por estar mencionada.",
          "reason": "La mención de un empleo no distribuye todo el total."
        },
        {
          "text": "Ignorar el acto porque la versión previa del curso ya contiene una cifra.",
          "reason": "La fuente vigente debe contrastarse con la anterior."
        }
      ],
      "explanation": "Fundamento: Convocatoria 104 y actos modificatorios; Resolución PGN 243/2026. El agregado de convocatorias no identifica la cantidad particular. Las alternativas restantes deben examinarse por sus errores específicos: La mención de un empleo no distribuye todo el total. La fuente vigente debe contrastarse con la anterior.",
      "difficulty": 4
    },
    {
      "caseText": "Una guía oficial específica de prueba, en este supuesto didáctico, incluye un eje que el currículo había tratado como complementario y no menciona otro que el equipo infirió por el título profesional. El curso tiene lecciones y evaluaciones con identificadores persistentes. La coordinación solicita ajustar prioridades, pero también conservar los avances y dejar claro qué contenidos tienen respaldo explícito.",
      "stem": "¿Cómo gestionar el cambio curricular sin confundir inferencias anteriores con exigencias oficiales nuevas?",
      "correct": {
        "text": "Comparar guía y perfil, mapear brechas, ajustar prioridad con trazabilidad y preservar progreso compatible; versionar cambios sustanciales.",
        "reason": "La actualización debe ser específica y preservar aprendizaje cuando sea comparable."
      },
      "other": [
        {
          "text": "Mantener todas las prioridades anteriores porque modificar un plan invalida el aprendizaje.",
          "reason": "Ignorar la fuente nueva mantiene posibles brechas."
        },
        {
          "text": "Borrar el historial y sustituir todo el curso por la guía aunque conserve objetivos equivalentes.",
          "reason": "El borrado general no es necesario para versionar."
        }
      ],
      "explanation": "Fundamento: Convocatoria 104 y actos modificatorios; Resolución PGN 243/2026. La actualización debe ser específica y preservar aprendizaje cuando sea comparable. Las alternativas restantes deben examinarse por sus errores específicos: Ignorar la fuente nueva mantiene posibles brechas. El borrado general no es necesario para versionar.",
      "difficulty": 5
    }
  ],
  "pgn-m80": [
    {
      "caseText": "Un aplicativo deja de mostrar expedientes recientes, aunque el sistema de radicación confirma su creación. La arquitectura incluye una cola de integración, una API de consulta, reglas de permisos y una base de lectura. El equipo propone reiniciar directamente el motor de datos sin revisar las demás dependencias. Existen identificadores de solicitud y métricas de procesamiento que permiten seguir el flujo completo.",
      "stem": "¿Qué diagnóstico permite localizar la capa afectada antes de intervenir componentes en producción?",
      "correct": {
        "text": "Trazar una solicitud desde radicación, cola y API hasta permisos, datos y presentación, contrastar métricas y preservar registros antes de cambios.",
        "reason": "La arquitectura permite identificar la causa con trazabilidad entre capas."
      },
      "other": [
        {
          "text": "Reiniciar la base porque toda ausencia de expedientes visibles se origina allí.",
          "reason": "La interfaz no identifica por sí sola el componente defectuoso."
        },
        {
          "text": "Atribuir el fallo al usuario final sin examinar los componentes intermedios.",
          "reason": "La ausencia visible no demuestra error humano."
        }
      ],
      "explanation": "Fundamento: MRAE v3 MinTIC; perfil 104; arquitectura de sistemas. La arquitectura permite identificar la causa con trazabilidad entre capas. Las alternativas restantes deben examinarse por sus errores específicos: La interfaz no identifica por sí sola el componente defectuoso. La ausencia visible no demuestra error humano.",
      "difficulty": 4
    },
    {
      "caseText": "Una integración recibe un mensaje de creación de expediente y lo procesa correctamente, pero el acuse de recibo se pierde. El emisor reintenta el mismo mensaje y aparecen dos expedientes con idéntico identificador de operación. Los logs muestran ambos intentos y existe un ambiente de pruebas autorizado. La oficina necesita corregir el mecanismo sin eliminar indiscriminadamente registros de producción.",
      "stem": "¿Qué control de diseño permite evitar duplicación de efectos por reintentos de una misma operación?",
      "correct": {
        "text": "Implementar idempotencia mediante identificador único y control transaccional apropiado, probar reintentos y conciliar duplicados con trazabilidad.",
        "reason": "Idempotencia conserva el efecto previsto ante repetición de la misma solicitud."
      },
      "other": [
        {
          "text": "Deshabilitar todos los reintentos aunque se puedan perder operaciones legítimas.",
          "reason": "Eliminar reintentos puede reducir confiabilidad."
        },
        {
          "text": "Aceptar cada reintento como expediente nuevo y corregir manualmente después.",
          "reason": "Un evento repetido no representa necesariamente un trámite nuevo."
        }
      ],
      "explanation": "Fundamento: MRAE v3 MinTIC; perfil 104; arquitectura de sistemas. Idempotencia conserva el efecto previsto ante repetición de la misma solicitud. Las alternativas restantes deben examinarse por sus errores específicos: Eliminar reintentos puede reducir confiabilidad. Un evento repetido no representa necesariamente un trámite nuevo.",
      "difficulty": 5
    }
  ],
  "pgn-m81": [
    {
      "caseText": "Una sede necesita una subred IPv4 tradicional para 50 equipos, sin contar la dirección de red y la de difusión. El administrador propone un prefijo /27 y sostiene que sus 32 direcciones alcanzan porque la puerta de enlace puede compartir la dirección de red. Se dispone de un bloque mayor y el diseño debe reservar espacio para la puerta de enlace y los equipos sin reutilizar direcciones especiales.",
      "stem": "¿Cuál prefijo entre los propuestos permite asignar al menos 50 direcciones utilizables en la LAN tradicional?",
      "correct": {
        "text": "/26: 64 direcciones totales, normalmente 62 utilizables, suficientes para 50 equipos y una puerta de enlace.",
        "reason": "Los bits de host de /26 producen 64 direcciones; se descuentan red y difusión."
      },
      "other": [
        {
          "text": "/27: 32 direcciones totales y 32 utilizables si se omite la difusión.",
          "reason": "/27 ofrece normalmente 30 direcciones utilizables."
        },
        {
          "text": "/28: 16 direcciones totales que pueden ampliarse mediante DNS.",
          "reason": "DNS no aumenta capacidad de direccionamiento."
        }
      ],
      "explanation": "Fundamento: Fundamentos TCP/IP, DNS y correlación; RFC 9293 y 1034; NIST SP 800-92. Los bits de host de /26 producen 64 direcciones; se descuentan red y difusión. Las alternativas restantes deben examinarse por sus errores específicos: /27 ofrece normalmente 30 direcciones utilizables. DNS no aumenta capacidad de direccionamiento.",
      "difficulty": 4
    },
    {
      "caseText": "Un usuario informa que el sistema institucional no abre. Desde su equipo, DNS devuelve la dirección prevista y se establece conexión TCP y TLS con el servidor. La aplicación responde HTTP 403 únicamente al intentar consultar cierto expediente. El área de red propone cambiar DNS y reiniciar el router, aunque otros usuarios autorizados pueden consultar el mismo expediente desde la misma red.",
      "stem": "¿Qué capa y controles deben examinarse prioritariamente según los datos de conectividad disponibles?",
      "correct": {
        "text": "Revisar autorización, identidad, permisos y reglas de aplicación asociadas al 403, conservando pruebas de conectividad ya realizadas.",
        "reason": "El servicio respondió; el código orienta a autorización o política de acceso."
      },
      "other": [
        {
          "text": "Cambiar DNS porque cualquier error HTTP indica que el nombre no se resolvió.",
          "reason": "DNS ya resolvió el nombre en el supuesto."
        },
        {
          "text": "Reiniciar el router y concluir fallo de transporte aunque se establecieron TCP y TLS.",
          "reason": "El transporte funcionó para obtener una respuesta HTTP."
        }
      ],
      "explanation": "Fundamento: Fundamentos TCP/IP, DNS y correlación; RFC 9293 y 1034; NIST SP 800-92. El servicio respondió; el código orienta a autorización o política de acceso. Las alternativas restantes deben examinarse por sus errores específicos: DNS ya resolvió el nombre en el supuesto. El transporte funcionó para obtener una respuesta HTTP.",
      "difficulty": 5
    }
  ],
  "pgn-m82": [
    {
      "caseText": "Una cuenta con privilegios elevados presenta consultas atípicas de documentos sensibles. El sistema presta un servicio crítico y sus logs rotan en pocos días. El equipo puede revocar sesiones, preservar registros y limitar permisos sin apagar todo el aplicativo. Todavía no se determinó si la actividad corresponde al titular o a otra persona. El responsable solicita una respuesta inmediata dentro del procedimiento institucional.",
      "stem": "¿Qué respuesta inicial equilibra contención, continuidad, privacidad y conservación de evidencia?",
      "correct": {
        "text": "Validar alcance, preservar eventos y aplicar contención autorizada y proporcional sobre sesiones y permisos, con registro y coordinación de respuesta.",
        "reason": "La respuesta basada en riesgo permite contener sin destruir soportes ni exigir certeza de autoría."
      },
      "other": [
        {
          "text": "Formatear equipos y borrar registros antes de revisar alcance, para eliminar cualquier riesgo.",
          "reason": "Destruir registros limita investigación y puede afectar servicios."
        },
        {
          "text": "Esperar identificación definitiva del autor antes de adoptar toda medida de contención.",
          "reason": "El riesgo activo permite medidas proporcionadas mientras continúa análisis."
        }
      ],
      "explanation": "Fundamento: MSPI 2025; NIST CSF 2.0; SP 800-61 Rev. 3 (2025); Ley 1581/2012. La respuesta basada en riesgo permite contener sin destruir soportes ni exigir certeza de autoría. Las alternativas restantes deben examinarse por sus errores específicos: Destruir registros limita investigación y puede afectar servicios. El riesgo activo permite medidas proporcionadas mientras continúa análisis.",
      "difficulty": 4
    },
    {
      "caseText": "Un servicio tiene RPO objetivo de 15 minutos y RTO objetivo de dos horas. Tras una interrupción, se restaura en 90 minutos un respaldo que deja sin recuperar 45 minutos de transacciones. La jefatura afirma que se cumplieron ambos objetivos por estar el servicio disponible antes de dos horas. Los tiempos se midieron desde el mismo incidente y la pérdida fue confirmada mediante conciliación.",
      "stem": "¿Qué evaluación distingue el objetivo de recuperación temporal del objetivo de pérdida de datos?",
      "correct": {
        "text": "Se cumple RTO (90 minutos), pero no RPO (45 minutos perdidos supera 15); investigar y ajustar recuperación de datos.",
        "reason": "RTO mide recuperación del servicio y RPO pérdida tolerable de datos."
      },
      "other": [
        {
          "text": "Se cumplen ambos porque 90 minutos es inferior a dos horas.",
          "reason": "Cumplir un objetivo no implica cumplir el otro."
        },
        {
          "text": "Se incumplen ambos porque cualquier pérdida de datos impide cumplir RTO.",
          "reason": "La pérdida de datos no cambia por sí sola el tiempo real de recuperación."
        }
      ],
      "explanation": "Fundamento: MSPI 2025; NIST CSF 2.0; SP 800-61 Rev. 3 (2025); Ley 1581/2012. RTO mide recuperación del servicio y RPO pérdida tolerable de datos. Las alternativas restantes deben examinarse por sus errores específicos: Cumplir un objetivo no implica cumplir el otro. La pérdida de datos no cambia por sí sola el tiempo real de recuperación.",
      "difficulty": 5
    }
  ],
  "pgn-m83": [
    {
      "caseText": "Una aplicación en producción contiene una validación diferente de la que aparece en la rama principal. El último commit fue realizado por una persona que no tiene permisos de despliegue. La infraestructura conserva identificador de artefacto, registros del pipeline, aprobaciones y configuración de entorno. La jefatura pide atribuir al último desarrollador la modificación sin revisar qué versión se instaló efectivamente.",
      "stem": "¿Qué reconstrucción permite determinar el cambio desplegado y las autorizaciones sin atribución automática por commit?",
      "correct": {
        "text": "Correlacionar requisito, repositorio, revisión, artefacto, pipeline, configuración y aprobación efectiva; contrastar accesos y documentar límites.",
        "reason": "Repositorio, artefacto y configuración efectiva son fuentes distintas."
      },
      "other": [
        {
          "text": "Atribuir la modificación al autor del último commit porque es el cambio más reciente del repositorio.",
          "reason": "Autoría de commit no acredita despliegue ni autorización."
        },
        {
          "text": "Dar por correcto producción porque la rama principal tiene la validación esperada.",
          "reason": "La rama no garantiza identidad con producción."
        }
      ],
      "explanation": "Fundamento: MRAE v3; MSPI 2025; NIST SP 800-218 SSDF 1.1 (referencia técnica). Repositorio, artefacto y configuración efectiva son fuentes distintas. Las alternativas restantes deben examinarse por sus errores específicos: Autoría de commit no acredita despliegue ni autorización. La rama no garantiza identidad con producción.",
      "difficulty": 4
    },
    {
      "caseText": "Una modificación de la API supera sus pruebas unitarias, pero durante el piloto se descubre que cambia un campo que un sistema receptor necesita para registrar actuaciones. El contrato de interfaz y los criterios de aceptación están documentados. El equipo propone desplegar porque las pruebas de código son verdes y trasladar la revisión de compatibilidad a la siguiente versión, aunque la falla afecta un servicio institucional.",
      "stem": "¿Qué controles de prueba deben completarse antes de autorizar el despliegue del cambio incompatible?",
      "correct": {
        "text": "Revisar contrato de interfaz y pruebas de integración, aceptación y regresión pertinentes; corregir incompatibilidad y verificar resultados.",
        "reason": "Cada nivel de prueba cubre riesgos diferentes."
      },
      "other": [
        {
          "text": "Desplegar porque las pruebas unitarias garantizan compatibilidad con todos los sistemas.",
          "reason": "La unidad aislada no acredita interoperabilidad."
        },
        {
          "text": "Eliminar las pruebas de integración para evitar que fallen por dependencias externas.",
          "reason": "Eliminar pruebas no elimina el riesgo que detectan."
        }
      ],
      "explanation": "Fundamento: MRAE v3; MSPI 2025; NIST SP 800-218 SSDF 1.1 (referencia técnica). Cada nivel de prueba cubre riesgos diferentes. Las alternativas restantes deben examinarse por sus errores específicos: La unidad aislada no acredita interoperabilidad. Eliminar pruebas no elimina el riesgo que detectan.",
      "difficulty": 5
    }
  ],
  "pgn-m84": [
    {
      "caseText": "Una operación institucional debe registrar simultáneamente la creación de una actuación y la actualización del estado del expediente. La primera escritura se confirma, pero la segunda falla por una restricción y quedan datos inconsistentes. El diseño actual realiza dos transacciones independientes y no contempla compensación. El equipo necesita garantizar que el cambio de negocio se complete íntegramente o no quede aplicado parcialmente.",
      "stem": "¿Qué propiedad y mecanismo del diseño transaccional resuelven el riesgo de confirmación parcial descrito?",
      "correct": {
        "text": "Agrupar escrituras en una transacción atómica cuando comparten motor y límites adecuados, con rollback ante error y pruebas de invariantes.",
        "reason": "La atomicidad evita confirmar parcialmente una unidad transaccional."
      },
      "other": [
        {
          "text": "Usar únicamente claves foráneas porque toda FK garantiza que ambas operaciones se confirmen juntas.",
          "reason": "La integridad referencial no agrupa transacciones independientes."
        },
        {
          "text": "Crear un respaldo después de cada escritura y considerarlo sustituto de atomicidad.",
          "reason": "Respaldar no reemplaza el control de confirmación o reversión."
        }
      ],
      "explanation": "Fundamento: MRAE v3; MSPI 2025; Ley 1581/2012; fundamentos relacionales y ACID. La atomicidad evita confirmar parcialmente una unidad transaccional. Las alternativas restantes deben examinarse por sus errores específicos: La integridad referencial no agrupa transacciones independientes. Respaldar no reemplaza el control de confirmación o reversión.",
      "difficulty": 4
    },
    {
      "caseText": "Una base exige que cada actuación tenga una clave foránea hacia un expediente existente. Todos los registros pasan esa restricción, pero la revisión manual demuestra que una actuación fue asociada a un expediente incorrecto que también existe en la tabla. La oficina afirma que no puede haber error porque la integridad referencial está habilitada. Se conserva el documento original que identifica el expediente correcto.",
      "stem": "¿Qué distinción debe incluir el informe sobre integridad formal y exactitud del dato institucional?",
      "correct": {
        "text": "Reconocer que la FK garantiza una referencia válida, no la asociación correcta; contrastar fuente y corregir con autorización y trazabilidad.",
        "reason": "La integridad referencial verifica existencia de una referencia, no su veracidad semántica."
      },
      "other": [
        {
          "text": "Aceptar la asociación porque cualquier valor que satisface una FK representa la realidad.",
          "reason": "Una referencia existente puede ser incorrecta para el caso."
        },
        {
          "text": "Desactivar las restricciones y modificar registros sin conservar historial.",
          "reason": "Eliminar restricciones no resuelve exactitud y puede crear otros errores."
        }
      ],
      "explanation": "Fundamento: MRAE v3; MSPI 2025; Ley 1581/2012; fundamentos relacionales y ACID. La integridad referencial verifica existencia de una referencia, no su veracidad semántica. Las alternativas restantes deben examinarse por sus errores específicos: Una referencia existente puede ser incorrecta para el caso. Eliminar restricciones no resuelve exactitud y puede crear otros errores.",
      "difficulty": 5
    }
  ]
}
