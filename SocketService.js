const { Server } = require('socket.io');

/**
 * Initialize the Socket.IO server.
 * @param {Object} httpServer - The HTTP server to attach the Socket.IO server to.
 * @returns {Object} The initialized Socket.IO server instance.
 */
const initializeSocketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: '*', // Allow all origins (configure this for production)
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log(`New client connected: ${socket.id}`);

        // Join a collaboration room
        socket.on('joinRoom', (roomId) => {
            socket.join(roomId);
            console.log(`Client ${socket.id} joined room: ${roomId}`);
        });

        // Handle real-time collaboration messages
        socket.on('collaborationData', ({ roomId, data }) => {
            console.log(`Data received in room ${roomId}:`, data);
            socket.to(roomId).emit('collaborationUpdate', data);
        });

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });

    return io;
};

module.exports = { initializeSocketServer };
