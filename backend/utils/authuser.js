const { findUserByEmail } = require('./usertodb.js');
const bcrypt = require('bcryptjs');

async function authenticateUser(req, email, password) {
  try {
    const user = await findUserByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return { success: true, user };
      } else {
        return { success: false, message: 'Invalid email or password' };
      }
    } else {
      return { success: false, message: 'User not found' };
    }
  } catch (error) {
    console.error('Error authenticating user:', error.message);
    return { success: false, message: 'Internal server error' };
  }
}


module.exports = authenticateUser;
