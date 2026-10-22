import { ArrowRight, BarChart3, BookOpenCheck, ChevronDown, Flame, Layers, Network, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LearningPath } from '../../components/learning/LearningPath'
import { ProgressBar } from '../../components/ui/ProgressBar'
import { courseCompletion, moduleCompletion, nextLesson, publishedLessons } from '../../lib/course'
import { getRequestedCourse } from '../../lib/courses'
import { todayKey } from '../../lib/date'
import { useProgressStore } from '../../stores/progressStore'
import { useSettingsStore } from '../../stores/settingsStore'
import styles from './HomePage.module.css'

const dianMacroBlocks = [
  { id: 'b-fund', label: 'Fundamentos, DIAN y CPACA (M0–M4)', modules: ['m0', 'm1', 'm2', 'm3', 'm4'], color: '#167c80', weightTag: 'Base Institucional' },
  { id: 'b-rec', label: 'Tributo, Cuenta, EAR y Extensivo (M5–M8)', modules: ['m5', 'm6', 'm7', 'm8'], color: '#117db2', weightTag: 'Recaudo y Cuenta' },
  { id: 'b-cob', label: 'Núcleo: Cartera, Coactivo y Concurso (M9–M14)', modules: ['m9', 'm10', 'm11', 'm12', 'm13', 'm14'], color: '#3d8600', weightTag: 'Prioridad CT-CR-3007' },
  { id: 'b-dev', label: 'Núcleo: Devoluciones y Compensaciones (M15–M16)', modules: ['m15', 'm16'], color: '#e5a000', weightTag: 'Prioridad CT-CR-3007' },
  { id: 'b-comp', label: 'Sistemas, MERF, Integridad y PJS (M17–M23)', modules: ['m17', 'm18', 'm19', 'm20', 'm21', 'm22', 'm23'], color: '#8b49bb', weightTag: 'Comportamental y PJS' },
  { id: 'b-trans', label: 'Excel, Datos, Conjuntos y Probabilidad (M24–M28)', modules: ['m24', 'm25', 'm26', 'm27', 'm28'], color: '#cc6600', weightTag: 'Complementario' },
] as const

export function HomePage() {
  const slug = useSettingsStore((state) => state.activeCourseSlug)
  const course = getRequestedCourse(slug)
  const progress = useProgressStore((state) => state.courses[course.id])
  const completion = courseCompletion(course, progress)
  const next = nextLesson(course, progress)
  const todayMinutes = progress?.todayDate === todayKey() ? progress.todayMinutes : 0
  const goal = progress?.dailyGoalMinutes ?? 25
  const isDian = course.id === 'dian-2676-gestor-ii'

  return <div className="page">
    <header className={styles.heading}>
      <div><span className={styles.eyebrow}><Sparkles size={15}/> APRENDE A TU RITMO</span><h1>¡A por tu próxima meta!</h1><p>Tu preparación comienza con un paso. Y después otro.</p></div>
      <Link className={styles.change} to="/courses">Cambiar curso <ChevronDown size={16}/></Link>
    </header>

    <section className={styles.hero} aria-label={`Continuar con ${course.shortTitle}`}>
      <div className={styles.heroCopy}>
        <span className={styles.tag}>🎯 CURSO SELECCIONADO · {course.opec ? `OPEC ${course.opec}` : 'ACTIVO'}</span>
        <h2>{course.shortTitle}</h2>
        <p>{next ? `Tu siguiente lección: ${next.title}` : '¡Has explorado todas las lecciones de este curso!'}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.start} to={next ? `/courses/${course.slug}/lesson/${next.id}` : `/courses/${course.slug}`}>
            {next ? 'CONTINUAR APRENDIENDO' : 'VER MI RUTA'} <ArrowRight size={19}/>
          </Link>
          {isDian && (
            <Link className={styles.atlasLink} to="/library?tab=mapas">
              <Network size={17}/> ATLAS VISUAL Y COMPARATIVAS
            </Link>
          )}
        </div>
      </div>
      <div className={styles.heroArtCard} aria-hidden="true">
        <img src={course.cardArtwork ?? '/media/editorial/home-platform.webp'} alt="" loading="eager" decoding="async" />
      </div>
    </section>

    <div className={styles.stats}>
      <section><BookOpenCheck size={23}/><div><strong>{Object.values(progress?.lessons ?? {}).filter((item) => item.status === 'completed').length}<small>/{publishedLessons(course).length}</small></strong><span>Lecciones</span></div></section>
      <section><Flame size={23}/><div><strong>{todayMinutes}<small>/{goal} min</small></strong><span>Meta de hoy</span></div></section>
      <section><Target size={23}/><div><strong>{completion}%</strong><span>Avance del curso</span></div></section>
    </div>

    {isDian && (
      <section className={styles.dianCockpit} aria-label="Panorama visual del curso DIAN 2676">
        <div className={styles.cockpitHead}>
          <div>
            <span className={styles.cockpitEyebrow}><BarChart3 size={14}/> RADAR VISUAL DE BLOQUES · GESTOR II (CT-CR-3007)</span>
            <h2>Tu avance por bloques curriculares y herramientas visuales</h2>
            <p>Visualiza tu progreso en los 6 grandes bloques del curso y accede en un clic a los mapas conceptuales, gráficas de términos y matrices comparativas.</p>
          </div>
          <div className={styles.examBadges}>
            <span>📅 Prueba: 08/11/2026 (5h)</span>
            <span>⚖️ Corte GOA: 19/06/2026</span>
            <span>🎯 Funcional PJS: mín. 70.00</span>
          </div>
        </div>

        <div className={styles.blockBars}>
          {dianMacroBlocks.map((b) => {
            const pct = Math.round(b.modules.reduce((acc, mId) => acc + moduleCompletion(course, mId, progress), 0) / b.modules.length)
            return (
              <div key={b.id} className={styles.blockBarItem}>
                <div className={styles.blockBarTop}>
                  <strong>{b.label}</strong>
                  <span><em>{b.weightTag}</em> · {pct}%</span>
                </div>
                <div className={styles.blockBarTrack}>
                  <div className={styles.blockBarFill} style={{ width: `${pct}%`, backgroundColor: b.color }} />
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.visualShortcuts}>
          <Link to="/library?tab=mapas" className={styles.shortcutCard}>
            <Network size={20}/>
            <div><strong>Mapa Conceptual y Gráficas</strong><small>6 nodos interactivos, simulador Art. 804/838 ET y 27 infografías HD</small></div>
            <ArrowRight size={16}/>
          </Link>
          <Link to="/library?tab=procesos" className={styles.shortcutCard}>
            <Layers size={20}/>
            <div><strong>10 Procesos con Flujogramas</strong><small>Rutas paso a paso de Cartera, Coactivo, Devoluciones, EAR y Concurso</small></div>
            <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    )}

    <div className={styles.pathHeading}>
      <span>🗺️ TU CAMINO DE APRENDIZAJE</span>
      <h2>Explora, practica y avanza</h2>
      <p>Tu ruta de {course.shortTitle} está organizada en secciones y módulos. Puedes ingresar a todos ellos libremente, sin vidas ni bloqueos.</p>
      <ProgressBar value={completion}/>
    </div>
    <LearningPath course={course} progress={progress}/>
    <div className={styles.moreActions}>
      <Link to={`/practice?course=${course.slug}`}><Target size={19}/> Practicar con preguntas <ArrowRight size={17}/></Link>
      <Link to={`/courses/${course.slug}/plan`}><BookOpenCheck size={19}/> Mi plan de estudio <ArrowRight size={17}/></Link>
    </div>
  </div>
}
