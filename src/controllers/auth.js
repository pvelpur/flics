const User = require('../models/user')

exports.signup = async (req, res) => {
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).json({user})
    }catch(e) {
        res.status(400).send(e)
    }
    
    
}