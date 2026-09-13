import type { ReactNode } from 'react'
import styles from './PageHeader.module.css'

export function PageHeader({ eyebrow, title, subtitle, action }: { eyebrow?: string; title: string; subtitle?: string; action?: ReactNode }) {
  return <header className={styles.header}><div><>{eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}</><h1>{title}</h1>{subtitle && <p className={styles.subtitle}>{subtitle}</p>}</div>{action && <div>{action}</div>}</header>
}
