const User = require("./User");
const Propiedades = require("./Propiedades");

const Favorito = require("./Favoritos");

User.hasMany(Favorito);

Favorito.belongsToMany(User, { through: "elegidos" });

//Favorito.hasOne(Propiedades);
//Propiedades.belongsTo(Favorito);

module.exports = { User, Propiedades, Favorito };
