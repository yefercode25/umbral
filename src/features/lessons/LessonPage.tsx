import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, Clock3 } from 'lucide-react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { LessonRenderer } from '../../components/learning/LessonRenderer'
import { LessonNarrator } from '../../components/learning/LessonNarrator'
import { LessonSupportGraphic } from '../../components/learning/LessonSupportGraphic'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { getLessonSupportGraphic } from '../../lib/supportGraphics'
import { useProgressStore } from '../../stores/progressStore'
import styles from './LessonPage.module.css'

export function LessonPage() {
  const { lessonId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const course = dianGestorCourse
  const lesson = course.lessons.find((l) => l.id === lessonId)
  const ensureCourse = useProgressStore((s) => s.ensureCourse)
  const start = useProgressStore((s) => s.markLessonStarted)
  const complete = useProgressStore((s) => s.markLessonCompleted)
  const toggleBookmark = useProgressStore((s) => s.toggleBookmark)
  const progress = useProgressStore((s) => s.courses[course.id])

  useEffect(() => {
    ensureCourse(course)
    if (lesson) start(course, lesson.id, location.pathname)
  }, [ensureCourse, course, lesson, start, location.pathname])

  if (!lesson) return <div className="page"><p>Lección no encontrada.</p></div>
  const module = course.modules.find((m) => m.id === lesson.moduleId)!
  const allPublished = course.lessons.filter((l) => l.status === 'published').sort((a,b) => {
    const ma = course.modules.find((m) => m.id === a.moduleId)?.order ?? 0
    const mb = course.modules.find((m) => m.id === b.moduleId)?.order ?? 0
    return ma === mb ? a.order-b.order : ma-mb
  })
  const index = allPublished.findIndex((l) => l.id === lesson.id)
  const next = allPublished[index+1]
  const previous = allPublished[index-1]
  const isBookmarked = progress?.bookmarks.includes(lesson.id) ?? false
  const globalPercent = Math.round(((index+1)/allPublished.length)*100)
  const supportGraphic = getLessonSupportGraphic(lesson.id)

  const finish = () => {
    complete(course, lesson.id, lesson.durationMinutes)
    if (next) navigate(`/courses/${course.slug}/lesson/${next.id}`)
    else navigate(`/courses/${course.slug}`)
  }

  return <div className={styles.page}>
    <header className={styles.mobileHeader}>
      <Link to={`/courses/${course.slug}`} aria-label="Volver al curso"><ArrowLeft size={20}/></Link>
      <div><span>{module.code}</span><strong>{module.title}</strong></div>
      <button onClick={() => toggleBookmark(course, lesson.id)} aria-label={isBookmarked ? 'Quitar marcador' : 'Guardar lección'}>{isBookmarked ? <BookmarkCheck size={20}/> : <Bookmark size={20}/>}</button>
    </header>
    <div className={styles.topProgress}><ProgressBar value={globalPercent}/></div>

    <article className={styles.reading}>
      <nav className={styles.breadcrumb}><Link to={`/courses/${course.slug}`}>{course.shortTitle}</Link><span>›</span><span>{module.code}</span></nav>
      <div className={styles.lessonMeta}><span>{module.title}</span><span><Clock3 size={14}/> {lesson.durationMinutes} min</span></div>
      <h1>{lesson.title}</h1><p className={styles.subtitle}>{lesson.subtitle}</p>
      <LessonNarrator course={course} lesson={lesson} supportGraphic={supportGraphic} />
      {supportGraphic ? <LessonSupportGraphic graphic={supportGraphic} /> : null}
      <LessonRenderer course={course} blocks={lesson.blocks}/>
      <div className={styles.finish}>
        <div><span>Lección {index+1} de {allPublished.length}</span><strong>{next ? `Siguiente: ${next.title}` : 'Has llegado al final del contenido publicado.'}</strong></div>
        <Button size="lg" onClick={finish} icon={<ArrowRight size={18}/>}>{next ? 'Completar y continuar' : 'Completar lección'}</Button>
      </div>
      <div className={styles.prevNext}>
        {previous ? <Link to={`/courses/${course.slug}/lesson/${previous.id}`}><ArrowLeft size={16}/> {previous.title}</Link> : <span/>}
        {next ? <Link to={`/courses/${course.slug}/lesson/${next.id}`}>{next.title} <ArrowRight size={16}/></Link> : null}
      </div>
    </article>
  </div>
}
