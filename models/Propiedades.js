const S = require("sequelize");
const db = require("../db");

class Propiedades extends S.Model {}

Propiedades.init(
  {
    ubicacion: {
      type: S.STRING,
      allowNull: false,
    },
    estado: {
      type: S.STRING,
      allowNull: false,
    },
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    barrio: {
      type: S.STRING,

      allowNull: false,
    },
    pais: {
      type: S.STRING,

      allowNull: false,
    },
    disponibilidad: {
      type: S.STRING,
      allowNull: false,
    },
    precio: {
      type: S.BIGINT,
      allowNull: false,
    },
    descripcion: {
      type: S.TEXT,
      allowNull: false,
    },
    imagen: {
      type: S.ARRAY(S.STRING),
      allowNull: false,
    },
    categoria: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "propiedades" }
);

module.exports = Propiedades;
