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
router.delete("/users/:id", checkParams, users.deleteUsers);
router.patch("/users/:id", checkParams, users.blockUsers);
router.patch("/users/unblock/:id", checkParams, users.unblockUsers);

router.post("/admin/:id", checkParams, admin.addAdmin);
router.patch("/admin/remove/:id", checkParams, admin.removeAdmin);

router.post("/social_auth", handleSocialAuth);

router.get("/topics", require("../controller/create").topicController);
router.post("/topics", require("../controller/create").createTopicController);

router.get("/tags", require("../controller/create").tagController);
router.post("/tags", require("../controller/create").createTagController);

module.exports = router;
