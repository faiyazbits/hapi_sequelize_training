const Hapi = require("@hapi/hapi");
const UserHandler = require("./handlers");
const initDb = require("./db").initDb;
const PORT = 8080;

const server = new Hapi.Server({
  host: "localhost",
  port: PORT,
});

server.route([
  {
    method: "GET",
    path: "/users",
    handler: UserHandler.getUsers,
  },
  {
    method: "GET",
    path: "/users/{userId}",
    handler: UserHandler.getUserById,
  },
  {
    method: "POST",
    path: "/users",
    handler: UserHandler.createNewUser,
  },
  {
    method: "PUT",
    path: "/users/{userId}",
    handler: UserHandler.updateUser,
  },
  {
    method: "GET",
    path: "/users/query",
    handler: UserHandler.queryUsers,
  },
]);

initDb().then(() => {
  server.start().then(() => {
    console.log("Hapi server started in port " + PORT);
  });
});
