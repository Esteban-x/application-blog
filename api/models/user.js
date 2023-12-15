const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    age: {
        type: Number,
        required: true,
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: String
})

const User = mongoose.model('User', userSchema)

module.exports = User