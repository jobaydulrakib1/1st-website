// backend/routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
