const {DataTypes} = require("sequelize");
const sequelize =  require('../db');

const Trade = sequelize.define("trades", {
    type: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    symbol: DataTypes.TEXT,
    shares: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    timestamp: DataTypes.BIGINT,
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {timestamps : true});

module.exports = Trade;
