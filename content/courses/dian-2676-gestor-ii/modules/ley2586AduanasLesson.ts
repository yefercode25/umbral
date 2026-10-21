import type { Lesson } from '../../../../src/types/course'

/** Lectura complementaria vinculada al corte oficial GOA 19/10/2026. No sustituye los indicadores por inscripción. */
export const dianLey2586AduanasLesson: Lesson = {
  id: 'm3-ley-2586-2026',
  moduleId: 'm3',
  order: 40,
  title: 'Ley 2586 de 2026 · Régimen sancionatorio aduanero',
  subtitle: 'Norma del día límite de la GOA: alcance, derogatoria, transición y distinción frente al cobro tributario',
  durationMinutes: 28,
  skillIds: ['ley-2586-2026', 'corte-normativo', 'regimen-aduanero', 'favorabilidad', 'competencia-dian'],
  status: 'published',
  blocks: [
    { type: 'lead', text: 'La Ley 2586 fue expedida y publicada el 19 de junio de 2026 (Diario Oficial 53.527). Por su artículo 114 rige desde la promulgación. La GOA DIAN 2676, edición 19/10/2026, numeral 4.3, se refiere expresamente a normas vigentes expedidas hasta el 19/06/2026; por ello esta ley está dentro del corte temporal. Estar en el corte NO significa que todos sus artículos sean indicadores confirmados para Gestor II CT-CR-3007.' },
    { type: 'objective', items: [
      'Identificar el objeto y ámbito de la Ley 2586 sin confundir obligaciones aduaneras con deudas tributarias administradas en cartera.',
      'Distinguir la ley vigente del Decreto Ley 920 de 2023 derogado, reconociendo las reglas de transición para asuntos anteriores.',
      'Aplicar favorabilidad, legalidad, tipicidad y competencia en situaciones administrativas concretas.',
      'Ubicar el alcance del tema frente a las funciones del empleo y a los indicadores que deben consultarse por número de inscripción.',
    ] },
    { type: 'definition', title: '¿Qué regula la Ley 2586?', text: 'Artículo 1: régimen sancionatorio y decomiso de mercancías en materia aduanera y procedimientos de la DIAN por incumplimientos de obligaciones y disposiciones aduaneras en operaciones de comercio exterior. No sustituye por sí misma al Estatuto Tributario ni regula de forma general la prescripción, el mandamiento de pago o las devoluciones de impuestos nacionales que estudias en M9–M16.' },
    { type: 'comparison', title: 'Límites materiales: no aplicar una norma fuera de su asunto', columns: ['Asunto', 'Fuente principal de estudio', 'Precaución'], rows: [
      ['Sanciones, aprehensión y decomiso aduaneros', 'Ley 2586/2026 y normativa aduanera pertinente', 'Comprobar tipo de operación y fecha del hecho/proceso.'],
      ['Cobro coactivo de obligaciones tributarias', 'Estatuto Tributario y procedimiento propio', 'No trasladar automáticamente sanciones ni términos aduaneros.'],
      ['Recaudo y control de entidades recaudadoras', 'ET y procedimientos de EAR', 'Su régimen sancionatorio es distinto al decomiso de mercancías.'],
      ['Devoluciones y compensaciones de impuestos', 'Estatuto Tributario y reglamentación especial', 'No confundir devolución tributaria con controversia aduanera.'],
    ] },
    { type: 'article', article: 'Artículo 2', title: 'Principios que orientan una PJS', text: 'La Ley 2586 consagra, entre otros, favorabilidad, legalidad y tipicidad. Para decidir una sanción se debe comprobar que existe conducta descrita normativamente, sanción correlativa, autoridad competente y respeto del procedimiento. La favorabilidad opera cuando corresponde conforme al régimen y las condiciones de la ley, no por elección discrecional del funcionario.', sourceId: 'ley-2586-2026' },
    { type: 'article', article: 'Artículo 3', title: 'Fiscalización aduanera y competencia', text: 'La DIAN ejerce fiscalización aduanera para verificar cumplimiento de obligaciones en operaciones de comercio exterior y adoptar las medidas previstas legalmente. En una PJS se debe delimitar si el caso es aduanero o tributario antes de determinar la dependencia o el procedimiento a seguir.', sourceId: 'ley-2586-2026' },
    { type: 'article', article: 'Artículo 112', title: 'Transición: las actuaciones anteriores no desaparecen', text: 'Para operaciones iniciadas bajo el Decreto Ley 920 de 2023, el régimen de obligaciones, infracciones y sanciones se analiza conforme a la norma vigente al iniciarse la operación, sin perjuicio de la favorabilidad. Los procesos aduaneros en curso y sus actuaciones sujetas a términos tienen reglas de transición específicas. No asumir que la derogatoria anula automáticamente todo expediente previo.', sourceId: 'ley-2586-2026' },
    { type: 'article', article: 'Artículo 114', title: 'Vigencia y derogatoria', text: 'La Ley 2586 rige desde su promulgación el 19/06/2026 y deroga el Decreto Ley 920 de 2023 y el artículo 51 de la Ley 1762 de 2015. La normativa anterior conserva relevancia para estudiar los supuestos transitorios del artículo 112; no citarla como regla general vigente sin analizar el caso.', sourceId: 'ley-2586-2026' },
    { type: 'steps', title: 'Método de análisis en casos de transición aduanera', items: [
      'Precisar si la operación y la conducta son aduaneras o corresponden a la gestión tributaria del empleo.',
      'Determinar fecha de inicio de la operación y actuaciones, sin reducir la cronología a la fecha de una sanción.',
      'Identificar norma sustancial y procedimiento aplicables conforme al artículo 112.',
      'Comprobar posible favorabilidad y tipicidad con soporte normativo, sin trasladar reglas por analogía.',
      'Documentar la competencia, hechos probados, motivación, garantías y decisión.',
    ] },
    { type: 'decision-simulator', title: 'Caso práctico: un expediente aduanero que empezó antes de la reforma', text: 'Selecciona la actuación más consistente con las reglas legales de transición.',
      scenario: 'Una operación aduanera comenzó durante la vigencia del Decreto Ley 920 de 2023 y está en trámite cuando entra en vigor la Ley 2586 de 2026. Un servidor propone archivar todo sin estudiar los hechos porque el decreto fue derogado; otro propone aplicar sin examen todas las sanciones anteriores.',
      prompt: '¿Cuál es la respuesta jurídicamente fundada?',
      options: [
        { id: 'a', text: 'Examinar fechas, tipo de operación, equivalencia de la conducta y reglas de transición del artículo 112, valorando la favorabilidad que proceda.', correct: true, rationale: 'La derogatoria no suprime automáticamente procesos en curso ni permite ignorar favorabilidad y tipicidad.' },
        { id: 'b', text: 'Archivar todas las actuaciones porque cualquier derogatoria hace inexistentes los hechos anteriores.', correct: false, rationale: 'Desconoce el régimen transitorio que la ley prevé expresamente.' },
        { id: 'c', text: 'Imponer automáticamente la sanción anterior sin comparar los presupuestos y sin examinar favorabilidad.', correct: false, rationale: 'Omite garantías y el análisis exigible en la transición.' },
      ] },
    { type: 'checkpoint', questionId: 'q-ley2586-2026-01' },
    { type: 'checkpoint', questionId: 'q-ley2586-2026-02' },
    { type: 'checkpoint', questionId: 'q-ley2586-2026-03' },
    { type: 'trap', title: 'Prioridad de estudio para CT-CR-3007', text: 'La ficha del empleo pertenece al proceso misional Cumplimiento de Obligaciones Tributarias y subprocesos Administración de Cartera y Recaudo-Devoluciones. La Ley 2586 es una actualización normativa aduanera útil para conocimientos TACI y delimitación de competencia, pero su presencia exacta en la prueba individual debe contrastarse con los indicadores publicados por el operador para el número de inscripción. No sustituir el estudio del núcleo tributario por esta ley.' },
    { type: 'sources', sourceIds: ['ley-2586-2026', 'decreto-920-2023-transicion', 'goa-cnsc-2676-2026', 'merf-ct-cr-3007'] },
  ],
}
