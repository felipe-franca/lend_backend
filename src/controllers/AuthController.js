const User = require("../models/User");

const usersList = [];

exports.registerAction = (req, res) => {
  const { email, password, name } = req.body;

  const user = new User(name, email, password);
  usersList.push(user);

  res.send({
    name: user.name,
    email: user.email,
  });
};

exports.signIn = (req, res) => {
    const { email, password } = req.body;

    const user = usersList.reduce((acc, curr) => {
      if (curr.email == email) acc = curr;
      return acc;
    }, []);

    if (!user) return res.status(404);

    if (user.password !== password) return res.status(404);

    res.send({
      name: user.name,
      email: user.email,
    });
};
