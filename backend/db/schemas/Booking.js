const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    registration_id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        max: 25
    },
    Day: {
        type: String,
        required: true,
        unique: true,
    },
    Timeslot: {
        type: String,
        required: true,
        unique: true,
    },
    Datetime: {
        type: Date,
        required: true
    },
    Status: {
        type: String,
        required: true,
    },
});