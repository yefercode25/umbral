import type { Course } from '../../../src/types/course'
import { dianUnits, dianModules } from './modules/modules'
import { dianLessons } from './modules/lessons'
import { dianTransversalLessons } from './modules/transversalLessons'
import { dianDeepTheoryLessons } from './modules/deepTheoryLessons'
import { dianTheoryAuditLessons } from './modules/theoryAuditLessons'
import { dianQuestions } from './questions/questions'
import { dianIntegratedQuestions } from './questions/integratedCases'
import { dianFoundationExpansionQuestions } from './questions/foundationExpansion'
import { dianAlpha4ExpansionQuestions } from './questions/alpha4Expansion'
import { dianTransversalQuestions } from './questions/transversalExpansion'
import { dianDeepTheoryExpansionQuestions } from './questions/deepTheoryExpansion'
import { dianTheoryAuditExpansionQuestions } from './questions/theoryAuditExpansion'
import { dianSources } from './sources/sources'
import { dianTransversalSources } from './sources/transversalSources'
import { dianAuditExpansionSources } from './sources/auditExpansionSources'

export const dianGestorCourse: Course = {
  id: 'dian-2676-gestor-ii',
  slug: 'dian-2676-gestor-ii',
  title: 'DIAN 2676 · Gestor II',
  shortTitle: 'Gestor II',
  subtitle: 'OPEC 236844 · CT-CR-3007',
  description: 'Preparación progresiva para el empleo Gestor II, desde fundamentos institucionales hasta cartera, cobro, recaudo, devoluciones, competencias, práctica situacional y un bloque transversal complementario de herramientas y razonamiento.',
  disclaimer: 'Preparación independiente. No afiliada, avalada ni publicada por la DIAN o la CNSC. El currículo se deriva del MERF y fuentes oficiales vigentes; se ajustará cuando se publique la GOA definitiva del proceso 2676.',
  accent: '#167C80',
  version: '2026.09.13-alpha.6',
  updatedAt: '2026-09-13',
  officialGuideStatus: 'pending',
  opec: '236844',
  jobCode: '302 · Grado 2',
  salaryLabel: '$7.988.200 · vigencia salarial 2025',
  cardArtwork: '/media/editorial/course-dian-2676-cover.webp',
  heroArtwork: '/media/editorial/course-dian-2676-cover.webp',
  studyPlanLabel: 'Plan de 8 semanas + transversal',
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
  lessons: [...dianLessons, ...dianTransversalLessons, ...dianDeepTheoryLessons, ...dianTheoryAuditLessons],
  questions: [...dianQuestions, ...dianIntegratedQuestions, ...dianFoundationExpansionQuestions, ...dianAlpha4ExpansionQuestions, ...dianTransversalQuestions, ...dianDeepTheoryExpansionQuestions, ...dianTheoryAuditExpansionQuestions],
  sources: [...dianSources, ...dianTransversalSources, ...dianAuditExpansionSources],
}
