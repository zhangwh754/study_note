export const randomAlphaNumeric = length => {
  let s = ''
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2)
    return s.length >= length
  })
  return s.slice(0, length)
}

export const randomIntArrayInRange = (min, max, n = 3) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min)
