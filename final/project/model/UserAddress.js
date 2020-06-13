const Sequelize = require("sequelize");
const Model = require("sequelize").Model;

module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {}

  UserAddress.init(
    {
      address: DataTypes.TEXT,
      pincode: DataTypes.INTEGER,
    },
    { sequelize, modelName: "UserAddress" }
  );

  return UserAddress;
};

module.exports.initRelations = () => {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

  const model = require("./index");
  const User = model.User;
  const UserAddress = model.UserAddress;

  UserAddress.belongsTo(User);
};
