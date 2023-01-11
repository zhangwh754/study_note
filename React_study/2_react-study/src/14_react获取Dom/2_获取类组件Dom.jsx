import React, { createRef, PureComponent } from 'react'

class Test extends PureComponent {
  render() {
    return (
      <div>
        <h1>子组件</h1>
        <h2>Hello World</h2>
      </div>
    )
  }

  aaaaa() {
    console.log(11111)
  }
}

class App extends PureComponent {
  constructor() {
    super()

    this.classRef = createRef()
  }
  render() {
    return (
      <>
        <Test ref={this.classRef} />
        <button onClick={() => this.btnClick()}>btnClick</button>
      </>
    )
  }
  btnClick() {
    console.log(this.classRef.current)
    this.classRef.current.aaaaa()
  }
}

export default App
