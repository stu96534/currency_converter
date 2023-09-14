'use strict';

const taiwanBank = require('../public/taiwanBank.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('taiwanBanks', Array.from({ length: taiwanBank.length }).map((_, i) => ({
      name: taiwanBank[i].currency,
      cash_buy: taiwanBank[i].cashBuy,
      cash_sell: taiwanBank[i].cashSell,
      sight_buy: taiwanBank[i].sightBuy,
      sight_sell: taiwanBank[i].sightSell,
      created_at: new Date(),
      updated_at: new Date()
    })
    ), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('taiwanBanks', null, {});
  }
};
