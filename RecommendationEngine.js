/**
 * Recommend videos based on user preferences and watch history.
 * @param {Array} userPreferences - Array of user preferred categories.
 * @param {Array} videoData - Array of available video objects.
 * @returns {Array} Recommended videos.
 */
const recommendVideos = (userPreferences, videoData) => {
    if (!Array.isArray(userPreferences) || !Array.isArray(videoData)) {
        throw new Error('Invalid input: Both userPreferences and videoData should be arrays.');
    }

    return videoData.filter(video => 
        userPreferences.includes(video.category)
    ).slice(0, 10); // Limit recommendations to 10 videos
};

module.exports = { recommendVideos };
