const fs = require('fs')

const reader = fs.createReadStream('./1.txt')
const writer = fs.createWriteStream('./2.txt', {
  flags: 'a+'
})

reader.pipe(writer)
