class Reservation {
  constructor(id, restaurantId, mealId, availableTimesListId, status, owner) {
    this._id = id;
    this._restaurantId = restaurantId;
    this._mealId = mealId;
    this._availableTimesListId = availableTimesListId;
    this._status = status;
    this._owner = owner;
  }

  get() {
    return {
      id: this._id,
      restaurantId: this._restaurantId,
      mealId: this._mealId,
      availableTimesListId: this._availableTimesListId,
      status: this._status,
      owner: this._owner,
    };
  }

  get id() {
    const id = this._id;
    return id;
  }

  get restaurant() {
    const restaurant = this._restaurantId;
    return restaurant;
  }

  get meal() {
    const meal = this._mealId;
    return meal;
  }

  get availableTimes() {
    const availablesTimes = this._availableTimesListId;
    return availablesTimes;
  }

  get status() {
    const status = this._status;
    return status;
  }

  get owner() {
    const owner = this._owner;
    return owner;
  }
}

module.exports = Reservation;
