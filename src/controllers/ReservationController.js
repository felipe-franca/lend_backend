const restaurantsList = require('../sample/dataStructure');
const Reservation = require('../models/Reservation');
const DraftReservation = require('../models/DraftReservation');

let lastDraftId = 0;
let lastReservationId = 0;
const reservationsMadeList = [];
const draftReservationsList = [];

exports.myReservations = (req, res) => {
  const {email} = req.params;

  const reservations = reservationsMadeList.filter(reservation => {
    if (reservation.owner == email) return reservation;
  });

  const reservationsResume = [];

  reservations.forEach(reservation => {
    const _restaurant = restaurantsList.reduce((acc, curr) => {
      if (curr.id == reservation.restaurantId) acc = curr;
      return acc;
    }, []);

    const _meal = _restaurant.meals.reduce((acc, curr) => {
      if (curr.id == reservation.mealId) acc = curr;
      return acc;
    }, []);

    const _schedule = _meal.availableTimes.reduce((acc, curr) => {
      if (curr.id == reservation.availableTimesListId[0]) acc = curr;
      return acc;
    }, [])

    reservationsResume.push({
      restaurantName: _restaurant.title,
      reservationStatus: reservation.status,
      reservationDate: `Hora: ${_schedule.hour}, Mesa: ${_schedule.table}`,
      mealTitle: _meal.name,
      mealImage: _meal.image
    })
  });

  res.json(reservationsResume);
};

exports.newDraft = (req, res) => {
  const {availableTimesIdList, mealId, restaurantId, userEmail} = req.body;

  const dReservation = new DraftReservation(fetchNextDraftId(), restaurantId, userEmail, mealId, availableTimesIdList, userEmail);

  draftReservationsList.push(dReservation.get());
  res.send(dReservation.get());
}

function fetchNextDraftId() {
  return lastDraftId += 1;
}

exports.createReservation = (payment, req, res, next) => {
  const draftReservation = getCorrespondentDraft(payment.ownerEmail);

  const reservation = new Reservation(
    fetchNextReservationId(),
    draftReservation.restaurantId,
    draftReservation.mealId,
    draftReservation.availableTimesListId,
    "confirmed",
    payment.ownerEmail
  );

  reservationsMadeList.push(reservation.get());

  return  res.send(payment);
}

function fetchNextReservationId() {
  return lastReservationId += 1;
}

function getCorrespondentDraft(email) {
  return draftReservationsList.reduce((acc, curr) => {
    if (curr.userEmail === email) acc = curr;
    return acc;
  }, []);
}
