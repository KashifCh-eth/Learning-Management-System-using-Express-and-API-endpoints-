const { DataTypes } = require("sequelize");
const Sequelize = require("../../dbconnection/db");
const course = Sequelize.define("course", {
    CourseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    CourseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = course