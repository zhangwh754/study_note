import React from 'react'
import InfoContext from '../context/info-context'

const defaultProps = {
  list: ['a', 'b', 'c']
}

class HelloWorld extends React.Component {
  static defaultProps = defaultProps

  static contextType = InfoContext

  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { list } = this.props

    console.log(this.context)

    return (
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}

// HelloWorld.defaultProps = defaultProps

export default HelloWorld
