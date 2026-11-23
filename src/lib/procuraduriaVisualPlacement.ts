import type { LessonBlock } from '../types/course'

/**
 * Insert the diagram after the matching explanation, not before the lesson.
 * The procedural (second) lesson renders its image in the existing steps block.
 * Pure function so all 85 modules can be checked without mounting the UI.
 */
export function getProcuraduriaVisualInsertAfter(
  blocks: readonly LessonBlock[],
  lessonOrder?: number,
): number | null {
  if (lessonOrder !== 1 && lessonOrder !== 3) return null
  const target = lessonOrder === 1
    ? 'Tres reglas que debes poder recuperar sin mirar apuntes'
    : 'Lectura avanzada del problema'
  const index = blocks.findIndex(block => block.type === 'comparison' && block.title === target)
  return index < 0 ? null : index
}
