const { TaiwanBank } = require('../models')
const { taiwanBank } = require('../lib/taiwanBankExchangeRate')

const currencyController = {
  getTaiwanBankRate: async (req, res, next) => {
    try {

      const currencies = await TaiwanBank.findAndCountAll({})

      const data = currencies.rows.map(currency => ({
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

  }
}


module.exports = currencyController
