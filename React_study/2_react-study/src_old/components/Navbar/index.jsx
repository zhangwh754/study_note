import React, { Component } from 'react'

import './style.css'

export class Navbar extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="navbar">
        <div className="left">{children[0]}</div>
        <div className="middle">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default Navbar
