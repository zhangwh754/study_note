import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

const Modal = function (props) {
  const width = '500px'
  const Modal = () => (
    <>
      <h2 style={{ backgroundColor: '#000', width, margin: 0, color: '#fff' }}>Title</h2>
      <div style={{ backgroundColor: 'lightblue', width, height: '500px' }}>body</div>
    </>
  )

  return createPortal(<Modal />, document.querySelector('#modal'))
}

export class App extends PureComponent {
  render() {
    return (
      <>
        <h2>App</h2>
        <Modal></Modal>
      </>
    )
  }
}

export default App
