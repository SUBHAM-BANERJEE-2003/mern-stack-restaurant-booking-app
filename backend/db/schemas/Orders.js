const mongoose = require("mongoose");

const Orders = mongoose.Schema({
    food_id: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
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