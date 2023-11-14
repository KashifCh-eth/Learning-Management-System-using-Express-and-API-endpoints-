const { model } = require("../models/index");

const getStudent = async () => {
  const student = await model.student.findAll();
  return student;
};
const createStudent = async (data) => {
  const student = await model.student.create(data);
  return student;
};
const updateStudent = async () => {};
const deleteStudent = async () => {};

module.exports = { getStudent, createStudent, updateStudent, deleteStudent };
