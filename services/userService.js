const { model } = require("../models/index");

const getUser = async () => {
  const user = await model.user.findAll();
  return user;
};
const createUser = async (body) => {
  console.log(`body inside of service` , body)
  const user = await model.user.create(body);
  return user;
};
const updateUser = async () => {};
const deleteUser = async () => {};

module.exports = { getUser, createUser, updateUser, deleteUser };
