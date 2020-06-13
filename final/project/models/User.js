const Sequelize = require("sequelize");

const UserProfile = require('./UserProfile')

const UserAddress = require('./UserAddress')

class User extends Model {}
User.init({
  name: Sequelize.STRING,
  age: Sequelize.NUMBER
}, { sequelize, modelName: 'User' });

User.hasOne(UserProfile);

User.hasMany(UserAddress); 

module.exports = User;