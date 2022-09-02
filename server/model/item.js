const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  name: String,
  tag: String,
  parent: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("items", item);
