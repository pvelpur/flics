const Group = require('../models/group')
const User = require('../models/user')
const { getReviews } = require('./review')


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
    const user = await User.findById(req.userID) //get the user
    await user.populate({path: 'groups', select: ['name', 'description']}).execPopulate()
    return res.json(user.groups)
}

exports.getReviews = async(req, res) => {
    console.log(req.params.groupId)
    const group = await Group.findById(req.params.groupId)
    await group.populate({path: 'reviews'}).execPopulate()
    return res.json(group.reviews)
}