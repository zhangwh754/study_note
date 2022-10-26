const program = require('commander')

const getVersion = () => {
  /* -V: 获取版本号 */
  program.version(require('../../package.json').version)
}

module.exports = {
  getVersion
}
