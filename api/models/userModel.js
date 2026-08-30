const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cont:{
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
})

module.exports = {User}