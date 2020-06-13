
const User = require('../model').model.User
const UserProfile = require('../model').model.UserProfile
const UserAddress = require('../model').model.UserAddress
const _ = require('lodash');

class UserService{

    getUserById(userId){
        return User.findAll({
            where:{
                id:userId
            },
            include: [{
                model: UserProfile,
                where: { userId: Sequelize.col('user.id') }
            },
            {
                model: UserAddress,
                where: { userId: Sequelize.col('user.id') }
            }
            ]
        })
    }
    
}


module.exports = new UserService()