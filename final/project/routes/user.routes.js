const UserHandler = require('../handlers/user.handler')


module.exports = [
    {
        method: "GET",
        path: "/users/{userId}",
        handler: UserHandler.getUserById,
      }
]