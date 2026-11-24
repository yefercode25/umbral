import type { Course } from '../../../src/types/course'
import { procuraduriaUnits } from './blueprints'
import { procuraduriaLessons, procuraduriaModules, procuraduriaQuestions, procuraduriaSituationalQuestions, procuraduriaTransferQuestions } from './buildContent'
import { procuraduriaSources } from './sources'
import { procuraduriaIntegratedQuestions } from './integratedCases'
import { procuraduriaDossierQuestions } from './dossierQuestions'
import { procuraduriaExceptionQuestions } from './exceptionQuestions'
import { isPgnKnowledge } from '../../../src/lib/procuraduriaScopes'

const coreModuleIds = Array.from({ length: 35 }, (_, index) => `pgn-m${20 + index}`)
const transversalModuleIds = [...Array.from({ length: 20 }, (_, index) => `pgn-m${55 + index}`), ...Array.from({ length: 5 }, (_, index) => `pgn-m${80 + index}`)]
const defaultModuleIds = Array.from({ length: 75 }, (_, index) => `pgn-m${index}`)

export const procuraduriaCourse: Course = {
  id: 'procuraduria-104-2026-3pu15',
  slug: 'procuraduria-104-2026-3pu15',
  title: 'Procuraduría 104-2026 · Profesional Universitario',
  shortTitle: 'PGN 3PU-15',
  subtitle: 'Convocatoria 104-2026 · 3PU-15',
  description: 'Preparación integral desde cero para el empleo Profesional Universitario 3PU-15: alfabetización jurídica, Estado y Procuraduría, instrucción disciplinaria, derecho probatorio, función preventiva, contratación, gestión pública, sistemas de información, evidencia digital, fundamentos profesionales de Ingeniería de Sistemas y competencias comportamentales.',
  disclaimer: 'Preparación educativa independiente. Umbral no está afiliado, patrocinado, avalado ni publicado por la Procuraduría General de la Nación. El curso se construye con la Convocatoria 104-2026 versión 4 y fuentes oficiales vigentes, y se versionará cuando existan orientaciones oficiales más específicas sobre la prueba.',
  accent: '#5F9E80',
  version: '2026.11.23-rc.4',
  updatedAt: '2026-11-23',
  officialGuideStatus: 'pending',
  jobCode: '3PU-15',
  salaryLabel: '$6.889.867 · vigencia 2025',
  cardArtwork: '/media/editorial/course-procuraduria-104-2026.webp',
  heroArtwork: '/media/editorial/course-procuraduria-104-2026.webp',
  guideNotice: 'La convocatoria 104-2026 es la base del perfil. Para el nivel profesional, la Resolución 076/2026 (arts. 18–20 y modificaciones) asigna 70 % a conocimientos (eliminatoria, mínimo oficial 65/100), 20 % a comportamentales y 10 % a antecedentes. Los resultados de Umbral son formativos; la distribución interna y el formato específico quedan sujetos a la guía oficial. Los simulacros separan conocimientos, competencias y refuerzo técnico.',
  studyPlanLabel: 'Plan de 16 semanas · conocimientos comunes y práctica aplicada',
  sourceIntro: 'La preparación se centra en los conocimientos comunes y específicos de la Convocatoria 104-2026, versión 4, aplicables al empleo, y en las reglas generales del concurso. Ofimática, datos y sistemas se practican como herramientas transversales para interpretar expedientes y apoyar decisiones; los temas avanzados de Ingeniería de Sistemas son complementarios, no una prueba exclusiva ni una ponderación oficial publicada.',
  practiceConfig: {
    coreLabel: 'Disciplinario, probatorio y misional',
    coreModuleIds,
    transversalLabel: 'Gestión, ofimática y datos',
    transversalModuleIds,
    diagnosticModuleIds: ['pgn-m0','pgn-m5','pgn-m10','pgn-m13','pgn-m15','pgn-m17','pgn-m20','pgn-m22','pgn-m25','pgn-m26','pgn-m27','pgn-m29','pgn-m30','pgn-m35','pgn-m36','pgn-m39','pgn-m45','pgn-m50','pgn-m60','pgn-m70','pgn-m82'],
    examModuleIds: defaultModuleIds.filter(isPgnKnowledge),
    studyModuleIds: defaultModuleIds,
    priorityModuleIds: [...Array.from({ length: 25 }, (_, index) => `pgn-m${20 + index}`), 'pgn-m15','pgn-m16','pgn-m17','pgn-m18','pgn-m45','pgn-m51','pgn-m52','pgn-m56','pgn-m58','pgn-m59','pgn-m65','pgn-m66','pgn-m67'],
    hasCaseLabs: true,
  },
  units: procuraduriaUnits,
  modules: procuraduriaModules,
  lessons: procuraduriaLessons,
  questions: [...procuraduriaQuestions, ...procuraduriaSituationalQuestions, ...procuraduriaTransferQuestions, ...procuraduriaDossierQuestions, ...procuraduriaIntegratedQuestions, ...procuraduriaExceptionQuestions],
  sources: procuraduriaSources,
}
