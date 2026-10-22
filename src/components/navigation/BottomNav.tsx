import { LibraryBig, ChartNoAxesColumnIncreasing, House, NotebookPen } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { contextualNavHref } from '../../lib/navigationContext'
import styles from './BottomNav.module.css'
const items = [
  { to: '/', label: 'Aprender', icon: House, end: true },
  { to: '/library', label: 'Biblioteca', icon: LibraryBig, end: false },
  { to: '/practice', label: 'Practicar', icon: NotebookPen, end: false },
  { to: '/progress', label: 'Progreso', icon: ChartNoAxesColumnIncreasing, end: false },
]
export function BottomNav() {
  const location = useLocation()
  return <nav className={styles.nav} aria-label="Navegación principal">
    {items.map(({ to, label, icon: Icon, end }) => <NavLink key={to} to={contextualNavHref(to, location.pathname, location.search)} end={end}
      className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}>
      <Icon size={23} strokeWidth={2.6}/><span>{label}</span>
    </NavLink>)}
  </nav>
}
