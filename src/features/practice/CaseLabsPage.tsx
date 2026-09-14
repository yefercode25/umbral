import { ArrowLeft, ArrowRight, BookOpenCheck, Clock3, Layers3, Route, ShieldCheck } from 'lucide-react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { QuestionCard } from '../../components/learning/QuestionCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { getCaseLabsForCourse } from '../../lib/caseLabs'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { useProgressStore } from '../../stores/progressStore'
import styles from './CaseLabsPage.module.css'

const difficultyLabel = (difficulty: number) => {
  if (difficulty >= 5) return 'Avanzado'
  if (difficulty >= 4) return 'Intermedio alto'
  return 'Intermedio'
}

export function CaseLabsPage() {
  const { caseId } = useParams()
  const [searchParams] = useSearchParams()
  const course = getCourseFromSearchParams(searchParams)
  const caseLabs = getCaseLabsForCourse(course.id)
  const progress = useProgressStore((state) => state.courses[course.id])
  const activeCase = caseId ? caseLabs.find((item) => item.id === caseId) : undefined

  if (!caseLabs.length) {
    return <div className="page page--narrow">
      <PageHeader eyebrow="Casos integradores" title="Laboratorios en preparación" subtitle={`Los casos integradores largos todavía no están publicados para ${course.shortTitle}. El curso mantiene simuladores y preguntas situacionales dentro de sus lecciones y banco general.`} />
      <Link className={styles.backLink} to={withCourse('/practice', course)}><ArrowLeft size={16}/> Volver a práctica</Link>
    </div>
  }

  if (caseId && !activeCase) {
    return <div className="page page--narrow">
      <PageHeader eyebrow="Casos integradores" title="Caso no encontrado" subtitle="El caso solicitado no existe en la versión actual del curso." />
      <Link className={styles.backLink} to={withCourse('/practice/cases', course)}><ArrowLeft size={16}/> Volver a los casos</Link>
    </div>
  }

  if (!activeCase) {
    return <div className="page page--narrow">
      <PageHeader
        eyebrow="Entrenamiento aplicado"
        title="Casos integradores"
        subtitle={`Un mismo expediente cruza módulos de ${course.shortTitle}. Practica la secuencia completa: hechos, competencia, procedimiento, evidencia y decisión.`}
      />

      <section className={styles.intro}>
        <div className={styles.introIcon}><Route size={21}/></div>
        <div>
          <strong>No son preguntas independientes.</strong>
          <p>Cada laboratorio mantiene un contexto común y hace evolucionar los hechos. La meta es detectar cuándo una regla correcta deja de producir la actuación correcta por competencia, etapa, evidencia o nueva información.</p>
        </div>
      </section>

      <div className={styles.grid}>
        {caseLabs.map((item, index) => {
          const answered = item.questionIds.filter((questionId) => (progress?.questionStats?.[questionId]?.attempts ?? 0) > 0).length
          const correct = item.questionIds.filter((questionId) => progress?.questionStats?.[questionId]?.lastCorrect).length
          const modules = item.moduleIds.map((moduleId) => course.modules.find((module) => module.id === moduleId)).filter(Boolean)
          return <article className={styles.caseCard} key={item.id}>
            <div className={styles.caseTop}>
              <span className={styles.caseNumber}>Caso {String(index + 1).padStart(2, '0')}</span>
              <span className={styles.difficulty}>{difficultyLabel(item.difficulty)}</span>
            </div>
            <h2>{item.title}</h2>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.moduleChips} aria-label="Módulos relacionados">
              {modules.map((module) => module && <span key={module.id}>{module.code}</span>)}
            </div>
            <div className={styles.meta}>
              <span><Clock3 size={14}/>{item.durationMinutes} min</span>
              <span><Layers3 size={14}/>{item.questionIds.length} decisiones</span>
              <span><BookOpenCheck size={14}/>{answered}/{item.questionIds.length} vistas</span>
            </div>
            <div className={styles.progressLine} aria-label={`${answered} de ${item.questionIds.length} decisiones respondidas`}>
              <span style={{ width: `${Math.round((answered / item.questionIds.length) * 100)}%` }} />
            </div>
            <div className={styles.cardFooter}>
              <small>{answered > 0 ? `${correct} última${correct === 1 ? '' : 's'} respuesta${correct === 1 ? '' : 's'} correcta${correct === 1 ? '' : 's'}` : 'Sin iniciar'}</small>
              <Link to={withCourse(`/practice/cases/${item.id}`, course)}>{answered ? 'Continuar' : 'Resolver'} <ArrowRight size={15}/></Link>
            </div>
          </article>
        })}
      </div>
    </div>
  }

  const questions = activeCase.questionIds
    .map((questionId) => course.questions.find((question) => question.id === questionId))
    .filter((question): question is NonNullable<typeof question> => Boolean(question))
  const sources = activeCase.sourceIds
    .map((sourceId) => course.sources.find((source) => source.id === sourceId))
    .filter((source): source is NonNullable<typeof source> => Boolean(source))
  const modules = activeCase.moduleIds
    .map((moduleId) => course.modules.find((module) => module.id === moduleId))
    .filter((module): module is NonNullable<typeof module> => Boolean(module))
  const answered = activeCase.questionIds.filter((questionId) => (progress?.questionStats?.[questionId]?.attempts ?? 0) > 0).length

  return <div className="page page--narrow">
    <Link className={styles.backLink} to={withCourse('/practice/cases', course)}><ArrowLeft size={16}/> Casos integradores</Link>
    <PageHeader eyebrow="Laboratorio de decisión" title={activeCase.title} subtitle={activeCase.subtitle} />

    <section className={styles.caseBrief}>
      <div className={styles.briefHeader}>
        <div>
          <span className={styles.eyebrow}>Expediente base</span>
          <p>{activeCase.description}</p>
        </div>
        <div className={styles.briefMeta}>
          <span><Clock3 size={15}/>{activeCase.durationMinutes} min</span>
          <span><Layers3 size={15}/>{activeCase.questionIds.length} decisiones</span>
        </div>
      </div>
      <div className={styles.moduleChips}>
        {modules.map((module) => <span key={module.id}>{module.code} · {module.title}</span>)}
      </div>
      <ul className={styles.facts}>
        {activeCase.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
      <div className={styles.caseStatus}>
        <div><span>Avance del caso</span><strong>{answered}/{activeCase.questionIds.length}</strong></div>
        <div className={styles.progressLine}><span style={{ width: `${Math.round((answered / activeCase.questionIds.length) * 100)}%` }}/></div>
      </div>
    </section>

    <div className={styles.sequenceNote}><Route size={17}/><p>Responde en orden. Cada decisión añade o cambia un hecho del expediente; evita resolver la pregunta siguiente con la fotografía de la anterior.</p></div>

    <div className={styles.questions}>
      {questions.map((question, index) => <section className={styles.questionStep} key={question.id}>
        <div className={styles.stepLabel}><span>{index + 1}</span><div><strong>Decisión {index + 1} de {questions.length}</strong><small>{index === 0 ? 'Punto de partida' : 'El expediente evoluciona'}</small></div></div>
        <QuestionCard course={course} question={question} showRetry={false} />
      </section>)}
    </div>

    <section className={styles.sourcesBox}>
      <div className={styles.sourcesTitle}><ShieldCheck size={18}/><div><strong>Fuentes del laboratorio</strong><small>Consulta la norma o procedimiento completo cuando quieras profundizar.</small></div></div>
      <div className={styles.sourceLinks}>{sources.map((source) => <a key={source.id} href={source.url} target="_blank" rel="noreferrer">{source.title}<ArrowRight size={14}/></a>)}</div>
    </section>

    <div className={styles.bottomNav}><Link to={withCourse('/practice', course)}><ArrowLeft size={15}/> Volver a práctica</Link><Link to={withCourse('/practice/cases', course)}>Elegir otro caso <ArrowRight size={15}/></Link></div>
  </div>
}
