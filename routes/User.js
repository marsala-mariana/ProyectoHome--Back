const express = require("express");
const routerUsers = express.Router();
const { User } = require("../models");

const { generateToken, validateToken } = require("../config/tokens");

routerUsers.post("/registro", (req, res) => {
  User.create(req.body).then((user) => {
    console.log(user, "USER");
    res.status(201).send(user);
  });
});

routerUsers.post("/login", (req, res) => {
  const { email, contraseña } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contraseña).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        contraseña: user.contraseña,
        nombre: user.nombre,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});
module.exports = routerUsers;
