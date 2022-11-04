const express = require('express')

const app = express()

const m1 = (req, res, next) => {
  req.msg = 'aaa'
  next()
  res.json({
    status: 200,
    msg: req.msg
  })
}
const m2 = (req, res, next) => {
  req.msg += 'bbb'
  next()
}
const m3 = async (req, res, next) => {
  const p1 = new Promise(resolve => {
    setTimeout(() => {
      req.msg += 'ccc'
      resolve()
    }, 3000)
  })
  await p1
}

app.use(m1)
app.use(m2)
app.use(m3)

app.listen(8000)
