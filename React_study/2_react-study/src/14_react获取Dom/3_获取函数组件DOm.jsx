import React, { createRef, forwardRef, PureComponent } from 'react'

const Test = forwardRef(function Test(props, ref) {
  return (
    <div>
      <h1>子组件</h1>
      <h2 ref={ref}>Hello World</h2>
    </div>
  )
})

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
  }
}

export default App
