
const UserService = require('./service')

class UserHandler {
    getUsers(request,h){
        return UserService.getUsers()
    }

    getUserById(request,h){
        const userId = parseInt(request.params.userId);
        return UserService.getUserById(userId)
    }

    createNewUser(request,h){
        const newUserDetails = request.payload;
        return UserService.createNewUser(newUserDetails)
    }

    updateUser(request,h){
        const updatedUserDetails = request.payload;
        const userToUpdate = parseInt(request.params.userId);
        return UserService.updateUser(userToUpdate,updatedUserDetails)
    }

    queryUsers(request,h){
        const query = request.query;
        return UserService.queryUsers(query)
    }
}

module.exports = new UserHandler();