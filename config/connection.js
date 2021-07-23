var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'nodejscrud'
})

connection.connect(error => {
  if (error) {
    throw error
  }
  console.log('successfully connected')
})
module.exports = connection