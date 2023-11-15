const { model } = require("../models/index");

const getStudent = async () => {
  const student = await model.student.findAll({
    include: 
      {
        model: model.user,
      },
  });
  return student;
};
const createStudent = async (data) => {
  const student = await model.student.create(data);
  return student;
};
const updateStudent = async () => {};
const deleteStudent = async () => {};
const studentEnrolment = async (value) => {
  console.log(`Value of enrollmeant`, value);
  const enrol = await model.Student_course.create(value);
  return enrol;
};
const getEnrolment = async (id) => {
  console.log(id);
  const getstudent = await model.student.findByPk(id, {
    include: [
      { 
        model :model.user,
        model: model.course,
        through: model.Student_course,
      },
    ],
  });
  if (getstudent) {
    return getstudent;
  } else {
    console.log("No course enroled by this student");
  }
};

module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  studentEnrolment,
  getEnrolment,
};
