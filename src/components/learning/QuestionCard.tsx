import { useEffect, useMemo, useState } from 'react'
import { Bookmark, CheckCircle2, CircleAlert, Compass, ExternalLink, RotateCcw, Scissors } from 'lucide-react'
import type { Course, Question } from '../../types/course'
import { useProgressStore } from '../../stores/progressStore'
import { optionLabel, questionOptionsForDisplay } from '../../lib/questionPresentation'
import { Button } from '../ui/Button'
import styles from './QuestionCard.module.css'

export function QuestionCard({ course, question, compact = false, onSubmitted, showRetry = true }: { course: Course; question: Question; compact?: boolean; onSubmitted?: (correct: boolean) => void; showRetry?: boolean }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [discardedIds, setDiscardedIds] = useState<string[]>([])
  const [showMethodHint, setShowMethodHint] = useState(false)
  const recordAnswer = useProgressStore((s) => s.recordAnswer)
  const toggleQuestionBookmark = useProgressStore((s) => s.toggleQuestionBookmark)
  // Select only the primitive this card needs. Returning `?? []` from a Zustand
  // selector creates a fresh array on every snapshot and React 19 can interpret
  // that as a continuously changing external-store value.
  const bookmarked = useProgressStore((s) => Boolean(s.courses[course.id]?.questionBookmarks?.includes(question.id)))
  const sources = question.sourceIds.map((sourceId) => course.sources.find((source) => source.id === sourceId)).filter((source): source is NonNullable<typeof source> => Boolean(source))
  const module = course.modules.find((m) => m.id === question.moduleId)
  const displayOptions = useMemo(() => questionOptionsForDisplay(question), [question])
  const correct = selected === question.correctOptionId
  const selectedOption = useMemo(() => question.options.find((o) => o.id === selected), [question.options, selected])

  // QuestionCard is reused in lessons, adaptive practice and case labs. When React
  // keeps the same component instance while the question prop changes, local UI
  // state must not leak from the previous question into the new one.
  useEffect(() => {
    setSelected(null)
    setSubmitted(false)
    setDiscardedIds([])
    setShowMethodHint(false)
  }, [course.id, question.id])

  const submit = () => {
    if (!selected || submitted) return
    setSubmitted(true)
    const isCorrect = selected === question.correctOptionId
    recordAnswer(course, question.id, question.skillIds, isCorrect)
    onSubmitted?.(isCorrect)
  }

  const toggleDiscard = (optionId: string) => {
    if (submitted) return
    setDiscardedIds((prev) => prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId])
    if (selected === optionId) setSelected(null)
  }

  const reset = () => {
    setSelected(null)
    setSubmitted(false)
    setDiscardedIds([])
  }

  return (
    <section className={`${styles.card} ${compact ? styles.compact : ''}`}>
      <div className={styles.top}>
        <span>{question.type === 'pjs' ? 'Caso situacional' : 'Comprobación'}{module ? ` · ${module.code}` : ''}</span>
        <div>
          <button
            type="button"
            className={showMethodHint ? styles.hintBtnActive : styles.hintBtn}
            onClick={() => setShowMethodHint((v) => !v)}
            aria-pressed={showMethodHint}
          >
            <Compass size={14}/> Guía PJS
          </button>
          <span>Dificultad {question.difficulty}/5</span>
          <button type="button" className={bookmarked ? styles.bookmarked : ''} aria-label={bookmarked ? 'Quitar pregunta de guardadas' : 'Guardar pregunta'} aria-pressed={bookmarked} onClick={() => toggleQuestionBookmark(course, question.id)}>
            <Bookmark size={15} fill={bookmarked ? 'currentColor' : 'none'}/>
          </button>
        </div>
      </div>

      {showMethodHint && (
        <div className={styles.methodBox}>
          <strong>🧭 Filtro rápido de decisión PJS ({module ? `${module.code} · ${module.title}` : course.shortTitle}):</strong>
          <ol>
            <li><strong>Etapa y hecho rector:</strong> identifica en qué momento exacto está el trámite antes de elegir.</li>
            <li><strong>Competencia y debido proceso:</strong> verifica si la dependencia puede actuar o si debe remitir/notificar primero.</li>
            <li><strong>Soporte verificable:</strong> descarta la opción que decide de fondo sin conciliar el soporte en el expediente.</li>
          </ol>
        </div>
      )}

      {question.case && <div className={styles.case}>{question.case}</div>}
      <h3>{question.stem}</h3>
      <div className={styles.options} role="radiogroup" aria-label="Opciones de respuesta">
        {displayOptions.map((option, optionIndex) => {
          const isSelected = selected === option.id
          const isDiscarded = !submitted && discardedIds.includes(option.id)
          const isCorrect = submitted && option.id === question.correctOptionId
          const isWrong = submitted && isSelected && !isCorrect
          return (
            <div key={option.id} className={styles.optionRow}>
              <button
                type="button"
                className={`${styles.option} ${isSelected ? styles.selected : ''} ${isDiscarded ? styles.discarded : ''} ${isCorrect ? styles.correct : ''} ${isWrong ? styles.wrong : ''}`}
                onClick={() => {
                  if (submitted) return
                  if (discardedIds.includes(option.id)) {
                    setDiscardedIds((prev) => prev.filter((id) => id !== option.id))
                  }
                  setSelected(option.id)
                }}
                role="radio"
                aria-checked={isSelected}
              >
                <span className={styles.letter} aria-hidden="true">{optionLabel(optionIndex)}</span>
                <span>{option.text}</span>
              </button>
              {!submitted && (
                <button
                  type="button"
                  className={`${styles.discardBtn} ${isDiscarded ? styles.discardBtnActive : ''}`}
                  onClick={() => toggleDiscard(option.id)}
                  aria-label={isDiscarded ? `Restaurar opción ${optionLabel(optionIndex)}` : `Tachar o descartar opción ${optionLabel(optionIndex)}`}
                  title={isDiscarded ? 'Restaurar opción' : 'Tachar distractor'}
                >
                  <Scissors size={14}/>
                </button>
              )}
            </div>
          )
        })}
      </div>
      {!submitted ? <Button onClick={submit} disabled={!selected}>Comprobar respuesta</Button> : (
        <div className={`${styles.feedback} ${correct ? styles.feedbackCorrect : styles.feedbackWrong}`} role="status" aria-live="polite">
          <div className={styles.feedbackTitle}>{correct ? <CheckCircle2 size={20}/> : <CircleAlert size={20}/>}<strong>{correct ? 'Correcto' : 'Revisa el razonamiento'}</strong></div>
          <p>{question.explanation}</p>
          {selectedOption && <p className={styles.rationale}><strong>Tu opción:</strong> {selectedOption.rationale}</p>}
          {sources.length > 0 && <div className={styles.sources}><span>Fuentes</span><div>{sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title}<ExternalLink size={12}/></a>)}</div></div>}
          {showRetry && <Button variant="ghost" size="sm" icon={<RotateCcw size={15}/>} onClick={reset}>Intentar de nuevo</Button>}
        </div>
      )}
    </section>
  )
}
