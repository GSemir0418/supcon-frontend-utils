import { count } from 'utils/count'
describe('count', () => {
  it('能够做加法', () => {
    expect(count(1, 2)).toEqual(3)
  })
})
