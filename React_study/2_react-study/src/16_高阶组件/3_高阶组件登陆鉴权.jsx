import React, { PureComponent } from 'react'
import enhance from './enhance/handleLogin'

const Home = enhance(function () {
  return (
    <>
      <h2>Home</h2>
    </>
  )
})

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isLogin: false
    }
  }

  render() {
    return (
      <>
        <Home />
        <button onClick={() => this.login()}>Login</button>
      </>
    )
  }

  login() {
    localStorage.setItem('token', 'abcdefg')

    this.setState({
      isLogin: true
    })
  }
}

export default App
