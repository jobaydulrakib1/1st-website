const request = require('supertest');
const app = require('../server'); // Import the server instance
const mongoose = require('mongoose');

describe('Report Routes API Tests', () => {
    afterAll(async () => {
        await mongoose.connection.close(); // Close the database connection after all tests
    });

    describe('POST /api/reports', () => {
        it('should create a new report', async () => {
            const res = await request(app)
                .post('/api/reports')
                .send({
                    videoId: '61e2e4f5b70f4a27d85e9f41',
                    reason: 'Inappropriate content',
                    details: 'This video contains offensive language.',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('message', 'Report created successfully');
            expect(res.body).toHaveProperty('report');
        });

        it('should fail to create a report with missing fields', async () => {
            const res = await request(app)
                .post('/api/reports')
                .send({
                    reason: 'Incomplete data',
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'All fields are required');
        });
    });

    describe('GET /api/reports', () => {
        it('should return a list of reports', async () => {
            const res = await request(app).get('/api/reports');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body.length).toBeGreaterThan(0);
        });
    });

    describe('GET /api/reports/:id', () => {
        it('should return a single report by ID', async () => {
            const newReport = await request(app)
                .post('/api/reports')
                .send({
                    videoId: '61e2e4f5b70f4a27d85e9f42',
                    reason: 'Copyright infringement',
                    details: 'This video uses copyrighted music without permission.',
                });

            const reportId = newReport.body.report._id;

            const res = await request(app).get(`/api/reports/${reportId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('_id', reportId);
            expect(res.body).toHaveProperty('reason', 'Copyright infringement');
        });

        it('should return 404 if report not found', async () => {
            const res = await request(app).get('/api/reports/invalidReportId');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Report not found');
        });
    });

    describe('DELETE /api/reports/:id', () => {
        it('should delete a report by ID', async () => {
            const newReport = await request(app)
                .post('/api/reports')
                .send({
                    videoId: '61e2e4f5b70f4a27d85e9f43',
                    reason: 'Harmful content',
                    details: 'This video promotes dangerous activities.',
                });

            const reportId = newReport.body.report._id;

            const res = await request(app).delete(`/api/reports/${reportId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message', 'Report deleted successfully');
        });

        it('should return 404 if report to delete is not found', async () => {
            const res = await request(app).delete('/api/reports/invalidReportId');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Report not found');
        });
    });
});
