import React, { Component } from 'react'
import NavItem from './NavItem'

export class Nav extends Component {
  constructor() {
    super()

    this.state = {
      content: '流行',
      currentIndex: 0
    }
  }

  render() {
    const { content, currentIndex } = this.state

    return (
      <>
        <NavItem
          list={['流行', '新款', '精选']}
          currentIndex={currentIndex}
          itemClick={(...args) => this.itemClick(...args)}
          slotScope={item => this.getNavItem(item)}
        />
        <h1 className="content">{content}</h1>
      </>
    )
  }

  getNavItem(item) {
    if (item === '流行') {
      return <span>{item}</span>
    } else if (item === '新款') {
      return <button>{item}</button>
    } else {
      return <i>{item}</i>
    }
  }

  itemClick(content, index) {
    console.log(index)
    this.setState({
      content,
      currentIndex: index
    })
  }
}

export default Nav
