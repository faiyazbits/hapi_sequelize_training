const UserHandler = require('./handlers');

const routes = [
    {
        method:'GET',
        path:'/users',
        handler:UserHandler.getUsers
    },
    {
        method:'GET',
        path:'/users/{userId}',
        handler:UserHandler.getUserById
    }, 
    {
        method:'POST',
        path:'/users',
        handler:UserHandler.createNewUser
    }, 
    {
        method:'PUT',
        path:'/users/{userId}',
        handler:UserHandler.updateUser
    },
    {
        method:'GET',
        path:'/users/query',
        handler:UserHandler.queryUsers
    },
]

module.exports = routes;