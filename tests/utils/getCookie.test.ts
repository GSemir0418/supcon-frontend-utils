import { getCookie } from 'utils/getCookie'

describe('getCookie', () => {
  it('找不到会返回undefined', () => {
    expect(getCookie('language')).toEqual(undefined)
  })
  it('能够返回正确的cookie值', () => {
    // set/update 只能一个一个处理
    document.cookie = 'username=admin'
    document.cookie = 'language=zh_CN'
    expect(document.cookie).toEqual('username=admin; language=zh_CN')
    expect(getCookie('username')).toEqual('admin')
    expect(getCookie('language')).toEqual('zh_CN')
  })
})
