import { dianCaseLabs } from '../../content/courses/dian-2676-gestor-ii/caseLabs'
import { procuraduriaCaseLabs } from '../../content/courses/procuraduria-104-2026-3pu15/caseLabs'
import type { CaseLab } from '../types/caseLab'

const caseLabsByCourse: Record<string, CaseLab[]> = {
  'dian-2676-gestor-ii': dianCaseLabs,
  'procuraduria-104-2026-3pu15': procuraduriaCaseLabs,
}

export function getCaseLabsForCourse(courseId: string) {
  return caseLabsByCourse[courseId] ?? []
}
