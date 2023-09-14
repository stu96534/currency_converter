const express = require('express')
const router = express.Router()
const currencyController = require('../../controllers/currency-controller')

router.get('/currency', currencyController.getTaiwanBankRate)

module.exports = router
