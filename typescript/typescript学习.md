## ts配置

```sh
tsc --init
```

修改"outDir": "./js",

```sh
tsc --watch test.ts
```

可以自动监听test.ts的修改，转成js文件



## 基础类型

### ts字符类型

```typescript
const firstName: string = 'John'
const lastName: string = 'Doe'
const fullName: string = `${firstName} ${lastName}` //John Doe
```

### ts数字类型

`除了普通数字`还可以声明非数字等`特殊数字`

```typescript
const number: number = 1  //普通数字
const notANumber: number = NaN  //非数字
const infinity: number = Infinity  //无穷大
const decimal: number = 6  //十进制
const hex: number = 0xf00d  //十六进制
const binary: number = 0b1010  //二进制
```

### ts布尔类型

```typescript
const boolean1: boolean = true  //true
const boolean2: boolean = Boolean(0)  //false
```

### ts空值(void)

声明为void的变量，只能赋予undefined

```typescript
const u: void = undefined

const foo = (): void => {
  // return 123  //不能将类型“number”分配给类型“void”。
  return  //正确
} 
```

### ts null和undefined类型

```typescript
const n:null = null
const u:undefined = undefined
```



## 任意类型

### any和unknown

```typescript
// unknown比any更安全,声明变量的时候没有指定任意类型默认为any
let foo1: unknown = { a: 1, fn: () => {} }
// 如果是unknow 是不能调用属性和方法
foo1.a //对象的类型为 "unknown"。报错
foo1.fn() //对象的类型为 "unknown"。报错

let foo2: any = { a: 1, fn: () => {} }
// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
foo2.a //不报错
foo2.fn() //不报错
```



## 接口和对象类型

接口interface即一种约束，让数据接口满足约束的格式。

### 基本使用

```ts
interface Obj {
  a: number
  b: string
}

const obj: Obj = {
  a: 1,
  b: '2',
}
```

```ts
//重名的interface会自动合并
interface Obj {
  a: number
  b: string
}

interface Obj {
  c: boolean
}

const obj: Obj = {
  a: 1,
  b: '2',
  c: true,
}
```

### 可选式操作符

代表可有可无的属性

```ts
interface Obj {
  a?: number
  b?: string
}
```

### propName

可以有其他任意类型的属性，用于后台传未知值

```ts
interface Obj {
  a: number
  [propName: string]: any
}

const obj: Obj = {
  a: 1,
  b: false
}
```

### 联合类型

下例为任意为string或number的属性

```ts
interface Obj {
  [propName: string]: string | number
}

const obj: Obj = {
  a: 1,
  b: '2',
  // c: false // 不能将类型“boolean”分配给类型“string | number”。
}
```

### 只读属性

不能再给再给属性赋值

```ts
interface Obj {
  readonly a:number,
  b:number,
}

const obj: Obj = {
  a: 1,
  b: 2,
}
// obj.a = 3 //无法分配到 "a" ，因为它是只读属性。
obj.b = 3
```

### 定义函数

```ts
interface Obj {
  foo(): void
}

const obj: Obj = {
  foo: (): void => {},
}
```

### 继承

```ts
interface People {
  name: string;
}

interface Chinese extends People {
  city: string;
}

const obj: Chinese = {
  name: "张三",
  city: '上海'
}
```



## 数组类型

### 基本使用

直接定义和使用数组方法都不能超出类型限制

```ts
const arr1: number[] = [1, 2, 3]
// const arr2: number[] = [1, 2, 3, '1'] //不能将类型“string”分配给类型“number”。
const arr3: number[] = [1, 2, 3]
// arr3.push('4')  //不能将类型“string”分配给类型“number”。

const arr4: number[] = [1, 2, 3] //数字类型的数组
const arr5: string[] = ['1', '2'] //字符串类型的数组
const arr6: any[] = [1, '2', true] //任意类型的数组

const arr7: object[] = [{}, {}] // 对象类型的数组
```

### 数组泛型

不常用

```ts
const arr1: Array<number> = [1, 2, 3]
const arr2: Array<string> = ['a', 'b', 'c']
```

### 用接口表示数组

```ts
interface NumberArray {
  [index: number]: number
}
//表示：如果索引的类型是数字时，那么值的类型必须也是数字

const arr: NumberArray = [1, 2, 3]
// const arr2: NumberArray = ['a', 'b', 'c'] //不能将类型“string”分配给类型“number”。
```

### 多维数组

```ts
const arr:number[][] = [[1,2], [3,4]];
```

### 接收arguments类数组

```ts
function foo(...args: any): void {
  console.log(arguments)
  // const arr:number[] = arguments // error, arguments是一个类数组
  const arr: IArguments = arguments
  console.log('arr', arr) // arr [Arguments] { '0': 1, '1': 2, '2': 3 }
}

foo(1, 2, 3)
```

