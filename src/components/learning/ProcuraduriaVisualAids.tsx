import { ArrowRight, BookOpen, ExternalLink, Map, Route } from 'lucide-react'
import { getProcuraduriaTopicVisual } from '../../lib/procuraduriaVisualGuides'
import styles from './ProcuraduriaVisualAids.module.css'

/** Una guía SVG por módulo, solo bajo demanda y solo en la primera lección. */
export function ProcuraduriaTopicDiagram({ moduleId }: { moduleId: string }) {
  const diagram = getProcuraduriaTopicVisual(moduleId)
  if (!diagram) return null
  return <details className={styles.optional}>
    <summary className={styles.summary}>
      <Map size={18} aria-hidden="true"/>
      <span><strong>Esquema visual del tema</strong><small>{diagram.title} · consultar cuando lo necesites</small></span>
      <span className={styles.cue}>Ver esquema</span>
    </summary>
    <div className={styles.diagramBody}>
      <img loading="lazy" decoding="async" src={diagram.image} alt={`Diagrama de apoyo: ${diagram.title}. Resume cuatro etapas y dos criterios de lectura.`} />
      <a href={diagram.image} target="_blank" rel="noopener noreferrer">Ampliar diagrama <ExternalLink size={15} aria-hidden="true"/></a>
      <p>Es una ayuda de lectura: los artículos, términos y excepciones deben comprobarse en las fuentes del módulo.</p>
    </div>
  </details>
}

/** Sustituye la lista repetida de pasos por una ruta visual específica de cada módulo. */
export function ProcuraduriaStepFlow({ title, steps }: { title: string; steps: string[] }) {
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
  </section>
}
