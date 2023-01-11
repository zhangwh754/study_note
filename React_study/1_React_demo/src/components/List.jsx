class List extends React.Component {
  constructor() {
    super()

    this.state = {
      data: ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'],
      currentIndex: -1
    }
  }

  itemClick(index) {
    console.log(index)
    this.setState({
      currentIndex: index
    })
  }

  render() {
    return (
      <ul>
        {this.state.data.map((item, index) => (
          <li className={this.state.currentIndex === index ? 'active' : ''} key={item} onClick={() => this.itemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    )
  }
}
