#!/usr/bin/env node

const program = require('commander')

const { handleLogin } = require('./lib/core/login')
const { getVersion } = require('./lib/core/version')

handleLogin()

getVersion()

// program
//   .option('-t --test', 'param test')
//   .argument('<t>', 'test')
//   .action(t => {
//     if (t === 'zwh') {
//       console.log('test Success')
//     } else {
//       console.log('test Fail')
//     }
//   })

program.parse()
