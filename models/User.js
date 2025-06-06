const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
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
    startups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'startup'
    }],
    experience: {
        type: Number,
        default: 0
    },
    achievements: [{
        title: String,
        description: String,
        date: Date
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema); 