const db = require('../config/connection')
const categoryModel = require('../models/categoryModel')
const getAll = (cb) => {
  const sql = 'select * from products'

  db.query(sql, (error, result) => {
    cb(result, error)
  })

}

const getSingle = (id, cb) => {
  const sql = `select * from products where id=${id}`

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
    data += `('${item.name}',${item.price}, ${item.category_id})`

    countProduct(item.category_id, (result, error) => {
      console.log(result[0].total_products);
      categoryModel.updateQuantity(result[0].total_products + 1, item.category_id)
    })
  });
  const sql = `insert into products (name, price, category_id) values ${data}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}

const countProduct = (categoryId, cb) => {
  const sql = `select count(*) as total_products from products where category_id=${categoryId}`
  db.query(sql, (error, result) => {
    console.log(result);
    cb(result, error)
  })
}

const update = (body, id, cb) => {
  const sql = `update products set name='${body.name}', price=${body.price} where id=${id}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}

const deleteSingle = (id, cb) => {
  const sql = `delete from products where id=${id}`
  db.query(sql, (error, result) => {
    cb(result, error)
  })
}
module.exports = { getAll, create, update, getSingle, deleteSingle, countProduct }