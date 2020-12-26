const Group = require('../models/group')
const User = require('../models/user')


exports.createGroup = async (req, res) => {
    //req body will have name and desc.
    const group = new Group({...req.body, admins: [req.userID], usernames:[req.userID] })

    try{
        await group.save()
        res.status(201).json({group})
    }catch(e) {
        res.status(400).send(e)
    }
}

// Should return groups for a user
exports.getGroups = async(req,res) => {
    //const groups = await Group.find()
    const user = User.findById(req.userID) //get the user
    const groups = await user.find().populate('groups')
    return res.json({groups})
} 