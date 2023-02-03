export const throttle = (fn: Function, time: number) => {
  let timer: number | null
  return (...args: unknown[]) => {
    if (timer)
      return
    fn(...args)
    timer = setTimeout(() => {
      timer = null
    }, time)
  }
}
