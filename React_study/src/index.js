const root = ReactDOM.createRoot(document.querySelector('#root'))

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      msg: 'hello world'
    }

    // this.btnClick = this.btnClick.bind(this)
  }

  btnClick() {
    this.setState({
      msg: 'hello React'
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={this.btnClick.bind(this)}>btnClick</button>
      </div>
    )
  }
}

root.render(<App></App>)
