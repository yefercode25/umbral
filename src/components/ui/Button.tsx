import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

export function Button({ variant = 'primary', size = 'md', icon, className = '', children, ...props }: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...props}>
      {icon}<span>{children}</span>
    </button>
  )
}
