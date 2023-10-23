const request = require('request')
const cheerio = require('cheerio')
const { TaiwanBank } = require('../models')
const fs = require('fs')

const { currency, rateOfExchange } = require('../helpers/currency_helpers')

const ctbcBank = function () {
  request({
    url: "https://rate.bot.com.tw/xrt?Lang=zh-TW",
    method: "GET"
  }, async function (error, response, body) {
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
      const nationTarget = $(".sp-img")

      console.log(nationTarget[0])


      // const cashTarget = $(".rate-content-cash.text-right")
      // const sightTarget = $(".rate-content-sight.text-right")

      // currency(nationTarget, nation)

      // rateOfExchange(cashTarget, cashBuy, cashSell)

      // rateOfExchange(sightTarget, sightBuy, sightSell)


      // for (let i = 0; i < nation.length; i++) {
      //   currencyRate.push({
      //     currency: nation[i],
      //     cashBuy: cashBuy[i],
      //     cashSell: cashSell[i],
      //     sightBuy: sightBuy[i],
      //     sightSell: sightSell[i]
      //   })

      // }

      // for (let i = 0; i < currencyRate.length; i++) {
      //   const currency = await TaiwanBank.findOne({ where: { name: currencyRate[i].currency } })

      //   currency.update({
      //     cashBuy: currencyRate[i].cashBuy,
      //     cashSell: currencyRate[i].cashSell,
      //     sightBuy: currencyRate[i].sightBuy,
      //     sightSell: currencyRate[i].sightSell
      //   })

      // }

    }
  })
}


ctbcBank()
