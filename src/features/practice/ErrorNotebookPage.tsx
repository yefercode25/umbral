import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import { ArrowLeft, BookOpenCheck, CheckCircle2, NotebookPen, RotateCcw, Save } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { useProgressStore } from '../../stores/progressStore'
import type { ErrorReason } from '../../types/progress'
import styles from './ErrorNotebookPage.module.css'

const reasonOptions: { value: ErrorReason; label: string }[] = [
  { value: 'concept', label: 'Concepto' },
  { value: 'term', label: 'Término / fecha' },
  { value: 'competence', label: 'Competencia / autoridad' },
  { value: 'stage', label: 'Etapa del procedimiento' },
  { value: 'reading', label: 'Lectura del caso' },
  { value: 'distractor', label: 'Distractor plausible' },
  { value: 'other', label: 'Otro' },
]

function shortDate(iso: string) {
  return new Intl.DateTimeFormat('es-CO', { day: '2-digit', month: 'short' }).format(new Date(iso))
}

export function ErrorNotebookPage() {
  const [searchParams] = useSearchParams()
  const course = getCourseFromSearchParams(searchParams)
  const progress = useProgressStore((state) => state.courses[course.id])
  const setErrorReflection = useProgressStore((state) => state.setErrorReflection)
  const markErrorReviewed = useProgressStore((state) => state.markErrorReviewed)
  const [showResolved, setShowResolved] = useState(false)
  type Draft = { reason?: ErrorReason; note: string }
  const [drafts, setDrafts] = useState<Record<string, Draft>>({})

  const entries = useMemo(() => Object.values(progress?.errorJournal ?? {})
    .filter((entry) => showResolved || !entry.resolvedAt)
    .sort((a, b) => new Date(b.lastWrongAt).getTime() - new Date(a.lastWrongAt).getTime()), [progress?.errorJournal, showResolved])

  const unresolved = Object.values(progress?.errorJournal ?? {}).filter((entry) => !entry.resolvedAt).length
  const total = Object.keys(progress?.errorJournal ?? {}).length

  return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
    <Link className={styles.back} to={withCourse('/practice', course)}><ArrowLeft size={17}/> Práctica · {course.shortTitle}</Link>
    <PageHeader eyebrow={`Aprender del fallo · ${course.shortTitle}`} title="Cuaderno de errores" subtitle="Clasifica por qué fallaste y deja una regla recuperable. El cuaderno es independiente para cada curso." />

    <section className={styles.overview}>
      <div><NotebookPen size={18}/><span><strong>{unresolved}</strong><small>por consolidar</small></span></div>
      <div><CheckCircle2 size={18}/><span><strong>{Math.max(0, total - unresolved)}</strong><small>resueltos después</small></span></div>
      <button aria-pressed={showResolved} onClick={() => setShowResolved((value) => !value)}>{showResolved ? 'Ocultar resueltos' : 'Ver resueltos'}</button>
    </section>

    {entries.length === 0 ? <section className={styles.empty}>
      <BookOpenCheck size={26}/><h2>{total ? 'No hay errores pendientes' : 'Tu cuaderno está vacío'}</h2><p>{total ? 'Los errores registrados ya tuvieron una respuesta correcta posterior.' : `Cuando falles una pregunta de ${course.shortTitle}, Umbral la agregará aquí automáticamente para que puedas clasificar la causa.`}</p><Link to={withCourse('/practice', course)}>Ir a practicar</Link>
    </section> : <div className={styles.list}>{entries.map((entry) => {
      const question = course.questions.find((item) => item.id === entry.questionId)
      if (!question) return null
      const module = course.modules.find((item) => item.id === question.moduleId)
      const draft: Draft = drafts[entry.questionId] ?? { ...(entry.reason ? { reason: entry.reason } : {}), note: entry.note ?? '' }
      const sourceLinks = question.sourceIds.map((sourceId) => course.sources.find((source) => source.id === sourceId)).filter((source): source is NonNullable<typeof source> => Boolean(source))
      return <article className={`${styles.card} ${entry.resolvedAt ? styles.resolved : ''}`} key={entry.questionId}>
        <header><div><span>{module?.code ?? question.moduleId}</span><strong>{module?.title}</strong></div><small>{entry.wrongCount} fallo{entry.wrongCount === 1 ? '' : 's'} · último {shortDate(entry.lastWrongAt)}</small></header>
        {question.case && <p className={styles.case}>{question.case}</p>}
        <h2>{question.stem}</h2>
        <div className={styles.explanation}><strong>Regla a recuperar</strong><p>{question.explanation}</p></div>
        <div className={styles.formRow}>
          <label><span>¿Qué produjo el error?</span><select value={draft.reason ?? ''} onChange={(event) => { const reason = event.target.value as ErrorReason | ''; setDrafts((current) => ({ ...current, [entry.questionId]: reason ? { ...draft, reason } : { note: draft.note } })) }}><option value="">Sin clasificar</option>{reasonOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
          <label className={styles.note}><span>Tu regla en una frase</span><textarea rows={3} value={draft.note} placeholder="Escribe una regla breve que puedas recuperar en otro caso." onChange={(event) => setDrafts((current) => ({ ...current, [entry.questionId]: { ...draft, note: event.target.value } }))}/></label>
        </div>
        <div className={styles.sources}>{sourceLinks.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title}</a>)}</div>
        <footer>
          <span>{entry.resolvedAt ? `Respuesta correcta posterior · ${shortDate(entry.resolvedAt)}` : entry.reviewedAt ? `Revisado · ${shortDate(entry.reviewedAt)}` : 'Pendiente de reflexión'}</span>
          <div><Button variant="secondary" size="sm" icon={<RotateCcw size={14}/>} onClick={() => markErrorReviewed(course, entry.questionId)}>Marcar revisado</Button><Button size="sm" icon={<Save size={14}/>} onClick={() => setErrorReflection(course, entry.questionId, draft.reason, draft.note)}>Guardar reflexión</Button></div>
        </footer>
      </article>
    })}</div>}
  </div>
}
