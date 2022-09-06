const express = require("express");
const router = express.Router();
const multer = require("multer");

const collection = require("../controller/collection");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() - 1662292799999 + file.originalname);
  },
});

const upload = multer({
  dest: "uploads/",
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.get("/items/comments", collection.getComments);
router.post("/items/comments", collection.createComment)
router.patch("/items/:id", collection.handleLike)
router.get("/", collection.getCollections);
router.get("/:id", collection.getCollection);
router.post("/", upload.single("image"), collection.createCollection);

router.get("/saveditems/get", collection.getSavedItems);
router.post("/saveitem", collection.saveItem);
router.post("/items", collection.setItem);
router.get("/:collectionId/:id", collection.getItem);


module.exports = router;
