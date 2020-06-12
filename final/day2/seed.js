const USERS = require('./data')
module.exports = function(db){
    return db.model('User').bulkCreate(USERS)
}