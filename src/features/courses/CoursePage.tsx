import type { CSSProperties } from 'react'
import { ArrowLeft, BookOpenText, CalendarRange, CircleAlert, Clock3, FileCheck2, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { ModuleCard } from '../../components/learning/ModuleCard'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, moduleCompletion, publishedLessons } from '../../lib/course'
import { useProgressStore } from '../../stores/progressStore'
import styles from './CoursePage.module.css'

export function CoursePage() {
  const { courseSlug } = useParams()
  const course = courseSlug === dianGestorCourse.slug ? dianGestorCourse : dianGestorCourse
  const progress = useProgressStore((s) => s.courses[course.id])
  const completion = courseCompletion(course, progress)
  const publishedCount = publishedLessons(course).length
  const heroArtwork = course.heroArtwork ?? '/media/editorial/course-dian-2676.webp'

  return <div className="page">
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
        <div className={styles.heroActions}><Link to={`/courses/${course.slug}/plan`}><CalendarRange size={16}/> Plan de 8 semanas + transversal</Link><Link to={`/courses/${course.slug}/sources`}><FileCheck2 size={16}/> Fuentes oficiales</Link><Link to="/practice/diagnostic">Hacer diagnóstico</Link></div>
      </div>
      <div className={styles.heroVisual} aria-hidden="true">
        <img src={heroArtwork} alt="" decoding="async" />
      </div>
    </section>

    {course.officialGuideStatus === 'pending' && <aside className={styles.notice}><CircleAlert size={19}/><p><strong>La GOA definitiva del proceso 2676 aún está pendiente.</strong> Este curso se construye desde el MERF CT-CR-3007 y fuentes oficiales vigentes. Cuando la CNSC publique indicadores/contenidos definitivos, el mapa se versionará sin borrar tu progreso.</p></aside>}

    <div className={styles.units}>
      {course.units.map((unit) => <section key={unit.id} className={styles.unit}>
        <div className={styles.unitHead}><span>Unidad {unit.order}</span><h2>{unit.title}</h2><p>{unit.description}</p></div>
        <div className={styles.moduleGrid}>
          {unit.moduleIds.map((moduleId) => {
            const module = course.modules.find((m) => m.id === moduleId)!
            const lessons = course.lessons.filter((l) => l.moduleId === module.id && l.status === 'published')
            const firstLessonId = lessons[0]?.id
            return <ModuleCard key={module.id} module={module} courseSlug={course.slug} completion={moduleCompletion(course,module.id,progress)} lessonCount={lessons.length} {...(firstLessonId ? { firstLessonId } : {})}/>
          })}
        </div>
      </section>)}
    </div>
  </div>
}
