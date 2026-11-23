import { describe, expect, it } from 'vitest'
import { procuraduriaCourse } from '../../content/courses/procuraduria-104-2026-3pu15/course'
import { getProcuraduriaTopicVisual } from '../../src/lib/procuraduriaVisualGuides'

describe('Guías SVG exclusivas de Procuraduría', () => {
  it('ofrece un esquema bajo demanda para todos los 85 módulos', () => {
    expect(procuraduriaCourse.modules).toHaveLength(85)
    for (const module of procuraduriaCourse.modules) {
      const graphic = getProcuraduriaTopicVisual(module.id)
      expect(graphic, module.id).not.toBeNull()
      expect(graphic!.image, module.id).toMatch(/^\/media\/lesson-support\/[a-z0-9-]+\.svg$/)
    }
    expect(procuraduriaCourse.lessons.filter((lesson) => lesson.order === 1)).toHaveLength(85)
  })

  it('incluye nueve diagramas SVG estáticos y accesibles', () => {
    const images = new Set(procuraduriaCourse.modules.map((module) => getProcuraduriaTopicVisual(module.id)!.image))
    expect(images.size).toBe(9)
    for (const image of images) {
      expect(image).toMatch(/^\/media\/lesson-support\/[a-z0-9-]+\.svg$/)
      expect(image.includes('..')).toBe(false)
    }
  })

  it('nunca asigna un recurso PGN a módulos de DIAN u otros identificadores', () => {
    expect(getProcuraduriaTopicVisual('m2')).toBeNull()
    expect(getProcuraduriaTopicVisual('pgn-m85')).toBeNull()
    expect(getProcuraduriaTopicVisual('pgn-m-1')).toBeNull()
    expect(getProcuraduriaTopicVisual('pgn-m0-l1')).toBeNull()
  })
})
