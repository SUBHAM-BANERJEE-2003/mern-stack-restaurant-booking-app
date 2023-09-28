const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        max:25
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    age: Number
});

module.exports = mongoose.model("User",userSchema);