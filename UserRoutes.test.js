const request = require('supertest');
const app = require('../server'); // Import the server instance
const mongoose = require('mongoose');

describe('User Routes API Tests', () => {
    afterAll(async () => {
        await mongoose.connection.close(); // Close the database connection after all tests
    });

    describe('POST /api/users/register', () => {
        it('should register a new user', async () => {
            const res = await request(app)
                .post('/api/users/register')
                .send({
                    username: 'testuser',
                    email: 'testuser@example.com',
                    password: 'password123',
                });

            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('message', 'User registered successfully');
            expect(res.body).toHaveProperty('user');
        });

        it('should fail to register with missing fields', async () => {
            const res = await request(app)
                .post('/api/users/register')
                .send({
                    email: 'testuser@example.com',
                });

            expect(res.statusCode).toEqual(400);
            expect(res.body).toHaveProperty('message', 'All fields are required');
        });
    });

    describe('POST /api/users/login', () => {
        it('should login a user with valid credentials', async () => {
            const res = await request(app)
                .post('/api/users/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'password123',
                });

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('token');
            expect(res.body).toHaveProperty('message', 'Login successful');
        });

        it('should fail to login with invalid credentials', async () => {
            const res = await request(app)
                .post('/api/users/login')
                .send({
                    email: 'wronguser@example.com',
                    password: 'wrongpassword',
                });

            expect(res.statusCode).toEqual(401);
            expect(res.body).toHaveProperty('message', 'Invalid email or password');
        });
    });

    describe('GET /api/users/profile', () => {
        it('should return the user profile when authenticated', async () => {
            const loginRes = await request(app)
                .post('/api/users/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'password123',
                });

            const token = loginRes.body.token;

            const res = await request(app)
                .get('/api/users/profile')
                .set('Authorization', `Bearer ${token}`);

            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('email', 'testuser@example.com');
        });

        it('should return 401 if not authenticated', async () => {
            const res = await request(app).get('/api/users/profile');
            expect(res.statusCode).toEqual(401);
            expect(res.body).toHaveProperty('message', 'Unauthorized');
        });
    });
});
