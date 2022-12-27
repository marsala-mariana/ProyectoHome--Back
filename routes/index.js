const express = require("express");
const router = express.Router();

const routerUsers = require("./User");
const routerpropiedades = require("./Propiedades");
const routerfavorito = require("./Favoritos");
const routerCitas = require("./Citas");

router.use("/users", routerUsers);
router.use("/propiedades", routerpropiedades);
router.use("/favorito", routerfavorito);
router.use("/cita", routerCitas);

module.exports = router;
