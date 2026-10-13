import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Check,
  CheckCircle2,
  Clock3,
  ExternalLink,
  RotateCcw,
  Target,
  XCircle,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { useProgressStore } from '../../stores/progressStore'
import { examProfilesForCourse, selectExamQuestions, type ExamProfileId } from '../../lib/questionSelection'
import type { Question } from '../../types/course'
import { optionLabel, questionOptionsForDisplay } from '../../lib/questionPresentation'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { scrollPageToTop } from '../../lib/scroll'
import styles from './MockExamPage.module.css'

function formatElapsed(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(rest).padStart(2, '0')}`
}

export function MockExamPage() {
  const [searchParams] = useSearchParams()
  const course = getCourseFromSearchParams(searchParams)
  const examProfiles = examProfilesForCourse(course)
  const recordAnswer = useProgressStore((state) => state.recordAnswer)
  const ensureCourse = useProgressStore((state) => state.ensureCourse)
  const [profileId, setProfileId] = useState<ExamProfileId>('functional-training')
  const [attempt, setAttempt] = useState(0)
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(() => new Set())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  const profile = examProfiles.find((item) => item.id === profileId) ?? examProfiles[0]!

  useEffect(() => {
    ensureCourse(course)
  }, [course, ensureCourse])

  useEffect(() => {
    setStarted(false)
    setQuestions([])
    setAnswers({})
    setFlagged(new Set())
    setCurrentIndex(0)
    setSubmitted(false)
    setElapsed(0)
    setProfileId('functional-training')
  }, [course.id])

  useEffect(() => {
    if (!started || submitted) return
    const baseElapsed = elapsed
    const startedAt = Date.now()
    const timer = window.setInterval(
      () => setElapsed(baseElapsed + Math.floor((Date.now() - startedAt) / 1000)),
      1000,
    )
    return () => window.clearInterval(timer)
    // `attempt` reinicia el reloj de una nueva sesión; elapsed se captura al iniciar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt, started, submitted])


  useEffect(() => {
    if (started && !submitted) scrollPageToTop()
  }, [currentIndex, started, submitted])

  const current = questions[currentIndex]
  const answeredCount = Object.keys(answers).length
  const unansweredCount = Math.max(0, questions.length - answeredCount)
  const progress = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0

  const results = useMemo(() => {
    const items = questions.map((question) => ({
      question,
      selected: answers[question.id],
      correct: answers[question.id] === question.correctOptionId,
    }))
    const correct = items.filter((item) => item.correct).length
    const modules = new Map<string, { total: number; correct: number }>()
    for (const item of items) {
      const currentModule = modules.get(item.question.moduleId) ?? { total: 0, correct: 0 }
      currentModule.total += 1
      currentModule.correct += item.correct ? 1 : 0
      modules.set(item.question.moduleId, currentModule)
    }
    return { items, correct, modules }
  }, [answers, questions])

  const begin = () => {
    setQuestions(selectExamQuestions(course, profileId))
    setAnswers({})
    setFlagged(new Set())
    setCurrentIndex(0)
    setSubmitted(false)
    setElapsed(0)
    setStarted(true)
    setAttempt((value) => value + 1)
    scrollPageToTop()
  }

  const submit = () => {
    if (submitted || unansweredCount > 0) return
    for (const question of questions) {
      const correct = answers[question.id] === question.correctOptionId
      recordAnswer(course, question.id, question.skillIds, correct)
    }
    setSubmitted(true)
    scrollPageToTop()
  }

  const restart = () => {
    setStarted(false)
    setQuestions([])
    setAnswers({})
    setFlagged(new Set())
    setCurrentIndex(0)
    setSubmitted(false)
    setElapsed(0)
    scrollPageToTop()
  }

  const toggleFlag = (questionId: string) => {
    setFlagged((previous) => {
      const next = new Set(previous)
      if (next.has(questionId)) next.delete(questionId)
      else next.add(questionId)
      return next
    })
  }

  if (!started) {
    return (
      <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
        <Link className={styles.back} to={withCourse('/practice', course)}><ArrowLeft size={17}/> Práctica</Link>
        <header className={styles.setupHeader}>
          <span>Entrenamiento sin retroalimentación inmediata</span>
          <h1>Configura tu simulacro</h1>
          <p>Elige la profundidad de la sesión para <strong>{course.shortTitle}</strong>. Los perfiles se construyen con la configuración de este curso y nunca mezclan preguntas de otra convocatoria. {course.id === 'dian-2676-gestor-ii' ? 'En DIAN 2676 los simulacros funcionales incluyen únicamente PJS; el repaso mixto mantiene preguntas de estudio.' : 'Los tipos de pregunta se ajustan a los contenidos disponibles para esta convocatoria.'} La ponderación interna de Umbral es formativa y <strong>no reemplaza la calificación psicométrica ni una distribución oficial</strong>.</p>
        </header>

        <div className={styles.profileGrid} role="radiogroup" aria-label="Tipo de simulacro">
          {examProfiles.map((item) => {
            const selected = profileId === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={selected}
                className={`${styles.profileCard} ${selected ? styles.profileCardSelected : ''}`}
                onClick={() => setProfileId(item.id)}
              >
                <div className={styles.profileTop}>
                  <span>{item.size} preguntas</span>
                  <span className={styles.profileCheck}>{selected && <Check size={15}/>}</span>
                </div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <div className={styles.profileMeta}><span>{item.questionTypeLabel}</span><span>{item.scopeLabel}</span>{item.integratedTarget ? <span>{item.integratedTarget}+ integradoras</span> : null}</div>
              </button>
            )
          })}
        </div>

        <section className={styles.setupNotes} aria-label="Cómo funciona este simulacro">
          <div><Clock3 size={17}/><span><strong>Cronómetro de referencia</strong><small>Cuenta el tiempo, pero no impone un límite mientras no exista una duración oficial específica aplicable al curso.</small></span></div>
          <div><Bookmark size={17}/><span><strong>Marca para revisar</strong><small>Puedes saltar entre preguntas, dejarlas pendientes y volver antes de entregar.</small></span></div>
          <div><Target size={17}/><span><strong>Resultado formativo</strong><small>Verás precisión por módulo y la explicación completa solo al finalizar.</small></span></div>
          <div><CheckCircle2 size={17}/><span><strong>Transferencia entre módulos</strong><small>Las sesiones combinan cobertura y prioridad pedagógica según el curso seleccionado.</small></span></div>
        </section>

        <div className={styles.setupAction}>
          <Button size="lg" onClick={begin}>Iniciar {profile.shortTitle.toLowerCase()}</Button>
          <p>{profile.size} preguntas · {profile.questionTypeLabel.toLowerCase()} · sin feedback durante la sesión</p>
        </div>
      </div>
    )
  }

  if (submitted) {
    const score = Math.round((results.correct / questions.length) * 100)
    return (
      <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
        <Link className={styles.back} to={withCourse('/practice', course)}><ArrowLeft size={17}/> Práctica</Link>
        <header className={styles.resultHero}>
          <span>{profile.title} completado</span>
          <div className={styles.score}>{score}<small>%</small></div>
          <h1>{results.correct} de {questions.length} respuestas correctas</h1>
          <p>Resultado formativo de Umbral para {course.shortTitle}. No equivale a la calificación oficial ni presupone cantidad, duración o ponderación definitiva de la prueba.</p>
          <div className={styles.resultMeta}>
            <span><Clock3 size={15}/>{formatElapsed(elapsed)}</span>
            <span><Target size={15}/>{answeredCount}/{questions.length} respondidas</span>
            {flagged.size > 0 && <span><BookmarkCheck size={15}/>{flagged.size} marcadas</span>}
          </div>
        </header>

        <section className={styles.breakdown} aria-labelledby="breakdown-title">
          <h2 id="breakdown-title">Desempeño por módulo</h2>
          <div className={styles.breakdownList}>
            {[...results.modules.entries()].map(([moduleId, value]) => {
              const module = course.modules.find((item) => item.id === moduleId)
              const percent = Math.round((value.correct / value.total) * 100)
              return <div key={moduleId} className={styles.breakdownRow}><div><strong>{module?.code}</strong><span>{module?.title}</span></div><div><span>{value.correct}/{value.total}</span><ProgressBar value={percent}/></div></div>
            })}
          </div>
        </section>

        <section className={styles.review} aria-labelledby="review-title">
          <div className={styles.sectionTitle}><div><span>Corrección</span><h2 id="review-title">Revisa cada decisión</h2></div><p>La explicación aparece solo después de entregar para conservar la dinámica del simulacro.</p></div>
          <div className={styles.reviewList}>
            {results.items.map(({ question, selected, correct }, index) => {
              const selectedOption = question.options.find((option) => option.id === selected)
              const correctOption = question.options.find((option) => option.id === question.correctOptionId)
              return <article key={question.id} className={`${styles.reviewCard} ${correct ? styles.reviewCorrect : styles.reviewWrong}`}>
                <div className={styles.reviewStatus}>{correct ? <CheckCircle2 size={18}/> : <XCircle size={18}/>}<span>Pregunta {index + 1}</span>{flagged.has(question.id) && <span className={styles.reviewFlag}><BookmarkCheck size={13}/> Marcada</span>}</div>
                {question.case && <p className={styles.case}>{question.case}</p>}
                <h3>{question.stem}</h3>
                <div className={styles.answerLine}><span>Tu respuesta</span><strong>{selectedOption?.text ?? 'Sin respuesta'}</strong></div>
                {!correct && <div className={styles.answerLine}><span>Respuesta correcta</span><strong>{correctOption?.text}</strong></div>}
                <p className={styles.explanation}>{question.explanation}</p>
                <div className={styles.reviewSources}>
                  <span>Fuentes</span>
                  <div>{question.sourceIds.map((sourceId) => {
                    const source = course.sources.find((item) => item.id === sourceId)
                    return source ? <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title}<ExternalLink size={11}/></a> : null
                  })}</div>
                </div>
              </article>
            })}
          </div>
        </section>

        <div className={styles.actions}>
          <Button size="lg" icon={<RotateCcw size={18}/>} onClick={restart}>Configurar otro</Button>
          <Link to={withCourse('/practice', course)}>Volver a práctica</Link>
        </div>
      </div>
    )
  }

  if (!current) return null

  return (
    <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
      <div className={styles.examHeader}>
        <button type="button" aria-label="Volver a configuración" onClick={restart}><ArrowLeft size={19}/></button>
        <div><span>{profile.title}</span><strong>Pregunta {currentIndex + 1} de {questions.length}</strong></div>
        <div className={styles.timer}><Clock3 size={15}/>{formatElapsed(elapsed)}</div>
      </div>
      <ProgressBar value={progress}/>

      <div className={styles.sessionStatus} aria-label="Estado del simulacro">
        <span><strong>{answeredCount}</strong> respondidas</span>
        <span><strong>{unansweredCount}</strong> pendientes</span>
        <span><strong>{flagged.size}</strong> marcadas</span>
      </div>

      <section className={styles.examBody}>
        <div className={styles.questionBar}>
          <div className={styles.questionMeta}><span>{current.type === 'pjs' ? 'Juicio situacional' : 'Conocimiento aplicado'}</span><span>Dificultad {current.difficulty}/5</span></div>
          <button
            type="button"
            className={`${styles.flagButton} ${flagged.has(current.id) ? styles.flagButtonActive : ''}`}
            aria-pressed={flagged.has(current.id)}
            onClick={() => toggleFlag(current.id)}
          >{flagged.has(current.id) ? <BookmarkCheck size={16}/> : <Bookmark size={16}/>}<span>{flagged.has(current.id) ? 'Marcada' : 'Revisar'}</span></button>
        </div>
        {current.case && <section className={styles.caseBox}><span>Caso</span><p>{current.case}</p></section>}
        <h1>{current.stem}</h1>
        <div className={styles.options} role="radiogroup" aria-label="Opciones de respuesta">
          {questionOptionsForDisplay(current).map((option, optionIndex) => {
            const selected = answers[current.id] === option.id
            return <button
              type="button"
              key={option.id}
              role="radio"
              aria-checked={selected}
              className={selected ? styles.optionSelected : styles.option}
              onClick={() => setAnswers((state) => ({ ...state, [current.id]: option.id }))}
            ><span aria-hidden="true">{optionLabel(optionIndex)}</span><p>{option.text}</p></button>
          })}
        </div>

        <div className={styles.navigator} aria-label="Navegación del simulacro">
          {questions.map((question, index) => {
            const isFlagged = flagged.has(question.id)
            const isAnswered = Boolean(answers[question.id])
            return <button
              key={question.id}
              type="button"
              className={`${index === currentIndex ? styles.navCurrent : ''} ${isAnswered ? styles.navAnswered : ''} ${isFlagged ? styles.navFlagged : ''}`}
              aria-label={`Ir a la pregunta ${index + 1}${isAnswered ? ', respondida' : ', sin responder'}${isFlagged ? ', marcada para revisar' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >{index + 1}{isFlagged && <span aria-hidden="true"/>}</button>
          })}
        </div>

        <div className={styles.examActions}>
          <Button variant="secondary" disabled={currentIndex === 0} onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}>Anterior</Button>
          {currentIndex < questions.length - 1
            ? <Button onClick={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}>Siguiente</Button>
            : <Button disabled={unansweredCount !== 0} onClick={submit}>Entregar</Button>}
        </div>
        {currentIndex === questions.length - 1 && unansweredCount !== 0 && <p className={styles.pending}>Aún faltan {unansweredCount} respuesta(s). Puedes volver con el navegador numérico; las marcadas conservan su indicador.</p>}
      </section>
    </div>
  )
}
