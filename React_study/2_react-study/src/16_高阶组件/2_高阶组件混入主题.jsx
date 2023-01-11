import React, { PureComponent } from 'react'
import mixinsThemeColor from './context/enhanceThemeColor'
import ThemeColor from './context/ThemeColor'

const Home = mixinsThemeColor(function (props) {
  const { color, size, count } = props

  return (
    <>
      <h2 style={{ color, fontSize: size }}>Home: {count}</h2>
    </>
  )
})

export class App extends PureComponent {
  render() {
    return (
      <>
        <ThemeColor.Provider value={{ color: 'red', size: 80 }}>
          <Home count={11}></Home>
        </ThemeColor.Provider>
      </>
    )
  }
}

export default App
