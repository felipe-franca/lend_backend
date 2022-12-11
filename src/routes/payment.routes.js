const router = require("express").Router();
const paymentController = require("../controllers/PaymentController");
const reservationController = require("../controllers/ReservationController");

router.route('/new').post(paymentController.payment, reservationController.createReservation);

module.exports = router;
