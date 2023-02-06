export const getCookie = (key: string) => {
  const cookies = document.cookie.split('; ')
  if (cookies.length > 0) {
    for (const cookie of cookies) {
      const cookieEntry = cookie.split('=')
      const index = cookieEntry.findIndex(item => item.trim() === key)
      if (index !== -1)
        // return 会中断 for of，并结束函数执行
        return decodeURIComponent(cookieEntry[1])
    }
  }
  return undefined
}
