const mongoose = require('mongoose');

const RestaurantModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    descripstion: {
        type: String,
        required: true
    },
    comment: [{
        comment_description: {
            type: String,
        },
        comment_date: {
            type: Date,
            default: Date.now,
        },
    }]
},
    { timestamps: true }
)

module.exports = Restaurant = mongoose.model("Restaurant", RestaurantModel)