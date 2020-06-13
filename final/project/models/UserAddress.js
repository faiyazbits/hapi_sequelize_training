const Sequelize = require("sequelize");
const User = require("./User");

class UserAddress extends Model {}

UserAddress.init({
  address: Sequelize.TEXT,
  pincode: Sequelize.NUMBER
}, { sequelize, modelName: 'UserAddress' });

UserAddress.belongsTo(User);

module.exports = UserAddress;