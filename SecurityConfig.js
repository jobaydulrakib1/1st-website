const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token valid for 30 days
    });
};

// Verify JWT Token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid or Expired Token');
    }
};

// Hash Password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Compare Password
const comparePassword = async (enteredPassword, storedPassword) => {
    return bcrypt.compare(enteredPassword, storedPassword);
};

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
};
