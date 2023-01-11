import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return <div>App</div>
  }
}

export default App
