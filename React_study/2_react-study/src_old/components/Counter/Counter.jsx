import React, { Component } from 'react'
import { flushSync } from 'react-dom'
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
    console.log('old:', this.state.counter) // 0
    flushSync(() => {
      this.setState({ counter: this.state.counter + 1 })
    })
    console.log('new:', this.state.counter) // 1
  }

}

export default Counter
