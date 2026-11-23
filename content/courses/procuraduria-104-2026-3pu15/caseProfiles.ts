import type { ProcuraduriaModuleBlueprint } from './blueprints'

/**
 * Contextos de hechos para los escenarios de la convocatoria 104-2026.
 * Son casos de estudio ficticios, no sucesos reales ni afirmaciones de que
 * determinados hechos impliquen automáticamente responsabilidad disciplinaria.
 */
export type ProcuraduriaCaseProfile = {
  setting: string
  document: string
  conflict: string
  change: string
  pressure: string
}

const specific: Record<string, ProcuraduriaCaseProfile> = {
  'pgn-m6': {
    setting: 'Tras una auditoría a un contrato municipal de equipos escolares, un ciudadano presenta denuncias ante Contraloría, Procuraduría y Fiscalía por los mismos hechos aparentes.',
    document: 'La carpeta contiene un acta de supervisión, un informe de pagos, comprobantes de entrega y tres comunicaciones de entidades distintas que requieren aclarar los hechos y sus posibles efectos.',
    conflict: 'La entidad sostiene que, como la Fiscalía abrió un expediente, debe detenerse toda valoración fiscal o disciplinaria, mientras otra oficina propone que la Procuraduría resuelva directamente el eventual daño patrimonial.',
    change: 'Un nuevo certificado demuestra que parte del pago correspondía a bienes efectivamente entregados, pero persiste la controversia sobre el resto y sobre la conducta funcional de los servidores.',
    pressure: 'Se necesita contestar con rapidez sin confundir investigación penal, responsabilidad fiscal y evaluación disciplinaria ni decidir asuntos de otra autoridad.',
  },
  'pgn-m7': {
    setting: 'En una oficina regional, dos peticiones sobre el mismo servicio público ingresan por ventanilla y correo; una es de un conocido de la jefatura, y la otra describe una urgencia con soportes de atención diferencial.',
    document: 'La tabla de correspondencia conserva radicado, fecha y medio de recepción, pero se cambió manualmente la prioridad de la persona conocida sin registrar la motivación ni el criterio legal.',
    conflict: 'Un servidor defiende el cambio como una medida de celeridad y economía; otro pide publicar la lista completa de solicitantes, incluidos datos personales, para demostrar transparencia.',
    change: 'Al revisar la carpeta, aparece soporte verificable de una condición que podría activar atención prioritaria para la segunda persona, conforme a reglas aplicables al asunto.',
    pressure: 'La dirección necesita responder oportunamente, garantizar igualdad e imparcialidad y documentar las excepciones que realmente procedan.',
  },
  'pgn-m8': {
    setting: 'En un municipio se presenta una queja contra el supervisor de un contrato de mantenimiento vial porque una actividad se recibió varias semanas después de la fecha anunciada.',
    document: 'El expediente contiene manual de funciones, orden de designación, actas parciales, correspondencia al contratista y un reporte de pagos; todavía falta contrastar quién tenía a cargo cada actuación.',
    conflict: 'Un equipo propone declarar automáticamente responsable al supervisor por el retraso y acumular en una única conclusión una falta disciplinaria, un daño fiscal y un posible delito.',
    change: 'Se incorpora un informe que atribuye parte de la demora a un tercero y demuestra algunas gestiones preventivas del supervisor; no elimina otras posibles omisiones aún pendientes de verificación.',
    pressure: 'La oficina debe identificar deber funcional, conducta, competencia y fuentes antes de remitir hechos que puedan corresponder a otras autoridades.',
  },
  'pgn-m3': {
    setting: 'Una aspirante a la Convocatoria 104-2026 revisa un diagnóstico de cuarenta preguntas: obtuvo 17/20 en Constitución y 9/20 en derecho probatorio disciplinario.',
    document: 'Su cuaderno registra los ítems fallados, las respuestas elegidas y el soporte oficial de que conocimientos es eliminatoria con 65/100 y pesa 70 % del resultado de concurso para nivel profesional.',
    conflict: 'Un compañero dice que el promedio de aciertos permite dejar de estudiar, pues 65/100 equivale al peso del 70 % en la calificación final.',
    change: 'Una revisión de errores demuestra que la mayoría de fallos disciplinarios surgieron de confundir prueba, atribución de autoría y etapa de actuación.',
    pressure: 'La prueba se aproxima y la estudiante necesita reasignar sus sesiones sin abandonar las competencias que ya domina.',
  },
  'pgn-m4': {
    setting: 'Una oficina de apoyo de la Procuraduría recibe un reporte de cambio en un sistema institucional firmado con una cuenta compartida de servicio.',
    document: 'El reporte incluye bitácoras con zona horaria, un archivo exportado y una captura de pantalla; falta documentar la procedencia de la exportación y las condiciones de integridad.',
    conflict: 'Un superior propone identificar al usuario titular de la cuenta como autor de una conducta disciplinaria y firmar la conclusión en el informe técnico.',
    change: 'Aparece el registro de una tarea automática y dos accesos simultáneos que pueden explicar el evento, pero aún requieren comprobación.',
    pressure: 'La oficina solicita el informe de apoyo ese mismo día, conservando la posibilidad de verificar técnicamente la hipótesis y su incertidumbre.',
  },
  'pgn-m5': {
    setting: 'Una oficina tramita una actuación de interés público y ha reunido varias evidencias; el expediente involucra derechos de una persona que debe intervenir en la fase correspondiente.',
    document: 'El expediente incluye el acto de inicio, soportes documentales y un proyecto de comunicación exigida por el trámite que todavía no se ha emitido.',
    conflict: 'Para acelerar la gestión, la coordinación pide omitir la comunicación porque considera suficientemente demostrados los hechos y sostiene que el interés general basta.',
    change: 'El asesor jurídico recuerda que el artículo 29 extiende el debido proceso a actuaciones administrativas y que deben comprobarse competencia, fase y garantías antes de una decisión.',
    pressure: 'Existe urgencia de proteger el interés público, pero la autoridad necesita elegir una medida oportuna y jurídicamente viable.',
  },
  'pgn-m0': {
    setting: 'En una procuraduría territorial, un profesional recién vinculado recibe una queja ciudadana, un reporte de gestión y un oficio que solicita apoyo en la etapa de instrucción.',
    document: 'El expediente contiene una relación de funciones del 3PU-15, las actuaciones pendientes y un memorando que distingue actividades de apoyo profesional de las decisiones de la autoridad competente.',
    conflict: 'La coordinación pide al profesional redactar conclusiones jurídicas definitivas sin indicar si tiene una asignación válida para adoptarlas.',
    change: 'El despacho precisa que el apoyo solicitado es documental y de análisis de información; las decisiones disciplinarias quedan a cargo de la autoridad habilitada.',
    pressure: 'Hay que entregar un producto útil ese mismo día, pero rapidez y experiencia técnica no reemplazan las atribuciones del empleo.',
  },
  'pgn-m1': {
    setting: 'Un ciudadano presenta una solicitud de copias de actuaciones ante una oficina que también tramita comunicaciones y reportes de seguimiento institucional.',
    document: 'El expediente incluye un correo interno, una norma verdadera y una constancia de radicación; falta identificar cuál oficina puede resolver el componente solicitado.',
    conflict: 'El equipo confunde comunicar con notificar, y sostiene que conocer una norma basta para adoptar cualquier actuación relacionada con ella.',
    change: 'Se verifica que la competencia para decidir corresponde a otra dependencia, mientras esta oficina conserva documentos que sí puede gestionar dentro de sus funciones.',
    pressure: 'El ciudadano necesita respuesta, pero una actuación expedita no subsana por sí sola los requisitos de competencia y comunicación.',
  },
  'pgn-m2': {
    setting: 'En un simulacro del curso, una estudiante identifica correctamente que el artículo 208 menciona seis meses de indagación previa, pero aplica ese dato a toda queja disciplinaria.',
    document: 'La ficha de estudio reproduce el artículo 208 del Código General Disciplinario y su modificación; un caso dice que la identidad del posible autor es dudosa y otro presenta una persona claramente individualizada.',
    conflict: 'Un compañero propone marcar siempre la alternativa que mencione seis meses, sin comparar el supuesto de procedencia ni la excepción legal para violaciones a derechos humanos o al derecho internacional humanitario.',
    change: 'La estudiante comprueba en la fuente que la indagación previa se relaciona con la identificación del autor y que puede existir extensión especial del término en el supuesto legal previsto.',
    pressure: 'Quedan pocos minutos de simulacro; debe preferirse el razonamiento normativo al reconocimiento rápido de una cifra familiar.',
  },
  'pgn-m17': {
    setting: 'Una dependencia recibe una petición ciudadana que mezcla una consulta jurídica y una solicitud de copias de documentos.',
    document: 'El gestor documental conserva el sello de radicación y registra dos categorías de solicitudes en una misma comunicación.',
    conflict: 'La dependencia destinataria posee parte de la información, pero otra corresponde a una oficina diferente.',
    change: 'Antes de responder, el peticionario solicita conocer el fundamento de una eventual reserva de un anexo.',
    pressure: 'Se acerca el vencimiento del término aplicable y una respuesta uniforme para todo el escrito parece la opción más rápida.',
  },
  'pgn-m18': {
    setting: 'Una veeduría solicita informes de seguimiento de una contratación pública y un archivo contiene datos personales de terceros.',
    document: 'Existe una versión integral del informe y otra con campos susceptibles de ocultamiento, sin justificación de reserva incorporada todavía.',
    conflict: 'Una oficina propone negar el documento completo por contener información parcialmente protegida.',
    change: 'La veeduría precisa que solo necesita cifras y actuaciones de vigilancia, no identificadores privados.',
    pressure: 'La dirección exige responder de inmediato sin exponer información restringida ni desconocer el acceso a documentos públicos.',
  },
  'pgn-m24': {
    setting: 'Una oficina revisa posibles conductas disciplinarias ocurridas en varias fechas durante la ejecución de un contrato.',
    document: 'El expediente separa fecha del hecho, constancia de conocimiento institucional y actuaciones posteriores.',
    conflict: 'Un resumen confunde prescripción de la acción, caducidad de un trámite y término de una etapa.',
    change: 'Aparece un acto procesal fechado meses después y se solicita verificar si produce efectos sobre el cómputo.',
    pressure: 'Se pretende recomendar archivo o continuación basándose solo en la antigüedad del contrato.',
  },
  'pgn-m25': {
    setting: 'Llega una queja por el presunto cambio irregular de un registro institucional desde un equipo compartido.',
    document: 'El reporte inicial contiene capturas y una referencia a un usuario del sistema, pero no individualiza a quien realizó la operación.',
    conflict: 'El área operativa identifica un hecho aparente, mientras la fuente técnica advierte que la cuenta era compartida.',
    change: 'Una copia de seguridad ubica la alteración en una franja horaria distinta de la denunciada.',
    pressure: 'El solicitante exige que se formulen cargos de inmediato contra quien administra la plataforma.',
  },
  'pgn-m26': {
    setting: 'Una noticia disciplinaria describe un hecho relevante sin identificar a su posible autor.',
    document: 'Se conservan actas de turno, acceso a sistemas y comunicaciones que permiten adelantar diligencias delimitadas.',
    conflict: 'Un despacho plantea iniciar investigación contra todas las personas de la dependencia sin distinción.',
    change: 'Después aparece un registro de asignación que podría permitir individualizar a una persona, pero requiere verificación.',
    pressure: 'El equipo considera usar la indagación previa como trámite automático incluso cuando no exista duda sobre la autoría.',
  },
  'pgn-m27': {
    setting: 'Se identifica a una posible persona involucrada en una conducta disciplinariamente relevante, pero el alcance del hecho continúa abierto.',
    document: 'El informe preliminar incluye tres episodios diferentes y un documento que solo relaciona dos de ellos.',
    conflict: 'La propuesta de apertura combina hechos indeterminados con una calificación jurídica definitiva.',
    change: 'Una declaración sitúa a otro servidor en la operación del tercer episodio.',
    pressure: 'Se pide acelerar la investigación sacrificando la delimitación de hechos y las garantías de vinculación.',
  },
  'pgn-m29': {
    setting: 'En un expediente de instrucción se encuentran incorporadas las pruebas decretadas y se revisa la culminación de esa fase.',
    document: 'La hoja de seguimiento muestra las pruebas ejecutadas, los requerimientos pendientes y constancias de traslado.',
    conflict: 'Una persona propone formular cargos sin revisar el cierre y los alegatos precalificatorios.',
    change: 'Se descubre que un oficio señalado como pendiente ya fue recibido y quedó sin asociar al expediente.',
    pressure: 'La agenda del despacho contempla enviar el expediente al siguiente equipo ese mismo día.',
  },
  'pgn-m30': {
    setting: 'Una autoridad instructora debe evaluar un expediente que contiene pruebas incriminatorias y descargos documentados.',
    document: 'El proyecto de evaluación cita exclusivamente los elementos de cargo y omite un documento aportado por la defensa.',
    conflict: 'La jefatura entiende que redactar un pliego de cargos equivale a haber demostrado responsabilidad.',
    change: 'Antes de decidir se aporta un dictamen que permite precisar el alcance de un hecho, sin resolver por sí solo la culpabilidad.',
    pressure: 'Se reclama una respuesta rápida para informar a la entidad afectada de una supuesta sanción.',
  },
  'pgn-m32': {
    setting: 'Un expediente presenta una irregularidad de comunicación en una fase anterior del procedimiento.',
    document: 'Constan varios intentos de notificación y una actuación posterior en la que la persona afectada sí intervino.',
    conflict: 'Se sostiene que cualquier defecto formal anula automáticamente todo el proceso y todas las pruebas.',
    change: 'La defensa identifica cuál oportunidad concreta habría dejado de ejercer por el defecto alegado.',
    pressure: 'Se debe decidir el alcance del posible saneamiento y de las actuaciones que aún conservan validez.',
  },
  'pgn-m33': {
    setting: 'Una procuraduría solicita a otra dependencia practicar una diligencia fuera de su sede habitual.',
    document: 'El despacho comisorio delimita una diligencia específica, plazo y forma de remitir las constancias.',
    conflict: 'La dependencia comisionada pretende pronunciarse también sobre el mérito jurídico del proceso principal.',
    change: 'Durante la diligencia surge un documento inesperado que podría justificar una nueva actuación autorizada.',
    pressure: 'Se pide cerrar la comisión sin levantar constancias verificables de lo que realmente se practicó.',
  },
  'pgn-m35': {
    setting: 'En un proceso disciplinario, la versión inicial del denunciante se contradice parcialmente con un registro administrativo.',
    document: 'El informe de investigación solo ha examinado pruebas que sostienen la hipótesis de cargo.',
    conflict: 'Se propone exigir al investigado que demuestre que la denuncia es falsa para continuar la actuación.',
    change: 'Una nueva prueba objetiva introduce hechos favorables al disciplinable que no habían sido analizados.',
    pressure: 'Se solicita cerrar el expediente con una inferencia fuerte, pero sin explicar el tratamiento de las pruebas divergentes.',
  },
  'pgn-m37': {
    setting: 'Una actuación incorpora una grabación y un documento digital que podrían acreditar un hecho discutido.',
    document: 'No está claro el origen de la grabación ni la oportunidad de contradicción de una de las partes.',
    conflict: 'Una persona sostiene que la utilidad del contenido hace irrelevante el modo de obtención.',
    change: 'Se localiza una copia original junto con la trazabilidad de entrega, pero todavía debe revisarse la garantía procesal.',
    pressure: 'El equipo pretende valorar de inmediato el material como prueba concluyente.',
  },
  'pgn-m39': {
    setting: 'Una autoridad revisa correos, registros de acceso y testimonios acerca de una decisión administrativa.',
    document: 'Cada medio acredita fragmentos diferentes del evento y sus fechas no encajan de forma perfecta.',
    conflict: 'Se pretende escoger la evidencia que resulte más clara y descartar sin motivación las fuentes disonantes.',
    change: 'La revisión de la zona horaria explica parte de la diferencia cronológica entre dos sistemas.',
    pressure: 'Se debe dejar por escrito una valoración conjunta comprensible y verificable.',
  },
  'pgn-m40': {
    setting: 'Un expediente reúne documentos originales en papel, PDF enviados por correo y reproducciones en un gestor institucional.',
    document: 'Dos versiones del documento tienen firmas y fechas diferentes; no existe aún una línea de procedencia reconstruida.',
    conflict: 'Una oficina considera que el archivo más reciente sustituye automáticamente a los anteriores.',
    change: 'Aparece un registro de radicación que permite comparar autor, fecha y contexto de recepción.',
    pressure: 'Debe prepararse un informe sin atribuir autoría o alteración con base únicamente en la apariencia del PDF.',
  },
  'pgn-m42': {
    setting: 'El instructor solicita apoyo técnico para interpretar una alteración de la base de datos de un expediente.',
    document: 'El perito describe un mecanismo técnicamente posible y los límites de los registros que tuvo disponibles.',
    conflict: 'Se pretende convertir directamente la opinión técnica en una declaración de responsabilidad disciplinaria.',
    change: 'Una prueba posterior muestra que la configuración del sistema permitía otra explicación compatible con los datos.',
    pressure: 'Se pide completar el informe sin dejar constancia de las hipótesis alternativas.',
  },
  'pgn-m44': {
    setting: 'Un computador usado para tramitar expedientes presenta fallas y debe reemplazarse antes de que se pierdan registros temporales.',
    document: 'El técnico dispone de una imagen de trabajo, pero no ha documentado el equipo fuente, las fechas ni quién intervino.',
    conflict: 'Se propone compartir por correo el único archivo extraído para facilitar el análisis.',
    change: 'Una copia de seguridad confirma parte del contenido aunque procede de un momento distinto.',
    pressure: 'La operación institucional exige recuperar el servicio sin destruir evidencia potencialmente relevante.',
  },
  'pgn-m45': {
    setting: 'Una entidad territorial muestra indicadores de retraso reiterado en un servicio esencial.',
    document: 'Existe un mapa preliminar de riesgos y un informe preventivo con acciones recomendadas sin decisión sancionatoria.',
    conflict: 'Una dependencia solicita a la Procuraduría asumir directamente la gestión operativa del servicio.',
    change: 'La entidad vigilada presenta un plan correctivo con metas, responsables e indicadores verificables.',
    pressure: 'Se exige una respuesta que produzca seguimiento sin sustituir la competencia de la administración.',
  },
  'pgn-m49': {
    setting: 'Una persona con discapacidad presenta una queja y solicita información de un trámite institucional.',
    document: 'El expediente contiene formatos únicamente en imagen y comunicaciones que no permiten verificar accesibilidad.',
    conflict: 'Se plantea exigirle una comparecencia presencial como único medio válido de atención.',
    change: 'La persona solicita un canal accesible y acompañamiento para conocer el estado de su trámite.',
    pressure: 'El equipo debe responder sin asumir que la condición personal modifica los requisitos legales de fondo.',
  },
  'pgn-m50': {
    setting: 'Una entidad planea contratar el mantenimiento de equipos destinados a prestar un servicio público.',
    document: 'La propuesta contiene una necesidad real, pero todavía carece de soportes completos de planeación.',
    conflict: 'Se pretende iniciar ejecución porque el proveedor ya se encuentra disponible en el municipio.',
    change: 'Aparece una alternativa de adquisición con obligaciones distintas que requiere comparación objetiva.',
    pressure: 'El área usuaria solicita omitir trámites para evitar interrupciones del servicio.',
  },
  'pgn-m51': {
    setting: 'En una selección contractual se observan requisitos técnicos que coinciden de manera muy estrecha con una oferta particular.',
    document: 'El expediente contiene estudios previos, respuestas a observaciones y una justificación incompleta de la restricción.',
    conflict: 'Una oficina argumenta que el precio más bajo hace innecesario revisar la proporcionalidad de los requisitos.',
    change: 'Un proveedor demuestra documentalmente que existe una alternativa funcionalmente equivalente.',
    pressure: 'Se busca publicar las condiciones definitivas sin examinar el impacto sobre la pluralidad de oferentes.',
  },
  'pgn-m52': {
    setting: 'Una alcaldía contrató el uso temporal de maquinaria de un proveedor externo para intervenir una vía. Durante la permanencia de una excavadora que había ingresado temporalmente al país se produce un incendio y el equipo queda fuera de servicio.',
    document: 'El expediente contiene contrato, póliza, actas de recibo, registros de mantenimiento, fotografías, informe inicial de la emergencia y documentos sobre la situación del bien. Ninguno de esos soportes identifica todavía una causa definitiva.',
    conflict: 'Se pretende atribuir automáticamente responsabilidad disciplinaria al supervisor e imponerle además las obligaciones aduaneras del titular de la operación, sin separar los regímenes ni las competencias.',
    change: 'Un dictamen técnico posterior señala varias causas posibles y un acta de entrega registra una falla anterior, aunque la causalidad y el cumplimiento de cada obligación siguen discutidos.',
    pressure: 'La entidad solicita liquidar y pagar de inmediato, mientras el proveedor pide que se declare que el incendio lo exime de toda obligación. La actuación exige distinguir supervisión, cumplimiento contractual, prueba y autoridad competente.',
  },
  'pgn-m53': {
    setting: 'Un integrante del equipo evaluador mantiene un vínculo personal relevante con uno de los proponentes.',
    document: 'El expediente registra declaraciones de ausencia de conflicto y correos de coordinación anteriores.',
    conflict: 'Se sugiere que basta con que el servidor declare que podrá ser objetivo para continuar interviniendo.',
    change: 'Antes de adjudicar aparecen comunicaciones que permiten delimitar el vínculo y su posible impacto.',
    pressure: 'La selección debe continuar sin sacrificar competencia, transparencia ni reglas sobre impedimentos.',
  },
  'pgn-m54': {
    setting: 'Una auditoría identifica pagos, informes y actas contractuales con coincidencias sospechosas.',
    document: 'Hay alertas de riesgo, pero todavía no existe constatación suficiente de autoría ni de la naturaleza del eventual incumplimiento.',
    conflict: 'Se propone anunciar corrupción probada únicamente por la coincidencia estadística.',
    change: 'Una verificación de soportes explica algunos registros y deja pendientes otros de relevancia material.',
    pressure: 'La entidad exige una comunicación pública inmediata sobre los hallazgos.',
  },
  'pgn-m60': {
    setting: 'La entidad descubre que un reporte de gestión registra resultados distintos según el sistema consultado.',
    document: 'Se detectan distintas fechas de corte, transformaciones de datos y permisos de edición.',
    conflict: 'Un equipo considera que la cifra del tablero más reciente debe imponerse sin conciliación.',
    change: 'Se identifica un proceso nocturno de sincronización que no había concluido para una fuente.',
    pressure: 'La jefatura solicita presentar resultados definitivos antes de verificar el origen de la discrepancia.',
  },
  'pgn-m61': {
    setting: 'Se investiga un cambio no autorizado usando registros de autenticación, accesos remotos y dirección IP.',
    document: 'Los logs identifican cuentas y sesiones, pero se ha utilizado NAT y existen credenciales compartidas.',
    conflict: 'Se propone atribuir la acción a una persona por la sola coincidencia de la dirección IP.',
    change: 'Aparecen registros de segundo factor y horarios de sesión que requieren correlación.',
    pressure: 'La dependencia solicita un nombre de responsable sin agotar las hipótesis técnicas.',
  },
  'pgn-m62': {
    setting: 'Una base de datos contiene un cambio de estado que no coincide con el soporte firmado en el expediente.',
    document: 'Existen tablas principales, un log de auditoría, procesos de integración y una réplica retrasada.',
    conflict: 'El equipo decide interpretar el valor más reciente como una modificación manual intencional.',
    change: 'La revisión encuentra un proceso automatizado que pudo producir parte de los cambios.',
    pressure: 'Se requiere un informe reproducible que diferencie dato, interpretación y autoría.',
  },
  'pgn-m63': {
    setting: 'Un correo institucional adjunta un archivo con una fecha que no coincide con el registro del sistema de gestión.',
    document: 'Se cuenta con encabezados parciales, metadatos de archivo y dos copias de contenido aparentemente similar.',
    conflict: 'Se interpreta la igualdad de hashes de dos copias como prueba de quién creó o envió originalmente el documento.',
    change: 'Una exportación con más encabezados permite ubicar el trayecto del mensaje, pero no su autor humano por sí sola.',
    pressure: 'Se solicita emitir un concepto de autenticidad sin explicar limitaciones del material.',
  },
  'pgn-m64': {
    setting: 'Un ingeniero presenta un informe técnico sobre un incidente que afectó la integridad de expedientes.',
    document: 'Se documentaron herramientas, muestras y hallazgos, pero no se describieron las limitaciones de adquisición.',
    conflict: 'La versión preliminar mezcla resultados verificables con una valoración jurídica fuera del campo técnico.',
    change: 'La revisión metodológica revela una hipótesis alternativa sobre los registros observados.',
    pressure: 'La autoridad pide recomendaciones específicas sin que el informe suplante su decisión disciplinaria.',
  },
  'pgn-m66': {
    setting: 'Una hoja de cálculo se utiliza para evaluar cumplimiento y contiene fechas, registros duplicados y fórmulas de agregación.',
    document: 'Un total del tablero no coincide con las filas visibles porque existen filtros y referencias relativas desplazadas.',
    conflict: 'Se propone reemplazar manualmente el resultado para que coincida con el informe anterior.',
    change: 'Una auditoría de fórmulas identifica celdas ocultas y un rango que omitía registros recientes.',
    pressure: 'Se requiere comunicar un resultado confiable y reproducible antes de consolidar el informe.',
  },
  'pgn-m67': {
    setting: 'Se presenta una asociación estadística entre retrasos de contratación y quejas ciudadanas.',
    document: 'La muestra incluye meses con diferente cobertura de reportes y registros faltantes.',
    conflict: 'Un informe confunde correlación con causalidad y presenta el hallazgo como culpa probada.',
    change: 'Al separar regiones, la relación agregada se debilita y aparecen posibles variables de confusión.',
    pressure: 'La dirección espera una conclusión clara que no exceda los datos disponibles.',
  },
  'pgn-m82': {
    setting: 'Una entidad detecta accesos anómalos a documentos y una posible exposición de datos personales.',
    document: 'Los controles de seguridad registran eventos de acceso, alertas y cambios recientes de permisos.',
    conflict: 'Se propone desactivar toda la plataforma sin medir efectos sobre disponibilidad ni preservar registros.',
    change: 'Se confirma que una cuenta legítima operó desde una ubicación inusual, sin que ello pruebe por sí solo abuso.',
    pressure: 'Se necesita contener riesgos y garantizar continuidad mediante decisiones proporcionadas y trazables.',
  },
  'pgn-m84': {
    setting: 'Dos áreas institucionales utilizan definiciones distintas para el mismo indicador de calidad de datos.',
    document: 'Las tablas contienen identificadores válidos, pero se observan discrepancias de significado y actualización.',
    conflict: 'Se considera que cumplir restricciones de base de datos demuestra automáticamente exactitud de la información.',
    change: 'Se descubre un dato maestro mantenido por una dependencia distinta de la que genera el informe.',
    pressure: 'Se requiere reconciliar definiciones, responsables y controles antes de tomar decisiones operativas.',
  },
}

