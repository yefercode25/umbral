import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from '../components/navigation/BottomNav'
import { CourseSwitcher } from '../components/navigation/CourseSwitcher'
import { DesktopSidebar } from '../components/navigation/DesktopSidebar'
import { StudyStatusPanel } from '../components/navigation/StudyStatusPanel'
import { BrandMark } from '../components/navigation/BrandMark'
import { getCourseBySlug } from '../lib/courses'
import { useSettingsStore } from '../stores/settingsStore'
import styles from './AppShell.module.css'

export function AppShell() {
  const location = useLocation()
  const setActiveCourse = useSettingsStore((state) => state.setActiveCourse)
  useEffect(() => {
    const slug = location.pathname.match(/^\/courses\/([^/]+)/)?.[1] ?? new URLSearchParams(location.search).get('course')
    const course = getCourseBySlug(slug)
    if (course && useSettingsStore.getState().activeCourseSlug !== course.slug) setActiveCourse(course.slug)
  }, [location.pathname, location.search, setActiveCourse])
  const focus = /\/lesson\/|\/practice\/(mock|adaptive|diagnostic|cases\/)/.test(location.pathname)
  return <div className={`${styles.shell} ${focus ? styles.focus : ''}`}>
    <DesktopSidebar />
    <div className={styles.mainColumn}>
      <header className={styles.mobileTop}>
        <BrandMark compact />
        <CourseSwitcher compact />
      </header>
      <main className={styles.main} id="main-content"><Outlet /></main>
    </div>
    {!focus && <StudyStatusPanel />}
    {!focus && <BottomNav />}
  </div>
}
