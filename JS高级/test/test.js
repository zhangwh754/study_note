function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  console.log(this.name)
}

const p1 = new Person('zwh')
const p2 = new Person('li')

p1.getName()
p2.getName()

console.log(p1.getName === p2.getName)
