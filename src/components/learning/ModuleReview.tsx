import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react'
import type { Course } from '../../types/course'
import { moduleReviewQuestions, MODULE_PASS_SCORE, MODULE_REVIEW_COUNT } from '../../lib/moduleReview'
import { optionLabel, questionOptionsForDisplay } from '../../lib/questionPresentation'
import { useProgressStore } from '../../stores/progressStore'
import styles from './ModuleReview.module.css'

type AnswerResult = { questionId: string; choiceId: string; correct: boolean }
type ReviewResult = { score: number; answers: AnswerResult[] }

/**
 * En la tercera lección: exactamente tres preguntas del módulo, distintas
 * de las comprobaciones de fundamentos y aplicación. Respuestas y fuentes se
 * explican después de enviar el intento completo; nunca se revela antes.
 */
export function ModuleReview({
  course,
  moduleId,
  alreadyCompleted,
  onPassed,
}: {
  course: Course
  moduleId: string
  alreadyCompleted: boolean
  onPassed: () => void
}) {
  const [round, setRound] = useState(0)
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [result, setResult] = useState<ReviewResult | null>(null)
  const recordAnswer = useProgressStore(s => s.recordAnswer)
  const questions = useMemo(() => moduleReviewQuestions(course, moduleId, round), [course, moduleId, round])
  const answered = questions.filter(q => Boolean(selected[q.id])).length
  const canSubmit = questions.length === MODULE_REVIEW_COUNT && answered === MODULE_REVIEW_COUNT && !result
  const module = course.modules.find(m => m.id === moduleId)

  const submit = () => {
    if (!canSubmit) return
    const answers = questions.map(question => ({
      questionId: question.id,
      choiceId: selected[question.id]!,
      correct: selected[question.id] === question.correctOptionId,
    }))
    const score = answers.filter(answer => answer.correct).length
    setResult({ score, answers })
    for (const answer of answers) {
      const question = questions.find(item => item.id === answer.questionId)!
      recordAnswer(course, question.id, question.skillIds, answer.correct)
    }
    if (score >= MODULE_PASS_SCORE) onPassed()
  }

  const restart = () => {
    setRound(v => v + 1)
    setResult(null)
    setSelected({})
  }

  if (questions.length !== MODULE_REVIEW_COUNT) return null

  return <section className={styles.review} aria-labelledby="pgn-module-review">
    <div className={styles.heading}>
      <div>
        <span className={styles.eyebrow}>CIERRE DEL MÓDULO · {module?.code ?? moduleId.toUpperCase()}</span>
        <h2 id="pgn-module-review">Comprueba lo aprendido</h2>
        <p>Resuelve tres situaciones de este módulo sin salir de la lección. Para avanzar, necesitas acertar al menos dos. No añadimos preguntas nuevas al banco.</p>
      </div>
      <span className={styles.counter}>{answered}/{MODULE_REVIEW_COUNT}</span>
    </div>

    {questions.map((question, index) => {
      const displayOptions = questionOptionsForDisplay(question)
      const answer = result?.answers.find(item => item.questionId === question.id)
      return <fieldset key={question.id} className={styles.question}>
        <legend><span>{index+1}</span> {question.type === 'pjs' ? 'Decisión situacional' : 'Conocimiento aplicado'}</legend>
        {question.case && <p className={styles.case}>{question.case}</p>}
        <h3>{question.stem}</h3>
        <div className={styles.options}>
          {displayOptions.map((option, optionIndex) => {
            const picked = selected[question.id] === option.id
            const correct = result !== null && option.id === question.correctOptionId
            const wrong = result !== null && picked && !correct
            return <label key={option.id} className={`${styles.option} ${picked ? styles.selected : ''} ${correct ? styles.correct : ''} ${wrong ? styles.wrong : ''}`}>
              <input type="radio" name={question.id} value={option.id} checked={picked} disabled={result !== null}
                onChange={() => setSelected(prev => ({ ...prev, [question.id]: option.id }))}/>
              <strong aria-hidden="true">{optionLabel(optionIndex)}</strong>
              <span>{option.text}</span>
            </label>
          })}
        </div>
        {result && <div className={styles.explanation}>
          <strong>{answer?.correct ? 'Bien razonado' : 'Revisa la regla del expediente'}</strong>
          <p>{question.explanation}</p>
          {question.options.filter(o => o.id === question.correctOptionId).map(o => <p key={o.id}><b>Fundamento:</b> {o.rationale}</p>)}
          <div className={styles.sources}>{question.sourceIds.slice(0, 3).map(id => {
            const source = course.sources.find(s => s.id === id)
            return source ? <a key={id} href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a> : null
          })}</div>
        </div>}
      </fieldset>
    })}

    {result ? <div className={styles.result} role="status">
      <div className={styles.summary}>
        {result.score >= MODULE_PASS_SCORE ? <CheckCircle2 size={24} aria-hidden="true"/> : <AlertCircle size={24} aria-hidden="true"/>}
        <div><strong>{result.score}/{MODULE_REVIEW_COUNT} correctas · {result.score >= MODULE_PASS_SCORE ? 'Cierre aprobado' : 'Revisar y volver a intentar'}</strong>
          <p>{result.score >= MODULE_PASS_SCORE ? 'Ya puedes completar esta lección y continuar con el siguiente módulo.' : 'Consulta los fundamentos de tus errores y vuelve a probar con una combinación distinta de preguntas existentes.'}</p></div>
      </div>
      {result.score < MODULE_PASS_SCORE && <button type="button" className={styles.retry} onClick={restart}><RotateCcw size={16}/> Volver a intentar</button>}
      {result.score >= MODULE_PASS_SCORE && !alreadyCompleted && <p className={styles.notice}>Selecciona «Completar y continuar» al final de la lección para guardar el avance.</p>}
    </div> : <button type="button" className={styles.submit} disabled={!canSubmit} onClick={submit}>
      Evaluar mis tres respuestas <ArrowRight size={16} aria-hidden="true"/>
    </button>}
    {alreadyCompleted && <p className={styles.notice}>Este módulo ya figura como completado en tu historial; la evaluación puede repetirse de forma voluntaria.</p>}
  </section>
}
