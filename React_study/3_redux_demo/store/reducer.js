const { AGE_INCREASE, HEIGHT_ADD } = require('./constants')

const initState = {
  name: 'zwh',
  age: 18
}

const reducer = function (state, { type, payload }) {
  switch (type) {
    case AGE_INCREASE:
      return { ...state, age: state.age + payload.count }
    case HEIGHT_ADD:
      return { ...state, height: payload.height }
    default:
      return state || initState
  }
}

module.exports = reducer
