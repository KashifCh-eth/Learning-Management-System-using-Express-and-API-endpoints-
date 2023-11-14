var express = require('express');
var router = express.Router();
const {getStudent , createStudent , updateStudent , deleteStudent} = require("../controller/studentController");

/* GET student listing. */
router.get('/getstudent', getStudent);
/* post student listing. */
router.post('/createstudent', createStudent);
/* put student listing. */
router.put('/updatestudent', updateStudent);
/* delete student listing. */
router.delete('/deletestudent', deleteStudent);

module.exports = router;