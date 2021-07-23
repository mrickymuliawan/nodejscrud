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
  const data = {
    name: 'baju',
    price: 20000
  }

  res.json({
    product: data
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

  res.json({
    product: req.body,
    message: `update success ${req.body.name}`
  })
})

router.delete('/products/:id', (req, res) => {
  // delete query

  res.json({
    message: `delete success`
  })
})


module.exports = router