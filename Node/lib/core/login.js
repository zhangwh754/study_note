const program = require('commander')

/* 添加自己的option，前面是命令，后面是help显示的描述 */
/* 添加对应的argument，前面是参数名，后面是描述和未填写时的默认值 */

const handleLogin = () => {
  program
    .option('-l --login', 'login test')
    .argument('<username>', 'user to login')
    .argument('[password]', 'password for user, if required', '123456')
    .action((username, password) => {
      if (username === 'zwh' && password === '123456') {
        console.log('Login Success')
      } else {
        console.log('Login Fail')
      }
    })
}

module.exports = {
  handleLogin
}
