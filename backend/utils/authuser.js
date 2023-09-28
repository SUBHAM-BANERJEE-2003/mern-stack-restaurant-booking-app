const {findUserByEmailAndPassword } = require('./usertodb.js');

async function authenticateUser(req, email, password) {
  const user = await findUserByEmailAndPassword(email, password);
  if (user) {
    return { success: true, user };
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
}

module.exports = authenticateUser;
