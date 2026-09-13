import { useEffect, useMemo, useState } from 'react'
import { BookOpen, BrainCircuit, ClipboardCheck, Filter, Gauge, NotebookPen, Route, Shuffle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { QuestionCard } from '../../components/learning/QuestionCard'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { useProgressStore } from '../../stores/progressStore'
import { deterministicOrder } from '../../lib/questionPresentation'
import styles from './PracticePage.module.css'

type Mode = 'all' | 'pjs' | 'integrated' | 'core' | 'transversal' | 'errors' | 'saved'

const modes: Mode[] = ['all', 'pjs', 'integrated', 'core', 'transversal', 'errors', 'saved']

export function PracticePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedMode = searchParams.get('mode') as Mode | null
  const mode: Mode = requestedMode && modes.includes(requestedMode) ? requestedMode : 'all'
  const [seed, setSeed] = useState(0)
  const [visibleCount, setVisibleCount] = useState(20)
  const setMode = (next: Mode) => setSearchParams(next === 'all' ? {} : { mode: next }, { replace: true })
  const progress = useProgressStore((s) => s.courses[dianGestorCourse.id])
  const questions = useMemo(() => {
    const coreModules = new Set(['m9','m10','m11','m12','m13','m14','m15','m16'])
    const transversalModules = new Set(['m24','m25','m26','m27','m28'])
    const filtered = dianGestorCourse.questions.filter((q) => {
      if (mode === 'all') return true
      if (mode === 'pjs') return q.type === 'pjs'
      if (mode === 'integrated') return Boolean(q.integrated)
      if (mode === 'core') return coreModules.has(q.moduleId)
      if (mode === 'transversal') return transversalModules.has(q.moduleId)
      if (mode === 'saved') return Boolean(progress?.questionBookmarks?.includes(q.id))
      const error = progress?.errorJournal?.[q.id]
      return Boolean(error && !error.resolvedAt)
    })
    return deterministicOrder(filtered, `practice:${seed}`, (question) => question.id)
  }, [mode, seed, progress])

  useEffect(() => {
    setVisibleCount(20)
  }, [mode, seed])

  const visibleQuestions = useMemo(() => questions.slice(0, visibleCount), [questions, visibleCount])

  return <div className="page page--narrow">
    <PageHeader eyebrow="Entrenamiento" title="Practicar" subtitle="Primero precisión; después velocidad. Cada respuesta explica el porqué y deja trazabilidad a fuentes oficiales." />
    <section className={styles.visualIntro} aria-label="Práctica aplicada">
      <div className={styles.visualCopy}>
        <span>Decide con contexto</span>
        <strong>Casos, distractores plausibles y retroalimentación con fuente</strong>
        <p>La imagen es editorial; tus resultados, preguntas y métricas siempre provienen del banco real de Umbral.</p>
      </div>
      <img src="/media/editorial/practice-adaptive.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </section>
    <div className={styles.toolbar}>
      <div className={styles.segment} aria-label="Filtro de práctica">
        <button type="button" aria-pressed={mode === 'all'} className={mode === 'all' ? styles.active : ''} onClick={() => setMode('all')}>Todas</button>
        <button type="button" aria-pressed={mode === 'pjs'} className={mode === 'pjs' ? styles.active : ''} onClick={() => setMode('pjs')}>Solo PJS</button>
        <button type="button" aria-pressed={mode === 'integrated'} className={mode === 'integrated' ? styles.active : ''} onClick={() => setMode('integrated')}>Integradoras</button>
        <button type="button" aria-pressed={mode === 'core'} className={mode === 'core' ? styles.active : ''} onClick={() => setMode('core')}>Núcleo CT-CR-3007</button>
        <button type="button" aria-pressed={mode === 'transversal'} className={mode === 'transversal' ? styles.active : ''} onClick={() => setMode('transversal')}>Transversal</button>
        <button type="button" aria-pressed={mode === 'errors'} className={mode === 'errors' ? styles.active : ''} onClick={() => setMode('errors')}>Mis errores</button>
        <button type="button" aria-pressed={mode === 'saved'} className={mode === 'saved' ? styles.active : ''} onClick={() => setMode('saved')}>Guardadas</button>
      </div>
      <Button variant="secondary" size="sm" icon={<Shuffle size={15}/>} onClick={() => setSeed((s) => s+1)}>Mezclar</Button>
    </div>
    <div className={styles.practiceModes}>
      <div className={styles.examCta}><div><NotebookPen size={18}/><span><strong>Cuaderno de errores</strong><small>Clasifica fallos · guarda tu regla · comprueba después</small></span></div><Link to="/practice/errors">Revisar</Link></div>
      <div className={styles.examCta}><div><ClipboardCheck size={18}/><span><strong>Diagnóstico inicial</strong><small>20 preguntas · detecta prioridades antes de empezar</small></span></div><Link to="/practice/diagnostic">Evaluarme</Link></div>
      <div className={styles.examCta}><div><BrainCircuit size={18}/><span><strong>Sesión recomendada</strong><small>12 preguntas · prioriza errores y habilidades débiles</small></span></div><Link to="/practice/adaptive">Practicar</Link></div>
      <div className={styles.examCta}><div><Gauge size={18}/><span><strong>Simulacros funcionales</strong><small>10, 20 o 40 preguntas · PJS · marca para revisar</small></span></div><Link to="/practice/mock">Configurar</Link></div>
      <div className={styles.examCta}><div><Route size={18}/><span><strong>Casos integradores</strong><small>8 expedientes · 40 decisiones · cruza varios módulos</small></span></div><Link to="/practice/cases">Resolver</Link></div>
    </div>
    <div className={styles.summary}><Filter size={16}/><span>{questions.length} preguntas disponibles en este filtro</span></div>
    <div className={styles.list}>
      {visibleQuestions.map((question) => <QuestionCard key={`${question.id}-${seed}`} course={dianGestorCourse} question={question} compact />)}
    </div>
    {visibleCount < questions.length && <div className={styles.loadMore}><Button variant="secondary" onClick={() => setVisibleCount((count) => Math.min(count + 20, questions.length))}>Mostrar 20 más</Button><span>Viendo {visibleQuestions.length} de {questions.length}</span></div>}
    <div className={styles.end}><BookOpen size={18}/><p>El banco crecerá por lotes verificados. Umbral prioriza preguntas con explicación y fuente antes que volumen artificial.</p></div>
  </div>
}
