const { store } = require('./store')
const { ageIncrease } = require('./store/actionCreators')

store.subscribe(() => {
  console.log('εεδΊ', store.getState())
})

store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(1))
store.dispatch(ageIncrease(5))
