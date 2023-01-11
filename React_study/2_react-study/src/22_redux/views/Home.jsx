import React, { PureComponent } from 'react'
import { countCalc } from '../store/actionCreators'
import store from '../store'

export class Home extends PureComponent {
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

  countIncrease(count) {
    store.dispatch(countCalc(count))
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h2>Home的count:{count}</h2>
        <button onClick={() => this.countIncrease(1)}>+1</button>
        <button onClick={() => this.countIncrease(5)}>+5</button>
        <button onClick={() => this.countIncrease(10)}>+10</button>
      </div>
    )
  }
}

export default Home
