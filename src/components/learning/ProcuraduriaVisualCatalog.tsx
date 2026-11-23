
import { useMemo, useState } from 'react'
import { BookOpen, ExternalLink, FileImage, ListFilter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types/course'
import { getProcuraduriaLessonVisual } from '../../lib/procuraduriaLessonVisuals'
import styles from './ProcuraduriaVisualCatalog.module.css'

const labels = ['Conceptos', 'Aplicación', 'Caso'] as const

export function ProcuraduriaVisualCatalog({ course }: { course: Course }) {
  const [filter, setFilter] = useState('')
  const normalized = filter.toLocaleLowerCase('es').trim()
  const modules = useMemo(() => course.modules.filter((module) =>
    !normalized || [module.code, module.title, module.description,
      course.units.find((unit) => unit.id === module.unitId)?.title ?? '']
      .join(' ').toLocaleLowerCase('es').includes(normalized)
  ), [course, normalized])
  return <section className={styles.catalog} aria-label="Atlas visual de Procuraduría">
    <div className={styles.heading}>
      <div className={styles.icon}><FileImage size={23} aria-hidden="true"/></div>
      <div>
        <h2>Atlas visual · Procuraduría 104-2026</h2>
        <p>255 gráficos específicos: conceptos, procedimientos y situaciones de los 85 módulos. Se abren solo cuando los necesitas.</p>
      </div>
    </div>
    <label className={styles.search}><Search size={19} aria-hidden="true"/><input type="search" value={filter} onChange={event => setFilter(event.target.value)} placeholder="Buscar módulo o tema" aria-label="Buscar esquemas de Procuraduría"/></label>
    <p className={styles.count}><ListFilter size={15} aria-hidden="true"/>{modules.length} módulos encontrados · {modules.length * 3} gráficos</p>
    <div className={styles.units}>
      {course.units.map((unit) => {
        const unitModules = modules.filter((module) => module.unitId === unit.id)
        if (!unitModules.length) return null
        return <details key={unit.id} className={styles.unit}>
          <summary><span>{unit.title}</span><small>{unitModules.length} módulos</small></summary>
          <div className={styles.moduleList}>
            {unitModules.map(module => <div key={module.id} className={styles.module}>
              <div><strong>{module.code} · {module.title}</strong><Link to={`/courses/${course.slug}/module/${module.id}`}><BookOpen size={14} aria-hidden="true"/> Ir al módulo</Link></div>
              <div className={styles.links}>{([1, 2, 3] as const).map((order) => {
                const visual = getProcuraduriaLessonVisual(module.id, order)
                return visual && <a key={order} href={visual.image} target="_blank" rel="noopener noreferrer">{labels[order - 1]} <ExternalLink size={14} aria-hidden="true"/></a>
              })}</div>
            </div>)}
          </div>
        </details>
      })}
    </div>
    {!modules.length && <p className={styles.empty}>No hay módulos con ese término de búsqueda.</p>}
  </section>
}
