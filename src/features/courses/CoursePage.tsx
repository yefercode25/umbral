import { useEffect } from 'react'
import { ArrowLeft, BookOpenText, CalendarRange, CircleAlert, FileCheck2, Network, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, publishedLessons } from '../../lib/course'
import { practiceQuestionPool } from '../../lib/practiceQuestionPool'
import { getCourseBySlug } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './CoursePage.module.css'

export function CoursePage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)
  const setActiveCourse = useSettingsStore((state) => state.setActiveCourse)
  useEffect(() => { if (course) setActiveCourse(course.slug) }, [course, setActiveCourse])
  if (!course) return <div className="page"><Link to="/courses">Cursos</Link><p>Curso no encontrado.</p></div>
  const completion = courseCompletion(course, progress)
  const isDian = course.id === 'dian-2676-gestor-ii'

  return <div className="page">
    <Link to="/courses" className={styles.back}><ArrowLeft size={18}/> Cambiar de curso</Link>
    <header className={styles.hero}>
      <div className={styles.heroGrid}>
        <div>
          <div className={styles.kicker}><span>🗺️ TU RUTA DE APRENDIZAJE</span><span>{completion}% completado</span></div>
          <h1>{course.shortTitle}</h1>
          <p className={styles.subtitle}>{course.description}</p>
          <div className={styles.metrics}>
            <span><BookOpenText size={18}/>{publishedLessons(course).length} lecciones</span>
            <span><Target size={18}/>{practiceQuestionPool(course).length} preguntas</span>
            <span>⭐ {course.units.length} secciones</span>
            {course.opec ? <span>🏛️ OPEC {course.opec}</span> : null}
          </div>
          <ProgressBar value={completion} label="Avance de lecciones"/>
        </div>

      </div>
      <div className={styles.actions}>
        <Link to={`/courses/${course.slug}/plan`}><CalendarRange size={17}/>{course.studyPlanLabel ?? 'Plan de estudio'}</Link>
        {isDian ? <Link to="/library"><Network size={17}/>Biblioteca DIAN</Link> : <Link to={`/library?course=${course.slug}`}><Network size={17}/>Atlas de Procuraduría</Link>}
        <Link to={`/courses/${course.slug}/sources`}><FileCheck2 size={17}/>Fuentes</Link>
        <Link to={`/practice?course=${course.slug}`}><Target size={17}/>Practicar</Link>
      </div>
    </header>
    {course.officialGuideStatus === 'pending' && <aside className={styles.notice}><CircleAlert size={19}/><p><strong>Currículo sujeto a actualización oficial.</strong> {course.guideNotice ?? 'Las prioridades pueden actualizarse sin borrar tu avance.'}</p></aside>}
    <div className={styles.sectionHeading}><h2>Módulos del curso</h2><p>Elige un módulo para continuar estudiando.</p></div>
    <LearningPath course={course} progress={progress}/>
  </div>
}
