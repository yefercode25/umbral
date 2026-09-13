import { BookOpen, ChartNoAxesColumnIncreasing, GraduationCap, Home } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import styles from './BottomNav.module.css'

const items = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/courses', label: 'Cursos', icon: GraduationCap, end: false },
  { to: '/practice', label: 'Practicar', icon: BookOpen, end: false },
  { to: '/progress', label: 'Progreso', icon: ChartNoAxesColumnIncreasing, end: false },
]

export function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      {items.map(({ to, label, icon: Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}>
          <Icon size={20} strokeWidth={2} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
