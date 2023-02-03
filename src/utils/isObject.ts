export const isObject = (obj: unknown) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
