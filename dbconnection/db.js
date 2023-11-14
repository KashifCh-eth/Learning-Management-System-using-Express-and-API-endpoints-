const { Sequelize } = require("sequelize");
const dbconfig = require("../dbconfig");
const database = new Sequelize(dbconfig.db);

database.authenticate().then(() => {
    console.log("DataBase Connected!");
}).catch((error) => {
    console.log(`error of connecting db`, error);
})

module.exports = database;