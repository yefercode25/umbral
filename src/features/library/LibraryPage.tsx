import { useMemo, useState } from 'react'
import { BookOpenText, Building2, CheckCircle2, ExternalLink, FileText, LibraryBig, ListChecks, Search, Waypoints, Lightbulb, AlertTriangle, ChevronRight, GraduationCap, Sparkles, Zap } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { DianVisualAtlas } from '../../components/learning/DianVisualAtlas'
import { LessonSupportGraphic } from '../../components/learning/LessonSupportGraphic'
import { getCourseFromSearchParams, withCourse } from '../../lib/courseQuery'
import { dianGlossary, dianLibraryEntries, type LibraryCategory } from '../../lib/dianLibrary'
import { dianLawGuides, dianOrgNodes, dianOrgScenarios, dianDetailedProcesses, dianLibraryQuiz, type StudyCase } from '../../lib/dianLibraryExpanded'
import { dianVisualAtlasCatalog, getModuleSupportGraphic } from '../../lib/supportGraphics'
import styles from './LibraryPage.module.css'

type Tab = 'mapas' | 'normas' | 'organigrama' | 'procesos' | 'glosario' | 'casos'
const tabs: { id: Tab; label: string; icon: typeof BookOpenText }[] = [
  { id: 'mapas', label: 'Atlas Visual y Gráficas', icon: Sparkles },
  { id: 'normas', label: 'Normas', icon: BookOpenText },
  { id: 'organigrama', label: 'Organigrama', icon: Building2 },
  { id: 'procesos', label: 'Procesos', icon: Waypoints },
  { id: 'glosario', label: 'Glosario', icon: ListChecks },
  { id: 'casos', label: 'Casos PJS', icon: GraduationCap },
]
const orgGroups = ['Dirección','Subdirección','Seccional','Delegada'] as const
const families = ['Mapa institucional','Gestión tributaria','Control y cobro','Casos especiales'] as const
const categories: ('Todas' | LibraryCategory)[] = ['Todas','Núcleo del empleo','Procedimiento y servicio','Organización e integridad','Complementario']

const processGraphicById: Record<string, string> = {
  mapa: 'dian-structure-levels',
  registro: 'cpaca-route',
  cuenta: 'account-checklist',
  recaudacion: 'ear-cycle',
  extensivo: 'extensive-control',
  persuasivo: 'persuasive-vs-coactive',
  coactivo: 'coactive-route',
  facilidades: 'payment-facilities-guarantees',
  devoluciones: 'refunds-route',
  concursal: 'concursal-credit-route',
}

function ExplainedCase({ item }: { item: StudyCase }) {
  return <div className={styles.caseStudy}>
    <h4><Lightbulb size={16}/> Caso de entrenamiento (hipotético)</h4>
    <p><strong>Situación:</strong> {item.context}</p>
    <p><strong>Pregunta:</strong> {item.question}</p>
    <details className={styles.reveal}><summary>Ver actuación razonada y explicación</summary>
      <p><strong>Actuación:</strong> {item.answer}</p><p><strong>Por qué:</strong> {item.reasoning}</p>
      <p><strong>Evita:</strong> {item.mistake}</p>
    </details>
  </div>
}

