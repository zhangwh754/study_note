class List extends React.Component {
  constructor() {
    super()

    this.state = {
      data: ['a', 'b', 'c', 'd', 'e']
    }
  }

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
}
