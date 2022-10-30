setTimeout(() => {
  console.log(1)
}, 0)

queueMicrotask(() => {
  console.log(2)
})
