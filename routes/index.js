const router = require('express').Router()
const productRoutes = require('./productRoutes')
const categoryRoutes = require('./categoryRoutes')

router.use([
  productRoutes,
  categoryRoutes
])

module.exports = router