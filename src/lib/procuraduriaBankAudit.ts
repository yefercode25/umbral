import type { Question } from '../types/course'
import { questionOptionsForDisplay } from './questionPresentation'
import { isPgnAuthored } from './procuraduriaScopes'

const normalize = (text: string) => text.normalize('NFKC').toLocaleLowerCase('es').replace(/\s+/g, ' ').trim()
const length = (text: string) => text.trim().split(/\s+/).filter(Boolean).length

export function hasPgnLengthOutlier(q: Question): boolean {
  const correct = q.options.find(o => o.id === q.correctOptionId)
  const wrong = q.options.filter(o => o.id !== q.correctOptionId).map(o => length(o.text))
  if (!correct || wrong.length !== 2) return false
  const max = Math.max(...wrong)
  return length(correct.text) >= 1.5 * max && length(correct.text) - max >= 5
}

/** Symmetric editorial signal, independent of the historic long-answer metric. */
export function hasPgnShortCorrectOutlier(q: Question): boolean {
  const correct = q.options.find(o => o.id === q.correctOptionId)
  const wrong = q.options.filter(o => o.id !== q.correctOptionId).map(o => length(o.text))
  if (!correct || wrong.length !== 2) return false
  const min = Math.min(...wrong)
  return min >= 1.5 * length(correct.text) && min - length(correct.text) >= 5
}

export function hasPgnLengthCue(q: Question): boolean {
  return hasPgnLengthOutlier(q) || hasPgnShortCorrectOutlier(q)
}

export function auditPgnBank(questions: Question[], sources: ReadonlySet<string>) {
  const stems = new Map<string, string[]>()
  const cases = new Map<string, string[]>()
  const exactItems = new Map<string, string[]>()
  const missingSource: string[] = [], invalidOptions: string[] = [], weakRationale: string[] = []
  const longestCorrect: string[] = [], lengthOutlier: string[] = [], shortStem: string[] = []
  const displayedCorrectPositions = [0, 0, 0]
  const authored = questions.filter(isPgnAuthored)
  const authoredLongest: string[] = [], authoredOutlier: string[] = [], shortCorrectOutlier: string[] = [], authoredShortCorrectOutlier: string[] = []
  const track = (map: Map<string, string[]>, key: string, id: string) => {
    const ids = map.get(key) ?? []; ids.push(id); map.set(key, ids)
  }
  for (const q of questions) {
    track(stems, normalize(q.stem), q.id)
    if (q.case) track(cases, normalize(q.case), q.id)
    track(exactItems, JSON.stringify([normalize(q.case ?? ''), normalize(q.stem), q.options.map(o => normalize(o.text)).sort()]), q.id)
    const correct = q.options.find(o => o.id === q.correctOptionId)
    if (q.options.length !== 3 || new Set(q.options.map(o => o.id)).size !== 3 || new Set(q.options.map(o => normalize(o.text))).size !== 3 || !correct || q.options.some(o => !o.text.trim())) invalidOptions.push(q.id)
    if (!q.sourceIds.length || q.sourceIds.some(id => !sources.has(id))) missingSource.push(q.id)
    if (!q.explanation.trim() || q.options.some(o => !o.rationale?.trim()) || new Set(q.options.map(o => normalize(o.rationale ?? ''))).size !== 3) weakRationale.push(q.id)
    if (q.stem.trim().length < 50) shortStem.push(q.id)
    if (correct) {
      const others = q.options.filter(o => o.id !== correct.id).map(o => length(o.text))
      const max = Math.max(...others)
      if (others.length === 2 && length(correct.text) > max) {
        longestCorrect.push(q.id)
        if (isPgnAuthored(q)) authoredLongest.push(q.id)
        if (hasPgnLengthOutlier(q)) {
          lengthOutlier.push(q.id)
          if (isPgnAuthored(q)) authoredOutlier.push(q.id)
        }
      }
      if (hasPgnShortCorrectOutlier(q)) {
        shortCorrectOutlier.push(q.id)
        if (isPgnAuthored(q)) authoredShortCorrectOutlier.push(q.id)
      }
      const pos = questionOptionsForDisplay(q).findIndex(o => o.id === q.correctOptionId)
      if (pos >= 0 && pos < 3) displayedCorrectPositions[pos] = (displayedCorrectPositions[pos] ?? 0) + 1
    }
  }
  const repeated = (map: Map<string, string[]>) => [...map.values()].filter(ids => ids.length > 1)
  return {
    total: questions.length, authored: authored.length, generated: questions.length - authored.length,
    missingSource, invalidOptions, weakRationale, shortStem, longestCorrect, lengthOutlier, authoredLongest, authoredOutlier, shortCorrectOutlier, authoredShortCorrectOutlier,
    displayedCorrectPositions, repeatedStems: repeated(stems), repeatedCases: repeated(cases), exactDuplicates: repeated(exactItems),
  }
}
