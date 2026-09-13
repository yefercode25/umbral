import { ArrowLeft, BookOpenCheck, CalendarRange, CheckCircle2, Clock3, Dumbbell, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { moduleCompletion } from '../../lib/course'
import { useProgressStore } from '../../stores/progressStore'
import styles from './StudyPlanPage.module.css'

type StudyPhase = {
  id: string
  weeks: string
  title: string
  description: string
  moduleIds: string[]
  practice: string
}

const phases: StudyPhase[] = [
  {
    id: 'p1', weeks: 'Semana 1', title: 'Base jurídica e institucional',
    description: 'Construye el vocabulario y las reglas de función pública que aparecen detrás de los casos.',
    moduleIds: ['m0','m1','m2','m3','m4'], practice: 'Diagnóstico + 10 preguntas de fundamentos al cerrar la semana.',
  },
  {
    id: 'p2', weeks: 'Semana 2', title: 'Obligación, recaudo y control',
    description: 'Conecta obligación tributaria, estado de cuenta, EAR y control extensivo antes de entrar a cartera.',
    moduleIds: ['m5','m6','m7','m8'], practice: 'Dos sesiones adaptativas centradas en estado de cuenta, EAR y control.',
  },
  {
    id: 'p3', weeks: 'Semanas 3–5', title: 'Núcleo de cartera y cobro',
    description: 'Dedica aquí la mayor parte del tiempo: exigibilidad, prescripción, persuasivo, coactivo, cautelares y concursales.',
    moduleIds: ['m9','m10','m11','m12','m13','m14'], practice: 'Casos PJS después de cada módulo + un simulacro rápido semanal.',
  },
  {
    id: 'p4', weeks: 'Semana 6', title: 'Devoluciones, compensaciones y datos',
    description: 'Domina el origen del saldo, la ruta de devolución y el papel de los sistemas y la trazabilidad.',
    moduleIds: ['m15','m16','m17'], practice: 'Sesión enfocada en clasificación de casos y verificación de expedientes.',
  },
  {
    id: 'p5', weeks: 'Semana 7', title: 'Comportamientos e integridad',
    description: 'Entiende las conductas observables de los niveles exigidos por CT-CR-3007 y responde con consistencia.',
    moduleIds: ['m18','m19','m20'], practice: 'Repaso de valores, dilemas y conductas; evita memorizar respuestas “perfectas”.',
  },
  {
    id: 'p6', weeks: 'Semana 8', title: 'Consolidación y examen',
    description: 'Reduce lectura nueva y aumenta recuperación activa, errores, simulacros y revisión de fuentes.',
    moduleIds: ['m21','m22','m23'], practice: 'Simulacros, cuaderno de errores y repaso adaptativo de los cuatro módulos más débiles.',
  },
  {
    id: 'p7', weeks: 'En paralelo', title: 'Herramientas y razonamiento transversal',
    description: 'Bloque complementario y provisional: ofimática, Excel, análisis de datos, lógica, conjuntos, matemática práctica y probabilidad. No desplaza el núcleo CT-CR-3007.',
    moduleIds: ['m24','m25','m26','m27','m28'], practice: 'Dos sesiones transversales por semana, priorizando Excel, interpretación de datos y porcentajes; conjuntos/probabilidad quedan como cobertura complementaria hasta la GOA.',
  },
]

export function StudyPlanPage() {
  const course = dianGestorCourse
  const progress = useProgressStore((state) => state.courses[course.id])

  const phaseStats = phases.map((phase) => {
    const modules = phase.moduleIds.map((id) => course.modules.find((module) => module.id === id)!).filter(Boolean)
    const lessons = course.lessons.filter((lesson) => phase.moduleIds.includes(lesson.moduleId) && lesson.status === 'published')
    const minutes = lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
    const questionCount = course.questions.filter((question) => phase.moduleIds.includes(question.moduleId)).length
    const completion = modules.length
      ? Math.round(modules.reduce((sum, module) => sum + moduleCompletion(course, module.id, progress), 0) / modules.length)
      : 0
    return { phase, modules, lessons, minutes, questionCount, completion }
  })

  const totalMinutes = course.lessons.filter((lesson) => lesson.status === 'published').reduce((sum, lesson) => sum + lesson.durationMinutes, 0)
  const dailyGoal = progress?.dailyGoalMinutes ?? 25
  const studyDays = Math.ceil(totalMinutes / dailyGoal)

  return <div className="page">
    <Link to={`/courses/${course.slug}`} className={styles.back}><ArrowLeft size={17}/> Volver al curso</Link>

    <header className={styles.hero}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}><CalendarRange size={15}/> Ruta recomendada</span>
        <h1>Plan de estudio · 8 semanas + transversal</h1>
        <p>No es un calendario rígido. Es un orden de prioridad para avanzar desde fundamentos hasta decisión situacional, dejando más tiempo al núcleo de cartera y cobro e incorporando un bloque transversal en paralelo.</p>
      </div>
      <div className={styles.summary}>
        <div><Clock3 size={18}/><span><strong>{Math.round(totalMinutes / 60)} h</strong> de lectura guiada</span></div>
        <div><BookOpenCheck size={18}/><span><strong>{course.lessons.length}</strong> lecciones</span></div>
        <div><Dumbbell size={18}/><span><strong>{course.questions.length}</strong> preguntas</span></div>
        <div><Target size={18}/><span><strong>≈ {studyDays} días</strong> a {dailyGoal} min/día</span></div>
      </div>
    </header>

    <aside className={styles.rule}>
      <Target size={20}/>
      <div><strong>Regla de carga</strong><p>En las semanas 3–5 dedica aproximadamente la mitad de tu tiempo total al núcleo CT-CR-3007. El objetivo no es “terminar módulos”; es poder decidir correctamente frente a un expediente.</p></div>
    </aside>

    <div className={styles.timeline}>
      {phaseStats.map(({ phase, modules, lessons, minutes, questionCount, completion }, index) => <section className={styles.phase} key={phase.id}>
        <div className={styles.rail} aria-hidden="true"><span>{index + 1}</span><i/></div>
        <div className={styles.phaseBody}>
          <div className={styles.phaseTop}>
            <div><span className={styles.weeks}>{phase.weeks}</span><h2>{phase.title}</h2><p>{phase.description}</p></div>
            <strong className={styles.percent}>{completion}%</strong>
          </div>
          <ProgressBar value={completion}/>
          <div className={styles.meta}><span>{lessons.length} lecciones</span><span>{minutes} min</span><span>{questionCount} preguntas</span></div>
          <div className={styles.moduleGrid}>
            {modules.map((module) => <Link to={`/courses/${course.slug}/module/${module.id}`} className={styles.module} key={module.id}>
              <span>{module.code}</span><strong>{module.title}</strong><small>{moduleCompletion(course, module.id, progress)}% completado</small>
            </Link>)}
          </div>
          <div className={styles.practice}><CheckCircle2 size={17}/><span><strong>Práctica de cierre:</strong> {phase.practice}</span></div>
        </div>
      </section>)}
    </div>

    <section className={styles.footerCta}>
      <div><span>¿No sabes por dónde empezar?</span><h2>Haz primero el diagnóstico.</h2><p>La ruta sigue siendo la misma, pero Umbral usará tus respuestas para priorizar la práctica adaptativa.</p></div>
      <Link to="/practice/diagnostic">Iniciar diagnóstico</Link>
    </section>
  </div>
}
