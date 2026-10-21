import { useRef } from 'react'
import { BookOpenText, Check, ChevronDown, GraduationCap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { courseCompletion } from '../../lib/course'
import { courses, getCourseBySlug } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './CourseSwitcher.module.css'

/** The selected course is a preference, never a copy of or replacement for progress. */
export function CourseSwitcher({ compact = false }: { compact?: boolean }) {
  const selectorRef = useRef<HTMLDetailsElement>(null)
  const location = useLocation()
  const preferred = useSettingsStore((state) => state.activeCourseSlug)
  const setActiveCourse = useSettingsStore((state) => state.setActiveCourse)
  const progress = useProgressStore((state) => state.courses)
  const courseSlug = location.pathname.match(/^\/courses\/([^/]+)/)?.[1]
    ?? new URLSearchParams(location.search).get('course')
    ?? preferred
  const active = getCourseBySlug(courseSlug) ?? courses[0]!

  return <details className={`${styles.switcher} ${compact ? styles.compact : ''}`} ref={selectorRef}>
    <summary aria-label={`Curso actual: ${active.shortTitle}. Elegir otro curso`}>
      <span className={styles.emblem}><GraduationCap size={compact ? 19 : 23}/></span>
      <span className={styles.description}><small>ESTÁS APRENDIENDO</small><strong>{active.shortTitle}</strong></span>
      <ChevronDown className={styles.chevron} size={17}/>
    </summary>
    <div className={styles.menu} aria-label="Seleccionar un curso">
      <p>Cambia de curso cuando quieras. Tu progreso queda guardado por separado.</p>
      {courses.map((course) => {
        const completion = courseCompletion(course, progress[course.id])
        return <Link key={course.id} className={styles.choice} to={`/courses/${course.slug}`} onClick={() => { setActiveCourse(course.slug); selectorRef.current?.removeAttribute('open') }}>
          <span className={styles.choiceIcon}><BookOpenText size={19}/></span>
          <span><strong>{course.shortTitle}</strong><small>{completion}% completado</small></span>
          {course.id === active.id && <Check size={19} className={styles.check} aria-label="Seleccionado"/>}
        </Link>
      })}
      <Link to="/courses" className={styles.allCourses} onClick={() => selectorRef.current?.removeAttribute('open')}>Explorar todos los cursos</Link>
    </div>
  </details>
}
