import React from 'react'

import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render() {
    return (
      <>
        <h2 style={{ color: 'blue' }}>React学习</h2>
        <HelloWorld />
      </>
    )
  }
}

export default App
