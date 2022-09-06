const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    tag: String,
    parent: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("items", item);
