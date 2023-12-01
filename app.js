require('dotenv').config()

const express = require('express')
const cors = require('cors')

const apis = require('./routes/apis')

const app = express()

const corsOptions = {
  origin: [
    'http://localhost:8080',
    'https://currency-converter-front-six.vercel.app/'
  ],
  methods: [
    'GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH', 'OPTIONS'
  ],
  allowedHeaders: ['content-type', 'authorization']
}

const port = process.env.PORT || 3000

app.use(cors(corsOptions))

app.use('/api', apis)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))