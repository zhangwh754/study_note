import React, { Component, PureComponent } from 'react'

export class Child extends PureComponent {
  // export class Child extends Component {
  constructor() {
    super()

    this.state = {
      data: [
        { name: 'zwh', age: 18 },
        { name: 'tian', age: 30 },
        { name: 'li', age: 20 }
      ]
    }
  }

  render() {
    const { data } = this.state

    return (
      <>
        <ul>
          {data.map((item, index) => (
            <li key={item.name}>
              <div style={{width: '200px', display: 'inline-block'}}>{item.name}的年龄是{item.age}</div>
              <button onClick={() => this.ageAdd(index)}>ageAdd</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.btnClick()}>btnClick</button>
      </>
    )
  }

  btnClick() {
    const data = [...this.state.data]

    data.push({ name: 'nie', age: 50 })

    this.setState({
      data
    })
  }

  ageAdd(index) {
    const data = [...this.state.data]

    data[index].age++

    this.setState({
      data
    })
  }
}

export default Child
