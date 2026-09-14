import type { CourseModule, Lesson, LessonBlock, Question, QuestionOption } from '../../../src/types/course'
import { procuraduriaModuleBlueprints, type ProcuraduriaModuleBlueprint } from './blueprints'

const ACCENT = '#5F9E80'
const VERIFIED_AT = '2026-09-14'

function option(id: 'a' | 'b' | 'c', text: string, rationale: string): QuestionOption {
  return { id, text, rationale }
}

function conceptOptions(blueprint: ProcuraduriaModuleBlueprint, keyPointIndex = 0): QuestionOption[] {
  const correct = blueprint.keyPoints[keyPointIndex] ?? blueprint.core
  return [
    option('a', correct, 'Es consistente con la regla central explicada en el módulo.'),
    option('b', blueprint.distractors[0] ?? 'Actuar sin verificar competencia, etapa ni soporte.', 'Es un distractor porque omite una condición jurídica o metodológica esencial.'),
    option('c', blueprint.distractors[1] ?? 'Escoger la alternativa más rápida aunque no exista soporte suficiente.', 'Confunde eficiencia con una actuación sin fundamento o sin garantías suficientes.'),
  ]
}

function scenarioOptions(blueprint: ProcuraduriaModuleBlueprint): QuestionOption[] {
  return [
    option('a', blueprint.correct, `Es la actuación que mejor integra el enfoque de ${blueprint.title}: competencia, etapa, evidencia y límites del rol.`),
    option('b', blueprint.distractors[0] ?? 'Adoptar una conclusión inmediata sin ampliar la verificación.', 'Parece una salida rápida, pero adelanta una conclusión o desconoce un presupuesto relevante.'),
    option('c', blueprint.distractors[1] ?? 'No realizar ninguna actuación aunque exista una vía jurídicamente disponible.', 'Evita el problema en lugar de gestionarlo mediante la actuación procedente.'),
  ]
}

