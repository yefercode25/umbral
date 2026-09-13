import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, RotateCcw, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { QuestionCard } from '../../components/learning/QuestionCard'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { buildAdaptiveSession } from '../../lib/adaptivePractice'
import { scrollPageToTop } from '../../lib/scroll'
import { useProgressStore } from '../../stores/progressStore'
import styles from './AdaptivePracticePage.module.css'

const SESSION_SIZE = 12

export function AdaptivePracticePage() {
  const course = dianGestorCourse
  const progress = useProgressStore((state) => state.courses[course.id])
  const [seed, setSeed] = useState(() => Date.now())
  const [questions, setQuestions] = useState(() => buildAdaptiveSession(course, progress, SESSION_SIZE, Date.now()))
  const [index, setIndex] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [answeredCurrent, setAnsweredCurrent] = useState(false)
  const current = questions[index]
  const finished = index >= questions.length
  const correct = results.filter(Boolean).length

  useEffect(() => {
    scrollPageToTop()
  }, [index])

  const handleSubmitted = (isCorrect: boolean) => {
    if (answeredCurrent) return
    setAnsweredCurrent(true)
    setResults((items) => [...items, isCorrect])
  }

  const next = () => {
    if (!answeredCurrent) return
    setIndex((value) => value + 1)
    setAnsweredCurrent(false)
  }

  const restart = () => {
    const nextSeed = Date.now()
    setSeed(nextSeed)
    setQuestions(buildAdaptiveSession(course, progress, SESSION_SIZE, nextSeed))
    setIndex(0)
    setResults([])
    setAnsweredCurrent(false)
    scrollPageToTop()
  }

  if (finished) {
    const score = questions.length ? Math.round((correct / questions.length) * 100) : 0
    return <div className="page page--narrow">
      <Link className={styles.back} to="/practice"><ArrowLeft size={17}/> Práctica</Link>
      <section className={styles.summaryCard}>
        <span className={styles.summaryIcon}><CheckCircle2 size={24}/></span>
        <p>Sesión recomendada completada</p>
        <h1>{score}%</h1>
        <span>{correct} de {questions.length} respuestas correctas</span>
        <div className={styles.summaryNote}>La próxima sesión se recalculará con los intentos que acabas de registrar. Los errores recientes subirán de prioridad y las respuestas correctas inmediatas bajarán temporalmente.</div>
        <div className={styles.summaryActions}><Button icon={<RotateCcw size={17}/>} onClick={restart}>Nueva sesión</Button><Link to="/progress">Ver progreso</Link></div>
      </section>
    </div>
  }

  if (!current) return <div className="page page--narrow"><p>No hay preguntas disponibles.</p></div>

  return <div className="page page--narrow">
    <header className={styles.header}>
      <Link to="/practice" aria-label="Volver a práctica"><ArrowLeft size={19}/></Link>
      <div><span>Sesión recomendada</span><strong>{index + 1} de {questions.length}</strong></div>
      <BrainCircuit size={20}/>
    </header>
    <ProgressBar value={Math.round((index / questions.length) * 100)}/>

    <section className={styles.context}>
      <div><Target size={17}/><span><strong>Selección adaptativa</strong><small>Errores recientes + habilidades débiles + cobertura nueva</small></span></div>
      <span>{course.modules.find((module) => module.id === current.moduleId)?.code}</span>
    </section>

    <QuestionCard key={`${seed}-${current.id}`} course={course} question={current} onSubmitted={handleSubmitted} showRetry={false}/>

    <div className={styles.nextRow}>
      <p>{answeredCurrent ? 'Revisa la explicación antes de continuar.' : 'Responde y comprueba para habilitar la siguiente pregunta.'}</p>
      <Button disabled={!answeredCurrent} icon={<ArrowRight size={17}/>} onClick={next}>{index === questions.length - 1 ? 'Ver resultado' : 'Siguiente'}</Button>
    </div>
  </div>
}
