const studentService = require("../services/studentService");
const { student } = require("../validation/AllValidation");

const getStudent = async (req, res) => {
  const student = await studentService.getStudent();
  res.send(student);
};
const createStudent = async (req, res) => {
  const data = req.body;
  const { value, error } = student.validate(data);
  if (error !== undefined) {
    console.log(error);
  } else {
    const student = await studentService.createStudent(value);
    res.send(student);
  }
};
const updateStudent = async (req, res) => {};
const deleteStudent = async (req, res) => {};

module.exports = { createStudent, updateStudent, deleteStudent, getStudent };
