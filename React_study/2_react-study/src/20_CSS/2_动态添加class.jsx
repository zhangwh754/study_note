import React, { PureComponent } from 'react'
import C from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isA: true,
      isB: false
    }
  }

  render() {
    const { isA, isB } = this.state

    return <div className={C('ccc', { isA, isB })}>App</div>
  }
}

export default App
