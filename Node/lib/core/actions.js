const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project, args) => {
  try {
    console.log('\x1B[31m%s\x1B[0m', 'Create Start')
    // 1、clone项目
    await download('direct:https://gitee.com/zhang754/webpack-base.git', project, {
      clone: true
    })
    // 2、npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], { cwd: `./${project}` })
    console.log('\x1B[36m%s\x1B[0m', 'Create End')
    // 3、npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createProjectAction
}
