const program = require('commander')

const { addComponent } = require('./actions.js')

const handleCreate = () => {
  program
    .command('config <type>')
    .description('add vue component, 例如: demo addcpn NavBar [-d src/components]')
    .action(type => addComponent(type))
}

module.exports = {
  handleCreate
}
