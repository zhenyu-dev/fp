import { curry, pipe, always } from '../essential.js'

const add = (a, b) => a + b

describe('curry', () => {
    test('parts of parameters', () => {
        expect(typeof curry(add)(1)).toBe('function')
    })
    test('all of parameters', () => {
        expect(curry(add)(1)(2)).toBe(3)
    })
})

test('always', () => {
    expect(always(1, 2, 3)).toBe(1)
})
