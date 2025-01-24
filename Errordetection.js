/**
 * Detect and filter errors from log entries.
 * @param {Array} logs - Array of log objects with a `level` and `message`.
 * @returns {Array} Array of error logs.
 */
const detectErrors = (logs) => {
    if (!Array.isArray(logs)) {
        throw new Error('Invalid input: logs must be an array.');
    }

    return logs.filter(log => log.level === 'error');
};

/**
 * Display error details in a readable format.
 * @param {Array} errorLogs - Array of error log objects.
 */
const displayErrors = (errorLogs) => {
    if (!Array.isArray(errorLogs)) {
        throw new Error('Invalid input: errorLogs must be an array.');
    }

    errorLogs.forEach((log, index) => {
        console.log(`Error ${index + 1}: ${log.message} (Occurred at: ${log.timestamp})`);
    });
};

module.exports = { detectErrors, displayErrors };
