const { Token } = require('./tokenModel');
const { User } = require('./userModel');
const { Post } = require('./postModel');
const { Like } = require('./likeModel');

Token.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Token, {foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})
User.hasMany(Post, {foreignKey: 'user_id'})

Post.belongsToMany(User, {through: Like, foreignKey: 'post_id', timestamps: false})
User.belongsToMany(Post, {through: Like, foreignKey: 'user_id', timestamps: false})


module.exports = { User, Token, Post, Like }
