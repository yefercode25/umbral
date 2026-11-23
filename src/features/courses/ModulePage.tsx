import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, BookOpenCheck, Check, Clock3, Play, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { moduleCompletion } from '../../lib/course'
import { practiceQuestionPool } from '../../lib/practiceQuestionPool'
import { getCourseBySlug } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import type { Lesson } from '../../types/course'
import styles from './ModulePage.module.css'

export function ModulePage() {
  const { courseSlug, moduleId } = useParams()
  const course = getCourseBySlug(courseSlug)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)
  const setActiveCourse = useSettingsStore((state) => state.setActiveCourse)
  useEffect(() => { if (course) setActiveCourse(course.slug) }, [course, setActiveCourse])
  const module = course?.modules.find((item) => item.id === moduleId)
  if (!course || !module) return <div className="page"><p>Módulo no encontrado.</p></div>

  const lessons = module.lessonIds.map((id) => course.lessons.find((lesson) => lesson.id === id))
    .filter((lesson): lesson is Lesson => Boolean(lesson && lesson.status === 'published')).sort((a,b) => a.order - b.order)
  const isPgn = course.id === 'procuraduria-104-2026-3pu15'
  const questions = !isPgn ? practiceQuestionPool(course).filter((question) => question.moduleId === module.id) : []
  const minutes = lessons.reduce((total, lesson) => total + lesson.durationMinutes, 0)
  const completion = moduleCompletion(course, module.id, progress)
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  const nextLesson = lessons.find((lesson) => progress?.lessons[lesson.id]?.status !== 'completed') ?? lessons[0]

  const attemptedQuestions = questions.filter((q) => (progress?.questionStats?.[q.id]?.attempts ?? 0) > 0)
  const totalAttempts = attemptedQuestions.reduce((acc, q) => acc + (progress?.questionStats?.[q.id]?.attempts ?? 0), 0)
  const totalCorrect = attemptedQuestions.reduce((acc, q) => acc + (progress?.questionStats?.[q.id]?.correct ?? 0), 0)
  const moduleAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null

  return <div className="page page--narrow">
    <Link to={`/courses/${course.slug}`} className={styles.back}><ArrowLeft size={18}/> Volver a mi ruta</Link>
    <header className={styles.hero}>
      <div className={styles.eyebrow}><span>📚 {module.code}</span><span>UNIDAD {course.units.find((unit) => unit.id === module.unitId)?.order}</span></div>
      <h1>{module.title}</h1>
      <p>{module.description}</p>
      <div className={styles.metrics}>
        <span><BookOpenCheck size={18}/>{lessons.length} lecciones</span>
        <span><Clock3 size={18}/>{minutes} min aprox.</span>
        {isPgn ? <span><Target size={18}/>2 comprobaciones por lección + cierre de 3 casos</span>
          : <span><Target size={18}/>{questions.length} preguntas ({attemptedQuestions.length} practicadas{moduleAccuracy !== null ? ` · ${moduleAccuracy}% aciertos` : ''})</span>}
      </div>
      <div className={styles.progress}><ProgressBar value={completion} label="Progreso del módulo"/></div>
      <div className={styles.heroActions}>
        {nextLesson && <Link className={styles.primaryAction} to={`/courses/${course.slug}/lesson/${nextLesson.id}`}><Play size={18} fill="currentColor"/>{completed > 0 ? 'CONTINUAR APRENDIENDO' : 'EMPEZAR A APRENDER'}</Link>}
      </div>
    </header>

    <section className={styles.section}>
      <div className={styles.sectionHead}><div><h2>Lecciones del módulo</h2></div><strong>{completed}/{lessons.length}</strong></div>
      <div className={styles.lessonPath}>
        {lessons.map((lesson, index) => {
          const done = progress?.lessons[lesson.id]?.status === 'completed'
          const current = lesson.id === nextLesson?.id && !done
          return <Link key={lesson.id} className={`${styles.step} ${done ? styles.completed : current ? styles.active : ''}`} to={`/courses/${course.slug}/lesson/${lesson.id}`}>
            <span className={styles.orb}>{done ? <Check size={19} strokeWidth={3} /> : current ? <Play size={19} fill="currentColor" /> : <BookOpenCheck size={19} />}</span>
            <span className={styles.stepLabel}><strong>{index + 1}. {lesson.title}</strong><small>{lesson.durationMinutes} min · {done ? 'Completada' : current ? 'Siguiente lección' : 'Pendiente'}</small></span>
            <ArrowRight size={17} className={styles.chevron} aria-hidden="true" />
          </Link>
        })}
      </div>
    </section>

    {isPgn && <section className={styles.practiceCard}>
      <div><h2>Aprende, aplica y comprueba aquí mismo</h2><p>Las preguntas se responden dentro de las tres lecciones. La tercera termina con un cierre de tres casos: necesitas dos respuestas correctas para avanzar.</p></div>
    </section>}
    {!isPgn && questions.length > 0 && <section className={styles.practiceCard}>
      <div><h2>Practicar este módulo</h2><p>{questions.length} preguntas relacionadas con {module.code}.</p></div>
      <Link to={`/practice?course=${course.slug}&module=${module.id}`}>Practicar <ArrowRight size={17}/></Link>
    </section>}
  </div>
}
