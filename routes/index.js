const express = require("express");
const router = express.Router();

const routerUsers = require("./User");
const routerpropiedades = require("./Propiedades");
const routerfavorito = require("./Favoritos");

router.use("/users", routerUsers);
router.use("/propiedades", routerpropiedades);
router.use("/favorito", routerfavorito);

module.exports = router;
