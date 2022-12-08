const Reservation = require('../models/Reservation');

const reservationsList = [];
let lastId = 0;

exports.myReservations = (req, res) => {
  const {email} = req.params;

  const reservations = reservationsList.reduce((acc, curr) => {
    if (curr.email == email) acc = curr;
    return acc;
  }, []);

  res.json(reservations);
};

exports.new = (req, res) => {
  const {restaurant, meal, availableTimes} = req.body;

  const reservation = new Reservation(getNextId(), restaurant, meal, availableTimes, 'confirmed');

  reservationsList.push(reservation);

  res.send(reservation);
}

function getNextId() {
  return lastId += 1;
}