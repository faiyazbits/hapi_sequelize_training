

const Hapi = require("@hapi/hapi");
const openDb = require("./db").open;
const CONFIG = require('./config/defaults.json');


const server = new Hapi.Server({
  host: "localhost",
  port: CONFIG.server.port,
});


// open database connection and define models
openDb().then(()=>{
  server.start().then(()=>{
    console.log("Hapi server started in port " + CONFIG.server.port)
  })
});

