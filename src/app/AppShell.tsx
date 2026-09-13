import { Outlet } from 'react-router-dom'
import { BottomNav } from '../components/navigation/BottomNav'
import { DesktopSidebar } from '../components/navigation/DesktopSidebar'
import styles from './AppShell.module.css'

export function AppShell() {
  return (
    <div className={styles.shell}>
      <DesktopSidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
