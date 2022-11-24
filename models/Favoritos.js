const S = require("sequelize");
const db = require("../db");

class Favorito extends S.Model {}

Favorito.init(
  {
    idUsuario: {
      type: S.INTEGER,
      allowNull: false,
    },
    idPropiedades: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorito" }
);

module.exports = Favorito;
