import { useMemo, useState } from 'react'
import { ArrowRight, Building2, CheckCircle2, FileSearch2, RotateCcw, Scale, XCircle } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './ConcursalDecisionSimulator.module.css'

type StageId = 'noticia' | 'depuracion' | 'intervencion' | 'decision' | 'cierre'

type Scenario = {
  id: string
  title: string
  fact: string
  activeStage: StageId
  question: string
  options: { id: string; text: string; correct: boolean; explanation: string }[]
}

const stages: { id: StageId; label: string; caption: string }[] = [
  { id: 'noticia', label: 'Noticia', caption: 'Identificar proceso y autoridad' },
  { id: 'depuracion', label: 'Depurar', caption: 'Acreencia veraz y soportada' },
  { id: 'intervencion', label: 'Intervenir', caption: 'Reclamar, objetar, defender' },
  { id: 'decision', label: 'Decisión', caption: 'Acuerdo, liquidación o adjudicación' },
  { id: 'cierre', label: 'Cierre', caption: 'Pago, adjudicación o extinción' },
]

const scenarios: Scenario[] = [
  {
    id: 'bad-data',
    title: 'El sistema muestra una deuda, pero existen pagos sin aplicar',
    fact: 'La DIAN recibe noticia de un proceso concursal. Antes de presentar la acreencia, el expediente muestra diferencias entre declaraciones, recibos y el saldo del aplicativo.',
    activeStage: 'depuracion',
    question: '¿Qué decisión protege mejor el crédito fiscal?',
    options: [
      { id: 'a', text: 'Presentar inmediatamente el saldo del aplicativo y corregirlo después.', correct: false, explanation: 'La intervención concursal exige información confiable. Sostener una cifra no depurada puede afectar reconocimiento, graduación o defensa del crédito.' },
      { id: 'b', text: 'Depurar las inconsistencias por los procedimientos aplicables antes de sostener la acreencia.', correct: true, explanation: 'Los procedimientos concursales DIAN remiten expresamente a corrección o actualización cuando encuentran desajustes de saldos, declaraciones, pagos o aplicativos.' },
      { id: 'c', text: 'Eliminar toda la cartera porque la apertura concursal extingue las obligaciones.', correct: false, explanation: 'El concurso modifica el escenario de cobro, pero no extingue automáticamente el crédito fiscal.' },
    ],
  },
  {
    id: 'objection',
    title: 'Una objeción de tercero afecta la prelación del crédito fiscal',
    fact: 'Dentro del trámite de adjudicación o liquidación, otro acreedor formula una objeción que puede reducir o desplazar la posición reconocida a la DIAN.',
    activeStage: 'intervencion',
    question: '¿Cuál es la respuesta institucional más adecuada?',
    options: [
      { id: 'a', text: 'No intervenir porque las objeciones son un asunto exclusivo entre particulares.', correct: false, explanation: 'La DIAN participa precisamente para defender el crédito fiscal y su prelación cuando se ven afectados.' },
      { id: 'b', text: 'Responder y soportar la posición fiscal dentro de la oportunidad y el mecanismo del proceso.', correct: true, explanation: 'Los procedimientos institucionales contemplan descorrer traslados, objetar y asistir a reuniones o audiencias cuando el crédito fiscal resulte afectado.' },
      { id: 'c', text: 'Iniciar un nuevo mandamiento de pago contra todos los acreedores.', correct: false, explanation: 'La controversia debe atenderse dentro del proceso concursal correspondiente, no creando un cobro coactivo contra terceros ajenos a la obligación.' },
    ],
  },
  {
    id: 'asset',
    title: 'Se propone adjudicar un bien para pagar la acreencia',
    fact: 'El proyecto de adjudicación incluye un activo cuya comerciabilidad, titularidad y relación costo-beneficio todavía no han sido verificadas.',
    activeStage: 'decision',
    question: '¿Qué actuación es más consistente con la gestión DIAN?',
    options: [
      { id: 'a', text: 'Aceptar el bien sin revisión porque toda adjudicación extingue la deuda de forma favorable.', correct: false, explanation: 'La recepción de bienes exige análisis técnico y jurídico; una adjudicación inconveniente puede trasladar costos o riesgos a la entidad.' },
      { id: 'b', text: 'Verificar inventario, titularidad y viabilidad técnica antes de consolidar la decisión sobre el bien.', correct: true, explanation: 'El procedimiento de adjudicación contempla revisión del inventario y conceptos de viabilidad para bienes muebles, intangibles e inmuebles.' },
      { id: 'c', text: 'Convertir automáticamente el bien en depósito judicial.', correct: false, explanation: 'Adjudicación de bienes y depósitos judiciales son instituciones distintas con procedimientos diferentes.' },
    ],
  },
]

export function ConcursalDecisionSimulator({ title, text }: { title: string; text: string }) {
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
      <span className={styles.icon}><Building2 size={18}/></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </header>

    <div className={styles.flow} aria-label="Etapas conceptuales de intervención concursal">
      {stages.map((stage, index) => <div key={stage.id} className={styles.flowItem}>
        <div className={`${styles.stage} ${stage.id === scenario.activeStage ? styles.stageActive : ''}`}>
          <span>{stage.id === scenario.activeStage ? <Scale size={15}/> : <FileSearch2 size={15}/>}</span>
          <div><strong>{stage.label}</strong><small>{stage.caption}</small></div>
        </div>
        {index < stages.length - 1 && <ArrowRight className={styles.flowArrow} size={14}/>}
      </div>)}
    </div>

    <div className={styles.tabs} role="tablist" aria-label="Casos concursales">
      {scenarios.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={scenarioIndex === index} className={scenarioIndex === index ? styles.tabActive : styles.tab} onClick={() => move(index)}>Caso {index + 1}</button>)}
    </div>

    <motion.div key={scenario.id} className={styles.case} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
      <span className={styles.kicker}>Defiende el crédito sin saltarte el procedimiento</span>
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
        <strong>{selectedOption.correct ? 'Decisión consistente' : 'Revisa el momento procesal'}</strong>
        <p>{selectedOption.explanation}</p>
      </motion.div>}
      <footer className={styles.footer}>
        <span>{scenarioIndex + 1} de {scenarios.length}</span>
        {selected && scenarioIndex < scenarios.length - 1 && <button type="button" onClick={() => move(scenarioIndex + 1)}>Siguiente caso <ArrowRight size={15}/></button>}
        {selected && scenarioIndex === scenarios.length - 1 && <button type="button" onClick={() => move(0)}><RotateCcw size={15}/> Reiniciar</button>}
      </footer>
    </motion.div>
    <small className={styles.note}>Simulación conceptual basada en procedimientos públicos DIAN. El trámite real depende del tipo de proceso, autoridad, oportunidad, acreencia, garantías y actuaciones del expediente.</small>
  </section>
}
