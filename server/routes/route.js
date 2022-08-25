const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");
const loginController = require("../controller/login");

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
