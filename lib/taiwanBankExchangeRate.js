const request = require('request')
const cheerio = require('cheerio')
const { TaiwanBank } = require('../models')

const bankOfCurrency = require('./bankCurrency')

const taiwanBank = function (callback) {
  request({
    url: "https://rate.bot.com.tw/xrt?Lang=zh-TW",
    method: "GET"
  }, async function  (error, response, body) {
    if (error || !body) {
      return
    } else {

      const taiwanBankDate = new bankOfCurrency()

      const currencyRate = []

      const $ = cheerio.load(body)
      const nationTarget = $(".hidden-phone.print_show.xrt-cur-indent")
      const cashTarget = $(".rate-content-cash.text-right")
      const sightTarget = $(".rate-content-sight.text-right")

      
      taiwanBankDate.getNation(nationTarget)

      taiwanBankDate.getCashRate(cashTarget)

      taiwanBankDate.getSightRate(sightTarget)


      for (let i = 0; i < taiwanBankDate.nation.length; i++) {
        currencyRate.push({
          currency: taiwanBankDate.nation[i],
          cashBuy: taiwanBankDate.cashBuy[i],
          cashSell: taiwanBankDate.cashSell[i],
          sightBuy: taiwanBankDate.sightBuy[i],
          sightSell: taiwanBankDate.sightSell[i]
        })

      }

      callback(currencyRate)

    }
  })
}



module.exports = { taiwanBank }
