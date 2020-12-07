const Group = require('../models/group')


exports.createGroup = async (req, res) => {
    const group = new Group({...req.body, owner: req.userID })
    
    try{
        await group.save()
        res.status(201).json({group})
    }catch(e) {
        res.status(400).send(e)
    }
}

exports.getGroups = async(req,res) => {
    const groups = await Group.find()
    return res.json({groups})
}