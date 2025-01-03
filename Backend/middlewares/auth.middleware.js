const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports.authUser = async (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await userModel.findOne({token: token});

    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized access'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded._id; // Extracting user ID from the token

        const user = await userModel.findById(userId); // pahle decoded.id tha
        
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
}

