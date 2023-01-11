import * as variables from './constant'

const defaultData = {
  count: 100
}

const reducer = function (state, { type, payload }) {
  switch (type) {
    case variables.COUNT_CALC:
      return { ...state, count: state.count + payload.count }
    default:
      return state || defaultData
  }
}

export default reducer
