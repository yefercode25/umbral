import { ArrowRight, BookOpenCheck, Flame, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { courseCompletion, nextLesson, publishedLessons } from '../../lib/course'
import { courses } from '../../lib/courses'
import { withCourse } from '../../lib/courseQuery'
import { todayKey } from '../../lib/date'
import { useProgressStore } from '../../stores/progressStore'
import { CourseCard } from '../../components/learning/CourseCard'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import styles from './HomePage.module.css'

export function HomePage() {
  const progressByCourse = useProgressStore((state) => state.courses)
  const activeCourse = [...courses].sort((a, b) => {
    const aProgress = progressByCourse[a.id]
    const bProgress = progressByCourse[b.id]
    const aTime = aProgress?.lastActivityAt ? new Date(aProgress.lastActivityAt).getTime() : 0
    const bTime = bProgress?.lastActivityAt ? new Date(bProgress.lastActivityAt).getTime() : 0
    return bTime - aTime
  })[0] ?? courses[0]!
  const progress = progressByCourse[activeCourse.id]
  const completion = courseCompletion(activeCourse, progress)
  const next = nextLesson(activeCourse, progress)
  const todayMinutes = progress?.todayDate === todayKey() ? progress.todayMinutes : 0
  const goal = progress?.dailyGoalMinutes ?? 25

  return <div className="page">
    <header className={styles.topbar}><div><p className={styles.overline}>Umbral</p><h1>Tu estudio, con contexto.</h1></div><Link to="/settings" className={styles.settings} aria-label="Ajustes"><Settings size={19}/></Link></header>

    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <img className={styles.heroArt} src="/media/editorial/home-platform.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
        <span className={styles.pill}><BookOpenCheck size={15}/> Continuar · {activeCourse.shortTitle}</span>
        <h2>{next?.title ?? `Empieza ${activeCourse.shortTitle}`}</h2>
        <p>{next?.subtitle ?? activeCourse.description}</p>
        {next ? <Link to={`/courses/${activeCourse.slug}/lesson/${next.id}`}><Button size="lg" icon={<ArrowRight size={18}/>}>Estudiar ahora</Button></Link> : <Link to={`/courses/${activeCourse.slug}`}><Button size="lg" icon={<ArrowRight size={18}/>}>Ver curso</Button></Link>}
      </div>
      <div className={styles.goal}>
        <div className={styles.goalIcon}><Flame size={20}/></div>
        <div><span>Meta de hoy · {activeCourse.shortTitle}</span><strong>{todayMinutes} de {goal} min</strong></div>
        <ProgressBar value={Math.min(100, Math.round((todayMinutes / goal) * 100))}/>
      </div>
    </section>

    <section className={styles.section}><div className={styles.sectionHead}><div><span>Biblioteca activa</span><h2>Continúa o cambia de convocatoria</h2></div><Link to="/courses">Ver cursos</Link></div>
      <div className={styles.courseGrid}>{courses.map((course) => <CourseCard key={course.id} course={course} completion={courseCompletion(course, progressByCourse[course.id])} publishedLessonCount={publishedLessons(course).length}/>)}</div>
    </section>

    <section className={styles.quickGrid}>
      <Link to={withCourse('/practice', activeCourse)} className={styles.quick}><span>Practicar · {activeCourse.shortTitle}</span><strong>{activeCourse.questions.length} preguntas</strong><p>Resuelve casos y recibe explicación inmediata.</p></Link>
      <Link to={withCourse('/progress', activeCourse)} className={styles.quick}><span>Progreso · {activeCourse.shortTitle}</span><strong>{completion}% del contenido publicado</strong><p>Revisa lecciones, habilidades y constancia.</p></Link>
    </section>
  </div>
}
