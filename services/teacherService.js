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
const teacherAssigned = async (value) => {
  console.log("Assigend Id for course", value);
  const Ass = await model.Teacher_course.create(value);
  return Ass;
};
const getAssigned = async (id) => {
  console.log(id);
  const Ass = await model.teacher.findByPk(id, {
    include: [
      {
        model: model.teacher,
        model: model.course,
        through: model.Teacher_course,
      },
    ],
  });
  if (Ass) {
    return Ass;
  } else {
    console.log("No course enroled by this student");
  }
};

module.exports = {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  teacherAssigned,
  getAssigned,
};
