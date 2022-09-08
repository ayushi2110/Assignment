const Restaurant = require('../Models/Restaurants');

 

/**

 * @route POST

 * @POST add-restaurant

 * @param {restaurant_name} req string

 * @param {address} req string

 * @param {descripstion} req string

 * @param {comment_description} req string

 * @desc Adding restaurant

 */

const addRestaurants = async (req, res) => {

    try {

 

        const addDetails = {};

        addDetails.restaurant_name = req.body.restaurant_name;

        addDetails.address = req.body.address;

        addDetails.descripstion = req.body.descripstion;

        addDetails.comment = {};

        addDetails.comment.comment_description = req.body.comment_description;

        const restaurantDetails = await Restaurant.create(addDetails)

        return res.json(restaurantDetails);

 

    } catch (error) {

        console.log(error.message)

        res.status(500).send('server error')

    }

}

 

/**

 * @route GET

 * @GET list-restaurant

 * @desc List of Restaurants

 */

const restaurantList = async (req, res) => {

    try {

        const lisOfRestaurants = await Restaurant.find();

        return res.status(200).send(lisOfRestaurants);

    } catch (error) {

        console.log(error.message)

        res.status(500).send('server error')

    }

}

 

/**

 *

 * @route GET

 * @GET restaurant/:id

 * @param {id} req Restaurant id

 * @desc Get Single Restaurant Details

 */

const singleRestaurant = async (req, res) => {

    try {

        const singleData = await Restaurant.findById(req.params.id);

        res.status(200).send(singleData);

    } catch (error) {

        console.log(error.message)

        res.status(500).send('server error')

    }

 

}

 

module.exports = { addRestaurants, restaurantList, singleRestaurant };

 

 
