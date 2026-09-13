import { motion } from 'motion/react'
import type { LessonBlock } from '../../types/course'
import styles from './ProcessFlow.module.css'

type ProcessBlock = Extract<LessonBlock, { type: 'process' }>

export function ProcessFlow({ block }: { block: ProcessBlock }) {
  return (
    <section className={styles.wrap} aria-label={block.title}>
      <h3>{block.title}</h3>
      <div className={styles.flow}>
        {block.nodes.map((node, index) => (
          <div className={styles.step} key={node.id}>
            <motion.div className={styles.node} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }}>
              <span className={styles.index}>{index + 1}</span>
              <strong>{node.label}</strong>
              {node.hint && <small>{node.hint}</small>}
            </motion.div>
            {index < block.nodes.length - 1 && <div className={styles.connector} aria-hidden="true"><span /></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
