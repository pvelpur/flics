const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value)  {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        },
        trim:true,
        lowercase:true
    },
    password: {
        type: String,
        validate(value) {
            if(value.toLowerCase().includes("password")) {
                throw new Error("Password cannot contain 'password'")
            }
        },
        required: true,
        trim: true,
        minlength: 7
    },
}, {
    timestamps: true
})

// Middleware
// statics are "Model methods", can call using User.<method>
userSchema.statics.findByCredentials = async (username_or_email, password) => {
    const user = await User.findOne({$or: [{email: username_or_email}, {username: username_or_email}]})

    if(!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Runs before saving user; hashes password for added security
userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User