import type { CSSProperties } from 'react'
import { ArrowLeft, BookOpen, BookOpenText, CalendarRange, CircleAlert, Clock3, FileCheck2, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ModuleCard } from '../../components/learning/ModuleCard'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, moduleCompletion, publishedLessons } from '../../lib/course'
import { getCourseBySlug } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import styles from './CoursePage.module.css'

export function CoursePage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)

  if (!course) return <div className="page"><Link to="/courses" className={styles.back}><ArrowLeft size={17}/> Cursos</Link><p>Curso no encontrado.</p></div>

  const completion = courseCompletion(course, progress)
  const publishedCount = publishedLessons(course).length

  return <div className="page" style={{ '--course-accent': course.accent } as CSSProperties}>
    <Link to="/courses" className={styles.back}><ArrowLeft size={17}/> Cursos</Link>
    <section className={styles.hero} style={{ '--course-accent': course.accent } as CSSProperties}>
      <div className={styles.heroContent}>
        <div className={styles.heroTop}><span>{course.subtitle}</span><span className={styles.status}><span/> Currículo vivo</span></div>
        <h1>{course.title}</h1><p>{course.description}</p>
        <div className={styles.stats}>
          <div><BookOpenText size={18}/><span><strong>{publishedCount}</strong> lecciones publicadas</span></div>
          <div><Target size={18}/><span><strong>{course.questions.length}</strong> preguntas verificadas</span></div>
          <div><Clock3 size={18}/><span><strong>25 min</strong> meta sugerida</span></div>
        </div>
        <ProgressBar value={completion} label="Progreso del contenido publicado" />
        <div className={styles.heroActions}>
          <Link to={`/courses/${course.slug}/plan`}><CalendarRange size={16}/> {course.studyPlanLabel ?? 'Plan de estudio'}</Link>
          <Link to={`/courses/${course.slug}/sources`}><FileCheck2 size={16}/> Fuentes oficiales</Link>
          <Link to={`/practice?course=${course.slug}`}><Target size={16}/> Practicar</Link>
          <Link to={`/practice/diagnostic?course=${course.slug}`}>Hacer diagnóstico</Link>
        </div>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        {course.heroArtwork ? <img src={course.heroArtwork} alt="" decoding="async" /> : <div className={styles.heroFallback}><BookOpen size={42}/><span>{course.subtitle}</span><strong>{course.shortTitle}</strong></div>}
      </div>
    </section>

    {(course.officialGuideStatus === 'pending' || course.guideNotice) && <aside className={styles.notice}><CircleAlert size={19}/><p><strong>{course.officialGuideStatus === 'published' ? 'Guía publicada · consulta tus indicadores.' : 'Currículo sujeto a actualización oficial.'}</strong> {course.guideNotice ?? 'Umbral actualizará prioridades cuando se publique una orientación oficial más específica, sin borrar tu progreso.'}</p></aside>}

    <div className={styles.units}>
      {course.units.map((unit) => <section key={unit.id} className={styles.unit}>
        <div className={styles.unitIntro}>
          <div className={styles.unitHead}><span>Unidad {unit.order}</span><h2>{unit.title}</h2><p>{unit.description}</p></div>
        </div>
        <div className={styles.moduleGrid}>
          {unit.moduleIds.map((moduleId) => {
            const module = course.modules.find((item) => item.id === moduleId)
            if (!module) return null
            const lessons = course.lessons.filter((lesson) => lesson.moduleId === module.id && lesson.status === 'published')
            const firstLessonId = lessons[0]?.id
            return <ModuleCard key={module.id} module={module} courseSlug={course.slug} completion={moduleCompletion(course,module.id,progress)} lessonCount={lessons.length} {...(firstLessonId ? { firstLessonId } : {})}/>
          })}
        </div>
      </section>)}
    </div>
  </div>
}
