/* eslint-disable @typescript-eslint/no-explicit-any */
import {pickRandomItemsFromArray} from '@/src/utils/arrayUtils'

describe('pickRandomItemsFromArray', () => {
  it('should return a new array with the specified number of random items', () => {
    const arr = [1, 2, 3, 4, 5]
    const count = 3
    const result = pickRandomItemsFromArray(arr, count)
    expect(result.length).toBe(count)
    result.forEach(item => expect(arr).toContain(item))
    expect(result).not.toBe(arr) // Ensure a new array is returned
  })

  it('should return an empty array if the input array is empty', () => {
    const arr: any[] = []
    const count = 3
    const result = pickRandomItemsFromArray(arr, count)
    expect(result).toEqual([])
  })

  it('should return all items if count is greater than or equal to array length', () => {
    const arr = [1, 2, 3]
    const count = 5
    const result = pickRandomItemsFromArray(arr, count)
    expect(result.length).toBe(arr.length)
    result.forEach(item => expect(arr).toContain(item))
  })

  it('should handle count = 0', () => {
    const arr = [1, 2, 3]
    const count = 0
    const result = pickRandomItemsFromArray(arr, count)
    expect(result).toEqual([])
  })
})
