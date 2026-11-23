import type { LessonBlock } from '../../../src/types/course'

/**
 * Revisión editorial M0–M2 (23/11/2026).
 * Contenido de enseñanza, no nuevos reactivos. Cada bloque se sitúa junto
 * al aprendizaje que prepara la evaluación ya existente en la lección.
 */
const blocks: Record<string, Partial<Record<1 | 2 | 3, LessonBlock[]>>> = {
  'pgn-m0': {
    1: [
      {
        type: 'comparison',
        title: 'Fuente oficial y estrategia de preparación no son lo mismo',
        columns: ['Documento o criterio', 'Cómo se debe interpretar'],
        rows: [
          ['Convocatoria 104-2026, versión 4', 'Define el perfil específico que se debe contrastar: funciones, requisitos, cargos ofertados y ubicación; las versiones anteriores pueden diferir.'],
          ['Resoluciones 076, 108, 133, 212 y 243 de 2026', 'Forman la cadena de reglas y modificaciones del concurso. Debe revisarse qué disposición cambia cada condición antes de dar una cifra o requisito por definitivo.'],
          ['Manual de funciones institucional', 'Ayuda a comprender el propósito y las tareas, sin reemplazar las condiciones particulares del formato de convocatoria.'],
          ['Priorización de módulos de Umbral', 'Es una decisión pedagógica para organizar el estudio; no equivale a una tabla oficial de preguntas por tema o profesión.'],
        ],
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Qué puedes apoyar y qué no debes atribuirte',
        columns: ['Situación de trabajo', 'Límite de la respuesta profesional'],
        rows: [
          ['Apoyo en etapa de instrucción', 'Organizar antecedentes, identificar lo que falta y preparar un análisis conforme a las tareas asignadas; no asumir potestades decisorias por el solo hecho de ser profesional.'],
          ['Informe sobre un documento o registro', 'Explicar fuente, hallazgo, método, incertidumbres y alcance; no convertir el informe en una declaración automática de responsabilidad.'],
          ['Acción preventiva o atención al ciudadano', 'Identificar la solicitud y el riesgo, verificar autoridad y canal de atención, y documentar seguimiento sin sustituir decisiones de otras dependencias.'],
        ],
      },
      {
        type: 'example',
        title: 'Del informe a la actuación correcta',
        text: 'Un profesional recibe una carpeta con una queja, un registro de correspondencia y un borrador de informe. Antes de proponer un trámite, separa la petición ciudadana de los hechos por verificar, identifica quién conoce cada asunto y prepara un informe documentado. La función de apoyo no autoriza por sí sola firmar una decisión disciplinaria.',
      },
    ],
    3: [
      {
        type: 'trap',
        title: 'Experiencia técnica no equivale a competencia jurídica',
        text: 'Que el profesional comprenda un sistema, un contrato o un indicador no le concede automáticamente competencia para decidir, sancionar o declarar probado un hecho. En el examen diferencia el producto que puede elaborar, el soporte que debe preservar y la autoridad a la que corresponde adoptar una decisión.',
      },
    ],
  },
  'pgn-m1': {
    1: [
      {
        type: 'comparison',
        title: 'Conceptos parecidos que producen consecuencias distintas',
        columns: ['Distinción', 'Microejemplo de aplicación'],
        rows: [
          ['Actuación / acto administrativo', 'Solicitar un documento puede ser un paso de trámite; una decisión formal que resuelve una situación jurídica requiere analizar sus propios requisitos. No toda actuación es una decisión final.'],
          ['Competencia / conocimiento del tema', 'Un asesor puede conocer la norma, pero solo la autoridad habilitada actúa en la materia y etapa que le corresponden.'],
          ['Comunicar / notificar', 'Informar que existe una decisión no demuestra automáticamente que se surtió la notificación exigida para producir efectos o contar términos.'],
          ['Afirmación / prueba', 'Un informe o una queja puede originar una verificación, pero la alegación no se convierte en hecho demostrado por aparecer en el expediente.'],
          ['Fecha / término', 'Una fecha aislada no permite decidir si algo venció: identifica el hito legal de inicio, la unidad de cómputo y la regla del procedimiento.'],
        ],
      },
    ],
    2: [
      {
        type: 'example',
        title: 'El error de citar una norma verdadera',
        text: 'Una oficina recibe un escrito sobre hechos fuera de sus funciones. Un funcionario propone resolverlo porque encontró una norma que describe correctamente el procedimiento. El orden adecuado no empieza por copiar esa norma: primero identifica el objeto del escrito, verifica la competencia de la oficina y determina la actuación procedente, con soporte de la remisión cuando corresponda.',
      },
    ],
    3: [
      {
        type: 'comparison',
        title: 'Antes de responder, verifica cinco cosas',
        columns: ['Control', 'Pregunta útil'],
        rows: [
          ['Hecho', '¿Qué ocurrió y qué proviene solo de una afirmación del interesado?'],
          ['Autoridad', '¿Quién tiene atribución legal para realizar la actuación concreta?'],
          ['Etapa', '¿Estamos recibiendo, tramitando, probando, decidiendo o notificando?'],
          ['Evidencia', '¿Qué documento, constancia o medio permite comprobar el paso anterior?'],
          ['Efecto', '¿Qué cambia jurídicamente con la actuación y cuáles son sus límites?'],
        ],
      },
    ],
  },
  'pgn-m2': {
    1: [
      {
        type: 'comparison',
        title: 'De una cifra memorizada a una regla que puedes aplicar',
        columns: ['Pregunta de estudio', 'Ejemplo: indagación previa disciplinaria'],
        rows: [
          ['¿Cuándo procede?', 'Cuando existe duda sobre la identificación o individualización del posible autor, según el artículo 208 del Código General Disciplinario, modificado por la Ley 2094 de 2021.'],
          ['¿Cuál es el término general?', 'Seis meses. La cifra sola no permite responder un caso si no se verifica el supuesto que habilita la indagación.'],
          ['¿Existe una particularidad?', 'En investigaciones por violación de derechos humanos o del derecho internacional humanitario, el término puede extenderse por otros seis meses. No es una prórroga automática para cualquier asunto.'],
          ['¿Cómo culmina?', 'Con archivo definitivo o auto de apertura de investigación, conforme a las condiciones del artículo 208.'],
          ['¿Qué comprobar en una pregunta?', 'Duda sobre autoría, materia investigada, etapa, término aplicable y decisión procedente.'],
        ],
      },
      {
        type: 'tip',
        title: 'Regla de estudio',
        text: 'Escribe la norma en una frase condicional: «si ocurre este supuesto y actúa esta autoridad en esta etapa, procede esta actuación con estos límites». Comprueba después cada componente en la fuente. Un número de artículo o un plazo aprendido de memoria no reemplaza el supuesto de aplicación.',
      },
    ],
    2: [
      {
        type: 'comparison',
        title: 'Cuaderno de errores que sí cambia tu siguiente intento',
        columns: ['Registro breve', 'Qué anotar'],
        rows: [
          ['Hecho que pasé por alto', 'La palabra o circunstancia que cambiaba el problema: autor no individualizado, etapa, competencia o excepción.'],
          ['Regla correcta', 'Fuente, supuesto, plazo o efecto jurídico y por qué se aplica aquí.'],
          ['Razón del distractor', 'Qué requisito omite o qué conclusión adelanta la opción que elegí.'],
          ['Nueva transferencia', 'Cómo cambiaría la respuesta si se modificara un hecho verdaderamente relevante.'],
        ],
      },
    ],
    3: [
      {
        type: 'example',
        title: 'Dos casos con la misma cifra, pero preguntas distintas',
        text: 'Caso A: una queja con posible relevancia disciplinaria no permite individualizar al presunto autor; el artículo 208 ofrece la ruta para valorar la indagación previa. Caso B: el presunto autor está identificado y el asunto exige determinar la actuación correspondiente a esa situación. Repetir «seis meses» no responde ambos casos; primero debe verificarse si corresponde siquiera la indagación.',
      },
      {
        type: 'trap',
        title: 'El plazo no autoriza a saltarse el presupuesto',
        text: 'No concluyas que toda noticia disciplinaria debe pasar por una indagación de seis meses. Tampoco extiendas automáticamente el término sin el supuesto legal especial. Evalúa hechos, autoría, etapa y texto vigente antes de elegir la opción.',
      },
    ],
  },
}

export function foundationModuleBlocks(moduleId: string, lessonOrder: 1 | 2 | 3): LessonBlock[] {
  return blocks[moduleId]?.[lessonOrder] ?? []
}

export function foundationModuleExtraSourceIds(moduleId: string): string[] {
  if (moduleId === 'pgn-m0') return ['pgn-res-212-2026', 'pgn-res-243-2026']
  if (moduleId === 'pgn-m2') return ['ley-1952-2019', 'ley-2094-2021']
  return []
}
