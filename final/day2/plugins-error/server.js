const Hapi = require('@hapi/hapi');
const Boom = require('@hapi/boom');
const PORT = 8080

const server = new Hapi.Server({
    host:'localhost',
    port:PORT
})

const rootHandler = function (request, h) {

    server.log('error', 'oh no');
    server.log('info', 'some message');
    return "Hello Hapi"
};

const notFoundHandler = function (request, h) {

   return Boom.notFound('not found');
};

server.route([
    { path: '/', method: 'GET', handler: rootHandler },
    { path: '/{path*}',  method: 'GET', handler: notFoundHandler }
])


server.register({
    plugin: require('@hapi/good'),
    options: {
        reporters: {
            myConsoleReporter: [
                {
                    module: '@hapi/good-console',
                    args: [{ log: '*', response: '*'}]
                },
                'stdout'
            ]
        }
    }
})
.then(() => server.start())
.then(()=>{
    server.log('info', 'Hapi server started in port ' + PORT);
})