const jwt = require('express-jwt')
const User = require('../models/user')

//Headers are key value pairs providing more information to the server
//Headers can be sent by the client but also sent back by the server in response

// Express Middleware function
const RequireAuth = async (req, res, next) => {
    try{
        // Get value for header
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id})

        if(!user) {
            throw new Error()
        }

        req.userID = decoded._id
        next()
    } catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
}

//Specifically for when users are trying to perform an action on an item (update, delete)
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.userID && req.profile._id === req.auth._id;
    if(!authorized) {
        //unauthorized status
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        })
    }
}

module.exports = {
    RequireAuth,
    hasAuthorization
}