const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['planning', 'development', 'launched', 'scaling'],
        default: 'planning'
    },
    metrics: {
        users: {
            type: Number,
            default: 0
        },
        revenue: {
            type: Number,
            default: 0
        },
        funding: {
            type: Number,
            default: 0
        }
    },
    team: [{
        role: String,
        skill: String,
        salary: Number,
        productivity: Number
    }],
    development: {
        progress: {
            type: Number,
            default: 0
        },
        features: [{
            name: String,
            status: String,
            completion: Number
        }]
    },
    market: {
        competitors: [{
            name: String,
            strength: Number
        }],
        marketShare: {
            type: Number,
            default: 0
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('startup', StartupSchema); 