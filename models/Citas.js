const S = require("sequelize");
const db = require("../db");

class Citas extends S.Model {}

Citas.init(
  {
    idUsuario: {
      type: S.INTEGER,
      allowNull: false,
    },
    idPropiedades: {
      type: S.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    telefono: {
      type: S.BIGINT,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    mensaje: {
      type: S.TEXT,
    },
  },
  { sequelize: db, modelName: "citas" }
);

module.exports = Citas;
