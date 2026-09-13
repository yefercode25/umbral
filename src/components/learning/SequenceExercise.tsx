import { CheckCircle2, ChevronDown, ChevronUp, RotateCcw, XCircle } from 'lucide-react'
import { useId, useMemo, useState } from 'react'
import { Button } from '../ui/Button'
import styles from './SequenceExercise.module.css'

export type SequenceExerciseItem = {
  id: string
  label: string
}

export function SequenceExercise({
  title,
  text,
  items,
  correctOrder,
  explanation,
}: {
  title: string
  text: string
  items: SequenceExerciseItem[]
  correctOrder: string[]
  explanation?: string
}) {
  const headingId = useId()
  const initialIds = useMemo(() => items.map((item) => item.id), [items])
  const [order, setOrder] = useState(initialIds)
  const [checked, setChecked] = useState(false)
  const itemById = useMemo(() => new Map(items.map((item) => [item.id, item])), [items])
  const isCorrect = checked && order.every((itemId, index) => itemId === correctOrder[index])

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction
    if (target < 0 || target >= order.length) return
    setOrder((current) => {
      const next = [...current]
      const currentItem = next[index]
      const targetItem = next[target]
      if (currentItem === undefined || targetItem === undefined) return current
      next[index] = targetItem
      next[target] = currentItem
      return next
    })
    setChecked(false)
  }

  const reset = () => {
    setOrder(initialIds)
    setChecked(false)
  }

  return (
    <section className={styles.exercise} aria-labelledby={headingId}>
      <div className={styles.header}>
        <div>
          <span>Orden procedimental</span>
          <h3 id={headingId}>{title}</h3>
        </div>
        <span className={styles.counter}>{order.length} pasos</span>
      </div>
      <p className={styles.text}>{text}</p>

      <ol className={styles.list}>
        {order.map((itemId, index) => {
          const item = itemById.get(itemId)
          if (!item) return null
          return (
            <li key={item.id}>
              <span className={styles.position}>{index + 1}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.controls}>
                <button type="button" onClick={() => move(index, -1)} disabled={index === 0} aria-label={`Subir: ${item.label}`}><ChevronUp size={17}/></button>
                <button type="button" onClick={() => move(index, 1)} disabled={index === order.length - 1} aria-label={`Bajar: ${item.label}`}><ChevronDown size={17}/></button>
              </span>
            </li>
          )
        })}
      </ol>

      <div className={styles.actions}>
        <Button size="sm" onClick={() => setChecked(true)}>Comprobar orden</Button>
        <Button size="sm" variant="ghost" icon={<RotateCcw size={15}/>} onClick={reset}>Restablecer</Button>
      </div>

      {checked && (
        <div className={`${styles.feedback} ${isCorrect ? styles.correct : styles.incorrect}`} role="status" aria-live="polite">
          {isCorrect ? <CheckCircle2 size={19}/> : <XCircle size={19}/>}
          <div>
            <strong>{isCorrect ? 'Secuencia correcta' : 'Todavía hay pasos fuera de orden'}</strong>
            <p>{isCorrect ? (explanation ?? 'Bien: la secuencia respeta el orden de decisión esperado.') : 'Ajusta el orden y vuelve a comprobar. Identifica primero qué actuación habilita jurídicamente la siguiente.'}</p>
          </div>
        </div>
      )}
    </section>
  )
}
