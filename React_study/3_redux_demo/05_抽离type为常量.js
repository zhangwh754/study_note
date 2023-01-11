const { store } = require('./store')
const { ageIncrease, heightAdd } = require('./store/actionCreators')

store.subscribe(() => {
  console.log('变化了', store.getState())
})

store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(5))

store.dispatch(heightAdd(1.8))
