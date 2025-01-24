const express = require('express');
const router = express.Router();
const { 
    reportVideo, 
    getReports, 
    getReportById, 
    updateReportStatus, 
    deleteReport 
} = require('../controllers/reportController');

// Submit a video report
router.post('/', reportVideo);

// Get all reports
router.get('/', getReports);

// Get a specific report by ID
router.get('/:id', getReportById);

// Update the status of a report
router.put('/:id', updateReportStatus);

// Delete a report
router.delete('/:id', deleteReport);

module.exports = router;
