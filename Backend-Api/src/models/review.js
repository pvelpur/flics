const mongoose = require('mongoose')
const validator = require('validator')
const reviewSchema = new mongoose.Schema({
    title: {
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
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }


}, {
    timestamps: true
})


const Review = mongoose.model('Review', reviewSchema)

module.exports = Review