const http = require('http')
const url = require('url')

const port = 8000

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html;charset=utf8'
  })
  // res.setHeader('Content-type', 'text/html;charset=utf8')
  res.end('<h2 style="color: red">Hello World</h2>')
})

server.listen(port, '0.0.0.0', () => {
  console.log(`启动在: 0.0.0.0:${port}`)
})
