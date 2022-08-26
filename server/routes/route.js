const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");
const loginController = require("../controller/login");
const users = require("../controller/users");

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/users", users.getAllUsers);
router.delete("/users:ids", users.deleteUsers)
module.exports = router;
