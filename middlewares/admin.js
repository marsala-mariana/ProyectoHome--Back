//const User = require("../models/User");
const { validateToken } = require("../config/tokens");
//Validacion para saber si el usuario es admin

const validarAdmin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  console.log(user, "USER");
  if (!user.admin) return res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { validarAdmin };
/* User.findOne({ where: { email: req.body.email } }).then((usuario) => {
    if (!usuario.admin) {
      return res.sendStatus(401);
    }
    next();
  });*/