IArguments是TS定义好的类型，相当于

```ts
interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}
```

### any 在数组中的应用

```ts
const list: any[] = ['test', 1, [], { a: 1 }]
```



## 函数拓展

### 基本使用

```ts
const fn = (name: string, age: number): void => console.log(`${name}的年龄是${age}`)

fn('zhang', 18) //zhang的年龄是18
```

### 可选参数和默认值

```ts
const fn = (name: string = 'li', age?: number): void =>
  console.log(`${name}的年龄是${age || '未知'}`)

fn('zhang') //zhang的年龄是未知
fn() //li的年龄是未知
```

### 接口定义函数

括号内限制了函数传参的类型，冒号后限制了函数返回值的类型

```ts
interface Add {
  (a: number, b: number): number
}

const foo: Add = (c: number, d: number) => c + d

console.log(foo(1, 2))  //3
```

### 定义函数的剩余参数

```ts
const fn = (array: number[], ...items: any[]): any[] => {
  console.log(array, items)
  return items
}

let a: number[] = [1, 2, 3]

fn(a, '4', '5', '6')
```

### 函数重载

函数重载是方法名字相同，而参数不同，返回类型可以相同也可以不同

- 如果参数类型不同，则操作函数参数类型应设置为any
- 参数数量不同，可以将不同的参数设置为可选

```ts
type sexType = 'male' | 'female'

type People = {
  id: number
  name: string
  sex: string
}

const people: People[] = [
  {
    id: 1,
    name: 'zhang',
    sex: 'male'
  },
  {
    id: 2,
    name: 'liu',
    sex: 'female'
  },
  {
    id: 3,
    name: 'nie',
    sex: 'male'
  }
]

function find(sex: sexType): People[]
function find(id: number): People
function find(param: any): People[] | People | undefined {
  if (typeof param === 'string') {
    return people.filter(person => person.sex === param)
  } else {
    return people.find(person => person.id === param)
  }
}

console.log(find(1))  // { id: 1, name: 'zhang', sex: 'male' }
console.log(find('male'))
// [
//   { id: 1, name: 'zhang', sex: 'male' },
//   { id: 3, name: 'nie', sex: 'male' }
// ]
```



## 类型断言、联合类型、交叉类型

### 联合类型的基础使用 (|)

```ts
// 用联合类型来同时支持手机号和座机号
let myPhone1: number | string = '010-820'
let myPhone2: number | string = 13501838597
// let myPhone3: number | string = true  //不能将类型“boolean”分配给类型“string | number”。
```

### 函数使用联合类型 

```ts
const convertBoolean = (type: string | boolean): boolean => !!type

console.log(convertBoolean('1')) //true
console.log(convertBoolean(true))  //true
```

### 交叉类型的基本使用 (&)

交叉类型即多种类型的集合，联合对象将具有所联合类型的所有成员

```ts
interface Name {
  name: string
}
interface Age {
  age: number
}

const foo = (People: Name & Age): void => console.log(`${People.name}的年龄是${People.age}。`)

foo({ name: '张三', age: 18 })
// foo({ name: '张三'})  // 报错
```

### 类型断言基本使用

两种语法

| 值 as 类型（常用） | <类型>值      |
| ------------------ | ------------- |
| value as string    | <string>value |

```ts
interface A {
  run: string
}

interface B {
  build: string
}

const fn = (type: A | B): string => {
  // return type.build // 类型“A | B”上不存在属性“build”。类型“A”上不存在属性“build”。
  return (type as B).build	//使用类型推断传入的是A接口的值
}
```

🔥🔥：类型断言只能`欺骗`TS编译器，无法避免运行时的错误，滥用类型断言可能会造成运行错误

### any临时断言

```ts
// window.a = 123;  //报错，window上没有a属性

(window as any).b = 456
```

### as const

对字面值的断言，基础类型和const声明一样

数组、对象，数据无法做出任何修改

```ts
let str = 'Hello World' as const

// str = 123 // error  : 'str' is a constant of type 'string'

let arr1 = [1, 2, 3] as const
const arr2 = [1, 2, 3]

// arr1.push(4)  //类型“readonly [1, 2, 3]”上不存在属性“push”。
arr2.push(4)  //ok
```

### 类型断言不会影响实际结果

```ts
const foo = (anyThing: any) => anyThing as boolean

console.log(foo(1))
```



## 内置对象

### ECMAScript内置对象

Boolean、Number、string、RegExp、Date、Error

```ts
const b: Boolean = new Boolean(1)
console.log(b)
const n: Number = new Number(true)
console.log(n)
const s: String = new String('哔哩哔哩关注小满zs')
console.log(s)
const d: Date = new Date()
console.log(d)
const r: RegExp = /^1/
console.log(r)
const e: Error = new Error('error!')
console.log(e)
```

### Dom和Bom的内置对象

略

### 定义Promise

