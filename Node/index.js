const fs = require('fs')

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())

const port = 8000

const writableStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
})

app.use(morgan('combined', { stream: writableStream }))

app.post('/user', (req, res, next) => {
  console.log(req.body)
  res.end('end')
})

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('end')
})

app.listen(port, () => {
  console.log('启动成功')
})
