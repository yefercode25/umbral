import type { Course } from '../types/course'
import type { CourseProgress } from '../types/progress'

export const publishedLessons = (course: Course) => course.lessons.filter((lesson) => lesson.status === 'published')

export const courseCompletion = (course: Course, progress?: CourseProgress) => {
  const lessons = publishedLessons(course)
  if (lessons.length === 0) return 0
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  return Math.round((completed / lessons.length) * 100)
}

export const moduleCompletion = (course: Course, moduleId: string, progress?: CourseProgress) => {
  const lessons = course.lessons.filter((lesson) => lesson.moduleId === moduleId && lesson.status === 'published')
  if (lessons.length === 0) return 0
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  return Math.round((completed / lessons.length) * 100)
}

export const nextLesson = (course: Course, progress?: CourseProgress) => {
  const lessons = publishedLessons(course).sort((a, b) => {
    const ma = course.modules.find((m) => m.id === a.moduleId)?.order ?? 0
    const mb = course.modules.find((m) => m.id === b.moduleId)?.order ?? 0
    return ma === mb ? a.order - b.order : ma - mb
  })
  return lessons.find((lesson) => progress?.lessons[lesson.id]?.status !== 'completed') ?? lessons.at(-1)
}
