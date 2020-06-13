

const Hapi = require("@hapi/hapi");
const openDb = require("./db").open;
const CONFIG = require('./config/defaults.json');
const routes = require('./routes/user.routes');

const server = new Hapi.Server({
  host: "localhost",
  port: CONFIG.server.port,
});


server.route(routes)

// open database connection and define models
openDb().then(()=>{
  server.start().then(()=>{
    console.log("Hapi server started in port " + CONFIG.server.port)
  })
});

