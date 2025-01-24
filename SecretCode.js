const mongoose = require('mongoose');

const secretCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: false,
    },
});

secretCodeSchema.methods.isExpired = function () {
    if (this.expiresAt) {
        return Date.now() > this.expiresAt;
    }
    return false;
};

const SecretCode = mongoose.model('SecretCode', secretCodeSchema);

module.exports = SecretCode;
