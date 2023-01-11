const { store } = require('./store')

const unsubscribe = store.subscribe(() => {
  console.log('变化了', store.getState())
})

store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })
store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })

unsubscribe()

store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })
