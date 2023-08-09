const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("postgres://aukhan:BO6IUbvEr5Np@ep-cool-band-245614.us-east-2.aws.neon.tech/tradesDb", {dialect: 'postgres',
protocol: 'postgres',
dialectOptions: {
  ssl: {
    require: 'true'
  }
}
});

module.exports = sequelize