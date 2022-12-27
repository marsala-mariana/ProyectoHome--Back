const User = require("./User");
const Propiedades = require("./Propiedades");
const Favorito = require("./Favoritos");
const Citas = require("./Citas");

User.belongsTo(Favorito, { through: "elegidos" });
Favorito.belongsTo(User, { through: "elegidos" });

User.belongsToMany(Citas, { through: "contactar" });
Citas.belongsToMany(User, { through: "contactar" });

//Favorito.hasOne(Propiedades);
//Propiedades.belongsTo(Favorito);

module.exports = { User, Propiedades, Favorito, Citas };
