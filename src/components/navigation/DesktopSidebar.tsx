import { BookOpenCheck, ChartNoAxesColumnIncreasing, House, NotebookPen, Settings2 } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { contextualNavHref } from '../../lib/navigationContext'
import { CourseSwitcher } from './CourseSwitcher'
import { BrandMark } from './BrandMark'
import styles from './DesktopSidebar.module.css'

const items = [
  { to: '/', label: 'Aprender', icon: House, end: true },
  { to: '/courses', label: 'Mis cursos', icon: BookOpenCheck, end: false },
  { to: '/practice', label: 'Practicar', icon: NotebookPen, end: false },
  { to: '/progress', label: 'Mi progreso', icon: ChartNoAxesColumnIncreasing, end: false },
]

export function DesktopSidebar() {
  const location = useLocation()
  return <aside className={styles.sidebar}>
    <div className={styles.brand}><BrandMark /></div>
    <CourseSwitcher />
    <nav className={styles.nav} aria-label="Navegación principal">
      {items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={contextualNavHref(to, location.pathname, location.search)} end={end}
        className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}>
        <Icon size={22} strokeWidth={2.5}/><span>{label}</span>
      </NavLink>)}
    </nav>
    <NavLink to="/settings" className={({ isActive }) => `${styles.item} ${styles.settings} ${isActive ? styles.active : ''}`}>
      <Settings2 size={21}/><span>Ajustes</span>
    </NavLink>
    <p className={styles.tagline}>UMBRAL · PREPARA TU PRÓXIMO PASO</p>
  </aside>
}
