const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

/* ejs编译模板 */
const ejsCompile = (templatePath, data = {}, options = {}) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, options, (err, str) => {
      if (err) {
        reject(err)
        return
      }
      resolve(str)
    })
  })
}

/* fs写入文件 */
/* 返回的是一个Promise */
const writeFile = (path, content) => {
  if (fs.existsSync(path)) {
    return
  }
  return fs.promises.writeFile(path, content)
}

/* 递归创建文件夹 */
/* 如果当前路径不存在，递归往上找父级，直到找到，然后依次创建对应文件夹 */
const mkdirSync = dirname => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return false
    }
  }
}

module.exports = {
  ejsCompile,
  writeFile,
  mkdirSync
}
