import { describe, expect, it } from 'vitest'
import { sum } from '../src/index'
describe('should', () => {
  it('sum works!', () => {
    expect(sum(1, 2)).toEqual(1 + 2)
  })

  // console.log()
  it('sum works!', () => {
    // expect(j('../src/index.ts').sum(1, 2)).toBe(1 + 2)
  })
})
