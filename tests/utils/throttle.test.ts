import { throttle } from 'utils/throttle'

jest.useFakeTimers()
describe('throttle', () => {
  it('正常函数执行次数', () => {
    const fn = jest.fn()
    fn()
    fn()
    expect(fn).toBeCalledTimes(2)
  })

  it('只会执行一次', () => {
    const fn = jest.fn()
    const tFn = throttle(fn, 1000)
    tFn()
    tFn()
    tFn()
    expect(fn).toBeCalledTimes(1)
    jest.runAllTimers()
    tFn()
    expect(fn).toBeCalledTimes(2)
  })
})
