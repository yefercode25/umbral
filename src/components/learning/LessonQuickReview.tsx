import { useState } from 'react'
import { NotebookPen, Save } from 'lucide-react'
import type { Course, Lesson } from '../../types/course'
import styles from './LessonQuickReview.module.css'

const NOTES_STORAGE_KEY = 'umbral:lesson-notes:v1'

function readLessonNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY)
    return raw ? JSON.parse(raw) as Record<string, string> : {}
  } catch {
    return {}
  }
}

/** Elimina el bloque repetitivo de consolidación; conserva intactos los apuntes locales. */
export function LessonQuickReview({ course, lesson }: { course: Course; lesson: Lesson }) {
  const noteKey = `${course.id}:${lesson.id}`
  const [noteText, setNoteText] = useState(() => readLessonNotes()[noteKey] ?? '')
  const [savedNotice, setSavedNotice] = useState(false)

  const saveNote = () => {
    try {
      const current = readLessonNotes()
      if (noteText.trim()) current[noteKey] = noteText.trim()
      else delete current[noteKey]
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(current))
      setSavedNotice(true)
    } catch {
      setSavedNotice(false)
    }
  }

  return <section className={styles.notes} aria-label="Apuntes personales de la lección">
    <label className={styles.heading} htmlFor="umbral-lesson-notes"><NotebookPen size={17} aria-hidden="true"/> Mis apuntes</label>
    <textarea
      id="umbral-lesson-notes"
      rows={2}
      value={noteText}
      onChange={(e) => { setNoteText(e.target.value); setSavedNotice(false) }}
      placeholder="Anota aquí una norma, excepción o dato importante de esta lección..."
    />
    <div className={styles.actions}>
      <span role="status">{savedNotice ? 'Apunte guardado' : 'Guardado local, solo en este dispositivo'}</span>
      <button type="button" onClick={saveNote}><Save size={14} aria-hidden="true"/> Guardar</button>
    </div>
  </section>
}
