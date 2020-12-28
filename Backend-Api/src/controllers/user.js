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

exports.getFavoritesByUser = async(req, res) => {
    const user = await User.findById(req.userID)
    return res.json(user.favorites)
}

exports.appendToList = async(req, res) => {
    const user = await User.findById(req.userID)
    user.favorites.push(req.body.addition)
    try{
        await user.save()
        res.status(201).json({message: "Successfully Appended To myList, please continue"})
    }catch(e) {
        res.status(400).json({error: e.message})
    }
}

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if (!user) {
            return res.status(404).send()
        }
        res.json(user)
    } catch(err) {
        res.status(404).send(err)
    }
}
