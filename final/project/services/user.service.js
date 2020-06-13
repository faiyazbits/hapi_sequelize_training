
const models = require('../model');
const Sequelize = require('sequelize')
const UserAddress = require('../model').UserAddress
const _ = require('lodash');

class UserService{

    getUserById(userId){
        const User = models.User;
        const UserProfile = models.UserProfile;
        return User.findOne({
            where:{
                id:userId
            }
        }).then((user) => {
            return user.getUserAddresses()
        })
    }
    
}


module.exports = new UserService()