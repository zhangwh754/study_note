import React, { createRef, PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isCN: true
    }

    this.h2Ref = createRef()
  }

  render() {
    const { isCN } = this.state

    return (
      <>
        <button onClick={() => this.setState({ isCN: !isCN })}>switch</button>

        <SwitchTransition>
          <CSSTransition key={isCN} classNames="login" timeout={300} nodeRef={this.h2Ref}>
            <h2 ref={this.h2Ref}>{isCN ? '你好世界' : 'Hello World'}</h2>
          </CSSTransition>
        </SwitchTransition>
      </>
    )
  }
}

export default App