如果不定义类型，ts编译器无法推断出返回的类型

用<>进行约束

```ts
const foo = () => new Promise<number[]>(resolve => resolve([1, 2]))

;(async () => {
  const res = await foo()
  console.log(res.reverse()) // [ 2, 1 ]
})()
```



## Class类

TypeScript中，定义变量要在constructor上面先声明

```ts
class User {
  // 在这里声明类的属性列表
  readonly id: string // 定义只读属性
  name: string
  age: number
  sex: '男' | '女'

  constructor(name: string, age: number = 30, sex: '男' | '女' = '男') {
    this.id = Math.random().toString(32).slice(-6)
    this.name = name
    this.age = age
    this.sex = sex
    this.getInfo()
  }
  /**
   * 定义私有的函数
   */
  private getInfo() {
    console.log(this)
  }
}

const user1 = new User('qi', 18, '女')
const user2 = new User('li')

user1.age++
// user1.id = 'dasdsa'  //只读属性
```

### 三种修饰符

`public` 修饰符 可以让你定义的变量`内部访问 也可以外部访问 `，如果不写默认就是public

`private` 修饰符 代表定义的变量私有的`只能在内部访问` ，不能在外部访问

`protected`修饰符 代表定义的变量私有的`只能在内部和继承的子类中访问`， 不能在外部访问

```ts
class Person {
  public name: string
  private age: number
  protected id: any
  constructor(name: string, ages: number) {
    this.name = name
    this.age = ages
    this.id = Math.random().toString(32).slice(-6)
    this.run()
  }
  run() {
    // 在内部访问
    console.log('在内部访问', this.id)
  }
}

class Man extends Person {
  constructor() {
    // Super即父类的constructor方法
    super('张三', 18)
    // 在继承的子类访问
    console.log('在继承的子类访问', this.id)
  }
}
let xiaoman = new Person('小满', 30)
let man = new Man()

// 不能在外部访问
// console.log(xiaoman.id)
```

### static 静态属性 和 静态方法

- static定义的属性，不能用this访问，只能用类名去调用
- static的静态函数，也只能用类名去调用
- 但如果两个函数都是static静态，可以用this互相调用
- static静态函数也可以用this访问static定义的属性

```ts
class Foo {
  static sex: string = 'male'
  constructor() {
    this.foo1()
  }
  foo1() {
    // console.log(this.sex)   //属性“sex”在类型“Foo”上不存在。
    console.log(Foo.sex) //'male'
  }
  //   静态方法可以用static互相调用
  static foo2() {
    this.foo3()
    // this.foo4()  //静态方法不能调用非静态方法
  }
  static foo3() {
    this.foo2()
  }
  foo4() {
    // this.foo2() //非静态方法不能调用静态方法
  }
}

const bar = new Foo()
```

### interface 定义 类

ts interface 定义类 使用关键字` implements ` 后面跟interface的名字多个用逗号隔开 继承还是用extends

- 用接口描述类
- 类也能同时写继承

```ts
interface PersonClass {
  get(type: boolean): boolean
}

interface PersonClass2 {
  set(): void
  asd: string
}

class A {
  name: string
  constructor() {
    this.name = '123'
  }
}

class Person extends A implements PersonClass, PersonClass2 {
  asd: string
  constructor() {
    super()
    this.asd = '123'
  }
  get(type: boolean) {
    return type
  }
  set() {}
}

const p1 = new Person()
console.log('p1.get(!!1)', p1.get(!!1)) //true
// p1.get('1')
```

### 抽象类

1. 抽象类不能直接实例化，只能被继承
2. 抽象类继承在抽象类中，可以不实现，表示属于该抽象类的一个方法
3. 如果继承的非抽象类中，那么抽象类的方法必须实现

```ts
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
  setName(name: string) {
    this.name = name
  }
  abstract getName(): string
}

// new A //无法创建抽象类的实例。 特点1

abstract class B extends A {} //未实现A的getName方法 特点2

class C extends B {
  constructor(name: string) {
    super(name)
  }
  getName(): string { //C必须实现继承自B又继承自A的方法getName 特点3
    return this.name
  }
}

const b = new C('zhang')

console.log(b.getName()) //zhang
b.setName('li')
console.log(b.getName()) //li
```



## 元祖类型

元组（Tuple）是`固定数量`的`不同类型`的`元素的组合`。

### 特点

- 数量已知
- 元素类型可以不同

### 基本使用

元祖的（类型）顺序也必须按照约定的来，不能打乱

```ts
let arr1: [number, string] = [1, 'string']
arr1[0] = 2
let arr: [number, string] = [1, 'string']
// arr[0].length //error, 数字是没有length
arr[1].length //success, string有length

let arr2: [number, boolean, string, undefined] = [1, true, 'sring', undefined]
```

### 越界元素

越界元素必须遵循元祖的联合类型

