import { getProcuraduriaLessonVisual } from '../../lib/procuraduriaLessonVisuals'
import styles from './ProcuraduriaVisualAids.module.css'

/**
 * Contextual illustration: always visible at the matching point in the lesson.
 * Click the illustration to open a larger version without duplicating headings.
 */
export function ProcuraduriaLessonDiagram({
  moduleId,
  lessonOrder,
  decorative = false,
}: {
  moduleId: string
  lessonOrder: number
  decorative?: boolean
}) {
  const diagram = getProcuraduriaLessonVisual(moduleId, lessonOrder)
  if (!diagram) return null

  return <figure className={styles.inlineFigure}>
    <a
      href={diagram.image}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ampliar ${diagram.title.toLowerCase()} del módulo ${moduleId.toUpperCase()}`}
    >
      <img
        loading="lazy"
        decoding="async"
        src={diagram.image}
        alt={decorative ? '' : `${diagram.title} del módulo ${moduleId.toUpperCase()}. Esquema de apoyo de la explicación en esta lección.`}
      />
    </a>
  </figure>
}

/** SVG inline replaces a redundant second visual list; steps remain accessible as text. */
export function ProcuraduriaStepFlow({
  title,
  steps,
  moduleId,
}: {
  title: string
  steps: string[]
  moduleId?: string | undefined
}) {
  const hasGraphic = moduleId ? getProcuraduriaLessonVisual(moduleId, 2) : null
  if (hasGraphic && moduleId) return <section className={styles.inlineStep} aria-label={title}>
    <ProcuraduriaLessonDiagram moduleId={moduleId} lessonOrder={2} decorative/>
    <ol className={styles.screenReaderOnly}>{steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
  </section>

  return <section className={styles.fallbackFlow}>
    <h3>{title}</h3>
    <ol>{steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
  </section>
}
