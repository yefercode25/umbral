import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, BookOpenCheck, Check, Clock3, Network, Play, Star, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { LessonSupportGraphic } from '../../components/learning/LessonSupportGraphic'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { moduleCompletion } from '../../lib/course'
import { getCourseBySlug } from '../../lib/courses'
import { getModuleSupportGraphic } from '../../lib/supportGraphics'
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
  const questions = course.questions.filter((question) => question.moduleId === module.id)
  const minutes = lessons.reduce((total, lesson) => total + lesson.durationMinutes, 0)
  const completion = moduleCompletion(course, module.id, progress)
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  const nextLesson = lessons.find((lesson) => progress?.lessons[lesson.id]?.status !== 'completed') ?? lessons[0]
  const moduleGraphic = getModuleSupportGraphic(module.id)

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
        <span><Target size={18}/>{questions.length} preguntas ({attemptedQuestions.length} practicadas{moduleAccuracy !== null ? ` · ${moduleAccuracy}% aciertos` : ''})</span>
      </div>
      <div className={styles.progress}><ProgressBar value={completion} label="Progreso del módulo"/></div>
      <div className={styles.heroActions}>
        {nextLesson && <Link className={styles.primaryAction} to={`/courses/${course.slug}/lesson/${nextLesson.id}`}><Play size={18} fill="currentColor"/>{completed > 0 ? 'CONTINUAR APRENDIENDO' : 'EMPEZAR A APRENDER'}</Link>}
        {course.id === 'dian-2676-gestor-ii' && <Link className={styles.secondaryHeroAction} to="/library?tab=mapas"><Network size={17}/> Atlas Visual DIAN</Link>}
      </div>
    </header>

    {moduleGraphic ? (
      <div className={styles.moduleGraphicWrap}>
        <LessonSupportGraphic graphic={moduleGraphic} />
      </div>
    ) : null}

    <section className={styles.section}>
      <div className={styles.sectionHead}><div><span>⭐ TU CAMINO</span><h2>Lección por lección</h2><p>Toca cualquier nodo para aprender. No necesitas vidas ni desbloquear lecciones.</p></div><strong>{completed}/{lessons.length}</strong></div>
      <div className={styles.lessonPath}>
        {lessons.map((lesson, index) => {
          const done = progress?.lessons[lesson.id]?.status === 'completed'
          const current = lesson.id === nextLesson?.id && !done
          return <Link key={lesson.id} className={`${styles.step} ${done ? styles.completed : current ? styles.active : styles.future} ${styles[`offset${index % 5}`]}`} to={`/courses/${course.slug}/lesson/${lesson.id}`}>
            {current && <span className={styles.startHere}>¡SIGUE AQUÍ!</span>}
            <span className={styles.orb}>{done ? <Check size={28} strokeWidth={3.5}/> : current ? <Play size={27} fill="currentColor"/> : <Star size={28} fill="currentColor"/>}</span>
            <span className={styles.stepLabel}><strong>{lesson.title}</strong><small>{lesson.durationMinutes} min · {done ? 'Completada' : `Lección ${index + 1}`}</small></span>
          </Link>
        })}
      </div>
    </section>

    {questions.length > 0 && <section className={styles.practiceCard}>
      <div><span>🎯 REFUERZA TUS CONOCIMIENTOS</span><h2>¡Hora de ponerlo en práctica!</h2><p>Encontrarás {questions.length} preguntas de este módulo dentro del banco de {course.shortTitle}.</p></div>
      <Link to={`/practice?course=${course.slug}`}>IR A PRACTICAR <ArrowRight size={17}/></Link>
    </section>}
  </div>
}
