import { ArrowRight, BookOpenCheck, Flame, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { courseCompletion, nextLesson, publishedLessons } from '../../lib/course'
import { todayKey } from '../../lib/date'
import { useProgressStore } from '../../stores/progressStore'
import { CourseCard } from '../../components/learning/CourseCard'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import styles from './HomePage.module.css'

export function HomePage() {
  const progress = useProgressStore((s) => s.courses[dianGestorCourse.id])
  const completion = courseCompletion(dianGestorCourse, progress)
  const next = nextLesson(dianGestorCourse, progress)
  const todayMinutes = progress?.todayDate === todayKey() ? progress.todayMinutes : 0
  const goal = progress?.dailyGoalMinutes ?? 25

  return <div className="page">
    <header className={styles.topbar}><div><p className={styles.overline}>Umbral</p><h1>Tu estudio, con contexto.</h1></div><Link to="/settings" className={styles.settings} aria-label="Ajustes"><Settings size={19}/></Link></header>

    <section className={styles.hero}>
      <div className={styles.heroMain}>
        <img className={styles.heroArt} src="/media/editorial/home-platform.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
        <span className={styles.pill}><BookOpenCheck size={15}/> Continuar</span>
        <h2>{next?.title ?? 'Empieza tu curso'}</h2>
        <p>{next?.subtitle ?? dianGestorCourse.description}</p>
        {next && <Link to={`/courses/${dianGestorCourse.slug}/lesson/${next.id}`}><Button size="lg" icon={<ArrowRight size={18}/>}>Estudiar ahora</Button></Link>}
      </div>
      <div className={styles.goal}>
        <div className={styles.goalIcon}><Flame size={20}/></div>
        <div><span>Meta de hoy</span><strong>{todayMinutes} de {goal} min</strong></div>
        <ProgressBar value={Math.min(100, Math.round((todayMinutes / goal) * 100))}/>
      </div>
    </section>

    <section className={styles.section}><div className={styles.sectionHead}><div><span>Curso activo</span><h2>Sigue construyendo dominio</h2></div><Link to="/courses">Ver cursos</Link></div>
      <CourseCard course={dianGestorCourse} completion={completion} publishedLessonCount={publishedLessons(dianGestorCourse).length}/>
    </section>

    <section className={styles.quickGrid}>
      <Link to="/practice" className={styles.quick}><span>Practicar</span><strong>{dianGestorCourse.questions.length} preguntas verificadas</strong><p>Resuelve casos y recibe explicación inmediata.</p></Link>
      <Link to="/progress" className={styles.quick}><span>Progreso</span><strong>{completion}% del contenido publicado</strong><p>Revisa lecciones, habilidades y constancia.</p></Link>
    </section>
  </div>
}
