const { AGE_INCREASE, HEIGHT_ADD } = require('./constants')

const ageIncrease = count => ({
  type: AGE_INCREASE,
  payload: { count }
})

const heightAdd = height => ({
  type: HEIGHT_ADD,
  payload: { height }
})

module.exports = {
  ageIncrease,
  heightAdd
}