```ts
let arr1: [number, string] = [1, 'string']
arr1.push(1) //success
// arr1.push(true) //error
//本例中只能加number或string类型的元素
```

### 应用场景

如需要展示的excel数据

```ts
let excel: [string, string, number, string][] = [
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
  ['title', 'name', 1, '123'],
]
```



## 枚举类型

### 基本使用

```ts
enum Types {
  Red,	//等同于Red = 0
  Green,  //Green = 1
  Blue, //Blue = 2
}

console.log('Types.Red', Types.Red) // 0
console.log('Types.Green', Types.Green) //1
console.log('Types.BLue', Types.Blue) //2
```

### 数字增长枚举

Red初始化为3，其余成员会从3开始自动增长

```ts
enum Types {
  Red = 3,
  Green,
  Blue,
}

console.log('Types.Red', Types.Red) // 3
console.log('Types.Green', Types.Green) //4
console.log('Types.BLue', Types.Blue) //5
```

### 数字枚举注意点

数字枚举在定义值时，可以使用计算值和常量。但是要注意，如果`某个字段使用了计算值或常量`，那么该字段后面`紧接着的字段必须设置初始值`

```ts
// 初值为计算值
const getValue = () => {
  return 0;
};
// enum ErrorIndex {
//   a = getValue(),
//   b, // error 枚举成员必须具有初始化的值
//   c
// }
enum RightIndex {
  a = getValue(),
  b = 1,
  c
}
// // 初值为常量
// const Start = 1;
// enum Index {
//   a = Start,
//   b, // error 枚举成员必须具有初始化的值
//   c
// }
```

### 字符串枚举

每个字段的值都必须是字符串字面量，或者是该枚举值中另一个字符串枚举成员：

字符串枚举可以提供一个有意义的可读的值

```ts
enum Types {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
  //Blue = Green,
}

console.log('Types.Red', Types.Red) // red
console.log('Types.Green', Types.Green) // green
console.log('Types.BLue', Types.Blue) // blue
```

### 异构枚举

枚举可以混合数字和字符串

实际开发中不推荐使用

```ts
enum Types {
  No = 'No',
  Yes = 1,
}
```

### 常量枚举/const枚举

如果枚举只是为了增加代码的可读性，可以使用常量枚举，即再enum前增加一个const

这样枚举不会创建编译后的对象，只会从枚举中拿到对应的值进行替换

```ts
const enum Color {
  Red,
}

const myColor = Color.Red
```

编译后相当于

```js
var myColor = 0 /* Red */;
```

### 接口枚举

当所有枚举成员都拥有字面量枚举值时，枚举成员就成为了类型

代码的Dog接口使用Animal.Dog作为类型，指定接口Dog的对象则必须有一个type字段，且类型为Animal.Dog。

```ts
enum Animal {
  Dog = '--Dog--',
  Cat = '--Cat--',
}
interface Dog {
  type: Animal.Dog
}
interface Cat {
  type: Animal.Cat
}
// let cat: Cat = {
//   type: Animal.Dog, // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
// }
let dog: Dog = {
  type: Animal.Dog,
}

console.log(dog) // { type: '--Dog--' }
```

### 联合枚举

例子定义接口 Light 的 status 字段的类型为枚举值 Status，那么此时 status 的属性值必须为 Status.Off 和 Status.On 中的一个，也就是相当于`status: Status.Off | Status.On`。

```ts
enum Status {
  Off,
  On,
}

interface Light {
  status: Status
}

const light2: Light = {
  status: Status.Off,
}
const light3: Light = {
  status: Status.On,
}
```

### 反向映射

```ts
enum Enum {
  fall,
}
let a = Enum.fall
console.log(Enum[a]) //fail
let nameOfA = Enum[Enum.fall]
console.log(nameOfA) //fall
```



## 类型推论

### 自动推论

```ts
let str = 'str' //自动推论为string类型

// str = 123 //不能将类型“number”分配给类型“string”。
```

```ts
let str //未赋值，自动推论为any类型

str = 123 
str = 'any'
```

### 类型别名

```ts
type str = string

const s: str = 'zhang'
```

```ts
type str = () => string

const s: str = () => 'zhang'
```

```ts
type str = string | number

let s: str = 123

let s2: str = '123'

console.log(s, s2) //123 '123'
```

```ts
type value = boolean | 0 | '213'

let s1: value = true  //true
// let s2: value = 1 //error
let s3: value = '213'  //true
//变量s的值  只能是上面value定义的值
```

### 联合类型

```ts
type A = {
  a: number
  b: string
}

type B = {
  c: Boolean
}

const foo: A & B = {
  a: 1,
  b: '2',
  c: true,
}
```



## Never类型

never表示不应该存在的状态

```ts
// 返回never的函数必须存在无法达到的终点，下例中两个函数永远不会返回值

// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
  throw new Error(message)
}

// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {}
}
```

