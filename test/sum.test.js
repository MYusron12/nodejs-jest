import { sum } from '../src/sum';

test('function sum should return sum', () => {
  const result = sum(2,1)
  expect(result).toBe(3)
})