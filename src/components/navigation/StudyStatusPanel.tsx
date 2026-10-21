import { ArrowRight, Award, BookOpenCheck, Flame, Sparkles, Target } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { courseCompletion, nextLesson, publishedLessons } from '../../lib/course'
import { getCourseBySlug, getRequestedCourse } from '../../lib/courses'
import { todayKey } from '../../lib/date'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import { ProgressBar } from '../ui/ProgressBar'
import styles from './StudyStatusPanel.module.css'

export function StudyStatusPanel() {
  const location = useLocation()
  const selectedSlug = useSettingsStore((state) => state.activeCourseSlug)
  const progressByCourse = useProgressStore((state) => state.courses)
  const routeSlug = location.pathname.match(/^\/courses\/([^/]+)/)?.[1] ?? new URLSearchParams(location.search).get('course')
  const course = getCourseBySlug(routeSlug) ?? getRequestedCourse(selectedSlug)
  const progress = progressByCourse[course.id]
  const completed = publishedLessons(course).filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  const correct = Object.values(progress?.questionStats ?? {}).reduce((sum, stat) => sum + stat.correct, 0)
  const answered = Object.values(progress?.questionStats ?? {}).reduce((sum, stat) => sum + stat.attempts, 0)
  const completion = courseCompletion(course, progress)
  const goal = progress?.dailyGoalMinutes ?? 25
  const todayMinutes = progress?.todayDate === todayKey() ? progress.todayMinutes : 0
  const next = nextLesson(course, progress)
  const badge = completed >= 100 ? 'Maestro del conocimiento' : completed >= 25 ? 'Explorador avanzado' : completed >= 5 ? 'Explorador constante' : 'Explorador en formación'

  return <aside className={styles.panel} aria-label="Estado de mi aprendizaje">
    <div className={styles.hud}>
      <div title="Lecciones completadas"><BookOpenCheck size={21}/><strong>{completed}</strong><small>lecciones</small></div>
      <div title="Respuestas correctas acumuladas"><Sparkles size={22}/><strong>{correct}</strong><small>aciertos</small></div>
    </div>
    <section className={styles.card}>
      <div className={styles.rank}><span className={styles.trophy}><Award size={30}/></span><div><small>TU NIVEL ACTUAL</small><h2>{badge}</h2></div></div>
      <p>¡Cada lección cuenta! Avanza a tu ritmo, sin vidas ni penalizaciones por equivocarte.</p>
      <ProgressBar value={completion}/>
      <div className={styles.footer}><span>{completion}% del curso</span><span>{completed}/{publishedLessons(course).length}</span></div>
    </section>
    <section className={styles.card}>
      <h2 className={styles.cardTitle}><Flame size={21}/> Tu meta de hoy</h2>
      <div className={styles.goal}><strong>{todayMinutes}<small> / {goal} min</small></strong><span>{todayMinutes >= goal ? '¡Meta alcanzada!' : 'Puedes conseguirlo'}</span></div>
      <ProgressBar value={Math.min(100, Math.round(todayMinutes / goal * 100))}/>
      {next && <Link className={styles.go} to={`/courses/${course.slug}/lesson/${next.id}`}>Continuar estudiando <ArrowRight size={18}/></Link>}
    </section>
    <section className={styles.card}>
      <h2 className={styles.cardTitle}><Target size={21}/> Tu práctica</h2>
      <div className={styles.metric}><strong>{answered}</strong><span>respuestas realizadas</span></div>
      <div className={styles.metric}><strong>{answered ? Math.round(correct / answered * 100) : 0}%</strong><span>precisión acumulada</span></div>
      <Link className={styles.go} to={`/practice?course=${course.slug}`}>Ir a practicar <ArrowRight size={18}/></Link>
    </section>
    <p className={styles.disclaimer}>Tu progreso se guarda en este dispositivo de manera independiente para cada curso.</p>
  </aside>
}
