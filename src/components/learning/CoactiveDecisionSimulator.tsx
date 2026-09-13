import { useMemo, useState } from 'react'
import { CheckCircle2, RotateCcw, Scale, XCircle } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './CoactiveDecisionSimulator.module.css'

type Scenario = {
  id: string
  label: string
  case: string
  question: string
  options: { id: string; text: string; correct: boolean; explanation: string }[]
}

const scenarios: Scenario[] = [
  {
    id: 'title', label: 'Título', case: 'El sistema muestra una obligación, pero el acto que determina el valor todavía no está ejecutoriado.', question: '¿Debes expedir ya el mandamiento de pago?',
    options: [
      { id: 'a', text: 'Sí, porque basta con que el valor aparezca registrado.', correct: false, explanation: 'El registro no reemplaza las condiciones del título ejecutivo ni su exigibilidad.' },
      { id: 'b', text: 'No. Primero debes verificar ejecutoria, exigibilidad y que exista título que preste mérito ejecutivo.', correct: true, explanation: 'El cobro coactivo exige un título ejecutivo jurídicamente apto y una obligación exigible.' },
      { id: 'c', text: 'Sí, pero solo si el valor supera 3.000 UVT.', correct: false, explanation: 'Ese umbral pertenece a reglas sobre garantías personales en facilidades de pago, no a la formación del título.' },
    ],
  },
  {
    id: 'notice', label: 'Notificación', case: 'Existe mandamiento de pago y se envió citación para que el deudor comparezca a notificarse personalmente. Han transcurrido diez días sin comparecencia.', question: '¿Qué regla debes reconocer?',
    options: [
      { id: 'a', text: 'Puede proceder la notificación por correo conforme a la regla especial del artículo 826.', correct: true, explanation: 'El artículo 826 prevé citación para comparecer dentro de diez días y, si no lo hace, notificación por correo.' },
      { id: 'b', text: 'La deuda queda prescrita automáticamente.', correct: false, explanation: 'La inasistencia a la citación no produce prescripción.' },
      { id: 'c', text: 'Empieza un nuevo término de cinco años sin necesidad de notificar el mandamiento.', correct: false, explanation: 'El efecto interruptivo relevante se conecta con la notificación válida del mandamiento.' },
    ],
  },
  {
    id: 'exceptions', label: 'Excepciones', case: 'El mandamiento fue notificado válidamente y el deudor presentó excepciones dentro de los quince días siguientes.', question: '¿Cuál es la siguiente lógica procesal?',
    options: [
      { id: 'a', text: 'Decidir las excepciones, practicando pruebas si corresponde, dentro del término legal.', correct: true, explanation: 'El artículo 832 regula la decisión de excepciones y fija el término de un mes desde su presentación.' },
      { id: 'b', text: 'Ignorarlas y ordenar el remate inmediatamente.', correct: false, explanation: 'La defensa presentada oportunamente debe ser tramitada y decidida.' },
      { id: 'c', text: 'Trasladarlas a la jurisdicción contenciosa para que decida primero.', correct: false, explanation: 'La decisión inicial de las excepciones corresponde al procedimiento administrativo de cobro.' },
    ],
  },
  {
    id: 'appeal', label: 'Recurso', case: 'La resolución rechaza las excepciones y ordena seguir adelante la ejecución.', question: '¿Qué recurso especial procede contra esa resolución?',
    options: [
      { id: 'a', text: 'Únicamente reposición, dentro del mes siguiente a la notificación.', correct: true, explanation: 'Es la regla específica del artículo 834 del Estatuto Tributario.' },
      { id: 'b', text: 'Apelación obligatoria dentro de diez días.', correct: false, explanation: 'No corresponde al régimen especial de esta decisión.' },
      { id: 'c', text: 'Ninguno, porque todos los actos del cobro son de trámite.', correct: false, explanation: 'Aunque muchos actos del cobro no tienen recurso, la resolución que rechaza excepciones tiene reposición expresamente prevista.' },
    ],
  },
  {
    id: 'court', label: 'Control judicial', case: 'Después de la decisión administrativa se demanda ante la jurisdicción contencioso-administrativa la resolución que decidió las excepciones y ordenó seguir adelante.', question: '¿Qué ocurre con el cobro?',
    options: [
      { id: 'a', text: 'Se suspende por completo desde la presentación de la demanda.', correct: false, explanation: 'La demanda no suspende por sí sola el proceso de cobro.' },
      { id: 'b', text: 'El cobro puede continuar, pero no puede realizarse el remate hasta que exista pronunciamiento definitivo.', correct: true, explanation: 'El artículo 835 permite continuar el proceso pero condiciona el remate al pronunciamiento definitivo.' },
      { id: 'c', text: 'La obligación se extingue mientras dura el proceso judicial.', correct: false, explanation: 'La demanda no extingue la obligación.' },
    ],
  },
]

export function CoactiveDecisionSimulator({ title, text }: { title: string; text: string }) {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const scenario = scenarios[scenarioIndex] ?? scenarios[0]!
  const selectedOption = useMemo(() => scenario.options.find((option) => option.id === selected), [scenario, selected])

  const chooseScenario = (index: number) => {
    setScenarioIndex(index)
    setSelected(null)
  }

  return <section className={styles.wrapper}>
    <div className={styles.heading}><span><Scale size={18}/></span><div><strong>{title}</strong><p>{text}</p></div></div>
    <div className={styles.stages} aria-label="Etapas del simulador">
      {scenarios.map((item, index) => <button key={item.id} type="button" className={index === scenarioIndex ? styles.stageActive : styles.stage} onClick={() => chooseScenario(index)}><small>{index + 1}</small><span>{item.label}</span></button>)}
    </div>
    <motion.div key={scenario.id} className={styles.panel} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .18 }}>
      <div className={styles.case}><span>Expediente</span><p>{scenario.case}</p></div>
      <h3>{scenario.question}</h3>
      <div className={styles.options}>
        {scenario.options.map((option, index) => {
          const isSelected = selected === option.id
          const reveal = Boolean(selected)
          const stateClass = reveal && option.correct ? styles.correct : reveal && isSelected && !option.correct ? styles.wrong : ''
          return <button key={option.id} type="button" className={`${styles.option} ${isSelected ? styles.selected : ''} ${stateClass}`} disabled={reveal} onClick={() => setSelected(option.id)}><span>{String.fromCharCode(65 + index)}</span><p>{option.text}</p>{reveal && option.correct && <CheckCircle2 size={17}/>} {reveal && isSelected && !option.correct && <XCircle size={17}/>}</button>
        })}
      </div>
      {selectedOption && <motion.div className={selectedOption.correct ? styles.feedbackCorrect : styles.feedbackWrong} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}><strong>{selectedOption.correct ? 'Decisión correcta' : 'Revisa la etapa'}</strong><p>{selectedOption.explanation}</p></motion.div>}
      <div className={styles.footer}>
        <span>{scenarioIndex + 1} / {scenarios.length}</span>
        {selected && scenarioIndex < scenarios.length - 1 && <button type="button" onClick={() => chooseScenario(scenarioIndex + 1)}>Siguiente etapa</button>}
        {selected && scenarioIndex === scenarios.length - 1 && <button type="button" onClick={() => chooseScenario(0)}><RotateCcw size={15}/> Reiniciar</button>}
      </div>
    </motion.div>
    <small className={styles.disclaimer}>Simulación didáctica. Resume reglas de estudio y no sustituye el análisis integral de un expediente real.</small>
  </section>
}
