import type { CSSProperties } from 'react'
import { ArrowLeft, BookOpenCheck, CheckCircle2, Circle, Clock3, PlayCircle, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { moduleCompletion } from '../../lib/course'
import { getCourseBySlug } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import type { Lesson } from '../../types/course'
import styles from './ModulePage.module.css'

export function ModulePage() {
  const { courseSlug, moduleId } = useParams()
  const course = getCourseBySlug(courseSlug)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)
  const module = course?.modules.find((item) => item.id === moduleId)

  if (!course || !module) return <div className="page"><p>Módulo no encontrado.</p></div>

  const lessons = module.lessonIds
    .map((id) => course.lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is Lesson => Boolean(lesson && lesson.status === 'published'))
    .sort((a, b) => a.order - b.order)
  const questions = course.questions.filter((question) => question.moduleId === module.id)
  const minutes = lessons.reduce((total, lesson) => total + lesson.durationMinutes, 0)
  const completion = moduleCompletion(course, module.id, progress)
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  const nextLesson = lessons.find((lesson) => progress?.lessons[lesson.id]?.status !== 'completed') ?? lessons[0]
  const practiceQuery = `?course=${course.slug}`

  return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
    <Link to={`/courses/${course.slug}`} className={styles.back}><ArrowLeft size={17}/> Volver al curso</Link>

    <header className={styles.hero}>
      <div className={styles.eyebrow}><span>{module.code}</span><span>Unidad {course.units.find((unit) => unit.id === module.unitId)?.order}</span></div>
      <h1>{module.title}</h1>
      <p>{module.description}</p>
      <div className={styles.metrics}>
        <span><BookOpenCheck size={17}/><strong>{lessons.length}</strong> lecciones</span>
        <span><Clock3 size={17}/><strong>{minutes}</strong> min aprox.</span>
        <span><Target size={17}/><strong>{questions.length}</strong> preguntas</span>
      </div>
      <div className={styles.progressRow}><ProgressBar value={completion}/><strong>{completion}%</strong></div>
      {nextLesson && <Link className={styles.primaryAction} to={`/courses/${course.slug}/lesson/${nextLesson.id}`}><PlayCircle size={18}/>{completed > 0 ? 'Continuar módulo' : 'Empezar módulo'}</Link>}
    </header>

    <section className={styles.section}>
      <div className={styles.sectionHead}><div><span>Ruta del módulo</span><h2>Lecciones</h2></div><strong>{completed}/{lessons.length}</strong></div>
      <div className={styles.lessonList}>
        {lessons.map((lesson, index) => {
          const state = progress?.lessons[lesson.id]?.status ?? 'not-started'
          const done = state === 'completed'
          return <Link key={lesson.id} className={styles.lesson} to={`/courses/${course.slug}/lesson/${lesson.id}`}>
            <span className={`${styles.statusIcon} ${done ? styles.done : ''}`}>{done ? <CheckCircle2 size={18}/> : <Circle size={18}/>}</span>
            <span className={styles.lessonNumber}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.lessonText}><strong>{lesson.title}</strong><small>{lesson.subtitle}</small></span>
            <span className={styles.duration}>{lesson.durationMinutes} min</span>
          </Link>
        })}
      </div>
    </section>

    {questions.length > 0 && <section className={styles.practiceCard}>
      <div><span>Refuerza este módulo</span><h2>Practica después de estudiar</h2><p>El banco contiene {questions.length} preguntas asociadas a {module.code}. Umbral puede combinarlas después con temas débiles para evitar estudiar cada módulo como una isla.</p></div>
      <div className={styles.practiceActions}><Link to={`/practice${practiceQuery}`}>Abrir banco</Link><Link to={`/practice/adaptive${practiceQuery}`}>Sesión recomendada</Link></div>
    </section>}
  </div>
}
