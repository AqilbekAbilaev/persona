const socialAuthUser = require("../model/social_auth");

const handleSocialAuth = async (req, res) => {
  const { email, usrname } = req.body;
  if (email == "")
    return res.json({ message: "Invalid email or password" });

  const dup = await socialAuthUser.findOne({ email }).exec();
  if (dup) {
    return res.status(200).json({ success: "logged in" });
  }

  const result = await socialAuthUser.create({
    email,
    usrname
  });

  res.status(201).json({ success: "new user created" });
};

module.exports = handleSocialAuth;
