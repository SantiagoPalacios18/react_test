const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('instagram' /* nombre DB */, 'root' /* nombre de mi usuario */, 'KNYDIOBYGU4TGMJX*ñ' /* password de mi usuaro */, {
    host: 'localhost',
    dialect: 'mysql',
    root: 3306,
    logging: false // NO muestra todo lo que se hace en la base de datos
});

module.exports = { sequelize };