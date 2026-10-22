import { Download, Monitor, Moon, RotateCcw, Sun, Upload } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { createBackup, restoreBackup } from '../../lib/backup'
import { courses } from '../../lib/courses'
import { useProgressStore } from '../../stores/progressStore'
import { type ThemePreference, useSettingsStore } from '../../stores/settingsStore'
import styles from './SettingsPage.module.css'

export function SettingsPage() {
  const theme = useSettingsStore((state) => state.theme)
  const setTheme = useSettingsStore((state) => state.setTheme)
  const reducedMotion = useSettingsStore((state) => state.reducedMotion)
  const setReducedMotion = useSettingsStore((state) => state.setReducedMotion)
  const resetCourse = useProgressStore((state) => state.resetCourse)
  const setDailyGoal = useProgressStore((state) => state.setDailyGoal)
  const progressByCourse = useProgressStore((state) => state.courses)
  const fileRef = useRef<HTMLInputElement>(null)

  const exportProgress = () => {
    const payload = createBackup()
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `umbral-backup-${new Date().toISOString().slice(0, 10)}.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const importProgress = async (file: File) => {
    const text = await file.text()
    try {
      restoreBackup(JSON.parse(text) as unknown)
      window.location.reload()
    } catch {
      window.alert('El archivo no parece ser un respaldo válido o compatible de Umbral.')
    }
  }

  const themeOptions: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
    { value: 'system', label: 'Sistema', icon: Monitor },
    { value: 'light', label: 'Claro', icon: Sun },
    { value: 'dark', label: 'Oscuro', icon: Moon },
  ]

  return <div className="page page--narrow">
    <PageHeader eyebrow="Preferencias" title="Ajustes" subtitle="La configuración y el progreso viven en este dispositivo. Cada curso conserva su meta y progreso de manera independiente." />

    <section className={styles.section}><div className={styles.sectionTitle}><h2>Apariencia</h2><p>Por defecto Umbral sigue la configuración del sistema.</p></div><div className={styles.themeGrid}>{themeOptions.map(({ value, label, icon: Icon }) => <button key={value} className={theme === value ? styles.selected : ''} onClick={() => setTheme(value)}><Icon size={19}/><span>{label}</span></button>)}</div></section>

    <section className={styles.section}>
      <div className={styles.sectionTitle}><h2>Metas diarias por curso</h2><p>El tiempo completado se contabiliza dentro del curso correspondiente. Puedes exigir más carga en una convocatoria sin alterar la otra.</p></div>
      <div className={styles.courseSettings}>
        {courses.map((course) => {
          const courseProgress = progressByCourse[course.id]
          const currentGoal = courseProgress?.dailyGoalMinutes ?? 25
          return <article className={styles.courseSetting} key={course.id}>
            <div><span>{course.subtitle}</span><strong>{course.shortTitle}</strong></div>
            <div className={styles.goalGrid}>{[15,25,40,60].map((minutes) => <button key={minutes} className={currentGoal === minutes ? styles.goalSelected : ''} onClick={() => setDailyGoal(course, minutes)}><strong>{minutes}</strong><span>min</span></button>)}</div>
          </article>
        })}
      </div>
    </section>

    <section className={styles.section}><div className={styles.row}><div><h2>Reducir movimiento</h2><p>Evita transiciones no esenciales. También se respeta la preferencia del sistema.</p></div><button className={styles.toggle} aria-pressed={reducedMotion === 'reduce'} onClick={() => setReducedMotion(reducedMotion === 'reduce' ? 'system' : 'reduce')}><span/></button></div></section>

    <section className={styles.section}><div className={styles.sectionTitle}><h2>Respaldo local</h2><p>Exporta todos los cursos, sus simulacros y las asociaciones de indicadores DIAN, además de las preferencias, como JSON; o restaura un respaldo previo.</p></div><div className={styles.actions}><Button variant="secondary" icon={<Download size={16}/>} onClick={exportProgress}>Exportar respaldo</Button><Button variant="secondary" icon={<Upload size={16}/>} onClick={() => fileRef.current?.click()}>Importar respaldo</Button><input ref={fileRef} className="visually-hidden" type="file" accept="application/json" onChange={(event) => { const file = event.target.files?.[0]; if (file) void importProgress(file) }}/></div></section>

    <section className={styles.section}>
      <div className={styles.sectionTitle}><h2>Umbral en tu dispositivo</h2><p>La PWA conserva el estudio esencial sin conexión y recibe actualizaciones mediante aviso, sin interrumpir una actividad en curso.</p></div>
      <div className={styles.pwaPanel}>
        <img className={styles.pwaArt} src="/media/editorial/pwa-everywhere.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className={styles.pwaCopy}><strong>Instalable · offline-first</strong><span>Instala Umbral desde el menú de tu navegador compatible. El progreso crítico permanece local y puedes respaldarlo desde esta misma pantalla.</span></div>
      </div>
      <div className={styles.brandPanel} aria-label="Identidad visual de Umbral">
        <div className={styles.wordmarkWrap}><img src="/media/brand/wordmark.webp" alt="Umbral" loading="lazy" decoding="async" /></div>
        <div className={styles.brandIcons} aria-label="Variantes de icono">
          <img src="/media/brand/app-light.webp" alt="Icono principal claro de Umbral" loading="lazy" decoding="async" />
          <img src="/media/brand/app-teal.webp" alt="Variante verde de Umbral" loading="lazy" decoding="async" />
          <img src="/media/brand/app-dark.webp" alt="Variante oscura de Umbral" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.danger}`}>
      <div className={styles.sectionTitle}><h2>Reiniciar progreso</h2><p>El borrado es independiente por curso. No elimina contenido ni afecta otra convocatoria.</p></div>
      <div className={styles.resetList}>{courses.map((course) => <div key={course.id}><span><strong>{course.shortTitle}</strong><small>{course.subtitle}</small></span><Button variant="danger" icon={<RotateCcw size={16}/>} onClick={() => { if (window.confirm(`¿Reiniciar todo el progreso de ${course.shortTitle}?`)) resetCourse(course.id) }}>Reiniciar</Button></div>)}</div>
    </section>
  </div>
}
