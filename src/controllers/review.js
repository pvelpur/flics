const User = require('../models/user')
const Review = require('../models/review')


exports.createReview = async (req, res) => {
    const review = new Review({...req.body}) 
    try{
        await review.save()
        const username = await User.findById(req.body.user)
        res.status(201).json({review,username})
    }catch(e) {
        res.status(400).send(e)
    }
}

exports.getReviews = async(req,res) => {
    const reviews = await Review.find()
    return res.json({reviews})
}