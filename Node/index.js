const obj = { x: 100 }
const obj2 = { y: 200 }

Object.defineProperty(obj2, 'x', {
  set(value) {
    obj.x = value
    // this.value = value
  }
})

console.log('obj:', obj)
console.log('obj2:', obj2)

obj2.x = 300

console.log('obj:', obj)
console.log('obj2:', obj2)
