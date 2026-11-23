import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { getProcuraduriaVisualInsertAfter } from '../../src/lib/procuraduriaVisualPlacement'
import { getProcuraduriaLessonVisual } from '../../src/lib/procuraduriaLessonVisuals'

describe('Procuraduría: gráficos visibles en contexto de estudio', () => {
  it('inserta fundamentos después de las reglas y antes del expediente', () => {
    const lessons = procuraduriaCourse.lessons.filter(l => l.order === 1)
    expect(lessons).toHaveLength(85)
    for (const lesson of lessons) {
      const anchor = getProcuraduriaVisualInsertAfter(lesson.blocks, lesson.order)
      expect(anchor, lesson.id).not.toBeNull()
      const block = lesson.blocks[anchor!]
      expect(block?.type, lesson.id).toBe('comparison')
      expect(lesson.blocks.slice(anchor! + 1).some(b => b.type === 'example'), lesson.id).toBe(true)
      expect(getProcuraduriaLessonVisual(lesson.moduleId, lesson.order), lesson.id).not.toBeNull()
    }
  })

  it('muestra el diagrama de los pasos exactamente donde aparece el método', () => {
    const lessons = procuraduriaCourse.lessons.filter(l => l.order === 2)
    expect(lessons).toHaveLength(85)
    for (const lesson of lessons) {
      expect(getProcuraduriaVisualInsertAfter(lesson.blocks, lesson.order), lesson.id).toBeNull()
      const method = lesson.blocks.filter(b => b.type === 'steps')
      expect(method, lesson.id).toHaveLength(1)
      expect(getProcuraduriaLessonVisual(lesson.moduleId, 2), lesson.id).not.toBeNull()
      expect(lesson.blocks.findIndex(b => b.type === 'steps'), lesson.id).toBeGreaterThan(0)
    }
  })

  it('sitúa el análisis de caso entre la matriz y la explicación de cambios', () => {
    const lessons = procuraduriaCourse.lessons.filter(l => l.order === 3)
    expect(lessons).toHaveLength(85)
    for (const lesson of lessons) {
      const anchor = getProcuraduriaVisualInsertAfter(lesson.blocks, lesson.order)
      expect(anchor, lesson.id).not.toBeNull()
      expect(lesson.blocks[anchor!]?.type, lesson.id).toBe('comparison')
      expect(lesson.blocks[anchor!+1]?.type, lesson.id).toBe('example')
      expect(getProcuraduriaLessonVisual(lesson.moduleId, 3), lesson.id).not.toBeNull()
    }
  })

  it('no agrega un visual automáticamente cuando falta el bloque contextual o el orden es otro', () => {
    expect(getProcuraduriaVisualInsertAfter([], 1)).toBeNull()
    expect(getProcuraduriaVisualInsertAfter([], 3)).toBeNull()
    expect(getProcuraduriaVisualInsertAfter([{ type: 'lead', text: 'Ejemplo' }], 1)).toBeNull()
    expect(getProcuraduriaVisualInsertAfter([{ type: 'lead', text: 'Ejemplo' }], 2)).toBeNull()
    expect(getProcuraduriaVisualInsertAfter([], undefined)).toBeNull()
  })
})
