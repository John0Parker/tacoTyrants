const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, "Address is required"],
        minLength: [8, "Address must be at least 8 characters"]
    },
    hours: {
        type: String,
        required: [true, "Hours is required"],
        minLength: [2, "Hours must be at least 2 characters"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Phone Number is required"],
        min: [10, "Phone Number must be at least 10 digits"]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store Number is required"],
        min: [1, "Store Number must be greater than 0"]
    },
    locationImage: {
        type: String,
        required: [true, "Image is required"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Location", LocationSchema);