const { store } = require('./store')

const unsubscribe = store.subscribe(() => {
  console.log('εεδΊ', store.getState())
})

store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })
store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })

unsubscribe()

store.dispatch({ type: 'AGE_INCREASE', payload: { count: 5 } })
