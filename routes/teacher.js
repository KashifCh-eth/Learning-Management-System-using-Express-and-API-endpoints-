var express = require("express");
var router = express.Router();
const {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  teacherAssigned,
  getAssigned,

} = require("../controller/teacherController");

/* GET teacher listing. */
router.get("/getteacher", getTeacher);
/* post teacher listing. */
router.post("/createteacher", createTeacher);
/* put teacher listing. */
router.put("/updateteacher", updateTeacher);
/* delete teacher listing. */
router.delete("/deleteteacher", deleteTeacher);

router.post("/assigned", teacherAssigned);

router.get("/tfcourse/:id", getAssigned);

module.exports = router;