function buildQuestions(blueprint: ProcuraduriaModuleBlueprint): Question[] {
  const [s1, s2, s3, s4] = blueprint.steps
  const coreSources = blueprint.sourceIds
  const qBase = `${blueprint.id}-q`

  const questions: Question[] = [
    {
      id: `${qBase}1`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 2,
      stem: `Al estudiar “${blueprint.title}”, ¿cuál idea conviene conservar como regla de base?`,
      options: conceptOptions(blueprint, 0), correctOptionId: 'a',
      explanation: `La regla correcta es: ${blueprint.keyPoints[0] ?? blueprint.core} Esta idea debe comprenderse antes de memorizar detalles o excepciones.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}2`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'pjs', difficulty: 3,
      case: blueprint.scenario,
      stem: '¿Cuál es la actuación más sólida frente a la situación descrita?',
      options: scenarioOptions(blueprint), correctOptionId: 'a',
      explanation: `${blueprint.correct} La clave es no saltar directamente a la conclusión: el razonamiento debe respetar la competencia, la etapa, el soporte y los límites propios del rol.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}3`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 2,
      stem: `Dentro del método de análisis de “${blueprint.title}”, ¿qué debe hacerse primero?`,
      options: [
        option('a', s1 ?? 'Identificar primero el problema y sus presupuestos.', 'Es el punto de partida del método propuesto en el módulo.'),
        option('b', s3 ?? 'Escoger una conclusión antes de revisar la evidencia.', 'Esta actuación pertenece a una etapa posterior o presupone verificaciones previas.'),
        option('c', s4 ?? 'Cerrar el análisis antes de contrastar fuentes.', 'Es una etapa posterior y no puede reemplazar el análisis inicial.'),
      ],
      correctOptionId: 'a',
      explanation: `El orden importa. El primer movimiento es: ${s1 ?? blueprint.steps[0]}. Después se continúa con las verificaciones restantes.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}4`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 3,
      stem: `¿Cuál afirmación es compatible con el enfoque correcto de “${blueprint.title}”?`,
      options: conceptOptions(blueprint, 1), correctOptionId: 'a',
      explanation: `La afirmación compatible es: ${blueprint.keyPoints[1] ?? blueprint.core} Los distractores trasladan al caso atajos que el módulo enseña a evitar.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}5`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'pjs', difficulty: 4,
      case: `${blueprint.scenario} Antes de adoptar una decisión definitiva aparece información adicional que obliga a revisar uno de los supuestos iniciales.`,
      stem: '¿Qué enfoque preserva mejor la calidad jurídica y técnica de la actuación?',
      options: [
        option('a', `Reevaluar el supuesto afectado, contrastar la nueva información y mantener como guía esta regla: ${blueprint.correct}`, 'Una decisión profesional debe poder actualizarse cuando cambia un hecho relevante y seguir anclada en la regla aplicable.'),
        option('b', blueprint.distractors[0] ?? 'Mantener la conclusión inicial aunque la nueva evidencia la debilite.', 'Es un ejemplo de sesgo de confirmación o de salto procesal.'),
        option('c', 'Descartar toda la investigación previa y comenzar de cero sin distinguir qué información sigue siendo válida.', 'La aparición de nueva información no vuelve inútil todo lo actuado; debe evaluarse su efecto concreto.'),
      ],
      correctOptionId: 'a',
      explanation: `En nivel avanzado no basta reconocer la regla: hay que saber actualizar el razonamiento sin perder trazabilidad. ${blueprint.correct}`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}6`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 4,
      stem: `¿Cuál secuencia representa mejor el método completo propuesto para “${blueprint.title}”?`,
      options: [
        option('a', blueprint.steps.join(' → '), 'Conserva el orden pedagógico y operativo del módulo.'),
        option('b', [s4, s3, s2, s1].filter(Boolean).join(' → '), 'Invierte el razonamiento y sitúa la decisión antes de los presupuestos que la justifican.'),
        option('c', [s1, s4, s2, s3].filter(Boolean).join(' → '), 'Empieza correctamente, pero adelanta una etapa de cierre antes de completar verificaciones intermedias.'),
      ],
      correctOptionId: 'a',
      explanation: `La secuencia correcta es ${blueprint.steps.join(' → ')}. En casos complejos, respetar el orden evita aplicar figuras verdaderas en momentos incorrectos.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}7`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 3,
      stem: `¿Qué criterio ayuda mejor a diferenciar dominio real de memorización superficial en “${blueprint.title}”?`,
      options: [
        option('a', `Poder explicar esta regla, reconocer su límite y aplicarla a un hecho nuevo: ${blueprint.keyPoints[2] ?? blueprint.core}`, 'El dominio exige recuperar la regla y transferirla a una situación distinta.'),
        option('b', 'Recordar literalmente el nombre del tema aunque no se pueda identificar cuándo aplica.', 'Reconocer una etiqueta no demuestra comprensión ni capacidad de aplicación.'),
        option('c', 'Elegir siempre la actuación más intensa porque suele parecer más completa.', 'La intensidad no sustituye competencia, etapa, evidencia ni proporcionalidad.'),
      ],
      correctOptionId: 'a',
      explanation: `En este módulo debes poder recuperar la regla y sus límites. ${blueprint.keyPoints[2] ?? blueprint.core}`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}8`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'pjs', difficulty: 4,
      case: `${blueprint.scenario} Un compañero propone como salida: “${blueprint.distractors[0] ?? 'actuar inmediatamente sin verificar los presupuestos'}”.`,
      stem: '¿Cuál es la mejor forma de evaluar esa propuesta?',
      options: [
        option('a', `Contrastar la propuesta con hechos, competencia, etapa y evidencia, y corregirla si desconoce esta orientación: ${blueprint.correct}`, 'La respuesta evalúa la actuación con el método del módulo en lugar de aceptarla por su apariencia de seguridad.'),
        option('b', 'Aceptarla porque una propuesta decidida siempre es preferible a pedir verificaciones adicionales.', 'Confunde seguridad expresiva con corrección jurídica o técnica.'),
        option('c', 'Rechazarla únicamente porque fue planteada por otra persona, sin revisar su fundamento.', 'La autoría de la propuesta no reemplaza el análisis de contenido.'),
      ],
      correctOptionId: 'a',
      explanation: `El distractor es plausible precisamente porque contiene una intuición reconocible. La forma correcta de desmontarlo es contrastarlo con la regla y el orden del módulo: ${blueprint.correct}`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}9`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'pjs', difficulty: 5,
      case: `${blueprint.scenario} Dos fuentes del expediente parecen conducir a conclusiones diferentes y ninguna puede descartarse de manera inmediata.`,
      stem: '¿Qué actuación demuestra un nivel avanzado de razonamiento?',
      options: [
        option('a', `Precisar qué afirma cada fuente, verificar su alcance, buscar la explicación de la contradicción y decidir solo después de aplicar el método ${blueprint.steps.join(' → ')}.`, 'La contradicción se gestiona delimitando alcance, confiabilidad y relación con el hecho a probar.'),
        option('b', 'Escoger la fuente que confirme la hipótesis inicial y omitir la otra para mantener una teoría coherente.', 'Introduce sesgo de confirmación y deteriora la valoración integral.'),
        option('c', 'Concluir que ninguna fuente sirve porque existe una contradicción entre ellas.', 'Una contradicción exige análisis; no vuelve automáticamente inútiles todas las fuentes.'),
      ],
      correctOptionId: 'a',
      explanation: `El nivel avanzado exige tolerar incertidumbre y resolverla con método. En “${blueprint.title}” la conclusión debe permanecer trazable a hechos, regla y evidencia.`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
    {
      id: `${qBase}10`, moduleId: blueprint.id, skillIds: blueprint.skillIds, type: 'single', difficulty: 4,
      stem: `Frente a un caso de “${blueprint.title}”, ¿qué límite profesional debe mantenerse incluso cuando la evidencia parece convincente?`,
      options: [
        option('a', 'Distinguir lo que los hechos permiten afirmar, la inferencia que puede sostenerse y la decisión que corresponde a la autoridad competente.', 'Evita convertir un hallazgo o una inferencia en una conclusión que exceda el rol o la etapa.'),
        option('b', 'Transformar toda inferencia plausible en una conclusión definitiva para evitar demoras.', 'Una inferencia plausible no equivale a certeza ni habilita a exceder la competencia.'),
        option('c', 'Evitar documentar dudas o límites para que el informe o decisión parezca más contundente.', 'Ocultar límites reduce trazabilidad y calidad de la motivación.'),
      ],
      correctOptionId: 'a',
      explanation: `La formación avanzada exige reconocer límites. En este módulo la actuación correcta sigue siendo: ${blueprint.correct}`,
      sourceIds: coreSources, verifiedAt: VERIFIED_AT,
    },
  ]

  return questions
}

function lessonSources(blueprint: ProcuraduriaModuleBlueprint) {
  return { type: 'sources' as const, sourceIds: blueprint.sourceIds }
}

function specializedFoundationBlocks(blueprint: ProcuraduriaModuleBlueprint): LessonBlock[] {
  if (blueprint.id === 'pgn-m0') return [{
    type: 'comparison',
    title: 'Las 11 funciones del 3PU-15 convertidas en ruta de estudio',
    columns: ['Función del empleo', 'Qué debes aprender para responder casos'],
    rows: [
      ['1. Apoyar procesos en etapa de instrucción', 'Competencia, noticia disciplinaria, investigación, cierre, archivo/cargos y separación instrucción–juzgamiento.'],
      ['2. Acciones preventivas, control de gestión e intervención', 'Función preventiva, análisis de riesgos, políticas públicas, indicadores e intervención.'],
      ['3. Atención de población vulnerable', 'Derechos fundamentales, enfoque diferencial, accesibilidad, trato digno y rutas institucionales.'],
      ['4. Practicar y recaudar pruebas', 'Necesidad, carga, pertinencia, conducencia, utilidad, legalidad, contradicción y medios de prueba.'],
      ['5. Evacuar despachos comisorios', 'Competencia, alcance de la comisión, práctica de diligencias, constancias y devolución oportuna.'],
      ['6. Recaudar, procesar y analizar información profesional', 'Calidad de datos, metodología, análisis técnico, trazabilidad y límites de inferencia.'],
      ['7. Atender usuarios, consultas y derechos de petición', 'Ley 1755, competencia, términos, respuesta de fondo, traslado y atención al ciudadano.'],
      ['8. Informes técnicos y apoyo técnico-científico', 'Estructura de informe, evidencia, metodología, hallazgo, inferencia, limitaciones y conclusión técnica.'],
      ['9. Registrar actuaciones y mantener sistemas', 'Sistemas de información, calidad, oportunidad, integridad, accesos y registro verificable.'],
      ['10. Orientar sistemas de gestión', 'Calidad, procesos, riesgos, indicadores, PHVA, seguimiento y mejora.'],
      ['11. Otras funciones compatibles', 'Principio de competencia: una asignación adicional debe conservar nivel, tipo, grado y propósito del cargo.'],
    ],
  }]

  if (blueprint.id === 'pgn-m1') return [{
    type: 'comparison',
    title: 'Diccionario mínimo para no perderte al empezar',
    columns: ['Término', 'Significado operativo'],
    rows: [
      ['Norma', 'Regla jurídica que atribuye facultades, impone deberes o reconoce derechos; debe ubicarse en su jerarquía y vigencia.'],
      ['Competencia', 'Habilitación jurídica para que una autoridad actúe. Saber del tema no reemplaza tener competencia.'],
      ['Actuación', 'Paso realizado dentro de un procedimiento: ordenar una prueba, comunicar, decidir, registrar, entre otros.'],
      ['Acto administrativo', 'Decisión de autoridad administrativa capaz de producir efectos jurídicos bajo determinados requisitos.'],
      ['Expediente', 'Conjunto organizado y trazable de actuaciones, documentos, evidencias y constancias de un asunto.'],
      ['Término', 'Periodo jurídico para actuar. Debe saberse desde cuándo corre, cómo se cuenta y qué efecto tiene su vencimiento.'],
      ['Notificación', 'Mecanismo jurídico para poner una decisión en conocimiento en la forma prevista por la norma.'],
      ['Recurso', 'Mecanismo de impugnación que solo procede cuando la ley lo permite, por legitimado y dentro del término.'],
      ['Prueba', 'Elemento o medio incorporado legalmente para acreditar o desvirtuar hechos relevantes.'],
      ['Motivación', 'Explicación verificable de hechos, normas, valoración y razonamiento que sostienen una decisión.'],
    ],
  }]

  if (blueprint.id === 'pgn-m19') return [{
    type: 'comparison',
    title: 'Arquitectura general de cualquier proceso',
    columns: ['Pregunta', 'Qué debes ubicar'],
    rows: [
      ['¿Quién actúa?', 'Autoridad competente, sujetos procesales e intervinientes.'],
      ['¿Sobre qué se decide?', 'Hechos y problema jurídico delimitados.'],
      ['¿En qué momento?', 'Etapa procesal y actuaciones disponibles en ese momento.'],
      ['¿Con qué soporte?', 'Pruebas, documentos, constancias y argumentos incorporados válidamente.'],
      ['¿Cómo se contradice?', 'Defensa, solicitudes, recursos, alegaciones y oportunidades legales.'],
      ['¿Qué pasa si hay un defecto?', 'Corrección, saneamiento o nulidad según trascendencia y regla aplicable.'],
    ],
  }]

  if (blueprint.id === 'pgn-m25') return [{
    type: 'process',
    title: 'De una noticia a una ruta procesal',
    nodes: [
      { id: 'n1', label: 'Noticia / queja / informe', hint: 'Extrae hechos y soportes; no adoptes la calificación del denunciante como verdad jurídica.' },
      { id: 'n2', label: 'Competencia y sujeto', hint: 'Verifica si la PGN y la dependencia pueden conocer el asunto.' },
      { id: 'n3', label: 'Suficiencia inicial', hint: 'Distingue ausencia manifiesta de relevancia de una duda que puede requerir actuación.' },
      { id: 'n4', label: 'Ruta procedente', hint: 'Inhibición, indagación, investigación u otra actuación según presupuestos reales.' },
    ],
  }]

  if (blueprint.id === 'pgn-m35') return [{
    type: 'comparison',
    title: 'Cuatro ideas que sostienen todo el Derecho probatorio disciplinario',
    columns: ['Idea', 'Cómo cambia tu decisión'],
    rows: [
      ['Necesidad de la prueba', 'Una decisión sobre hechos debe apoyarse en prueba incorporada y valorada; una sospecha no llena el vacío.'],
      ['Carga del Estado', 'La autoridad debe obtener el soporte necesario dentro de sus competencias y garantías; no puede trasladar al disciplinable el deber de demostrar su inocencia.'],
      ['Imparcialidad', 'La investigación busca con igual rigor lo que compromete y lo que favorece al disciplinable.'],
      ['Presunción de inocencia', 'La duda no se resuelve anticipando responsabilidad; el estándar y la etapa importan.'],
    ],
  }]

  if (blueprint.id === 'pgn-m13') return [{
    type: 'comparison',
    title: 'Competencia: cuatro preguntas antes de actuar',
    columns: ['Filtro', 'Qué debes comprobar'],
    rows: [
      ['Sujeto', 'Quién es la persona vinculada y qué régimen/autoridad puede conocer de su conducta.'],
      ['Materia y función', 'Qué tipo de asunto es y qué órgano tiene atribución para la actuación concreta.'],
      ['Territorio / asignación', 'Dónde ocurrió o se gestiona el asunto y cómo fue repartido, asignado, delegado o comisionado.'],
      ['Etapa y alcance', 'Qué puede hacer esa autoridad en este momento; recibir una comisión para una diligencia no equivale a recibir todo el proceso.'],
    ],
  }]

  if (blueprint.id === 'pgn-m20') return [{
    type: 'comparison',
    title: 'No confundas hecho irregular con responsabilidad disciplinaria',
    columns: ['Capa', 'Pregunta de estudio'],
    rows: [
      ['Hecho', '¿Qué ocurrió y qué parte está realmente acreditada?'],
      ['Deber funcional', '¿Qué deber, prohibición o regla concreta guarda relación con la conducta?'],
      ['Ilicitud sustancial', '¿Cómo se compromete sustancialmente el deber funcional y existe una justificación relevante?'],
      ['Culpabilidad', '¿Qué evidencia permite analizar dolo o culpa sin responsabilidad objetiva?'],
      ['Garantías', '¿La conclusión se obtuvo respetando competencia, defensa, contradicción, presunción de inocencia y debido proceso?'],
    ],
  }]

  if (blueprint.id === 'pgn-m26') return [{
    type: 'process',
    title: 'Indagación previa: pregunta antes de investigar a una persona determinada',
    nodes: [
      { id: 'i1', label: 'Noticia con posible relevancia', hint: 'Debe existir un punto de partida concreto; la indagación no es una búsqueda ilimitada.' },
      { id: 'i2', label: 'Duda sobre autor o partícipe', hint: 'La finalidad pedagógica es entender por qué todavía no se individualiza con seguridad a quien debe investigarse.' },
      { id: 'i3', label: 'Actuaciones necesarias y proporcionales', hint: 'Busca la información indispensable para resolver la duda inicial, preservando garantías y trazabilidad.' },
      { id: 'i4', label: 'Decisión de salida', hint: 'Con lo recaudado se define la ruta jurídicamente procedente; no se prolonga por inercia.' },
    ],
  }]

  if (blueprint.id === 'pgn-m27') return [{
    type: 'comparison',
    title: 'Qué debe poder responder una investigación disciplinaria bien orientada',
    columns: ['Pregunta', 'Resultado esperado'],
    rows: [
      ['¿Qué hecho se investiga?', 'Una descripción delimitada en tiempo, modo y contexto, no una acusación genérica.'],
      ['¿Quién podría intervenir?', 'Individualización sustentada, sin convertir vinculación en presunción de responsabilidad.'],
      ['¿Qué deber funcional importa?', 'La regla funcional que da sentido disciplinario al hecho.'],
      ['¿Qué falta por probar?', 'Vacíos, contradicciones e hipótesis alternativas convertidos en necesidades probatorias.'],
      ['¿Qué favorece y qué compromete?', 'Búsqueda imparcial de elementos en ambos sentidos.'],
    ],
  }]

  if (blueprint.id === 'pgn-m30') return [{
    type: 'comparison',
    title: 'Archivo y cargos responden preguntas diferentes',
    columns: ['Ruta', 'Qué debes verificar antes de escogerla'],
    rows: [
      ['Archivo', 'Si los presupuestos jurídicos y probatorios permiten terminar la actuación en esa etapa y con la motivación correspondiente.'],
      ['Formulación de cargos', 'Si existe base fáctica, jurídica y probatoria suficiente para concretar la imputación conforme al estándar y etapa aplicables.'],
      ['Nunca por intuición', 'La gravedad aparente del relato o la presión externa no reemplazan el análisis de evidencia y requisitos.'],
    ],
  }]

  if (blueprint.id === 'pgn-m33') return [{
    type: 'steps',
    title: 'Despacho comisorio sin exceder el encargo',
    items: [
      'Lee exactamente qué diligencia fue comisionada, quién la ordenó y qué límites contiene.',
      'Verifica competencia para practicar la actuación encomendada y prepara citaciones, medios o soportes necesarios.',
      'Practica la diligencia respetando garantías y documenta incidencias, resultados y elementos recaudados.',
      'Devuelve oportunamente la actuación al comitente; no asumas decisiones que no forman parte del objeto de la comisión.',
    ],
  }]

  if (blueprint.id === 'pgn-m38') return [{
    type: 'comparison',
    title: 'De hipótesis a plan probatorio',
    columns: ['Elemento', 'Ejemplo de pregunta útil'],
    rows: [
      ['Hecho a probar', '¿Qué afirmación concreta debe confirmarse o descartarse?'],
      ['Hipótesis', '¿Qué explicaciones compatibles con los datos existen, incluida una alternativa favorable al disciplinable?'],
      ['Fuente posible', '¿Qué documento, testimonio, registro, inspección o pericia puede aportar información pertinente?'],
      ['Criterio de decisión', '¿Qué resultado de la prueba fortalecería, debilitaría o volvería irrelevante la hipótesis?'],
      ['Trazabilidad', '¿Cómo quedará documentado que la prueba fue solicitada, obtenida, incorporada y valorada?'],
    ],
  }]

  if (blueprint.id === 'pgn-m39') return [{
    type: 'steps',
    title: 'Sana crítica sin convertirla en opinión personal',
    items: [
      'Describe qué aporta realmente cada medio de prueba y qué limitaciones tiene.',
      'Contrasta consistencia interna y externa con los demás elementos del expediente.',
      'Explica las inferencias mediante reglas de lógica, conocimientos técnicos/científicos aplicables y experiencia razonable, sin usar estereotipos como atajo.',
      'Analiza hipótesis alternativas y contradicciones importantes antes de cerrar la conclusión.',
      'Motiva el resultado de forma que otra persona pueda reconstruir el camino entre evidencia y conclusión.',
    ],
  }]

  if (blueprint.id === 'pgn-m40') return [{
    type: 'comparison',
    title: 'Documento digital: contenido, contexto e integridad',
    columns: ['Capa', 'Pregunta de control'],
    rows: [
      ['Contenido', '¿Qué dice o muestra el archivo, mensaje o registro?'],
      ['Origen', '¿De qué sistema, cuenta, dispositivo, exportación o repositorio proviene?'],
      ['Metadatos', '¿Qué información contextual es confiable y qué pudo cambiar al copiar, exportar o convertir?'],
      ['Integridad', '¿Existe una forma documentada de verificar que el elemento analizado corresponde al preservado?'],
      ['Corroboración', '¿Qué otra fuente independiente confirma o contradice la interpretación?'],
    ],
  }]

  if (blueprint.id === 'pgn-m42') return [{
    type: 'comparison',
    title: 'Perito, experto y operador jurídico: no hacen el mismo trabajo',
    columns: ['Rol', 'Límite pedagógico'],
    rows: [
      ['Experto / perito', 'Aplica conocimientos especializados, explica método, resultados, incertidumbre y alcance técnico.'],
      ['Autoridad instructora', 'Define necesidades del expediente, incorpora/contradice la prueba y conserva dirección procesal dentro de su competencia.'],
      ['Autoridad decisora', 'Valora jurídicamente el conjunto probatorio y adopta la decisión que le corresponde.'],
      ['Regla Umbral', 'Una conclusión técnica fuerte no autoriza por sí sola al experto a declarar dolo, culpa o responsabilidad disciplinaria.'],
    ],
  }]

  if (blueprint.id === 'pgn-m44') return [{
    type: 'steps',
    title: 'Preservación digital: cadena verificable, no ritual',
    items: [
      'Identifica el elemento, su fuente y el estado en que fue recibido o adquirido.',
      'Reduce modificaciones innecesarias y documenta quién tuvo acceso, cuándo y para qué.',
      'Genera controles de integridad cuando sean técnicamente apropiados y registra algoritmo, herramienta y resultado.',
      'Trabaja sobre copias controladas cuando el método lo permita, conservando el original o fuente de referencia.',
      'Documenta transferencias, análisis, incidentes y limitaciones para que la trazabilidad pueda ser revisada después.',
    ],
  }]

  if (blueprint.id === 'pgn-m45') return [{
    type: 'comparison',
    title: 'Preventivo no significa disciplinario anticipado',
    columns: ['Enfoque', 'Pregunta central'],
    rows: [
      ['Preventivo', '¿Qué riesgo amenaza derechos, orden jurídico, patrimonio o gestión pública y qué actuación puede evitar/reducir su materialización dentro de competencia?'],
      ['Disciplinario', '¿Existe una conducta atribuible a sujeto disciplinable que deba investigarse bajo el procedimiento y garantías correspondientes?'],
      ['Control de gestión', '¿Qué resultado, indicador, proceso o compromiso público necesita seguimiento y evidencia?'],
      ['Regla de separación', 'Una alerta preventiva puede originar otros análisis, pero no equivale por sí sola a una declaración de falta o responsabilidad.'],
    ],
  }]

  if (blueprint.id === 'pgn-m50') return [{
    type: 'process',
    title: 'Ciclo contractual para leer un caso sin memorizar modalidades aisladas',
    nodes: [
      { id: 'c1', label: 'Necesidad y planeación', hint: 'Problema público, estudios, presupuesto, riesgos, requisitos y justificación.' },
      { id: 'c2', label: 'Selección', hint: 'Regla/modalidad aplicable, publicidad, criterios objetivos y comparación de ofertas cuando corresponda.' },
      { id: 'c3', label: 'Celebración y garantías', hint: 'Perfeccionamiento, requisitos de ejecución y distribución de riesgos conforme al caso.' },
      { id: 'c4', label: 'Ejecución y seguimiento', hint: 'Obligaciones, supervisión/interventoría, modificaciones justificadas, pagos y evidencias.' },
      { id: 'c5', label: 'Cierre', hint: 'Terminación, liquidación cuando proceda, obligaciones posteriores y archivo/trazabilidad.' },
    ],
  }]

  if (blueprint.id === 'pgn-m57') return [{
    type: 'comparison',
    title: 'Sistema de gestión: del proceso a la mejora',
    columns: ['Capa', 'Pregunta práctica'],
    rows: [
      ['Proceso', '¿Qué entradas recibe, qué actividades realiza, qué producto entrega y a quién?'],
      ['Riesgo / control', '¿Qué puede impedir el resultado y qué control reduce probabilidad o impacto?'],
      ['Indicador', '¿Qué dato muestra desempeño sin confundir actividad con resultado?'],
      ['Seguimiento', '¿Qué desviación existe, qué causa puede explicarla y qué evidencia la soporta?'],
      ['Mejora', '¿Qué acción corrige o previene recurrencia y cómo se verifica su eficacia?'],
    ],
  }]

  if (blueprint.id === 'pgn-m58') return [{
    type: 'process',
    title: 'Ciclo de vida de un expediente trazable',
    nodes: [
      { id: 'g1', label: 'Recepción / producción', hint: 'Identifica origen, fecha, asunto y responsable sin perder contexto.' },
      { id: 'g2', label: 'Registro y clasificación', hint: 'Ubica el documento o evidencia en el expediente y serie que corresponda.' },
      { id: 'g3', label: 'Trámite y consulta', hint: 'Mantén orden, control de acceso, versiones y constancias de actuación.' },
      { id: 'g4', label: 'Cierre y organización', hint: 'Completa índices, metadatos, folios/relaciones y controles internos aplicables.' },
      { id: 'g5', label: 'Retención / disposición', hint: 'Aplica instrumentos archivísticos y reglas de conservación; no elimines por conveniencia.' },
    ],
  }]

  if (blueprint.id === 'pgn-m74') return [{
    type: 'comparison',
    title: 'C-E-P-P-A: cinco filtros para no saltar al artículo que recuerdas',
    columns: ['Filtro', 'Pregunta'],
    rows: [
      ['C · Competencia', '¿Quién puede actuar y cuál es el alcance real de su atribución?'],
      ['E · Etapa', '¿En qué momento del procedimiento o de la gestión está el caso?'],
      ['P · Problema', '¿Cuál es exactamente la pregunta jurídica, técnica o de gestión que debe resolverse?'],
      ['P · Prueba', '¿Qué está acreditado, qué falta y qué contradicciones siguen abiertas?'],
      ['A · Actuación', '¿Qué respuesta es procedente, proporcional, motivable y compatible con las garantías?'],
    ],
  }]

  if (blueprint.id === 'pgn-m60') return [{
    type: 'comparison',
    title: 'Calidad de información antes de usar un dato como soporte',
    columns: ['Dimensión', 'Pregunta de control'],
    rows: [
      ['Exactitud', '¿El dato representa correctamente el hecho o atributo registrado?'],
      ['Completitud', '¿Faltan campos, periodos, eventos o registros necesarios para interpretar el resultado?'],
      ['Consistencia', '¿El mismo hecho coincide entre sistemas, tablas, documentos y cortes?'],
      ['Oportunidad', '¿El dato estaba actualizado al momento relevante del caso?'],
      ['Trazabilidad', '¿Puede reconstruirse quién registró, modificó, consultó o exportó la información y cuándo?'],
      ['Acceso', '¿La persona o cuenta tenía permisos válidos para la acción observada? Tener acceso no prueba por sí mismo autoría material.'],
    ],
  }]

  if (blueprint.id === 'pgn-m61') return [{
    type: 'steps',
    title: 'Cómo pasar de un log a una inferencia técnicamente defendible',
    items: [
      'Preserva el registro original o una copia verificable y documenta fuente, zona horaria y periodo.',
      'Identifica qué evento registra realmente el sistema: autenticación, consulta, modificación, exportación u otro.',
      'Relaciona cuenta, dispositivo, IP, sesión y contexto sin asumir que identidad lógica equivale automáticamente a persona física.',
      'Busca eventos correlacionados y fuentes independientes que confirmen o debiliten la hipótesis.',
      'Expresa la conclusión con alcance y limitaciones: qué demuestra, qué sugiere y qué no permite afirmar el registro.',
    ],
  }]

  if (blueprint.id === 'pgn-m64') return [{
    type: 'comparison',
    title: 'Estructura mínima de un informe técnico informático',
    columns: ['Sección', 'Contenido esperado'],
    rows: [
      ['Objeto y alcance', 'Pregunta técnica encomendada, periodo, sistemas y límites de la revisión.'],
      ['Fuentes y preservación', 'Archivos, logs, consultas, hashes, exportaciones, procedimientos y controles de integridad.'],
      ['Metodología', 'Pasos reproducibles usados para filtrar, correlacionar, comparar o validar.'],
      ['Hallazgos', 'Hechos técnicos observables separados de interpretaciones.'],
      ['Análisis', 'Inferencias sustentadas, hipótesis alternativas y contradicciones encontradas.'],
      ['Limitaciones', 'Datos faltantes, retención, accesos, relojes, cuentas compartidas u otras restricciones.'],
      ['Conclusión técnica', 'Respuesta proporcional al alcance; no declaración de responsabilidad disciplinaria, penal o fiscal.'],
    ],
  }]

  return []
}


function specializedAuditBlocks(blueprint: ProcuraduriaModuleBlueprint): LessonBlock[] {
  switch (blueprint.id) {
    case 'pgn-m2': return [{
      type:'steps', title:'Cómo estudiar una norma sin memorizarla a ciegas', items:[
        'Pregunta primero qué problema regula la norma y quién es su destinatario.',
        'Identifica supuesto de hecho, autoridad competente, actuación permitida/obligatoria y efecto jurídico.',
        'Conecta el artículo con la etapa anterior y posterior del procedimiento para no aislarlo.',
        'Recupera la regla sin mirar, resuelve un caso nuevo y vuelve a la fuente para corregir tu explicación.'],
    }]
    case 'pgn-m3': return [{
      type:'comparison', title:'Prioridad de estudio: peso oficial vs. riesgo de error', columns:['Criterio','Cómo usarlo'], rows:[
        ['Peso de prueba','Conocimientos domina la ponderación y además es eliminatoria; exige continuidad de estudio y práctica.'],
        ['Conexión funcional','Instrucción, prueba y competencia merecen profundidad porque aparecen directamente en funciones del empleo.'],
        ['Debilidad personal','El diagnóstico y el cuaderno de errores deben redistribuir tiempo hacia fallos persistentes.'],
        ['Cobertura','Un tema de menor prioridad no desaparece; recibe una dosis proporcional para evitar vacíos completos.'],
      ],
    }]
    case 'pgn-m4': return [{
      type:'comparison', title:'Tres niveles de afirmación en un informe técnico', columns:['Nivel','Ejemplo de formulación'], rows:[
        ['Hecho observado','“El registro X contiene un evento de autenticación a las 08:15.”'],
        ['Inferencia técnica','“El patrón es compatible con el uso de la cuenta desde este origen, sujeto a las limitaciones descritas.”'],
        ['Conclusión jurídica','“Existe dolo / responsabilidad disciplinaria.” Esta valoración no se adopta solo desde el análisis técnico.'],
        ['Regla','Tu fortaleza profesional aumenta cuando explicas claramente dónde termina lo demostrable y dónde empieza la valoración ajena a tu competencia.'],
      ],
    }]
    case 'pgn-m5': return [{
      type:'comparison', title:'Constitución: cuatro filtros que aparecen en casi todo el curso', columns:['Filtro','Aplicación'], rows:[
        ['Legalidad','La autoridad solo puede ejercer potestades atribuidas por el ordenamiento.'],
        ['Debido proceso','Competencia, defensa, contradicción, imparcialidad y formas esenciales limitan la actuación.'],
        ['Igualdad / dignidad','El trato institucional debe evitar discriminación y remover barreras cuando corresponda.'],
        ['Función administrativa','Eficacia y celeridad se ejercen junto con moralidad, imparcialidad, publicidad y demás principios, no contra ellos.'],
      ],
    }]
    case 'pgn-m6': return [{
      type:'comparison', title:'Mapa mínimo del Estado para ubicar un caso', columns:['Componente','Pregunta'], rows:[
        ['Rama Ejecutiva','¿La entidad o autoridad administra, ejecuta política o presta servicio bajo la estructura ejecutiva?'],
        ['Rama Legislativa','¿El asunto se conecta con Congreso y función legislativa/control político?'],
        ['Rama Judicial','¿La decisión corresponde a una autoridad jurisdiccional?'],
        ['Órganos autónomos / control','¿La Constitución asigna una función separada, como Ministerio Público o control fiscal?'],
        ['Regla','No deduzcas competencia solo por “ser Estado”; ubica órgano, nivel y atribución específica.'],
      ],
    }]
    case 'pgn-m7': return [{
      type:'comparison', title:'Principios de función administrativa convertidos en decisiones', columns:['Principio','Señal de aplicación'], rows:[
        ['Imparcialidad','Decide con criterios verificables y gestiona conflictos que puedan sesgar la actuación.'],
        ['Publicidad','Permite conocimiento y control cuando corresponda, respetando reservas legales.'],
        ['Eficacia','Orienta la actuación al resultado legítimo sin eliminar garantías.'],
        ['Economía','Evita cargas y trámites innecesarios, no los requisitos esenciales.'],
        ['Celeridad','Previene demoras injustificadas; nunca habilita a saltar etapas obligatorias.'],
      ],
    }]
    case 'pgn-m8': return [{
      type:'comparison', title:'Una conducta puede abrir responsabilidades distintas', columns:['Ámbito','Pregunta básica'], rows:[
        ['Disciplinario','¿Se comprometió un deber funcional de un sujeto disciplinable con los presupuestos del CGD?'],
        ['Fiscal','¿Existe daño al patrimonio público y los demás elementos del régimen fiscal?'],
        ['Penal','¿La conducta encaja en un tipo penal y debe ser investigada por la autoridad penal competente?'],
        ['Administrativo / patrimonial','¿Existen efectos sobre el acto, contrato, reparación u otra consecuencia administrativa?'],
        ['Regla','Las responsabilidades pueden coexistir, pero una no se presume porque exista otra.'],
      ],
    }]
    case 'pgn-m9': return [{
      type:'comparison', title:'Territorio: autonomía no significa soberanía', columns:['Idea','Lectura correcta'], rows:[
        ['Descentralización','Distribuye competencias y gestión a entidades con autonomía dentro de Constitución y ley.'],
        ['Coordinación','Nación y territorios deben articular funciones cuando el asunto cruza niveles o competencias.'],
        ['Entidad territorial','Departamento, distrito o municipio tiene autoridades y competencias propias definidas normativamente.'],
        ['Caso PGN','La ubicación del hecho y calidad del sujeto pueden influir en la competencia territorial disciplinaria; no basta saber el nombre del municipio.'],
      ],
    }]
    case 'pgn-m10': return [{
      type:'comparison', title:'Ministerio Público y PGN: ubicación constitucional', columns:['Idea','Qué debes recordar'], rows:[
        ['Ministerio Público','Función constitucional de guarda y promoción de derechos, protección del interés público y vigilancia de conducta oficial dentro de sus atribuciones.'],
        ['Procurador General','Supremo director del Ministerio Público en el marco constitucional y legal.'],
        ['PGN','Órgano de control con funciones disciplinarias, preventivas y de intervención, entre otras legalmente asignadas.'],
        ['Error frecuente','No ubicar a la PGN dentro de la Rama Ejecutiva ni tratarla como juez penal.'],
      ],
    }]
    case 'pgn-m11': return [{
      type:'comparison', title:'Estructura PGN: no memorices cajas, entiende competencias', columns:['Nivel / órgano','Pregunta que debes resolver'], rows:[
        ['Nivel central','¿La materia o el sujeto exige una procuraduría delegada, sala u otra competencia central?'],
        ['Regional de instrucción','¿El sujeto, nivel territorial y etapa encajan en las competencias de instrucción regional?'],
        ['Distrital / provincial de instrucción','¿El asunto corresponde a su circunscripción y a los sujetos que la norma les atribuye?'],
        ['Juzgamiento','¿La etapa ya salió de instrucción y qué órgano debe continuar conforme a la separación funcional?'],
        ['Regla práctica','El organigrama orienta, pero la competencia se comprueba en la norma vigente y en el caso concreto.'],
      ],
    }]
    case 'pgn-m12': return [{
      type:'comparison', title:'Tres funciones misionales que no deben mezclarse', columns:['Función','Finalidad dominante'], rows:[
        ['Disciplinaria','Investigar y decidir, mediante el procedimiento aplicable, posibles faltas de sujetos disciplinables.'],
        ['Preventiva','Anticipar o mitigar riesgos para derechos, orden jurídico, patrimonio público o gestión, sin coadministrar.'],
        ['Intervención','Actuar ante autoridades o procesos en defensa del orden jurídico, patrimonio público y derechos/garantías dentro de la competencia legal.'],
        ['Clave de examen','Un mismo hecho puede ser relevante para más de una función, pero cada ruta conserva finalidad, competencia y procedimiento.'],
      ],
    }]
    case 'pgn-m14': return [{
      type:'steps', title:'Qué hace bien un 3PU-15 dentro de la instrucción', items:[
        'Recibe una asignación concreta y ubica competencia, etapa y objeto de apoyo.',
        'Convierte hechos desordenados en necesidades de información, prueba o análisis profesional.',
        'Ejecuta y documenta las actuaciones que correspondan a su rol, sin anticipar decisiones reservadas a la autoridad competente.',
        'Registra resultados y soportes de forma que el expediente pueda ser revisado, contradicho y continuado por otra persona.',
      ],
    }]
    case 'pgn-m15': return [{
      type:'comparison', title:'Acto administrativo: validez, eficacia y ejecución no son lo mismo', columns:['Capa','Pregunta de control'], rows:[
        ['Competencia','¿La autoridad estaba habilitada para decidir?'],
        ['Motivación y contenido','¿La decisión explica hechos, fundamento y conclusión de manera controlable?'],
        ['Forma / procedimiento','¿Se respetaron requisitos y etapas relevantes para producir la decisión?'],
        ['Publicidad / notificación','¿La decisión fue puesta en conocimiento mediante el mecanismo que corresponde?'],
        ['Firmeza / ejecutoriedad','¿Ya puede producir o exigir los efectos que la norma atribuye, o todavía existe una etapa previa?'],
      ],
    }]
    case 'pgn-m16': return [{
      type:'process', title:'CPACA: ruta mental mínima', nodes:[
        {id:'a1',label:'Petición / actuación',hint:'Identifica qué pide la persona o qué actuación inicia la autoridad.'},
        {id:'a2',label:'Competencia y participantes',hint:'Verifica autoridad, interesados y derechos de intervención.'},
        {id:'a3',label:'Trámite y prueba',hint:'Ubica términos, información necesaria y oportunidades procedimentales.'},
        {id:'a4',label:'Decisión motivada',hint:'Responde el problema concreto con fundamento y congruencia.'},
        {id:'a5',label:'Comunicación / recurso / firmeza',hint:'No confundas decidir con poder ejecutar inmediatamente.'},
      ],
    }]
    case 'pgn-m17': return [{
      type:'comparison', title:'Derecho de petición: clasifica antes de contar términos', columns:['Pregunta','Qué debes identificar'], rows:[
        ['¿Qué solicita?','Información, documentos, consulta, actuación, reconocimiento, queja u otra pretensión.'],
        ['¿Quién es competente?','Si la autoridad receptora puede resolver o debe gestionar traslado conforme a la ley.'],
        ['¿Está completo?','Qué información es necesaria y cómo se tramita una petición incompleta sin crear barreras indebidas.'],
        ['¿Hay reserva o datos protegidos?','El acceso a información requiere un análisis adicional cuando aparecen límites legales.'],
        ['¿La respuesta es de fondo?','Debe ser clara, congruente y referirse realmente a lo pedido, no limitarse a citar normas.'],
      ],
    }]
    case 'pgn-m18': return [{
      type:'comparison', title:'Información pública, reserva y dato personal: tres capas', columns:['Capa','Error que debes evitar'], rows:[
        ['Publicidad','Creer que “público” significa divulgar sin revisar contexto o restricciones legales.'],
        ['Reserva','Invocarla de manera genérica sin identificar fundamento constitucional o legal aplicable.'],
        ['Dato personal','Confundir protección de datos con secreto total del documento que los contiene.'],
        ['Salida proporcional','Evaluar acceso parcial, anonimización o versión pública cuando permitan proteger lo restringido y entregar lo demás.'],
      ],
    }]
    case 'pgn-m21': return [{
      type:'comparison', title:'De la noticia disciplinaria a una decisión inicial', columns:['Situación','Pregunta determinante'], rows:[
        ['Información manifiestamente irrelevante o imposible','¿Existe fundamento para iniciar actuación o procede una decisión inhibitoria según el CGD?'],
        ['Hecho potencialmente disciplinario, autor no individualizado','¿La duda sobre identificación o individualización justifica indagación previa?'],
        ['Posible autor identificado','¿Existen elementos para abrir investigación disciplinaria y delimitar sus hechos?'],
        ['Siempre','La queja informa; no demuestra por sí misma responsabilidad.'],
      ],
    }]
    case 'pgn-m22': return [{
      type:'comparison', title:'Del hecho a la responsabilidad: cinco estaciones', columns:['Estación','Pregunta'], rows:[
        ['Conducta','¿Qué hizo u omitió concretamente la persona y qué parte está acreditada?'],
        ['Deber funcional','¿Qué obligación, prohibición o regla funcional se relaciona con la conducta?'],
        ['Ilicitud sustancial','¿La conducta afecta sustancialmente el deber funcional y existe una justificación jurídicamente relevante?'],
        ['Culpabilidad','¿La evidencia permite atribuir dolo o culpa bajo la regla aplicable, sin responsabilidad objetiva?'],
        ['Prueba / garantías','¿Cada conclusión está sustentada y fue obtenida dentro del procedimiento y garantías correspondientes?'],
      ],
    }]
    case 'pgn-m23': return [{
      type:'comparison', title:'No mezcles categorías de integridad y función pública', columns:['Categoría','Pregunta operativa'], rows:[
        ['Deber','¿Qué conducta positiva estaba obligado a realizar el servidor?'],
        ['Prohibición','¿Qué conducta estaba expresamente vedada?'],
        ['Inhabilidad','¿Existía una circunstancia que impedía acceder, contratar o actuar en el supuesto regulado?'],
        ['Incompatibilidad','¿Existe una restricción para ejercer simultáneamente ciertas actividades o calidades?'],
        ['Impedimento / conflicto','¿Una situación concreta compromete imparcialidad y exige declararla o tramitarla antes de decidir?'],
      ],
    }]
    case 'pgn-m24': return [{
      type:'steps', title:'Prescripción: construye la cronología antes del cálculo', items:[
        'Define la conducta que realmente se analiza y si es instantánea, permanente, continuada o presenta una regla temporal especial.',
        'Ubica las fechas jurídicamente relevantes con fuente verificable; no uses como inicio la fecha más visible por comodidad.',
        'Consulta el término y los eventos que la ley vigente reconoce con efecto sobre su cómputo.',
        'Documenta el cálculo y vuelve a revisarlo si cambia la calificación temporal del hecho o aparece una fecha nueva.',
      ],
    }]
    case 'pgn-m28': return [{
      type:'comparison', title:'Vincular no es condenar', columns:['Garantía','Aplicación en investigación'], rows:[
        ['Presunción de inocencia','La vinculación abre garantías y contradicción; no convierte la hipótesis en hecho probado.'],
        ['Defensa','El disciplinable puede conocer y ejercer las facultades procesales previstas para la etapa.'],
        ['Contradicción','Las pruebas deben poder ser discutidas en las oportunidades legales, incluidas las que favorecen y las que comprometen.'],
        ['Versión libre','No debe tratarse como una obligación de autoincriminación ni como sustituto de la actividad probatoria estatal.'],
      ],
    }]
    case 'pgn-m29': return [{
      type:'process', title:'Cierre de investigación: transición, no decisión final', nodes:[
        {id:'cl1',label:'Verificar suficiencia investigativa',hint:'Comprueba que no existan diligencias necesarias pendientes dentro de la etapa.'},
        {id:'cl2',label:'Decisión de cierre',hint:'Formaliza el fin de la actividad investigativa conforme al CGD.'},
        {id:'cl3',label:'Alegatos precalificatorios',hint:'Respeta la oportunidad procesal para que los sujetos presenten su lectura antes de evaluar mérito.'},
        {id:'cl4',label:'Evaluación',hint:'Solo después corresponde decidir entre la ruta de archivo o formulación de cargos según presupuestos.'},
      ],
    }]
    case 'pgn-m31': return [{
      type:'comparison', title:'Comunicar, notificar y recurrir: pregunta siempre por el acto', columns:['Filtro','Qué cambia'], rows:[
        ['Tipo de decisión','No todos los actos se ponen en conocimiento de la misma forma ni admiten los mismos recursos.'],
        ['Destinatario','Verifica quién debe ser notificado/comunicado y su calidad dentro de la actuación.'],
        ['Momento','Términos de impugnación y efectos dependen de la forma y oportunidad legalmente previstas.'],
        ['Recurso','Solo procede el que la norma permita; “apelar todo” no es una estrategia jurídica válida.'],
      ],
    }]
    case 'pgn-m32': return [{
      type:'steps', title:'Nulidad: no todo defecto destruye el proceso', items:[
        'Identifica el defecto concreto y la regla o garantía comprometida.',
        'Analiza trascendencia: explica cómo afecta realmente competencia, defensa, contradicción u otra garantía relevante.',
        'Revisa si el defecto puede corregirse o sanearse mediante la herramienta procesal aplicable antes de asumir nulidad.',
        'Si la nulidad procede, delimita desde qué actuación debe reconstruirse el trámite y conserva lo que jurídicamente pueda mantenerse.',
      ],
    }]
    case 'pgn-m34': return [{
      type:'comparison', title:'Separación de etapas: mapa operativo', columns:['Momento','Pregunta'], rows:[
        ['Instrucción','¿Qué autoridad investiga, decreta/practica prueba y conduce la actuación hasta archivo o pliego según competencia?'],
        ['Transición','¿Qué decisión marca el cierre de la competencia instructora en este expediente?'],
        ['Juzgamiento','¿Qué autoridad recibe la actuación y decide conforme a las reglas de juzgamiento?'],
        ['Control','¿Qué recursos, segunda instancia o doble conformidad corresponden al acto y sujeto concretos?'],
      ],
    }]
    case 'pgn-m36': return [{
      type:'comparison', title:'Pertinencia, conducencia y utilidad', columns:['Criterio','Pregunta sencilla'], rows:[
        ['Pertinencia','¿La prueba se relaciona con un hecho o problema que sí importa para el expediente?'],
        ['Conducencia','¿Este medio es jurídicamente idóneo para demostrar lo que se pretende dentro del régimen aplicable?'],
        ['Utilidad','¿Aporta información necesaria o solo repite algo ya suficientemente establecido sin agregar valor?'],
        ['Regla','Una prueba puede parecer interesante y aun así no superar estos filtros.'],
      ],
    }]
    case 'pgn-m37': return [{
      type:'comparison', title:'Prueba legal y contradicción: dos controles distintos', columns:['Control','Pregunta'], rows:[
        ['Obtención / incorporación','¿El elemento fue recaudado e incorporado respetando formalidades sustanciales y derechos fundamentales?'],
        ['Contradicción','¿Los sujetos tuvieron la oportunidad que la ley reconoce para conocer, solicitar, discutir o controvertir?'],
        ['Exclusión / inexistencia','¿Existe una consecuencia jurídica específica por la forma en que se obtuvo o incorporó?'],
        ['Valoración','Superar legalidad no significa que la prueba sea automáticamente suficiente o convincente.'],
      ],
    }]
    case 'pgn-m41': return [{
      type:'comparison', title:'Testimonio y confesión: cuidado con memoria e inferencia', columns:['Elemento','Control de calidad'], rows:[
        ['Percepción','¿La persona presenció el hecho o repite información de terceros?'],
        ['Memoria','¿Cuánto tiempo pasó, qué condiciones de observación existían y hay contaminación posterior del recuerdo?'],
        ['Consistencia','¿El relato se mantiene en aspectos centrales y cómo se explica una contradicción?'],
        ['Corroboración','¿Qué documentos, registros u otros testimonios apoyan o debilitan el relato?'],
        ['Confesión / aceptación','Tiene requisitos propios; no se presume por silencio, ambigüedad o deseo de colaborar.'],
      ],
    }]
    case 'pgn-m43': return [{
      type:'comparison', title:'Inspección y prueba trasladada', columns:['Figura','Qué debes comprobar'], rows:[
        ['Inspección disciplinaria','Objeto concreto, autoridad competente, documentación de lo observado y participación/garantías aplicables.'],
        ['Prueba trasladada','Origen, autenticidad, condiciones de producción y oportunidad de contradicción en la actuación receptora conforme a la regla aplicable.'],
        ['Error común','Suponer que “ya existe en otro expediente” equivale a estar automáticamente incorporada y valorada en este.'],
      ],
    }]
    case 'pgn-m46': return [{
      type:'comparison', title:'Actuación preventiva: selecciona la intensidad por el riesgo', columns:['Pregunta','Uso'], rows:[
        ['¿Cuál es el riesgo?','Describe evento, causa, población/activo afectado e impacto posible.'],
        ['¿Qué evidencia existe?','Distingue percepción, alerta, indicador y soporte verificable.'],
        ['¿Qué competencia preventiva existe?','La PGN actúa dentro de sus atribuciones y sin administrar por la entidad vigilada.'],
        ['¿Qué seguimiento necesita?','Define resultado esperado, plazo, evidencia y condición de cierre o escalamiento.'],
      ],
    }]
    case 'pgn-m47': return [{
      type:'comparison', title:'Política pública: actividad no es resultado', columns:['Nivel','Ejemplo de lectura'], rows:[
        ['Insumo','Recursos, personal, información o presupuesto disponibles.'],
        ['Actividad','Visitas, reuniones, oficios, campañas o trámites ejecutados.'],
        ['Producto','Bien o servicio efectivamente entregado por la intervención pública.'],
        ['Resultado','Cambio verificable en la población, proceso o condición objetivo.'],
        ['Riesgo','Evento que podría impedir el resultado y controles que reducen su probabilidad o impacto.'],
      ],
    }]
    case 'pgn-m48': return [{
      type:'comparison', title:'Intervención: defender intereses públicos sin sustituir al decisor', columns:['Control','Pregunta'], rows:[
        ['Legitimación / competencia','¿La PGN puede intervenir en este tipo de actuación y con qué alcance?'],
        ['Interés protegido','¿Qué orden jurídico, patrimonio público, derecho o garantía sustenta la intervención?'],
        ['Argumentación','¿La posición está apoyada en hechos, norma y evidencia del proceso?'],
        ['Límite','Intervenir no equivale a dictar la decisión que corresponde a la autoridad judicial o administrativa competente.'],
      ],
    }]
    case 'pgn-m49': return [{
      type:'comparison', title:'Enfoque diferencial sin perder imparcialidad', columns:['Principio','Aplicación'], rows:[
        ['Igualdad material','Identifica barreras reales que hacen que un trámite aparentemente igual produzca exclusión.'],
        ['Accesibilidad','Ajusta canal, comunicación o apoyo cuando sea necesario y jurídicamente posible.'],
        ['No discriminación','Evita estereotipos como sustituto de hechos o criterios jurídicos.'],
        ['Imparcialidad','Adaptar la atención no significa alterar el estándar de prueba o decidir a favor de alguien por su identidad.'],
      ],
    }]
    case 'pgn-m51': return [{
      type:'process', title:'Planeación contractual antes de comparar ofertas', nodes:[
        {id:'ct1',label:'Necesidad',hint:'Define el problema público, alcance y resultado esperado.'},
        {id:'ct2',label:'Mercado y alternativas',hint:'Obtén información suficiente para justificar especificaciones, presupuesto y estrategia.'},
        {id:'ct3',label:'Riesgos y requisitos',hint:'Asigna riesgos razonablemente y evita exigencias sin relación o desproporcionadas.'},
        {id:'ct4',label:'Modalidad y criterios',hint:'Justifica el mecanismo de selección y los factores objetivos aplicables.'},
        {id:'ct5',label:'Trazabilidad',hint:'Los estudios previos deben permitir reconstruir por qué se tomó cada decisión relevante.'},
      ],
    }]
    case 'pgn-m52': return [{
      type:'comparison', title:'Supervisión e interventoría: seguimiento con evidencia', columns:['Capa','Qué observar'], rows:[
        ['Obligación','Qué debía entregar, hacer o acreditar el contratista.'],
        ['Evidencia','Qué soporte demuestra cantidad, calidad, oportunidad y aceptación.'],
        ['Desviación','Qué diferencia existe entre obligación y ejecución y cómo se documentó.'],
        ['Actuación','Qué requerimiento, informe, trámite o recomendación corresponde al rol de seguimiento.'],
        ['Límite','Certificar sin soporte o aprobar por rutina destruye el valor del control.'],
      ],
    }]
    case 'pgn-m53': return [{
      type:'comparison', title:'Inhabilidad, incompatibilidad y conflicto de interés', columns:['Concepto','Idea operativa'], rows:[
        ['Inhabilidad','Circunstancia que impide acceder o participar cuando la norma así lo establece.'],
        ['Incompatibilidad','Restricción para ejercer simultáneamente determinadas actividades, calidades o relaciones.'],
        ['Conflicto de interés','Situación donde un interés particular puede comprometer imparcialidad y exige gestionar la situación conforme a la regla aplicable.'],
        ['Regla de examen','No intercambies etiquetas: identifica el supuesto normativo y el efecto jurídico concreto.'],
      ],
    }]
    case 'pgn-m54': return [{
      type:'comparison', title:'Señal de alerta no equivale a prueba de corrupción', columns:['Nivel','Qué significa'], rows:[
        ['Dato atípico','Valor o evento que se aparta del patrón y necesita explicación.'],
        ['Señal / red flag','Patrón asociado a un riesgo que justifica revisión adicional.'],
        ['Hallazgo','Resultado sustentado de una verificación frente a un criterio definido.'],
        ['Prueba','Elemento incorporado y valorado dentro del procedimiento correspondiente.'],
        ['Responsabilidad','Conclusión jurídica que exige competencia, procedimiento, prueba y garantías; no nace de la alerta por sí sola.'],
      ],
    }]
    case 'pgn-m55': return [{
      type:'comparison', title:'Ordenamiento territorial: quién planea y con qué instrumento', columns:['Capa','Qué debes ubicar'], rows:[
        ['Distribución de competencias','Nación y entidades territoriales tienen atribuciones distintas y coordinadas.'],
        ['Instrumento territorial','POT, PBOT o EOT según el régimen aplicable no son simples mapas: orientan uso y ocupación del territorio.'],
        ['Determinantes y jerarquías','Una decisión local debe dialogar con normas y determinantes de superior jerarquía aplicables.'],
        ['Caso práctico','Antes de afirmar irregularidad, identifica autoridad, instrumento vigente, suelo, norma concreta y acto que materializó la decisión.'],
      ],
    }]
    case 'pgn-m56': return [{
      type:'comparison', title:'Indicadores: evita medir actividad como si fuera resultado', columns:['Tipo','Pregunta'], rows:[
        ['Eficacia','¿Se alcanzó el resultado o meta prevista?'],
        ['Eficiencia','¿Qué relación existió entre recursos utilizados y producto/resultado logrado?'],
        ['Calidad','¿El producto o servicio cumplió atributos o estándares relevantes?'],
        ['Oportunidad','¿Se entregó o actuó dentro del tiempo esperado?'],
        ['Lectura crítica','Un indicador aislado necesita denominador, periodo, fuente, meta y contexto para interpretarse.'],
      ],
    }]
    case 'pgn-m59': return [{
      type:'steps', title:'Informe técnico que otra persona pueda auditar', items:[
        'Define objeto, alcance, pregunta y destinatario antes de escribir conclusiones.',
        'Describe fuentes y metodología con el detalle necesario para reproducir o revisar el análisis.',
        'Separa hechos/hallazgos de inferencias y usa anexos para soportes extensos sin ocultar la cadena argumental.',
        'Declara limitaciones, datos faltantes y supuestos que condicionan el resultado.',
        'Cierra con una conclusión proporcional a la evidencia y al alcance profesional solicitado.'],
    }]
    case 'pgn-m62': return [{
      type:'comparison', title:'Base de datos: estado actual vs. historia del dato', columns:['Fuente','Qué puede aportar'], rows:[
        ['Tabla actual','Estado visible al momento de la consulta; no necesariamente explica cómo llegó allí.'],
        ['Auditoría','Quién/qué cuenta ejecutó una operación, cuándo y, según diseño, qué cambió.'],
        ['Log transaccional','Secuencia técnica de operaciones útil para recuperación o análisis especializado.'],
        ['Aplicación / API','Puede conectar identidad de usuario y contexto funcional con una operación ejecutada por cuentas técnicas.'],
        ['Backup','Fotografía de un momento; compararla con otros estados ayuda a reconstruir cambios, pero no atribuye autoría por sí sola.'],
      ],
    }]
    case 'pgn-m63': return [{
      type:'comparison', title:'Metadatos y hash: útiles, pero no mágicos', columns:['Elemento','Qué sí / qué no'], rows:[
        ['Metadato','Aporta contexto técnico; puede cambiar por copia, exportación, sistema o herramienta y debe interpretarse en contexto.'],
        ['Hash','Permite comprobar igualdad/integridad respecto de una referencia calculada; no identifica quién creó el archivo ni demuestra veracidad del contenido.'],
        ['Correo','Cabeceras, servidor, cuenta y mensaje pueden aportar piezas distintas; una captura de pantalla pierde parte del contexto.'],
        ['Preservación','Documentar adquisición, herramienta y transformaciones permite explicar por qué el elemento analizado corresponde al preservado.'],
      ],
    }]
    case 'pgn-m65': return [{
      type:'comparison', title:'Word en trabajo institucional: estructura antes que decoración', columns:['Herramienta','Uso correcto'], rows:[
        ['Estilos','Mantienen jerarquía, navegación y consistencia; son preferibles a formatear cada título manualmente.'],
        ['Control de cambios','Permite revisar propuestas sin perder autoría y secuencia de modificaciones.'],
        ['Comentarios','Sirven para observaciones de revisión; no sustituyen el contenido final aprobado.'],
        ['Metadatos / propiedades','Pueden revelar información del documento; revisa antes de publicar o remitir externamente.'],
      ],
    }]
    case 'pgn-m66': return [{
      type:'comparison', title:'Excel: depura antes de concluir', columns:['Paso','Control'], rows:[
        ['Estructura','Una fila por observación y una columna por variable, con tipos consistentes.'],
        ['Calidad','Detecta vacíos, duplicados, fechas imposibles, formatos mezclados y valores fuera de rango.'],
        ['Cálculo','Distingue referencias, fórmulas y filtros; conserva datos fuente cuando hagas transformaciones.'],
        ['Resumen','Tabla dinámica o gráfico simplifica; siempre debe poder volver al detalle que lo sustenta.'],
      ],
    }]
    case 'pgn-m67': return [{
      type:'comparison', title:'Dato, asociación y conclusión: tres escalones', columns:['Escalón','Qué puedes afirmar'], rows:[
        ['Descripción','Qué frecuencia, distribución, tendencia o diferencia existe en los datos observados.'],
        ['Asociación','Qué variables cambian juntas; no demuestra por sí sola causalidad.'],
        ['Inferencia','Qué conclusión se propone y bajo qué supuestos, calidad de datos y universo/muestra.'],
        ['Decisión','Debe combinar análisis con contexto normativo, competencia y evidencia adicional cuando corresponda.'],
      ],
    }]
    case 'pgn-m68': return [{
      type:'steps', title:'Investigación aplicada a un expediente', items:[
        'Formula una pregunta concreta que pueda responderse con información disponible o recolectable.',
        'Convierte la pregunta en hipótesis alternativas y variables/hechos observables.',
        'Selecciona fuentes y método evitando recolectar información sin finalidad definida.',
        'Analiza resultados incluyendo evidencia que contradiga la hipótesis inicial.',
        'Reporta conclusión, incertidumbre y límites para que otra persona pueda evaluar el razonamiento.'],
    }]
    case 'pgn-m69': return [{
      type:'comparison', title:'Cuando dos fuentes no coinciden', columns:['Movimiento','Pregunta'], rows:[
        ['Definir','¿Realmente miden el mismo hecho, periodo, unidad y población?'],
        ['Trazar','¿Cuál es el origen y transformación de cada dato?'],
        ['Contrastar','¿Qué tercera fuente, regla de negocio o evidencia puede explicar la diferencia?'],
        ['Resolver','¿La discrepancia es error, actualización válida, alcance distinto o un hecho que exige investigación?'],
        ['Documentar','Conserva tanto la diferencia como el camino usado para explicarla.'],
      ],
    }]
    case 'pgn-m70': return [{
      type:'comparison', title:'Nivel B: conducta observable, no eslogan', columns:['Competencia','Señal consistente'], rows:[
        ['Responsabilidad con la Organización','Asume compromisos, protege recursos/información y actúa conforme a objetivos y reglas institucionales incluso sin supervisión inmediata.'],
        ['Organización del Trabajo','Prioriza, secuencia, controla pendientes y reajusta el plan ante cambios sin perder calidad ni trazabilidad.'],
        ['Trampa','Responder siempre “sí a todo” puede ser menos coherente que mostrar priorización, límites y escalamiento oportuno.'],
      ],
    }]
    case 'pgn-m71': return [{
      type:'comparison', title:'Investigar y pensar conceptualmente', columns:['Competencia','Qué distingue un buen desempeño'], rows:[
        ['Investigación B','Busca información relevante, contrasta fuentes, formula preguntas y no cierra hipótesis prematuramente.'],
        ['Pensamiento Conceptual A','Reconoce patrones y relaciones, organiza información en conceptos útiles y evita generalizaciones que la evidencia no sostiene.'],
        ['Caso combinado','Un buen análisis identifica patrones y, al mismo tiempo, busca evidencia que pueda refutarlos.'],
      ],
    }]
    case 'pgn-m72': return [{
      type:'comparison', title:'Resultados con parámetros: no son competencias opuestas', columns:['Competencia','Equilibrio'], rows:[
        ['Orientación a Resultados A','Mantiene foco en objetivos, anticipa obstáculos y busca soluciones viables.'],
        ['Cumplimiento de Parámetros B','Respeta estándares, procedimientos y criterios de calidad relevantes.'],
        ['Integración','La respuesta madura logra resultados dentro del marco aplicable; no usa urgencia como excusa para saltar controles esenciales.'],
      ],
    }]
    case 'pgn-m73': return [{
      type:'steps', title:'Prueba comportamental: responde desde patrones estables', items:[
        'Lee qué conducta concreta describe la afirmación, no qué palabra positiva contiene.',
        'Identifica si la formulación es directa o inversa antes de seleccionar intensidad/frecuencia.',
        'Responde según tu patrón real y consistente; intentar representar una personalidad “perfecta” crea contradicciones.',
        'Distingue preferencia personal de conductas laborales observables asociadas al perfil.'],
    }]
    case 'pgn-m80': return [{
      type:'comparison', title:'Arquitectura: cinco dominios para reconstruir una falla', columns:['Dominio','Pregunta'], rows:[
        ['Proceso','¿Qué actividad institucional estaba intentando ejecutar el usuario o sistema?'],
        ['Aplicación','¿Qué regla, servicio o interfaz debía procesar la operación?'],
        ['Información','¿Qué dato entra, quién es fuente maestra y qué transformaciones ocurren?'],
        ['Tecnología','¿Qué infraestructura, integración o plataforma soporta el servicio?'],
        ['Seguridad / gobierno','¿Qué identidad, permiso, control y responsable gobiernan la operación?'],
      ],
    }]
    case 'pgn-m81': return [{
      type:'comparison', title:'Redes: un identificador técnico no es una persona', columns:['Dato','Alcance'], rows:[
        ['IP','Ubica un punto lógico de red en un momento; NAT, VPN, proxy, DHCP o infraestructura compartida pueden cambiar su significado.'],
        ['MAC','Puede ayudar dentro de un segmento controlado, pero también puede cambiar o falsificarse y no acompaña todo el trayecto de internet.'],
        ['Puerto / protocolo','Ayuda a entender qué servicio o comunicación se usó; no atribuye autoría humana.'],
        ['Tiempo','Zona horaria y sincronización son esenciales para correlacionar registros de fuentes distintas.'],
      ],
    }]
    case 'pgn-m82': return [{
      type:'comparison', title:'Riesgo de seguridad: construye la cadena completa', columns:['Elemento','Ejemplo de pregunta'], rows:[
        ['Activo','¿Qué información, servicio o capacidad institucional debe protegerse?'],
        ['Amenaza','¿Qué evento o actor podría causar daño?'],
        ['Vulnerabilidad','¿Qué debilidad permite o facilita la materialización?'],
        ['Control','¿Qué medida preventiva, detectiva o correctiva reduce el riesgo?'],
        ['Incidente','¿Qué evidencia demuestra que ocurrió un evento que afecta o amenaza la seguridad, y qué respuesta corresponde?'],
      ],
    }]
    case 'pgn-m83': return [{
      type:'process', title:'Trazabilidad de un cambio de software', nodes:[
        {id:'sw1',label:'Necesidad / requisito',hint:'Qué comportamiento se pidió y quién lo aprobó.'},
        {id:'sw2',label:'Implementación',hint:'Código, configuración, scripts o migraciones que materializan el cambio.'},
        {id:'sw3',label:'Revisión y prueba',hint:'Qué controles verificaron calidad, seguridad y aceptación.'},
        {id:'sw4',label:'Artefacto / despliegue',hint:'Qué versión llegó realmente al ambiente y mediante qué pipeline o procedimiento.'},
        {id:'sw5',label:'Ejecución / evidencia',hint:'Qué logs, datos y comportamiento permiten confirmar el efecto real.'},
      ],
    }]
    case 'pgn-m84': return [{
      type:'comparison', title:'Gobierno de datos: calidad e integridad no son sinónimos', columns:['Dimensión','Pregunta'], rows:[
        ['Definición','¿Existe un significado institucional común para el dato y su responsable?'],
        ['Calidad','¿Es exacto, completo, consistente y oportuno para el uso previsto?'],
        ['Integridad técnica','¿Las restricciones y controles evitan relaciones/estados inválidos según el modelo?'],
        ['Seguridad','¿Quién puede consultar o modificar y cómo queda trazabilidad?'],
        ['Ciclo de vida','¿Cómo se crea, transforma, conserva, respalda, archiva o elimina conforme a necesidad y norma?'],
      ],
    }]
    default: return []
  }
}


function verifiedLegalArticleBlocks(blueprint: ProcuraduriaModuleBlueprint): LessonBlock[] {
  if (blueprint.id === 'pgn-m20') return [{
    type:'article', article:'CGD · Arts. 9, 10 y 12', title:'Ilicitud sustancial, culpabilidad y debido proceso',
    text:'El Código separa tres controles que no deben mezclarse: la ilicitud sustancial exige una afectación sustancial del deber funcional sin justificación; la culpabilidad proscribe la responsabilidad objetiva y exige dolo o culpa; y el debido proceso exige, entre otras garantías, separación entre quien instruye y quien juzga.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m26') return [{
    type:'article', article:'CGD · Art. 208', title:'Cuándo procede la indagación previa',
    text:'Tras la reforma de la Ley 2094 de 2021, la indagación previa procede cuando existe duda sobre la identificación o individualización del posible autor. Su regla general de duración es de seis meses y debe culminar con archivo o apertura de investigación; no es una etapa automática para todo asunto.',
    sourceId:'ley-2094-2021',
  }]
  if (blueprint.id === 'pgn-m27') return [{
    type:'article', article:'CGD · Arts. 211 y 215', title:'Investigación: autor identificado y objeto delimitado',
    text:'Cuando la información disponible permite identificar al posible autor, la ruta es la investigación disciplinaria. La decisión de apertura debe delimitar el posible autor, los hechos disciplinariamente relevantes y las pruebas a practicar, además de las demás órdenes previstas por el Código.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m28') return [{
    type:'article', article:'CGD · Arts. 109–111', title:'Quién interviene y qué puede hacer dentro de la actuación',
    text:'El Código identifica los sujetos procesales, enumera facultades como solicitar, aportar y controvertir pruebas e interponer recursos, y precisa cuándo una persona adquiere la calidad de disciplinado. El quejoso no se convierte por regla general en sujeto procesal y conserva un ámbito de intervención delimitado por la ley.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m29') return [{
    type:'article', article:'CGD · Art. 220', title:'Cierre y alegatos precalificatorios',
    text:'Cuando se han recaudado las pruebas ordenadas en la investigación o vence el término de la etapa, corresponde declarar cerrada la investigación y correr traslado por diez días para alegatos previos a la evaluación. Después se evalúa el mérito de lo recaudado.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m30') return [{
    type:'article', article:'CGD · Arts. 221 y 223', title:'Evaluar el mérito no es anticipar la sanción',
    text:'Terminada la investigación debe evaluarse jurídicamente el mérito del expediente. Si procede formular cargos, estos deben concretar autor, conducta, circunstancias relevantes, normas presuntamente violadas, ilicitud sustancial, culpabilidad y el análisis de las pruebas que sustentan cada cargo. Formular cargos delimita la acusación; no equivale a declarar responsabilidad.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m32') return [{
    type:'article', article:'CGD · Arts. 202–207', title:'La nulidad exige causal, trascendencia y efecto procesal',
    text:'El régimen de nulidades contempla causales específicas vinculadas con competencia, defensa y debido proceso, incorpora principios de trascendencia y saneamiento, y ordena reponer la actuación desde el momento afectado. Las pruebas allegadas y practicadas legalmente no pierden validez por el solo hecho de declararse una nulidad.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m35') return [{
    type:'article', article:'CGD · Arts. 147–149', title:'Carga estatal, búsqueda imparcial y medios de prueba',
    text:'Toda decisión interlocutoria y el fallo deben fundarse en pruebas legalmente producidas o aportadas, y la carga de la prueba corresponde al Estado. El funcionario debe buscar con igual rigor lo que compromete y lo que favorece al investigado. El Código reconoce, entre otros, confesión, testimonio, peritación, inspección disciplinaria y documentos como medios de prueba.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m37') return [{
    type:'article', article:'CGD · Arts. 157–158', title:'Contradicción y prueba inexistente',
    text:'El Código reconoce oportunidad para controvertir la prueba desde la notificación de la apertura de investigación o la orden de vinculación y establece que la prueba recaudada sin formalidades sustanciales o desconociendo derechos fundamentales del investigado se tiene como inexistente.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m39') return [{
    type:'article', article:'CGD · Art. 159', title:'Valoración conjunta y sana crítica',
    text:'Las pruebas deben apreciarse en conjunto conforme a sana crítica. Una decisión motivada debe explicar razonadamente el mérito que atribuye a las pruebas; listar documentos o afirmar que una fuente “es clara” no sustituye la valoración.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m42') return [{
    type:'article', article:'CGD · Art. 156', title:'Apoyo técnico no equivale a decisión jurídica',
    text:'El servidor que conoce la actuación puede solicitar colaboración técnica a organismos del Estado cuando resulte necesaria para la investigación. El apoyo técnico aporta conocimiento especializado y trazable, pero la valoración jurídica y la decisión permanecen en cabeza de la autoridad competente.',
    sourceId:'ley-1952-2019',
  }]
  if (blueprint.id === 'pgn-m44') return [{
    type:'article', article:'CGD · Arts. 155–156', title:'Aseguramiento de la prueba y preservación',
    text:'El Código regula el aseguramiento de los elementos de prueba y el apoyo técnico. La guía disciplinaria de la Procuraduría explica que la cadena de custodia no aparece como una regulación autónoma y completa dentro del CGD, pero conecta su necesidad con esas reglas y con la integración normativa aplicable. En evidencia digital, documentar origen, manipulación, integridad y custodios evita tratar un hash aislado como garantía total de autenticidad o autoría.',
    sourceId:'pgn-guia-pruebas',
  }]
  return []
}

function buildLessons(blueprint: ProcuraduriaModuleBlueprint): Lesson[] {
  const lessonPrefix = blueprint.id
  const q1 = `${blueprint.id}-q1`
  const q2 = `${blueprint.id}-q2`
  const q3 = `${blueprint.id}-q3`
  const q4 = `${blueprint.id}-q4`
  const q5 = `${blueprint.id}-q5`
  const q6 = `${blueprint.id}-q6`
  const ordered = blueprint.steps.map((label, index) => ({ id: String.fromCharCode(97 + index), label }))
  const shuffled = [ordered[2], ordered[0], ordered[3], ordered[1]].filter((item): item is { id: string; label: string } => Boolean(item))

  const l1: Lesson = {
    id: `${lessonPrefix}-l1`, moduleId: blueprint.id, order: 1,
    title: `${blueprint.title}: fundamentos desde cero`,
    subtitle: `Construye el concepto antes de memorizar la regla. ${blueprint.description}`,
    durationMinutes: 15, skillIds: blueprint.skillIds, status: 'published',
    blocks: [
      { type: 'lead', text: `Esta lección parte de cero. El objetivo no es que repitas vocabulario jurídico o técnico, sino que puedas explicar qué problema resuelve “${blueprint.title}”, reconocer cuándo aparece en un caso y distinguirlo de conceptos cercanos.` },
      { type: 'objective', items: [`Explicar con tus palabras el núcleo de ${blueprint.title}.`, 'Reconocer las tres ideas que más cambian una decisión de examen o de expediente.', 'Aplicar el concepto a un microcaso sin saltar directamente a una conclusión.'] },
      { type: 'definition', title: 'Idea central', text: blueprint.core },
      ...specializedFoundationBlocks(blueprint),
      ...specializedAuditBlocks(blueprint),
      ...verifiedLegalArticleBlocks(blueprint),
      { type: 'comparison', title: 'Tres reglas que debes poder recuperar sin mirar apuntes', columns: ['Regla', 'Qué evita'], rows: blueprint.keyPoints.map((point, index) => [point, index === 0 ? 'Confundir el concepto básico.' : index === 1 ? 'Aplicar un atajo aparentemente razonable.' : 'Exceder la evidencia, la etapa o la competencia.']) },
      { type: 'example', title: 'Llévalo a un expediente', text: `${blueprint.scenario} Una respuesta profesional comienza por reconstruir los presupuestos del problema. La orientación correcta es: ${blueprint.correct}` },
      { type: 'trap', title: 'Distractor frecuente', text: `Evita razonar así: “${blueprint.distractors[0] ?? 'actuar primero y justificar después'}”. Una opción puede sonar decidida o eficiente y aun así ser incorrecta si omite competencia, etapa, evidencia o garantía.` },
      { type: 'checkpoint', questionId: q1 },
      { type: 'checkpoint', questionId: q2 },
      lessonSources(blueprint),
    ],
  }

  const l2: Lesson = {
    id: `${lessonPrefix}-l2`, moduleId: blueprint.id, order: 2,
    title: `${blueprint.title}: aplicación paso a paso`,
    subtitle: 'Convierte la teoría en un procedimiento mental que puedas usar bajo presión.',
    durationMinutes: 17, skillIds: blueprint.skillIds, status: 'published',
    blocks: [
      { type: 'lead', text: `Ahora pasamos de “saber qué significa” a “saber qué hacer”. En la prueba, varias opciones pueden mencionar instituciones reales. Lo que las separa suele ser el orden: quién actúa, en qué etapa, con qué soporte y con qué límites.` },
      { type: 'steps', title: 'Método operativo', items: blueprint.steps },
      { type: 'rule', title: 'Regla de control', text: `${blueprint.keyPoints[0] ?? blueprint.core} Antes de elegir una respuesta, verifica si la alternativa respeta esta regla y si ocurre en el momento correcto.` },
      { type: 'decision-simulator', title: `Laboratorio · ${blueprint.title}`, text: 'No busques la opción más fuerte ni la más amable. Busca la que encaje simultáneamente con hechos, competencia, etapa y evidencia.', scenario: blueprint.scenario, prompt: '¿Qué actuación escogerías y por qué?', options: [
        { id: 'a', text: blueprint.correct, correct: true, rationale: `Es la alternativa que mejor respeta el método del módulo y evita anticipar una conclusión sin los presupuestos necesarios.` },
        { id: 'b', text: blueprint.distractors[0] ?? 'Adoptar inmediatamente una conclusión sin completar las verificaciones.', correct: false, rationale: 'El distractor adelanta una conclusión, omite una verificación o excede la competencia.' },
        { id: 'c', text: blueprint.distractors[1] ?? 'No realizar ninguna actuación aunque exista una vía procedente.', correct: false, rationale: 'Evitar toda actuación también puede ser incorrecto cuando existe un deber o una herramienta jurídicamente disponible.' },
      ] },
      { type: 'tip', title: 'Cómo pensar bajo tiempo', text: `Resume el caso en una frase y recorre mentalmente: ${blueprint.steps.join(' → ')}. Si una opción salta uno de esos filtros, exige una justificación especialmente fuerte.` },
      { type: 'checkpoint', questionId: q3 },
      { type: 'checkpoint', questionId: q4 },
      lessonSources(blueprint),
    ],
  }

  const l3: Lesson = {
    id: `${lessonPrefix}-l3`, moduleId: blueprint.id, order: 3,
    title: `${blueprint.title}: nivel avanzado y trampas`,
    subtitle: 'Trabaja límites, evidencia contradictoria y decisiones que cambian cuando cambia un hecho.',
    durationMinutes: 18, skillIds: blueprint.skillIds, status: 'published',
    blocks: [
      { type: 'lead', text: `En nivel avanzado el examen no necesita preguntarte una definición. Puede ofrecerte una actuación jurídicamente posible, pero en una etapa equivocada; una fuente técnicamente válida, pero insuficiente para la conclusión; o un objetivo correcto perseguido mediante un procedimiento incorrecto.` },
      { type: 'comparison', title: 'Lectura avanzada del problema', columns: ['Capa', 'Pregunta de control'], rows: [
        ['Hechos', `¿Qué está realmente acreditado en el escenario de ${blueprint.title}?`],
        ['Regla', blueprint.keyPoints[1] ?? '¿Qué presupuesto o límite jurídico gobierna el caso?'],
        ['Evidencia', blueprint.keyPoints[2] ?? '¿Qué soporte permite sostener la inferencia y qué sigue abierto?'],
        ['Actuación', `¿La respuesta conserva el método ${blueprint.steps.join(' → ')}?`],
      ] },
      { type: 'sequence-exercise', title: 'Reconstruye el orden antes de decidir', text: 'Ordena los movimientos para evitar aplicar una regla correcta en el momento equivocado.', items: shuffled, correctOrder: ordered.map((item) => item.id), explanation: `El método completo es: ${blueprint.steps.join(' → ')}.` },
      { type: 'decision-simulator', title: 'Variante avanzada', text: 'Supón que aparece una nueva fuente que debilita una premisa de tu hipótesis inicial. La respuesta madura debe poder cambiar sin borrar la trazabilidad de lo ya hecho.', scenario: `${blueprint.scenario} Luego aparece información adicional que obliga a revisar un supuesto inicial.`, prompt: '¿Cuál es el enfoque más robusto?', options: [
        { id: 'a', text: `Reevaluar el supuesto afectado, contrastar la nueva información y mantener como guía: ${blueprint.correct}`, correct: true, rationale: 'Actualizar una hipótesis frente a nueva evidencia es parte del razonamiento profesional y no invalida lo actuado que siga siendo correcto.' },
        { id: 'b', text: blueprint.distractors[0] ?? 'Mantener la decisión original sin revisar la nueva información.', correct: false, rationale: 'Persistir pese a evidencia relevante refleja sesgo de confirmación y puede deteriorar la motivación de la decisión.' },
        { id: 'c', text: 'Desechar todo lo actuado y reiniciar automáticamente el expediente o análisis desde cero.', correct: false, rationale: 'La revisión debe ser proporcional al efecto de la nueva información; no todo lo previo pierde validez.' },
      ] },
      { type: 'tip', title: 'Señal de dominio', text: `Dominas este módulo cuando puedes explicar por qué “${blueprint.distractors[0] ?? 'el atajo más intuitivo'}” resulta tentador, qué presupuesto ignora y qué hecho adicional podría cambiar legítimamente la respuesta.` },
      { type: 'checkpoint', questionId: q5 },
      { type: 'checkpoint', questionId: q6 },
      lessonSources(blueprint),
    ],
  }

  return [l1, l2, l3]
}

export const procuraduriaModules: CourseModule[] = procuraduriaModuleBlueprints.map((blueprint) => ({
  id: blueprint.id,
  unitId: blueprint.unitId,
  order: blueprint.order,
  code: blueprint.code,
  title: blueprint.title,
  description: blueprint.description,
  accent: ACCENT,
  lessonIds: [`${blueprint.id}-l1`, `${blueprint.id}-l2`, `${blueprint.id}-l3`],
  status: 'published',
}))

export const procuraduriaLessons: Lesson[] = procuraduriaModuleBlueprints.flatMap(buildLessons)
export const procuraduriaQuestions: Question[] = procuraduriaModuleBlueprints.flatMap(buildQuestions)

export const procuraduriaContentStats = {
  modules: procuraduriaModules.length,
  lessons: procuraduriaLessons.length,
  questions: procuraduriaQuestions.length,
}
