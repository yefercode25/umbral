export function contextualCourseSlug(pathname: string, search: string) {
  const fromQuery = new URLSearchParams(search).get('course')
  if (fromQuery) return fromQuery
  const match = pathname.match(/^\/courses\/([^/]+)/)
  return match?.[1] ?? null
}

export function contextualNavHref(to: string, pathname: string, search: string) {
  if (to !== '/practice' && to !== '/progress' && to !== '/library') return to
  const course = contextualCourseSlug(pathname, search)
  return course ? `${to}?course=${encodeURIComponent(course)}` : to
}
