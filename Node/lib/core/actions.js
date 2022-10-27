const program = require('commander')

const options = program.opts()

const createProjectAction = async (project, args) => {
  try {
    console.log(options.test)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createProjectAction
}
