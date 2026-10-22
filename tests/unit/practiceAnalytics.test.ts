import { describe, expect, it } from 'vitest'
import { wilsonInterval } from '../../src/lib/practiceAnalytics'

describe('intervalo estadístico formativo', () => {
  it('no calcula intervalo si no hay respuestas', () => expect(wilsonInterval(0,0)).toBeNull())
  it('acota intervalos para casos extremos', () => {
    const all = wilsonInterval(10, 10)!
    const none = wilsonInterval(0,10)!
    expect(all.high).toBeLessThanOrEqual(1)
    expect(all.low).toBeGreaterThan(0)
    expect(none.low).toBeGreaterThanOrEqual(0)
    expect(none.high).toBeLessThan(1)
  })
  it('incluye proporción observada', () => {
    const interval = wilsonInterval(15,20)!
    expect(interval.low).toBeLessThan(0.75)
    expect(interval.high).toBeGreaterThan(0.75)
  })
})
