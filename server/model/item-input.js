const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item_input = new Schema({
  name: String,
  type: String,
  parent: String
});

module.exports = mongoose.model("item_inputs", item_input);
