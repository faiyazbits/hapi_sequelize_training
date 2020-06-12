
const USERS = require('./data');
const _ = require('lodash');

class UserService{

    users = USERS;
    getUsers(){
        return this.users;
    }

    getUserById(userId){
        return _.find(this.users,(user)=>{
            return user.id === userId
        })
    }

    createNewUser(newUserDetails){
        const newUserId = this.users.length + 1;
        const newUserObj = _.merge(newUserDetails,{id:newUserId})
        this.users.push(newUserObj);
        return newUserObj
    }

    updateUser(userToUpdate,updatedUser){
        const userObjToUpdate = _.find(this.users,(user)=>{
            return user.id === userToUpdate
        })
        
        const updatedUserObj = _.merge(userObjToUpdate,updatedUser)
        this.users = _.map(this.users,(user) => {
            if(user.id === updatedUserObj.id){
                return updatedUserObj
            }else{
                return user
            }
        })
        return updatedUserObj
    }

    queryUsers(queryobj){
        return _.filter(this.users,queryobj)
    }
}


module.exports = new UserService()