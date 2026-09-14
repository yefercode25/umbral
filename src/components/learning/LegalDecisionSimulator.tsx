import { useMemo, useState } from 'react'
import { CheckCircle2, RotateCcw, Scale, XCircle } from 'lucide-react'
import { optionsForDisplay } from '../../lib/questionPresentation'
import styles from './LegalDecisionSimulator.module.css'

type DecisionOption = {
  id: string
  text: string
  correct: boolean
  rationale: string
}

type Props = {
  title: string
  text: string
  scenario: string
  prompt: string
  options: DecisionOption[]
}

export function LegalDecisionSimulator({ title, text, scenario, prompt, options }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const displayOptions = useMemo(() => optionsForDisplay(options, `decision:${title}:${scenario}`), [options, scenario, title])
  const selectedOption = useMemo(() => options.find((option) => option.id === selected), [options, selected])
  const correct = Boolean(submitted && selectedOption?.correct)

  const reset = () => {
    setSelected(null)
    setSubmitted(false)
  }

  return <section className={styles.simulator} aria-label={title}>
    <header><span><Scale size={16}/> Laboratorio de decisión</span><h3>{title}</h3><p>{text}</p></header>
    <div className={styles.scenario}><strong>Situación</strong><p>{scenario}</p></div>
    <h4>{prompt}</h4>
    <div className={styles.options} role="radiogroup" aria-label="Opciones de decisión">
      {displayOptions.map((option, index) => {
        const isSelected = selected === option.id
        const isCorrect = submitted && option.correct
        const isWrong = submitted && isSelected && !option.correct
        return <button
          key={option.id}
          type="button"
          role="radio"
          aria-checked={isSelected}
          className={`${styles.option} ${isSelected ? styles.selected : ''} ${isCorrect ? styles.correct : ''} ${isWrong ? styles.wrong : ''}`}
          onClick={() => !submitted && setSelected(option.id)}
        >
          <span>{String.fromCharCode(65 + index)}</span><p>{option.text}</p>
        </button>
      })}
    </div>
    {!submitted ? <button type="button" className={styles.submit} disabled={!selected} onClick={() => setSubmitted(true)}>Comprobar decisión</button> : selectedOption ? <div className={`${styles.feedback} ${correct ? styles.feedbackCorrect : styles.feedbackWrong}`} role="status">
      <div>{correct ? <CheckCircle2 size={19}/> : <XCircle size={19}/>}<strong>{correct ? 'Decisión bien fundada' : 'Revisa el criterio'}</strong></div>
      <p>{selectedOption.rationale}</p>
      <button type="button" onClick={reset}><RotateCcw size={15}/> Resolver de nuevo</button>
    </div> : null}
  </section>
}
