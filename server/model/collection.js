const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collection = new Schema({
  name: String,
  topic: String,
  image: String,
  description: String,
  markdown: {
    type: Boolean,
    default: false
  },
  item_fields: Array
});

module.exports = mongoose.model("collections", collection);
