import { AlertTriangle, BookMarked, CheckCircle2, CircleDot, ExternalLink, Lightbulb, Scale } from 'lucide-react'
import type { Course, LessonBlock } from '../../types/course'
import { ProcessFlow } from './ProcessFlow'
import { PrescriptionSimulator } from './PrescriptionSimulator'
import { CoactiveDecisionSimulator } from './CoactiveDecisionSimulator'
import { AccountReconciliationSimulator } from './AccountReconciliationSimulator'
import { EnforcementChainSimulator } from './EnforcementChainSimulator'
import { RefundDecisionSimulator } from './RefundDecisionSimulator'
import { BehaviorProfileSimulator } from './BehaviorProfileSimulator'
import { ConcursalDecisionSimulator } from './ConcursalDecisionSimulator'
import { QuestionCard } from './QuestionCard'
import { SequenceExercise } from './SequenceExercise'
import { LegalDecisionSimulator } from './LegalDecisionSimulator'
import styles from './LessonRenderer.module.css'

export function LessonRenderer({ course, blocks }: { course: Course; blocks: LessonBlock[] }) {
  return <div className={styles.content}>
    {blocks.map((block, index) => {
      const key = `${block.type}-${index}`
      if (block.type === 'lead') return <p className={styles.lead} key={key}>{block.text}</p>
      if (block.type === 'paragraph') return <p key={key}>{block.text}</p>
      if (block.type === 'objective') return <section className={`${styles.callout} ${styles.objective}`} key={key}><div className={styles.calloutTitle}><CheckCircle2 size={18}/><strong>Al terminar podrás</strong></div><ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul></section>
      if (block.type === 'definition') return <section className={`${styles.callout} ${styles.definition}`} key={key}><div className={styles.calloutTitle}><BookMarked size={18}/><strong>{block.title}</strong></div><p>{block.text}</p></section>
      if (block.type === 'rule') return <section className={`${styles.callout} ${styles.rule}`} key={key}><div className={styles.calloutTitle}><Scale size={18}/><strong>{block.title}</strong></div><p>{block.text}</p></section>
      if (block.type === 'tip') return <section className={`${styles.callout} ${styles.tip}`} key={key}><div className={styles.calloutTitle}><Lightbulb size={18}/><strong>{block.title ?? 'Tip de estudio'}</strong></div><p>{block.text}</p></section>
      if (block.type === 'trap') return <section className={`${styles.callout} ${styles.trap}`} key={key}><div className={styles.calloutTitle}><AlertTriangle size={18}/><strong>{block.title ?? 'Cuidado'}</strong></div><p>{block.text}</p></section>
      if (block.type === 'example') return <section className={`${styles.callout} ${styles.example}`} key={key}><div className={styles.calloutTitle}><CircleDot size={18}/><strong>{block.title}</strong></div><p>{block.text}</p></section>
      if (block.type === 'article') {
        const source = course.sources.find((s) => s.id === block.sourceId)
        return <section className={styles.article} key={key}><div className={styles.articleHead}><span>{block.article}</span><strong>{block.title}</strong></div><p>{block.text}</p>{source && <a href={source.url} target="_blank" rel="noreferrer">Ver fuente oficial <ExternalLink size={14}/></a>}</section>
      }
      if (block.type === 'steps') return <section className={styles.steps} key={key}><h3>{block.title}</h3><ol>{block.items.map((item) => <li key={item}>{item}</li>)}</ol></section>
      if (block.type === 'process') return <ProcessFlow key={key} block={block}/>
      if (block.type === 'sequence-exercise') return <SequenceExercise key={key} title={block.title} text={block.text} items={block.items} correctOrder={block.correctOrder} {...(block.explanation !== undefined ? { explanation: block.explanation } : {})}/>
      if (block.type === 'comparison') return <section className={styles.tableWrap} key={key}><h3>{block.title}</h3><div className={styles.tableScroller}><table><thead><tr>{block.columns.map((col) => <th key={col}>{col}</th>)}</tr></thead><tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div></section>
      if (block.type === 'prescription-simulator') return <PrescriptionSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'coactive-simulator') return <CoactiveDecisionSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'account-simulator') return <AccountReconciliationSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'enforcement-simulator') return <EnforcementChainSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'refund-simulator') return <RefundDecisionSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'behavior-simulator') return <BehaviorProfileSimulator key={key} title={block.title} text={block.text} dianOfficialScale={course.id === 'dian-2676-gestor-ii'} {...(block.statements ? { statements: block.statements } : {})}/>
      if (block.type === 'concursal-simulator') return <ConcursalDecisionSimulator key={key} title={block.title} text={block.text}/>
      if (block.type === 'decision-simulator') return <LegalDecisionSimulator key={key} title={block.title} text={block.text} scenario={block.scenario} prompt={block.prompt} options={block.options}/>
      if (block.type === 'checkpoint') {
        const q = course.questions.find((question) => question.id === block.questionId)
        return q ? <QuestionCard key={`checkpoint-${block.questionId}-${index}`} course={course} question={q}/> : null
      }
      if (block.type === 'sources') {
        const sources = block.sourceIds.map((id) => course.sources.find((s) => s.id === id)).filter(Boolean)
        return <section className={styles.sources} key={key}><h3>Fuentes de esta lección</h3>{sources.map((source) => source && <a key={source.id} href={source.url} target="_blank" rel="noreferrer"><span><strong>{source.title}</strong><small>{source.publisher} · verificada {source.verifiedAt}</small></span><ExternalLink size={16}/></a>)}</section>
      }
      return null
    })}
  </div>
}
