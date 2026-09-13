import { Download, Monitor, Moon, RotateCcw, Sun, Upload } from 'lucide-react'
import { useRef } from 'react'
import { dianGestorCourse } from '../../../content/courses/dian-2676-gestor-ii/course'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { createBackup, restoreBackup } from '../../lib/backup'
import { useProgressStore } from '../../stores/progressStore'
import { type ThemePreference, useSettingsStore } from '../../stores/settingsStore'
import styles from './SettingsPage.module.css'

export function SettingsPage() {
  const theme = useSettingsStore((s) => s.theme)
  const setTheme = useSettingsStore((s) => s.setTheme)
  const reducedMotion = useSettingsStore((s) => s.reducedMotion)
  const setReducedMotion = useSettingsStore((s) => s.setReducedMotion)
  const resetCourse = useProgressStore((s) => s.resetCourse)
  const setDailyGoal = useProgressStore((s) => s.setDailyGoal)
  const courseProgress = useProgressStore((s) => s.courses[dianGestorCourse.id])
  const fileRef = useRef<HTMLInputElement>(null)

  const exportProgress = () => {
    const payload = createBackup()
    const blob = new Blob([JSON.stringify(payload,null,2)],{type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href=url; a.download=`umbral-backup-${new Date().toISOString().slice(0,10)}.json`; a.click()
    URL.revokeObjectURL(url)
  }

  const importProgress = async (file: File) => {
    const text = await file.text()
    try {
      restoreBackup(JSON.parse(text) as unknown)
      window.location.reload()
    } catch { window.alert('El archivo no parece ser un respaldo válido o compatible de Umbral.') }
  }

  const themeOptions: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
    {value:'system',label:'Sistema',icon:Monitor},{value:'light',label:'Claro',icon:Sun},{value:'dark',label:'Oscuro',icon:Moon}
  ]

  return <div className="page page--narrow">
    <PageHeader eyebrow="Preferencias" title="Ajustes" subtitle="La configuración y el progreso viven en este dispositivo. Puedes exportarlos antes de limpiar datos o cambiar de equipo." />
    <section className={styles.section}><div className={styles.sectionTitle}><h2>Apariencia</h2><p>Por defecto Umbral sigue la configuración del sistema.</p></div><div className={styles.themeGrid}>{themeOptions.map(({value,label,icon:Icon}) => <button key={value} className={theme===value?styles.selected:''} onClick={() => setTheme(value)}><Icon size={19}/><span>{label}</span></button>)}</div></section>

    <section className={styles.section}><div className={styles.sectionTitle}><h2>Meta diaria</h2><p>Elige una meta realista. Umbral contabiliza el tiempo estimado de una lección cuando la completas por primera vez.</p></div><div className={styles.goalGrid}>{[15,25,40,60].map((minutes) => <button key={minutes} className={(courseProgress?.dailyGoalMinutes ?? 25)===minutes?styles.goalSelected:''} onClick={() => setDailyGoal(dianGestorCourse, minutes)}><strong>{minutes}</strong><span>min</span></button>)}</div></section>
    <section className={styles.section}><div className={styles.row}><div><h2>Reducir movimiento</h2><p>Evita transiciones no esenciales. También se respeta la preferencia del sistema.</p></div><button className={styles.toggle} aria-pressed={reducedMotion==='reduce'} onClick={() => setReducedMotion(reducedMotion==='reduce'?'system':'reduce')}><span/></button></div></section>
    <section className={styles.section}><div className={styles.sectionTitle}><h2>Respaldo local</h2><p>Exporta el progreso como JSON o restaura un respaldo previo.</p></div><div className={styles.actions}><Button variant="secondary" icon={<Download size={16}/>} onClick={exportProgress}>Exportar respaldo</Button><Button variant="secondary" icon={<Upload size={16}/>} onClick={() => fileRef.current?.click()}>Importar respaldo</Button><input ref={fileRef} className="visually-hidden" type="file" accept="application/json" onChange={(e) => { const f=e.target.files?.[0]; if(f) void importProgress(f) }}/></div></section>

    <section className={styles.section}>
      <div className={styles.sectionTitle}><h2>Umbral en tu dispositivo</h2><p>La PWA conserva el estudio esencial sin conexión y recibe actualizaciones mediante aviso, sin interrumpir una actividad en curso.</p></div>
      <div className={styles.pwaPanel}>
        <img className={styles.pwaArt} src="/media/editorial/pwa-everywhere.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className={styles.pwaCopy}><strong>Instalable · offline-first</strong><span>Instala Umbral desde el menú de tu navegador compatible. El progreso crítico permanece local y puedes respaldarlo desde esta misma pantalla.</span></div>
      </div>
      <div className={styles.brandPanel} aria-label="Identidad visual de Umbral">
        <div className={styles.wordmarkWrap}><img src="/media/brand/wordmark.webp" alt="Umbral" loading="lazy" decoding="async" /></div>
        <div className={styles.brandIcons} aria-label="Variantes de icono">
          <img src="/media/brand/app-teal.webp" alt="Icono turquesa de Umbral" loading="lazy" decoding="async" />
          <img src="/media/brand/app-light.webp" alt="Icono claro de Umbral" loading="lazy" decoding="async" />
          <img src="/media/brand/app-dark.webp" alt="Icono oscuro de Umbral" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.danger}`}><div className={styles.sectionTitle}><h2>Reiniciar curso DIAN</h2><p>Borra únicamente el progreso local del curso {dianGestorCourse.shortTitle}. El contenido no se elimina.</p></div><Button variant="danger" icon={<RotateCcw size={16}/>} onClick={() => { if(window.confirm('¿Reiniciar todo el progreso de este curso?')) resetCourse(dianGestorCourse.id) }}>Reiniciar progreso</Button></section>
  </div>
}
