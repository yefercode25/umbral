import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { getProcuraduriaLessonVisual } from '../../src/lib/procuraduriaLessonVisuals'

describe('Procuraduría: 255 ayudas visuales de lección', () => {
  it('ofrece tres esquemas únicos por cada módulo sin alterar IDs', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    expect(procuraduriaCourse.lessons).toHaveLength(255)
    const paths = new Set<string>()
    for (const module of procuraduriaCourse.modules) {
      for (const order of [1, 2, 3]) {
        const match = procuraduriaCourse.lessons.find(l => l.moduleId === module.id && l.order === order)
        expect(match, `${module.id}-l${order}`).toBeDefined()
        const diagram = getProcuraduriaLessonVisual(module.id, order)
        expect(diagram).not.toBeNull()
        expect(diagram!.image).toMatch(/^\/media\/procuraduria\/module-diagrams\/pgn-m\d+-l[123]\.svg$/)
        paths.add(diagram!.image)
      }
    }
    expect(paths.size).toBe(255)
  })

  it('impide diagramas ajenos a PGN o fuera de las tres lecciones', () => {
    for (const id of ['m9', 'pgn-m85', 'pgn-m-1', 'pgn-m7-l1', 'pgn-m007', 'pgn-u5']) {
      expect(getProcuraduriaLessonVisual(id, 1)).toBeNull()
    }
    expect(getProcuraduriaLessonVisual('pgn-m10', 0)).toBeNull()
    expect(getProcuraduriaLessonVisual('pgn-m10', 4)).toBeNull()
    expect(getProcuraduriaLessonVisual('pgn-m10', 1.5)).toBeNull()
  })
})
