import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import { ArrowLeft, ExternalLink, FileCheck2, Search, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { getCourseBySlug } from '../../lib/courses'
import styles from './SourcesPage.module.css'

export function SourcesPage() {
  const { courseSlug } = useParams()
  const course = getCourseBySlug(courseSlug)
  const [query, setQuery] = useState('')
  const [type, setType] = useState<'all' | 'official' | 'reference'>('all')

  const sources = useMemo(() => {
    if (!course) return []
    const normalized = query.trim().toLocaleLowerCase('es')
    return course.sources
      .filter((source) => type === 'all' || source.type === type)
      .filter((source) => !normalized || `${source.title} ${source.publisher} ${source.note ?? ''}`.toLocaleLowerCase('es').includes(normalized))
      .sort((a, b) => a.title.localeCompare(b.title, 'es'))
  }, [course, query, type])

  if (!course) return <div className="page"><p>Curso no encontrado.</p></div>

  return <div className="page page--narrow" style={{ '--course-accent': course.accent } as CSSProperties}>
    <Link to={`/courses/${course.slug}`} className={styles.back}><ArrowLeft size={17}/> Volver al curso</Link>

    <header className={styles.header}>
      <span className={styles.kicker}><ShieldCheck size={15}/> Trazabilidad normativa</span>
      <h1>Fuentes del curso</h1>
      <p>{course.sourceIntro ?? 'Umbral prioriza fuentes oficiales y conserva en las preguntas las referencias utilizadas para verificar el contenido.'}</p>
      <div className={styles.summary}><strong>{course.sources.length}</strong><span>fuentes registradas</span><i/><strong>{course.sources.filter((source) => source.type === 'official').length}</strong><span>oficiales</span></div>
    </header>

    <div className={styles.controls}>
      <label className={styles.search}><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar norma, guía, procedimiento o entidad" aria-label="Buscar fuentes"/></label>
      <div className={styles.filters} aria-label="Filtrar fuentes">
        <button className={type === 'all' ? styles.active : ''} onClick={() => setType('all')}>Todas</button>
        <button className={type === 'official' ? styles.active : ''} onClick={() => setType('official')}>Oficiales</button>
        <button className={type === 'reference' ? styles.active : ''} onClick={() => setType('reference')}>Referencia</button>
      </div>
    </div>

    <div className={styles.list}>
      {sources.map((source) => <article key={source.id} className={styles.source}>
        <span className={styles.sourceIcon}><FileCheck2 size={18}/></span>
        <div className={styles.sourceBody}>
          <div className={styles.sourceMeta}><span>{source.publisher}</span><span className={source.type === 'official' ? styles.official : styles.reference}>{source.type === 'official' ? 'Oficial' : 'Referencia'}</span></div>
          <h2>{source.title}</h2>
          {source.note && <p>{source.note}</p>}
          <small>Verificada en Umbral: {source.verifiedAt}</small>
        </div>
        <a className={styles.external} href={source.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${source.title}`}><ExternalLink size={17}/></a>
      </article>)}
      {sources.length === 0 && <div className={styles.empty}><Search size={20}/><strong>No encontramos esa fuente</strong><p>Prueba con otro término o cambia el filtro.</p></div>}
    </div>

    <aside className={styles.note}><strong>Cómo usar esta biblioteca</strong><p>No necesitas memorizar cada documento completo. Usa la lección para construir el modelo mental y abre la fuente cuando necesites verificar la regla, ampliar contexto o revisar el texto vigente. En procedimiento, aprende primero finalidad y secuencia; después consolida términos, recursos y excepciones.</p></aside>
  </div>
}
