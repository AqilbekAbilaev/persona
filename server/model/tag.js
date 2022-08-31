const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Tags', tagSchema);