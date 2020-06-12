const Sequelize = require("sequelize");
const createUserTable = require("./model");
const createSeedData = require("./seed");
const db = new Sequelize("hapi_training", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 9,
    min: 0,
    idle: 10000,
  },
});

function initDb() {
  return new Promise((resolve, reject) => {
    createUserTable(db, Sequelize);
    db.authenticate()
      .then(() => {
        console.log("Sequelize initiated");
      })
      .catch((err) => {
        console.log(err);
      });

    db.sync({ force: true }).then(() => {
      createSeedData(db).then(() => {
        resolve();
      });
    });
  });
}
module.exports = {
  db: db,
  initDb: initDb,
};
