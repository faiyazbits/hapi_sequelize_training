const Sequelize = require("sequelize");

const User = require("./User");

class UserProfile extends Model {}
UserProfile.init({
  gender: Sequelize.STRING,
  phoneNo: Sequelize.NUMBER
}, { sequelize, modelName: 'UserProfile' });

UserProfile.belongsTo(User);

module.exports = UserProfile;