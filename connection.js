const Trades = require('./models/trades');
const sequelize =  require('./db');


return sequelize.authenticate()
    .then(result => {
        console.log(`SQLite successfully connected!`);
        return Trades.sync();
    })
    .then(result => {
        console.log(`Trades table created`);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })
