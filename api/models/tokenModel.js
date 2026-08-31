const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Token = sequelize.define('Token', {
    token:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        foreignKey: true
    }
}, {
    tableName: 'tokens',
    timestamps: false
})

module.exports = {Token}