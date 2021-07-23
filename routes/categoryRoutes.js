const router = require('express').Router()

router.get('/categories', (req, res) => {
  const data = [
    {
      name: 'baju',
      price: 20000
    },
    {
      name: 'celana',
      price: 20000
    },
  ]

  res.json({
    categories: data
  })
})

router.get('/categories/:id', (req, res) => {
  const data = {
    name: 'baju',
    price: 20000
  }

  res.json({
    product: data
  })
})

router.post('/categories', (req, res) => {
  // insert into db

  res.json({
    product: req.body,
    message: `create success ${req.body.name}`
  })
})

router.put('/categories/:id', (req, res) => {
  // update query

  res.json({
    product: req.body,
    message: `update success ${req.body.name}`
  })
})

router.delete('/categories/:id', (req, res) => {
  // delete query

  res.json({
    message: `delete success`
  })
})


module.exports = router