import React from 'react'
import Nav from './components/Nav/Nav'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Counter from './components/Counter/Counter'
// import HelloWorld from './components/HelloWorld'
import HelloWorld from './components/HelloWorld2'

import InfoContext from './context/info-context.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  render() {
    return (
      <>
        {/* <InfoContext.Provider
          value={{
            name: 'zwh',
            age: 18
          }}
        >
        </InfoContext.Provider>
          <HelloWorld /> */}
        <Counter />
        {/* <Nav /> */}
        {/* <Navbar>
          <button>+1</button>
          <h2>Hello World</h2>
          <i>Love</i>
        </Navbar>
        <Navbar2 leftSlot={<button>+1</button>} middleSlot={<h2>Hello World</h2>} rightSlot={<i>Love2</i>} /> */}
      </>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list: ['aaa', 'bbb', 'ccc']
      })
    }, 2000)
  }
}

export default App
