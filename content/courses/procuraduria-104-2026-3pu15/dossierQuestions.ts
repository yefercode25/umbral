import type { Question, QuestionOption } from '../../../src/types/course'
import { procuraduriaModuleBlueprints } from './blueprints'

type DossierItem = { stem: string; best: string; foilA: string; foilB: string; whyA: string; whyB: string; reason: string; extra: string }
type Dossier = { id: string; scenario: string; modules: [string,string,string,string]; sourceIds: string[]; items: [DossierItem,DossierItem,DossierItem,DossierItem] }

/**
 * Expedientes complejos redactados para transferir conocimiento común del empleo.
 * Combina actuación administrativa, documentación, ofimática, prueba, gestión y
 * juicio profesional. No son preguntas ni ejes oficiales del operador.
 */
const dossiers: Dossier[] = [
  {
    "id": "peticion-mixta",
    "scenario": "Una procuraduría regional recibió un mismo radicado que contiene solicitud de copias de actas preventivas, consulta sobre el alcance de un procedimiento y una queja por falta de respuesta de otra entidad. Parte del archivo contiene datos de una denunciante y se encuentra en una dependencia diferente. El aplicativo registra un solo número de radicación y la coordinación quiere usar un plazo único para contestar todo.",
    "modules": [
      "pgn-m17",
      "pgn-m18",
      "pgn-m59",
      "pgn-m65"
    ],
    "sourceIds": [
      "ley-1755-2015",
      "ley-1712-2014",
      "ley-1581-2012"
    ],
    "items": [
      {
        "stem": "¿Qué debe revisar la dependencia antes de definir la secuencia y oportunidad de las respuestas?",
        "best": "Separar las pretensiones por naturaleza, determinar competencia y términos para cada una, y establecer qué documentos públicos pueden entregarse con protección de datos.",
        "foilA": "Tramitar el escrito íntegramente como consulta, porque una sola radicación exige una sola respuesta y un solo vencimiento.",
        "foilB": "Trasladar toda la petición a la otra dependencia, aunque varios documentos solicitados estén bajo custodia propia.",
        "whyA": "Una consulta no absorbe automáticamente las solicitudes documentales o las quejas, que pueden tener régimen y términos diferentes.",
        "whyB": "El traslado solo puede comprender lo ajeno a la competencia; no exime de responder lo que sí corresponde.",
        "reason": "La clasificación por objeto, competencia y acceso parcial evita una respuesta incongruente y conserva trazabilidad.",
        "extra": ""
      },
      {
        "stem": "Una veeduría solicita la versión completa de las actas. ¿Cómo debe procederse con los datos de la denunciante?",
        "best": "Examinar qué datos están legalmente protegidos y ofrecer, cuando proceda, versión pública o entrega parcial motivando las restricciones.",
        "foilA": "Negar todas las actas porque un solo dato sensible convierte el expediente entero en reservado.",
        "foilB": "Publicar los datos de la denunciante por tratarse de documentos producidos en una actuación institucional.",
        "whyA": "La restricción legal a un dato no implica necesariamente una prohibición de acceso al resto de información.",
        "whyB": "La publicidad de las actuaciones públicas no anula los derechos de habeas data ni la protección legal pertinente.",
        "reason": "La entidad debe distinguir información pública de campos restringidos y justificar el alcance.",
        "extra": ""
      },
      {
        "stem": "El sistema de correspondencia muestra el radicado como «respondido», pero el correo de salida no tiene acuse ni evidencia de envío. ¿Qué valida el cierre?",
        "best": "Comprobar respuesta de fondo y remisión eficaz, conservar constancias y corregir el estado prematuro del sistema.",
        "foilA": "Cerrar el radicado con base en el estado interno, porque ese registro presume respuesta material y comunicación efectiva.",
        "foilB": "Reenviar el oficio y descartar los soportes de la primera transmisión, de modo que solo quede registrada la fecha del nuevo envío.",
        "whyA": "El estado administrativo de una casilla no prueba por sí solo el cumplimiento de una comunicación.",
        "whyB": "Eliminar la evidencia anterior impediría reconstruir qué se intentó y cuándo se completó la comunicación.",
        "reason": "Respuesta, comunicación y trazabilidad deben verificarse independientemente.",
        "extra": ""
      },
      {
        "stem": "El proyecto de respuesta en Word contiene comentarios internos y cambios sin aceptar. ¿Qué control es más pertinente antes de su emisión?",
        "best": "Revisar la versión autorizada, resolver cambios y comentarios, confirmar anexos y datos personales, y conservar una copia trazable de lo realmente enviado.",
        "foilA": "Convertir el documento a PDF y enviarlo, pues cualquier conversión elimina necesariamente comentarios y datos ocultos.",
        "foilB": "Aceptar automáticamente todas las sugerencias y eliminar el historial del expediente para entregar una versión limpia.",
        "whyA": "Una conversión de formato no reemplaza comprobar metadatos, contenido y versión final.",
        "whyB": "Aceptar todo sin revisión puede alterar el sentido jurídico; la conservación del expediente tiene reglas propias.",
        "reason": "La herramienta de edición ayuda, pero el control de calidad, integridad y archivo es responsabilidad del proceso.",
        "extra": ""
      }
    ]
  },
  {
    "id": "alteracion-log",
    "scenario": "Un sistema de seguimiento de expedientes registra un cambio de estado a las 23:47 mediante una cuenta de servicio compartida por procesos automáticos. La sede utiliza NAT y existen accesos VPN; un jefe señala al administrador de red como responsable porque gestiona el servidor. El registro de la aplicación está próximo a rotar y un respaldo del día anterior conserva el valor previo.",
    "modules": [
      "pgn-m25",
      "pgn-m26",
      "pgn-m44",
      "pgn-m61"
    ],
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-pruebas",
      "mintic-mspi-2025"
    ],
    "items": [
      {
        "stem": "¿Cuál es la reacción inicial más adecuada ante el hecho reportado?",
        "best": "Asegurar los registros y el estado actual, delimitar qué cambió y cuándo, identificar competencias y separar la anomalía técnica de la posible responsabilidad disciplinaria.",
        "foilA": "Iniciar cargos contra el administrador por tener privilegios y luego solicitar los registros para completar la atribución.",
        "foilB": "Restaurar el dato de inmediato y cerrar el informe porque la continuidad del servicio constituye reparación suficiente.",
        "whyA": "La administración del sistema acredita capacidades, no la ejecución material de una modificación.",
        "whyB": "La corrección funcional no reemplaza la preservación ni el análisis de posibles deberes incumplidos.",
        "reason": "Preservar información y delimitar hechos evita conclusiones personales automáticas.",
        "extra": ""
      },
      {
        "stem": "La persona que hizo el cambio continúa sin identificarse. ¿Qué regla procesal debe considerarse?",
        "best": "Examinar duda sobre individualización del posible autor y aplicar la actuación legal procedente, sin atribución colectiva.",
        "foilA": "Abrir investigación contra todos los integrantes del equipo y determinar después quién operó materialmente la cuenta compartida.",
        "foilB": "Descartar el inicio de cualquier actuación hasta recibir una noticia que individualice plenamente a quien realizó el cambio.",
        "whyA": "Pertenencia funcional no acredita participación individual y puede afectar garantías del trámite.",
        "whyB": "La dificultad de identificación no imposibilita sin más las diligencias legalmente previstas.",
        "reason": "El Código General Disciplinario permite diferenciar noticia, identificación de autor e inicio de investigación.",
        "extra": ""
      },
      {
        "stem": "El técnico propone copiar solo las filas visibles de Excel con los registros. ¿Cuál adquisición es más confiable?",
        "best": "Preservar la fuente o extracción verificable con rango temporal, zona horaria, metodología, custodia y controles de integridad antes de analizar copias.",
        "foilA": "Copiar solo las filas filtradas en un libro nuevo, calcular el hash y considerar demostrado que el archivo conserva íntegra la fuente.",
        "foilB": "Esperar la identificación del sospechoso para obtener los registros, porque antes carecen de utilidad probatoria.",
        "whyA": "El hash de una copia no documenta automáticamente el origen, los filtros ni el procedimiento empleado.",
        "whyB": "Los registros pueden rotarse o sobrescribirse antes de identificar al actor, por lo que su preservación es oportuna.",
        "reason": "Una adquisición íntegra y reproducible distingue archivo de análisis y evidencia fuente.",
        "extra": ""
      },
      {
        "stem": "El reporte identifica una IP, pero no una identidad individual. ¿Qué conclusión se puede comunicar?",
        "best": "La IP delimita infraestructura y periodo; para atribución personal deben correlacionarse NAT, VPN, autenticaciones, equipos y otras fuentes.",
        "foilA": "La persona que figura como titular del contrato de internet es responsable del evento detectado.",
        "foilB": "La IP carece de cualquier valor porque hay NAT y debe excluirse totalmente del análisis.",
        "whyA": "Titularidad de servicio no equivale a ejecución de una operación en una sesión concreta.",
        "whyB": "Una señal de red puede ser pertinente aunque por sí sola sea insuficiente para una atribución.",
        "reason": "Informar límites técnicos de la evidencia evita que una correlación se convierta en culpabilidad inferida.",
        "extra": ""
      }
    ]
  },
  {
    "id": "maquinaria-siniestro",
    "scenario": "Una alcaldía celebró un contrato por uso temporal de maquinaria para atender un deslizamiento. Una excavadora introducida temporalmente al país por un proveedor se incendia después de una intervención vial. Las actas, la póliza, el informe de bomberos y los mantenimientos no coinciden completamente; el supervisor desea certificar cumplimiento total, mientras el contratista solicita liberar toda obligación por «fuerza mayor». No hay informe definitivo de causalidad.",
    "modules": [
      "pgn-m50",
      "pgn-m51",
      "pgn-m52",
      "pgn-m53"
    ],
    "sourceIds": [
      "ley-80-1993",
      "ley-1150-2007",
      "decreto-1082-2015",
      "ley-1952-2019"
    ],
    "items": [
      {
        "stem": "Antes de responder solicitudes de pago, ¿qué revisión permite una decisión verificable?",
        "best": "Contrastar obligaciones, actas de ejecución, riesgos contractuales, cobertura de póliza y evidencias técnicas, distinguiendo lo cumplido de lo pendiente.",
        "foilA": "Certificar la totalidad por la sola ocurrencia del incendio y resolver después cualquier discusión con la aseguradora.",
        "foilB": "Suspender indefinidamente todo pago sin examinar entregables que ya están soportados.",
        "whyA": "Un siniestro no demuestra automáticamente cumplimiento ni exonera obligaciones.",
        "whyB": "La incertidumbre sobre un componente no impide valorar separadamente prestaciones comprobables.",
        "reason": "La supervisión debe evaluar prestaciones, soportes y límites de competencia sin inferir causalidad.",
        "extra": ""
      },
      {
        "stem": "La interventoría propone añadir una marca obligatoria de repuesto en futuras compras porque ese proveedor la ofreció. ¿Qué criterio debe gobernar el estudio previo?",
        "best": "Justificar especificaciones funcionales y proporcionales a la necesidad, documentando equivalencias y razones objetivas de cualquier restricción.",
        "foilA": "Incluir la marca por conocimiento del proveedor, ya que la experiencia elimina la necesidad de motivar la exclusión.",
        "foilB": "Eliminar todas las especificaciones técnicas, pues la libre concurrencia exige aceptar cualquier solución disponible.",
        "whyA": "Una preferencia no sustituye la motivación objetiva de requisitos.",
        "whyB": "La apertura no impide requerimientos esenciales; exige que respondan a necesidades verificables.",
        "reason": "La planeación y selección objetiva exigen relación demostrable entre requisito y objeto.",
        "extra": ""
      },
      {
        "stem": "La causa de la combustión está controvertida. ¿Cuál actuación corresponde al supervisor?",
        "best": "Documentar hallazgos y obligaciones propias, solicitar valoración técnica y remitir las cuestiones de otros regímenes a quien tenga competencia, sin declarar automáticamente falta disciplinaria.",
        "foilA": "Declarar infracción aduanera y falta disciplinaria en el acta de supervisión porque la máquina ingresó temporalmente al país.",
        "foilB": "Exonerar de toda responsabilidad al contratista porque el siniestro fue inesperado.",
        "whyA": "El régimen aduanero y el disciplinario requieren autoridades y presupuestos diferentes.",
        "whyB": "La imprevisibilidad alegada debe examinarse con prueba, distribución contractual de riesgo y competencia.",
        "reason": "La destrucción de un equipo no establece por sí sola la causa ni el responsable.",
        "extra": ""
      },
      {
        "stem": "El jefe intervino en la evaluación del proponente y tiene una relación personal no informada con uno de los oferentes. ¿Qué debe hacerse?",
        "best": "Identificar la relación, contrastarla con las reglas de impedimentos y conflictos aplicables, documentar la situación y tramitarla por la vía competente.",
        "foilA": "Admitir su participación mientras no exista una condena previa, pues solo los delitos comprobados afectan la selección.",
        "foilB": "Excluir por decisión informal al proveedor sin analizar las condiciones reales de participación y la norma aplicable.",
        "whyA": "Los conflictos administrativos pueden exigir valoración aunque no haya condena penal.",
        "whyB": "Los impedimentos e inhabilidades no se aplican como sanciones informales sin su supuesto legal.",
        "reason": "La gestión de conflictos requiere hechos concretos, norma y procedimiento.",
        "extra": ""
      }
    ]
  },
  {
    "id": "excel-indicadores",
    "scenario": "Una regional consolida 420 registros de peticiones en Excel. La hoja combina registros recibidos por correo y ventanilla, contiene 17 radicados repetidos y una columna de fechas como texto. Un filtro muestra 126 filas, pero la suma del informe sigue tomando el total original; un superior pide modificar manualmente la cifra para que coincida con el reporte del mes anterior. El informe se usará para evaluar oportunidad de respuestas.",
    "modules": [
      "pgn-m56",
      "pgn-m66",
      "pgn-m67",
      "pgn-m68"
    ],
    "sourceIds": [
      "pgn-sgc",
      "pgn-manual-calidad",
      "office-excel-subtotals"
    ],
    "items": [
      {
        "stem": "¿Qué control debe realizarse antes de reportar el número de solicitudes únicas?",
        "best": "Definir llave de radicación y reglas de duplicación, convertir fechas válidas, documentar criterios y reconciliar filas con la fuente de origen.",
        "foilA": "Eliminar los 17 registros repetidos sin documentar revisión, asumiendo que cada coincidencia de texto es un duplicado real.",
        "foilB": "Usar siempre 420 porque el número de filas es el mejor indicador de actuaciones únicas.",
        "whyA": "Una coincidencia aparente puede corresponder a una actualización o un documento distinto; debe validarse.",
        "whyB": "Filas no equivalen necesariamente a trámites únicos ni a registros válidos.",
        "reason": "Calidad de datos exige reglas reproducibles de identidad, normalización y trazabilidad.",
        "extra": ""
      },
      {
        "stem": "Si se necesita sumar únicamente los valores visibles tras el filtro, ¿qué enfoque técnico es correcto?",
        "best": "Definir si el indicador corresponde al total global o a la selección filtrada y usar una función apropiada, por ejemplo SUBTOTALES, verificando el comportamiento de filas ocultas.",
        "foilA": "Usar SUMA sobre todo el rango y cambiar la etiqueta a «filtrado», porque las filas no visibles se excluyen de cualquier fórmula.",
        "foilB": "Borrar definitivamente las filas que no están en pantalla para que la suma se ajuste al filtro seleccionado.",
        "whyA": "SUMA ordinaria puede incluir valores fuera de la vista filtrada y requiere revisar el universo.",
        "whyB": "Filtrar no elimina registros ni autoriza borrar datos fuente para obtener una cifra.",
        "reason": "SUBTOTALES permite calcular sobre el subconjunto filtrado; el parámetro distingue también el tratamiento de filas ocultas manualmente.",
        "extra": ""
      },
      {
        "stem": "En una tabla dinámica, una fecha registrada como texto hace que algunos casos no se agrupen por mes. ¿Qué procede?",
        "best": "Normalizar y validar el tipo de dato, revisar los registros que no se convierten, actualizar la tabla dinámica y comparar recuentos contra el origen.",
        "foilA": "Cambiar el formato visual de la celda a fecha y dar por convertido cualquier contenido sin revisar errores de interpretación.",
        "foilB": "Mover manualmente los casos al mes esperado y conservar solo la tabla dinámica, sin ajustar el dato fuente.",
        "whyA": "El formato de presentación no transforma necesariamente una cadena inválida en fecha de calendario.",
        "whyB": "Alterar resultados sin corregir origen compromete reproducibilidad y auditoría.",
        "reason": "La agregación solo es confiable si el tipo de dato, el rango y el método de agrupación están controlados.",
        "extra": ""
      },
      {
        "stem": "El área calcula «eficacia» dividiendo contestadas entre radicadas y otra oficina lo denomina «oportunidad». ¿Cuál es la validación metodológica?",
        "best": "Definir con precisión numerador, denominador, periodo y tratamiento de pendientes; distinguir volumen respondido de respuesta dentro del plazo.",
        "foilA": "Usar ambos nombres indistintamente, porque cualquier porcentaje de respuesta mide automáticamente cumplimiento de términos.",
        "foilB": "Elegir la fórmula que produzca el porcentaje más alto y dejar la ficha técnica para el siguiente periodo.",
        "whyA": "Responder no equivale necesariamente a responder oportunamente.",
        "whyB": "Un indicador sin definición estable puede producir conclusiones engañosas.",
        "reason": "La calidad del indicador depende de su definición y la posibilidad de replicarlo con los mismos datos.",
        "extra": ""
      }
    ]
  },
  {
    "id": "expediente-word",
    "scenario": "Una oficina prepara en Word el informe que cerrará un expediente electrónico. El archivo ha pasado por tres profesionales, mantiene control de cambios, comentarios de trabajo y un anexo con tablas que no coincide con la última versión del sistema de archivo. Alguien sugiere enviarlo directamente en PDF y retirar del expediente los borradores para «no confundir» a los revisores. Ya existe una versión firmada del informe previo.",
    "modules": [
      "pgn-m40",
      "pgn-m58",
      "pgn-m59",
      "pgn-m65"
    ],
    "sourceIds": [
      "ley-594-2000",
      "ley-527-1999",
      "office-word-track-changes",
      "agn-acuerdo-001-2024"
    ],
    "items": [
      {
        "stem": "¿Qué evidencia debe preservarse al definir la versión final del documento?",
        "best": "Identificar la versión aprobada, revisar cambios y comentarios, contrastar anexos, mantener la trazabilidad archivística y separar borrador de documento firmado.",
        "foilA": "Aceptar todos los cambios automáticamente y eliminar el historial porque solo importa el PDF más reciente.",
        "foilB": "Tratar la versión visualizada como original definitivo, aunque no corresponda al anexo que ya fue aprobado.",
        "whyA": "Las revisiones pueden cambiar hechos o conclusiones y el archivo tiene reglas de conservación.",
        "whyB": "La coincidencia visual no establece correspondencia con la versión autorizada y sus anexos.",
        "reason": "El control documental necesita procedencia, versión, aprobación y retención según reglas archivísticas.",
        "extra": ""
      },
      {
        "stem": "¿Puede una conversión a PDF sustituir la revisión de marcas y datos ocultos?",
        "best": "No; debe comprobarse qué contiene realmente el documento entregable y su versión, antes de fijar una representación final para remisión.",
        "foilA": "Sí; convertir un archivo siempre elimina sus revisiones, metadatos sensibles y anexos ocultos.",
        "foilB": "Sí, cuando el título del PDF coincide con el del informe aprobado, porque el nombre garantiza identidad del contenido.",
        "whyA": "El proceso de exportación depende de opciones y no reemplaza controles de contenido.",
        "whyB": "Un nombre de archivo no acredita integridad, aprobación ni correspondencia documental.",
        "reason": "Word permite revisar y aceptar o rechazar cambios, pero corresponde al responsable verificar el documento emitido.",
        "extra": ""
      },
      {
        "stem": "Una tabla del informe contiene dos cifras diferentes para el mismo indicador. ¿Cuál debe llevarse al acto definitivo?",
        "best": "Ninguna sin reconciliar los orígenes, fórmula y corte temporal; documentar la corrección o incertidumbre antes de motivar la conclusión.",
        "foilA": "La cifra más reciente en la pantalla del funcionario, porque prevalece cualquier dato de última edición.",
        "foilB": "La cifra más alta para evitar subestimar el desempeño de la oficina, dejando la discrepancia como comentario interno.",
        "whyA": "La fecha de edición no sustituye la validación del dato y su fuente.",
        "whyB": "Seleccionar un número favorable no constituye criterio técnico de calidad.",
        "reason": "Las cifras del informe deben poder reconstruirse desde el registro fuente.",
        "extra": ""
      },
      {
        "stem": "El archivo digital debe incorporarse al expediente electrónico. ¿Qué criterio general debe respetarse?",
        "best": "Conservar relación con serie, trámite, autoría, orden y metadatos de contexto, de acuerdo con las tablas y procedimientos archivísticos adoptados.",
        "foilA": "Adjuntar solo el PDF final sin identificar procedencia, pues toda información de archivo se ordena exclusivamente por fecha.",
        "foilB": "Conservar cada revisión en un repositorio personal del profesional y eliminarla cuando cambie de dependencia.",
        "whyA": "La clasificación archivística no se reduce a fecha y un único formato.",
        "whyB": "Los archivos personales no reemplazan el sistema institucional ni las reglas de conservación.",
        "reason": "El expediente debe preservar vínculos documentales, contexto y reglas de gestión y retención.",
        "extra": ""
      }
    ]
  },
  {
    "id": "prevencion-municipal",
    "scenario": "Una alcaldía reporta fallas periódicas en el suministro de agua a dos veredas y un hospital de la zona rural. El informe trimestral declara «100 % de cobertura» porque todos los hogares aparecen inscritos en un padrón, pero hay múltiples quejas sin verificación y una alerta sanitaria preliminar. La Procuraduría recibe una solicitud para imponer de inmediato sanciones a todos los funcionarios responsables del servicio.",
    "modules": [
      "pgn-m45",
      "pgn-m46",
      "pgn-m47",
      "pgn-m49"
    ],
    "sourceIds": [
      "pgn-guia-preventiva",
      "constitucion",
      "ley-1618-2013"
    ],
    "items": [
      {
        "stem": "¿Qué primera actuación se ajusta mejor a la función preventiva?",
        "best": "Delimitar riesgo y población afectada, solicitar soportes de continuidad y planes de respuesta a las autoridades competentes, y hacer seguimiento sin prejuzgar responsabilidades.",
        "foilA": "Ordenar directamente una sanción disciplinaria desde la visita preventiva, porque el riesgo demuestra la falta.",
        "foilB": "Esperar al siguiente informe trimestral sin verificar las alertas, ya que la cobertura declarada es completa.",
        "whyA": "Prevención e instrucción disciplinaria tienen objeto y competencias diferentes.",
        "whyB": "Una estadística de afiliación no demuestra continuidad ni elimina señales de riesgo actual.",
        "reason": "La función preventiva busca identificar, advertir y seguir el riesgo con soporte verificable.",
        "extra": ""
      },
      {
        "stem": "La cifra de «100 % de cobertura» se presenta como garantía de continuidad. ¿Qué debe evaluarse?",
        "best": "La definición del indicador, su fuente, frecuencia y diferencia entre registro de usuarios, acceso efectivo y continuidad del servicio.",
        "foilA": "Aceptar el indicador porque el 100 % es el máximo matemático y no necesita verificación de base.",
        "foilB": "Reemplazarlo sin evidencia por el porcentaje de hogares que denunciaron la falla, usando denuncias como universo total.",
        "whyA": "Una cifra bien formada puede medir un concepto distinto al resultado que pretende probar.",
        "whyB": "Las quejas son señales importantes, pero no sustituyen un denominador definido.",
        "reason": "La validez de un indicador depende de que mida el fenómeno evaluado y se contraste con otras fuentes.",
        "extra": ""
      },
      {
        "stem": "El hospital informa que personas con discapacidad dependen de dispositivos médicos conectados a energía y agua. ¿Cómo incorporar el enfoque diferencial?",
        "best": "Examinar barreras y riesgos específicos, priorizar verificación y coordinación de medidas accesibles, preservando competencia y datos personales.",
        "foilA": "Aplicar automáticamente la misma medida a todas las personas sin examinar condiciones particulares, porque la igualdad prohíbe diferenciar.",
        "foilB": "Publicar una lista nominal de pacientes afectados para dar mayor visibilidad a la emergencia.",
        "whyA": "El trato equitativo puede requerir medidas diferenciadas conforme a necesidades verificables.",
        "whyB": "La difusión de información de salud afecta datos especialmente protegidos.",
        "reason": "El enfoque diferencial exige reconocer barreras sin exceder competencias ni vulnerar privacidad.",
        "extra": ""
      },
      {
        "stem": "La administración anuncia un plan de contingencia, pero aún no entrega evidencia de ejecución. ¿Qué seguimiento es proporcional?",
        "best": "Solicitar hitos, responsables, fechas de implementación y soportes, comprobar avances y escalar hallazgos por vías competentes según nuevos hechos.",
        "foilA": "Declarar subsanado el riesgo por la sola presentación de un documento que contiene promesas de ejecución.",
        "foilB": "Sustituir directamente al operador del acueducto mediante una orden preventiva no prevista en el trámite.",
        "whyA": "Un plan presentado no equivale a resultados implementados.",
        "whyB": "La función preventiva no convierte al órgano de control en operador del servicio.",
        "reason": "El control debe relacionar compromisos con evidencia de implementación y evolución del riesgo.",
        "extra": ""
      }
    ]
  },
  {
    "id": "procedimiento-notificaciones",
    "scenario": "Una oficina emite un acto administrativo que afecta a varios interesados. El proyecto señala un correo electrónico de una persona y una dirección física de otra; no existe constancia de que todos hayan aceptado el canal electrónico en los casos que así lo exijan. Una persona presenta un recurso afirmando que conoció el acto semanas después y otra aporta un documento con fecha anterior. El expediente mezcla comunicaciones, notificaciones y publicaciones.",
    "modules": [
      "pgn-m15",
      "pgn-m16",
      "pgn-m19",
      "pgn-m31"
    ],
    "sourceIds": [
      "cpaca",
      "constitucion",
      "ley-1755-2015"
    ],
    "items": [
      {
        "stem": "¿Qué verificación debe realizarse antes de tener por surtida una notificación?",
        "best": "Identificar la naturaleza del acto y la forma de notificación aplicable, revisar autorización o presupuesto del canal utilizado y conservar constancia de realización.",
        "foilA": "Asumir que cualquier correo enviado produce notificación válida desde su fecha de redacción.",
        "foilB": "Publicar todo acto en la página web y considerar automáticamente resueltas las garantías individuales de los interesados.",
        "whyA": "La remisión por un canal no necesariamente cumple los requisitos de la notificación concreta.",
        "whyB": "Publicación y notificación personal cumplen supuestos distintos en el procedimiento.",
        "reason": "La eficacia de la comunicación depende del tipo de actuación y de su evidencia verificable.",
        "extra": ""
      },
      {
        "stem": "Se debate si el término de un recurso ya venció. ¿Cuál método es confiable?",
        "best": "Reconstruir fecha y modalidad de notificación válida, naturaleza del término y regla de cómputo aplicable antes de declararlo extemporáneo.",
        "foilA": "Contar desde la fecha de firma del proyecto, porque allí nació la intención administrativa de decidir.",
        "foilB": "Usar la fecha del correo interno de coordinación para todos, aunque cada interesado fue notificado por medio distinto.",
        "whyA": "La firma o preparación no es necesariamente el punto de inicio de término para recurrir.",
        "whyB": "La comunicación interna no sustituye la notificación válida de cada destinatario.",
        "reason": "Los términos solo pueden calcularse desde el hito jurídicamente relevante y debidamente probado.",
        "extra": ""
      },
      {
        "stem": "Dos interesados recibieron comunicaciones distintas y alegan indefensión. ¿Qué debe describir el análisis?",
        "best": "Diferenciar forma de conocimiento, requisitos aplicables, oportunidades efectivas de defensa y posibles efectos del defecto en cada persona.",
        "foilA": "Afirmar nulidad de todas las actuaciones de manera idéntica sin distinguir cómo fue notificada cada persona.",
        "foilB": "Declarar saneado todo defecto porque al menos uno de los interesados presentó un recurso.",
        "whyA": "La irregularidad y su trascendencia pueden variar entre destinatarios.",
        "whyB": "La actuación de una persona no subsana necesariamente la afectación de defensa de otra.",
        "reason": "El debido proceso requiere examen individualizado de actuaciones y garantías.",
        "extra": ""
      },
      {
        "stem": "Una oficina quiere sustentar la decisión final citando exclusivamente un correo de instrucciones. ¿Qué debe contener la motivación?",
        "best": "Identificación de hechos acreditados, competencia, normas aplicables, valoración de alegaciones relevantes y decisión congruente con el expediente.",
        "foilA": "Reproducir el correo de instrucciones como fundamento suficiente, porque es un documento emitido por la jefatura.",
        "foilB": "Remitir al interesado a consultar el archivo completo sin expresar las razones de la decisión individual.",
        "whyA": "Las instrucciones internas no sustituyen el marco legal ni la motivación exigible.",
        "whyB": "La posibilidad de consultar anexos no necesariamente reemplaza el deber de explicar el sentido del acto.",
        "reason": "Una decisión revisable exige que la relación entre hechos, norma y resultado sea expresa.",
        "extra": ""
      }
    ]
  },
  {
    "id": "prueba-contradictoria",
    "scenario": "Un expediente contiene declaración de una persona que acusa a un servidor de alterar un acta. Un registro de acceso indica actividad en la oficina, pero no individualiza quién manipuló el documento; un perito informa que el archivo sufrió modificación sin poder atribuir la autoría. Otra declaración ubica al servidor en comisión fuera de la sede. La instrucción propone usar únicamente los elementos de cargo por considerar que la defensa debe demostrar la inocencia.",
    "modules": [
      "pgn-m35",
      "pgn-m36",
      "pgn-m39",
      "pgn-m42"
    ],
    "sourceIds": [
      "ley-1952-2019",
      "ley-2094-2021",
      "pgn-guia-pruebas"
    ],
    "items": [
      {
        "stem": "¿Cómo corresponde manejar la carga probatoria?",
        "best": "Investigar y valorar con igual rigor elementos de cargo y descargo, sin imponer al investigado la obligación de demostrar su inocencia.",
        "foilA": "Tomar la declaración acusatoria como suficiente porque la versión de la defensa constituye una excepción.",
        "foilB": "Dar valor automático de cierre a la coartada sin contrastarla con los demás soportes.",
        "whyA": "La carga estatal y la investigación integral no permiten ignorar pruebas favorables.",
        "whyB": "Un documento o declaración de descargo también exige valoración crítica y corroboración.",
        "reason": "La conclusión debe formarse desde un conjunto probatorio suficientemente sustentado.",
        "extra": ""
      },
      {
        "stem": "El equipo evalúa si una prueba propuesta es pertinente y útil. ¿Qué debe preguntar?",
        "best": "Qué hecho controvertido ayuda a esclarecer, si el medio es jurídicamente admisible y si su aporte no resulta meramente redundante.",
        "foilA": "Si el testimonio coincide de antemano con la hipótesis principal, pues ello determina pertinencia y utilidad.",
        "foilB": "Si el medio es fácil de obtener, porque la rapidez administrativa define por sí sola su necesidad.",
        "whyA": "La pertinencia no depende de confirmar una versión ya elegida.",
        "whyB": "Facilidad y costo pueden ser factores de gestión, pero no sustituyen los criterios probatorios.",
        "reason": "La admisión probatoria debe ligarse al objeto de prueba y a sus requisitos.",
        "extra": ""
      },
      {
        "stem": "La pericia establece que el archivo fue modificado, pero no por quién. ¿Qué inferencia es válida?",
        "best": "Acreditar la alteración en el alcance probado, indicar que la atribución personal permanece abierta y contrastar fuentes adicionales.",
        "foilA": "Concluir que la persona con privilegios administrativos es autora del cambio porque podía producirlo.",
        "foilB": "Excluir la pericia íntegramente porque no contiene una identificación personal definitiva.",
        "whyA": "Poder técnico no equivale a ejecución material y debe contrastarse.",
        "whyB": "Una pericia puede probar un hecho limitado aunque no resuelva todas las hipótesis.",
        "reason": "La valoración exige separar hecho técnico de autoría y culpabilidad disciplinaria.",
        "extra": ""
      },
      {
        "stem": "La pericia y el testimonio parecen contradictorios. ¿Cuál análisis aplica sana crítica?",
        "best": "Comparar condiciones de percepción, método, integridad, consistencia, pertinencia y explicaciones alternativas, motivando el peso de cada fuente.",
        "foilA": "Elegir siempre la pericia porque cualquier técnica informática tiene jerarquía probatoria superior al testimonio.",
        "foilB": "Elegir siempre el testimonio presencial porque los métodos técnicos son indirectos.",
        "whyA": "La pericia no tiene un valor invariable superior a los demás medios.",
        "whyB": "La proximidad del testigo al hecho no elimina errores, sesgos o imprecisiones.",
        "reason": "La sana crítica exige una valoración razonada y conjunta, no jerarquías absolutas prefijadas.",
        "extra": ""
      }
    ]
  },
  {
    "id": "seguridad-correo",
    "scenario": "Se detectó que una cuenta institucional descargó múltiples expedientes fuera de su horario habitual desde un dispositivo que el usuario no reconoce. La entidad dispone de autenticación multifactor, registros de sesiones, correo con mensajes sospechosos y respaldos; además, el servicio debe permanecer operativo para atender peticiones urgentes. El responsable de TI propone borrar todos los registros y reinstalar equipos antes de investigar.",
    "modules": [
      "pgn-m60",
      "pgn-m62",
      "pgn-m63",
      "pgn-m82"
    ],
    "sourceIds": [
      "mintic-mspi-2025",
      "ley-1581-2012",
      "ley-527-1999"
    ],
    "items": [
      {
        "stem": "¿Qué respuesta inicial equilibra contención, evidencia y continuidad?",
        "best": "Preservar trazas relevantes, identificar alcance y permisos, tomar medidas proporcionadas de contención y documentar consecuencias operativas.",
        "foilA": "Borrar sesiones, registros y equipos de inmediato sin inventariar evidencia ni planificar continuidad.",
        "foilB": "No actuar hasta conocer con certeza la identidad de la persona que inició sesión.",
        "whyA": "La destrucción de registros puede impedir reconstruir el incidente.",
        "whyB": "La incertidumbre no excluye medidas prudentes según el riesgo actual.",
        "reason": "La respuesta debe coordinar seguridad, evidencia y continuidad del servicio.",
        "extra": ""
      },
      {
        "stem": "Una base de datos muestra 23 expedientes consultados. ¿Puede afirmarse que todos fueron descargados?",
        "best": "No; distinguir eventos de consulta, exportación y descarga y verificar registros específicos antes de atribuir extracción de archivos.",
        "foilA": "Sí, porque una consulta SQL demuestra que el resultado se almacenó necesariamente en otro equipo.",
        "foilB": "No es posible concluir ningún acceso porque los registros de base de datos no identifican por sí solos una persona.",
        "whyA": "Consulta y descarga son eventos diferentes y requieren evidencia sobre operaciones concretas.",
        "whyB": "Los registros pueden demostrar operaciones limitadas aunque no toda la cadena de usuario final.",
        "reason": "Las inferencias deben reflejar exactamente el alcance registrado.",
        "extra": ""
      },
      {
        "stem": "El correo contiene un adjunto con nombre coincidente al archivo sospechoso, pero sin verificación de integridad. ¿Qué procede?",
        "best": "Preservar mensaje, cabeceras y adjunto, verificar integridad y contexto temporal antes de relacionarlo con el incidente.",
        "foilA": "Considerar auténtico el adjunto solo por coincidencia de nombre y usarlo como prueba completa de salida de información.",
        "foilB": "Abrir el adjunto en todos los equipos para comprobar visualmente su contenido antes de preservar muestras.",
        "whyA": "El nombre del archivo no confirma igualdad de contenido, origen ni cadena de manejo.",
        "whyB": "Abrir material sospechoso sin control puede alterar evidencia o incrementar riesgos.",
        "reason": "La evidencia requiere integridad, procedencia y un método de análisis documentado.",
        "extra": ""
      },
      {
        "stem": "En un sistema con autenticación multifactor aparece una sesión válida y una alerta de ubicación atípica. ¿Qué inferencia cabe?",
        "best": "Reconocer que los factores y alertas orientan la investigación, pero correlacionar dispositivo, sesiones y actividad antes de atribuir acción a su titular.",
        "foilA": "Dar por probada la autoría del titular de la cuenta porque MFA hace imposible cualquier uso indebido.",
        "foilB": "Excluir el evento por completo porque una alerta de ubicación puede ser un falso positivo.",
        "whyA": "MFA reduce riesgos, no demuestra por sí solo quién realizó cada acción.",
        "whyB": "Una alerta contextual no es inútil; su peso depende de corroboración.",
        "reason": "La atribución responsable necesita distintas fuentes y explicación de límites.",
        "extra": ""
      }
    ]
  },
  {
    "id": "software-produccion",
    "scenario": "El sistema de gestión documental de la entidad muestra una validación en producción que no aparece en el repositorio principal. La plataforma se desplegó mediante una canalización automatizada, pero hubo una intervención de emergencia realizada con una cuenta de servicio. El último commit en Git no corresponde al artefacto efectivamente publicado; un registro de configuración muestra cambios posteriores a la aprobación.",
    "modules": [
      "pgn-m80",
      "pgn-m81",
      "pgn-m83",
      "pgn-m84"
    ],
    "sourceIds": [
      "mintic-mrae-v3",
      "mintic-mspi-2025",
      "pgn-manual-v9"
    ],
    "items": [
      {
        "stem": "¿Cuál es el primer análisis de arquitectura más útil para aclarar el cambio?",
        "best": "Reconstruir repositorio, artefacto generado, variables, aprobaciones, registro de despliegue y configuración efectiva antes de atribuir el desvío.",
        "foilA": "Atribuirlo al último desarrollador que modificó una línea relacionada, sin contrastar artefactos ni canales de despliegue.",
        "foilB": "Suponer que producción es idéntica al repositorio porque el proceso de integración informa «éxito».",
        "whyA": "Un autor de commit no es necesariamente el origen de una alteración desplegada.",
        "whyB": "La canalización puede incorporar configuración y artefactos distintos de la fuente.",
        "reason": "La reconstrucción técnica requiere comparar etapas y estado efectivo.",
        "extra": ""
      },
      {
        "stem": "La red registra una dirección IP compartida y dos conexiones VPN. ¿Qué se puede establecer?",
        "best": "Ubicar rutas posibles y ventanas temporales, correlacionando sesiones de aplicación, autenticación y equipo sin deducir identidad personal de la IP.",
        "foilA": "Asociar el cambio con la primera persona que registró ingreso a la sede por proximidad temporal.",
        "foilB": "Descartar la IP por ser compartida, pues ninguna ruta de red puede aportar evidencia útil.",
        "whyA": "Coincidencia de presencia no demuestra interacción con la aplicación.",
        "whyB": "Compartir IP reduce certeza individual, pero la información puede delimitar infraestructura.",
        "reason": "Los registros de red deben interpretarse con contexto de NAT, VPN y tiempo.",
        "extra": ""
      },
      {
        "stem": "En el pipeline aparece una prueba unitaria aprobada, pero una validación de integración no se ejecutó. ¿Qué implica?",
        "best": "Distinguir cobertura de pruebas, verificar alcance de controles omitidos y relacionar el defecto con el artefacto desplegado antes de concluir.",
        "foilA": "Declarar que el software está completamente validado porque al menos una prueba automatizada fue exitosa.",
        "foilB": "Afirmar que cualquier prueba de integración fallida o ausente demuestra una alteración maliciosa.",
        "whyA": "Una prueba aislada no cubre todos los riesgos de aceptación, seguridad e integración.",
        "whyB": "La ausencia de un control no determina intencionalidad de una alteración.",
        "reason": "La calidad de software exige comprender qué comprueba cada etapa.",
        "extra": ""
      },
      {
        "stem": "La tabla actual tiene un valor distinto del último respaldo, pero los logs transaccionales muestran una actualización programada. ¿Qué estudio corresponde?",
        "best": "Correlacionar reglas de negocio, trabajos automáticos, transacciones y auditoría antes de inferir una modificación no autorizada.",
        "foilA": "Restaurar inmediatamente el respaldo y borrar la evidencia de transacciones para dejar la base en su estado anterior.",
        "foilB": "Atribuir el cambio a quien aprobó el trabajo programado porque la diferencia de valores demuestra autoría material.",
        "whyA": "La restauración sin preservación puede ocultar causa y alterar estado legítimo.",
        "whyB": "Autorizar o supervisar un proceso no prueba ejecución individual de una actualización.",
        "reason": "Integridad lógica, trazabilidad de operaciones y pertinencia del dato se analizan conjuntamente.",
        "extra": ""
      }
    ]
  },
  {
    "id": "equipos-conducta",
    "scenario": "Un equipo de apoyo a la instrucción recibe un paquete de expedientes con plazos diferentes. Una profesional recién vinculada detecta que una tabla de reparto contiene fechas inconsistentes; otra persona propone «corregirlas» sin consultar la fuente, pues el tablero de indicadores se publicará esa tarde. La coordinación solicita una decisión colectiva que mantenga resultados y evite conflictos dentro del grupo.",
    "modules": [
      "pgn-m70",
      "pgn-m71",
      "pgn-m72",
      "pgn-m73"
    ],
    "sourceIds": [
      "pgn-diccionario-competencias",
      "pgn-manual-v9",
      "pgn-sgc"
    ],
    "items": [
      {
        "stem": "¿Qué conducta integra responsabilidad institucional y trabajo colaborativo?",
        "best": "Exponer el riesgo con evidencia, verificar fuente y criterios con las áreas involucradas y acordar corrección trazable antes de publicar el tablero.",
        "foilA": "Corregir por cuenta propia las fechas que parecen incorrectas y avisar cuando termine la reunión para evitar retrasos.",
        "foilB": "Enviar una crítica pública al equipo de reparto atribuyendo negligencia sin revisar las condiciones del dato.",
        "whyA": "Los cambios silenciosos pueden alterar términos o informes y debilitan control compartido.",
        "whyB": "La imputación prematura deteriora cooperación y no resuelve la calidad del dato.",
        "reason": "La coordinación efectiva exige evidencia, comunicación respetuosa y resultados verificables.",
        "extra": ""
      },
      {
        "stem": "La jefatura exige un indicador en una hora y falta validar dos registros críticos. ¿Qué comportamiento es más consistente?",
        "best": "Comunicar límites y riesgos, priorizar validación de registros críticos y proponer una entrega provisional identificada cuando proceda.",
        "foilA": "Presentar el indicador como definitivo porque cumplir la hora vale más que describir incertidumbres.",
        "foilB": "Negarse a producir cualquier información y dejar de coordinar tareas hasta el siguiente periodo.",
        "whyA": "Cumplir un plazo ocultando límites puede inducir decisiones erróneas.",
        "whyB": "La gestión responsable contempla alternativas proporcionadas frente al tiempo.",
        "reason": "Orientación a resultados combina oportunidad, transparencia y calidad del producto.",
        "extra": ""
      },
      {
        "stem": "Un colega detecta que el equipo usa un término jurídico ambiguo en varias actas. ¿Qué muestra pensamiento conceptual?",
        "best": "Distinguir acepciones, relacionarlas con normas y etapas y proponer un glosario breve para uso consistente, con revisión competente.",
        "foilA": "Imponer la interpretación más conocida para todos los procedimientos sin verificar sus regímenes.",
        "foilB": "Delegar toda aclaración al último servidor que firmó, porque la experiencia sustituye la comprobación documental.",
        "whyA": "Un mismo término puede operar distinto según el contexto jurídico.",
        "whyB": "La antigüedad o firma no reemplaza la revisión de conceptos.",
        "reason": "El análisis conceptual precisa categorías, diferencias y efectos.",
        "extra": ""
      },
      {
        "stem": "En un caso de desacuerdo sobre prioridades, ¿cómo debe abordarse una pregunta comportamental de entrenamiento?",
        "best": "Responder con criterio consistente con conductas observables y funciones del empleo, sin asumir que existe una personalidad ideal universal.",
        "foilA": "Elegir siempre el extremo más favorable en todas las afirmaciones para obtener una puntuación máxima garantizada.",
        "foilB": "Responder de modo aleatorio para evitar patrones de consistencia que un evaluador pudiera detectar.",
        "whyA": "La intensidad declarada no constituye por sí sola evidencia de una competencia ni garantiza el resultado.",
        "whyB": "La aleatoriedad no permite expresar una conducta laboral coherente.",
        "reason": "La práctica puede orientar reflexión, pero el instrumento oficial no se sustituye por una clave inventada.",
        "extra": ""
      }
    ]
  },
  {
    "id": "territorio-control",
    "scenario": "En un municipio se aprobaron inversiones para mantenimiento de vías y atención social. El informe de seguimiento usa porcentajes proyectados como si fueran resultados ejecutados, y varias actas no contienen soporte de recibo de bienes. Una denuncia anónima acusa de corrupción a la administración sin señalar la intervención de cada servidor. La Procuraduría debe orientar seguimiento preventivo y valorar posibles noticias disciplinarias por rutas separadas.",
    "modules": [
      "pgn-m54",
      "pgn-m55",
      "pgn-m57",
      "pgn-m74"
    ],
    "sourceIds": [
      "ley-1474-2011",
      "ley-2195-2022",
      "pgn-guia-preventiva",
      "ley-1952-2019"
    ],
    "items": [
      {
        "stem": "¿Cómo debe manejarse la alerta de integridad sin prejuzgar?",
        "best": "Identificar operaciones y señales verificables, separar riesgo de responsabilidad, solicitar soportes y remitir hechos pertinentes a la autoridad competente.",
        "foilA": "Declarar corrupción de los responsables del proyecto porque la denuncia usa ese término y las cifras no coinciden.",
        "foilB": "Archivar toda la alerta por ser anónima sin examinar si contiene hechos verificables.",
        "whyA": "Una acusación no demuestra ilícito ni identidad de responsables.",
        "whyB": "La verificación de hechos relevantes no depende exclusivamente de conocer a quien los comunica.",
        "reason": "El análisis de señales exige separar información, hipótesis y competencia.",
        "extra": ""
      },
      {
        "stem": "Una inversión beneficia tres veredas de dos municipios. ¿Qué revisión territorial es imprescindible?",
        "best": "Identificar competencias de cada entidad, convenios o instrumentos de coordinación y soporte de decisiones antes de atribuir obligaciones.",
        "foilA": "Atribuir todas las actuaciones al municipio con mayor población sin examinar el reparto legal.",
        "foilB": "Considerar que ninguna entidad tiene competencia porque el proyecto cruza límites municipales.",
        "whyA": "La población no determina por sí sola competencia sobre toda la inversión.",
        "whyB": "La cooperación territorial es posible y requiere examinar su marco y responsabilidades.",
        "reason": "La distribución territorial debe comprobarse mediante normas e instrumentos aplicables.",
        "extra": ""
      },
      {
        "stem": "En el seguimiento al sistema de calidad, ¿qué evidencia demuestra una acción correctiva ejecutada?",
        "best": "Registrar causa, responsable, actividad, fecha, evidencia de implementación y verificación de eficacia frente al hallazgo.",
        "foilA": "Cerrar la no conformidad al elaborar el plan de mejora, pues la intención documentada constituye ejecución suficiente.",
        "foilB": "Modificar la definición del indicador para elevar el resultado sin informar de cambio metodológico.",
        "whyA": "Un plan no evidencia por sí solo implementación ni eficacia.",
        "whyB": "Cambiar el indicador sin trazabilidad puede ocultar la situación observada.",
        "reason": "La mejora continua implica ejecución, evidencia y evaluación de resultados.",
        "extra": ""
      },
      {
        "stem": "El equipo debe resolver un caso integral con hechos incompletos y dos competencias concurrentes. ¿Qué secuencia reduce errores?",
        "best": "Definir problema, hechos y controversias; ubicar autoridades y normas; valorar evidencias, identificar actuación procedente y justificar el límite de la decisión.",
        "foilA": "Elegir primero la actuación más visible para el ciudadano y construir después una explicación normativa que la sostenga.",
        "foilB": "Decidir por analogía con otro municipio sin contrastar diferencias de competencia y fuentes locales.",
        "whyA": "Partir de la decisión para buscar sustento favorece sesgos e irregularidades.",
        "whyB": "La analogía es una referencia, pero no reemplaza comprobar los hechos y normas del caso.",
        "reason": "La resolución integral exige un orden controlado de comprobaciones y motivación.",
        "extra": ""
      }
    ]
  }
]

