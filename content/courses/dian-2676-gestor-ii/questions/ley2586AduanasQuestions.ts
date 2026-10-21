import type { Question } from '../../../../src/types/course'

/** Casos originales de estudio. No son ítems oficiales CNSC, y no se asignan a indicadores personales no verificados. */
export const dianLey2586AduanasQuestions: Question[] = [
  {
    id: 'q-ley2586-2026-01', moduleId: 'm3', skillIds: ['ley-2586-2026', 'corte-normativo'], type: 'pjs', difficulty: 2,
    case: 'Un equipo actualiza su temario con la GOA del 19 de octubre y encuentra una norma aduanera expedida y promulgada el 19 de junio de 2026. Un compañero insiste en que el corte excluye cualquier disposición de esa fecha.',
    stem: '¿Cómo debe verificarse su inclusión temporal?',
    options: [
      { id: 'a', text: 'Aplicar el numeral 4.3 de la GOA que incluye las normas vigentes expedidas hasta el 19 de junio de 2026 y verificar la vigencia específica de la ley.', rationale: 'El día 19 está incluido en el enunciado y la Ley 2586 fue promulgada entonces.' },
      { id: 'b', text: 'Excluir toda norma del 19 de junio porque solo se aceptarían las del día 18 o anteriores.', rationale: 'Contradice la redacción de la guía vigente.' },
      { id: 'c', text: 'Incluir indistintamente normas publicadas durante julio y agosto de 2026 porque son más recientes.', rationale: 'Ser reciente no elimina el corte normativo del proceso.' },
    ], correctOptionId: 'a', explanation: 'GOA 19/10/2026, sección 4.3: normas vigentes expedidas hasta el 19/06/2026. La Ley 2586 fue expedida y publicada ese día. Su inclusión temporal no asegura presencia entre los indicadores particulares.', sourceIds: ['goa-cnsc-2676-2026', 'ley-2586-2026'], verifiedAt: '2026-10-20',
  },
  {
    id: 'q-ley2586-2026-02', moduleId: 'm3', skillIds: ['ley-2586-2026', 'procedimiento-aduanero'], type: 'pjs', difficulty: 3,
    case: 'En una dependencia DIAN llega una actuación relacionada con aprehensión de mercancías por presunto incumplimiento de obligaciones aduaneras. Se plantea tramitarla usando exclusivamente reglas de cobro coactivo tributario.',
    stem: '¿Qué revisión debe anteceder a la actuación?',
    options: [
      { id: 'a', text: 'Identificar el régimen aduanero sancionatorio y de decomiso aplicable, y la competencia conforme a la Ley 2586.', rationale: 'El objeto de los artículos 1 y 3 corresponde precisamente a esta materia.' },
      { id: 'b', text: 'Usar de inmediato los artículos de cobro tributario porque toda obligación DIAN es la misma.', rationale: 'Confunde regímenes jurídicos distintos.' },
      { id: 'c', text: 'Omitir cualquier análisis jurídico porque la aprehensión es solo una operación logística.', rationale: 'Desconoce el fundamento legal y las garantías del procedimiento.' },
    ], correctOptionId: 'a', explanation: 'Artículos 1 y 3 de la Ley 2586: régimen de sanciones y decomiso aduanero y competencias de fiscalización. No se confunde con el cobro del crédito tributario.', sourceIds: ['ley-2586-2026', 'merf-ct-cr-3007'], verifiedAt: '2026-10-20',
  },
  {
    id: 'q-ley2586-2026-03', moduleId: 'm3', skillIds: ['ley-2586-2026', 'regimen-transitorio'], type: 'pjs', difficulty: 4,
    case: 'Una operación aduanera comenzó durante la vigencia del Decreto Ley 920 de 2023, y se adelanta un procedimiento que sigue en curso tras la entrada en vigor de la Ley 2586 de 2026.',
    stem: '¿Qué criterio debe adoptar quien revise el expediente?',
    options: [
      { id: 'a', text: 'Comprobar normas aplicables a la operación y actuaciones según el artículo 112, la tipicidad equivalente cuando corresponda y la favorabilidad.', rationale: 'Es el núcleo del régimen transitorio y las garantías.' },
      { id: 'b', text: 'Declarar extinguido automáticamente todo el proceso por la derogatoria del Decreto Ley 920.', rationale: 'El artículo 112 prevé expresamente situaciones de transición.' },
      { id: 'c', text: 'Aplicar siempre la sanción anterior, aunque la nueva norma resulte favorable al administrado.', rationale: 'Omite el principio de favorabilidad previsto por la ley.' },
    ], correctOptionId: 'a', explanation: 'Artículo 112: operaciones previas, actuaciones en curso, equivalencia de tipos y favorabilidad requieren examen individual; no hay extinción automática.', sourceIds: ['ley-2586-2026', 'decreto-920-2023-transicion'], verifiedAt: '2026-10-20',
  },
  {
    id: 'q-ley2586-2026-04', moduleId: 'm3', skillIds: ['ley-2586-2026', 'derogatoria'], type: 'pjs', difficulty: 2,
    case: 'Un instructor cita el Decreto Ley 920 de 2023 como régimen sancionatorio aduanero general vigente sin mencionar una ley posterior. La operación que estudia comenzó después del 19 de junio de 2026.',
    stem: '¿Qué corrección de referencia normativa corresponde?',
    options: [
      { id: 'a', text: 'Verificar la Ley 2586 de 2026 como nuevo marco general, pues su artículo 114 derogó el Decreto Ley 920 desde la promulgación.', rationale: 'El artículo 114 identifica la derogatoria y vigencia.' },
      { id: 'b', text: 'Mantener el Decreto Ley 920 como única norma vigente porque es anterior y más conocido.', rationale: 'Ignora derogatoria expresa.' },
      { id: 'c', text: 'Aplicar directamente el Estatuto Tributario a toda infracción aduanera sin revisar la materia.', rationale: 'Confunde regímenes de distinta especialidad.' },
    ], correctOptionId: 'a', explanation: 'Artículo 114 Ley 2586/2026: vigencia desde promulgación y derogación del Decreto Ley 920/2023, sin perjuicio de reglas transitorias para hechos previos.', sourceIds: ['ley-2586-2026', 'decreto-920-2023-transicion'], verifiedAt: '2026-10-20',
  },
  {
    id: 'q-ley2586-2026-05', moduleId: 'm3', skillIds: ['ley-2586-2026', 'legalidad-tipicidad'], type: 'pjs', difficulty: 3,
    case: 'Una oficina propone una sanción aduanera porque considera inconveniente la conducta del usuario, pero no identifica una infracción tipificada ni una sanción prevista por la ley.',
    stem: '¿Cuál es la actuación que respeta el marco sancionatorio?',
    options: [
      { id: 'a', text: 'Verificar la descripción de la infracción, su sanción, la competencia y el debido proceso antes de cualquier decisión.', rationale: 'Aplica legalidad y tipicidad del artículo 2.' },
      { id: 'b', text: 'Imponer una multa discrecional para mejorar el indicador de control.', rationale: 'Una finalidad de control no crea infracción ni sanción.' },
      { id: 'c', text: 'Sancionar con base en analogía con un trámite de recaudo tributario.', rationale: 'No demuestra adecuación típica aduanera.' },
    ], correctOptionId: 'a', explanation: 'El artículo 2 de la Ley 2586 desarrolla legalidad y tipicidad como garantías frente al poder sancionador.', sourceIds: ['ley-2586-2026'], verifiedAt: '2026-10-20',
  },
  {
    id: 'q-ley2586-2026-06', moduleId: 'm3', skillIds: ['ley-2586-2026', 'perfil-empleo'], type: 'pjs', difficulty: 2,
    case: 'Un aspirante a Gestor II CT-CR-3007 ve que la Ley 2586 está dentro del corte normativo y decide dejar de estudiar cartera, cobro, EAR y devoluciones para dedicar todas sus sesiones a decomiso aduanero.',
    stem: '¿Qué ajuste es coherente con la GOA y la ficha del empleo?',
    options: [
      { id: 'a', text: 'Conservar el núcleo de cartera, recaudo y devoluciones; estudiar Ley 2586 como complemento y contrastarla con indicadores individuales.', rationale: 'La GOA delimita por funciones y el MERF se enfoca en subprocesos tributarios.' },
      { id: 'b', text: 'Sustituir automáticamente todo el programa por la nueva ley, sin revisar funciones ni indicadores.', rationale: 'Confunde inclusión temporal con temario completo de un empleo.' },
      { id: 'c', text: 'Descartar la ley por completo porque nunca se estudian disposiciones aduaneras para un empleado DIAN.', rationale: 'Desconoce las competencias TACI del MERF y la fecha de la norma.' },
    ], correctOptionId: 'a', explanation: 'La GOA 4.3 asocia los indicadores al empleo; CT-CR-3007 describe Administración de Cartera y Recaudo-Devoluciones y un marco funcional básico TACI.', sourceIds: ['goa-cnsc-2676-2026', 'merf-ct-cr-3007', 'ley-2586-2026'], verifiedAt: '2026-10-20',
  },
]
