import { dianGestorCourse } from '../../content/courses/dian-2676-gestor-ii/course'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import type { Course } from '../types/course'

export const courses: Course[] = [dianGestorCourse, procuraduriaCourse]

export function getCourseBySlug(slug?: string | null) {
  return courses.find((course) => course.slug === slug) ?? null
}

export function getCourseById(id?: string | null) {
  return courses.find((course) => course.id === id) ?? null
}

export function getRequestedCourse(slug?: string | null) {
  return getCourseBySlug(slug) ?? dianGestorCourse
}
