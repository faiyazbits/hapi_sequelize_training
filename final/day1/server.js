
const Hapi = require('@hapi/hapi');
const routes = require('./routes')
const PORT = 8080

const server = new Hapi.Server({
    host:'localhost',
    port:PORT
})

server.route(routes);

server.start().then(()=>{
    console.log("Hapi server started in port " + PORT)
})