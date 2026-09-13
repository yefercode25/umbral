import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, FileSearch, RotateCcw, WalletCards, XCircle } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './RefundDecisionSimulator.module.css'

type RouteId = 'saldo' | 'exceso' | 'no-debido' | 'compensacion'

type Scenario = {
  id: string
  title: string
  fact: string
  route: RouteId
  question: string
  options: { id: string; text: string; correct: boolean; explanation: string }[]
}

const routes: { id: RouteId; label: string; caption: string }[] = [
  { id: 'saldo', label: 'Saldo a favor', caption: 'Nace en una declaración' },
  { id: 'exceso', label: 'Pago en exceso', caption: 'Había deuda, se pagó de más' },
  { id: 'no-debido', label: 'Pago no debido', caption: 'Faltaba causa legal de pago' },
  { id: 'compensacion', label: 'Compensación', caption: 'Cruce contra deuda exigible' },
]

const scenarios: Scenario[] = [
  {
    id: 'origin',
    title: 'La declaración arroja un saldo a favor',
    fact: 'El contribuyente presenta una declaración válida con un saldo a favor y solicita que el valor sea restituido.',
    route: 'saldo',
    question: '¿Cuál es la primera clasificación correcta?',
    options: [
      { id: 'a', text: 'Pago de lo no debido.', correct: false, explanation: 'Aquí sí existe una declaración que origina un saldo a favor; no se parte de ausencia de causa legal del pago.' },
      { id: 'b', text: 'Saldo a favor sujeto al procedimiento de devolución/compensación aplicable.', correct: true, explanation: 'El origen del crédito es la declaración. Esa clasificación define términos, requisitos y verificaciones posteriores.' },
      { id: 'c', text: 'Facilidad de pago.', correct: false, explanation: 'La facilidad de pago pertenece a cartera y presupone una obligación por pagar, no un crédito a favor del contribuyente.' },
    ],
  },
  {
    id: 'overpayment',
    title: 'La obligación era de $5 millones y se pagaron $7 millones',
    fact: 'Existe una obligación jurídicamente exigible, pero el recibo acredita un pago superior al valor debido.',
    route: 'exceso',
    question: '¿Cómo debe clasificarse el origen del valor reclamado?',
    options: [
      { id: 'a', text: 'Pago en exceso.', correct: true, explanation: 'Existía causa legal para pagar, pero se entregó una suma mayor a la que correspondía.' },
      { id: 'b', text: 'Pago de lo no debido.', correct: false, explanation: 'En el pago de lo no debido falta la causa legal que haga exigible el pago.' },
      { id: 'c', text: 'Saldo a favor declarado necesariamente.', correct: false, explanation: 'El excedente puede provenir del pago y no de un saldo liquidado en una declaración.' },
    ],
  },
  {
    id: 'prior-debt',
    title: 'La devolución es procedente, pero existen deudas vencidas del mismo contribuyente',
    fact: 'La certificación de obligaciones evidencia deuda fiscal de plazo vencido antes de materializar la devolución.',
    route: 'compensacion',
    question: '¿Qué regla debe verificarse antes de entregar recursos?',
    options: [
      { id: 'a', text: 'Ignorar las deudas porque la devolución ya fue aprobada.', correct: false, explanation: 'La devolución se materializa teniendo en cuenta la compensación previa cuando concurren los presupuestos legales.' },
      { id: 'b', text: 'Determinar las obligaciones a compensar y reflejarlas correctamente en el acto.', correct: true, explanation: 'La certificación de obligaciones sirve precisamente para establecer el monto y concepto a compensar antes de devolver el remanente cuando corresponda.' },
      { id: 'c', text: 'Convertir automáticamente toda deuda en sanción.', correct: false, explanation: 'Compensar no significa crear una sanción; significa aplicar créditos y deudas conforme a la normativa.' },
    ],
  },
]

export function RefundDecisionSimulator({ title, text }: { title: string; text: string }) {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const scenario = scenarios[scenarioIndex] ?? scenarios[0]!
  const selectedOption = useMemo(() => scenario.options.find((option) => option.id === selected), [scenario, selected])

  const move = (index: number) => {
    setScenarioIndex(index)
    setSelected(null)
  }

  return <section className={styles.wrapper}>
    <header className={styles.heading}>
      <span className={styles.icon}><WalletCards size={18}/></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </header>

    <div className={styles.routeGrid} aria-label="Posibles orígenes y destinos del crédito">
      {routes.map((route) => <div key={route.id} className={`${styles.route} ${route.id === scenario.route ? styles.routeActive : ''}`}>
        <span>{route.id === scenario.route ? <CheckCircle2 size={15}/> : <FileSearch size={15}/>}</span>
        <div><strong>{route.label}</strong><small>{route.caption}</small></div>
      </div>)}
    </div>

    <div className={styles.caseTabs} role="tablist" aria-label="Casos de devolución">
      {scenarios.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={scenarioIndex === index} className={scenarioIndex === index ? styles.tabActive : styles.tab} onClick={() => move(index)}>Caso {index + 1}</button>)}
    </div>

    <motion.div key={scenario.id} className={styles.case} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
      <span className={styles.kicker}>Clasifica antes de tramitar</span>
      <h3>{scenario.title}</h3>
      <p className={styles.fact}>{scenario.fact}</p>
      <h4>{scenario.question}</h4>
      <div className={styles.options}>
        {scenario.options.map((option, index) => {
          const reveal = Boolean(selected)
          const isSelected = selected === option.id
          const className = reveal && option.correct ? styles.correct : reveal && isSelected && !option.correct ? styles.wrong : ''
          return <button type="button" key={option.id} className={`${styles.option} ${isSelected ? styles.selected : ''} ${className}`} disabled={reveal} onClick={() => setSelected(option.id)}>
            <span>{String.fromCharCode(65 + index)}</span><p>{option.text}</p>
            {reveal && option.correct && <CheckCircle2 size={17}/>}
            {reveal && isSelected && !option.correct && <XCircle size={17}/>}
          </button>
        })}
      </div>
      {selectedOption && <motion.div className={selectedOption.correct ? styles.feedbackCorrect : styles.feedbackWrong} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
        <strong>{selectedOption.correct ? 'Clasificación correcta' : 'Revisa el origen del crédito'}</strong>
        <p>{selectedOption.explanation}</p>
      </motion.div>}
      <footer className={styles.footer}>
        <span>{scenarioIndex + 1} de {scenarios.length}</span>
        {selected && scenarioIndex < scenarios.length - 1 && <button type="button" onClick={() => move(scenarioIndex + 1)}>Siguiente caso <ArrowRight size={15}/></button>}
        {selected && scenarioIndex === scenarios.length - 1 && <button type="button" onClick={() => move(0)}><RotateCcw size={15}/> Reiniciar</button>}
      </footer>
    </motion.div>
    <small className={styles.note}>Simulación conceptual. La procedencia real depende del impuesto, origen del crédito, oportunidad, legitimación, soportes, deudas a compensar y demás requisitos aplicables.</small>
  </section>
}
