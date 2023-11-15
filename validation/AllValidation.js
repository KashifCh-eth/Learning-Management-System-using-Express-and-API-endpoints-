const Joi = require("joi");
const user = Joi.object().keys({
  UserId: Joi.number().optional(),
  Username: Joi.string().required(),
  Password: Joi.string().required(),
  Email: Joi.string().email().required(),
});

const teacher = Joi.object().keys({
  TeacherId: Joi.number().optional(),
  Specialization: Joi.string().required(),
});

const student = Joi.object().keys({
  StudentId: Joi.number().optional(),
  Major: Joi.string().required(),
  userUserId:Joi.number().required(),
});

const course = Joi.object().keys({
  CourseId: Joi.number().optional(),
  CourseName: Joi.string().required(),
  Description: Joi.string().required(),
});

const courseStudent = Joi.object().keys({
  teacherID: Joi.number().required(),
  courseId: Joi.number().required(),
});

const courseTeacher = Joi.object().keys({
  teacherID:Joi.number().required(),
  courseId:Joi.number().required(),
});


module.exports = { user, course, teacher, student , courseStudent , courseTeacher };
