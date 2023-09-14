'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaiwanBank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaiwanBank.init({
    name: DataTypes.STRING,
    cashBuy: DataTypes.STRING,
    cashSell: DataTypes.STRING,
    sightBuy: DataTypes.STRING,
    sightSell: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TaiwanBank',
    tableName: 'taiwanBanks',
    underscored: true,
  });
  return TaiwanBank;
};