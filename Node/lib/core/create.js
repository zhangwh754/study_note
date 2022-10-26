const program = require('commander')

const { createProjectAction } = require('./actions')

const handleCreate = () => {
  program
    .command('create <project> [args...]')
    .description('create test')
    .action(createProjectAction)
}

module.exports = {
  handleCreate
}
