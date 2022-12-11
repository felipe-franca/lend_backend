const express = require("express");
const app = express();

app.use(express.json());

const authRouter = require("./routes/auth.routes");
const reservationRouter = require("./routes/reservation.routes");
const restaurantsRouter = require("./routes/restaurant.routes");
const paymentRouter = require("./routes/payment.routes");

app.use("/auth", authRouter);
app.use("/reservations", reservationRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/payment", paymentRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
