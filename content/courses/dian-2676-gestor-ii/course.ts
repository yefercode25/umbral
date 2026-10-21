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
import { dianLey2586AduanasLesson } from './modules/ley2586AduanasLesson'
import { dianLey2586AduanasQuestions } from './questions/ley2586AduanasQuestions'
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
  disclaimer: 'Preparación independiente, no afiliada ni avalada por DIAN o CNSC. Se verificó directamente la GOA de 19/10/2026: sección 4.3 incluye normas vigentes expedidas hasta el 19/06/2026. Ley 2586/2026 queda dentro del corte temporal, sin garantizar que sea eje individual para CT-CR-3007. El MERF y los complementos no reemplazan los indicadores por número de inscripción ni las reglas de Acuerdo y Anexo.',
  accent: '#167C80',
  version: '2026.10.21-dian-goa-ley2586.1',
  updatedAt: '2026-10-21',
  officialGuideStatus: 'published',
  opec: '236844',
  jobCode: '302 · Grado 2',
  salaryLabel: '$7.988.200 · vigencia salarial 2025',
  cardArtwork: '/media/editorial/course-dian-2676-cover.webp',
  heroArtwork: '/media/editorial/course-dian-2676-cover.webp',
  studyPlanLabel: 'Ruta de profundización DIAN · Gestor II',
  guideNotice: 'GOA CNSC 19/10/2026 verificada: corte normativo INCLUSIVO hasta el 19/06/2026 (num. 4.3). Se incorporó Ley 2586/2026 como complemento aduanero; indicadores individuales por número de inscripción, no supuestos. Funcionales: PJS de tres alternativas, mínimo 70,00; comportamentales e integridad: Likert de cuatro niveles sin clave; prueba el 08/11/2026, jornada de 5 horas. Consulta tu citación y condiciones definitivas en SIMO.',
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
  lessons: [...dianMasterTheoryLessons, ...dianLessons, ...dianTransversalLessons, ...dianDeepTheoryLessons, ...dianTheoryAuditLessons, dianOfficialGuideLesson, dianLey2586AduanasLesson, ...dianAdvancedCaseworkLessons, ...dianAdvancedDossierLessons, ...dianAdvancedLegalClinicLessons, ...dianAppliedPublicServiceLessons],
  questions: [...dianMasterTheoryQuestions, ...dianMasterPracticeQuestions, ...dianQuestions, ...dianIntegratedQuestions, ...dianFoundationExpansionQuestions, ...dianAlpha4ExpansionQuestions, ...dianTransversalQuestions, ...dianDeepTheoryExpansionQuestions, ...dianTheoryAuditExpansionQuestions, ...dianAdvancedSituationalQuestions, ...dianAdvancedLegalClinicQuestions, ...dianAppliedPublicServiceQuestions, ...dianLey2586AduanasQuestions],
  sources: [...dianSources, ...dianTransversalSources, ...dianAuditExpansionSources, ...dianAppliedPublicServiceSources],
}
