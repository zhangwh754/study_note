const program = require('commander')

const addOptions = () => {
  program.option('-d --dest <dest>', 'get dest')
  program.option('-t --test <test>', 'get test')
}

module.exports = {
  addOptions
}
