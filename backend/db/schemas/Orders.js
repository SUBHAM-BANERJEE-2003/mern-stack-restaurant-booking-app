const mongoose = require("mongoose");

const Orders = mongoose.Schema({
    food_id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        max: 25
    },
    paymentmode: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalamount: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Orders", Orders);