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
  disclaimer: 'Preparación independiente. No afiliada, avalada ni publicada por la DIAN o la CNSC. La Guía de Orientación al Aspirante del proceso DIAN 2676 fue publicada el 8 de octubre de 2026. Los ejes/indicadores particulares de la inscripción aún no se han aportado; este temario se fundamenta en el MERF CT-CR-3007 y fuentes enlazadas, sin atribuirse carácter oficial. Corte normativo evaluable referido en GOA: antes del 19 de junio de 2026.',
  accent: '#167C80',
  version: '2026.10.12-dian-transversal.3',
  updatedAt: '2026-10-12',
  officialGuideStatus: 'published',
  opec: '236844',
  jobCode: '302 · Grado 2',
  salaryLabel: '$7.988.200 · vigencia salarial 2025',
  cardArtwork: '/media/editorial/course-dian-2676-cover.webp',
  heroArtwork: '/media/editorial/course-dian-2676-cover.webp',
  studyPlanLabel: 'Ruta de profundización DIAN · Gestor II',
  guideNotice: 'La GOA fue publicada el 08/10/2026. La sección de indicadores requiere consulta por número de inscripción; no se presume que el MERF o los módulos complementarios equivalgan a ejes individuales. La prueba funcional usa PJS de tres alternativas, mientras las comportamentales y de integridad usan autoinforme Likert de cuatro opciones. Consulta la guía oficial en Fuentes.',
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
