import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollPageToTop } from '../../lib/scroll'

/**
 * React Router keeps the document scroll position between client-side routes.
 * For Umbral each screen is a new study context, so route changes should start
 * at the beginning instead of leaving the learner midway down the next view.
 */
export function RouteScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    scrollPageToTop()
  }, [pathname])

  return null
}
