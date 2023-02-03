import { isObject } from 'utils/isObject'
describe('isObject', () => {
  it('能够准确识别对象', () => {
    const a = { name: '1' }
    const b = [1, 2, 3]
    const c: unknown = []
    const d = 1
    const e = {}
    expect(isObject(a)).toBeTruthy()
    expect(isObject(b)).toBeFalsy()
    expect(isObject(c)).toBeFalsy()
    expect(isObject(d)).toBeFalsy()
    expect(isObject(e)).toBeTruthy()
  })
})