### 应用场景

用TS的类型检查帮助发现代码存在的问题

```ts
interface A {
  color: 'red'
}

interface B {
  color: 'blue'
}

interface C {
  color: 'yellow'
}

type Color = A | B | C

function handleColor(val: Color) {
  switch (val.color) {
    case 'red':
      break
    case 'blue':
      break
    // case 'yellow':
    //   break
    default:
      // 如果进入default代表代码有问题，上述代码缺少了yellow的判断
      const bugChecking: never = val //不能将类型“C”分配给类型“never”。
      break
  }
}
```



## Symbol类型

symbol的值是通过Symbol构造函数创建的

可以传递可选参数`用作唯一标识`，只支持number或string类型的参数

### Symbol的值是唯一的

```ts
console.log(Symbol('a') === Symbol('a'))  //false
console.log(Symbol() === Symbol())  //false
```

### 拿到Symbol的值

#### 拿不到

- for in循环
- Object.key()
- Object.getOwnPropertyNames()
- JSON.stringify()

#### 拿得到

一般用这两种方式获取对象的Symbol值

- Object.getOwnPropertySymbols()
- Reflect.ownKeys()

```ts
const id: symbol = Symbol('id')

const foo = {
  [id]: Math.random().toString(36).slice(2, 10),
  name: 'zhang',
  age: 18,
}

console.log('foo', foo) //foo { name: 'zhang', age: 18, [Symbol(id)]: 'oj69tzz7' }

for (const key in foo) {
  console.log(key) //name  age
}
console.log(Object.keys(foo)) //[ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(foo)) //[ 'name', 'age' ]
console.log(JSON.stringify(foo)) //{"name":"zhang","age":18}

console.log(Object.getOwnPropertySymbols(foo)) //[ Symbol(id) ]
console.log(Reflect.ownKeys(foo)) //[ 'name', 'age', Symbol(id) ]
```



## 迭代器和生成器

### 迭代器

#### 数组

```ts
const arr = [1, 2, 3, 4]
let iterator = arr[Symbol.iterator]()

console.log(iterator.next()) //{ value: 1, done: false }
console.log(iterator.next()) //{ value: 2, done: false }
console.log(iterator.next()) //{ value: 3, done: false }
console.log(iterator.next()) //{ value: 4, done: false }
console.log(iterator.next()) //{ value: undefined, done: true }
```

#### Map()

```ts
const foo: Map<string, string> = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
])

const iterator: Iterator<any> = foo[Symbol.iterator]()

console.log(iterator.next()) //{ value: [ 'key1', 'val1' ], done: false }
console.log(iterator.next()) //{ value: [ 'key2', 'val2' ], done: false }
console.log(iterator.next()) //{ value: [ 'key3', 'val3' ], done: false }
console.log(iterator.next()) //{ value: undefined, done: true }
```

#### 自定义简单迭代器函数

不支持对象

```ts
const foo1: Map<string, string> = new Map([
  ['key1', 'val1'],
  ['key2', 'val2'],
  ['key3', 'val3'],
])
const foo2: number[] = [1, 2, 3, 4]

function generator(args: any) {
  const iterator: Iterator<any> = args[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = iterator.next()
    if (!next.done) {
      console.log(next.value)
    }
  }
}

generator(foo1) // [ 'key1', 'val1' ][ 'key2', 'val2' ][ 'key3', 'val3' ]
generator(foo2) // 1 2 3 4
```

### for of 和 for in

for of 遍历索引，for of 遍历值

```js
const arr = ['a', 'b', 'c']

for (const i in arr) {
  console.log(i)  //0 1 2
}

for (const i of arr) {
  console.log(i)  //'a' 'b' 'c'
}
```

### 生成器

- 生成器需要再function后加一个*
- 生成器函数通过yield控制函数的执行流程
- 生成器函数返回一个Genrator(生成器)
- 直接调用生成器函数是不会执行的，它会返回生成器。yield表示每次会在这儿停止。

```js
function* getName() {
  console.log('函数开始执行')
  const value1 = 'tom'
  yield value1
  const value2 = 'mary'
  yield value2
  console.log('函数执行结束')
}
// 返回生成器
const iterator = getName()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
// 函数开始执行
// { value: 'tom', done: false }
// { value: 'mary', done: false }
// '函数执行结束'
// { value: undefined, done: true }
```

#### 生成器传值

```js
function* sum() {
    const value1 = 10
    const n1 = yield value1 // 这个n1的值为5
    const value2 = 20 * n1
    const n2 = yield value2 // 这个n2的值为10
    const value3 = 30 * n2
    yield value3
  }
  const iterator = sum()
  console.log('第一次的值：', iterator.next())
  console.log('第二次的值：', iterator.next(5)) // 传给第一次yield的返回值
  console.log('第三次的值：', iterator.next(10)) // 传给第二次yield的返回值
  // 第一次的值： {value: 10, done: false}
  // 第二次的值： {value: 100, done: false}
  // 第三次的值： {value: 300, done: false}
```

