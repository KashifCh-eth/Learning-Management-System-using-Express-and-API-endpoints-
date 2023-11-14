const courseService = require("../services/courseService");
const { course } = require("../validation/AllValidation");

const getCourse = async (req, res) => {
  const Course = await courseService.getCourse();
  res.send(Course);
};
const createCourse = async (req, res) => {
  const data = req.body;
  const { value, error } = course.validate(data);
  if (error !== undefined) {
    console.log(error);
  } else {
    const course = await courseService.createCourse(value);
    res.send(course);
  }
};
const updateCourse = async (req, res) => {};
const deleteCourse = async (req, res) => {};

module.exports = { createCourse, updateCourse, deleteCourse, getCourse };
