module.exports = function (db, DataTypes) {
  const User = db.define("User", {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    gender: DataTypes.STRING,
  });

  return User
};
