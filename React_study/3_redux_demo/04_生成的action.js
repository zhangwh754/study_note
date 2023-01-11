const { store } = require('./store')
const { ageIncrease } = require('./store/actionCreators')

store.subscribe(() => {
  console.log('变化了', store.getState())
})

store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(5))
