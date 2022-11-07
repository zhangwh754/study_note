// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'study_db',
  password: '888888'
})

// simple query
// connection.query("SELECT `id`, `name`, `age` FROM `users` WHERE `phoneNum` = '13501838597'", function (err, results) {
//   console.log(results) // results contains rows returned by server
// })

// simple insert
// connection.query("")
// const phoneJson = require('./phone.json')

// for (let phone of phoneJson) {
//   const res = connection.query('INSERT INTO products SET ?', phone)
//   console.log(res)
// }
