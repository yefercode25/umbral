import type { LessonBlock } from '../../../src/types/course'

/** Revisión editorial M6–M8: explicación situada, sin preguntas nuevas. */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m6': {
    1: [
      {
        type: 'comparison',
        title: 'Mapa de competencias: no todos los organismos investigan lo mismo',
        columns: ['Institución', 'Ubicación y asunto principal'],
        rows: [
          ['Congreso, Gobierno y jueces', 'Ramas legislativa, ejecutiva y judicial (art. 113). Cumplen funciones distintas y colaboran armónicamente sin perder su competencia.'],
          ['Procuraduría / Ministerio Público', 'La Procuraduría es el máximo organismo del Ministerio Público; ejerce funciones preventivas, de intervención y disciplinarias en los términos constitucionales y legales (arts. 117 y 118).'],
          ['Contraloría', 'Órgano de control fiscal: vigila la gestión fiscal y ejerce las atribuciones fiscales previstas por Constitución y ley (arts. 117, 119 y 267 y ss.).'],
          ['Fiscalía General', 'Integra la Rama Judicial; investiga conductas que puedan constituir delitos y desarrolla las actuaciones penales de su competencia (arts. 116 y 250).'],
          ['Defensoría y personerías', 'Participan del Ministerio Público dentro de su ámbito; no son una rama adicional del poder público ni una extensión de la Contraloría.'],
        ],
      },
      {
        type: 'trap',
        title: '«Fiscalía» no significa «control fiscal»',
        text: 'La Fiscalía investiga hechos con posible relevancia penal; la Contraloría ejerce el control fiscal. La similitud de los nombres no transfiere competencias. La Procuraduría no integra la Rama Judicial ni resuelve automáticamente el daño patrimonial mediante una sanción disciplinaria.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Una contratación, tres posibles líneas de análisis',
        columns: ['Pregunta del expediente', 'Ruta de análisis inicial'],
        rows: [
          ['¿Se incumplió un deber funcional?', 'Identificar sujeto disciplinable, deber, conducta, prueba y autoridad disciplinaria competente, sin presumir responsabilidad.'],
          ['¿Hubo afectación patrimonial fiscal atribuible?', 'Verificar presupuestos y elementos de responsabilidad fiscal en la autoridad competente; no equivale por sí solo a delito.'],
          ['¿Hay indicios de delito?', 'Analizar noticia e información penal y remitir por los canales pertinentes a la autoridad penal, sin calificar culpabilidad desde otro expediente.'],
          ['¿Qué puede hacer la oficina receptora?', 'Preservar soportes, registrar hechos, comprobar su atribución y canalizar información cuando proceda, sin declarar resultados ajenos.'],
        ],
      },
      {
        type: 'example',
        title: 'Cuatro documentos y ninguna competencia automática',
        text: 'En un contrato aparecen una alerta de supervisión, una inconsistencia de pagos, un acta de entrega y una denuncia. El mismo conjunto documental puede ser pertinente para estudios diferentes: deber funcional, manejo de recursos y posible delito. La presencia de tres rutas no significa que haya tres responsabilidades probadas ni que una autoridad pueda fallarlas todas.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Una decisión ajena no se importa sin examinarla',
        columns: ['Dato que aparece', 'Inferencia que no debe adelantarse'],
        rows: [
          ['Fiscalía abre una investigación', 'No demuestra por sí solo falta disciplinaria o daño fiscal; hay que identificar el hecho y los supuestos del otro régimen.'],
          ['Contraloría determina un hallazgo', 'No equivale automáticamente a una sanción disciplinaria ni a una condena penal.'],
          ['Un expediente termina sin responsabilidad en una ruta', 'No permite afirmar, sin análisis adicional, que cualquier otro procedimiento debe terminar idénticamente.'],
          ['Se comparten pruebas o informes', 'Cada autoridad debe valorar la pertinencia, incorporación y garantías según el marco del procedimiento que le corresponde.'],
        ],
      },
    ],
  },
  'pgn-m7': {
    1: [
      {
        type: 'comparison',
        title: 'Principios constitucionales con decisiones observables',
        columns: ['Principio (art. 209)', 'Cómo se aplica'],
        rows: [
          ['Igualdad e imparcialidad', 'Tratar solicitudes con criterios y turnos objetivos; un parentesco no justifica modificar prioridades.'],
          ['Moralidad', 'Evitar usar la función para beneficios indebidos, gestionar conflictos de intereses y conservar integridad documental.'],
          ['Eficacia', 'Orientar las actuaciones a la finalidad pública y a resultados verificables dentro de la ley.'],
          ['Economía y celeridad', 'Emplear recursos y tiempo razonablemente sin omitir requisitos o garantías exigibles.'],
          ['Publicidad', 'Facilitar acceso a actuaciones e información conforme a las normas, respetando reservas legales y datos protegidos.'],
          ['Coordinación', 'Articular dependencias y autoridades sin asumir atribuciones o decisiones que pertenecen a otra.'],
        ],
      },
      {
        type: 'trap',
        title: 'Rápido, público y económico no siempre es válido',
        text: 'Una oficina no puede usar el argumento de celeridad para cambiar turnos arbitrariamente, ni publicar datos restringidos bajo la excusa de transparencia. Antes de escoger un resultado aparentemente eficiente, comprueba competencia, procedimiento, trato igual, derechos y soporte de la decisión.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Caso de correspondencia: aplicar principios simultáneamente',
        columns: ['Hecho del expediente', 'Control de gestión procedente'],
        rows: [
          ['Una persona conocida solicita prioridad informal', 'Registrar el radicado y aplicar los criterios oficiales de atención y las prioridades legales que realmente correspondan.'],
          ['Hay una urgencia acreditada de otro ciudadano', 'Verificar la regla de atención prioritaria que pueda proceder y documentar la decisión sin favorecer por relaciones personales.'],
          ['El correo contiene datos personales', 'Preparar respuesta pertinente y limitar la difusión según protección de datos y excepciones legales.'],
          ['La unidad no tiene competencia sobre un punto', 'Articular la remisión o canalización según la regla jurídica pertinente; no resolver por conveniencia del jefe.'],
        ],
      },
      {
        type: 'example',
        title: 'La fila que Excel ordena no decide la prioridad jurídica',
        text: 'Una tabla muestra fechas de radicación y un campo «urgente». La persona encargada no debe reorganizarla por amistad con el solicitante ni suponer que todo asunto urgente tiene prioridad legal. Primero valida origen, fecha y categoría del expediente; luego aplica el orden y las excepciones previstas y conserva la justificación del cambio.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Cambiar un hecho puede cambiar la medida',
        columns: ['Nueva información', 'Qué revisar de nuevo'],
        rows: [
          ['El solicitante acredita una circunstancia que la norma protege', 'Determinar si activa una prioridad legal o atención diferencial, dejando soporte y razón de la decisión.'],
          ['La supuesta urgencia era solo una solicitud verbal de la jefatura', 'No confundir presión jerárquica con presupuesto de excepción al turno o requisito procedimental.'],
          ['Aparece una reserva legal parcial', 'Revisar si procede versión pública en lugar de publicar todo o negar íntegramente sin análisis.'],
          ['Otra dependencia resulta competente', 'Corregir el reparto y documentar la remisión sin borrar la trazabilidad del trámite original.'],
        ],
      },
    ],
  },
  'pgn-m8': {
    1: [
      {
        type: 'comparison',
        title: 'Calidad del sujeto, función y deber son filtros distintos',
        columns: ['Filtro', 'Pregunta jurídica'],
        rows: [
          ['Quién sirve al Estado (art. 123)', '¿Es miembro de corporación pública, empleado o trabajador del Estado o de entidad descentralizada? ¿Qué régimen rige su vínculo?'],
          ['Competencia (art. 121)', '¿Qué atribución tenía la autoridad para decidir o actuar en este asunto concreto?'],
          ['Responsabilidad (arts. 6 y 124)', '¿Qué actuación u omisión frente a la Constitución, la ley y el deber de su función debe examinarse según el régimen aplicable?'],
          ['Particulares', '¿La ley los hace disciplinables en ese supuesto? Su relación contractual no los convierte automáticamente en servidores públicos.'],
        ],
      },
      {
        type: 'trap',
        title: 'No basta señalar «es funcionario»',
        text: 'Para evaluar una conducta no es suficiente la etiqueta laboral. Debes determinar calidad jurídica del sujeto, atribuciones, deber concreto, hechos atribuibles y régimen aplicable. Una omisión solo se analiza como incumplimiento funcional si existía deber de actuar, sin sustituir la prueba por el cargo de la persona.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'De la omisión al análisis disciplinario',
        columns: ['Pregunta', 'Soporte que debes buscar'],
        rows: [
          ['¿Cuál era la tarea exigible?', 'Norma, manual, asignación válida o deber funcional concreto y su vigencia.'],
          ['¿Qué ocurrió o se omitió?', 'Expediente, registros, actuaciones y cronología verificable; separar alegaciones de hechos.'],
          ['¿Había competencia y posibilidad de cumplir?', 'Autoridad, etapa, asignación y circunstancias relevantes para comprender la conducta.'],
          ['¿Qué conclusión se está pidiendo?', 'Diferenciar reporte preventivo, análisis disciplinario, eventual daño patrimonial o noticia penal.'],
        ],
      },
      {
        type: 'example',
        title: 'Acta de supervisión que llegó tarde',
        text: 'Una obra fue recibida con retraso y una queja señala al supervisor. Para estudiar una eventual omisión, revisa quién tenía la obligación concreta de verificar y cuándo debía hacerlo, qué comprobaciones se realizaron y si hay documentos que contradicen la acusación. La sola existencia de un atraso no acredita culpabilidad disciplinaria del supervisor.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Responsabilidades que pueden coexistir sin confundirse',
        columns: ['Ámbito', 'Pregunta distinta que debe resolverse'],
        rows: [
          ['Disciplinario', '¿La conducta del sujeto disciplinable vulneró el deber funcional con los presupuestos exigidos por la ley?'],
          ['Fiscal', '¿Existen los elementos de un daño patrimonial fiscal y una actuación imputable según el régimen aplicable?'],
          ['Penal', '¿Se configura una conducta típica y los demás requisitos de responsabilidad penal?'],
          ['Administrativo o patrimonial', '¿Existe obligación de reparación, incumplimiento contractual u otra consecuencia según la vía y el régimen correspondientes?'],
          ['Pruebas compartidas', 'Los hechos pueden coincidir, pero los objetos, estándares y autoridades competentes deben examinarse individualmente.'],
        ],
      },
    ],
  },
}

export function auditedModuleBlocksM6M8(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return blocks[moduleId]?.[lessonOrder] ?? []
}

export function auditedModuleSourcesM6M8(moduleId: string): string[] {
  if (moduleId === 'pgn-m6') return ['constitucion', 'decreto-262-2000', 'ley-1952-2019']
  if (moduleId === 'pgn-m7') return ['constitucion', 'cpaca', 'ley-1581-2012']
  if (moduleId === 'pgn-m8') return ['constitucion', 'ley-1952-2019', 'ley-2094-2021']
  return []
}
