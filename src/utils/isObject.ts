export const isObject = (obj: unknown) =>
  Object.prototype.toString.call(obj) === '[object Object]'
