import { ArrowRight, BookOpenCheck, ChevronDown, Flame, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { ProgressBar } from '../../components/ui/ProgressBar'
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

  return <div className="page">
    <header className={styles.heading}>
      <div><span className={styles.eyebrow}><Sparkles size={15}/> APRENDE A TU RITMO</span><h1>¡A por tu próxima meta!</h1><p>Tu preparación comienza con un paso. Y después otro.</p></div>
      <Link className={styles.change} to="/courses">Cambiar curso <ChevronDown size={16}/></Link>
    </header>

    <section className={styles.hero} aria-label={`Continuar con ${course.shortTitle}`}>
      <div className={styles.heroCopy}>
        <span className={styles.tag}>🎯 CURSO SELECCIONADO</span>
        <h2>{course.shortTitle}</h2>
        <p>{next ? `Tu siguiente lección: ${next.title}` : '¡Has explorado todas las lecciones de este curso!'}</p>
        <Link className={styles.start} to={next ? `/courses/${course.slug}/lesson/${next.id}` : `/courses/${course.slug}`}>
          {next ? 'CONTINUAR APRENDIENDO' : 'VER MI RUTA'} <ArrowRight size={19}/>
        </Link>
      </div>
      <div className={styles.heroGraphic} aria-hidden="true">📚<span>⭐</span></div>
    </section>

    <div className={styles.stats}>
      <section><BookOpenCheck size={23}/><div><strong>{Object.values(progress?.lessons ?? {}).filter((item) => item.status === 'completed').length}<small>/{publishedLessons(course).length}</small></strong><span>Lecciones</span></div></section>
      <section><Flame size={23}/><div><strong>{todayMinutes}<small>/{goal} min</small></strong><span>Meta de hoy</span></div></section>
      <section><Target size={23}/><div><strong>{completion}%</strong><span>Avance del curso</span></div></section>
    </div>

    <div className={styles.pathHeading}>
      <span>🗺️ TU CAMINO DE APRENDIZAJE</span>
      <h2>Explora, practica y avanza</h2>
      <p>Tu ruta de {course.shortTitle} está organizada en secciones y módulos. Puedes ingresar a todos ellos libremente, sin vidas ni bloqueos.</p>
      <ProgressBar value={completion}/>
    </div>
    <LearningPath course={course} progress={progress}/>
    <div className={styles.moreActions}>
      <Link to={`/practice?course=${course.slug}`}><Target size={19}/> Practicar con preguntas <ArrowRight size={17}/></Link>
      <Link to={`/courses/${course.slug}/plan`}><BookOpenCheck size={19}/> Mi plan de estudio <ArrowRight size={17}/></Link>
    </div>
  </div>
}
