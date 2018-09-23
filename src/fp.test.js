import { curry } from './fp'

const add = (a, b) => a + b

test('curry', () => {
    expect(typeof curry(add)(1)).toBe('function')
})
