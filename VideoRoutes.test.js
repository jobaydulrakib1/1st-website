const request = require('supertest');
const app = require('../server'); // Import the server instance
const mongoose = require('mongoose');

describe('Video Routes API Tests', () => {
    afterAll(async () => {
        await mongoose.connection.close(); // Close the database connection after all tests
    });

    describe('GET /api/videos', () => {
        it('should return a list of videos', async () => {
            const res = await request(app).get('/api/videos');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body.length).toBeGreaterThan(0);
        });
    });

    describe('POST /api/videos', () => {
        it('should create a new video', async () => {
            const res = await request(app)
                .post('/api/videos')
                .send({
                    title: 'Test Video',
                    description: 'This is a test video',
                    url: 'http://example.com/video.mp4',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('message', 'Video created successfully');
            expect(res.body).toHaveProperty('video');
        });

        it('should fail to create a video with missing fields', async () => {
            const res = await request(app)
                .post('/api/videos')
                .send({
                    title: 'Incomplete Video',
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'All fields are required');
        });
    });

    describe('GET /api/videos/:id', () => {
        it('should return a single video by ID', async () => {
            const newVideo = await request(app)
                .post('/api/videos')
                .send({
                    title: 'Specific Video',
                    description: 'Video for testing',
                    url: 'http://example.com/specific.mp4',
                });

            const videoId = newVideo.body.video._id;

            const res = await request(app).get(`/api/videos/${videoId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('_id', videoId);
            expect(res.body).toHaveProperty('title', 'Specific Video');
        });

        it('should return 404 if video not found', async () => {
            const res = await request(app).get('/api/videos/invalidVideoId');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Video not found');
        });
    });

    describe('DELETE /api/videos/:id', () => {
        it('should delete a video by ID', async () => {
            const newVideo = await request(app)
                .post('/api/videos')
                .send({
                    title: 'Video to Delete',
                    description: 'This video will be deleted',
                    url: 'http://example.com/delete.mp4',
                });

            const videoId = newVideo.body.video._id;

            const res = await request(app).delete(`/api/videos/${videoId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('message', 'Video deleted successfully');
        });

        it('should return 404 if video to delete is not found', async () => {
            const res = await request(app).delete('/api/videos/invalidVideoId');
            expect(res.statusCode).toEqual(404);
            expect(res.body).toHaveProperty('message', 'Video not found');
        });
    });
});
