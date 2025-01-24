const recommendationEngine = require('../ai-features/recommendationEngine');
const autoUpdate = require('../ai-features/autoUpdate');
const errorDetection = require('../ai-features/ErrorDetection');
const scriptCorrection = require('../ai-features/scriptCorrection');
const hackerDetection = require('../ai-features/hackerDetection');

describe('AI Features Tests', () => {
    describe('Recommendation Engine', () => {
        it('should return recommended videos for a user', async () => {
            const userId = 'user123';
            const recommendations = await recommendationEngine.getRecommendations(userId);

            expect(Array.isArray(recommendations)).toBe(true);
            expect(recommendations.length).toBeGreaterThan(0);
        });

        it('should return an empty array if no recommendations are found', async () => {
            const userId = 'unknownUser';
            const recommendations = await recommendationEngine.getRecommendations(userId);

            expect(recommendations).toEqual([]);
        });
    });

    describe('Auto Update', () => {
        it('should update outdated entries', async () => {
            const updates = await autoUpdate.performUpdates();

            expect(updates).toHaveProperty('updatedCount');
            expect(updates.updatedCount).toBeGreaterThanOrEqual(0);
        });
    });

    describe('Error Detection', () => {
        it('should detect errors in a given script', () => {
            const script = 'console.log("Hello, World)';
            const errors = errorDetection.detectErrors(script);

            expect(errors).toBeInstanceOf(Array);
            expect(errors.length).toBeGreaterThan(0);
        });

        it('should return an empty array if no errors are found', () => {
            const script = 'console.log("Hello, World!");';
            const errors = errorDetection.detectErrors(script);

            expect(errors).toEqual([]);
        });
    });

    describe('Script Correction', () => {
        it('should return a corrected script for a given input', () => {
            const script = 'console.log("Hello, World)';
            const correctedScript = scriptCorrection.correctScript(script);

            expect(correctedScript).toBe('console.log("Hello, World");');
        });

        it('should return the same script if no correction is needed', () => {
            const script = 'console.log("Hello, World!");';
            const correctedScript = scriptCorrection.correctScript(script);

            expect(correctedScript).toBe(script);
        });
    });

    describe('Hacker Detection', () => {
        it('should detect suspicious activities and return a report', async () => {
            const logs = [
                { ip: '192.168.1.1', activity: 'login', success: true },
                { ip: '192.168.1.1', activity: 'data-fetch', success: true },
                { ip: '192.168.1.2', activity: 'login', success: false },
            ];

            const detectionReport = await hackerDetection.detectHackerActivity(logs);

            expect(detectionReport).toHaveProperty('suspiciousIPs');
            expect(detectionReport.suspiciousIPs.length).toBeGreaterThan(0);
        });

        it('should return no suspicious activity for safe logs', async () => {
            const logs = [
                { ip: '192.168.1.1', activity: 'login', success: true },
                { ip: '192.168.1.1', activity: 'data-fetch', success: true },
            ];

            const detectionReport = await hackerDetection.detectHackerActivity(logs);

            expect(detectionReport.suspiciousIPs).toEqual([]);
        });
    });
});
