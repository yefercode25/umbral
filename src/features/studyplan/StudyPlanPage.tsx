import type { CSSProperties } from 'react'
import { ArrowLeft, BookOpenCheck, CalendarRange, CheckCircle2, Clock3, Dumbbell, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { moduleCompletion } from '../../lib/course'
import { getCourseBySlug } from '../../lib/courses'
import { withCourse } from '../../lib/courseQuery'
import { getStudyPlan } from '../../lib/studyPlans'
import { useProgressStore } from '../../stores/progressStore'
import styles from './StudyPlanPage.module.css'

export function StudyPlanPage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)

  if (!course) return <div className="page"><Link to="/courses" className={styles.back}><ArrowLeft size={17}/> Cursos</Link><p>Curso no encontrado.</p></div>

  const phases = getStudyPlan(course)
  const phaseStats = phases.map((phase) => {
    const modules = phase.moduleIds.map((id) => course.modules.find((module) => module.id === id)).filter((module): module is NonNullable<typeof module> => Boolean(module))
    const uniqueModuleIds = new Set(modules.map((module) => module.id))
    const lessons = course.lessons.filter((lesson) => uniqueModuleIds.has(lesson.moduleId) && lesson.status === 'published')
    const minutes = lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
    const questionCount = course.questions.filter((question) => uniqueModuleIds.has(question.moduleId)).length
    const completion = modules.length ? Math.round(modules.reduce((sum, module) => sum + moduleCompletion(course, module.id, progress), 0) / modules.length) : 0
    return { phase, modules, lessons, minutes, questionCount, completion }
  })

  const totalMinutes = course.lessons.filter((lesson) => lesson.status === 'published').reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
  const dailyGoal = progress?.dailyGoalMinutes ?? 25
  const studyDays = Math.ceil(totalMinutes / dailyGoal)
  const isPgn = course.id === 'procuraduria-104-2026-3pu15'

  return <div className="page" style={{ '--course-accent': course.accent } as CSSProperties}>
    <Link to={`/courses/${course.slug}`} className={styles.back}><ArrowLeft size={17}/> Volver al curso</Link>

    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}><CalendarRange size={15}/> Ruta recomendada</span>
        <h1>{course.studyPlanLabel ?? 'Plan de estudio'}</h1>
        <p>{isPgn ? 'Ruta progresiva desde alfabetización jurídica hasta instrucción, prueba, prevención, evidencia técnica y simulación integral. La prioridad es comprender antes de memorizar.' : 'No es un calendario rígido. Es un orden de prioridad para avanzar desde fundamentos hasta decisión situacional y consolidación.'}</p>
      </div>
      <div className={styles.summary}>
        <div><Clock3 size={18}/><span><strong>{Math.round(totalMinutes / 60)} h</strong> de lectura guiada</span></div>
        <div><BookOpenCheck size={18}/><span><strong>{course.lessons.length}</strong> lecciones</span></div>
        <div><Dumbbell size={18}/><span><strong>{course.questions.length}</strong> preguntas</span></div>
        <div><Target size={18}/><span><strong>≈ {studyDays} días</strong> a {dailyGoal} min/día</span></div>
      </div>
    </header>

    <aside className={styles.rule}>
      <Target size={20}/>
      <div><strong>Regla de carga</strong><p>{isPgn ? 'Dedica la mayor profundidad a disciplinario, instrucción y prueba. Los bloques técnicos y comportamentales complementan el perfil, pero no deben desplazar el núcleo procesal.' : 'Dedica aproximadamente la mitad del tiempo del tramo central al núcleo de cartera y cobro. El objetivo no es terminar módulos: es decidir correctamente frente a un expediente.'}</p></div>
    </aside>

    <div className={styles.timeline}>
      {phaseStats.map(({ phase, modules, lessons, minutes, questionCount, completion }, index) => <section className={styles.phase} key={phase.id}>
        <div className={styles.rail} aria-hidden="true"><span>{index + 1}</span><i/></div>
        <div className={styles.phaseBody}>
          <div className={styles.phaseTop}>
            <div><span className={styles.weeks}>{phase.weeks}</span><h2>{phase.title}</h2><p>{phase.description}</p></div>
            <strong className={styles.percent}>{completion}%</strong>
          </div>
          <ProgressBar value={completion}/>
          <div className={styles.meta}><span>{lessons.length} lecciones</span><span>{minutes} min</span><span>{questionCount} preguntas</span></div>
          <div className={styles.moduleGrid}>
            {modules.map((module) => <Link to={`/courses/${course.slug}/module/${module.id}`} className={styles.module} key={module.id}>
              <span>{module.code}</span><strong>{module.title}</strong><small>{moduleCompletion(course, module.id, progress)}% completado</small>
            </Link>)}
          </div>
          <div className={styles.practice}><CheckCircle2 size={17}/><span><strong>Práctica de cierre:</strong> {phase.practice}</span></div>
        </div>
      </section>)}
    </div>

    <section className={styles.footerCta}>
      <div><span>¿No sabes por dónde empezar?</span><h2>Haz primero el diagnóstico.</h2><p>La ruta sigue siendo la misma, pero Umbral usará tus respuestas para priorizar la práctica adaptativa del curso seleccionado.</p></div>
      <Link to={withCourse('/practice/diagnostic', course)}>Iniciar diagnóstico</Link>
    </section>
  </div>
}
