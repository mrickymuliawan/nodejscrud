const db = require('../config/connection')

const getAll = (cb) => {
  const sql = 'select * from products'

  db.query(sql, (error, result) => {
    cb(result, error)
  })

}

const create = (body, cb) => {
  let data = ''
  body.products.forEach((item, index) => {
    if (index > 0) {
      data += ','
    }
    data += `('${item.name}',${item.price})`
  });
  const sql = `insert into products (name, price) values ${data}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}


module.exports = { getAll, create }