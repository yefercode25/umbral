import styles from './BrandMark.module.css'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.wrap} role="img" aria-label="Umbral">
      <img className={styles.mark} src="/icons/brand-mark-256.png" alt="" width={44} height={44} aria-hidden="true" />
      {!compact && <span className={styles.word}>umbral<span className={styles.dot}>.</span></span>}
    </div>
  )
}
