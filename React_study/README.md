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

1. 因为使用了ES6的class，因此默认内部开启了严格模式，btnClick这种自定义方法，this的指向为undefined，需要在调用的时候用bind改变this的指向，也可以在constructor提前修改函数的指向
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

