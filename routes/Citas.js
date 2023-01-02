const express = require("express");
const { validarAdmin } = require("../middlewares/admin");
const routerCitas = express.Router();

const { Citas } = require("../models/index");
const { User } = require("../models/index");

routerCitas.get("/ver/:id", validarAdmin, (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) =>
    Citas.findAll({ where: { idUsuario: user.id } }).then((resultado) =>
      res.send(resultado)
    )
  );
});

routerCitas.get("/", (req, res) => {
  Citas.findAll().then((prop) => res.send(prop));
});

routerCitas.post("/agrega/:id", (req, res) => {
  Citas.create(req.body)
    .then((resultad) => res.send(resultad))
    .catch((error) => console.log(error, "ERRROR"));
});

routerCitas.delete("/eliminar/:id", validarAdmin, (req, res) => {
  const id = req.params.id;
  Citas.destroy({ where: { id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error, " NO se elimino"));
});

module.exports = routerCitas;
