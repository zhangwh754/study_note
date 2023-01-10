import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      list: [
        { id: 1, name: 'zwh', age: 18 },
        { id: 2, name: 'xue', age: 20 },
        { id: 3, name: 'nie', age: 30 },
        { id: 4, name: 'tian', age: 40 }
      ]
    }
  }

  addPeople() {
    const list = [...this.state.list]
    list.push({ id: list.length + 1, name: 'lorem', age: 20 })
    this.setState({ list })
  }

  remove(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }

  render() {
    const { list } = this.state

    return (
      <>
        <TransitionGroup component="ul">
          {list.map((item, index) => (
            <CSSTransition key={item.id} classNames="login" timeout={300}>
              <li key={item.id}>
                {item.name}的年龄是{item.age}-<button onClick={() => this.remove(index)}>remove</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>

        <button onClick={() => this.addPeople()}>addPeople</button>
      </>
    )
  }
}

export default App
