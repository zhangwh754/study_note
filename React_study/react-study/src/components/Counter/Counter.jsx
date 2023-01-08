import React, { Component } from 'react'
import CounterItem from './CounterItem'

export class Counter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  render() {
    const { counter } = this.state

    return (
      <>
        <h2>{counter}</h2>
        <CounterItem increment={count => this.increment(count)} />
      </>
    )
  }

  increment(count) {
    this.setState({
      counter: this.state.counter + count
    })
  }
}

export default Counter
