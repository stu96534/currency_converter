const express = require('express')
const router = express.Router()
const currencyController = require('../../../controllers/currency-controller')

router.get('/currency/nation/:id', currencyController.getNationCurrency)
router.get('/currency/nation', currencyController.getNation)
router.get('/currency', currencyController.getTaiwanBankRate)
router.put('/currency', currencyController.updateTaiwanBankRate)

module.exports = router
