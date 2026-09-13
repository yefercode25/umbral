import styles from './BrandMark.module.css'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.wrap} aria-label="Umbral">
      <img className={styles.mark} src="/media/brand/mark-gradient.webp" alt="" aria-hidden="true" />
      {!compact && <span className={styles.word}>umbral</span>}
    </div>
  )
}
