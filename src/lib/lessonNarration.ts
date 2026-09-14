import type { Course, Lesson, LessonBlock } from '../types/course'
import type { SupportGraphic } from './supportGraphics'
import { optionLabel, optionsForDisplay, questionOptionsForDisplay } from './questionPresentation'

const MAX_CHUNK_LENGTH = 280

function cleanSpeechText(value: string) {
  return value
    .replace(/→/g, ', luego ')
    .replace(/[•·]/g, ', ')
    .replace(/\s+/g, ' ')
    .trim()
}

function splitLongPart(value: string, maxLength = MAX_CHUNK_LENGTH) {
  const clean = cleanSpeechText(value)
  if (!clean) return []
  if (clean.length <= maxLength) return [clean]

  const words = clean.split(' ')
  const parts: string[] = []
  let current = ''

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (candidate.length <= maxLength) {
      current = candidate
      continue
    }
    if (current) parts.push(current)
    current = word
  }

  if (current) parts.push(current)
  return parts
}

export function splitNarrationText(value: string, maxLength = MAX_CHUNK_LENGTH) {
  const clean = cleanSpeechText(value)
  if (!clean) return []

  const sentences = clean.match(/[^.!?]+(?:[.!?]+|$)/g) ?? [clean]
  const chunks: string[] = []
  let current = ''

  for (const sentenceRaw of sentences) {
    const sentence = sentenceRaw.trim()
    if (!sentence) continue

    if (sentence.length > maxLength) {
      if (current) {
        chunks.push(current)
        current = ''
      }
      chunks.push(...splitLongPart(sentence, maxLength))
      continue
    }

    const candidate = current ? `${current} ${sentence}` : sentence
    if (candidate.length <= maxLength) current = candidate
    else {
      if (current) chunks.push(current)
      current = sentence
    }
  }

  if (current) chunks.push(current)
  return chunks
}

function blockToSpeech(course: Course, block: LessonBlock) {
  if (block.type === 'lead' || block.type === 'paragraph') return block.text
  if (block.type === 'objective') return `Al terminar podrás. ${block.items.map((item, index) => `${index + 1}. ${item}`).join(' ')}`
  if (block.type === 'definition' || block.type === 'rule' || block.type === 'example') return `${block.title}. ${block.text}`
  if (block.type === 'tip') return `${block.title ?? 'Tip de estudio'}. ${block.text}`
  if (block.type === 'trap') return `${block.title ?? 'Cuidado'}. ${block.text}`
  if (block.type === 'article') return `${block.article}. ${block.title}. ${block.text}`
  if (block.type === 'steps') return `${block.title}. ${block.items.map((item, index) => `Paso ${index + 1}. ${item}`).join(' ')}`
  if (block.type === 'process') return `${block.title}. ${block.nodes.map((node, index) => `Etapa ${index + 1}. ${node.label}${node.hint ? `. ${node.hint}` : ''}`).join(' ')}`
  if (block.type === 'sequence-exercise') return `Ejercicio de secuencia. ${block.title}. ${block.text}. Elementos para ordenar. ${block.items.map((item, index) => `${index + 1}. ${item.label}`).join(' ')}`
  if (block.type === 'comparison') {
    const headers = block.columns.join(', ')
    const rows = block.rows.map((row, index) => `Fila ${index + 1}. ${row.join('. ')}`).join(' ')
    return `${block.title}. Columnas: ${headers}. ${rows}`
  }
  if (
    block.type === 'prescription-simulator' ||
    block.type === 'coactive-simulator' ||
    block.type === 'account-simulator' ||
    block.type === 'enforcement-simulator' ||
    block.type === 'refund-simulator' ||
    block.type === 'behavior-simulator' ||
    block.type === 'concursal-simulator'
  ) return `Actividad interactiva. ${block.title}. ${block.text}`

  if (block.type === 'decision-simulator') {
    const options = optionsForDisplay(block.options, `decision:${block.title}:${block.scenario}`)
      .map((option, index) => `Opción ${optionLabel(index)}. ${option.text}`)
      .join(' ')
    return `Laboratorio de decisión. ${block.title}. ${block.text}. Situación. ${block.scenario}. ${block.prompt}. ${options}`
  }

  if (block.type === 'checkpoint') {
    const question = course.questions.find((item) => item.id === block.questionId)
    if (!question) return ''
    const options = questionOptionsForDisplay(question)
      .map((option, index) => `Opción ${optionLabel(index)}. ${option.text}`)
      .join(' ')
    return `Pregunta de práctica. ${question.case ? `${question.case}. ` : ''}${question.stem}. ${options}`
  }

  if (block.type === 'sources') {
    const sourceNames = block.sourceIds
      .map((id) => course.sources.find((source) => source.id === id))
      .filter((source): source is (typeof course.sources)[number] => Boolean(source))
      .map((source) => `${source.title}, ${source.publisher}`)
    return sourceNames.length ? `Fuentes de esta lección. ${sourceNames.join('. ')}` : ''
  }

  return ''
}

export function buildLessonNarration(course: Course, lesson: Lesson, supportGraphic?: SupportGraphic | null) {
  const sections: string[] = [
    `Lección. ${lesson.title}. ${lesson.subtitle}`,
  ]

  if (supportGraphic) {
    sections.push(`Apoyo visual. ${supportGraphic.title}. ${supportGraphic.description}`)
  }

  for (const block of lesson.blocks) {
    const speech = blockToSpeech(course, block)
    if (speech) sections.push(speech)
  }

  return sections.flatMap((section) => splitNarrationText(section))
}
