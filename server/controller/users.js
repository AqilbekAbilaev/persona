const User = require("../model/user");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users found" });
  res.json(users);
};

const deleteUsers = async (req, res) => {
  const params = req.params?.ids?.slice(1);
  if (!params) {
    return res.status(404).json({ message: "Invalid user id" });
  }
  const users = params?.split(",");
  const result = await User.deleteMany({ _id: { $in: users } });
  console.log(result);
  return res.json({ message: "Successfully removed users" });
};

module.exports = { getAllUsers, deleteUsers };
