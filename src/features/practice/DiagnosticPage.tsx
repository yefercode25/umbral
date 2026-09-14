import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, CheckCircle2, ClipboardCheck, Clock3, RotateCcw, Target } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { selectBalancedQuestions } from '../../lib/questionSelection'
import { useProgressStore } from '../../stores/progressStore'
import type { Question } from '../../types/course'
import { optionLabel, questionOptionsForDisplay } from '../../lib/questionPresentation'
import { scrollPageToTop } from '../../lib/scroll'
import styles from './DiagnosticPage.module.css'

const DIAGNOSTIC_SIZE = 20

function formatElapsed(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`
}

function buildDiagnosticPool(course: ReturnType<typeof getCourseFromSearchParams>) {
  const configuredIds = course.practiceConfig?.diagnosticModuleIds
  if (!configuredIds?.length) return course.questions
  const modules = new Set(configuredIds)
  return course.questions.filter((question) => modules.has(question.moduleId))
}

export function DiagnosticPage() {
  const [searchParams] = useSearchParams()
  const course = getCourseFromSearchParams(searchParams)
  const diagnosticPool = useMemo(() => buildDiagnosticPool(course), [course])
  const ensureCourse = useProgressStore((state) => state.ensureCourse)
  const recordAnswer = useProgressStore((state) => state.recordAnswer)
  const [run, setRun] = useState(0)
  const [questions, setQuestions] = useState<Question[]>(() => selectBalancedQuestions(diagnosticPool, DIAGNOSTIC_SIZE))
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [index, setIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => { ensureCourse(course) }, [course, ensureCourse])
  useEffect(() => {
    setQuestions(selectBalancedQuestions(diagnosticPool, DIAGNOSTIC_SIZE))
    setAnswers({})
    setIndex(0)
    setSubmitted(false)
    setElapsed(0)
    setRun((value) => value + 1)
  }, [course.id, diagnosticPool])

  useEffect(() => {
    if (submitted) return
    const startedAt = Date.now()
    const timer = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 1000)
    return () => window.clearInterval(timer)
  }, [run, submitted])

  useEffect(() => {
    if (!submitted) scrollPageToTop()
  }, [index, submitted])

  const current = questions[index]
  const answered = Object.keys(answers).length
  const result = useMemo(() => {
    const byModule = new Map<string, { total: number; correct: number }>()
    let correct = 0
    for (const question of questions) {
      const isCorrect = answers[question.id] === question.correctOptionId
      if (isCorrect) correct += 1
      const bucket = byModule.get(question.moduleId) ?? { total: 0, correct: 0 }
      bucket.total += 1
      bucket.correct += isCorrect ? 1 : 0
      byModule.set(question.moduleId, bucket)
    }
    const modules = [...byModule.entries()].map(([moduleId, value]) => ({
      module: course.modules.find((item) => item.id === moduleId),
      total: value.total,
      correct: value.correct,
      percent: Math.round(value.correct / value.total * 100),
    })).filter((item) => item.module).sort((a, b) => a.percent - b.percent)
    return { correct, modules }
  }, [answers, course.modules, questions])

  const submit = () => {
    if (submitted || answered !== questions.length) return
    for (const question of questions) recordAnswer(course, question.id, question.skillIds, answers[question.id] === question.correctOptionId)
    setSubmitted(true)
    scrollPageToTop()
  }

  const restart = () => {
    setQuestions(selectBalancedQuestions(diagnosticPool, DIAGNOSTIC_SIZE))
    setAnswers({})
    setIndex(0)
    setSubmitted(false)
    setElapsed(0)
    setRun((value) => value + 1)
    scrollPageToTop()
  }

  if (submitted) {
    const score = questions.length ? Math.round(result.correct / questions.length * 100) : 0
    const priorities = result.modules.slice(0, 5)
    return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
      <Link to={withCourse('/practice', course)} className={styles.back}><ArrowLeft size={17}/> Práctica · {course.shortTitle}</Link>
      <header className={styles.resultHero}>
        <span className={styles.icon}><ClipboardCheck size={22}/></span>
        <p>Diagnóstico completado</p>
        <h1>{score}%</h1>
        <strong>{result.correct} de {questions.length} correctas</strong>
        <div className={styles.meta}><span><Clock3 size={14}/>{formatElapsed(elapsed)}</span><span><Target size={14}/>línea base registrada</span></div>
      </header>

      <section className={styles.recommendations}>
        <div className={styles.sectionHead}><span>Tu punto de partida · {course.shortTitle}</span><h2>Prioridades sugeridas</h2><p>El diagnóstico no pretende predecir tu resultado oficial. Usa estas áreas para decidir dónde comenzar a estudiar y vuelve a medirlas después.</p></div>
        <div className={styles.moduleList}>{priorities.map(({ module, total, correct, percent }) => module && <Link key={module.id} to={`/courses/${course.slug}/module/${module.id}`}><span>{module.code}</span><div><strong>{module.title}</strong><small>{correct}/{total} correctas</small></div><b>{percent}%</b></Link>)}</div>
      </section>

      <section className={styles.nextPlan}>
        <CheckCircle2 size={20}/><div><strong>Qué hacer ahora</strong><p>Empieza por los dos módulos con menor precisión, completa sus lecciones y luego usa una sesión recomendada. El sistema ajustará la práctica con tus nuevos intentos.</p></div>
      </section>

      <div className={styles.actions}><Button icon={<RotateCcw size={17}/>} onClick={restart}>Repetir diagnóstico</Button><Link to={`/courses/${course.slug}`}>Ir al curso</Link></div>
    </div>
  }

  if (!current) return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}><p>No hay preguntas disponibles para iniciar el diagnóstico de {course.shortTitle}.</p></div>

  return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
    <header className={styles.examHeader}>
      <Link to={withCourse('/practice', course)} aria-label="Salir del diagnóstico"><ArrowLeft size={19}/></Link>
      <div><span>Diagnóstico · {course.shortTitle}</span><strong>Pregunta {index + 1} de {questions.length}</strong></div>
      <div className={styles.timer}><Clock3 size={15}/>{formatElapsed(elapsed)}</div>
    </header>
    <ProgressBar value={Math.round(((index + 1) / questions.length) * 100)}/>

    <section className={styles.examBody}>
      <div className={styles.questionMeta}><span>{current.type === 'pjs' ? 'Juicio situacional' : 'Conocimiento aplicado'}</span><span>Dificultad {current.difficulty}/5</span></div>
      {current.case && <section className={styles.caseBox}><span>Caso</span><p>{current.case}</p></section>}
      <h1>{current.stem}</h1>
      <div className={styles.options} role="radiogroup" aria-label="Opciones de respuesta">
        {questionOptionsForDisplay(current).map((option, optionIndex) => {
          const selected = answers[current.id] === option.id
          return <button key={option.id} type="button" role="radio" aria-checked={selected} className={selected ? styles.optionSelected : styles.option} onClick={() => setAnswers((state) => ({ ...state, [current.id]: option.id }))}><span aria-hidden="true">{optionLabel(optionIndex)}</span><p>{option.text}</p></button>
        })}
      </div>
      <div className={styles.navigator}>{questions.map((question, questionIndex) => <button key={question.id} type="button" className={`${questionIndex === index ? styles.navCurrent : ''} ${answers[question.id] ? styles.navAnswered : ''}`} onClick={() => setIndex(questionIndex)}>{questionIndex + 1}</button>)}</div>
      <div className={styles.examActions}><Button variant="secondary" disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))}>Anterior</Button>{index < questions.length - 1 ? <Button disabled={!answers[current.id]} onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))}>Siguiente</Button> : <Button disabled={answered !== questions.length} onClick={submit}>Finalizar diagnóstico</Button>}</div>
      {index === questions.length - 1 && answered !== questions.length && <p className={styles.pending}>Faltan {questions.length - answered} respuesta(s). Puedes volver usando los números.</p>}
    </section>
  </div>
}
