const userService = require("../services/userService");
const { user } = require("../validation/AllValidation");

const getUser = async (req, res) => {
  const user = await userService.getUser();
  res.send(user);
};
const createUser = async (req, res) => {
  const body = req.body;
//   console.log(body);
  const { value , error } = user.validate(body);
//   console.log(value , error);
  if (error !== undefined) {
    console.log("Error:", error);
  } else {
    const user = await userService.createUser(value);
    res.send(user);
  }
};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

module.exports = { createUser, updateUser, deleteUser, getUser };
