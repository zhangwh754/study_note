import React, { createRef, PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.h2Ref2 = createRef()

    this.h2Ele = null
  }

  render() {
    return (
      <>
        <h2 ref="aaaaa">11111</h2>
        <h2 ref={this.h2Ref2}>11111</h2>
        <h2 ref={el => (this.h2Ele = el)}>11111</h2>
        <button onClick={() => this.btnClick()}>btnClick</button>
      </>
    )
  }

  btnClick() {
    const innerHtml = 'Hello World'

    // 第一种方式
    // const h2Ref1 = this.refs.aaaaa
    // h2Ref1.innerHTML = innerHtml

    // 第二种方式（推荐）
    this.h2Ref2.current.innerHTML = innerHtml

    // 第三种方式
    // this.h2Ele.innerHTML = innerHtml
  }
}

export default App
