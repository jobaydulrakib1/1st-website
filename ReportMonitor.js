// Report Monitor
// Monitors and manages user-generated reports.

const fs = require('fs');
const path = require('path');

class ReportMonitor {
    constructor(reportLogPath = './security/reportLogs.json') {
        this.reportLogPath = reportLogPath;
        this.ensureLogFile();
    }

    /**
     * Ensures the report log file exists.
     */
    ensureLogFile() {
        const directory = path.dirname(this.reportLogPath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }
        if (!fs.existsSync(this.reportLogPath)) {
            fs.writeFileSync(this.reportLogPath, JSON.stringify([]));
        }
    }

    /**
     * Adds a new report to the log.
     * @param {string} reporter - The username or ID of the reporter.
     * @param {string} reportedItem - The item being reported (e.g., video ID, user ID).
     * @param {string} reason - The reason for the report.
     * @param {Date} [timestamp] - Optional timestamp of the report.
     */
    addReport(reporter, reportedItem, reason, timestamp = new Date()) {
        const newReport = {
            id: this.generateUniqueId(),
            reporter,
            reportedItem,
            reason,
            timestamp: timestamp.toISOString(),
        };

        const reports = this.getReports();
        reports.push(newReport);
        fs.writeFileSync(this.reportLogPath, JSON.stringify(reports, null, 2));
        console.log('New report logged:', newReport);
    }

    /**
     * Fetches all reports.
     * @returns {Array} - Array of all reports.
     */
    getReports() {
        const data = fs.readFileSync(this.reportLogPath, 'utf8');
        return JSON.parse(data);
    }

    /**
     * Generates a unique ID for each report.
     * @returns {string} - A unique ID.
     */
    generateUniqueId() {
        return `report_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    }

    /**
     * Filters reports based on a condition.
     * @param {Function} filterFn - A filter function to apply.
     * @returns {Array} - Array of filtered reports.
     */
    filterReports(filterFn) {
        const reports = this.getReports();
        return reports.filter(filterFn);
    }
}

module.exports = ReportMonitor;
