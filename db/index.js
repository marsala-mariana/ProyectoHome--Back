const Sequelize = require("sequelize");

const db = new Sequelize(
  "propiedades",
  "propiedades_usuario",
  "8L5AHNAfIIbS2JKDoyeeHNWfXzcRFkyg",
  {
    host: "dpg-cfeht3mn6mpu0ud8c1hg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
