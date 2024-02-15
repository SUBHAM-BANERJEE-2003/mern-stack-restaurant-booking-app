const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
    foodname: {
        type: String,
        required: true,
    },
    imgpath: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    price: Number,
    Category: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model("Menus", foodSchema);