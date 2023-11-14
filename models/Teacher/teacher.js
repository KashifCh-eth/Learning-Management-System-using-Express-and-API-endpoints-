const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const teacher = Sequelize.define("teacher", {
    TeacherId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    Specialization: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = teacher