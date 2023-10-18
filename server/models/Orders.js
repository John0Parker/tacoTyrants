const mongoose = require('mongoose');

const ToppingsSchema = mongoose.Schema({
    top1: {
        type: Boolean, 
        required: true
    },
    top2: {
        type: Boolean, 
        required: true
    },
    top3: {
        type: Boolean, 
        required: true
    },
    top4: {
        type: Boolean, 
        required: true
    },
    top5: {
        type: Boolean, 
        required: true
    },
    top6: {
        type: Boolean, 
        required: true
    }
}, {timestamps: true})

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, "A name is required"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    shell: {
        type: String,
        enum: ['Hard Flour', 'Soft Flour', 'Hard Corn', 'Soft Corn'],
        required: [true, "Please choose a shell!"]
    },
    meat: {
        type: String,
        enum: ['Ground Beef', 'Shredded Chicken', 'Carne Asada', 'Fish', 'Pork'],
        required: [true, "Please choose a meat!"],
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Must be at least 1"]
    },
    notes: {
        type: String,
    },
    toppings: ToppingsSchema,

}, {timestamps: true})

module.exports = mongoose.model("Order", OrderSchema);
