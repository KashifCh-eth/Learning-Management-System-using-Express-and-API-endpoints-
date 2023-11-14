var express = require('express');
var router = express.Router();
const { getUser, createUser, updateUser, deleteUser } = require('../controller/userController');

/* GET users listing. */
router.get('/getuser', getUser);
/* post users listing. */
router.post('/createuser', createUser);
/* put users listing. */
router.put('/updateuser', updateUser);
/* delete users listing. */
router.delete('/deleteuser', deleteUser);

module.exports = router;
