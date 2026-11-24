import { expect, test } from 'vitest'
import { cumulativeMomentum } from './index'

test('accumulates signed ledger entries from the starting value', () => {
  expect(cumulativeMomentum([3, 1.8, -2, 2.7, 4, -2, 5])).toBeCloseTo(12.5)
  expect(cumulativeMomentum([-3], 25)).toBe(22)
})
