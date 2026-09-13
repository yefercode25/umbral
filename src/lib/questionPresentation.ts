import type { Question, QuestionOption } from '../types/course'

/**
 * Small deterministic hash used only for presentation ordering.
 * It deliberately does not affect question identity, scoring or persisted progress.
 */
export function hashPresentationKey(value: string): number {
  let hash = 0x811c9dc5
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Stable Fisher-Yates permutation. Items are first canonicalized by key so the
 * same seed produces the same result even if the source array is assembled in
 * a different order after a content update.
 */
export function deterministicOrder<T>(items: readonly T[], seed: string, key: (item: T) => string): T[] {
  const result = [...items].sort((left, right) => key(left).localeCompare(key(right)))
  const random = seededRandom(hashPresentationKey(seed))

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    const currentItem = result[index]
    const swapItem = result[swapIndex]
    if (currentItem === undefined || swapItem === undefined) continue
    result[index] = swapItem
    result[swapIndex] = currentItem
  }

  return result
}

export function questionOptionsForDisplay(question: Question): QuestionOption[] {
  return deterministicOrder(question.options, `option:${question.id}`, (option) => option.id)
}

export function optionLabel(index: number): string {
  return String.fromCharCode(65 + index)
}
