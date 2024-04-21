const express = require('express')
const app = express()
const port = 3030

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('dist'))

app.listen(port, () => {
  console.log(`UglyBox app listening at http://localhost:${port}`)
})
