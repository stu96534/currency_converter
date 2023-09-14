const express = require('express')
const router = express.Router()

const taiwanBank = require('./modules/taiwanBank')

router.use('/taiwanBank', taiwanBank)

module.exports = router