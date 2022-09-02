const express = require("express");
const router = express.Router();
const multer = require("multer");

const collection = require("../controller/collection/collection.controller");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  dest: "uploads/",
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.get("/", collection.getCollections);
router.post("/", upload.single("image"), collection.createCollections);

module.exports = router;