#### 生成器提前结束

iterator.return可以提前结束

```js
function* sum() {
  const value1 = 10
  const n1 = yield value1

  // 相当与在这执行了以下代码
  // return 5
  const value2 = 20 * n1
  const n2 = yield value2

  const value3 = 30 * n2
  yield value3
}
const iterator = sum()
console.log('第一次的值：', iterator.next())
console.log('第二次的值：', iterator.return(5))
// 第一次的值： {value: 10, done: false}
// 第二次的值： {value: 5, done: true}
```

#### 生成器抛出异常

```js
function* sum() {
  yield 10
  try {
    yield 20
  } catch (error) {
    console.log(error)
  }
  yield 30
}
const iterator2 = sum()
console.log('第一次的值：', iterator2.next())
console.log('第二次的值：', iterator2.next())
// 注意：throw紧跟着上个next()执行异常处理，所以要看好应该进行异常处理的位置
console.log('第三次的值：', iterator2.throw('有错误'))
console.log('第四次的值：', iterator2.next())

// 结果：
// 第一次的值： {value: 10, done: false}
// 第二次的值： {value: 20, done: false}
// 有错误
// 第三次的值： {value: 30, done: false}
// 第四次的值： {value: undefined, done: true}
```



## 泛型

### 函数式泛型

泛型可以多次复用

```ts
// function str(a: string, b: string) {
//   return [a, b]
// }

// str('a', 'b')

function foo<T>(a: T, b: T) {
  return [a, b]
}

foo<number>(1, 2)
foo<string>('a', 'b')
foo<boolean>(true, false)
```

```ts
function bar<T, U>(a: T, b: U) {
  const arr: (T | U)[] = [a, b]
  return arr
}

bar<number, boolean>(1, true)
// bar<string, number>(1, 2) //类型“number”的参数不能赋给类型“string”的参数。
```

### 定义泛型接口????

```ts
interface MyInter<T> {
  (arg: T): T
}

function fn<T>(arg: T): T {
  return arg
}

let result: MyInter<number> = fn

result(123)
```

### 泛型约束

#### 接口约束

用extends，使用接口约束泛型

```ts
interface Len {
  length: number
}

function foo<T extends Len>(a: T) {
  console.log('a.length', a.length)
  return a.length
}

// foo(1)  //类型“number”的参数不能赋给类型“Len”的参数。
foo('1') //1
foo([1, 2, 3]) //3
```

#### keyof约束

定义了T类型，使用extends关键字继承object类型的子类型

K相当于T的所有键的联合类型

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = { a: 1, b: 2, c: 3 }

getValue(obj, 'a')
// getValue(obj, 'd') //类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。K相当于联合类型"a" | "b" | "c"
```

#### 泛型类

```ts
class Sub<T> {
  arrt: T[] = [] //t[] = [] 意为T泛型类型的数组，默认为空数组
  add(a: T): T[] {
    return [a]
  }
}

const s = new Sub<number>()
console.log(s.arrt) //[]
s.arrt = [1, 2, 3, 4]
// s.arrt = ['a', 'b', 'c']  //不能将类型“string”分配给类型“number”。
s.add(1) //[1]
// s.add('a')//类型“string”的参数不能赋给类型“number”的参数。
```



## tsconfig.json配置

```json
"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
 
// 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
"include": [
   "src/**/*"
],
// 指定一个排除列表（include的反向操作）
 "exclude": [
   "demo.ts"
],
// 指定哪些文件使用该配置（属于手动一个个指定文件）
 "files": [
   "demo.ts"
]
```

## namespace命名空间

- 内部模块，用于组织代码，避免命名冲突
- 命名空间中的类默认私有
- `通过export暴露`
- 通过namespace关键词定义

TypeScript与ECMAScript 2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）

### 基础使用

```ts
namespace a {
  export const Time: number = 1000
  export const fn = <T>(arg: T): T => {
    console.log(arg)
    return arg
  }
  fn(Time)
}

namespace b {
  export const Time: number = 3000
  export const fn = <T>(arg: T): T => {
    console.log(arg)
    return arg
  }
  fn(Time)
}

a.Time //1000
b.Time //3000
```

namespace编译为es5相当于一个函数导入名为b的对象

### 嵌套命名空间

```ts
namespace A {
  export namespace B {
    export const c = 100
  }
}

console.log(A.B.c) //100
```

### 抽离命名空间

```ts
//a.ts
export namespace V {
  export const a = 1
}
```

```ts
//b.ts
import { V } from './a'
console.log(V.a) //1
```

### 命名空间的别名

```ts
namespace A {
  export namespace B {
    export const C = 1
  }
}

