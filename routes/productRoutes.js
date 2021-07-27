const router = require('express').Router()
const productModel = require('../models/productModel')

router.get('/products', (req, res) => {
  productModel.getAll((data, error) => {
    return res.json({
      products: data || [],
      error: error
    })
  })
})

router.get('/products/:id', (req, res) => {
  productModel.getSingle(req.params.id, (data, error) => {
    return res.json({
      product: data[0] || null,
      error: error
    })
  })
})

router.get('/products-count/:categoryId', (req, res) => {
  productModel.countProduct(req.params.categoryId, (data, error) => {
    return res.json({
      product: data[0] || null,
      error: error
    })
  })
})


router.post('/products', (req, res) => {
  // insert into db
  productModel.create(req.body, (data, error) => {

    return res.json({
      message: error ? 'Failed' : `create success ${data.affectedRows} data`,
      error: error
    })
  })

})

router.put('/products/:id', (req, res) => {
  // update query

  productModel.update(req.body, req.params.id, (data, error) => {
    return res.json({
      message: error ? 'Failed' : `Update success ${data.affectedRows} data`,
      error: error
    })
  })

})

router.delete('/products/:id', (req, res) => {
  // delete query
  productModel.deleteSingle(req.params.id, (data, error) => {
    return res.json({
      message: error ? 'Failed' : `Delete success ${data.affectedRows} data`,
      error: error
    })
  })

})


module.exports = router