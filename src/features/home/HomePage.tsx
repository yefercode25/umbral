import { ArrowRight, BookOpenCheck, ChevronDown, Flame, Network, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { courseCompletion, nextLesson, publishedLessons } from '../../lib/course'
import { getRequestedCourse } from '../../lib/courses'
import { todayKey } from '../../lib/date'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './HomePage.module.css'

export function HomePage() {
  const slug = useSettingsStore((state) => state.activeCourseSlug)
  const course = getRequestedCourse(slug)
  const progress = useProgressStore((state) => state.courses[course.id])
  const completion = courseCompletion(course, progress)
  const next = nextLesson(course, progress)
  const todayMinutes = progress?.todayDate === todayKey() ? progress.todayMinutes : 0
  const goal = progress?.dailyGoalMinutes ?? 25
  const isDian = course.id === 'dian-2676-gestor-ii'

  return <div className="page">
    <header className={styles.heading}>
      <div><h1>Continuar estudiando</h1></div>
      <Link className={styles.change} to="/courses">Cambiar curso <ChevronDown size={16}/></Link>
    </header>

    <section className={styles.hero} aria-label={`Continuar con ${course.shortTitle}`}>
      <div className={styles.heroCopy}>
        <span className={styles.tag}>🎯 CURSO SELECCIONADO · {course.opec ? `OPEC ${course.opec}` : 'ACTIVO'}</span>
        <h2>{course.shortTitle}</h2>
        <p>{next ? `Tu siguiente lección: ${next.title}` : '¡Has explorado todas las lecciones de este curso!'}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.start} to={next ? `/courses/${course.slug}/lesson/${next.id}` : `/courses/${course.slug}`}>
            {next ? 'CONTINUAR APRENDIENDO' : 'VER MI RUTA'} <ArrowRight size={19}/>
          </Link>
          {isDian && (
            <Link className={styles.atlasLink} to="/practice/workout">
              <Zap size={17}/> GIMNASIO INTERACTIVO
            </Link>
          )}
        </div>
      </div>
    </section>

    <div className={styles.stats}>
      <section><BookOpenCheck size={23}/><div><strong>{Object.values(progress?.lessons ?? {}).filter((item) => item.status === 'completed').length}<small>/{publishedLessons(course).length}</small></strong><span>Lecciones</span></div></section>
      <section><Flame size={23}/><div><strong>{todayMinutes}<small>/{goal} min</small></strong><span>Meta de hoy</span></div></section>
      <section><Target size={23}/><div><strong>{completion}%</strong><span>Avance del curso</span></div></section>
    </div>

    <div className={styles.pathHeading}><h2>Tu ruta de aprendizaje</h2><p>Selecciona un módulo para revisar sus lecciones.</p></div>
    <LearningPath course={course} progress={progress}/>
    <div className={styles.moreActions}>
      <Link to={`/practice?course=${course.slug}`}><Target size={19}/> Practicar con preguntas <ArrowRight size={17}/></Link>
      {isDian && <Link to="/library?tab=mapas"><Network size={19}/> Consultar Atlas Visual <ArrowRight size={17}/></Link>}
    </div>
  </div>
}
