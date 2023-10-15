const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    itemTitle:{
        type: String,
        required: [true, "Please provide a title for this food item."],
        minLength: [3, "The title of this food item must be at least 3 characters."]
    },
    itemDesc:{
        type: String,
        required: [true, "Please provide a description for this food item."],
        minLength: [3, "The description of this food item must be at least 3 characters."]
    },
    itemNum:{
        type: Number,
        required: [true, "Please provide a number for this food item."],

    },
    isDineInOnly:{
        type: Boolean
    },
    itemPrice:{
        type: Number,
        required: [true, "Please provide a price for this food item."],
        min: [.01, "The price of this food item must be at least $.01."]
    },
    itemImage:{
        type: String,
        reqired: [true, "Please provide an image url for this food item."]
    }
}, {timestamps:true})

module.exports = mongoose.model("FoodItemSchema", FoodItemSchema)