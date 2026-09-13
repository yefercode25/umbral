import * as Progress from '@radix-ui/react-progress'
import styles from './ProgressBar.module.css'

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className={styles.wrap}>
      {label && <div className={styles.meta}><span>{label}</span><span>{clamped}%</span></div>}
      <Progress.Root className={styles.root} value={clamped}>
        <Progress.Indicator className={styles.indicator} style={{ transform: `translateX(-${100 - clamped}%)` }} />
      </Progress.Root>
    </div>
  )
}
