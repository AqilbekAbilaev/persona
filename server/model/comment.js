const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment = new Schema({
  text: String,
  from: String,
  date: Date,
  parent: String
});

module.exports = mongoose.model("comments", comment);
