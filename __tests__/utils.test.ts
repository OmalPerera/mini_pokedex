import {getRandomInt} from '../src/modules/dailyPokemon/utils/getRandomId'

describe('getRandomInt', () => {
  it('should return an integer within the specified range (inclusive)', () => {
    const min = 1
    const max = 100
    for (let i = 0; i < 1000; i++) {
      const result = getRandomInt(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
      expect(Number.isInteger(result)).toBe(true)
    }
  })

  it('should return the min value when min and max are the same', () => {
    const min = 50
    const max = 50
    const result = getRandomInt(min, max)
    expect(result).toBe(50)
  })

  it('should handle negative ranges', () => {
    const min = -10
    const max = -5
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max)
      expect(result).toBeGreaterThanOrEqual(min)
      expect(result).toBeLessThanOrEqual(max)
    }
  })
})
