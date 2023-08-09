const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config()
const sequelize = new Sequelize(process.env.DB_URL, {dialect: 'postgres',
protocol: 'postgres',
dialectOptions: {
  ssl: {
    require: 'true'
  }
}
});

module.exports = sequelize