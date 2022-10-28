const program = require('commander')
const path = require('path')

const { ejsCompile, mkdirSync, writeFile } = require('../utils/file.js')

const options = program.opts()

const handleEjsToFile = async (dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template)
  const result = await ejsCompile(templatePath)

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(dest)
  const targetPath = path.resolve(dest, filename)
  writeFile(targetPath, result)
}

const addComponent = type => {
  console.log('type: ', type)
  const dest = options.dest || './'
  handleEjsToFile(dest, '../template/config.eslint.ejs', 'eslint.json')
}

module.exports = {
  addComponent
}
