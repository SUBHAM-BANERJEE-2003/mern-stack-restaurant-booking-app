require('dotenv').config();
const jwt = require('jsonwebtoken');
const secretKey = process.env.SESSION_PASS;

function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: '1h', // Token expires in 1 hour
  });
}

function verifyToken(token) {
  try {
    // Remove the "Bearer" prefix if present
    if (token.startsWith('Bearer ')) {
      token = token.slice(7);
    }
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.error('JWT Verification Error:', err);
    return null; // Token is invalid
  }
}
module.exports = { generateToken, verifyToken };
