const { currency, rateOfExchange } = require('../helpers/currency_helpers')

const bankOfCurrency = function () {
  this.nation = []
  this.cashBuy = []
  this.cashSell = []
  this.sightBuy = []
  this.sightSell = []
}

bankOfCurrency.prototype.getNation = function (target)  {
  currency(target, this.nation)
}

bankOfCurrency.prototype.getRate = function (target, arr1, arr2) {
  rateOfExchange(target, arr1, arr2)
}

bankOfCurrency.prototype.getCashRate = function (target) {
  this.getRate(target, this.cashBuy, this.cashSell)
}

bankOfCurrency.prototype.getSightRate = function (target) {
  this.getRate(target, this.sightBuy, this.sightSell)
}



module.exports = bankOfCurrency
