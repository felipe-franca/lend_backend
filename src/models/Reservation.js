class Reservation {
    constructor(id, restaurant, meal, availableTimes, status) {
        this._id = id;
        this._restaurant = restaurant;
        this._meal = meal;
        this._availableTimes = availableTimes;
        this._status = status
    }

    get id() {
        const id = this._id;
        return id;
    }

    get restaurant() {
        const restaurant = this._restaurant;
        return restaurant;
    }

    get meal() {
        const meal = this._meal;
        return meal;
    }

    get availableTimes() {
        const availablesTimes = this._availableTimes;
        return availablesTimes;
    }
}

module.exports = Reservation;