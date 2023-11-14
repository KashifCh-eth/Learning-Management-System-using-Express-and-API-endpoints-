const { model } = require("../models/index");

const getTeacher = async () => {
  const teacher = model.teacher.findAll();
  return teacher;
};
const createTeacher = async (body) => {
  const teacher = await model.teacher.create(body);
  return teacher;
};
const updateTeacher = async () => {};
const deleteTeacher = async () => {};
module.exports = { getTeacher, createTeacher, updateTeacher, deleteTeacher };