function thematicProfile(blueprint: ProcuraduriaModuleBlueprint): ProcuraduriaCaseProfile {
  const n = blueprint.order
  if (n <= 14) return {
    setting: 'Una dependencia pública solicita un concepto interno para orientar una actuación dentro de sus funciones.',
    document: 'El expediente contiene un organigrama, un manual de funciones y una comunicación de asignación que deben interpretarse de manera conjunta.',
    conflict: 'Un superior propone fundar la actuación únicamente en la costumbre administrativa sin verificar competencia.',
    change: 'Llega una instrucción complementaria que delimita qué servidor actúa y bajo qué responsabilidad.',
    pressure: 'Se exige responder rápidamente sin confundir organización institucional, competencia y buenas prácticas.',
  }
  if (n <= 34) return {
    setting: 'Un despacho de instrucción recibe una actuación con hechos que requieren calificación y trámite.',
    document: 'Se encuentran queja, radicado, actas y soportes en distintos momentos de la actuación.',
    conflict: 'Dos funcionarios discrepan acerca de la etapa procesal y de las facultades disponibles.',
    change: 'Una nueva constancia obliga a revisar el orden y el alcance de las decisiones anteriores.',
    pressure: 'Se pide cerrar el asunto sin explicar completamente competencia, etapa y garantías.',
  }
  if (n <= 44) return {
    setting: 'Se analiza un expediente disciplinario respaldado por declaraciones, documentos y registros técnicos.',
    document: 'Los medios de prueba difieren en fecha, origen y alcance, y no se ha reconstruido su relación.',
    conflict: 'Una fuente parece suficiente a primera vista, pero otra evidencia exige contrastar su confiabilidad.',
    change: 'Se incorpora un elemento adicional que permite revisar las hipótesis sin borrar lo actuado.',
    pressure: 'Se pretende emitir una conclusión inmediata antes de documentar la valoración conjunta.',
  }
  if (n <= 49) return {
    setting: 'Una procuraduría adelanta seguimiento preventivo a un riesgo en la prestación de un servicio público.',
    document: 'Hay reportes ciudadanos, indicadores institucionales y planes de mejora con responsables diferentes.',
    conflict: 'Se busca que la Procuraduría asuma directamente decisiones que corresponden a la entidad vigilada.',
    change: 'Un nuevo indicador obliga a revisar la priorización de riesgos y el seguimiento.',
    pressure: 'La situación requiere una respuesta oportuna sin sustituir a la administración vigilada.',
  }
  if (n <= 59) return {
    setting: 'Una entidad territorial enfrenta observaciones sobre gestión contractual, documental o administrativa.',
    document: 'Los estudios, actas, comunicaciones y reportes presentan diferencias que deben ser conciliadas.',
    conflict: 'Una recomendación omite verificar competencia o la información disponible para decidir.',
    change: 'Surge un soporte adicional que modifica parcialmente la valoración del proceso.',
    pressure: 'Existe urgencia operativa, pero no se ha demostrado que autorice omitir controles aplicables.',
  }
  if (n <= 69 || n >= 80) return {
    setting: 'Un equipo técnico apoya una actuación institucional que depende de información contenida en varios sistemas.',
    document: 'Los registros técnicos, respaldos, procesos de integración y archivos presentan trazabilidad incompleta.',
    conflict: 'Se pretende derivar responsabilidad humana de un dato técnico aislado sin verificar sus límites.',
    change: 'Una revisión de versiones y origen de datos ofrece una explicación alternativa.',
    pressure: 'La jefatura solicita una conclusión rápida, precisa y sustentada en evidencias reproducibles.',
  }
  return {
    setting: 'Una oficina distribuye tareas urgentes entre varios servidores con responsabilidades concurrentes.',
    document: 'Existen metas, lineamientos de calidad, prioridades de servicio y un registro de compromisos del equipo.',
    conflict: 'Dos alternativas parecen orientadas a resultados, pero difieren en controles y colaboración.',
    change: 'Aparece una restricción imprevista que obliga a reorganizar el trabajo y comunicar riesgos.',
    pressure: 'Se espera actuar con responsabilidad sin sacrificar los parámetros institucionales.',
  }
}

export function caseProfileFor(blueprint: ProcuraduriaModuleBlueprint): ProcuraduriaCaseProfile {
  const manual = specific[blueprint.id]
  if (manual) return manual

  // Los demás módulos también necesitan hechos propios: no reutilizar
  // literalmente el mismo expediente temático en varias unidades.
  const theme = thematicProfile(blueprint)
  return {
    setting: theme.setting + ' El asunto específico es: ' + blueprint.description,
    document: theme.document + ' El plan del equipo registra este movimiento: ' + (blueprint.steps[1] ?? blueprint.steps[0] ?? 'verificar el soporte'),
    conflict: theme.conflict + ' La discrepancia afecta el análisis de ' + blueprint.title.toLowerCase() + '.',
    change: theme.change + ' Además se recibe una propuesta discutible: ' + (blueprint.distractors[0] ?? 'anticipar la conclusión'),
    pressure: theme.pressure,
  }
}
