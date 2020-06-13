const Hapi = require('@hapi/hapi');
const UserSchema  = require('./user.schema')
const PORT = 9000;
const server = new Hapi.Server({
    host : "localhost",
    port : PORT
})

server.route([
    {path : "/" , method : "GET", handler: () => {
        return "Hapi"
    }},
    {path : "/create/user" , method : "POST", handler: (request,h) => {
        const {value, error} = UserSchema.validate(request.payload)
        if (error) return error.details;
        return value;
    }},
    {
        method: 'GET',
        path: '/hello/{name}',
        handler: function (request, h) {
    
             return `Hello ${request.params.name}!`;
        },
        options: {
            validate: {
                params: Joi.object({
                    name: Joi.string().min(3).max(10)
                })
            }
        }
    }
])


server.start().then(()=> {
    console.log("Hapi server started " + PORT)
})