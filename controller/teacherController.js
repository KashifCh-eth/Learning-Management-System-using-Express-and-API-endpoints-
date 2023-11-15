const teacherService = require("../services/teacherService");
const { teacher, courseTeacher } = require("../validation/AllValidation");

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
const teacherAssigned = async (req, res) => {
  const data = req.body;
  console.log(`Dataof contoller`, data);
  const { value, error } = courseTeacher.validate(data);
  if (error !== undefined) {
    console.log(error);
  } else {
    const teacher = await teacherService.teacherAssigned(value);
    res.send(teacher);
  }
};
const getAssigned = async (req, res) => {
  const id = req.params.id;
  const getAss = await teacherService.getAssigned(id);
  res.send(getAss);
};

module.exports = {
  createTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacher,
  teacherAssigned,
  getAssigned,
};
