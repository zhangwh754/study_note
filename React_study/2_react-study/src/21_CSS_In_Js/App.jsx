import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppWrapper, DefaultButton } from './style'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      color: 'red'
    }
  }

  render() {
    const { color } = this.state

    return (
      <ThemeProvider theme={{ border: '3px solid blue' }}>
        <AppWrapper color={color}>
          <h2 className="title">title</h2>
          <DefaultButton onClick={() => this.setState({ color: 'blue' })}>changeColor</DefaultButton>
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

export default App
