const studentService = require("../services/studentService");
const { student, courseStudent } = require("../validation/AllValidation");

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
const studentEnrolment = async (req, res) => {
  const data = req.body;
  const { value, error } = courseStudent.validate(data);
  if (error !== undefined) {
    console.log(error);
  } else {
    const coursestudent = await studentService.studentEnrolment(value);
    res.send(coursestudent);
  }
};
const getEnrolment = async (req, res) => {
  const id = req.params.id;
  const coursestudent = await studentService.getEnrolment(id);
  res.send(coursestudent);
};

module.exports = {
  createStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  studentEnrolment,
  getEnrolment,
};
