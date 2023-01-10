import React, { createRef, PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isShow: false
    }

    this.h2Ref = createRef()
  }

  render() {
    const { isShow } = this.state

    return (
      <>
        <button onClick={() => this.setState({ isShow: !isShow })}>switch</button>

        {/* {isShow && <h2>Hello World</h2>} */}
        <CSSTransition in={isShow} classNames="a" unmountOnExit={true} timeout={2000} nodeRef={this.h2Ref}>
          <h2 ref={this.h2Ref}>Hello World</h2>
        </CSSTransition>
      </>
    )
  }
}


export default App
