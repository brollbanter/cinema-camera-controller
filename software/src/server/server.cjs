const express = require('express')
const api = require('./api.cjs')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', api)

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`)
})
