class DraftReservation {
  constructor(id, restaurantId, userEmail, mealId, availableTimesList, owner) {
    this._id = id;
    this._restaurantId = restaurantId;
    this._userEmail = userEmail;
    this._mealId = mealId;
    this._availableTimesList = availableTimesList;
    this._owner = owner;
  }

  get() {
    return {
      id: this._id,
      restaurantId: this._restaurantId,
      userEmail: this._userEmail,
      mealId: this._mealId,
      availableTimesListId: this._availableTimesList,
    };
  }

  get id() {
    const id = this._id;
    return id;
  }

  get restaurantId() {
    const restaurantId = this._restaurantId;
    return restaurantId;
  }

  get userEmail() {
    const userEmail = this._userEmail;
    return userEmail;
  }

  get mealId() {
    const mealId = this._mealId;
    return mealId;
  }

  get availableTimesListId() {
    const availablesTimesList = this._availableTimesList;
    return availablesTimesList;
  }

  get owner() {
    const owner = this._owner;
    return owner;
  }
}

module.exports = DraftReservation;
