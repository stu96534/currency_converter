require('dotenv').config()

const mysql2 = require('mysql2')

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "currency_converter",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "currency_converter_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: process.env.PROD_USERNAME,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    host: process.env.PROD_HOST,
    port: process.env.PROD_PORT,
    dialect: "mysql",
    dialectModule: mysql2
  }
};