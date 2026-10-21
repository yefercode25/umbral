import { useEffect } from 'react'
import { ArrowLeft, BookOpenText, CalendarRange, CircleAlert, FileCheck2, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, publishedLessons } from '../../lib/course'
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
  return <div className="page">
    <Link to="/courses" className={styles.back}><ArrowLeft size={18}/> Cambiar de curso</Link>
    <header className={styles.hero}>
      <div className={styles.kicker}><span>🗺️ TU RUTA DE APRENDIZAJE</span><span>{completion}% completado</span></div>
      <h1>{course.shortTitle}</h1>
      <p className={styles.subtitle}>{course.description}</p>
      <div className={styles.metrics}>
        <span><BookOpenText size={18}/>{publishedLessons(course).length} lecciones</span>
        <span><Target size={18}/>{course.questions.length} preguntas</span>
        <span>⭐ {course.units.length} secciones</span>
      </div>
      <ProgressBar value={completion} label="Avance de lecciones"/>
      <div className={styles.actions}>
        <Link to={`/courses/${course.slug}/plan`}><CalendarRange size={17}/>{course.studyPlanLabel ?? 'Plan de estudio'}</Link>
        <Link to={`/courses/${course.slug}/sources`}><FileCheck2 size={17}/>Fuentes</Link>
        <Link to={`/practice?course=${course.slug}`}><Target size={17}/>Practicar</Link>
      </div>
    </header>
    {(course.officialGuideStatus === 'pending' || course.guideNotice) && <aside className={styles.notice}><CircleAlert size={19}/><p><strong>{course.officialGuideStatus === 'published' ? 'Información del curso' : 'Currículo sujeto a actualización oficial.'}</strong> {course.guideNotice ?? 'Las prioridades pueden actualizarse con orientaciones oficiales sin borrar tu avance.'}</p></aside>}
    <div className={styles.sectionHeading}><span>🌟 UN PASO A LA VEZ</span><h2>Tu camino hacia la meta</h2><p>Selecciona cualquier nodo para entrar a un módulo. No hay vidas, esperas ni bloqueos: puedes estudiar en el orden que prefieras.</p></div>
    <LearningPath course={course} progress={progress}/>
  </div>
}
