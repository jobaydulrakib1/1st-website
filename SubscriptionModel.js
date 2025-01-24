const mongoose = require('mongoose');

// Subscription Schema
const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    plan: {
        type: String,
        enum: ['Free', 'Basic', 'Premium'],
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

// Subscription Model
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
