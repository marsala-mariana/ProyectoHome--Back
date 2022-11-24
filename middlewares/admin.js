const User = require("../models/User");

const validarAdmin = (req, res, next) => {
  // const administrador = req.body.email;
  User.findOne({ where: { email: req.body.email } }).then((usuario) => {
    if (!usuario.admin) {
      //  console.log("HOLA");

      return res.sendStatus(401);
    }
    next();
  });
};

module.exports = { validarAdmin };
