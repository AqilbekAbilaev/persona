const User = require("../model/user");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { email, pwd } = req.body;
  if (email == "" || pwd == "")
    return res.json({ message: "Invalid email or password" });

  let pswMatch;
  const user = await User.findOne({ email }).exec();
  if (user) {
    pswMatch = await bcrypt.compare(pwd, user.pwd);
  } else {
    return res.status(401).json("No user found");
  }

  return pswMatch ? res.status(200).json({'message': 'logged in'}) : res.status(401).json({'message': 'Invalid email or password'})
};

module.exports = loginController;
