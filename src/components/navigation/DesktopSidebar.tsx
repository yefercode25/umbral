import { BookOpen, ChartNoAxesColumnIncreasing, GraduationCap, Home, Settings } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { contextualNavHref } from '../../lib/navigationContext'
import { BrandMark } from './BrandMark'
import styles from './DesktopSidebar.module.css'

const items = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/courses', label: 'Cursos', icon: GraduationCap, end: false },
  { to: '/practice', label: 'Practicar', icon: BookOpen, end: false },
  { to: '/progress', label: 'Progreso', icon: ChartNoAxesColumnIncreasing, end: false },
]

export function DesktopSidebar() {
  const location = useLocation()
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}><BrandMark /></div>
      <nav className={styles.nav} aria-label="Navegación principal">
        {items.map(({ to, label, icon: Icon, end }) => {
          const href = contextualNavHref(to, location.pathname, location.search)
          return <NavLink key={to} to={href} end={end} className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}>
            <Icon size={19} /> <span>{label}</span>
          </NavLink>
        })}
      </nav>
      <NavLink to="/settings" className={({ isActive }) => `${styles.item} ${styles.settings} ${isActive ? styles.active : ''}`}>
        <Settings size={19} /> <span>Ajustes</span>
      </NavLink>
      <p className={styles.tagline}>Aprende. Practica. Decide.</p>
    </aside>
  )
}
