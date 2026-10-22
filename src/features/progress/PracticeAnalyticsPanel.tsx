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
  const coveragePct = analysis.available ? Math.round((analysis.unique / analysis.available) * 100) : 0
  const accuracyPct = analysis.attempts ? Math.round((analysis.correct / analysis.attempts) * 100) : 0
  const wilsonLow = analysis.interval ? Math.round(analysis.interval.low * 100) : 0
  const wilsonHigh = analysis.interval ? Math.round(analysis.interval.high * 100) : 0

  return <section className={styles.panel} aria-labelledby="analytics-title">
    <header><span className={styles.kicker}>ANÁLISIS FORMATIVO Y VISUAL · DIAN 2676</span><h2 id="analytics-title">Qué dicen tus respuestas y qué no dicen</h2><p>La estadística usa tus intentos guardados. No reconstruye la escala psicométrica CNSC ni estima tu posición entre aspirantes.</p></header>

    <div className={styles.visualRings}>
      <div className={styles.ringCard}>
        <svg viewBox="0 0 100 100" className={styles.donut} aria-hidden="true">
          <circle cx="50" cy="50" r="38" className={styles.donutTrack} />
          <circle cx="50" cy="50" r="38" className={styles.donutFillTeal} strokeDasharray={`${(coveragePct / 100) * 238.76} 238.76`} />
          <text x="50" y="54" textAnchor="middle" className={styles.donutText}>{coveragePct}%</text>
        </svg>
        <div>
          <span>Cobertura del banco</span>
          <strong>{analysis.unique} de {analysis.available}</strong>
          <small>Preguntas distintas exploradas ({analysis.repeats} repetidas)</small>
        </div>
      </div>

      <div className={styles.ringCard}>
        <svg viewBox="0 0 100 100" className={styles.donut} aria-hidden="true">
          <circle cx="50" cy="50" r="38" className={styles.donutTrack} />
          <circle cx="50" cy="50" r="38" className={styles.donutFillGreen} strokeDasharray={`${(accuracyPct / 100) * 238.76} 238.76`} />
          <text x="50" y="54" textAnchor="middle" className={styles.donutText}>{analysis.attempts ? `${accuracyPct}%` : '—'}</text>
        </svg>
        <div>
          <span>Precisión histórica</span>
          <strong>{analysis.correct}/{analysis.attempts} aciertos</strong>
          <small>{analysis.sessions.length} simulacros registrados</small>
        </div>
      </div>
    </div>

    <div className={styles.kpis}>
      <div><span>Preguntas distintas practicadas</span><strong>{analysis.unique}/{analysis.available}</strong><small>{analysis.available ? pct(analysis.unique/analysis.available) : '—'} del banco</small></div>
      <div><span>Intentos registrados</span><strong>{analysis.attempts}</strong><small>{analysis.repeats} preguntas repetidas</small></div>
      <div><span>Precisión histórica</span><strong>{analysis.attempts ? pct(analysis.correct/analysis.attempts) : '—'}</strong><small>Incluye repeticiones</small></div>
      <div><span>Simulacros registrados</span><strong>{analysis.sessions.length}</strong><small>Desde esta actualización</small></div>
    </div>

    <div className={styles.warning}>
      <div className={styles.wilsonHead}>
        <strong>Intervalo descriptivo (Wilson, 95%)</strong>
        <span>{analysis.interval ? `${wilsonLow}% – ${wilsonHigh}%` : 'Sin datos aún'}</span>
      </div>
      {analysis.interval ? (
        <div className={styles.wilsonBar} aria-hidden="true">
          <span className={styles.wilsonRange} style={{ left: `${wilsonLow}%`, width: `${Math.max(3, wilsonHigh - wilsonLow)}%` }} />
          <i className={styles.wilsonMarker} style={{ left: '70%' }} title="Referencia 70%" />
        </div>
      ) : null}
      <p>{analysis.interval ? `${pct(analysis.interval.low)} – ${pct(analysis.interval.high)} sobre respuestas registradas.` : 'Responde preguntas para visualizar un intervalo estadístico.'} Los intentos repetidos sobre una misma pregunta no son independientes; este intervalo no es una probabilidad de aprobar ni una calificación psicométrica.</p>
    </div>

    <h3>Precisión por dificultad editorial del banco</h3><div className={styles.difficulty}>{analysis.byDifficulty.map((row) => <div key={row.level}><span>Dificultad {row.level}/5</span><strong>{row.percent === null ? 'Sin datos' : `${row.percent}%`}</strong><small>{row.unique} preguntas distintas · {row.attempts} intentos</small><div className={styles.track}><span style={{width:`${row.percent ?? 0}%`}}/></div></div>)}</div>
    <h3>Mapa de práctica por módulo</h3><div className={styles.modules}>{analysis.byModule.filter((item) => item.available > 0).slice(0,showAll?undefined:8).map((row) => <div key={row.module.id}><span><strong>{row.module.code}</strong> {row.module.title}</span><small>{row.unique}/{row.available} practicadas · {row.percent === null ? 'sin precisión' : `${row.percent}% de aciertos`}</small><div className={styles.track}><span style={{width:`${row.available ? (row.unique/row.available)*100 : 0}%`}}/></div></div>)}</div>
    {analysis.byModule.filter((item) => item.available > 0).length > 8 && <button className={styles.show} onClick={() => setShowAll(!showAll)}>{showAll ? 'Mostrar menos módulos' : 'Ver todos los módulos'}</button>}
    <h3>Consistencia entre simulacros</h3>{analysis.sessions.length ? <div className={styles.sessions}>{analysis.sessions.slice(-8).reverse().map((s) => {
      const sPct = s.questions ? Math.round(100*s.correct/s.questions) : 0
      return <div key={s.id} className={styles.sessionBarRow}><strong>{sPct}%</strong><div className={styles.sessionTrack}><span style={{ width: `${sPct}%` }} /></div><span>{s.correct}/{s.questions} · {Math.round(s.durationSeconds/60)} min · {new Date(s.recordedAt).toLocaleDateString('es-CO')}</span></div>
    })}</div> : <p className={styles.empty}>Al finalizar un simulacro nuevo se registrará un resumen de sesión con precisión y tiempo total. Los intentos anteriores se conservan, pero no se reconstruirán sesiones que nunca se guardaron.</p>}
    <footer><p><strong>Interpretación responsable:</strong> La dificultad 1–5 es editorial, no está calibrada con un modelo IRT. Los resultados pueden sobreestimar dominio por repetición, pistas o preguntas conocidas; conviene alternar preguntas nuevas y repasar los errores. El 70,00 del proceso es un umbral sobre la calificación oficial funcional, no directamente un porcentaje de aciertos de Umbral.</p>
      <div className={styles.footerLinks}>
        <Link to={withCourse('/library/indicators',course)}>Relacionar resultados con indicadores oficiales →</Link>
        <Link to="/library?tab=mapas">Explorar Atlas Visual y Gráficas DIAN →</Link>
      </div>
    </footer>
  </section>
}
