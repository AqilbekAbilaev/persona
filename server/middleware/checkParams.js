const checkParams = (req, res, next) => {
  const params = req.params?.ids?.slice(1);
  console.log(params);
  if (!params) {
    return res.status(404).json({ message: "Invalid user id" });
  }
  
  // Parsing data
  res.locals.params = params.split(",");

  next();
};

module.exports = checkParams;
