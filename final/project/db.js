"use strict";

const _ = require("lodash");
const Sequelize = require("sequelize");
const CONFIG = require("./config/defaults.json");
const models = require("./model");
const USERS = require("./seed/data").USERS;
const USER_ADDRESSES = require("./seed/data").USER_ADDRESSES;
const USER_PROFILES = require("./seed/data").USER_PROFILES;

let orm = null;

function putSeedData(orm) {
  const User = models.User;
  const UserAddress = models.UserAddress;
  const UserProfile = models.UserProfile;
  return User.bulkCreate(USERS)
    .then(UserAddress.bulkCreate(USER_ADDRESSES))
    .then(UserProfile.bulkCreate(USER_PROFILES));
}
/**
 * Open database connection and initialize ORM.
 */
exports.open = function () {
  return new Promise((resolve, reject) => {
    orm = require("./model/index");

    // lazy initialization of sequelize; only runs once
    if (orm.init) {
      const sequelize = new Sequelize(
        CONFIG.database.db,
        CONFIG.database.user,
        CONFIG.database.pass,
        {
          host: "localhost",
          dialect: "postgres",
        }
      );

      orm.init(sequelize); // this can run only once!
      orm.sequelize = sequelize;
      orm.Sequelize = Sequelize;

      // force will drop the tables and create them again.this is only for training
      sequelize
        .sync()
        .then(putSeedData())
        .then(() => {
          resolve();
        });
    }
  });
};

/**
 * Return ORM instance.
 */
exports.orm = function () {
  if (!orm) {
    exports.open();
  }
  return orm;
};
