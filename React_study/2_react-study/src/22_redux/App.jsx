import React, { PureComponent } from 'react'
import store from './store'
import About from './views/About'
import Home from './views/Home'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      count: store.getState().count
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ count: state.count })
    })
  }

  render() {
    const { count } = this.state

    return (
      <>
        <h2>App的count:{count}</h2>

        <div className="pages">
          <Home />
          <About />
        </div>
      </>
    )
  }
}

export default App
