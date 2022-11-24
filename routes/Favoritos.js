const express = require("express");
const router = express.Router();

const { Favorito } = require("../models/index");
const { User } = require("../models/index");

//traigo todos los favoritos de un usuario
router.get("/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: { Favorito } }).then(
    (user) => res.send(user)
  );
});

//agregar a favoritos
router.post("/agregar/:id", (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) =>
    Favorito.create(req.body)
      .then((fav) => user.addFavorito(fav))
      .then((resultado) => res.send(resultado))
      .catch((error) => console.log(error, "ERRROR"))
  );
});

//borrar un favorito
router.delete("/borrar/:id", (req, res) => {
  const id = req.params.id;
  Favorito.destroy({ where: { id } }).then(() => res.sendStatus(204));
});

module.exports = router;
