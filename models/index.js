const student = require("./Student/student");
const course = require("./Course/course");
const user = require("./User/user");
const teacher = require("./Teacher/teacher");
const  sequelize = require("../dbconnection/db");


user.hasOne(teacher, { onDelete: "CASCADE" });
teacher.belongsTo(user, { onDelete: "CASCADE" });
user.hasOne(student, { onDelete: "CASCADE" });
student.belongsTo(user, { onDelete: "CASCADE" });


student.belongsToMany(course, {
    onDelete: "CASCADE",
    through: "Student_course", // This will Juanction Table Name 
    foreignKey: {
        name: "studentID",  // In The Line We are Passing StudentID As a FKey 
        allowNull: false,
        unique: true,
    },

})
course.belongsToMany(student, {
    onDelete: "CASCADE",
    through: "Student_course", // This will Juanction Table Name 
    foreignKey: {
        name: "courseId",  // In The Line We are Passing StudentID As a FKey 
        allowNull: false,
        unique: true,
    },
})

teacher.belongsToMany(course, {
    onDelete: "CASCADE",
    through: "Teacher_course", // This will Juanction Table Name 
    foreignKey: {
        name: "teacherID",  // In The Line We are Passing StudentID As a FKey 
        allowNull: false,
        unique: true,
    },
})

course.belongsToMany(teacher, {
    onDelete: "CASCADE",
    through: "Teacher_course", // This will Juanction Table Name 
    foreignKey: {
        name: "courseId",  // In The Line We are Passing StudentID As a FKey 
        allowNull: false,
        unique: true,
    },
})


const model = sequelize.models;
module.exports = { model, sequelize };
