import React, { Component } from 'react'

export class CounterItem extends Component {
  render() {
    const { increment } = this.props

    return (
      <>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(5)}>+5</button>
        <button onClick={() => increment(10)}>+10</button>
      </>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}

export default CounterItem
