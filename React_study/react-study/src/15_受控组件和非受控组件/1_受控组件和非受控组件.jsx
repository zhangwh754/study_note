import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      value: 'zwh'
    }
  }

  render() {
    const { value } = this.state

    return (
      <>
        <input type="text" />
        <hr />
        <input type="text" value={value} onChange={e => this.change(e)} />
      </>
    )
  }

  change(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }
}

export default App
