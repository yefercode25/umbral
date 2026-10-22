import { useState } from 'react'
import { BookOpen, Check, ChevronRight, Eye, LockKeyhole, Play, Star, Target, Trophy, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course, CourseUnit } from '../../types/course'
import type { CourseProgress } from '../../types/progress'
import { moduleCompletion } from '../../lib/course'
import styles from './LearningPath.module.css'

const symbols = [BookOpen, Target, Star, Trophy] as const
const colorNames = ['green', 'blue', 'gold', 'purple', 'orange'] as const

export function LearningPath({ course, progress }: { course: Course; progress?: CourseProgress | undefined }) {
  // This is presentation only: the original order, IDs and destinations remain untouched.
  const orderedUnits = [...course.units].sort((a, b) => a.order - b.order)
  const firstPendingId = orderedUnits.flatMap((unit) => unit.moduleIds)
    .find((id) => course.modules.some((module) => module.id === id && module.status === 'published') && course.lessons.some((lesson) => lesson.moduleId === id && lesson.status === 'published') && moduleCompletion(course, id, progress) < 100)

  return <div className={styles.units} aria-label={`Ruta de aprendizaje de ${course.shortTitle}`}>
    {orderedUnits.map((unit, unitIndex) => <UnitPath key={unit.id} course={course} unit={unit} progress={progress} index={unitIndex} activeId={firstPendingId} />)}
  </div>
}

function UnitPath({ course, unit, progress, index, activeId }: { course: Course; unit: CourseUnit; progress?: CourseProgress | undefined; index: number; activeId?: string | undefined }) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const tint = colorNames[index % colorNames.length]!
  const modules = unit.moduleIds.map((id) => course.modules.find((item) => item.id === id)).filter((item) => item !== undefined)
  const done = modules.filter((module) => moduleCompletion(course, module.id, progress) === 100).length
  return <section className={styles.unit} aria-labelledby={`unit-${unit.id}`}>
    <div className={`${styles.banner} ${styles[tint]}`}>
      <div className={styles.bannerText}>
        <span>SECCIÓN {String(unit.order).padStart(2, '0')} · {done}/{modules.length} MÓDULOS</span>
        <h2 id={`unit-${unit.id}`}>{unit.title}</h2>
        <p>{unit.description}</p>
        {unit.artwork ? (
          <button type="button" className={styles.unitMapBtn} onClick={() => setPreviewOpen(true)}>
            <Eye size={14}/> Ver mapa visual de la sección
          </button>
        ) : null}
      </div>
      {unit.artwork ? (
        <button type="button" className={styles.bannerThumbWrap} onClick={() => setPreviewOpen(true)} aria-label={`Ampliar mapa visual de ${unit.title}`}>
          <img src={unit.artwork} alt={unit.artworkAlt ?? unit.title} loading="lazy" decoding="async" className={styles.bannerThumb} />
          <span className={styles.thumbZoom}>↗</span>
        </button>
      ) : (
        <span className={styles.bannerIcon} aria-hidden="true">{['🌱','📘','⭐','🧠','🚀'][index % 5]}</span>
      )}
    </div>

    {previewOpen && unit.artwork ? (
      <div className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-label={`Mapa visual de ${unit.title}`} onClick={() => setPreviewOpen(false)}>
        <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHead}>
            <div>
              <span>SECCIÓN {String(unit.order).padStart(2, '0')} · MAPA DE ORIENTACIÓN</span>
              <strong>{unit.title}</strong>
            </div>
            <button type="button" onClick={() => setPreviewOpen(false)} aria-label="Cerrar mapa visual">
              <X size={18}/>
            </button>
          </div>
          <div className={styles.modalBody}>
            <img src={unit.artwork} alt={unit.artworkAlt ?? unit.title} className={styles.modalImg} />
          </div>
        </div>
      </div>
    ) : null}

    <div className={styles.path}>
      {modules.map((module, moduleIndex) => {
        const completion = moduleCompletion(course, module.id, progress)
        const current = module.id === activeId
        const finished = completion === 100
        const available = module.status === 'published' && course.lessons.some((lesson) => lesson.moduleId === module.id && lesson.status === 'published')
        const Icon = symbols[moduleIndex % symbols.length]!
        const className = `${styles.node} ${finished ? styles.completed : current ? styles.current : available ? styles.upcoming : styles.unavailable}`
        const content = <>
          {current && <span className={styles.startHere}>¡CONTINÚA AQUÍ!</span>}
          <span className={styles.nodeBody}>
            <span className={styles.round}>{finished ? <Check size={31} strokeWidth={3.4}/> : !available ? <LockKeyhole size={26}/> : current ? <Play size={28} fill="currentColor"/> : <Icon size={29} strokeWidth={2.9}/>}</span>
            {completion > 0 && completion < 100 && <span className={styles.nodeProgress}>{completion}%</span>}
          </span>
          <span className={styles.nodeTitle}><strong>{module.title}</strong><small>{module.code}{finished ? ' · Completado' : current ? ' · Siguiente paso' : ''}</small></span>
        </>
        return <div key={module.id} className={`${styles.nodeWrapper} ${styles[`offset${moduleIndex % 5}`]}`} id={current ? 'continue-here' : undefined}>
          {available ? <Link className={className} to={`/courses/${course.slug}/module/${module.id}`} aria-label={`${module.title}, ${finished ? 'completado' : `${completion}% completado`}. Abrir módulo`}>{content}</Link> : <div className={className} aria-label={`${module.title}, en preparación`}>{content}</div>}
          {available && current && <Link className={styles.quickStart} to={`/courses/${course.slug}/module/${module.id}`}>EMPEZAR <ChevronRight size={17}/></Link>}
        </div>
      })}
    </div>
    <div className={styles.unitEnd}><Star size={15}/><span>{done === modules.length ? '¡Sección completada!' : `${modules.length - done} módulos por completar en esta sección`}</span></div>
  </section>
}
