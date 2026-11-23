import type { LessonBlock } from '../../../src/types/course'

/**
 * Auditoría editorial por tríos: M3–M5.
 * Introduce solo teoría, comparaciones y ejemplos que preparan los
 * checkpoints y cierres existentes. No crea preguntas ni altera las fuentes.
 */
const refinements: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m3': {
    1: [
      {
        type: 'comparison',
        title: 'Aprobar la prueba no equivale a obtener un nombramiento',
        columns: ['Regla del concurso', 'Qué significa para preparar la prueba'],
        rows: [
          ['Conocimientos: mínimo 65/100', 'Es el umbral eliminatorio del nivel profesional según las reglas de la convocatoria; no es un pronóstico del resultado ni garantiza quedar en lista.'],
          ['Conocimientos: 70 % de ponderación', 'El peso de la prueba en el resultado total no es un segundo puntaje mínimo de 70/100.'],
          ['Comportamentales: 20 %', 'Se evalúan competencias vinculadas al perfil. No existe un atajo de contestar siempre un extremo para asegurar un resultado.'],
          ['Antecedentes: 10 %', 'Dependen de documentos, requisitos y condiciones de valoración aplicables; no sustituyen la preparación de conocimientos.'],
          ['Estrategia Umbral: meta superior al mínimo', 'Buscar resultados estables en varios temas es un consejo pedagógico. No se atribuye al operador una cantidad o proporción de preguntas por módulo.'],
        ],
      },
      {
        type: 'trap',
        title: '65/100 y 70 % no son el mismo dato',
        text: 'El primero representa la calificación mínima aprobatoria de conocimientos; el segundo indica su ponderación dentro del concurso. Un resultado simulado de 65 no equivale automáticamente a aprobar el proceso completo ni autoriza a dejar de estudiar temas débiles.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Diagnóstico que distingue cantidad de aciertos y dominio',
        columns: ['Registro de práctica', 'Decisión de estudio justificada'],
        rows: [
          ['Constitución: 17/20', 'Mantener recuperación espaciada y comprobar si las respuestas correctas se sostienen ante casos distintos.'],
          ['Pruebas disciplinarias: 9/20', 'Volver a necesidad, carga, contradicción, valoración y consecuencias antes de usar solo simulacros.'],
          ['Mismo error repetido en tres preguntas', 'Clasificarlo: supuesto omitido, autoridad equivocada, fase incorrecta, confusión de términos o inferencia probatoria excesiva.'],
          ['Puntaje global alto por un área fuerte', 'No interpretar el promedio como dominio de toda función del cargo; vigilar los contenidos misionales con más errores.'],
        ],
      },
      {
        type: 'example',
        title: 'Plan de una semana después del diagnóstico',
        text: 'Un estudiante acierta 85 % en una práctica constitucional y 45 % en prueba disciplinaria. Dedica dos sesiones a explicar y resolver microcasos de prueba, una a verificar normas y volver a contestar sus errores, y mantiene un repaso corto de Constitución. Repite luego preguntas diferentes: subir el puntaje sin cambiar el razonamiento no demuestra transferencia.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'No todos los errores se corrigen con más preguntas',
        columns: ['Tipo de error', 'Acción correctiva'],
        rows: [
          ['Desconozco el concepto', 'Leer una explicación breve, distinguirlo de otro término y explicarlo con un ejemplo.'],
          ['Recuerdo el dato, pero aplico mal la regla', 'Identificar supuesto de procedencia, excepción y etapa que faltaron en el análisis.'],
          ['Leí mal el expediente', 'Separar hechos probados, alegaciones, cambio de premisa y pregunta concreta.'],
          ['Una opción me pareció más rápida', 'Comprobar competencia, garantías y soporte antes de elegir la actuación.'],
          ['Aprendí de memoria una clave', 'Resolver un nuevo caso sin mirar la corrección y justificar por qué las otras opciones fallan.'],
        ],
      },
    ],
  },
  'pgn-m4': {
    1: [
      {
        type: 'comparison',
        title: 'Del registro técnico a una conclusión que puede sostenerse',
        columns: ['Capa', 'Qué puede afirmarse y qué no'],
        rows: [
          ['Dato original', 'El sistema registró un evento, cuenta, equipo o valor, dentro de la confiabilidad de esa fuente.'],
          ['Hecho técnico corroborado', 'Se confirma la operación mediante fuentes, tiempos, configuración y método de obtención documentado.'],
          ['Hipótesis de participación', 'Se formula una explicación posible, no una atribución automática por titularidad de cuenta o IP.'],
          ['Calificación disciplinaria', 'Requiere análisis jurídico de conducta, deber, culpabilidad y garantías por quien tenga la competencia.'],
        ],
      },
      {
        type: 'example',
        title: 'Registro de acceso: hecho no equivale a persona',
        text: 'La bitácora señala una autenticación a las 08:15 desde una cuenta compartida. Ese registro puede ubicar un evento, pero por sí solo no demuestra quién lo produjo, si hubo actividad automatizada ni qué persona modificó un documento. Las afirmaciones deben quedar condicionadas al método, los permisos, las sesiones y fuentes independientes.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Informe técnico breve y reproducible',
        columns: ['Sección', 'Qué debe registrar'],
        rows: [
          ['Objeto y alcance', 'Qué pregunta se encargó responder y cuáles decisiones quedan fuera del estudio técnico.'],
          ['Fuentes', 'Archivos, dispositivos, exportaciones, fechas, zona horaria y responsables de la obtención.'],
          ['Método y controles', 'Herramientas, versiones, filtros, controles de integridad y límites de calidad aplicables.'],
          ['Resultados', 'Hechos observables diferenciados de inferencias y explicaciones alternativas.'],
          ['Conclusiones', 'Lo que se sostiene con evidencia, incertidumbres y preguntas que requieren otra actuación.'],
        ],
      },
      {
        type: 'tip',
        title: 'Una copia de Excel no demuestra por sí sola integridad de la fuente',
        text: 'Copiar filas filtradas puede perder registros o contexto. Primero documenta el origen y el procedimiento de extracción; trabaja con una copia controlada, conserva los datos de referencia cuando corresponda y explica los cambios de formato. Un hash identifica integridad respecto de los bytes medidos, no prueba por sí solo autoría ni exactitud del contenido.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Dos hipótesis compatibles con el mismo evento',
        columns: ['Hallazgo', 'Interpretaciones que deben contrastarse'],
        rows: [
          ['Acceso de una cuenta de servicio', 'Una tarea automatizada legítima o el uso indebido de sus credenciales; el registro aislado no resuelve cuál.'],
          ['Cambio de un archivo después de horario', 'Proceso programado, usuario autorizado o intervención irregular; se comparan eventos y controles.'],
          ['Dirección IP en un registro', 'Conexión de infraestructura, NAT o VPN; identificar al usuario exige otras fuentes y contexto temporal.'],
          ['Dato técnicamente sólido', 'La autoridad debe valorar su alcance junto al resto de elementos, sin sustituir el análisis jurídico.'],
        ],
      },
    ],
  },
  'pgn-m5': {
    1: [
      {
        type: 'comparison',
        title: 'Seis artículos constitucionales para leer casos públicos',
        columns: ['Artículo', 'Regla operativa para el examen'],
        rows: [
          ['1 · Estado social de derecho', 'Dignidad, democracia participativa, pluralismo y prevalencia del interés general dentro del orden constitucional.'],
          ['2 · Fines esenciales', 'Servir a la comunidad, garantizar efectividad de derechos y facilitar la participación; orientar la actuación pública.'],
          ['6 · Responsabilidad', 'Servidores públicos responden por infracción de Constitución o ley, omisión y extralimitación en sus funciones.'],
          ['29 · Debido proceso', 'Se aplica también a las actuaciones administrativas; comprende garantías de defensa, prueba y contradicción.'],
          ['121 · Atribuciones', 'Ninguna autoridad puede ejercer funciones distintas de las conferidas por Constitución y ley.'],
          ['209 · Función administrativa', 'Se ejerce al servicio de intereses generales y según los principios constitucionales; celeridad no anula imparcialidad, publicidad ni garantías.'],
        ],
      },
      {
        type: 'trap',
        title: 'El interés general no es un permiso genérico para omitir garantías',
        text: 'La función pública busca resultados y protección de derechos, pero la urgencia, una denuncia grave o una meta de gestión no convierten en válida una decisión adoptada sin la competencia o procedimiento exigidos. Primero identifica el derecho afectado, el fundamento normativo y la etapa.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Análisis de garantías antes de una actuación urgente',
        columns: ['Pregunta', 'Comprobación'],
        rows: [
          ['¿Cuál es el fin público?', 'Definir el riesgo, derecho protegido o necesidad, sin convertir el objetivo en autorización ilimitada.'],
          ['¿Quién puede actuar?', 'Comprobar funciones y competencia legal en la materia y etapa del expediente.'],
          ['¿Qué garantía corresponde?', 'Examinar comunicación o notificación exigible, defensa, contradicción y tratamiento de pruebas.'],
          ['¿Qué medida procede?', 'Escoger dentro de las facultades disponibles una actuación motivada, oportuna y compatible con los derechos.'],
        ],
      },
      {
        type: 'example',
        title: 'Celeridad frente a defensa en un expediente',
        text: 'El despacho considera innecesario comunicar una actuación a la persona interesada porque el archivo contiene numerosos soportes. La existencia de documentos no sustituye automáticamente la oportunidad procesal de defensa o contradicción. Comprueba primero si la comunicación es exigible en esa etapa y respeta el procedimiento antes de decidir.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Cuándo la opción más rápida deja de ser la correcta',
        columns: ['Alternativa atractiva', 'Por qué debe revisarse'],
        rows: [
          ['Omitir una comunicación para cumplir un plazo', 'Una meta de celeridad no dispensa un requisito legal de garantía.'],
          ['Decidir por gravedad aparente de la queja', 'La denuncia orienta la actuación, pero no sustituye prueba ni valoración objetiva.'],
          ['Ejecutar la orden de quien no tiene competencia', 'La jerarquía de la persona que ordena algo no crea potestades jurídicas inexistentes.'],
          ['Suspender toda gestión por falta de certeza absoluta', 'Las garantías tampoco impiden desarrollar verificaciones o medidas legales y proporcionales que sí correspondan.'],
        ],
      },
    ],
  },
}

export function auditedModuleBlocks(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return refinements[moduleId]?.[lessonOrder] ?? []
}

export function auditedModuleSourceIds(moduleId: string): string[] {
  if (moduleId === 'pgn-m3') return ['pgn-res-212-2026', 'pgn-res-243-2026']
  if (moduleId === 'pgn-m4') return ['ley-1952-2019', 'ley-2094-2021']
  if (moduleId === 'pgn-m5') return ['constitucion']
  return []
}
