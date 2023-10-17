const mongoose = require('mongoose');

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
        minLength: [1]
    },
    includeTopping: {
        top1: { type: Boolean, required: true, default: false },
        top2: { type: Boolean, required: true, default: false },
        top3: { type: Boolean, required: true, default: false },
        top4: { type: Boolean, required: true, default: false },
        top5: { type: Boolean, required: true, default: false },
        top6: { type: Boolean, required: true, default: false }
    },
    notes: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Order", OrderSchema);
