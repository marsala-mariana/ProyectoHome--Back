const express = require("express");
const router = express.Router();
const { Propiedades } = require("../models/index");
const { validarAdmin } = require("../middlewares/admin");

//trae todas las propiedades
router.get("/", (req, res) => {
  Propiedades.findAll().then((prop) => res.send(prop));
});

//por ID
router.get("/:id", (req, res) => {
  Propiedades.findByPk(req.params.id).then((prop) => res.send(prop));
});

//agregar
router.post("/agregar", validarAdmin, (req, res) => {
  Propiedades.create(req.body)
    .then((prop) => res.status(201).send(prop))
    .catch((error) => console.log(error, "ERRROR"));
});

//editar
router.put("/:id", validarAdmin, (req, res) => {
  const id = req.params.id;
  Propiedades.update(req.body, {
    where: {
      id,
    },
    returning: true,
  }).then((result) => {
    let objt = { updateResult: result[0] };
    res.send(objt);
  });
});

//borrar
router.delete("/:id", validarAdmin, (req, res) => {
  const id = req.params.id;
  Propiedades.destroy({ where: { id } }).then(() => res.sendStatus(202));
});

module.exports = router;
