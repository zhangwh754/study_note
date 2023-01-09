import React, { Component } from 'react'

import './item.css'

export class NavItem extends Component {
  render() {
    const { itemClick, list, currentIndex, slotScope } = this.props

    return (
      <nav>
        <ul>
          {list.map((item, index) => (
            <li className={currentIndex === index ? 'active' : ''} key={item} onClick={() => itemClick(item, index)}>
              {slotScope(item)}
              {/* <span>{item}</span> */}
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default NavItem
