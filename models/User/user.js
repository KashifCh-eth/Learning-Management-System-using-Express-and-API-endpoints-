const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const user = Sequelize.define(
  "user",
  {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = user;
