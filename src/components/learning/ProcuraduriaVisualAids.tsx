import { ArrowRight, BookOpen, ExternalLink, Map, Route, SearchCheck } from 'lucide-react'
import { getProcuraduriaTopicVisual } from '../../lib/procuraduriaVisualGuides'
import { getProcuraduriaLessonVisual } from '../../lib/procuraduriaLessonVisuals'
import styles from './ProcuraduriaVisualAids.module.css'

/** Un apoyo distinto por lección, opcional y cerrado inicialmente. */
export function ProcuraduriaLessonDiagram({ moduleId, lessonOrder }: { moduleId: string; lessonOrder: number }) {
  const diagram = getProcuraduriaLessonVisual(moduleId, lessonOrder)
  if (!diagram) return null
  const overview = lessonOrder === 1 ? getProcuraduriaTopicVisual(moduleId) : null
  const Icon = lessonOrder === 1 ? BookOpen : SearchCheck
  return <details className={styles.optional}>
    <summary className={styles.summary}>
      <Icon size={18} aria-hidden="true"/>
      <span><strong>{diagram.title}</strong><small>{diagram.caption} · {moduleId.toUpperCase()}</small></span>
      <span className={styles.cue}>Ver gráfico</span>
    </summary>
    <div className={styles.diagramBody}>
      <img loading="lazy" decoding="async" src={diagram.image} alt={`${diagram.title} del módulo ${moduleId}. El desarrollo textual y sus fuentes se encuentran en la lección.`}/>
      <div className={styles.visualLinks}>
        <a href={diagram.image} target="_blank" rel="noopener noreferrer">Ampliar gráfico <ExternalLink size={15} aria-hidden="true"/></a>
        {overview && <a href={overview.image} target="_blank" rel="noopener noreferrer">Guía general del tema <Map size={15} aria-hidden="true"/></a>}
      </div>
      <p>Apoyo visual. Las reglas, excepciones y términos deben comprobarse en las fuentes de la lección.</p>
    </div>
  </details>
}

/** Sustituye la lista repetida de pasos por una ruta visual específica de cada módulo. */
export function ProcuraduriaStepFlow({ title, steps, moduleId }: { title: string; steps: string[]; moduleId?: string | undefined }) {
  const diagram = moduleId ? getProcuraduriaLessonVisual(moduleId, 2) : null
  return <section className={styles.flow} aria-label={title}>
    <h3><Route size={19} aria-hidden="true"/>{title}</h3>
    <ol>
      {steps.map((step, index) => <li key={index} className={styles.step}>
        <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
        <BookOpen size={16} className={styles.stepIcon} aria-hidden="true"/>
        <span>{step}</span>
        {index !== steps.length - 1 && <ArrowRight size={17} className={styles.arrow} aria-hidden="true"/>}
      </li>)}
    </ol>
    {diagram && <a className={styles.flowLink} href={diagram.image} target="_blank" rel="noopener noreferrer"><Route size={16} aria-hidden="true"/> Ver estos pasos como diagrama SVG <ExternalLink size={14} aria-hidden="true"/></a>}
  </section>
}
