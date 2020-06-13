const Model = require("sequelize").Model;

module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {}

  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    { sequelize, modelName: "User" }
  );

  return User;
};


module.exports.initRelations = () => {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

  const model = require("./index");
  const UserProfile = model.UserProfile;
  const UserAddress = model.UserAddress;
  const User = model.User;

  User.hasOne(UserProfile);

  User.hasMany(UserAddress);
};
