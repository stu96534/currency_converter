const { TaiwanBank } = require('../models')
const fs = require('fs')

const updateRate = async (Data) => {
  for (let i = 0; i < Data.length; i++) {
    const currency = await TaiwanBank.findOne({ where: { name: Data[i].currency } })

    currency.update({
      cashBuy: Data[i].cashBuy,
      cashSell: Data[i].cashSell,
      sightBuy: Data[i].sightBuy,
      sightSell: Data[i].sightSell
    })

  }
}

const fileSeed = async (Data) => {

  fs.writeFile('./public/taiwanBank.json', JSON.stringify(Data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

module.exports = { updateRate, fileSeed }
