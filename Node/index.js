const koa = require('koa')

const app = new koa()

const m1 = async (ctx, next) => {
  ctx.request.msg = 'aaa'
  await next()
  ctx.body = {
    status: 200,
    msg: ctx.request.msg
  }
}
const m2 = async (ctx, next) => {
  ctx.request.msg += 'bbb'
  await next()
}
const m3 = async (ctx, next) => {
  const p1 = new Promise(resolve => {
    setTimeout(() => {
      ctx.request.msg += 'ccc'
      resolve()
    }, 3000)
  })
  await p1
}

app.use(m1)
app.use(m2)
app.use(m3)

app.listen(8000)
