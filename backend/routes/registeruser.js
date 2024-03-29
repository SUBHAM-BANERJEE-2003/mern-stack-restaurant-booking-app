const express = require("express");
const user = require('../utils/usertodb');
const authenticateUser = require('../utils/authuser');
const recordRoutes = express.Router();
const { generateToken, verifyToken } = require('../utils/jwt');
const bcrypt = require('bcryptjs');
recordRoutes.route("/register").post(async function (req, res) {
  res.header('Access-Control-Allow-Credentials', true);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const age = req.body.age;
  const existingUserByUsername = await user.getUserByUsername(username);
  const existingUserByEmail = await user.getUserByEmail(email);

  if (existingUserByUsername || existingUserByEmail) {
    return res.status(400).json({ success: false, message: 'Username or Email already exists' });
  }
  else {
    const hashedPassword = await bcrypt.hash(password, 12);
    await user.addUser(username, email, hashedPassword, age);
    res.json({ message: 'Data received successfully' });
  }
});

recordRoutes.get('/loginserver', (req, res) => {
  res.send('This is login page');
});

recordRoutes.route("/loginserver").post(async function (req, res) {
  res.header('Access-Control-Allow-Credentials', true);
  const { email, password } = req.body;
  // Verify email and password here (You will need to implement this)
  const user = await authenticateUser(req, email, password);
  if (user.success) {
    // Email and password are correct
    const token = generateToken({ id: user.user._id, username: user.user.name });
    // Send the JWT token to the client
    res.json({ success: true, token });
  } else {
    // Email or password is incorrect
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

recordRoutes.route("/getusername").get(function (req, res) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ success: false, message: 'User not authenticated' });
  }

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
  const username = decodedToken.username;
  res.json({ success: true, username: username });
});
recordRoutes.get('/dashboard', (req, res) => {
  if (req.session.user) {
    const username = req.session.user.name;
    // Use the username as needed
    res.send(`Welcome, ${username}!`);
  } else {
    // User is not logged in, handle accordingly
    res.redirect('/loginserver');
  }
});
module.exports = recordRoutes;

