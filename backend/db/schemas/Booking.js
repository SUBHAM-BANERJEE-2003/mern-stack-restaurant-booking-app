const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    Day: {
        type: String,
        required: true,
    },
    Timeslot: {
        type: String,
        required: true,
    },
    Datetime: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
    },
});

bookingSchema.index({ Day: 1, Timeslot: 1 }, { unique: true }); // same day multiple timeslot not allowed

module.exports = mongoose.model("Booking", bookingSchema);