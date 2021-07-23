const express = require('express')
const app = express()
const routes = require('./routes')
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.json({
    message: 'hello world'
  })
})

app.listen(3000, () => {
  console.log('server is listening')
})
