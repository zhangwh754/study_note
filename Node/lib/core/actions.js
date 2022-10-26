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
    await commandSpawn('npm.cmd', ['install'], { cwd: `./${project}` })
    console.log('\x1B[36m%s\x1B[0m', 'Create End')
    // 3、npm run serve
    // 4、
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createProjectAction
}
