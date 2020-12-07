const mongoose = require('mongoose')
const validator = require('validator')
const groupSchema = new mongoose.Schema({
    usernames: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    reviews: [{
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    }],
    name: {
        type: String,
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, {
    timestamps: true
})

groupSchema.methods.appendUser = function (username) {
    this.usernames.push(username)
}

const Group = mongoose.model('Group', groupSchema)

module.exports = Group