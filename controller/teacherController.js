const teacherService = require("../services/teacherService");
const { teacher } = require("../validation/AllValidation");

const getTeacher = async (req, res) => {
  const Teacher = await teacherService.getTeacher();
  res.send(Teacher);
};
const createTeacher = async (req, res) => {
  const data = req.body;
  const { value, error } = teacher.validate(data);
  if (error !== undefined) {
    console.log(error);
  } else {
    const teacher = await teacherService.createTeacher(value);
    res.send(teacher);
  }
};
const updateTeacher = async (req, res) => {};
const deleteTeacher = async (req, res) => {};

module.exports = { createTeacher, updateTeacher, deleteTeacher, getTeacher };
