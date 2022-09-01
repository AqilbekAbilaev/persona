const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collection = new Schema({
  name: String,
  topic: String,
  image: Image,
  description: String
});

module.exports = mongoose.model("collections", collection);
