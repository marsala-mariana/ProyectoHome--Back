const express = require("express");
const router = express.Router();

const routerUsers = require("./User");
router.use("/users", routerUsers);

module.exports = router;
