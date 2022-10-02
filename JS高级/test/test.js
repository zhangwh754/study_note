class Person {
  constructor(name) {
    this.name = name
    this._address = '上海'
  }
  // 访问器方法
  get address() {
    return this._address + '市'
  }
  set address(value) {
    this._address = value
  }
  //静态方法
  static getRandom() {
    return Math.floor(Math.random() * 10)
  }
}

const p1 = new Person('zwh')