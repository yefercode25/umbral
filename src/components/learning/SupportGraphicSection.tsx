import type { SupportGraphic } from '../../lib/supportGraphics'
import styles from './SupportGraphicSection.module.css'

type SupportGraphicSectionProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  items: SupportGraphic[]
}

export function SupportGraphicSection({ eyebrow, title, subtitle, items }: SupportGraphicSectionProps) {
  const firstItem = items[0]
  if (!firstItem) return null

  return (
    <section className={styles.section} aria-labelledby={`${firstItem.id}-support-title`}>
      <div className={styles.head}>
        <div>
          {eyebrow ? <span>{eyebrow}</span> : null}
          <h2 id={`${firstItem.id}-support-title`}>{title}</h2>
        </div>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>

      <div className={`${styles.grid} ${items.length === 1 ? styles.gridSingle : ''}`}>
        {items.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.mediaWrap}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" className={styles.media} />
            </div>
            <div className={styles.body}>
              <span className={styles.kicker}>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
