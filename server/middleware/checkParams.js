const checkParams = (req, res, next) => {
  const params = req.params?.id;
  if (!params) {
    return res.status(404).json({ message: "Invalid user id" });
  }
  
  // Parsing data
  res.locals.params = params.split(",");

  next();
};

module.exports = checkParams;
