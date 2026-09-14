import type { Course } from '../../../src/types/course'
import { procuraduriaUnits } from './blueprints'
import { procuraduriaLessons, procuraduriaModules, procuraduriaQuestions } from './buildContent'
import { procuraduriaSources } from './sources'
import { procuraduriaIntegratedQuestions } from './integratedCases'

const coreModuleIds = Array.from({ length: 35 }, (_, index) => `pgn-m${20 + index}`)
const transversalModuleIds = [...Array.from({ length: 20 }, (_, index) => `pgn-m${55 + index}`), ...Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`)]
const defaultModuleIds = [...Array.from({ length: 75 }, (_, index) => `pgn-m${index}`), ...Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`)]

export const procuraduriaCourse: Course = {
  id: 'procuraduria-104-2026-3pu15',
  slug: 'procuraduria-104-2026-3pu15',
  title: 'Procuraduría 104-2026 · Profesional Universitario',
  shortTitle: 'PGN 3PU-15',
  subtitle: 'Convocatoria 104-2026 · 3PU-15',
  description: 'Preparación integral desde cero para el empleo Profesional Universitario 3PU-15: alfabetización jurídica, Estado y Procuraduría, instrucción disciplinaria, derecho probatorio, función preventiva, contratación, gestión pública, sistemas de información, evidencia digital, fundamentos profesionales de Ingeniería de Sistemas y competencias comportamentales.',
  disclaimer: 'Preparación educativa independiente. Umbral no está afiliado, patrocinado, avalado ni publicado por la Procuraduría General de la Nación. El curso se construye con la Convocatoria 104-2026 versión 4 y fuentes oficiales vigentes, y se versionará cuando existan orientaciones oficiales más específicas sobre la prueba.',
  accent: '#5F9E80',
  version: '2026.09.14-alpha.2',
  updatedAt: '2026-09-14',
  officialGuideStatus: 'pending',
  jobCode: '3PU-15',
  salaryLabel: '$6.889.867 · vigencia 2025',
  cardArtwork: '/media/editorial/course-procuraduria-104-2026.webp',
  heroArtwork: '/media/editorial/course-procuraduria-104-2026.webp',
  guideNotice: 'La Convocatoria 104-2026 versión 4 define funciones, conocimientos, competencias y ponderaciones. Umbral mantendrá este currículo vivo: si la Procuraduría publica una guía específica de orientación o distribución de contenidos para la prueba, las prioridades se ajustarán sin borrar tu progreso.',
  studyPlanLabel: 'Plan de 16 semanas + refuerzo profesional',
  sourceIntro: 'Este curso prioriza la Convocatoria 104-2026 versión 4, las reglas vigentes del concurso, el Manual de Funciones, la Constitución, el Código General Disciplinario con sus reformas, las guías institucionales y las normas oficiales directamente relacionadas con el perfil. El bloque profesional de Ingeniería de Sistemas es un refuerzo prudente derivado de los conocimientos específicos del área disciplinar y no una distribución oficial publicada de la prueba.',
  practiceConfig: {
    coreLabel: 'Disciplinario, probatorio y misional',
    coreModuleIds,
    transversalLabel: 'Gestión, sistemas y competencias',
    transversalModuleIds,
    diagnosticModuleIds: ['pgn-m0','pgn-m5','pgn-m10','pgn-m13','pgn-m15','pgn-m17','pgn-m20','pgn-m22','pgn-m25','pgn-m26','pgn-m27','pgn-m29','pgn-m30','pgn-m35','pgn-m36','pgn-m39','pgn-m45','pgn-m50','pgn-m60','pgn-m70','pgn-m82'],
    examModuleIds: defaultModuleIds,
    studyModuleIds: defaultModuleIds,
    priorityModuleIds: [...Array.from({ length: 25 }, (_, index) => `pgn-m${20 + index}`), ...Array.from({ length: 5 }, (_, index) => `pgn-m${60 + index}`), ...Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`)],
    hasCaseLabs: true,
  },
  units: procuraduriaUnits,
  modules: procuraduriaModules,
  lessons: procuraduriaLessons,
  questions: [...procuraduriaQuestions, ...procuraduriaIntegratedQuestions],
  sources: procuraduriaSources,
}
