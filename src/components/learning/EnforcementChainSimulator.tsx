import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, Gavel, RotateCcw, Scale, XCircle } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './EnforcementChainSimulator.module.css'

type StageId = 'embargo' | 'secuestro' | 'avaluo' | 'liquidacion' | 'remate' | 'extincion'

type Scenario = {
  id: string
  title: string
  fact: string
  activeStage: StageId
  question: string
  options: { id: string; text: string; correct: boolean; explanation: string; nextStage?: StageId }[]
}

const stages: { id: StageId; label: string; caption: string }[] = [
  { id: 'embargo', label: 'Embargo', caption: 'Asegura el bien' },
  { id: 'secuestro', label: 'Secuestro', caption: 'Custodia cuando procede' },
  { id: 'avaluo', label: 'Avalúo', caption: 'Fija su valor' },
  { id: 'liquidacion', label: 'Liquidación', caption: 'Cuantifica crédito y costas' },
  { id: 'remate', label: 'Remate', caption: 'Realiza el activo' },
  { id: 'extincion', label: 'Aplicación', caption: 'Pago / extinción' },
]

const scenarios: Scenario[] = [
  {
    id: 'cost-benefit',
    title: 'El bien está embargado, pero secuestrarlo cuesta más de lo que aporta',
    fact: 'La relación costo-beneficio previa a la diligencia resulta negativa.',
    activeStage: 'secuestro',
    question: '¿Cuál es la mejor decisión?',
    options: [
      { id: 'a', text: 'Practicar el secuestro de todas formas.', correct: false, explanation: 'PR-COT-0388 incorpora el análisis costo-beneficio antes de practicar la diligencia.' },
      { id: 'b', text: 'Abstenerse de secuestrar, tramitar el levantamiento de la cautela y continuar la ruta de cartera que corresponda.', correct: true, explanation: 'El procedimiento prevé esta salida cuando el análisis conduce a no practicar el secuestro.', nextStage: 'embargo' },
      { id: 'c', text: 'Declarar extinguida la deuda.', correct: false, explanation: 'Que un bien no sea eficiente para la ejecución no extingue la obligación.' },
    ],
  },
  {
    id: 'value-first',
    title: 'El bien ya fue secuestrado y la ejecución puede continuar',
    fact: 'Existe resolución de seguir adelante notificada y acta de secuestro. Falta determinar el valor del activo.',
    activeStage: 'avaluo',
    question: '¿Qué actuación encaja ahora en la secuencia?',
    options: [
      { id: 'a', text: 'Avalorar el bien y tramitar la aprobación del avalúo.', correct: true, explanation: 'PR-COT-0389 comienza en esta situación y conecta el avalúo aprobado con el remate.', nextStage: 'liquidacion' },
      { id: 'b', text: 'Volver a expedir el mandamiento de pago.', correct: false, explanation: 'El expediente ya se encuentra en una etapa posterior de ejecución.' },
      { id: 'c', text: 'Rematar sin fijar un valor.', correct: false, explanation: 'La realización del bien exige respetar los presupuestos y actuaciones previas aplicables.' },
    ],
  },
  {
    id: 'credit-value',
    title: 'La ejecución está habilitada y debe definirse cuánto se cobra',
    fact: 'La resolución que ordena seguir adelante está ejecutoriada. El expediente debe continuar hacia la realización del activo.',
    activeStage: 'liquidacion',
    question: '¿Qué debe cuantificarse?',
    options: [
      { id: 'a', text: 'Solo el precio comercial del bien.', correct: false, explanation: 'Eso corresponde al avalúo del activo, no a la liquidación del crédito.' },
      { id: 'b', text: 'Capital, intereses causados hasta la fecha de liquidación y costas del proceso.', correct: true, explanation: 'Es la finalidad descrita por PR-COT-0390.', nextStage: 'remate' },
      { id: 'c', text: 'Una nueva obligación distinta a la contenida en el título.', correct: false, explanation: 'La liquidación desarrolla la ejecución de la obligación ya cobrada; no crea otra deuda.' },
    ],
  },
]

