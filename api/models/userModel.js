const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING(20),
        unique: {
            msg: "El Username ya fue registrado"
        },
        allowNull: false
    },
    name:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: {
            msg: "El Email ya fue registrado"
        },
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cont:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
})

module.exports = {User}