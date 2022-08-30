const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");
const loginController = require("../controller/login");
const users = require("../controller/users");
const admin = require("../controller/admin");
const checkParams = require("../middleware/checkParams");
const handleSocialAuth = require("../controller/social_auth");

router.post("/register", registerController);
router.post("/login", loginController);

router.get("/users", users.getAllUsers);
router.delete("/users:ids", checkParams, users.deleteUsers);
router.patch("/users:ids", checkParams, users.blockUsers);
router.patch("/users/unblock:ids", checkParams, users.unblockUsers);

router.patch("/admin:ids", checkParams, admin.addAdmin);
router.patch("/admin/remove:ids", checkParams, admin.removeAdmin);

router.post("/social_auth", handleSocialAuth);
module.exports = router;
