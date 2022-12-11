const router = require('express').Router();
const reservationController = require('../controllers/ReservationController');

router.route('/my-reservations/:email').get(reservationController.myReservations);
router.route('/new').post(reservationController.newDraft);

module.exports = router;