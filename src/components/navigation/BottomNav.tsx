import { BookOpen, ChartNoAxesColumnIncreasing, GraduationCap, Home } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { contextualNavHref } from '../../lib/navigationContext'
import styles from './BottomNav.module.css'

const items = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/courses', label: 'Cursos', icon: GraduationCap, end: false },
  { to: '/practice', label: 'Practicar', icon: BookOpen, end: false },
  { to: '/progress', label: 'Progreso', icon: ChartNoAxesColumnIncreasing, end: false },
]

export function BottomNav() {
  const location = useLocation()
  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      {items.map(({ to, label, icon: Icon, end }) => {
        const href = contextualNavHref(to, location.pathname, location.search)
        return <NavLink key={to} to={href} end={end} className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}>
          <Icon size={20} strokeWidth={2} />
          <span>{label}</span>
        </NavLink>
      })}
    </nav>
  )
}
