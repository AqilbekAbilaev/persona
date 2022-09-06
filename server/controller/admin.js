const User = require("../model/user");

const addAdmin = async (req, res) => {
  await User.updateMany(
    { _id: { $in: res.locals.params } },
    { $set: { is_admin: true } }
  );
  const updatedUsers = await User.find();
  return res.json(updatedUsers);
};

const removeAdmin = async (req, res) => {
  await User.updateMany(
    { _id: { $in: res.locals.params } },
    { $set: { is_admin: false } }
  );

  const updatedUsers = await User.find();
  return res.json(updatedUsers);
};

module.exports = {
  addAdmin,
  removeAdmin
};
