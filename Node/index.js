const express = require('express')

const app = express()

const port = 8000

app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/json') {
    req.on('data', data => {
      req.body = JSON.parse(data.toString())
    })
    req.on('end', () => {
      next()
    })
  } else {
    next()
  }
})

// 监听POST请求
app.post('/user', (req, res, next) => {
  console.log(req.body)
  res.end('end')
})

app.listen(port, () => {
  console.log('启动成功')
})
