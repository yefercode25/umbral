import { CourseCard } from '../../components/learning/CourseCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { courseCompletion, publishedLessons } from '../../lib/course'
import { courses } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import styles from './CoursesPage.module.css'

export function CoursesPage() {
  const progressByCourse = useProgressStore((state) => state.courses)

  return <div className="page">
    <PageHeader eyebrow="Biblioteca" title="Cursos" subtitle="Cada convocatoria conserva contenido, progreso y evaluación por separado. Puedes cambiar de curso sin mezclar estadísticas ni perder lo ya estudiado." />
    <div className={styles.grid}>
      {courses.map((course) => <CourseCard
        key={course.id}
        course={course}
        completion={courseCompletion(course, progressByCourse[course.id])}
        publishedLessonCount={publishedLessons(course).length}
      />)}
    </div>
  </div>
}
