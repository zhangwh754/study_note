// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'study_db',
  password: '888888',
  connectionLimit: 10
})

const statement = `
  SELECT * FROM products where price > ? && score > ?
`

connection
  .promise()
  .execute(statement, [6000, 7])
  .then(([res]) => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
