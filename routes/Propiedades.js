const express = require("express");
const router = express.Router();
const { Propiedades } = require("../models/index");
const { validarAdmin } = require("../middlewares/admin");
const { Op } = require("sequelize");

//trae todas las propiedades
router.get("/", (req, res) => {
  Propiedades.findAll().then((prop) => res.send(prop));
});

//buscar propiedad
router.get("/busqueda/:busqueda", (req, res) => {
  Propiedades.findAll({
    where: {
      [Op.or]: [
        { barrio: req.params.busqueda },
        { pais: req.params.busqueda },
        { ubicacion: req.params.busqueda },
        { categoria: req.params.busqueda },
      ],
    },
  })
    .then((propied) => {
      res.send(propied);
    })
    .catch(() => console.log("Salio mal "));
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
