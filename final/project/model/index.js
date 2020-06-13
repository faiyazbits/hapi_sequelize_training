const model = {};
let initialized = false;

/**
 * Initializes sequelize models and their relations.
 * @param   {Object} sequelize  - Sequelize instance.
 * @returns {Object}            - Sequelize models.
 */
function init(sequelize) {
    delete module.exports.init; // Destroy itself to prevent repeated calls and clash with a model named 'init'.
    initialized = true;
    // Import model files and assign them to `model` object.
    model.User = sequelize.import('./User.js');
    model.UserProfile = sequelize.import('./UserProfile.js');
    model.UserAddress = sequelize.import('./UserAddress.js');
    // All models are initialized. Now connect them with relations.
    require('./User.js').initRelations();
    require('./UserProfile.js').initRelations();
    require('./UserAddress.js').initRelations();
    return model;
}

// Note: While using this module, DO NOT FORGET FIRST CALL model.init(sequelize). Otherwise you get undefined.
module.exports = model;
module.exports.init = init;
module.exports.isInitialized = initialized;