import X = A.B.C
import BB = A.B

console.log(X === BB.C) //true
```

### 命名空间的合并

```ts
namespace A {
  export const a = 1
}

namespace A {
  export const b = 1
}

A.a //1
A.b //1
```

## 三斜线指令

三斜线指令是包含单个XML标签的单行注释，注释的内容会作为编译器指令来使用

- 三斜线指令只可以放在包含它的文件的最顶端

### 依赖

```ts
//a.ts
namespace A {
  export const a = 1
}
```

```ts
//b.ts
namespace A {
  export const b = 2
}
```

```ts
///<reference path="./a.ts"/>
///<reference path="./b.ts"/>

A.a //1
A.b //2
```

### ts.config.json配置

```json
{
  "module": "amd",	//避免outFile报错
  "outFile": "./lib/index.js",	//控制打包文件的输出位置
  "removeComments": true,	//移除打包文件的注释(包括三斜线指令)
}
```

### 声明文件引入

表明这个文件使用了 `@types/node/index.d.ts`里面声明的名字

```ts
///<reference types="node" />
```



## 声明文件d.ts

### 声明文件declare

```ts
declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
/// <reference /> 三斜线指令
```

### 自己创建声明文件

```ts
//express.d.ts
declare const express: () => any
```



## Mixins混入

### 对象混入

people是Name、Age、Sex联合类型

```ts
interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}
 
let people1: Name = { name: "zhang" }
let people2: Age = { age: 23 }
let people3: Sex = { sex: 1 }
 
const people = Object.assign(people1,people2,people3)
```

### 类的混入

必须关闭严格模式，不然无法通过ts编译

```ts
// mixin类A
class A {
  type: boolean
  changeType(): void {
    this.type = !this.type
  }
}

// mixin类B
class B {
  name: string
  getName(): string {
    return this.name
  }
}

// 创建C类，结合两个mixin
class C implements A, B {
  type: boolean = false
  name: string = 'zhang'
  changeType: () => void
  getName: () => string
}

Mixins(C, A, B)
//Mixins会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
function Mixins(curCls: any, ...itemCls: any[]) {
  itemCls.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      curCls.prototype[name] = item.prototype[name]
    })
  })
}

const foo = new C()
console.log(foo.type) //false
console.log(foo.getName())  //zhang
foo.changeType()
console.log(foo.type) //true
```

Object.getOwnPropertyNames()可以获取对象自身的属性，除去他继承来的属性，
对它所有的属性遍历，它是一个数组，遍历一下它所有的属性名



## 装饰器Decorator

- Decorator装饰器是一项实验性特性，在未来可能会发生改变
- 装饰器增加了代码的可读性，且提供了一种方便的手段增加或修改类的功能
- 开启装饰器功能需要在ts.config.json中启用`experimentalDecorators`选项

### 基础使用

装饰器是一种特殊类型的声明，能够被附加到类声明、方法、访问符、属性或参数上

```ts
const watcher: ClassDecorator = (target: Function) => {
  target.prototype.double = (params: number): number => {
    return params * 2
  }
}

@watcher
class A {
  constructor() {}
}

const a = new A()
console.log((a as any).double(10)) //20
```

### 高阶函数传参

外层的函数接受值 里层的函数最终接受类的构造函数

```ts
const watcher = (num: number): ClassDecorator => {
  return (target: Function) => {
    target.prototype.double = (): number => {
      return num * 2
    }
  }
}

@watcher(30)
class A {
  constructor() {}
}

const a = new A()
console.log((a as any).double()) //60
```

### 同时使用多个装饰器

```ts
const a: ClassDecorator = (target: Function) => {
  target.prototype.name = 'zhang'
}
const b: ClassDecorator = (target: Function) => {
  target.prototype.age = 18
}

@a
@b
class Foo {
  constructor() {}
}
const foo = new Foo()
console.log((foo as any).name) //'zhang'
console.log((foo as any).age) //18
```

### 属性和方法的修饰符

#### 属性修饰符返回值数组

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 属性的名字。
3. 固定为undefined

#### 方法修饰符返回值数组

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的属性描述符。

#### 参数修饰符返回值数组

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 参数的名字
3. 参数在函数参数列表中的索引。

```ts
//属性的修饰符
const log1: PropertyDecorator = (...args) => {
  console.log(args)
}
//方法的修饰符
const log2: MethodDecorator = (...args) => {
  console.log(args)
}
//参数的修饰符
const log3: ParameterDecorator = (...args) => {
  console.log(args)
}

