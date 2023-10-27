const { TaiwanBank } = require('../models')
const { taiwanBank } = require('../lib/taiwanBankExchangeRate')
const { updateRate } = require('../helpers/model_helpers')

const currencyController = {
  getTaiwanBankRate: async (req, res, next) => {
    try {

      taiwanBank(updateRate)

      const currencies = await TaiwanBank.findAndCountAll({})

      const data = currencies.rows.map(currency => ({
        id: currency.id,
        name: currency.name,
        cashBuy: currency.cashBuy,
        cashSell: currency.cashSell,
        sightBuy: currency.sightBuy,
        sightSell: currency.sightSell
      }))

      return res.status(200).json({
        currencies: data
      })

    } catch (err) {
      next(err)
    }

  },
  updateTaiwanBankRate: async (req, res, next) => {
    try {

      taiwanBank(updateRate)

      return res.status(200).json({
        status: 'success',
        message: '匯率更新成功！'
      })

    } catch (err) {
      next(err)
    }

  },
  getNation: async (req, res, next) => {
    try {

      const currencies = await TaiwanBank.findAndCountAll({})

      const data = currencies.rows.map(currency => ({
        id: currency.id,
        name: currency.name,
      }))

      return res.status(200).json({
        nations: data
      })

    } catch (err) {
      next(err)
    }

  },
  getNationCurrency: async (req, res, next) => {
    try {

      const id = req.params.id

      const currency = await TaiwanBank.findByPk(id)

      return res.status(200).json({
        id,
        name: currency.name,
        cashBuy: currency.cashBuy,
        cashSell: currency.cashSell,
        sightBuy: currency.sightBuy,
        sightSell: currency.sightSell,
      })

    } catch (err) {
      next(err)
    }

  }
}


module.exports = currencyController
