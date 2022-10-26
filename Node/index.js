#!/usr/bin/env node

const program = require('commander')

const { handleLogin } = require('./lib/core/login')
const { getVersion } = require('./lib/core/version')
const { handleCreate } = require('./lib/core/create')

handleLogin()
getVersion()
handleCreate()

program.parse()