export function EnforcementChainSimulator({ title, text }: { title: string; text: string }) {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const scenario = scenarios[scenarioIndex] ?? scenarios[0]!
  const selectedOption = useMemo(() => scenario.options.find((option) => option.id === selected), [scenario, selected])
  const activeIndex = stages.findIndex((stage) => stage.id === scenario.activeStage)

  const move = (index: number) => {
    setScenarioIndex(index)
    setSelected(null)
  }

  return <section className={styles.wrapper}>
    <header className={styles.heading}>
      <span className={styles.icon}><Gavel size={18}/></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </header>

    <div className={styles.stageScroller} aria-label="Cadena de ejecución">
      <div className={styles.stages}>
        {stages.map((stage, index) => {
          const state = index < activeIndex ? styles.done : index === activeIndex ? styles.active : styles.future
          return <div className={`${styles.stage} ${state}`} key={stage.id}>
            <span>{index < activeIndex ? <CheckCircle2 size={16}/> : index + 1}</span>
            <div><strong>{stage.label}</strong><small>{stage.caption}</small></div>
            {index < stages.length - 1 && <ArrowRight className={styles.arrow} size={15}/>}
          </div>
        })}
      </div>
    </div>

    <div className={styles.caseTabs} role="tablist" aria-label="Casos de ejecución">
      {scenarios.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={scenarioIndex === index} className={scenarioIndex === index ? styles.tabActive : styles.tab} onClick={() => move(index)}>Caso {index + 1}</button>)}
    </div>

    <motion.div key={scenario.id} className={styles.case} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
      <div className={styles.caseHeading}><span><Scale size={15}/> Punto de decisión</span><h3>{scenario.title}</h3><p>{scenario.fact}</p></div>
      <h4>{scenario.question}</h4>
      <div className={styles.options}>
        {scenario.options.map((option, index) => {
          const reveal = Boolean(selected)
          const isSelected = selected === option.id
          const className = reveal && option.correct ? styles.correct : reveal && isSelected && !option.correct ? styles.wrong : ''
          return <button type="button" key={option.id} className={`${styles.option} ${isSelected ? styles.selected : ''} ${className}`} disabled={reveal} onClick={() => setSelected(option.id)}>
            <span>{String.fromCharCode(65 + index)}</span>
            <p>{option.text}</p>
            {reveal && option.correct && <CheckCircle2 size={17}/>}
            {reveal && isSelected && !option.correct && <XCircle size={17}/>}
          </button>
        })}
      </div>
      {selectedOption && <motion.div className={selectedOption.correct ? styles.feedbackCorrect : styles.feedbackWrong} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
        <strong>{selectedOption.correct ? 'Secuencia coherente' : 'La etapa no corresponde'}</strong>
        <p>{selectedOption.explanation}</p>
        {selectedOption.correct && selectedOption.nextStage && <small>La ruta puede continuar hacia: {stages.find((stage) => stage.id === selectedOption.nextStage)?.label}.</small>}
      </motion.div>}
      <footer className={styles.footer}>
        <span>{scenarioIndex + 1} de {scenarios.length}</span>
        {selected && scenarioIndex < scenarios.length - 1 && <button type="button" onClick={() => move(scenarioIndex + 1)}>Siguiente caso <ArrowRight size={15}/></button>}
        {selected && scenarioIndex === scenarios.length - 1 && <button type="button" onClick={() => move(0)}><RotateCcw size={15}/> Reiniciar</button>}
      </footer>
    </motion.div>
    <small className={styles.note}>Simulación conceptual basada en la relación entre los procedimientos públicos de secuestro, avalúo, liquidación del crédito, remate y extinción. Cada expediente real puede desviarse por pagos, facilidades, procesos concursales u otras incidencias.</small>
  </section>
}
