import type { Course } from '../types/course'
import { getRequestedCourse } from './courses'

export function getCourseFromSearchParams(searchParams: URLSearchParams) {
  return getRequestedCourse(searchParams.get('course'))
}

export function withCourse(path: string, course: Course, params: Record<string, string | undefined> = {}) {
  const query = new URLSearchParams({ course: course.slug })
  for (const [key, value] of Object.entries(params)) {
    if (value) query.set(key, value)
  }
  return `${path}?${query.toString()}`
}
