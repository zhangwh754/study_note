import * as variables from './constant'

export const countCalc = count => ({
  type: variables.COUNT_CALC,
  payload: { count }
})
