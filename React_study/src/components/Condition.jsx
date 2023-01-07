class Condition extends React.Component {
  constructor() {
    super()

    this.state = {
      isShow: false
    }
  }

  toggleShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={() => this.toggleShow()}>toggleShow</button>
        {/* 模拟v-if */}
        {isShow && <h2>模拟v-if</h2>}
        {/* 模拟v-show */}
        <h2 style={{display: isShow ? 'block' : 'none'}}>模拟v-show</h2>
      </div>
    )
  }
}
