const Model = require("sequelize").Model;

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {}
  UserProfile.init(
    {
      gender: DataTypes.STRING,
      phoneNo: DataTypes.INTEGER,
    },
    { sequelize, modelName: "UserProfile" }
  );

  return UserProfile;
};

module.exports.initRelations = () => {
  delete module.exports.initRelations; // Destroy itself to prevent repeated calls.

  const model = require("./index");
  const User = model.User;
  const UserProfile = model.UserProfile;

  UserProfile.belongsTo(User);
};