export function LibraryPage() {
  const [params, setParams] = useSearchParams()
  const course = getCourseFromSearchParams(params)
  const [term, setTerm] = useState('')
  const [category, setCategory] = useState<'Todas' | LibraryCategory>('Todas')
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({})
  const currentTab = (tabs.find((item) => item.id === params.get('tab'))?.id ?? 'normas') as Tab
  const entries = useMemo(() => dianLibraryEntries.filter((entry) =>
    (category === 'Todas' || entry.category === category) &&
    `${entry.title} ${entry.relevance} ${entry.description} ${entry.concepts.join(' ')} ${(dianLawGuides[entry.id]?.essentials ?? []).join(' ')} ${(dianLawGuides[entry.id]?.connections ?? []).join(' ')}`.toLocaleLowerCase('es').includes(term.toLocaleLowerCase('es').trim())), [term,category])
  const sourceUrl = (sourceId?: string) => course.sources.find((source) => source.id === sourceId)?.url
  const orgSupportGraphic = getModuleSupportGraphic('m3')

  function changeTab(tab: Tab) { const next = new URLSearchParams(params); next.set('tab',tab); setParams(next) }
  return <div className={`page ${styles.page}`}>
    <header className={styles.hero}>
      <span className={styles.eyebrow}><LibraryBig size={17}/> BIBLIOTECA DE ESTUDIO · DIAN 2676</span>
      <h1>Consulta, visualiza, entiende y aplica</h1>
      <p>Una biblioteca interactiva para estudiar con criterio: atlas visual con mapas conceptuales, gráficas de términos, comparativas de alto contraste, 20 guías normativas, organigrama por competencias, 10 procesos con flujogramas y casos PJS. No sustituye las fuentes oficiales ni los indicadores de tu empleo.</p>
      <div className={styles.heroLinks}>
        {course.id === 'dian-2676-gestor-ii' && <button type="button" className={styles.ctaVisual} onClick={() => changeTab('mapas')}><Sparkles size={15}/> Abrir Atlas Visual y Comparativas</button>}
        {course.id === 'dian-2676-gestor-ii' && <Link to="/practice/workout"><Zap size={15}/> Gimnasio Interactivo DIAN</Link>}
        <Link to="/courses">Cambiar o explorar cursos</Link>
        {course.id === 'dian-2676-gestor-ii' && <Link to={withCourse('/library/indicators',course)}>Mis indicadores y cobertura</Link>}
      </div>
    </header>
    {course.id !== 'dian-2676-gestor-ii' ? <section className={styles.notice}>
      <h2>Biblioteca de {course.shortTitle}</h2>
      <p>La biblioteca temática desarrollada aquí corresponde exclusivamente a DIAN 2676. No mezclamos normativa ni indicadores de otras convocatorias. Puedes consultar las fuentes específicas de este curso.</p>
      <Link to={`/courses/${course.slug}/sources`}>Abrir fuentes de {course.shortTitle} <ExternalLink size={15}/></Link>
    </section> : <>
      <div className={styles.tabs} aria-label="Secciones de la biblioteca">
        {tabs.map(({id,label,icon: Icon}) => <button key={id} type="button" aria-pressed={currentTab === id} className={currentTab === id ? styles.active : ''} onClick={() => changeTab(id)}><Icon size={17}/>{label}</button>)}
      </div>
      {currentTab === 'mapas' && <DianVisualAtlas />}
      {currentTab === 'normas' && <section aria-label="Normativa para DIAN">
        <div className={styles.notice}><strong>Orden de estudio recomendado</strong><p>Primero Estatuto Tributario, ficha CT-CR-3007 y procedimientos de cartera, cobro, recaudo y devoluciones. Después las reglas transversales. Ley 2586 se explica como material complementario: el corte incluye su fecha, pero no se ha comprobado que figure entre los indicadores personales del empleo.</p></div>
        <div className={styles.searchRow}><label className={styles.search}><Search size={18}/><input type="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Buscar norma, concepto o trámite" aria-label="Buscar en la biblioteca" /></label>
          <label className={styles.filter}>Área<select value={category} onChange={(e) => setCategory(e.target.value as typeof category)}>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        </div>
        <p className={styles.count}>{entries.length} documentos encontrados · edición ampliada 21/10/2026</p>
        <div className={styles.grid}>{entries.map((entry) => {
          const guide = dianLawGuides[entry.id]
          return <details className={styles.entry} key={entry.id}>
          <summary><span className={styles.entryIcon}><FileText size={20}/></span><span className={styles.entryTitle}><small>{entry.kind} · {entry.category}</small><strong>{entry.title}</strong><em>{entry.relevance}</em></span><span className={styles.expand}>Detalles +</span></summary>
          <div className={styles.entryBody}>
            <p>{entry.description}</p>
            <h3>Conceptos que debes comprender</h3><ul>{entry.concepts.map((text) => <li key={text}>{text}</li>)}</ul>
            {guide && <section className={styles.deepGuide}>
              <h3>Compréndelo a fondo</h3><ul>{guide.essentials.map((v) => <li key={v}>{v}</li>)}</ul>
              <h3>Cómo se aplica en un expediente</h3><ol className={styles.lessonSteps}>{guide.workflow.map((step) => <li key={step}>{step}</li>)}</ol>
              <ExplainedCase item={guide.cases}/>
              <h3>Conecta con otras fichas</h3>
              <div className={styles.connectionList}>{guide.connections.map((id) => {
                const related = dianLibraryEntries.find((other) => other.id === id)
                return related && <span key={id}>{related.title}</span>
              })}</div>
              <p className={styles.reference}><strong>Referencia de estudio:</strong> {guide.reference}</p>
            </section>}
            <h3>Ejemplo breve</h3><p className={styles.example}>{entry.example}</p>
            <h3>Evita estas confusiones</h3><ul>{entry.pitfalls.map((text) => <li key={text}>{text}</li>)}</ul>
            <p className={styles.scope}><strong>Alcance y vigencia:</strong> {entry.scope}</p>
            {(entry.url ?? sourceUrl(entry.sourceId)) && <a className={styles.source} href={entry.url ?? sourceUrl(entry.sourceId)} target="_blank" rel="noreferrer">Consultar fuente original <ExternalLink size={15}/></a>}
          </div>
          </details>
        })}</div>
        {entries.length === 0 && <p className={styles.notice}>No hay resultados con esos filtros. Prueba otra palabra.</p>}
        <p className={styles.disclaimer}>Los artículos citados son puntos de entrada al estudio, no sustituyen la consulta integral ni la verificación de modificaciones y jurisprudencia.</p>
      </section>}
      {currentTab === 'organigrama' && <section className={styles.content}>
        <h2>Organigrama DIAN: quién orienta y quién actúa</h2>
        <p>Una <strong>dependencia</strong> es una unidad de organización; un <strong>proceso</strong> es el trabajo que varias unidades realizan. El Decreto 1742 de 2020 establece niveles central, local y delegado. Esta vista describe responsabilidades generales, no reemplaza los actos que asignan competencia específica o territorial.</p>
        {orgSupportGraphic ? <div style={{ marginTop: '18px' }}><LessonSupportGraphic graphic={orgSupportGraphic} /></div> : null}
        <div className={styles.orgCore}>DIAN <span>Dirección General · nivel central</span></div>
        <div className={styles.orgLevels}>
          <article><strong>Nivel central</strong><p>Formula lineamientos, coordina direcciones y supervisa la gestión nacional. No resuelve necesariamente cada expediente seccional.</p></article>
          <article><strong>Nivel local</strong><p>Las direcciones seccionales ejecutan trámites y controles conforme a la competencia asignada en su territorio.</p></article>
          <article><strong>Nivel delegado</strong><p>Algunas direcciones seccionales delegadas funcionan bajo actos específicos que delimitan sus facultades y jurisdicción.</p></article>
        </div>
        <h3>Una ruta de organización, como ejemplo</h3>
        <p>Para estudiar una competencia de cartera, sigue esta cadena de referencia del <strong>nivel central</strong>. Luego contrasta quién ejecuta realmente la actuación en nivel local y su territorio.</p>
        <div className={styles.orgFlow} aria-label="Ruta ilustrativa del nivel central de la DIAN">
          <div><small>Dirección General</small><strong>Dirección de Gestión de Impuestos</strong></div>
          <ChevronRight size={20} aria-hidden="true" />
          <div><small>Subdirecciones de Impuestos</small><strong>Recaudo · Cobranzas y Control Extensivo · Devoluciones</strong></div>
          <ChevronRight size={20} aria-hidden="true" />
          <div><small>Aplicación según competencia</small><strong>Seccional y división habilitada</strong></div>
        </div>
        <p className={styles.disclaimer}>Esta secuencia explica relaciones funcionales de estudio; no representa todos los cargos ni crea competencias que deban derivarse de los actos oficiales.</p>
        <h3>Estructura funcional explicada</h3>
        <p>Abre cada dependencia para estudiar sus responsabilidades, un ejemplo práctico y lo que no debes confundir. Las subdirecciones tributarias están subordinadas en este esquema a Gestión de Impuestos.</p>
        {orgGroups.map((group) => <div key={group} className={styles.orgGroup}>
          <h4>{group === 'Dirección' ? 'Direcciones de gestión y Dirección General' : group === 'Subdirección' ? 'Subdirecciones de Gestión de Impuestos' : group === 'Seccional' ? 'Nivel local' : 'Nivel delegado'}</h4>
          <div className={styles.orgGrid}>{dianOrgNodes.filter((node) => node.group === group).map((node) => <details key={node.id} className={`${styles.orgNode} ${node.group === 'Subdirección' ? styles.orgChild : ''}`}>
            <summary><span><small>{node.parent === 'imp' ? 'Dirección de Gestión de Impuestos' : node.parent === 'dg' ? 'Dirección General' : 'Organización DIAN'}</small><strong>{node.name}</strong></span><ChevronRight size={17}/></summary>
            <div className={styles.orgBody}><p>{node.role}</p><p><strong>Interviene en:</strong> {node.actsOn}</p><p><strong>Ejemplo:</strong> {node.example}</p><p className={styles.orgWarning}><strong>No confundir:</strong> {node.distinction}</p></div>
          </details>)}</div>
        </div>)}
        <h3>¿A dónde se dirige cada caso?</h3><div className={styles.studyStack}>{dianOrgScenarios.map((scenario) => <details key={scenario.title} className={styles.studyCard}>
          <summary><strong>{scenario.title}</strong><span>Ver recorrido</span></summary><div className={styles.studyBody}>
            <p><strong>Situación:</strong> {scenario.request}</p><ol className={styles.lessonSteps}>{scenario.route.map((item) => <li key={item}>{item}</li>)}</ol>
            <p><strong>Razón:</strong> {scenario.rationale}</p><p className={styles.orgWarning}><strong>Precaución:</strong> {scenario.warning}</p>
          </div></details>)}</div>
        <div className={styles.notice}><strong>Regla de examen:</strong><p>Para atribuir una actuación concreta, comprueba materia, función, territorio, delegación y etapa del proceso. Esta estructura es orientadora: las resoluciones de competencia pueden precisar la distribución.</p></div>
        <div className={styles.linkRow}><a className={styles.source} href="https://www.dian.gov.co/dian/entidad/Paginas/Organigrama.aspx" target="_blank" rel="noreferrer">Organigrama oficial y resoluciones <ExternalLink size={16}/></a>
        <a className={styles.source} href="https://normograma.dian.gov.co/dian/compilacion/docs/decreto_1742_2020.htm" target="_blank" rel="noreferrer">Decreto 1742/2020 <ExternalLink size={16}/></a></div>
      </section>}
      {currentTab === 'procesos' && <section className={styles.content}>
        <h2>Procesos explicados de principio a fin</h2>
        <p>Incluye el <strong>mapa institucional 2026</strong> y recorridos tributarios relevantes para Gestor II. Cada ruta describe el propósito, inicio, verificaciones, ejemplos, flujograma visual ampliable y un caso resuelto. Son modelos pedagógicos: no constituyen un flujograma oficial con términos exhaustivos.</p>
        <div className={styles.notice}><strong>Diferencia esencial</strong><p><strong>Organigrama:</strong> quién es competente. <strong>Mapa de procesos:</strong> qué actividad se realiza, con qué apoyos y con qué resultado. Una misma gestión puede requerir coordinación de varias áreas.</p></div>
        {families.map((family) => <div key={family} className={styles.processFamily}><h3>{family}</h3>
          {dianDetailedProcesses.filter((item) => item.family === family).map((process) => {
            const gId = processGraphicById[process.id]
            const procGraphic = gId ? dianVisualAtlasCatalog.find((g) => g.id === gId) : undefined
            return <details key={process.id} className={styles.detailedProcess} open={process.id === 'mapa'}>
            <summary><span className={styles.processTitle}><small>{process.family} · {process.steps.length} etapas de estudio</small><strong>{process.name}</strong><em>{process.goal}</em></span><span className={styles.expand}>Explorar +</span></summary>
            <div className={styles.processBody}><p><strong>¿Qué lo activa?</strong> {process.start}</p><p><strong>Resultado esperado:</strong> {process.outcome}</p>
              {procGraphic ? <div style={{ margin: '14px 0 18px' }}><LessonSupportGraphic graphic={procGraphic} /></div> : null}
              <ol className={styles.processTimeline}>{process.steps.map((step,index) => <li key={step.title}>
                <span className={styles.stepNumber}>{index+1}</span><div><strong>{step.title}</strong><p>{step.why}</p><p className={styles.stepExample}><strong>Ejemplo:</strong> {step.example}</p><p className={styles.stepCheckpoint}><strong>Comprobación:</strong> {step.checkpoint}</p></div>
              </li>)}</ol>
              <ExplainedCase item={process.scenario}/>
              <h4>Errores frecuentes</h4><ul>{process.confusion.map((text) => <li key={text}>{text}</li>)}</ul>
              <div className={styles.linkRow}>{process.sources.map((source) => <a key={source.url} className={styles.source} href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={14}/></a>)}</div>
            </div>
          </details>})}
        </div>)}
      </section>}
      {currentTab === 'glosario' && <section className={styles.content}><h2>Conceptos sin tecnicismos innecesarios</h2><div className={styles.stack}>{dianGlossary.map((item) => <article key={item.term}><strong>{item.term}</strong><p>{item.plain}</p><small>Ejemplo: {item.example}</small></article>)}</div></section>}
      {currentTab === 'casos' && <section className={styles.content}>
        <h2>Entrenamiento PJS de la Biblioteca</h2>
        <p>Ocho situaciones creadas para practicar decisiones con soporte y competencia. Son <strong>ejercicios pedagógicos</strong>, no preguntas oficiales ni afectan tus estadísticas o progreso. En la prueba funcional la GOA describe un caso, un enunciado y tres alternativas.</p>
        <div className={styles.quizStack}>{dianLibraryQuiz.map((item,index) => <article key={item.id} className={styles.quizCard}>
          <small>Caso {index+1} de {dianLibraryQuiz.length} · {item.topic}</small><h3>{item.prompt}</h3>
          <div className={styles.quizOptions}>{item.options.map((option,i) => <button key={option} type="button" aria-pressed={quizAnswers[item.id] === i} className={quizAnswers[item.id] === i ? styles.quizSelected : ''} onClick={() => setQuizAnswers((prev) => ({...prev,[item.id]:i}))}>
            <strong>{'ABC'[i]}.</strong> {option}</button>)}</div>
          {quizAnswers[item.id] !== undefined && <div className={styles.quizFeedback} role="status"><strong>{quizAnswers[item.id] === item.correct ? <CheckCircle2 size={17}/> : <AlertTriangle size={17}/>} {quizAnswers[item.id] === item.correct ? 'Respuesta razonada' : 'Revisa el criterio'}</strong>
            <p>{item.explanation}</p>{quizAnswers[item.id] !== item.correct && <p><strong>Actuación adecuada: {'ABC'[item.correct]}.</strong> {item.options[item.correct]}</p>}<small>Fuente temática: {item.reference}</small></div>}
        </article>)}</div>
        <p className={styles.disclaimer}>No se realizan cálculos psicométricos, puntuaciones oficiales ni claves de autoinforme comportamental.</p>
      </section>}
    </>}
  </div>
}
