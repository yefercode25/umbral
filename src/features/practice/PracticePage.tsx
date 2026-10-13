import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { BookOpenCheck, BrainCircuit, ClipboardCheck, Filter, Gauge, NotebookPen, Route, Shuffle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { QuestionCard } from '../../components/learning/QuestionCard'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { courses } from '../../lib/courses'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { useProgressStore } from '../../stores/progressStore'
import { deterministicOrder } from '../../lib/questionPresentation'
import styles from './PracticePage.module.css'

type Mode = 'all' | 'advanced' | 'pjs' | 'integrated' | 'core' | 'transversal' | 'errors' | 'saved'

const modes: Mode[] = ['all', 'advanced', 'pjs', 'integrated', 'core', 'transversal', 'errors', 'saved']

export function PracticePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const course = getCourseFromSearchParams(searchParams)
  const requestedMode = searchParams.get('mode') as Mode | null
  const mode: Mode = requestedMode && modes.includes(requestedMode) ? requestedMode : 'all'
  const [seed, setSeed] = useState(0)
  const [visibleCount, setVisibleCount] = useState(20)
  const progress = useProgressStore((state) => state.courses[course.id])
  const config = course.practiceConfig
  const coreModules = useMemo(() => new Set(config?.coreModuleIds ?? []), [config?.coreModuleIds])
  const transversalModules = useMemo(() => new Set(config?.transversalModuleIds ?? []), [config?.transversalModuleIds])

  const setMode = (next: Mode) => {
    const params = new URLSearchParams({ course: course.slug })
    if (next !== 'all') params.set('mode', next)
    setSearchParams(params, { replace: true })
  }

  const questions = useMemo(() => {
    const filtered = course.questions.filter((question) => {
      if (mode === 'all') return true
      if (mode === 'advanced') return question.id.startsWith('q-goa26-') || question.id.startsWith('q-master-2026-') || question.id.startsWith('q-transversal-2026-')
      if (mode === 'pjs') return question.type === 'pjs'
      if (mode === 'integrated') return Boolean(question.integrated)
      if (mode === 'core') return coreModules.size ? coreModules.has(question.moduleId) : true
      if (mode === 'transversal') return transversalModules.has(question.moduleId)
      if (mode === 'saved') return Boolean(progress?.questionBookmarks?.includes(question.id))
      const error = progress?.errorJournal?.[question.id]
      return Boolean(error && !error.resolvedAt)
    })
    return deterministicOrder(filtered, `practice:${course.id}:${seed}`, (question) => question.id)
  }, [course, coreModules, mode, progress, seed, transversalModules])

  useEffect(() => {
    setVisibleCount(20)
  }, [course.id, mode, seed])

  const visibleQuestions = useMemo(() => questions.slice(0, visibleCount), [questions, visibleCount])
  const hasIntegrated = course.questions.some((question) => question.integrated)
  const hasTransversal = transversalModules.size > 0
  const hasCaseLabs = config?.hasCaseLabs !== false

  return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
    <PageHeader eyebrow="Entrenamiento" title="Practicar" subtitle={`Banco activo: ${course.shortTitle}. Primero precisión; después velocidad. Cada respuesta explica el porqué y deja trazabilidad a fuentes del curso.`} />

    <nav className={styles.courseScope} aria-label="Curso para practicar">
      {courses.map((item) => <Link key={item.id} to={withCourse('/practice', item)} className={item.id === course.id ? styles.courseScopeActive : ''}>
        <span>{item.shortTitle}</span><small>{item.questions.length} preguntas</small>
      </Link>)}
    </nav>

    <section className={styles.visualIntro} aria-label="Práctica aplicada">
      <div className={styles.visualCopy}>
        <span>{course.shortTitle}</span>
        <strong>Casos, distractores plausibles y retroalimentación con fuente</strong>
        <p>Las métricas y preguntas pertenecen únicamente al curso seleccionado; Umbral no mezcla bancos entre convocatorias.</p>
      </div>
      <img src="/media/editorial/practice-adaptive.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
    </section>

    <div className={styles.toolbar}>
      <div className={styles.segment} aria-label="Filtro de práctica">
        <button type="button" aria-pressed={mode === 'all'} className={mode === 'all' ? styles.active : ''} onClick={() => setMode('all')}>Todas</button>
        {course.id === 'dian-2676-gestor-ii' && <button type="button" aria-pressed={mode === 'advanced'} className={mode === 'advanced' ? styles.active : ''} onClick={() => setMode('advanced')}>Casos nuevos · 2026</button>}
        <button type="button" aria-pressed={mode === 'pjs'} className={mode === 'pjs' ? styles.active : ''} onClick={() => setMode('pjs')}>Situacionales</button>
        {hasIntegrated ? <button type="button" aria-pressed={mode === 'integrated'} className={mode === 'integrated' ? styles.active : ''} onClick={() => setMode('integrated')}>Integradoras</button> : null}
        <button type="button" aria-pressed={mode === 'core'} className={mode === 'core' ? styles.active : ''} onClick={() => setMode('core')}>{config?.coreLabel ?? 'Núcleo'}</button>
        {hasTransversal ? <button type="button" aria-pressed={mode === 'transversal'} className={mode === 'transversal' ? styles.active : ''} onClick={() => setMode('transversal')}>{config?.transversalLabel ?? 'Complementario'}</button> : null}
        <button type="button" aria-pressed={mode === 'errors'} className={mode === 'errors' ? styles.active : ''} onClick={() => setMode('errors')}>Mis errores</button>
        <button type="button" aria-pressed={mode === 'saved'} className={mode === 'saved' ? styles.active : ''} onClick={() => setMode('saved')}>Guardadas</button>
      </div>
      <Button variant="secondary" size="sm" icon={<Shuffle size={15}/>} onClick={() => setSeed((value) => value + 1)}>Mezclar</Button>
    </div>

    <div className={styles.practiceModes}>
      <div className={styles.examCta}><div><NotebookPen size={18}/><span><strong>Cuaderno de errores</strong><small>Clasifica fallos, guarda tu regla y comprueba después.</small></span></div><Link to={withCourse('/practice/errors', course)}>Revisar</Link></div>
      <div className={styles.examCta}><div><ClipboardCheck size={18}/><span><strong>Diagnóstico inicial</strong><small>20 preguntas para detectar prioridades antes de estudiar.</small></span></div><Link to={withCourse('/practice/diagnostic', course)}>Evaluarme</Link></div>
      <div className={styles.examCta}><div><BrainCircuit size={18}/><span><strong>Sesión recomendada</strong><small>12 preguntas priorizadas por errores, debilidades y cobertura nueva.</small></span></div><Link to={withCourse('/practice/adaptive', course)}>Practicar</Link></div>
      <div className={styles.examCta}><div><Gauge size={18}/><span><strong>Simulacros</strong><small>10, 20 o 40 preguntas sin feedback durante la sesión.</small></span></div><Link to={withCourse('/practice/mock', course)}>Configurar</Link></div>
      {hasCaseLabs ? <div className={styles.examCta}><div><Route size={18}/><span><strong>Casos integradores</strong><small>Expedientes largos que cruzan varios módulos del curso.</small></span></div><Link to={withCourse('/practice/cases', course)}>Resolver</Link></div> : null}
      <div className={styles.examCta}><div><BookOpenCheck size={18}/><span><strong>Volver al contenido</strong><small>Revisa los módulos antes de seguir entrenando.</small></span></div><Link to={`/courses/${course.slug}`}>Curso</Link></div>
    </div>

    <div className={styles.summary}><Filter size={16}/><span>{questions.length} preguntas disponibles en este filtro</span></div>
    <div className={styles.list}>
      {visibleQuestions.map((question) => <QuestionCard key={`${question.id}-${seed}`} course={course} question={question} compact />)}
    </div>

    {visibleCount < questions.length ? <div className={styles.loadMore}><Button variant="secondary" onClick={() => setVisibleCount((count) => Math.min(count + 20, questions.length))}>Cargar 20 más</Button><span>Mostrando {visibleQuestions.length} de {questions.length}</span></div> : null}
    {questions.length === 0 ? <div className={styles.end}><BookOpenCheck size={19}/><p>No hay preguntas en este filtro todavía. Cambia el filtro o continúa estudiando.</p></div> : null}
  </div>
}
