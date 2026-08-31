const { data } = require('react-router-dom');
const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    content:{
        type: DataTypes.STRING(5000),
        allowNull: false
    },
    user_id:{
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: "posts",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false
})

module.exports = {Post}