class A {
  @log1 //[ {}, 'name', undefined ]
  name: 'zhang'
  constructor() {}
  @log2 //[{}, 'getName', {value: [Function: getName], writable: true, enumerable: false, configurable: true}]
  getName(@log3 name: string) { //[ {}, 'getName', 0 ]
    return this.name
  }
}
```



## Rollup构建TS项目

[(5条消息) 学习TypeScript21（Rollup构建TS项目 & webpack构建TS项目）_小满zs的博客-CSDN博客_rollup ts](https://xiaoman.blog.csdn.net/article/details/122708348)



## webpack构建TS项目

[(5条消息) 学习TypeScript21（Rollup构建TS项目 & webpack构建TS项目）_小满zs的博客-CSDN博客_rollup ts](https://xiaoman.blog.csdn.net/article/details/122708348)



## TS编写发布订阅模式

```ts
interface MyEvent {
  on: (name: string, fn: Function) => void
  emit: (name: string, ...args: any[]) => void
  off: (name: string, fn: Function) => void
  once: (name: string, ...args: any[]) => void
}

interface List {
  [key: string]: Array<Function>
}

class Dispatch implements MyEvent {
  list: List
  constructor() {
    this.list = {}
  }
  on(name: string, fn: Function) {
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback
  }
  emit(name: string, ...args: any[]) {
    const eventName = this.list[name]
    if (eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error(`${name}名称错误`)
    }
  }
  off(name: string, fn: Function) {
    const eventName = this.list[name]
    if (eventName && fn) {
      const index = eventName.findIndex(fns => {
        return fns === fn
      })
      eventName.splice(index, 1)
    } else {
      console.error(`未监听${name}`)
    }
  }
  once(name: string, fn:Function) {
    const de = (...args: any[]) => {
      fn.apply(this, args)
      this.off(name, de)
    }
    this.on(name, de)
  }
}

const o = new Dispatch()

const fn1 = (...args: any[]) => {
  console.log(args, 1)
}

const fn2 = (...args: any[]) => {
  console.log(args, 2)
}

const fn3 = (...args: any[]) => {
  console.log(args, 'once')
}

o.on('post', fn1) //监听fn1

o.on('post', fn2) //监听fn2

o.once('post', fn3) //只会监听一次

o.off('post', fn2) //取消监听fn2

o.emit('post', 1, true, 'zhang')

o.emit('post', 2, false, 'li')

//[1, true, 'zhang'] 1
//[1, true, 'zhang'] 'once'
//[2, false, 'li'] 1
```



## 进阶用法Proxy&Reflect

### Proxy

```ts
type Person = {
  name: string
  age: number
  sex: number
}

const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get(target, prop, receiver) {
      console.log('____GET____', prop)
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log('____SET____', prop)
      return Reflect.set(target, prop, value, receiver)
    },
  })
}

const logAccess = <T>(object: T, key: keyof T) => {
  return proxy(object, key)
}

const man: Person = logAccess<Person>(
  {
    name: 'zhang',
    age: 18,
    sex: 1,
  },
  'name'
)

console.log(man.age) //18

man.age = 20

console.log(man.age) //20
```



## 进阶用法Partial&Pick

### Partial

```ts
type Person = {
  name: string
  age: number
  sex: number
}

/* Partial源码 */
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

// Partial遍历传入的泛型，将每个属性变为可选的

type p = Partial<Person>
// type p = {
//   name?: string | undefined;
//   age?: number | undefined;
//   sex?: number | undefined;
// }
```

### Pick

```ts
type Person = {
  name: string
  age: number
  sex: number
}

/* Pick源码 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// Pick会挑选出传入的类型

type p1 = Pick<Person, 'name' | 'age'>
// type p = {
//   name: string
//   age: number
// }
```



## 进阶用法Readonly&Record

### Readonly

```ts
type Person = {
  name: string
  age: number
  sex: number
}

/* Readonly源码 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// Readonly遍历传入的泛型，将每个属性变为只读的

type p1 = Readonly<Person>
// type p1 = {
//   readonly name: string;
//   readonly age: number;
//   readonly sex: number;
// }
```

### Record

```ts
type Person = {
  name: string
  age: number
  sex: number
}

/* Record源码 */
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

// Record会给传入的第一个参数的联合类型，每个赋予第二个参数的类型

type K = 'A' | 'B'

type p1 = Record<K, Person>
// type p1 = {
//   A: Person
//   B: Person
// }
```



## 进阶用法infer

### infer

Type类型，如果传入的是数组类型，就返回数组类型的类型，不是就返回对应类型

Infer相当于占位符

```ts
// type Infer<T> = T extends Array<any> ? T[number] : T //与下一行同，代表取数组中的值作为key
type Type<T> = T extends Array<infer U> ? U : T  //U是占位符，不是泛型

type A = Type<string[]> //type A = string
type B = Type<(string | number)[]> //type B = string | number
type C = Type<boolean> //type C = boolean
```

### 配合tuple转换元祖类型

```ts
type TupleToUni<T> = T extends Array<infer E> ? E : never

type MyTuple = [string, number]

type A = TupleToUni<MyTuple> //type A = string | number
```

