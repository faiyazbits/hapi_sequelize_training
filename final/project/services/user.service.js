const models = require("../model");
const Sequelize = require("sequelize");
const UserAddress = require("../model").UserAddress;
const _ = require("lodash");

class UserService {
  getUserById(userId) {
    const User = models.User;
    const UserProfile = models.UserProfile;
    return User.findOne({
      where: {
        id: userId,
      },
    }).then((user) => {
      return new Promise((resolve, reject) => {
        const response = {};
        response.user = user.dataValues;

        Promise.all([
          user.getUserAddresses(),
          user.getUserProfile(),
        ]).then((results) => {
            response.addressses = results[0];
            response.profile = results[1];
            resolve(response)
        });
      });
    });
  }
}

module.exports = new UserService();
