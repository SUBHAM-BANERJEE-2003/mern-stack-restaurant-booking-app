const mongoose = require('../db/conn');
const User = require("../db/schemas/User");

async function addUser(name, email, password, age) {
    try {
        const user = await User.create({
            name: name,
            email: email,
            password: password,
            age: age
        });
        console.log('User created');
    } catch (e) {
        console.error('Error creating user:', e.message);
    }
}

async function getUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        if (user) {
            console.log('User already exists');
            return user; // Return the user object if found
        } else {
            console.log('User not found');
            return null; // Return null if not found
        }
    } catch (e) {
        console.error('Error finding userb by username and email:', e.message);
        return null;
    }
}

async function getUserByUsername(name) {
    try {
        const user = await User.findOne({ name });
        if (user) {
            console.log('User already exists',);
            return user; // Return the user object if found
        } else {
            console.log('User not found');
            return null; // Return null if not found
        }
    } catch (e) {
        console.error('Error finding userb by username and email:', e.message);
        return null;
    }
}

async function findUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        if (user) {
            console.log('User found by email');
            return user; // Return the user object if found
        } else {
            console.log('User not found by email');
            return null; // Return null if not found
        }
    } catch (e) {
        console.error('Error finding user by email:', e.message);
        return null;
    }
}


async function deleteUserByName(name) {
    try {
        const result = await User.deleteOne({ name });
        if (result.deletedCount === 1) {
            console.log('User deleted successfully');
        } else {
            console.log('User not found or not deleted');
        }
    } catch (e) {
        console.error('Error deleting user:', e.message);
    }
}

// Export the functions so they can be used in other files
module.exports = {
    addUser,
    findUserByEmail,
    deleteUserByName,
    getUserByEmail,
    getUserByUsername
};
