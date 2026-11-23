import type { LessonBlock } from '../../../src/types/course'

/**
 * Herramientas administrativas y ofimáticas aplicadas a funciones transversales
 * de Profesional Universitario 3PU-15. No se presumen ejes ni pesos oficiales.
 */
const blocks: Record<string, LessonBlock[]> = {
  'pgn-m17': [
    { type: 'comparison', title: 'Una radicación puede contener varias solicitudes', columns: ['Elemento', 'Qué comprobar en el expediente'], rows: [
      ['Petición de documentos', 'Identificar copias públicas, protección de datos y término aplicable a esta solicitud.'],
      ['Consulta', 'Separar su objeto, alcance y término de respuesta de las demás pretensiones.'],
      ['Estado del radicado', 'Comprobar si existe respuesta de fondo y evidencia de su comunicación; una casilla marcada no basta.'],
    ] },
    { type: 'example', title: 'Correspondencia que no coincide con el correo enviado', text: 'Un reporte indica «Respondido» en 39 solicitudes, pero los soportes de envío muestran 35 comunicaciones y cuatro borradores pendientes de remisión. No debes alterar la tabla para que coincida: reconcilia radicados, fechas y constancias antes de calcular un indicador de respuesta.' },
  ],
  'pgn-m18': [
    { type: 'comparison', title: 'Versiones de consulta pública y datos protegidos', columns: ['Dato', 'Tratamiento de análisis'], rows: [
      ['Actuaciones y cifras públicas', 'Examinar acceso conforme al régimen aplicable.'],
      ['Identificadores de terceros', 'Verificar la protección legal y si procede su supresión en una versión pública.'],
      ['Fuente y trazabilidad', 'Registrar qué información se ocultó, por qué y qué parte sí se entregó.'],
    ] },
    { type: 'trap', title: 'Publicar un archivo no es lo mismo que divulgar solo lo público', text: 'Una hoja Excel puede incluir columnas con información pública y datos personales en un mismo rango. Ninguna de las dos salidas extremas —publicar íntegramente o negar todo— es automáticamente correcta: se necesita clasificar y motivar cualquier restricción legal.' },
  ],
  'pgn-m40': [
    { type: 'comparison', title: 'Un documento digital tiene contenido y contexto', columns: ['Elemento', 'Pregunta probatoria'], rows: [
      ['Contenido', '¿Qué hecho expresa el documento y qué versión fue aportada?'],
      ['Metadatos', '¿Qué información de creación, edición o envío está disponible y qué límites tiene?'],
      ['Incorporación', '¿Quién lo allegó, cómo se preservó y qué oportunidades de contradicción existen?'],
    ] },
    { type: 'example', title: 'Dos PDF con el mismo nombre', text: 'Una copia de acta se encuentra firmada y la otra tiene una página adicional sin referencia en el oficio de remisión. Igual nombre y parecido visual no acreditan que son el mismo documento. Contrasta versiones, procedencia, anexos y condiciones de incorporación, sin suponer falsedad antes de comprobarlo.' },
  ],
  'pgn-m52': [
    { type: 'comparison', title: 'La hoja de ejecución no reemplaza la supervisión', columns: ['Registro', 'Qué significa realmente'], rows: [
      ['Comprometido', 'Recurso u obligación comprometida según sus documentos de soporte.'],
      ['Recibido y verificado', 'Prestación efectivamente constatada, con acta o evidencia aplicable.'],
      ['Pagado', 'Movimiento financiero que debe corresponder a obligaciones cumplidas; no acredita por sí solo calidad o entrega.'],
    ] },
    { type: 'example', title: 'Acta y matriz contractual incompatibles', text: 'La matriz contiene 12 mantenimientos ejecutados; el expediente solo documenta nueve y tres aparecen como programación. Antes de certificar cumplimiento integral, separa planeado, ejecutado, recibido, facturado y pagado, y revisa obligaciones, riesgos y competencia del supervisor.' },
  ],
  'pgn-m56': [
    { type: 'comparison', title: 'Indicadores de gestión que suelen confundirse', columns: ['Indicador', 'Error que debes evitar'], rows: [
      ['Volumen recibido', 'Usar cantidad de filas cuando hay registros duplicados o varias actuaciones de un mismo radicado.'],
      ['Porcentaje respondido', 'Suponer que equivale a cumplimiento de oportunidad sin revisar fecha límite ni notificación.'],
      ['Ejecución de una meta', 'Confundir recursos comprometidos, actividades programadas y resultados efectivamente demostrados.'],
    ] },
    { type: 'rule', title: 'Ficha de un indicador replicable', text: 'Registra objetivo, definición, numerador, denominador, universo, periodo, fuente, tratamiento de faltantes y responsable. El porcentaje sin esa metodología puede parecer exacto y aun así inducir una conclusión equivocada.' },
  ],
  'pgn-m57': [
    { type: 'comparison', title: 'Hallazgo, corrección y eficacia no son equivalentes', columns: ['Etapa', 'Evidencia esperable'], rows: [
      ['Hallazgo', 'Incumplimiento o riesgo demostrado con su fuente.'],
      ['Acción comprometida', 'Plan con responsable, plazo y criterio de verificación.'],
      ['Implementación', 'Soporte de actividad ejecutada, no solo proyecto de mejora.'],
      ['Eficacia', 'Comprobación de que la causa o el riesgo fueron tratados y el resultado se sostiene.'],
    ] },
  ],
  'pgn-m58': [
    { type: 'comparison', title: 'Expediente electrónico verificable', columns: ['Componente', 'Control mínimo'], rows: [
      ['Clasificación', 'Vinculación a serie y subserie documental y a la TRD pertinente.'],
      ['Integridad', 'Relación de documentos, versiones, índices y metadatos según procedimiento archivístico.'],
      ['Acceso y preservación', 'Permisos, retención y disponibilidad sin alterar indebidamente el expediente.'],
    ] },
    { type: 'example', title: 'Borrador en carpeta personal', text: 'Un informe oficial existe únicamente en el equipo del profesional y su anexo final no está incorporado al sistema documental. La ausencia en el expediente no se resuelve renombrando el archivo: debe incorporarse conforme al procedimiento, manteniendo procedencia, versión y reglas archivísticas.' },
  ],
  'pgn-m59': [
    { type: 'comparison', title: 'Informe técnico que otra persona pueda revisar', columns: ['Sección', 'Contenido comprobable'], rows: [
      ['Objeto', 'Qué se solicitó, alcance y límite de la participación profesional.'],
      ['Método', 'Fuentes, periodo, selección y controles de calidad aplicados.'],
      ['Resultados', 'Hechos y datos verificables distintos de las interpretaciones.'],
      ['Conclusiones', 'Inferencias sustentadas, incertidumbres y asuntos para autoridad competente.'],
    ] },
    { type: 'tip', title: 'Word, Excel y expediente cumplen papeles distintos', text: 'Word ayuda a redactar y controlar versiones; Excel, a consolidar y analizar información; el sistema documental preserva el expediente y su contexto. Ninguna herramienta convierte automáticamente un dato o una opinión en prueba concluyente.' },
  ],
  'pgn-m60': [
    { type: 'comparison', title: 'Calidad del registro institucional', columns: ['Problema', 'Comprobación'], rows: [
      ['Duplicados', '¿Es el mismo hecho o varias actuaciones con igual identificador parcial?'],
      ['Fecha como texto', '¿Es un dato válido para ordenar y medir términos?'],
      ['Permisos', '¿Quién estaba habilitado y qué operación realmente quedó registrada?'],
    ] },
  ],
  'pgn-m65': [
    { type: 'comparison', title: 'Control de versiones en Word', columns: ['Herramienta', 'Uso razonable en un informe'], rows: [
      ['Estilos y estructura', 'Mantener títulos, numeración y formato accesible de manera consistente.'],
      ['Control de cambios', 'Revisar modificaciones propuestas, responsable, aceptación o rechazo según aprobación.'],
      ['Comentarios', 'Distinguir observaciones internas del contenido final emitido.'],
      ['Versión de salida', 'Comprobar anexos, firmas, metadatos y correspondencia con el expediente.'],
    ] },
    { type: 'example', title: 'PDF no equivale a validación automática', text: 'Convertir un proyecto a PDF no sustituye comprobar cambios pendientes ni versiones de anexos. Antes de entregar, revisa contenido, autorizaciones, datos personales y conservación institucional del archivo.' },
  ],
  'pgn-m66': [
    { type: 'comparison', title: 'Excel: tres cálculos con objetivos distintos', columns: ['Necesidad', 'Herramienta o comprobación'], rows: [
      ['Total completo', 'SUMA sobre un rango correcto, incluidas filas no visibles por un filtro.'],
      ['Subtotal filtrado', 'SUBTOTALES según el número de función y tratamiento de filas ocultas.'],
      ['Conteo condicional', 'CONTAR.SI o CONTAR.SI.CONJUNTO con criterios definidos.'],
      ['Cruce de fuentes', 'Clave de búsqueda, coincidencias faltantes y duplicados antes de cualquier consolidación.'],
    ] },
    { type: 'example', title: 'El filtro no reescribe el dato', text: 'Una hoja tiene 420 filas y se filtran 126. SUMA del rango completo puede seguir totalizando registros fuera de la vista; SUBTOTALES permite operar con el filtro. Antes de escoger fórmula, define si el informe es global o por la selección visible y documenta los criterios.' },
  ],
  'pgn-m67': [
    { type: 'comparison', title: 'Una tabla dinámica no arregla registros defectuosos', columns: ['Anomalía', 'Qué revisar'], rows: [
      ['Fecha inválida', 'Conversión de tipo y tratamiento explícito de los errores.'],
      ['Radicado repetido', 'Criterio de unidad de análisis: actuación, documento o trámite.'],
      ['Porcentaje', 'Numerador, denominador, periodo y cambios metodológicos.'],
      ['Resultado atípico', 'Fuente, rango, filtros y valores extremos antes de inferir causalidad.'],
    ] },
    { type: 'rule', title: 'Precisión aritmética no es validez institucional', text: 'Una fórmula puede estar bien escrita y el indicador seguir siendo engañoso por un universo incorrecto, categorías mezcladas o sesgo de selección. Explica el significado de los datos antes de concluir.' },
  ],
  'pgn-m68': [
    { type: 'comparison', title: 'Método de investigación sobre datos', columns: ['Fase', 'Pregunta de control'], rows: [
      ['Hipótesis', '¿Qué hecho debe probarse o descartarse?'],
      ['Muestra', '¿De dónde viene la información y qué quedó fuera?'],
      ['Procedimiento', '¿Pueden replicarse filtros, cálculos y decisiones de limpieza?'],
      ['Hallazgo', '¿Qué afirma el dato y qué interpretación excede su alcance?'],
    ] },
  ],
  'pgn-m74': [
    { type: 'comparison', title: 'Método transversal para expedientes complejos', columns: ['Filtro', 'Pregunta clave'], rows: [
      ['Contexto', '¿Qué pasó, cuándo y qué no se sabe todavía?'],
      ['Competencia', '¿Qué puede decidir el profesional y qué compete a otra autoridad?'],
      ['Prueba', '¿Qué fuente sostiene cada inferencia y qué contradicción existe?'],
      ['Producto', '¿Qué actuación y soporte debe quedar para revisión posterior?'],
    ] },
  ],
}

export function transversalOfficeLessonBlocks(moduleId: string): LessonBlock[] {
  return blocks[moduleId] ?? []
}

const officeReferences: Record<string, string[]> = {
  'pgn-m17': ['ley-1755-2015', 'office-word-track-changes'],
  'pgn-m18': ['ley-1712-2014','ley-1581-2012'],
  'pgn-m40': ['agn-acuerdo-001-2024'],
  'pgn-m52': ['ley-80-1993'],
  'pgn-m56': ['office-excel-subtotals'],
  'pgn-m58': ['agn-acuerdo-001-2024'],
  'pgn-m59': ['office-word-track-changes','agn-acuerdo-001-2024'],
  'pgn-m65': ['office-word-track-changes'],
  'pgn-m66': ['office-excel-subtotals'],
  'pgn-m67': ['office-excel-subtotals'],
  'pgn-m68': ['office-excel-subtotals'],
}

export function transversalOfficeSources(moduleId: string): string[] {
  return officeReferences[moduleId] ?? []
}
