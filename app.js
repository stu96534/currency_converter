const express = require('express')

const apis = require('./routes/apis')

const app = express()

const port = process.env.PORT || 3000

app.use('/api', apis)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))