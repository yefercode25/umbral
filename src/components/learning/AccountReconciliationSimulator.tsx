import { useMemo, useState } from 'react'
import { CheckCircle2, FileSearch2, RotateCcw, XCircle } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './AccountReconciliationSimulator.module.css'

type LedgerRow = { document: string; registered: string; evidence: string; state: 'ok' | 'warning' | 'neutral' }
type Scenario = {
  id: string
  label: string
  title: string
  rows: LedgerRow[]
  prompt: string
  options: { id: string; text: string; correct: boolean; explanation: string }[]
}

const scenarios: Scenario[] = [
  {
    id: 'misapplied-payment',
    label: 'Pago',
    title: 'El pago existe, pero la cuenta todavía muestra deuda',
    rows: [
      { document: 'Declaración', registered: 'Obligación registrada', evidence: 'Valor y período identificados', state: 'ok' },
      { document: 'Recibo de pago', registered: 'Pago recibido', evidence: 'Soporte coincide con valor y período', state: 'ok' },
      { document: 'Estado de cuenta', registered: 'Saldo pendiente', evidence: 'No refleja el pago soportado', state: 'warning' },
    ],
    prompt: '¿Cuál es el primer enfoque correcto?',
    options: [
      { id: 'a', text: 'Iniciar cobro coactivo por el saldo que aparece en pantalla.', correct: false, explanation: 'Antes debes depurar la inconsistencia. El sistema no reemplaza la verificación de los soportes.' },
      { id: 'b', text: 'Tramitar la corrección o reproceso con soporte y verificar después el estado de cuenta.', correct: true, explanation: 'La evidencia apunta a un problema de información, no necesariamente a una deuda real pendiente.' },
      { id: 'c', text: 'Eliminar la declaración original para que la cuenta quede en cero.', correct: false, explanation: 'Eliminar la fuente de la obligación no es una forma válida de corregir la asociación del pago.' },
    ],
  },
  {
    id: 'real-debt',
    label: 'Deuda',
    title: 'La obligación y el saldo pendiente cuentan la misma historia',
    rows: [
      { document: 'Declaración', registered: 'Obligación registrada', evidence: 'Documento válido', state: 'ok' },
      { document: 'Pagos', registered: 'Sin pago aplicado', evidence: 'No se aporta soporte de pago', state: 'neutral' },
      { document: 'Estado de cuenta', registered: 'Saldo pendiente', evidence: 'Consistente con la obligación', state: 'ok' },
    ],
    prompt: '¿Qué error debes evitar?',
    options: [
      { id: 'a', text: 'Clasificar la obligación y verificar exigibilidad antes de remitir a la gestión de cobro.', correct: false, explanation: 'Ese es precisamente el enfoque adecuado.' },
      { id: 'b', text: 'Usar el procedimiento de corrección solo para hacer desaparecer el saldo.', correct: true, explanation: 'La corrección sirve para inconsistencias. No debe utilizarse para borrar una obligación real.' },
      { id: 'c', text: 'Comprobar si existen novedades que afecten exigibilidad, prescripción o una facilidad.', correct: false, explanation: 'Esa revisión es pertinente antes de escoger la ruta de cobro.' },
    ],
  },
  {
    id: 'duplicate-record',
    label: 'Duplicado',
    title: 'Un mismo soporte parece haber generado dos efectos en la cuenta',
    rows: [
      { document: 'Recibo', registered: 'Pago identificado', evidence: 'Un único soporte', state: 'ok' },
      { document: 'Movimiento A', registered: 'Aplicación del pago', evidence: 'Coincide con el soporte', state: 'ok' },
      { document: 'Movimiento B', registered: 'Segundo registro', evidence: 'No existe segundo soporte', state: 'warning' },
    ],
    prompt: '¿Qué criterio debe gobernar la decisión?',
    options: [
      { id: 'a', text: 'La realidad documentada y la trazabilidad: comprobar el duplicado antes de corregir.', correct: true, explanation: 'Primero se confirma qué ocurrió y luego se corrige dejando evidencia del cambio.' },
      { id: 'b', text: 'Conservar ambos movimientos porque el sistema los aceptó.', correct: false, explanation: 'La calidad de la información exige confrontar el registro con la evidencia.' },
      { id: 'c', text: 'Crear un tercer movimiento para equilibrar la cuenta sin documentar el motivo.', correct: false, explanation: 'Eso aumentaría la inconsistencia y destruiría trazabilidad.' },
    ],
  },
]

export function AccountReconciliationSimulator({ title, text }: { title: string; text: string }) {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const scenario = scenarios[scenarioIndex] ?? scenarios[0]!
  const selectedOption = useMemo(() => scenario.options.find((option) => option.id === selected), [scenario, selected])

  const move = (index: number) => {
    setScenarioIndex(index)
    setSelected(null)
  }

  return <section className={styles.wrapper}>
    <div className={styles.heading}><span><FileSearch2 size={18}/></span><div><strong>{title}</strong><p>{text}</p></div></div>
    <div className={styles.tabs} role="tablist" aria-label="Casos del estado de cuenta">
      {scenarios.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={index === scenarioIndex} className={index === scenarioIndex ? styles.tabActive : styles.tab} onClick={() => move(index)}>{item.label}</button>)}
    </div>
    <motion.div key={scenario.id} className={styles.panel} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
      <div className={styles.caseHead}><span>Conciliación didáctica</span><h3>{scenario.title}</h3></div>
      <div className={styles.ledger}>
        <div className={styles.ledgerHead}><span>Registro</span><span>Sistema</span><span>Evidencia</span></div>
        {scenario.rows.map((row) => <div className={styles.row} key={`${scenario.id}-${row.document}`}><strong>{row.document}</strong><span>{row.registered}</span><span className={styles[row.state]}>{row.evidence}</span></div>)}
      </div>
      <h4>{scenario.prompt}</h4>
      <div className={styles.options}>
        {scenario.options.map((option, index) => {
          const reveal = Boolean(selected)
          const isSelected = selected === option.id
          const state = reveal && option.correct ? styles.correct : reveal && isSelected && !option.correct ? styles.wrong : ''
          return <button type="button" key={option.id} disabled={reveal} className={`${styles.option} ${isSelected ? styles.selected : ''} ${state}`} onClick={() => setSelected(option.id)}>
            <span>{String.fromCharCode(65 + index)}</span><p>{option.text}</p>{reveal && option.correct && <CheckCircle2 size={17}/>} {reveal && isSelected && !option.correct && <XCircle size={17}/>}
          </button>
        })}
      </div>
      {selectedOption && <motion.div className={selectedOption.correct ? styles.feedbackCorrect : styles.feedbackWrong} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}><strong>{selectedOption.correct ? 'Buen diagnóstico' : 'Revisa la naturaleza del problema'}</strong><p>{selectedOption.explanation}</p></motion.div>}
      <div className={styles.footer}><span>{scenarioIndex + 1} / {scenarios.length}</span>{selected && scenarioIndex < scenarios.length - 1 && <button type="button" onClick={() => move(scenarioIndex + 1)}>Siguiente caso</button>}{selected && scenarioIndex === scenarios.length - 1 && <button type="button" onClick={() => move(0)}><RotateCcw size={15}/> Reiniciar</button>}</div>
    </motion.div>
    <small className={styles.note}>Los valores son ficticios. El objetivo es entrenar la diferencia entre inconsistencia de información y obligación realmente pendiente.</small>
  </section>
}
