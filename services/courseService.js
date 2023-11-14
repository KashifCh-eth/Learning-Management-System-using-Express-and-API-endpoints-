const { model } = require("../models/index");

const getCourse = async () => {
  const course = await model.course.findAll();
  return course;
};
const createCourse = async (data) => {
  const course = await model.course.create(data);
  return course;
};
const updateCourse = async () => {};
const deleteCourse = async () => {};

module.exports = { getCourse, createCourse, updateCourse, deleteCourse };
