const Review = require('../models/review')


exports.createReview = async (req, res) => {
    const review = new Review({...req.body, owner: req.userID })
    
    try{
        await review.save()
        res.status(201).json({review})
    }catch(e) {
        res.status(400).send(e)
    }
}

exports.getReviews = async(req,res) => {
    const reviews = await Review.find()
    return res.json({reviews})
}