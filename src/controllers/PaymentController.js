const Payment = require("../models/Payment");

let id = 0;

exports.payment = (req, res, next) => {
  const { cardNumber, expiresIn, cvc, owner, ownerEmail } = req.body;
  const payment = new Payment(
    fetchNextId(),
    cardNumber,
    expiresIn,
    cvc,
    owner,
    ownerEmail
  );
  next(payment.get());
};

function fetchNextId() {
  return (id += 1);
}
