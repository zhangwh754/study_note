const express = require('express')

const router = express.Router()

const LOGIN_ERROR = 'LOGIN_ERROR'

router.post('/login', (req, res, next) => {
  const flag = Math.random() > 0.5
  if (flag) {
    res.json({
      code: 200,
      msg: '成功'
    })
  } else {
    next(new Error(LOGIN_ERROR))
  }
})

router.use((err, req, res, next) => {
  let msg = ''
  let status = 400
  switch (err.message) {
    case LOGIN_ERROR:
      msg = '用户登录失败'
      break
    default:
      msg = 'NOT FOUND'
      break
  }
  res.json({
    errCode: status,
    errMsg: msg
  })
})

module.exports = router
