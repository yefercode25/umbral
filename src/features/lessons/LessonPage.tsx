import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, Clock3 } from 'lucide-react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { LessonRenderer } from '../../components/learning/LessonRenderer'
import { LessonNarrator } from '../../components/learning/LessonNarrator'
import { LessonQuickReview } from '../../components/learning/LessonQuickReview'
import { LessonSupportGraphic } from '../../components/learning/LessonSupportGraphic'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { getCourseBySlug } from '../../lib/courses'
import { getLessonSupportGraphic } from '../../lib/supportGraphics'
import { useProgressStore } from '../../stores/progressStore'
import styles from './LessonPage.module.css'

export function LessonPage() {
  const { courseSlug, lessonId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const course = getCourseBySlug(courseSlug)
  const lesson = course?.lessons.find((item) => item.id === lessonId)
  const ensureCourse = useProgressStore((state) => state.ensureCourse)
  const start = useProgressStore((state) => state.markLessonStarted)
  const complete = useProgressStore((state) => state.markLessonCompleted)
  const toggleBookmark = useProgressStore((state) => state.toggleBookmark)
  const progress = useProgressStore((state) => course ? state.courses[course.id] : undefined)

  useEffect(() => {
    if (!course) return
    ensureCourse(course)
    if (lesson) start(course, lesson.id, location.pathname)
  }, [ensureCourse, course, lesson, start, location.pathname])

  if (!course || !lesson) return <div className="page"><p>Lección no encontrada.</p></div>
  const module = course.modules.find((item) => item.id === lesson.moduleId)
  if (!module) return <div className="page"><p>Módulo no encontrado.</p></div>

  const allPublished = course.lessons.filter((item) => item.status === 'published').sort((a,b) => {
    const ma = course.modules.find((item) => item.id === a.moduleId)?.order ?? 0
    const mb = course.modules.find((item) => item.id === b.moduleId)?.order ?? 0
    return ma === mb ? a.order-b.order : ma-mb
  })
  const index = allPublished.findIndex((item) => item.id === lesson.id)
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

  return <div className={styles.page} style={{ '--course-accent': course.accent } as React.CSSProperties}>
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
      <LessonRenderer key={`${course.id}:${lesson.id}`} course={course} blocks={lesson.blocks}/>
      <LessonQuickReview course={course} lesson={lesson} />
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
