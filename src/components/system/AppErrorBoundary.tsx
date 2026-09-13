import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, Home, RotateCcw } from 'lucide-react'
import styles from './AppErrorBoundary.module.css'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) console.error('Umbral render error', error, info)
  }

  private reload = () => window.location.reload()
  private goHome = () => window.location.assign('/')

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <main className={styles.page}>
        <section className={styles.card} role="alert">
          <span className={styles.icon}><AlertTriangle size={24}/></span>
          <div className={styles.copy}>
            <span>Recuperación de interfaz</span>
            <h1>Umbral no pudo mostrar esta vista.</h1>
            <p>Tu progreso se guarda de forma local y no se borra por este error. Puedes recargar la vista o regresar al inicio.</p>
          </div>
          <div className={styles.actions}>
            <button type="button" onClick={this.reload}><RotateCcw size={17}/>Recargar</button>
            <button type="button" className={styles.secondary} onClick={this.goHome}><Home size={17}/>Ir al inicio</button>
          </div>
        </section>
      </main>
    )
  }
}
