import React, { createRef, PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      name: 'zwh'
    }

    this.inputRef = createRef()
  }

  render() {
    const { name } = this.state

    return (
      <>
        <form onSubmit={e => this.submit(e)}>
          <label htmlFor="name">名字</label>
          <input type="text" id="name" defaultValue={name} ref={this.inputRef} />
          <hr />
          <button type="submit">submit</button>
        </form>
      </>
    )
  }

  submit(e) {
    e.preventDefault()
    console.log(this.inputRef.current.value)
  }
}

export default App
