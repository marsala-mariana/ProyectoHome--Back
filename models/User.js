const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(contraseña, salt) {
    return bcrypt.hash(contraseña, salt);
  }

  validatePassword(contraseña) {
    return this.hash(contraseña, this.salt).then(
      (newhash) => newhash === this.contraseña
    );
  }
}

User.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    celular: {
      type: S.BIGINT,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
    },
    contraseña: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
    admin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;

  return user.hash(user.contraseña, salt).then((hash) => {
    user.contraseña = hash;
  });
});

module.exports = User;
