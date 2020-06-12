
const db = require('./db').db;
const _ = require('lodash');

class UserService{
    getUsers(){
        return db.model('User').findAll({})
    }

    getUserById(userId){
        return db.model('User').findAll({
            where:{
                id:userId
            }
        })
    }

    createNewUser(newUserDetails){
       return db.model('User').create(newUserDetails)
    }

    updateUser(userToUpdate,updatedUser){
        return db.model('User').update(updatedUser,{
            where:{
                id:userToUpdate
            }
        }).then(()=>{
            return db.model('User').findAll({
                where:{
                    id:userToUpdate
                }
            })
        })
    }

    queryUsers(queryobj){
        return db.model('User').findAll({
            where:queryobj
        })
    }
}


module.exports = new UserService()