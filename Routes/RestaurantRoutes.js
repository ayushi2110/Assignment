const express = require('express');

const router = express.Router();

 

const { addRestaurants, restaurantList, singleRestaurant } = require('../Controllers/RestaurantController');

 

// Add routes

router.route("/add-restaurant").post(addRestaurants);

router.route("/list-restaurant").get(restaurantList);

router.route("/restaurant/:id").get(singleRestaurant);

 

module.exports = router;
