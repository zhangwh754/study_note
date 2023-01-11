import React, { PureComponent } from 'react'

function Home() {
  return <h2>Home：</h2>
}

function highOrderComponent(Cpn) {
  class newComponent extends PureComponent {
    constructor() {
      super()

      this.state = {
        data: { a: 1, b: 2, c: 3 }
      }
    }

    render() {
      return <Cpn {...this.state.data} {...this.props} />
    }
  }

  return newComponent
}

const HighHome = highOrderComponent(Home)

export class App extends PureComponent {
  render() {
    return (
      <>
        <HighHome count={10}></HighHome>
      </>
    )
  }
}

export default App
