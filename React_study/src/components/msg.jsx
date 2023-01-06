let msg = 'Hello World'

const style = {
  color: 'red',
  fontSize: '36px'
}

const btnClick = () => {
  msg += '+'
}

const MsgApp = () => (
  <div>
    <h2 style={style}>{msg}</h2>
    <button onClick={btnClick}>btnClick</button>
  </div>
)
