
const currency = (target, arr) => {
  
  for (let i = 0; i < target.length; i++) {
    arr.push(target[i].children[0].data.trim())
  }

}

const rateOfExchange = (target, arrBuy, arrSell) => {
  for (let i = 0; i < target.length; i++) {
    if (i % 2 === 0) {
      arrBuy.push(target[i].children[0].data.trim())
    } else {
      arrSell.push(target[i].children[0].data.trim())
    }
  }
}




module.exports = {
  currency,
  rateOfExchange
}
