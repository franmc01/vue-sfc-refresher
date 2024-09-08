// sum.test.ts
import { expect, test } from 'vitest'
import { addArray, sum } from '@/helpers/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('add [] to equal ', () => {
  expect(addArray([])).toBe(0)
})

test('add [1, 2, 3] to equal 6', () => {
  expect(addArray([1, 2, 3])).toBe(6)
})