const byModule = new Map(procuraduriaModuleBlueprints.map(bp => [bp.id, bp]))

export const procuraduriaDossierQuestions: Question[] = dossiers.flatMap((dossier, dossierIndex) =>
  dossier.items.map((item, questionIndex) => {
    const moduleId = dossier.modules[questionIndex]!
    const bp = byModule.get(moduleId)
    if (!bp) throw new Error('Módulo inexistente del expediente: ' + moduleId)
    const raw = [
      { text: item.best, rationale: item.reason },
      { text: item.foilA, rationale: item.whyA },
      { text: item.foilB, rationale: item.whyB },
    ]
    const offset = (dossierIndex + questionIndex + 1) % 3
    const rotated = raw.slice(offset).concat(raw.slice(0, offset))
    const ids = ['a','b','c'] as const
    const options: QuestionOption[] = rotated.map((v, index) => ({
      id: ids[index]!, text: v.text, rationale: v.rationale,
    }))
    return {
      id: 'pgn-dossier-' + dossier.id + '-' + (questionIndex + 1),
      moduleId,
      skillIds: bp.skillIds,
      type: 'pjs',
      difficulty: (questionIndex % 2 === 0 ? 4 : 5) as 4 | 5,
      case: dossier.scenario + (item.extra ? ' ' + item.extra : ''),
      stem: item.stem,
      options,
      correctOptionId: ids[rotated.indexOf(raw[0]!)]!,
      explanation: item.reason,
      sourceIds: [...new Set([...dossier.sourceIds, ...bp.sourceIds])],
      verifiedAt: '2026-11-22',
      relatedModuleIds: dossier.modules,
      scenarioId: 'pgn-dossier-' + dossier.id,
    }
  }),
)
