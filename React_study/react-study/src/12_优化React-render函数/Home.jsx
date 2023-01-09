import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  render() {
    const { count } = this.props

    console.log('home_class render')

    return (
      <>
        <h2>类组件，使用PureComponent：{count}</h2>
      </>
    )
  }
}

export default Home
