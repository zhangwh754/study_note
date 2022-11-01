const http = require('http')
const qs = require('querystring')
const fs = require('fs')

const port = 8000

const server = http.createServer((req, res) => {
  if (req.url === '/upload') {
    if (req.method === 'POST') {
      // 必须设置，使用二级制处理文件
      req.setEncoding('binary')
      let body = ''
      // 获取boundary
      const boundary = req.headers['content-type'].split(';')[1].split('=')[1]
      req.on('data', data => {
        body += data
      })
      req.on('end', () => {
        // 1.获取image/png的位置
        const payload = qs.parse(body, '\r\n', ': ')
        const type = payload['Content-Type']

        // 2.开始在image/png的位置进行截取
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let imageData = body.substring(typeIndex + typeLength)

        // 3.将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, '')

        // 4.将最后的boundary去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        fs.writeFile('./foo.png', imageData, 'binary', err => {
          res.end('文件上传成功~')
        })
      })
    }
  }
})

server.listen(port, '0.0.0.0', () => {
  console.log(`启动在: 0.0.0.0:${port}`)
})
