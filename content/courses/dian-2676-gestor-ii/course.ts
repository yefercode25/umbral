import type { Course } from '../../../src/types/course'
import { dianUnits, dianModules } from './modules/modules'
import { dianLessons } from './modules/lessons'
import { dianTransversalLessons } from './modules/transversalLessons'
import { dianDeepTheoryLessons } from './modules/deepTheoryLessons'
import { dianTheoryAuditLessons } from './modules/theoryAuditLessons'
import { dianAdvancedCaseworkLessons } from './modules/advancedCaseworkLessons'
import { dianAdvancedDossierLessons } from './modules/advancedDossierLessons'
import { dianMasterTheoryLessons, dianMasterTheoryQuestions } from './modules/masterTheory2026'
import { dianMasterPracticeQuestions } from './questions/masterPractice2026'
import { dianAppliedPublicServiceLessons, dianAppliedPublicServiceQuestions } from './modules/appliedPublicService2026'
import { dianAppliedPublicServiceSources } from './sources/appliedPublicServiceSources2026'
import { dianOfficialGuideLesson } from './modules/officialGuide2026Lesson'
import { dianQuestions } from './questions/questions'
import { dianIntegratedQuestions } from './questions/integratedCases'
import { dianFoundationExpansionQuestions } from './questions/foundationExpansion'
import { dianAlpha4ExpansionQuestions } from './questions/alpha4Expansion'
import { dianTransversalQuestions } from './questions/transversalExpansion'
import { dianDeepTheoryExpansionQuestions } from './questions/deepTheoryExpansion'
import { dianTheoryAuditExpansionQuestions } from './questions/theoryAuditExpansion'
import { dianAdvancedSituationalQuestions } from './questions/advancedSituationalQuestions'
import { dianAdvancedLegalClinicLessons, dianAdvancedLegalClinicQuestions } from './modules/advancedLegalClinics'
import { dianSources } from './sources/sources'
import { dianTransversalSources } from './sources/transversalSources'
import { dianAuditExpansionSources } from './sources/auditExpansionSources'

export const dianGestorCourse: Course = {
  id: 'dian-2676-gestor-ii',
  slug: 'dian-2676-gestor-ii',
  title: 'DIAN 2676 · Gestor II',
  shortTitle: 'Gestor II',
  subtitle: 'OPEC 236844 · CT-CR-3007',
  description: 'Programa intensivo de Gestor II con fundamentos, expedientes y PJS de cartera, cobro, recaudo, EAR y devoluciones; incluye clínicas aplicadas de gestión documental, PQRSF, MIPG por vigencias, CPACA, servicio y Buen Gobierno. Ofimática y razonamiento se identifican como complementos, sujetos a los indicadores de la inscripción.',
  disclaimer: 'Preparación independiente, no afiliada ni avalada por la DIAN o la CNSC. La CNSC publicó la GOA el 08/10/2026 y anunció una actualización por corte normativo el 19/10/2026. Los ejes particulares se consultan por inscripción; el MERF CT-CR-3007 y los contenidos complementarios no sustituyen esos indicadores. El 19/06/2026 es la fecha de referencia del corte en ediciones anteriores: verificar el alcance literal en el PDF oficial de 19/10/2026 antes de incluir o excluir una norma expedida ese día.',
  accent: '#167C80',
  version: '2026.10.20-dian-goa.4',
  updatedAt: '2026-10-20',
  officialGuideStatus: 'published',
  opec: '236844',
  jobCode: '302 · Grado 2',
  salaryLabel: '$7.988.200 · vigencia salarial 2025',
  cardArtwork: '/media/editorial/course-dian-2676-cover.webp',
  heroArtwork: '/media/editorial/course-dian-2676-cover.webp',
  studyPlanLabel: 'Ruta de profundización DIAN · Gestor II',
  guideNotice: 'Actualización oficial CNSC del 19/10/2026: nueva versión de la GOA por ajustes de corte normativo. Verifica el texto íntegro antes de incluir una norma de la fecha límite. Indicadores por número de inscripción: no asumas que MERF o complementos equivalen a ejes particulares. Funcionales: PJS de tres alternativas. Comportamentales e integridad: autoinforme Likert de cuatro niveles. Revisa la citación en SIMO y la guía actualizada en Fuentes.',
  practiceConfig: {
    coreLabel: 'Núcleo CT-CR-3007',
    coreModuleIds: ['m9','m10','m11','m12','m13','m14','m15','m16'],
    transversalLabel: 'Transversal',
    transversalModuleIds: ['m24','m25','m26','m27','m28'],
    diagnosticModuleIds: Array.from({ length: 20 }, (_, index) => `m${index + 1}`),
    examModuleIds: Array.from({ length: 17 }, (_, index) => `m${index + 1}`),
    studyModuleIds: Array.from({ length: 21 }, (_, index) => `m${index}`),
    priorityModuleIds: ['m9','m10','m11','m12','m13','m14','m15','m16'],
    hasCaseLabs: true,
  },
  units: dianUnits,
  modules: dianModules,
  lessons: [...dianMasterTheoryLessons, ...dianLessons, ...dianTransversalLessons, ...dianDeepTheoryLessons, ...dianTheoryAuditLessons, dianOfficialGuideLesson, ...dianAdvancedCaseworkLessons, ...dianAdvancedDossierLessons, ...dianAdvancedLegalClinicLessons, ...dianAppliedPublicServiceLessons],
  questions: [...dianMasterTheoryQuestions, ...dianMasterPracticeQuestions, ...dianQuestions, ...dianIntegratedQuestions, ...dianFoundationExpansionQuestions, ...dianAlpha4ExpansionQuestions, ...dianTransversalQuestions, ...dianDeepTheoryExpansionQuestions, ...dianTheoryAuditExpansionQuestions, ...dianAdvancedSituationalQuestions, ...dianAdvancedLegalClinicQuestions, ...dianAppliedPublicServiceQuestions],
  sources: [...dianSources, ...dianTransversalSources, ...dianAuditExpansionSources, ...dianAppliedPublicServiceSources],
}
