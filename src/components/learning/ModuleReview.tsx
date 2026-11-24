import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react'
import type { Course, Lesson } from '../../types/course'
import { lessonAssessmentQuestions, LESSON_PASS_SCORE, LESSON_REVIEW_COUNT } from '../../lib/lessonAssessment'
import { optionLabel, optionsForDisplay, questionOptionsForDisplay } from '../../lib/questionPresentation'
import { useProgressStore } from '../../stores/progressStore'
import styles from './ModuleReview.module.css'

type AnswerResult = { questionId: string; choiceId: string; correct: boolean }
type ReviewResult = { score: number; answers: AnswerResult[] }

/** Evaluación al terminar cada lección PGN, sin revelar soluciones antes del envío. */
export function LessonAssessment({ course, lesson, alreadyCompleted, assessmentPassed }: {
  course: Course
  lesson: Lesson
  alreadyCompleted: boolean
  assessmentPassed: boolean
}) {
  const [round, setRound] = useState(0)
  const [selected, setSelected] = useState<Record<string, string>>({})
  const [result, setResult] = useState<ReviewResult | null>(null)
  const recordAnswer = useProgressStore(s => s.recordAnswer)
  const recordLessonAssessment = useProgressStore(s => s.recordLessonAssessment)
  const questions = useMemo(() => lessonAssessmentQuestions(course, lesson, round), [course, lesson, round])
  const answered = questions.filter(q => Boolean(selected[q.id])).length
  const canSubmit = questions.length === LESSON_REVIEW_COUNT && answered === LESSON_REVIEW_COUNT && !result
  const module = course.modules.find(m => m.id === lesson.moduleId)

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
    recordLessonAssessment(course, lesson.id, score)
  }

  const restart = () => {
    setRound(v => v + 1)
    setResult(null)
    setSelected({})
  }

  if (questions.length !== LESSON_REVIEW_COUNT) return <section className={styles.review} role="alert">No se pudo cargar la evaluación de esta lección. Vuelve a abrirla antes de continuar.</section>

  return <section className={styles.review} aria-labelledby="pgn-module-review">
    <div className={styles.heading}>
      <div>
        <span className={styles.eyebrow}>{lesson.order === 3 ? 'CIERRE ACUMULATIVO' : `LECCIÓN ${lesson.order} · EVALUACIÓN`} · {module?.code ?? lesson.moduleId.toUpperCase()}</span>
        <h2 id="pgn-module-review">Comprueba lo aprendido</h2>
        <p>Resuelve cinco preguntas sobre los conceptos y casos del módulo. {lesson.order === 3 ? 'Este cierre recupera lo estudiado en las tres lecciones.' : 'Aplica lo estudiado hasta este punto.'} Necesitas cuatro aciertos de cinco; la corrección aparece al entregar.</p>
      </div>
      <span className={styles.counter}>{answered}/{LESSON_REVIEW_COUNT}</span>
    </div>

    {questions.map((question, index) => {
      const displayOptions = round === 0 ? questionOptionsForDisplay(question) : optionsForDisplay(question.options, `lesson:${question.id}:${round}`)
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
          {displayOptions.map((o, i) => <p key={o.id}><b>{optionLabel(i)} · {o.id === question.correctOptionId ? 'Correcta' : 'Distractor'}:</b> {o.rationale}</p>)}
          <div className={styles.sources}>{question.sourceIds.slice(0, 3).map(id => {
            const source = course.sources.find(s => s.id === id)
            return source ? <a key={id} href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a> : null
          })}</div>
        </div>}
      </fieldset>
    })}

    {result ? <div className={styles.result} role="status">
      <div className={styles.summary}>
        {result.score >= LESSON_PASS_SCORE ? <CheckCircle2 size={24} aria-hidden="true"/> : <AlertCircle size={24} aria-hidden="true"/>}
        <div><strong>{result.score}/{LESSON_REVIEW_COUNT} correctas · {result.score >= LESSON_PASS_SCORE ? 'Evaluación aprobada' : 'Revisar y volver a intentar'}</strong>
          <p>{result.score >= LESSON_PASS_SCORE ? 'Ya puedes completar esta lección y continuar.' : 'Consulta los fundamentos de tus errores. Puedes volver a resolver estas preguntas en otro orden.'}</p></div>
      </div>
      <button type="button" className={styles.retry} onClick={restart}><RotateCcw size={16}/> {result.score < LESSON_PASS_SCORE ? 'Volver a intentar' : 'Repasar otra vez'}</button>
      {result.score >= LESSON_PASS_SCORE && !alreadyCompleted && <p className={styles.notice}>Selecciona «Completar y continuar» al final de la lección para guardar el avance.</p>}
    </div> : <button type="button" className={styles.submit} disabled={!canSubmit} onClick={submit}>
      Evaluar mis cinco respuestas <ArrowRight size={16} aria-hidden="true"/>
    </button>}
    {alreadyCompleted ? <p className={styles.notice}>Esta lección ya está completada en tu historial. Puedes evaluarte de forma voluntaria sin perder el avance.</p> : assessmentPassed && <p className={styles.notice}>Tu aprobación quedó guardada en este dispositivo. Puedes continuar o repasar.</p>}
  </section>
}
