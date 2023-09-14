const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const { currency, rateOfExchange } = require('../helpers/currency-helpers')

const taiwanBank = function () {
  request({
    url: "https://rate.bot.com.tw/xrt?Lang=zh-TW",
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      return
    } else {
      const nation = []
      const cashBuy = []
      const cashSell = []
      const sightBuy = []
      const sightSell = []
      const currencyRate = []

      const $ = cheerio.load(body)
      const nationTarget = $(".hidden-phone.print_show.xrt-cur-indent")
      const cashTarget = $(".rate-content-cash.text-right")
      const sightTarget = $(".rate-content-sight.text-right")

      currency(nationTarget, nation)

      rateOfExchange(cashTarget, cashBuy, cashSell)

      rateOfExchange(sightTarget, sightBuy, sightSell)


      for (let i = 0; i < nation.length; i++) {
        currencyRate.push({
          currency: nation[i],
          cashBuy: cashBuy[i],
          cashSell: cashSell[i],
          sightBuy: sightBuy[i],
          sightSell: sightSell[i]
        })

      }

      fs.writeFile('./public/taiwanBank.json', JSON.stringify(currencyRate), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })

    }
  })
}

module.exports = { taiwanBank }
