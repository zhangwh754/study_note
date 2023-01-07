class App extends React.Component {
  constructor() {
    super()

    this.state = {
      // msg: 'hello world'
    }

    // this.btnClick = this.btnClick.bind(this)
  }

  render() {
    return (
      <div>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    )
  }
}
