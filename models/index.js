const User = require("./User");
const Propiedades = require("./Propiedades");

const Favorito = require("./Favoritos");

User.belongsTo(Favorito, { through: "elegidos" });

Favorito.belongsTo(User, { through: "elegidos" });

//Favorito.hasOne(Propiedades);
//Propiedades.belongsTo(Favorito);

module.exports = { User, Propiedades, Favorito };
