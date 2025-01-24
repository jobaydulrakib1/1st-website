const mongoose = require('mongoose');

const videoReportSchema = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true,
    },
    reporterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reason: {
        type: String,
        required: true,
        enum: ['Inappropriate Content', 'Copyright Violation', 'Spam', 'Other'],
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        default: 'Pending',
        enum: ['Pending', 'Reviewed', 'Resolved'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

videoReportSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const VideoReport = mongoose.model('VideoReport', videoReportSchema);

module.exports = VideoReport;
