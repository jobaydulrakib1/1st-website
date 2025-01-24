// Secret Code Manager
// Responsible for generating and validating secure codes.

const crypto = require('crypto');

class SecretCodeManager {
    /**
     * Generates a secure random secret code.
     * @param {number} length - The desired length of the code.
     * @returns {string} - The generated secret code.
     */
    static generateCode(length = 16) {
        return crypto.randomBytes(length).toString('hex');
    }

    /**
     * Validates a provided code against a stored hash.
     * @param {string} code - The code to validate.
     * @param {string} hash - The hash to compare against.
     * @returns {boolean} - Whether the code is valid.
     */
    static validateCode(code, hash) {
        const hashToCompare = crypto.createHash('sha256').update(code).digest('hex');
        return hash === hashToCompare;
    }
}

module.exports = SecretCodeManager;
