const router = require("express").Router();
const restaurantController = require('../controllers/RestaurantController');

router.route('/all').get(restaurantController.getAll);
router.route('/:id/meals').get(restaurantController.getMealByRestaurant);
router.route('/:restId/available-times/:mealId').get(restaurantController.getAvailableTimes);

module.exports = router;