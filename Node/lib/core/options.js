const program = require('commander')

const addOptions = () => {
  program.option('-d --dest <dest>', 'get dest')
}

module.exports = {
  addOptions
}
