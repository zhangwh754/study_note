import React, { Component } from 'react'

import './style.css'

export class Navbar extends Component {
  render() {
    const { leftSlot, middleSlot, rightSlot } = this.props

    return (
      <div className="navbar">
        <div className="left">{leftSlot}</div>
        <div className="middle">{middleSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

export default Navbar
