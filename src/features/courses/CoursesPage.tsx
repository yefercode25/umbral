import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { CourseCard } from '../../components/learning/CourseCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { courseCompletion, publishedLessons } from '../../lib/course'
import { useProgressStore } from '../../stores/progressStore'
import styles from './CoursesPage.module.css'

export function CoursesPage() {
  const progress = useProgressStore((s) => s.courses[dianGestorCourse.id])
  return <div className="page">
    <PageHeader eyebrow="Biblioteca" title="Cursos" subtitle="Cada curso conserva su progreso por separado. Umbral está preparado para crecer sin mezclar contenidos ni estadísticas." />
    <div className={styles.grid}>
      <CourseCard course={dianGestorCourse} completion={courseCompletion(dianGestorCourse, progress)} publishedLessonCount={publishedLessons(dianGestorCourse).length}/>
      <div className={styles.placeholder}><span>Próximamente</span><strong>Más cursos, misma plataforma</strong><p>La arquitectura ya separa contenido, progreso y evaluación para incorporar nuevas convocatorias sin rehacer la aplicación.</p></div>
    </div>
  </div>
}
