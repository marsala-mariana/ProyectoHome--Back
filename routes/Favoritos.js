const express = require("express");
const router = express.Router();

const { Favorito } = require("../models/index");
const { User } = require("../models/index");

//traigo todos los favoritos de un usuario
router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) =>
    Favorito.findAll({ where: { idUsuario: user.id } }).then((resultado) =>
      res.send(resultado)
    )
  );
});

//agregar a favoritos
router.post("/agregar/:id", (req, res) => {
  Favorito.create(req.body)
    .then((resultado) => res.send(resultado))
    .catch((error) => console.log(error, "ERRROR"));
});

//borrar un favorito
router.delete("/borrar/:id", (req, res) => {
  const id = req.params.id;
  Favorito.destroy({ where: { id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error, "NO SE ELIMINO"));
});

module.exports = router;
