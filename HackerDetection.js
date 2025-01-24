const fs = require('fs');

/**
 * Detect suspicious activities in log data.
 * @param {Array} logs - Array of log objects with `ip`, `action`, and `timestamp`.
 * @returns {Array} Array of suspicious activities detected.
 */
const detectHackers = (logs) => {
    if (!Array.isArray(logs)) {
        throw new Error('Logs must be an array of log objects.');
    }

    const suspiciousActivities = logs.filter((log) => {
        return (
            log.action === 'unauthorized_access' ||
            (log.action === 'failed_login' && log.attempts > 5) ||
            log.ip === '127.0.0.1' // Example suspicious IP address
        );
    });

    return suspiciousActivities;
};

/**
 * Log detected suspicious activities to a file.
 * @param {Array} suspiciousActivities - Array of suspicious log objects.
 * @param {string} filePath - Path to save the detected activities.
 */
const logSuspiciousActivities = (suspiciousActivities, filePath) => {
    if (!Array.isArray(suspiciousActivities)) {
        throw new Error('Suspicious activities must be an array.');
    }

    const logData = suspiciousActivities.map((activity) => ({
        ip: activity.ip,
        action: activity.action,
        timestamp: activity.timestamp,
    }));

    fs.writeFileSync(filePath, JSON.stringify(logData, null, 2), 'utf-8');
    console.log(`Suspicious activities logged to: ${filePath}`);
};

module.exports = { detectHackers, logSuspiciousActivities };
