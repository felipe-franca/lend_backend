const restaurantsList = require("../sample/dataStructure");

exports.getAll = (req, res) => {
  return res.send(restaurantsList);
};

exports.getMealByRestaurant = (req, res) => {
  const { id } = req.params;

  const restaurant = getRestauranteById(id);

  res.send(restaurant.meals);
};

exports.getAvailableTimes = (req, res) => {
  const { restId, mealId } = req.params;

  const restaurant = getRestauranteById(restId);
  const meal = getMealById(restaurant.meals, mealId);

  res.send(meal.availableTimes);
};

function getRestauranteById(id) {
  return restaurantsList.reduce((acc, curr) => {
    if (curr.id == id) acc = curr;
    return acc;
  }, []);
}

function getMealById(mealsList, id) {
  return mealsList.reduce((acc, curr) => {
    if (curr.id == id) acc = curr;
    return acc;
  }, []);
}
