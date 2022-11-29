const User = require("../models/User");

//Validacion para saber si el usuario es admin

const validarAdmin = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }).then((usuario) => {
    if (!usuario.admin) {
      return res.sendStatus(401);
    }
    next();
  });
};

module.exports = { validarAdmin };
