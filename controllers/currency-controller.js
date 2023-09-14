
const { taiwanBank } = require('../lib/taiwanBankExchangeRate')

const currencyController = {
  getTaiwanBankRate: (req, res, next) => {
    taiwanBank()
  }
}


module.exports = currencyController
