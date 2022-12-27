const express = require("express");
const routerCitas = express.Router();

const { Citas } = require("../models/index");
const { User } = require("../models/index");

routerCitas.get(":id", (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) =>
    Citas.findAll({ where: { idUsuario: user.id } }).then((result) =>
      res.send(result)
    )
  );
});

routerCitas.post("/agrega/:id", (req, res) => {
  Citas.create(req.body)
    .then((resultad) => res.send(resultad))
    .catch((error) => console.log(error, "ERRROR"));
});

routerCitas.delete("/eliminar/:id", (req, res) => {
  const id = req.params.id;
  Citas.destroy({ where: { id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error, " NO se elimino"));
});

module.exports = routerCitas;
