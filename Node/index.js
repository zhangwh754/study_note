#!/usr/bin/env node

const program = require('commander')

const { handleCreate } = require('./lib/core/create')

const { addOptions } = require('./lib/core/options')

handleCreate()

addOptions()

program.parse()
