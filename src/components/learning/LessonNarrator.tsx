import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Course, Lesson } from '../../types/course'
import type { SupportGraphic } from '../../lib/supportGraphics'
import { buildLessonNarration } from '../../lib/lessonNarration'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './LessonNarrator.module.css'

type ReaderStatus = 'idle' | 'playing' | 'paused' | 'finished' | 'error'

const RATE_OPTIONS = [0.5, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2]

function selectBestVoice(voices: SpeechSynthesisVoice[], voiceURI: string | null) {
  if (voiceURI) {
    const selected = voices.find((voice) => voice.voiceURI === voiceURI)
    if (selected) return selected
  }

  return voices.find((voice) => voice.lang.toLowerCase() === 'es-co')
    ?? voices.find((voice) => voice.lang.toLowerCase().startsWith('es-'))
    ?? voices.find((voice) => voice.default)
    ?? voices[0]
}

function sortVoices(voices: SpeechSynthesisVoice[]) {
  return [...voices].sort((a, b) => {
    const aSpanish = a.lang.toLowerCase().startsWith('es-') ? 0 : 1
    const bSpanish = b.lang.toLowerCase().startsWith('es-') ? 0 : 1
    if (aSpanish !== bSpanish) return aSpanish - bSpanish
    return `${a.lang}-${a.name}`.localeCompare(`${b.lang}-${b.name}`, 'es')
  })
}

