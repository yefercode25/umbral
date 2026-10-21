import { useMemo, useState } from 'react'
import { RotateCcw, Scale, ShieldCheck } from 'lucide-react'
import type { BehaviorStatement } from '../../types/course'
import { motion } from 'motion/react'
import styles from './BehaviorProfileSimulator.module.css'

const defaultStatements: BehaviorStatement[] = [
  { id:'s1', text:'Cuando una instrucción cambia, reviso cómo afecta mis responsabilidades antes de continuar con el mismo método.', direction:'direct', competency:'Adaptabilidad · nivel 3', note:'El nivel 3 enfatiza anticipar repercusiones y ajustar el propio accionar frente al cambio.' },
  { id:'s2', text:'Si una forma de trabajo me ha funcionado antes, prefiero mantenerla aunque aparezcan nuevas evidencias o herramientas institucionales.', direction:'inverse', competency:'Adaptabilidad · nivel 3', note:'Una formulación inversa puede describir rigidez. La especificación técnica de DIAN 2676 exige afirmaciones directas e inversas.' },
  { id:'s3', text:'Antes de comunicar una decisión sensible, considero qué canal y método reducen barreras y permiten que el interlocutor comprenda el mensaje.', direction:'direct', competency:'Comunicación efectiva · nivel 3', note:'El nivel 3 selecciona métodos adecuados y considera el impacto de la comunicación en los interlocutores.' },
  { id:'s4', text:'Cuando mi equipo toma una decisión que no era mi opción preferida, dejo de colaborar porque considero que mi aporte ya no es útil.', direction:'inverse', competency:'Trabajo en equipo · nivel 3', note:'El nivel 3 fomenta colaboración, reconoce aportes y mantiene una actitud proactiva y receptiva frente a decisiones del equipo.' },
]

const choices = [
  { id:'strong-no', label:'Muy en desacuerdo' },
  { id:'no', label:'En desacuerdo' },
  { id:'yes', label:'De acuerdo' },
  { id:'strong-yes', label:'Muy de acuerdo' },
]

export function BehaviorProfileSimulator({ title, text, statements = defaultStatements, dianOfficialScale = false }: { title: string; text: string; statements?: BehaviorStatement[]; dianOfficialScale?: boolean }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string,string>>({})
  const statement = statements[index] ?? statements[0]!
  const answered = answers[statement.id]
  const displayedChoices = dianOfficialScale ? choices.map((choice) => ({ ...choice, label: choice.id === 'strong-no' ? 'Totalmente en desacuerdo' : choice.id === 'strong-yes' ? 'Totalmente de acuerdo' : choice.label })) : choices
  const completed = Object.keys(answers).length === statements.length
  const directCount = useMemo(() => statements.filter((item) => item.direction === 'direct').length, [statements])

  const answer = (choice: string) => setAnswers((current) => ({ ...current, [statement.id]: choice }))
  const next = () => { if (index < statements.length - 1) setIndex((value) => value + 1) }
  const reset = () => { setIndex(0); setAnswers({}) }

  return <section className={styles.wrapper}>
    <header className={styles.heading}>
      <span className={styles.icon}><ShieldCheck size={18}/></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </header>

    <div className={styles.meta}><span><Scale size={14}/> Escala de 4 opciones</span><span>{directCount} directas · {statements.length - directCount} inversas en esta demo</span></div>

    <motion.div key={statement.id} className={styles.card} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ duration:.18 }}>
      <div className={styles.counter}><span>{index + 1} / {statements.length}</span><strong>{statement.competency}</strong></div>
      <p className={styles.statement}>{statement.text}</p>
      <div className={styles.scale}>
        {displayedChoices.map((choice) => <button type="button" key={choice.id} className={answered === choice.id ? styles.choiceActive : styles.choice} onClick={() => answer(choice.id)}>{choice.label}</button>)}
      </div>
      {answered && <motion.div className={styles.explanation} initial={{ opacity:0 }} animate={{ opacity:1 }}>
        <div><Scale size={17}/><strong>{statement.direction === 'direct' ? 'Enunciado directo' : 'Enunciado inverso'}</strong></div>
        <p>{statement.note}</p>
        <small>No se muestra una “respuesta correcta”: estas pruebas estiman ajuste conductual y controlan patrones de respuesta. Contesta de forma coherente con tu conducta real.</small>
      </motion.div>}
      <footer className={styles.footer}>
        <span>{Object.keys(answers).length} respondidas</span>
        {!completed && answered && index < statements.length - 1 && <button type="button" onClick={next}>Continuar</button>}
        {completed && <button type="button" onClick={reset}><RotateCcw size={14}/> Reiniciar</button>}
      </footer>
    </motion.div>
    <small className={styles.note}>La especificación técnica del proceso DIAN 2676 exige afirmaciones en escala Likert de cuatro opciones, ítems directos e inversos y controles de consistencia/deseabilidad social. Esta demo enseña el formato; no intenta predecir ni manipular la calificación.</small>
  </section>
}
