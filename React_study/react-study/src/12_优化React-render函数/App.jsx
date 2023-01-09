import React, { PureComponent } from 'react'
import Home from './Home'
import Home2 from './Home_Function'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      count: 0,
      msg: 'Hello World'
    }
  }

  render() {
    const { count, msg } = this.state

    console.log('App render')

    return (
      <>
        <Home count={count} />
        <Home2 count={count} />
        <h2>{msg}</h2>
        <button onClick={() => this.btnClick()}>btnClick</button>
      </>
    )
  }

  btnClick() {
    this.setState({
      count: this.state.count + 1
      // msg: '你好，世界'
    })
  }
}

export default App
