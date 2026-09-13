import { Award, Bookmark, BookOpenCheck, CheckCircle2, NotebookPen, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { PageHeader } from '../../components/ui/PageHeader'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, moduleCompletion, publishedLessons } from '../../lib/course'
import { useProgressStore } from '../../stores/progressStore'
import styles from './ProgressPage.module.css'

export function ProgressPage() {
  const course = dianGestorCourse
  const progress = useProgressStore((s) => s.courses[course.id])
  const lessons = publishedLessons(course)
  const completed = lessons.filter((lesson) => progress?.lessons[lesson.id]?.status === 'completed').length
  const skills = Object.values(progress?.skills ?? {})
  const questionStats = Object.values(progress?.questionStats ?? {})
  const attempts = questionStats.reduce((sum, stat) => sum + stat.attempts, 0)
  const correct = questionStats.reduce((sum, stat) => sum + stat.correct, 0)
  const accuracy = attempts ? Math.round(correct / attempts * 100) : 0
  const competent = skills.filter((skill) => skill.mastery === 'competent').length
  const mastered = skills.filter((skill) => skill.mastery === 'mastered').length
  const errors = Object.values(progress?.errorJournal ?? {})
  const unresolvedErrors = errors.filter((entry) => !entry.resolvedAt).length
  const resolvedErrors = errors.filter((entry) => Boolean(entry.resolvedAt)).length
  const savedQuestions = progress?.questionBookmarks?.length ?? 0

  const modulePerformance = course.modules.map((module) => {
    const questionIds = new Set(course.questions.filter((question) => question.moduleId === module.id).map((question) => question.id))
    const stats = Object.entries(progress?.questionStats ?? {}).filter(([questionId]) => questionIds.has(questionId)).map(([, stat]) => stat)
    const moduleAttempts = stats.reduce((sum, stat) => sum + stat.attempts, 0)
    const moduleCorrect = stats.reduce((sum, stat) => sum + stat.correct, 0)
    return { module, attempts: moduleAttempts, accuracy: moduleAttempts ? Math.round(moduleCorrect / moduleAttempts * 100) : null }
  }).filter((item) => item.attempts > 0 && item.accuracy !== null).sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100)).slice(0, 4)

  return <div className="page">
    <PageHeader eyebrow="Seguimiento" title="Progreso" subtitle="El avance combina contenido completado, recuperación activa y consolidación posterior. No mide solo páginas abiertas." />

    <section className={styles.progressVisual} aria-label="Resumen de aprendizaje">
      <img src="/media/editorial/progress-overview.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div className={styles.progressVisualCopy}>
        <span>Evidencia de aprendizaje</span>
        <strong>{courseCompletion(course, progress)}% del contenido publicado</strong>
        <p>{attempts ? `${accuracy}% de precisión sobre ${attempts} intentos registrados.` : 'Empieza una práctica para construir tu línea base de precisión.'}</p>
      </div>
    </section>

    <div className={styles.kpis}>
      <div><BookOpenCheck/><span>Lecciones</span><strong>{completed}/{lessons.length}</strong></div>
      <div><Target/><span>Precisión</span><strong>{attempts ? `${accuracy}%` : '—'}</strong></div>
      <div><Award/><span>Dominadas</span><strong>{mastered}</strong></div>
      <div><NotebookPen/><span>Errores pendientes</span><strong>{unresolvedErrors}</strong></div>
    </div>

    <section className={styles.learningHealth} aria-labelledby="learning-health-title">
      <div className={styles.learningHealthHead}>
        <div><span>Estado de aprendizaje</span><h2 id="learning-health-title">Lo que ya consolidaste y lo que conviene recuperar</h2></div>
        <p>Una habilidad solo pasa a dominada después de una confirmación correcta en una sesión posterior.</p>
      </div>
      <div className={styles.learningHealthGrid}>
        <div className={styles.healthCard}><CheckCircle2 size={18}/><span><strong>{competent}</strong><small>habilidades competentes</small></span></div>
        <Link className={styles.healthCard} to="/practice/errors"><NotebookPen size={18}/><span><strong>{resolvedErrors}</strong><small>errores corregidos después</small></span></Link>
        <Link className={styles.healthCard} to="/practice?mode=saved"><Bookmark size={18}/><span><strong>{savedQuestions}</strong><small>preguntas guardadas</small></span></Link>
      </div>
    </section>

    {modulePerformance.length > 0 && <section className={styles.focus}>
      <div className={styles.focusHead}><div><span>Prioridad de repaso</span><h2>Módulos con menor precisión</h2></div><Link to="/practice/adaptive">Practicar recomendadas</Link></div>
      <div className={styles.focusGrid}>{modulePerformance.map(({ module, attempts: moduleAttempts, accuracy: moduleAccuracy }) => <Link key={module.id} to={`/courses/${course.slug}/module/${module.id}`} className={styles.focusItem}><span>{module.code}</span><strong>{module.title}</strong><small>{moduleAccuracy}% · {moduleAttempts} intento{moduleAttempts === 1 ? '' : 's'}</small></Link>)}</div>
    </section>}

    <section className={styles.course}>
      <div className={styles.courseHead}><div><span>{course.subtitle}</span><h2>{course.title}</h2></div><strong>{courseCompletion(course, progress)}%</strong></div>
      <ProgressBar value={courseCompletion(course, progress)} />
      <div className={styles.modules}>
        {course.modules.filter((module) => module.status === 'published').map((module) => {
          const lessonCount = course.lessons.filter((lesson) => lesson.moduleId === module.id && lesson.status === 'published').length
          if (!lessonCount) return null
          const value = moduleCompletion(course, module.id, progress)
          return <div className={styles.module} key={module.id}><div><span>{module.code}</span><strong>{module.title}</strong></div><ProgressBar value={value}/><b>{value}%</b></div>
        })}
      </div>
    </section>
  </div>
}
