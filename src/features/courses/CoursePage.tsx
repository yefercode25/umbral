import { useEffect } from 'react'
import { ArrowLeft, BookOpenText, CalendarRange, CircleAlert, FileCheck2, Network, Sparkles, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { LessonSupportGraphic } from '../../components/learning/LessonSupportGraphic'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, publishedLessons } from '../../lib/course'
import { getCourseBySlug } from '../../lib/courses'
import { getLessonSupportGraphic } from '../../lib/supportGraphics'
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
  const courseMapGraphic = isDian ? getLessonSupportGraphic('m0-l3') : getLessonSupportGraphic('pgn-m0-l1')

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
            <span><Target size={18}/>{course.questions.length} preguntas</span>
            <span>⭐ {course.units.length} secciones</span>
            {course.opec ? <span>🏛️ OPEC {course.opec}</span> : null}
          </div>
          <ProgressBar value={completion} label="Avance de lecciones"/>
        </div>
        {course.heroArtwork ? (
          <div className={styles.heroCover} aria-hidden="true">
            <img src={course.heroArtwork} alt="" loading="eager" decoding="async" />
          </div>
        ) : null}
      </div>
      <div className={styles.actions}>
        <Link to={`/courses/${course.slug}/plan`}><CalendarRange size={17}/>{course.studyPlanLabel ?? 'Plan de estudio'}</Link>
        {isDian && <Link to="/library?tab=mapas" className={styles.actionHighlight}><Sparkles size={17}/>Atlas Visual, Mapas y Comparativas</Link>}
        {isDian && <Link to="/library"><Network size={17}/>Biblioteca DIAN</Link>}
        <Link to={`/courses/${course.slug}/sources`}><FileCheck2 size={17}/>Fuentes</Link>
        <Link to={`/practice?course=${course.slug}`}><Target size={17}/>Practicar</Link>
      </div>
    </header>
    {(course.officialGuideStatus === 'pending' || course.guideNotice) && <aside className={styles.notice}><CircleAlert size={19}/><p><strong>{course.officialGuideStatus === 'published' ? 'Información del curso' : 'Currículo sujeto a actualización oficial.'}</strong> {course.guideNotice ?? 'Las prioridades pueden actualizarse con orientaciones oficiales sin borrar tu avance.'}</p></aside>}
    {courseMapGraphic ? <div className={styles.courseGraphicWrap}><LessonSupportGraphic graphic={courseMapGraphic} /></div> : null}
    <div className={styles.sectionHeading}><span>🌟 UN PASO A LA VEZ</span><h2>Tu camino hacia la meta</h2><p>Selecciona cualquier nodo para entrar a un módulo o abre el mapa visual de cada sección. No hay vidas, esperas ni bloqueos: puedes estudiar en el orden que prefieras.</p></div>
    <LearningPath course={course} progress={progress}/>
  </div>
}
