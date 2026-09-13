import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { CalendarClock, RotateCcw } from 'lucide-react'
import styles from './PrescriptionSimulator.module.css'

type Scenario = 'none' | 'mandamiento' | 'facilidad'

const scenarios: Record<Scenario, { label: string; result: string; detail: string; interrupted: boolean }> = {
  none: {
    label: 'Sin evento interruptivo',
    result: 'El término continúa su curso',
    detail: 'En este ejemplo didáctico no agregamos un hecho que interrumpa el término. Aun así, en un expediente real debes verificar el punto de inicio, suspensiones y cualquier otro evento legal relevante.',
    interrupted: false,
  },
  mandamiento: {
    label: 'Notificación del mandamiento',
    result: 'Interrumpe la prescripción',
    detail: 'El artículo 818 contempla la notificación del mandamiento de pago como causal de interrupción. El nuevo cómputo debe analizarse desde el momento previsto por la norma y según los hechos del expediente.',
    interrupted: true,
  },
  facilidad: {
    label: 'Otorgamiento de facilidad',
    result: 'Interrumpe la prescripción',
    detail: 'El artículo 818 también contempla el otorgamiento de facilidades para el pago como causal de interrupción. No confundas la facilidad con extinción de la obligación.',
    interrupted: true,
  },
}

export function PrescriptionSimulator({ title, text }: { title: string; text: string }) {
  const [scenario, setScenario] = useState<Scenario>('none')
  const data = scenarios[scenario]
  const markerPosition = useMemo(() => scenario === 'none' ? 100 : 58, [scenario])

  return <section className={styles.card} aria-labelledby="prescription-simulator-title">
    <header className={styles.header}>
      <span className={styles.icon}><CalendarClock size={19}/></span>
      <div>
        <p className={styles.eyebrow}>Simulación conceptual</p>
        <h3 id="prescription-simulator-title">{title}</h3>
      </div>
    </header>
    <p className={styles.intro}>{text}</p>

    <div className={styles.controls} role="group" aria-label="Selecciona un evento del expediente">
      {(Object.entries(scenarios) as [Scenario, typeof scenarios[Scenario]][]).map(([id, item]) =>
        <button key={id} type="button" aria-pressed={scenario === id} className={scenario === id ? styles.active : ''} onClick={() => setScenario(id)}>{item.label}</button>
      )}
    </div>

    <div className={styles.timeline} aria-label="Línea de tiempo didáctica de cinco años">
      <div className={styles.track}/>
      <div className={styles.start}><span>Inicio</span><small>0</small></div>
      <div className={styles.end}><span>Referencia</span><small>5 años</small></div>
      <motion.div className={styles.marker} animate={{ left: `${markerPosition}%` }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
        <span>{scenario === 'none' ? '5' : '≈ 3'}</span>
      </motion.div>
      {data.interrupted && <motion.div className={styles.restart} initial={{ opacity:0, scaleX:.6 }} animate={{ opacity:1, scaleX:1 }}><RotateCcw size={15}/><span>interrupción</span></motion.div>}
    </div>

    <motion.div key={scenario} className={styles.result} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }}>
      <strong>{data.result}</strong>
      <p>{data.detail}</p>
    </motion.div>
    <small className={styles.disclaimer}>Herramienta pedagógica. No calcula prescripción de expedientes reales: el cómputo depende de las fechas y eventos jurídicos concretos.</small>
  </section>
}
