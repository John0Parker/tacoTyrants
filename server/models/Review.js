const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true,'Please enter your first name'],
        minlength: [2,'First name must be at least 2 characters long']
    },
    lastName:{
        type: String,
        required:[true,'Please enter your last name'],
        minlength: [2,'Last name must be at least 2 characters long']
    },
    title:{
        type: String,
        required:[true, "Please include a title for the review"],
        minlength: [3, 'Title must be at least 3 characters long']
    },
    review:{
        type: String,
        required:[true, "Please include your review"],
        minlength: [3, 'Review must be at least 3 characters long']
    },
    rating:{
        type: Number,
        required:[true,'rating is required'],
        min: [1,'minimum rating it one'],
        max:[5,'maximum rating is 5']
    },
    dateOfOccurrence: {
        type: Date,
        required:[false, 'data is not required']
    }
    //to be included later=> location,user and menu item options
},{timestamps : true})//end review model

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;