const mongoose = require('mongoose')
const validator = require('validator')

const groupSchema = new mongoose.Schema({
    usernames: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    }
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // }

}, {
    timestamps: true
})

groupSchema.methods.appendUser = function (username) {
    this.usernames.push(username)
}

groupSchema.methods.appendAdmin = function (username) {
    this.admins.push(username)
}

const Group = mongoose.model('Group', groupSchema)

module.exports = Group