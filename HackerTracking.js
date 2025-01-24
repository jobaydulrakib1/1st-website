// Hacker Tracking
// Tracks potential malicious activities and logs attempts.

const fs = require('fs');
const path = require('path');

class HackerTracking {
    constructor(logFilePath = './security/hackerLogs.txt') {
        this.logFilePath = logFilePath;
        this.ensureLogFile();
    }

    /**
     * Ensures the log file exists.
     */
    ensureLogFile() {
        const directory = path.dirname(this.logFilePath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        if (!fs.existsSync(this.logFilePath)) {
            fs.writeFileSync(this.logFilePath, '');
        }
    }

    /**
     * Logs a suspicious activity.
     * @param {string} ipAddress - The IP address of the suspicious user.
     * @param {string} reason - Reason for tracking this activity.
     * @param {Date} [timestamp] - Optional timestamp of the activity.
     */
    logActivity(ipAddress, reason, timestamp = new Date()) {
        const logEntry = `${timestamp.toISOString()} | IP: ${ipAddress} | Reason: ${reason}\n`;
        fs.appendFileSync(this.logFilePath, logEntry);
        console.log('Suspicious activity logged:', logEntry.trim());
    }

    /**
     * Fetches the latest logs.
     * @param {number} limit - Number of latest log entries to fetch.
     * @returns {string[]} - Array of log entries.
     */
    getLogs(limit = 10) {
        const logs = fs.readFileSync(this.logFilePath, 'utf8').trim().split('\n');
        return logs.slice(-limit);
    }
}

module.exports = HackerTracking;
