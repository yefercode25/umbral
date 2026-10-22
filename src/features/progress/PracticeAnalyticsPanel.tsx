import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types/course'
import type { CourseProgress } from '../../types/progress'
import { getPracticeAnalytics } from '../../lib/practiceAnalytics'
import { withCourse } from '../../lib/courseQuery'
import styles from './PracticeAnalyticsPanel.module.css'

export function PracticeAnalyticsPanel({course, progress}: {course: Course; progress: CourseProgress | undefined}) {
  const [showAll, setShowAll] = useState(false)
  const analysis = getPracticeAnalytics(course, progress)
  const pct = (value: number) => `${Math.round(value * 100)}%`
  return <section className={styles.panel} aria-labelledby="analytics-title">
    <header><span className={styles.kicker}>ANÁLISIS FORMATIVO · DIAN</span><h2 id="analytics-title">Qué dicen tus respuestas y qué no dicen</h2><p>La estadística usa tus intentos guardados. No reconstruye la escala psicométrica CNSC ni estima tu posición entre aspirantes.</p></header>
    <div className={styles.kpis}>
      <div><span>Preguntas distintas practicadas</span><strong>{analysis.unique}/{analysis.available}</strong><small>{analysis.available ? pct(analysis.unique/analysis.available) : '—'} del banco</small></div>
      <div><span>Intentos registrados</span><strong>{analysis.attempts}</strong><small>{analysis.repeats} preguntas repetidas</small></div>
      <div><span>Precisión histórica</span><strong>{analysis.attempts ? pct(analysis.correct/analysis.attempts) : '—'}</strong><small>Incluye repeticiones</small></div>
      <div><span>Simulacros registrados</span><strong>{analysis.sessions.length}</strong><small>Desde esta actualización</small></div>
    </div>
    <div className={styles.warning}><strong>Intervalo descriptivo (Wilson, 95%)</strong><p>{analysis.interval ? `${pct(analysis.interval.low)} – ${pct(analysis.interval.high)} sobre respuestas registradas.` : 'Responde preguntas para visualizar un intervalo estadístico.'} Los intentos repetidos sobre una misma pregunta no son independientes; este intervalo no es una probabilidad de aprobar ni una calificación psicométrica.</p></div>
    <h3>Precisión por dificultad editorial del banco</h3><div className={styles.difficulty}>{analysis.byDifficulty.map((row) => <div key={row.level}><span>Dificultad {row.level}/5</span><strong>{row.percent === null ? 'Sin datos' : `${row.percent}%`}</strong><small>{row.unique} preguntas distintas · {row.attempts} intentos</small><div className={styles.track}><span style={{width:`${row.percent ?? 0}%`}}/></div></div>)}</div>
    <h3>Mapa de práctica por módulo</h3><div className={styles.modules}>{analysis.byModule.filter((item) => item.available > 0).slice(0,showAll?undefined:8).map((row) => <div key={row.module.id}><span><strong>{row.module.code}</strong> {row.module.title}</span><small>{row.unique}/{row.available} practicadas · {row.percent === null ? 'sin precisión' : `${row.percent}% de aciertos`}</small><div className={styles.track}><span style={{width:`${row.available ? (row.unique/row.available)*100 : 0}%`}}/></div></div>)}</div>
    {analysis.byModule.filter((item) => item.available > 0).length > 8 && <button className={styles.show} onClick={() => setShowAll(!showAll)}>{showAll ? 'Mostrar menos módulos' : 'Ver todos los módulos'}</button>}
    <h3>Consistencia entre simulacros</h3>{analysis.sessions.length ? <div className={styles.sessions}>{analysis.sessions.slice(-8).reverse().map((s) => <div key={s.id}><strong>{s.questions ? Math.round(100*s.correct/s.questions) : 0}%</strong><span>{s.correct}/{s.questions} · {Math.round(s.durationSeconds/60)} min · {new Date(s.recordedAt).toLocaleDateString('es-CO')}</span></div>)}</div> : <p className={styles.empty}>Al finalizar un simulacro nuevo se registrará un resumen de sesión con precisión y tiempo total. Los intentos anteriores se conservan, pero no se reconstruirán sesiones que nunca se guardaron.</p>}
    <footer><p><strong>Interpretación responsable:</strong> La dificultad 1–5 es editorial, no está calibrada con un modelo IRT. Los resultados pueden sobreestimar dominio por repetición, pistas o preguntas conocidas; conviene alternar preguntas nuevas y repasar los errores. El 70,00 del proceso es un umbral sobre la calificación oficial funcional, no directamente un porcentaje de aciertos de Umbral.</p>
      <Link to={withCourse('/library/indicators',course)}>Relacionar resultados con indicadores oficiales →</Link></footer>
  </section>
}
