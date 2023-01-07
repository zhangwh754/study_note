## React基础

### 三个依赖包

使用react分别依赖react核心库，react dom库，转换jsx需要的babel库

同时，引入的js文件(script标签)，必须加上type=text/babel 属性

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

### render函数渲染元素（新旧两种方式）

- 新版本为先创建根元素，再用render函数渲染组件
- 旧版本为直接使用render函数，传入要渲染的组件和根元素选择器

`react18版本`

```jsx
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<h2>Hello World</h2>)
```

`React18之前的版本`

```jsx
ReactDOM.render(<h2>Hello World</h2>, document.querySelector('#root'))
```

### 更新内容

React中更新内容需要手动调用render函数，即更新变量后，需要手动调用，而非Vue中的自动更新

1. 声明一个rootRender函数
2. 调用rootRender函数
3. 点击回调中，更新变量后再调用一次rootRender函数

```jsx
const root = ReactDOM.createRoot(document.querySelector('#root'))

let msg = 'Hello World'

const btnClick = () => {
  msg = 'Hello React'

  render()
}

const render = () => {
  root.render(
    <div>
      <h2>{msg}</h2>
      <button onClick={btnClick}>btnClick</button>
    </div>
  )
}

render()
```

### 类组件

自定义类组件

1. 类组件的名字，必须用大驼峰，不然react会识别为html元素
2. 类组件，需要继承自React.Component类，也需要调用super
3. 类组件的变量定义在constructor的this.state中
4. 类组件必须有一个render函数

其他`重要`

1. 因为使用了ES6的class，因此默认内部开启了严格模式，btnClick这种自定义方法，内部回调时相当于显式绑定this，this的指向为undefined，需要在调用的时候用bind改变this的指向，也可以在constructor提前修改函数的指向
2. this.setState函数，继承自React.Component类，内部做了修改变量和调用render函数两件事情

```jsx
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      msg: 'hello world'
    }

    // this.btnClick = this.btnClick.bind(this)
  }

  btnClick() {
    this.setState({
      msg: 'hello React'
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={this.btnClick.bind(this)}>btnClick</button>
      </div>
    )
  }
}
```

### 实例1：列表渲染

```jsx
class List extends React.Component {
  constructor() {
    super()

    this.state = {
      data: ['a', 'b', 'c', 'd', 'e']
    }
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}
```

### 实例2：计数器

```jsx
class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h2>计数器：{count}</h2>
        <button onClick={this.increment.bind(this)}>increment</button>
        <button onClick={this.decrement.bind(this)}>decrement</button>
      </div>
    )
  }
}
```

## JSX

### 原因

为什么React使用JSX，因为React认为html和js的关系是紧密耦合的，ui中需要事件绑定，展示数据，某些状态改变时又需要改变状态，因此React将html和js结合在一个文件里，即实现了html in js，即jsx

### 插入的内容

#### 插入变量

- Number、String、Array可以直接显示

- Undefined、Null、Boolean不会显示
- Object不能显示，报错

```jsx
render() {
  const number = 1,
    string = 'hello',
    array = ['a', 'b', 'c']

  const aaa = undefined,
    bbb = null,
    ccc = true

  const obj = { name: 'zwh' }

  return (
    <div>
      <ul>
        <li>{number}</li>
        <li>{string}</li>
        <li>{array}</li>
        <li>{aaa}</li>
        <li>{bbb}</li>
        <li>{ccc}</li>
        {/* <li>{obj}</li> */}
      </ul>
    </div>
  )
}
```

#### 插入表达式

- 可以插入运算式
- 可以插入三元运算符
- 可以执行某个函数

### 属性绑定

#### 基本属性绑定

```jsx
render() {
  const url = 'www.baidu.com'
  
  return (
    <a href={url}>百度一下</a>
  )
}
```

#### class绑定

- 不是动态绑定

```jsx
<h2 className="a b c">hello world</h2>
```

- 动态绑定，第一种，模板字符串

```jsx
const classNames = `a b ${true ? 'c' : ''}`

return <h2 className={classNames}>hello world</h2>
```

- 动态绑定，第二种，数组

```jsx
const classNames = ['a', 'b']
if(true) classNames.push('c')

return <h2 className={classNames.join(' ')}>hello world</h2>
```

- 动态绑定，第三种，classNames库

[JedWatson/classnames: A simple javascript utility for conditionally joining classNames together (github.com)](https://github.com/JedWatson/classnames)

#### style绑定

需要两个大括号，第一个代表react绑定属性，第二个是对象字面量

```jsx
<h2 style={{color: 'red'}}>hello world</h2>
```

### 事件绑定

因为jsx语法实际内部是调用了React.createElement函数，直接绑定this.function，函数最后会相当于直接显式绑定直接调用了，又因为位置在class内部，自动开启了严格模式，因此this的指向是undefined，因此需要改变默认的this指向

事件绑定存在三种改变this指向的方法

1. 使用bind显式改变this的指向（掌握）
2. 利用箭头函数，继承父级作用域的this指向（了解）
3. 利用箭头函数，进行隐式this绑定（最常用）
   - 使用箭头函数，参数的传递很方便（同时传递event和普通的参数）

```jsx
class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  increment2 = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment.bind(this)}>increase1</button>
        <button onClick={this.increment2}>increase2</button>
        <button onClick={event => this.increment(event)}>increase3（最常用）</button>
      </div>
    )
  }
}
```

### 条件渲染

一般使用如下三种

1. if、else进行判断
2. 三目运算符
3. &&
   - 一般用于请求服务器数据前，值可能为null或undefined的情况

#### 条件判断实例

```jsx
class Condition extends React.Component {
  constructor() {
    super()

    this.state = {
      isShow: false
    }
  }

  toggleShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={() => this.toggleShow()}>toggleShow</button>
        {/* 模拟v-if */}
        {isShow && <h2>模拟v-if</h2>}
        {/* 模拟v-show */}
        <h2 style={{display: isShow ? 'block' : 'none'}}>模拟v-show</h2>
      </div>
    )
  }
}
```

### `JSX的本质`

jsx经过babel转换，会转换成原生React的React.createElement函数

这个函数有三个参数

1. 第一个参数：元素的类型
2. 第二个参数：元素的属性，类型是对象，如果没有属性为null
3. 第三个参数：元素的子元素，如果是字符串直接字符串即可，如果还有嵌套的元素，继续嵌套一层React.createElement函数即可

```jsx
<div>
  <h2 className="title">Hello World</h2>
</div>

/* 经过babel转换，相当于 */
React.createElement('div', null, 
  React.createElement('h2', {class: 'title'}, 'Hello World')
)
```

