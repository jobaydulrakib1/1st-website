const activeRooms = new Map();

/**
 * Adds a client to a collaboration room.
 * @param {string} roomId - The room ID to join.
 * @param {string} clientId - The ID of the client joining the room.
 */
const joinRoom = (roomId, clientId) => {
    if (!activeRooms.has(roomId)) {
        activeRooms.set(roomId, new Set());
    }
    const roomClients = activeRooms.get(roomId);
    roomClients.add(clientId);
    console.log(`Client ${clientId} joined room: ${roomId}`);
};

/**
 * Removes a client from a collaboration room.
 * @param {string} roomId - The room ID to leave.
 * @param {string} clientId - The ID of the client leaving the room.
 */
const leaveRoom = (roomId, clientId) => {
    if (activeRooms.has(roomId)) {
        const roomClients = activeRooms.get(roomId);
        roomClients.delete(clientId);

        if (roomClients.size === 0) {
            activeRooms.delete(roomId);
            console.log(`Room ${roomId} is empty and has been removed.`);
        } else {
            console.log(`Client ${clientId} left room: ${roomId}`);
        }
    }
};

/**
 * Retrieves the active clients in a room.
 * @param {string} roomId - The room ID to query.
 * @returns {Array<string>} List of active client IDs in the room.
 */
const getActiveClients = (roomId) => {
    if (activeRooms.has(roomId)) {
        return Array.from(activeRooms.get(roomId));
    }
    return [];
};

module.exports = {
    joinRoom,
    leaveRoom,
    getActiveClients,
};
