import type { CSSProperties } from 'react'
import { ArrowRight, BookOpen, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types/course'
import { ProgressBar } from '../ui/ProgressBar'
import styles from './CourseCard.module.css'

export function CourseCard({ course, completion, publishedLessonCount }: { course: Course; completion: number; publishedLessonCount: number }) {
  const artwork = course.cardArtwork ?? '/media/editorial/course-dian-2676.webp'

  return (
    <Link to={`/courses/${course.slug}`} className={styles.card} style={{ '--course-accent': course.accent } as CSSProperties}>
      <div className={styles.cover} aria-hidden="true">
        <img src={artwork} alt="" loading="lazy" decoding="async" />
      </div>
      <div className={styles.top}>
        <div className={styles.icon}><BookOpen size={22} /></div>
        <span className={styles.badge}>Curso activo</span>
      </div>
      <div>
        <p className={styles.eyebrow}>{course.subtitle}</p>
        <h3>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
      </div>
      <div className={styles.meta}>
        <span><Clock3 size={15} /> {publishedLessonCount} lecciones publicadas</span>
        <span>{course.officialGuideStatus === 'pending' ? 'GOA pendiente' : 'GOA publicada'}</span>
      </div>
      <ProgressBar value={completion} />
      <div className={styles.footer}><span>{completion > 0 ? 'Continuar' : 'Comenzar'}</span><ArrowRight size={18} /></div>
    </Link>
  )
}
