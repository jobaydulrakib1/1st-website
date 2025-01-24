const express = require('express');
const router = express.Router();
const { 
    detectHackerActivity, 
    getAllHackerReports, 
    getHackerReportById, 
    resolveHackerReport, 
    deleteHackerReport 
} = require('../controllers/hackerController');

// Detect hacker activity
router.post('/detect', detectHackerActivity);

// Get all hacker activity reports
router.get('/', getAllHackerReports);

// Get a specific hacker activity report by ID
router.get('/:id', getHackerReportById);

// Resolve a specific hacker activity report
router.put('/:id', resolveHackerReport);

// Delete a hacker activity report
router.delete('/:id', deleteHackerReport);

module.exports = router;
