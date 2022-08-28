const User = require("../model/user");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ message: "No users found" });
  res.json(users);
};

const deleteUsers = async (req, res) => {
  await User.deleteMany({ _id: { $in: res.locals.params } });
  const restUsers = await User.find();
  return res.json(restUsers);
};

const blockUsers = async (req, res) => {
  await User.updateMany(
    { _id: { $in: res.locals.params } },
    { $set: { is_blocked: true } }
  );
  const updatedUsers = await User.find();
  return res.json(updatedUsers);
};

const unblockUsers = async (req, res) => {
  await User.updateMany(
    { _id: { $in: res.locals.params } },
    { $set: { is_blocked: false } }
  );
  const updatedUsers = await User.find();
  return res.json(updatedUsers);
};
module.exports = { getAllUsers, deleteUsers, blockUsers, unblockUsers };
