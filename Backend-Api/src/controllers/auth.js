const User = require('../models/user')

exports.signup = async (req, res) => {
    const user = new User(req.body)
    user.favorites.push(user.favMovie)
    console.log(user.favorites)
    
    try{
        
        await user.save()
        res.status(201).json({user})
    }catch(e) {
        res.status(400).send(e)
    }
}

exports.login = async (req, res) => {
    try {
        // Creating our own functions for user model
        const user = await User.findByCredentials(req.body.email_or_username, req.body.password)
        const token = await user.generateAuthToken()

        res.cookie("t", token, {expire: new Date() + 9999})
        
        const {_id, username, email, } = user
        res.json({token, user: {_id, username, email,}})
    } catch (e) {
        console.log('Error')
        res.status(400).send()
    }
}

exports.signout = (req, res) => {
    res.clearCookie('t')
    return res.json({message: "Signout Success!"})
}