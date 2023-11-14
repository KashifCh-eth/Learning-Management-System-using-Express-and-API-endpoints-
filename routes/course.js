var express = require('express');
var router = express.Router();
const { getCourse, createCourse, updateCourse, deleteCourse } = require("../controller/courseController");

/* GET student listing. */
router.get('/getcourse', getCourse);
/* post student listing. */
router.post('/createcourse', createCourse);
/* put student listing. */
router.put('/updatecourse', updateCourse);
/* delete student listing. */
router.delete('/deletecourse', deleteCourse);

module.exports = router;