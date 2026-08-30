const { data } = require('react-router-dom');
const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Like = sequelize.define('Like', {
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "likes",
    timestamps: false
})

module.exports = {Like}