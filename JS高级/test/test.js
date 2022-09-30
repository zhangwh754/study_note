const deepClone = obj => {
  if (obj === null) return null
  let clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  if (Array.isArray(obj)) {
    clone.length = obj.length
    return Array.from(clone)
  }
  return clone
}

Function.prototype.myApply = function (thisArg, args) {
  const fn = this
  const _this = thisArg ? deepClone(Object(thisArg)) : window
  _this.fn = fn
  _this.fn(...args)
  console.log(_this)
}
// Function.prototype.myCall = () => console.log('myCall')
// Function.prototype.myBind = () => console.log('myBind')

const add = function (num1, num2) {
  console.log(this)
  // console.log(num1 + num2)
  // console.log(this.myName)
}

// foo.apply()
const obj = { myName: 'zwh', fn: 2 }
// add.myApply(obj, [1, 2])
add.myApply('abc', [1, 2])
// add.myApply(null, [1, 2])
