new Promise((resolve, reject) => {
  // resolve或reject之前是pending（待定）状态
  const num = Math.floor(Math.random() * 10)
  if (num >= 5) {
    resolve(num + '成功') // 处于fulfilled状态（已敲定）
  } else {
    reject(num + '失败') // 处于rejected状态（已拒绝）
  }
})
  .then(res => console.log(res))
  .catch(err => console.log(err))
