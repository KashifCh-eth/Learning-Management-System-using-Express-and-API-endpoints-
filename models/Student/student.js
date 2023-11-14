const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const student = Sequelize.define("student", {
    StudentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    Major: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = student