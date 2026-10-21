import { BookOpenCheck, GraduationCap } from 'lucide-react'
import { CourseCard } from '../../components/learning/CourseCard'
import { courseCompletion, publishedLessons } from '../../lib/course'
import { courses } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './CoursesPage.module.css'

export function CoursesPage() {
  const progress = useProgressStore((state) => state.courses)
  const selected = useSettingsStore((state) => state.activeCourseSlug)
  return <div className="page">
    <header className={styles.header}>
      <span><GraduationCap size={19}/> TU BIBLIOTECA</span>
      <h1>¿Qué vas a aprender hoy?</h1>
      <p>Elige tu convocatoria, como cuando cambias de curso en Duolingo. Cada una tiene sus propias lecciones, preguntas, simulacros y progreso guardado.</p>
    </header>
    <div className={styles.grid}>
      {courses.map((course) => <div key={course.id} className={styles.choice}>
        {course.slug === selected && <span className={styles.selected}><BookOpenCheck size={15}/> ESTÁS ESTUDIANDO ESTE CURSO</span>}
        <CourseCard course={course} completion={courseCompletion(course, progress[course.id])} publishedLessonCount={publishedLessons(course).length}/>
      </div>)}
    </div>
    <p className={styles.footnote}>Cambiar de curso no reinicia nada. Puedes alternar entre DIAN y Procuraduría cuando lo necesites.</p>
  </div>
}
