
const UserService = require('../services/user.service')

class UserHandler {
    getUserById(request,h){
        const userId = parseInt(request.params.userId);
        return UserService.getUserById(userId)
    }
}

module.exports = new UserHandler();