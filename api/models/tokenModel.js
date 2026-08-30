const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Token = sequelize.define('Token', {
    token:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tokens',
    timestamps: false
})

module.exports = {Token}