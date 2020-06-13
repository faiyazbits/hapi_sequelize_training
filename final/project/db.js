"use strict";

const _ = require("lodash");
const Sequelize = require("sequelize");
const CONFIG = require("./config/defaults.json");

let orm = null;

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
      sequelize.sync({ force: true }).then(() => {
          resolve()
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
