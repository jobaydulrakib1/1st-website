const express = require('express');
const router = express.Router();
const { 
    getAllVideos, 
    uploadVideo, 
    getVideoById, 
    updateVideo, 
    deleteVideo 
} = require('../controllers/videoController');

// Get all videos
router.get('/', getAllVideos);

// Upload a new video
router.post('/upload', uploadVideo);

// Get a video by ID
router.get('/:id', getVideoById);

// Update a video by ID
router.put('/:id', updateVideo);

// Delete a video by ID
router.delete('/:id', deleteVideo);

module.exports = router;
