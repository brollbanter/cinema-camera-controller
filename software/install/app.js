const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const api = require('./server/api')

const port = 3030

app.use(express.static('dist'))

app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, () => {
  console.log(`UglyBox app listening at http://localhost:${port}`)
})
