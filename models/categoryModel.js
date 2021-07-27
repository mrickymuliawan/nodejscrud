const db = require('../config/connection')

const getAll = (cb) => {
  const sql = 'select * from category'

  db.query(sql, (error, result) => {
    cb(result, error)
  })

}

const getSingle = (id, cb) => {
  const sql = `select * from category where id=${id}`

  db.query(sql, (error, result) => {
    cb(result, error)
  })
}

const create = (body, cb) => {
  let data = ''
  body.category.forEach((item, index) => {
    if (index > 0) {
      data += ','
    }
    data += `('${item.name}',${item.price})`
  });
  const sql = `insert into category (name, price) values ${data}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}

const update = (body, id, cb) => {
  const sql = `update category set name='${body.name}', price=${body.price} where id=${id}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}

const updateQuantity = (total, id) => {
  const sql = `update category set total_product=${total} where id=${id}`
  db.query(sql, (error, result) => {
    // cb(result, error)
  })
}

const deleteSingle = (id, cb) => {
  const sql = `delete from category where id=${id}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}
module.exports = { getAll, create, update, getSingle, deleteSingle, updateQuantity }