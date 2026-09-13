import { useEffect, useState, type WheelEvent } from 'react'
import { RotateCcw, X } from 'lucide-react'
import type { SupportGraphic } from '../../lib/supportGraphics'
import styles from './LessonSupportGraphic.module.css'

const MIN_ZOOM = 1
const MAX_ZOOM = 3.5
const ZOOM_STEP = 0.25

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(value.toFixed(2))))
}

export function LessonSupportGraphic({ graphic }: { graphic: SupportGraphic }) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
      if (event.key === '+' || event.key === '=') setZoom((current) => clampZoom(current + ZOOM_STEP))
      if (event.key === '-') setZoom((current) => clampZoom(current - ZOOM_STEP))
      if (event.key === '0') setZoom(1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const openViewer = () => {
    setZoom(1)
    setIsOpen(true)
  }

  const closeViewer = () => setIsOpen(false)

  const handleWheelZoom = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault()
    const direction = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP
    setZoom((current) => clampZoom(current + direction))
  }

  return (
    <>
      <aside className={styles.card} aria-labelledby={`${graphic.id}-title`}>
        <div className={styles.copy}>
          <span>{graphic.eyebrow}</span>
          <h2 id={`${graphic.id}-title`}>Apoyo visual de la lección</h2>
          <strong>{graphic.title}</strong>
          <p>{graphic.description}</p>
          <button type="button" className={styles.inlineAction} onClick={openViewer}>
            <span aria-hidden="true">↗</span>
            Ver imagen ampliada
          </button>
        </div>
        <button type="button" className={styles.mediaWrap} onClick={openViewer} aria-label={`Abrir ${graphic.title} en grande`}>
          <img src={graphic.image} alt={graphic.alt} loading="lazy" decoding="async" className={styles.media} />
          <span className={styles.overlayHint}>
            <span aria-hidden="true">↗</span>
            Clic para ampliar
          </span>
        </button>
      </aside>

      {isOpen ? (
        <div className={styles.viewerBackdrop} role="dialog" aria-modal="true" aria-label={`Visor ampliado de ${graphic.title}`} onClick={closeViewer}>
          <div className={styles.viewer} onClick={(event) => event.stopPropagation()}>
            <div className={styles.viewerToolbar}>
              <div className={styles.viewerMeta}>
                <span>{graphic.eyebrow}</span>
                <strong>{graphic.title}</strong>
              </div>
              <div className={styles.viewerActions}>
                <button type="button" onClick={() => setZoom((current) => clampZoom(current - ZOOM_STEP))} aria-label="Alejar imagen">
                  <span aria-hidden="true">−</span>
                </button>
                <button type="button" onClick={() => setZoom((current) => clampZoom(current + ZOOM_STEP))} aria-label="Acercar imagen">
                  <span aria-hidden="true">+</span>
                </button>
                <button type="button" onClick={() => setZoom(1)} aria-label="Restablecer zoom">
                  <RotateCcw size={18} />
                </button>
                <button type="button" onClick={closeViewer} aria-label="Cerrar visor">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className={styles.viewerCanvas} onWheel={handleWheelZoom}>
              <img
                src={graphic.image}
                alt={graphic.alt}
                className={styles.viewerImage}
                style={{ width: `${zoom * 100}%` }}
              />
            </div>

            <div className={styles.viewerFooter}>
              <span>Zoom {Math.round(zoom * 100)}%</span>
              <p>Usa los controles, la rueda del mouse o las teclas +, - y 0 para acercar, alejar y restablecer.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
