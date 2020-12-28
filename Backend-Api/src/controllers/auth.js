const User = require('../models/user')

exports.signup = async (req, res) => {
    const user = new User(req.body)
    user.favorites.push(user.favMovie)
    try{
        
        await user.save()
        //res.status(201).json({user})
        res.status(201).json({message: "Successfully Created User, please login"})
    }catch(e) {
        res.status(400).json({error: e.message})
    }
}

exports.login = async (req, res) => {
    try {
        // Creating our own functions for user model
        const user = await User.findByCredentials(req.body.email_or_username, req.body.password)
        const token = await user.generateAuthToken()

        res.cookie("t", token, {expire: new Date() + 9999})
        
        const {_id, username, email, favorites} = user
        res.json({token, user: {_id, username, email, favorites}})
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

exports.signout = (req, res) => {
    res.clearCookie('t')
    return res.json({message: "Signout Success!"})
}