const userModel = require('../models/user.model');

// Creating user and check its validity 
module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel.create({ 
        fullname: { firstname, lastname }, email, password });
        return user;
}