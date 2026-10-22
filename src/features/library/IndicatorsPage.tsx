import { useState } from 'react'
import { AlertCircle, ArrowLeft, BookOpenCheck, ExternalLink, ListFilter, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { indicatorCoverage, provisionalDianAreas, readIndicators, saveIndicators, type OfficialIndicator } from '../../lib/indicatorCoverage'
import { useProgressStore } from '../../stores/progressStore'
import styles from './LibraryPage.module.css'
import extra from './IndicatorsPage.module.css'

const course = dianGestorCourse
export function IndicatorsPage() {
  const [indicators, setIndicators] = useState<OfficialIndicator[]>(readIndicators)
  const [raw, setRaw] = useState('')
  const [message, setMessage] = useState('')
  const progress = useProgressStore((state) => state.courses[course.id])
  function update(next: OfficialIndicator[]) { setIndicators(next); saveIndicators(next) }
  function addFromText() {
    const titles = [...new Set(raw.split(/\r?\n/).map((line) => line.replace(/^\s*(?:\d+[.)-]|[-*])\s*/, '').trim()).filter(Boolean))].slice(0, 150)
    if (!titles.length) { setMessage('Escribe al menos un indicador por línea.'); return }
    const known = new Set(indicators.map((i) => i.title.toLocaleLowerCase('es')))
    const added = titles.filter((title) => !known.has(title.toLocaleLowerCase('es'))).map((title,i) => ({ id: `manual-${Date.now()}-${i}`, title: title.slice(0,250), moduleIds: [] as string[] }))
    update([...indicators, ...added].slice(0,150)); setRaw(''); setMessage(`${added.length} indicadores agregados. Relaciónalos manualmente con los módulos del curso.`)
  }
  const linked = indicators.filter((item) => item.moduleIds.length > 0).length
  return <div className={`page ${extra.page}`}>
    <Link to="/library" className={extra.back}><ArrowLeft size={17}/> Volver a Biblioteca</Link>
    <header className={styles.hero}><span className={styles.eyebrow}><ListFilter size={18}/> TRAZABILIDAD DE INDICADORES</span><h1>Indicadores del empleo</h1>
      <p>La GOA 19/10/2026, numeral 4.3, remite al operador para consultar los ejes individuales. El PDF no los enumera. Aquí puedes introducir las denominaciones reales de tu inscripción y relacionarlas con los módulos de Umbral. <strong>Ninguna correspondencia se certifica automáticamente.</strong></p>
      <div className={styles.heroLinks}><a href="http://dian-2676-areandina.com.co/indicadores-dian-2667/" target="_blank" rel="noreferrer">Portal indicado por GOA <ExternalLink size={14}/></a><a href="https://www.cnsc.gov.co/convocatorias/dian-2676" target="_blank" rel="noreferrer">CNSC y SIMO <ExternalLink size={14}/></a></div>
    </header>
    <section className={styles.notice}><div className={extra.warning}><AlertCircle size={19}/><div><strong>Por verificar: indicadores oficiales individuales</strong><p>El enlace de la GOA termina en <code>2667</code> aunque el proceso se denomina 2676. Verifica el vínculo desde la página oficial o SIMO. No introduzcas tu número de inscripción, contraseña ni datos personales aquí: basta copiar el texto de los indicadores.</p></div></div></section>
    <section className={extra.editor}><h2>1. Registrar los indicadores publicados</h2><p>Pega uno por línea. Se conservarán solo en el almacenamiento local del dispositivo. Puedes añadir nuevos sin perder los anteriores.</p>
      <label htmlFor="indicator-import">Denominaciones literales de los indicadores</label><textarea id="indicator-import" rows={5} value={raw} onChange={(e) => setRaw(e.target.value)} placeholder={'Ejemplo de formato (no indicadores oficiales):\nIndicador transcrito de la página del operador\nOtro indicador transcrito'} />
      <button type="button" className={extra.primary} onClick={addFromText}><Plus size={17}/> Incorporar a mi matriz</button>{message && <p role="status">{message}</p>}
    </section>
    {indicators.length > 0 && <section className={extra.editor}><h2>2. Relacionar con módulos existentes</h2><p>{indicators.length} indicadores guardados · {linked} con correspondencia manual · {indicators.length-linked} sin correspondencia. Vincular un módulo solo significa que contiene material potencialmente pertinente, NO que su cobertura jurídica sea completa.</p>
      <div className={extra.indicatorList}>{indicators.map((item,index) => {
        const coverage = indicatorCoverage(course,progress,item.moduleIds)
        return <article className={extra.indicator} key={item.id}><div className={extra.row}><h3>{index + 1}. {item.title}</h3><button className={extra.remove} aria-label={`Quitar indicador ${item.title}`} type="button" onClick={() => { if (window.confirm(`¿Quitar el indicador «${item.title}» de tu matriz?`)) update(indicators.filter((i) => i.id !== item.id)) }}><Trash2 size={17}/></button></div>
        <details><summary>Relacionar con módulos ({item.moduleIds.length} seleccionados)</summary><div className={extra.moduleList}>{course.modules.filter((module) => module.status === 'published').map((module) => <label key={module.id}><input type="checkbox" checked={item.moduleIds.includes(module.id)} onChange={(e) => update(indicators.map((i) => i.id === item.id ? {...i, moduleIds:e.target.checked ? [...i.moduleIds,module.id] : i.moduleIds.filter((id) => id!==module.id)} : i))}/><span>{module.code} · {module.title}</span></label>)}</div></details>
        <p className={extra.evidence}>{item.moduleIds.length ? `${coverage.lessons} lecciones (${coverage.completed} completadas) · ${coverage.questions} preguntas (${coverage.pjsQuestions} PJS) · ${coverage.attempted} preguntas practicadas${coverage.accuracy === null ? '' : ` · ${Math.round(coverage.accuracy*100)}% en intentos`}` : 'Sin relación establecida: no puede calcularse cobertura.'}</p></article>
      })}</div>
    </section>}
    <section className={extra.editor}><h2>Mapa provisional de estudio (NO oficial)</h2><p>Estas áreas se deducen de la ficha del cargo y la arquitectura actual del curso, y sirven para orientar el repaso mientras consigues el listado publicado por el operador.</p><div className={extra.indicatorList}>{provisionalDianAreas.map((area) => {const metrics = indicatorCoverage(course, progress, area.moduleIds);return <article className={extra.indicator} key={area.label}><h3>{area.label}</h3><p className={extra.evidence}>{metrics.modules} módulos · {metrics.lessons} lecciones · {metrics.questions} preguntas · {metrics.attempted} distintas practicadas</p></article>})}</div></section>
    <section className={styles.notice}><strong>Cómo interpretar la cobertura</strong><p>El número de lecciones o preguntas asociadas indica volumen de material, no calidad ni cobertura oficial completa. Un indicador requiere revisión manual de enunciado, artículos aplicables, vigencia, ejemplos y preguntas. En cuanto tengas el documento oficial, podrás usar esta matriz para detectar vacíos de contenido.</p><Link to={`/courses/${course.slug}/sources`}><BookOpenCheck size={16}/> Consultar fuentes del curso</Link></section>
  </div>
}
