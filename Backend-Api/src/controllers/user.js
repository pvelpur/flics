const User = require('../models/user')

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found!"
            })
        }
        req.profile = user //adds profile object to req with user info
        next()
    })
}