export function LessonNarrator({ course, lesson, supportGraphic }: { course: Course; lesson: Lesson; supportGraphic?: SupportGraphic | null }) {
  const chunks = useMemo(() => buildLessonNarration(course, lesson, supportGraphic), [course, lesson, supportGraphic])
  const speechRate = useSettingsStore((state) => state.speechRate)
  const speechVoiceURI = useSettingsStore((state) => state.speechVoiceURI)
  const setSpeechRate = useSettingsStore((state) => state.setSpeechRate)
  const setSpeechVoiceURI = useSettingsStore((state) => state.setSpeechVoiceURI)
  const safeSpeechRate = RATE_OPTIONS.includes(speechRate) ? speechRate : 1
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [status, setStatus] = useState<ReaderStatus>('idle')
  const [chunkIndex, setChunkIndex] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const sessionRef = useRef(0)
  const currentIndexRef = useRef(0)
  const statusRef = useRef<ReaderStatus>('idle')

  const supported = typeof window !== 'undefined'
    && 'speechSynthesis' in window
    && 'SpeechSynthesisUtterance' in window

  const setReaderStatus = useCallback((next: ReaderStatus) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  useEffect(() => {
    if (!supported) return

    const synth = window.speechSynthesis
    const refreshVoices = () => setVoices(sortVoices(synth.getVoices()))
    refreshVoices()
    synth.addEventListener('voiceschanged', refreshVoices)

    return () => synth.removeEventListener('voiceschanged', refreshVoices)
  }, [supported])

  useEffect(() => {
    if (!supported) return
    sessionRef.current += 1
    window.speechSynthesis.cancel()
    currentIndexRef.current = 0
    setChunkIndex(0)
    setReaderStatus('idle')
    setErrorMessage('')
    setIsPanelOpen(false)
  }, [lesson.id, setReaderStatus, supported])

  useEffect(() => () => {
    if (!supported) return
    sessionRef.current += 1
    window.speechSynthesis.cancel()
  }, [supported])

  const speakFrom = (startIndex: number, override?: { rate?: number; voiceURI?: string | null }) => {
    if (!supported || !chunks.length) return

    const synth = window.speechSynthesis
    const rate = override?.rate ?? safeSpeechRate
    const voiceURI = override?.voiceURI === undefined ? speechVoiceURI : override.voiceURI
    const selectedVoice = selectBestVoice(voices, voiceURI)
    const session = sessionRef.current + 1
    sessionRef.current = session
    synth.cancel()
    setErrorMessage('')
    setReaderStatus('playing')

    const speakChunk = (index: number) => {
      if (sessionRef.current !== session) return
      if (index >= chunks.length) {
        currentIndexRef.current = 0
        setChunkIndex(chunks.length)
        setReaderStatus('finished')
        return
      }

      currentIndexRef.current = index
      setChunkIndex(index)
      const utterance = new SpeechSynthesisUtterance(chunks[index])
      utterance.lang = selectedVoice?.lang || 'es-CO'
      utterance.rate = rate
      utterance.pitch = 1
      if (selectedVoice) utterance.voice = selectedVoice

      utterance.onend = () => {
        if (sessionRef.current !== session) return
        speakChunk(index + 1)
      }
      utterance.onerror = (event) => {
        if (sessionRef.current !== session || event.error === 'canceled' || event.error === 'interrupted') return
        setReaderStatus('error')
        setErrorMessage('No fue posible continuar la lectura. Prueba otra voz o vuelve a iniciar.')
      }

      synth.speak(utterance)
    }

    speakChunk(Math.min(startIndex, Math.max(chunks.length - 1, 0)))
  }

  const togglePlayback = () => {
    if (!supported) return
    const synth = window.speechSynthesis

    if (statusRef.current === 'playing') {
      synth.pause()
      setReaderStatus('paused')
      return
    }

    if (statusRef.current === 'paused') {
      synth.resume()
      setReaderStatus('playing')
      return
    }

    speakFrom(statusRef.current === 'finished' ? 0 : currentIndexRef.current)
  }

  const stop = () => {
    if (!supported) return
    sessionRef.current += 1
    window.speechSynthesis.cancel()
    currentIndexRef.current = 0
    setChunkIndex(0)
    setReaderStatus('idle')
    setErrorMessage('')
  }

  const resetPausedSession = () => {
    if (!supported || statusRef.current !== 'paused') return
    sessionRef.current += 1
    window.speechSynthesis.cancel()
    setReaderStatus('idle')
  }

  const changeVoice = (voiceURI: string) => {
    const normalized = voiceURI || null
    setSpeechVoiceURI(normalized)
    if (statusRef.current === 'playing') speakFrom(currentIndexRef.current, { voiceURI: normalized })
    else resetPausedSession()
  }

  const changeRate = (rate: number) => {
    setSpeechRate(rate)
    if (statusRef.current === 'playing') speakFrom(currentIndexRef.current, { rate })
    else resetPausedSession()
  }

  const progress = status === 'finished'
    ? 100
    : chunks.length
      ? Math.round((chunkIndex / chunks.length) * 100)
      : 0

  const selectedVoiceAvailable = !speechVoiceURI || voices.some((voice) => voice.voiceURI === speechVoiceURI)
  const hasPartialProgress = status === 'idle' && chunkIndex > 0

  const statusLabel = status === 'playing'
    ? `Leyendo ${Math.min(chunkIndex + 1, chunks.length)} de ${chunks.length}`
    : status === 'paused'
      ? `En pausa · ${Math.min(chunkIndex + 1, chunks.length)} de ${chunks.length}`
      : status === 'finished'
        ? 'Lectura finalizada'
        : status === 'error'
          ? 'Lectura detenida'
          : hasPartialProgress
            ? `Listo para continuar · ${Math.min(chunkIndex + 1, chunks.length)} de ${chunks.length}`
            : 'Listo para escuchar'



  return (
    <div className={styles.floatingRoot}>
      {isPanelOpen ? (
        <section className={styles.reader} id={`reader-panel-${lesson.id}`} aria-labelledby={`reader-${lesson.id}`}>
          <div className={styles.head}>
            <div>
              <span>Lectura en voz alta</span>
              <h2 id={`reader-${lesson.id}`}>Escuchar esta lección</h2>
              <p>La voz y la velocidad quedan guardadas para las siguientes lecciones en este dispositivo.</p>
            </div>
            <button type="button" className={styles.close} onClick={() => setIsPanelOpen(false)} aria-label="Cerrar panel de lectura">×</button>
          </div>

          <div className={styles.status} aria-live="polite">{statusLabel}</div>

          {!supported ? (
            <div className={styles.unavailable}>Este navegador no ofrece lectura en voz alta mediante Web Speech API. Puedes seguir usando la lección normalmente.</div>
          ) : (
            <>
              <div className={styles.controls}>
                <button type="button" className={styles.primary} onClick={togglePlayback}>
                  <span aria-hidden="true">{status === 'playing' ? '❚❚' : '▶'}</span>
                  {status === 'playing' ? 'Pausar' : status === 'paused' ? 'Continuar' : status === 'finished' ? 'Escuchar de nuevo' : hasPartialProgress ? 'Continuar lectura' : 'Escuchar lección'}
                </button>
                <button type="button" className={styles.secondary} onClick={stop} disabled={status === 'idle'}>
                  <span aria-hidden="true">■</span>
                  Detener
                </button>
              </div>

              <div className={styles.progressBlock} aria-label={`Progreso de lectura: ${progress}%`}>
                <div className={styles.progressTrack}><span style={{ width: `${progress}%` }} /></div>
                <small>{progress}%</small>
              </div>

              <div className={styles.preferences}>
                <label>
                  <span>Voz</span>
                  <select value={selectedVoiceAvailable ? (speechVoiceURI ?? '') : ''} onChange={(event) => changeVoice(event.target.value)}>
                    <option value="">Automática · español del dispositivo</option>
                    {voices.map((voice) => (
                      <option key={voice.voiceURI} value={voice.voiceURI}>
                        {voice.name} · {voice.lang}{voice.default ? ' · predeterminada' : ''}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Velocidad</span>
                  <select value={String(safeSpeechRate)} onChange={(event) => changeRate(Number(event.target.value))}>
                    {RATE_OPTIONS.map((rate) => <option key={rate} value={rate}>{rate.toFixed(2).replace(/0$/, '')}×</option>)}
                  </select>
                </label>
              </div>

              {speechVoiceURI && voices.length > 0 && !selectedVoiceAvailable ? (
                <p className={styles.note}>La voz guardada no está disponible en este dispositivo. Umbral usará automáticamente una voz compatible.</p>
              ) : null}
              {errorMessage ? <p className={styles.error} role="alert">{errorMessage}</p> : null}
            </>
          )}
        </section>
      ) : null}

      <button
        type="button"
        className={`${styles.fab} ${status === 'playing' ? styles.fabActive : ''} ${status === 'paused' ? styles.fabPaused : ''}`}
        onClick={() => setIsPanelOpen((current) => !current)}
        aria-expanded={isPanelOpen}
        aria-controls={`reader-panel-${lesson.id}`}
        aria-label={isPanelOpen ? 'Cerrar lector en voz alta' : 'Abrir lector en voz alta'}
      >
        <svg className={styles.fabSvg} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 9.5v5h3.2L12 18.3V5.7L7.2 9.5H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M15.2 9.1a4.2 4.2 0 0 1 0 5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M17.8 6.8a7.3 7.3 0 0 1 0 10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        {status === 'playing' ? <span className={styles.liveDot} aria-hidden="true" /> : null}
      </button>
    </div>
  )
}
