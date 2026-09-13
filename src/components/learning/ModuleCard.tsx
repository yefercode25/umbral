import { ChevronRight, LockKeyhole, PlayCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CourseModule } from '../../types/course'
import { ProgressBar } from '../ui/ProgressBar'
import styles from './ModuleCard.module.css'

export function ModuleCard({ module, courseSlug, completion, lessonCount, firstLessonId }: { module: CourseModule; courseSlug: string; completion: number; lessonCount: number; firstLessonId?: string }) {
  const available = module.status === 'published' && lessonCount > 0 && firstLessonId
  const content = (
    <>
      <div className={styles.head}>
        <span className={styles.code}>{module.code}</span>
        {available ? <PlayCircle size={19} /> : <LockKeyhole size={18} />}
      </div>
      <div><h3>{module.title}</h3><p>{module.description}</p></div>
      <div className={styles.meta}><span>{lessonCount > 0 ? `${lessonCount} lecciones` : 'En preparación'}</span>{available && <span><ChevronRight size={16} /></span>}</div>
      {lessonCount > 0 && <ProgressBar value={completion} />}
    </>
  )
  return available ? <Link to={`/courses/${courseSlug}/module/${module.id}`} className={styles.card}>{content}</Link> : <div className={`${styles.card} ${styles.disabled}`}>{content}</div>
}
