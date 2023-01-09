import React, { PureComponent } from 'react'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      form: {
        username: '',
        password: '',
        hobbies: [
          { value: 'sing', label: '唱', isChecked: false },
          { value: 'dance', label: '跳', isChecked: false },
          { value: 'rap', label: 'Rap', isChecked: false }
        ],
        fruit: [
          [],
          { value: 'grapefruit', label: '葡萄柚' },
          { value: 'lime', label: '酸橙' },
          { value: 'coconut', label: '椰子' },
          { value: 'mango', label: '芒果' }
        ]
      }
    }
  }

  render() {
    const { form } = this.state

    return (
      <>
        <form onSubmit={e => this.submit(e)}>
          {/* Input表单组件 */}
          <p>
            <label htmlFor="username">用户名：</label>
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={e => this.handleInput(e)}
            />
          </p>
          <p>
            <label htmlFor="password">密码：</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={e => this.handleInput(e)}
            />
          </p>
          {/* checkbox多选表单组件 */}
          <p>
            {form.hobbies.map((item, index) => (
              <span key={item.value}>
                <label className="checkbox" htmlFor={item.value}>
                  {item.label}
                </label>
                <input
                  type="checkbox"
                  name="hobbies"
                  id={item.value}
                  checked={item.isChecked}
                  onChange={e => this.handleCheckbox(e, index)}
                />
              </span>
            ))}
          </p>
          {/* select多选表单组件 */}
          <p>
            <label htmlFor="fruit"></label>
            <select name="fruit" id="fruit" value={form.fruit[0]} multiple onChange={e => this.multipleSelect(e)}>
              {form.fruit.map(item => {
                if (!item.value) return null
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </select>
          </p>
          <button type="submit">提交</button>
        </form>
      </>
    )
  }

  handleInput(e) {
    const form = { ...this.state.form }

    form[e.target.name] = e.target.value

    this.setState({
      form
    })
  }

  handleCheckbox(e, index) {
    const form = { ...this.state.form }

    form[e.target.name][index].isChecked = e.target.checked

    this.setState({
      form
    })
  }

  multipleSelect(e) {
    const form = { ...this.state.form }

    const values = Array.from(e.target.selectedOptions, item => item.value)

    form[e.target.name][0] = values

    this.setState({
      form
    })
  }

  submit(e) {
    e.preventDefault()

    const { form } = this.state

    console.log(form.username, form.password)

    const hobbies = form.hobbies.filter(item => item.isChecked).map(item => item.value)
    console.log(hobbies)

    console.log(form.fruit[0])
  }
}

export default App
