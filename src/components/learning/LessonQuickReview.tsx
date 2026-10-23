import { useEffect, useMemo, useState } from 'react'
import { BrainCircuit, CheckSquare, Eye, NotebookPen, Save, Sparkles } from 'lucide-react'
import type { Course, Lesson } from '../../types/course'
import styles from './LessonQuickReview.module.css'

const NOTES_STORAGE_KEY = 'umbral:lesson-notes:v1'

function readLessonNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, string>) : {}
  } catch {
    return {}
  }
}

export function LessonQuickReview({ course, lesson }: { course: Course; lesson: Lesson }) {
  const noteKey = `${course.id}:${lesson.id}`
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({})
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [noteText, setNoteText] = useState('')
  const [savedNotice, setSavedNotice] = useState(false)

  useEffect(() => {
    setRevealedIds({})
    setCheckedItems({})
    setSavedNotice(false)
    const allNotes = readLessonNotes()
    setNoteText(allNotes[noteKey] ?? '')
  }, [noteKey])

  // Dynamically extract active-recall cards from the lesson's own definitions, rules, traps, and articles
  const recallCards = useMemo(() => {
    const cards: { id: string; tag: string; prompt: string; answer: string }[] = []
    lesson.blocks.forEach((b, idx) => {
      if (b.type === 'definition') {
        cards.push({
          id: `def-${idx}`,
          tag: 'CONCEPTO CLAVE',
          prompt: `¿Cómo defines con precisión «${b.title}» dentro de esta lección?`,
          answer: b.text,
        })
      } else if (b.type === 'rule') {
        cards.push({
          id: `rule-${idx}`,
          tag: 'REGLA OPERATIVA',
          prompt: `¿Cuál es la regla aplicable sobre «${b.title}»?`,
          answer: b.text,
        })
      } else if (b.type === 'trap') {
        cards.push({
          id: `trap-${idx}`,
          tag: 'TRAMPA DE EXAMEN',
          prompt: `¿Qué confusión o trampa frecuente debes evitar (${b.title ?? 'Alerta PJS'})?`,
          answer: b.text,
        })
      } else if (b.type === 'article') {
        cards.push({
          id: `art-${idx}`,
          tag: b.article,
          prompt: `¿Qué establece ${b.article} (${b.title})?`,
          answer: b.text,
        })
      }
    })
    return cards.slice(0, 4)
  }, [lesson.blocks])

  const checklistItems = useMemo(() => {
    const objBlock = lesson.blocks.find((b) => b.type === 'objective')
    if (objBlock && objBlock.type === 'objective' && objBlock.items.length > 0) {
      return objBlock.items
    }
    return [
      'Identifico la etapa exacta del trámite y quién tiene la competencia funcional.',
      'Distingo la regla jurídica aplicable del distractor que salta etapas o ignora soportes.',
      'Puedo explicar por qué se exige soporte trazable en el expediente antes de decidir.',
    ]
  }, [lesson.blocks])

  const saveNote = () => {
    try {
      const current = readLessonNotes()
      if (noteText.trim()) {
        current[noteKey] = noteText.trim()
      } else {
        delete current[noteKey]
      }
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(current))
      setSavedNotice(true)
    } catch {
      // ignore storage errors
    }
  }

  return (
    <section className={styles.box} aria-label="Autocomprobación activa y notas de la lección">
      <header className={styles.head}>
        <div>
          <span className={styles.eyebrow}><Sparkles size={14}/> PAUSA DE CONSOLIDACIÓN ACTIVA</span>
          <h2>Comprueba lo aprendido antes de cerrar la lección</h2>
          <p>Intenta responder mentalmente cada tarjeta antes de revelar la clave y marca tu lista de dominio.</p>
        </div>
      </header>

      {recallCards.length > 0 && (
        <div className={styles.cardsGrid}>
          {recallCards.map((c) => {
            const open = Boolean(revealedIds[c.id])
            return (
              <div key={c.id} className={`${styles.recallCard} ${open ? styles.recallOpen : ''}`}>
                <div className={styles.recallTop}>
                  <span className={styles.recallTag}><BrainCircuit size={13}/> {c.tag}</span>
                  <button
                    type="button"
                    className={styles.revealBtn}
                    onClick={() => setRevealedIds((prev) => ({ ...prev, [c.id]: !prev[c.id] }))}
                  >
                    <Eye size={13}/> {open ? 'Ocultar' : 'Comprobar'}
                  </button>
                </div>
                <strong className={styles.recallPrompt}>{c.prompt}</strong>
                {open && <p className={styles.recallAnswer}>{c.answer}</p>}
              </div>
            )
          })}
        </div>
      )}

      <div className={styles.bottomSplit}>
        <div className={styles.checklistBox}>
          <h3><CheckSquare size={16}/> Autoverificación de dominio</h3>
          <div className={styles.checkItems}>
            {checklistItems.map((item, idx) => {
              const id = `chk-${idx}`
              return (
                <label key={id} className={styles.checkRow}>
                  <input
                    type="checkbox"
                    checked={Boolean(checkedItems[id])}
                    onChange={(e) => setCheckedItems((prev) => ({ ...prev, [id]: e.target.checked }))}
                  />
                  <span>{item}</span>
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.noteBox}>
          <h3><NotebookPen size={16}/> Tu apunte o regla mnemotécnica (guardado local)</h3>
          <textarea
            rows={3}
            value={noteText}
            onChange={(e) => {
              setNoteText(e.target.value)
              setSavedNotice(false)
            }}
            placeholder="Escribe aquí el artículo, término o regla rápida que no quieres olvidar de esta lección..."
          />
          <div className={styles.noteActions}>
            <span role="status">{savedNotice ? '✓ Apunte guardado en este dispositivo' : 'Se conserva localmente por lección'}</span>
            <button type="button" className={styles.saveNoteBtn} onClick={saveNote}>
              <Save size={14}/> Guardar apunte
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
