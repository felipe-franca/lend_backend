const express = require("express");
const app = express();

app.use(express.json());

const authRouter = require('./routes/auth.routes');
const reservationRouter = require('./routes/reservation.routes');
const restaurantsRouter = require('./routes/restaurant.routes');

app.use('/auth', authRouter);
app.use('/reservations', reservationRouter);
app.use('/restaurants', restaurantsRouter)

app.post("/reservation/new", (req, res) => {
  console.log(req.body);

  res.send({
    id: 1,
    availableTimesIdList: [1],
    mealId: 1,
    restaurantId: 1,
    userEmail: "felipe.franca@mail.com",
  });
});

app.post("/payment/new", (req, res) => {
  console.log(req.body);

  res.send({
    id: 1,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
