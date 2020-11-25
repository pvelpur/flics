const mongoose = require('mongoose')
const validator = require('validator')
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
    },
    rating: {
        type: Number,
        default: 0,
        required: true,   
    },
    description: {
        type: String,
        trim: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }


}, {
    timestamps: true
})


const Review = mongoose.model('Review', reviewSchema)

module.exports = Review