import { DownloadCloud, WifiOff, X } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import styles from './PwaStatus.module.css'

export function PwaStatus() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      if (import.meta.env.DEV) console.error('No fue posible registrar el service worker', error)
    },
  })

  if (!offlineReady && !needRefresh) return null

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <aside className={styles.toast} role="status" aria-live="polite">
      <div className={styles.icon}>{needRefresh ? <DownloadCloud size={18}/> : <WifiOff size={18}/>}</div>
      <div className={styles.copy}>
        <strong>{needRefresh ? 'Contenido nuevo disponible' : 'Umbral ya funciona sin conexión'}</strong>
        <span>{needRefresh ? 'Actualiza cuando hayas terminado tu actividad actual.' : 'Las lecciones esenciales quedan disponibles en este dispositivo.'}</span>
      </div>
      {needRefresh && <button className={styles.update} type="button" onClick={() => void updateServiceWorker(true)}>Actualizar</button>}
      <button className={styles.close} type="button" onClick={close} aria-label="Cerrar aviso"><X size={17}/></button>
    </aside>
  )
}
