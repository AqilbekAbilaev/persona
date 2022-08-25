const User = require("../model/user");
const bcrypt = require("bcrypt");

const handleRegister = async (req, res) => {
  const { email, pwd } = req.body;
  if (email == "" || pwd == "")
    return res.json({ err_message: "Invalid email or password" });

  const dup = await User.findOne({ email }).exec();
  if (dup) {
    return res.status(409).json({ err_message: "Conflict with existing user" });
  }

  const encryptPwd = await bcrypt.hash(pwd, 5);

  const result = await User.create({
    email,
    pwd: encryptPwd,
  });

  console.log(result);

  res.status(201).json({ success: "new user created" });
};

module.exports = handleRegister;
