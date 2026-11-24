import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { procuraduriaTransferQuestions } from '../../content/courses/procuraduria-104-2026-3pu15/buildContent'
import { procuraduriaDossierQuestions } from '../../content/courses/procuraduria-104-2026-3pu15/dossierQuestions'
import { examProfilesForCourse, selectExamQuestions } from '../../src/lib/questionSelection'
import { practiceQuestionPool } from '../../src/lib/practiceQuestionPool'

describe('Procuraduría: casos contextualizados y contenidos comunes del empleo', () => {
  const sources = new Set(procuraduriaCourse.sources.map(s => s.id))
  const allIds = new Set(procuraduriaCourse.questions.map(q => q.id))

  it('añade 170 casos de transferencia sin modificar preguntas históricas', () => {
    expect(procuraduriaTransferQuestions).toHaveLength(170)
    expect(new Set(procuraduriaTransferQuestions.map(q => q.id)).size).toBe(170)
    for (const module of procuraduriaCourse.modules) {
      const transferred = procuraduriaTransferQuestions.filter(q => q.moduleId === module.id)
      expect(transferred, module.id).toHaveLength(2)
      for (const question of transferred) {
        expect(question.case?.length ?? 0, question.id).toBeGreaterThan(350)
        expect(question.options).toHaveLength(3)
        expect(question.difficulty).toBeGreaterThanOrEqual(4)
        expect(question.options.some(o => o.id === question.correctOptionId), question.id).toBe(true)
        expect(allIds.has(question.id), question.id).toBe(true)
      }
    }
  })

  it('contiene 12 expedientes narrativos con cuatro preguntas distintas cada uno', () => {
    expect(procuraduriaDossierQuestions).toHaveLength(48)
    const byScenario = new Map<string, typeof procuraduriaDossierQuestions>()
    for (const question of procuraduriaDossierQuestions) {
      const key = question.scenarioId ?? ''
      byScenario.set(key, [...(byScenario.get(key) ?? []), question])
      expect(question.case?.length ?? 0, question.id).toBeGreaterThan(260)
      expect(question.stem.length, question.id).toBeGreaterThan(40)
      expect(question.options).toHaveLength(3)
      expect(question.type).toBe('pjs')
      expect(question.difficulty).toBeGreaterThanOrEqual(4)
      expect(new Set(question.options.map(o => o.text.trim())).size, question.id).toBe(3)
      expect(question.options.some(o => o.id === question.correctOptionId), question.id).toBe(true)
      expect(question.relatedModuleIds?.length).toBe(4)
      expect(question.sourceIds.length).toBeGreaterThan(0)
      for (const id of question.sourceIds) expect(sources.has(id), question.id + ' → ' + id).toBe(true)
    }
    expect(byScenario.size).toBe(12)
    for (const [id, items] of byScenario) {
      expect(items, id).toHaveLength(4)
      expect(new Set(items.map(q => q.stem)).size, id).toBe(4)
      expect(new Set(items.map(q => q.moduleId)).size, id).toBeGreaterThanOrEqual(3)
    }
  })

  it('amplía el banco exclusivo de práctica sin incluir los checkpoints de lección', () => {
    const practice = practiceQuestionPool(procuraduriaCourse)
    const checkpoints = new Set(procuraduriaCourse.lessons.flatMap(lesson =>
      lesson.blocks.filter(b => b.type === 'checkpoint').map(b => b.type === 'checkpoint' ? b.questionId : ''),
    ))
    expect(practice).toHaveLength(1134)
    expect(practice.some(q => checkpoints.has(q.id))).toBe(false)
    expect(practice.filter(q => q.id.startsWith('pgn-dossier-'))).toHaveLength(48)
    expect(practice.filter(q => q.id.includes('-transfer-'))).toHaveLength(170)
  })

  it('ofrece sesión de 20 expedientes difíciles de PGN sin modificar la sesión DIAN', () => {
    const pgProfile = examProfilesForCourse(procuraduriaCourse).find(x => x.id === 'functional-deep')
    expect(pgProfile?.size).toBe(20)
    const selected = selectExamQuestions(procuraduriaCourse, 'functional-deep')
    expect(selected).toHaveLength(20)
    expect(selected.filter(q => q.integrated).length).toBeGreaterThanOrEqual(4)
    for (const question of selected) {
      expect(question.integrated || question.id.startsWith('pgn-exception-') || question.id.startsWith('pgn-dossier-') || question.id.includes('-transfer-'), question.id).toBe(true)
      expect(Number(question.moduleId.slice(5)), question.id).not.toBeGreaterThanOrEqual(75)
    }
  })

  it('ofrece apoyo de ofimática en las lecciones pertinentes sin cambiar su número', () => {
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    for (const id of ['pgn-m17','pgn-m18','pgn-m52','pgn-m56','pgn-m58','pgn-m59','pgn-m65','pgn-m66','pgn-m67','pgn-m68','pgn-m74']) {
      const lesson = procuraduriaCourse.lessons.find(l => l.moduleId === id && l.order === 2)
      expect(lesson, id).toBeDefined()
      expect(lesson!.blocks.filter(b => b.type === 'comparison').length, id).toBeGreaterThanOrEqual(2)
    }
    const word = procuraduriaCourse.lessons.find(l => l.moduleId === 'pgn-m65' && l.order === 2)
    const excel = procuraduriaCourse.lessons.find(l => l.moduleId === 'pgn-m66' && l.order === 2)
    expect(word?.blocks.some(b => b.type === 'sources' && b.sourceIds.includes('office-word-track-changes'))).toBe(true)
    expect(excel?.blocks.some(b => b.type === 'sources' && b.sourceIds.includes('office-excel-subtotals'))).toBe(true)
  })
})
