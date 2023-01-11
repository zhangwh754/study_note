const { store } = require('./store')

console.log(store.getState())

store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })

console.log(store.getState())

store.dispatch({ type: 'HEIGHT_ADD', payload: { height: 1.8 } })

console.log(store.getState())
